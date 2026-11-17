a.d(t, { D: () => nz });
var i,
    r,
    n = a(477900),
    s = a(858899),
    c = a(361158),
    d = a(267102),
    l = a(531685),
    o = a(188567),
    u = a(796104),
    h = a(719718),
    f = a(527926),
    b = a(617390),
    p = a(582128),
    _ = a(503698),
    m = a.n(_),
    x = a(855986),
    g = a(765178),
    A = a(140735),
    v = a(43990),
    w = a(789645),
    I = a(373955),
    E = a(503235),
    j = a(847011),
    S = a(201779);
a(321073);
let N =
        "https://cdn.discordapp.com/assets/content/05e7df987cb6150a2d6cbfe4aca2cdacfb4188166f8ff9bbde7421afcd85b382.mp3",
    T =
        "https://cdn.discordapp.com/assets/content/7b28adce16a979de5d4f6b8331dfedca2806d1b0b15f694b7a196db7f624918c.mp3",
    C =
        "https://cdn.discordapp.com/assets/content/aada5b40828140b41a56df82e81783cd43fd60e30ac1eb3c9f93a087b95dcf03.mp3",
    R =
        "https://cdn.discordapp.com/assets/content/04536b9e5b26d0b6e85116ce546b7d5ba97da31e7de7a1e02da262bcd5249bb0.mp3",
    O =
        "https://cdn.discordapp.com/assets/content/82d771ff521a99ea8e26239d2f2e48ae847e39575bc5bce396739b430b8a6fda.mp3",
    M = [N, T, C, R, O];
function y(e) {
    return e !== S.gr.HOME && null == (0, S.UG)(e).statsScreen;
}
function L(e) {
    return null != (0, S.UG)(e).statsScreen;
}
var k = a(127639),
    D = a(287809),
    P = a(474090),
    U = a(817379);
function F() {
    return (0, x.yK)([h.A, D.default], () => {
        let { selectedCharacterTraits: e, stats: t, character: a } = h.A,
            i = (0, P.ki)(D.default.getCurrentUser());
        return Object.values(k.V).filter((r) => {
            let n = e[r];
            return null != n && (0, U.tS)(r, n, { stats: t, hasNitro: i, savedCharacter: a });
        });
    });
}
var G = a(964486),
    H = a(920495),
    K = a(407905),
    B = a(532294),
    z = a(739187);
function V(e) {
    let t = (0, E.Cz)(e);
    null != t && ((0, z.V)(), (0, s.P0)({ text: t, variant: "critical" }));
}
var W = a(299619),
    q = a(775602),
    Y = a(818348),
    X = a(11435);
function Z(e) {
    let { isVisible: t } = e,
        a = p.useRef(null),
        i = (0, x.bG)([q.Ay], () => q.Ay.useReducedMotion),
        r = t && !i;
    return (
        p.useEffect(() => {
            let e = a.current;
            null != e && (r ? e.play().catch(Y.tE) : e.pause());
        }, [r]),
        p.useEffect(() => {
            i && null != a.current && (a.current.currentTime = 1);
        }, [i]),
        (0, n.jsxs)("div", {
            className: X.Tp,
            "aria-hidden": !0,
            children: [
                (0, n.jsx)(W.A, {
                    ref: a,
                    className: X.Ki,
                    src: "https://cdn.discordapp.com/assets/content/a7a4300630ed2733eca4a8bb584c3086a66063d78e2f829faf465d96ff388a93.webm",
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                }),
                (0, n.jsx)("div", { className: X.D7 }),
            ],
        })
    );
}
var Q = a(885619);
function J(e) {
    let {
        ref: t,
        onMouseEnter: a,
        onMouseLeave: i,
        onFocus: r,
        onBlur: s,
        onContextMenu: c,
        "aria-label": d,
        "aria-pressed": l,
        "aria-disabled": o,
        "aria-describedby": u,
        children: h,
        onClick: f,
        onPointerDown: b,
        onKeyDown: p,
        size: _,
        className: x,
    } = e;
    return (0, n.jsx)("button", {
        ref: t,
        onMouseEnter: a,
        onMouseLeave: i,
        onFocus: r,
        onBlur: s,
        onContextMenu: c,
        type: "button",
        className: m()(Q.button, "custom" !== _ && Q[_], x),
        onClick: f,
        onPointerDown: b,
        onKeyDown: p,
        "aria-label": d,
        "aria-pressed": l,
        "aria-disabled": o,
        "aria-describedby": u,
        children: h,
    });
}
function $(e) {
    let { className: t, ...a } = e;
    return (0, n.jsx)(J, { ...a, className: m()(Q.shadow, t) });
}
var ee = a(475743),
    et = a(765548),
    ea = a(190240);
function ei(e) {
    let {
            visible: t,
            enter: a,
            exit: i,
            keepMounted: r = !1,
            mountAfterDelay: s = !1,
            hiddenScale: c = 1,
            onExitComplete: d,
            className: l,
            style: o,
            children: u,
        } = e,
        h = (0, x.bG)([q.Ay], () => q.Ay.useReducedMotion),
        f = p.useRef(null),
        [b, _] = p.useState(t),
        [g, A] = p.useState(t),
        v = p.useRef(null),
        w = (0, ee.p0)({ value: u, shouldUpdate: t }),
        I = (0, ee.p0)({ value: o, shouldUpdate: t }),
        E = (0, et.A)(() => {
            ((v.current = null), _(!1), d?.());
        }),
        j = t ? a : i,
        S = h ? 0 : j.delay,
        N = h ? 0 : j.duration,
        T = t && !b && !r,
        C = s && !h;
    p.useEffect(() => {
        if (!T) return;
        if (!C) return void _(!0);
        let e = setTimeout(() => _(!0), a.delay);
        return () => clearTimeout(e);
    }, [T, C, a.delay]);
    let R = p.useRef(!0);
    if (
        (p.useEffect(() => {
            if (R.current) {
                R.current = !1;
                return;
            }
            if ((null != v.current && (clearTimeout(v.current), (v.current = null)), t)) {
                r && _(!0);
                return;
            }
            (A(!1), (v.current = setTimeout(E, S + N)));
        }, [t]),
        p.useLayoutEffect(() => {
            t && b && !g && (f.current?.getBoundingClientRect(), A(!0));
        }, [t, b, g]),
        p.useEffect(
            () => () => {
                null != v.current && clearTimeout(v.current);
            },
            [],
        ),
        !b && !r)
    )
        return null;
    let O = t && !r && C ? 0 : S,
        M = {
            ...(t ? o : I),
            opacity: +!!g,
            transform: g || 1 === c ? void 0 : `scale(${c})`,
            transitionDuration: `${N}ms`,
            transitionDelay: `${O}ms`,
        };
    return (0, n.jsx)("div", {
        ref: f,
        className: m()(l, ea.q, { [ea.R]: !b }),
        style: M,
        inert: !t,
        "aria-hidden": !t,
        children: t || r ? u : w,
    });
}
var er = a(516749),
    en = a(399667),
    es = a(468311),
    ec = a(706121),
    ed = a(985747),
    el = a(67915),
    eo = a(118531);
