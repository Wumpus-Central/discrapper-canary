async function r(e) {
    return null;
}
s.d(t, { pb: () => l, A: () => g });
class a extends Error {
    kind;
    constructor(e, t) {
        (super(t), (this.name = "ArboriumError"), (this.kind = e));
    }
}
function i(e, t) {
    if (0 === t.length) return [0, 0];
    let s = p.encode(t),
        r = e._malloc(s.length);
    return (e.HEAPU8.set(s, r), [r, s.length]);
}
async function o(e) {
    return e instanceof URL ? c(e) : e instanceof Uint8Array ? e : new Uint8Array(e);
}
async function n(e) {
    if ("string" == typeof e) return e;
    let t = await c(e);
    return _.decode(t);
}
async function c(e) {
    let t = await r(e);
    if (t) return t;
    let s = await fetch(e);
    if (!s.ok) throw new a("asset-fetch-failed", `failed to fetch ${e.href}: ${s.status} ${s.statusText}`);
    return new Uint8Array(await s.arrayBuffer());
}
let p = new TextEncoder(),
    _ = new TextDecoder(),
    l = {
        ada: {
            languageId: "ada",
            languageExport: "tree_sitter_ada",
            wasm: new URL(s(314795), s.b),
            highlights: new URL(s(185621), s.b),
            locals: new URL(s(316690), s.b),
        },
        agda: {
            languageId: "agda",
            languageExport: "tree_sitter_agda",
            wasm: new URL(s(111909), s.b),
            highlights: new URL(s(308970), s.b),
        },
        asciidoc: {
            languageId: "asciidoc",
            languageExport: "tree_sitter_asciidoc",
            wasm: new URL(s(797101), s.b),
            highlights: new URL(s(501958), s.b),
        },
        asm: {
            languageId: "asm",
            languageExport: "tree_sitter_asm",
            wasm: new URL(s(664943), s.b),
            highlights: new URL(s(796510), s.b),
            injections: new URL(s(445323), s.b),
        },
        awk: {
            languageId: "awk",
            languageExport: "tree_sitter_awk",
            wasm: new URL(s(280063), s.b),
            highlights: new URL(s(371672), s.b),
        },
        bash: {
            languageId: "bash",
            languageExport: "tree_sitter_bash",
            wasm: new URL(s(538567), s.b),
            highlights: new URL(s(253475), s.b),
        },
        batch: {
            languageId: "batch",
            languageExport: "tree_sitter_batch",
            wasm: new URL(s(419227), s.b),
            highlights: new URL(s(820825), s.b),
        },
        c: {
            languageId: "c",
            languageExport: "tree_sitter_c",
            wasm: new URL(s(546943), s.b),
            highlights: new URL(s(371524), s.b),
        },
        "c-sharp": {
            languageId: "c-sharp",
            languageExport: "tree_sitter_c_sharp",
            wasm: new URL(s(253135), s.b),
            highlights: new URL(s(501721), s.b),
        },
        caddy: {
            languageId: "caddy",
            languageExport: "tree_sitter_caddy",
            wasm: new URL(s(520883), s.b),
            highlights: new URL(s(718266), s.b),
        },
        capnp: {
            languageId: "capnp",
            languageExport: "tree_sitter_capnp",
            wasm: new URL(s(71343), s.b),
            highlights: new URL(s(253515), s.b),
            injections: new URL(s(785462), s.b),
            locals: new URL(s(427200), s.b),
        },
        cedar: {
            languageId: "cedar",
            languageExport: "tree_sitter_cedar",
            wasm: new URL(s(59067), s.b),
            highlights: new URL(s(582242), s.b),
        },
        cedarschema: {
            languageId: "cedarschema",
            languageExport: "tree_sitter_cedarschema",
            wasm: new URL(s(370115), s.b),
            highlights: new URL(s(843389), s.b),
        },
        clojure: {
            languageId: "clojure",
            languageExport: "tree_sitter_clojure",
            wasm: new URL(s(582371), s.b),
            highlights: new URL(s(632781), s.b),
        },
        cmake: {
            languageId: "cmake",
            languageExport: "tree_sitter_cmake",
            wasm: new URL(s(933959), s.b),
            highlights: new URL(s(135538), s.b),
            injections: new URL(s(547431), s.b),
        },
        commonlisp: {
            languageId: "commonlisp",
            languageExport: "tree_sitter_commonlisp",
            wasm: new URL(s(776097), s.b),
            highlights: new URL(s(713796), s.b),
        },
        cpp: {
            languageId: "cpp",
            languageExport: "tree_sitter_cpp",
            wasm: new URL(s(114935), s.b),
            highlights: new URL(s(983420), s.b),
            injections: new URL(s(489565), s.b),
        },
        css: {
            languageId: "css",
            languageExport: "tree_sitter_css",
            wasm: new URL(s(5559), s.b),
            highlights: new URL(s(681166), s.b),
        },
        d: {
            languageId: "d",
            languageExport: "tree_sitter_d",
            wasm: new URL(s(806835), s.b),
            highlights: new URL(s(687429), s.b),
        },
        dart: {
            languageId: "dart",
            languageExport: "tree_sitter_dart",
            wasm: new URL(s(376297), s.b),
            highlights: new URL(s(108572), s.b),
        },
        devicetree: {
            languageId: "devicetree",
            languageExport: "tree_sitter_devicetree",
            wasm: new URL(s(72539), s.b),
            highlights: new URL(s(502907), s.b),
        },
        diff: {
            languageId: "diff",
            languageExport: "tree_sitter_diff",
            wasm: new URL(s(165361), s.b),
            highlights: new URL(s(655582), s.b),
        },
        dockerfile: {
            languageId: "dockerfile",
            languageExport: "tree_sitter_dockerfile",
            wasm: new URL(s(992963), s.b),
            highlights: new URL(s(604623), s.b),
        },
        dot: {
            languageId: "dot",
            languageExport: "tree_sitter_dot",
            wasm: new URL(s(78767), s.b),
            highlights: new URL(s(992094), s.b),
            injections: new URL(s(404043), s.b),
        },
        elisp: {
            languageId: "elisp",
            languageExport: "tree_sitter_elisp",
            wasm: new URL(s(560391), s.b),
            highlights: new URL(s(180458), s.b),
        },
        elixir: {
            languageId: "elixir",
            languageExport: "tree_sitter_elixir",
            wasm: new URL(s(988013), s.b),
            highlights: new URL(s(817218), s.b),
            injections: new URL(s(842039), s.b),
        },
        elm: {
            languageId: "elm",
            languageExport: "tree_sitter_elm",
            wasm: new URL(s(61083), s.b),
            highlights: new URL(s(565989), s.b),
            injections: new URL(s(777084), s.b),
            locals: new URL(s(224578), s.b),
        },
        erlang: {
            languageId: "erlang",
            languageExport: "tree_sitter_erlang",
            wasm: new URL(s(239737), s.b),
            highlights: new URL(s(72382), s.b),
        },
        fish: {
            languageId: "fish",
            languageExport: "tree_sitter_fish",
            wasm: new URL(s(49775), s.b),
            highlights: new URL(s(807991), s.b),
        },
        fsharp: {
            languageId: "fsharp",
            languageExport: "tree_sitter_fsharp",
            wasm: new URL(s(749307), s.b),
            highlights: new URL(s(581583), s.b),
            injections: new URL(s(471586), s.b),
            locals: new URL(s(645372), s.b),
        },
        gleam: {
            languageId: "gleam",
            languageExport: "tree_sitter_gleam",
            wasm: new URL(s(896335), s.b),
            highlights: new URL(s(679453), s.b),
            injections: new URL(s(531860), s.b),
            locals: new URL(s(345322), s.b),
        },
        glsl: {
            languageId: "glsl",
            languageExport: "tree_sitter_glsl",
            wasm: new URL(s(127887), s.b),
            highlights: new URL(s(463989), s.b),
        },
        go: {
            languageId: "go",
            languageExport: "tree_sitter_go",
            wasm: new URL(s(913447), s.b),
            highlights: new URL(s(757283), s.b),
        },
        graphql: {
            languageId: "graphql",
            languageExport: "tree_sitter_graphql",
            wasm: new URL(s(392263), s.b),
            highlights: new URL(s(477092), s.b),
        },
        groovy: {
            languageId: "groovy",
            languageExport: "tree_sitter_groovy",
            wasm: new URL(s(379339), s.b),
            highlights: new URL(s(971567), s.b),
            injections: new URL(s(718850), s.b),
        },
        haskell: {
            languageId: "haskell",
            languageExport: "tree_sitter_haskell",
            wasm: new URL(s(131083), s.b),
            highlights: new URL(s(206965), s.b),
            injections: new URL(s(16076), s.b),
            locals: new URL(s(208626), s.b),
        },
        hcl: {
            languageId: "hcl",
            languageExport: "tree_sitter_hcl",
            wasm: new URL(s(882247), s.b),
            highlights: new URL(s(972942), s.b),
        },
        hlsl: {
            languageId: "hlsl",
            languageExport: "tree_sitter_hlsl",
            wasm: new URL(s(939193), s.b),
            highlights: new URL(s(449794), s.b),
        },
        html: {
            languageId: "html",
            languageExport: "tree_sitter_html",
            wasm: new URL(s(810601), s.b),
            highlights: new URL(s(911112), s.b),
            injections: new URL(s(495969), s.b),
        },
        idris: {
            languageId: "idris",
            languageExport: "tree_sitter_idris",
            wasm: new URL(s(459355), s.b),
            highlights: new URL(s(583152), s.b),
        },
        ini: {
            languageId: "ini",
            languageExport: "tree_sitter_ini",
            wasm: new URL(s(579311), s.b),
            highlights: new URL(s(363471), s.b),
        },
        java: {
            languageId: "java",
            languageExport: "tree_sitter_java",
            wasm: new URL(s(798703), s.b),
            highlights: new URL(s(883585), s.b),
        },
        javascript: {
            languageId: "javascript",
            languageExport: "tree_sitter_javascript",
            wasm: new URL(s(570445), s.b),
            highlights: new URL(s(646866), s.b),
            injections: new URL(s(70855), s.b),
            locals: new URL(s(66753), s.b),
        },
        jinja2: {
            languageId: "jinja2",
            languageExport: "tree_sitter_jinja2",
            wasm: new URL(s(289375), s.b),
            highlights: new URL(s(137323), s.b),
        },
        jq: {
            languageId: "jq",
            languageExport: "tree_sitter_jq",
            wasm: new URL(s(896193), s.b),
            highlights: new URL(s(20080), s.b),
        },
        json: {
            languageId: "json",
            languageExport: "tree_sitter_json",
            wasm: new URL(s(73655), s.b),
            highlights: new URL(s(187311), s.b),
        },
        julia: {
            languageId: "julia",
            languageExport: "tree_sitter_julia",
            wasm: new URL(s(783199), s.b),
            highlights: new URL(s(324828), s.b),
        },
        kotlin: {
            languageId: "kotlin",
            languageExport: "tree_sitter_kotlin",
            wasm: new URL(s(208929), s.b),
            highlights: new URL(s(823504), s.b),
        },
        lean: {
            languageId: "lean",
            languageExport: "tree_sitter_lean",
            wasm: new URL(s(624783), s.b),
            highlights: new URL(s(281161), s.b),
        },
        lua: {
            languageId: "lua",
            languageExport: "tree_sitter_lua",
            wasm: new URL(s(545711), s.b),
            highlights: new URL(s(871659), s.b),
            injections: new URL(s(273558), s.b),
            locals: new URL(s(864928), s.b),
        },
        markdown: {
            languageId: "markdown",
            languageExport: "tree_sitter_markdown",
            wasm: new URL(s(697165), s.b),
            highlights: new URL(s(9916), s.b),
            injections: new URL(s(516061), s.b),
        },
        markdown_inline: {
            languageId: "markdown_inline",
            languageExport: "tree_sitter_markdown_inline",
            wasm: new URL(s(344467), s.b),
            highlights: new URL(s(581934), s.b),
            injections: new URL(s(858376), s.b),
        },
        matlab: {
            languageId: "matlab",
            languageExport: "tree_sitter_matlab",
            wasm: new URL(s(393725), s.b),
            highlights: new URL(s(955268), s.b),
        },
        meson: {
            languageId: "meson",
            languageExport: "tree_sitter_meson",
            wasm: new URL(s(63343), s.b),
            highlights: new URL(s(448407), s.b),
        },
        ninja: {
            languageId: "ninja",
            languageExport: "tree_sitter_ninja",
            wasm: new URL(s(17743), s.b),
            highlights: new URL(s(980429), s.b),
        },
        nix: {
            languageId: "nix",
            languageExport: "tree_sitter_nix",
            wasm: new URL(s(781035), s.b),
            highlights: new URL(s(714370), s.b),
            injections: new URL(s(739191), s.b),
            locals: new URL(s(227473), s.b),
        },
        objc: {
            languageId: "objc",
            languageExport: "tree_sitter_objc",
            wasm: new URL(s(852423), s.b),
            highlights: new URL(s(974591), s.b),
            injections: new URL(s(860306), s.b),
            locals: new URL(s(373196), s.b),
        },
        ocaml: {
            languageId: "ocaml",
            languageExport: "tree_sitter_ocaml",
            wasm: new URL(s(278331), s.b),
            highlights: new URL(s(602297), s.b),
            locals: new URL(s(347294), s.b),
        },
        perl: {
            languageId: "perl",
            languageExport: "tree_sitter_perl",
            wasm: new URL(s(395233), s.b),
            highlights: new URL(s(358060), s.b),
            injections: new URL(s(486221), s.b),
        },
        php: {
            languageId: "php",
            languageExport: "tree_sitter_php",
            wasm: new URL(s(605171), s.b),
            highlights: new URL(s(910825), s.b),
            injections: new URL(s(323e3), s.b),
        },
        postscript: {
            languageId: "postscript",
            languageExport: "tree_sitter_postscript",
            wasm: new URL(s(835721), s.b),
            highlights: new URL(s(980524), s.b),
        },
        powershell: {
            languageId: "powershell",
            languageExport: "tree_sitter_powershell",
            wasm: new URL(s(602993), s.b),
            highlights: new URL(s(449048), s.b),
        },
        prolog: {
            languageId: "prolog",
            languageExport: "tree_sitter_prolog",
            wasm: new URL(s(299861), s.b),
            highlights: new URL(s(290858), s.b),
        },
        python: {
            languageId: "python",
            languageExport: "tree_sitter_python",
            wasm: new URL(s(683151), s.b),
            highlights: new URL(s(425335), s.b),
        },
        query: {
            languageId: "query",
            languageExport: "tree_sitter_query",
            wasm: new URL(s(282111), s.b),
            highlights: new URL(s(214685), s.b),
            injections: new URL(s(840660), s.b),
        },
        r: {
            languageId: "r",
            languageExport: "tree_sitter_r",
            wasm: new URL(s(91567), s.b),
            highlights: new URL(s(652715), s.b),
            locals: new URL(s(396576), s.b),
        },
        rego: {
            languageId: "rego",
            languageExport: "tree_sitter_rego",
            wasm: new URL(s(613005), s.b),
            highlights: new URL(s(968038), s.b),
            locals: new URL(s(914189), s.b),
        },
        rescript: {
            languageId: "rescript",
            languageExport: "tree_sitter_rescript",
            wasm: new URL(s(414271), s.b),
            highlights: new URL(s(855995), s.b),
            injections: new URL(s(479846), s.b),
            locals: new URL(s(539152), s.b),
        },
        ron: {
            languageId: "ron",
            languageExport: "tree_sitter_ron",
            wasm: new URL(s(111431), s.b),
            highlights: new URL(s(342870), s.b),
        },
        ruby: {
            languageId: "ruby",
            languageExport: "tree_sitter_ruby",
            wasm: new URL(s(866079), s.b),
            highlights: new URL(s(221081), s.b),
        },
        rust: {
            languageId: "rust",
            languageExport: "tree_sitter_rust_orchard",
            wasm: new URL(s(217935), s.b),
            highlights: new URL(s(544211), s.b),
            injections: new URL(s(153278), s.b),
        },
        scala: {
            languageId: "scala",
            languageExport: "tree_sitter_scala",
            wasm: new URL(s(296559), s.b),
            highlights: new URL(s(636155), s.b),
            locals: new URL(s(798928), s.b),
        },
        scheme: {
            languageId: "scheme",
            languageExport: "tree_sitter_scheme",
            wasm: new URL(s(377961), s.b),
            highlights: new URL(s(499150), s.b),
        },
        scss: {
            languageId: "scss",
            languageExport: "tree_sitter_scss",
            wasm: new URL(s(487351), s.b),
            highlights: new URL(s(581365), s.b),
        },
        solidity: {
            languageId: "solidity",
            languageExport: "tree_sitter_solidity",
            wasm: new URL(s(319797), s.b),
            highlights: new URL(s(93492), s.b),
            locals: new URL(s(307379), s.b),
        },
        sparql: {
            languageId: "sparql",
            languageExport: "tree_sitter_sparql",
            wasm: new URL(s(389909), s.b),
            highlights: new URL(s(512564), s.b),
        },
        sql: {
            languageId: "sql",
            languageExport: "tree_sitter_sql",
            wasm: new URL(s(586463), s.b),
            highlights: new URL(s(631189), s.b),
        },
        "ssh-config": {
            languageId: "ssh-config",
            languageExport: "tree_sitter_ssh_config",
            wasm: new URL(s(937233), s.b),
            highlights: new URL(s(400774), s.b),
            injections: new URL(s(557011), s.b),
        },
        starlark: {
            languageId: "starlark",
            languageExport: "tree_sitter_starlark",
            wasm: new URL(s(690423), s.b),
            highlights: new URL(s(757197), s.b),
            injections: new URL(s(362116), s.b),
            locals: new URL(s(607930), s.b),
        },
        styx: {
            languageId: "styx",
            languageExport: "tree_sitter_styx",
            wasm: new URL(s(872179), s.b),
            highlights: new URL(s(789227), s.b),
            injections: new URL(s(447638), s.b),
        },
        svelte: {
            languageId: "svelte",
            languageExport: "tree_sitter_svelte",
            wasm: new URL(s(731545), s.b),
            highlights: new URL(s(582814), s.b),
            injections: new URL(s(994763), s.b),
            locals: new URL(s(756661), s.b),
        },
        swift: {
            languageId: "swift",
            languageExport: "tree_sitter_swift",
            wasm: new URL(s(304707), s.b),
            highlights: new URL(s(259850), s.b),
            injections: new URL(s(134399), s.b),
            locals: new URL(s(917129), s.b),
        },
        textproto: {
            languageId: "textproto",
            languageExport: "tree_sitter_textproto",
            wasm: new URL(s(155823), s.b),
            highlights: new URL(s(264834), s.b),
        },
        thrift: {
            languageId: "thrift",
            languageExport: "tree_sitter_thrift",
            wasm: new URL(s(744357), s.b),
            highlights: new URL(s(584122), s.b),
            injections: new URL(s(259439), s.b),
            locals: new URL(s(720793), s.b),
        },
        tlaplus: {
            languageId: "tlaplus",
            languageExport: "tree_sitter_tlaplus",
            wasm: new URL(s(727267), s.b),
            highlights: new URL(s(58894), s.b),
            locals: new URL(s(661637), s.b),
        },
        toml: {
            languageId: "toml",
            languageExport: "tree_sitter_toml",
            wasm: new URL(s(508703), s.b),
            highlights: new URL(s(191649), s.b),
        },
        tsx: {
            languageId: "tsx",
            languageExport: "tree_sitter_tsx",
            wasm: new URL(s(355535), s.b),
            highlights: new URL(s(613110), s.b),
            locals: new URL(s(757629), s.b),
        },
        typescript: {
            languageId: "typescript",
            languageExport: "tree_sitter_typescript",
            wasm: new URL(s(202085), s.b),
            highlights: new URL(s(648506), s.b),
            locals: new URL(s(194201), s.b),
        },
        typst: {
            languageId: "typst",
            languageExport: "tree_sitter_typst",
            wasm: new URL(s(107087), s.b),
            highlights: new URL(s(13079), s.b),
            injections: new URL(s(960138), s.b),
        },
        verilog: {
            languageId: "verilog",
            languageExport: "tree_sitter_verilog",
            wasm: new URL(s(615343), s.b),
            highlights: new URL(s(486859), s.b),
        },
        vhdl: {
            languageId: "vhdl",
            languageExport: "tree_sitter_vhdl",
            wasm: new URL(s(347275), s.b),
            highlights: new URL(s(858987), s.b),
        },
        vim: {
            languageId: "vim",
            languageExport: "tree_sitter_vim",
            wasm: new URL(s(540423), s.b),
            highlights: new URL(s(330909), s.b),
            injections: new URL(s(440532), s.b),
        },
        vue: {
            languageId: "vue",
            languageExport: "tree_sitter_vue",
            wasm: new URL(s(799767), s.b),
            highlights: new URL(s(4081), s.b),
            injections: new URL(s(751968), s.b),
        },
        wit: {
            languageId: "wit",
            languageExport: "tree_sitter_wit",
            wasm: new URL(s(118567), s.b),
            highlights: new URL(s(856145), s.b),
            injections: new URL(s(413056), s.b),
        },
        x86asm: {
            languageId: "x86asm",
            languageExport: "tree_sitter_x86asm",
            wasm: new URL(s(19537), s.b),
            highlights: new URL(s(489700), s.b),
        },
        xml: {
            languageId: "xml",
            languageExport: "tree_sitter_xml",
            wasm: new URL(s(310435), s.b),
            highlights: new URL(s(730180), s.b),
        },
        yaml: {
            languageId: "yaml",
            languageExport: "tree_sitter_yaml",
            wasm: new URL(s(389805), s.b),
            highlights: new URL(s(395958), s.b),
        },
        yuri: {
            languageId: "yuri",
            languageExport: "tree_sitter_yuri",
            wasm: new URL(s(433782), s.b),
            highlights: new URL(s(686146), s.b),
        },
        zig: {
            languageId: "zig",
            languageExport: "tree_sitter_zig",
            wasm: new URL(s(990103), s.b),
            highlights: new URL(s(692027), s.b),
            injections: new URL(s(95334), s.b),
        },
        zsh: {
            languageId: "zsh",
            languageExport: "tree_sitter_zsh",
            wasm: new URL(s(7087), s.b),
            highlights: new URL(s(371952), s.b),
        },
    };
