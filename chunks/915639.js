async function s(e) {
    return null;
}
a.d(t, { pb: () => c, A: () => b });
class r extends Error {
    kind;
    constructor(e, t) {
        (super(t), (this.name = "ArboriumError"), (this.kind = e));
    }
}
function n(e, t) {
    if (0 === t.length) return [0, 0];
    let a = o.encode(t),
        s = e._malloc(a.length);
    return (e.HEAPU8.set(a, s), [s, a.length]);
}
async function i(e) {
    return e instanceof URL ? g(e) : e instanceof Uint8Array ? e : new Uint8Array(e);
}
async function p(e) {
    if ("string" == typeof e) return e;
    let t = await g(e);
    return l.decode(t);
}
async function g(e) {
    let t = await s(e);
    if (t) return t;
    let a = await fetch(e);
    if (!a.ok) throw new r("asset-fetch-failed", `failed to fetch ${e.href}: ${a.status} ${a.statusText}`);
    return new Uint8Array(await a.arrayBuffer());
}
let o = new TextEncoder(),
    l = new TextDecoder(),
    c = {
        ada: {
            languageId: "ada",
            languageExport: "tree_sitter_ada",
            wasm: new URL(a(554724), a.b),
            highlights: new URL(a(185621), a.b),
            locals: new URL(a(316690), a.b),
        },
        agda: {
            languageId: "agda",
            languageExport: "tree_sitter_agda",
            wasm: new URL(a(544958), a.b),
            highlights: new URL(a(308970), a.b),
        },
        asciidoc: {
            languageId: "asciidoc",
            languageExport: "tree_sitter_asciidoc",
            wasm: new URL(a(492338), a.b),
            highlights: new URL(a(501958), a.b),
        },
        asm: {
            languageId: "asm",
            languageExport: "tree_sitter_asm",
            wasm: new URL(a(691384), a.b),
            highlights: new URL(a(796510), a.b),
            injections: new URL(a(445323), a.b),
        },
        awk: {
            languageId: "awk",
            languageExport: "tree_sitter_awk",
            wasm: new URL(a(151408), a.b),
            highlights: new URL(a(371672), a.b),
        },
        bash: {
            languageId: "bash",
            languageExport: "tree_sitter_bash",
            wasm: new URL(a(996928), a.b),
            highlights: new URL(a(253475), a.b),
        },
        batch: {
            languageId: "batch",
            languageExport: "tree_sitter_batch",
            wasm: new URL(a(901052), a.b),
            highlights: new URL(a(820825), a.b),
        },
        c: {
            languageId: "c",
            languageExport: "tree_sitter_c",
            wasm: new URL(a(623584), a.b),
            highlights: new URL(a(371524), a.b),
        },
        "c-sharp": {
            languageId: "c-sharp",
            languageExport: "tree_sitter_c_sharp",
            wasm: new URL(a(533440), a.b),
            highlights: new URL(a(501721), a.b),
        },
        caddy: {
            languageId: "caddy",
            languageExport: "tree_sitter_caddy",
            wasm: new URL(a(284020), a.b),
            highlights: new URL(a(718266), a.b),
        },
        capnp: {
            languageId: "capnp",
            languageExport: "tree_sitter_capnp",
            wasm: new URL(a(867888), a.b),
            highlights: new URL(a(253515), a.b),
            injections: new URL(a(785462), a.b),
            locals: new URL(a(427200), a.b),
        },
        cedar: {
            languageId: "cedar",
            languageExport: "tree_sitter_cedar",
            wasm: new URL(a(747060), a.b),
            highlights: new URL(a(582242), a.b),
        },
        cedarschema: {
            languageId: "cedarschema",
            languageExport: "tree_sitter_cedarschema",
            wasm: new URL(a(662604), a.b),
            highlights: new URL(a(843389), a.b),
        },
        clojure: {
            languageId: "clojure",
            languageExport: "tree_sitter_clojure",
            wasm: new URL(a(124332), a.b),
            highlights: new URL(a(632781), a.b),
        },
        cmake: {
            languageId: "cmake",
            languageExport: "tree_sitter_cmake",
            wasm: new URL(a(555808), a.b),
            highlights: new URL(a(135538), a.b),
            injections: new URL(a(547431), a.b),
        },
        commonlisp: {
            languageId: "commonlisp",
            languageExport: "tree_sitter_commonlisp",
            wasm: new URL(a(122250), a.b),
            highlights: new URL(a(713796), a.b),
        },
        cpp: {
            languageId: "cpp",
            languageExport: "tree_sitter_cpp",
            wasm: new URL(a(590264), a.b),
            highlights: new URL(a(983420), a.b),
            injections: new URL(a(489565), a.b),
        },
        css: {
            languageId: "css",
            languageExport: "tree_sitter_css",
            wasm: new URL(a(328592), a.b),
            highlights: new URL(a(681166), a.b),
        },
        d: {
            languageId: "d",
            languageExport: "tree_sitter_d",
            wasm: new URL(a(222260), a.b),
            highlights: new URL(a(687429), a.b),
        },
        dart: {
            languageId: "dart",
            languageExport: "tree_sitter_dart",
            wasm: new URL(a(712298), a.b),
            highlights: new URL(a(108572), a.b),
        },
        devicetree: {
            languageId: "devicetree",
            languageExport: "tree_sitter_devicetree",
            wasm: new URL(a(640208), a.b),
            highlights: new URL(a(502907), a.b),
        },
        diff: {
            languageId: "diff",
            languageExport: "tree_sitter_diff",
            wasm: new URL(a(445854), a.b),
            highlights: new URL(a(655582), a.b),
        },
        dockerfile: {
            languageId: "dockerfile",
            languageExport: "tree_sitter_dockerfile",
            wasm: new URL(a(571368), a.b),
            highlights: new URL(a(604623), a.b),
        },
        dot: {
            languageId: "dot",
            languageExport: "tree_sitter_dot",
            wasm: new URL(a(84912), a.b),
            highlights: new URL(a(992094), a.b),
            injections: new URL(a(404043), a.b),
        },
        elisp: {
            languageId: "elisp",
            languageExport: "tree_sitter_elisp",
            wasm: new URL(a(161064), a.b),
            highlights: new URL(a(180458), a.b),
        },
        elixir: {
            languageId: "elixir",
            languageExport: "tree_sitter_elixir",
            wasm: new URL(a(941694), a.b),
            highlights: new URL(a(817218), a.b),
            injections: new URL(a(842039), a.b),
        },
        elm: {
            languageId: "elm",
            languageExport: "tree_sitter_elm",
            wasm: new URL(a(993684), a.b),
            highlights: new URL(a(565989), a.b),
            injections: new URL(a(777084), a.b),
            locals: new URL(a(224578), a.b),
        },
        erlang: {
            languageId: "erlang",
            languageExport: "tree_sitter_erlang",
            wasm: new URL(a(934434), a.b),
            highlights: new URL(a(72382), a.b),
        },
        fish: {
            languageId: "fish",
            languageExport: "tree_sitter_fish",
            wasm: new URL(a(482784), a.b),
            highlights: new URL(a(807991), a.b),
        },
        fsharp: {
            languageId: "fsharp",
            languageExport: "tree_sitter_fsharp",
            wasm: new URL(a(584784), a.b),
            highlights: new URL(a(581583), a.b),
            injections: new URL(a(471586), a.b),
            locals: new URL(a(645372), a.b),
        },
        gleam: {
            languageId: "gleam",
            languageExport: "tree_sitter_gleam",
            wasm: new URL(a(441672), a.b),
            highlights: new URL(a(679453), a.b),
            injections: new URL(a(531860), a.b),
            locals: new URL(a(345322), a.b),
        },
        glsl: {
            languageId: "glsl",
            languageExport: "tree_sitter_glsl",
            wasm: new URL(a(115088), a.b),
            highlights: new URL(a(463989), a.b),
        },
        go: {
            languageId: "go",
            languageExport: "tree_sitter_go",
            wasm: new URL(a(847392), a.b),
            highlights: new URL(a(757283), a.b),
        },
        graphql: {
            languageId: "graphql",
            languageExport: "tree_sitter_graphql",
            wasm: new URL(a(117256), a.b),
            highlights: new URL(a(477092), a.b),
        },
        groovy: {
            languageId: "groovy",
            languageExport: "tree_sitter_groovy",
            wasm: new URL(a(867128), a.b),
            highlights: new URL(a(971567), a.b),
            injections: new URL(a(718850), a.b),
        },
        haskell: {
            languageId: "haskell",
            languageExport: "tree_sitter_haskell",
            wasm: new URL(a(56948), a.b),
            highlights: new URL(a(206965), a.b),
            injections: new URL(a(16076), a.b),
            locals: new URL(a(208626), a.b),
        },
        hcl: {
            languageId: "hcl",
            languageExport: "tree_sitter_hcl",
            wasm: new URL(a(370800), a.b),
            highlights: new URL(a(972942), a.b),
        },
        hlsl: {
            languageId: "hlsl",
            languageExport: "tree_sitter_hlsl",
            wasm: new URL(a(697922), a.b),
            highlights: new URL(a(449794), a.b),
        },
        html: {
            languageId: "html",
            languageExport: "tree_sitter_html",
            wasm: new URL(a(284030), a.b),
            highlights: new URL(a(911112), a.b),
            injections: new URL(a(495969), a.b),
        },
        idris: {
            languageId: "idris",
            languageExport: "tree_sitter_idris",
            wasm: new URL(a(561740), a.b),
            highlights: new URL(a(583152), a.b),
        },
        ini: {
            languageId: "ini",
            languageExport: "tree_sitter_ini",
            wasm: new URL(a(771944), a.b),
            highlights: new URL(a(363471), a.b),
        },
        java: {
            languageId: "java",
            languageExport: "tree_sitter_java",
            wasm: new URL(a(299080), a.b),
            highlights: new URL(a(883585), a.b),
        },
        javascript: {
            languageId: "javascript",
            languageExport: "tree_sitter_javascript",
            wasm: new URL(a(316662), a.b),
            highlights: new URL(a(646866), a.b),
            injections: new URL(a(70855), a.b),
            locals: new URL(a(66753), a.b),
        },
        jinja2: {
            languageId: "jinja2",
            languageExport: "tree_sitter_jinja2",
            wasm: new URL(a(848368), a.b),
            highlights: new URL(a(137323), a.b),
        },
        jq: {
            languageId: "jq",
            languageExport: "tree_sitter_jq",
            wasm: new URL(a(314786), a.b),
            highlights: new URL(a(20080), a.b),
        },
        json: {
            languageId: "json",
            languageExport: "tree_sitter_json",
            wasm: new URL(a(316712), a.b),
            highlights: new URL(a(187311), a.b),
        },
        julia: {
            languageId: "julia",
            languageExport: "tree_sitter_julia",
            wasm: new URL(a(285568), a.b),
            highlights: new URL(a(324828), a.b),
        },
        kotlin: {
            languageId: "kotlin",
            languageExport: "tree_sitter_kotlin",
            wasm: new URL(a(787434), a.b),
            highlights: new URL(a(823504), a.b),
        },
        lean: {
            languageId: "lean",
            languageExport: "tree_sitter_lean",
            wasm: new URL(a(655652), a.b),
            highlights: new URL(a(281161), a.b),
        },
        lua: {
            languageId: "lua",
            languageExport: "tree_sitter_lua",
            wasm: new URL(a(718992), a.b),
            highlights: new URL(a(871659), a.b),
            injections: new URL(a(273558), a.b),
            locals: new URL(a(864928), a.b),
        },
        markdown: {
            languageId: "markdown",
            languageExport: "tree_sitter_markdown",
            wasm: new URL(a(86414), a.b),
            highlights: new URL(a(9916), a.b),
            injections: new URL(a(516061), a.b),
        },
        markdown_inline: {
            languageId: "markdown_inline",
            languageExport: "tree_sitter_markdown_inline",
            wasm: new URL(a(348820), a.b),
            highlights: new URL(a(581934), a.b),
            injections: new URL(a(858376), a.b),
        },
        matlab: {
            languageId: "matlab",
            languageExport: "tree_sitter_matlab",
            wasm: new URL(a(675046), a.b),
            highlights: new URL(a(955268), a.b),
        },
        meson: {
            languageId: "meson",
            languageExport: "tree_sitter_meson",
            wasm: new URL(a(835952), a.b),
            highlights: new URL(a(448407), a.b),
        },
        ninja: {
            languageId: "ninja",
            languageExport: "tree_sitter_ninja",
            wasm: new URL(a(75464), a.b),
            highlights: new URL(a(980429), a.b),
        },
        nix: {
            languageId: "nix",
            languageExport: "tree_sitter_nix",
            wasm: new URL(a(242508), a.b),
            highlights: new URL(a(714370), a.b),
            injections: new URL(a(739191), a.b),
            locals: new URL(a(227473), a.b),
        },
        objc: {
            languageId: "objc",
            languageExport: "tree_sitter_objc",
            wasm: new URL(a(45456), a.b),
            highlights: new URL(a(974591), a.b),
            injections: new URL(a(860306), a.b),
            locals: new URL(a(373196), a.b),
        },
        ocaml: {
            languageId: "ocaml",
            languageExport: "tree_sitter_ocaml",
            wasm: new URL(a(916372), a.b),
            highlights: new URL(a(602297), a.b),
            locals: new URL(a(347294), a.b),
        },
        perl: {
            languageId: "perl",
            languageExport: "tree_sitter_perl",
            wasm: new URL(a(571834), a.b),
            highlights: new URL(a(358060), a.b),
            injections: new URL(a(486221), a.b),
        },
        php: {
            languageId: "php",
            languageExport: "tree_sitter_php",
            wasm: new URL(a(247524), a.b),
            highlights: new URL(a(910825), a.b),
            injections: new URL(a(323e3), a.b),
        },
        postscript: {
            languageId: "postscript",
            languageExport: "tree_sitter_postscript",
            wasm: new URL(a(628490), a.b),
            highlights: new URL(a(980524), a.b),
        },
        powershell: {
            languageId: "powershell",
            languageExport: "tree_sitter_powershell",
            wasm: new URL(a(177910), a.b),
            highlights: new URL(a(449048), a.b),
        },
        prolog: {
            languageId: "prolog",
            languageExport: "tree_sitter_prolog",
            wasm: new URL(a(330234), a.b),
            highlights: new URL(a(290858), a.b),
        },
        python: {
            languageId: "python",
            languageExport: "tree_sitter_python",
            wasm: new URL(a(181712), a.b),
            highlights: new URL(a(425335), a.b),
        },
        query: {
            languageId: "query",
            languageExport: "tree_sitter_query",
            wasm: new URL(a(892256), a.b),
            highlights: new URL(a(214685), a.b),
            injections: new URL(a(840660), a.b),
        },
        r: {
            languageId: "r",
            languageExport: "tree_sitter_r",
            wasm: new URL(a(157456), a.b),
            highlights: new URL(a(652715), a.b),
            locals: new URL(a(396576), a.b),
        },
        rego: {
            languageId: "rego",
            languageExport: "tree_sitter_rego",
            wasm: new URL(a(705750), a.b),
            highlights: new URL(a(968038), a.b),
            locals: new URL(a(914189), a.b),
        },
        rescript: {
            languageId: "rescript",
            languageExport: "tree_sitter_rescript",
            wasm: new URL(a(834640), a.b),
            highlights: new URL(a(855995), a.b),
            injections: new URL(a(479846), a.b),
            locals: new URL(a(539152), a.b),
        },
        ron: {
            languageId: "ron",
            languageExport: "tree_sitter_ron",
            wasm: new URL(a(762296), a.b),
            highlights: new URL(a(342870), a.b),
        },
        ruby: {
            languageId: "ruby",
            languageExport: "tree_sitter_ruby",
            wasm: new URL(a(282952), a.b),
            highlights: new URL(a(221081), a.b),
        },
        rust: {
            languageId: "rust",
            languageExport: "tree_sitter_rust_orchard",
            wasm: new URL(a(585232), a.b),
            highlights: new URL(a(544211), a.b),
            injections: new URL(a(153278), a.b),
        },
        scala: {
            languageId: "scala",
            languageExport: "tree_sitter_scala",
            wasm: new URL(a(715408), a.b),
            highlights: new URL(a(636155), a.b),
            locals: new URL(a(798928), a.b),
        },
        scheme: {
            languageId: "scheme",
            languageExport: "tree_sitter_scheme",
            wasm: new URL(a(910038), a.b),
            highlights: new URL(a(499150), a.b),
        },
        scss: {
            languageId: "scss",
            languageExport: "tree_sitter_scss",
            wasm: new URL(a(42040), a.b),
            highlights: new URL(a(581365), a.b),
        },
        solidity: {
            languageId: "solidity",
            languageExport: "tree_sitter_solidity",
            wasm: new URL(a(711194), a.b),
            highlights: new URL(a(93492), a.b),
            locals: new URL(a(307379), a.b),
        },
        sparql: {
            languageId: "sparql",
            languageExport: "tree_sitter_sparql",
            wasm: new URL(a(622914), a.b),
            highlights: new URL(a(512564), a.b),
        },
        sql: {
            languageId: "sql",
            languageExport: "tree_sitter_sql",
            wasm: new URL(a(295832), a.b),
            highlights: new URL(a(631189), a.b),
        },
        "ssh-config": {
            languageId: "ssh-config",
            languageExport: "tree_sitter_ssh_config",
            wasm: new URL(a(805938), a.b),
            highlights: new URL(a(400774), a.b),
            injections: new URL(a(557011), a.b),
        },
        starlark: {
            languageId: "starlark",
            languageExport: "tree_sitter_starlark",
            wasm: new URL(a(317952), a.b),
            highlights: new URL(a(757197), a.b),
            injections: new URL(a(362116), a.b),
            locals: new URL(a(607930), a.b),
        },
        styx: {
            languageId: "styx",
            languageExport: "tree_sitter_styx",
            wasm: new URL(a(793104), a.b),
            highlights: new URL(a(789227), a.b),
            injections: new URL(a(447638), a.b),
        },
        svelte: {
            languageId: "svelte",
            languageExport: "tree_sitter_svelte",
            wasm: new URL(a(463302), a.b),
            highlights: new URL(a(582814), a.b),
            injections: new URL(a(994763), a.b),
            locals: new URL(a(756661), a.b),
        },
        swift: {
            languageId: "swift",
            languageExport: "tree_sitter_swift",
            wasm: new URL(a(682004), a.b),
            highlights: new URL(a(259850), a.b),
            injections: new URL(a(134399), a.b),
            locals: new URL(a(917129), a.b),
        },
        textproto: {
            languageId: "textproto",
            languageExport: "tree_sitter_textproto",
            wasm: new URL(a(658400), a.b),
            highlights: new URL(a(264834), a.b),
        },
        thrift: {
            languageId: "thrift",
            languageExport: "tree_sitter_thrift",
            wasm: new URL(a(40570), a.b),
            highlights: new URL(a(584122), a.b),
            injections: new URL(a(259439), a.b),
            locals: new URL(a(720793), a.b),
        },
        tlaplus: {
            languageId: "tlaplus",
            languageExport: "tree_sitter_tlaplus",
            wasm: new URL(a(703724), a.b),
            highlights: new URL(a(58894), a.b),
            locals: new URL(a(661637), a.b),
        },
        toml: {
            languageId: "toml",
            languageExport: "tree_sitter_toml",
            wasm: new URL(a(155308), a.b),
            highlights: new URL(a(191649), a.b),
        },
        tsx: {
            languageId: "tsx",
            languageExport: "tree_sitter_tsx",
            wasm: new URL(a(21256), a.b),
            highlights: new URL(a(613110), a.b),
            locals: new URL(a(757629), a.b),
        },
        typescript: {
            languageId: "typescript",
            languageExport: "tree_sitter_typescript",
            wasm: new URL(a(733926), a.b),
            highlights: new URL(a(648506), a.b),
            locals: new URL(a(194201), a.b),
        },
        typst: {
            languageId: "typst",
            languageExport: "tree_sitter_typst",
            wasm: new URL(a(262848), a.b),
            highlights: new URL(a(13079), a.b),
            injections: new URL(a(960138), a.b),
        },
        verilog: {
            languageId: "verilog",
            languageExport: "tree_sitter_verilog",
            wasm: new URL(a(502768), a.b),
            highlights: new URL(a(486859), a.b),
        },
        vhdl: {
            languageId: "vhdl",
            languageExport: "tree_sitter_vhdl",
            wasm: new URL(a(276912), a.b),
            highlights: new URL(a(858987), a.b),
        },
        vim: {
            languageId: "vim",
            languageExport: "tree_sitter_vim",
            wasm: new URL(a(699736), a.b),
            highlights: new URL(a(330909), a.b),
            injections: new URL(a(440532), a.b),
        },
        vue: {
            languageId: "vue",
            languageExport: "tree_sitter_vue",
            wasm: new URL(a(769320), a.b),
            highlights: new URL(a(4081), a.b),
            injections: new URL(a(751968), a.b),
        },
        wit: {
            languageId: "wit",
            languageExport: "tree_sitter_wit",
            wasm: new URL(a(650024), a.b),
            highlights: new URL(a(856145), a.b),
            injections: new URL(a(413056), a.b),
        },
        x86asm: {
            languageId: "x86asm",
            languageExport: "tree_sitter_x86asm",
            wasm: new URL(a(26558), a.b),
            highlights: new URL(a(489700), a.b),
        },
        xml: {
            languageId: "xml",
            languageExport: "tree_sitter_xml",
            wasm: new URL(a(897836), a.b),
            highlights: new URL(a(730180), a.b),
        },
        yaml: {
            languageId: "yaml",
            languageExport: "tree_sitter_yaml",
            wasm: new URL(a(30290), a.b),
            highlights: new URL(a(395958), a.b),
        },
        yuri: {
            languageId: "yuri",
            languageExport: "tree_sitter_yuri",
            wasm: new URL(a(78170), a.b),
            highlights: new URL(a(686146), a.b),
        },
        zig: {
            languageId: "zig",
            languageExport: "tree_sitter_zig",
            wasm: new URL(a(256976), a.b),
            highlights: new URL(a(692027), a.b),
            injections: new URL(a(95334), a.b),
        },
        zsh: {
            languageId: "zsh",
            languageExport: "tree_sitter_zsh",
            wasm: new URL(a(727216), a.b),
            highlights: new URL(a(371952), a.b),
        },
    };
