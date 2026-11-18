(l.d(s, { No: () => b, OT: () => k, py: () => f, OY: () => y }), l(321073));
var t = l(582128),
    r = l(626551),
    a = l(635377),
    o = l.n(a),
    n = l(181370),
    c = l.n(n);
let i = new Set([
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
var p = l(52133),
    h = l(856383),
    m = l(873119);
let u = /^[a-z0-9_+\-.#]+$/,
    d = new (o())({ max: 256 }),
    g = new (o())({ max: 256 }),
    j = {
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
    b = new Set([...i, ...Object.keys(j)]);
function f(e) {
    if (null == e) return;
    let s = e.toLowerCase();
    if (!u.test(s)) return;
    if (i.has(s)) return s;
    let l = j[s];
    if (null != l && i.has(l)) return l;
}
function y(e, s) {
    let l = t.use((0, m.W9)(e ?? "")),
        r = t.useMemo(() => c()(`${e}\0${s}`), [e, s]),
        a = t.useCallback(
            function () {
                let t,
                    a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!a) {
                    let e = d.get(r);
                    if (null != e) return e;
                }
                if (
                    !(
                        !(function (e) {
                            for (let s of e.split("\n")) if (s.length > 1e3) return !1;
                            return !0;
                        })(s) ||
                        null == l ||
                        g.has(r)
                    )
                ) {
                    try {
                        t = l.highlightToHtml(s);
                    } catch (s) {
                        (g.set(r, !0),
                            h.A.captureException(s instanceof Error ? s : Error(String(s)), {
                                tags: { app_context: "syntax_highlighting" },
                                extra: { lang: e },
                            }));
                        return;
                    }
                    return (d.set(r, t), t);
                }
            },
            [r, s, l, e],
        ),
        [o, n] = t.useState(a);
    return (
        t.useEffect(() => {
            n(a());
        }, [a]),
        t.useEffect(() => {
            let e = o?.missingInjections;
            if (null == e || 0 === e.length) return;
            let s = !1;
            for (let l of e)
                (0, m.W9)(l).then(() => {
                    s ||
                        n((e) => {
                            let s = a(!0);
                            return null == s ||
                                (null != e && e.html === s.html && (0, p.v)(e.missingInjections, s.missingInjections))
                                ? e
                                : s;
                        });
                });
            return () => {
                s = !0;
            };
        }, [r, a, o?.missingInjections]),
        o?.html ?? null
    );
}
let v = Object.fromEntries(r.W$.map((e, s) => [e, `var(--custom-ansi-color-${s})`])),
    x = (0, r.rQ)(v);
function k(e) {
    let s = {};
    (null != e.foreground && (s.color = x.value(e.foreground)),
        null != e.background && (s.backgroundColor = x.value(e.background)),
        e.decorations.has("bold") && (s.fontWeight = "bold"),
        e.decorations.has("italic") && (s.fontStyle = "italic"));
    let l = [];
    return (
        e.decorations.has("underline") && l.push("underline"),
        e.decorations.has("strikethrough") && l.push("line-through"),
        e.decorations.has("overline") && l.push("overline"),
        l.length > 0 && (s.textDecorationLine = l.join(" ")),
        Object.keys(s).length > 0 ? s : void 0
    );
}
