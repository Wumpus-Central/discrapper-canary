async function t(e) {
    return null;
}
s.d(a, { pb: () => h, A: () => l });
class r extends Error {
    kind;
    constructor(e, a) {
        super(a), (this.name = "ArboriumError"), (this.kind = e);
    }
}
function n(e, a) {
    if (0 === a.length) return [0, 0];
    let s = o.encode(a),
        t = e._malloc(s.length);
    return e.HEAPU8.set(s, t), [t, s.length];
}
async function i(e) {
    return e instanceof URL ? p(e) : e instanceof Uint8Array ? e : new Uint8Array(e);
}
async function g(e) {
    if ("string" == typeof e) return e;
    let a = await p(e);
    return c.decode(a);
}
async function p(e) {
    let a = await t(e);
    if (a) return a;
    let s = await fetch(e);
    if (!s.ok) throw new r("asset-fetch-failed", `failed to fetch ${e.href}: ${s.status} ${s.statusText}`);
    return new Uint8Array(await s.arrayBuffer());
}
let o = new TextEncoder(),
    c = new TextDecoder();
async function l() {
    let e = await d(),
        [a, t] = await Promise.all([i(new URL(s(344525), s.b)), i(new URL(s(588591), s.b))]),
        r = await e({ wasmBinary: a }),
        n = await r.loadWebAssemblyModule(t, { loadAsync: !0 });
    return new b(r, n);
}
class b {
    host;
    abi;
    constructor(e, a) {
        (this.host = e), (this.abi = a);
    }
    async loadGrammar(e) {
        if (!e.languageId)
            throw new r(
                "grammar-registration-failed",
                "loadGrammar: languageId is required (must match the name referenced by injection queries)",
            );
        let [a, s, t, p] = await Promise.all([
                i(e.wasm),
                g(e.highlights),
                void 0 === e.injections ? "" : g(e.injections),
                void 0 === e.locals ? "" : g(e.locals),
            ]),
            o = (function (e, a) {
                if (void 0 !== a) {
                    let s = e[a];
                    if ("function" != typeof s)
                        throw new r(
                            "grammar-language-export-missing",
                            `grammar module has no function export named ${JSON.stringify(a)}`,
                        );
                    return s;
                }
                let s = Object.keys(e).filter((a) => a.startsWith("tree_sitter_") && "function" == typeof e[a]);
                if (0 === s.length)
                    throw new r(
                        "grammar-language-export-missing",
                        "grammar module has no function export starting with tree_sitter_",
                    );
                if (s.length > 1)
                    throw new r(
                        "grammar-language-export-missing",
                        `grammar module has multiple tree_sitter_* exports: ${s.join(", ")}. Pass options.languageExport to disambiguate.`,
                    );
                return e[s[0]];
            })(await this.host.loadWebAssemblyModule(a, { loadAsync: !0 }), e.languageExport)();
        if (!o) throw new r("grammar-registration-failed", "grammar tree_sitter_* export returned null");
        let [c, l] = n(this.host, e.languageId),
            [b, w] = n(this.host, s),
            [d, h] = n(this.host, t),
            [x, f] = n(this.host, p),
            u = 0;
        try {
            u = this.abi.arborium_rt_register_grammar(o, c, l, b, w, d, h, x, f);
        } finally {
            c && this.host._free(c), b && this.host._free(b), d && this.host._free(d), x && this.host._free(x);
        }
        if (0 === u)
            throw new r(
                "grammar-registration-failed",
                "arborium_rt_register_grammar returned 0 (query compile failure, bad language ptr, or empty name?)",
            );
        return new m(this, u, o, e.languageId);
    }
}
class m {
    runtime;
    id;
    languagePtr;
    languageId;
    #e = !1;
    constructor(e, a, s, t) {
        (this.runtime = e), (this.id = a), (this.languagePtr = s), (this.languageId = t);
    }
    createSession() {
        this.#a();
        let e = this.runtime.abi.arborium_rt_create_session(this.id);
        if (0 === e) throw new r("session-creation-failed", `arborium_rt_create_session(${this.id}) returned 0`);
        return new w(this, e);
    }
    unregister() {
        this.#e || (this.runtime.abi.arborium_rt_unregister_grammar(this.id), (this.#e = !0));
    }
    #a() {
        if (this.#e) throw new r("grammar-registration-failed", `grammar ${this.id} has been unregistered`);
    }
}
class w {
    grammar;
    id;
    #s = !1;
    constructor(e, a) {
        (this.grammar = e), (this.id = a);
    }
    setText(e) {
        this.#a();
        let [a, s] = n(this.grammar.runtime.host, e);
        try {
            this.grammar.runtime.abi.arborium_rt_set_text(this.id, a, s);
        } finally {
            a && this.grammar.runtime.host._free(a);
        }
    }
    parse() {
        return (
            this.#a(),
            this.#t(
                "parse-failed",
                (e, a) => this.grammar.runtime.abi.arborium_rt_parse_utf16(this.id, e, a),
                (e) => (0 === e.length ? { spans: [], injections: [] } : JSON.parse(e)),
            )
        );
    }
    highlightToSpans(e = {}) {
        this.#a();
        let a = e.maxInjectionDepth ?? 3,
            s = this.#t(
                "highlight-failed",
                (e, s) => this.grammar.runtime.abi.arborium_rt_highlight_to_spans_utf16(this.id, a, e, s),
                (e) => (0 === e.length ? { spans: [], missing_injections: [] } : JSON.parse(e)),
            );
        return { spans: s.spans, missingInjections: s.missing_injections };
    }
    highlightToHtml(e = {}) {
        this.#a();
        let a = e.maxInjectionDepth ?? 3,
            s = e.format ?? { kind: "custom-elements" },
            { host: t } = this.grammar.runtime,
            { code: r, prefix: i } = (function (e) {
                switch (e.kind) {
                    case "custom-elements":
                        return { code: 0, prefix: "" };
                    case "custom-elements-with-prefix":
                        return { code: 1, prefix: e.prefix };
                    case "class-names":
                        return { code: 2, prefix: "" };
                    case "class-names-with-prefix":
                        return { code: 3, prefix: e.prefix };
                }
            })(s),
            [g, p] = n(t, i);
        try {
            let e = this.#t(
                "highlight-failed",
                (e, s) => this.grammar.runtime.abi.arborium_rt_highlight_to_html(this.id, a, r, g, p, e, s),
                (e) => (0 === e.length ? { html: "", missing_injections: [] } : JSON.parse(e)),
            );
            return { html: e.html, missingInjections: e.missing_injections };
        } finally {
            g && t._free(g);
        }
    }
    cancel() {
        this.#a(), this.grammar.runtime.abi.arborium_rt_cancel(this.id);
    }
    free() {
        this.#s || (this.grammar.runtime.abi.arborium_rt_free_session(this.id), (this.#s = !0));
    }
    #a() {
        if (this.#s) throw new r("session-creation-failed", `session ${this.id} has been freed`);
    }
    #t(e, a, s) {
        let { host: t, abi: n } = this.grammar.runtime,
            i = t._malloc(4),
            g = t._malloc(4);
        try {
            let p = a(i, g);
            if (0 !== p) throw new r(e, `arborium_rt call returned status ${p}`);
            let o = t.getValue(i, "i32"),
                l = t.getValue(g, "i32");
            if (0 === l) return s("");
            try {
                return s(0 === l ? "" : c.decode(t.HEAPU8.subarray(o, o + l)));
            } finally {
                n.arborium_rt_free(o, l);
            }
        } finally {
            t._free(i), t._free(g);
        }
    }
}
async function d() {
    return (await s.e("61066").then(s.bind(s, 464945))).default;
}
let h = {
    ada: {
        languageId: "ada",
        languageExport: "tree_sitter_ada",
        wasm: new URL(s(294572), s.b),
        highlights: new URL(s(522509), s.b),
        locals: new URL(s(851706), s.b),
    },
    agda: {
        languageId: "agda",
        languageExport: "tree_sitter_agda",
        wasm: new URL(s(774086), s.b),
        highlights: new URL(s(277522), s.b),
    },
    asciidoc: {
        languageId: "asciidoc",
        languageExport: "tree_sitter_asciidoc",
        wasm: new URL(s(686618), s.b),
        highlights: new URL(s(223326), s.b),
    },
    asm: {
        languageId: "asm",
        languageExport: "tree_sitter_asm",
        wasm: new URL(s(267232), s.b),
        highlights: new URL(s(984358), s.b),
        injections: new URL(s(869427), s.b),
    },
    awk: {
        languageId: "awk",
        languageExport: "tree_sitter_awk",
        wasm: new URL(s(545656), s.b),
        highlights: new URL(s(412320), s.b),
    },
    bash: {
        languageId: "bash",
        languageExport: "tree_sitter_bash",
        wasm: new URL(s(194184), s.b),
        highlights: new URL(s(984296), s.b),
    },
    batch: {
        languageId: "batch",
        languageExport: "tree_sitter_batch",
        wasm: new URL(s(526724), s.b),
        highlights: new URL(s(753441), s.b),
    },
    c: {
        languageId: "c",
        languageExport: "tree_sitter_c",
        wasm: new URL(s(22088), s.b),
        highlights: new URL(s(333916), s.b),
    },
    "c-sharp": {
        languageId: "c-sharp",
        languageExport: "tree_sitter_c_sharp",
        wasm: new URL(s(634536), s.b),
        highlights: new URL(s(28465), s.b),
    },
    caddy: {
        languageId: "caddy",
        languageExport: "tree_sitter_caddy",
        wasm: new URL(s(638396), s.b),
        highlights: new URL(s(658626), s.b),
    },
    capnp: {
        languageId: "capnp",
        languageExport: "tree_sitter_capnp",
        wasm: new URL(s(86552), s.b),
        highlights: new URL(s(363891), s.b),
        injections: new URL(s(407710), s.b),
        locals: new URL(s(777368), s.b),
    },
    cedar: {
        languageId: "cedar",
        languageExport: "tree_sitter_cedar",
        wasm: new URL(s(796796), s.b),
        highlights: new URL(s(227802), s.b),
    },
    cedarschema: {
        languageId: "cedarschema",
        languageExport: "tree_sitter_cedarschema",
        wasm: new URL(s(990036), s.b),
        highlights: new URL(s(409589), s.b),
    },
    clojure: {
        languageId: "clojure",
        languageExport: "tree_sitter_clojure",
        wasm: new URL(s(820692), s.b),
        highlights: new URL(s(654645), s.b),
    },
    cmake: {
        languageId: "cmake",
        languageExport: "tree_sitter_cmake",
        wasm: new URL(s(641096), s.b),
        highlights: new URL(s(892650), s.b),
        injections: new URL(s(130975), s.b),
    },
    cobol: {
        languageId: "cobol",
        languageExport: "tree_sitter_cobol",
        wasm: new URL(s(218364), s.b),
        highlights: new URL(s(345562), s.b),
    },
    commonlisp: {
        languageId: "commonlisp",
        languageExport: "tree_sitter_commonlisp",
        wasm: new URL(s(342322), s.b),
        highlights: new URL(s(256412), s.b),
    },
    cpp: {
        languageId: "cpp",
        languageExport: "tree_sitter_cpp",
        wasm: new URL(s(77696), s.b),
        highlights: new URL(s(743700), s.b),
        injections: new URL(s(982517), s.b),
    },
    css: {
        languageId: "css",
        languageExport: "tree_sitter_css",
        wasm: new URL(s(350891), s.b),
        highlights: new URL(s(410854), s.b),
    },
    d: {
        languageId: "d",
        languageExport: "tree_sitter_d",
        wasm: new URL(s(176636), s.b),
        highlights: new URL(s(795965), s.b),
    },
    dart: {
        languageId: "dart",
        languageExport: "tree_sitter_dart",
        wasm: new URL(s(252978), s.b),
        highlights: new URL(s(140004), s.b),
    },
    devicetree: {
        languageId: "devicetree",
        languageExport: "tree_sitter_devicetree",
        wasm: new URL(s(875032), s.b),
        highlights: new URL(s(15027), s.b),
    },
    diff: {
        languageId: "diff",
        languageExport: "tree_sitter_diff",
        wasm: new URL(s(149990), s.b),
        highlights: new URL(s(29238), s.b),
    },
    dockerfile: {
        languageId: "dockerfile",
        languageExport: "tree_sitter_dockerfile",
        wasm: new URL(s(633584), s.b),
        highlights: new URL(s(658039), s.b),
    },
    dot: {
        languageId: "dot",
        languageExport: "tree_sitter_dot",
        wasm: new URL(s(539512), s.b),
        highlights: new URL(s(610566), s.b),
        injections: new URL(s(766803), s.b),
    },
    elisp: {
        languageId: "elisp",
        languageExport: "tree_sitter_elisp",
        wasm: new URL(s(179568), s.b),
        highlights: new URL(s(570690), s.b),
    },
    elixir: {
        languageId: "elixir",
        languageExport: "tree_sitter_elixir",
        wasm: new URL(s(243494), s.b),
        highlights: new URL(s(122474), s.b),
        injections: new URL(s(360799), s.b),
    },
    elm: {
        languageId: "elm",
        languageExport: "tree_sitter_elm",
        wasm: new URL(s(347644), s.b),
        highlights: new URL(s(224157), s.b),
        injections: new URL(s(560212), s.b),
        locals: new URL(s(954218), s.b),
    },
    erlang: {
        languageId: "erlang",
        languageExport: "tree_sitter_erlang",
        wasm: new URL(s(638954), s.b),
        highlights: new URL(s(991014), s.b),
    },
    fish: {
        languageId: "fish",
        languageExport: "tree_sitter_fish",
        wasm: new URL(s(560136), s.b),
        highlights: new URL(s(230847), s.b),
    },
    fsharp: {
        languageId: "fsharp",
        languageExport: "tree_sitter_fsharp",
        wasm: new URL(s(76216), s.b),
        highlights: new URL(s(442375), s.b),
        injections: new URL(s(628730), s.b),
        locals: new URL(s(665028), s.b),
    },
    gleam: {
        languageId: "gleam",
        languageExport: "tree_sitter_gleam",
        wasm: new URL(s(408784), s.b),
        highlights: new URL(s(378293), s.b),
        injections: new URL(s(187404), s.b),
        locals: new URL(s(889650), s.b),
    },
    glsl: {
        languageId: "glsl",
        languageExport: "tree_sitter_glsl",
        wasm: new URL(s(936568), s.b),
        highlights: new URL(s(25405), s.b),
    },
    go: {
        languageId: "go",
        languageExport: "tree_sitter_go",
        wasm: new URL(s(826056), s.b),
        highlights: new URL(s(80443), s.b),
    },
    graphql: {
        languageId: "graphql",
        languageExport: "tree_sitter_graphql",
        wasm: new URL(s(698672), s.b),
        highlights: new URL(s(12700), s.b),
    },
    groovy: {
        languageId: "groovy",
        languageExport: "tree_sitter_groovy",
        wasm: new URL(s(873056), s.b),
        highlights: new URL(s(986535), s.b),
        injections: new URL(s(95450), s.b),
    },
    haskell: {
        languageId: "haskell",
        languageExport: "tree_sitter_haskell",
        wasm: new URL(s(563708), s.b),
        highlights: new URL(s(285037), s.b),
        injections: new URL(s(417316), s.b),
        locals: new URL(s(895066), s.b),
    },
    hcl: {
        languageId: "hcl",
        languageExport: "tree_sitter_hcl",
        wasm: new URL(s(370072), s.b),
        highlights: new URL(s(437030), s.b),
    },
    hlsl: {
        languageId: "hlsl",
        languageExport: "tree_sitter_hlsl",
        wasm: new URL(s(637450), s.b),
        highlights: new URL(s(625818), s.b),
    },
    html: {
        languageId: "html",
        languageExport: "tree_sitter_html",
        wasm: new URL(s(744678), s.b),
        highlights: new URL(s(950336), s.b),
        injections: new URL(s(970361), s.b),
    },
    idris: {
        languageId: "idris",
        languageExport: "tree_sitter_idris",
        wasm: new URL(s(453844), s.b),
        highlights: new URL(s(298024), s.b),
    },
    ini: {
        languageId: "ini",
        languageExport: "tree_sitter_ini",
        wasm: new URL(s(305200), s.b),
        highlights: new URL(s(152535), s.b),
    },
    java: {
        languageId: "java",
        languageExport: "tree_sitter_java",
        wasm: new URL(s(659792), s.b),
        highlights: new URL(s(639385), s.b),
    },
    javascript: {
        languageId: "javascript",
        languageExport: "tree_sitter_javascript",
        wasm: new URL(s(908830), s.b),
        highlights: new URL(s(747738), s.b),
        injections: new URL(s(725263), s.b),
        locals: new URL(s(460089), s.b),
    },
    jinja2: {
        languageId: "jinja2",
        languageExport: "tree_sitter_jinja2",
        wasm: new URL(s(903256), s.b),
        highlights: new URL(s(115571), s.b),
    },
    jq: {
        languageId: "jq",
        languageExport: "tree_sitter_jq",
        wasm: new URL(s(245386), s.b),
        highlights: new URL(s(551208), s.b),
    },
    json: {
        languageId: "json",
        languageExport: "tree_sitter_json",
        wasm: new URL(s(52528), s.b),
        highlights: new URL(s(745063), s.b),
    },
    julia: {
        languageId: "julia",
        languageExport: "tree_sitter_julia",
        wasm: new URL(s(520744), s.b),
        highlights: new URL(s(761892), s.b),
    },
    kotlin: {
        languageId: "kotlin",
        languageExport: "tree_sitter_kotlin",
        wasm: new URL(s(637202), s.b),
        highlights: new URL(s(921672), s.b),
    },
    lean: {
        languageId: "lean",
        languageExport: "tree_sitter_lean",
        wasm: new URL(s(665196), s.b),
        highlights: new URL(s(39793), s.b),
    },
    lua: {
        languageId: "lua",
        languageExport: "tree_sitter_lua",
        wasm: new URL(s(600024), s.b),
        highlights: new URL(s(719123), s.b),
        injections: new URL(s(328190), s.b),
        locals: new URL(s(145848), s.b),
    },
    markdown: {
        languageId: "markdown",
        languageExport: "tree_sitter_markdown",
        wasm: new URL(s(601430), s.b),
        highlights: new URL(s(404868), s.b),
        injections: new URL(s(558565), s.b),
    },
    matlab: {
        languageId: "matlab",
        languageExport: "tree_sitter_matlab",
        wasm: new URL(s(325006), s.b),
        highlights: new URL(s(139084), s.b),
    },
    meson: {
        languageId: "meson",
        languageExport: "tree_sitter_meson",
        wasm: new URL(s(913528), s.b),
        highlights: new URL(s(19647), s.b),
    },
    nginx: {
        languageId: "nginx",
        languageExport: "tree_sitter_nginx",
        wasm: new URL(s(713656), s.b),
        highlights: new URL(s(919261), s.b),
        injections: new URL(s(771668), s.b),
    },
    ninja: {
        languageId: "ninja",
        languageExport: "tree_sitter_ninja",
        wasm: new URL(s(974832), s.b),
        highlights: new URL(s(678693), s.b),
    },
    nix: {
        languageId: "nix",
        languageExport: "tree_sitter_nix",
        wasm: new URL(s(931700), s.b),
        highlights: new URL(s(324829), s.b),
        injections: new URL(s(421759), s.b),
        locals: new URL(s(92361), s.b),
    },
    objc: {
        languageId: "objc",
        languageExport: "tree_sitter_objc",
        wasm: new URL(s(164312), s.b),
        highlights: new URL(s(540583), s.b),
        injections: new URL(s(528730), s.b),
        locals: new URL(s(591332), s.b),
    },
    ocaml: {
        languageId: "ocaml",
        languageExport: "tree_sitter_ocaml",
        wasm: new URL(s(56380), s.b),
        highlights: new URL(s(284865), s.b),
        locals: new URL(s(788790), s.b),
    },
    perl: {
        languageId: "perl",
        languageExport: "tree_sitter_perl",
        wasm: new URL(s(345698), s.b),
        highlights: new URL(s(924612), s.b),
        injections: new URL(s(498341), s.b),
    },
    php: {
        languageId: "php",
        languageExport: "tree_sitter_php",
        wasm: new URL(s(439596), s.b),
        highlights: new URL(s(938065), s.b),
        injections: new URL(s(494976), s.b),
    },
    postscript: {
        languageId: "postscript",
        languageExport: "tree_sitter_postscript",
        wasm: new URL(s(387986), s.b),
        highlights: new URL(s(716308), s.b),
    },
    powershell: {
        languageId: "powershell",
        languageExport: "tree_sitter_powershell",
        wasm: new URL(s(403390), s.b),
        highlights: new URL(s(58368), s.b),
    },
    prolog: {
        languageId: "prolog",
        languageExport: "tree_sitter_prolog",
        wasm: new URL(s(59458), s.b),
        highlights: new URL(s(10082), s.b),
    },
    python: {
        languageId: "python",
        languageExport: "tree_sitter_python",
        wasm: new URL(s(40120), s.b),
        highlights: new URL(s(880172), s.b),
    },
    query: {
        languageId: "query",
        languageExport: "tree_sitter_query",
        wasm: new URL(s(672616), s.b),
        highlights: new URL(s(96485), s.b),
        injections: new URL(s(823932), s.b),
    },
    r: {
        languageId: "r",
        languageExport: "tree_sitter_r",
        wasm: new URL(s(854808), s.b),
        highlights: new URL(s(538083), s.b),
        locals: new URL(s(462696), s.b),
    },
    rego: {
        languageId: "rego",
        languageExport: "tree_sitter_rego",
        wasm: new URL(s(417406), s.b),
        highlights: new URL(s(890014), s.b),
        locals: new URL(s(482165), s.b),
    },
    rescript: {
        languageId: "rescript",
        languageExport: "tree_sitter_rescript",
        wasm: new URL(s(414680), s.b),
        highlights: new URL(s(558227), s.b),
        injections: new URL(s(167294), s.b),
        locals: new URL(s(438584), s.b),
    },
    ron: {
        languageId: "ron",
        languageExport: "tree_sitter_ron",
        wasm: new URL(s(886304), s.b),
        highlights: new URL(s(505678), s.b),
    },
    ruby: {
        languageId: "ruby",
        languageExport: "tree_sitter_ruby",
        wasm: new URL(s(883632), s.b),
        highlights: new URL(s(119153), s.b),
    },
    rust: {
        languageId: "rust",
        languageExport: "tree_sitter_rust_orchard",
        wasm: new URL(s(993816), s.b),
        highlights: new URL(s(957435), s.b),
        injections: new URL(s(97638), s.b),
    },
    scala: {
        languageId: "scala",
        languageExport: "tree_sitter_scala",
        wasm: new URL(s(453464), s.b),
        highlights: new URL(s(646243), s.b),
        locals: new URL(s(832360), s.b),
    },
    scheme: {
        languageId: "scheme",
        languageExport: "tree_sitter_scheme",
        wasm: new URL(s(786238), s.b),
        highlights: new URL(s(747222), s.b),
    },
    scss: {
        languageId: "scss",
        languageExport: "tree_sitter_scss",
        wasm: new URL(s(745504), s.b),
        highlights: new URL(s(100733), s.b),
    },
    solidity: {
        languageId: "solidity",
        languageExport: "tree_sitter_solidity",
        wasm: new URL(s(364898), s.b),
        highlights: new URL(s(626988), s.b),
        locals: new URL(s(850203), s.b),
    },
    sparql: {
        languageId: "sparql",
        languageExport: "tree_sitter_sparql",
        wasm: new URL(s(645002), s.b),
        highlights: new URL(s(374124), s.b),
    },
    sql: {
        languageId: "sql",
        languageExport: "tree_sitter_sql",
        wasm: new URL(s(722112), s.b),
        highlights: new URL(s(989), s.b),
    },
    "ssh-config": {
        languageId: "ssh-config",
        languageExport: "tree_sitter_ssh_config",
        wasm: new URL(s(543098), s.b),
        highlights: new URL(s(197246), s.b),
        injections: new URL(s(250091), s.b),
    },
    starlark: {
        languageId: "starlark",
        languageExport: "tree_sitter_starlark",
        wasm: new URL(s(433736), s.b),
        highlights: new URL(s(749141), s.b),
        injections: new URL(s(874540), s.b),
        locals: new URL(s(250706), s.b),
    },
    styx: {
        languageId: "styx",
        languageExport: "tree_sitter_styx",
        wasm: new URL(s(84888), s.b),
        highlights: new URL(s(704691), s.b),
        injections: new URL(s(748510), s.b),
    },
    svelte: {
        languageId: "svelte",
        languageExport: "tree_sitter_svelte",
        wasm: new URL(s(892398), s.b),
        highlights: new URL(s(789302), s.b),
        injections: new URL(s(274947), s.b),
        locals: new URL(s(408381), s.b),
    },
    swift: {
        languageId: "swift",
        languageExport: "tree_sitter_swift",
        wasm: new URL(s(707836), s.b),
        highlights: new URL(s(9970), s.b),
        injections: new URL(s(421863), s.b),
        locals: new URL(s(799649), s.b),
    },
    textproto: {
        languageId: "textproto",
        languageExport: "tree_sitter_textproto",
        wasm: new URL(s(458504), s.b),
        highlights: new URL(s(629418), s.b),
    },
    thrift: {
        languageId: "thrift",
        languageExport: "tree_sitter_thrift",
        wasm: new URL(s(75490), s.b),
        highlights: new URL(s(425410), s.b),
        injections: new URL(s(282423), s.b),
        locals: new URL(s(103953), s.b),
    },
    tlaplus: {
        languageId: "tlaplus",
        languageExport: "tree_sitter_tlaplus",
        wasm: new URL(s(182612), s.b),
        highlights: new URL(s(621798), s.b),
        locals: new URL(s(669325), s.b),
    },
    toml: {
        languageId: "toml",
        languageExport: "tree_sitter_toml",
        wasm: new URL(s(692564), s.b),
        highlights: new URL(s(852665), s.b),
    },
    tsx: {
        languageId: "tsx",
        languageExport: "tree_sitter_tsx",
        wasm: new URL(s(5552), s.b),
        highlights: new URL(s(531134), s.b),
        locals: new URL(s(497941), s.b),
    },
    typescript: {
        languageId: "typescript",
        languageExport: "tree_sitter_typescript",
        wasm: new URL(s(207278), s.b),
        highlights: new URL(s(277890), s.b),
        locals: new URL(s(515857), s.b),
    },
    typst: {
        languageId: "typst",
        languageExport: "tree_sitter_typst",
        wasm: new URL(s(672008), s.b),
        highlights: new URL(s(405215), s.b),
        injections: new URL(s(614706), s.b),
    },
    uiua: {
        languageId: "uiua",
        languageExport: "tree_sitter_uiua",
        wasm: new URL(s(4904), s.b),
        highlights: new URL(s(942461), s.b),
        injections: new URL(s(94772), s.b),
    },
    vb: {
        languageId: "vb",
        languageExport: "tree_sitter_vb_dotnet",
        wasm: new URL(s(510856), s.b),
        highlights: new URL(s(437273), s.b),
    },
    verilog: {
        languageId: "verilog",
        languageExport: "tree_sitter_verilog",
        wasm: new URL(s(506200), s.b),
        highlights: new URL(s(719923), s.b),
    },
    vhdl: {
        languageId: "vhdl",
        languageExport: "tree_sitter_vhdl",
        wasm: new URL(s(225944), s.b),
        highlights: new URL(s(6899), s.b),
    },
    vim: {
        languageId: "vim",
        languageExport: "tree_sitter_vim",
        wasm: new URL(s(957312), s.b),
        highlights: new URL(s(785717), s.b),
        injections: new URL(s(866764), s.b),
    },
    vue: {
        languageId: "vue",
        languageExport: "tree_sitter_vue",
        wasm: new URL(s(644720), s.b),
        highlights: new URL(s(274697), s.b),
        injections: new URL(s(201176), s.b),
    },
    wit: {
        languageId: "wit",
        languageExport: "tree_sitter_wit",
        wasm: new URL(s(87728), s.b),
        highlights: new URL(s(628857), s.b),
        injections: new URL(s(912904), s.b),
    },
    x86asm: {
        languageId: "x86asm",
        languageExport: "tree_sitter_x86asm",
        wasm: new URL(s(55078), s.b),
        highlights: new URL(s(883708), s.b),
    },
    xml: {
        languageId: "xml",
        languageExport: "tree_sitter_xml",
        wasm: new URL(s(761140), s.b),
        highlights: new URL(s(385100), s.b),
    },
    yaml: {
        languageId: "yaml",
        languageExport: "tree_sitter_yaml",
        wasm: new URL(s(336186), s.b),
        highlights: new URL(s(566318), s.b),
    },
    yuri: {
        languageId: "yuri",
        languageExport: "tree_sitter_yuri",
        wasm: new URL(s(852322), s.b),
        highlights: new URL(s(661962), s.b),
    },
    zig: {
        languageId: "zig",
        languageExport: "tree_sitter_zig",
        wasm: new URL(s(860248), s.b),
        highlights: new URL(s(29971), s.b),
        injections: new URL(s(143678), s.b),
    },
    zsh: {
        languageId: "zsh",
        languageExport: "tree_sitter_zsh",
        wasm: new URL(s(496472), s.b),
        highlights: new URL(s(384232), s.b),
    },
};