async function b() {
    let e = await w(),
        [t, s] = await Promise.all([i(new URL(a(79445), a.b)), i(new URL(a(531031), a.b))]),
        r = await e({ wasmBinary: t }),
        n = await r.loadWebAssemblyModule(s, { loadAsync: !0 });
    return new m(r, n);
}
class m {
    host;
    abi;
    constructor(e, t) {
        ((this.host = e), (this.abi = t));
    }
    async loadGrammar(e) {
        if (!e.languageId)
            throw new r(
                "grammar-registration-failed",
                "loadGrammar: languageId is required (must match the name referenced by injection queries)",
            );
        let [t, a, s, g] = await Promise.all([
                i(e.wasm),
                p(e.highlights),
                void 0 === e.injections ? "" : p(e.injections),
                void 0 === e.locals ? "" : p(e.locals),
            ]),
            o = (function (e, t) {
                if (void 0 !== t) {
                    let a = e[t];
                    if ("function" != typeof a)
                        throw new r(
                            "grammar-language-export-missing",
                            `grammar module has no function export named ${JSON.stringify(t)}`,
                        );
                    return a;
                }
                let a = Object.keys(e).filter((t) => t.startsWith("tree_sitter_") && "function" == typeof e[t]);
                if (0 === a.length)
                    throw new r(
                        "grammar-language-export-missing",
                        "grammar module has no function export starting with tree_sitter_",
                    );
                if (a.length > 1)
                    throw new r(
                        "grammar-language-export-missing",
                        `grammar module has multiple tree_sitter_* exports: ${a.join(", ")}. Pass options.languageExport to disambiguate.`,
                    );
                return e[a[0]];
            })(await this.host.loadWebAssemblyModule(t, { loadAsync: !0 }), e.languageExport)();
        if (!o) throw new r("grammar-registration-failed", "grammar tree_sitter_* export returned null");
        let [l, c] = n(this.host, e.languageId),
            [b, m] = n(this.host, a),
            [h, w] = n(this.host, s),
            [u, f] = n(this.host, g),
            x = 0;
        try {
            x = this.abi.arborium_rt_register_grammar(o, l, c, b, m, h, w, u, f);
        } finally {
            (l && this.host._free(l), b && this.host._free(b), h && this.host._free(h), u && this.host._free(u));
        }
        if (0 === x)
            throw new r(
                "grammar-registration-failed",
                "arborium_rt_register_grammar returned 0 (query compile failure, bad language ptr, or empty name?)",
            );
        return new d(this, x, o, e.languageId);
    }
}
class d {
    runtime;
    id;
    languagePtr;
    languageId;
    #e = !1;
    constructor(e, t, a, s) {
        ((this.runtime = e), (this.id = t), (this.languagePtr = a), (this.languageId = s));
    }
    createSession() {
        this.#t();
        let e = this.runtime.abi.arborium_rt_create_session(this.id);
        if (0 === e) throw new r("session-creation-failed", `arborium_rt_create_session(${this.id}) returned 0`);
        return new h(this, e);
    }
    unregister() {
        this.#e || (this.runtime.abi.arborium_rt_unregister_grammar(this.id), (this.#e = !0));
    }
    #t() {
        if (this.#e) throw new r("grammar-registration-failed", `grammar ${this.id} has been unregistered`);
    }
}
class h {
    grammar;
    id;
    #a = !1;
    constructor(e, t) {
        ((this.grammar = e), (this.id = t));
    }
    setText(e) {
        this.#t();
        let [t, a] = n(this.grammar.runtime.host, e);
        try {
            this.grammar.runtime.abi.arborium_rt_set_text(this.id, t, a);
        } finally {
            t && this.grammar.runtime.host._free(t);
        }
    }
    parse() {
        return (
            this.#t(),
            this.#s(
                "parse-failed",
                (e, t) => this.grammar.runtime.abi.arborium_rt_parse_utf16(this.id, e, t),
                (e) => (0 === e.length ? { spans: [], injections: [], fuel_used: 0, out_of_fuel: !1 } : JSON.parse(e)),
            )
        );
    }
    highlightToSpans(e = {}) {
        this.#t();
        let t = e.maxInjectionDepth ?? 3,
            a = this.#s(
                "highlight-failed",
                (e, a) => this.grammar.runtime.abi.arborium_rt_highlight_to_spans_utf16(this.id, t, e, a),
                (e) =>
                    0 === e.length
                        ? { spans: [], missing_injections: [], out_of_fuel_languages: [], fuel_used: 0 }
                        : JSON.parse(e),
            );
        return {
            spans: a.spans,
            missingInjections: a.missing_injections,
            outOfFuelLanguages: a.out_of_fuel_languages,
            fuelUsed: a.fuel_used,
        };
    }
    highlightToHtml(e = {}) {
        this.#t();
        let t = e.maxInjectionDepth ?? 3,
            a = e.format ?? { kind: "custom-elements" },
            { host: s } = this.grammar.runtime,
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
            })(a),
            [p, g] = n(s, i);
        try {
            let e = this.#s(
                "highlight-failed",
                (e, a) => this.grammar.runtime.abi.arborium_rt_highlight_to_html(this.id, t, r, p, g, e, a),
                (e) =>
                    0 === e.length
                        ? { html: "", missing_injections: [], out_of_fuel_languages: [], fuel_used: 0 }
                        : JSON.parse(e),
            );
            return {
                html: e.html,
                missingInjections: e.missing_injections,
                outOfFuelLanguages: e.out_of_fuel_languages,
                fuelUsed: e.fuel_used,
            };
        } finally {
            p && s._free(p);
        }
    }
    cancel() {
        (this.#t(), this.grammar.runtime.abi.arborium_rt_cancel(this.id));
    }
    free() {
        this.#a || (this.grammar.runtime.abi.arborium_rt_free_session(this.id), (this.#a = !0));
    }
    #t() {
        if (this.#a) throw new r("session-creation-failed", `session ${this.id} has been freed`);
    }
    #s(e, t, a) {
        let { host: s, abi: n } = this.grammar.runtime,
            i = s._malloc(4),
            p = s._malloc(4);
        try {
            let g = t(i, p);
            if (0 !== g) throw new r(e, `arborium_rt call returned status ${g}`);
            let o = s.getValue(i, "i32"),
                c = s.getValue(p, "i32");
            if (0 === c) return a("");
            try {
                return a(0 === c ? "" : l.decode(s.HEAPU8.subarray(o, o + c)));
            } finally {
                n.arborium_rt_free(o, c);
            }
        } finally {
            (s._free(i), s._free(p));
        }
    }
}
async function w() {
    return (await a.e("379098").then(a.bind(a, 623777))).default;
}
