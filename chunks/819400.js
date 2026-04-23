function n(e) {
    let a = e.toLowerCase();
    return (
        {
            js: "javascript",
            ts: "typescript",
            py: "python",
            rb: "ruby",
            rs: "rust",
            sh: "bash",
            shell: "bash",
            yml: "yaml",
            cs: "c-sharp",
            csharp: "c-sharp",
            "c++": "cpp",
            "c#": "c-sharp",
            "f#": "fsharp",
            dockerfile: "dockerfile",
            docker: "dockerfile",
            makefile: "make",
            plaintext: "text",
            plain: "text",
            txt: "text",
        }[a] || a
    );
}
s.d(a, { oS: () => U, Op: () => n, hK: () => am });
let t = {
        manual: !1,
        theme: "one-dark",
        selector: "pre code",
        cdn: "jsdelivr",
        version: "2.16.0",
        pluginsUrl: "",
        hostUrl: "",
        logger: console,
        resolveHostJs: ({ baseUrl: e, path: a }) => Promise.resolve({}),
        resolveHostWasm: ({ baseUrl: e, path: a }) => fetch(`${e}/${a}`),
        resolveJs: ({ baseUrl: e, path: a }) => Promise.resolve({}),
        resolveWasm: ({ baseUrl: e, path: a }) => fetch(`${e}/${a}`),
    },
    r = null,
    o = null,
    m = { ...t },
    d = new Map(),
    l = new Map(),
    i = new Set([
        "ada",
        "agda",
        "asciidoc",
        "asm",
        "awk",
        "bash",
        "batch",
        "c",
        "c-sharp",
        "caddy",
        "capnp",
        "cedar",
        "cedarschema",
        "clojure",
        "cmake",
        "cobol",
        "commonlisp",
        "cpp",
        "css",
        "d",
        "dart",
        "devicetree",
        "diff",
        "dockerfile",
        "dot",
        "elisp",
        "elixir",
        "elm",
        "erlang",
        "fish",
        "fsharp",
        "gleam",
        "glsl",
        "go",
        "graphql",
        "groovy",
        "haskell",
        "hcl",
        "hlsl",
        "html",
        "idris",
        "ini",
        "java",
        "javascript",
        "jinja2",
        "jq",
        "json",
        "julia",
        "kotlin",
        "lean",
        "lua",
        "markdown",
        "matlab",
        "meson",
        "nginx",
        "ninja",
        "nix",
        "objc",
        "ocaml",
        "perl",
        "php",
        "postscript",
        "powershell",
        "prolog",
        "python",
        "query",
        "r",
        "rego",
        "rescript",
        "ron",
        "ruby",
        "rust",
        "scala",
        "scheme",
        "scss",
        "solidity",
        "sparql",
        "sql",
        "ssh-config",
        "starlark",
        "styx",
        "svelte",
        "swift",
        "textproto",
        "thrift",
        "tlaplus",
        "toml",
        "tsx",
        "typescript",
        "typst",
        "uiua",
        "vb",
        "verilog",
        "vhdl",
        "vim",
        "vue",
        "wit",
        "x86asm",
        "xml",
        "yaml",
        "yuri",
        "zig",
        "zsh",
    ]),
    b = null,
    p = null;