let eu = {
    tex_aura_01_blossom: {
        url: "https://cdn.discordapp.com/assets/content/e2b0577c5815a08ed970f8192b862231a1ffe18387dcd7dcec888e9c3027199a.webp",
        riveId: 6946196,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_02_prism: {
        url: "https://cdn.discordapp.com/assets/content/d689a73838fcb85906b77e916194e0c392dd3ceddcc52061e56c63a966dcf1e2.webp",
        riveId: 6946199,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_03_shock: {
        url: "https://cdn.discordapp.com/assets/content/0705b7642d139a6163da7e61eff087f7b6e88e6407ab86dea3d05dc4e81a6f45.webp",
        riveId: 6946202,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_04_blaze: {
        url: "https://cdn.discordapp.com/assets/content/2a529cf90b15974fee17885a301d3367c56b2a1962931630210bf2a5f6bddedc.webp",
        riveId: 6946204,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_05_fated: {
        url: "https://cdn.discordapp.com/assets/content/cb5fcd7305a8925206c759e95257fdd5ce3f2f591bb351caf0029d5064d896b9.webp",
        riveId: 6946205,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_06_luster: {
        url: "https://cdn.discordapp.com/assets/content/59fe644414bdaad3017ede0d6a2a7d6433824a11addaa896d436e4da0e3280c6.webp",
        riveId: 6946206,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_07_bubbly: {
        url: "https://cdn.discordapp.com/assets/content/19b3d871b42fdca6a5c808842e204d98aa6523a54e793f3154e8e60b96b166ce.webp",
        riveId: 6946208,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_08_spooky: {
        url: "https://cdn.discordapp.com/assets/content/258f8c1eefdd4a4186b6e9f85d0986813469857414b1b5502c81078d9a76e98a.webp",
        riveId: 7026924,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_09_cursed: {
        url: "https://cdn.discordapp.com/assets/content/bb67049ba7ae915ec7e906730567a2781dfc96f5a135afa2f6942478e9f20f2c.webp",
        riveId: 7026931,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_10_magnetic: {
        url: "https://cdn.discordapp.com/assets/content/c3aa3b181bde82281f302a4c7eeda0192fd7f82b2de185e82daf61e15f257ead.webp",
        riveId: 6946211,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_11_radioactive: {
        url: "https://cdn.discordapp.com/assets/content/2c5a6cd560dc5b1f5331a8cfdd240307ac9f2943305681fc99eba17af68d8cec.webp",
        riveId: 6946212,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_12_elemental: {
        url: "https://cdn.discordapp.com/assets/content/27470dbd590f675c78e45d1918951e6e1eb0d9404f17d8c829b927b97ccc0528.webp",
        riveId: 6946214,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_13_shimmer: {
        url: "https://cdn.discordapp.com/assets/content/41e05e6577af1a5dff29c80f78be1c628e8d6ffdba6ab769900519d6466223b3.webp",
        riveId: 6946217,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_14_witchy: {
        url: "https://cdn.discordapp.com/assets/content/c1d8b710eb16bc0e2723f17df37f9544c322f8b77f01c8ef416f210794896e80.webp",
        riveId: 7026932,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_base_01_icy: {
        url: "https://cdn.discordapp.com/assets/content/214c4c8cd843cc9b7db38584271af549e503c30d2affabad5e6d84c323e45179.webp",
        riveId: 6945448,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_02_crimson: {
        url: "https://cdn.discordapp.com/assets/content/7a6fa404d1ae0d9e719adb9a9041ec6109bf8f1789ab1357d9ca027212929c8a.webp",
        riveId: 6945450,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_03_chrome: {
        url: "https://cdn.discordapp.com/assets/content/4271d26712fde40e2578d6492c5c253dc1b147da9e574974d047a5bc8861852c.webp",
        riveId: 6945451,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_04_galactic: {
        url: "https://cdn.discordapp.com/assets/content/0cb313653524f0ab1f32ae15dd5ff500820a295f54b9877b519a9a8360720c74.webp",
        riveId: 6945452,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_05_forrest: {
        url: "https://cdn.discordapp.com/assets/content/453d50df90b3dfd068fc0f0c35a81a4b04b183207005fb7a8a0b0c84ec91a5f8.webp",
        riveId: 6945454,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_06_mighnight: {
        url: "https://cdn.discordapp.com/assets/content/47310f91aeacf2740fcaa93ec5909d4712a57fc8f74d25b2d386fedaf5165421.webp",
        riveId: 6945456,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_07_glacier: {
        url: "https://cdn.discordapp.com/assets/content/6feb0011773e7103a7db28dd22764155386f5135dc7f80592823deb6d515401b.webp",
        riveId: 7026923,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_08_orange: {
        url: "https://cdn.discordapp.com/assets/content/e2bc9c46c3154b45b23488c9caa201eb5715b0d35a25847ae90aa0611649801a.webp",
        riveId: 6945457,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_09_pink: {
        url: "https://cdn.discordapp.com/assets/content/0c217d3822a9a28b0f1c482d028b5764af541e03a044c9c755d689066944f59e.webp",
        riveId: 6945459,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_10_red: {
        url: "https://cdn.discordapp.com/assets/content/c7eb150801b9cfdea20e22cec192e39f308d3ce26c076043545eed04ff9dd632.webp",
        riveId: 6945460,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_11_cobalt: {
        url: "https://cdn.discordapp.com/assets/content/be1e1c86c9ae36cb1e5d255f38ed2438a332666f35407c3fb9259b0912d23ace.webp",
        riveId: 6945462,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    "tex_base_12_x-ray": {
        url: "https://cdn.discordapp.com/assets/content/c5041017ae775909a614ca864fe8b0f4932ec57c3acbb9e1c57360ff3222fee6.webp",
        riveId: 6945463,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_13_liquid: {
        url: "https://cdn.discordapp.com/assets/content/de6b6adb1348e91b928d53193179d797838ac425c1bea23e592208c60bec2584.webp",
        riveId: 6945465,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_14_butter: {
        url: "https://cdn.discordapp.com/assets/content/b9b76c830a1966450017238c2a506857bff49ee9e6684995f7461bd873e4d8f4.webp",
        riveId: 6945464,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_15_iridescent: {
        url: "https://cdn.discordapp.com/assets/content/2eeb344ad5589f09df27ed729e5212ec9da26fc0517c424066038db963734ef9.webp",
        riveId: 6945468,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_shadow: {
        url: "https://cdn.discordapp.com/assets/content/ed8b72ee7b21e3fdfd09054e873dd9989a77d12902e5bed116dd1e5bc39b3658.webp",
        riveId: 6885304,
        width: 1008,
        height: 350,
        widthAt1x: 331,
    },
    tex_env_labNight_bg: {
        url: "https://cdn.discordapp.com/assets/content/5fcc2d762e62c2ae52c7381be2ed0f3dc816795344b9303a51024d0521447699.webp",
        riveId: 6979903,
        width: 3952,
        height: 2223,
        widthAt1x: 1968,
    },
    tex_env_labNight_bg_mobileLandscape: {
        url: "https://cdn.discordapp.com/assets/content/46cf720ddb76a5975b8705fd532e27e75f683a79f6842bb9b6cf60daa1691ce0.webp",
        riveId: 7118591,
        width: 4096,
        height: 2595,
        widthAt1x: 1470,
    },
    tex_env_labNight_bg_mobilePortrait: {
        url: "https://cdn.discordapp.com/assets/content/445d6d89646aa5eeacba5b6fe893db6ae931c1756946bee6eb026c5eb4a1f4a7.webp",
        riveId: 7088398,
        width: 2353,
        height: 3332,
        widthAt1x: 784,
    },
    tex_env_labNight_fgLeft: {
        url: "https://cdn.discordapp.com/assets/content/14b81d95ca0227535c38194f3961b6e0fb8df4d1fdbcad9133262605938e6c2a.webp",
        riveId: 6979899,
        width: 1462,
        height: 451,
        widthAt1x: 705,
    },
    tex_env_labNight_fgRight: {
        url: "https://cdn.discordapp.com/assets/content/c3b2c54e6d95d021851397aa1e6014d19759e4a13d0dfe604c912a4b030ff203.webp",
        riveId: 6979900,
        width: 1426,
        height: 2232,
        widthAt1x: 713,
    },
    tex_env_labNight_mgBottom: {
        url: "https://cdn.discordapp.com/assets/content/90c46b4aaf2be6f4539860ac7aef8b6d60ab0c4dbb42acb3755b78452a9dfa69.webp",
        riveId: 6979898,
        width: 1800,
        height: 514,
        widthAt1x: 900,
    },
    tex_env_labNight_mgBottomMobile: {
        url: "https://cdn.discordapp.com/assets/content/89370c20287193d1be0e5d7d3868d10bb6d09f35677be72957bf756da0873a4a.webp",
        riveId: 6979901,
        width: 1171,
        height: 364,
        widthAt1x: 564,
    },
    tex_env_labNight_mgLight: {
        url: "https://cdn.discordapp.com/assets/content/75888ea5b13919a455db725d7c7bff432de103b8b856333bf6293d916f42ab5e.webp",
        riveId: 6979902,
        width: 839,
        height: 1032,
        widthAt1x: 404,
    },
    tex_env_labNight_mgTop: {
        url: "https://cdn.discordapp.com/assets/content/ab91ef672e2676d9757f5a5fa465363d66024cff0c0dd9bb75cd6b355ba33d9e.webp",
        riveId: 6979904,
        width: 1162,
        height: 489,
        widthAt1x: 560,
    },
    tex_env_labNight_sky: {
        url: "https://cdn.discordapp.com/assets/content/7dde187de68290a9dfe1ff7e2521ade9682c866b64ec57e8c1d3e9278ddd73d6.webp",
        riveId: 6979905,
        width: 1919,
        height: 1426,
        widthAt1x: 925,
    },
    tex_face_06_confused_textureAtlas: {
        url: "https://cdn.discordapp.com/assets/content/5122692930f1fc219e03764c6f075d0db23f2c9b9af4630493f5535edd190d28.webp",
        riveId: 6866859,
        width: 682,
        height: 341,
    },
    tex_face_07_anxious_textureAtlas: {
        url: "https://cdn.discordapp.com/assets/content/cf1fd596a8f2180aa33d8be5f8a3e24c7e7d777e285ad9a0bd4270cdaff1a437.webp",
        riveId: 6866913,
        width: 458,
        height: 181,
    },
    tex_face_09_rage_textureAtlas: {
        url: "https://cdn.discordapp.com/assets/content/bbdc9063a3ab4a299e686fb29b9121484d83c1a92fe09c9864cfdf5189407519.webp",
        riveId: 6863487,
        width: 900,
        height: 201,
    },
    tex_face_11_spellbound_textureAtlas: {
        url: "https://cdn.discordapp.com/assets/content/30245c5db85935d260665cf86ebc95051b93f05a608bb7381b9848dacacc9d3c.webp",
        riveId: 6856738,
        width: 1106,
        height: 278,
    },
    tex_face_13_freeFall_textureAtlas: {
        url: "https://cdn.discordapp.com/assets/content/63950cbbad9db04a28aff1fb86a0fa4a152f425f98c6456307726a006dcb29da.webp",
        riveId: 6866304,
        width: 391,
        height: 203,
    },
    tex_face_14_possessed_textureAtlas: {
        url: "https://cdn.discordapp.com/assets/content/c6866d54c44f1135bc370833b8c568d176c0cf8aeec1d218c3c2c6b055634866.webp",
        riveId: 6864828,
        width: 649,
        height: 525,
    },
    tex_face_spooked_drop: {
        url: "https://cdn.discordapp.com/assets/content/c0ef1aa0fe438130e637c52d9587c2bec5c175398843c085bf63d53a1cc60a7d.webp",
        riveId: 6825665,
        width: 30,
        height: 90,
    },
    tex_face_spooked_shadow: {
        url: "https://cdn.discordapp.com/assets/content/24fac27097b1200e730a4fe48358eb4a746963b3e635ae9582872a19e8b87a18.webp",
        riveId: 7104996,
        width: 677,
        height: 236,
    },
    tex_headwear_01_elvenHeadpiece: {
        url: "https://cdn.discordapp.com/assets/content/28b536f7927d3342a56e98def8d772fad9caf50a3e84c4b395b69311996fa1bc.webp",
        riveId: 6878398,
        width: 884,
        height: 374,
        widthAt1x: 182,
    },
    tex_headwear_02_headphones: {
        url: "https://cdn.discordapp.com/assets/content/eaddbf168d9c3299571d82b97821798842d31c12f9cd41f40ea41d3c16137428.webp",
        riveId: 7012013,
        width: 1472,
        height: 828,
        widthAt1x: 288,
    },
    tex_headwear_03_bananaPeel: {
        url: "https://cdn.discordapp.com/assets/content/f7927f8ad1872abbfb8f446df5d70c2374465a17ee7ddb8f696f048fceb00ea9.webp",
        riveId: 6944187,
        width: 1496,
        height: 891,
        widthAt1x: 312,
    },
    tex_headwear_04_piercings: {
        url: "https://cdn.discordapp.com/assets/content/798f9fa0977bad98ba128edf786dac742e3e524ee42db1e2ccdc2badefb01be1.webp",
        riveId: 6945559,
        width: 529,
        height: 460,
        widthAt1x: 106,
    },
    tex_headwear_05_headband: {
        url: "https://cdn.discordapp.com/assets/content/f17a9b3a038ff91e1227e415d533aa842b76be37ce631cd29bd435030543bc2c.webp",
        riveId: 6943812,
        width: 1679,
        height: 1219,
        widthAt1x: 335,
    },
    tex_headwear_06_sunGlasses: {
        url: "https://cdn.discordapp.com/assets/content/68df4258904c28d5690db05450566aa72ee50b8014200022ece682608e34edb1.webp",
        riveId: 6878347,
        width: 1287,
        height: 550,
        widthAt1x: 269,
    },
    tex_headwear_07_backwardHat: {
        url: "https://cdn.discordapp.com/assets/content/b14d1db9b5c859095e0ad401e0446c41c33302ecb43781ce0b370c7bf4d74b3f.webp",
        riveId: 6878399,
        width: 1394,
        height: 680,
        widthAt1x: 287,
    },
    tex_headwear_08_leaf: {
        url: "https://cdn.discordapp.com/assets/content/0126e4fc4942fd87a5d7324105a6a1aa21a343a78388539d088ec73ad7364e45.webp",
        riveId: 6943794,
        width: 1137,
        height: 379,
        widthAt1x: 228,
    },
    tex_headwear_09_fire: {
        url: "https://cdn.discordapp.com/assets/content/d377f8a7de8828800cd314e34dc0941508d4cf3f549532a90d0996ce58963937.webp",
        riveId: 6878288,
        width: 1495,
        height: 943,
        widthAt1x: 298,
    },
    tex_headwear_10_halo: {
        url: "https://cdn.discordapp.com/assets/content/b6f7eb1bc7855139e3f66c67529fd90d0a1a4fe995f24cb14b1b2e2623e4436d.webp",
        riveId: 6878456,
        width: 1173,
        height: 529,
        widthAt1x: 234,
    },
    tex_headwear_11_brain: {
        url: "https://cdn.discordapp.com/assets/content/9e0e9f921f755f35bef890502dc0cf9038d39db1f0d3d620b16ece52b930dd87.webp",
        riveId: 6878244,
        width: 690,
        height: 460,
        widthAt1x: 138,
    },
    tex_headwear_12_trafficCone: {
        url: "https://cdn.discordapp.com/assets/content/903cce4ef4e1c6ad24851478bf625a36a906bb82882707616879e958edb531f2.webp",
        riveId: 6878330,
        width: 680,
        height: 646,
        widthAt1x: 140,
    },
    tex_headwear_13_teddyBeanie: {
        url: "https://cdn.discordapp.com/assets/content/43d66a791794137f8c58f316695969c80475667f166c8a5400a72bb9a42594bc.webp",
        riveId: 6878395,
        width: 1495,
        height: 874,
        widthAt1x: 298,
    },
    tex_headwear_14_crown: {
        url: "https://cdn.discordapp.com/assets/content/dd5b74e9f06b4b6ed8297ddb20b171f72266ed3984ea3a183345320a568cc80e.webp",
        riveId: 6878327,
        width: 946,
        height: 715,
        widthAt1x: 197,
    },
    tex_none: {
        url: "https://cdn.discordapp.com/assets/content/a0cbeae4f229972a95fe4b0855e085d1cbeb4ce09600f340f9629824fe163fd0.webp",
        riveId: 6585260,
        width: 1,
        height: 1,
    },
    tex_outfit_01_baddie: {
        url: "https://cdn.discordapp.com/assets/content/20f8d8a630fb70c6fb0cb8daea1e3a2ecb1a2d8633610fa6ea472924638dcbda.webp",
        riveId: 7373394,
        width: 1111,
        height: 836,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_monochrome: {
        url: "https://cdn.discordapp.com/assets/content/6d472ee3a9dfa1df1ad56ff76d2c01809de28ddc1a57f7e70e3e5ecdefdd34c5.webp",
        riveId: 7373045,
        width: 1111,
        height: 836,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_pastel: {
        url: "https://cdn.discordapp.com/assets/content/20928b435b0ce3f20fa899e27eec24efa6126112de3536ffd5a7bfba3cb513e0.webp",
        riveId: 7373052,
        width: 1111,
        height: 836,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_sunset: {
        url: "https://cdn.discordapp.com/assets/content/4991a68749638a165645df2325636ef0cf900c84f384b711dc9169a202dbf458.webp",
        riveId: 7373057,
        width: 1111,
        height: 836,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_violet: {
        url: "https://cdn.discordapp.com/assets/content/0d7c10a84fe50348366c82a3dd2abdbcc278f821580ed07bf62430ebb4a7f164.webp",
        riveId: 7373035,
        width: 1111,
        height: 836,
        widthAt1x: 232,
    },
    tex_outfit_02_trash: {
        url: "https://cdn.discordapp.com/assets/content/dd2dd4c0bd3ac506189e11e973b0a7a6b6c08bdcafaf6d0dbc439620e2863bad.webp",
        riveId: 7373757,
        width: 1541,
        height: 1058,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_blackout: {
        url: "https://cdn.discordapp.com/assets/content/212f4651cd2d18fa928ea3bf93210331b35609c397e62b80623920ad6d756f58.webp",
        riveId: 7373082,
        width: 1541,
        height: 1058,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_bubblegum: {
        url: "https://cdn.discordapp.com/assets/content/457b66bdf129645e59f57604f8393ea0074134eba40847805e3fdcdb47da1761.webp",
        riveId: 7373086,
        width: 1541,
        height: 1058,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_caution: {
        url: "https://cdn.discordapp.com/assets/content/0fa277da73c958cfc728a114552844dce98ed9a6caa564940fc6119c8228e5cf.webp",
        riveId: 7373096,
        width: 1541,
        height: 1058,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_toxic: {
        url: "https://cdn.discordapp.com/assets/content/1229e33632a8d762467c7f84937ccf706fd2c1e3534f348da2837623e714d609.webp",
        riveId: 7373119,
        width: 1541,
        height: 1058,
        widthAt1x: 308,
    },
    tex_outfit_03_streamer: {
        url: "https://cdn.discordapp.com/assets/content/cc2068e79715b583b34b773978af15d7d010d01882fc7c126145643c47a0f903.webp",
        riveId: 7373758,
        width: 986,
        height: 952,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_flames: {
        url: "https://cdn.discordapp.com/assets/content/fb878dec02847447bc56cab636f0dc7c884b63ba8d38d400aaebe20a5155a4c1.webp",
        riveId: 7373207,
        width: 986,
        height: 952,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_smiley: {
        url: "https://cdn.discordapp.com/assets/content/6fcd7ec5df2282eab668a72dca12267101c0df4eabc997c75f4c9c82f00e8e60.webp",
        riveId: 7373229,
        width: 986,
        height: 952,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_stripes: {
        url: "https://cdn.discordapp.com/assets/content/9c037133af3a11e12c363d4c2cab916ac40830cea2a8f32e8a8f068b5e541fa1.webp",
        riveId: 7373237,
        width: 986,
        height: 952,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_vintage: {
        url: "https://cdn.discordapp.com/assets/content/5066ee834b18f4abe6b06c3737342a44618c29c65646c8363c404db8bb7b274e.webp",
        riveId: 7373246,
        width: 986,
        height: 952,
        widthAt1x: 203,
    },
    tex_outfit_04_camper: {
        url: "https://cdn.discordapp.com/assets/content/1fff16ebfeab6fafd6db836f5188a9dcefa1aa43f295e6b3ab9c093bb7b62fb0.webp",
        riveId: 7373760,
        width: 924,
        height: 803,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_amber: {
        url: "https://cdn.discordapp.com/assets/content/96c1393dd14d030e54e97b5411994a5d407868bf441d64c6ec386d230379e7e0.webp",
        riveId: 7373265,
        width: 924,
        height: 803,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_glamp: {
        url: "https://cdn.discordapp.com/assets/content/df1d8b139641b52ace6730d6b7be75d328ee698c48e3103e5e07e49c26889f49.webp",
        riveId: 7373268,
        width: 924,
        height: 803,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_plaid: {
        url: "https://cdn.discordapp.com/assets/content/6f168b41a13bba2a003a0ad30a9a8ed91b9cde963e65f1673775860d01a6804c.webp",
        riveId: 7373269,
        width: 924,
        height: 803,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_swamp: {
        url: "https://cdn.discordapp.com/assets/content/e6c7749c841cc7a25843dad45e4e3d80e99e4b09e0b5c5864edfd4584ae93583.webp",
        riveId: 7373270,
        width: 924,
        height: 803,
        widthAt1x: 193,
    },
    tex_outfit_05_athlete: {
        url: "https://cdn.discordapp.com/assets/content/21da90497aa6b2c4ab790c0008db1f1465a5c9db4eb17055e3198b55ccd1e7f4.webp",
        riveId: 7373767,
        width: 1288,
        height: 874,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_blocked: {
        url: "https://cdn.discordapp.com/assets/content/cce0b4494599aa8920d011937b56131b85364b9b9be41712c3223ef55128a550.webp",
        riveId: 7373272,
        width: 1288,
        height: 874,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_checkered: {
        url: "https://cdn.discordapp.com/assets/content/f02e0c0748217a994ac0b399eaae937961c78e45a8b3a0b813d0dd4decac8a12.webp",
        riveId: 7373273,
        width: 1288,
        height: 874,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_faded: {
        url: "https://cdn.discordapp.com/assets/content/d8c403eaca575fd81fbe357d76f288fc73c498899cac70b5d16f4aeaf5b36759.webp",
        riveId: 7373278,
        width: 1288,
        height: 874,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_lined: {
        url: "https://cdn.discordapp.com/assets/content/f969005f0e21cc09b3c29f9867c7cdca1a406623f2669e1fdf742551068ccaf0.webp",
        riveId: 7373295,
        width: 1288,
        height: 874,
        widthAt1x: 252,
    },
    tex_outfit_06_cowpoke: {
        url: "https://cdn.discordapp.com/assets/content/961bad1b5c59dd58316636ce47d5e740ce68245bc16cafcc5f2233791adaad75.webp",
        riveId: 7373768,
        width: 1357,
        height: 874,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_blush: {
        url: "https://cdn.discordapp.com/assets/content/b98eb8bdaa4e4d27e13b5bcea6a6d0ab181066058770ae4d6217c2d3329ae87a.webp",
        riveId: 7373303,
        width: 1357,
        height: 874,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_denim: {
        url: "https://cdn.discordapp.com/assets/content/4391125bba3639f903db823d4a7c077d5bec530f6baa20b4905d519495805097.webp",
        riveId: 7373324,
        width: 1357,
        height: 874,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_onyx: {
        url: "https://cdn.discordapp.com/assets/content/dfcdf8fcab5f44c6c6333cb897894ed190d87176213b36a529a8acd2abac2517.webp",
        riveId: 7373360,
        width: 1357,
        height: 874,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_steel: {
        url: "https://cdn.discordapp.com/assets/content/75d84bcc6314cc16dd3d5fee7c45680b6e4820db09083f84b206eea67274c957.webp",
        riveId: 7373396,
        width: 1357,
        height: 874,
        widthAt1x: 271,
    },
    tex_outfit_07_goth: {
        url: "https://cdn.discordapp.com/assets/content/818260b14a9faa46494a1b2c72b382c62d8efef0da394f14979ddb2023145a87.webp",
        riveId: 7373769,
        width: 1375,
        height: 814,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_raven: {
        url: "https://cdn.discordapp.com/assets/content/c2327847cdbe1c4687c23a9941c6fa325eafb64b4efd904e92936d0391334d39.webp",
        riveId: 7373444,
        width: 1375,
        height: 814,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_serpent: {
        url: "https://cdn.discordapp.com/assets/content/d162b30e51d8fa96779badf221acc9e7c318b062422e02746812368e584f6b1a.webp",
        riveId: 7373483,
        width: 1375,
        height: 814,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_siren: {
        url: "https://cdn.discordapp.com/assets/content/5dbb885fcfdcc6f75086540e721f8b5f78687b2293c99797a19196d58c7ab929.webp",
        riveId: 7373523,
        width: 1375,
        height: 814,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_vamp: {
        url: "https://cdn.discordapp.com/assets/content/5b9ba9474a4d2f338080a20450344eed740c5442e6c7d86e5bb29bb3f8be3932.webp",
        riveId: 7373540,
        width: 1375,
        height: 814,
        widthAt1x: 287,
    },
    tex_outfit_08_astronaut: {
        url: "https://cdn.discordapp.com/assets/content/ed6b03979ec380fab042dc166ff04edffa5fc9380368a9ba43e4d11933654d03.webp",
        riveId: 7373770,
        width: 986,
        height: 884,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_cosmic: {
        url: "https://cdn.discordapp.com/assets/content/51f350adf9002746616dc3c44343e42d5e0799be48ca370e7c41d4bb515dc24b.webp",
        riveId: 7373571,
        width: 986,
        height: 884,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_martian: {
        url: "https://cdn.discordapp.com/assets/content/019a03969ed63c46a42808883e0622999cf74b88c41f8d507bc92c0288501f6a.webp",
        riveId: 7373578,
        width: 986,
        height: 884,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_solar: {
        url: "https://cdn.discordapp.com/assets/content/c6f109186d9f124448b4c111d67d3938fa9c13cdde4e794695d8cd6f3259c301.webp",
        riveId: 7373580,
        width: 986,
        height: 884,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_stardust: {
        url: "https://cdn.discordapp.com/assets/content/252f5346b07056f111e37a4386407783b5891ffc622d7c387196a1825714bad7.webp",
        riveId: 7373583,
        width: 986,
        height: 884,
        widthAt1x: 203,
    },
    tex_outfit_09_jester: {
        url: "https://cdn.discordapp.com/assets/content/17c57891f2a18f8d67656de287e73446a7884b9cb18391ebf0ee941ba23313a7.webp",
        riveId: 6998778,
        width: 1081,
        height: 897,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_carnival: {
        url: "https://cdn.discordapp.com/assets/content/03ca1d6fb7dd56e4dede50b26d3d9bb1b5675c64a66df2b782c325db574f6089.webp",
        riveId: 6998764,
        width: 1081,
        height: 897,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_confetti: {
        url: "https://cdn.discordapp.com/assets/content/0f1ea523a6ffbbaff905cf55c1fd8cf53ec7bb0292edd8e25a23d2fad2a4a758.webp",
        riveId: 7373862,
        width: 1081,
        height: 897,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_nightfall: {
        url: "https://cdn.discordapp.com/assets/content/ad1a5bbca04ec8809e67230269b592f3619066068e675e570569f1c94eb10d7a.webp",
        riveId: 7373867,
        width: 1081,
        height: 897,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_sunrise: {
        url: "https://cdn.discordapp.com/assets/content/b307e09c753d5efaa19f2734b7afbb91578bcd014fc243b1f41b513759f7c8bb.webp",
        riveId: 6998772,
        width: 1081,
        height: 897,
        widthAt1x: 216,
    },
    tex_outfit_10_traveler: {
        url: "https://cdn.discordapp.com/assets/content/7b27c78fd92c6f5ee45744f0f2d7c6641ad60ecd58331ddbc0be926c4c1e308c.webp",
        riveId: 7373772,
        width: 946,
        height: 825,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_chrono: {
        url: "https://cdn.discordapp.com/assets/content/43bd34a6e48ace56d62f288f9d4beac9dee012edbc804407c1dfeb358c35e67d.webp",
        riveId: 7373869,
        width: 946,
        height: 825,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_haze: {
        url: "https://cdn.discordapp.com/assets/content/7b1f38974858e752182baf26ee2a1f89bcd28bb3566d80ba0b99f61e466f6e93.webp",
        riveId: 7373871,
        width: 946,
        height: 825,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_moss: {
        url: "https://cdn.discordapp.com/assets/content/1ce8ee2ec7b93ee35b3af711c33eede3ce50f07172facf6717c88f1091f5e504.webp",
        riveId: 6945600,
        width: 946,
        height: 825,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_umber: {
        url: "https://cdn.discordapp.com/assets/content/c77f5b341cc51464d2078950802b3b458317ec72cb61070a7f28f447eb5147fb.webp",
        riveId: 7373876,
        width: 946,
        height: 825,
        widthAt1x: 197,
    },
    tex_outfit_11_mage: {
        url: "https://cdn.discordapp.com/assets/content/ada85d8e4f4add7e398c5b204c2a8255946766289428c2a2dd36c773831f484f.webp",
        riveId: 7373774,
        width: 1122,
        height: 913,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_dusk: {
        url: "https://cdn.discordapp.com/assets/content/a87f26ba1f84a141e6f2991f47a1ef781389033ab54928ff511e5355e84ed6ad.webp",
        riveId: 7373888,
        width: 1122,
        height: 913,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_shadow: {
        url: "https://cdn.discordapp.com/assets/content/396531678d1213980197c3d4ae3da6fa4a24ce300e2c23dfda509522d768f3b7.webp",
        riveId: 7373892,
        width: 1122,
        height: 913,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_wildwood: {
        url: "https://cdn.discordapp.com/assets/content/8720408e9648dc12a30225c43f7331bf40bd97f2bef32efd34ad73757a8a404a.webp",
        riveId: 7373907,
        width: 1122,
        height: 913,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_winter: {
        url: "https://cdn.discordapp.com/assets/content/3ec4b4f145367c3559af97c23f2d2cbcbdfb3d45e2533e2f9357b103871e66fe.webp",
        riveId: 7373914,
        width: 1122,
        height: 913,
        widthAt1x: 234,
    },
    tex_outfit_12_mech: {
        url: "https://cdn.discordapp.com/assets/content/374dcefa8abedf0253ab2cb7cb2c0fa0970e4404a61529875669980364acc30a.webp",
        riveId: 6879169,
        width: 1023,
        height: 836,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_aero: {
        url: "https://cdn.discordapp.com/assets/content/0187e673dfe835f39b3e0fc5c8895bc49a41df33e532d6184549031f9df173fe.webp",
        riveId: 7373915,
        width: 1023,
        height: 836,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_sandstorm: {
        url: "https://cdn.discordapp.com/assets/content/dba2cf636a3929d4f6d189e877dae3ac4177d1f482b5442ed91e9561d95a7fde.webp",
        riveId: 6945609,
        width: 1023,
        height: 836,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_ultraviolet: {
        url: "https://cdn.discordapp.com/assets/content/7a671dbf6449baba2ef4770e47af5c476d3dd9746da1057b98bc9cfee55dc913.webp",
        riveId: 6945612,
        width: 1023,
        height: 836,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_viper: {
        url: "https://cdn.discordapp.com/assets/content/01f331284cf426f6b54910a8b4b4af41ad130ad309ce050676fa1bc7e742ae77.webp",
        riveId: 6945613,
        width: 1023,
        height: 836,
        widthAt1x: 214,
    },
    tex_outfit_13_knight: {
        url: "https://cdn.discordapp.com/assets/content/fa5a6748f74956125d199ca10b6a60ea97a80cb6eac331f2aaf234c9aaa1779f.webp",
        riveId: 7373786,
        width: 1035,
        height: 874,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_glacier: {
        url: "https://cdn.discordapp.com/assets/content/4b896a993bcc24782124d8661c74174149cffc035e5abaad20d6d7b736875c1e.webp",
        riveId: 7373968,
        width: 1035,
        height: 874,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_iron: {
        url: "https://cdn.discordapp.com/assets/content/304e3eb4edfee15b0742caff2c69a9b175203e524429c7df8e142f341d5f343e.webp",
        riveId: 7373976,
        width: 1035,
        height: 874,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_petal: {
        url: "https://cdn.discordapp.com/assets/content/d3e61696b9e561a8ff5f98951cf790306d9a7e8eb81e05ad47a7221db2c8d9fb.webp",
        riveId: 7374038,
        width: 1035,
        height: 874,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_rust: {
        url: "https://cdn.discordapp.com/assets/content/3b887f6dde14ae5d5203c387aa71b4841dce256c76a02897dc22fa81eb5718d6.webp",
        riveId: 7374084,
        width: 1035,
        height: 874,
        widthAt1x: 207,
    },
    tex_outfit_14_magical: {
        url: "https://cdn.discordapp.com/assets/content/11db8197785d9434c2651516d5284c1df6d21966c0c37943afe4a66eb40fa3fb.webp",
        riveId: 7373809,
        width: 880,
        height: 781,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_amethyst: {
        url: "https://cdn.discordapp.com/assets/content/ac4b59aa4fd6cef322507ea79bba6b786758b063b65516aa0619930815726053.webp",
        riveId: 7374096,
        width: 880,
        height: 781,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_citrine: {
        url: "https://cdn.discordapp.com/assets/content/f9b6543f6f441ab9219231b26e4678734211b3cd4281b2def579a1b693645bf7.webp",
        riveId: 7374100,
        width: 880,
        height: 781,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_frost: {
        url: "https://cdn.discordapp.com/assets/content/d2d9225ef9bd6672ce59b64d7432af1327456310e26602f919dafbc57323dbae.webp",
        riveId: 7374112,
        width: 880,
        height: 781,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_sapphire: {
        url: "https://cdn.discordapp.com/assets/content/76cb60e4c7cee20be9fd070e89afe76e1001d8a50cd5c71f6ab1fdb23cf197ae.webp",
        riveId: 7374113,
        width: 880,
        height: 781,
        widthAt1x: 184,
    },
    tex_shoes_01_sneakers: {
        url: "https://cdn.discordapp.com/assets/content/722d815b75dd143e886bc2680f2acba82611c04914496e46ff0515c5d5ecc4a1.webp",
        riveId: 6880490,
        width: 920,
        height: 322,
        widthAt1x: 180,
    },
    tex_shoes_02_socks: {
        url: "https://cdn.discordapp.com/assets/content/7415d631135b2153b9e588e6817db57d08061b66a7d9beaab20df69bcd4632de.webp",
        riveId: 6880573,
        width: 920,
        height: 276,
        widthAt1x: 180,
    },
    tex_shoes_03_wumpusSlippers: {
        url: "https://cdn.discordapp.com/assets/content/63a62bd85b876037b8699ca488e2f19cd6364b1202509dc40accd8494235d512.webp",
        riveId: 6880448,
        width: 759,
        height: 253,
        widthAt1x: 153,
    },
    tex_shoes_04_bionic: {
        url: "https://cdn.discordapp.com/assets/content/0cf3432ffb8561302933202d0fecfd3b3ee624833864220a4fe5f8f43c535562.webp",
        riveId: 6880556,
        width: 828,
        height: 230,
        widthAt1x: 162,
    },
    tex_shoes_05_platforms: {
        url: "https://cdn.discordapp.com/assets/content/616a706d00110b2c5630b38f8b74e27e0815fd5c5948125e800e5e6e32147f98.webp",
        riveId: 7026898,
        width: 828,
        height: 322,
        widthAt1x: 162,
    },
    tex_shoes_06_westernboots: {
        url: "https://cdn.discordapp.com/assets/content/6176ba60d88bb2a1beceb69c86be3f58c3c00545f2ee0d42bd7de7fc91956a20.webp",
        riveId: 7026900,
        width: 792,
        height: 209,
        widthAt1x: 165,
    },
    tex_shoes_07_kittyPaws: {
        url: "https://cdn.discordapp.com/assets/content/2f149796ffdd9233a8565cc27b27aa17ce132bbafbd7f1ba262226cab145b5bf.webp",
        riveId: 7026901,
        width: 920,
        height: 276,
        widthAt1x: 180,
    },
    tex_shoes_08_rollerSkates: {
        url: "https://cdn.discordapp.com/assets/content/d5ee92eaad271cbf070120bf89554494a2db3cbc8efe2fee9ec55ba1adbe9ce2.webp",
        riveId: 7026902,
        width: 759,
        height: 275,
        widthAt1x: 158,
    },
    tex_shoes_09_snowShoes: {
        url: "https://cdn.discordapp.com/assets/content/1518d959e43eb3f627d3cad01f6f84283b968be784c6e6f84aacc51060af6ffe.webp",
        riveId: 6880513,
        width: 828,
        height: 230,
        widthAt1x: 162,
    },
    tex_shoes_10_icarusSandals: {
        url: "https://cdn.discordapp.com/assets/content/31b6c24725e5aa7d17efcb421c512175d97e2668bdac43358ff80295f3061b34.webp",
        riveId: 7074384,
        width: 897,
        height: 322,
        widthAt1x: 179,
    },
    tex_shoes_11_clownShoes: {
        url: "https://cdn.discordapp.com/assets/content/fafcdac3bb0fa0f68bcfaf2a396f128f7d2657f41b13cdc8ccb773ef1afbb07b.webp",
        riveId: 7026915,
        width: 989,
        height: 276,
        widthAt1x: 197,
    },
    tex_shoes_12_fancyHeel: {
        url: "https://cdn.discordapp.com/assets/content/33e861aaf6ed22be6b3904101304476441adade0a18eb7160e592d27acd9a5ec.webp",
        riveId: 6880487,
        width: 920,
        height: 276,
        widthAt1x: 180,
    },
    tex_shoes_13_ballet: {
        url: "https://cdn.discordapp.com/assets/content/26aa887cfdf872b6856dc23fc70d1525533c5693556cdfb6f0bee64a04099633.webp",
        riveId: 7026916,
        width: 828,
        height: 207,
        widthAt1x: 164,
    },
    tex_shoes_14_cyberStompers: {
        url: "https://cdn.discordapp.com/assets/content/c07e3ec373dafcc98bc878949759085344ba8ccfda3ee93d80d73e51b259a773.webp",
        riveId: 7026917,
        width: 874,
        height: 230,
        widthAt1x: 171,
    },
    tex_wearable_01_stickers: {
        url: "https://cdn.discordapp.com/assets/content/c99bf6e7650d4fb9433fc4c3bc79fa70dc278ec19e16d4be64a1859797679c38.webp",
        riveId: 6880478,
        width: 1265,
        height: 1144,
        widthAt1x: 264,
    },
    tex_wearable_02_tote: {
        url: "https://cdn.discordapp.com/assets/content/8418825bb54bffaa5780520eba8320918a64bc0fe7162569c096208d8677c529.webp",
        riveId: 6880476,
        width: 391,
        height: 506,
        widthAt1x: 78,
    },
    tex_wearable_03_angelWings: {
        url: "https://cdn.discordapp.com/assets/content/2ec0ee09a2c3094a0c09e5b075b109a5e2a2230e634756b458fa9a86cc64aac4.webp",
        riveId: 6880634,
        width: 2024,
        height: 644,
        widthAt1x: 396,
    },
    tex_wearable_04_skateboard: {
        url: "https://cdn.discordapp.com/assets/content/bf87be666f5c1d04a8821e5ae2e1f5b5d3fc5d60280303df8e06a9f366ff67da.webp",
        riveId: 6880472,
        width: 407,
        height: 605,
        widthAt1x: 85,
    },
    tex_wearable_05_dragonWings: {
        url: "https://cdn.discordapp.com/assets/content/1bd761593c4e49c33c0368f6d546679a9df805a79828fafc1ae57e395fab713e.webp",
        riveId: 6945412,
        width: 2392,
        height: 1748,
        widthAt1x: 468,
    },
    tex_wearable_06_takeOutBag: {
        url: "https://cdn.discordapp.com/assets/content/c74b3a10976f8734a0d8ec664f4112c1b26c7f12aada1216b8317d724c1f791f.webp",
        riveId: 6880614,
        width: 345,
        height: 391,
        widthAt1x: 69,
    },
    tex_wearable_07_pixelWrench: {
        url: "https://cdn.discordapp.com/assets/content/85d71b12477b3710167aa7f228e6bdcfd0c80d165b6314f373e839f2b2053a69.webp",
        riveId: 7058139,
        width: 638,
        height: 473,
        widthAt1x: 133,
    },
    tex_wearable_08_wizardStaff: {
        url: "https://cdn.discordapp.com/assets/content/b3a8ae715f973e23817f17955b3b1c69e206ea0cbf9fe92f6c423aa0de4fd66c.webp",
        riveId: 6978663,
        width: 770,
        height: 1111,
        widthAt1x: 161,
    },
    tex_wearable_09_mechWings: {
        url: "https://cdn.discordapp.com/assets/content/8ecaf8d5340231cd9a94e6e48d20fcaad58e934f67735afb9957a1ef0294dc75.webp",
        riveId: 6880609,
        width: 2116,
        height: 644,
        widthAt1x: 414,
    },
    tex_wearable_10_sword_spritesheet: {
        url: "https://cdn.discordapp.com/assets/content/755e855227622ad212cdd19a32d5c810effb4de8570cb9595ff6551db1c15d40.webp",
        riveId: 7026804,
        width: 4095,
        height: 3652,
        widthAt1x: 905,
    },
    tex_wearable_11_deviantTail: {
        url: "https://cdn.discordapp.com/assets/content/580ff15bbade3c93e130b0213b7cf3e6ca96de6ccd387eded2462eed93c83acf.webp",
        riveId: 7000661,
        width: 850,
        height: 748,
        widthAt1x: 175,
    },
    tex_wearable_11_deviantTail_smoke_active_spritesheet: {
        url: "https://cdn.discordapp.com/assets/content/93a944169c9b66e43d767c6c62dc1ff5ed6779f77de78ce47b34ac5dbb6ea5b2.webp",
        riveId: 7190581,
        width: 3072,
        height: 4096,
        widthAt1x: 900,
    },
    tex_wearable_11_deviantTail_smoke_idle_spritesheet: {
        url: "https://cdn.discordapp.com/assets/content/aaabbf067145508adf0da0e898ec4434446de43808ecdd98f75f8fed2a57cfa0.webp",
        riveId: 7190582,
        width: 3072,
        height: 4096,
        widthAt1x: 900,
    },
    tex_wearable_12_magicalStaff: {
        url: "https://cdn.discordapp.com/assets/content/d8d4dbae472982c2ab1537504dba4aa659314eb7ccc5feffdc08e971bdee8ca2.webp",
        riveId: 6944077,
        width: 782,
        height: 943,
        widthAt1x: 156,
    },
    tex_wearable_13_butterflyWings: {
        url: "https://cdn.discordapp.com/assets/content/0932a8b5ab920c0a086d3c3112912d0b5620bd712a924ceb90e661bcb9e56db4.webp",
        riveId: 6797765,
        width: 2583,
        height: 2583,
        widthAt1x: 517,
    },
    tex_wearable_14_catBackpack: {
        url: "https://cdn.discordapp.com/assets/content/07f05b77f8a5eff35b91154095fdaa503c379ff5b514802d88a353e86adb3096.webp",
        riveId: 6944650,
        width: 506,
        height: 529,
        widthAt1x: 101,
    },
    tex_wireframe_spritesheet: {
        url: "https://cdn.discordapp.com/assets/content/df0bc8b307f84dcb7044c1f8b571bb41716dd891da077311940d4e8003b2fb9d.webp",
        riveId: 7103978,
        width: 4032,
        height: 4080,
        widthAt1x: 2016,
    },
};
function eh(e) {
    return { name: e, url: eu[e].url };
}
let ef = eh("tex_none"),
    eb = {
        [ed.N.NONE]: 0,
        [ed.N.CAP]: 7,
        [ed.N.ELVEN_HEADPIECE]: 1,
        [ed.N.HEADPHONES]: 2,
        [ed.N.TEDDY_BEANIE]: 13,
        [ed.N.PIERCINGS]: 4,
        [ed.N.HEADBAND]: 5,
        [ed.N.SUNGLASSES]: 6,
        [ed.N.BANANA_PEEL]: 3,
        [ed.N.LEAF]: 8,
        [ed.N.FIRE]: 9,
        [ed.N.HALO]: 10,
        [ed.N.BRAIN]: 11,
        [ed.N.TRAFFIC_CONE]: 12,
        [ed.N.CROWN]: 14,
    },
    ep = {
        [eo.Z.NONE]: 0,
        [eo.Z.ANGEL_WINGS]: 3,
        [eo.Z.STICKERS]: 1,
        [eo.Z.TOTE]: 2,
        [eo.Z.WIZARD_STAFF]: 8,
        [eo.Z.SKATEBOARD]: 4,
        [eo.Z.DRAGON_WINGS]: 5,
        [eo.Z.TAKE_OUT_BAG]: 6,
        [eo.Z.PIXEL_WRENCH]: 7,
        [eo.Z.MECH_WINGS]: 9,
        [eo.Z.SWORD]: 10,
        [eo.Z.DEVIANT_TAIL]: 11,
        [eo.Z.MAGICAL_STAFF]: 12,
        [eo.Z.BUTTERFLY_WINGS]: 13,
        [eo.Z.CAT_BACKPACK]: 14,
    },
    e_ = {
        [es.X.NONE]: ef,
        [es.X.BLAZE]: eh("tex_aura_04_blaze"),
        [es.X.BLOSSOM]: eh("tex_aura_01_blossom"),
        [es.X.PRISM]: eh("tex_aura_02_prism"),
        [es.X.SHOCK]: eh("tex_aura_03_shock"),
        [es.X.FATED]: eh("tex_aura_05_fated"),
        [es.X.LUSTER]: eh("tex_aura_06_luster"),
        [es.X.BUBBLES]: eh("tex_aura_07_bubbly"),
        [es.X.SPOOKY]: eh("tex_aura_08_spooky"),
        [es.X.CURSED]: eh("tex_aura_09_cursed"),
        [es.X.MAGNETIC]: eh("tex_aura_10_magnetic"),
        [es.X.RADIOACTIVE]: eh("tex_aura_11_radioactive"),
        [es.X.ELEMENTAL]: eh("tex_aura_12_elemental"),
        [es.X.SHIMMER]: eh("tex_aura_13_shimmer"),
        [es.X.WITCHY]: eh("tex_aura_14_witchy"),
    },
    em = {
        [ec.R.ICY]: eh("tex_base_01_icy"),
        [ec.R.CRIMSON]: eh("tex_base_02_crimson"),
        [ec.R.CHROME]: eh("tex_base_03_chrome"),
        [ec.R.GALACTIC]: eh("tex_base_04_galactic"),
        [ec.R.FOREST]: eh("tex_base_05_forrest"),
        [ec.R.MIDNIGHT]: eh("tex_base_06_mighnight"),
        [ec.R.GLACIER]: eh("tex_base_07_glacier"),
        [ec.R.ORANGE]: eh("tex_base_08_orange"),
        [ec.R.PURPLE]: eh("tex_base_09_pink"),
        [ec.R.RED]: eh("tex_base_10_red"),
        [ec.R.COBALT]: eh("tex_base_11_cobalt"),
        [ec.R.X_RAY]: eh("tex_base_12_x-ray"),
        [ec.R.LIQUID]: eh("tex_base_13_liquid"),
        [ec.R.BUTTER]: eh("tex_base_14_butter"),
        [ec.R.IRIDESCENT]: eh("tex_base_15_iridescent"),
    },
    ex = {
        [el.r.NONE]: null,
        [el.r.BADDIE_DEFAULT]: { riveId: 1, texture: eh("tex_outfit_01_baddie") },
        [el.r.TRAVELER_DEFAULT]: { riveId: 10, texture: eh("tex_outfit_10_traveler") },
        [el.r.STREAMER_DEFAULT]: { riveId: 3, texture: eh("tex_outfit_03_streamer") },
        [el.r.CAMPER_DEFAULT]: { riveId: 4, texture: eh("tex_outfit_04_camper") },
        [el.r.ATHLETE_DEFAULT]: { riveId: 5, texture: eh("tex_outfit_05_athlete") },
        [el.r.COWPOKE_DEFAULT]: { riveId: 6, texture: eh("tex_outfit_06_cowpoke") },
        [el.r.GOTH_DEFAULT]: { riveId: 7, texture: eh("tex_outfit_07_goth") },
        [el.r.ASTRONAUT_DEFAULT]: { riveId: 8, texture: eh("tex_outfit_08_astronaut") },
        [el.r.JESTER_DEFAULT]: { riveId: 9, texture: eh("tex_outfit_09_jester") },
        [el.r.TRASH_CAN_DEFAULT]: { riveId: 2, texture: eh("tex_outfit_02_trash") },
        [el.r.MAGE_DEFAULT]: { riveId: 11, texture: eh("tex_outfit_11_mage") },
        [el.r.MECH_DEFAULT]: { riveId: 12, texture: eh("tex_outfit_12_mech") },
        [el.r.KNIGHT_DEFAULT]: { riveId: 13, texture: eh("tex_outfit_13_knight") },
        [el.r.MAGICAL_DEFAULT]: { riveId: 14, texture: eh("tex_outfit_14_magical") },
        [el.r.BADDIE_MONOCHROME]: { riveId: 1, texture: eh("tex_outfit_01_baddie_monochrome") },
        [el.r.BADDIE_VIOLET]: { riveId: 1, texture: eh("tex_outfit_01_baddie_violet") },
        [el.r.BADDIE_PASTEL]: { riveId: 1, texture: eh("tex_outfit_01_baddie_pastel") },
        [el.r.BADDIE_SUNSET]: { riveId: 1, texture: eh("tex_outfit_01_baddie_sunset") },
        [el.r.TRAVELER_HAZE]: { riveId: 10, texture: eh("tex_outfit_10_traveler_haze") },
        [el.r.TRAVELER_MOSS]: { riveId: 10, texture: eh("tex_outfit_10_traveler_moss") },
        [el.r.TRAVELER_CHRONO]: { riveId: 10, texture: eh("tex_outfit_10_traveler_chrono") },
        [el.r.TRAVELER_UMBER]: { riveId: 10, texture: eh("tex_outfit_10_traveler_umber") },
        [el.r.STREAMER_FLAMES]: { riveId: 3, texture: eh("tex_outfit_03_streamer_flames") },
        [el.r.STREAMER_STRIPES]: { riveId: 3, texture: eh("tex_outfit_03_streamer_stripes") },
        [el.r.STREAMER_SMILEY]: { riveId: 3, texture: eh("tex_outfit_03_streamer_smiley") },
        [el.r.STREAMER_VINTAGE]: { riveId: 3, texture: eh("tex_outfit_03_streamer_vintage") },
        [el.r.CAMPER_PLAID]: { riveId: 4, texture: eh("tex_outfit_04_camper_plaid") },
        [el.r.CAMPER_SWAMP]: { riveId: 4, texture: eh("tex_outfit_04_camper_swamp") },
        [el.r.CAMPER_GLAMP]: { riveId: 4, texture: eh("tex_outfit_04_camper_glamp") },
        [el.r.CAMPER_AMBER]: { riveId: 4, texture: eh("tex_outfit_04_camper_amber") },
        [el.r.ATHLETE_BLOCKED]: { riveId: 5, texture: eh("tex_outfit_05_athlete_blocked") },
        [el.r.ATHLETE_FADED]: { riveId: 5, texture: eh("tex_outfit_05_athlete_faded") },
        [el.r.ATHLETE_CHECKERED]: { riveId: 5, texture: eh("tex_outfit_05_athlete_checkered") },
        [el.r.ATHLETE_LINED]: { riveId: 5, texture: eh("tex_outfit_05_athlete_lined") },
        [el.r.COWPOKE_ONYX]: { riveId: 6, texture: eh("tex_outfit_06_cowpoke_onyx") },
        [el.r.COWPOKE_STEEL]: { riveId: 6, texture: eh("tex_outfit_06_cowpoke_steel") },
        [el.r.COWPOKE_DENIM]: { riveId: 6, texture: eh("tex_outfit_06_cowpoke_denim") },
        [el.r.COWPOKE_BLUSH]: { riveId: 6, texture: eh("tex_outfit_06_cowpoke_blush") },
        [el.r.GOTH_SIREN]: { riveId: 7, texture: eh("tex_outfit_07_goth_siren") },
        [el.r.GOTH_SERPENT]: { riveId: 7, texture: eh("tex_outfit_07_goth_serpent") },
        [el.r.GOTH_RAVEN]: { riveId: 7, texture: eh("tex_outfit_07_goth_raven") },
        [el.r.GOTH_VAMP]: { riveId: 7, texture: eh("tex_outfit_07_goth_vamp") },
        [el.r.ASTRONAUT_STARDUST]: { riveId: 8, texture: eh("tex_outfit_08_astronaut_stardust") },
        [el.r.ASTRONAUT_MARTIAN]: { riveId: 8, texture: eh("tex_outfit_08_astronaut_martian") },
        [el.r.ASTRONAUT_SOLAR]: { riveId: 8, texture: eh("tex_outfit_08_astronaut_solar") },
        [el.r.ASTRONAUT_COSMIC]: { riveId: 8, texture: eh("tex_outfit_08_astronaut_cosmic") },
        [el.r.JESTER_CONFETTI]: { riveId: 9, texture: eh("tex_outfit_09_jester_confetti") },
        [el.r.JESTER_CARNIVAL]: { riveId: 9, texture: eh("tex_outfit_09_jester_carnival") },
        [el.r.JESTER_SUNRISE]: { riveId: 9, texture: eh("tex_outfit_09_jester_sunrise") },
        [el.r.JESTER_NIGHTFALL]: { riveId: 9, texture: eh("tex_outfit_09_jester_nightfall") },
        [el.r.TRASH_CAN_BLACKOUT]: { riveId: 2, texture: eh("tex_outfit_02_trash_blackout") },
        [el.r.TRASH_CAN_CAUTION]: { riveId: 2, texture: eh("tex_outfit_02_trash_caution") },
        [el.r.TRASH_CAN_BUBBLEGUM]: { riveId: 2, texture: eh("tex_outfit_02_trash_bubblegum") },
        [el.r.TRASH_CAN_TOXIC]: { riveId: 2, texture: eh("tex_outfit_02_trash_toxic") },
        [el.r.MAGE_SHADOW]: { riveId: 11, texture: eh("tex_outfit_11_mage_shadow") },
        [el.r.MAGE_DUSK]: { riveId: 11, texture: eh("tex_outfit_11_mage_dusk") },
        [el.r.MAGE_WILDWOOD]: { riveId: 11, texture: eh("tex_outfit_11_mage_wildwood") },
        [el.r.MAGE_WINTER]: { riveId: 11, texture: eh("tex_outfit_11_mage_winter") },
        [el.r.MECH_AERO]: { riveId: 12, texture: eh("tex_outfit_12_mech_aero") },
        [el.r.MECH_VIPER]: { riveId: 12, texture: eh("tex_outfit_12_mech_viper") },
        [el.r.MECH_ULTRAVIOLET]: { riveId: 12, texture: eh("tex_outfit_12_mech_ultraviolet") },
        [el.r.MECH_SANDSTORM]: { riveId: 12, texture: eh("tex_outfit_12_mech_sandstorm") },
        [el.r.KNIGHT_IRON]: { riveId: 13, texture: eh("tex_outfit_13_knight_iron") },
        [el.r.KNIGHT_RUST]: { riveId: 13, texture: eh("tex_outfit_13_knight_rust") },
        [el.r.KNIGHT_PETAL]: { riveId: 13, texture: eh("tex_outfit_13_knight_petal") },
        [el.r.KNIGHT_GLACIER]: { riveId: 13, texture: eh("tex_outfit_13_knight_glacier") },
        [el.r.MAGICAL_SAPPHIRE]: { riveId: 14, texture: eh("tex_outfit_14_magical_sapphire") },
        [el.r.MAGICAL_AMETHYST]: { riveId: 14, texture: eh("tex_outfit_14_magical_amethyst") },
        [el.r.MAGICAL_FROST]: { riveId: 14, texture: eh("tex_outfit_14_magical_frost") },
        [el.r.MAGICAL_CITRINE]: { riveId: 14, texture: eh("tex_outfit_14_magical_citrine") },
    };
var eg = a(835517),
    eA = (((i = {}).SLOT = "slot"), (i.TRAIT = "trait"), (i.LAYOUT = "layout"), (i.ALWAYS = "always"), i);
let ev = /^tex_(aura|base_\d+|outfit)_/,
    ew = /^tex_(headwear|shoes|wearable|face)_(\d+)_/,
    eI = /^tex_face_([a-z]+)_/i,
    eE = {
        tex_env_labNight_bg: ["Desktop"],
        tex_env_labNight_bg_mobileLandscape: ["MobileLandscape"],
        tex_env_labNight_bg_mobilePortrait: ["MobilePortrait"],
        tex_env_labNight_fgLeft: ["Desktop"],
        tex_env_labNight_fgRight: ["Desktop"],
        tex_env_labNight_mgBottom: ["Desktop"],
        tex_env_labNight_mgBottomMobile: ["MobilePortrait", "MobileLandscape"],
        tex_env_labNight_sky: ["Desktop"],
    },
    ej = {
        chill: 1,
        crybaby: 2,
        bored: 3,
        lockedin: 4,
        smitten: 5,
        confused: 6,
        anxious: 7,
        sparkle: 8,
        rage: 9,
        sus: 10,
        spellbound: 11,
        spooked: 12,
        freefall: 13,
        possessed: 14,
        awkward: 15,
    },
    eS = { columns: 1, rows: 1 },
    eN = { columns: 5, rows: 5 },
    eT = { columns: 6, rows: 8 },
    eC = {
        tex_aura_01_blossom: eN,
        tex_aura_02_prism: eN,
        tex_aura_03_shock: eN,
        tex_aura_04_blaze: eN,
        tex_aura_05_fated: eN,
        tex_aura_06_luster: eN,
        tex_aura_07_bubbly: eN,
        tex_aura_08_spooky: eN,
        tex_aura_09_cursed: eN,
        tex_aura_10_magnetic: eN,
        tex_aura_11_radioactive: eN,
        tex_aura_12_elemental: eN,
        tex_aura_13_shimmer: eN,
        tex_aura_14_witchy: eN,
        tex_wireframe_spritesheet: { columns: 12, rows: 6 },
        tex_wearable_10_sword_spritesheet: { columns: 5, rows: 4 },
        tex_wearable_11_deviantTail_smoke_active_spritesheet: eT,
        tex_wearable_11_deviantTail_smoke_idle_spritesheet: eT,
    },
    eR = [1, 1.25, 1.5, 1.75, 2, 3, 4, 5],
    eO = Math.min(...eR),
    eM = Math.max(...eR);
function ey(e, t) {
    let { url: a, width: i, height: r, widthAt1x: n } = eu[e];
    if (null == n) return a;
    let s = 4096 / Math.max(i, r),
        c = Math.min((t * n) / i, s),
        d = s >= 1 && t >= Math.round(i / n);
    if (c >= 1 || d) return a;
    let { columns: l, rows: o } = eC[e] ?? eS,
        u = l * Math.round((i / l) * c),
        h = o * Math.round((r / o) * c);
    return `${a}?width=${u}&height=${h}`;
}
let eL = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"],
    ek = eL.map((e) => `outfit${e}Image`),
    eD = {
        [S.s9.IDLE]: 0,
        [S.s9.INTRODUCTION]: 1,
        [S.s9.FACE]: 2,
        [S.s9.OUTFIT]: 3,
        [S.s9.HEADWEAR]: 4,
        [S.s9.SHOES]: 5,
        [S.s9.WEARABLE]: 6,
        [S.s9.AURA]: 7,
        [S.s9.ASSEMBLED]: 8,
        [S.s9.FINALIZE]: 8,
        [S.s9.SUMMARY]: 8,
    },
    eP = {
        Desktop: {
            gradientTopOpacity: 0,
            gradientTopPosition: 0,
            gradientBottomOpacity: 0,
            gradientBottomPosition: 0,
            gradientLeftOpacity: 100,
            gradientLeftPosition: 100,
            gradientRightOpacity: 0,
            gradientRightPosition: 0,
        },
        MobilePortrait: {
            gradientTopOpacity: 100,
            gradientTopPosition: 45,
            gradientBottomOpacity: 100,
            gradientBottomPosition: 75,
            gradientLeftOpacity: 0,
            gradientLeftPosition: 0,
            gradientRightOpacity: 0,
            gradientRightPosition: 0,
        },
        MobileLandscape: {
            gradientTopOpacity: 100,
            gradientTopPosition: 50,
            gradientBottomOpacity: 100,
            gradientBottomPosition: 30,
            gradientLeftOpacity: 0,
            gradientLeftPosition: 0,
            gradientRightOpacity: 100,
            gradientRightPosition: 100,
        },
    },
    eU = { ...eP.MobilePortrait, gradientTopPosition: 25, gradientBottomPosition: 90 };
var eF = a(722872),
    eG = a(574381);
let eH = new Set([1]),
    eK = Object.keys(eu).map((e) => ({
        name: e,
        role: (function (e) {
            if (ev.test(e)) return { type: "slot" };
            let t = eE[e];
            if (null != t) return { type: "layout", layouts: t };
            let a = ew.exec(e);
            if (null != a) return { type: "trait", path: `${a[1]}ID`, riveId: Number(a[2]) };
            let i = eI.exec(e),
                r = null != i ? ej[i[1].toLowerCase()] : void 0;
            return null != r ? { type: "trait", path: "faceID", riveId: r } : { type: "always" };
        })(e),
        swapKey: (0, eG.un)() ? `${e}-${eu[e].riveId}` : e,
    }));
function eB(e) {
    let { faceID: t, headwearID: a, shoesID: i, wearableID: r, chapterID: n, device: s } = e;
    return p.useMemo(() => {
        var e;
        let c;
        return (
            (e = { faceID: t, headwearID: a, shoesID: i, wearableID: r }),
            (c = new Set()),
            eK.forEach((t) => {
                let { name: a, role: i } = t;
                switch (i.type) {
                    case eA.SLOT:
                        break;
                    case eA.TRAIT:
                        e[i.path] === i.riveId && c.add(a);
                        break;
                    case eA.LAYOUT:
                        i.layouts.includes(s) && c.add(a);
                        break;
                    case eA.ALWAYS:
                        ("tex_wireframe_spritesheet" !== a || eH.has(n)) && c.add(a);
                }
            }),
            c
        );
    }, [t, a, i, r, n, s]);
}
var ez = a(435558);
let eV = (0, a(196765).v)(() => ({ hoveredOption: void 0 })),
    eW = (0, ez.debounce)((e) => eV.setState({ hoveredOption: e }), 250);
function eq(e) {
    let { hoveredOption: t, isDelayed: a = !1 } = e;
    a ? eW(t) : (eW.cancel(), eV.setState({ hoveredOption: t }));
}
(a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162));
var eY = a(971940);
async function eX(e) {
    try {
        let t = await fetch(e);
        if (!t.ok) return null;
        return await (0, eY.decodeImage)(new Uint8Array(await t.arrayBuffer()));
    } catch {
        return null;
    }
}
var eZ = a(168862);
function eQ(e) {
    let t,
        a,
        { stage: i, isHidden: r } = e,
        s = (0, x.bG)([l.A], () => {
            let e = l.A.windowSize();
            return (function (e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (a) return eO;
                let i = Math.max(e / 960, t / 540) * (0, eg.A)();
                return eR.find((e) => e >= i) ?? eM;
            })(e.width, e.height);
        }),
        [c, d] = p.useState(s);
    s > c && d(s);
    let o =
            ((t = (0, x.bG)([h.A], () => h.A.selectedCharacterTraits)),
            (a = eV((e) => e.hoveredOption)),
            p.useMemo(() => (null != a ? { ...t, [a.trait]: a.optionId } : t), [t, a])),
        u = (0, x.bG)([q.Ay], () => q.Ay.useReducedMotion),
        f = p.useMemo(
            () =>
                (function (e) {
                    let { stage: t, isHidden: a, traits: i, layout: r, textureScale: n } = e,
                        { base: s, shoes: c, outfit: d, face: l, hat: o, wearable: u, aura: h } = (0, U.XI)(i),
                        f = ex[d],
                        b = {};
                    return (
                        eL.forEach((e) => {
                            let t = Number(e) === f?.riveId ? f.texture : ef;
                            b[`outfit${e}Image`] = ey(t.name, n);
                        }),
                        {
                            device: r,
                            chapterID: a && t === S.s9.FACE ? eD[S.s9.IDLE] : eD[t],
                            faceID: l,
                            shoesID: c,
                            headwearID: eb[o],
                            wearableID: ep[u],
                            outfitID: f?.riveId ?? 0,
                            auraImage: ey(e_[h].name, n),
                            baseColorImage: ey(em[s].name, n),
                            ...("MobilePortrait" === r && t === S.s9.INTRODUCTION ? eU : eP[r]),
                            ...b,
                        }
                    );
                })({ stage: i, isHidden: r, traits: o, layout: "Desktop", textureScale: c }),
            [i, r, o, c],
        ),
        [b, _] = p.useState(null),
        g = (function (e) {
            let { visibleDataBinding: t, requestedDataBinding: a, textureScale: i } = e,
                r = (function (e) {
                    let { visibleTextureNames: t, requestedTextureNames: a } = e,
                        [i, r] = p.useState(t),
                        [n, s] = p.useState(t);
                    if (t !== n) {
                        s(t);
                        let e = new Set(i);
                        (t.forEach((t) => e.add(t)), r(e));
                    }
                    return (
                        p.useEffect(() => {
                            let e = setTimeout(() => r(t), 600);
                            return () => clearTimeout(e);
                        }, [t]),
                        p.useMemo(() => new Set([...i, ...a]), [i, a])
                    );
                })({ visibleTextureNames: eB(t), requestedTextureNames: eB(a) });
            return p.useMemo(() => {
                let e;
                return (
                    (e = {}),
                    eK.forEach((t) => {
                        let { name: a, swapKey: n } = t,
                            s = r.has(a) ? ey(a, i) : ef.url;
                        e[n] = { source: { uri: s } };
                    }),
                    e
                );
            }, [r, i]);
        })({ visibleDataBinding: b ?? f, requestedDataBinding: f, textureScale: c }),
        {
            assetLoader: A,
            onLoad: v,
            textureManager: w,
        } = (function () {
            let e = p.useRef(new Map()),
                [t, a] = p.useState(null),
                i = p.useCallback((t) => !!t.isImage && t.name in eu && (e.current.set(t.name, t), !0), []);
            return {
                assetLoader: i,
                onLoad: p.useCallback(() => {
                    (a(e.current), (e.current = new Map()));
                }, []),
                textureManager: p.useMemo(
                    () =>
                        null == t
                            ? null
                            : {
                                  load: eX,
                                  swap: (e) => e.forEach((e, a) => t.get(a)?.setRenderImage(e)),
                                  release: (e) => e.forEach((e) => e.unref()),
                              },
                    [t],
                ),
            };
        })(),
        I = p.useRef(null),
        E = p.useRef(r);
    p.useEffect(() => {
        ((E.current = r), r ? I.current?.pause() : I.current?.play());
    }, [r]);
    let j = p.useCallback(() => {
            (v(), E.current && I.current?.pause());
        }, [v]),
        N = (function (e) {
            let { textureManager: t, referencedAssets: a, initialReferencedAssets: i } = e,
                r = p.useRef(new Map()),
                [n, s] = p.useState(i);
            return (
                p.useEffect(() => {
                    r.current = new Map(
                        Object.entries(i ?? {}).map((e) => {
                            let [t, { source: a }] = e;
                            return [t, a.uri];
                        }),
                    );
                }, [t, i]),
                p.useEffect(() => {
                    if (null == t) return;
                    let e = !1;
                    return (
                        (async () => {
                            (await (async function (e) {
                                let { textureManager: t, shownUrls: a, referencedAssets: i, isStale: r } = e,
                                    n = new Map();
                                if (
                                    (Object.entries(i).forEach((e) => {
                                        let [t, { source: i }] = e;
                                        a.get(t) !== i.uri && n.set(t, i.uri);
                                    }),
                                    0 === n.size)
                                )
                                    return;
                                let s = new Map();
                                if (
                                    (await Promise.all(
                                        Array.from(new Set(n.values()), async (e) => {
                                            let a = await t.load(e);
                                            null != a && s.set(e, a);
                                        }),
                                    ),
                                    !r())
                                ) {
                                    let e = new Map();
                                    (n.forEach((t, i) => {
                                        let r = s.get(t);
                                        null != r && (e.set(i, r), a.set(i, t));
                                    }),
                                        t.swap(e));
                                }
                                t.release(Array.from(s.values()));
                            })({ textureManager: t, shownUrls: r.current, referencedAssets: a, isStale: () => e }),
                                e || s(a));
                        })(),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, a]),
                n === a
            );
        })({ textureManager: w, referencedAssets: g }),
        {
            dataBinding: T,
            isOutfitPreloaded: C,
            onDataBindingChange: R,
        } = (function (e) {
            var t;
            let { visibleDataBinding: a, requestedDataBinding: i } = e,
                [r, n] = p.useState({}),
                s = (t = i.outfitID) > 0 ? ek[t - 1] : null,
                c = null != s ? i[s] : void 0,
                d = null == s || a?.[s] === c || r[s] === c,
                l = a ?? i;
            return {
                dataBinding: p.useMemo(() => (null == s || l[s] === c ? l : { ...l, [s]: c }), [l, s, c]),
                isOutfitPreloaded: d,
                onDataBindingChange: p.useMemo(() => {
                    let e = {};
                    return (
                        ek.forEach((t) => {
                            e[t] = (e) => {
                                n((a) => (a[t] === e ? a : { ...a, [t]: e }));
                            };
                        }),
                        e
                    );
                }, []),
            };
        })({ visibleDataBinding: b, requestedDataBinding: f });
    N && C && b !== f && _(f);
    let O = (function (e) {
            let { stage: t, dataBinding: a } = e,
                i = (0, x.bG)([q.Ay], () => q.Ay.useReducedMotion),
                r = t === S.s9.INTRODUCTION && !i,
                [n, s] = p.useState(+!r),
                [c, d] = p.useState(r);
            return (
                r !== c && (d(r), s(+!r)),
                p.useEffect(() => {
                    if (!r) return;
                    let e = Date.now() + 1800,
                        t = requestAnimationFrame(function a() {
                            let i = Math.max(Math.min(Date.now() - e, 1e3), 0);
                            (s((0, eF.easeOutCubic)(i, 0, 1, 1e3)), i >= 1e3 || (t = requestAnimationFrame(a)));
                        });
                    return () => cancelAnimationFrame(t);
                }, [r]),
                p.useMemo(
                    () =>
                        1 === n
                            ? a
                            : {
                                  ...a,
                                  gradientTopOpacity: a.gradientTopOpacity * n,
                                  gradientBottomOpacity: a.gradientBottomOpacity * n,
                                  gradientLeftOpacity: a.gradientLeftOpacity * n,
                                  gradientRightOpacity: a.gradientRightOpacity * n,
                              },
                    [a, n],
                )
            );
        })({ stage: i, dataBinding: T }),
        M = p.useMemo(() => ({ ...O, mobileLift: 0, reducedMotion: u }), [O, u]);
    return (0, n.jsx)("div", {
        role: "img",
        "aria-label": (0, en.O)(o),
        className: m()(eZ.dw, { [eZ.RK]: null != b }),
        children: (0, n.jsx)(er.W, {
            artboard: "AB_Master",
            stateMachine: "SM_Master",
            fit: "layout",
            alignment: "center",
            ref: I,
            assetLoader: A,
            onLoad: j,
            listenOnDocumentBody: !u,
            withReducedMotion: "play",
            dataBinding: M,
            onDataBindingChange: R,
            className: eZ.lW,
        }),
    });
}
let eJ = { delay: 0, duration: 350 },
    e$ = { delay: 35, duration: 125 },
    e0 = { delay: 200, duration: 125 },
    e1 = { delay: 700, duration: 175 },
    e2 = { delay: 175, duration: 175 },
    e3 = { delay: 0, duration: 175 },
    e8 = { delay: 0, duration: 0 },
    e7 = { delay: eJ.delay + eJ.duration, duration: 0 },
    e5 = e0.delay + 500;
var e6 = a(840527);
function e9(e) {
    let { stage: t, isCovered: a, className: i, children: r } = e,
        [s, c] = p.useState(a);
    !a && s && c(!1);
    let d = a && !s,
        { isMountDelayed: l } = (function (e) {
            let [t, a] = p.useState(e);
            return (
                !e && t && a(!1),
                p.useEffect(() => {
                    if (!t) return;
                    let e = setTimeout(() => a(!1), e5);
                    return () => clearTimeout(e);
                }, [t]),
                { isMountDelayed: t }
            );
        })(a),
        o = (0, ee.p0)({ value: t, shouldUpdate: !d }) ?? t,
        u = (0, ee.p0)({ value: r, shouldUpdate: !d });
    return (0, n.jsxs)(ei, {
        visible: !a,
        enter: e8,
        exit: e7,
        keepMounted: !0,
        onExitComplete: () => c(!0),
        className: i,
        children: [
            (0, n.jsx)("div", { className: e6.q, children: !l && (0, n.jsx)(eQ, { stage: o, isHidden: s }) }),
            null != u && (0, n.jsx)("div", { className: e6.q, children: u }),
        ],
    });
}
function e4(e) {
    let { animatedSrc: t, staticSrc: a, className: i } = e,
        r = (0, x.bG)([q.Ay], () => q.Ay.useReducedMotion);
    return (0, n.jsx)("img", { src: r ? a : t, alt: "", className: i });
}
var te = a(740281),
    tt = a(766089),
    ta = a(767988);
let ti = { animatedSrc: tt.A, staticSrc: ta.A };
function tr(e) {
    let { activeRoute: t } = e,
        { animatedSrc: a, staticSrc: i } = (0, x.cf)(
            [h.A],
            () => {
                switch (t) {
                    case S.gr.SUMMARY:
                    case S.gr.SHARE:
                        let e = (0, I.o)(h.A.character),
                            { clydeLogoImage: a, clydeLogoStaticImage: i } = (0, I.j)(e);
                        return { animatedSrc: a, staticSrc: i };
                    default:
                        return ti;
                }
            },
            [t],
        );
    return (0, n.jsx)(e4, { animatedSrc: a, staticSrc: i, className: te.w });
}
var tn = a(756408);
function ts() {
    let e = p.useRef(null);
    return (
        p.useLayoutEffect(() => {
            let t = e.current;
            null != t && ((t.tabIndex = -1), t.focus({ preventScroll: !0 }));
        }, []),
        e
    );
}
var tc = a(834730),
    td = a(534514),
    tl = a(504736);
function to(e) {
    let { children: t, className: a, ...i } = e;
    return (0, n.jsx)(tc.E, { ...i, className: m()(tl.Q, a), color: "none", children: t });
}
function tu(e) {
    let { children: t, className: a, ...i } = e,
        r = ts();
    return (0, n.jsx)(td.D, { ...i, ref: r, className: m()(tl.Q, a), color: "none", children: t });
}
var th = a(271427);
function tf(e) {
    let { children: t, className: a, style: i } = e;
    return (0, n.jsx)(to, { tag: "span", variant: "mono-md/bold", className: m()(th.T, a), style: i, children: t });
}
var tb = a(852717),
    tp = a(792996),
    t_ = a(383931);
function tm(e) {
    let { percent: t } = e;
    return (0, n.jsx)(tf, {
        className: t_.t,
        children: tp.intl.formatToPlainString(tb.default.fOGKA4, { percent: t }),
    });
}
var tx = a(646692);
function tg(e) {
    let { icon: t, value: a, topPercent: i, children: r } = e,
        s = ts(),
        c =
            null != i
                ? tp.intl.formatToPlainString(tb.default.USo6cU, { value: a, label: r, percent: i })
                : tp.intl.formatToPlainString(tb.default["+CCx/D"], { value: a, label: r });
    return (0, n.jsxs)("div", {
        ref: s,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, n.jsxs)("div", {
                className: tx.dJ,
                "aria-hidden": !0,
                children: [
                    null != i && (0, n.jsx)(tm, { percent: i }),
                    (0, n.jsxs)("div", {
                        className: tx.p,
                        children: [
                            (0, n.jsx)(to, {
                                variant: "heading-xxl/medium",
                                className: tx.Uq,
                                children: a.toLocaleString(tp.intl.currentLocale),
                            }),
                            (0, n.jsxs)("div", {
                                className: tx.Pf,
                                children: [
                                    (0, n.jsx)(t, { size: "xs", color: "currentColor" }),
                                    (0, n.jsx)(to, { variant: "heading-xs/semibold", className: tx.QK, children: r }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(A.A, { children: c }),
        ],
    });
}
var tA = a(303453);
let tv = {
    [E.v7.FACE]: tb.default.q8GA6h,
    [E.v7.OUTFIT]: tb.default["xGh/fq"],
    [E.v7.OUTFIT_COLOR]: tb.default.IgiEDV,
    [E.v7.HAT]: tb.default.QqeBEO,
    [E.v7.WEARABLE]: tb.default.l57q3i,
    [E.v7.AURA]: tb.default["fYp+yq"],
    [E.v7.SHOES]: tb.default.BaI4wD,
    [E.v7.BASE]: tb.default.SMXZXX,
};
function tw(e) {
    let { customizationOption: t, earnedCount: a, totalCount: i } = e;
    return (0, n.jsx)(tc.E, {
        variant: "body-md/medium",
        color: "text-subtle",
        className: tA.k,
        children: tp.intl.format(tv[t], {
            earnedCount: a,
            totalCount: i,
            countHook: (e, t) =>
                (0, n.jsx)(to, { tag: "span", variant: "mono-md/bold", className: tA.U, children: e }, t),
        }),
    });
}
let tI =
    "https://cdn.discordapp.com/assets/content/48cbcb920dfd15e45e7fe3f297ede63a7891cb0eee9fc44f27053d05d2c6b5ca.mp3";
var tE = a(11044);
function tj(e) {
    let { isMuted: t, volume: a } = (0, x.cf)([h.A], () => ({ isMuted: h.A.isMuted, volume: h.A.volume })),
        i = p.useRef(null);
    return (
        p.useEffect(() => {
            i.current = new Audio(e);
        }, [e]),
        p.useEffect(() => {
            null != i.current && ((i.current.muted = t), (i.current.volume = a));
        }, [t, a]),
        p.useCallback(() => {
            let e = i.current;
            t || 0 === a || null == e || ((e.volume = a), (e.currentTime = 0), e.play());
        }, [t, a])
    );
}
var tS = a(218546),
    tN = a(646514),
    tT = a(403581),
    tC = a(461872),
    tR = a(559265);
function tO(e) {
    let { rarity: t } = e,
        a = p.useMemo(() => ({ "--custom-checkpoint-rarity-color": B.Zy[t] }), [t]);
    return t === tS.K.NITRO
        ? (0, n.jsx)(tT.NitroWheelIcon, { size: "custom", color: tN.A.colors.ICON_SUBTLE, className: tR.d7 })
        : (0, n.jsx)("span", { className: tR.oG, style: a });
}
function tM(e) {
    let {
            traitOption: t,
            groupName: a,
            isSelected: i,
            hideRarity: r,
            onSelectOption: s,
            onHoverOption: c,
            disabled: d = !1,
        } = e,
        { trait: l, optionId: o, rarity: u, asset: h, status: f } = t,
        b = f === tC.eP.LOCKED,
        _ = p.useMemo(() => {
            if (null == h) return null;
            let e = Math.round(80 * (0, eg.A)());
            return `${h}?width=${e}&height=${e}`;
        }, [h]);
    return (0, n.jsxs)("label", {
        className: m()(tR.uK, { [tR.wH]: i, [tR.dv]: (0, E.C5)(t), [tR.xt]: b, [tR.Ns]: f === tC.eP.NITRO_LOCKED }),
        onMouseEnter: () => c(t),
        onFocus: function () {
            c(t);
        },
        children: [
            (0, n.jsx)(A.A, {
                children: (0, n.jsx)("input", {
                    type: "radio",
                    name: a,
                    checked: i,
                    disabled: d,
                    "aria-disabled": d ? void 0 : b,
                    onChange: function () {
                        d || b || s(l, o);
                    },
                    "aria-label": (0, E.v2)(t, { skipRarity: r, skipDescription: !1 }),
                }),
            }),
            null != _ && (0, n.jsx)("img", { src: _, alt: "", draggable: !1, className: tR.Sl }),
            !r && null != u && (0, n.jsx)(tO, { rarity: u }),
        ],
    });
}
var ty = a(541170),
    tL = a(974862),
    tk = a(142389),
    tD = a(211235),
    tP = a(230532),
    tU = a(110601),
    tF = a(917970);
function tG(e) {
    let { customizationOption: t, traitOptions: a, selectedOption: i, onSelectOption: r, disabled: s = !1 } = e,
        c = p.useId(),
        d = !(0, E.Ux)(t),
        l = tj(
            "https://cdn.discordapp.com/assets/content/fc5527a1a369d8982c6e6fa588f732c7c5364ff00ddd0cf51646f05ad423af36.mp3",
        ),
        o = tj(tI);
    ((0, G.Ay)(() => {
        [tL, tF, tk, tD, tU, tP].forEach((e) => (0, tE.N)(e));
    }),
        p.useEffect(() => () => eq({ hoveredOption: void 0 }), [t]));
    let u = p.useCallback(
            (e, t) => {
                (eq({ hoveredOption: void 0 }), o(), r(e, t));
            },
            [r, o],
        ),
        h = p.useCallback(
            (e) => {
                (l(), eq({ hoveredOption: e.optionId !== i?.optionId ? e : void 0, isDelayed: !0 }));
            },
            [l, i],
        );
    return (0, n.jsx)("div", {
        onMouseLeave: () => eq({ hoveredOption: void 0 }),
        children: (0, n.jsx)("div", {
            role: "radiogroup",
            "aria-label": (0, E.cq)(t),
            className: ty.V,
            onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) || eq({ hoveredOption: void 0 });
            },
            children: a.map((e) =>
                (0, n.jsx)(
                    tM,
                    {
                        traitOption: e,
                        groupName: c,
                        isSelected: e.optionId === i?.optionId,
                        hideRarity: d,
                        onSelectOption: u,
                        onHoverOption: h,
                        disabled: s,
                    },
                    e.optionId,
                ),
            ),
        }),
    });
}
var tH = a(28863),
    tK = a(793574),
    tB = a(778705),
    tz = a(647093);
function tV(e) {
    let { rarity: t } = e,
        a = p.useMemo(() => ({ "--custom-checkpoint-rarity-background": B.Zy[t] }), [t]);
    return (0, n.jsx)(tf, { className: tz.q, style: a, children: tp.intl.string(B.iG[t]) });
}
var tW = a(829870);
function tq(e) {
    let { title: t, rarity: a, description: i } = e;
    return (0, n.jsxs)("div", {
        className: tW.z,
        children: [
            (0, n.jsxs)("div", {
                className: tW.D,
                children: [
                    (0, n.jsx)(tc.E, { tag: "div", variant: "heading-sm/semibold", color: "text-strong", children: t }),
                    null != a && (0, n.jsx)(tV, { rarity: a }),
                ],
            }),
            null != i && (0, n.jsx)(tc.E, { variant: "body-md/medium", color: "text-subtle", children: i }),
        ],
    });
}
function tY(e) {
    return e.status !== tC.eP.NITRO_LOCKED
        ? (0, E.Oq)(e)
        : tp.intl.format(tb.default.E6AfCb, {
              subscribeHook: (e, t) =>
                  (0, n.jsx)(
                      tH.Anchor,
                      {
                          onClick: () => (0, tB.A)({ analyticsLocations: [tK.A.CHECKPOINT, tK.A.CHECKPOINT_TRAIT] }),
                          children: e,
                      },
                      t,
                  ),
          });
}
function tX(e) {
    let { customizationOption: t, selectedOption: a } = e,
        i = eV((e) => e.hoveredOption) ?? a;
    return null == i
        ? null
        : (0, n.jsx)(tq, { title: i.getName(), rarity: (0, E.Ux)(t) ? i.rarity : void 0, description: tY(i) });
}
var tZ = a(509063);
function tQ(e) {
    let { children: t, details: a } = e;
    return (0, n.jsxs)("div", {
        className: tZ.Nz,
        children: [
            (0, n.jsx)("div", { className: tZ.fF, children: t }),
            null != a && (0, n.jsx)("div", { className: tZ.zH, children: a }),
        ],
    });
}
var tJ = a(51104);
function t$(e) {
    let { rarity: t, isSavedOption: a, visibleRarities: i, hasNitroSubscription: r } = e;
    return a
        ? tC.eP.UNLOCKED
        : null == t || i.has(t)
          ? t !== tS.K.NITRO || r
              ? tC.eP.UNLOCKED
              : tC.eP.NITRO_LOCKED
          : tC.eP.LOCKED;
}
function t0(e, t) {
    return e === E.v7.OUTFIT ? (null != t ? (0, U.FA)(t) : void 0) : t;
}
function t1(e) {
    let { customizationOption: t } = e,
        {
            optionIds: a,
            selectedOptionId: i,
            savedOptionId: r,
            onSelectOption: n,
        } = (function (e) {
            let { customizationOption: t, onSelectOption: a } = e,
                i = E.hw[t],
                { selectedOptionId: r, savedOptionId: n } = (0, x.cf)([h.A], () => ({
                    selectedOptionId: t0(t, h.A.selectedCharacterTraits[i]),
                    savedOptionId: t0(t, h.A.character?.[i]),
                })),
                s = p.useCallback(
                    (e, t) => {
                        if (t === r) return;
                        let i = (0, U.$C)(e, t),
                            s = t$({
                                rarity: i,
                                isSavedOption: n === t,
                                visibleRarities: (0, U.mf)(e, h.A.stats),
                                hasNitroSubscription: (0, P.ki)(D.default.getCurrentUser()),
                            });
                        ((0, b.dw)(e, t, s, i), a(e, t));
                    },
                    [a, n, r],
                );
            return {
                optionIds: (function (e, t) {
                    switch (e) {
                        case E.v7.OUTFIT:
                            return U.ps;
                        case E.v7.OUTFIT_COLOR:
                            return (0, U.wD)(t ?? el.r.NONE);
                        default:
                            return;
                    }
                })(t, r),
                selectedOptionId: r,
                savedOptionId: n,
                onSelectOption: s,
            };
        })({ customizationOption: t, onSelectOption: u.IB }),
        {
            traitOptions: s,
            availableTraitOptions: c,
            totalCount: d,
            earnedCount: l,
        } = (function (e) {
            let { customizationOption: t, savedOptionId: a, rarityOrder: i, optionIds: r } = e,
                n = (0, x.bG)([h.A], () => h.A.stats),
                s = (0, x.bG)([D.default], () => (0, P.ki)(D.default.getCurrentUser())),
                c = p.useMemo(() => (0, E.p8)(i), [i]);
            return p.useMemo(() => {
                let e = E.hw[t],
                    i = t === E.v7.OUTFIT_COLOR ? tJ.x : tJ.$[e],
                    d = (0, U.mf)(e, n),
                    l = [],
                    o = 0,
                    u = 0;
                for (let t of r ?? U.Rk[e]) {
                    let r = (0, U.$C)(e, t),
                        n = t$({ rarity: r, isSavedOption: a === t, visibleRarities: d, hasNitroSubscription: s }),
                        c = n === tC.eP.UNLOCKED && (r !== tS.K.NITRO || s);
                    (null != r && o++,
                        null != r && c && u++,
                        l.push({
                            trait: e,
                            optionId: t,
                            asset: U.qM[e][t]?.thumbnail,
                            rarity: r,
                            status: n,
                            getName: () => {
                                let e = i[t];
                                return null != e ? tp.intl.string(e) : "";
                            },
                        }));
                }
                l.sort(c);
                let h = l.filter((e) => {
                    let { status: t } = e;
                    return t !== tC.eP.LOCKED;
                });
                return { traitOptions: l, availableTraitOptions: h, totalCount: o, earnedCount: u };
            }, [t, s, r, c, a, n]);
        })({ customizationOption: t, savedOptionId: r, rarityOrder: B.FG, optionIds: a }),
        o = p.useMemo(
            () =>
                c.find((e) => {
                    let { optionId: t } = e;
                    return t === i;
                }) ?? c[0],
            [i, c],
        );
    return (
        !(function (e) {
            let { availableTraitOptions: t, selectedOptionId: a, onSelectOption: i, isPaused: r = !1 } = e,
                n = t[0],
                s = t.some((e) => e.optionId === a);
            p.useEffect(() => {
                r || null == n || s || i(n.trait, n.optionId);
            }, [n, s, i, r]);
        })({ availableTraitOptions: c, selectedOptionId: i, onSelectOption: u.IB }),
        { traitOptions: s, selectedOption: o, totalCount: d, earnedCount: l, onSelectOption: n }
    );
}
function t2(e) {
    let { customizationOption: t } = e,
        {
            traitOptions: a,
            selectedOption: i,
            totalCount: r,
            earnedCount: s,
            onSelectOption: c,
        } = t1({ customizationOption: t });
    return (0, n.jsxs)(tQ, {
        details: (0, n.jsx)(tX, { customizationOption: t, selectedOption: i }),
        children: [
            (0, n.jsx)(tw, { customizationOption: t, earnedCount: s, totalCount: r }),
            (0, n.jsx)(tG, { customizationOption: t, traitOptions: a, selectedOption: i, onSelectOption: c }),
        ],
    });
}
var t3 = a(71678);
function t8(e) {
    let { children: t, className: a } = e;
    return (0, n.jsx)("div", { className: m()(t3.n, a), children: t });
}
function t7() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.emojis);
    return (0, n.jsxs)(t8, {
        children: [
            (0, n.jsx)(tg, {
                icon: tn.EmojiSlightlySmilingFaceIcon,
                value: Math.round(e?.numEmojisSent ?? 0),
                topPercent: (0, K.bD)(e?.numEmojisSentPercentile),
                children: tp.intl.string(tb.default.ZTDCIv),
            }),
            (0, n.jsx)(t2, { customizationOption: E.v7.SHOES }),
        ],
    });
}
var t5 = a(937383);
function t6(e) {
    var t;
    let a,
        i,
        { selectedOption: r } = e,
        s = eV((e) => e.hoveredOption) ?? r;
    return null == s
        ? null
        : (0, n.jsx)(tq, {
              title: (0, n.jsxs)(n.Fragment, {
                  children: [
                      s.getName(),
                      " ",
                      (0, n.jsxs)(tc.E, {
                          tag: "span",
                          variant: "heading-sm/semibold",
                          color: "text-subtle",
                          children: [
                              "/ ",
                              ((t = s.optionId),
                              null != (i = null != (a = (0, U.FA)(t)) ? tJ.$[k.V.OUTFIT][a] : void 0)
                                  ? tp.intl.string(i)
                                  : ""),
                          ],
                      }),
                  ],
              }),
              description: tY(s),
          });
}
function t9(e) {
    let { disabled: t } = e,
        { traitOptions: a, selectedOption: i, onSelectOption: r } = t1({ customizationOption: E.v7.OUTFIT_COLOR });
    return (0, n.jsx)(tQ, {
        details: (0, n.jsx)(t6, { selectedOption: i }),
        children: (0, n.jsx)(tG, {
            customizationOption: E.v7.OUTFIT_COLOR,
            traitOptions: a,
            selectedOption: i,
            onSelectOption: r,
            disabled: t,
        }),
    });
}
function t4() {
    return (0, n.jsx)(tQ, {
        children: (0, n.jsx)(tq, {
            title: tp.intl.string(tb.default.zsYYN1),
            description: tp.intl.string(tb.default.BkuqWx),
        }),
    });
}
function ae(e) {
    let { lastColorwayIdByOutfitId: t, disabled: a } = e,
        { traitOptions: i, selectedOption: r, onSelectOption: s } = t1({ customizationOption: E.v7.OUTFIT }),
        c = p.useMemo(() => {
            let e = [];
            return (
                i.forEach((a) => {
                    let i = t.get(a.optionId);
                    e.push({
                        trait: a.trait,
                        optionId: a.optionId,
                        asset: U.qM[k.V.OUTFIT][i ?? a.optionId]?.thumbnail,
                        rarity: a.rarity,
                        status: a.status,
                        getName: a.getName,
                    });
                }),
                e
            );
        }, [t, i]);
    return (0, n.jsx)(tQ, {
        details: (0, n.jsx)(tX, { customizationOption: E.v7.OUTFIT, selectedOption: r }),
        children: (0, n.jsx)(tG, {
            customizationOption: E.v7.OUTFIT,
            traitOptions: c,
            selectedOption: r,
            onSelectOption: function (e, a) {
                s(e, t.get(a) ?? a);
            },
            disabled: a,
        }),
    });
}
function at(e) {
    let { customizationOption: t, disabled: a } = e,
        { traitOptions: i, selectedOption: r, onSelectOption: s } = t1({ customizationOption: t });
    return (0, n.jsx)(tQ, {
        details: (0, n.jsx)(tX, { customizationOption: t, selectedOption: r }),
        children: (0, n.jsx)(tG, {
            customizationOption: t,
            traitOptions: i,
            selectedOption: r,
            onSelectOption: s,
            disabled: a,
        }),
    });
}
function aa(e) {
    let { customizationOption: t, lastColorwayIdByOutfitId: a, disabled: i } = e;
    switch (t) {
        case E.v7.OUTFIT:
            return (0, n.jsx)(ae, { lastColorwayIdByOutfitId: a, disabled: i });
        case E.v7.OUTFIT_COLOR:
            return (0, n.jsx)(t9, { disabled: i });
        default:
            return (0, n.jsx)(at, { customizationOption: t, disabled: i });
    }
}
function ai(e) {
    let { id: t, customizationOption: a, disabled: i } = e,
        r = (function () {
            let e = (0, x.bG)([h.A], () => h.A.selectedCharacterTraits[k.V.OUTFIT]),
                [t, a] = p.useState(new Map()),
                i = null != e ? (0, U.FA)(e) : void 0;
            return (null != e && null != i && t.get(i) !== e && a(new Map(t).set(i, e)), t);
        })(),
        s = (0, x.bG)(
            [h.A],
            () => {
                if (a !== E.v7.OUTFIT_COLOR) return !1;
                let e = h.A.selectedCharacterTraits[k.V.OUTFIT];
                return null == e || (0, U.nb)(k.V.OUTFIT, e);
            },
            [a],
        );
    return (0, n.jsx)("div", {
        role: "tabpanel",
        id: t,
        "aria-label": (0, E.cq)(a),
        tabIndex: s ? 0 : void 0,
        className: t5.n,
        children: s
            ? (0, n.jsx)(t4, {})
            : (0, n.jsx)(aa, { customizationOption: a, lastColorwayIdByOutfitId: r, disabled: i }),
    });
}
var ar = a(265872),
    an = a(320448),
    as = a(315710),
    ac = a(444927);
let ad = { width: 180, height: 240 },
    al = { width: 220, height: 293 };
function ao(e, t) {
    let { width: a, height: i } = e;
    return {
        "--custom-checkpoint-game-art-width": t,
        "--custom-checkpoint-game-art-height": `calc(var(--custom-checkpoint-game-art-width) * ${i} / ${a})`,
    };
}
let au = ao(ad, "clamp(135px, 17.5vh, 180px)"),
    ah = ao(al, "clamp(165px, 21.5vh, 220px)"),
    af = {
        "--custom-checkpoint-primary": B.Kr,
        "--custom-checkpoint-dark-cyan": B.ow,
        "--custom-checkpoint-button-border": B.ow,
        "--custom-checkpoint-button-shadow": B.zj,
        "--custom-checkpoint-white": B.Ve,
        "--custom-checkpoint-guild-card-background": B.LM,
        "--custom-checkpoint-background-gradient-start": B.bI,
    };
var ab = a(580814);
function ap(e) {
    let {
            menuRef: t,
            options: a,
            activeCustomizationOption: i,
            returnRef: r,
            onSelectOption: s,
            onClose: c,
            focusMenu: d,
            onMouseEnter: l,
            onMouseLeave: o,
        } = e,
        u = p.useRef([]),
        h = (0, ac.A)(() => Math.max(a.indexOf(i), 0)),
        [f, b] = p.useState(null);
    function _(e) {
        let t = (e + a.length) % a.length;
        (b(t), u.current[t]?.focus());
    }
    return (
        (0, as.tj)(t, { disable: !d, disableReturn: !0 }),
        p.useEffect(() => {
            d && u.current[h]?.focus();
        }, [h, d]),
        (0, n.jsx)("div", {
            ref: t,
            role: "menu",
            tabIndex: -1,
            "aria-label": tp.intl.string(tb.default.Zl5vPW),
            className: ab.MK,
            style: af,
            onKeyDown: function (e) {
                if ("Escape" === e.key) return;
                e.stopPropagation();
                let t = u.current.indexOf(e.target);
                switch (e.key) {
                    case "ArrowDown":
                        (e.preventDefault(), _(t + 1));
                        break;
                    case "ArrowUp":
                        (e.preventDefault(), _(t - 1));
                        break;
                    case "Home":
                        (e.preventDefault(), _(0));
                        break;
                    case "End":
                        (e.preventDefault(), _(a.length - 1));
                        break;
                    case "Tab":
                        (c(), r.current?.focus());
                }
            },
            onMouseEnter: l,
            onMouseLeave: () => {
                (d || b(null), o?.());
            },
            children: a.map((e, t) =>
                (0, n.jsx)(
                    "button",
                    {
                        ref: (e) => {
                            u.current[t] = e;
                        },
                        type: "button",
                        role: "menuitemradio",
                        "aria-checked": e === i,
                        tabIndex: -1,
                        className: m()(ab.AS, { [ab.dT]: f === t }),
                        onFocus: () => b(t),
                        onMouseEnter: (e) => {
                            (b(t), d && e.currentTarget.focus());
                        },
                        onClick: () => s(e),
                        children: (0, n.jsx)(tc.E, {
                            tag: "span",
                            variant: "heading-sm/semibold",
                            color: "none",
                            children: (0, E.cq)(e),
                        }),
                    },
                    e,
                ),
            ),
        })
    );
}
var a_ = a(421773);
let am = [E.v7.AURA, E.v7.WEARABLE, E.v7.SHOES, E.v7.HAT, E.v7.FACE];
var ax = a(769909);
let ag = [E.v7.BASE, E.v7.OUTFIT_COLOR, E.v7.OUTFIT];
function aA(e) {
    var t;
    let a,
        {
            activeCustomizationOption: i,
            onSelectOption: r,
            tabIdPrefix: s,
            panelId: c,
            blockedTrait: d,
            disabled: l = !1,
        } = e,
        {
            moreTabRef: o,
            menuRef: u,
            isMoreOptionActive: h,
            moreTabOption: f,
            isMenuOpen: b,
            focusMenu: _,
            openMenu: x,
            closeMenu: g,
            handleRequestClose: v,
            selectMenuOption: w,
            onMouseEnter: I,
            onMouseLeave: j,
        } = (function (e) {
            let { activeCustomizationOption: t, onSelectOption: a, blockedTrait: i, disabled: r } = e,
                n = p.useRef(null),
                s = p.useRef(null),
                c = am.includes(t),
                [d, l] = p.useState(c ? t : null);
            c && d !== t && l(t);
            let o = r || null != i,
                [u, h] = p.useState(!1),
                {
                    isHovered: f,
                    setIsHovered: b,
                    onMouseEnter: _,
                    onMouseLeave: m,
                    cancelTimers: x,
                } = (0, a_.A)(100, 300);
            function g() {
                (x(), b(!1), h(!1));
            }
            return {
                moreTabRef: n,
                menuRef: s,
                isMoreOptionActive: c,
                moreTabOption: d,
                isMenuOpen: !o && f,
                focusMenu: u,
                openMenu: function () {
                    null != i ? V(i) : r || (x(), h(!0), b(!0));
                },
                closeMenu: g,
                handleRequestClose: function (e, t) {
                    if ("user:escape" !== t) return void g();
                    let a = u || s.current?.contains(s.current.ownerDocument.activeElement);
                    (g(), a && n.current?.focus());
                },
                selectMenuOption: function (e) {
                    (a(e), g(), n.current?.focus());
                },
                onMouseEnter: o ? void 0 : _,
                onMouseLeave: u ? void 0 : m,
            };
        })({ activeCustomizationOption: i, onSelectOption: r, blockedTrait: d, disabled: l }),
        S = h ? "more" : i,
        { tabListRef: N, focusAdjacentTab: T } =
            ((t = [...ag, "more"]),
            {
                tabListRef: (a = p.useRef(null)),
                focusAdjacentTab: function (e, i) {
                    let r = (function (e, t, a) {
                        switch (a) {
                            case "Home":
                                return 0;
                            case "End":
                                return t - 1;
                            case "ArrowRight":
                                return (e + 1) % t;
                            default:
                                return (e - 1 + t) % t;
                        }
                    })(t.indexOf(e), t.length, i);
                    return (a.current?.querySelectorAll('[role="tab"]')[r]?.focus(), t[r]);
                },
            }),
        C = p.useId(),
        R = null != d ? C : void 0,
        O = null != f ? (0, E.cq)(f) : null;
    function M(e) {
        null != d ? V(d) : l || (r(e), g());
    }
    function y(e) {
        "more" !== e ? M(e) : null != f && M(f);
    }
    function L(e) {
        "more" === e && (h || null == f) ? x() : y(e);
    }
    function k(e) {
        let t = e === S;
        return {
            id: `${s}-${e}`,
            type: "button",
            role: "tab",
            "aria-selected": t,
            "aria-controls": t ? c : void 0,
            "aria-disabled": null != d,
            "aria-describedby": R,
            disabled: l,
            tabIndex: t ? 0 : -1,
            onClick: () => L(e),
            onKeyDown: (t) =>
                (function (e, t) {
                    switch (e.key) {
                        case "Enter":
                            (e.preventDefault(), e.stopPropagation(), L(t));
                            break;
                        case " ":
                            (e.preventDefault(), e.stopPropagation());
                            break;
                        case "ArrowDown":
                            if ("more" !== t) break;
                            (e.preventDefault(), e.stopPropagation(), x());
                            break;
                        case "Tab":
                            g();
                            break;
                        case "ArrowLeft":
                        case "ArrowRight":
                        case "Home":
                        case "End":
                            (e.preventDefault(), e.stopPropagation(), g(), y(T(t, e.key)));
                    }
                })(t, e),
            onKeyUp: (t) => {
                " " === t.key && (t.preventDefault(), t.stopPropagation(), L(e));
            },
            className: m()(ax.Mf, { [ax.OS]: "more" === e, [ax.vu]: t }),
        };
    }
    return (0, n.jsxs)("div", {
        ref: N,
        role: "tablist",
        "aria-label": tp.intl.string(tb.default.Zl5vPW),
        className: ax.vR,
        children: [
            ag.map((e) => {
                let t = (0, E.cq)(e);
                return (0, n.jsx)(
                    "button",
                    {
                        ...k(e),
                        "aria-label": t,
                        children: (0, n.jsx)(tc.E, {
                            tag: "span",
                            variant: "heading-sm/semibold",
                            color: "none",
                            children: t,
                        }),
                    },
                    e,
                );
            }),
            (0, n.jsx)(ar.Y, {
                targetElementRef: o,
                shouldShow: b,
                onRequestOpen: x,
                onRequestClose: v,
                position: "right",
                align: "top",
                spacing: 8,
                renderPopout: () =>
                    (0, n.jsx)(ap, {
                        menuRef: u,
                        options: am,
                        activeCustomizationOption: i,
                        returnRef: o,
                        focusMenu: _,
                        onMouseEnter: I,
                        onMouseLeave: j,
                        onSelectOption: w,
                        onClose: g,
                    }),
                children: (e) =>
                    (0, n.jsxs)("button", {
                        ...e,
                        ...k("more"),
                        ref: o,
                        "aria-label":
                            null != O
                                ? tp.intl.formatToPlainString(tb.default.QX1VPx, { category: O })
                                : tp.intl.string(tb.default.jepsQ6),
                        "aria-haspopup": "menu",
                        "aria-expanded": b,
                        onMouseEnter: I,
                        onMouseLeave: j,
                        children: [
                            (0, n.jsx)(tc.E, {
                                tag: "span",
                                variant: "heading-sm/semibold",
                                color: "none",
                                children: O ?? tp.intl.string(tb.default["iXpQc+"]),
                            }),
                            (0, n.jsx)(an.ChevronSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
                        ],
                    }),
            }),
            null != d && (0, n.jsx)(A.A, { id: C, children: (0, E.Cz)(d) }),
        ],
    });
}
var av = a(195464);
function aw() {
    let e = p.useId(),
        t = p.useId(),
        [a, i] = p.useState(E.v7.BASE),
        r = F().find((e) => e === E.hw[a]),
        s = (0, x.bG)([h.A], () => h.A.isSaving),
        c = ts();
    return (0, n.jsxs)(t8, {
        className: av.nj,
        children: [
            (0, n.jsx)(td.D, {
                ref: c,
                variant: "heading-xl/medium",
                color: "none",
                className: av.DD,
                children: tp.intl.string(tb.default["q2nj/Z"]),
            }),
            (0, n.jsxs)("div", {
                className: av.ho,
                children: [
                    (0, n.jsx)(aA, {
                        tabIdPrefix: e,
                        panelId: t,
                        activeCustomizationOption: a,
                        onSelectOption: i,
                        blockedTrait: r,
                        disabled: s,
                    }),
                    (0, n.jsx)(ai, { id: t, customizationOption: a, disabled: s }),
                ],
            }),
        ],
    });
}
var aI = a(81466);
function aE() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.games);
    return (0, n.jsxs)(t8, {
        children: [
            (0, n.jsx)(tg, {
                icon: aI.CalendarIcon,
                value: Math.round(e?.totalDaysPlayed ?? 0),
                topPercent: (0, K.bD)(e?.totalDaysPlayedPercentile),
                children: tp.intl.string(tb.default["4N5p4D"]),
            }),
            (0, n.jsx)(t2, { customizationOption: E.v7.AURA }),
        ],
    });
}
var aj = a(687966);
function aS() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.games);
    return (0, n.jsxs)(t8, {
        children: [
            (0, n.jsx)(tg, {
                icon: aj.GameControllerIcon,
                value: Math.round(e?.totalGamesPlayed ?? 0),
                topPercent: (0, K.bD)(e?.totalGamesPlayedPercentile),
                children: tp.intl.string(tb.default.HM2fjf),
            }),
            (0, n.jsx)(t2, { customizationOption: E.v7.WEARABLE }),
        ],
    });
}
var aN = a(534890),
    aT = a(350363);
function aC() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.messages);
    return (0, n.jsxs)(t8, {
        children: [
            (0, n.jsx)(tg, {
                icon: aN.ChatIcon,
                value: Math.round(e?.numMessagesSent ?? 0),
                topPercent: (0, K.bD)(e?.numMessagesSentPercentile),
                children: tp.intl.string(aT.default.wWKySP),
            }),
            (0, n.jsx)(t2, { customizationOption: E.v7.OUTFIT }),
        ],
    });
}
var aR = a(664121);
function aO() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.guilds?.guilds[0]);
    return (0, n.jsxs)(t8, {
        children: [
            (0, n.jsx)(tg, {
                icon: aR.ServerIcon,
                value: Math.round(e?.numDaysInteracted ?? 0),
                topPercent: (0, K.bD)(e?.numDaysInteractedPercentile),
                children: tp.intl.string(tb.default["M+a+t1"]),
            }),
            (0, n.jsx)(t2, { customizationOption: E.v7.HAT }),
        ],
    });
}
var aM = a(831544);
function ay() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.voice),
        t = Math.round(e?.totalVoiceMinutes ?? 0);
    return (0, n.jsxs)(t8, {
        children: [
            (0, n.jsx)(tg, {
                icon: aM.MicrophoneIcon,
                value: t,
                topPercent: (0, K.bD)(e?.totalVoiceMinutesPercentile),
                children: tp.intl.string(tb.default["3/T12E"]),
            }),
            (0, n.jsx)(t2, { customizationOption: E.v7.FACE }),
        ],
    });
}
function aL(e) {
    let { route: t } = e;
    switch (t) {
        case S.gr.VOICE_FACE:
            return (0, n.jsx)(ay, {});
        case S.gr.MESSAGES_OUTFIT:
            return (0, n.jsx)(aC, {});
        case S.gr.SERVERS_HEADWEAR:
            return (0, n.jsx)(aO, {});
        case S.gr.EMOJI_SHOES:
            return (0, n.jsx)(t7, {});
        case S.gr.GAMES_WEARABLE:
            return (0, n.jsx)(aS, {});
        case S.gr.GAME_TIME_AURA:
            return (0, n.jsx)(aE, {});
        case S.gr.FINALIZE_CHARACTER:
            return (0, n.jsx)(aw, {});
        default:
            return null;
    }
}
var ak = a(358618),
    aD = a(983851),
    aP = a(793920),
    aU = a(893007),
    aF = a(738964);
function aG(e) {
    return `${Math.round(e)}%`;
}
function aH() {
    let { volume: e, isMuted: t } = (0, x.cf)([h.A], () => ({ volume: h.A.volume, isMuted: h.A.isMuted })),
        a = p.useRef(null),
        i = p.useRef(null),
        [r, s] = p.useState(!1),
        [c, d] = p.useState(!1),
        [l, o] = p.useState(!1),
        [f, b] = p.useState(!1),
        _ = p.useRef(null),
        m = p.useRef(!1),
        g = t ? 0 : Math.round(100 * e),
        A = !f && (r || c || l),
        v = 0 === g ? ak.VoiceXIcon : g > 50 ? aD.VoiceNormalIcon : aP.VoiceLowIcon;
    (p.useLayoutEffect(() => {
        null != i.current && (i.current.volume = e);
    }, [e]),
        (0, G.l0)(() => {
            null != _.current && clearTimeout(_.current);
        }));
    let w = p.useCallback((e) => {
            ((0, u.ls)(e / 100),
                o(!0),
                null != _.current && clearTimeout(_.current),
                (_.current = setTimeout(() => o(!1), 1e3)));
        }, []),
        I = p.useCallback(() => {
            (s(!0), b(!1));
        }, []),
        E = p.useCallback(() => s(!1), []),
        j = p.useCallback((e) => {
            d(!m.current && e.target.matches(":focus-visible"));
        }, []),
        S = p.useCallback(() => {
            ((m.current = !0), d(!1));
        }, []),
        N = p.useCallback(() => {
            ((m.current = !1), d(!0));
        }, []),
        T = p.useCallback(() => {
            s(a.current?.matches(":hover") ?? !1);
        }, []),
        C = p.useCallback((e) => {
            e.currentTarget.contains(e.relatedTarget) || ((m.current = !1), d(!1), b(!1));
        }, []),
        R = p.useCallback(
            (e) => {
                "Escape" === e.key &&
                    A &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    null != _.current && clearTimeout(_.current),
                    o(!1),
                    b(!0),
                    a.current?.querySelector("button")?.focus());
            },
            [A],
        );
    return (0, n.jsxs)("div", {
        ref: a,
        className: aF.kL,
        onMouseEnter: I,
        onMouseLeave: E,
        onFocus: j,
        onPointerDownCapture: S,
        onBlur: C,
        onKeyDownCapture: N,
        onKeyDown: R,
        children: [
            (0, n.jsx)(J, {
                size: "sm",
                className: A ? aF.Gg : void 0,
                "aria-label": tp.intl.string(t ? aT.default.GN0uv6 : aT.default.pjF33X),
                onClick: u.K8,
                children: (0, n.jsx)(v, { size: "xs", color: "currentColor" }),
            }),
            A
                ? (0, n.jsx)("div", {
                      className: aF.xJ,
                      children: (0, n.jsx)(aU.A, {
                          value: g,
                          minValue: 0,
                          maxValue: 100,
                          onChange: w,
                          onChangeEnd: T,
                          formatValue: aG,
                          "aria-label": tp.intl.string(tp.t.xPHVBs),
                      }),
                  })
                : null,
            (0, n.jsx)("audio", {
                ref: i,
                autoPlay: !0,
                loop: !0,
                muted: t,
                children: (0, n.jsx)("source", {
                    src: "https://cdn.discordapp.com/assets/content/d271231f4934992caed169c11586a1da060d37b5fd8804b56666b547f03836bd.mp3",
                }),
            }),
        ],
    });
}
let aK =
        "https://cdn.discordapp.com/assets/content/914f6f5e36c680d00944ba2e6278b45f8b1da722692e101b5986cf7be56c4979.mp3",
    aB =
        "https://cdn.discordapp.com/assets/content/d1dfc8280cfbd578f18728598db893d807d9ece6b511389848b7308c399f07a0.mp3";
var az = a(477155),
    aV = a(866665),
    aW = a(417270),
    aq = a(935286),
    aY = a(405433),
    aX = a(289873),
    aZ = a(621466);
function aQ(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    p.useEffect(() => {
        if (!a) return (window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i));
        function i(a) {
            (0, aZ.vq)(a.target, HTMLTextAreaElement) ||
                (0, aZ.vq)(a.target, HTMLInputElement) ||
                (a.key === e && t(a));
        }
    }, [e, t, a]);
}
var aJ = a(652215),
    a$ = a(650583);
function a0(e) {
    let { source: t, onClick: a, disabled: i = !1 } = e,
        r = tj(t),
        n = p.useRef(!1);
    function s() {
        i || r();
    }
    return {
        playSound: s,
        onPointerDown: function (e) {
            e.button === aJ.hE4.PRIMARY && ((n.current = !0), s());
        },
        onKeyDown: function (e) {
            (e.key === a$.dh.ENTER || e.key === a$.dh.SPACE) && ((n.current = !0), e.repeat || s());
        },
        onClickWithSound: function () {
            (n.current || s(), (n.current = !1), a());
        },
    };
}
var a1 = a(753875);
function a2(e) {
    let { "aria-label": t, "aria-describedby": a, icon: i, onClick: r, disabled: s = !1 } = e,
        {
            playSound: c,
            onPointerDown: d,
            onKeyDown: l,
            onClickWithSound: o,
        } = a0({ source: aK, onClick: r, disabled: s });
    return (
        aQ(
            "ArrowLeft",
            function (e) {
                (e.repeat || c(), r());
            },
            s,
        ),
        (0, n.jsx)(J, {
            onPointerDown: d,
            onKeyDown: l,
            onClick: o,
            size: "md",
            className: m()(a1.A4, a1.aX),
            "aria-disabled": s,
            "aria-describedby": a,
            "aria-label": t,
            children: (0, n.jsx)(i, { color: "currentColor" }),
        })
    );
}
function a3(e) {
    let {
            "aria-label": t,
            "aria-describedby": a,
            children: i,
            onClick: r,
            size: s,
            className: c,
            disabled: d = !1,
        } = e,
        {
            playSound: l,
            onPointerDown: o,
            onKeyDown: u,
            onClickWithSound: h,
        } = a0({ source: aB, onClick: r, disabled: d });
    return (
        aQ(
            "ArrowRight",
            function (e) {
                (e.repeat || l(), r());
            },
            d,
        ),
        (0, n.jsx)($, {
            onPointerDown: o,
            onKeyDown: u,
            onClick: h,
            size: s,
            className: m()(a1.A4, a1.K2, c),
            "aria-disabled": d,
            "aria-describedby": a,
            "aria-label": t,
            children: i,
        })
    );
}
function a8(e) {
    let { "aria-describedby": t, onClick: a, disabled: i } = e;
    return (0, n.jsx)(a2, {
        "aria-label": tp.intl.string(tp.t["13/7kX"]),
        "aria-describedby": t,
        icon: az.ArrowSmallLeftIcon,
        onClick: a,
        disabled: i,
    });
}
function a7(e) {
    let { onClick: t } = e,
        { onPointerDown: a, onKeyDown: i, onClickWithSound: r } = a0({ source: aB, onClick: t });
    return (0, n.jsx)(aV.m, {
        text: tp.intl.string(tb.default.cWdGf9),
        ariaHidden: !0,
        children: (0, n.jsx)(J, {
            onPointerDown: a,
            onKeyDown: i,
            onClick: r,
            size: "md",
            className: m()(a1.A4, a1.eZ),
            "aria-label": tp.intl.string(tb.default.cWdGf9),
            children: (0, n.jsx)(aW.RetryIcon, { color: "currentColor" }),
        }),
    });
}
function a5(e) {
    let { "aria-describedby": t, onClick: a, disabled: i } = e;
    return (0, n.jsx)(a3, {
        size: "md",
        "aria-label": tp.intl.string(tp.t.PDTjLN),
        "aria-describedby": t,
        onClick: a,
        disabled: i,
        children: (0, n.jsx)(aq.ArrowSmallRightIcon, { color: "currentColor" }),
    });
}
function a6(e) {
    let { onClick: t, disabled: a } = e;
    return (0, n.jsxs)(a3, {
        size: "custom",
        className: a1.GA,
        "aria-label": tp.intl.string(tp.t.i4jeWR),
        onClick: t,
        disabled: a,
        children: [
            (0, n.jsx)(to, { variant: "mono-md/normal", className: a1.Pf, children: tp.intl.string(tp.t.i4jeWR) }),
            (0, n.jsx)(aq.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function a9(e) {
    let { onClick: t, disabled: a } = e;
    return (0, n.jsxs)(a3, {
        size: "custom",
        className: m()(a1.GA, a1.Bq),
        "aria-label": tp.intl.string(tp.t.RDE0Sc),
        onClick: t,
        disabled: a,
        children: [
            (0, n.jsx)(tc.E, {
                variant: "mono-md/bold",
                color: "none",
                className: a1.Pf,
                children: tp.intl.string(tp.t.RDE0Sc),
            }),
            (0, n.jsx)(aY.ShareIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function a4(e) {
    let { onBack: t, isRouteBlocked: a, blockedTraitDescriptionId: i } = e,
        r = (0, x.bG)([h.A], () => h.A.isSaving);
    return (0, n.jsx)(a8, {
        "aria-describedby": i,
        onClick: function () {
            r || t();
        },
        disabled: r || a,
    });
}
function ie(e) {
    let { onNext: t, navigate: a, isRouteBlocked: i, blockedTraitDescriptionId: r } = e,
        c = (0, x.bG)([h.A], () => h.A.isSaving),
        d = c || i;
    async function l() {
        if (c) return;
        let e = (0, U.XI)(h.A.selectedCharacterTraits);
        (await (0, u.yE)(e)) ? t() : (0, s.P0)({ text: tp.intl.string(tp.t.fEptJP), variant: "critical" });
    }
    function o() {
        a(l);
    }
    let {
        playSound: f,
        onPointerDown: b,
        onKeyDown: p,
        onClickWithSound: _,
    } = a0({
        source: "https://cdn.discordapp.com/assets/content/1514d999969512ff06ade75018213676ebaf3698af26c0b1b7d3243ec480f920.mp3",
        onClick: o,
        disabled: d,
    });
    return (
        aQ(
            "ArrowRight",
            function (e) {
                (e.repeat || f(), o());
            },
            d,
        ),
        (0, n.jsxs)($, {
            onPointerDown: b,
            onKeyDown: p,
            onClick: _,
            size: "custom",
            className: m()(a1.A4, a1.K2, a1.GA),
            "aria-disabled": d,
            "aria-describedby": r,
            "aria-label": tp.intl.string(tp.t["R3BPH+"]),
            children: [
                (0, n.jsx)(tc.E, {
                    variant: "mono-md/normal",
                    color: "none",
                    className: a1.Pf,
                    children: tp.intl.string(tp.t["R3BPH+"]),
                }),
                c
                    ? (0, n.jsx)(aX.y, { type: aX.t.SPINNING_CIRCLE_SIMPLE, className: a1.u1, itemClassName: a1.$N })
                    : (0, n.jsx)(aq.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
            ],
        })
    );
}
function it(e) {
    let { activeRoute: t, blockedTrait: a, blockedTraitDescriptionId: i, onBack: r, onNext: s, onReplay: c } = e,
        d = null != a,
        l = p.useMemo(() => (0, ez.throttle)((e) => e(), 500, { trailing: !1 }), []);
    function o(e) {
        null != a ? V(a) : l(e);
    }
    switch (t) {
        case S.gr.HOME:
            return null;
        case S.gr.FINALIZE_CHARACTER:
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(a4, { onBack: () => o(r), isRouteBlocked: d, blockedTraitDescriptionId: i }),
                    (0, n.jsx)(ie, { onNext: s, navigate: o, isRouteBlocked: d, blockedTraitDescriptionId: i }),
                ],
            });
        case S.gr.SUMMARY:
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(a8, { onClick: () => l(r) }),
                    (0, n.jsx)(a7, { onClick: () => l(c) }),
                    (0, n.jsx)(a9, { onClick: () => l(s) }),
                ],
            });
        case S.gr.SHARE:
            return (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(a8, { onClick: () => l(r) }), (0, n.jsx)(a6, { onClick: () => l(s) })],
            });
        default:
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(a8, { "aria-describedby": i, onClick: () => o(r), disabled: d }),
                    (0, n.jsx)(a5, { "aria-describedby": i, onClick: () => o(s), disabled: d }),
                ],
            });
    }
}
function ia(e) {
    let { className: t } = e;
    return (0, n.jsx)(e4, {
        animatedSrc:
            "https://cdn.discordapp.com/assets/content/02e9ae4cdbec0b2adef22c9a5659f5c7340e399cc8932e8af6d41e62a37644ae.png",
        staticSrc:
            "https://cdn.discordapp.com/assets/content/f08be0abd0d224b5f7e1e5d6c1ef8e4d24cddcb712e2c624dcc6ea3d136818d5.png",
        className: t,
    });
}
var ii = a(771639);
let ir = { "--custom-checkpoint-screen-vertical-inset": "88px" };
function is(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: ii.n, style: ir, children: t });
}
var ic = a(639331);
let id = {
    "--custom-checkpoint-intro-fade-in-delay": "1800ms",
    "--custom-checkpoint-intro-fade-in-duration": "1000ms",
};
function il() {
    let e = (0, x.bG)([h.A], () => h.A.fetchState !== h.T.SUCCESS || null != h.A.stats),
        t = ts();
    return (0, n.jsx)(is, {
        children: (0, n.jsxs)("div", {
            className: ic.Qs,
            style: id,
            children: [
                (0, n.jsxs)("div", {
                    ref: t,
                    className: ic.Ok,
                    role: "heading",
                    "aria-level": 2,
                    children: ["2026", !e && (0, n.jsx)(ia, { className: ic.gi })],
                }),
                (0, n.jsxs)("div", {
                    className: ic.eH,
                    children: [
                        (0, n.jsx)(to, {
                            tag: "p",
                            variant: "heading-xl/medium",
                            children: tp.intl.string(e ? tb.default["7YmUVu"] : tb.default["Fyr+NW"]),
                        }),
                        !e &&
                            (0, n.jsx)(to, {
                                tag: "p",
                                variant: "heading-xl/medium",
                                children: tp.intl.string(tb.default["2GRr6H"]),
                            }),
                    ],
                }),
            ],
        }),
    });
}
(a(134528), a(947204));
var io = a(675970),
    iu = a(559106),
    ih = a(366056),
    ib = a(292801),
    ip = a(155718),
    i_ = a(294454),
    im = a(489414),
    ix = a(878358),
    ig = a(383233),
    iA = a(819648),
    iv = a(677059);
function iw(e) {
    let { children: t } = e;
    return (0, n.jsx)(to, { variant: "heading-xxl/medium", className: iv.h, children: t });
}
function iI(e) {
    let { accessibilityLabel: t, className: a, children: i, ref: r } = e;
    return (0, n.jsxs)("div", {
        ref: r,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, n.jsx)("div", { className: a, "aria-hidden": !0, children: i }),
            (0, n.jsx)(A.A, { children: t }),
        ],
    });
}
var iE = a(100391);
function ij(e) {
    let { icon: t, children: a } = e;
    return (0, n.jsxs)("div", {
        className: iE.D,
        children: [
            (0, n.jsx)(t, { size: "md", color: "currentColor" }),
            (0, n.jsx)(to, { variant: "heading-lg/semibold", className: iE.Q, children: a }),
        ],
    });
}
function iS(e) {
    let { icon: t, children: a } = e;
    return (0, n.jsxs)("div", {
        className: iE.D,
        children: [
            (0, n.jsx)(t, { size: "md", color: "currentColor" }),
            (0, n.jsx)(tu, { variant: "heading-lg/semibold", className: iE.Q, children: a }),
        ],
    });
}
var iN = a(456410);
function iT(e) {
    let { name: t, label: a, checked: i, onSelect: r, children: s } = e;
    return (0, n.jsx)(iu.vN, {
        within: !0,
        children: (0, n.jsxs)("label", {
            className: m()(iN.uK, { [iN.KD]: i }),
            children: [
                (0, n.jsx)(A.A, {
                    children: (0, n.jsx)("input", { type: "radio", name: t, checked: i, onChange: r, "aria-label": a }),
                }),
                i ? (0, n.jsx)("div", { className: iN.Gt, "aria-hidden": !0 }) : null,
                (0, n.jsx)("div", { className: iN.Nr, "aria-hidden": !0, children: s }),
            ],
        }),
    });
}
function iC() {
    let e = (0, x.bG)([h.A], () => h.A.character),
        t = (0, x.bG)([h.A], () => h.A.stats),
        a = p.useId(),
        i = ts(),
        r = p.useMemo(() => {
            var a, i;
            return ((a = e),
            (i = t),
            null != a && null != i
                ? [io.Q.CHARACTER_ONLY, io.Q.DEFAULT, io.Q.STATS_ONLY]
                : null != a
                  ? [io.Q.CHARACTER_ONLY]
                  : null != i
                    ? [io.Q.STATS_ONLY]
                    : []).map((a) => ({ cardType: a, checkpointData: (0, iA.Go)(a, e, t) }));
        }, [e, t]),
        [c, d] = p.useState(
            () =>
                (
                    r.find((e) => {
                        let { cardType: t } = e;
                        return t === io.Q.DEFAULT;
                    }) ?? r.at(0)
                )?.cardType,
        ),
        l = r.find((e) => {
            let { cardType: t } = e;
            return t === c;
        }),
        o = tj(tI),
        {
            onPointerDown: f,
            onKeyDown: _,
            onClickWithSound: m,
        } = a0({
            source: aB,
            onClick: function () {
                if (null == l) return;
                let { cardType: e, checkpointData: t } = l;
                (0, i_.fO)({
                    message: new ig.Ay({
                        content: "",
                        components: [{ type: ip.I5.CHECKPOINT_CARD, id: (0, im.X1)("0"), checkpointData: t }],
                    }),
                    source: "checkpoint",
                    customSendHandler: async (t, a, i) => {
                        let { withMessage: r } = a;
                        i(!0);
                        try {
                            (await (0, u.jA)(t, r ?? "", e),
                                (0, b.Pe)(e),
                                (0, i_.Be)(),
                                (0, s.P0)({ text: tp.intl.string(tp.t.kwmYkt), variant: "success" }));
                        } catch {
                            (0, s.P0)({ text: tp.intl.string(tp.t.iufib1), variant: "critical" });
                        } finally {
                            i(!1);
                        }
                    },
                });
            },
        });
    return null == l
        ? null
        : (0, n.jsx)(is, {
              children: (0, n.jsxs)("div", {
                  className: iN.uM,
                  children: [
                      (0, n.jsxs)("div", {
                          className: iN.wx,
                          children: [
                              (0, n.jsxs)(iI, {
                                  ref: i,
                                  className: iN.R_,
                                  accessibilityLabel: tp.intl.string(tb.default.P5zyko),
                                  children: [
                                      (0, n.jsx)(ij, {
                                          icon: ih.ExperimentalCheckpointIcon,
                                          children: tp.intl.string(aT.default.ir6nEQ),
                                      }),
                                      (0, n.jsx)(to, {
                                          variant: "display-lg",
                                          className: iN.Vy,
                                          children: tp.intl.string(tp.t.RDE0Sc),
                                      }),
                                  ],
                              }),
                              (0, n.jsx)("div", {
                                  className: iN.h_,
                                  children: (0, n.jsx)(iw, { children: tp.intl.string(tb.default.KXDPot) }),
                              }),
                          ],
                      }),
                      (0, n.jsx)("div", {
                          role: "radiogroup",
                          "aria-label": tp.intl.string(tb.default.KXDPot),
                          className: iN.kR,
                          children: r.map((e) => {
                              let { cardType: t, checkpointData: i } = e;
                              return (0, n.jsx)(
                                  iT,
                                  {
                                      name: a,
                                      label: (function (e) {
                                          switch (e) {
                                              case io.Q.CHARACTER_ONLY:
                                                  return tp.intl.string(tb.default.tUU3fe);
                                              case io.Q.DEFAULT:
                                                  return tp.intl.string(tb.default.DZQzJn);
                                              case io.Q.STATS_ONLY:
                                                  return tp.intl.string(tb.default.e2UHGT);
                                          }
                                      })(t),
                                      checked: t === l.cardType,
                                      onSelect: () => {
                                          (o(), d(t));
                                      },
                                      children: (0, n.jsx)(ix.A, { checkpointData: i }),
                                  },
                                  t,
                              );
                          }),
                      }),
                      (0, n.jsxs)($, {
                          onPointerDown: f,
                          onKeyDown: _,
                          onClick: m,
                          size: "custom",
                          className: iN.sY,
                          "aria-label": tp.intl.string(tp.t.I3ltXO),
                          children: [
                              (0, n.jsx)(tc.E, {
                                  variant: "mono-md/bold",
                                  color: "none",
                                  className: iN.RC,
                                  children: tp.intl.string(tp.t.I3ltXO),
                              }),
                              (0, n.jsx)(ib.ArrowAngleRightUpIcon, { size: "refresh_sm", color: "currentColor" }),
                          ],
                      }),
                  ],
              }),
          });
}
var iR = a(206701),
    iO = a(782134),
    iM = a(998304),
    iy = a(975571),
    iL = a(427262),
    ik = a(438389);
let iD = (0, iM.j5)(B.Kr);
function iP(e) {
    let { onStart: t } = e,
        a = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        i = (0, iL.tx)(a),
        r = (0, x.bG)([q.Ay], () => q.Ay.useReducedMotion),
        { playSound: s, onPointerDown: c, onKeyDown: d, onClickWithSound: l } = a0({ source: aB, onClick: t });
    return (
        aQ("ArrowRight", function (e) {
            (e.repeat || s(), t());
        }),
        (0, n.jsxs)(is, {
            children: [
                (0, n.jsxs)("div", {
                    className: ik.Qs,
                    children: [
                        (0, n.jsxs)("div", {
                            className: ik.wx,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: ik.Qq,
                                    children: [
                                        (0, n.jsx)(tu, {
                                            variant: "display-lg",
                                            className: ik.DD,
                                            children: tp.intl.string(aT.default["CdU/PF"]),
                                        }),
                                        (0, n.jsx)(to, {
                                            variant: "heading-xxl/medium",
                                            children: tp.intl.formatToPlainString(tb.default.xhZ23b, { username: i }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", {
                                    className: ik.CB,
                                    children: (0, n.jsx)(iR.U, {
                                        artboard: "Entry",
                                        className: ik.lW,
                                        fit: "contain",
                                        withReducedMotion: "short-loop",
                                        dataBinding: { iconColor: iD, reducedMotion: r },
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)($, {
                            onPointerDown: c,
                            onKeyDown: d,
                            onClick: l,
                            size: "custom",
                            className: ik.ni,
                            "aria-label": tp.intl.string(tp.t.I0v0Qv),
                            children: [
                                (0, n.jsx)(iO.PlayIcon, { size: "refresh_sm", color: "currentColor" }),
                                (0, n.jsx)(to, {
                                    variant: "mono-md/normal",
                                    className: ik.qK,
                                    children: tp.intl.string(tp.t.I0v0Qv),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: ik.qr,
                    children: [
                        (0, n.jsx)(to, {
                            variant: "body-sm/medium",
                            className: ik.ed,
                            children: tp.intl.format(tb.default.hcNhyq, {
                                learnMoreHook: (e, t) =>
                                    (0, n.jsx)(
                                        tH.Anchor,
                                        {
                                            className: ik.nf,
                                            href: iy.A.getArticleURL(aJ.MVz.CHECKPOINT),
                                            useDefaultUnderlineStyles: !1,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, n.jsx)(to, {
                            variant: "body-md/medium",
                            className: ik.al,
                            children: tp.intl.format(aT.default.g476ZL, { name: "Exyl" }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var iU = a(565645),
    iF = a(141881);
function iG(e) {
    let { children: t } = e;
    return (0, n.jsx)(tf, { className: iF.l, children: t });
}
var iH = a(765671),
    iK = a(663385),
    iB = a(469228),
    iz = a(406956);
let iV = (0, iM.j5)(B.Kr);
function iW(e) {
    let { value: t, alignment: a = "left", className: i } = e,
        r = (0, x.bG)([q.Ay], () => q.Ay.useReducedMotion),
        [s, c] = p.useState(0),
        { isLoaded: d, onLoad: l } = (function () {
            let [e, t] = p.useState(!1);
            return { isLoaded: e, onLoad: p.useCallback(() => t(!0), []) };
        })(),
        o = r ? t : s;
    p.useEffect(() => {
        if (r || !d) return;
        let e = performance.now(),
            a = requestAnimationFrame(function i(r) {
                let n = Math.min((r - e) / 500, 1);
                (c(Math.round(t * n)), n < 1 && (a = requestAnimationFrame(i)));
            });
        return () => cancelAnimationFrame(a);
    }, [t, r, d]);
    let u = "center" === a ? iK.m : iB.w;
    return (0, n.jsxs)("div", {
        className: m()(iz.lY, i),
        children: [
            (0, n.jsx)("div", { className: iz.VL, children: t }),
            (0, n.jsx)(u, {
                className: iz.lW,
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: o, TextColor: iV },
                onLoad: l,
            }),
            (0, n.jsx)(A.A, { children: t.toLocaleString(tp.intl.currentLocale) }),
        ],
    });
}
var iq = a(434911);
function iY(e) {
    let { value: t } = e,
        { ref: a, width: i } = (0, iH.Ay)(),
        { ref: r, width: s } = (0, iH.Ay)(),
        c = null != i && null != s ? Math.min(1, i / s) : 1;
    return (0, n.jsxs)("div", {
        ref: a,
        className: iq.ai,
        style: { height: 200 * c },
        children: [
            (0, n.jsx)("span", { ref: r, className: m()(iq.Qq, iq.xP), children: t }),
            (0, n.jsx)(iW, { value: t }),
        ],
    });
}
function iX(e) {
    let { value: t } = e;
    return (0, n.jsxs)("div", {
        className: iq.dJ,
        children: [
            "number" == typeof t
                ? (0, n.jsx)(iY, { value: t })
                : (0, n.jsx)(to, { variant: "heading-xxl/medium", className: iq.Qq, children: t }),
            (0, n.jsx)(ia, { className: iq.gi }),
        ],
    });
}
var iZ = a(445199),
    iQ = a(205524),
    iJ = a(690521),
    i$ = a(152321);
let i0 = [0, 0, 2],
    i1 = [0, 1, 0],
    i2 = [0, 0, 0],
    i3 = `
attribute vec4 a_position;
attribute vec2 a_texcoord;
uniform mat4 u_normalMatrix;
attribute vec3 a_vertexNormal;

uniform mat4 u_matrix;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

void main() {
  // Multiply the position by the matrix.
  gl_Position = u_matrix * a_position;

  // Pass the texcoord to the fragment shader.
  v_texcoord = a_texcoord;

  highp vec3 ambientLight = vec3(0.4, 0.4, 0.4);
  highp vec3 directionalLightColor = vec3(0.6, 0.6, 0.6);
  highp vec3 directionalVector = normalize(vec3(0.0, 0.0, 1.0));

  highp vec4 transformedNormal = u_normalMatrix * vec4(a_vertexNormal, 0.0);

  highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
  v_lighting = ambientLight + (directionalLightColor * directional);
}
`,
    i8 = `
precision mediump float;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

uniform sampler2D u_texture;

void main() {
  highp vec4 texelColor = texture2D(u_texture, v_texcoord);
  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);
}
`,
    i7 = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    i5 = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    i6 = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];
function i9(e) {
    let t,
        { emoji: a } = e,
        [i, r] = p.useState(null),
        [s, c] = p.useState(null),
        d = p.useRef(new Image()),
        [l, o] = p.useState(null),
        [u, h] = p.useState(!1),
        f = p.useRef(0),
        b = p.useRef(0),
        _ = p.useRef(45),
        g = p.useRef(45),
        A = (0, x.bG)([q.Ay], () => q.Ay.useReducedMotion),
        v = 70 * !A,
        w = 40 * !A,
        I = p.useRef(v),
        E = p.useRef(w),
        j = p.useRef(!1),
        S = p.useRef(0),
        N = p.useRef(0);
    ((t = p.useRef(null)),
        p.useEffect(() => {
            if (null == t.current || null == s) return;
            let e = t.current,
                a = e.createTexture();
            return (
                e.bindTexture(e.TEXTURE_2D, a),
                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, s),
                e.generateMipmap(e.TEXTURE_2D),
                () => e.deleteTexture(a)
            );
        }, [s, l]),
        p.useEffect(() => {
            let e,
                a = 0,
                r = i?.getContext("webgl");
            if (null == r || null == i || null == s) return;
            t.current = r;
            let n = r.createShader(r.VERTEX_SHADER),
                c = r.createShader(r.FRAGMENT_SHADER);
            if (null == n || null == c) return;
            if (
                (r.shaderSource(n, i3),
                r.shaderSource(c, i8),
                r.compileShader(n),
                !r.getShaderParameter(n, r.COMPILE_STATUS))
            )
                return void console.error("ERROR compiling vertex shader!", r.getShaderInfoLog(n));
            if ((r.compileShader(c), !r.getShaderParameter(c, r.COMPILE_STATUS)))
                return void console.error("ERROR compiling fragment shader!", r.getShaderInfoLog(c));
            let d = r.createProgram();
            if (
                (r.attachShader(d, n), r.attachShader(d, c), r.linkProgram(d), !r.getProgramParameter(d, r.LINK_STATUS))
            )
                return void console.error("ERROR linking program!", r.getProgramInfoLog(d));
            if ((r.validateProgram(d), !r.getProgramParameter(d, r.VALIDATE_STATUS)))
                return void console.error("ERROR validating program!", r.getProgramInfoLog(d));
            let l = r.getAttribLocation(d, "a_position"),
                o = r.getAttribLocation(d, "a_texcoord"),
                u = r.getUniformLocation(d, "u_matrix"),
                h = r.getUniformLocation(d, "u_texture"),
                f = r.getAttribLocation(d, "a_vertexNormal"),
                b = r.getUniformLocation(d, "u_normalMatrix"),
                p = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, p),
                r.bufferData(r.ARRAY_BUFFER, new Float32Array(i6), r.STATIC_DRAW),
                r.vertexAttribPointer(f, 3, r.FLOAT, !1, 0, 0),
                r.enableVertexAttribArray(f));
            let m = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, m),
                (e = new Float32Array(i7)),
                r.bufferData(r.ARRAY_BUFFER, e, r.STATIC_DRAW));
            let x = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, x), r.bufferData(r.ARRAY_BUFFER, new Float32Array(i5), r.STATIC_DRAW));
            let A = iZ.DF(60);
            return (
                (a = requestAnimationFrame(function e() {
                    if (null == r || null == i) return;
                    (r.viewport(0, 0, r.canvas.width, r.canvas.height), r.enable(r.CULL_FACE), r.enable(r.DEPTH_TEST));
                    let t = iZ.DF(_.current),
                        n = iZ.DF(g.current);
                    (r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT),
                        r.useProgram(d),
                        r.enableVertexAttribArray(l),
                        r.bindBuffer(r.ARRAY_BUFFER, m),
                        r.vertexAttribPointer(l, 3, r.FLOAT, !1, 0, 0),
                        r.enableVertexAttribArray(o),
                        r.bindBuffer(r.ARRAY_BUFFER, x),
                        r.vertexAttribPointer(o, 2, r.FLOAT, !1, 0, 0));
                    let s = i.clientWidth / i.clientHeight,
                        c = iQ.fN(iQ.vt(), A, s, 1, 2e3),
                        f = iQ.t5(iQ.vt(), i0, i2, i1),
                        p = iQ.lw(iQ.vt(), c, f),
                        v = iQ.vt();
                    (iQ.eL(v, v, t), iQ.Z8(v, v, n));
                    let w = iQ.lw(iQ.vt(), p, v),
                        I = iQ.vt();
                    (iQ.B8(I, v),
                        iQ.mg(I, I),
                        r.uniformMatrix4fv(b, !1, I),
                        r.uniformMatrix4fv(u, !1, w),
                        r.uniform1i(h, 0),
                        r.drawArrays(r.TRIANGLES, 0, 36),
                        (a = requestAnimationFrame(e)));
                })),
                () => cancelAnimationFrame(a)
            );
        }, [_, g, i, s]));
    let T = p.useCallback(() => {
        let e = s?.getContext("2d");
        null != s &&
            null != e &&
            ((e.fillStyle = "black"),
            e.fillRect(0, 0, s.width, s.height),
            e.drawImage(d.current, 0, 0, s.width, s.height),
            (e.fillStyle = B.Kr),
            e.fillRect(0, 0, s.width, 1),
            e.fillRect(0, 0, 1, s.height),
            e.fillRect(0, s.height - 1, s.width, 1),
            e.fillRect(s.width - 1, 0, 1, s.height),
            o(a),
            h(!0));
    }, [a, d, s]);
    (p.useEffect(() => {
        null != s &&
            ((d.current.crossOrigin = "anonymous"), (d.current.src = (0, iJ.Ez)(a, 256)), (d.current.onload = T));
    }, [a, T, d, s]),
        p.useEffect(
            () => (
                !(function e(t) {
                    let a = 0.001 * t,
                        i = Math.min(a - b.current, 0.1);
                    if (((g.current += -E.current * i), (_.current += -I.current * i), !j.current)) {
                        if (Math.abs(I.current) > v) {
                            let e = I.current > 0 ? 1 : -1;
                            I.current -= 2 * e * window.devicePixelRatio;
                        }
                        if (Math.abs(E.current) > w) {
                            let e = E.current > 0 ? 1 : -1;
                            E.current -= 2 * e * window.devicePixelRatio;
                        }
                    }
                    ((b.current = a), (f.current = requestAnimationFrame(e)));
                })(0),
                () => cancelAnimationFrame(f.current)
            ),
            [v, w],
        ));
    let C = p.useCallback((e) => {
            ((j.current = !0), (I.current = 0), (E.current = 0), (S.current = e.clientX), (N.current = e.clientY));
        }, []),
        R = p.useCallback((e) => {
            if (j.current) {
                let t = (e.clientX - S.current) / window.devicePixelRatio;
                ((I.current = -((e.clientY - N.current) / window.devicePixelRatio) * (100 / window.devicePixelRatio)),
                    (E.current = -t * (100 / window.devicePixelRatio)),
                    (S.current = e.clientX),
                    (N.current = e.clientY));
            }
        }, []),
        O = p.useCallback(() => {
            j.current = !1;
        }, []);
    return (
        p.useEffect(
            () => (
                window.addEventListener("mouseup", O),
                window.addEventListener("mousemove", R),
                () => {
                    (window.removeEventListener("mouseup", O), window.removeEventListener("mousemove", R));
                }
            ),
            [R, O],
        ),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("canvas", {
                    className: m()(i$.Ji, { [i$.q4]: !u }),
                    ref: r,
                    height: 512,
                    width: 512,
                    onMouseDown: C,
                }),
                (0, n.jsx)("canvas", { className: i$.R, ref: c, height: 256, width: 256 }),
            ],
        })
    );
}
var i4 = a(826820);
let re = [];
function rt(e) {
    let { emojiStats: t } = e,
        a = Math.round(t?.numEmojisSent ?? 0),
        i = (0, K.bD)(t?.numEmojisSentPercentile);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i4.dJ,
                children: [
                    (0, n.jsx)(iS, {
                        icon: tn.EmojiSlightlySmilingFaceIcon,
                        children: tp.intl.string(tb.default.ZTDCIv),
                    }),
                    (0, n.jsx)(iW, { value: a }),
                ],
            }),
            (0, n.jsx)(iw, {
                children:
                    null != i
                        ? tp.intl.format(tb.default.o7vDrk, {
                              percent: i,
                              percentHook: (e, t) => (0, n.jsx)(iG, { children: e }, t),
                          })
                        : tp.intl.format(tb.default.NFptic, { numEmojis: a }),
            }),
        ],
    });
}
function ra(e) {
    let { numEmojisSent: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i4.dJ,
                children: [
                    (0, n.jsx)(iS, {
                        icon: tn.EmojiSlightlySmilingFaceIcon,
                        children: tp.intl.string(tb.default.ZTDCIv),
                    }),
                    (0, n.jsx)(iX, { value: t }),
                ],
            }),
            (0, n.jsx)(iw, { children: tp.intl.format(tb.default["660/Rr"], { numEmojis: (0, K.wj)(t) }) }),
        ],
    });
}
function ri() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.emojis),
        t = (0, x.bG)([h.A], () => (0, K.y7)(h.A.stats)),
        a = (0, x.bG)([h.A], () => h.A.globalStats?.emojis),
        i = !t && null != a,
        r = (i ? a.emojis : e?.emojis) ?? re,
        [s, c] = p.useState(0),
        d = r[s],
        l = tj(tI);
    return (0, n.jsx)(is, {
        children: (0, n.jsxs)("div", {
            className: i4.kL,
            children: [
                (0, n.jsx)("div", { className: i4.KY, children: null != d && (0, n.jsx)(i9, { emoji: d }) }),
                (0, n.jsxs)("div", {
                    className: i4.C,
                    children: [
                        i ? (0, n.jsx)(ra, { numEmojisSent: a.numEmojisSent }) : (0, n.jsx)(rt, { emojiStats: e }),
                        (0, n.jsx)("div", {
                            className: i4.gm,
                            children: r.map((e, t) =>
                                (0, n.jsx)(
                                    rr,
                                    {
                                        emoji: e,
                                        rank: t + 1,
                                        isActive: t === s,
                                        onClick: () => {
                                            (l(), c(t));
                                        },
                                    },
                                    e.id ?? e.name,
                                ),
                            ),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function rr(e) {
    let { emoji: t, rank: a, isActive: i, onClick: r } = e,
        s = !(0, x.bG)([q.Ay], () => q.Ay.useReducedMotion) && !0 === t.animated;
    return (0, n.jsxs)(J, {
        size: "custom",
        className: i4._X,
        onClick: r,
        "aria-label": tp.intl.formatToPlainString(tb.default["S5+pRg"], { emojiName: t.name, rank: a }),
        "aria-pressed": i,
        children: [
            (0, n.jsx)(iU.A, { className: i4.Zg, emojiId: t.id, emojiName: t.name, animated: s }),
            (0, n.jsx)(to, { variant: "mono-md/bold", className: i4.Tm, children: a }),
        ],
    });
}
var rn = a(360450),
    rs = a(214947),
    rc = a(939249),
    rd = a(597770),
    rl = a(559647),
    ro = a(95369),
    ru = a(570287),
    rh = a(486020),
    rf =
        (((r = {})[(r.START = 0)] = "START"),
        (r[(r.INTRO = 1)] = "INTRO"),
        (r[(r.TRANSITION = 2)] = "TRANSITION"),
        (r[(r.BEST = 3)] = "BEST"),
        (r[(r.LEAVE = 4)] = "LEAVE"),
        (r[(r.END = 5)] = "END"),
        r),
    rb = a(801305);
let rp = [],
    r_ = (0, iM.j5)(B.Kr),
    rm = { r: 0, g: 0, b: 0, a: 1 },
    rx = {
        "Avatar01/Stroke": rm,
        "Avatar01/Fill": r_,
        "Avatar02/Stroke": rm,
        "Avatar02/Fill": r_,
        "Avatar03/Stroke": rm,
        "Avatar03/Fill": r_,
        "Avatar04/Stroke": rm,
        "Avatar04/Fill": r_,
        "Avatar05/Stroke": rm,
        "Avatar05/Fill": r_,
        ConnectorColor: r_,
    };
function rg(e) {
    return null != e ? rh.Ay.getUserAvatarURL(e, !1, 160, "png") : void 0;
}
function rA(e) {
    let t,
        { route: a, onNextStep: i, onPreviousStep: r } = e,
        s = (0, x.bG)([h.A], () => h.A.stats?.users ?? rp),
        c = (0, x.bG)([h.A], () => h.A.stats?.sidekick),
        d = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        l = (0, x.bG)([q.Ay], () => q.Ay.useReducedMotion),
        o = p.useRef(null),
        u = p.useRef(void 0),
        f = (function (e, t) {
            let [a, i] = p.useState({ route: e, hasShownSquad: e === S.gr.SQUAD, isTransitioning: !1 });
            switch (
                (a.route !== e &&
                    i({
                        route: e,
                        hasShownSquad: a.hasShownSquad || e === S.gr.SQUAD,
                        isTransitioning: !t && a.route === S.gr.SQUAD && e === S.gr.SIDEKICK,
                    }),
                p.useEffect(() => {
                    if (!a.isTransitioning) return;
                    let e = setTimeout(() => i((e) => ({ ...e, isTransitioning: !1 })), 1500);
                    return () => clearTimeout(e);
                }, [a.isTransitioning]),
                e)
            ) {
                case S.gr.SQUAD_TRANSITION:
                    return 5 * !!a.hasShownSquad;
                case S.gr.SQUAD:
                    return 1;
                case S.gr.SIDEKICK:
                    return a.isTransitioning ? 2 : 3;
                case S.gr.SIDEKICK_LEAVE:
                    return t ? 3 : 4;
                default:
                    return 0;
            }
        })(a, l);
    ((t = p.useRef(!0)),
        p.useEffect(() => {
            if (a !== S.gr.SIDEKICK_LEAVE) {
                t.current = !1;
                return;
            }
            if (t.current) return void r();
            if (l) return void i();
            let e = setTimeout(i, 1e3);
            return () => clearTimeout(e);
        }, [i, r, l, a]));
    let [b, _] = s,
        g = (0, iL.tx)(b) ?? "",
        v = (0, iL.tx)(_) ?? "",
        w = g.toLocaleUpperCase(),
        I = v.toLocaleUpperCase(),
        E = (0, iL.tx)(c?.user) ?? "",
        j = [
            { user: c?.user, name: E },
            { user: b, name: g },
            { user: _, name: v },
        ].filter((e) => null != e.user),
        N = s.length < 2,
        T = a === S.gr.SIDEKICK || a === S.gr.SIDEKICK_LEAVE;
    p.useEffect(() => () => clearInterval(u.current), []);
    let C = p.useCallback(() => {
        (clearInterval(u.current),
            (u.current = setInterval(() => {
                let e = o.current?.getProperties();
                e?.twoFriends?.value === N &&
                    e?.reducedMotion?.value === l &&
                    e?.["Avatar01/Username"]?.value === E.toLocaleUpperCase() &&
                    (o.current?.play(), clearInterval(u.current));
            }, 50)));
    }, [l, E, N]);
    return (0, n.jsxs)(is, {
        children: [
            (0, n.jsx)(rn.m, {
                ref: o,
                className: rb.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: C,
                withReducedMotion: "play",
                dataBinding: {
                    ...rx,
                    AnimationState: f,
                    "Avatar01/img": rg(c?.user),
                    "Avatar02/img": rg(_),
                    "Avatar03/img": rg(b),
                    "Avatar04/img": rg(c?.user),
                    "Avatar05/img": rg(d),
                    "Avatar01/Username": E.toLocaleUpperCase(),
                    "Avatar02/Username": I,
                    "Avatar03/Username": w,
                    "Avatar04/Username": E.toLocaleUpperCase(),
                    twoFriends: N,
                    reducedMotion: l,
                },
            }),
            a === S.gr.SQUAD_TRANSITION && (0, n.jsx)(rv, {}),
            a === S.gr.SQUAD &&
                (0, n.jsxs)("div", {
                    className: rb.Qs,
                    children: [
                        (0, n.jsx)(rw, {
                            title: tp.intl.string(aT.default.OzY5Ns),
                            accessibilityLabel: tp.intl.string(tb.default.OSo1fB),
                            description: tp.intl.string(tb.default.EqdLDd),
                        }),
                        (0, n.jsx)(A.A, {
                            tag: "ul",
                            children: j.map((e, t) => (0, n.jsx)("li", { children: e.name }, t)),
                        }),
                    ],
                }),
            T &&
                null != c &&
                (0, n.jsxs)(ei, {
                    visible: f !== rf.TRANSITION,
                    enter: e1,
                    exit: e8,
                    mountAfterDelay: !0,
                    className: m()(rb.Qs, rb.yG),
                    children: [
                        (0, n.jsxs)("div", {
                            className: rb.Cv,
                            children: [
                                (0, n.jsx)(rw, {
                                    title: tp.intl.string(aT.default["+uwOHt"]),
                                    accessibilityLabel: tp.intl.string(tb.default.X4EiRH),
                                    description: tp.intl.string(tb.default["/ctmGw"]),
                                }),
                                (0, n.jsx)(A.A, { children: E }),
                                (0, n.jsx)(rI, { sidekick: c }),
                            ],
                        }),
                        (0, n.jsx)(rE, { user: c.user, username: E }),
                    ],
                }),
        ],
    });
}
function rv() {
    let e = ts();
    return (0, n.jsx)("div", {
        ref: e,
        className: m()(rb.Qs, rb.kY),
        children: (0, n.jsx)(iw, { children: tp.intl.string(tb.default["6RSp5q"]) }),
    });
}
function rw(e) {
    let { title: t, accessibilityLabel: a, description: i } = e,
        r = ts();
    return (0, n.jsxs)("div", {
        className: rb.wx,
        children: [
            (0, n.jsxs)(iI, {
                ref: r,
                className: rb.R_,
                accessibilityLabel: a,
                children: [
                    (0, n.jsx)(ij, { icon: rs.FriendsIcon, children: tp.intl.string(aT.default.ZQakPR) }),
                    (0, n.jsx)(to, { variant: "display-lg", className: rb.Vy, children: t }),
                ],
            }),
            (0, n.jsx)(iw, { children: i }),
        ],
    });
}
function rI(e) {
    let { sidekick: t } = e,
        a = Math.round(t.numMessagesSent),
        i = Math.round(t.numVoiceMinutes);
    return (0, n.jsxs)("div", {
        className: rb.M1,
        children: [
            (0, n.jsxs)("div", {
                className: rb.dJ,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(aN.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, n.jsx)(to, { variant: "heading-xxl/medium", className: rb.wk, children: a }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: rb.dJ,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(aM.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, n.jsx)(to, { variant: "heading-xxl/medium", className: rb.wk, children: i }),
                ],
            }),
            (0, n.jsx)(A.A, {
                children: tp.intl.formatToPlainString(tb.default.NafXAs, { numMessages: a, numMinutes: i }),
            }),
        ],
    });
}
function rE(e) {
    let { user: t, username: a } = e,
        [i, r] = p.useState(""),
        [c, d] = p.useState(!1),
        [l, o] = p.useState(!1),
        h = (0, ru.A)(t.id),
        f = i.length > 0 && i.length <= 250 && !c && !l,
        _ = c ? tp.intl.string(tp.t.fjcCk5) : tp.intl.formatToPlainString(tp.t["0ZQw/X"], { name: a });
    return h
        ? (0, n.jsxs)("div", {
              className: rb.OG,
              children: [
                  (0, n.jsx)("textarea", {
                      className: rb.yB,
                      value: i,
                      onChange: (e) => r(e.target.value),
                      maxLength: 250,
                      disabled: c || l,
                      placeholder: _,
                      "aria-label": _,
                  }),
                  (0, n.jsxs)("div", {
                      className: rb.n,
                      children: [
                          (0, n.jsx)(rc.D, {
                              className: rb.KD,
                              onClick: function () {
                                  ((0, b.nr)(t.id),
                                      (0, ro.A)({
                                          giftRecipient: t,
                                          analyticsLocations: [tK.A.CHECKPOINT, tK.A.CHECKPOINT_SIDEKICK],
                                      }));
                              },
                              "aria-label": tp.intl.string(tp.t.Ve9Ge6),
                              children: (0, n.jsx)(rd.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                          (0, n.jsx)(rc.D, {
                              className: m()(rb.KD, { [rb.r9]: !f }),
                              onClick: async function () {
                                  if (f) {
                                      o(!0);
                                      try {
                                          (await (0, u.fr)(i, t.id),
                                              r(""),
                                              d(!0),
                                              g.O.announce(tp.intl.string(tp.t.fjcCk5), "polite"));
                                      } catch {
                                          (0, s.P0)({ text: tp.intl.string(tp.t.fEptJP), variant: "critical" });
                                      } finally {
                                          o(!1);
                                      }
                                  }
                              },
                              "aria-disabled": !f,
                              "aria-label": tp.intl.string(tp.t.oeb1vg),
                              children: (0, n.jsx)(rl.SendMessageIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var rj = a(9767);
function rS(e) {
    let { games: t } = e,
        a = Math.round(t?.totalDaysPlayed ?? 0),
        i = (0, K.bD)(t?.totalDaysPlayedPercentile);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: rj.dJ,
                children: [
                    (0, n.jsx)(iS, { icon: aI.CalendarIcon, children: tp.intl.string(tb.default["4N5p4D"]) }),
                    (0, n.jsx)(iW, { value: a }),
                ],
            }),
            (0, n.jsx)(iw, {
                children:
                    null != i
                        ? tp.intl.format(tb.default["4FXB/m"], {
                              percent: i,
                              percentHook: (e, t) => (0, n.jsx)(iG, { children: e }, t),
                          })
                        : tp.intl.format(tb.default.iCKjh6, { numDays: a }),
            }),
        ],
    });
}
function rN(e) {
    let { numUsersPlayedEveryDay: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: rj.dJ,
                children: [
                    (0, n.jsx)(iS, { icon: aI.CalendarIcon, children: tp.intl.string(tb.default["dx4+NI"]) }),
                    (0, n.jsx)(iX, { value: t }),
                ],
            }),
            (0, n.jsx)(iw, { children: tp.intl.string(tb.default["7nfXWu"]) }),
        ],
    });
}
function rT() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.games),
        t = (0, x.bG)([h.A], () => (0, K.uO)(h.A.stats)),
        a = (0, x.bG)([h.A], () => h.A.globalStats?.games?.numUsersPlayedEveryDay),
        i = !t && null != a;
    return (0, n.jsx)(is, {
        children: (0, n.jsxs)("div", {
            className: rj.kL,
            children: [
                (0, n.jsx)(e4, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/312abde9b19fcf85150d507de3f33096992506459b895ab3ea8d92c8f1e04a28.png",
                    className: rj.HW,
                }),
                (0, n.jsx)("div", {
                    className: rj.C,
                    children: i ? (0, n.jsx)(rN, { numUsersPlayedEveryDay: a }) : (0, n.jsx)(rS, { games: e }),
                }),
            ],
        }),
    });
}
var rC = a(95362),
    rR = a(828062);
function rO(e) {
    let { children: t } = e;
    return (0, n.jsx)(to, { variant: "display-lg", className: rR.V, children: t });
}
function rM(e) {
    let { children: t } = e;
    return (0, n.jsx)(tu, { variant: "display-lg", className: rR.V, children: t });
}
var ry = a(109112),
    rL = a(311043),
    rk = a(883053);
function rD(e) {
    let { rank: t, className: a } = e;
    return (0, n.jsxs)(tf, { className: m()(rk.T, a), children: ["#", t] });
}
var rP = a(770178),
    rU = a(102189);
let rF = { fireOnMount: !0, fireOnDepsChange: !0 };
function rG(e) {
    let { text: t, textRef: a, children: i } = e,
        r = (function (e, t) {
            let [a, i] = p.useState(!1),
                r = p.useCallback((e) => {
                    let { target: t } = e;
                    i(t.scrollWidth > t.clientWidth);
                }, []);
            return ((0, rP.g)(e, r, [t], rF), a);
        })(a, t);
    return (0, n.jsx)(aV.m, {
        text: t,
        position: "bottom",
        anchorRef: a,
        shouldShow: r,
        ariaHidden: !0,
        children: i({ tabIndex: r ? 0 : void 0, className: rU.Y }),
    });
}
var rH = a(331144);
let rK = {
        viewBox: `0 0 ${ad.width} ${ad.height}`,
        outline:
            "M-2 -2L183.811 -2L194 9.029L194 253L8.24 253L-2 242.84ZM0 242.007L9.064 251L192 251L192 9.811L182.936 0L0 0ZM-2 -2L182 -2L182 242L-2 242ZM0 240L180 240L180 0L0 0Z",
        corner: "M179.582 239.13L192.002 251.508",
    },
    rB = {
        viewBox: `0 0 ${al.width} ${al.height}`,
        outline:
            "M-2 -2L221.452 -2L233.503 11.103L233.503 306.01L10.103 306.01L-2 293.947ZM0 293.117L10.929 304.01L231.503 304.01L231.503 11.883L220.574 0L0 0ZM-2 -2L222 -2L222 295L-2 295ZM0 293L220 293L220 0L0 0Z",
        corner: "M219.582 291.133L232.002 303.511",
        stripes:
            "M10.93 291.133l13.91 13.863M20.863 291.133l13.91 13.863M30.801 291.133l13.91 13.863M40.738 291.133l13.91 13.863M50.672 291.133l13.91 13.863M60.609 291.133l13.91 13.863M70.543 291.133l13.91 13.863M80.481 291.133l13.91 13.863M90.414 291.133l13.91 13.863M100.352 291.133l13.91 13.863M110.285 291.133l13.91 13.863M120.223 291.133l13.91 13.863M130.16 291.133l13.91 13.863M140.094 291.133l13.91 13.863M150.031 291.133l13.91 13.863M159.965 291.133l13.91 13.863M169.902 291.133l13.91 13.863M179.836 291.133l13.91 13.863M189.773 291.133l13.91 13.863M199.707 291.133l13.91 13.863M209.645 291.133l13.91 13.863M219.582 13.867l12.42 12.378M219.582 23.766l12.42 12.378M219.582 33.672l12.42 12.378M219.582 43.57l12.42 12.378M219.582 53.477l12.42 12.378M219.582 63.375l12.42 12.378M219.582 73.281l12.42 12.378M219.582 83.18l12.42 12.378M219.582 93.086l12.42 12.378M219.582 102.984l12.42 12.378M219.582 112.891l12.42 12.378M219.582 122.789l12.42 12.378M219.582 132.695l12.42 12.378M219.582 142.594l12.42 12.378M219.582 152.5l12.42 12.378M219.582 162.406l12.42 12.378M219.582 172.305l12.42 12.378M219.582 182.211l12.42 12.378M219.582 192.109l12.42 12.378M219.582 202.016l12.42 12.378M219.582 211.914l12.42 12.378M219.582 221.82l12.42 12.378M219.582 231.719l12.42 12.378M219.582 241.625l12.42 12.378M219.582 251.523l12.42 12.378M219.582 261.43l12.42 12.378M219.582 271.328l12.42 12.378M219.582 281.234l12.42 12.378",
    };
function rz(e) {
    let { paths: t, className: a, children: i } = e;
    return (0, n.jsxs)("div", {
        className: m()(rH.aP, a),
        children: [
            (0, n.jsxs)("svg", {
                className: rH.qd,
                viewBox: t.viewBox,
                preserveAspectRatio: "none",
                "aria-hidden": !0,
                children: [
                    null != t.stripes && (0, n.jsx)("path", { d: t.stripes, className: rH.RY }),
                    (0, n.jsx)("path", { d: t.corner, className: rH.WO }),
                ],
            }),
            i,
            (0, n.jsx)("svg", {
                className: rH.qd,
                viewBox: t.viewBox,
                preserveAspectRatio: "none",
                "aria-hidden": !0,
                children: (0, n.jsx)("path", { d: t.outline, className: rH.rj }),
            }),
        ],
    });
}
function rV(e) {
    return (0, n.jsx)(rz, { ...e, paths: rK });
}
function rW(e) {
    return (0, n.jsx)(rz, { ...e, paths: rB });
}
var rq = a(497357);
function rY(e) {
    let {
            game: { id: t, name: a, coverImageHash: i },
            rank: r,
            label: s,
            frame: c,
            style: d,
            accessibilityLabel: l,
            className: o,
            textRef: u,
            lineClamp: h,
            ...f
        } = e,
        b = (0, x.bG)(
            [rL.A],
            () =>
                rL.A.getGame(t)?.getCoverURL(300) ??
                rh.Ay.getApplicationIconURL({ id: t, icon: i, size: 300, keepAspectRatio: !0, fallbackAvatar: !1 }),
        );
    return (0, n.jsxs)("div", {
        ...f,
        role: "listitem",
        className: m()(rq.LO, o),
        style: d,
        children: [
            (0, n.jsx)("div", {
                className: rq.Tn,
                "aria-hidden": null != l,
                children: (0, n.jsxs)(c, {
                    className: rq.LG,
                    children: [
                        null != b
                            ? (0, n.jsx)("img", { src: b, alt: "", className: rq.Qw })
                            : (0, n.jsx)("div", {
                                  className: m()(rq.Qw, rq.uj),
                                  children: (0, n.jsx)(ry.UnknownGameIcon, { size: "lg" }),
                              }),
                        null != r && (0, n.jsx)(rD, { rank: r, className: rq.Tm }),
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: rq.zH,
                "aria-hidden": null != l,
                children: [
                    (0, n.jsx)(to, {
                        ref: u,
                        variant: "heading-xl/medium",
                        className: rq.UU,
                        lineClamp: h,
                        children: a,
                    }),
                    (0, n.jsx)(to, { variant: "mono-md/bold", className: rq.Pf, children: s }),
                ],
            }),
            null != l && (0, n.jsx)(A.A, { children: l }),
        ],
    });
}
function rX(e) {
    let t = p.useRef(null);
    return (0, n.jsx)(rG, {
        text: e.game.name,
        textRef: t,
        children: (a) => {
            let { tabIndex: i, className: r } = a;
            return (0, n.jsx)(rY, { ...e, className: m()(e.className, r), tabIndex: i, textRef: t, lineClamp: 1 });
        },
    });
}
function rZ(e, t, a) {
    return tp.intl.formatToPlainString(tb.default.mqdLhl, { gameName: e.name, rank: t, numSessions: a });
}
function rQ(e) {
    let { numSessions: t, ...a } = e,
        i = Math.round(t);
    return (0, n.jsx)(rX, { ...a, label: i, frame: rV, style: au, accessibilityLabel: rZ(a.game, a.rank, i) });
}
function rJ(e) {
    let { numSessions: t, ...a } = e,
        i = Math.round(t);
    return (0, n.jsx)(rX, { ...a, rank: 1, label: i, frame: rW, style: ah, accessibilityLabel: rZ(a.game, 1, i) });
}
function r$(e) {
    return (0, n.jsx)(rY, { ...e, frame: rV, style: au, className: rq.Ku });
}
var r0 = a(842807);
let r1 = [];
function r2(e) {
    let { gameStats: t } = e,
        a = Math.round(t?.totalGamesPlayed ?? 0),
        i = (0, K.bD)(t?.totalGamesPlayedPercentile),
        r = t?.games ?? r1;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: r0.wx,
                children: [
                    (0, n.jsxs)("div", {
                        className: r0.dJ,
                        children: [
                            (0, n.jsx)(iS, {
                                icon: aj.GameControllerIcon,
                                children: tp.intl.string(tb.default.HM2fjf),
                            }),
                            (0, n.jsx)(iW, { value: a, className: r0.ai }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: r0.h_,
                        children: (0, n.jsx)(iw, {
                            children:
                                null != i
                                    ? tp.intl.format(tb.default["hc0/yJ"], {
                                          percent: i,
                                          percentHook: (e, t) => (0, n.jsx)(iG, { children: e }, t),
                                      })
                                    : tp.intl.format(tb.default.aJMJ6b, { numGames: a }),
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(rC.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: r0.ag,
                role: "list",
                children: r.map((e, t) => {
                    let { game: a, numSessions: i } = e;
                    return 0 === t
                        ? (0, n.jsx)(rJ, { game: a, numSessions: i }, a.id)
                        : (0, n.jsx)(rQ, { game: a, rank: t + 1, numSessions: i }, a.id);
                }),
            }),
        ],
    });
}
function r3(e) {
    let { gameStats: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: m()(r0.wx, r0.l7),
                children: [
                    (0, n.jsxs)("div", {
                        className: r0.dJ,
                        children: [
                            (0, n.jsx)(ia, { className: r0.gi }),
                            (0, n.jsx)(rM, { children: tp.intl.string(tb.default.qbCgI7) }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: r0.h_,
                        children: (0, n.jsx)(iw, { children: tp.intl.string(tb.default["0oDeiM"]) }),
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: m()(r0.ag, r0.Zs),
                role: "list",
                children: B.Jb.map((e) => {
                    let { list: a, label: i } = e,
                        r = t[a][0];
                    return null != r ? (0, n.jsx)(r$, { game: r, label: tp.intl.string(i) }, a) : null;
                }),
            }),
        ],
    });
}
function r8() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.games),
        t = (0, x.bG)([h.A], () => (0, K.IH)(h.A.stats)),
        a = (0, x.bG)([h.A], () => h.A.globalStats?.games),
        i = !t && null != a;
    return (0, n.jsx)(is, {
        children: (0, n.jsx)("div", {
            className: m()(r0.kL, { [r0.TF]: i }),
            children: i ? (0, n.jsx)(r3, { gameStats: a }) : (0, n.jsx)(r2, { gameStats: e }),
        }),
    });
}
var r7 = a(167662);
function r5(e) {
    let { messages: t } = e,
        a = Math.round(t?.numMessagesSent ?? 0),
        i = (0, K.bD)(t?.numMessagesSentPercentile);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: r7.dJ,
                children: [
                    (0, n.jsx)(iS, { icon: aN.ChatIcon, children: tp.intl.string(aT.default.wWKySP) }),
                    (0, n.jsx)(iW, { value: a }),
                ],
            }),
            (0, n.jsx)(iw, {
                children:
                    null != i
                        ? tp.intl.format(tb.default.TOMBAW, {
                              percent: i,
                              percentHook: (e, t) => (0, n.jsx)(iG, { children: e }, t),
                          })
                        : tp.intl.format(tb.default.cYCqz8, { numMessages: a }),
            }),
        ],
    });
}
function r6(e) {
    let { numWordsSent: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: r7.dJ,
                children: [
                    (0, n.jsx)(iS, { icon: aN.ChatIcon, children: tp.intl.string(tb.default["2BuyVC"]) }),
                    (0, n.jsx)(iX, { value: t }),
                ],
            }),
            (0, n.jsx)(iw, {
                children: tp.intl.format(tb.default.bAxEs2, {
                    numWords: (0, K.wj)(t),
                    numCopies: (0, K.wj)((0, K.yQ)(t)),
                }),
            }),
        ],
    });
}
function r9() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.messages),
        t = (0, x.bG)([h.A], () => (0, K.nb)(h.A.stats)),
        a = (0, x.bG)([h.A], () => h.A.globalStats?.messages?.numWordsSent),
        i = !t && null != a;
    return (0, n.jsx)(is, {
        children: (0, n.jsxs)("div", {
            className: r7.kL,
            children: [
                (0, n.jsx)(e4, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/d2d8036bb6a32967893421f9956b9e8ed30abde474f68c1a34e824205549c5a1.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/1dfd8684180df4216b23f0a61617250be8fcc12bc1970ac259892f34fbdb836d.png",
                    className: r7.HW,
                }),
                (0, n.jsx)("div", {
                    className: r7.C,
                    children: i ? (0, n.jsx)(r6, { numWordsSent: a }) : (0, n.jsx)(r5, { messages: e }),
                }),
            ],
        }),
    });
}
var r4 = a(682163),
    ne = a(224865);
let nt = r4.iu[r4.Ay.Sizes.XLARGE];
function na(e) {
    let { guild: t, size: a } = e;
    return null == t.icon && a < 48
        ? (0, n.jsx)("div", {
              className: m()(ne.K, ne.J),
              style: { width: a, height: a },
              "aria-hidden": !0,
              children: (0, n.jsx)(tc.E, { variant: "body-md/medium", children: (0, K.oW)(t.name) }),
          })
        : (0, n.jsx)(r4.Ay, {
              guild: t,
              size: r4.Ay.Sizes.XLARGE,
              iconSize: a,
              textScale: a / nt,
              className: ne.K,
              style: { width: a, height: a, borderRadius: 0 },
              "aria-hidden": !0,
          });
}
var ni = a(140645);
function nr(e) {
    let { numVoiceMinutes: t, numMessagesSent: a } = e,
        i = Math.round(t),
        r = Math.round(a);
    return (0, n.jsxs)("div", {
        className: ni.M1,
        children: [
            (0, n.jsxs)("div", {
                className: ni.dJ,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(aM.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, n.jsx)(to, { variant: "mono-md/bold", className: ni.Qq, children: i }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: ni.dJ,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(aN.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, n.jsx)(to, { variant: "mono-md/bold", className: ni.Qq, children: r }),
                ],
            }),
            (0, n.jsx)(A.A, {
                children: tp.intl.formatToPlainString(tb.default["OQjeY/"], { numMinutes: i, numMessages: r }),
            }),
        ],
    });
}
var nn = a(972106);
let ns = [];
function nc(e) {
    let { guild: t, rank: a, iconSize: i = 100, children: r } = e,
        s = p.useRef(null);
    return (0, n.jsx)(rG, {
        text: t.name,
        textRef: s,
        children: (e) => {
            let { tabIndex: c, className: d } = e;
            return (0, n.jsxs)("li", {
                className: m()(nn.w_, d),
                tabIndex: c,
                children: [
                    (0, n.jsxs)("div", {
                        className: nn.jj,
                        children: [
                            (0, n.jsx)(rD, { rank: a }),
                            (0, n.jsxs)("div", {
                                className: nn.gI,
                                children: [
                                    (0, n.jsx)(to, {
                                        ref: s,
                                        variant: "heading-xxl/medium",
                                        className: nn.J5,
                                        lineClamp: 1,
                                        children: t.name,
                                    }),
                                    r,
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(na, { guild: t, size: i }),
                ],
            });
        },
    });
}
function nd(e) {
    let { guild: t, numVoiceMinutes: a, numMessagesSent: i } = e;
    return (0, n.jsx)(nc, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, n.jsx)(nr, { numVoiceMinutes: a, numMessagesSent: i }),
    });
}
function nl(e) {
    let { guilds: t } = e,
        a = ts();
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: nn.wx,
                children: [
                    (0, n.jsxs)(iI, {
                        ref: a,
                        className: nn.R_,
                        accessibilityLabel: tp.intl.string(tb.default.FroqRf),
                        children: [
                            (0, n.jsx)(ij, { icon: aR.ServerIcon, children: tp.intl.string(tb.default.Mb5E6r) }),
                            (0, n.jsx)(rO, { children: tp.intl.string(aT.default.F0fkrh) }),
                        ],
                    }),
                    (0, n.jsx)(iw, { children: tp.intl.string(tb.default.IN1DaS) }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: nn.Pl,
                children: t.map((e, t) => {
                    let { guild: a, numMessagesSent: i, numVoiceMinutes: r } = e;
                    return 0 === t
                        ? (0, n.jsx)(nd, { guild: a, numMessagesSent: i ?? 0, numVoiceMinutes: r ?? 0 }, a.id)
                        : (0, n.jsx)(nc, { guild: a, rank: t + 1 }, a.id);
                }),
            }),
        ],
    });
}
function no(e) {
    let { guilds: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: nn.wx,
                children: [
                    (0, n.jsxs)("div", {
                        className: nn.R_,
                        children: [
                            (0, n.jsx)(ia, { className: nn.gi }),
                            (0, n.jsx)(rM, { children: tp.intl.string(aT.default.F0fkrh) }),
                        ],
                    }),
                    (0, n.jsx)(iw, { children: tp.intl.string(tb.default.bhnqop) }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: nn.Pl,
                children: t.map((e, t) => (0, n.jsx)(nc, { guild: e, rank: t + 1 }, e.id)),
            }),
        ],
    });
}
function nu() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.guilds?.guilds ?? ns),
        t = (0, x.bG)([h.A], () => h.A.globalStats?.guilds?.guildsByMembers),
        a = 0 === e.length && null != t;
    return (0, n.jsx)(is, {
        children: (0, n.jsx)("div", {
            className: nn.kL,
            children: a ? (0, n.jsx)(no, { guilds: t }) : (0, n.jsx)(nl, { guilds: e }),
        }),
    });
}
var nh = a(155094);
function nf(e) {
    let { icon: t, title: a, description: i } = e;
    return (0, n.jsx)(is, {
        children: (0, n.jsxs)("div", {
            className: nh.Q,
            children: [(0, n.jsx)(iS, { icon: t, children: a }), (0, n.jsx)(iw, { children: i })],
        }),
    });
}
var nb = a(7584),
    np = a(33293),
    n_ = a(498137),
    nm = a(192339),
    nx = a(834109),
    ng = a(48763);
function nA(e) {
    let { character: t } = e,
        a = (0, I.o)(t);
    return (0, n.jsxs)(n_.A, {
        cardColorPalette: a,
        size: ng.W.LG,
        children: [(0, n.jsx)(nm.A, {}), (0, n.jsx)(nx.A, { variant: "full" }), (0, n.jsx)(np.A, { character: t })],
    });
}
var nv = a(58410);
function nw() {
    let e = (0, x.bG)([h.A], () => h.A.stats),
        t = (0, x.bG)([h.A], () => h.A.character),
        a = ts();
    return (0, n.jsx)(is, {
        children: (0, n.jsxs)("div", {
            className: nv.z,
            children: [
                null != t ? (0, n.jsx)(nA, { character: t }) : null,
                (0, n.jsxs)("div", {
                    className: m()(nv.zH, null === e && nv.gz),
                    children: [
                        (0, n.jsxs)(iI, {
                            ref: a,
                            className: nv.R_,
                            accessibilityLabel: tp.intl.string(tb.default.ASrTAc),
                            children: [
                                (0, n.jsx)(ij, {
                                    icon: ih.ExperimentalCheckpointIcon,
                                    children: tp.intl.string(aT.default.ir6nEQ),
                                }),
                                (0, n.jsx)(to, {
                                    variant: "display-lg",
                                    className: nv.Vy,
                                    children: tp.intl.string(aT.default.y4M1na),
                                }),
                            ],
                        }),
                        null === e ? (0, n.jsx)(nI, { character: t }) : (0, n.jsx)(nE, { stats: e }),
                    ],
                }),
            ],
        }),
    });
}
function nI(e) {
    let { character: t } = e,
        { primaryBackgroundColor: a } = (0, I.j)((0, I.o)(t));
    return (0, n.jsx)(to, {
        tag: "p",
        variant: "heading-xl/medium",
        style: { color: a },
        children: tp.intl.string(tb.default["GL+yOs"]),
    });
}
function nE(e) {
    let { stats: t } = e,
        a = t.guilds?.guilds[0],
        i = t.emojis?.emojis[0],
        r = t.games?.games[0]?.game,
        s =
            null != r
                ? rh.Ay.getApplicationIconURL({ id: r.id, icon: r.iconHash, size: 40, fallbackAvatar: !1 })
                : void 0;
    return (0, n.jsxs)("div", {
        className: nv.M1,
        children: [
            (0, n.jsx)(nj, { label: tp.intl.string(tb.default.MSrV9z), value: t.voice?.totalVoiceMinutes }),
            (0, n.jsx)(nj, { label: tp.intl.string(tb.default.hhh11L), value: t.messages?.numMessagesSent }),
            (0, n.jsx)(nj, { label: tp.intl.string(tb.default["f5S+pt"]), value: a?.numDaysInteracted }),
            (0, n.jsx)(nS, {
                label: tp.intl.string(aT.default["8XPMJj"]),
                icon: null != a ? (0, n.jsx)(na, { guild: a.guild, size: 40 }) : (0, n.jsx)(nN, {}),
                name: null != a ? a.guild.name : tp.intl.string(tp.t.PoWNfe),
            }),
            (0, n.jsx)(nj, { label: tp.intl.string(tb.default.xVSlv3), value: t.emojis?.numEmojisSent }),
            (0, n.jsx)(nS, {
                label: tp.intl.string(aT.default["3sARW7"]),
                icon:
                    null != i
                        ? (0, n.jsx)(iU.A, {
                              emojiId: i.id,
                              emojiName: null == i.id ? i.name : void 0,
                              animated: i.animated,
                              alt: "",
                              className: nv.Kk,
                          })
                        : (0, n.jsx)(nN, {}),
                name:
                    null == i
                        ? tp.intl.string(tp.t.PoWNfe)
                        : null == i.id
                          ? nb.Ay.convertSurrogateToName(i.name)
                          : `:${i.name}:`,
            }),
            (0, n.jsx)(nj, { label: tp.intl.string(tb.default.y2Y1DD), value: t.games?.totalDaysPlayed }),
            (0, n.jsx)(nS, {
                label: tp.intl.string(aT.default.RbT4Zq),
                icon:
                    null != s
                        ? (0, n.jsx)("img", { src: s, alt: "", className: m()(nv.Kk, nv.Gt) })
                        : null == r
                          ? (0, n.jsx)(nN, {})
                          : (0, n.jsx)("div", {
                                className: m()(nv.Kk, nv.Gc),
                                children: (0, n.jsx)(ry.UnknownGameIcon, { size: "md", color: "currentColor" }),
                            }),
                name: null != r ? r.name : tp.intl.string(tp.t.PoWNfe),
            }),
        ],
    });
}
function nj(e) {
    let { label: t, value: a } = e;
    return (0, n.jsxs)("div", {
        className: nv.dJ,
        children: [
            (0, n.jsx)(to, { variant: "heading-md/semibold", children: t }),
            (0, n.jsx)(to, {
                variant: "heading-xxl/medium",
                className: nv.wk,
                children: Math.round(a ?? 0).toLocaleString(tp.intl.currentLocale),
            }),
        ],
    });
}
function nS(e) {
    let { label: t, icon: a, name: i } = e,
        r = p.useRef(null);
    return (0, n.jsx)(rG, {
        text: i,
        textRef: r,
        children: (e) => {
            let { tabIndex: s, className: c } = e;
            return (0, n.jsxs)("div", {
                className: m()(nv.dJ, nv.u4, c),
                tabIndex: s,
                children: [
                    (0, n.jsx)(to, { variant: "heading-md/semibold", children: t }),
                    (0, n.jsxs)("div", {
                        className: nv.AS,
                        children: [
                            a,
                            (0, n.jsx)(to, {
                                ref: r,
                                variant: "heading-xl/medium",
                                lineClamp: 1,
                                className: nv.TJ,
                                children: i,
                            }),
                        ],
                    }),
                ],
            });
        },
    });
}
function nN() {
    return (0, n.jsx)("div", {
        className: m()(nv.Kk, nv.Gc, nv.Wn),
        children: (0, n.jsx)(ry.UnknownGameIcon, { size: "lg", color: "currentColor" }),
    });
}
var nT = a(651946);
function nC() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.guilds?.guilds[0]),
        t = Math.round(e?.numDaysInteracted ?? 0),
        a = (0, K.bD)(e?.numDaysInteractedPercentile),
        i = p.useRef(null);
    return (0, n.jsx)(is, {
        children: (0, n.jsxs)("div", {
            className: nT.kL,
            children: [
                (0, n.jsxs)("div", {
                    className: nT.wx,
                    children: [
                        (0, n.jsxs)("div", {
                            className: nT.R_,
                            children: [
                                (0, n.jsx)(iS, { icon: aR.ServerIcon, children: tp.intl.string(tb.default["M+a+t1"]) }),
                                (0, n.jsx)(iW, { value: t }),
                            ],
                        }),
                        (0, n.jsx)(iw, {
                            children:
                                null != a
                                    ? tp.intl.format(tb.default.sIDTV1, {
                                          numDays: t,
                                          percent: a,
                                          percentHook: (e, t) => (0, n.jsx)(iG, { children: e }, t),
                                      })
                                    : tp.intl.format(tb.default.nLCUQ4, { numDays: t }),
                        }),
                    ],
                }),
                null != e &&
                    (0, n.jsx)("div", {
                        className: nT.bU,
                        children: (0, n.jsx)(rG, {
                            text: e.guild.name,
                            textRef: i,
                            children: (t) => {
                                let { tabIndex: a, className: r } = t;
                                return (0, n.jsxs)("div", {
                                    className: m()(nT.Nr, r),
                                    style: { width: 360 },
                                    tabIndex: a,
                                    children: [
                                        (0, n.jsx)(na, { guild: e.guild, size: 360 }),
                                        (0, n.jsxs)("div", {
                                            className: nT.zH,
                                            children: [
                                                (0, n.jsx)(to, {
                                                    ref: i,
                                                    variant: "heading-xxl/medium",
                                                    className: nT.J5,
                                                    lineClamp: 1,
                                                    children: e.guild.name,
                                                }),
                                                (0, n.jsx)(nr, {
                                                    numVoiceMinutes: e.numVoiceMinutes ?? 0,
                                                    numMessagesSent: e.numMessagesSent ?? 0,
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var nR = a(270704);
function nO(e) {
    let { voice: t } = e,
        a = Math.round(t?.totalVoiceMinutes ?? 0),
        i = (0, K.bD)(t?.totalVoiceMinutesPercentile);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: nR.dJ,
                children: [
                    (0, n.jsx)(iS, { icon: aM.MicrophoneIcon, children: tp.intl.string(tb.default["3/T12E"]) }),
                    (0, n.jsx)(iW, { value: a, alignment: "center" }),
                ],
            }),
            (0, n.jsx)(iw, {
                children:
                    null != i
                        ? tp.intl.format(tb.default.RqXsIs, {
                              percent: i,
                              percentHook: (e, t) => (0, n.jsx)(iG, { children: e }, t),
                          })
                        : tp.intl.format(tb.default.Y3poDW, { numMinutes: a }),
            }),
        ],
    });
}
function nM(e) {
    let { peakHour: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: nR.dJ,
                children: [
                    (0, n.jsx)(iS, { icon: aM.MicrophoneIcon, children: tp.intl.string(tb.default.ZCwB8J) }),
                    (0, n.jsx)(iX, { value: t }),
                ],
            }),
            (0, n.jsx)(iw, { children: tp.intl.string(tb.default.huiTne) }),
        ],
    });
}
function ny() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.voice),
        t = (0, x.bG)([h.A], () => (0, K.Kr)(h.A.stats)),
        a = (0, x.bG)([h.A], () => h.A.globalStats?.voice?.peakHourUtc),
        i = (0, K.XF)(a)?.value,
        r = !t && null != i;
    return (0, n.jsxs)(is, {
        children: [
            (0, n.jsx)(e4, {
                animatedSrc:
                    "https://cdn.discordapp.com/assets/content/04746dc04eab575d0168935af2b1b3f97e2e00439f84bd0f0474276e0c5a81dc.png",
                staticSrc:
                    "https://cdn.discordapp.com/assets/content/c4c2d6b631bff3da4e4bb9afffc8f89bc9fb6f76a2fcd824f8a7af83eb7f1e6b.png",
                className: nR.Tp,
            }),
            (0, n.jsx)("div", {
                className: nR.Qs,
                children: r ? (0, n.jsx)(nM, { peakHour: i }) : (0, n.jsx)(nO, { voice: e }),
            }),
        ],
    });
}
function nL(e) {
    let { route: t, onNextStep: a, onPreviousStep: i } = e;
    if (t === S.gr.HOME) return (0, n.jsx)(iP, { onStart: a });
    if (t === S.gr.INTRODUCTION) return (0, n.jsx)(il, {});
    let { statsScreen: r } = (0, S.UG)(t);
    switch (r) {
        case S.oI.VOICE_INTRO:
            return (0, n.jsx)(nf, {
                icon: aM.MicrophoneIcon,
                title: tp.intl.string(tb.default["/7XYsa"]),
                description: tp.intl.string(tb.default["X8/G/o"]),
            });
        case S.oI.VOICE:
            return (0, n.jsx)(ny, {});
        case S.oI.MESSAGES_INTRO:
            return (0, n.jsx)(nf, {
                icon: aN.ChatIcon,
                title: tp.intl.string(tb.default["2BuyVC"]),
                description: tp.intl.string(tb.default["kF+Y3a"]),
            });
        case S.oI.MESSAGES:
            return (0, n.jsx)(r9, {});
        case S.oI.SERVERS_INTRO:
            return (0, n.jsx)(nf, {
                icon: aR.ServerIcon,
                title: tp.intl.string(aT.default.F0fkrh),
                description: tp.intl.string(tb.default.Xg82Gy),
            });
        case S.oI.SERVERS:
            return (0, n.jsx)(nu, {});
        case S.oI.TOP_SERVER:
            return (0, n.jsx)(nC, {});
        case S.oI.EMOJI_INTRO:
            return (0, n.jsx)(nf, {
                icon: tn.EmojiSlightlySmilingFaceIcon,
                title: tp.intl.string(tb.default.ZTDCIv),
                description: tp.intl.string(tb.default.y8Sr8J),
            });
        case S.oI.EMOJI:
            return (0, n.jsx)(ri, {});
        case S.oI.GAMES_INTRO:
            return (0, n.jsx)(nf, {
                icon: aj.GameControllerIcon,
                title: tp.intl.string(tb.default.HM2fjf),
                description: tp.intl.string(tb.default.LQiFqJ),
            });
        case S.oI.GAMES:
            return (0, n.jsx)(r8, {});
        case S.oI.GAME_TIME:
            return (0, n.jsx)(rT, {});
        case S.oI.SQUAD:
        case S.oI.SIDEKICK:
            return (0, n.jsx)(rA, { route: t, onNextStep: a, onPreviousStep: i });
        case S.oI.SUMMARY:
            return (0, n.jsx)(nw, {});
        case S.oI.SHARE:
            return (0, n.jsx)(iC, {});
        default:
            return null;
    }
}
var nk = a(650809),
    nD = a(428692);
let nP = {
    [S.s9.FACE]: { icon: aM.MicrophoneIcon, label: tp.t.K3lovD },
    [S.s9.OUTFIT]: { icon: aN.ChatIcon, label: tp.t.OIgYlQ },
    [S.s9.HEADWEAR]: { icon: aR.ServerIcon, label: tp.t["7hB4kg"] },
    [S.s9.SHOES]: { icon: tn.EmojiSlightlySmilingFaceIcon, label: tp.t.sMOuuS },
    [S.s9.WEARABLE]: { icon: aj.GameControllerIcon, label: tp.t.URyqtP },
    [S.s9.AURA]: { icon: aI.CalendarIcon, label: tb.default.y2Y1DD },
    [S.s9.ASSEMBLED]: { icon: rs.FriendsIcon, label: tp.t.TdEu5X },
    [S.s9.FINALIZE]: { icon: nk.PaintPaletteIcon, label: tb.default.gmMD2I },
    [S.s9.SUMMARY]: { icon: ih.ExperimentalCheckpointIcon, label: aT.default.y4M1na },
};
function nU(e) {
    let {
            step: { icon: t, label: a, route: i },
            state: r,
            disabled: s,
            blockedTraitDescriptionId: c,
            sound: d,
            onRouteClick: l,
        } = e,
        o = tp.intl.string(a),
        u = "unlocked" === r,
        {
            onPointerDown: h,
            onKeyDown: f,
            onClickWithSound: b,
        } = a0({ source: d, onClick: () => l(i), disabled: s || !u });
    return (0, n.jsx)(aV.m, {
        text: "locked" === r ? null : o,
        ariaHidden: !0,
        children: (0, n.jsxs)(rc.D, {
            onPointerDown: u ? h : void 0,
            onKeyDown: u ? f : void 0,
            onClick: u ? b : void 0,
            tabIndex: u ? 0 : -1,
            role: "tab",
            "aria-selected": "active" === r,
            className: m()(nD.PM, { [nD.Xj]: "active" === r, [nD.CD]: u, [nD.vk]: u && !s }),
            "aria-label": o,
            "aria-disabled": "locked" === r || (u && s),
            "aria-describedby": u ? c : void 0,
            children: [
                (0, n.jsx)("div", { className: m()(nD.Om, { [nD.hZ]: "locked" !== r }) }),
                (0, n.jsx)(t, { size: "xs", color: "currentColor", className: nD.Kk }),
            ],
        }),
    });
}
function nF(e) {
    let { flow: t, stats: a, activeRoute: i, isRouteBlocked: r, blockedTraitDescriptionId: s, onRouteClick: c } = e,
        d = (function (e, t) {
            let a = [];
            for (let i of (0, j.p5)({ flow: e, stats: t })) {
                let { characterStage: e } = (0, S.UG)(i),
                    t = nP[e];
                null != t && a.at(-1)?.stage !== e && a.push({ ...t, stage: e, route: i });
            }
            return a;
        })(t, a),
        { characterStage: l } = (0, S.UG)(i),
        o = d.findIndex((e) => {
            let { stage: t } = e;
            return t === l;
        }),
        [u, f] = p.useState(o);
    o > u && f(o);
    let b = (0, x.bG)([h.A], () => h.A.isSaving);
    return -1 === o
        ? null
        : (0, n.jsx)("div", {
              className: nD.qB,
              role: "tablist",
              "aria-label": tp.intl.string(tb.default.DyMw85),
              children: d.map((e, t) =>
                  (0, n.jsx)(
                      nU,
                      {
                          step: e,
                          state: t === o ? "active" : t <= u ? "unlocked" : "locked",
                          disabled: b || r,
                          blockedTraitDescriptionId: s,
                          sound: t < o ? aK : aB,
                          onRouteClick: c,
                      },
                      e.stage,
                  ),
              ),
          });
}
var nG = a(517782);
function nH() {
    let e = p.useId(),
        t = p.useRef(null);
    return (p.useEffect(() => (g.O.moveTo?.(e, t.current), () => g.O.remove?.(e)), [e]), (0, n.jsx)(A.A, { ref: t }));
}
function nK(e) {
    let t,
        a,
        { didPlayerShareDataWithDiscord: i, onClose: r } = e;
    ((0, x.bG)([h.A], () => h.A.fetchState),
        (t = (0, x.yK)([h.A], () => {
            let { stats: e, globalStats: t } = h.A,
                a = t?.games;
            if ((0, K.IH)(e) || null == a)
                return (
                    e?.games?.games.map((e) => {
                        let { game: t } = e;
                        return t.id;
                    }) ?? []
                );
            let i = [];
            return (
                B.Jb.forEach((e) => {
                    let { list: t } = e,
                        r = a[t][0];
                    null != r && i.push(r.id);
                }),
                i
            );
        })),
        p.useEffect(() => {
            let { fetchState: e } = h.A;
            (e === h.T.INIT || e === h.T.ERROR) && (0, u.nX)();
        }, []),
        p.useEffect(() => {
            (0, H.E)(t);
        }, [t]));
    let s = (0, j.bL)(i),
        [c, d] = (function (e) {
            let [t, a] = p.useState(() =>
                (function (e) {
                    let { character: t, progress: a, stats: i, isCharacterCreatorEnabled: r } = h.A,
                        n = null != t ? S.s9.SUMMARY : a?.stage;
                    return (
                        (0, j.p5)({ flow: e, stats: i, character: t, isCharacterCreatorEnabled: r }).find(
                            (e) => (0, S.UG)(e).characterStage === n,
                        ) ?? S.gr.HOME
                    );
                })(e),
            );
            return (
                p.useEffect(() => {
                    let { characterStage: e } = (0, S.UG)(t);
                    (0, u.l4)(e);
                }, [t]),
                [t, a]
            );
        })(s);
    (p.useEffect(() => {
        (f.A.setStepName(c), (0, b.if)(c));
    }, [c]),
        (0, G.l0)(() => {
            (f.A.stop(), (0, b.i)(f.A.getStepName()));
        }),
        (a = (0, x.bG)([l.A], () => l.A.isFocused() && l.A.isVisible())),
        p.useEffect(() => {
            f.A.setForeground(a);
        }, [a]));
    let { characterStage: o, statsScreen: _ } = (0, S.UG)(c),
        g = c === S.gr.HOME || null != _,
        k = c === S.gr.INTRODUCTION,
        D = (0, S.Rq)(c),
        P = (0, x.bG)([h.A], () => (h.A.fetchState === h.T.SUCCESS ? h.A.stats : void 0)),
        U = (0, x.bG)([h.A], () => h.A.character),
        z = p.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case S.gr.SUMMARY:
                        case S.gr.SHARE:
                            let a = (0, I.o)(t),
                                { primaryBackgroundColor: i, shadowColor: r } = (0, I.j)(a);
                            return {
                                ...af,
                                "--custom-checkpoint-primary": i,
                                "--custom-checkpoint-button-border": i,
                                "--custom-checkpoint-button-shadow": r,
                                "--custom-checkpoint-background-gradient-start": i,
                            };
                        default:
                            return af;
                    }
                })(c, U),
            [c, U],
        ),
        W = (function () {
            let { isMuted: e, volume: t } = (0, x.cf)([h.A], () => ({ isMuted: h.A.isMuted, volume: h.A.volume })),
                a = p.useRef(new Map()),
                i = p.useRef(null),
                r = p.useCallback(() => {
                    (i.current?.(), a.current.forEach((e) => e.pause()));
                }, []);
            return (
                p.useEffect(() => ((a.current = new Map(M.map((e) => [e, new Audio(e)]))), r), [r]),
                p.useEffect(() => {
                    a.current.forEach((a) => {
                        ((a.muted = e), (a.volume = t));
                    });
                }, [e, t]),
                p.useCallback(
                    (e) => {
                        var t;
                        let n;
                        (r(),
                            (t = (e) => {
                                let t = a.current.get(e);
                                null == t || h.A.isMuted || 0 === h.A.volume || ((t.currentTime = 0), t.play());
                            }),
                            (n = []),
                            e.forEach((e) => {
                                let { source: a, delayMs: i } = e;
                                i > 0 ? n.push(setTimeout(() => t(a), i)) : t(a);
                            }),
                            (i.current = () => n.forEach((e) => clearTimeout(e))));
                    },
                    [r],
                )
            );
        })(),
        q = F(),
        X = (0, E.k0)(c, q),
        Q = p.useId(),
        $ = null != X ? Q : void 0,
        ee = p.useCallback(
            (e) => {
                let t = (function (e) {
                    let { previousRoute: t, route: a } = e;
                    if (t === S.gr.SIDEKICK_LEAVE && a === S.gr.SIDEKICK) return null;
                    if (t === S.gr.FINALIZE_CHARACTER && a === S.gr.SUMMARY) return [];
                    let i = [];
                    return (
                        a === S.gr.INTRODUCTION
                            ? (i.push({ source: N, delayMs: 0 }),
                              i.push({ source: O, delayMs: 2500 }),
                              i.push({ source: T, delayMs: 2800 }))
                            : y(t) && L(a)
                              ? i.push({ source: C, delayMs: 0 })
                              : L(t) && y(a) && (i.push({ source: R, delayMs: 0 }), i.push({ source: O, delayMs: 0 })),
                        i
                    );
                })({ previousRoute: c, route: e });
                (null != t && W(t), d(e));
            },
            [c, W, d],
        ),
        et = p.useCallback(
            (e) => {
                let t = (0, j.SK)({ flow: s, stats: P, currentRoute: c, direction: e });
                if (null == t) {
                    1 === e && r();
                    return;
                }
                ee(t);
            },
            [c, s, ee, r, P],
        ),
        ea = p.useCallback(() => et(-1), [et]),
        er = p.useCallback(() => et(1), [et]),
        en = p.useCallback(() => ee((0, j.$_)({ flow: s, stats: P })), [s, ee, P]),
        es = p.useCallback(
            (e) => {
                if (!h.A.isSaving) {
                    if (null != X) return void V(X);
                    ee(e);
                }
            },
            [X, ee],
        );
    return (0, n.jsx)(v.N, {
        theme: Y.NJ.DARK,
        children: (e) =>
            (0, n.jsxs)("div", {
                className: m()(e, nG.kL),
                style: z,
                role: "dialog",
                "aria-modal": !0,
                "aria-label": tp.intl.string(aT.default["CdU/PF"]),
                children: [
                    (0, n.jsx)(nH, {}),
                    (0, n.jsxs)("div", {
                        className: nG.$s,
                        children: [
                            (0, n.jsx)(aH, {}),
                            (0, n.jsx)(J, {
                                size: "sm",
                                "aria-label": tp.intl.string(tp.t.cpT0Cq),
                                onClick: r,
                                children: (0, n.jsx)(w.XSmallIcon, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(e9, {
                        stage: o,
                        isCovered: g,
                        className: nG.qd,
                        children: k && (0, n.jsx)(nL, { route: S.gr.INTRODUCTION, onNextStep: er, onPreviousStep: ea }),
                    }),
                    (0, n.jsx)(ei, {
                        visible: g,
                        enter: eJ,
                        exit: eJ,
                        hiddenScale: 1.02,
                        keepMounted: !0,
                        className: nG.qd,
                        style: z,
                        children: (0, n.jsx)(Z, { isVisible: g }),
                    }),
                    (0, n.jsx)(ei, {
                        visible: D,
                        enter: e2,
                        exit: e3,
                        className: nG.qd,
                        children: (0, n.jsx)(aL, { route: c }),
                    }),
                    (0, n.jsx)(ei, {
                        visible: g,
                        enter: e0,
                        exit: e$,
                        hiddenScale: 1.02,
                        mountAfterDelay: !0,
                        className: nG.qd,
                        style: z,
                        children: (0, n.jsx)(nL, { route: c, onNextStep: er, onPreviousStep: ea }),
                    }),
                    (0, n.jsx)(it, {
                        activeRoute: c,
                        blockedTrait: X,
                        blockedTraitDescriptionId: $,
                        onBack: ea,
                        onNext: er,
                        onReplay: en,
                    }),
                    (0, n.jsx)(tr, { activeRoute: c }),
                    (0, n.jsx)(nF, {
                        flow: s,
                        stats: P,
                        activeRoute: c,
                        isRouteBlocked: null != X,
                        blockedTraitDescriptionId: $,
                        onRouteClick: es,
                    }),
                    null != X && (0, n.jsx)(A.A, { id: Q, children: (0, E.Cz)(X) }),
                ],
            }),
    });
}
function nB() {
    if (o._.hasSubscribers(aJ.jej.MODAL_CLOSE)) return (o._.dispatch(aJ.jej.MODAL_CLOSE), !0);
    let e = (0, d.mU)(document.activeElement ?? document.body);
    return !!e?.hasSubscribers(aJ.jej.POPOUT_CLOSE) && (e.dispatch(aJ.jej.POPOUT_CLOSE), !0);
}
async function nz(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { didPlayerShareDataWithDiscord: a = !0, ...i } = t,
        r = await (0, u.nX)(i);
    r === h.T.ERROR
        ? (0, s.P0)({ text: tp.intl.string(tp.t.fEptJP), variant: "critical" })
        : r !== h.T.FETCHING &&
          (f.A.initialize({ didPlayerShareDataWithDiscord: a, isForeground: l.A.isFocused() && l.A.isVisible() }),
          (0, b.lw)(e),
          (0, c.B8)(
              (e) => {
                  let { closeLayer: t } = e;
                  return (0, n.jsx)(nK, { didPlayerShareDataWithDiscord: a, onClose: t });
              },
              { onEscape: nB },
          ));
}
