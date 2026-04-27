async function t(e) {
    return null;
}
s.d(a, { A: () => l });
class r extends Error {
    kind;
    constructor(e, a) {
        super(a), (this.name = "ArboriumError"), (this.kind = e);
    }
}
function n(e, a) {
    if (0 === a.length) return [0, 0];
    let s = c.encode(a),
        t = e._malloc(s.length);
    return e.HEAPU8.set(s, t), [t, s.length];
}
async function i(e) {
    return e instanceof URL ? p(e) : e instanceof Uint8Array ? e : new Uint8Array(e);
}
async function g(e) {
    if ("string" == typeof e) return e;
    let a = await p(e);
    return o.decode(a);
}
async function p(e) {
    let a = await t(e);
    if (a) return a;
    let s = await fetch(e);
    if (!s.ok) throw new r("asset-fetch-failed", `failed to fetch ${e.href}: ${s.status} ${s.statusText}`);
    return new Uint8Array(await s.arrayBuffer());
}
let c = new TextEncoder(),
    o = new TextDecoder();
async function l() {
    let e = await d(),
        [a, t] = await Promise.all([i(new URL(s(508036), s.b)), i(new URL(s(333796), s.b))]),
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
            c = (function (e, a) {
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
        if (!c) throw new r("grammar-registration-failed", "grammar tree_sitter_* export returned null");
        let [o, l] = n(this.host, e.languageId),
            [b, w] = n(this.host, s),
            [d, h] = n(this.host, t),
            [x, f] = n(this.host, p),
            u = 0;
        try {
            u = this.abi.arborium_rt_register_grammar(c, o, l, b, w, d, h, x, f);
        } finally {
            o && this.host._free(o), b && this.host._free(b), d && this.host._free(d), x && this.host._free(x);
        }
        if (0 === u)
            throw new r(
                "grammar-registration-failed",
                "arborium_rt_register_grammar returned 0 (query compile failure, bad language ptr, or empty name?)",
            );
        return new m(this, u, c, e.languageId);
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
            let c = t.getValue(i, "i32"),
                l = t.getValue(g, "i32");
            if (0 === l) return s("");
            try {
                return s(0 === l ? "" : o.decode(t.HEAPU8.subarray(c, c + l)));
            } finally {
                n.arborium_rt_free(c, l);
            }
        } finally {
            t._free(i), t._free(g);
        }
    }
}
async function d() {
    return (await s.e("92383").then(s.bind(s, 590946))).default;
}