async function w(e) {
    if (e.pluginsUrl)
        return (
            p ||
            (p = (async () => {
                e.logger.debug(`[arborium] Loading local plugins manifest from: ${e.pluginsUrl}`);
                let a = await fetch(e.pluginsUrl);
                if (!a.ok) throw Error(`Failed to load plugins.json: ${a.status}`);
                (b = await a.json()),
                    e.logger.debug(`[arborium] Loaded local manifest with ${b?.entries.length} entries`);
            })())
        );
}
async function c(e, a) {
    let s = d.get(e);
    if (s) return a.logger.debug(`[arborium] Grammar '${e}' found in cache`), s;
    let n = l.get(e);
    if (n) return a.logger.debug(`[arborium] Grammar '${e}' already loading, waiting...`), n;
    let t = u(e, a);
    l.set(e, t);
    try {
        return await t;
    } finally {
        l.delete(e);
    }
}
async function u(e, a) {
    if ((await w(a), !i.has(e) && !b?.entries.some((a) => a.language === e)))
        return a.logger.debug(`[arborium] Grammar '${e}' not available`), null;
    try {
        let s = (function (e, a) {
                let s;
                if (b) {
                    let a = b.entries.find((a) => a.language === e);
                    if (a) return a.local_js.substring(0, a.local_js.lastIndexOf("/"));
                }
                let n = a.cdn,
                    t = a.version;
                return (
                    (s = "jsdelivr" === n ? "https://cdn.jsdelivr.net/npm" : "unpkg" === n ? "https://unpkg.com" : n),
                    `${s}/@arborium/${e}@${t}`
                );
            })(e, a),
            n = a.resolveJs === t.resolveJs ? ` from ${s}/grammar.js` : "";
        a.logger.debug(`[arborium] Loading grammar '${e}'${n}`);
        let r = await a.resolveJs({ language: e, baseUrl: s, path: "grammar.js" }),
            o = await a.resolveWasm({ language: e, baseUrl: s, path: "grammar_bg.wasm" });
        await r.default({ module_or_path: o });
        let m = r.language_id();
        m !== e && a.logger.warn(`[arborium] Language ID mismatch: expected '${e}', got '${m}'`);
        let l = r.injection_languages(),
            i = {
                languageId: e,
                injectionLanguages: l,
                module: r,
                parseUtf8: (e) => {
                    let s = r.create_session();
                    try {
                        r.set_text(s, e);
                        let a = r.parse(s);
                        return { spans: a.spans || [], injections: a.injections || [] };
                    } catch (e) {
                        return a.logger.error("[arborium] Parse error:", e), { spans: [], injections: [] };
                    } finally {
                        r.free_session(s);
                    }
                },
                parseUtf16: (e) => {
                    let s = r.create_session();
                    try {
                        r.set_text(s, e);
                        let a = r.parse_utf16(s);
                        return { spans: a.spans || [], injections: a.injections || [] };
                    } catch (e) {
                        return a.logger.error("[arborium] Parse error:", e), { spans: [], injections: [] };
                    } finally {
                        r.free_session(s);
                    }
                },
            };
        return d.set(e, i), a.logger.debug(`[arborium] Grammar '${e}' loaded successfully`), i;
    } catch (s) {
        return a.logger.error(`[arborium] Failed to load grammar '${e}':`, s), null;
    }
}
let h = new Map(),
    f = 1;