async function g() {
    let e = await h(),
        [t, r] = await Promise.all([o(new URL(s(800070), s.b)), o(new URL(s(468638), s.b))]),
        a = await e({ wasmBinary: t }),
        i = await a.loadWebAssemblyModule(r, { loadAsync: !0 });
    return new u(a, i);
}
class u {
    host;
    abi;
    constructor(e, t) {
        ((this.host = e), (this.abi = t));
    }
    async loadGrammar(e) {
        if (!e.languageId)
            throw new a(
                "grammar-registration-failed",
                "loadGrammar: languageId is required (must match the name referenced by injection queries)",
            );
        let [t, s, r, c] = await Promise.all([
                o(e.wasm),
                n(e.highlights),
                void 0 === e.injections ? "" : n(e.injections),
                void 0 === e.locals ? "" : n(e.locals),
            ]),
            p = (function (e, t) {
                if (void 0 !== t) {
                    let s = e[t];
                    if ("function" != typeof s)
                        throw new a(
                            "grammar-language-export-missing",
                            `grammar module has no function export named ${JSON.stringify(t)}`,
                        );
                    return s;
                }
                let s = Object.keys(e).filter((t) => t.startsWith("tree_sitter_") && "function" == typeof e[t]);
                if (0 === s.length)
                    throw new a(
                        "grammar-language-export-missing",
                        "grammar module has no function export starting with tree_sitter_",
                    );
                if (s.length > 1)
                    throw new a(
                        "grammar-language-export-missing",
                        `grammar module has multiple tree_sitter_* exports: ${s.join(", ")}. Pass options.languageExport to disambiguate.`,
                    );
                return e[s[0]];
            })(await this.host.loadWebAssemblyModule(t, { loadAsync: !0 }), e.languageExport)();
        if (!p) throw new a("grammar-registration-failed", "grammar tree_sitter_* export returned null");
        let [_, l] = i(this.host, e.languageId),
            [g, u] = i(this.host, s),
            [f, h] = i(this.host, r),
            [m, R] = i(this.host, c),
            d = 0;
        try {
            d = this.abi.arborium_rt_register_grammar(p, _, l, g, u, f, h, m, R);
        } finally {
            (_ && this.host._free(_), g && this.host._free(g), f && this.host._free(f), m && this.host._free(m));
        }
        if (0 === d)
            throw new a(
                "grammar-registration-failed",
                "arborium_rt_register_grammar returned 0 (query compile failure, bad language ptr, or empty name?)",
            );
        return new b(this, d, p, e.languageId);
    }
}
class b {
    runtime;
    id;
    languagePtr;
    languageId;
    #e = !1;
    constructor(e, t, s, r) {
        ((this.runtime = e), (this.id = t), (this.languagePtr = s), (this.languageId = r));
    }
    createSession() {
        this.#t();
        let e = this.runtime.abi.arborium_rt_create_session(this.id);
        if (0 === e) throw new a("session-creation-failed", `arborium_rt_create_session(${this.id}) returned 0`);
        return new f(this, e);
    }
    unregister() {
        this.#e || (this.runtime.abi.arborium_rt_unregister_grammar(this.id), (this.#e = !0));
    }
    #t() {
        if (this.#e) throw new a("grammar-registration-failed", `grammar ${this.id} has been unregistered`);
    }
}
class f {
    grammar;
    id;
    #s = !1;
    constructor(e, t) {
        ((this.grammar = e), (this.id = t));
    }
    setText(e) {
        this.#t();
        let [t, s] = i(this.grammar.runtime.host, e);
        try {
            this.grammar.runtime.abi.arborium_rt_set_text(this.id, t, s);
        } finally {
            t && this.grammar.runtime.host._free(t);
        }
    }
    parse() {
        return (
            this.#t(),
            this.#r(
                "parse-failed",
                (e, t) => this.grammar.runtime.abi.arborium_rt_parse_utf16(this.id, e, t),
                (e) => (0 === e.length ? { spans: [], injections: [], fuel_used: 0, out_of_fuel: !1 } : JSON.parse(e)),
            )
        );
    }
    highlightToSpans(e = {}) {
        this.#t();
        let t = e.maxInjectionDepth ?? 3,
            s = this.#r(
                "highlight-failed",
                (e, s) => this.grammar.runtime.abi.arborium_rt_highlight_to_spans_utf16(this.id, t, e, s),
                (e) =>
                    0 === e.length
                        ? { spans: [], missing_injections: [], out_of_fuel_languages: [], fuel_used: 0 }
                        : JSON.parse(e),
            );
        return {
            spans: s.spans,
            missingInjections: s.missing_injections,
            outOfFuelLanguages: s.out_of_fuel_languages,
            fuelUsed: s.fuel_used,
        };
    }
    highlightToHtml(e = {}) {
        this.#t();
        let t = e.maxInjectionDepth ?? 3,
            s = e.format ?? { kind: "custom-elements" },
            { host: r } = this.grammar.runtime,
            { code: a, prefix: o } = (function (e) {
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
            [n, c] = i(r, o);
        try {
            let e = this.#r(
                "highlight-failed",
                (e, s) => this.grammar.runtime.abi.arborium_rt_highlight_to_html(this.id, t, a, n, c, e, s),
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
            n && r._free(n);
        }
    }
    cancel() {
        (this.#t(), this.grammar.runtime.abi.arborium_rt_cancel(this.id));
    }
    free() {
        this.#s || (this.grammar.runtime.abi.arborium_rt_free_session(this.id), (this.#s = !0));
    }
    #t() {
        if (this.#s) throw new a("session-creation-failed", `session ${this.id} has been freed`);
    }
    #r(e, t, s) {
        let { host: r, abi: i } = this.grammar.runtime,
            o = r._malloc(4),
            n = r._malloc(4);
        try {
            let c = t(o, n);
            if (0 !== c) throw new a(e, `arborium_rt call returned status ${c}`);
            let p = r.getValue(o, "i32"),
                l = r.getValue(n, "i32");
            if (0 === l) return s("");
            try {
                return s(0 === l ? "" : _.decode(r.HEAPU8.subarray(p, p + l)));
            } finally {
                i.arborium_rt_free(p, l);
            }
        } finally {
            (r._free(o), r._free(n));
        }
    }
}
async function h() {
    return (await s.e("379098").then(s.bind(s, 623777))).default;
}
