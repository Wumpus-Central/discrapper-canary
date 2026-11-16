a.d(t, { D: () => nV });
var r,
    i,
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
            r = (0, P.ki)(D.default.getCurrentUser());
        return Object.values(k.V).filter((i) => {
            let n = e[i];
            return null != n && (0, U.tS)(i, n, { stats: t, hasNitro: r, savedCharacter: a });
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
        r = (0, x.bG)([q.Ay], () => q.Ay.useReducedMotion),
        i = t && !r;
    return (
        p.useEffect(() => {
            let e = a.current;
            null != e && (i ? e.play().catch(Y.tE) : e.pause());
        }, [i]),
        p.useEffect(() => {
            r && null != a.current && (a.current.currentTime = 1);
        }, [r]),
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
        onMouseLeave: r,
        onFocus: i,
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
        onMouseLeave: r,
        onFocus: i,
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
function er(e) {
    let {
            visible: t,
            enter: a,
            exit: r,
            keepMounted: i = !1,
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
        j = t ? a : r,
        S = h ? 0 : j.delay,
        N = h ? 0 : j.duration,
        T = t && !b && !i,
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
                i && _(!0);
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
        !b && !i)
    )
        return null;
    let O = t && !i && C ? 0 : S,
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
        children: t || i ? u : w,
    });
}
var ei = a(516749),
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
        url: "https://cdn.discordapp.com/assets/content/175380cce0f63d36fa2d3fe2794a42bef264584529df6313a90fffd9f444642f.webp",
        riveId: 6945448,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_02_crimson: {
        url: "https://cdn.discordapp.com/assets/content/096971854f9e84ca6d397d763d7a2df3e9a540419d68de1683e6264cf9771402.webp",
        riveId: 6945450,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_03_chrome: {
        url: "https://cdn.discordapp.com/assets/content/0f3f41debc5f0a2a7ff3a90a98e80d10e384b5e8680ece83caf0af3c2e941697.webp",
        riveId: 6945451,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_04_galactic: {
        url: "https://cdn.discordapp.com/assets/content/b827dc2a60147f1fa3e33073a48ad7bc120ea6f7d0770eba06971e3a81c58239.webp",
        riveId: 6945452,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_05_forrest: {
        url: "https://cdn.discordapp.com/assets/content/0996433f3f8486f168b8eab8841d099ad736c5c166e2ccf669f5e18536a1cd78.webp",
        riveId: 6945454,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_06_mighnight: {
        url: "https://cdn.discordapp.com/assets/content/b5437c9682f5c273d412a0d5700d18b01ce4fd8dd41b5a2eb94f1ac70def0493.webp",
        riveId: 6945456,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_07_glacier: {
        url: "https://cdn.discordapp.com/assets/content/fbba0d8f4b2ead815afb45bfa3e3bc529b87f0eb9fe6f116ead8617e99f73edb.webp",
        riveId: 7026923,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_08_orange: {
        url: "https://cdn.discordapp.com/assets/content/861c67a712d842a269cf386d076d73c5b82bccf22f122e2ca58eb7b2f9f4910a.webp",
        riveId: 6945457,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_09_pink: {
        url: "https://cdn.discordapp.com/assets/content/fd2c2ca2b95d8332e0c6b71fcd09c01a433a3bb82e6007cde3a34f8eaf78118b.webp",
        riveId: 6945459,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_10_red: {
        url: "https://cdn.discordapp.com/assets/content/6bbde6588b826c49df896ece1b5521ea3deb7693a0ab6a96414889f3cf86d214.webp",
        riveId: 6945460,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_11_cobalt: {
        url: "https://cdn.discordapp.com/assets/content/54c48557922ef25abf2ae44ac30bb89fc18cf3e817a0dbb8cb999e7d4e88a25e.webp",
        riveId: 6945462,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    "tex_base_12_x-ray": {
        url: "https://cdn.discordapp.com/assets/content/0610ec83c1a63ee5d35bf3f33ef84e26123565100b1ebc2f7e553569f6389e21.webp",
        riveId: 6945463,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_13_liquid: {
        url: "https://cdn.discordapp.com/assets/content/4a87c2dea61d07d6e560866b618d1a16741e1377cd50545e8aca5a5250657d40.webp",
        riveId: 6945465,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_14_butter: {
        url: "https://cdn.discordapp.com/assets/content/56a1b0472868f73c93350c8a73127eda64771bd884c7f4b9fc7055527b07a1d4.webp",
        riveId: 6945464,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_15_iridescent: {
        url: "https://cdn.discordapp.com/assets/content/4ddd69337f5f51635742e70a344805df71109ba652ce467fa01582b99cb15ca4.webp",
        riveId: 6945468,
        width: 833,
        height: 1316,
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
        url: "https://cdn.discordapp.com/assets/content/41903840a79ad543f21fa9f40f1b7c076ac16a8f4a193f6951ce1bc8da21dbe4.webp",
        riveId: 6878398,
        width: 546,
        height: 231,
        widthAt1x: 182,
    },
    tex_headwear_02_headphones: {
        url: "https://cdn.discordapp.com/assets/content/71d94c94a82c5357529c52d33facf7361cd733be7bb1908632aa1fd375bc8678.webp",
        riveId: 7012013,
        width: 880,
        height: 495,
        widthAt1x: 288,
    },
    tex_headwear_03_bananaPeel: {
        url: "https://cdn.discordapp.com/assets/content/fe15e02141e24b2e0b3cc54e4ca967545e8737345d35f24fc843487b2f07d52f.webp",
        riveId: 6944187,
        width: 952,
        height: 567,
        widthAt1x: 312,
    },
    tex_headwear_04_piercings: {
        url: "https://cdn.discordapp.com/assets/content/cab0de0a14c34a595a7773cb81c56af3e90603b2b9760723cde97f61a161922a.webp",
        riveId: 6945559,
        width: 322,
        height: 280,
        widthAt1x: 106,
    },
    tex_headwear_05_headband: {
        url: "https://cdn.discordapp.com/assets/content/c9167315bc86f8ac43ae9777d38e8daed9a7beff8390e2b664ebf738a6982404.webp",
        riveId: 6943812,
        width: 1022,
        height: 742,
        widthAt1x: 335,
    },
    tex_headwear_06_sunGlasses: {
        url: "https://cdn.discordapp.com/assets/content/0a1c73f81e29ad53e8889ae38ba6b3a5a16e4d7dda9eb4b0e070f6dc562e593f.webp",
        riveId: 6878347,
        width: 819,
        height: 350,
        widthAt1x: 269,
    },
    tex_headwear_07_backwardHat: {
        url: "https://cdn.discordapp.com/assets/content/0f6576c50446353959d6063ce87a702b12e6983e4e2d4abbe1382e4e7d79dd9b.webp",
        riveId: 6878399,
        width: 861,
        height: 420,
        widthAt1x: 287,
    },
    tex_headwear_08_leaf: {
        url: "https://cdn.discordapp.com/assets/content/ab8aa59e898f3a281f81a8d6703355c32debba8a5879719121141baa3dc8aca9.webp",
        riveId: 6943794,
        width: 681,
        height: 227,
        widthAt1x: 228,
    },
    tex_headwear_09_fire: {
        url: "https://cdn.discordapp.com/assets/content/52c3472e9e5c5d0923e77b50358d3e71ab1e40aab8df78dba73163d2c3dea572.webp",
        riveId: 6878288,
        width: 910,
        height: 574,
        widthAt1x: 298,
    },
    tex_headwear_10_halo: {
        url: "https://cdn.discordapp.com/assets/content/d7a51adc59b09eb652d8dd473804dd9e369966eeeb694abae3d801215d8d4f93.webp",
        riveId: 6878456,
        width: 714,
        height: 322,
        widthAt1x: 234,
    },
    tex_headwear_11_brain: {
        url: "https://cdn.discordapp.com/assets/content/cf6a8c75cfbaa0bf81ea0cce2a932dbc265916d6f0f572b3e8c63b4093778bf4.webp",
        riveId: 6878244,
        width: 414,
        height: 276,
        widthAt1x: 138,
    },
    tex_headwear_12_trafficCone: {
        url: "https://cdn.discordapp.com/assets/content/9d7f0fa78ba9217409be309c1b7fddd20503251292aaa58c06fecc3b68741abb.webp",
        riveId: 6878330,
        width: 420,
        height: 399,
        widthAt1x: 140,
    },
    tex_headwear_13_teddyBeanie: {
        url: "https://cdn.discordapp.com/assets/content/2bc458cf90e244a2f272b41461945fde86846111276a505f56016ee058022c7d.webp",
        riveId: 6878395,
        width: 910,
        height: 532,
        widthAt1x: 298,
    },
    tex_headwear_14_crown: {
        url: "https://cdn.discordapp.com/assets/content/48d7f40db34c7c16aafa68a525df464c88a847ba757c4e720943d1de33efe210.webp",
        riveId: 6878327,
        width: 602,
        height: 455,
        widthAt1x: 197,
    },
    tex_none: {
        url: "https://cdn.discordapp.com/assets/content/a0cbeae4f229972a95fe4b0855e085d1cbeb4ce09600f340f9629824fe163fd0.webp",
        riveId: 6585260,
        width: 1,
        height: 1,
    },
    tex_outfit_01_baddie: {
        url: "https://cdn.discordapp.com/assets/content/a638356d8b217bb4c38954a53b644478006a329bf7cfbf9fb7019685e281ebab.webp",
        riveId: 6942551,
        width: 707,
        height: 532,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_monochrome: {
        url: "https://cdn.discordapp.com/assets/content/181b04511ce9a18af59375d77ae1a971c1d78d7739ad38fc9ba82b644d80bc45.webp",
        riveId: 6942552,
        width: 707,
        height: 532,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_pastel: {
        url: "https://cdn.discordapp.com/assets/content/cb13824a08fd2eb0115bf56399c4ba1ef9aaa4aaa44a3dc551270ed5e7885250.webp",
        riveId: 6942562,
        width: 707,
        height: 532,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_sunset: {
        url: "https://cdn.discordapp.com/assets/content/ec0e423280609f7f963a3ce34d8962971f4a6adee53cd95f8412d11c4f2d8603.webp",
        riveId: 6942559,
        width: 707,
        height: 532,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_violet: {
        url: "https://cdn.discordapp.com/assets/content/0f09a73bb81b7dbc72de42f2bb6e0c8a80d48cd00426636cfe55be210a87cfe1.webp",
        riveId: 6942557,
        width: 707,
        height: 532,
        widthAt1x: 232,
    },
    tex_outfit_02_trash: {
        url: "https://cdn.discordapp.com/assets/content/bfaacc2bc71388a8030b9b93dbf1aff45321010c2fcd35c89a79db4aa85cafde.webp",
        riveId: 6923673,
        width: 938,
        height: 644,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_blackout: {
        url: "https://cdn.discordapp.com/assets/content/67c8fd9a93a09b7b1d3161d24bb84914ef8536c7525cdd5bbd70748e61c6fae6.webp",
        riveId: 6923652,
        width: 938,
        height: 644,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_bubblegum: {
        url: "https://cdn.discordapp.com/assets/content/75e4d1da85059643f20d2c00b8e0166b1277aa6d507b3009b357f2879dba9f1c.webp",
        riveId: 6923653,
        width: 938,
        height: 644,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_caution: {
        url: "https://cdn.discordapp.com/assets/content/8cb44780aa8185c4aa6d36c21c0708fda1f686e97a397d66e26dd3433f9f1d45.webp",
        riveId: 6923654,
        width: 938,
        height: 644,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_toxic: {
        url: "https://cdn.discordapp.com/assets/content/f3818ad8b69a62ff626171cc359651545d0706bb460195cc4989ab38e42dc777.webp",
        riveId: 6923655,
        width: 938,
        height: 644,
        widthAt1x: 308,
    },
    tex_outfit_03_streamer: {
        url: "https://cdn.discordapp.com/assets/content/b240e82978b8b05a1d2d6f52a5357e15c06d1b47f8a3d3aa02e9a906ebabd553.webp",
        riveId: 7084204,
        width: 609,
        height: 588,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_flames: {
        url: "https://cdn.discordapp.com/assets/content/38523b655ee3b79ed747a764e14a70d9d446130a1bb5185f8010ecbe6bf4ea4a.webp",
        riveId: 7026918,
        width: 609,
        height: 588,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_smiley: {
        url: "https://cdn.discordapp.com/assets/content/ed21145fc06784143b6bba1470226b087ed720b49565abf6f25fc3d90055a6db.webp",
        riveId: 7026919,
        width: 609,
        height: 588,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_stripes: {
        url: "https://cdn.discordapp.com/assets/content/debe13ae8d3734021e6a2945d61e131ea3375f8d479611616ae71b59f2beb577.webp",
        riveId: 7026920,
        width: 609,
        height: 588,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_vintage: {
        url: "https://cdn.discordapp.com/assets/content/2c2bb5198cba26001c893681dd90280ea80a6a425b493073477cba643b9ace92.webp",
        riveId: 7026922,
        width: 609,
        height: 588,
        widthAt1x: 203,
    },
    tex_outfit_04_camper: {
        url: "https://cdn.discordapp.com/assets/content/f768da4bac88bb093b186306433d7e6b3db833612d0453a9fb68a55cfc419077.webp",
        riveId: 6879281,
        width: 588,
        height: 511,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_amber: {
        url: "https://cdn.discordapp.com/assets/content/a9744591939d82efb6d53435ad0af0d93fd0bcc38db8691ae69ed7b3780d3e77.webp",
        riveId: 6945578,
        width: 588,
        height: 511,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_glamp: {
        url: "https://cdn.discordapp.com/assets/content/1c63db3e687f68960444f30aa5c2bddd7a6ba467e197063e1b7506ba701ec0c7.webp",
        riveId: 6945579,
        width: 588,
        height: 511,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_plaid: {
        url: "https://cdn.discordapp.com/assets/content/4c0deb2d95e0dcab1910e294456dcc62cd07be606edb90b1942b387781ee3696.webp",
        riveId: 6945580,
        width: 588,
        height: 511,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_swamp: {
        url: "https://cdn.discordapp.com/assets/content/e25eb49b4710edffac760cf611a2c335df7db7ba8b6ff4db791b67353215b274.webp",
        riveId: 6945581,
        width: 588,
        height: 511,
        widthAt1x: 193,
    },
    tex_outfit_05_athlete: {
        url: "https://cdn.discordapp.com/assets/content/1b58451c4351d3ec6d4dfe2ecf65ab82983872d35f06642b126fa22aa8704674.webp",
        riveId: 7000298,
        width: 784,
        height: 532,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_blocked: {
        url: "https://cdn.discordapp.com/assets/content/a9210c5be3d3c0672856ac2d91b53bceaddcb4b30f7ba9e477ec0a941c0006e8.webp",
        riveId: 7000296,
        width: 784,
        height: 532,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_checkered: {
        url: "https://cdn.discordapp.com/assets/content/f04c24b3330c703e0f9e012ffd4e50680c8f62e0e73df713450cf3268b60bb3d.webp",
        riveId: 7000295,
        width: 784,
        height: 532,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_faded: {
        url: "https://cdn.discordapp.com/assets/content/b38e28b84e4e9b68d51837e09272135272e3dbb9ff54adedef5f646518a11a59.webp",
        riveId: 7000297,
        width: 784,
        height: 532,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_lined: {
        url: "https://cdn.discordapp.com/assets/content/a6b94af15440d8554f7a1acaffbff75a38c9ad2db2eb8197b69a972562e0b8db.webp",
        riveId: 7000294,
        width: 784,
        height: 532,
        widthAt1x: 252,
    },
    tex_outfit_06_cowpoke: {
        url: "https://cdn.discordapp.com/assets/content/5d82863d31a7e305f2fad3df4c27faf9155f851b4ca35f812c21b47a14298dda.webp",
        riveId: 6879600,
        width: 826,
        height: 532,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_blush: {
        url: "https://cdn.discordapp.com/assets/content/6db99f429cf7bc5dd70523fa8ca891042ffafc4455065d8a7d4865edbbe25568.webp",
        riveId: 6945584,
        width: 826,
        height: 532,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_denim: {
        url: "https://cdn.discordapp.com/assets/content/23c34abef900b338b47a6072454b8e02108a9a0f40835c37e01bbf0cfb12e70f.webp",
        riveId: 6945585,
        width: 826,
        height: 532,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_onyx: {
        url: "https://cdn.discordapp.com/assets/content/e5b483670bcb7a90f7f9deba1aed475278d29f78baf3dc6ef384082e7a643f22.webp",
        riveId: 6945586,
        width: 826,
        height: 532,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_steel: {
        url: "https://cdn.discordapp.com/assets/content/73abc8bb1ebe0cc1eb46c4a657995cb9075331dd454f923233ea94bd3ceeeef6.webp",
        riveId: 6945587,
        width: 826,
        height: 532,
        widthAt1x: 271,
    },
    tex_outfit_07_goth: {
        url: "https://cdn.discordapp.com/assets/content/5b1aec6182980ea56babc5ed3b360af43cda05c19b20c8cad00f19fb8216271d.webp",
        riveId: 6936838,
        width: 875,
        height: 518,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_raven: {
        url: "https://cdn.discordapp.com/assets/content/cec7dc286b8b32389c941e6bcd7f267a93dcbfe6d2dc830ec6ce1ceeba33dcb7.webp",
        riveId: 6936841,
        width: 875,
        height: 518,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_serpent: {
        url: "https://cdn.discordapp.com/assets/content/d79e9bed36e6765595541997b85cbe5ca0d274b23027a263b0eb51b494b1e942.webp",
        riveId: 6936840,
        width: 875,
        height: 518,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_siren: {
        url: "https://cdn.discordapp.com/assets/content/d17d73be0b6ea5cb388a50a555ee4f6ccf2efc9eb9d8757225c3e28c40a82bfb.webp",
        riveId: 6936839,
        width: 875,
        height: 518,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_vamp: {
        url: "https://cdn.discordapp.com/assets/content/78470b15e9af123335c2f084b6ec7a2992cf507628c3acff53abf0046791d2e5.webp",
        riveId: 6936842,
        width: 875,
        height: 518,
        widthAt1x: 287,
    },
    tex_outfit_08_astronaut: {
        url: "https://cdn.discordapp.com/assets/content/396996658c046202d66d9358672064ef2a2b2b71491e89fa41f0633a2715db53.webp",
        riveId: 6879222,
        width: 609,
        height: 546,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_cosmic: {
        url: "https://cdn.discordapp.com/assets/content/a441fbd411bfbec0ee7cee5938ca43212d1aa3969a79c5791582b7643da077c5.webp",
        riveId: 6945588,
        width: 609,
        height: 546,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_martian: {
        url: "https://cdn.discordapp.com/assets/content/cd6399f8dc97eacf112200bbd1bc96e6efa50b7f34ad8ba0aef4d5de90474626.webp",
        riveId: 6945589,
        width: 609,
        height: 546,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_solar: {
        url: "https://cdn.discordapp.com/assets/content/f9cf559f0b9cfe1af9098661e2d6004099db00bd471e453a2087fba3448cbaa7.webp",
        riveId: 6945590,
        width: 609,
        height: 546,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_stardust: {
        url: "https://cdn.discordapp.com/assets/content/5a09ce15b42a0ae2f9e0b54a341c89acc7d1ded744b656c5c8bab3c0ed1af923.webp",
        riveId: 6945591,
        width: 609,
        height: 546,
        widthAt1x: 203,
    },
    tex_outfit_09_jester: {
        url: "https://cdn.discordapp.com/assets/content/fe2f547f7f6ec7c45bcba23839b29024fdd6d698a548101431b966ad7940a69a.webp",
        riveId: 6998778,
        width: 658,
        height: 546,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_carnival: {
        url: "https://cdn.discordapp.com/assets/content/c53941011e11c3b8724339b34432a6c60d6fccc955b4b5bd3944f26bc7e1f5fe.webp",
        riveId: 6998764,
        width: 658,
        height: 546,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_confetti: {
        url: "https://cdn.discordapp.com/assets/content/e2d3ddef9dd87b3e3df01cf1c4d57e45cebdfbd93b2fba28f77b2b50612498d7.webp",
        riveId: 6998766,
        width: 658,
        height: 546,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_nightfall: {
        url: "https://cdn.discordapp.com/assets/content/f303b179db0856f11658b6b3244d4175637248d757786e8d8917b8147ab53bb3.webp",
        riveId: 6998768,
        width: 658,
        height: 546,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_sunrise: {
        url: "https://cdn.discordapp.com/assets/content/3c47f48bd62a43207b4ee2e94df00b917d303bb4159eeda7230e58f30894f918.webp",
        riveId: 6998772,
        width: 658,
        height: 546,
        widthAt1x: 216,
    },
    tex_outfit_10_traveler: {
        url: "https://cdn.discordapp.com/assets/content/65ae90f06f97ff09dda7cd3a1909388a4ad9a8b74f13f6946595026bf13c1ad1.webp",
        riveId: 6879283,
        width: 602,
        height: 525,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_chrono: {
        url: "https://cdn.discordapp.com/assets/content/145beced8bfbd0fd382954f80601143eb74673bf1670c0ff6354e67c9f113e68.webp",
        riveId: 6945598,
        width: 602,
        height: 525,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_haze: {
        url: "https://cdn.discordapp.com/assets/content/7a8e8d172fc6c799661fb9b434b66e9003fd795f7b29d46881476e6f6a5245d5.webp",
        riveId: 6945599,
        width: 602,
        height: 525,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_moss: {
        url: "https://cdn.discordapp.com/assets/content/d64d37450d7389fd3251911ac4c8e4ec073f023044cb38e8ca0811ed742c04b7.webp",
        riveId: 6945600,
        width: 602,
        height: 525,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_umber: {
        url: "https://cdn.discordapp.com/assets/content/bcecdc6f144b54dd85e5bd8178cb72efdd2d010743d562b126c08611344c894e.webp",
        riveId: 6945602,
        width: 602,
        height: 525,
        widthAt1x: 197,
    },
    tex_outfit_11_mage: {
        url: "https://cdn.discordapp.com/assets/content/8fcdb12bd45a5543e63beebc742249eef13b38e6070c8a62f65a34ba0a3d96dd.webp",
        riveId: 6879170,
        width: 714,
        height: 581,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_dusk: {
        url: "https://cdn.discordapp.com/assets/content/72a6fd56a3bb2edde462ef0aa8ed197f5e4118703d7056bc967daf94cbb855a3.webp",
        riveId: 6945603,
        width: 714,
        height: 581,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_shadow: {
        url: "https://cdn.discordapp.com/assets/content/739ea8b814a59fe6fb3c6db9104032d8172e45906a95e75c302f56b9e9449c98.webp",
        riveId: 6945604,
        width: 714,
        height: 581,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_wildwood: {
        url: "https://cdn.discordapp.com/assets/content/06226eed0688fb73b26f0a573f6a5238a7f97ab84cf59ed0f86e953c155a0e49.webp",
        riveId: 6945606,
        width: 714,
        height: 581,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_winter: {
        url: "https://cdn.discordapp.com/assets/content/c8ccb36e839423e9c76ecdfecf0bf7d41ac9ad06bf7f79638ebde449ef181f71.webp",
        riveId: 6945607,
        width: 714,
        height: 581,
        widthAt1x: 234,
    },
    tex_outfit_12_mech: {
        url: "https://cdn.discordapp.com/assets/content/285eb1fe0b9bf15ae3c9687bc769e6a53da54c14de1e59cc5c19be6e1ef5ee33.webp",
        riveId: 6879169,
        width: 651,
        height: 532,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_aero: {
        url: "https://cdn.discordapp.com/assets/content/90b53362edd3a1db609acb1775a5dcc7c18db8db186881391328b217adce63e7.webp",
        riveId: 6945608,
        width: 651,
        height: 532,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_sandstorm: {
        url: "https://cdn.discordapp.com/assets/content/66c6c521ebe635d15c9213cc1422cbb76f9c1bb71d7359ae397d16b86ac26168.webp",
        riveId: 6945609,
        width: 651,
        height: 532,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_ultraviolet: {
        url: "https://cdn.discordapp.com/assets/content/cfb396306bc31b1ae6323aefd8763e0872e2172dde2b5017f63c61fe7342252c.webp",
        riveId: 6945612,
        width: 651,
        height: 532,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_viper: {
        url: "https://cdn.discordapp.com/assets/content/e72eab13d7faad9833b1086edc90d384b9b55aa2b15a9fc48e2703d505f1c213.webp",
        riveId: 6945613,
        width: 651,
        height: 532,
        widthAt1x: 214,
    },
    tex_outfit_13_knight: {
        url: "https://cdn.discordapp.com/assets/content/20c0f50c019c0456f521399755cc9d538d2deddeafd3af777803cee3093dec61.webp",
        riveId: 7115126,
        width: 630,
        height: 532,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_glacier: {
        url: "https://cdn.discordapp.com/assets/content/9fd7b1d11a9a189a75aee3b505b7232db5ef4acb0954528a1ca0e83ffbb7fe5f.webp",
        riveId: 7115195,
        width: 630,
        height: 532,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_iron: {
        url: "https://cdn.discordapp.com/assets/content/df1b4521899b76d90e43283bc31686194050053504d56017e7fcc3140426e2f8.webp",
        riveId: 7115194,
        width: 630,
        height: 532,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_petal: {
        url: "https://cdn.discordapp.com/assets/content/4f62ac7f293b01e4735ae8b9afd539209ea8f95a9ec80477d867fc5c451931df.webp",
        riveId: 7115193,
        width: 630,
        height: 532,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_rust: {
        url: "https://cdn.discordapp.com/assets/content/8970597ae7c2a28f09498dc5883e34e490a87f8f2d1453eff165693d782cc448.webp",
        riveId: 7115186,
        width: 630,
        height: 532,
        widthAt1x: 207,
    },
    tex_outfit_14_magical: {
        url: "https://cdn.discordapp.com/assets/content/76aa1e996574709c012d7ff52df93a8c2d1e42fb39add8d34a09a170672c6796.webp",
        riveId: 6879167,
        width: 560,
        height: 497,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_amethyst: {
        url: "https://cdn.discordapp.com/assets/content/273bd6cbe651b7b1c7255adbdef137d5bfff6806f52540250ea894235f1be749.webp",
        riveId: 6945731,
        width: 560,
        height: 497,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_citrine: {
        url: "https://cdn.discordapp.com/assets/content/58a03fcfb57cf16e6e84490101b7ac42d59d3f943c77ebc5384767a16c3ab50c.webp",
        riveId: 6945753,
        width: 560,
        height: 497,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_frost: {
        url: "https://cdn.discordapp.com/assets/content/5f0dc06798554eec4c41deb31afbf5253fac077c18a7a358583fff11591ea67b.webp",
        riveId: 6945754,
        width: 560,
        height: 497,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_sapphire: {
        url: "https://cdn.discordapp.com/assets/content/4d0eca018f23d91c94d83a2c85b4e0a42606bff9f17e842cb0cf6b9d444bb56f.webp",
        riveId: 6945756,
        width: 560,
        height: 497,
        widthAt1x: 184,
    },
    tex_shoes_01_sneakers: {
        url: "https://cdn.discordapp.com/assets/content/65eac1112a7cad9ad3119662358d747610dc3aa744e2eb94b613e5aad0922e8f.webp",
        riveId: 6880490,
        width: 560,
        height: 196,
        widthAt1x: 180,
    },
    tex_shoes_02_socks: {
        url: "https://cdn.discordapp.com/assets/content/00e3887d696c3e0d5815129f2c0a4e0053ef24b68b424c07e2ec623d4eaa4379.webp",
        riveId: 6880573,
        width: 550,
        height: 165,
        widthAt1x: 180,
    },
    tex_shoes_03_wumpusSlippers: {
        url: "https://cdn.discordapp.com/assets/content/8de8639167be0de097e03690139c0033392e1119de42158cbbdfc5778dba0a4d.webp",
        riveId: 6880448,
        width: 456,
        height: 152,
        widthAt1x: 153,
    },
    tex_shoes_04_bionic: {
        url: "https://cdn.discordapp.com/assets/content/9ba048a4df654c31c5581cac9749b8773d299af66883d5fa3bbd9da0b3dd8efc.webp",
        riveId: 6880556,
        width: 504,
        height: 140,
        widthAt1x: 162,
    },
    tex_shoes_05_platforms: {
        url: "https://cdn.discordapp.com/assets/content/f4b1f3149f7d10c3beecb729985886faf43790eee4936e4d56efe820ad2a694c.webp",
        riveId: 7026898,
        width: 504,
        height: 196,
        widthAt1x: 162,
    },
    tex_shoes_06_westernboots: {
        url: "https://cdn.discordapp.com/assets/content/67f4d6b777aca5cb3c0806056a449e1946183c2ef76b607e3e2b1bd2bc1aab0c.webp",
        riveId: 7026900,
        width: 504,
        height: 133,
        widthAt1x: 165,
    },
    tex_shoes_07_kittyPaws: {
        url: "https://cdn.discordapp.com/assets/content/b648ea8ac395fa010c951c8900b88e1c0c7797fde3af1881c6d5138431a24c3a.webp",
        riveId: 7026901,
        width: 550,
        height: 165,
        widthAt1x: 180,
    },
    tex_shoes_08_rollerSkates: {
        url: "https://cdn.discordapp.com/assets/content/c2417470196be3f00f30a55a85abce59b45343e34ae9c7fcd48c70b9ac162acd.webp",
        riveId: 7026902,
        width: 483,
        height: 175,
        widthAt1x: 158,
    },
    tex_shoes_09_snowShoes: {
        url: "https://cdn.discordapp.com/assets/content/d42b4d283c7dd6fcd3a7bb76337b26ad98944c34ec43cce2f933a0e062c081ce.webp",
        riveId: 6880513,
        width: 504,
        height: 140,
        widthAt1x: 162,
    },
    tex_shoes_10_icarusSandals: {
        url: "https://cdn.discordapp.com/assets/content/766ae7f630db69ffa4eba764e4241f8580c1614fd2a335da5b9b1bb58744df29.webp",
        riveId: 7074384,
        width: 546,
        height: 196,
        widthAt1x: 179,
    },
    tex_shoes_11_clownShoes: {
        url: "https://cdn.discordapp.com/assets/content/3e3a25b167c3d501f91b0eb3fe5f0e7a8964dddee6947cd709649a2bd42fdc69.webp",
        riveId: 7026915,
        width: 602,
        height: 168,
        widthAt1x: 197,
    },
    tex_shoes_12_fancyHeel: {
        url: "https://cdn.discordapp.com/assets/content/7e67569cb0520ad297cabc5e6aa56457c23d81a6be71beac4c4bc92f5fa9a1e3.webp",
        riveId: 6880487,
        width: 550,
        height: 165,
        widthAt1x: 180,
    },
    tex_shoes_13_ballet: {
        url: "https://cdn.discordapp.com/assets/content/c28bad5caad1018cc4c21deba110fe8d76518c4f400101c9e76cc65377e618c2.webp",
        riveId: 7026916,
        width: 496,
        height: 124,
        widthAt1x: 164,
    },
    tex_shoes_14_cyberStompers: {
        url: "https://cdn.discordapp.com/assets/content/e4e99046896383e95c1dc7a76a13654ced23cb670b12019cc0c7988fac1b096a.webp",
        riveId: 7026917,
        width: 532,
        height: 140,
        widthAt1x: 171,
    },
    tex_wearable_01_stickers: {
        url: "https://cdn.discordapp.com/assets/content/e0a1a7a2429d25c4dc98167306dcc1d11982344b2f8f326d4f029860570ae8d2.webp",
        riveId: 6880478,
        width: 805,
        height: 728,
        widthAt1x: 264,
    },
    tex_wearable_02_tote: {
        url: "https://cdn.discordapp.com/assets/content/30435369290e6fa4e20a1d077cbd903c46a47777d332cb6b2c22facfdde3acac.webp",
        riveId: 6880476,
        width: 238,
        height: 308,
        widthAt1x: 78,
    },
    tex_wearable_03_angelWings: {
        url: "https://cdn.discordapp.com/assets/content/01a8ffa3c5846232c6e8758e385abdb4a1f181f337e425a82baadfc2ff59e7f4.webp",
        riveId: 6880634,
        width: 1210,
        height: 385,
        widthAt1x: 396,
    },
    tex_wearable_04_skateboard: {
        url: "https://cdn.discordapp.com/assets/content/4415af6fe2b6749df24f13c8bea4668ba4c50eecf44e4cff7a89186f5bc51353.webp",
        riveId: 6880472,
        width: 259,
        height: 385,
        widthAt1x: 85,
    },
    tex_wearable_05_dragonWings: {
        url: "https://cdn.discordapp.com/assets/content/ecdf7d0dc99d8a143f58b5321720b6692305e05355858b9dd237e6a5b3a53cdb.webp",
        riveId: 6945412,
        width: 1430,
        height: 1045,
        widthAt1x: 468,
    },
    tex_wearable_06_takeOutBag: {
        url: "https://cdn.discordapp.com/assets/content/07f5722786e32bde7a1fdaaf30bd728e67034808d2d54b25168bfa2bc6f07722.webp",
        riveId: 6880614,
        width: 210,
        height: 238,
        widthAt1x: 69,
    },
    tex_wearable_07_pixelWrench: {
        url: "https://cdn.discordapp.com/assets/content/41b921fee09a12551cb671b5c8c162abff806ebbb80dc2a03e2f4068bb7732b4.webp",
        riveId: 7058139,
        width: 406,
        height: 301,
        widthAt1x: 133,
    },
    tex_wearable_08_wizardStaff: {
        url: "https://cdn.discordapp.com/assets/content/f788dccb04b2519dbe7e8b54f5946411947c97a275c85e1618505b1ea372b6ad.webp",
        riveId: 6978663,
        width: 490,
        height: 707,
        widthAt1x: 161,
    },
    tex_wearable_09_mechWings: {
        url: "https://cdn.discordapp.com/assets/content/b671fb212481e511e935dd760a6c18c271fe0f5cc216ba06037df67d93f11c43.webp",
        riveId: 6880609,
        width: 1265,
        height: 385,
        widthAt1x: 414,
    },
    tex_wearable_10_sword_spritesheet: {
        url: "https://cdn.discordapp.com/assets/content/37b333a6ffdbf3f0d73282d262fc1ad0542b9a869edcb47fc8d4c8634177a31c.webp",
        riveId: 7026804,
        width: 2765,
        height: 2464,
        widthAt1x: 905,
    },
    tex_wearable_11_deviantTail: {
        url: "https://cdn.discordapp.com/assets/content/bc2ff8a274e216642534dd789518bc89ffbde6bd8612319ced01354bf461fe62.webp",
        riveId: 7000661,
        width: 525,
        height: 462,
        widthAt1x: 175,
    },
    tex_wearable_11_deviantTail_smoke_active_spritesheet: {
        url: "https://cdn.discordapp.com/assets/content/4af280e7a843ff71ef8ab45b54effd3d78ba74a1fac8e08de63893e9e282ff26.webp",
        riveId: 7190581,
        width: 2550,
        height: 3400,
        widthAt1x: 900,
    },
    tex_wearable_11_deviantTail_smoke_idle_spritesheet: {
        url: "https://cdn.discordapp.com/assets/content/9d45fab964812509c67b59af7ba2037146aa9feb7b10304265e8020a7e91cf75.webp",
        riveId: 7190582,
        width: 2550,
        height: 3400,
        widthAt1x: 900,
    },
    tex_wearable_12_magicalStaff: {
        url: "https://cdn.discordapp.com/assets/content/3f2089245e36fa8abca99b90cfc479420e158de8b7f7d1875a09e2da33861bcb.webp",
        riveId: 6944077,
        width: 476,
        height: 574,
        widthAt1x: 156,
    },
    tex_wearable_13_butterflyWings: {
        url: "https://cdn.discordapp.com/assets/content/d7af6b2723ed82a7263a988927781ccc240d6a770194c38e042dfcd37348403a.webp",
        riveId: 6797765,
        width: 1550,
        height: 1550,
        widthAt1x: 517,
    },
    tex_wearable_14_catBackpack: {
        url: "https://cdn.discordapp.com/assets/content/8c059e9d8030f6d97924cbefc6e2ac135dfbf4d01de1ea0b97db0d69ebb84cbc.webp",
        riveId: 6944650,
        width: 308,
        height: 322,
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
    eA = (((r = {}).SLOT = "slot"), (r.TRAIT = "trait"), (r.LAYOUT = "layout"), (r.ALWAYS = "always"), r);
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
    eR = [1, 1.25, 1.5, 1.75, 2, 3],
    eO = Math.min(...eR),
    eM = Math.max(...eR);
function ey(e, t) {
    let { url: a, width: r, height: i, widthAt1x: n } = eu[e];
    if (null == n) return a;
    let s = (t * n) / r,
        c = t >= Math.round(r / n);
    if (s >= 1 || c) return a;
    let { columns: d, rows: l } = eC[e] ?? eS,
        o = d * Math.round((r / d) * s),
        u = l * Math.round((i / l) * s);
    return `${a}?width=${o}&height=${u}`;
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
            let r = eI.exec(e),
                i = null != r ? ej[r[1].toLowerCase()] : void 0;
            return null != i ? { type: "trait", path: "faceID", riveId: i } : { type: "always" };
        })(e),
        swapKey: (0, eG.un)() ? `${e}-${eu[e].riveId}` : e,
    }));
function eB(e) {
    let { faceID: t, headwearID: a, shoesID: r, wearableID: i, chapterID: n, device: s } = e;
    return p.useMemo(() => {
        var e;
        let c;
        return (
            (e = { faceID: t, headwearID: a, shoesID: r, wearableID: i }),
            (c = new Set()),
            eK.forEach((t) => {
                let { name: a, role: r } = t;
                switch (r.type) {
                    case eA.SLOT:
                        break;
                    case eA.TRAIT:
                        e[r.path] === r.riveId && c.add(a);
                        break;
                    case eA.LAYOUT:
                        r.layouts.includes(s) && c.add(a);
                        break;
                    case eA.ALWAYS:
                        ("tex_wireframe_spritesheet" !== a || eH.has(n)) && c.add(a);
                }
            }),
            c
        );
    }, [t, a, r, i, n, s]);
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
        { stage: r, isHidden: i } = e,
        s = (0, x.bG)([l.A], () => {
            let e = l.A.windowSize();
            return (function (e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (a) return eO;
                let r = Math.max(e / 945, t / 532) * (0, eg.A)();
                return eR.find((e) => e >= r) ?? eM;
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
                    let { stage: t, isHidden: a, traits: r, layout: i, textureScale: n } = e,
                        { base: s, shoes: c, outfit: d, face: l, hat: o, wearable: u, aura: h } = (0, U.XI)(r),
                        f = ex[d],
                        b = {};
                    return (
                        eL.forEach((e) => {
                            let t = Number(e) === f?.riveId ? f.texture : ef;
                            b[`outfit${e}Image`] = ey(t.name, n);
                        }),
                        {
                            device: i,
                            chapterID: a && t === S.s9.FACE ? eD[S.s9.IDLE] : eD[t],
                            faceID: l,
                            shoesID: c,
                            headwearID: eb[o],
                            wearableID: ep[u],
                            outfitID: f?.riveId ?? 0,
                            auraImage: ey(e_[h].name, n),
                            baseColorImage: ey(em[s].name, n),
                            ...("MobilePortrait" === i && t === S.s9.INTRODUCTION ? eU : eP[i]),
                            ...b,
                        }
                    );
                })({ stage: r, isHidden: i, traits: o, layout: "Desktop", textureScale: c }),
            [r, i, o, c],
        ),
        [b, _] = p.useState(null),
        g = (function (e) {
            let { visibleDataBinding: t, requestedDataBinding: a, textureScale: r } = e,
                i = (function (e) {
                    let { visibleTextureNames: t, requestedTextureNames: a } = e,
                        [r, i] = p.useState(t),
                        [n, s] = p.useState(t);
                    if (t !== n) {
                        s(t);
                        let e = new Set(r);
                        (t.forEach((t) => e.add(t)), i(e));
                    }
                    return (
                        p.useEffect(() => {
                            let e = setTimeout(() => i(t), 600);
                            return () => clearTimeout(e);
                        }, [t]),
                        p.useMemo(() => new Set([...r, ...a]), [r, a])
                    );
                })({ visibleTextureNames: eB(t), requestedTextureNames: eB(a) });
            return p.useMemo(() => {
                let e;
                return (
                    (e = {}),
                    eK.forEach((t) => {
                        let { name: a, swapKey: n } = t,
                            s = i.has(a) ? ey(a, r) : ef.url;
                        e[n] = { source: { uri: s } };
                    }),
                    e
                );
            }, [i, r]);
        })({ visibleDataBinding: b ?? f, requestedDataBinding: f, textureScale: c }),
        {
            assetLoader: A,
            onLoad: v,
            textureManager: w,
        } = (function () {
            let e = p.useRef(new Map()),
                [t, a] = p.useState(null),
                r = p.useCallback((t) => !!t.isImage && t.name in eu && (e.current.set(t.name, t), !0), []);
            return {
                assetLoader: r,
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
        E = p.useRef(i);
    p.useEffect(() => {
        ((E.current = i), i ? I.current?.pause() : I.current?.play());
    }, [i]);
    let j = p.useCallback(() => {
            (v(), E.current && I.current?.pause());
        }, [v]),
        N = (function (e) {
            let { textureManager: t, referencedAssets: a, initialReferencedAssets: r } = e,
                i = p.useRef(new Map()),
                [n, s] = p.useState(r);
            return (
                p.useEffect(() => {
                    i.current = new Map(
                        Object.entries(r ?? {}).map((e) => {
                            let [t, { source: a }] = e;
                            return [t, a.uri];
                        }),
                    );
                }, [t, r]),
                p.useEffect(() => {
                    if (null == t) return;
                    let e = !1;
                    return (
                        (async () => {
                            (await (async function (e) {
                                let { textureManager: t, shownUrls: a, referencedAssets: r, isStale: i } = e,
                                    n = new Map();
                                if (
                                    (Object.entries(r).forEach((e) => {
                                        let [t, { source: r }] = e;
                                        a.get(t) !== r.uri && n.set(t, r.uri);
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
                                    !i())
                                ) {
                                    let e = new Map();
                                    (n.forEach((t, r) => {
                                        let i = s.get(t);
                                        null != i && (e.set(r, i), a.set(r, t));
                                    }),
                                        t.swap(e));
                                }
                                t.release(Array.from(s.values()));
                            })({ textureManager: t, shownUrls: i.current, referencedAssets: a, isStale: () => e }),
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
            let { visibleDataBinding: a, requestedDataBinding: r } = e,
                [i, n] = p.useState({}),
                s = (t = r.outfitID) > 0 ? ek[t - 1] : null,
                c = null != s ? r[s] : void 0,
                d = null == s || a?.[s] === c || i[s] === c,
                l = a ?? r;
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
                r = (0, x.bG)([q.Ay], () => q.Ay.useReducedMotion),
                i = t === S.s9.INTRODUCTION && !r,
                [n, s] = p.useState(+!i),
                [c, d] = p.useState(i);
            return (
                i !== c && (d(i), s(+!i)),
                p.useEffect(() => {
                    if (!i) return;
                    let e = Date.now() + 1800,
                        t = requestAnimationFrame(function a() {
                            let r = Math.max(Math.min(Date.now() - e, 1e3), 0);
                            (s((0, eF.easeOutCubic)(r, 0, 1, 1e3)), r >= 1e3 || (t = requestAnimationFrame(a)));
                        });
                    return () => cancelAnimationFrame(t);
                }, [i]),
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
        })({ stage: r, dataBinding: T }),
        M = p.useMemo(() => ({ ...O, mobileLift: 0, reducedMotion: u }), [O, u]);
    return (0, n.jsx)("div", {
        role: "img",
        "aria-label": (0, en.O)(o),
        className: m()(eZ.dw, { [eZ.RK]: null != b }),
        children: (0, n.jsx)(ei.W, {
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
    e5 = { delay: 0, duration: 0 },
    e6 = { delay: eJ.delay + eJ.duration, duration: 0 },
    e8 = e0.delay + 500;
var e9 = a(840527);
function e4(e) {
    let { stage: t, isCovered: a, className: r, children: i } = e,
        [s, c] = p.useState(a);
    !a && s && c(!1);
    let d = a && !s,
        { isMountDelayed: l } = (function (e) {
            let [t, a] = p.useState(e);
            return (
                !e && t && a(!1),
                p.useEffect(() => {
                    if (!t) return;
                    let e = setTimeout(() => a(!1), e8);
                    return () => clearTimeout(e);
                }, [t]),
                { isMountDelayed: t }
            );
        })(a),
        o = (0, ee.p0)({ value: t, shouldUpdate: !d }) ?? t,
        u = (0, ee.p0)({ value: i, shouldUpdate: !d });
    return (0, n.jsxs)(er, {
        visible: !a,
        enter: e5,
        exit: e6,
        keepMounted: !0,
        onExitComplete: () => c(!0),
        className: r,
        children: [
            (0, n.jsx)("div", { className: e9.q, children: !l && (0, n.jsx)(eQ, { stage: o, isHidden: s }) }),
            null != u && (0, n.jsx)("div", { className: e9.q, children: u }),
        ],
    });
}
function e7(e) {
    let { animatedSrc: t, staticSrc: a, className: r } = e,
        i = (0, x.bG)([q.Ay], () => q.Ay.useReducedMotion);
    return (0, n.jsx)("img", { src: i ? a : t, alt: "", className: r });
}
var te = a(740281),
    tt = a(766089),
    ta = a(767988);
let tr = { animatedSrc: tt.A, staticSrc: ta.A };
function ti(e) {
    let { activeRoute: t } = e,
        { animatedSrc: a, staticSrc: r } = (0, x.cf)(
            [h.A],
            () => {
                switch (t) {
                    case S.gr.SUMMARY:
                    case S.gr.SHARE:
                        let e = (0, I.o)(h.A.character),
                            { clydeLogoImage: a, clydeLogoStaticImage: r } = (0, I.j)(e);
                        return { animatedSrc: a, staticSrc: r };
                    default:
                        return tr;
                }
            },
            [t],
        );
    return (0, n.jsx)(e7, { animatedSrc: a, staticSrc: r, className: te.w });
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
    let { children: t, className: a, ...r } = e;
    return (0, n.jsx)(tc.E, { ...r, className: m()(tl.Q, a), color: "none", children: t });
}
function tu(e) {
    let { children: t, className: a, ...r } = e,
        i = ts();
    return (0, n.jsx)(td.D, { ...r, ref: i, className: m()(tl.Q, a), color: "none", children: t });
}
var th = a(271427);
function tf(e) {
    let { children: t, className: a, style: r } = e;
    return (0, n.jsx)(to, { tag: "span", variant: "mono-md/bold", className: m()(th.T, a), style: r, children: t });
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
    let { icon: t, value: a, topPercent: r, children: i } = e,
        s = ts(),
        c =
            null != r
                ? tp.intl.formatToPlainString(tb.default.USo6cU, { value: a, label: i, percent: r })
                : tp.intl.formatToPlainString(tb.default["+CCx/D"], { value: a, label: i });
    return (0, n.jsxs)("div", {
        ref: s,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, n.jsxs)("div", {
                className: tx.dJ,
                "aria-hidden": !0,
                children: [
                    null != r && (0, n.jsx)(tm, { percent: r }),
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
                                    (0, n.jsx)(to, { variant: "heading-xs/semibold", className: tx.QK, children: i }),
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
    let { customizationOption: t, earnedCount: a, totalCount: r } = e;
    return (0, n.jsx)(tc.E, {
        variant: "body-md/medium",
        color: "text-subtle",
        className: tA.k,
        children: tp.intl.format(tv[t], {
            earnedCount: a,
            totalCount: r,
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
        r = p.useRef(null);
    return (
        p.useEffect(() => {
            r.current = new Audio(e);
        }, [e]),
        p.useEffect(() => {
            null != r.current && ((r.current.muted = t), (r.current.volume = a));
        }, [t, a]),
        p.useCallback(() => {
            let e = r.current;
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
            isSelected: r,
            hideRarity: i,
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
        className: m()(tR.uK, { [tR.wH]: r, [tR.dv]: (0, E.C5)(t), [tR.xt]: b, [tR.Ns]: f === tC.eP.NITRO_LOCKED }),
        onMouseEnter: () => c(t),
        onFocus: function () {
            c(t);
        },
        children: [
            (0, n.jsx)(A.A, {
                children: (0, n.jsx)("input", {
                    type: "radio",
                    name: a,
                    checked: r,
                    disabled: d,
                    "aria-disabled": d ? void 0 : b,
                    onChange: function () {
                        d || b || s(l, o);
                    },
                    "aria-label": (0, E.v2)(t, { skipRarity: i, skipDescription: !1 }),
                }),
            }),
            null != _ && (0, n.jsx)("img", { src: _, alt: "", draggable: !1, className: tR.Sl }),
            !i && null != u && (0, n.jsx)(tO, { rarity: u }),
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
    let { customizationOption: t, traitOptions: a, selectedOption: r, onSelectOption: i, disabled: s = !1 } = e,
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
                (eq({ hoveredOption: void 0 }), o(), i(e, t));
            },
            [i, o],
        ),
        h = p.useCallback(
            (e) => {
                (l(), eq({ hoveredOption: e.optionId !== r?.optionId ? e : void 0, isDelayed: !0 }));
            },
            [l, r],
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
                        isSelected: e.optionId === r?.optionId,
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
    let { title: t, rarity: a, description: r } = e;
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
            null != r && (0, n.jsx)(tc.E, { variant: "body-md/medium", color: "text-subtle", children: r }),
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
        r = eV((e) => e.hoveredOption) ?? a;
    return null == r
        ? null
        : (0, n.jsx)(tq, { title: r.getName(), rarity: (0, E.Ux)(t) ? r.rarity : void 0, description: tY(r) });
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
    let { rarity: t, isSavedOption: a, visibleRarities: r, hasNitroSubscription: i } = e;
    return a
        ? tC.eP.UNLOCKED
        : null == t || r.has(t)
          ? t !== tS.K.NITRO || i
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
            selectedOptionId: r,
            savedOptionId: i,
            onSelectOption: n,
        } = (function (e) {
            let { customizationOption: t, onSelectOption: a } = e,
                r = E.hw[t],
                { selectedOptionId: i, savedOptionId: n } = (0, x.cf)([h.A], () => ({
                    selectedOptionId: t0(t, h.A.selectedCharacterTraits[r]),
                    savedOptionId: t0(t, h.A.character?.[r]),
                })),
                s = p.useCallback(
                    (e, t) => {
                        if (t === i) return;
                        let r = (0, U.$C)(e, t),
                            s = t$({
                                rarity: r,
                                isSavedOption: n === t,
                                visibleRarities: (0, U.mf)(e, h.A.stats),
                                hasNitroSubscription: (0, P.ki)(D.default.getCurrentUser()),
                            });
                        ((0, b.dw)(e, t, s, r), a(e, t));
                    },
                    [a, n, i],
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
                })(t, i),
                selectedOptionId: i,
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
            let { customizationOption: t, savedOptionId: a, rarityOrder: r, optionIds: i } = e,
                n = (0, x.bG)([h.A], () => h.A.stats),
                s = (0, x.bG)([D.default], () => (0, P.ki)(D.default.getCurrentUser())),
                c = p.useMemo(() => (0, E.p8)(r), [r]);
            return p.useMemo(() => {
                let e = E.hw[t],
                    r = t === E.v7.OUTFIT_COLOR ? tJ.x : tJ.$[e],
                    d = (0, U.mf)(e, n),
                    l = [],
                    o = 0,
                    u = 0;
                for (let t of i ?? U.Rk[e]) {
                    let i = (0, U.$C)(e, t),
                        n = t$({ rarity: i, isSavedOption: a === t, visibleRarities: d, hasNitroSubscription: s }),
                        c = n === tC.eP.UNLOCKED && (i !== tS.K.NITRO || s);
                    (null != i && o++,
                        null != i && c && u++,
                        l.push({
                            trait: e,
                            optionId: t,
                            asset: U.qM[e][t]?.thumbnail,
                            rarity: i,
                            status: n,
                            getName: () => {
                                let e = r[t];
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
            }, [t, s, i, c, a, n]);
        })({ customizationOption: t, savedOptionId: i, rarityOrder: B.FG, optionIds: a }),
        o = p.useMemo(
            () =>
                c.find((e) => {
                    let { optionId: t } = e;
                    return t === r;
                }) ?? c[0],
            [r, c],
        );
    return (
        !(function (e) {
            let { availableTraitOptions: t, selectedOptionId: a, onSelectOption: r, isPaused: i = !1 } = e,
                n = t[0],
                s = t.some((e) => e.optionId === a);
            p.useEffect(() => {
                i || null == n || s || r(n.trait, n.optionId);
            }, [n, s, r, i]);
        })({ availableTraitOptions: c, selectedOptionId: r, onSelectOption: u.IB }),
        { traitOptions: s, selectedOption: o, totalCount: d, earnedCount: l, onSelectOption: n }
    );
}
function t2(e) {
    let { customizationOption: t } = e,
        {
            traitOptions: a,
            selectedOption: r,
            totalCount: i,
            earnedCount: s,
            onSelectOption: c,
        } = t1({ customizationOption: t });
    return (0, n.jsxs)(tQ, {
        details: (0, n.jsx)(tX, { customizationOption: t, selectedOption: r }),
        children: [
            (0, n.jsx)(tw, { customizationOption: t, earnedCount: s, totalCount: i }),
            (0, n.jsx)(tG, { customizationOption: t, traitOptions: a, selectedOption: r, onSelectOption: c }),
        ],
    });
}
var t3 = a(71678);
function t5(e) {
    let { children: t, className: a } = e;
    return (0, n.jsx)("div", { className: m()(t3.n, a), children: t });
}
function t6() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.emojis);
    return (0, n.jsxs)(t5, {
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
var t8 = a(937383);
function t9(e) {
    var t;
    let a,
        r,
        { selectedOption: i } = e,
        s = eV((e) => e.hoveredOption) ?? i;
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
                              null != (r = null != (a = (0, U.FA)(t)) ? tJ.$[k.V.OUTFIT][a] : void 0)
                                  ? tp.intl.string(r)
                                  : ""),
                          ],
                      }),
                  ],
              }),
              description: tY(s),
          });
}
function t4(e) {
    let { disabled: t } = e,
        { traitOptions: a, selectedOption: r, onSelectOption: i } = t1({ customizationOption: E.v7.OUTFIT_COLOR });
    return (0, n.jsx)(tQ, {
        details: (0, n.jsx)(t9, { selectedOption: r }),
        children: (0, n.jsx)(tG, {
            customizationOption: E.v7.OUTFIT_COLOR,
            traitOptions: a,
            selectedOption: r,
            onSelectOption: i,
            disabled: t,
        }),
    });
}
function t7() {
    return (0, n.jsx)(tQ, {
        children: (0, n.jsx)(tq, {
            title: tp.intl.string(tb.default.zsYYN1),
            description: tp.intl.string(tb.default.BkuqWx),
        }),
    });
}
function ae(e) {
    let { lastColorwayIdByOutfitId: t, disabled: a } = e,
        { traitOptions: r, selectedOption: i, onSelectOption: s } = t1({ customizationOption: E.v7.OUTFIT }),
        c = p.useMemo(() => {
            let e = [];
            return (
                r.forEach((a) => {
                    let r = t.get(a.optionId);
                    e.push({
                        trait: a.trait,
                        optionId: a.optionId,
                        asset: U.qM[k.V.OUTFIT][r ?? a.optionId]?.thumbnail,
                        rarity: a.rarity,
                        status: a.status,
                        getName: a.getName,
                    });
                }),
                e
            );
        }, [t, r]);
    return (0, n.jsx)(tQ, {
        details: (0, n.jsx)(tX, { customizationOption: E.v7.OUTFIT, selectedOption: i }),
        children: (0, n.jsx)(tG, {
            customizationOption: E.v7.OUTFIT,
            traitOptions: c,
            selectedOption: i,
            onSelectOption: function (e, a) {
                s(e, t.get(a) ?? a);
            },
            disabled: a,
        }),
    });
}
function at(e) {
    let { customizationOption: t, disabled: a } = e,
        { traitOptions: r, selectedOption: i, onSelectOption: s } = t1({ customizationOption: t });
    return (0, n.jsx)(tQ, {
        details: (0, n.jsx)(tX, { customizationOption: t, selectedOption: i }),
        children: (0, n.jsx)(tG, {
            customizationOption: t,
            traitOptions: r,
            selectedOption: i,
            onSelectOption: s,
            disabled: a,
        }),
    });
}
function aa(e) {
    let { customizationOption: t, lastColorwayIdByOutfitId: a, disabled: r } = e;
    switch (t) {
        case E.v7.OUTFIT:
            return (0, n.jsx)(ae, { lastColorwayIdByOutfitId: a, disabled: r });
        case E.v7.OUTFIT_COLOR:
            return (0, n.jsx)(t4, { disabled: r });
        default:
            return (0, n.jsx)(at, { customizationOption: t, disabled: r });
    }
}
function ar(e) {
    let { id: t, customizationOption: a, disabled: r } = e,
        i = (function () {
            let e = (0, x.bG)([h.A], () => h.A.selectedCharacterTraits[k.V.OUTFIT]),
                [t, a] = p.useState(new Map()),
                r = null != e ? (0, U.FA)(e) : void 0;
            return (null != e && null != r && t.get(r) !== e && a(new Map(t).set(r, e)), t);
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
        className: t8.n,
        children: s
            ? (0, n.jsx)(t7, {})
            : (0, n.jsx)(aa, { customizationOption: a, lastColorwayIdByOutfitId: i, disabled: r }),
    });
}
var ai = a(265872),
    an = a(320448),
    as = a(315710),
    ac = a(444927);
let ad = { width: 180, height: 240 },
    al = { width: 220, height: 293 };
function ao(e, t) {
    let { width: a, height: r } = e;
    return {
        "--custom-checkpoint-game-art-width": t,
        "--custom-checkpoint-game-art-height": `calc(var(--custom-checkpoint-game-art-width) * ${r} / ${a})`,
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
            activeCustomizationOption: r,
            returnRef: i,
            onSelectOption: s,
            onClose: c,
            focusMenu: d,
            onMouseEnter: l,
            onMouseLeave: o,
        } = e,
        u = p.useRef([]),
        h = (0, ac.A)(() => Math.max(a.indexOf(r), 0)),
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
                        (c(), i.current?.focus());
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
                        "aria-checked": e === r,
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
            activeCustomizationOption: r,
            onSelectOption: i,
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
            let { activeCustomizationOption: t, onSelectOption: a, blockedTrait: r, disabled: i } = e,
                n = p.useRef(null),
                s = p.useRef(null),
                c = am.includes(t),
                [d, l] = p.useState(c ? t : null);
            c && d !== t && l(t);
            let o = i || null != r,
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
                    null != r ? V(r) : i || (x(), h(!0), b(!0));
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
        })({ activeCustomizationOption: r, onSelectOption: i, blockedTrait: d, disabled: l }),
        S = h ? "more" : r,
        { tabListRef: N, focusAdjacentTab: T } =
            ((t = [...ag, "more"]),
            {
                tabListRef: (a = p.useRef(null)),
                focusAdjacentTab: function (e, r) {
                    let i = (function (e, t, a) {
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
                    })(t.indexOf(e), t.length, r);
                    return (a.current?.querySelectorAll('[role="tab"]')[i]?.focus(), t[i]);
                },
            }),
        C = p.useId(),
        R = null != d ? C : void 0,
        O = null != f ? (0, E.cq)(f) : null;
    function M(e) {
        null != d ? V(d) : l || (i(e), g());
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
            (0, n.jsx)(ai.Y, {
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
                        activeCustomizationOption: r,
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
        [a, r] = p.useState(E.v7.BASE),
        i = F().find((e) => e === E.hw[a]),
        s = (0, x.bG)([h.A], () => h.A.isSaving),
        c = ts();
    return (0, n.jsxs)(t5, {
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
                        onSelectOption: r,
                        blockedTrait: i,
                        disabled: s,
                    }),
                    (0, n.jsx)(ar, { id: t, customizationOption: a, disabled: s }),
                ],
            }),
        ],
    });
}
var aI = a(81466);
function aE() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.games);
    return (0, n.jsxs)(t5, {
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
    return (0, n.jsxs)(t5, {
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
    return (0, n.jsxs)(t5, {
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
    return (0, n.jsxs)(t5, {
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
    return (0, n.jsxs)(t5, {
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
            return (0, n.jsx)(t6, {});
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
        r = p.useRef(null),
        [i, s] = p.useState(!1),
        [c, d] = p.useState(!1),
        [l, o] = p.useState(!1),
        [f, b] = p.useState(!1),
        _ = p.useRef(null),
        m = p.useRef(!1),
        g = t ? 0 : Math.round(100 * e),
        A = !f && (i || c || l),
        v = 0 === g ? ak.VoiceXIcon : g > 50 ? aD.VoiceNormalIcon : aP.VoiceLowIcon;
    (p.useLayoutEffect(() => {
        null != r.current && (r.current.volume = e);
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
                ref: r,
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
        if (!a) return (window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r));
        function r(a) {
            (0, aZ.vq)(a.target, HTMLTextAreaElement) ||
                (0, aZ.vq)(a.target, HTMLInputElement) ||
                (a.key === e && t(a));
        }
    }, [e, t, a]);
}
var aJ = a(652215),
    a$ = a(650583);
function a0(e) {
    let { source: t, onClick: a, disabled: r = !1 } = e,
        i = tj(t),
        n = p.useRef(!1);
    function s() {
        r || i();
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
    let { "aria-label": t, "aria-describedby": a, icon: r, onClick: i, disabled: s = !1 } = e,
        {
            playSound: c,
            onPointerDown: d,
            onKeyDown: l,
            onClickWithSound: o,
        } = a0({ source: aK, onClick: i, disabled: s });
    return (
        aQ(
            "ArrowLeft",
            function (e) {
                (e.repeat || c(), i());
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
            children: (0, n.jsx)(r, { color: "currentColor" }),
        })
    );
}
function a3(e) {
    let {
            "aria-label": t,
            "aria-describedby": a,
            children: r,
            onClick: i,
            size: s,
            className: c,
            disabled: d = !1,
        } = e,
        {
            playSound: l,
            onPointerDown: o,
            onKeyDown: u,
            onClickWithSound: h,
        } = a0({ source: aB, onClick: i, disabled: d });
    return (
        aQ(
            "ArrowRight",
            function (e) {
                (e.repeat || l(), i());
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
            children: r,
        })
    );
}
function a5(e) {
    let { "aria-describedby": t, onClick: a, disabled: r } = e;
    return (0, n.jsx)(a2, {
        "aria-label": tp.intl.string(tp.t["13/7kX"]),
        "aria-describedby": t,
        icon: az.ArrowSmallLeftIcon,
        onClick: a,
        disabled: r,
    });
}
function a6(e) {
    let { onClick: t } = e,
        { onPointerDown: a, onKeyDown: r, onClickWithSound: i } = a0({ source: aB, onClick: t });
    return (0, n.jsx)(aV.m, {
        text: tp.intl.string(tb.default.cWdGf9),
        ariaHidden: !0,
        children: (0, n.jsx)(J, {
            onPointerDown: a,
            onKeyDown: r,
            onClick: i,
            size: "md",
            className: m()(a1.A4, a1.eZ),
            "aria-label": tp.intl.string(tb.default.cWdGf9),
            children: (0, n.jsx)(aW.RetryIcon, { color: "currentColor" }),
        }),
    });
}
function a8(e) {
    let { "aria-describedby": t, onClick: a, disabled: r } = e;
    return (0, n.jsx)(a3, {
        size: "md",
        "aria-label": tp.intl.string(tp.t.PDTjLN),
        "aria-describedby": t,
        onClick: a,
        disabled: r,
        children: (0, n.jsx)(aq.ArrowSmallRightIcon, { color: "currentColor" }),
    });
}
function a9(e) {
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
function a4(e) {
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
function a7(e) {
    let { onBack: t, isRouteBlocked: a, blockedTraitDescriptionId: r } = e,
        i = (0, x.bG)([h.A], () => h.A.isSaving);
    return (0, n.jsx)(a5, {
        "aria-describedby": r,
        onClick: function () {
            i || t();
        },
        disabled: i || a,
    });
}
function re(e) {
    let { onNext: t, navigate: a, isRouteBlocked: r, blockedTraitDescriptionId: i } = e,
        c = (0, x.bG)([h.A], () => h.A.isSaving),
        d = c || r;
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
            "aria-describedby": i,
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
function rt(e) {
    let { activeRoute: t, blockedTrait: a, blockedTraitDescriptionId: r, onBack: i, onNext: s, onReplay: c } = e,
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
                    (0, n.jsx)(a7, { onBack: () => o(i), isRouteBlocked: d, blockedTraitDescriptionId: r }),
                    (0, n.jsx)(re, { onNext: s, navigate: o, isRouteBlocked: d, blockedTraitDescriptionId: r }),
                ],
            });
        case S.gr.SUMMARY:
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(a5, { onClick: () => l(i) }),
                    (0, n.jsx)(a6, { onClick: () => l(c) }),
                    (0, n.jsx)(a4, { onClick: () => l(s) }),
                ],
            });
        case S.gr.SHARE:
            return (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(a5, { onClick: () => l(i) }), (0, n.jsx)(a9, { onClick: () => l(s) })],
            });
        default:
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(a5, { "aria-describedby": r, onClick: () => o(i), disabled: d }),
                    (0, n.jsx)(a8, { "aria-describedby": r, onClick: () => o(s), disabled: d }),
                ],
            });
    }
}
function ra(e) {
    let { className: t } = e;
    return (0, n.jsx)(e7, {
        animatedSrc:
            "https://cdn.discordapp.com/assets/content/02e9ae4cdbec0b2adef22c9a5659f5c7340e399cc8932e8af6d41e62a37644ae.png",
        staticSrc:
            "https://cdn.discordapp.com/assets/content/f08be0abd0d224b5f7e1e5d6c1ef8e4d24cddcb712e2c624dcc6ea3d136818d5.png",
        className: t,
    });
}
var rr = a(771639);
let ri = { "--custom-checkpoint-screen-vertical-inset": "88px" };
function rn(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: rr.n, style: ri, children: t });
}
var rs = a(639331);
let rc = {
    "--custom-checkpoint-intro-fade-in-delay": "1800ms",
    "--custom-checkpoint-intro-fade-in-duration": "1000ms",
};
function rd() {
    let e = (0, x.bG)([h.A], () => h.A.fetchState !== h.T.SUCCESS || null != h.A.stats),
        t = ts();
    return (0, n.jsx)(rn, {
        children: (0, n.jsxs)("div", {
            className: rs.Qs,
            style: rc,
            children: [
                (0, n.jsxs)("div", {
                    ref: t,
                    className: rs.Ok,
                    role: "heading",
                    "aria-level": 2,
                    children: ["2026", !e && (0, n.jsx)(ra, { className: rs.gi })],
                }),
                (0, n.jsxs)("div", {
                    className: rs.eH,
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
var rl = a(675970),
    ro = a(559106),
    ru = a(366056),
    rh = a(292801),
    rf = a(155718),
    rb = a(294454),
    rp = a(489414),
    r_ = a(878358),
    rm = a(383233),
    rx = a(819648),
    rg = a(677059);
function rA(e) {
    let { children: t } = e;
    return (0, n.jsx)(to, { variant: "heading-xxl/medium", className: rg.h, children: t });
}
function rv(e) {
    let { accessibilityLabel: t, className: a, children: r, ref: i } = e;
    return (0, n.jsxs)("div", {
        ref: i,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, n.jsx)("div", { className: a, "aria-hidden": !0, children: r }),
            (0, n.jsx)(A.A, { children: t }),
        ],
    });
}
var rw = a(100391);
function rI(e) {
    let { icon: t, children: a } = e;
    return (0, n.jsxs)("div", {
        className: rw.D,
        children: [
            (0, n.jsx)(t, { size: "md", color: "currentColor" }),
            (0, n.jsx)(to, { variant: "heading-lg/semibold", className: rw.Q, children: a }),
        ],
    });
}
function rE(e) {
    let { icon: t, children: a } = e;
    return (0, n.jsxs)("div", {
        className: rw.D,
        children: [
            (0, n.jsx)(t, { size: "md", color: "currentColor" }),
            (0, n.jsx)(tu, { variant: "heading-lg/semibold", className: rw.Q, children: a }),
        ],
    });
}
var rj = a(456410);
function rS(e) {
    let { name: t, label: a, checked: r, onSelect: i, children: s } = e;
    return (0, n.jsx)(ro.vN, {
        within: !0,
        children: (0, n.jsxs)("label", {
            className: m()(rj.uK, { [rj.KD]: r }),
            children: [
                (0, n.jsx)(A.A, {
                    children: (0, n.jsx)("input", { type: "radio", name: t, checked: r, onChange: i, "aria-label": a }),
                }),
                r ? (0, n.jsx)("div", { className: rj.Gt, "aria-hidden": !0 }) : null,
                (0, n.jsx)("div", { className: rj.Nr, "aria-hidden": !0, children: s }),
            ],
        }),
    });
}
function rN() {
    let e = (0, x.bG)([h.A], () => h.A.character),
        t = (0, x.bG)([h.A], () => h.A.stats),
        a = p.useId(),
        r = ts(),
        i = p.useMemo(() => {
            var a, r;
            return ((a = e),
            (r = t),
            null != a && null != r
                ? [rl.Q.CHARACTER_ONLY, rl.Q.DEFAULT, rl.Q.STATS_ONLY]
                : null != a
                  ? [rl.Q.CHARACTER_ONLY]
                  : null != r
                    ? [rl.Q.STATS_ONLY]
                    : []).map((a) => ({ cardType: a, checkpointData: (0, rx.Go)(a, e, t) }));
        }, [e, t]),
        [c, d] = p.useState(
            () =>
                (
                    i.find((e) => {
                        let { cardType: t } = e;
                        return t === rl.Q.DEFAULT;
                    }) ?? i.at(0)
                )?.cardType,
        ),
        l = i.find((e) => {
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
                (0, rb.fO)({
                    message: new rm.Ay({
                        content: "",
                        components: [{ type: rf.I5.CHECKPOINT_CARD, id: (0, rp.X1)("0"), checkpointData: t }],
                    }),
                    source: "checkpoint",
                    customSendHandler: async (t, a, r) => {
                        let { withMessage: i } = a;
                        r(!0);
                        try {
                            (await (0, u.jA)(t, i ?? "", e),
                                (0, b.Pe)(e),
                                (0, rb.Be)(),
                                (0, s.P0)({ text: tp.intl.string(tp.t.kwmYkt), variant: "success" }));
                        } catch {
                            (0, s.P0)({ text: tp.intl.string(tp.t.iufib1), variant: "critical" });
                        } finally {
                            r(!1);
                        }
                    },
                });
            },
        });
    return null == l
        ? null
        : (0, n.jsx)(rn, {
              children: (0, n.jsxs)("div", {
                  className: rj.uM,
                  children: [
                      (0, n.jsxs)("div", {
                          className: rj.wx,
                          children: [
                              (0, n.jsxs)(rv, {
                                  ref: r,
                                  className: rj.R_,
                                  accessibilityLabel: tp.intl.string(tb.default.P5zyko),
                                  children: [
                                      (0, n.jsx)(rI, {
                                          icon: ru.ExperimentalCheckpointIcon,
                                          children: tp.intl.string(aT.default.ir6nEQ),
                                      }),
                                      (0, n.jsx)(to, {
                                          variant: "display-lg",
                                          className: rj.Vy,
                                          children: tp.intl.string(tp.t.RDE0Sc),
                                      }),
                                  ],
                              }),
                              (0, n.jsx)("div", {
                                  className: rj.h_,
                                  children: (0, n.jsx)(rA, { children: tp.intl.string(tb.default.KXDPot) }),
                              }),
                          ],
                      }),
                      (0, n.jsx)("div", {
                          role: "radiogroup",
                          "aria-label": tp.intl.string(tb.default.KXDPot),
                          className: rj.kR,
                          children: i.map((e) => {
                              let { cardType: t, checkpointData: r } = e;
                              return (0, n.jsx)(
                                  rS,
                                  {
                                      name: a,
                                      label: (function (e) {
                                          switch (e) {
                                              case rl.Q.CHARACTER_ONLY:
                                                  return tp.intl.string(tb.default.tUU3fe);
                                              case rl.Q.DEFAULT:
                                                  return tp.intl.string(tb.default.DZQzJn);
                                              case rl.Q.STATS_ONLY:
                                                  return tp.intl.string(tb.default.e2UHGT);
                                          }
                                      })(t),
                                      checked: t === l.cardType,
                                      onSelect: () => {
                                          (o(), d(t));
                                      },
                                      children: (0, n.jsx)(r_.A, { checkpointData: r }),
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
                          className: rj.sY,
                          "aria-label": tp.intl.string(tp.t.I3ltXO),
                          children: [
                              (0, n.jsx)(tc.E, {
                                  variant: "mono-md/bold",
                                  color: "none",
                                  className: rj.RC,
                                  children: tp.intl.string(tp.t.I3ltXO),
                              }),
                              (0, n.jsx)(rh.ArrowAngleRightUpIcon, { size: "refresh_sm", color: "currentColor" }),
                          ],
                      }),
                  ],
              }),
          });
}
var rT = a(206701),
    rC = a(782134),
    rR = a(998304),
    rO = a(975571),
    rM = a(427262),
    ry = a(438389);
let rL = (0, rR.j5)(B.Kr);
function rk(e) {
    let { onStart: t } = e,
        a = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        r = (0, rM.tx)(a),
        i = (0, x.bG)([q.Ay], () => q.Ay.useReducedMotion),
        { playSound: s, onPointerDown: c, onKeyDown: d, onClickWithSound: l } = a0({ source: aB, onClick: t });
    return (
        aQ("ArrowRight", function (e) {
            (e.repeat || s(), t());
        }),
        (0, n.jsxs)(rn, {
            children: [
                (0, n.jsxs)("div", {
                    className: ry.Qs,
                    children: [
                        (0, n.jsxs)("div", {
                            className: ry.wx,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: ry.Qq,
                                    children: [
                                        (0, n.jsx)(tu, {
                                            variant: "display-lg",
                                            className: ry.DD,
                                            children: tp.intl.string(aT.default["CdU/PF"]),
                                        }),
                                        (0, n.jsx)(to, {
                                            variant: "heading-xxl/medium",
                                            children: tp.intl.formatToPlainString(tb.default.xhZ23b, { username: r }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", {
                                    className: ry.CB,
                                    children: (0, n.jsx)(rT.U, {
                                        artboard: "Entry",
                                        className: ry.lW,
                                        fit: "contain",
                                        withReducedMotion: "short-loop",
                                        dataBinding: { iconColor: rL, reducedMotion: i },
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)($, {
                            onPointerDown: c,
                            onKeyDown: d,
                            onClick: l,
                            size: "custom",
                            className: ry.ni,
                            "aria-label": tp.intl.string(tp.t.I0v0Qv),
                            children: [
                                (0, n.jsx)(rC.PlayIcon, { size: "refresh_sm", color: "currentColor" }),
                                (0, n.jsx)(to, {
                                    variant: "mono-md/normal",
                                    className: ry.qK,
                                    children: tp.intl.string(tp.t.I0v0Qv),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: ry.qr,
                    children: [
                        (0, n.jsx)(to, {
                            variant: "body-sm/medium",
                            className: ry.ed,
                            children: tp.intl.format(tb.default.hcNhyq, {
                                learnMoreHook: (e, t) =>
                                    (0, n.jsx)(
                                        tH.Anchor,
                                        {
                                            className: ry.nf,
                                            href: rO.A.getArticleURL(aJ.MVz.CHECKPOINT),
                                            useDefaultUnderlineStyles: !1,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, n.jsx)(to, {
                            variant: "body-md/medium",
                            className: ry.al,
                            children: tp.intl.format(aT.default.g476ZL, { name: "Exyl" }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var rD = a(565645),
    rP = a(141881);
function rU(e) {
    let { children: t } = e;
    return (0, n.jsx)(tf, { className: rP.l, children: t });
}
var rF = a(765671),
    rG = a(663385),
    rH = a(469228),
    rK = a(406956);
let rB = (0, rR.j5)(B.Kr);
function rz(e) {
    let { value: t, alignment: a = "left", className: r } = e,
        i = (0, x.bG)([q.Ay], () => q.Ay.useReducedMotion),
        [s, c] = p.useState(0),
        { isLoaded: d, onLoad: l } = (function () {
            let [e, t] = p.useState(!1);
            return { isLoaded: e, onLoad: p.useCallback(() => t(!0), []) };
        })(),
        o = i ? t : s;
    p.useEffect(() => {
        if (i || !d) return;
        let e = performance.now(),
            a = requestAnimationFrame(function r(i) {
                let n = Math.min((i - e) / 500, 1);
                (c(Math.round(t * n)), n < 1 && (a = requestAnimationFrame(r)));
            });
        return () => cancelAnimationFrame(a);
    }, [t, i, d]);
    let u = "center" === a ? rG.m : rH.w;
    return (0, n.jsxs)("div", {
        className: m()(rK.lY, r),
        children: [
            (0, n.jsx)("div", { className: rK.VL, children: t }),
            (0, n.jsx)(u, {
                className: rK.lW,
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: o, TextColor: rB },
                onLoad: l,
            }),
            (0, n.jsx)(A.A, { children: t.toLocaleString(tp.intl.currentLocale) }),
        ],
    });
}
var rV = a(434911);
function rW(e) {
    let { value: t } = e,
        { ref: a, width: r } = (0, rF.Ay)(),
        { ref: i, width: s } = (0, rF.Ay)(),
        c = null != r && null != s ? Math.min(1, r / s) : 1;
    return (0, n.jsxs)("div", {
        ref: a,
        className: rV.ai,
        style: { height: 200 * c },
        children: [
            (0, n.jsx)("span", { ref: i, className: m()(rV.Qq, rV.xP), children: t }),
            (0, n.jsx)(rz, { value: t }),
        ],
    });
}
function rq(e) {
    let { value: t } = e;
    return (0, n.jsxs)("div", {
        className: rV.dJ,
        children: [
            "number" == typeof t
                ? (0, n.jsx)(rW, { value: t })
                : (0, n.jsx)(to, { variant: "heading-xxl/medium", className: rV.Qq, children: t }),
            (0, n.jsx)(ra, { className: rV.gi }),
        ],
    });
}
var rY = a(445199),
    rX = a(205524),
    rZ = a(690521),
    rQ = a(152321);
let rJ = [0, 0, 2],
    r$ = [0, 1, 0],
    r0 = [0, 0, 0],
    r1 = `
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
    r2 = `
precision mediump float;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

uniform sampler2D u_texture;

void main() {
  highp vec4 texelColor = texture2D(u_texture, v_texcoord);
  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);
}
`,
    r3 = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    r5 = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    r6 = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];
function r8(e) {
    let t,
        { emoji: a } = e,
        [r, i] = p.useState(null),
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
                i = r?.getContext("webgl");
            if (null == i || null == r || null == s) return;
            t.current = i;
            let n = i.createShader(i.VERTEX_SHADER),
                c = i.createShader(i.FRAGMENT_SHADER);
            if (null == n || null == c) return;
            if (
                (i.shaderSource(n, r1),
                i.shaderSource(c, r2),
                i.compileShader(n),
                !i.getShaderParameter(n, i.COMPILE_STATUS))
            )
                return void console.error("ERROR compiling vertex shader!", i.getShaderInfoLog(n));
            if ((i.compileShader(c), !i.getShaderParameter(c, i.COMPILE_STATUS)))
                return void console.error("ERROR compiling fragment shader!", i.getShaderInfoLog(c));
            let d = i.createProgram();
            if (
                (i.attachShader(d, n), i.attachShader(d, c), i.linkProgram(d), !i.getProgramParameter(d, i.LINK_STATUS))
            )
                return void console.error("ERROR linking program!", i.getProgramInfoLog(d));
            if ((i.validateProgram(d), !i.getProgramParameter(d, i.VALIDATE_STATUS)))
                return void console.error("ERROR validating program!", i.getProgramInfoLog(d));
            let l = i.getAttribLocation(d, "a_position"),
                o = i.getAttribLocation(d, "a_texcoord"),
                u = i.getUniformLocation(d, "u_matrix"),
                h = i.getUniformLocation(d, "u_texture"),
                f = i.getAttribLocation(d, "a_vertexNormal"),
                b = i.getUniformLocation(d, "u_normalMatrix"),
                p = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, p),
                i.bufferData(i.ARRAY_BUFFER, new Float32Array(r6), i.STATIC_DRAW),
                i.vertexAttribPointer(f, 3, i.FLOAT, !1, 0, 0),
                i.enableVertexAttribArray(f));
            let m = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, m),
                (e = new Float32Array(r3)),
                i.bufferData(i.ARRAY_BUFFER, e, i.STATIC_DRAW));
            let x = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, x), i.bufferData(i.ARRAY_BUFFER, new Float32Array(r5), i.STATIC_DRAW));
            let A = rY.DF(60);
            return (
                (a = requestAnimationFrame(function e() {
                    if (null == i || null == r) return;
                    (i.viewport(0, 0, i.canvas.width, i.canvas.height), i.enable(i.CULL_FACE), i.enable(i.DEPTH_TEST));
                    let t = rY.DF(_.current),
                        n = rY.DF(g.current);
                    (i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT),
                        i.useProgram(d),
                        i.enableVertexAttribArray(l),
                        i.bindBuffer(i.ARRAY_BUFFER, m),
                        i.vertexAttribPointer(l, 3, i.FLOAT, !1, 0, 0),
                        i.enableVertexAttribArray(o),
                        i.bindBuffer(i.ARRAY_BUFFER, x),
                        i.vertexAttribPointer(o, 2, i.FLOAT, !1, 0, 0));
                    let s = r.clientWidth / r.clientHeight,
                        c = rX.fN(rX.vt(), A, s, 1, 2e3),
                        f = rX.t5(rX.vt(), rJ, r0, r$),
                        p = rX.lw(rX.vt(), c, f),
                        v = rX.vt();
                    (rX.eL(v, v, t), rX.Z8(v, v, n));
                    let w = rX.lw(rX.vt(), p, v),
                        I = rX.vt();
                    (rX.B8(I, v),
                        rX.mg(I, I),
                        i.uniformMatrix4fv(b, !1, I),
                        i.uniformMatrix4fv(u, !1, w),
                        i.uniform1i(h, 0),
                        i.drawArrays(i.TRIANGLES, 0, 36),
                        (a = requestAnimationFrame(e)));
                })),
                () => cancelAnimationFrame(a)
            );
        }, [_, g, r, s]));
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
            ((d.current.crossOrigin = "anonymous"), (d.current.src = (0, rZ.Ez)(a, 256)), (d.current.onload = T));
    }, [a, T, d, s]),
        p.useEffect(
            () => (
                !(function e(t) {
                    let a = 0.001 * t,
                        r = Math.min(a - b.current, 0.1);
                    if (((g.current += -E.current * r), (_.current += -I.current * r), !j.current)) {
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
                    className: m()(rQ.Ji, { [rQ.q4]: !u }),
                    ref: i,
                    height: 512,
                    width: 512,
                    onMouseDown: C,
                }),
                (0, n.jsx)("canvas", { className: rQ.R, ref: c, height: 256, width: 256 }),
            ],
        })
    );
}
var r9 = a(826820);
let r4 = [];
function r7(e) {
    let { emojiStats: t } = e,
        a = Math.round(t?.numEmojisSent ?? 0),
        r = (0, K.bD)(t?.numEmojisSentPercentile);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: r9.dJ,
                children: [
                    (0, n.jsx)(rE, {
                        icon: tn.EmojiSlightlySmilingFaceIcon,
                        children: tp.intl.string(tb.default.ZTDCIv),
                    }),
                    (0, n.jsx)(rz, { value: a }),
                ],
            }),
            (0, n.jsx)(rA, {
                children:
                    null != r
                        ? tp.intl.format(tb.default.o7vDrk, {
                              percent: r,
                              percentHook: (e, t) => (0, n.jsx)(rU, { children: e }, t),
                          })
                        : tp.intl.format(tb.default.NFptic, { numEmojis: a }),
            }),
        ],
    });
}
function ie(e) {
    let { numEmojisSent: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: r9.dJ,
                children: [
                    (0, n.jsx)(rE, {
                        icon: tn.EmojiSlightlySmilingFaceIcon,
                        children: tp.intl.string(tb.default.ZTDCIv),
                    }),
                    (0, n.jsx)(rq, { value: t }),
                ],
            }),
            (0, n.jsx)(rA, { children: tp.intl.format(tb.default["660/Rr"], { numEmojis: (0, K.wj)(t) }) }),
        ],
    });
}
function it() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.emojis),
        t = (0, x.bG)([h.A], () => (0, K.y7)(h.A.stats)),
        a = (0, x.bG)([h.A], () => h.A.globalStats?.emojis),
        r = !t && null != a,
        i = (r ? a.emojis : e?.emojis) ?? r4,
        [s, c] = p.useState(0),
        d = i[s],
        l = tj(tI);
    return (0, n.jsx)(rn, {
        children: (0, n.jsxs)("div", {
            className: r9.kL,
            children: [
                (0, n.jsx)("div", { className: r9.KY, children: null != d && (0, n.jsx)(r8, { emoji: d }) }),
                (0, n.jsxs)("div", {
                    className: r9.C,
                    children: [
                        r ? (0, n.jsx)(ie, { numEmojisSent: a.numEmojisSent }) : (0, n.jsx)(r7, { emojiStats: e }),
                        (0, n.jsx)("div", {
                            className: r9.gm,
                            children: i.map((e, t) =>
                                (0, n.jsx)(
                                    ia,
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
function ia(e) {
    let { emoji: t, rank: a, isActive: r, onClick: i } = e,
        s = !(0, x.bG)([q.Ay], () => q.Ay.useReducedMotion) && !0 === t.animated;
    return (0, n.jsxs)(J, {
        size: "custom",
        className: r9._X,
        onClick: i,
        "aria-label": tp.intl.formatToPlainString(tb.default["S5+pRg"], { emojiName: t.name, rank: a }),
        "aria-pressed": r,
        children: [
            (0, n.jsx)(rD.A, { className: r9.Zg, emojiId: t.id, emojiName: t.name, animated: s }),
            (0, n.jsx)(to, { variant: "mono-md/bold", className: r9.Tm, children: a }),
        ],
    });
}
var ir = a(360450),
    ii = a(214947),
    is = a(939249),
    ic = a(597770),
    id = a(559647),
    il = a(95369),
    io = a(570287),
    iu = a(486020),
    ih =
        (((i = {})[(i.START = 0)] = "START"),
        (i[(i.INTRO = 1)] = "INTRO"),
        (i[(i.TRANSITION = 2)] = "TRANSITION"),
        (i[(i.BEST = 3)] = "BEST"),
        (i[(i.LEAVE = 4)] = "LEAVE"),
        (i[(i.END = 5)] = "END"),
        i),
    ib = a(801305);
let ip = [],
    i_ = (0, rR.j5)(B.Kr),
    im = { r: 0, g: 0, b: 0, a: 1 },
    ix = {
        "Avatar01/Stroke": im,
        "Avatar01/Fill": i_,
        "Avatar02/Stroke": im,
        "Avatar02/Fill": i_,
        "Avatar03/Stroke": im,
        "Avatar03/Fill": i_,
        "Avatar04/Stroke": im,
        "Avatar04/Fill": i_,
        "Avatar05/Stroke": im,
        "Avatar05/Fill": i_,
        ConnectorColor: i_,
    };
function ig(e) {
    return null != e ? iu.Ay.getUserAvatarURL(e, !1, 160, "png") : void 0;
}
function iA(e) {
    let t,
        { route: a, onNextStep: r, onPreviousStep: i } = e,
        s = (0, x.bG)([h.A], () => h.A.stats?.users ?? ip),
        c = (0, x.bG)([h.A], () => h.A.stats?.sidekick),
        d = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        l = (0, x.bG)([q.Ay], () => q.Ay.useReducedMotion),
        o = p.useRef(null),
        u = p.useRef(void 0),
        f = (function (e, t) {
            let [a, r] = p.useState({ route: e, hasShownSquad: e === S.gr.SQUAD, isTransitioning: !1 });
            switch (
                (a.route !== e &&
                    r({
                        route: e,
                        hasShownSquad: a.hasShownSquad || e === S.gr.SQUAD,
                        isTransitioning: !t && a.route === S.gr.SQUAD && e === S.gr.SIDEKICK,
                    }),
                p.useEffect(() => {
                    if (!a.isTransitioning) return;
                    let e = setTimeout(() => r((e) => ({ ...e, isTransitioning: !1 })), 1500);
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
            if (t.current) return void i();
            if (l) return void r();
            let e = setTimeout(r, 1e3);
            return () => clearTimeout(e);
        }, [r, i, l, a]));
    let [b, _] = s,
        g = (0, rM.tx)(b) ?? "",
        v = (0, rM.tx)(_) ?? "",
        w = g.toLocaleUpperCase(),
        I = v.toLocaleUpperCase(),
        E = (0, rM.tx)(c?.user) ?? "",
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
    return (0, n.jsxs)(rn, {
        children: [
            (0, n.jsx)(ir.m, {
                ref: o,
                className: ib.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: C,
                withReducedMotion: "play",
                dataBinding: {
                    ...ix,
                    AnimationState: f,
                    "Avatar01/img": ig(c?.user),
                    "Avatar02/img": ig(_),
                    "Avatar03/img": ig(b),
                    "Avatar04/img": ig(c?.user),
                    "Avatar05/img": ig(d),
                    "Avatar01/Username": E.toLocaleUpperCase(),
                    "Avatar02/Username": I,
                    "Avatar03/Username": w,
                    "Avatar04/Username": E.toLocaleUpperCase(),
                    twoFriends: N,
                    reducedMotion: l,
                },
            }),
            a === S.gr.SQUAD_TRANSITION && (0, n.jsx)(iv, {}),
            a === S.gr.SQUAD &&
                (0, n.jsxs)("div", {
                    className: ib.Qs,
                    children: [
                        (0, n.jsx)(iw, {
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
                (0, n.jsxs)(er, {
                    visible: f !== ih.TRANSITION,
                    enter: e1,
                    exit: e5,
                    mountAfterDelay: !0,
                    className: m()(ib.Qs, ib.yG),
                    children: [
                        (0, n.jsxs)("div", {
                            className: ib.Cv,
                            children: [
                                (0, n.jsx)(iw, {
                                    title: tp.intl.string(aT.default["+uwOHt"]),
                                    accessibilityLabel: tp.intl.string(tb.default.X4EiRH),
                                    description: tp.intl.string(tb.default["/ctmGw"]),
                                }),
                                (0, n.jsx)(A.A, { children: E }),
                                (0, n.jsx)(iI, { sidekick: c }),
                            ],
                        }),
                        (0, n.jsx)(iE, { user: c.user, username: E }),
                    ],
                }),
        ],
    });
}
function iv() {
    let e = ts();
    return (0, n.jsx)("div", {
        ref: e,
        className: m()(ib.Qs, ib.kY),
        children: (0, n.jsx)(rA, { children: tp.intl.string(tb.default["6RSp5q"]) }),
    });
}
function iw(e) {
    let { title: t, accessibilityLabel: a, description: r } = e,
        i = ts();
    return (0, n.jsxs)("div", {
        className: ib.wx,
        children: [
            (0, n.jsxs)(rv, {
                ref: i,
                className: ib.R_,
                accessibilityLabel: a,
                children: [
                    (0, n.jsx)(rI, { icon: ii.FriendsIcon, children: tp.intl.string(aT.default.ZQakPR) }),
                    (0, n.jsx)(to, { variant: "display-lg", className: ib.Vy, children: t }),
                ],
            }),
            (0, n.jsx)(rA, { children: r }),
        ],
    });
}
function iI(e) {
    let { sidekick: t } = e,
        a = Math.round(t.numMessagesSent),
        r = Math.round(t.numVoiceMinutes);
    return (0, n.jsxs)("div", {
        className: ib.M1,
        children: [
            (0, n.jsxs)("div", {
                className: ib.dJ,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(aN.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, n.jsx)(to, { variant: "heading-xxl/medium", className: ib.wk, children: a }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: ib.dJ,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(aM.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, n.jsx)(to, { variant: "heading-xxl/medium", className: ib.wk, children: r }),
                ],
            }),
            (0, n.jsx)(A.A, {
                children: tp.intl.formatToPlainString(tb.default.NafXAs, { numMessages: a, numMinutes: r }),
            }),
        ],
    });
}
function iE(e) {
    let { user: t, username: a } = e,
        [r, i] = p.useState(""),
        [c, d] = p.useState(!1),
        [l, o] = p.useState(!1),
        h = (0, io.A)(t.id),
        f = r.length > 0 && r.length <= 250 && !c && !l,
        _ = c ? tp.intl.string(tp.t.fjcCk5) : tp.intl.formatToPlainString(tp.t["0ZQw/X"], { name: a });
    return h
        ? (0, n.jsxs)("div", {
              className: ib.OG,
              children: [
                  (0, n.jsx)("textarea", {
                      className: ib.yB,
                      value: r,
                      onChange: (e) => i(e.target.value),
                      maxLength: 250,
                      disabled: c || l,
                      placeholder: _,
                      "aria-label": _,
                  }),
                  (0, n.jsxs)("div", {
                      className: ib.n,
                      children: [
                          (0, n.jsx)(is.D, {
                              className: ib.KD,
                              onClick: function () {
                                  ((0, b.nr)(t.id),
                                      (0, il.A)({
                                          giftRecipient: t,
                                          analyticsLocations: [tK.A.CHECKPOINT, tK.A.CHECKPOINT_SIDEKICK],
                                      }));
                              },
                              "aria-label": tp.intl.string(tp.t.Ve9Ge6),
                              children: (0, n.jsx)(ic.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                          (0, n.jsx)(is.D, {
                              className: m()(ib.KD, { [ib.r9]: !f }),
                              onClick: async function () {
                                  if (f) {
                                      o(!0);
                                      try {
                                          (await (0, u.fr)(r, t.id),
                                              i(""),
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
                              children: (0, n.jsx)(id.SendMessageIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var ij = a(9767);
function iS(e) {
    let { games: t } = e,
        a = Math.round(t?.totalDaysPlayed ?? 0),
        r = (0, K.bD)(t?.totalDaysPlayedPercentile);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: ij.dJ,
                children: [
                    (0, n.jsx)(rE, { icon: aI.CalendarIcon, children: tp.intl.string(tb.default["4N5p4D"]) }),
                    (0, n.jsx)(rz, { value: a }),
                ],
            }),
            (0, n.jsx)(rA, {
                children:
                    null != r
                        ? tp.intl.format(tb.default["4FXB/m"], {
                              percent: r,
                              percentHook: (e, t) => (0, n.jsx)(rU, { children: e }, t),
                          })
                        : tp.intl.format(tb.default.iCKjh6, { numDays: a }),
            }),
        ],
    });
}
function iN(e) {
    let { numUsersPlayedEveryDay: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: ij.dJ,
                children: [
                    (0, n.jsx)(rE, { icon: aI.CalendarIcon, children: tp.intl.string(tb.default["dx4+NI"]) }),
                    (0, n.jsx)(rq, { value: t }),
                ],
            }),
            (0, n.jsx)(rA, { children: tp.intl.string(tb.default["7nfXWu"]) }),
        ],
    });
}
function iT() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.games),
        t = (0, x.bG)([h.A], () => (0, K.uO)(h.A.stats)),
        a = (0, x.bG)([h.A], () => h.A.globalStats?.games?.numUsersPlayedEveryDay),
        r = !t && null != a;
    return (0, n.jsx)(rn, {
        children: (0, n.jsxs)("div", {
            className: ij.kL,
            children: [
                (0, n.jsx)(e7, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/312abde9b19fcf85150d507de3f33096992506459b895ab3ea8d92c8f1e04a28.png",
                    className: ij.HW,
                }),
                (0, n.jsx)("div", {
                    className: ij.C,
                    children: r ? (0, n.jsx)(iN, { numUsersPlayedEveryDay: a }) : (0, n.jsx)(iS, { games: e }),
                }),
            ],
        }),
    });
}
var iC = a(95362),
    iR = a(828062);
function iO(e) {
    let { children: t } = e;
    return (0, n.jsx)(to, { variant: "display-lg", className: iR.V, children: t });
}
function iM(e) {
    let { children: t } = e;
    return (0, n.jsx)(tu, { variant: "display-lg", className: iR.V, children: t });
}
var iy = a(109112),
    iL = a(311043),
    ik = a(883053);
function iD(e) {
    let { rank: t, className: a } = e;
    return (0, n.jsxs)(tf, { className: m()(ik.T, a), children: ["#", t] });
}
var iP = a(770178),
    iU = a(102189);
let iF = { fireOnMount: !0, fireOnDepsChange: !0 };
function iG(e) {
    let { text: t, textRef: a, children: r } = e,
        i = (function (e, t) {
            let [a, r] = p.useState(!1),
                i = p.useCallback((e) => {
                    let { target: t } = e;
                    r(t.scrollWidth > t.clientWidth);
                }, []);
            return ((0, iP.g)(e, i, [t], iF), a);
        })(a, t);
    return (0, n.jsx)(aV.m, {
        text: t,
        position: "bottom",
        anchorRef: a,
        shouldShow: i,
        ariaHidden: !0,
        children: r({ tabIndex: i ? 0 : void 0, className: iU.Y }),
    });
}
var iH = a(331144);
let iK = {
        viewBox: `0 0 ${ad.width} ${ad.height}`,
        outline:
            "M-2 -2L183.811 -2L194 9.029L194 253L8.24 253L-2 242.84ZM0 242.007L9.064 251L192 251L192 9.811L182.936 0L0 0ZM-2 -2L182 -2L182 242L-2 242ZM0 240L180 240L180 0L0 0Z",
        corner: "M179.582 239.13L192.002 251.508",
    },
    iB = {
        viewBox: `0 0 ${al.width} ${al.height}`,
        outline:
            "M-2 -2L221.452 -2L233.503 11.103L233.503 306.01L10.103 306.01L-2 293.947ZM0 293.117L10.929 304.01L231.503 304.01L231.503 11.883L220.574 0L0 0ZM-2 -2L222 -2L222 295L-2 295ZM0 293L220 293L220 0L0 0Z",
        corner: "M219.582 291.133L232.002 303.511",
        stripes:
            "M10.93 291.133l13.91 13.863M20.863 291.133l13.91 13.863M30.801 291.133l13.91 13.863M40.738 291.133l13.91 13.863M50.672 291.133l13.91 13.863M60.609 291.133l13.91 13.863M70.543 291.133l13.91 13.863M80.481 291.133l13.91 13.863M90.414 291.133l13.91 13.863M100.352 291.133l13.91 13.863M110.285 291.133l13.91 13.863M120.223 291.133l13.91 13.863M130.16 291.133l13.91 13.863M140.094 291.133l13.91 13.863M150.031 291.133l13.91 13.863M159.965 291.133l13.91 13.863M169.902 291.133l13.91 13.863M179.836 291.133l13.91 13.863M189.773 291.133l13.91 13.863M199.707 291.133l13.91 13.863M209.645 291.133l13.91 13.863M219.582 13.867l12.42 12.378M219.582 23.766l12.42 12.378M219.582 33.672l12.42 12.378M219.582 43.57l12.42 12.378M219.582 53.477l12.42 12.378M219.582 63.375l12.42 12.378M219.582 73.281l12.42 12.378M219.582 83.18l12.42 12.378M219.582 93.086l12.42 12.378M219.582 102.984l12.42 12.378M219.582 112.891l12.42 12.378M219.582 122.789l12.42 12.378M219.582 132.695l12.42 12.378M219.582 142.594l12.42 12.378M219.582 152.5l12.42 12.378M219.582 162.406l12.42 12.378M219.582 172.305l12.42 12.378M219.582 182.211l12.42 12.378M219.582 192.109l12.42 12.378M219.582 202.016l12.42 12.378M219.582 211.914l12.42 12.378M219.582 221.82l12.42 12.378M219.582 231.719l12.42 12.378M219.582 241.625l12.42 12.378M219.582 251.523l12.42 12.378M219.582 261.43l12.42 12.378M219.582 271.328l12.42 12.378M219.582 281.234l12.42 12.378",
    };
function iz(e) {
    let { paths: t, className: a, children: r } = e;
    return (0, n.jsxs)("div", {
        className: m()(iH.aP, a),
        children: [
            (0, n.jsxs)("svg", {
                className: iH.qd,
                viewBox: t.viewBox,
                preserveAspectRatio: "none",
                "aria-hidden": !0,
                children: [
                    null != t.stripes && (0, n.jsx)("path", { d: t.stripes, className: iH.RY }),
                    (0, n.jsx)("path", { d: t.corner, className: iH.WO }),
                ],
            }),
            r,
            (0, n.jsx)("svg", {
                className: iH.qd,
                viewBox: t.viewBox,
                preserveAspectRatio: "none",
                "aria-hidden": !0,
                children: (0, n.jsx)("path", { d: t.outline, className: iH.rj }),
            }),
        ],
    });
}
function iV(e) {
    return (0, n.jsx)(iz, { ...e, paths: iK });
}
function iW(e) {
    return (0, n.jsx)(iz, { ...e, paths: iB });
}
var iq = a(497357);
function iY(e) {
    let {
            game: { id: t, name: a, coverImageHash: r },
            rank: i,
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
            [iL.A],
            () =>
                iL.A.getGame(t)?.getCoverURL(300) ??
                iu.Ay.getApplicationIconURL({ id: t, icon: r, size: 300, keepAspectRatio: !0, fallbackAvatar: !1 }),
        );
    return (0, n.jsxs)("div", {
        ...f,
        role: "listitem",
        className: m()(iq.LO, o),
        style: d,
        children: [
            (0, n.jsx)("div", {
                className: iq.Tn,
                "aria-hidden": null != l,
                children: (0, n.jsxs)(c, {
                    className: iq.LG,
                    children: [
                        null != b
                            ? (0, n.jsx)("img", { src: b, alt: "", className: iq.Qw })
                            : (0, n.jsx)("div", {
                                  className: m()(iq.Qw, iq.uj),
                                  children: (0, n.jsx)(iy.UnknownGameIcon, { size: "lg" }),
                              }),
                        null != i && (0, n.jsx)(iD, { rank: i, className: iq.Tm }),
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: iq.zH,
                "aria-hidden": null != l,
                children: [
                    (0, n.jsx)(to, {
                        ref: u,
                        variant: "heading-xl/medium",
                        className: iq.UU,
                        lineClamp: h,
                        children: a,
                    }),
                    (0, n.jsx)(to, { variant: "mono-md/bold", className: iq.Pf, children: s }),
                ],
            }),
            null != l && (0, n.jsx)(A.A, { children: l }),
        ],
    });
}
function iX(e) {
    let t = p.useRef(null);
    return (0, n.jsx)(iG, {
        text: e.game.name,
        textRef: t,
        children: (a) => {
            let { tabIndex: r, className: i } = a;
            return (0, n.jsx)(iY, { ...e, className: m()(e.className, i), tabIndex: r, textRef: t, lineClamp: 1 });
        },
    });
}
function iZ(e, t, a) {
    return tp.intl.formatToPlainString(tb.default.mqdLhl, { gameName: e.name, rank: t, numSessions: a });
}
function iQ(e) {
    let { numSessions: t, ...a } = e,
        r = Math.round(t);
    return (0, n.jsx)(iX, { ...a, label: r, frame: iV, style: au, accessibilityLabel: iZ(a.game, a.rank, r) });
}
function iJ(e) {
    let { numSessions: t, ...a } = e,
        r = Math.round(t);
    return (0, n.jsx)(iX, { ...a, rank: 1, label: r, frame: iW, style: ah, accessibilityLabel: iZ(a.game, 1, r) });
}
function i$(e) {
    return (0, n.jsx)(iY, { ...e, frame: iV, style: au, className: iq.Ku });
}
var i0 = a(842807);
let i1 = [];
function i2(e) {
    let { gameStats: t } = e,
        a = Math.round(t?.totalGamesPlayed ?? 0),
        r = (0, K.bD)(t?.totalGamesPlayedPercentile),
        i = t?.games ?? i1;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i0.wx,
                children: [
                    (0, n.jsxs)("div", {
                        className: i0.dJ,
                        children: [
                            (0, n.jsx)(rE, {
                                icon: aj.GameControllerIcon,
                                children: tp.intl.string(tb.default.HM2fjf),
                            }),
                            (0, n.jsx)(rz, { value: a, className: i0.ai }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: i0.h_,
                        children: (0, n.jsx)(rA, {
                            children:
                                null != r
                                    ? tp.intl.format(tb.default["hc0/yJ"], {
                                          percent: r,
                                          percentHook: (e, t) => (0, n.jsx)(rU, { children: e }, t),
                                      })
                                    : tp.intl.format(tb.default.aJMJ6b, { numGames: a }),
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(iC.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: i0.ag,
                role: "list",
                children: i.map((e, t) => {
                    let { game: a, numSessions: r } = e;
                    return 0 === t
                        ? (0, n.jsx)(iJ, { game: a, numSessions: r }, a.id)
                        : (0, n.jsx)(iQ, { game: a, rank: t + 1, numSessions: r }, a.id);
                }),
            }),
        ],
    });
}
function i3(e) {
    let { gameStats: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: m()(i0.wx, i0.l7),
                children: [
                    (0, n.jsxs)("div", {
                        className: i0.dJ,
                        children: [
                            (0, n.jsx)(ra, { className: i0.gi }),
                            (0, n.jsx)(iM, { children: tp.intl.string(tb.default.qbCgI7) }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: i0.h_,
                        children: (0, n.jsx)(rA, { children: tp.intl.string(tb.default["0oDeiM"]) }),
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: m()(i0.ag, i0.Zs),
                role: "list",
                children: B.Jb.map((e) => {
                    let { list: a, label: r } = e,
                        i = t[a][0];
                    return null != i ? (0, n.jsx)(i$, { game: i, label: tp.intl.string(r) }, a) : null;
                }),
            }),
        ],
    });
}
function i5() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.games),
        t = (0, x.bG)([h.A], () => (0, K.IH)(h.A.stats)),
        a = (0, x.bG)([h.A], () => h.A.globalStats?.games),
        r = !t && null != a;
    return (0, n.jsx)(rn, {
        children: (0, n.jsx)("div", {
            className: m()(i0.kL, { [i0.TF]: r }),
            children: r ? (0, n.jsx)(i3, { gameStats: a }) : (0, n.jsx)(i2, { gameStats: e }),
        }),
    });
}
var i6 = a(167662);
function i8(e) {
    let { messages: t } = e,
        a = Math.round(t?.numMessagesSent ?? 0),
        r = (0, K.bD)(t?.numMessagesSentPercentile);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i6.dJ,
                children: [
                    (0, n.jsx)(rE, { icon: aN.ChatIcon, children: tp.intl.string(aT.default.wWKySP) }),
                    (0, n.jsx)(rz, { value: a }),
                ],
            }),
            (0, n.jsx)(rA, {
                children:
                    null != r
                        ? tp.intl.format(tb.default.TOMBAW, {
                              percent: r,
                              percentHook: (e, t) => (0, n.jsx)(rU, { children: e }, t),
                          })
                        : tp.intl.format(tb.default.cYCqz8, { numMessages: a }),
            }),
        ],
    });
}
function i9(e) {
    let { numWordsSent: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i6.dJ,
                children: [
                    (0, n.jsx)(rE, { icon: aN.ChatIcon, children: tp.intl.string(tb.default["2BuyVC"]) }),
                    (0, n.jsx)(rq, { value: t }),
                ],
            }),
            (0, n.jsx)(rA, {
                children: tp.intl.format(tb.default.bAxEs2, {
                    numWords: (0, K.wj)(t),
                    numCopies: (0, K.wj)((0, K.yQ)(t)),
                }),
            }),
        ],
    });
}
function i4() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.messages),
        t = (0, x.bG)([h.A], () => (0, K.nb)(h.A.stats)),
        a = (0, x.bG)([h.A], () => h.A.globalStats?.messages?.numWordsSent),
        r = !t && null != a;
    return (0, n.jsx)(rn, {
        children: (0, n.jsxs)("div", {
            className: i6.kL,
            children: [
                (0, n.jsx)(e7, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/d2d8036bb6a32967893421f9956b9e8ed30abde474f68c1a34e824205549c5a1.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/1dfd8684180df4216b23f0a61617250be8fcc12bc1970ac259892f34fbdb836d.png",
                    className: i6.HW,
                }),
                (0, n.jsx)("div", {
                    className: i6.C,
                    children: r ? (0, n.jsx)(i9, { numWordsSent: a }) : (0, n.jsx)(i8, { messages: e }),
                }),
            ],
        }),
    });
}
var i7 = a(682163),
    ne = a(224865);
let nt = i7.iu[i7.Ay.Sizes.XLARGE];
function na(e) {
    let { guild: t, size: a } = e;
    return null == t.icon && a < 48
        ? (0, n.jsx)("div", {
              className: m()(ne.K, ne.J),
              style: { width: a, height: a },
              "aria-hidden": !0,
              children: (0, n.jsx)(tc.E, { variant: "body-md/medium", children: (0, K.oW)(t.name) }),
          })
        : (0, n.jsx)(i7.Ay, {
              guild: t,
              size: i7.Ay.Sizes.XLARGE,
              iconSize: a,
              textScale: a / nt,
              className: ne.K,
              style: { width: a, height: a, borderRadius: 0 },
              "aria-hidden": !0,
          });
}
var nr = a(140645);
function ni(e) {
    let { numVoiceMinutes: t, numMessagesSent: a } = e,
        r = Math.round(t),
        i = Math.round(a);
    return (0, n.jsxs)("div", {
        className: nr.M1,
        children: [
            (0, n.jsxs)("div", {
                className: nr.dJ,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(aM.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, n.jsx)(to, { variant: "mono-md/bold", className: nr.Qq, children: r }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: nr.dJ,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(aN.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, n.jsx)(to, { variant: "mono-md/bold", className: nr.Qq, children: i }),
                ],
            }),
            (0, n.jsx)(A.A, {
                children: tp.intl.formatToPlainString(tb.default["OQjeY/"], { numMinutes: r, numMessages: i }),
            }),
        ],
    });
}
var nn = a(972106);
let ns = [];
function nc(e) {
    let { guild: t, rank: a, iconSize: r = 100, children: i } = e,
        s = p.useRef(null);
    return (0, n.jsx)(iG, {
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
                            (0, n.jsx)(iD, { rank: a }),
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
                                    i,
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(na, { guild: t, size: r }),
                ],
            });
        },
    });
}
function nd(e) {
    let { guild: t, numVoiceMinutes: a, numMessagesSent: r } = e;
    return (0, n.jsx)(nc, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, n.jsx)(ni, { numVoiceMinutes: a, numMessagesSent: r }),
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
                    (0, n.jsxs)(rv, {
                        ref: a,
                        className: nn.R_,
                        accessibilityLabel: tp.intl.string(tb.default.FroqRf),
                        children: [
                            (0, n.jsx)(rI, { icon: aR.ServerIcon, children: tp.intl.string(tb.default.Mb5E6r) }),
                            (0, n.jsx)(iO, { children: tp.intl.string(aT.default.F0fkrh) }),
                        ],
                    }),
                    (0, n.jsx)(rA, { children: tp.intl.string(tb.default.IN1DaS) }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: nn.Pl,
                children: t.map((e, t) => {
                    let { guild: a, numMessagesSent: r, numVoiceMinutes: i } = e;
                    return 0 === t
                        ? (0, n.jsx)(nd, { guild: a, numMessagesSent: r ?? 0, numVoiceMinutes: i ?? 0 }, a.id)
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
                            (0, n.jsx)(ra, { className: nn.gi }),
                            (0, n.jsx)(iM, { children: tp.intl.string(aT.default.F0fkrh) }),
                        ],
                    }),
                    (0, n.jsx)(rA, { children: tp.intl.string(tb.default.bhnqop) }),
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
    return (0, n.jsx)(rn, {
        children: (0, n.jsx)("div", {
            className: nn.kL,
            children: a ? (0, n.jsx)(no, { guilds: t }) : (0, n.jsx)(nl, { guilds: e }),
        }),
    });
}
var nh = a(155094);
function nf(e) {
    let { icon: t, title: a, description: r } = e;
    return (0, n.jsx)(rn, {
        children: (0, n.jsxs)("div", {
            className: nh.Q,
            children: [(0, n.jsx)(rE, { icon: t, children: a }), (0, n.jsx)(rA, { children: r })],
        }),
    });
}
var nb = a(7584),
    np = a(33293),
    n_ = a(498137),
    nm = a(192339),
    nx = a(574414),
    ng = a(834109),
    nA = a(48763);
function nv(e) {
    let { character: t, power: a } = e,
        r = (0, I.o)(t);
    return (0, n.jsxs)(n_.A, {
        cardColorPalette: r,
        size: nA.W.LG,
        children: [
            (0, n.jsx)(nm.A, {}),
            (0, n.jsx)(ng.A, { variant: "full" }),
            null != a
                ? (0, n.jsx)(nx.A, {
                      powerLevel: (0, rx.Le)(a.powerLevel),
                      powerLevelUnits: (0, rx.sX)(a.powerLevelPercentile),
                  })
                : null,
            (0, n.jsx)(np.A, { character: t }),
        ],
    });
}
var nw = a(58410);
function nI() {
    let e = (0, x.bG)([h.A], () => h.A.stats),
        t = (0, x.bG)([h.A], () => h.A.character),
        a = ts();
    return (0, n.jsx)(rn, {
        children: (0, n.jsxs)("div", {
            className: nw.z,
            children: [
                null != t ? (0, n.jsx)(nv, { character: t, power: e?.power }) : null,
                (0, n.jsxs)("div", {
                    className: m()(nw.zH, null === e && nw.gz),
                    children: [
                        (0, n.jsxs)(rv, {
                            ref: a,
                            className: nw.R_,
                            accessibilityLabel: tp.intl.string(tb.default.ASrTAc),
                            children: [
                                (0, n.jsx)(rI, {
                                    icon: ru.ExperimentalCheckpointIcon,
                                    children: tp.intl.string(aT.default.ir6nEQ),
                                }),
                                (0, n.jsx)(to, {
                                    variant: "display-lg",
                                    className: nw.Vy,
                                    children: tp.intl.string(aT.default.y4M1na),
                                }),
                            ],
                        }),
                        null === e ? (0, n.jsx)(nE, { character: t }) : (0, n.jsx)(nj, { stats: e }),
                    ],
                }),
            ],
        }),
    });
}
function nE(e) {
    let { character: t } = e,
        { primaryBackgroundColor: a } = (0, I.j)((0, I.o)(t));
    return (0, n.jsx)(to, {
        tag: "p",
        variant: "heading-xl/medium",
        style: { color: a },
        children: tp.intl.string(tb.default["GL+yOs"]),
    });
}
function nj(e) {
    let { stats: t } = e,
        a = t.guilds?.guilds[0],
        r = t.emojis?.emojis[0],
        i = t.games?.games[0]?.game,
        s =
            null != i
                ? iu.Ay.getApplicationIconURL({ id: i.id, icon: i.iconHash, size: 40, fallbackAvatar: !1 })
                : void 0;
    return (0, n.jsxs)("div", {
        className: nw.M1,
        children: [
            (0, n.jsx)(nS, { label: tp.intl.string(tb.default.MSrV9z), value: t.voice?.totalVoiceMinutes }),
            (0, n.jsx)(nS, { label: tp.intl.string(tb.default.hhh11L), value: t.messages?.numMessagesSent }),
            (0, n.jsx)(nS, { label: tp.intl.string(tb.default["f5S+pt"]), value: a?.numDaysInteracted }),
            (0, n.jsx)(nN, {
                label: tp.intl.string(aT.default["8XPMJj"]),
                icon: null != a ? (0, n.jsx)(na, { guild: a.guild, size: 40 }) : (0, n.jsx)(nT, {}),
                name: null != a ? a.guild.name : tp.intl.string(tp.t.PoWNfe),
            }),
            (0, n.jsx)(nS, { label: tp.intl.string(tb.default.xVSlv3), value: t.emojis?.numEmojisSent }),
            (0, n.jsx)(nN, {
                label: tp.intl.string(aT.default["3sARW7"]),
                icon:
                    null != r
                        ? (0, n.jsx)(rD.A, {
                              emojiId: r.id,
                              emojiName: null == r.id ? r.name : void 0,
                              animated: r.animated,
                              alt: "",
                              className: nw.Kk,
                          })
                        : (0, n.jsx)(nT, {}),
                name:
                    null == r
                        ? tp.intl.string(tp.t.PoWNfe)
                        : null == r.id
                          ? nb.Ay.convertSurrogateToName(r.name)
                          : `:${r.name}:`,
            }),
            (0, n.jsx)(nS, { label: tp.intl.string(tb.default.y2Y1DD), value: t.games?.totalDaysPlayed }),
            (0, n.jsx)(nN, {
                label: tp.intl.string(aT.default.RbT4Zq),
                icon:
                    null != s
                        ? (0, n.jsx)("img", { src: s, alt: "", className: m()(nw.Kk, nw.Gt) })
                        : null == i
                          ? (0, n.jsx)(nT, {})
                          : (0, n.jsx)("div", {
                                className: m()(nw.Kk, nw.Gc),
                                children: (0, n.jsx)(iy.UnknownGameIcon, { size: "md", color: "currentColor" }),
                            }),
                name: null != i ? i.name : tp.intl.string(tp.t.PoWNfe),
            }),
        ],
    });
}
function nS(e) {
    let { label: t, value: a } = e;
    return (0, n.jsxs)("div", {
        className: nw.dJ,
        children: [
            (0, n.jsx)(to, { variant: "heading-md/semibold", children: t }),
            (0, n.jsx)(to, {
                variant: "heading-xxl/medium",
                className: nw.wk,
                children: Math.round(a ?? 0).toLocaleString(tp.intl.currentLocale),
            }),
        ],
    });
}
function nN(e) {
    let { label: t, icon: a, name: r } = e,
        i = p.useRef(null);
    return (0, n.jsx)(iG, {
        text: r,
        textRef: i,
        children: (e) => {
            let { tabIndex: s, className: c } = e;
            return (0, n.jsxs)("div", {
                className: m()(nw.dJ, nw.u4, c),
                tabIndex: s,
                children: [
                    (0, n.jsx)(to, { variant: "heading-md/semibold", children: t }),
                    (0, n.jsxs)("div", {
                        className: nw.AS,
                        children: [
                            a,
                            (0, n.jsx)(to, {
                                ref: i,
                                variant: "heading-xl/medium",
                                lineClamp: 1,
                                className: nw.TJ,
                                children: r,
                            }),
                        ],
                    }),
                ],
            });
        },
    });
}
function nT() {
    return (0, n.jsx)("div", {
        className: m()(nw.Kk, nw.Gc, nw.Wn),
        children: (0, n.jsx)(iy.UnknownGameIcon, { size: "lg", color: "currentColor" }),
    });
}
var nC = a(651946);
function nR() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.guilds?.guilds[0]),
        t = Math.round(e?.numDaysInteracted ?? 0),
        a = (0, K.bD)(e?.numDaysInteractedPercentile),
        r = p.useRef(null);
    return (0, n.jsx)(rn, {
        children: (0, n.jsxs)("div", {
            className: nC.kL,
            children: [
                (0, n.jsxs)("div", {
                    className: nC.wx,
                    children: [
                        (0, n.jsxs)("div", {
                            className: nC.R_,
                            children: [
                                (0, n.jsx)(rE, { icon: aR.ServerIcon, children: tp.intl.string(tb.default["M+a+t1"]) }),
                                (0, n.jsx)(rz, { value: t }),
                            ],
                        }),
                        (0, n.jsx)(rA, {
                            children:
                                null != a
                                    ? tp.intl.format(tb.default.sIDTV1, {
                                          numDays: t,
                                          percent: a,
                                          percentHook: (e, t) => (0, n.jsx)(rU, { children: e }, t),
                                      })
                                    : tp.intl.format(tb.default.nLCUQ4, { numDays: t }),
                        }),
                    ],
                }),
                null != e &&
                    (0, n.jsx)("div", {
                        className: nC.bU,
                        children: (0, n.jsx)(iG, {
                            text: e.guild.name,
                            textRef: r,
                            children: (t) => {
                                let { tabIndex: a, className: i } = t;
                                return (0, n.jsxs)("div", {
                                    className: m()(nC.Nr, i),
                                    style: { width: 360 },
                                    tabIndex: a,
                                    children: [
                                        (0, n.jsx)(na, { guild: e.guild, size: 360 }),
                                        (0, n.jsxs)("div", {
                                            className: nC.zH,
                                            children: [
                                                (0, n.jsx)(to, {
                                                    ref: r,
                                                    variant: "heading-xxl/medium",
                                                    className: nC.J5,
                                                    lineClamp: 1,
                                                    children: e.guild.name,
                                                }),
                                                (0, n.jsx)(ni, {
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
var nO = a(270704);
function nM(e) {
    let { voice: t } = e,
        a = Math.round(t?.totalVoiceMinutes ?? 0),
        r = (0, K.bD)(t?.totalVoiceMinutesPercentile);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: nO.dJ,
                children: [
                    (0, n.jsx)(rE, { icon: aM.MicrophoneIcon, children: tp.intl.string(tb.default["3/T12E"]) }),
                    (0, n.jsx)(rz, { value: a, alignment: "center" }),
                ],
            }),
            (0, n.jsx)(rA, {
                children:
                    null != r
                        ? tp.intl.format(tb.default.RqXsIs, {
                              percent: r,
                              percentHook: (e, t) => (0, n.jsx)(rU, { children: e }, t),
                          })
                        : tp.intl.format(tb.default.Y3poDW, { numMinutes: a }),
            }),
        ],
    });
}
function ny(e) {
    let { peakHour: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: nO.dJ,
                children: [
                    (0, n.jsx)(rE, { icon: aM.MicrophoneIcon, children: tp.intl.string(tb.default.ZCwB8J) }),
                    (0, n.jsx)(rq, { value: t }),
                ],
            }),
            (0, n.jsx)(rA, { children: tp.intl.string(tb.default.huiTne) }),
        ],
    });
}
function nL() {
    let e = (0, x.bG)([h.A], () => h.A.stats?.voice),
        t = (0, x.bG)([h.A], () => (0, K.Kr)(h.A.stats)),
        a = (0, x.bG)([h.A], () => h.A.globalStats?.voice?.peakHourUtc),
        r = (0, K.XF)(a)?.value,
        i = !t && null != r;
    return (0, n.jsxs)(rn, {
        children: [
            (0, n.jsx)(e7, {
                animatedSrc:
                    "https://cdn.discordapp.com/assets/content/04746dc04eab575d0168935af2b1b3f97e2e00439f84bd0f0474276e0c5a81dc.png",
                staticSrc:
                    "https://cdn.discordapp.com/assets/content/c4c2d6b631bff3da4e4bb9afffc8f89bc9fb6f76a2fcd824f8a7af83eb7f1e6b.png",
                className: nO.Tp,
            }),
            (0, n.jsx)("div", {
                className: nO.Qs,
                children: i ? (0, n.jsx)(ny, { peakHour: r }) : (0, n.jsx)(nM, { voice: e }),
            }),
        ],
    });
}
function nk(e) {
    let { route: t, onNextStep: a, onPreviousStep: r } = e;
    if (t === S.gr.HOME) return (0, n.jsx)(rk, { onStart: a });
    if (t === S.gr.INTRODUCTION) return (0, n.jsx)(rd, {});
    let { statsScreen: i } = (0, S.UG)(t);
    switch (i) {
        case S.oI.VOICE_INTRO:
            return (0, n.jsx)(nf, {
                icon: aM.MicrophoneIcon,
                title: tp.intl.string(tb.default["/7XYsa"]),
                description: tp.intl.string(tb.default["X8/G/o"]),
            });
        case S.oI.VOICE:
            return (0, n.jsx)(nL, {});
        case S.oI.MESSAGES_INTRO:
            return (0, n.jsx)(nf, {
                icon: aN.ChatIcon,
                title: tp.intl.string(tb.default["2BuyVC"]),
                description: tp.intl.string(tb.default["kF+Y3a"]),
            });
        case S.oI.MESSAGES:
            return (0, n.jsx)(i4, {});
        case S.oI.SERVERS_INTRO:
            return (0, n.jsx)(nf, {
                icon: aR.ServerIcon,
                title: tp.intl.string(aT.default.F0fkrh),
                description: tp.intl.string(tb.default.Xg82Gy),
            });
        case S.oI.SERVERS:
            return (0, n.jsx)(nu, {});
        case S.oI.TOP_SERVER:
            return (0, n.jsx)(nR, {});
        case S.oI.EMOJI_INTRO:
            return (0, n.jsx)(nf, {
                icon: tn.EmojiSlightlySmilingFaceIcon,
                title: tp.intl.string(tb.default.ZTDCIv),
                description: tp.intl.string(tb.default.y8Sr8J),
            });
        case S.oI.EMOJI:
            return (0, n.jsx)(it, {});
        case S.oI.GAMES_INTRO:
            return (0, n.jsx)(nf, {
                icon: aj.GameControllerIcon,
                title: tp.intl.string(tb.default.HM2fjf),
                description: tp.intl.string(tb.default.LQiFqJ),
            });
        case S.oI.GAMES:
            return (0, n.jsx)(i5, {});
        case S.oI.GAME_TIME:
            return (0, n.jsx)(iT, {});
        case S.oI.SQUAD:
        case S.oI.SIDEKICK:
            return (0, n.jsx)(iA, { route: t, onNextStep: a, onPreviousStep: r });
        case S.oI.SUMMARY:
            return (0, n.jsx)(nI, {});
        case S.oI.SHARE:
            return (0, n.jsx)(rN, {});
        default:
            return null;
    }
}
var nD = a(650809),
    nP = a(428692);
let nU = {
    [S.s9.FACE]: { icon: aM.MicrophoneIcon, label: tp.t.K3lovD },
    [S.s9.OUTFIT]: { icon: aN.ChatIcon, label: tp.t.OIgYlQ },
    [S.s9.HEADWEAR]: { icon: aR.ServerIcon, label: tp.t["7hB4kg"] },
    [S.s9.SHOES]: { icon: tn.EmojiSlightlySmilingFaceIcon, label: tp.t.sMOuuS },
    [S.s9.WEARABLE]: { icon: aj.GameControllerIcon, label: tp.t.URyqtP },
    [S.s9.AURA]: { icon: aI.CalendarIcon, label: tb.default.y2Y1DD },
    [S.s9.ASSEMBLED]: { icon: ii.FriendsIcon, label: tp.t.TdEu5X },
    [S.s9.FINALIZE]: { icon: nD.PaintPaletteIcon, label: tb.default.gmMD2I },
    [S.s9.SUMMARY]: { icon: ru.ExperimentalCheckpointIcon, label: aT.default.y4M1na },
};
function nF(e) {
    let {
            step: { icon: t, label: a, route: r },
            state: i,
            disabled: s,
            blockedTraitDescriptionId: c,
            sound: d,
            onRouteClick: l,
        } = e,
        o = tp.intl.string(a),
        u = "unlocked" === i,
        {
            onPointerDown: h,
            onKeyDown: f,
            onClickWithSound: b,
        } = a0({ source: d, onClick: () => l(r), disabled: s || !u });
    return (0, n.jsx)(aV.m, {
        text: "locked" === i ? null : o,
        ariaHidden: !0,
        children: (0, n.jsxs)(is.D, {
            onPointerDown: u ? h : void 0,
            onKeyDown: u ? f : void 0,
            onClick: u ? b : void 0,
            tabIndex: u ? 0 : -1,
            role: "tab",
            "aria-selected": "active" === i,
            className: m()(nP.PM, { [nP.Xj]: "active" === i, [nP.CD]: u, [nP.vk]: u && !s }),
            "aria-label": o,
            "aria-disabled": "locked" === i || (u && s),
            "aria-describedby": u ? c : void 0,
            children: [
                (0, n.jsx)("div", { className: m()(nP.Om, { [nP.hZ]: "locked" !== i }) }),
                (0, n.jsx)(t, { size: "xs", color: "currentColor", className: nP.Kk }),
            ],
        }),
    });
}
function nG(e) {
    let { flow: t, stats: a, activeRoute: r, isRouteBlocked: i, blockedTraitDescriptionId: s, onRouteClick: c } = e,
        d = (function (e, t) {
            let a = [];
            for (let r of (0, j.p5)({ flow: e, stats: t })) {
                let { characterStage: e } = (0, S.UG)(r),
                    t = nU[e];
                null != t && a.at(-1)?.stage !== e && a.push({ ...t, stage: e, route: r });
            }
            return a;
        })(t, a),
        { characterStage: l } = (0, S.UG)(r),
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
              className: nP.qB,
              role: "tablist",
              "aria-label": tp.intl.string(tb.default.DyMw85),
              children: d.map((e, t) =>
                  (0, n.jsx)(
                      nF,
                      {
                          step: e,
                          state: t === o ? "active" : t <= u ? "unlocked" : "locked",
                          disabled: b || i,
                          blockedTraitDescriptionId: s,
                          sound: t < o ? aK : aB,
                          onRouteClick: c,
                      },
                      e.stage,
                  ),
              ),
          });
}
var nH = a(517782);
function nK() {
    let e = p.useId(),
        t = p.useRef(null);
    return (p.useEffect(() => (g.O.moveTo?.(e, t.current), () => g.O.remove?.(e)), [e]), (0, n.jsx)(A.A, { ref: t }));
}
function nB(e) {
    let t,
        a,
        { didPlayerShareDataWithDiscord: r, onClose: i } = e;
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
            let r = [];
            return (
                B.Jb.forEach((e) => {
                    let { list: t } = e,
                        i = a[t][0];
                    null != i && r.push(i.id);
                }),
                r
            );
        })),
        p.useEffect(() => {
            let { fetchState: e } = h.A;
            (e === h.T.INIT || e === h.T.ERROR) && (0, u.nX)();
        }, []),
        p.useEffect(() => {
            (0, H.E)(t);
        }, [t]));
    let s = (0, j.bL)(r),
        [c, d] = (function (e) {
            let [t, a] = p.useState(() =>
                (function (e) {
                    let { character: t, progress: a, stats: r, isCharacterCreatorEnabled: i } = h.A,
                        n = null != t ? S.s9.SUMMARY : a?.stage;
                    return (
                        (0, j.p5)({ flow: e, stats: r, character: t, isCharacterCreatorEnabled: i }).find(
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
                                { primaryBackgroundColor: r, shadowColor: i } = (0, I.j)(a);
                            return {
                                ...af,
                                "--custom-checkpoint-primary": r,
                                "--custom-checkpoint-button-border": r,
                                "--custom-checkpoint-button-shadow": i,
                                "--custom-checkpoint-background-gradient-start": r,
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
                r = p.useRef(null),
                i = p.useCallback(() => {
                    (r.current?.(), a.current.forEach((e) => e.pause()));
                }, []);
            return (
                p.useEffect(() => ((a.current = new Map(M.map((e) => [e, new Audio(e)]))), i), [i]),
                p.useEffect(() => {
                    a.current.forEach((a) => {
                        ((a.muted = e), (a.volume = t));
                    });
                }, [e, t]),
                p.useCallback(
                    (e) => {
                        var t;
                        let n;
                        (i(),
                            (t = (e) => {
                                let t = a.current.get(e);
                                null == t || h.A.isMuted || 0 === h.A.volume || ((t.currentTime = 0), t.play());
                            }),
                            (n = []),
                            e.forEach((e) => {
                                let { source: a, delayMs: r } = e;
                                r > 0 ? n.push(setTimeout(() => t(a), r)) : t(a);
                            }),
                            (r.current = () => n.forEach((e) => clearTimeout(e))));
                    },
                    [i],
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
                    let r = [];
                    return (
                        a === S.gr.INTRODUCTION
                            ? (r.push({ source: N, delayMs: 0 }),
                              r.push({ source: O, delayMs: 2500 }),
                              r.push({ source: T, delayMs: 2800 }))
                            : y(t) && L(a)
                              ? r.push({ source: C, delayMs: 0 })
                              : L(t) && y(a) && (r.push({ source: R, delayMs: 0 }), r.push({ source: O, delayMs: 0 })),
                        r
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
                    1 === e && i();
                    return;
                }
                ee(t);
            },
            [c, s, ee, i, P],
        ),
        ea = p.useCallback(() => et(-1), [et]),
        ei = p.useCallback(() => et(1), [et]),
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
                className: m()(e, nH.kL),
                style: z,
                role: "dialog",
                "aria-modal": !0,
                "aria-label": tp.intl.string(aT.default["CdU/PF"]),
                children: [
                    (0, n.jsx)(nK, {}),
                    (0, n.jsxs)("div", {
                        className: nH.$s,
                        children: [
                            (0, n.jsx)(aH, {}),
                            (0, n.jsx)(J, {
                                size: "sm",
                                "aria-label": tp.intl.string(tp.t.cpT0Cq),
                                onClick: i,
                                children: (0, n.jsx)(w.XSmallIcon, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(e4, {
                        stage: o,
                        isCovered: g,
                        className: nH.qd,
                        children: k && (0, n.jsx)(nk, { route: S.gr.INTRODUCTION, onNextStep: ei, onPreviousStep: ea }),
                    }),
                    (0, n.jsx)(er, {
                        visible: g,
                        enter: eJ,
                        exit: eJ,
                        hiddenScale: 1.02,
                        keepMounted: !0,
                        className: nH.qd,
                        style: z,
                        children: (0, n.jsx)(Z, { isVisible: g }),
                    }),
                    (0, n.jsx)(er, {
                        visible: D,
                        enter: e2,
                        exit: e3,
                        className: nH.qd,
                        children: (0, n.jsx)(aL, { route: c }),
                    }),
                    (0, n.jsx)(er, {
                        visible: g,
                        enter: e0,
                        exit: e$,
                        hiddenScale: 1.02,
                        mountAfterDelay: !0,
                        className: nH.qd,
                        style: z,
                        children: (0, n.jsx)(nk, { route: c, onNextStep: ei, onPreviousStep: ea }),
                    }),
                    (0, n.jsx)(rt, {
                        activeRoute: c,
                        blockedTrait: X,
                        blockedTraitDescriptionId: $,
                        onBack: ea,
                        onNext: ei,
                        onReplay: en,
                    }),
                    (0, n.jsx)(ti, { activeRoute: c }),
                    (0, n.jsx)(nG, {
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
function nz() {
    if (o._.hasSubscribers(aJ.jej.MODAL_CLOSE)) return (o._.dispatch(aJ.jej.MODAL_CLOSE), !0);
    let e = (0, d.mU)(document.activeElement ?? document.body);
    return !!e?.hasSubscribers(aJ.jej.POPOUT_CLOSE) && (e.dispatch(aJ.jej.POPOUT_CLOSE), !0);
}
async function nV(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { didPlayerShareDataWithDiscord: a = !0, ...r } = t,
        i = await (0, u.nX)(r);
    i === h.T.ERROR
        ? (0, s.P0)({ text: tp.intl.string(tp.t.fEptJP), variant: "critical" })
        : i !== h.T.FETCHING &&
          (f.A.initialize({ didPlayerShareDataWithDiscord: a, isForeground: l.A.isFocused() && l.A.isVisible() }),
          (0, b.lw)(e),
          (0, c.B8)(
              (e) => {
                  let { closeLayer: t } = e;
                  return (0, n.jsx)(nB, { didPlayerShareDataWithDiscord: a, onClose: t });
              },
              { onEscape: nz },
          ));
}