async function g(e) {
    return (
        r ||
        o ||
        (o = (async () => {
            globalThis.arboriumHost = {
                isLanguageAvailable: (e) => i.has(e) || d.has(e),
                async loadGrammar(a) {
                    let s = await c(a, e);
                    if (!s) return 0;
                    for (let [e, a] of h) if (a === s) return e;
                    let n = f++;
                    return h.set(n, s), n;
                },
                parse(e, a) {
                    let s = h.get(e);
                    return s ? s.parseUtf8(a) : { spans: [], injections: [] };
                },
            };
            let a = (function (e) {
                    if (e.hostUrl) return e.hostUrl;
                    let a = e.cdn,
                        s = e.version,
                        n = "latest" === s ? "" : `@${s}`;
                    return `${"jsdelivr" === a ? "https://cdn.jsdelivr.net/npm" : "unpkg" === a ? "https://unpkg.com" : a}/@arborium/arborium${n}/dist`;
                })(e),
                s = e.resolveHostJs === t.resolveHostJs ? ` from ${a}/arborium_host.js` : "";
            e.logger.debug(`[arborium] Loading host${s}`);
            try {
                let s = await e.resolveHostJs({ baseUrl: a, path: "arborium_host.js" }),
                    n = await e.resolveHostWasm({ baseUrl: a, path: "arborium_host_bg.wasm" });
                return (
                    await s.default({ module_or_path: n }),
                    (r = { highlight: s.highlight, isLanguageAvailable: s.isLanguageAvailable }),
                    e.logger.debug("[arborium] Host loaded successfully"),
                    r
                );
            } catch (a) {
                return e.logger.error("[arborium] Failed to load host:", a), null;
            }
        })())
    );
}
async function x(e, a, s) {
    let n = L(s),
        t = await g(n);
    if (t)
        try {
            return t.highlight(e, a);
        } catch (e) {
            n.logger.error("[arborium] Host highlight failed:", e);
        }
    return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
async function U(e, a) {
    let s = L(a),
        n = await c(e, s);
    if (!n) return null;
    let { module: t } = n;
    return {
        languageId: () => n.languageId,
        injectionLanguages: () => n.injectionLanguages,
        highlight: async (s) => x(e, s, a),
        parse: (e) => n.parseUtf16(e),
        createSession: () => {
            let e = t.create_session();
            return {
                setText: (a) => t.set_text(e, a),
                parse: () => {
                    try {
                        let a = t.parse_utf16(e);
                        return { spans: a.spans || [], injections: a.injections || [] };
                    } catch (e) {
                        return s.logger.error("[arborium] Session parse error:", e), { spans: [], injections: [] };
                    }
                },
                cancel: () => t.cancel(e),
                free: () => t.free_session(e),
            };
        },
        dispose: () => {},
    };
}
function L(e) {
    return e ? { ...m, ...e } : { ...m };
}
let R = new URL(s(235991), s.b),
    v = new URL(s(358963), s.b),
    y = new URL(s(653443), s.b),
    j = new URL(s(776259), s.b),
    k = new URL(s(646348), s.b),
    _ = new URL(s(276629), s.b),
    $ = new URL(s(404635), s.b),
    q = new URL(s(686203), s.b),
    H = new URL(s(745599), s.b),
    J = new URL(s(746899), s.b),
    z = new URL(s(329955), s.b),
    W = new URL(s(430499), s.b),
    G = new URL(s(882947), s.b),
    I = new URL(s(853519), s.b),
    P = new URL(s(983267), s.b),
    S = new URL(s(983623), s.b),
    A = new URL(s(148891), s.b),
    C = new URL(s(174808), s.b),
    F = new URL(s(711903), s.b),
    M = new URL(s(845055), s.b),
    O = new URL(s(271601), s.b),
    T = new URL(s(226363), s.b),
    D = new URL(s(226393), s.b),
    E = new URL(s(933763), s.b),
    K = new URL(s(478003), s.b),
    B = new URL(s(529299), s.b),
    N = new URL(s(557863), s.b),
    Q = new URL(s(635251), s.b),
    V = new URL(s(908085), s.b),
    X = new URL(s(569425), s.b),
    Y = new URL(s(55523), s.b),
    Z = new URL(s(886521), s.b),
    ee = new URL(s(209705), s.b),
    ea = new URL(s(640799), s.b),
    es = new URL(s(711293), s.b),
    en = new URL(s(786675), s.b),
    et = new URL(s(836579), s.b),
    er = new URL(s(606323), s.b),
    eo = new URL(s(283219), s.b),
    em = new URL(s(528495), s.b),
    ed = new URL(s(622323), s.b),
    el = new URL(s(782977), s.b),
    ei = new URL(s(964499), s.b),
    eb = new URL(s(121717), s.b),
    ep = new URL(s(218863), s.b),
    ew = new URL(s(316445), s.b),
    ec = new URL(s(836683), s.b),
    eu = new URL(s(189815), s.b),
    eh = new URL(s(417697), s.b),
    ef = new URL(s(642119), s.b),
    eg = new URL(s(320535), s.b),
    ex = new URL(s(373983), s.b),
    eU = new URL(s(82211), s.b),
    eL = new URL(s(193911), s.b),
    eR = new URL(s(453843), s.b),
    ev = new URL(s(42685), s.b),
    ey = new URL(s(669283), s.b),
    ej = new URL(s(188343), s.b),
    ek = new URL(s(171391), s.b),
    e_ = new URL(s(584463), s.b),
    e$ = new URL(s(342323), s.b),
    eq = new URL(s(536483), s.b),
    eH = new URL(s(867449), s.b),
    eJ = new URL(s(913583), s.b),
    ez = new URL(s(101951), s.b),
    eW = new URL(s(231035), s.b),
    eG = new URL(s(90529), s.b),
    eI = new URL(s(408379), s.b),
    eP = new URL(s(529521), s.b),
    eS = new URL(s(434453), s.b),
    eA = new URL(s(779947), s.b),
    eC = new URL(s(529819), s.b),
    eF = new URL(s(262841), s.b),
    eM = new URL(s(414227), s.b),
    eO = new URL(s(429723), s.b),
    eT = new URL(s(178651), s.b),
    eD = new URL(s(9755), s.b),
    eE = new URL(s(347721), s.b),
    eK = new URL(s(140725), s.b),
    eB = new URL(s(754011), s.b),
    eN = new URL(s(179731), s.b),
    eQ = new URL(s(326067), s.b),
    eV = new URL(s(454099), s.b),
    eX = new URL(s(543931), s.b),
    eY = new URL(s(435345), s.b),
    eZ = new URL(s(649859), s.b),
    e3 = new URL(s(897043), s.b),
    e9 = new URL(s(300539), s.b),
    e6 = new URL(s(396141), s.b),
    e2 = new URL(s(755899), s.b),
    e4 = new URL(s(113626), s.b),
    e5 = new URL(s(747875), s.b),
    e1 = new URL(s(95531), s.b),
    e8 = new URL(s(616883), s.b),
    e7 = new URL(s(548843), s.b),
    e0 = new URL(s(248359), s.b),
    ae = new URL(s(824163), s.b),
    aa = new URL(s(978643), s.b),
    as = new URL(s(780055), s.b),
    an = new URL(s(94071), s.b),
    at = new URL(s(50779), s.b),
    ar = {
        ada: { module: () => s.e("61233").then(s.bind(s, 174728)), wasm: R },
        agda: { module: () => s.e("81365").then(s.bind(s, 248980)), wasm: v },
        asciidoc: { module: () => s.e("24229").then(s.bind(s, 238980)), wasm: y },
        asm: { module: () => s.e("9314").then(s.bind(s, 977716)), wasm: j },
        awk: { module: () => s.e("47465").then(s.bind(s, 487088)), wasm: k },
        bash: { module: () => s.e("83387").then(s.bind(s, 74294)), wasm: _ },
        batch: { module: () => s.e("51573").then(s.bind(s, 675892)), wasm: $ },
        c: { module: () => s.e("71181").then(s.bind(s, 966620)), wasm: q },
        "c-sharp": { module: () => s.e("87409").then(s.bind(s, 285896)), wasm: H },
        caddy: { module: () => s.e("14509").then(s.bind(s, 724060)), wasm: J },
        capnp: { module: () => s.e("70365").then(s.bind(s, 629196)), wasm: z },
        cedar: { module: () => s.e("23397").then(s.bind(s, 274564)), wasm: W },
        cedarschema: { module: () => s.e("5709").then(s.bind(s, 241564)), wasm: G },
        clojure: { module: () => s.e("54409").then(s.bind(s, 875984)), wasm: I },
        cmake: { module: () => s.e("4709").then(s.bind(s, 244388)), wasm: P },
        commonlisp: { module: () => s.e("98577").then(s.bind(s, 412424)), wasm: S },
        cpp: { module: () => s.e("4077").then(s.bind(s, 99356)), wasm: A },
        css: { module: () => s.e("25973").then(s.bind(s, 21524)), wasm: C },
        d: { module: () => s.e("51441").then(s.bind(s, 915464)), wasm: F },
        dart: { module: () => s.e("28425").then(s.bind(s, 330288)), wasm: M },
        devicetree: { module: () => s.e("58215").then(s.bind(s, 487290)), wasm: O },
        diff: { module: () => s.e("5781").then(s.bind(s, 749684)), wasm: T },
        dockerfile: { module: () => s.e("82015").then(s.bind(s, 681858)), wasm: D },
        dot: { module: () => s.e("88693").then(s.bind(s, 948212)), wasm: E },
        elisp: { module: () => s.e("72973").then(s.bind(s, 955228)), wasm: K },
        elixir: { module: () => s.e("71381").then(s.bind(s, 210740)), wasm: B },
        elm: { module: () => s.e("75905").then(s.bind(s, 140376)), wasm: N },
        erlang: { module: () => s.e("46581").then(s.bind(s, 525044)), wasm: Q },
        fish: { module: () => s.e("18219").then(s.bind(s, 394950)), wasm: V },
        fsharp: { module: () => s.e("32655").then(s.bind(s, 76242)), wasm: X },
        gleam: { module: () => s.e("74309").then(s.bind(s, 555364)), wasm: Y },
        glsl: { module: () => s.e("22756").then(s.bind(s, 868906)), wasm: Z },
        go: { module: () => s.e("18751").then(s.bind(s, 900386)), wasm: ee },
        graphql: { module: () => s.e("66961").then(s.bind(s, 363944)), wasm: ea },
        groovy: { module: () => s.e("82499").then(s.bind(s, 861326)), wasm: es },
        haskell: { module: () => s.e("36613").then(s.bind(s, 280420)), wasm: en },
        hcl: { module: () => s.e("86981").then(s.bind(s, 806340)), wasm: et },
        hlsl: { module: () => s.e("9653").then(s.bind(s, 635604)), wasm: er },
        html: { module: () => s.e("67029").then(s.bind(s, 778772)), wasm: eo },
        idris: { module: () => s.e("23545").then(s.bind(s, 919296)), wasm: em },
        ini: { module: () => s.e("41717").then(s.bind(s, 390100)), wasm: ed },
        java: { module: () => s.e("89647").then(s.bind(s, 290770)), wasm: el },
        javascript: { module: () => s.e("59157").then(s.bind(s, 219348)), wasm: ei },
        jinja2: { module: () => s.e("69227").then(s.bind(s, 81734)), wasm: eb },
        jq: { module: () => s.e("32745").then(s.bind(s, 582416)), wasm: ep },
        json: { module: () => s.e("48699").then(s.bind(s, 496214)), wasm: ew },
        julia: { module: () => s.e("62061").then(s.bind(s, 531740)), wasm: ec },
        kotlin: { module: () => s.e("99969").then(s.bind(s, 636344)), wasm: eu },
        lean: { module: () => s.e("1055").then(s.bind(s, 773314)), wasm: eh },
        lua: { module: () => s.e("30449").then(s.bind(s, 923336)), wasm: ef },
        markdown: { module: () => s.e("59305").then(s.bind(s, 946256)), wasm: eg },
        matlab: { module: () => s.e("70817").then(s.bind(s, 181272)), wasm: ex },
        meson: { module: () => s.e("92333").then(s.bind(s, 372604)), wasm: eU },
        ninja: { module: () => s.e("99017").then(s.bind(s, 140368)), wasm: eL },
        nix: { module: () => s.e("4021").then(s.bind(s, 588980)), wasm: eR },
        objc: { module: () => s.e("86755").then(s.bind(s, 690766)), wasm: ev },
        ocaml: { module: () => s.e("16629").then(s.bind(s, 624052)), wasm: ey },
        perl: { module: () => s.e("25505").then(s.bind(s, 375416)), wasm: ej },
        php: { module: () => s.e("54561").then(s.bind(s, 337240)), wasm: ek },
        postscript: { module: () => s.e("34641").then(s.bind(s, 935048)), wasm: e_ },
        powershell: { module: () => s.e("22261").then(s.bind(s, 439572)), wasm: e$ },
        prolog: { module: () => s.e("3413").then(s.bind(s, 649428)), wasm: eq },
        python: { module: () => s.e("50351").then(s.bind(s, 963538)), wasm: eH },
        query: { module: () => s.e("84617").then(s.bind(s, 699984)), wasm: eJ },
        r: { module: () => s.e("87249").then(s.bind(s, 865192)), wasm: ez },
        rego: { module: () => s.e("2717").then(s.bind(s, 938892)), wasm: eW },
        rescript: { module: () => s.e("97743").then(s.bind(s, 818994)), wasm: eG },
        ron: { module: () => s.e("52341").then(s.bind(s, 73844)), wasm: eI },
        ruby: { module: () => s.e("7399").then(s.bind(s, 633594)), wasm: eP },
        rust: { module: () => s.e("11899").then(s.bind(s, 200950)), wasm: eS },
        scala: { module: () => s.e("83637").then(s.bind(s, 231220)), wasm: eA },
        scheme: { module: () => s.e("87221").then(s.bind(s, 616596)), wasm: eC },
        scss: { module: () => s.e("83647").then(s.bind(s, 625890)), wasm: eF },
        solidity: { module: () => s.e("50517").then(s.bind(s, 969364)), wasm: eM },
        sparql: { module: () => s.e("93773").then(s.bind(s, 667260)), wasm: eO },
        sql: { module: () => s.e("98333").then(s.bind(s, 356492)), wasm: eT },
        "ssh-config": { module: () => s.e("57533").then(s.bind(s, 362860)), wasm: eD },
        starlark: { module: () => s.e("42919").then(s.bind(s, 409146)), wasm: eE },
        styx: { module: () => s.e("62435").then(s.bind(s, 186766)), wasm: eK },
        svelte: { module: () => s.e("58709").then(s.bind(s, 888500)), wasm: eB },
        swift: { module: () => s.e("78885").then(s.bind(s, 662404)), wasm: eN },
        textproto: { module: () => s.e("85389").then(s.bind(s, 886140)), wasm: eQ },
        thrift: { module: () => s.e("29645").then(s.bind(s, 30396)), wasm: eV },
        tlaplus: { module: () => s.e("78693").then(s.bind(s, 666148)), wasm: eX },
        toml: { module: () => s.e("65759").then(s.bind(s, 986434)), wasm: eY },
        tsx: { module: () => s.e("93845").then(s.bind(s, 593044)), wasm: eZ },
        typescript: { module: () => s.e("72437").then(s.bind(s, 652724)), wasm: e3 },
        typst: { module: () => s.e("13141").then(s.bind(s, 925844)), wasm: e9 },
        vb: { module: () => s.e("93267").then(s.bind(s, 432734)), wasm: e6 },
        verilog: { module: () => s.e("94301").then(s.bind(s, 617452)), wasm: e2 },
        vhdl: { module: () => s.e("50155").then(s.bind(s, 97094)), wasm: e4 },
        vim: { module: () => s.e("445").then(s.bind(s, 28172)), wasm: e5 },
        vue: { module: () => s.e("52565").then(s.bind(s, 821556)), wasm: e1 },
        wit: { module: () => s.e("39629").then(s.bind(s, 148060)), wasm: e8 },
        x86asm: { module: () => s.e("20573").then(s.bind(s, 190284)), wasm: e7 },
        xml: { module: () => s.e("50649").then(s.bind(s, 478464)), wasm: e0 },
        yaml: { module: () => s.e("30949").then(s.bind(s, 404772)), wasm: ae },
        yuri: { module: () => s.e("7765").then(s.bind(s, 33396)), wasm: aa },
        zig: { module: () => s.e("27665").then(s.bind(s, 794600)), wasm: as },
        zsh: { module: () => s.e("33833").then(s.bind(s, 116848)), wasm: an },
    };
m = {
    ...m,
    resolveHostJs: () => s.e("60457").then(s.bind(s, 416099)),
    resolveHostWasm: () => fetch(at),
    resolveJs: ({ language: e }) => ar[e]?.module(),
    resolveWasm: ({ language: e }) => {
        let a = ar[e]?.wasm;
        return a ? fetch(a) : void 0;
    },
};
let ao = [
    "ada",
    "agda",
    "asciidoc",
    "asm",
    "awk",
    "bash",
    "batch",
    "c",
    "c-sharp",
    "caddy",
    "capnp",
    "cedar",
    "cedarschema",
    "clojure",
    "cmake",
    "commonlisp",
    "cpp",
    "css",
    "d",
    "dart",
    "devicetree",
    "diff",
    "dockerfile",
    "dot",
    "elisp",
    "elixir",
    "elm",
    "erlang",
    "fish",
    "fsharp",
    "gleam",
    "glsl",
    "go",
    "graphql",
    "groovy",
    "haskell",
    "hcl",
    "hlsl",
    "html",
    "idris",
    "ini",
    "java",
    "javascript",
    "jinja2",
    "jq",
    "json",
    "julia",
    "kotlin",
    "lean",
    "lua",
    "markdown",
    "matlab",
    "meson",
    "ninja",
    "nix",
    "objc",
    "ocaml",
    "perl",
    "php",
    "postscript",
    "powershell",
    "prolog",
    "python",
    "query",
    "r",
    "rego",
    "rescript",
    "ron",
    "ruby",
    "rust",
    "scala",
    "scheme",
    "scss",
    "solidity",
    "sparql",
    "sql",
    "ssh-config",
    "starlark",
    "styx",
    "svelte",
    "swift",
    "textproto",
    "thrift",
    "tlaplus",
    "toml",
    "tsx",
    "typescript",
    "typst",
    "vb",
    "verilog",
    "vhdl",
    "vim",
    "vue",
    "wit",
    "x86asm",
    "xml",
    "yaml",
    "yuri",
    "zig",
    "zsh",
];
function am() {
    return [...ao];
}
