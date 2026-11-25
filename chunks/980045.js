(l.d(t, { No: () => b, OT: () => S, VB: () => x, py: () => v, OY: () => k }), l(321073));
var r = l(582128),
    s = l(626551),
    n = l(635377),
    a = l.n(n),
    i = l(181370),
    o = l.n(i);
let c = new Set([
    "ada",
    "agda",
    "ansi",
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
    "luau",
    "markdown",
    "markdown_inline",
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
]);
var h = l(52133),
    p = l(856383),
    u = l(1145);
let m = /^[a-z0-9_+\-.#]+$/,
    g = new (a())({ max: 256 }),
    d = new (a())({ max: 256 }),
    f = (0, u.Gn)(),
    j = new Map(),
    y = {
        h: "cpp",
        hpp: "cpp",
        cc: "cpp",
        cxx: "cpp",
        "c++": "cpp",
        hxx: "cpp",
        "h++": "cpp",
        hh: "cpp",
        arduino: "cpp",
        js: "javascript",
        node: "javascript",
        mjs: "javascript",
        cjs: "javascript",
        jsx: "javascript",
        ts: "typescript",
        mts: "typescript",
        cts: "typescript",
        rs: "rust",
        cs: "c-sharp",
        csharp: "c-sharp",
        "c#": "c-sharp",
        yml: "yaml",
        docker: "dockerfile",
        gql: "graphql",
        hbs: "html",
        htm: "html",
        xhtml: "html",
        handlebars: "html",
        "html.hbs": "html",
        "html.handlebars": "html",
        htmlbars: "html",
        erb: "html",
        twig: "html",
        craftcms: "html",
        xsl: "xml",
        rss: "xml",
        atom: "xml",
        xsd: "xml",
        plist: "xml",
        svg: "xml",
        mathml: "xml",
        xjb: "xml",
        wsf: "xml",
        less: "css",
        kt: "kotlin",
        kts: "kotlin",
        pl: "perl",
        pm: "perl",
        ps: "powershell",
        ps1: "powershell",
        psm1: "powershell",
        psd1: "powershell",
        pwsh: "powershell",
        tf: "hcl",
        tfvars: "hcl",
        sh: "bash",
        shell: "bash",
        console: "bash",
        shellsession: "bash",
        ex: "elixir",
        exs: "elixir",
        erl: "erlang",
        hs: "haskell",
        fs: "fsharp",
        "f#": "fsharp",
        ml: "ocaml",
        mli: "ocaml",
        sml: "ocaml",
        re: "rescript",
        reasonml: "rescript",
        scm: "scheme",
        rkt: "scheme",
        clj: "clojure",
        edn: "clojure",
        rb: "ruby",
        cr: "ruby",
        crystal: "ruby",
        gemspec: "ruby",
        podspec: "ruby",
        irb: "ruby",
        thor: "ruby",
        v: "verilog",
        sv: "verilog",
        svh: "verilog",
        objectivec: "objc",
        mm: "objc",
        "obj-c": "objc",
        "obj-c++": "objc",
        "objective-c++": "objc",
        dos: "batch",
        bat: "batch",
        cmd: "batch",
        lisp: "commonlisp",
        capnproto: "capnp",
        dts: "devicetree",
        adoc: "asciidoc",
        patch: "diff",
        golang: "go",
        jinja: "jinja2",
        django: "jinja2",
        jsp: "java",
        nixos: "nix",
        arm: "asm",
        mips: "asm",
        armasm: "asm",
        mipsasm: "asm",
        avrasm: "asm",
        pgsql: "sql",
        postgres: "sql",
        postgresql: "sql",
        n1ql: "sql",
        gradle: "groovy",
        "php-template": "php",
        "cmake.in": "cmake",
        md: "markdown",
        mkdown: "markdown",
        mkd: "markdown",
        py: "python",
        gyp: "python",
        ipython: "python",
        jsonc: "json",
        "python-repl": "python",
        pycon: "python",
        "node-repl": "javascript",
        "clojure-repl": "clojure",
        "erlang-repl": "erlang",
        "julia-repl": "julia",
        jldoctest: "julia",
    },
    b = new Set([...c, ...Object.keys(y)]);
function v(e) {
    if (null == e) return;
    let t = e.toLowerCase();
    if (!m.test(t)) return;
    if (c.has(t)) return t;
    let l = y[t];
    if (null != l && c.has(l)) return l;
}
function x(e) {
    if (e.length > 1e4) return !1;
    for (let t of e.split("\n")) if (t.length > 1e3) return !1;
    return !0;
}
function k(e, t) {
    let l = (0, u.W9)(e ?? ""),
        s = r.use(l),
        n = r.useMemo(() => o()(`${e}\0${t}`), [e, t]),
        a = r.useCallback(
            function () {
                let l,
                    r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
                if (d.has(n)) return;
                let a = g.get(n);
                if (null != a) return a;
                if (x(t) && null != r) {
                    try {
                        l = r.highlightToHtml(t);
                    } catch (t) {
                        (d.set(n, !0),
                            g.del(n),
                            p.A.captureException(t instanceof Error ? t : Error(String(t)), {
                                tags: { app_context: "syntax_highlighting" },
                                extra: { lang: e },
                            }));
                        return;
                    }
                    return (g.set(n, l), l);
                }
            },
            [n, t, s, e],
        ),
        [i, c] = r.useState(a);
    return (
        r.useEffect(() => {
            c(a());
        }, [a]),
        r.useEffect(() => {
            let t,
                r = i?.missingInjections;
            if (null == r || 0 === r.length) return;
            let s =
                (null == (t = j.get(n)) &&
                    f(n) &&
                    ((t = (async function (e, t) {
                        let l = await (0, u.$z)(t);
                        return (j.delete(e), g.del(e), l);
                    })(n, r)),
                    j.set(n, t)),
                t);
            if (null == s) return;
            let o = !1;
            return (
                !(async function (t) {
                    let r = await t,
                        s = (0, u.W9)(e ?? "");
                    if (!r && s === l) return;
                    let n = await s;
                    if (o) return;
                    let i = a(n);
                    c((e) =>
                        null != e &&
                        null != i &&
                        e.html === i.html &&
                        (0, h.v)(e.missingInjections, i.missingInjections)
                            ? e
                            : i,
                    );
                })(s),
                () => {
                    o = !0;
                }
            );
        }, [n, a, i?.missingInjections, l, e]),
        i?.html ?? null
    );
}
let w = Object.fromEntries(s.W$.map((e, t) => [e, `var(--custom-ansi-color-${t})`])),
    q = (0, s.rQ)(w);
function S(e) {
    let t = {};
    (null != e.foreground && (t.color = q.value(e.foreground)),
        null != e.background && (t.backgroundColor = q.value(e.background)),
        e.decorations.has("bold") && (t.fontWeight = "bold"),
        e.decorations.has("italic") && (t.fontStyle = "italic"));
    let l = [];
    return (
        e.decorations.has("underline") && l.push("underline"),
        e.decorations.has("strikethrough") && l.push("line-through"),
        e.decorations.has("overline") && l.push("overline"),
        l.length > 0 && (t.textDecorationLine = l.join(" ")),
        Object.keys(t).length > 0 ? t : void 0
    );
}
