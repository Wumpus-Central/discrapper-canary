a.d(t, { D: () => nK });
var r,
    i = a(477900),
    n = a(858899),
    s = a(361158),
    c = a(267102),
    d = a(531685),
    l = a(188567),
    o = a(796104),
    u = a(719718),
    h = a(527926),
    f = a(617390),
    b = a(582128),
    p = a(503698),
    _ = a.n(p),
    m = a(855986),
    x = a(765178),
    g = a(140735),
    A = a(43990),
    v = a(789645),
    w = a(373955),
    I = a(503235),
    E = a(847011),
    j = a(201779);
a(321073);
let S =
        "https://cdn.discordapp.com/assets/content/05e7df987cb6150a2d6cbfe4aca2cdacfb4188166f8ff9bbde7421afcd85b382.mp3",
    N =
        "https://cdn.discordapp.com/assets/content/7b28adce16a979de5d4f6b8331dfedca2806d1b0b15f694b7a196db7f624918c.mp3",
    C =
        "https://cdn.discordapp.com/assets/content/aada5b40828140b41a56df82e81783cd43fd60e30ac1eb3c9f93a087b95dcf03.mp3",
    T =
        "https://cdn.discordapp.com/assets/content/04536b9e5b26d0b6e85116ce546b7d5ba97da31e7de7a1e02da262bcd5249bb0.mp3",
    R =
        "https://cdn.discordapp.com/assets/content/82d771ff521a99ea8e26239d2f2e48ae847e39575bc5bce396739b430b8a6fda.mp3",
    O = [S, N, C, T, R];
function M(e) {
    return e !== j.gr.HOME && null == (0, j.UG)(e).statsScreen;
}
function y(e) {
    return null != (0, j.UG)(e).statsScreen;
}
var L = a(127639),
    k = a(287809),
    D = a(474090),
    P = a(817379);
function U() {
    return (0, m.yK)([u.A, k.default], () => {
        let { selectedCharacterTraits: e, stats: t, character: a } = u.A,
            r = (0, D.ki)(k.default.getCurrentUser());
        return Object.values(L.V).filter((i) => {
            let n = e[i];
            return null != n && (0, P.tS)(i, n, { stats: t, hasNitro: r, savedCharacter: a });
        });
    });
}
var F = a(964486),
    G = a(920495),
    H = a(407905),
    K = a(532294),
    B = a(739187);
function z(e) {
    let t = (0, I.Cz)(e);
    null != t && ((0, B.V)(), (0, n.P0)({ text: t, variant: "critical" }));
}
var V = a(299619),
    W = a(775602),
    q = a(818348),
    Y = a(11435);
function X(e) {
    let { isVisible: t } = e,
        a = b.useRef(null),
        r = (0, m.bG)([W.Ay], () => W.Ay.useReducedMotion),
        n = t && !r;
    return (
        b.useEffect(() => {
            let e = a.current;
            null != e && (n ? e.play().catch(q.tE) : e.pause());
        }, [n]),
        b.useEffect(() => {
            r && null != a.current && (a.current.currentTime = 1);
        }, [r]),
        (0, i.jsxs)("div", {
            className: Y.Tp,
            "aria-hidden": !0,
            children: [
                (0, i.jsx)(V.A, {
                    ref: a,
                    className: Y.Ki,
                    src: "https://cdn.discordapp.com/assets/content/a7a4300630ed2733eca4a8bb584c3086a66063d78e2f829faf465d96ff388a93.webm",
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                }),
                (0, i.jsx)("div", { className: Y.D7 }),
            ],
        })
    );
}
var Z = a(885619);
function Q(e) {
    let {
        ref: t,
        onMouseEnter: a,
        onMouseLeave: r,
        onFocus: n,
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
        size: m,
        className: x,
    } = e;
    return (0, i.jsx)("button", {
        ref: t,
        onMouseEnter: a,
        onMouseLeave: r,
        onFocus: n,
        onBlur: s,
        onContextMenu: c,
        type: "button",
        className: _()(Z.button, "custom" !== m && Z[m], x),
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
function J(e) {
    let { className: t, ...a } = e;
    return (0, i.jsx)(Q, { ...a, className: _()(Z.shadow, t) });
}
var $ = a(475743),
    ee = a(765548),
    et = a(190240);
function ea(e) {
    let {
            visible: t,
            enter: a,
            exit: r,
            keepMounted: n = !1,
            mountAfterDelay: s = !1,
            hiddenScale: c = 1,
            onExitComplete: d,
            className: l,
            style: o,
            children: u,
        } = e,
        h = (0, m.bG)([W.Ay], () => W.Ay.useReducedMotion),
        f = b.useRef(null),
        [p, x] = b.useState(t),
        [g, A] = b.useState(t),
        v = b.useRef(null),
        w = (0, $.p0)({ value: u, shouldUpdate: t }),
        I = (0, $.p0)({ value: o, shouldUpdate: t }),
        E = (0, ee.A)(() => {
            ((v.current = null), x(!1), d?.());
        }),
        j = t ? a : r,
        S = h ? 0 : j.delay,
        N = h ? 0 : j.duration,
        C = t && !p && !n,
        T = s && !h;
    b.useEffect(() => {
        if (!C) return;
        if (!T) return void x(!0);
        let e = setTimeout(() => x(!0), a.delay);
        return () => clearTimeout(e);
    }, [C, T, a.delay]);
    let R = b.useRef(!0);
    if (
        (b.useEffect(() => {
            if (R.current) {
                R.current = !1;
                return;
            }
            if ((null != v.current && (clearTimeout(v.current), (v.current = null)), t)) {
                n && x(!0);
                return;
            }
            (A(!1), (v.current = setTimeout(E, S + N)));
        }, [t]),
        b.useLayoutEffect(() => {
            t && p && !g && (f.current?.getBoundingClientRect(), A(!0));
        }, [t, p, g]),
        b.useEffect(
            () => () => {
                null != v.current && clearTimeout(v.current);
            },
            [],
        ),
        !p && !n)
    )
        return null;
    let O = t && !n && T ? 0 : S,
        M = {
            ...(t ? o : I),
            opacity: +!!g,
            transform: g || 1 === c ? void 0 : `scale(${c})`,
            transitionDuration: `${N}ms`,
            transitionDelay: `${O}ms`,
        };
    return (0, i.jsx)("div", {
        ref: f,
        className: _()(l, et.q, { [et.R]: !p }),
        style: M,
        inert: !t,
        "aria-hidden": !t,
        children: t || n ? u : w,
    });
}
var er = a(516749),
    ei = a(399667),
    en = a(468311),
    es = a(706121),
    ec = a(985747),
    ed = a(67915),
    el = a(118531);
let eo = {
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
function eu(e) {
    return { name: e, url: eo[e].url };
}
let eh = eu("tex_none"),
    ef = {
        [ec.N.NONE]: 0,
        [ec.N.CAP]: 7,
        [ec.N.ELVEN_HEADPIECE]: 1,
        [ec.N.HEADPHONES]: 2,
        [ec.N.TEDDY_BEANIE]: 13,
        [ec.N.PIERCINGS]: 4,
        [ec.N.HEADBAND]: 5,
        [ec.N.SUNGLASSES]: 6,
        [ec.N.BANANA_PEEL]: 3,
        [ec.N.LEAF]: 8,
        [ec.N.FIRE]: 9,
        [ec.N.HALO]: 10,
        [ec.N.BRAIN]: 11,
        [ec.N.TRAFFIC_CONE]: 12,
        [ec.N.CROWN]: 14,
    },
    eb = {
        [el.Z.NONE]: 0,
        [el.Z.ANGEL_WINGS]: 3,
        [el.Z.STICKERS]: 1,
        [el.Z.TOTE]: 2,
        [el.Z.WIZARD_STAFF]: 8,
        [el.Z.SKATEBOARD]: 4,
        [el.Z.DRAGON_WINGS]: 5,
        [el.Z.TAKE_OUT_BAG]: 6,
        [el.Z.PIXEL_WRENCH]: 7,
        [el.Z.MECH_WINGS]: 9,
        [el.Z.SWORD]: 10,
        [el.Z.DEVIANT_TAIL]: 11,
        [el.Z.MAGICAL_STAFF]: 12,
        [el.Z.BUTTERFLY_WINGS]: 13,
        [el.Z.CAT_BACKPACK]: 14,
    },
    ep = {
        [en.X.NONE]: eh,
        [en.X.BLAZE]: eu("tex_aura_04_blaze"),
        [en.X.BLOSSOM]: eu("tex_aura_01_blossom"),
        [en.X.PRISM]: eu("tex_aura_02_prism"),
        [en.X.SHOCK]: eu("tex_aura_03_shock"),
        [en.X.FATED]: eu("tex_aura_05_fated"),
        [en.X.LUSTER]: eu("tex_aura_06_luster"),
        [en.X.BUBBLES]: eu("tex_aura_07_bubbly"),
        [en.X.SPOOKY]: eu("tex_aura_08_spooky"),
        [en.X.CURSED]: eu("tex_aura_09_cursed"),
        [en.X.MAGNETIC]: eu("tex_aura_10_magnetic"),
        [en.X.RADIOACTIVE]: eu("tex_aura_11_radioactive"),
        [en.X.ELEMENTAL]: eu("tex_aura_12_elemental"),
        [en.X.SHIMMER]: eu("tex_aura_13_shimmer"),
        [en.X.WITCHY]: eu("tex_aura_14_witchy"),
    },
    e_ = {
        [es.R.ICY]: eu("tex_base_01_icy"),
        [es.R.CRIMSON]: eu("tex_base_02_crimson"),
        [es.R.CHROME]: eu("tex_base_03_chrome"),
        [es.R.GALACTIC]: eu("tex_base_04_galactic"),
        [es.R.FOREST]: eu("tex_base_05_forrest"),
        [es.R.MIDNIGHT]: eu("tex_base_06_mighnight"),
        [es.R.GLACIER]: eu("tex_base_07_glacier"),
        [es.R.ORANGE]: eu("tex_base_08_orange"),
        [es.R.PURPLE]: eu("tex_base_09_pink"),
        [es.R.RED]: eu("tex_base_10_red"),
        [es.R.COBALT]: eu("tex_base_11_cobalt"),
        [es.R.X_RAY]: eu("tex_base_12_x-ray"),
        [es.R.LIQUID]: eu("tex_base_13_liquid"),
        [es.R.BUTTER]: eu("tex_base_14_butter"),
        [es.R.IRIDESCENT]: eu("tex_base_15_iridescent"),
    },
    em = {
        [ed.r.NONE]: null,
        [ed.r.BADDIE_DEFAULT]: { riveId: 1, texture: eu("tex_outfit_01_baddie") },
        [ed.r.TRAVELER_DEFAULT]: { riveId: 10, texture: eu("tex_outfit_10_traveler") },
        [ed.r.STREAMER_DEFAULT]: { riveId: 3, texture: eu("tex_outfit_03_streamer") },
        [ed.r.CAMPER_DEFAULT]: { riveId: 4, texture: eu("tex_outfit_04_camper") },
        [ed.r.ATHLETE_DEFAULT]: { riveId: 5, texture: eu("tex_outfit_05_athlete") },
        [ed.r.COWPOKE_DEFAULT]: { riveId: 6, texture: eu("tex_outfit_06_cowpoke") },
        [ed.r.GOTH_DEFAULT]: { riveId: 7, texture: eu("tex_outfit_07_goth") },
        [ed.r.ASTRONAUT_DEFAULT]: { riveId: 8, texture: eu("tex_outfit_08_astronaut") },
        [ed.r.JESTER_DEFAULT]: { riveId: 9, texture: eu("tex_outfit_09_jester") },
        [ed.r.TRASH_CAN_DEFAULT]: { riveId: 2, texture: eu("tex_outfit_02_trash") },
        [ed.r.MAGE_DEFAULT]: { riveId: 11, texture: eu("tex_outfit_11_mage") },
        [ed.r.MECH_DEFAULT]: { riveId: 12, texture: eu("tex_outfit_12_mech") },
        [ed.r.KNIGHT_DEFAULT]: { riveId: 13, texture: eu("tex_outfit_13_knight") },
        [ed.r.MAGICAL_DEFAULT]: { riveId: 14, texture: eu("tex_outfit_14_magical") },
        [ed.r.BADDIE_MONOCHROME]: { riveId: 1, texture: eu("tex_outfit_01_baddie_monochrome") },
        [ed.r.BADDIE_VIOLET]: { riveId: 1, texture: eu("tex_outfit_01_baddie_violet") },
        [ed.r.BADDIE_PASTEL]: { riveId: 1, texture: eu("tex_outfit_01_baddie_pastel") },
        [ed.r.BADDIE_SUNSET]: { riveId: 1, texture: eu("tex_outfit_01_baddie_sunset") },
        [ed.r.TRAVELER_HAZE]: { riveId: 10, texture: eu("tex_outfit_10_traveler_haze") },
        [ed.r.TRAVELER_MOSS]: { riveId: 10, texture: eu("tex_outfit_10_traveler_moss") },
        [ed.r.TRAVELER_CHRONO]: { riveId: 10, texture: eu("tex_outfit_10_traveler_chrono") },
        [ed.r.TRAVELER_UMBER]: { riveId: 10, texture: eu("tex_outfit_10_traveler_umber") },
        [ed.r.STREAMER_FLAMES]: { riveId: 3, texture: eu("tex_outfit_03_streamer_flames") },
        [ed.r.STREAMER_STRIPES]: { riveId: 3, texture: eu("tex_outfit_03_streamer_stripes") },
        [ed.r.STREAMER_SMILEY]: { riveId: 3, texture: eu("tex_outfit_03_streamer_smiley") },
        [ed.r.STREAMER_VINTAGE]: { riveId: 3, texture: eu("tex_outfit_03_streamer_vintage") },
        [ed.r.CAMPER_PLAID]: { riveId: 4, texture: eu("tex_outfit_04_camper_plaid") },
        [ed.r.CAMPER_SWAMP]: { riveId: 4, texture: eu("tex_outfit_04_camper_swamp") },
        [ed.r.CAMPER_GLAMP]: { riveId: 4, texture: eu("tex_outfit_04_camper_glamp") },
        [ed.r.CAMPER_AMBER]: { riveId: 4, texture: eu("tex_outfit_04_camper_amber") },
        [ed.r.ATHLETE_BLOCKED]: { riveId: 5, texture: eu("tex_outfit_05_athlete_blocked") },
        [ed.r.ATHLETE_FADED]: { riveId: 5, texture: eu("tex_outfit_05_athlete_faded") },
        [ed.r.ATHLETE_CHECKERED]: { riveId: 5, texture: eu("tex_outfit_05_athlete_checkered") },
        [ed.r.ATHLETE_LINED]: { riveId: 5, texture: eu("tex_outfit_05_athlete_lined") },
        [ed.r.COWPOKE_ONYX]: { riveId: 6, texture: eu("tex_outfit_06_cowpoke_onyx") },
        [ed.r.COWPOKE_STEEL]: { riveId: 6, texture: eu("tex_outfit_06_cowpoke_steel") },
        [ed.r.COWPOKE_DENIM]: { riveId: 6, texture: eu("tex_outfit_06_cowpoke_denim") },
        [ed.r.COWPOKE_BLUSH]: { riveId: 6, texture: eu("tex_outfit_06_cowpoke_blush") },
        [ed.r.GOTH_SIREN]: { riveId: 7, texture: eu("tex_outfit_07_goth_siren") },
        [ed.r.GOTH_SERPENT]: { riveId: 7, texture: eu("tex_outfit_07_goth_serpent") },
        [ed.r.GOTH_RAVEN]: { riveId: 7, texture: eu("tex_outfit_07_goth_raven") },
        [ed.r.GOTH_VAMP]: { riveId: 7, texture: eu("tex_outfit_07_goth_vamp") },
        [ed.r.ASTRONAUT_STARDUST]: { riveId: 8, texture: eu("tex_outfit_08_astronaut_stardust") },
        [ed.r.ASTRONAUT_MARTIAN]: { riveId: 8, texture: eu("tex_outfit_08_astronaut_martian") },
        [ed.r.ASTRONAUT_SOLAR]: { riveId: 8, texture: eu("tex_outfit_08_astronaut_solar") },
        [ed.r.ASTRONAUT_COSMIC]: { riveId: 8, texture: eu("tex_outfit_08_astronaut_cosmic") },
        [ed.r.JESTER_CONFETTI]: { riveId: 9, texture: eu("tex_outfit_09_jester_confetti") },
        [ed.r.JESTER_CARNIVAL]: { riveId: 9, texture: eu("tex_outfit_09_jester_carnival") },
        [ed.r.JESTER_SUNRISE]: { riveId: 9, texture: eu("tex_outfit_09_jester_sunrise") },
        [ed.r.JESTER_NIGHTFALL]: { riveId: 9, texture: eu("tex_outfit_09_jester_nightfall") },
        [ed.r.TRASH_CAN_BLACKOUT]: { riveId: 2, texture: eu("tex_outfit_02_trash_blackout") },
        [ed.r.TRASH_CAN_CAUTION]: { riveId: 2, texture: eu("tex_outfit_02_trash_caution") },
        [ed.r.TRASH_CAN_BUBBLEGUM]: { riveId: 2, texture: eu("tex_outfit_02_trash_bubblegum") },
        [ed.r.TRASH_CAN_TOXIC]: { riveId: 2, texture: eu("tex_outfit_02_trash_toxic") },
        [ed.r.MAGE_SHADOW]: { riveId: 11, texture: eu("tex_outfit_11_mage_shadow") },
        [ed.r.MAGE_DUSK]: { riveId: 11, texture: eu("tex_outfit_11_mage_dusk") },
        [ed.r.MAGE_WILDWOOD]: { riveId: 11, texture: eu("tex_outfit_11_mage_wildwood") },
        [ed.r.MAGE_WINTER]: { riveId: 11, texture: eu("tex_outfit_11_mage_winter") },
        [ed.r.MECH_AERO]: { riveId: 12, texture: eu("tex_outfit_12_mech_aero") },
        [ed.r.MECH_VIPER]: { riveId: 12, texture: eu("tex_outfit_12_mech_viper") },
        [ed.r.MECH_ULTRAVIOLET]: { riveId: 12, texture: eu("tex_outfit_12_mech_ultraviolet") },
        [ed.r.MECH_SANDSTORM]: { riveId: 12, texture: eu("tex_outfit_12_mech_sandstorm") },
        [ed.r.KNIGHT_IRON]: { riveId: 13, texture: eu("tex_outfit_13_knight_iron") },
        [ed.r.KNIGHT_RUST]: { riveId: 13, texture: eu("tex_outfit_13_knight_rust") },
        [ed.r.KNIGHT_PETAL]: { riveId: 13, texture: eu("tex_outfit_13_knight_petal") },
        [ed.r.KNIGHT_GLACIER]: { riveId: 13, texture: eu("tex_outfit_13_knight_glacier") },
        [ed.r.MAGICAL_SAPPHIRE]: { riveId: 14, texture: eu("tex_outfit_14_magical_sapphire") },
        [ed.r.MAGICAL_AMETHYST]: { riveId: 14, texture: eu("tex_outfit_14_magical_amethyst") },
        [ed.r.MAGICAL_FROST]: { riveId: 14, texture: eu("tex_outfit_14_magical_frost") },
        [ed.r.MAGICAL_CITRINE]: { riveId: 14, texture: eu("tex_outfit_14_magical_citrine") },
    };
var ex = a(835517),
    eg = (((r = {}).SLOT = "slot"), (r.TRAIT = "trait"), (r.LAYOUT = "layout"), (r.ALWAYS = "always"), r);
let eA = /^tex_(aura|base_\d+|outfit)_/,
    ev = /^tex_(headwear|shoes|wearable|face)_(\d+)_/,
    ew = /^tex_face_([a-z]+)_/i,
    eI = {
        tex_env_labNight_bg: ["Desktop"],
        tex_env_labNight_bg_mobileLandscape: ["MobileLandscape"],
        tex_env_labNight_bg_mobilePortrait: ["MobilePortrait"],
        tex_env_labNight_fgLeft: ["Desktop"],
        tex_env_labNight_fgRight: ["Desktop"],
        tex_env_labNight_mgBottom: ["Desktop"],
        tex_env_labNight_mgBottomMobile: ["MobilePortrait", "MobileLandscape"],
        tex_env_labNight_sky: ["Desktop"],
    },
    eE = {
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
    ej = { columns: 1, rows: 1 },
    eS = { columns: 5, rows: 5 },
    eN = { columns: 6, rows: 8 },
    eC = {
        tex_aura_01_blossom: eS,
        tex_aura_02_prism: eS,
        tex_aura_03_shock: eS,
        tex_aura_04_blaze: eS,
        tex_aura_05_fated: eS,
        tex_aura_06_luster: eS,
        tex_aura_07_bubbly: eS,
        tex_aura_08_spooky: eS,
        tex_aura_09_cursed: eS,
        tex_aura_10_magnetic: eS,
        tex_aura_11_radioactive: eS,
        tex_aura_12_elemental: eS,
        tex_aura_13_shimmer: eS,
        tex_aura_14_witchy: eS,
        tex_wireframe_spritesheet: { columns: 12, rows: 6 },
        tex_wearable_10_sword_spritesheet: { columns: 5, rows: 4 },
        tex_wearable_11_deviantTail_smoke_active_spritesheet: eN,
        tex_wearable_11_deviantTail_smoke_idle_spritesheet: eN,
    },
    eT = [1, 1.25, 1.5, 1.75, 2, 3],
    eR = Math.min(...eT),
    eO = Math.max(...eT);
function eM(e, t) {
    let { url: a, width: r, height: i, widthAt1x: n } = eo[e];
    if (null == n) return a;
    let s = (t * n) / r,
        c = t >= Math.round(r / n);
    if (s >= 1 || c) return a;
    let { columns: d, rows: l } = eC[e] ?? ej,
        o = d * Math.round((r / d) * s),
        u = l * Math.round((i / l) * s);
    return `${a}?width=${o}&height=${u}`;
}
let ey = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"],
    eL = ey.map((e) => `outfit${e}Image`),
    ek = {
        [j.s9.IDLE]: 0,
        [j.s9.INTRODUCTION]: 1,
        [j.s9.FACE]: 2,
        [j.s9.OUTFIT]: 3,
        [j.s9.HEADWEAR]: 4,
        [j.s9.SHOES]: 5,
        [j.s9.WEARABLE]: 6,
        [j.s9.AURA]: 7,
        [j.s9.ASSEMBLED]: 8,
        [j.s9.FINALIZE]: 8,
        [j.s9.SUMMARY]: 8,
    },
    eD = {
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
    eP = { ...eD.MobilePortrait, gradientTopPosition: 25, gradientBottomPosition: 90 };
var eU = a(722872),
    eF = a(574381);
let eG = new Set([1]),
    eH = Object.keys(eo).map((e) => ({
        name: e,
        role: (function (e) {
            if (eA.test(e)) return { type: "slot" };
            let t = eI[e];
            if (null != t) return { type: "layout", layouts: t };
            let a = ev.exec(e);
            if (null != a) return { type: "trait", path: `${a[1]}ID`, riveId: Number(a[2]) };
            let r = ew.exec(e),
                i = null != r ? eE[r[1].toLowerCase()] : void 0;
            return null != i ? { type: "trait", path: "faceID", riveId: i } : { type: "always" };
        })(e),
        swapKey: (0, eF.un)() ? `${e}-${eo[e].riveId}` : e,
    }));
function eK(e) {
    let { faceID: t, headwearID: a, shoesID: r, wearableID: i, chapterID: n, device: s } = e;
    return b.useMemo(() => {
        var e;
        let c;
        return (
            (e = { faceID: t, headwearID: a, shoesID: r, wearableID: i }),
            (c = new Set()),
            eH.forEach((t) => {
                let { name: a, role: r } = t;
                switch (r.type) {
                    case eg.SLOT:
                        break;
                    case eg.TRAIT:
                        e[r.path] === r.riveId && c.add(a);
                        break;
                    case eg.LAYOUT:
                        r.layouts.includes(s) && c.add(a);
                        break;
                    case eg.ALWAYS:
                        ("tex_wireframe_spritesheet" !== a || eG.has(n)) && c.add(a);
                }
            }),
            c
        );
    }, [t, a, r, i, n, s]);
}
var eB = a(435558);
let ez = (0, a(196765).v)(() => ({ hoveredOption: void 0 })),
    eV = (0, eB.debounce)((e) => ez.setState({ hoveredOption: e }), 250);
function eW(e) {
    let { hoveredOption: t, isDelayed: a = !1 } = e;
    a ? eV(t) : (eV.cancel(), ez.setState({ hoveredOption: t }));
}
(a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162));
var eq = a(971940);
async function eY(e) {
    try {
        let t = await fetch(e);
        if (!t.ok) return null;
        return await (0, eq.decodeImage)(new Uint8Array(await t.arrayBuffer()));
    } catch {
        return null;
    }
}
var eX = a(168862);
function eZ(e) {
    let t,
        a,
        { stage: r, isHidden: n } = e,
        s = (0, m.bG)([d.A], () => {
            let e = d.A.windowSize();
            return (function (e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (a) return eR;
                let r = Math.max(e / 945, t / 532) * (0, ex.A)();
                return eT.find((e) => e >= r) ?? eO;
            })(e.width, e.height);
        }),
        [c, l] = b.useState(s);
    s > c && l(s);
    let o =
            ((t = (0, m.bG)([u.A], () => u.A.selectedCharacterTraits)),
            (a = ez((e) => e.hoveredOption)),
            b.useMemo(() => (null != a ? { ...t, [a.trait]: a.optionId } : t), [t, a])),
        h = (0, m.bG)([W.Ay], () => W.Ay.useReducedMotion),
        f = b.useMemo(
            () =>
                (function (e) {
                    let { stage: t, isHidden: a, traits: r, layout: i, textureScale: n } = e,
                        { base: s, shoes: c, outfit: d, face: l, hat: o, wearable: u, aura: h } = (0, P.XI)(r),
                        f = em[d],
                        b = {};
                    return (
                        ey.forEach((e) => {
                            let t = Number(e) === f?.riveId ? f.texture : eh;
                            b[`outfit${e}Image`] = eM(t.name, n);
                        }),
                        {
                            device: i,
                            chapterID: a && t === j.s9.FACE ? ek[j.s9.IDLE] : ek[t],
                            faceID: l,
                            shoesID: c,
                            headwearID: ef[o],
                            wearableID: eb[u],
                            outfitID: f?.riveId ?? 0,
                            auraImage: eM(ep[h].name, n),
                            baseColorImage: eM(e_[s].name, n),
                            ...("MobilePortrait" === i && t === j.s9.INTRODUCTION ? eP : eD[i]),
                            ...b,
                        }
                    );
                })({ stage: r, isHidden: n, traits: o, layout: "Desktop", textureScale: c }),
            [r, n, o, c],
        ),
        [p, x] = b.useState(null),
        g = (function (e) {
            let { visibleDataBinding: t, requestedDataBinding: a, textureScale: r } = e,
                i = (function (e) {
                    let { visibleTextureNames: t, requestedTextureNames: a } = e,
                        [r, i] = b.useState(t),
                        [n, s] = b.useState(t);
                    if (t !== n) {
                        s(t);
                        let e = new Set(r);
                        (t.forEach((t) => e.add(t)), i(e));
                    }
                    return (
                        b.useEffect(() => {
                            let e = setTimeout(() => i(t), 600);
                            return () => clearTimeout(e);
                        }, [t]),
                        b.useMemo(() => new Set([...r, ...a]), [r, a])
                    );
                })({ visibleTextureNames: eK(t), requestedTextureNames: eK(a) });
            return b.useMemo(() => {
                let e;
                return (
                    (e = {}),
                    eH.forEach((t) => {
                        let { name: a, swapKey: n } = t,
                            s = i.has(a) ? eM(a, r) : eh.url;
                        e[n] = { source: { uri: s } };
                    }),
                    e
                );
            }, [i, r]);
        })({ visibleDataBinding: p ?? f, requestedDataBinding: f, textureScale: c }),
        {
            assetLoader: A,
            onLoad: v,
            textureManager: w,
        } = (function () {
            let e = b.useRef(new Map()),
                [t, a] = b.useState(null),
                r = b.useCallback((t) => !!t.isImage && t.name in eo && (e.current.set(t.name, t), !0), []);
            return {
                assetLoader: r,
                onLoad: b.useCallback(() => {
                    (a(e.current), (e.current = new Map()));
                }, []),
                textureManager: b.useMemo(
                    () =>
                        null == t
                            ? null
                            : {
                                  load: eY,
                                  swap: (e) => e.forEach((e, a) => t.get(a)?.setRenderImage(e)),
                                  release: (e) => e.forEach((e) => e.unref()),
                              },
                    [t],
                ),
            };
        })(),
        I = b.useRef(null),
        E = b.useRef(n);
    b.useEffect(() => {
        ((E.current = n), n ? I.current?.pause() : I.current?.play());
    }, [n]);
    let S = b.useCallback(() => {
            (v(), E.current && I.current?.pause());
        }, [v]),
        N = (function (e) {
            let { textureManager: t, referencedAssets: a, initialReferencedAssets: r } = e,
                i = b.useRef(new Map()),
                [n, s] = b.useState(r);
            return (
                b.useEffect(() => {
                    i.current = new Map(
                        Object.entries(r ?? {}).map((e) => {
                            let [t, { source: a }] = e;
                            return [t, a.uri];
                        }),
                    );
                }, [t, r]),
                b.useEffect(() => {
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
            dataBinding: C,
            isOutfitPreloaded: T,
            onDataBindingChange: R,
        } = (function (e) {
            var t;
            let { visibleDataBinding: a, requestedDataBinding: r } = e,
                [i, n] = b.useState({}),
                s = (t = r.outfitID) > 0 ? eL[t - 1] : null,
                c = null != s ? r[s] : void 0,
                d = null == s || a?.[s] === c || i[s] === c,
                l = a ?? r;
            return {
                dataBinding: b.useMemo(() => (null == s || l[s] === c ? l : { ...l, [s]: c }), [l, s, c]),
                isOutfitPreloaded: d,
                onDataBindingChange: b.useMemo(() => {
                    let e = {};
                    return (
                        eL.forEach((t) => {
                            e[t] = (e) => {
                                n((a) => (a[t] === e ? a : { ...a, [t]: e }));
                            };
                        }),
                        e
                    );
                }, []),
            };
        })({ visibleDataBinding: p, requestedDataBinding: f });
    N && T && p !== f && x(f);
    let O = (function (e) {
            let { stage: t, dataBinding: a } = e,
                r = (0, m.bG)([W.Ay], () => W.Ay.useReducedMotion),
                i = t === j.s9.INTRODUCTION && !r,
                [n, s] = b.useState(+!i),
                [c, d] = b.useState(i);
            return (
                i !== c && (d(i), s(+!i)),
                b.useEffect(() => {
                    if (!i) return;
                    let e = Date.now() + 1800,
                        t = requestAnimationFrame(function a() {
                            let r = Math.max(Math.min(Date.now() - e, 1e3), 0);
                            (s((0, eU.easeOutCubic)(r, 0, 1, 1e3)), r >= 1e3 || (t = requestAnimationFrame(a)));
                        });
                    return () => cancelAnimationFrame(t);
                }, [i]),
                b.useMemo(
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
        })({ stage: r, dataBinding: C }),
        M = b.useMemo(() => ({ ...O, mobileLift: 0, reducedMotion: h }), [O, h]);
    return (0, i.jsx)("div", {
        role: "img",
        "aria-label": (0, ei.O)(o),
        className: _()(eX.dw, { [eX.RK]: null != p }),
        children: (0, i.jsx)(er.W, {
            artboard: "AB_Master",
            stateMachine: "SM_Master",
            fit: "layout",
            alignment: "center",
            ref: I,
            assetLoader: A,
            onLoad: S,
            listenOnDocumentBody: !h,
            withReducedMotion: "play",
            dataBinding: M,
            onDataBindingChange: R,
            className: eX.lW,
        }),
    });
}
let eQ = { delay: 0, duration: 350 },
    eJ = { delay: 35, duration: 125 },
    e$ = { delay: 200, duration: 125 },
    e0 = { delay: 175, duration: 175 },
    e1 = { delay: 0, duration: 175 },
    e2 = { delay: 0, duration: 0 },
    e3 = { delay: eQ.delay + eQ.duration, duration: 0 },
    e5 = e$.delay + 500;
var e6 = a(840527);
function e8(e) {
    let { stage: t, isCovered: a, className: r, children: n } = e,
        [s, c] = b.useState(a);
    !a && s && c(!1);
    let d = a && !s,
        { isMountDelayed: l } = (function (e) {
            let [t, a] = b.useState(e);
            return (
                !e && t && a(!1),
                b.useEffect(() => {
                    if (!t) return;
                    let e = setTimeout(() => a(!1), e5);
                    return () => clearTimeout(e);
                }, [t]),
                { isMountDelayed: t }
            );
        })(a),
        o = (0, $.p0)({ value: t, shouldUpdate: !d }) ?? t,
        u = (0, $.p0)({ value: n, shouldUpdate: !d });
    return (0, i.jsxs)(ea, {
        visible: !a,
        enter: e2,
        exit: e3,
        keepMounted: !0,
        onExitComplete: () => c(!0),
        className: r,
        children: [
            (0, i.jsx)("div", { className: e6.q, children: !l && (0, i.jsx)(eZ, { stage: o, isHidden: s }) }),
            null != u && (0, i.jsx)("div", { className: e6.q, children: u }),
        ],
    });
}
function e9(e) {
    let { animatedSrc: t, staticSrc: a, className: r } = e,
        n = (0, m.bG)([W.Ay], () => W.Ay.useReducedMotion);
    return (0, i.jsx)("img", { src: n ? a : t, alt: "", className: r });
}
var e4 = a(740281),
    e7 = a(766089),
    te = a(767988);
let tt = { animatedSrc: e7.A, staticSrc: te.A };
function ta(e) {
    let { activeRoute: t } = e,
        { animatedSrc: a, staticSrc: r } = (0, m.cf)(
            [u.A],
            () => {
                switch (t) {
                    case j.gr.SUMMARY:
                    case j.gr.SHARE:
                        let e = (0, w.o)(u.A.character),
                            { clydeLogoImage: a, clydeLogoStaticImage: r } = (0, w.j)(e);
                        return { animatedSrc: a, staticSrc: r };
                    default:
                        return tt;
                }
            },
            [t],
        );
    return (0, i.jsx)(e9, { animatedSrc: a, staticSrc: r, className: e4.w });
}
var tr = a(756408);
function ti() {
    let e = b.useRef(null);
    return (
        b.useLayoutEffect(() => {
            let t = e.current;
            null != t && ((t.tabIndex = -1), t.focus({ preventScroll: !0 }));
        }, []),
        e
    );
}
var tn = a(834730),
    ts = a(534514),
    tc = a(504736);
function td(e) {
    let { children: t, className: a, ...r } = e;
    return (0, i.jsx)(tn.E, { ...r, className: _()(tc.Q, a), color: "none", children: t });
}
function tl(e) {
    let { children: t, className: a, ...r } = e,
        n = ti();
    return (0, i.jsx)(ts.D, { ...r, ref: n, className: _()(tc.Q, a), color: "none", children: t });
}
var to = a(271427);
function tu(e) {
    let { children: t, className: a, style: r } = e;
    return (0, i.jsx)(td, { tag: "span", variant: "mono-md/bold", className: _()(to.T, a), style: r, children: t });
}
var th = a(852717),
    tf = a(792996),
    tb = a(383931);
function tp(e) {
    let { percent: t } = e;
    return (0, i.jsx)(tu, {
        className: tb.t,
        children: tf.intl.formatToPlainString(th.default.fOGKA4, { percent: t }),
    });
}
var t_ = a(646692);
function tm(e) {
    let { icon: t, value: a, topPercent: r, children: n } = e,
        s = ti(),
        c =
            null != r
                ? tf.intl.formatToPlainString(th.default.USo6cU, { value: a, label: n, percent: r })
                : tf.intl.formatToPlainString(th.default["+CCx/D"], { value: a, label: n });
    return (0, i.jsxs)("div", {
        ref: s,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, i.jsxs)("div", {
                className: t_.dJ,
                "aria-hidden": !0,
                children: [
                    null != r && (0, i.jsx)(tp, { percent: r }),
                    (0, i.jsxs)("div", {
                        className: t_.p,
                        children: [
                            (0, i.jsx)(td, {
                                variant: "heading-xxl/medium",
                                className: t_.Uq,
                                children: a.toLocaleString(tf.intl.currentLocale),
                            }),
                            (0, i.jsxs)("div", {
                                className: t_.Pf,
                                children: [
                                    (0, i.jsx)(t, { size: "xs", color: "currentColor" }),
                                    (0, i.jsx)(td, { variant: "heading-xs/semibold", className: t_.QK, children: n }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(g.A, { children: c }),
        ],
    });
}
var tx = a(303453);
let tg = {
    [I.v7.FACE]: th.default.q8GA6h,
    [I.v7.OUTFIT]: th.default["xGh/fq"],
    [I.v7.OUTFIT_COLOR]: th.default.IgiEDV,
    [I.v7.HAT]: th.default.QqeBEO,
    [I.v7.WEARABLE]: th.default.l57q3i,
    [I.v7.AURA]: th.default["fYp+yq"],
    [I.v7.SHOES]: th.default.BaI4wD,
    [I.v7.BASE]: th.default.SMXZXX,
};
function tA(e) {
    let { customizationOption: t, earnedCount: a, totalCount: r } = e;
    return (0, i.jsx)(tn.E, {
        variant: "body-md/medium",
        color: "text-subtle",
        className: tx.k,
        children: tf.intl.format(tg[t], {
            earnedCount: a,
            totalCount: r,
            countHook: (e, t) =>
                (0, i.jsx)(td, { tag: "span", variant: "mono-md/bold", className: tx.U, children: e }, t),
        }),
    });
}
let tv =
    "https://cdn.discordapp.com/assets/content/48cbcb920dfd15e45e7fe3f297ede63a7891cb0eee9fc44f27053d05d2c6b5ca.mp3";
var tw = a(11044);
function tI(e) {
    let { isMuted: t, volume: a } = (0, m.cf)([u.A], () => ({ isMuted: u.A.isMuted, volume: u.A.volume })),
        r = b.useRef(null);
    return (
        b.useEffect(() => {
            r.current = new Audio(e);
        }, [e]),
        b.useEffect(() => {
            null != r.current && ((r.current.muted = t), (r.current.volume = a));
        }, [t, a]),
        b.useCallback(() => {
            let e = r.current;
            t || 0 === a || null == e || ((e.volume = a), (e.currentTime = 0), e.play());
        }, [t, a])
    );
}
var tE = a(218546),
    tj = a(646514),
    tS = a(403581),
    tN = a(461872),
    tC = a(559265);
function tT(e) {
    let { rarity: t } = e,
        a = b.useMemo(() => ({ "--custom-checkpoint-rarity-color": K.Zy[t] }), [t]);
    return t === tE.K.NITRO
        ? (0, i.jsx)(tS.NitroWheelIcon, { size: "custom", color: tj.A.colors.ICON_SUBTLE, className: tC.d7 })
        : (0, i.jsx)("span", { className: tC.oG, style: a });
}
function tR(e) {
    let {
            traitOption: t,
            groupName: a,
            isSelected: r,
            hideRarity: n,
            onSelectOption: s,
            onHoverOption: c,
            disabled: d = !1,
        } = e,
        { trait: l, optionId: o, rarity: u, asset: h, status: f } = t,
        p = f === tN.eP.LOCKED,
        m = b.useMemo(() => {
            if (null == h) return null;
            let e = Math.round(80 * (0, ex.A)());
            return `${h}?width=${e}&height=${e}`;
        }, [h]);
    return (0, i.jsxs)("label", {
        className: _()(tC.uK, { [tC.wH]: r, [tC.dv]: (0, I.C5)(t), [tC.xt]: p, [tC.Ns]: f === tN.eP.NITRO_LOCKED }),
        onMouseEnter: () => c(t),
        onFocus: function () {
            c(t);
        },
        children: [
            (0, i.jsx)(g.A, {
                children: (0, i.jsx)("input", {
                    type: "radio",
                    name: a,
                    checked: r,
                    disabled: d,
                    "aria-disabled": d ? void 0 : p,
                    onChange: function () {
                        d || p || s(l, o);
                    },
                    "aria-label": (0, I.v2)(t, { skipRarity: n, skipDescription: !1 }),
                }),
            }),
            null != m && (0, i.jsx)("img", { src: m, alt: "", draggable: !1, className: tC.Sl }),
            !n && null != u && (0, i.jsx)(tT, { rarity: u }),
        ],
    });
}
var tO = a(541170),
    tM = a(974862),
    ty = a(142389),
    tL = a(211235),
    tk = a(230532),
    tD = a(110601),
    tP = a(917970);
function tU(e) {
    let { customizationOption: t, traitOptions: a, selectedOption: r, onSelectOption: n, disabled: s = !1 } = e,
        c = b.useId(),
        d = !(0, I.Ux)(t),
        l = tI(
            "https://cdn.discordapp.com/assets/content/fc5527a1a369d8982c6e6fa588f732c7c5364ff00ddd0cf51646f05ad423af36.mp3",
        ),
        o = tI(tv);
    ((0, F.Ay)(() => {
        [tM, tP, ty, tL, tD, tk].forEach((e) => (0, tw.N)(e));
    }),
        b.useEffect(() => () => eW({ hoveredOption: void 0 }), [t]));
    let u = b.useCallback(
            (e, t) => {
                (eW({ hoveredOption: void 0 }), o(), n(e, t));
            },
            [n, o],
        ),
        h = b.useCallback(
            (e) => {
                (l(), eW({ hoveredOption: e.optionId !== r?.optionId ? e : void 0, isDelayed: !0 }));
            },
            [l, r],
        );
    return (0, i.jsx)("div", {
        onMouseLeave: () => eW({ hoveredOption: void 0 }),
        children: (0, i.jsx)("div", {
            role: "radiogroup",
            "aria-label": (0, I.cq)(t),
            className: tO.V,
            onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) || eW({ hoveredOption: void 0 });
            },
            children: a.map((e) =>
                (0, i.jsx)(
                    tR,
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
var tF = a(28863),
    tG = a(793574),
    tH = a(778705),
    tK = a(647093);
function tB(e) {
    let { rarity: t } = e,
        a = b.useMemo(() => ({ "--custom-checkpoint-rarity-background": K.Zy[t] }), [t]);
    return (0, i.jsx)(tu, { className: tK.q, style: a, children: tf.intl.string(K.iG[t]) });
}
var tz = a(829870);
function tV(e) {
    let { title: t, rarity: a, description: r } = e;
    return (0, i.jsxs)("div", {
        className: tz.z,
        children: [
            (0, i.jsxs)("div", {
                className: tz.D,
                children: [
                    (0, i.jsx)(tn.E, { tag: "div", variant: "heading-sm/semibold", color: "text-strong", children: t }),
                    null != a && (0, i.jsx)(tB, { rarity: a }),
                ],
            }),
            null != r && (0, i.jsx)(tn.E, { variant: "body-md/medium", color: "text-subtle", children: r }),
        ],
    });
}
function tW(e) {
    return e.status !== tN.eP.NITRO_LOCKED
        ? (0, I.Oq)(e)
        : tf.intl.format(th.default.E6AfCb, {
              subscribeHook: (e, t) =>
                  (0, i.jsx)(
                      tF.Anchor,
                      {
                          onClick: () => (0, tH.A)({ analyticsLocations: [tG.A.CHECKPOINT, tG.A.CHECKPOINT_TRAIT] }),
                          children: e,
                      },
                      t,
                  ),
          });
}
function tq(e) {
    let { customizationOption: t, selectedOption: a } = e,
        r = ez((e) => e.hoveredOption) ?? a;
    return null == r
        ? null
        : (0, i.jsx)(tV, { title: r.getName(), rarity: (0, I.Ux)(t) ? r.rarity : void 0, description: tW(r) });
}
var tY = a(509063);
function tX(e) {
    let { children: t, details: a } = e;
    return (0, i.jsxs)("div", {
        className: tY.Nz,
        children: [
            (0, i.jsx)("div", { className: tY.fF, children: t }),
            null != a && (0, i.jsx)("div", { className: tY.zH, children: a }),
        ],
    });
}
var tZ = a(51104);
function tQ(e) {
    let { rarity: t, isSavedOption: a, visibleRarities: r, hasNitroSubscription: i } = e;
    return a
        ? tN.eP.UNLOCKED
        : null == t || r.has(t)
          ? t !== tE.K.NITRO || i
              ? tN.eP.UNLOCKED
              : tN.eP.NITRO_LOCKED
          : tN.eP.LOCKED;
}
function tJ(e, t) {
    return e === I.v7.OUTFIT ? (null != t ? (0, P.FA)(t) : void 0) : t;
}
function t$(e) {
    let { customizationOption: t } = e,
        {
            optionIds: a,
            selectedOptionId: r,
            savedOptionId: i,
            onSelectOption: n,
        } = (function (e) {
            let { customizationOption: t, onSelectOption: a } = e,
                r = I.hw[t],
                { selectedOptionId: i, savedOptionId: n } = (0, m.cf)([u.A], () => ({
                    selectedOptionId: tJ(t, u.A.selectedCharacterTraits[r]),
                    savedOptionId: tJ(t, u.A.character?.[r]),
                })),
                s = b.useCallback(
                    (e, t) => {
                        if (t === i) return;
                        let r = (0, P.$C)(e, t),
                            s = tQ({
                                rarity: r,
                                isSavedOption: n === t,
                                visibleRarities: (0, P.mf)(e, u.A.stats),
                                hasNitroSubscription: (0, D.ki)(k.default.getCurrentUser()),
                            });
                        ((0, f.dw)(e, t, s, r), a(e, t));
                    },
                    [a, n, i],
                );
            return {
                optionIds: (function (e, t) {
                    switch (e) {
                        case I.v7.OUTFIT:
                            return P.ps;
                        case I.v7.OUTFIT_COLOR:
                            return (0, P.wD)(t ?? ed.r.NONE);
                        default:
                            return;
                    }
                })(t, i),
                selectedOptionId: i,
                savedOptionId: n,
                onSelectOption: s,
            };
        })({ customizationOption: t, onSelectOption: o.IB }),
        {
            traitOptions: s,
            availableTraitOptions: c,
            totalCount: d,
            earnedCount: l,
        } = (function (e) {
            let { customizationOption: t, savedOptionId: a, rarityOrder: r, optionIds: i } = e,
                n = (0, m.bG)([u.A], () => u.A.stats),
                s = (0, m.bG)([k.default], () => (0, D.ki)(k.default.getCurrentUser())),
                c = b.useMemo(() => (0, I.p8)(r), [r]);
            return b.useMemo(() => {
                let e = I.hw[t],
                    r = t === I.v7.OUTFIT_COLOR ? tZ.x : tZ.$[e],
                    d = (0, P.mf)(e, n),
                    l = [],
                    o = 0,
                    u = 0;
                for (let t of i ?? P.Rk[e]) {
                    let i = (0, P.$C)(e, t),
                        n = tQ({ rarity: i, isSavedOption: a === t, visibleRarities: d, hasNitroSubscription: s }),
                        c = n === tN.eP.UNLOCKED && (i !== tE.K.NITRO || s);
                    (null != i && o++,
                        null != i && c && u++,
                        l.push({
                            trait: e,
                            optionId: t,
                            asset: P.qM[e][t]?.thumbnail,
                            rarity: i,
                            status: n,
                            getName: () => {
                                let e = r[t];
                                return null != e ? tf.intl.string(e) : "";
                            },
                        }));
                }
                l.sort(c);
                let h = l.filter((e) => {
                    let { status: t } = e;
                    return t !== tN.eP.LOCKED;
                });
                return { traitOptions: l, availableTraitOptions: h, totalCount: o, earnedCount: u };
            }, [t, s, i, c, a, n]);
        })({ customizationOption: t, savedOptionId: i, rarityOrder: K.FG, optionIds: a }),
        h = b.useMemo(
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
            b.useEffect(() => {
                i || null == n || s || r(n.trait, n.optionId);
            }, [n, s, r, i]);
        })({ availableTraitOptions: c, selectedOptionId: r, onSelectOption: o.IB }),
        { traitOptions: s, selectedOption: h, totalCount: d, earnedCount: l, onSelectOption: n }
    );
}
function t0(e) {
    let { customizationOption: t } = e,
        {
            traitOptions: a,
            selectedOption: r,
            totalCount: n,
            earnedCount: s,
            onSelectOption: c,
        } = t$({ customizationOption: t });
    return (0, i.jsxs)(tX, {
        details: (0, i.jsx)(tq, { customizationOption: t, selectedOption: r }),
        children: [
            (0, i.jsx)(tA, { customizationOption: t, earnedCount: s, totalCount: n }),
            (0, i.jsx)(tU, { customizationOption: t, traitOptions: a, selectedOption: r, onSelectOption: c }),
        ],
    });
}
var t1 = a(71678);
function t2(e) {
    let { children: t, className: a } = e;
    return (0, i.jsx)("div", { className: _()(t1.n, a), children: t });
}
function t3() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.emojis);
    return (0, i.jsxs)(t2, {
        children: [
            (0, i.jsx)(tm, {
                icon: tr.EmojiSlightlySmilingFaceIcon,
                value: Math.round(e?.numEmojisSent ?? 0),
                topPercent: (0, H.bD)(e?.numEmojisSentPercentile),
                children: tf.intl.string(th.default.ZTDCIv),
            }),
            (0, i.jsx)(t0, { customizationOption: I.v7.SHOES }),
        ],
    });
}
var t5 = a(937383);
function t6(e) {
    var t;
    let a,
        r,
        { selectedOption: n } = e,
        s = ez((e) => e.hoveredOption) ?? n;
    return null == s
        ? null
        : (0, i.jsx)(tV, {
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      s.getName(),
                      " ",
                      (0, i.jsxs)(tn.E, {
                          tag: "span",
                          variant: "heading-sm/semibold",
                          color: "text-subtle",
                          children: [
                              "/ ",
                              ((t = s.optionId),
                              null != (r = null != (a = (0, P.FA)(t)) ? tZ.$[L.V.OUTFIT][a] : void 0)
                                  ? tf.intl.string(r)
                                  : ""),
                          ],
                      }),
                  ],
              }),
              description: tW(s),
          });
}
function t8(e) {
    let { disabled: t } = e,
        { traitOptions: a, selectedOption: r, onSelectOption: n } = t$({ customizationOption: I.v7.OUTFIT_COLOR });
    return (0, i.jsx)(tX, {
        details: (0, i.jsx)(t6, { selectedOption: r }),
        children: (0, i.jsx)(tU, {
            customizationOption: I.v7.OUTFIT_COLOR,
            traitOptions: a,
            selectedOption: r,
            onSelectOption: n,
            disabled: t,
        }),
    });
}
function t9() {
    return (0, i.jsx)(tX, {
        children: (0, i.jsx)(tV, {
            title: tf.intl.string(th.default.zsYYN1),
            description: tf.intl.string(th.default.BkuqWx),
        }),
    });
}
function t4(e) {
    let { lastColorwayIdByOutfitId: t, disabled: a } = e,
        { traitOptions: r, selectedOption: n, onSelectOption: s } = t$({ customizationOption: I.v7.OUTFIT }),
        c = b.useMemo(() => {
            let e = [];
            return (
                r.forEach((a) => {
                    let r = t.get(a.optionId);
                    e.push({
                        trait: a.trait,
                        optionId: a.optionId,
                        asset: P.qM[L.V.OUTFIT][r ?? a.optionId]?.thumbnail,
                        rarity: a.rarity,
                        status: a.status,
                        getName: a.getName,
                    });
                }),
                e
            );
        }, [t, r]);
    return (0, i.jsx)(tX, {
        details: (0, i.jsx)(tq, { customizationOption: I.v7.OUTFIT, selectedOption: n }),
        children: (0, i.jsx)(tU, {
            customizationOption: I.v7.OUTFIT,
            traitOptions: c,
            selectedOption: n,
            onSelectOption: function (e, a) {
                s(e, t.get(a) ?? a);
            },
            disabled: a,
        }),
    });
}
function t7(e) {
    let { customizationOption: t, disabled: a } = e,
        { traitOptions: r, selectedOption: n, onSelectOption: s } = t$({ customizationOption: t });
    return (0, i.jsx)(tX, {
        details: (0, i.jsx)(tq, { customizationOption: t, selectedOption: n }),
        children: (0, i.jsx)(tU, {
            customizationOption: t,
            traitOptions: r,
            selectedOption: n,
            onSelectOption: s,
            disabled: a,
        }),
    });
}
function ae(e) {
    let { customizationOption: t, lastColorwayIdByOutfitId: a, disabled: r } = e;
    switch (t) {
        case I.v7.OUTFIT:
            return (0, i.jsx)(t4, { lastColorwayIdByOutfitId: a, disabled: r });
        case I.v7.OUTFIT_COLOR:
            return (0, i.jsx)(t8, { disabled: r });
        default:
            return (0, i.jsx)(t7, { customizationOption: t, disabled: r });
    }
}
function at(e) {
    let { id: t, customizationOption: a, disabled: r } = e,
        n = (function () {
            let e = (0, m.bG)([u.A], () => u.A.selectedCharacterTraits[L.V.OUTFIT]),
                [t, a] = b.useState(new Map()),
                r = null != e ? (0, P.FA)(e) : void 0;
            return (null != e && null != r && t.get(r) !== e && a(new Map(t).set(r, e)), t);
        })(),
        s = (0, m.bG)(
            [u.A],
            () => {
                if (a !== I.v7.OUTFIT_COLOR) return !1;
                let e = u.A.selectedCharacterTraits[L.V.OUTFIT];
                return null == e || (0, P.nb)(L.V.OUTFIT, e);
            },
            [a],
        );
    return (0, i.jsx)("div", {
        role: "tabpanel",
        id: t,
        "aria-label": (0, I.cq)(a),
        tabIndex: s ? 0 : void 0,
        className: t5.n,
        children: s
            ? (0, i.jsx)(t9, {})
            : (0, i.jsx)(ae, { customizationOption: a, lastColorwayIdByOutfitId: n, disabled: r }),
    });
}
var aa = a(265872),
    ar = a(320448),
    ai = a(315710),
    an = a(444927);
let as = { width: 180, height: 240 },
    ac = { width: 220, height: 293 };
function ad(e, t) {
    let { width: a, height: r } = e;
    return {
        "--custom-checkpoint-game-art-width": t,
        "--custom-checkpoint-game-art-height": `calc(var(--custom-checkpoint-game-art-width) * ${r} / ${a})`,
    };
}
let al = ad(as, "clamp(135px, 17.5vh, 180px)"),
    ao = ad(ac, "clamp(165px, 21.5vh, 220px)"),
    au = {
        "--custom-checkpoint-primary": K.Kr,
        "--custom-checkpoint-dark-cyan": K.ow,
        "--custom-checkpoint-button-border": K.ow,
        "--custom-checkpoint-button-shadow": K.zj,
        "--custom-checkpoint-white": K.Ve,
        "--custom-checkpoint-guild-card-background": K.LM,
        "--custom-checkpoint-background-gradient-start": K.bI,
    };
var ah = a(580814);
function af(e) {
    let {
            menuRef: t,
            options: a,
            activeCustomizationOption: r,
            returnRef: n,
            onSelectOption: s,
            onClose: c,
            focusMenu: d,
            onMouseEnter: l,
            onMouseLeave: o,
        } = e,
        u = b.useRef([]),
        h = (0, an.A)(() => Math.max(a.indexOf(r), 0)),
        [f, p] = b.useState(null);
    function m(e) {
        let t = (e + a.length) % a.length;
        (p(t), u.current[t]?.focus());
    }
    return (
        (0, ai.tj)(t, { disable: !d, disableReturn: !0 }),
        b.useEffect(() => {
            d && u.current[h]?.focus();
        }, [h, d]),
        (0, i.jsx)("div", {
            ref: t,
            role: "menu",
            tabIndex: -1,
            "aria-label": tf.intl.string(th.default.Zl5vPW),
            className: ah.MK,
            style: au,
            onKeyDown: function (e) {
                if ("Escape" === e.key) return;
                e.stopPropagation();
                let t = u.current.indexOf(e.target);
                switch (e.key) {
                    case "ArrowDown":
                        (e.preventDefault(), m(t + 1));
                        break;
                    case "ArrowUp":
                        (e.preventDefault(), m(t - 1));
                        break;
                    case "Home":
                        (e.preventDefault(), m(0));
                        break;
                    case "End":
                        (e.preventDefault(), m(a.length - 1));
                        break;
                    case "Tab":
                        (c(), n.current?.focus());
                }
            },
            onMouseEnter: l,
            onMouseLeave: () => {
                (d || p(null), o?.());
            },
            children: a.map((e, t) =>
                (0, i.jsx)(
                    "button",
                    {
                        ref: (e) => {
                            u.current[t] = e;
                        },
                        type: "button",
                        role: "menuitemradio",
                        "aria-checked": e === r,
                        tabIndex: -1,
                        className: _()(ah.AS, { [ah.dT]: f === t }),
                        onFocus: () => p(t),
                        onMouseEnter: (e) => {
                            (p(t), d && e.currentTarget.focus());
                        },
                        onClick: () => s(e),
                        children: (0, i.jsx)(tn.E, {
                            tag: "span",
                            variant: "heading-sm/semibold",
                            color: "none",
                            children: (0, I.cq)(e),
                        }),
                    },
                    e,
                ),
            ),
        })
    );
}
var ab = a(421773);
let ap = [I.v7.AURA, I.v7.WEARABLE, I.v7.SHOES, I.v7.HAT, I.v7.FACE];
var a_ = a(769909);
let am = [I.v7.BASE, I.v7.OUTFIT_COLOR, I.v7.OUTFIT];
function ax(e) {
    var t;
    let a,
        {
            activeCustomizationOption: r,
            onSelectOption: n,
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
            isMenuOpen: p,
            focusMenu: m,
            openMenu: x,
            closeMenu: A,
            handleRequestClose: v,
            selectMenuOption: w,
            onMouseEnter: E,
            onMouseLeave: j,
        } = (function (e) {
            let { activeCustomizationOption: t, onSelectOption: a, blockedTrait: r, disabled: i } = e,
                n = b.useRef(null),
                s = b.useRef(null),
                c = ap.includes(t),
                [d, l] = b.useState(c ? t : null);
            c && d !== t && l(t);
            let o = i || null != r,
                [u, h] = b.useState(!1),
                {
                    isHovered: f,
                    setIsHovered: p,
                    onMouseEnter: _,
                    onMouseLeave: m,
                    cancelTimers: x,
                } = (0, ab.A)(100, 300);
            function g() {
                (x(), p(!1), h(!1));
            }
            return {
                moreTabRef: n,
                menuRef: s,
                isMoreOptionActive: c,
                moreTabOption: d,
                isMenuOpen: !o && f,
                focusMenu: u,
                openMenu: function () {
                    null != r ? z(r) : i || (x(), h(!0), p(!0));
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
        })({ activeCustomizationOption: r, onSelectOption: n, blockedTrait: d, disabled: l }),
        S = h ? "more" : r,
        { tabListRef: N, focusAdjacentTab: C } =
            ((t = [...am, "more"]),
            {
                tabListRef: (a = b.useRef(null)),
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
        T = b.useId(),
        R = null != d ? T : void 0,
        O = null != f ? (0, I.cq)(f) : null;
    function M(e) {
        null != d ? z(d) : l || (n(e), A());
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
                            A();
                            break;
                        case "ArrowLeft":
                        case "ArrowRight":
                        case "Home":
                        case "End":
                            (e.preventDefault(), e.stopPropagation(), A(), y(C(t, e.key)));
                    }
                })(t, e),
            onKeyUp: (t) => {
                " " === t.key && (t.preventDefault(), t.stopPropagation(), L(e));
            },
            className: _()(a_.Mf, { [a_.OS]: "more" === e, [a_.vu]: t }),
        };
    }
    return (0, i.jsxs)("div", {
        ref: N,
        role: "tablist",
        "aria-label": tf.intl.string(th.default.Zl5vPW),
        className: a_.vR,
        children: [
            am.map((e) => {
                let t = (0, I.cq)(e);
                return (0, i.jsx)(
                    "button",
                    {
                        ...k(e),
                        "aria-label": t,
                        children: (0, i.jsx)(tn.E, {
                            tag: "span",
                            variant: "heading-sm/semibold",
                            color: "none",
                            children: t,
                        }),
                    },
                    e,
                );
            }),
            (0, i.jsx)(aa.Y, {
                targetElementRef: o,
                shouldShow: p,
                onRequestOpen: x,
                onRequestClose: v,
                position: "right",
                align: "top",
                spacing: 8,
                renderPopout: () =>
                    (0, i.jsx)(af, {
                        menuRef: u,
                        options: ap,
                        activeCustomizationOption: r,
                        returnRef: o,
                        focusMenu: m,
                        onMouseEnter: E,
                        onMouseLeave: j,
                        onSelectOption: w,
                        onClose: A,
                    }),
                children: (e) =>
                    (0, i.jsxs)("button", {
                        ...e,
                        ...k("more"),
                        ref: o,
                        "aria-label":
                            null != O
                                ? tf.intl.formatToPlainString(th.default.QX1VPx, { category: O })
                                : tf.intl.string(th.default.jepsQ6),
                        "aria-haspopup": "menu",
                        "aria-expanded": p,
                        onMouseEnter: E,
                        onMouseLeave: j,
                        children: [
                            (0, i.jsx)(tn.E, {
                                tag: "span",
                                variant: "heading-sm/semibold",
                                color: "none",
                                children: O ?? tf.intl.string(th.default["iXpQc+"]),
                            }),
                            (0, i.jsx)(ar.ChevronSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
                        ],
                    }),
            }),
            null != d && (0, i.jsx)(g.A, { id: T, children: (0, I.Cz)(d) }),
        ],
    });
}
var ag = a(195464);
function aA() {
    let e = b.useId(),
        t = b.useId(),
        [a, r] = b.useState(I.v7.BASE),
        n = U().find((e) => e === I.hw[a]),
        s = (0, m.bG)([u.A], () => u.A.isSaving),
        c = ti();
    return (0, i.jsxs)(t2, {
        className: ag.nj,
        children: [
            (0, i.jsx)(ts.D, {
                ref: c,
                variant: "heading-xl/medium",
                color: "none",
                className: ag.DD,
                children: tf.intl.string(th.default["q2nj/Z"]),
            }),
            (0, i.jsxs)("div", {
                className: ag.ho,
                children: [
                    (0, i.jsx)(ax, {
                        tabIdPrefix: e,
                        panelId: t,
                        activeCustomizationOption: a,
                        onSelectOption: r,
                        blockedTrait: n,
                        disabled: s,
                    }),
                    (0, i.jsx)(at, { id: t, customizationOption: a, disabled: s }),
                ],
            }),
        ],
    });
}
var av = a(81466);
function aw() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.games);
    return (0, i.jsxs)(t2, {
        children: [
            (0, i.jsx)(tm, {
                icon: av.CalendarIcon,
                value: Math.round(e?.totalDaysPlayed ?? 0),
                topPercent: (0, H.bD)(e?.totalDaysPlayedPercentile),
                children: tf.intl.string(th.default["4N5p4D"]),
            }),
            (0, i.jsx)(t0, { customizationOption: I.v7.AURA }),
        ],
    });
}
var aI = a(687966);
function aE() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.games);
    return (0, i.jsxs)(t2, {
        children: [
            (0, i.jsx)(tm, {
                icon: aI.GameControllerIcon,
                value: Math.round(e?.totalGamesPlayed ?? 0),
                topPercent: (0, H.bD)(e?.totalGamesPlayedPercentile),
                children: tf.intl.string(th.default.HM2fjf),
            }),
            (0, i.jsx)(t0, { customizationOption: I.v7.WEARABLE }),
        ],
    });
}
var aj = a(534890),
    aS = a(350363);
function aN() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.messages);
    return (0, i.jsxs)(t2, {
        children: [
            (0, i.jsx)(tm, {
                icon: aj.ChatIcon,
                value: Math.round(e?.numMessagesSent ?? 0),
                topPercent: (0, H.bD)(e?.numMessagesSentPercentile),
                children: tf.intl.string(aS.default.wWKySP),
            }),
            (0, i.jsx)(t0, { customizationOption: I.v7.OUTFIT }),
        ],
    });
}
var aC = a(664121);
function aT() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.guilds?.guilds[0]);
    return (0, i.jsxs)(t2, {
        children: [
            (0, i.jsx)(tm, {
                icon: aC.ServerIcon,
                value: Math.round(e?.numDaysInteracted ?? 0),
                topPercent: (0, H.bD)(e?.numDaysInteractedPercentile),
                children: tf.intl.string(th.default["M+a+t1"]),
            }),
            (0, i.jsx)(t0, { customizationOption: I.v7.HAT }),
        ],
    });
}
var aR = a(831544);
function aO() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.voice),
        t = Math.round(e?.totalVoiceMinutes ?? 0);
    return (0, i.jsxs)(t2, {
        children: [
            (0, i.jsx)(tm, {
                icon: aR.MicrophoneIcon,
                value: t,
                topPercent: (0, H.bD)(e?.totalVoiceMinutesPercentile),
                children: tf.intl.string(th.default["3/T12E"]),
            }),
            (0, i.jsx)(t0, { customizationOption: I.v7.FACE }),
        ],
    });
}
function aM(e) {
    let { route: t } = e;
    switch (t) {
        case j.gr.VOICE_FACE:
            return (0, i.jsx)(aO, {});
        case j.gr.MESSAGES_OUTFIT:
            return (0, i.jsx)(aN, {});
        case j.gr.SERVERS_HEADWEAR:
            return (0, i.jsx)(aT, {});
        case j.gr.EMOJI_SHOES:
            return (0, i.jsx)(t3, {});
        case j.gr.GAMES_WEARABLE:
            return (0, i.jsx)(aE, {});
        case j.gr.GAME_TIME_AURA:
            return (0, i.jsx)(aw, {});
        case j.gr.FINALIZE_CHARACTER:
            return (0, i.jsx)(aA, {});
        default:
            return null;
    }
}
var ay = a(358618),
    aL = a(983851),
    ak = a(793920),
    aD = a(893007),
    aP = a(738964);
function aU(e) {
    return `${Math.round(e)}%`;
}
function aF() {
    let { volume: e, isMuted: t } = (0, m.cf)([u.A], () => ({ volume: u.A.volume, isMuted: u.A.isMuted })),
        a = b.useRef(null),
        r = b.useRef(null),
        [n, s] = b.useState(!1),
        [c, d] = b.useState(!1),
        [l, h] = b.useState(!1),
        [f, p] = b.useState(!1),
        _ = b.useRef(null),
        x = b.useRef(!1),
        g = t ? 0 : Math.round(100 * e),
        A = !f && (n || c || l),
        v = 0 === g ? ay.VoiceXIcon : g > 50 ? aL.VoiceNormalIcon : ak.VoiceLowIcon;
    (b.useLayoutEffect(() => {
        null != r.current && (r.current.volume = e);
    }, [e]),
        (0, F.l0)(() => {
            null != _.current && clearTimeout(_.current);
        }));
    let w = b.useCallback((e) => {
            ((0, o.ls)(e / 100),
                h(!0),
                null != _.current && clearTimeout(_.current),
                (_.current = setTimeout(() => h(!1), 1e3)));
        }, []),
        I = b.useCallback(() => {
            (s(!0), p(!1));
        }, []),
        E = b.useCallback(() => s(!1), []),
        j = b.useCallback((e) => {
            d(!x.current && e.target.matches(":focus-visible"));
        }, []),
        S = b.useCallback(() => {
            ((x.current = !0), d(!1));
        }, []),
        N = b.useCallback(() => {
            ((x.current = !1), d(!0));
        }, []),
        C = b.useCallback(() => {
            s(a.current?.matches(":hover") ?? !1);
        }, []),
        T = b.useCallback((e) => {
            e.currentTarget.contains(e.relatedTarget) || ((x.current = !1), d(!1), p(!1));
        }, []),
        R = b.useCallback(
            (e) => {
                "Escape" === e.key &&
                    A &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    null != _.current && clearTimeout(_.current),
                    h(!1),
                    p(!0),
                    a.current?.querySelector("button")?.focus());
            },
            [A],
        );
    return (0, i.jsxs)("div", {
        ref: a,
        className: aP.kL,
        onMouseEnter: I,
        onMouseLeave: E,
        onFocus: j,
        onPointerDownCapture: S,
        onBlur: T,
        onKeyDownCapture: N,
        onKeyDown: R,
        children: [
            (0, i.jsx)(Q, {
                size: "sm",
                className: A ? aP.Gg : void 0,
                "aria-label": tf.intl.string(t ? aS.default.GN0uv6 : aS.default.pjF33X),
                onClick: o.K8,
                children: (0, i.jsx)(v, { size: "xs", color: "currentColor" }),
            }),
            A
                ? (0, i.jsx)("div", {
                      className: aP.xJ,
                      children: (0, i.jsx)(aD.A, {
                          value: g,
                          minValue: 0,
                          maxValue: 100,
                          onChange: w,
                          onChangeEnd: C,
                          formatValue: aU,
                          "aria-label": tf.intl.string(tf.t.xPHVBs),
                      }),
                  })
                : null,
            (0, i.jsx)("audio", {
                ref: r,
                autoPlay: !0,
                loop: !0,
                muted: t,
                children: (0, i.jsx)("source", {
                    src: "https://cdn.discordapp.com/assets/content/d271231f4934992caed169c11586a1da060d37b5fd8804b56666b547f03836bd.mp3",
                }),
            }),
        ],
    });
}
let aG =
        "https://cdn.discordapp.com/assets/content/914f6f5e36c680d00944ba2e6278b45f8b1da722692e101b5986cf7be56c4979.mp3",
    aH =
        "https://cdn.discordapp.com/assets/content/d1dfc8280cfbd578f18728598db893d807d9ece6b511389848b7308c399f07a0.mp3";
var aK = a(477155),
    aB = a(866665),
    az = a(417270),
    aV = a(935286),
    aW = a(405433),
    aq = a(289873),
    aY = a(621466);
function aX(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    b.useEffect(() => {
        if (!a) return (window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r));
        function r(a) {
            (0, aY.vq)(a.target, HTMLTextAreaElement) ||
                (0, aY.vq)(a.target, HTMLInputElement) ||
                (a.key === e && t(a));
        }
    }, [e, t, a]);
}
var aZ = a(652215),
    aQ = a(650583);
function aJ(e) {
    let { source: t, onClick: a, disabled: r = !1 } = e,
        i = tI(t),
        n = b.useRef(!1);
    function s() {
        r || i();
    }
    return {
        playSound: s,
        onPointerDown: function (e) {
            e.button === aZ.hE4.PRIMARY && ((n.current = !0), s());
        },
        onKeyDown: function (e) {
            (e.key === aQ.dh.ENTER || e.key === aQ.dh.SPACE) && ((n.current = !0), e.repeat || s());
        },
        onClickWithSound: function () {
            (n.current || s(), (n.current = !1), a());
        },
    };
}
var a$ = a(753875);
function a0(e) {
    let { "aria-label": t, "aria-describedby": a, icon: r, onClick: n, disabled: s = !1 } = e,
        {
            playSound: c,
            onPointerDown: d,
            onKeyDown: l,
            onClickWithSound: o,
        } = aJ({ source: aG, onClick: n, disabled: s });
    return (
        aX(
            "ArrowLeft",
            function (e) {
                (e.repeat || c(), n());
            },
            s,
        ),
        (0, i.jsx)(Q, {
            onPointerDown: d,
            onKeyDown: l,
            onClick: o,
            size: "md",
            className: _()(a$.A4, a$.aX),
            "aria-disabled": s,
            "aria-describedby": a,
            "aria-label": t,
            children: (0, i.jsx)(r, { color: "currentColor" }),
        })
    );
}
function a1(e) {
    let {
            "aria-label": t,
            "aria-describedby": a,
            children: r,
            onClick: n,
            size: s,
            className: c,
            disabled: d = !1,
        } = e,
        {
            playSound: l,
            onPointerDown: o,
            onKeyDown: u,
            onClickWithSound: h,
        } = aJ({ source: aH, onClick: n, disabled: d });
    return (
        aX(
            "ArrowRight",
            function (e) {
                (e.repeat || l(), n());
            },
            d,
        ),
        (0, i.jsx)(J, {
            onPointerDown: o,
            onKeyDown: u,
            onClick: h,
            size: s,
            className: _()(a$.A4, a$.K2, c),
            "aria-disabled": d,
            "aria-describedby": a,
            "aria-label": t,
            children: r,
        })
    );
}
function a2(e) {
    let { "aria-describedby": t, onClick: a, disabled: r } = e;
    return (0, i.jsx)(a0, {
        "aria-label": tf.intl.string(tf.t["13/7kX"]),
        "aria-describedby": t,
        icon: aK.ArrowSmallLeftIcon,
        onClick: a,
        disabled: r,
    });
}
function a3(e) {
    let { onClick: t } = e,
        { onPointerDown: a, onKeyDown: r, onClickWithSound: n } = aJ({ source: aH, onClick: t });
    return (0, i.jsx)(aB.m, {
        text: tf.intl.string(th.default.cWdGf9),
        ariaHidden: !0,
        children: (0, i.jsx)(Q, {
            onPointerDown: a,
            onKeyDown: r,
            onClick: n,
            size: "md",
            className: _()(a$.A4, a$.eZ),
            "aria-label": tf.intl.string(th.default.cWdGf9),
            children: (0, i.jsx)(az.RetryIcon, { color: "currentColor" }),
        }),
    });
}
function a5(e) {
    let { "aria-describedby": t, onClick: a, disabled: r } = e;
    return (0, i.jsx)(a1, {
        size: "md",
        "aria-label": tf.intl.string(tf.t.PDTjLN),
        "aria-describedby": t,
        onClick: a,
        disabled: r,
        children: (0, i.jsx)(aV.ArrowSmallRightIcon, { color: "currentColor" }),
    });
}
function a6(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsxs)(a1, {
        size: "custom",
        className: a$.GA,
        "aria-label": tf.intl.string(tf.t.i4jeWR),
        onClick: t,
        disabled: a,
        children: [
            (0, i.jsx)(td, { variant: "mono-md/normal", className: a$.Pf, children: tf.intl.string(tf.t.i4jeWR) }),
            (0, i.jsx)(aV.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function a8(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsxs)(a1, {
        size: "custom",
        className: _()(a$.GA, a$.Bq),
        "aria-label": tf.intl.string(tf.t.RDE0Sc),
        onClick: t,
        disabled: a,
        children: [
            (0, i.jsx)(tn.E, {
                variant: "mono-md/bold",
                color: "none",
                className: a$.Pf,
                children: tf.intl.string(tf.t.RDE0Sc),
            }),
            (0, i.jsx)(aW.ShareIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function a9(e) {
    let { onBack: t, isRouteBlocked: a, blockedTraitDescriptionId: r } = e,
        n = (0, m.bG)([u.A], () => u.A.isSaving);
    return (0, i.jsx)(a2, {
        "aria-describedby": r,
        onClick: function () {
            n || t();
        },
        disabled: n || a,
    });
}
function a4(e) {
    let { onNext: t, navigate: a, isRouteBlocked: r, blockedTraitDescriptionId: s } = e,
        c = (0, m.bG)([u.A], () => u.A.isSaving),
        d = c || r;
    async function l() {
        if (c) return;
        let e = (0, P.XI)(u.A.selectedCharacterTraits);
        (await (0, o.yE)(e)) ? t() : (0, n.P0)({ text: tf.intl.string(tf.t.fEptJP), variant: "critical" });
    }
    function h() {
        a(l);
    }
    let {
        playSound: f,
        onPointerDown: b,
        onKeyDown: p,
        onClickWithSound: x,
    } = aJ({
        source: "https://cdn.discordapp.com/assets/content/1514d999969512ff06ade75018213676ebaf3698af26c0b1b7d3243ec480f920.mp3",
        onClick: h,
        disabled: d,
    });
    return (
        aX(
            "ArrowRight",
            function (e) {
                (e.repeat || f(), h());
            },
            d,
        ),
        (0, i.jsxs)(J, {
            onPointerDown: b,
            onKeyDown: p,
            onClick: x,
            size: "custom",
            className: _()(a$.A4, a$.K2, a$.GA),
            "aria-disabled": d,
            "aria-describedby": s,
            "aria-label": tf.intl.string(tf.t["R3BPH+"]),
            children: [
                (0, i.jsx)(tn.E, {
                    variant: "mono-md/normal",
                    color: "none",
                    className: a$.Pf,
                    children: tf.intl.string(tf.t["R3BPH+"]),
                }),
                c
                    ? (0, i.jsx)(aq.y, { type: aq.t.SPINNING_CIRCLE_SIMPLE, className: a$.u1, itemClassName: a$.$N })
                    : (0, i.jsx)(aV.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
            ],
        })
    );
}
function a7(e) {
    let { activeRoute: t, blockedTrait: a, blockedTraitDescriptionId: r, onBack: n, onNext: s, onReplay: c } = e,
        d = null != a,
        l = b.useMemo(() => (0, eB.throttle)((e) => e(), 500, { trailing: !1 }), []);
    function o(e) {
        null != a ? z(a) : l(e);
    }
    switch (t) {
        case j.gr.HOME:
            return null;
        case j.gr.FINALIZE_CHARACTER:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a9, { onBack: () => o(n), isRouteBlocked: d, blockedTraitDescriptionId: r }),
                    (0, i.jsx)(a4, { onNext: s, navigate: o, isRouteBlocked: d, blockedTraitDescriptionId: r }),
                ],
            });
        case j.gr.SUMMARY:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a2, { onClick: () => l(n) }),
                    (0, i.jsx)(a3, { onClick: () => l(c) }),
                    (0, i.jsx)(a8, { onClick: () => l(s) }),
                ],
            });
        case j.gr.SHARE:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(a2, { onClick: () => l(n) }), (0, i.jsx)(a6, { onClick: () => l(s) })],
            });
        default:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a2, { "aria-describedby": r, onClick: () => o(n), disabled: d }),
                    (0, i.jsx)(a5, { "aria-describedby": r, onClick: () => o(s), disabled: d }),
                ],
            });
    }
}
function re(e) {
    let { className: t } = e;
    return (0, i.jsx)(e9, {
        animatedSrc:
            "https://cdn.discordapp.com/assets/content/02e9ae4cdbec0b2adef22c9a5659f5c7340e399cc8932e8af6d41e62a37644ae.png",
        staticSrc:
            "https://cdn.discordapp.com/assets/content/f08be0abd0d224b5f7e1e5d6c1ef8e4d24cddcb712e2c624dcc6ea3d136818d5.png",
        className: t,
    });
}
var rt = a(771639);
let ra = { "--custom-checkpoint-screen-vertical-inset": "88px" };
function rr(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: rt.n, style: ra, children: t });
}
var ri = a(639331);
let rn = {
    "--custom-checkpoint-intro-fade-in-delay": "1800ms",
    "--custom-checkpoint-intro-fade-in-duration": "1000ms",
};
function rs() {
    let e = (0, m.bG)([u.A], () => u.A.fetchState !== u.T.SUCCESS || null != u.A.stats),
        t = ti();
    return (0, i.jsx)(rr, {
        children: (0, i.jsxs)("div", {
            className: ri.Qs,
            style: rn,
            children: [
                (0, i.jsxs)("div", {
                    ref: t,
                    className: ri.Ok,
                    role: "heading",
                    "aria-level": 2,
                    children: ["2026", !e && (0, i.jsx)(re, { className: ri.gi })],
                }),
                (0, i.jsxs)("div", {
                    className: ri.eH,
                    children: [
                        (0, i.jsx)(td, {
                            tag: "p",
                            variant: "heading-xl/medium",
                            children: tf.intl.string(e ? th.default["7YmUVu"] : th.default["Fyr+NW"]),
                        }),
                        !e &&
                            (0, i.jsx)(td, {
                                tag: "p",
                                variant: "heading-xl/medium",
                                children: tf.intl.string(th.default["2GRr6H"]),
                            }),
                    ],
                }),
            ],
        }),
    });
}
(a(134528), a(947204));
var rc = a(675970),
    rd = a(559106),
    rl = a(366056),
    ro = a(292801),
    ru = a(155718),
    rh = a(294454),
    rf = a(489414),
    rb = a(878358),
    rp = a(383233),
    r_ = a(819648),
    rm = a(677059);
function rx(e) {
    let { children: t } = e;
    return (0, i.jsx)(td, { variant: "heading-xxl/medium", className: rm.h, children: t });
}
function rg(e) {
    let { accessibilityLabel: t, className: a, children: r, ref: n } = e;
    return (0, i.jsxs)("div", {
        ref: n,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, i.jsx)("div", { className: a, "aria-hidden": !0, children: r }),
            (0, i.jsx)(g.A, { children: t }),
        ],
    });
}
var rA = a(100391);
function rv(e) {
    let { icon: t, children: a } = e;
    return (0, i.jsxs)("div", {
        className: rA.D,
        children: [
            (0, i.jsx)(t, { size: "md", color: "currentColor" }),
            (0, i.jsx)(td, { variant: "heading-lg/semibold", className: rA.Q, children: a }),
        ],
    });
}
function rw(e) {
    let { icon: t, children: a } = e;
    return (0, i.jsxs)("div", {
        className: rA.D,
        children: [
            (0, i.jsx)(t, { size: "md", color: "currentColor" }),
            (0, i.jsx)(tl, { variant: "heading-lg/semibold", className: rA.Q, children: a }),
        ],
    });
}
var rI = a(456410);
function rE(e) {
    let { name: t, label: a, checked: r, onSelect: n, children: s } = e;
    return (0, i.jsx)(rd.vN, {
        within: !0,
        children: (0, i.jsxs)("label", {
            className: _()(rI.uK, { [rI.KD]: r }),
            children: [
                (0, i.jsx)(g.A, {
                    children: (0, i.jsx)("input", { type: "radio", name: t, checked: r, onChange: n, "aria-label": a }),
                }),
                r ? (0, i.jsx)("div", { className: rI.Gt, "aria-hidden": !0 }) : null,
                (0, i.jsx)("div", { className: rI.Nr, "aria-hidden": !0, children: s }),
            ],
        }),
    });
}
function rj() {
    let e = (0, m.bG)([u.A], () => u.A.character),
        t = (0, m.bG)([u.A], () => u.A.stats),
        a = b.useId(),
        r = ti(),
        s = b.useMemo(() => {
            var a, r;
            return ((a = e),
            (r = t),
            null != a && null != r
                ? [rc.Q.CHARACTER_ONLY, rc.Q.DEFAULT, rc.Q.STATS_ONLY]
                : null != a
                  ? [rc.Q.CHARACTER_ONLY]
                  : null != r
                    ? [rc.Q.STATS_ONLY]
                    : []).map((a) => ({ cardType: a, checkpointData: (0, r_.Go)(a, e, t) }));
        }, [e, t]),
        [c, d] = b.useState(
            () =>
                (
                    s.find((e) => {
                        let { cardType: t } = e;
                        return t === rc.Q.DEFAULT;
                    }) ?? s.at(0)
                )?.cardType,
        ),
        l = s.find((e) => {
            let { cardType: t } = e;
            return t === c;
        }),
        h = tI(tv),
        {
            onPointerDown: p,
            onKeyDown: _,
            onClickWithSound: x,
        } = aJ({
            source: aH,
            onClick: function () {
                if (null == l) return;
                let { cardType: e, checkpointData: t } = l;
                (0, rh.fO)({
                    message: new rp.Ay({
                        content: "",
                        components: [{ type: ru.I5.CHECKPOINT_CARD, id: (0, rf.X1)("0"), checkpointData: t }],
                    }),
                    source: "checkpoint",
                    customSendHandler: async (t, a, r) => {
                        let { withMessage: i } = a;
                        r(!0);
                        try {
                            (await (0, o.jA)(t, i ?? "", e),
                                (0, f.Pe)(e),
                                (0, rh.Be)(),
                                (0, n.P0)({ text: tf.intl.string(tf.t.kwmYkt), variant: "success" }));
                        } catch {
                            (0, n.P0)({ text: tf.intl.string(tf.t.iufib1), variant: "critical" });
                        } finally {
                            r(!1);
                        }
                    },
                });
            },
        });
    return null == l
        ? null
        : (0, i.jsx)(rr, {
              children: (0, i.jsxs)("div", {
                  className: rI.uM,
                  children: [
                      (0, i.jsxs)("div", {
                          className: rI.wx,
                          children: [
                              (0, i.jsxs)(rg, {
                                  ref: r,
                                  className: rI.R_,
                                  accessibilityLabel: tf.intl.string(th.default.P5zyko),
                                  children: [
                                      (0, i.jsx)(rv, {
                                          icon: rl.ExperimentalCheckpointIcon,
                                          children: tf.intl.string(aS.default.ir6nEQ),
                                      }),
                                      (0, i.jsx)(td, {
                                          variant: "display-lg",
                                          className: rI.Vy,
                                          children: tf.intl.string(tf.t.RDE0Sc),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: rI.h_,
                                  children: (0, i.jsx)(rx, { children: tf.intl.string(th.default.KXDPot) }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          role: "radiogroup",
                          "aria-label": tf.intl.string(th.default.KXDPot),
                          className: rI.kR,
                          children: s.map((e) => {
                              let { cardType: t, checkpointData: r } = e;
                              return (0, i.jsx)(
                                  rE,
                                  {
                                      name: a,
                                      label: (function (e) {
                                          switch (e) {
                                              case rc.Q.CHARACTER_ONLY:
                                                  return tf.intl.string(th.default.tUU3fe);
                                              case rc.Q.DEFAULT:
                                                  return tf.intl.string(th.default.DZQzJn);
                                              case rc.Q.STATS_ONLY:
                                                  return tf.intl.string(th.default.e2UHGT);
                                          }
                                      })(t),
                                      checked: t === l.cardType,
                                      onSelect: () => {
                                          (h(), d(t));
                                      },
                                      children: (0, i.jsx)(rb.A, { checkpointData: r }),
                                  },
                                  t,
                              );
                          }),
                      }),
                      (0, i.jsxs)(J, {
                          onPointerDown: p,
                          onKeyDown: _,
                          onClick: x,
                          size: "custom",
                          className: rI.sY,
                          "aria-label": tf.intl.string(tf.t.I3ltXO),
                          children: [
                              (0, i.jsx)(tn.E, {
                                  variant: "mono-md/bold",
                                  color: "none",
                                  className: rI.RC,
                                  children: tf.intl.string(tf.t.I3ltXO),
                              }),
                              (0, i.jsx)(ro.ArrowAngleRightUpIcon, { size: "refresh_sm", color: "currentColor" }),
                          ],
                      }),
                  ],
              }),
          });
}
var rS = a(206701),
    rN = a(782134),
    rC = a(998304),
    rT = a(975571),
    rR = a(427262),
    rO = a(438389);
let rM = (0, rC.j5)(K.Kr);
function ry(e) {
    let { onStart: t } = e,
        a = (0, m.bG)([k.default], () => k.default.getCurrentUser()),
        r = (0, rR.tx)(a),
        n = (0, m.bG)([W.Ay], () => W.Ay.useReducedMotion),
        { playSound: s, onPointerDown: c, onKeyDown: d, onClickWithSound: l } = aJ({ source: aH, onClick: t });
    return (
        aX("ArrowRight", function (e) {
            (e.repeat || s(), t());
        }),
        (0, i.jsxs)(rr, {
            children: [
                (0, i.jsxs)("div", {
                    className: rO.Qs,
                    children: [
                        (0, i.jsxs)("div", {
                            className: rO.wx,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: rO.Qq,
                                    children: [
                                        (0, i.jsx)(tl, {
                                            variant: "display-lg",
                                            className: rO.DD,
                                            children: tf.intl.string(aS.default["CdU/PF"]),
                                        }),
                                        (0, i.jsx)(td, {
                                            variant: "heading-xxl/medium",
                                            children: tf.intl.formatToPlainString(th.default.xhZ23b, { username: r }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", {
                                    className: rO.CB,
                                    children: (0, i.jsx)(rS.U, {
                                        artboard: "Entry",
                                        className: rO.lW,
                                        fit: "contain",
                                        withReducedMotion: "short-loop",
                                        dataBinding: { iconColor: rM, reducedMotion: n },
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(J, {
                            onPointerDown: c,
                            onKeyDown: d,
                            onClick: l,
                            size: "custom",
                            className: rO.ni,
                            "aria-label": tf.intl.string(tf.t.I0v0Qv),
                            children: [
                                (0, i.jsx)(rN.PlayIcon, { size: "refresh_sm", color: "currentColor" }),
                                (0, i.jsx)(td, {
                                    variant: "mono-md/normal",
                                    className: rO.qK,
                                    children: tf.intl.string(tf.t.I0v0Qv),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: rO.qr,
                    children: [
                        (0, i.jsx)(td, {
                            variant: "body-sm/medium",
                            className: rO.ed,
                            children: tf.intl.format(th.default.hcNhyq, {
                                learnMoreHook: (e, t) =>
                                    (0, i.jsx)(
                                        tF.Anchor,
                                        {
                                            className: rO.nf,
                                            href: rT.A.getArticleURL(aZ.MVz.CHECKPOINT),
                                            useDefaultUnderlineStyles: !1,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, i.jsx)(td, {
                            variant: "body-md/medium",
                            className: rO.al,
                            children: tf.intl.format(aS.default.g476ZL, { name: "Exyl" }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var rL = a(565645),
    rk = a(141881);
function rD(e) {
    let { children: t } = e;
    return (0, i.jsx)(tu, { className: rk.l, children: t });
}
var rP = a(765671),
    rU = a(663385),
    rF = a(469228),
    rG = a(406956);
let rH = (0, rC.j5)(K.Kr);
function rK(e) {
    let { value: t, alignment: a = "left", className: r } = e,
        n = (0, m.bG)([W.Ay], () => W.Ay.useReducedMotion),
        [s, c] = b.useState(0),
        { isLoaded: d, onLoad: l } = (function () {
            let [e, t] = b.useState(!1);
            return { isLoaded: e, onLoad: b.useCallback(() => t(!0), []) };
        })(),
        o = n ? t : s;
    b.useEffect(() => {
        if (n || !d) return;
        let e = performance.now(),
            a = requestAnimationFrame(function r(i) {
                let n = Math.min((i - e) / 500, 1);
                (c(Math.round(t * n)), n < 1 && (a = requestAnimationFrame(r)));
            });
        return () => cancelAnimationFrame(a);
    }, [t, n, d]);
    let u = "center" === a ? rU.m : rF.w;
    return (0, i.jsxs)("div", {
        className: _()(rG.lY, r),
        children: [
            (0, i.jsx)("div", { className: rG.VL, children: t }),
            (0, i.jsx)(u, {
                className: rG.lW,
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: o, TextColor: rH },
                onLoad: l,
            }),
            (0, i.jsx)(g.A, { children: t.toLocaleString(tf.intl.currentLocale) }),
        ],
    });
}
var rB = a(434911);
function rz(e) {
    let { value: t } = e,
        { ref: a, width: r } = (0, rP.Ay)(),
        { ref: n, width: s } = (0, rP.Ay)(),
        c = null != r && null != s ? Math.min(1, r / s) : 1;
    return (0, i.jsxs)("div", {
        ref: a,
        className: rB.ai,
        style: { height: 200 * c },
        children: [
            (0, i.jsx)("span", { ref: n, className: _()(rB.Qq, rB.xP), children: t }),
            (0, i.jsx)(rK, { value: t }),
        ],
    });
}
function rV(e) {
    let { value: t } = e;
    return (0, i.jsxs)("div", {
        className: rB.dJ,
        children: [
            "number" == typeof t
                ? (0, i.jsx)(rz, { value: t })
                : (0, i.jsx)(td, { variant: "heading-xxl/medium", className: rB.Qq, children: t }),
            (0, i.jsx)(re, { className: rB.gi }),
        ],
    });
}
var rW = a(445199),
    rq = a(205524),
    rY = a(690521),
    rX = a(152321);
let rZ = [0, 0, 2],
    rQ = [0, 1, 0],
    rJ = [0, 0, 0],
    r$ = `
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
    r0 = `
precision mediump float;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

uniform sampler2D u_texture;

void main() {
  highp vec4 texelColor = texture2D(u_texture, v_texcoord);
  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);
}
`,
    r1 = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    r2 = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    r3 = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];
function r5(e) {
    let t,
        { emoji: a } = e,
        [r, n] = b.useState(null),
        [s, c] = b.useState(null),
        d = b.useRef(new Image()),
        [l, o] = b.useState(null),
        [u, h] = b.useState(!1),
        f = b.useRef(0),
        p = b.useRef(0),
        x = b.useRef(45),
        g = b.useRef(45),
        A = (0, m.bG)([W.Ay], () => W.Ay.useReducedMotion),
        v = 70 * !A,
        w = 40 * !A,
        I = b.useRef(v),
        E = b.useRef(w),
        j = b.useRef(!1),
        S = b.useRef(0),
        N = b.useRef(0);
    ((t = b.useRef(null)),
        b.useEffect(() => {
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
        b.useEffect(() => {
            let e,
                a = 0,
                i = r?.getContext("webgl");
            if (null == i || null == r || null == s) return;
            t.current = i;
            let n = i.createShader(i.VERTEX_SHADER),
                c = i.createShader(i.FRAGMENT_SHADER);
            if (null == n || null == c) return;
            if (
                (i.shaderSource(n, r$),
                i.shaderSource(c, r0),
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
                i.bufferData(i.ARRAY_BUFFER, new Float32Array(r3), i.STATIC_DRAW),
                i.vertexAttribPointer(f, 3, i.FLOAT, !1, 0, 0),
                i.enableVertexAttribArray(f));
            let _ = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, _),
                (e = new Float32Array(r1)),
                i.bufferData(i.ARRAY_BUFFER, e, i.STATIC_DRAW));
            let m = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, m), i.bufferData(i.ARRAY_BUFFER, new Float32Array(r2), i.STATIC_DRAW));
            let A = rW.DF(60);
            return (
                (a = requestAnimationFrame(function e() {
                    if (null == i || null == r) return;
                    (i.viewport(0, 0, i.canvas.width, i.canvas.height), i.enable(i.CULL_FACE), i.enable(i.DEPTH_TEST));
                    let t = rW.DF(x.current),
                        n = rW.DF(g.current);
                    (i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT),
                        i.useProgram(d),
                        i.enableVertexAttribArray(l),
                        i.bindBuffer(i.ARRAY_BUFFER, _),
                        i.vertexAttribPointer(l, 3, i.FLOAT, !1, 0, 0),
                        i.enableVertexAttribArray(o),
                        i.bindBuffer(i.ARRAY_BUFFER, m),
                        i.vertexAttribPointer(o, 2, i.FLOAT, !1, 0, 0));
                    let s = r.clientWidth / r.clientHeight,
                        c = rq.fN(rq.vt(), A, s, 1, 2e3),
                        f = rq.t5(rq.vt(), rZ, rJ, rQ),
                        p = rq.lw(rq.vt(), c, f),
                        v = rq.vt();
                    (rq.eL(v, v, t), rq.Z8(v, v, n));
                    let w = rq.lw(rq.vt(), p, v),
                        I = rq.vt();
                    (rq.B8(I, v),
                        rq.mg(I, I),
                        i.uniformMatrix4fv(b, !1, I),
                        i.uniformMatrix4fv(u, !1, w),
                        i.uniform1i(h, 0),
                        i.drawArrays(i.TRIANGLES, 0, 36),
                        (a = requestAnimationFrame(e)));
                })),
                () => cancelAnimationFrame(a)
            );
        }, [x, g, r, s]));
    let C = b.useCallback(() => {
        let e = s?.getContext("2d");
        null != s &&
            null != e &&
            ((e.fillStyle = "black"),
            e.fillRect(0, 0, s.width, s.height),
            e.drawImage(d.current, 0, 0, s.width, s.height),
            (e.fillStyle = K.Kr),
            e.fillRect(0, 0, s.width, 1),
            e.fillRect(0, 0, 1, s.height),
            e.fillRect(0, s.height - 1, s.width, 1),
            e.fillRect(s.width - 1, 0, 1, s.height),
            o(a),
            h(!0));
    }, [a, d, s]);
    (b.useEffect(() => {
        null != s &&
            ((d.current.crossOrigin = "anonymous"), (d.current.src = (0, rY.Ez)(a, 256)), (d.current.onload = C));
    }, [a, C, d, s]),
        b.useEffect(
            () => (
                !(function e(t) {
                    let a = 0.001 * t,
                        r = Math.min(a - p.current, 0.1);
                    if (((g.current += -E.current * r), (x.current += -I.current * r), !j.current)) {
                        if (Math.abs(I.current) > v) {
                            let e = I.current > 0 ? 1 : -1;
                            I.current -= 2 * e * window.devicePixelRatio;
                        }
                        if (Math.abs(E.current) > w) {
                            let e = E.current > 0 ? 1 : -1;
                            E.current -= 2 * e * window.devicePixelRatio;
                        }
                    }
                    ((p.current = a), (f.current = requestAnimationFrame(e)));
                })(0),
                () => cancelAnimationFrame(f.current)
            ),
            [v, w],
        ));
    let T = b.useCallback((e) => {
            ((j.current = !0), (I.current = 0), (E.current = 0), (S.current = e.clientX), (N.current = e.clientY));
        }, []),
        R = b.useCallback((e) => {
            if (j.current) {
                let t = (e.clientX - S.current) / window.devicePixelRatio;
                ((I.current = -((e.clientY - N.current) / window.devicePixelRatio) * (100 / window.devicePixelRatio)),
                    (E.current = -t * (100 / window.devicePixelRatio)),
                    (S.current = e.clientX),
                    (N.current = e.clientY));
            }
        }, []),
        O = b.useCallback(() => {
            j.current = !1;
        }, []);
    return (
        b.useEffect(
            () => (
                window.addEventListener("mouseup", O),
                window.addEventListener("mousemove", R),
                () => {
                    (window.removeEventListener("mouseup", O), window.removeEventListener("mousemove", R));
                }
            ),
            [R, O],
        ),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("canvas", {
                    className: _()(rX.Ji, { [rX.q4]: !u }),
                    ref: n,
                    height: 512,
                    width: 512,
                    onMouseDown: T,
                }),
                (0, i.jsx)("canvas", { className: rX.R, ref: c, height: 256, width: 256 }),
            ],
        })
    );
}
var r6 = a(826820);
let r8 = [];
function r9(e) {
    let { emojiStats: t } = e,
        a = Math.round(t?.numEmojisSent ?? 0),
        r = (0, H.bD)(t?.numEmojisSentPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: r6.dJ,
                children: [
                    (0, i.jsx)(rw, {
                        icon: tr.EmojiSlightlySmilingFaceIcon,
                        children: tf.intl.string(th.default.ZTDCIv),
                    }),
                    (0, i.jsx)(rK, { value: a }),
                ],
            }),
            (0, i.jsx)(rx, {
                children:
                    null != r
                        ? tf.intl.format(th.default.o7vDrk, {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rD, { children: e }, t),
                          })
                        : tf.intl.format(th.default.NFptic, { numEmojis: a }),
            }),
        ],
    });
}
function r4(e) {
    let { numEmojisSent: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: r6.dJ,
                children: [
                    (0, i.jsx)(rw, {
                        icon: tr.EmojiSlightlySmilingFaceIcon,
                        children: tf.intl.string(th.default.ZTDCIv),
                    }),
                    (0, i.jsx)(rV, { value: t }),
                ],
            }),
            (0, i.jsx)(rx, { children: tf.intl.format(th.default["660/Rr"], { numEmojis: (0, H.wj)(t) }) }),
        ],
    });
}
function r7() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.emojis),
        t = (0, m.bG)([u.A], () => (0, H.y7)(u.A.stats)),
        a = (0, m.bG)([u.A], () => u.A.globalStats?.emojis),
        r = !t && null != a,
        n = (r ? a.emojis : e?.emojis) ?? r8,
        [s, c] = b.useState(0),
        d = n[s],
        l = tI(tv);
    return (0, i.jsx)(rr, {
        children: (0, i.jsxs)("div", {
            className: r6.kL,
            children: [
                (0, i.jsx)("div", { className: r6.KY, children: null != d && (0, i.jsx)(r5, { emoji: d }) }),
                (0, i.jsxs)("div", {
                    className: r6.C,
                    children: [
                        r ? (0, i.jsx)(r4, { numEmojisSent: a.numEmojisSent }) : (0, i.jsx)(r9, { emojiStats: e }),
                        (0, i.jsx)("div", {
                            className: r6.gm,
                            children: n.map((e, t) =>
                                (0, i.jsx)(
                                    ie,
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
function ie(e) {
    let { emoji: t, rank: a, isActive: r, onClick: n } = e,
        s = !(0, m.bG)([W.Ay], () => W.Ay.useReducedMotion) && !0 === t.animated;
    return (0, i.jsxs)(Q, {
        size: "custom",
        className: r6._X,
        onClick: n,
        "aria-label": tf.intl.formatToPlainString(th.default["S5+pRg"], { emojiName: t.name, rank: a }),
        "aria-pressed": r,
        children: [
            (0, i.jsx)(rL.A, { className: r6.Zg, emojiId: t.id, emojiName: t.name, animated: s }),
            (0, i.jsx)(td, { variant: "mono-md/bold", className: r6.Tm, children: a }),
        ],
    });
}
var it = a(360450),
    ia = a(214947),
    ir = a(939249),
    ii = a(597770),
    is = a(559647),
    ic = a(95369),
    id = a(570287),
    il = a(486020),
    io = a(801305);
let iu = [],
    ih = (0, rC.j5)(K.Kr),
    ib = { r: 0, g: 0, b: 0, a: 1 },
    ip = {
        "Avatar01/Stroke": ib,
        "Avatar01/Fill": ih,
        "Avatar02/Stroke": ib,
        "Avatar02/Fill": ih,
        "Avatar03/Stroke": ib,
        "Avatar03/Fill": ih,
        "Avatar04/Stroke": ib,
        "Avatar04/Fill": ih,
        "Avatar05/Stroke": ib,
        "Avatar05/Fill": ih,
        ConnectorColor: ih,
    };
function i_(e) {
    return null != e ? il.Ay.getUserAvatarURL(e, !1, 160, "png") : void 0;
}
function im(e) {
    let t,
        { route: a, onNextStep: r, onPreviousStep: n } = e,
        s = (0, m.bG)([u.A], () => u.A.stats?.users ?? iu),
        c = (0, m.bG)([u.A], () => u.A.stats?.sidekick),
        d = (0, m.bG)([k.default], () => k.default.getCurrentUser()),
        l = (0, m.bG)([W.Ay], () => W.Ay.useReducedMotion),
        o = b.useRef(null),
        h = b.useRef(void 0),
        f = (function (e, t) {
            let [a, r] = b.useState({ route: e, hasShownSquad: e === j.gr.SQUAD, isTransitioning: !1 });
            switch (
                (a.route !== e &&
                    r({
                        route: e,
                        hasShownSquad: a.hasShownSquad || e === j.gr.SQUAD,
                        isTransitioning: !t && a.route === j.gr.SQUAD && e === j.gr.SIDEKICK,
                    }),
                b.useEffect(() => {
                    if (!a.isTransitioning) return;
                    let e = setTimeout(() => r((e) => ({ ...e, isTransitioning: !1 })), 1500);
                    return () => clearTimeout(e);
                }, [a.isTransitioning]),
                e)
            ) {
                case j.gr.SQUAD_TRANSITION:
                    return 5 * !!a.hasShownSquad;
                case j.gr.SQUAD:
                    return 1;
                case j.gr.SIDEKICK:
                    return a.isTransitioning ? 2 : 3;
                case j.gr.SIDEKICK_LEAVE:
                    return t ? 3 : 4;
                default:
                    return 0;
            }
        })(a, l);
    ((t = b.useRef(!0)),
        b.useEffect(() => {
            if (a !== j.gr.SIDEKICK_LEAVE) {
                t.current = !1;
                return;
            }
            if (t.current) return void n();
            if (l) return void r();
            let e = setTimeout(r, 1e3);
            return () => clearTimeout(e);
        }, [r, n, l, a]));
    let [p, x] = s,
        A = (0, rR.tx)(p) ?? "",
        v = (0, rR.tx)(x) ?? "",
        w = A.toLocaleUpperCase(),
        I = v.toLocaleUpperCase(),
        E = (0, rR.tx)(c?.user) ?? "",
        S = [
            { user: c?.user, name: E },
            { user: p, name: A },
            { user: x, name: v },
        ].filter((e) => null != e.user),
        N = s.length < 2,
        C = a === j.gr.SIDEKICK || a === j.gr.SIDEKICK_LEAVE;
    b.useEffect(() => () => clearInterval(h.current), []);
    let T = b.useCallback(() => {
        (clearInterval(h.current),
            (h.current = setInterval(() => {
                let e = o.current?.getProperties();
                e?.twoFriends?.value === N &&
                    e?.reducedMotion?.value === l &&
                    e?.["Avatar01/Username"]?.value === E.toLocaleUpperCase() &&
                    (o.current?.play(), clearInterval(h.current));
            }, 50)));
    }, [l, E, N]);
    return (0, i.jsxs)(rr, {
        children: [
            (0, i.jsx)(it.m, {
                ref: o,
                className: io.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: T,
                withReducedMotion: "play",
                dataBinding: {
                    ...ip,
                    AnimationState: f,
                    "Avatar01/img": i_(c?.user),
                    "Avatar02/img": i_(x),
                    "Avatar03/img": i_(p),
                    "Avatar04/img": i_(c?.user),
                    "Avatar05/img": i_(d),
                    "Avatar01/Username": E.toLocaleUpperCase(),
                    "Avatar02/Username": I,
                    "Avatar03/Username": w,
                    "Avatar04/Username": E.toLocaleUpperCase(),
                    twoFriends: N,
                    reducedMotion: l,
                },
            }),
            a === j.gr.SQUAD_TRANSITION && (0, i.jsx)(ix, {}),
            a === j.gr.SQUAD &&
                (0, i.jsxs)("div", {
                    className: io.Qs,
                    children: [
                        (0, i.jsx)(ig, {
                            title: tf.intl.string(aS.default.OzY5Ns),
                            accessibilityLabel: tf.intl.string(th.default.OSo1fB),
                            description: tf.intl.string(th.default.EqdLDd),
                        }),
                        (0, i.jsx)(g.A, {
                            tag: "ul",
                            children: S.map((e, t) => (0, i.jsx)("li", { children: e.name }, t)),
                        }),
                    ],
                }),
            C &&
                null != c &&
                (0, i.jsxs)("div", {
                    className: _()(io.Qs, io.yG),
                    children: [
                        (0, i.jsxs)("div", {
                            className: io.Cv,
                            children: [
                                (0, i.jsx)(ig, {
                                    title: tf.intl.string(aS.default["+uwOHt"]),
                                    accessibilityLabel: tf.intl.string(th.default.X4EiRH),
                                    description: tf.intl.string(th.default["/ctmGw"]),
                                }),
                                (0, i.jsx)(g.A, { children: E }),
                                (0, i.jsx)(iA, { sidekick: c }),
                            ],
                        }),
                        (0, i.jsx)(iv, { user: c.user, username: E }),
                    ],
                }),
        ],
    });
}
function ix() {
    let e = ti();
    return (0, i.jsx)("div", {
        ref: e,
        className: _()(io.Qs, io.kY),
        children: (0, i.jsx)(rx, { children: tf.intl.string(th.default["6RSp5q"]) }),
    });
}
function ig(e) {
    let { title: t, accessibilityLabel: a, description: r } = e,
        n = ti();
    return (0, i.jsxs)("div", {
        className: io.wx,
        children: [
            (0, i.jsxs)(rg, {
                ref: n,
                className: io.R_,
                accessibilityLabel: a,
                children: [
                    (0, i.jsx)(rv, { icon: ia.FriendsIcon, children: tf.intl.string(aS.default.ZQakPR) }),
                    (0, i.jsx)(td, { variant: "display-lg", className: io.Vy, children: t }),
                ],
            }),
            (0, i.jsx)(rx, { children: r }),
        ],
    });
}
function iA(e) {
    let { sidekick: t } = e,
        a = Math.round(t.numMessagesSent),
        r = Math.round(t.numVoiceMinutes);
    return (0, i.jsxs)("div", {
        className: io.M1,
        children: [
            (0, i.jsxs)("div", {
                className: io.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(aj.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(td, { variant: "heading-xxl/medium", className: io.wk, children: a }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: io.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(aR.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(td, { variant: "heading-xxl/medium", className: io.wk, children: r }),
                ],
            }),
            (0, i.jsx)(g.A, {
                children: tf.intl.formatToPlainString(th.default.NafXAs, { numMessages: a, numMinutes: r }),
            }),
        ],
    });
}
function iv(e) {
    let { user: t, username: a } = e,
        [r, s] = b.useState(""),
        [c, d] = b.useState(!1),
        [l, u] = b.useState(!1),
        h = (0, id.A)(t.id),
        p = r.length > 0 && r.length <= 250 && !c && !l,
        m = c ? tf.intl.string(tf.t.fjcCk5) : tf.intl.formatToPlainString(tf.t["0ZQw/X"], { name: a });
    return h
        ? (0, i.jsxs)("div", {
              className: io.OG,
              children: [
                  (0, i.jsx)("textarea", {
                      className: io.yB,
                      value: r,
                      onChange: (e) => s(e.target.value),
                      maxLength: 250,
                      disabled: c || l,
                      placeholder: m,
                      "aria-label": m,
                  }),
                  (0, i.jsxs)("div", {
                      className: io.n,
                      children: [
                          (0, i.jsx)(ir.D, {
                              className: io.KD,
                              onClick: function () {
                                  ((0, f.nr)(t.id),
                                      (0, ic.A)({
                                          giftRecipient: t,
                                          analyticsLocations: [tG.A.CHECKPOINT, tG.A.CHECKPOINT_SIDEKICK],
                                      }));
                              },
                              "aria-label": tf.intl.string(tf.t.Ve9Ge6),
                              children: (0, i.jsx)(ii.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                          (0, i.jsx)(ir.D, {
                              className: _()(io.KD, { [io.r9]: !p }),
                              onClick: async function () {
                                  if (p) {
                                      u(!0);
                                      try {
                                          (await (0, o.fr)(r, t.id),
                                              s(""),
                                              d(!0),
                                              x.O.announce(tf.intl.string(tf.t.fjcCk5), "polite"));
                                      } catch {
                                          (0, n.P0)({ text: tf.intl.string(tf.t.fEptJP), variant: "critical" });
                                      } finally {
                                          u(!1);
                                      }
                                  }
                              },
                              "aria-disabled": !p,
                              "aria-label": tf.intl.string(tf.t.oeb1vg),
                              children: (0, i.jsx)(is.SendMessageIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var iw = a(9767);
function iI(e) {
    let { games: t } = e,
        a = Math.round(t?.totalDaysPlayed ?? 0),
        r = (0, H.bD)(t?.totalDaysPlayedPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: iw.dJ,
                children: [
                    (0, i.jsx)(rw, { icon: av.CalendarIcon, children: tf.intl.string(th.default["4N5p4D"]) }),
                    (0, i.jsx)(rK, { value: a }),
                ],
            }),
            (0, i.jsx)(rx, {
                children:
                    null != r
                        ? tf.intl.format(th.default["4FXB/m"], {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rD, { children: e }, t),
                          })
                        : tf.intl.format(th.default.iCKjh6, { numDays: a }),
            }),
        ],
    });
}
function iE(e) {
    let { numUsersPlayedEveryDay: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: iw.dJ,
                children: [
                    (0, i.jsx)(rw, { icon: av.CalendarIcon, children: tf.intl.string(th.default["dx4+NI"]) }),
                    (0, i.jsx)(rV, { value: t }),
                ],
            }),
            (0, i.jsx)(rx, { children: tf.intl.string(th.default["7nfXWu"]) }),
        ],
    });
}
function ij() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.games),
        t = (0, m.bG)([u.A], () => (0, H.uO)(u.A.stats)),
        a = (0, m.bG)([u.A], () => u.A.globalStats?.games?.numUsersPlayedEveryDay),
        r = !t && null != a;
    return (0, i.jsx)(rr, {
        children: (0, i.jsxs)("div", {
            className: iw.kL,
            children: [
                (0, i.jsx)(e9, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/312abde9b19fcf85150d507de3f33096992506459b895ab3ea8d92c8f1e04a28.png",
                    className: iw.HW,
                }),
                (0, i.jsx)("div", {
                    className: iw.C,
                    children: r ? (0, i.jsx)(iE, { numUsersPlayedEveryDay: a }) : (0, i.jsx)(iI, { games: e }),
                }),
            ],
        }),
    });
}
var iS = a(95362),
    iN = a(828062);
function iC(e) {
    let { children: t } = e;
    return (0, i.jsx)(td, { variant: "display-lg", className: iN.V, children: t });
}
function iT(e) {
    let { children: t } = e;
    return (0, i.jsx)(tl, { variant: "display-lg", className: iN.V, children: t });
}
var iR = a(109112),
    iO = a(311043),
    iM = a(883053);
function iy(e) {
    let { rank: t, className: a } = e;
    return (0, i.jsxs)(tu, { className: _()(iM.T, a), children: ["#", t] });
}
var iL = a(770178),
    ik = a(102189);
let iD = { fireOnMount: !0, fireOnDepsChange: !0 };
function iP(e) {
    let { text: t, textRef: a, children: r } = e,
        n = (function (e, t) {
            let [a, r] = b.useState(!1),
                i = b.useCallback((e) => {
                    let { target: t } = e;
                    r(t.scrollWidth > t.clientWidth);
                }, []);
            return ((0, iL.g)(e, i, [t], iD), a);
        })(a, t);
    return (0, i.jsx)(aB.m, {
        text: t,
        position: "bottom",
        anchorRef: a,
        shouldShow: n,
        ariaHidden: !0,
        children: r({ tabIndex: n ? 0 : void 0, className: ik.Y }),
    });
}
var iU = a(331144);
let iF = {
        viewBox: `0 0 ${as.width} ${as.height}`,
        outline:
            "M-2 -2L183.811 -2L194 9.029L194 253L8.24 253L-2 242.84ZM0 242.007L9.064 251L192 251L192 9.811L182.936 0L0 0ZM-2 -2L182 -2L182 242L-2 242ZM0 240L180 240L180 0L0 0Z",
        corner: "M179.582 239.13L192.002 251.508",
    },
    iG = {
        viewBox: `0 0 ${ac.width} ${ac.height}`,
        outline:
            "M-2 -2L221.452 -2L233.503 11.103L233.503 306.01L10.103 306.01L-2 293.947ZM0 293.117L10.929 304.01L231.503 304.01L231.503 11.883L220.574 0L0 0ZM-2 -2L222 -2L222 295L-2 295ZM0 293L220 293L220 0L0 0Z",
        corner: "M219.582 291.133L232.002 303.511",
        stripes:
            "M10.93 291.133l13.91 13.863M20.863 291.133l13.91 13.863M30.801 291.133l13.91 13.863M40.738 291.133l13.91 13.863M50.672 291.133l13.91 13.863M60.609 291.133l13.91 13.863M70.543 291.133l13.91 13.863M80.481 291.133l13.91 13.863M90.414 291.133l13.91 13.863M100.352 291.133l13.91 13.863M110.285 291.133l13.91 13.863M120.223 291.133l13.91 13.863M130.16 291.133l13.91 13.863M140.094 291.133l13.91 13.863M150.031 291.133l13.91 13.863M159.965 291.133l13.91 13.863M169.902 291.133l13.91 13.863M179.836 291.133l13.91 13.863M189.773 291.133l13.91 13.863M199.707 291.133l13.91 13.863M209.645 291.133l13.91 13.863M219.582 13.867l12.42 12.378M219.582 23.766l12.42 12.378M219.582 33.672l12.42 12.378M219.582 43.57l12.42 12.378M219.582 53.477l12.42 12.378M219.582 63.375l12.42 12.378M219.582 73.281l12.42 12.378M219.582 83.18l12.42 12.378M219.582 93.086l12.42 12.378M219.582 102.984l12.42 12.378M219.582 112.891l12.42 12.378M219.582 122.789l12.42 12.378M219.582 132.695l12.42 12.378M219.582 142.594l12.42 12.378M219.582 152.5l12.42 12.378M219.582 162.406l12.42 12.378M219.582 172.305l12.42 12.378M219.582 182.211l12.42 12.378M219.582 192.109l12.42 12.378M219.582 202.016l12.42 12.378M219.582 211.914l12.42 12.378M219.582 221.82l12.42 12.378M219.582 231.719l12.42 12.378M219.582 241.625l12.42 12.378M219.582 251.523l12.42 12.378M219.582 261.43l12.42 12.378M219.582 271.328l12.42 12.378M219.582 281.234l12.42 12.378",
    };
function iH(e) {
    let { paths: t, className: a, children: r } = e;
    return (0, i.jsxs)("div", {
        className: _()(iU.aP, a),
        children: [
            (0, i.jsxs)("svg", {
                className: iU.qd,
                viewBox: t.viewBox,
                preserveAspectRatio: "none",
                "aria-hidden": !0,
                children: [
                    null != t.stripes && (0, i.jsx)("path", { d: t.stripes, className: iU.RY }),
                    (0, i.jsx)("path", { d: t.corner, className: iU.WO }),
                ],
            }),
            r,
            (0, i.jsx)("svg", {
                className: iU.qd,
                viewBox: t.viewBox,
                preserveAspectRatio: "none",
                "aria-hidden": !0,
                children: (0, i.jsx)("path", { d: t.outline, className: iU.rj }),
            }),
        ],
    });
}
function iK(e) {
    return (0, i.jsx)(iH, { ...e, paths: iF });
}
function iB(e) {
    return (0, i.jsx)(iH, { ...e, paths: iG });
}
var iz = a(497357);
function iV(e) {
    let {
            game: { id: t, name: a, coverImageHash: r },
            rank: n,
            label: s,
            frame: c,
            style: d,
            accessibilityLabel: l,
            className: o,
            textRef: u,
            lineClamp: h,
            ...f
        } = e,
        b = (0, m.bG)(
            [iO.A],
            () =>
                iO.A.getGame(t)?.getCoverURL(300) ??
                il.Ay.getApplicationIconURL({ id: t, icon: r, size: 300, keepAspectRatio: !0, fallbackAvatar: !1 }),
        );
    return (0, i.jsxs)("div", {
        ...f,
        role: "listitem",
        className: _()(iz.LO, o),
        style: d,
        children: [
            (0, i.jsx)("div", {
                className: iz.Tn,
                "aria-hidden": null != l,
                children: (0, i.jsxs)(c, {
                    className: iz.LG,
                    children: [
                        null != b
                            ? (0, i.jsx)("img", { src: b, alt: "", className: iz.Qw })
                            : (0, i.jsx)("div", {
                                  className: _()(iz.Qw, iz.uj),
                                  children: (0, i.jsx)(iR.UnknownGameIcon, { size: "lg" }),
                              }),
                        null != n && (0, i.jsx)(iy, { rank: n, className: iz.Tm }),
                    ],
                }),
            }),
            (0, i.jsxs)("div", {
                className: iz.zH,
                "aria-hidden": null != l,
                children: [
                    (0, i.jsx)(td, {
                        ref: u,
                        variant: "heading-xl/medium",
                        className: iz.UU,
                        lineClamp: h,
                        children: a,
                    }),
                    (0, i.jsx)(td, { variant: "mono-md/bold", className: iz.Pf, children: s }),
                ],
            }),
            null != l && (0, i.jsx)(g.A, { children: l }),
        ],
    });
}
function iW(e) {
    let t = b.useRef(null);
    return (0, i.jsx)(iP, {
        text: e.game.name,
        textRef: t,
        children: (a) => {
            let { tabIndex: r, className: n } = a;
            return (0, i.jsx)(iV, { ...e, className: _()(e.className, n), tabIndex: r, textRef: t, lineClamp: 1 });
        },
    });
}
function iq(e, t, a) {
    return tf.intl.formatToPlainString(th.default.mqdLhl, { gameName: e.name, rank: t, numSessions: a });
}
function iY(e) {
    let { numSessions: t, ...a } = e,
        r = Math.round(t);
    return (0, i.jsx)(iW, { ...a, label: r, frame: iK, style: al, accessibilityLabel: iq(a.game, a.rank, r) });
}
function iX(e) {
    let { numSessions: t, ...a } = e,
        r = Math.round(t);
    return (0, i.jsx)(iW, { ...a, rank: 1, label: r, frame: iB, style: ao, accessibilityLabel: iq(a.game, 1, r) });
}
function iZ(e) {
    return (0, i.jsx)(iV, { ...e, frame: iK, style: al, className: iz.Ku });
}
var iQ = a(842807);
let iJ = [];
function i$(e) {
    let { gameStats: t } = e,
        a = Math.round(t?.totalGamesPlayed ?? 0),
        r = (0, H.bD)(t?.totalGamesPlayedPercentile),
        n = t?.games ?? iJ;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: iQ.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: iQ.dJ,
                        children: [
                            (0, i.jsx)(rw, {
                                icon: aI.GameControllerIcon,
                                children: tf.intl.string(th.default.HM2fjf),
                            }),
                            (0, i.jsx)(rK, { value: a, className: iQ.ai }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: iQ.h_,
                        children: (0, i.jsx)(rx, {
                            children:
                                null != r
                                    ? tf.intl.format(th.default["hc0/yJ"], {
                                          percent: r,
                                          percentHook: (e, t) => (0, i.jsx)(rD, { children: e }, t),
                                      })
                                    : tf.intl.format(th.default.aJMJ6b, { numGames: a }),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(iS.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: iQ.ag,
                role: "list",
                children: n.map((e, t) => {
                    let { game: a, numSessions: r } = e;
                    return 0 === t
                        ? (0, i.jsx)(iX, { game: a, numSessions: r }, a.id)
                        : (0, i.jsx)(iY, { game: a, rank: t + 1, numSessions: r }, a.id);
                }),
            }),
        ],
    });
}
function i0(e) {
    let { gameStats: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: _()(iQ.wx, iQ.l7),
                children: [
                    (0, i.jsxs)("div", {
                        className: iQ.dJ,
                        children: [
                            (0, i.jsx)(re, { className: iQ.gi }),
                            (0, i.jsx)(iT, { children: tf.intl.string(th.default.qbCgI7) }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: iQ.h_,
                        children: (0, i.jsx)(rx, { children: tf.intl.string(th.default["0oDeiM"]) }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: _()(iQ.ag, iQ.Zs),
                role: "list",
                children: K.Jb.map((e) => {
                    let { list: a, label: r } = e,
                        n = t[a][0];
                    return null != n ? (0, i.jsx)(iZ, { game: n, label: tf.intl.string(r) }, a) : null;
                }),
            }),
        ],
    });
}
function i1() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.games),
        t = (0, m.bG)([u.A], () => (0, H.IH)(u.A.stats)),
        a = (0, m.bG)([u.A], () => u.A.globalStats?.games),
        r = !t && null != a;
    return (0, i.jsx)(rr, {
        children: (0, i.jsx)("div", {
            className: _()(iQ.kL, { [iQ.TF]: r }),
            children: r ? (0, i.jsx)(i0, { gameStats: a }) : (0, i.jsx)(i$, { gameStats: e }),
        }),
    });
}
var i2 = a(167662);
function i3(e) {
    let { messages: t } = e,
        a = Math.round(t?.numMessagesSent ?? 0),
        r = (0, H.bD)(t?.numMessagesSentPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: i2.dJ,
                children: [
                    (0, i.jsx)(rw, { icon: aj.ChatIcon, children: tf.intl.string(aS.default.wWKySP) }),
                    (0, i.jsx)(rK, { value: a }),
                ],
            }),
            (0, i.jsx)(rx, {
                children:
                    null != r
                        ? tf.intl.format(th.default.TOMBAW, {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rD, { children: e }, t),
                          })
                        : tf.intl.format(th.default.cYCqz8, { numMessages: a }),
            }),
        ],
    });
}
function i5(e) {
    let { numWordsSent: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: i2.dJ,
                children: [
                    (0, i.jsx)(rw, { icon: aj.ChatIcon, children: tf.intl.string(th.default["2BuyVC"]) }),
                    (0, i.jsx)(rV, { value: t }),
                ],
            }),
            (0, i.jsx)(rx, {
                children: tf.intl.format(th.default.bAxEs2, {
                    numWords: (0, H.wj)(t),
                    numCopies: (0, H.wj)((0, H.yQ)(t)),
                }),
            }),
        ],
    });
}
function i6() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.messages),
        t = (0, m.bG)([u.A], () => (0, H.nb)(u.A.stats)),
        a = (0, m.bG)([u.A], () => u.A.globalStats?.messages?.numWordsSent),
        r = !t && null != a;
    return (0, i.jsx)(rr, {
        children: (0, i.jsxs)("div", {
            className: i2.kL,
            children: [
                (0, i.jsx)(e9, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/d2d8036bb6a32967893421f9956b9e8ed30abde474f68c1a34e824205549c5a1.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/1dfd8684180df4216b23f0a61617250be8fcc12bc1970ac259892f34fbdb836d.png",
                    className: i2.HW,
                }),
                (0, i.jsx)("div", {
                    className: i2.C,
                    children: r ? (0, i.jsx)(i5, { numWordsSent: a }) : (0, i.jsx)(i3, { messages: e }),
                }),
            ],
        }),
    });
}
var i8 = a(682163),
    i9 = a(224865);
let i4 = i8.iu[i8.Ay.Sizes.XLARGE];
function i7(e) {
    let { guild: t, size: a } = e;
    return null == t.icon && a < 48
        ? (0, i.jsx)("div", {
              className: _()(i9.K, i9.J),
              style: { width: a, height: a },
              "aria-hidden": !0,
              children: (0, i.jsx)(tn.E, { variant: "body-md/medium", children: (0, H.oW)(t.name) }),
          })
        : (0, i.jsx)(i8.Ay, {
              guild: t,
              size: i8.Ay.Sizes.XLARGE,
              iconSize: a,
              textScale: a / i4,
              className: i9.K,
              style: { width: a, height: a, borderRadius: 0 },
              "aria-hidden": !0,
          });
}
var ne = a(140645);
function nt(e) {
    let { numVoiceMinutes: t, numMessagesSent: a } = e,
        r = Math.round(t),
        n = Math.round(a);
    return (0, i.jsxs)("div", {
        className: ne.M1,
        children: [
            (0, i.jsxs)("div", {
                className: ne.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(aR.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(td, { variant: "mono-md/bold", className: ne.Qq, children: r }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: ne.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(aj.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(td, { variant: "mono-md/bold", className: ne.Qq, children: n }),
                ],
            }),
            (0, i.jsx)(g.A, {
                children: tf.intl.formatToPlainString(th.default["OQjeY/"], { numMinutes: r, numMessages: n }),
            }),
        ],
    });
}
var na = a(972106);
let nr = [];
function ni(e) {
    let { guild: t, rank: a, iconSize: r = 100, children: n } = e,
        s = b.useRef(null);
    return (0, i.jsx)(iP, {
        text: t.name,
        textRef: s,
        children: (e) => {
            let { tabIndex: c, className: d } = e;
            return (0, i.jsxs)("li", {
                className: _()(na.w_, d),
                tabIndex: c,
                children: [
                    (0, i.jsxs)("div", {
                        className: na.jj,
                        children: [
                            (0, i.jsx)(iy, { rank: a }),
                            (0, i.jsxs)("div", {
                                className: na.gI,
                                children: [
                                    (0, i.jsx)(td, {
                                        ref: s,
                                        variant: "heading-xxl/medium",
                                        className: na.J5,
                                        lineClamp: 1,
                                        children: t.name,
                                    }),
                                    n,
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(i7, { guild: t, size: r }),
                ],
            });
        },
    });
}
function nn(e) {
    let { guild: t, numVoiceMinutes: a, numMessagesSent: r } = e;
    return (0, i.jsx)(ni, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, i.jsx)(nt, { numVoiceMinutes: a, numMessagesSent: r }),
    });
}
function ns(e) {
    let { guilds: t } = e,
        a = ti();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: na.wx,
                children: [
                    (0, i.jsxs)(rg, {
                        ref: a,
                        className: na.R_,
                        accessibilityLabel: tf.intl.string(th.default.FroqRf),
                        children: [
                            (0, i.jsx)(rv, { icon: aC.ServerIcon, children: tf.intl.string(th.default.Mb5E6r) }),
                            (0, i.jsx)(iC, { children: tf.intl.string(aS.default.F0fkrh) }),
                        ],
                    }),
                    (0, i.jsx)(rx, { children: tf.intl.string(th.default.IN1DaS) }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: na.Pl,
                children: t.map((e, t) => {
                    let { guild: a, numMessagesSent: r, numVoiceMinutes: n } = e;
                    return 0 === t
                        ? (0, i.jsx)(nn, { guild: a, numMessagesSent: r ?? 0, numVoiceMinutes: n ?? 0 }, a.id)
                        : (0, i.jsx)(ni, { guild: a, rank: t + 1 }, a.id);
                }),
            }),
        ],
    });
}
function nc(e) {
    let { guilds: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: na.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: na.R_,
                        children: [
                            (0, i.jsx)(re, { className: na.gi }),
                            (0, i.jsx)(iT, { children: tf.intl.string(aS.default.F0fkrh) }),
                        ],
                    }),
                    (0, i.jsx)(rx, { children: tf.intl.string(th.default.bhnqop) }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: na.Pl,
                children: t.map((e, t) => (0, i.jsx)(ni, { guild: e, rank: t + 1 }, e.id)),
            }),
        ],
    });
}
function nd() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.guilds?.guilds ?? nr),
        t = (0, m.bG)([u.A], () => u.A.globalStats?.guilds?.guildsByMembers),
        a = 0 === e.length && null != t;
    return (0, i.jsx)(rr, {
        children: (0, i.jsx)("div", {
            className: na.kL,
            children: a ? (0, i.jsx)(nc, { guilds: t }) : (0, i.jsx)(ns, { guilds: e }),
        }),
    });
}
var nl = a(155094);
function no(e) {
    let { icon: t, title: a, description: r } = e;
    return (0, i.jsx)(rr, {
        children: (0, i.jsxs)("div", {
            className: nl.Q,
            children: [(0, i.jsx)(rw, { icon: t, children: a }), (0, i.jsx)(rx, { children: r })],
        }),
    });
}
var nu = a(7584),
    nh = a(33293),
    nf = a(498137),
    nb = a(192339),
    np = a(574414),
    n_ = a(834109),
    nm = a(48763);
function nx(e) {
    let { character: t, power: a } = e,
        r = (0, w.o)(t);
    return (0, i.jsxs)(nf.A, {
        cardColorPalette: r,
        size: nm.W.LG,
        children: [
            (0, i.jsx)(nb.A, {}),
            (0, i.jsx)(n_.A, { variant: "full" }),
            null != a
                ? (0, i.jsx)(np.A, {
                      powerLevel: (0, r_.Le)(a.powerLevel),
                      powerLevelUnits: (0, r_.sX)(a.powerLevelPercentile),
                  })
                : null,
            (0, i.jsx)(nh.A, { character: t }),
        ],
    });
}
var ng = a(58410);
function nA() {
    let e = (0, m.bG)([u.A], () => u.A.stats),
        t = (0, m.bG)([u.A], () => u.A.character),
        a = ti();
    return (0, i.jsx)(rr, {
        children: (0, i.jsxs)("div", {
            className: ng.z,
            children: [
                null != t ? (0, i.jsx)(nx, { character: t, power: e?.power }) : null,
                (0, i.jsxs)("div", {
                    className: _()(ng.zH, null === e && ng.gz),
                    children: [
                        (0, i.jsxs)(rg, {
                            ref: a,
                            className: ng.R_,
                            accessibilityLabel: tf.intl.string(th.default.ASrTAc),
                            children: [
                                (0, i.jsx)(rv, {
                                    icon: rl.ExperimentalCheckpointIcon,
                                    children: tf.intl.string(aS.default.ir6nEQ),
                                }),
                                (0, i.jsx)(td, {
                                    variant: "display-lg",
                                    className: ng.Vy,
                                    children: tf.intl.string(aS.default.y4M1na),
                                }),
                            ],
                        }),
                        null === e ? (0, i.jsx)(nv, { character: t }) : (0, i.jsx)(nw, { stats: e }),
                    ],
                }),
            ],
        }),
    });
}
function nv(e) {
    let { character: t } = e,
        { primaryBackgroundColor: a } = (0, w.j)((0, w.o)(t));
    return (0, i.jsx)(td, {
        tag: "p",
        variant: "heading-xl/medium",
        style: { color: a },
        children: tf.intl.string(th.default["GL+yOs"]),
    });
}
function nw(e) {
    let { stats: t } = e,
        a = t.guilds?.guilds[0],
        r = t.emojis?.emojis[0],
        n = t.games?.games[0]?.game,
        s =
            null != n
                ? il.Ay.getApplicationIconURL({ id: n.id, icon: n.iconHash, size: 40, fallbackAvatar: !1 })
                : void 0;
    return (0, i.jsxs)("div", {
        className: ng.M1,
        children: [
            (0, i.jsx)(nI, { label: tf.intl.string(th.default.MSrV9z), value: t.voice?.totalVoiceMinutes }),
            (0, i.jsx)(nI, { label: tf.intl.string(th.default.hhh11L), value: t.messages?.numMessagesSent }),
            (0, i.jsx)(nI, { label: tf.intl.string(th.default["f5S+pt"]), value: a?.numDaysInteracted }),
            (0, i.jsx)(nE, {
                label: tf.intl.string(aS.default["8XPMJj"]),
                icon: null != a ? (0, i.jsx)(i7, { guild: a.guild, size: 40 }) : (0, i.jsx)(nj, {}),
                name: null != a ? a.guild.name : tf.intl.string(tf.t.PoWNfe),
            }),
            (0, i.jsx)(nI, { label: tf.intl.string(th.default.xVSlv3), value: t.emojis?.numEmojisSent }),
            (0, i.jsx)(nE, {
                label: tf.intl.string(aS.default["3sARW7"]),
                icon:
                    null != r
                        ? (0, i.jsx)(rL.A, {
                              emojiId: r.id,
                              emojiName: null == r.id ? r.name : void 0,
                              animated: r.animated,
                              alt: "",
                              className: ng.Kk,
                          })
                        : (0, i.jsx)(nj, {}),
                name:
                    null == r
                        ? tf.intl.string(tf.t.PoWNfe)
                        : null == r.id
                          ? nu.Ay.convertSurrogateToName(r.name)
                          : `:${r.name}:`,
            }),
            (0, i.jsx)(nI, { label: tf.intl.string(th.default.y2Y1DD), value: t.games?.totalDaysPlayed }),
            (0, i.jsx)(nE, {
                label: tf.intl.string(aS.default.RbT4Zq),
                icon:
                    null != s
                        ? (0, i.jsx)("img", { src: s, alt: "", className: _()(ng.Kk, ng.Gt) })
                        : null == n
                          ? (0, i.jsx)(nj, {})
                          : (0, i.jsx)("div", {
                                className: _()(ng.Kk, ng.Gc),
                                children: (0, i.jsx)(iR.UnknownGameIcon, { size: "md", color: "currentColor" }),
                            }),
                name: null != n ? n.name : tf.intl.string(tf.t.PoWNfe),
            }),
        ],
    });
}
function nI(e) {
    let { label: t, value: a } = e;
    return (0, i.jsxs)("div", {
        className: ng.dJ,
        children: [
            (0, i.jsx)(td, { variant: "heading-md/semibold", children: t }),
            (0, i.jsx)(td, {
                variant: "heading-xxl/medium",
                className: ng.wk,
                children: Math.round(a ?? 0).toLocaleString(tf.intl.currentLocale),
            }),
        ],
    });
}
function nE(e) {
    let { label: t, icon: a, name: r } = e,
        n = b.useRef(null);
    return (0, i.jsx)(iP, {
        text: r,
        textRef: n,
        children: (e) => {
            let { tabIndex: s, className: c } = e;
            return (0, i.jsxs)("div", {
                className: _()(ng.dJ, ng.u4, c),
                tabIndex: s,
                children: [
                    (0, i.jsx)(td, { variant: "heading-md/semibold", children: t }),
                    (0, i.jsxs)("div", {
                        className: ng.AS,
                        children: [
                            a,
                            (0, i.jsx)(td, {
                                ref: n,
                                variant: "heading-xl/medium",
                                lineClamp: 1,
                                className: ng.TJ,
                                children: r,
                            }),
                        ],
                    }),
                ],
            });
        },
    });
}
function nj() {
    return (0, i.jsx)("div", {
        className: _()(ng.Kk, ng.Gc, ng.Wn),
        children: (0, i.jsx)(iR.UnknownGameIcon, { size: "lg", color: "currentColor" }),
    });
}
var nS = a(651946);
function nN() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.guilds?.guilds[0]),
        t = Math.round(e?.numDaysInteracted ?? 0),
        a = (0, H.bD)(e?.numDaysInteractedPercentile),
        r = b.useRef(null);
    return (0, i.jsx)(rr, {
        children: (0, i.jsxs)("div", {
            className: nS.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: nS.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: nS.R_,
                            children: [
                                (0, i.jsx)(rw, { icon: aC.ServerIcon, children: tf.intl.string(th.default["M+a+t1"]) }),
                                (0, i.jsx)(rK, { value: t }),
                            ],
                        }),
                        (0, i.jsx)(rx, {
                            children:
                                null != a
                                    ? tf.intl.format(th.default.sIDTV1, {
                                          numDays: t,
                                          percent: a,
                                          percentHook: (e, t) => (0, i.jsx)(rD, { children: e }, t),
                                      })
                                    : tf.intl.format(th.default.nLCUQ4, { numDays: t }),
                        }),
                    ],
                }),
                null != e &&
                    (0, i.jsx)("div", {
                        className: nS.bU,
                        children: (0, i.jsx)(iP, {
                            text: e.guild.name,
                            textRef: r,
                            children: (t) => {
                                let { tabIndex: a, className: n } = t;
                                return (0, i.jsxs)("div", {
                                    className: _()(nS.Nr, n),
                                    style: { width: 360 },
                                    tabIndex: a,
                                    children: [
                                        (0, i.jsx)(i7, { guild: e.guild, size: 360 }),
                                        (0, i.jsxs)("div", {
                                            className: nS.zH,
                                            children: [
                                                (0, i.jsx)(td, {
                                                    ref: r,
                                                    variant: "heading-xxl/medium",
                                                    className: nS.J5,
                                                    lineClamp: 1,
                                                    children: e.guild.name,
                                                }),
                                                (0, i.jsx)(nt, {
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
var nC = a(270704);
function nT(e) {
    let { voice: t } = e,
        a = Math.round(t?.totalVoiceMinutes ?? 0),
        r = (0, H.bD)(t?.totalVoiceMinutesPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: nC.dJ,
                children: [
                    (0, i.jsx)(rw, { icon: aR.MicrophoneIcon, children: tf.intl.string(th.default["3/T12E"]) }),
                    (0, i.jsx)(rK, { value: a, alignment: "center" }),
                ],
            }),
            (0, i.jsx)(rx, {
                children:
                    null != r
                        ? tf.intl.format(th.default.RqXsIs, {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rD, { children: e }, t),
                          })
                        : tf.intl.format(th.default.Y3poDW, { numMinutes: a }),
            }),
        ],
    });
}
function nR(e) {
    let { peakHour: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: nC.dJ,
                children: [
                    (0, i.jsx)(rw, { icon: aR.MicrophoneIcon, children: tf.intl.string(th.default.ZCwB8J) }),
                    (0, i.jsx)(rV, { value: t }),
                ],
            }),
            (0, i.jsx)(rx, { children: tf.intl.string(th.default.huiTne) }),
        ],
    });
}
function nO() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.voice),
        t = (0, m.bG)([u.A], () => (0, H.Kr)(u.A.stats)),
        a = (0, m.bG)([u.A], () => u.A.globalStats?.voice?.peakHourUtc),
        r = (0, H.XF)(a)?.value,
        n = !t && null != r;
    return (0, i.jsxs)(rr, {
        children: [
            (0, i.jsx)(e9, {
                animatedSrc:
                    "https://cdn.discordapp.com/assets/content/04746dc04eab575d0168935af2b1b3f97e2e00439f84bd0f0474276e0c5a81dc.png",
                staticSrc:
                    "https://cdn.discordapp.com/assets/content/c4c2d6b631bff3da4e4bb9afffc8f89bc9fb6f76a2fcd824f8a7af83eb7f1e6b.png",
                className: nC.Tp,
            }),
            (0, i.jsx)("div", {
                className: nC.Qs,
                children: n ? (0, i.jsx)(nR, { peakHour: r }) : (0, i.jsx)(nT, { voice: e }),
            }),
        ],
    });
}
function nM(e) {
    let { route: t, onNextStep: a, onPreviousStep: r } = e;
    if (t === j.gr.HOME) return (0, i.jsx)(ry, { onStart: a });
    if (t === j.gr.INTRODUCTION) return (0, i.jsx)(rs, {});
    let { statsScreen: n } = (0, j.UG)(t);
    switch (n) {
        case j.oI.VOICE_INTRO:
            return (0, i.jsx)(no, {
                icon: aR.MicrophoneIcon,
                title: tf.intl.string(th.default["/7XYsa"]),
                description: tf.intl.string(th.default["X8/G/o"]),
            });
        case j.oI.VOICE:
            return (0, i.jsx)(nO, {});
        case j.oI.MESSAGES_INTRO:
            return (0, i.jsx)(no, {
                icon: aj.ChatIcon,
                title: tf.intl.string(th.default["2BuyVC"]),
                description: tf.intl.string(th.default["kF+Y3a"]),
            });
        case j.oI.MESSAGES:
            return (0, i.jsx)(i6, {});
        case j.oI.SERVERS_INTRO:
            return (0, i.jsx)(no, {
                icon: aC.ServerIcon,
                title: tf.intl.string(aS.default.F0fkrh),
                description: tf.intl.string(th.default.Xg82Gy),
            });
        case j.oI.SERVERS:
            return (0, i.jsx)(nd, {});
        case j.oI.TOP_SERVER:
            return (0, i.jsx)(nN, {});
        case j.oI.EMOJI_INTRO:
            return (0, i.jsx)(no, {
                icon: tr.EmojiSlightlySmilingFaceIcon,
                title: tf.intl.string(th.default.ZTDCIv),
                description: tf.intl.string(th.default.y8Sr8J),
            });
        case j.oI.EMOJI:
            return (0, i.jsx)(r7, {});
        case j.oI.GAMES_INTRO:
            return (0, i.jsx)(no, {
                icon: aI.GameControllerIcon,
                title: tf.intl.string(th.default.HM2fjf),
                description: tf.intl.string(th.default.LQiFqJ),
            });
        case j.oI.GAMES:
            return (0, i.jsx)(i1, {});
        case j.oI.GAME_TIME:
            return (0, i.jsx)(ij, {});
        case j.oI.SQUAD:
        case j.oI.SIDEKICK:
            return (0, i.jsx)(im, { route: t, onNextStep: a, onPreviousStep: r });
        case j.oI.SUMMARY:
            return (0, i.jsx)(nA, {});
        case j.oI.SHARE:
            return (0, i.jsx)(rj, {});
        default:
            return null;
    }
}
var ny = a(650809),
    nL = a(428692);
let nk = {
    [j.s9.FACE]: { icon: aR.MicrophoneIcon, label: tf.t.K3lovD },
    [j.s9.OUTFIT]: { icon: aj.ChatIcon, label: tf.t.OIgYlQ },
    [j.s9.HEADWEAR]: { icon: aC.ServerIcon, label: tf.t["7hB4kg"] },
    [j.s9.SHOES]: { icon: tr.EmojiSlightlySmilingFaceIcon, label: tf.t.sMOuuS },
    [j.s9.WEARABLE]: { icon: aI.GameControllerIcon, label: tf.t.URyqtP },
    [j.s9.AURA]: { icon: av.CalendarIcon, label: th.default.y2Y1DD },
    [j.s9.ASSEMBLED]: { icon: ia.FriendsIcon, label: tf.t.TdEu5X },
    [j.s9.FINALIZE]: { icon: ny.PaintPaletteIcon, label: th.default.gmMD2I },
    [j.s9.SUMMARY]: { icon: rl.ExperimentalCheckpointIcon, label: aS.default.y4M1na },
};
function nD(e) {
    let {
            step: { icon: t, label: a, route: r },
            state: n,
            disabled: s,
            blockedTraitDescriptionId: c,
            sound: d,
            onRouteClick: l,
        } = e,
        o = tf.intl.string(a),
        u = "unlocked" === n,
        {
            onPointerDown: h,
            onKeyDown: f,
            onClickWithSound: b,
        } = aJ({ source: d, onClick: () => l(r), disabled: s || !u });
    return (0, i.jsx)(aB.m, {
        text: "locked" === n ? null : o,
        ariaHidden: !0,
        children: (0, i.jsxs)(ir.D, {
            onPointerDown: u ? h : void 0,
            onKeyDown: u ? f : void 0,
            onClick: u ? b : void 0,
            tabIndex: u ? 0 : -1,
            role: "tab",
            "aria-selected": "active" === n,
            className: _()(nL.PM, { [nL.Xj]: "active" === n, [nL.CD]: u, [nL.vk]: u && !s }),
            "aria-label": o,
            "aria-disabled": "locked" === n || (u && s),
            "aria-describedby": u ? c : void 0,
            children: [
                (0, i.jsx)("div", { className: _()(nL.Om, { [nL.hZ]: "locked" !== n }) }),
                (0, i.jsx)(t, { size: "xs", color: "currentColor", className: nL.Kk }),
            ],
        }),
    });
}
function nP(e) {
    let { flow: t, stats: a, activeRoute: r, isRouteBlocked: n, blockedTraitDescriptionId: s, onRouteClick: c } = e,
        d = (function (e, t) {
            let a = [];
            for (let r of (0, E.p5)({ flow: e, stats: t })) {
                let { characterStage: e } = (0, j.UG)(r),
                    t = nk[e];
                null != t && a.at(-1)?.stage !== e && a.push({ ...t, stage: e, route: r });
            }
            return a;
        })(t, a),
        { characterStage: l } = (0, j.UG)(r),
        o = d.findIndex((e) => {
            let { stage: t } = e;
            return t === l;
        }),
        [h, f] = b.useState(o);
    o > h && f(o);
    let p = (0, m.bG)([u.A], () => u.A.isSaving);
    return -1 === o
        ? null
        : (0, i.jsx)("div", {
              className: nL.qB,
              role: "tablist",
              "aria-label": tf.intl.string(th.default.DyMw85),
              children: d.map((e, t) =>
                  (0, i.jsx)(
                      nD,
                      {
                          step: e,
                          state: t === o ? "active" : t <= h ? "unlocked" : "locked",
                          disabled: p || n,
                          blockedTraitDescriptionId: s,
                          sound: t < o ? aG : aH,
                          onRouteClick: c,
                      },
                      e.stage,
                  ),
              ),
          });
}
var nU = a(517782);
function nF() {
    let e = b.useId(),
        t = b.useRef(null);
    return (b.useEffect(() => (x.O.moveTo?.(e, t.current), () => x.O.remove?.(e)), [e]), (0, i.jsx)(g.A, { ref: t }));
}
function nG(e) {
    let t,
        a,
        { didPlayerShareDataWithDiscord: r, onClose: n } = e;
    ((0, m.bG)([u.A], () => u.A.fetchState),
        (t = (0, m.yK)([u.A], () => {
            let { stats: e, globalStats: t } = u.A,
                a = t?.games;
            if ((0, H.IH)(e) || null == a)
                return (
                    e?.games?.games.map((e) => {
                        let { game: t } = e;
                        return t.id;
                    }) ?? []
                );
            let r = [];
            return (
                K.Jb.forEach((e) => {
                    let { list: t } = e,
                        i = a[t][0];
                    null != i && r.push(i.id);
                }),
                r
            );
        })),
        b.useEffect(() => {
            let { fetchState: e } = u.A;
            (e === u.T.INIT || e === u.T.ERROR) && (0, o.nX)();
        }, []),
        b.useEffect(() => {
            (0, G.E)(t);
        }, [t]));
    let s = (0, E.bL)(r),
        [c, l] = (function (e) {
            let [t, a] = b.useState(() =>
                (function (e) {
                    let { character: t, progress: a, stats: r, isCharacterCreatorEnabled: i } = u.A,
                        n = null != t ? j.s9.SUMMARY : a?.stage;
                    return (
                        (0, E.p5)({ flow: e, stats: r, character: t, isCharacterCreatorEnabled: i }).find(
                            (e) => (0, j.UG)(e).characterStage === n,
                        ) ?? j.gr.HOME
                    );
                })(e),
            );
            return (
                b.useEffect(() => {
                    let { characterStage: e } = (0, j.UG)(t);
                    (0, o.l4)(e);
                }, [t]),
                [t, a]
            );
        })(s);
    (b.useEffect(() => {
        (h.A.setStepName(c), (0, f.if)(c));
    }, [c]),
        (0, F.l0)(() => {
            (h.A.stop(), (0, f.i)(h.A.getStepName()));
        }),
        (a = (0, m.bG)([d.A], () => d.A.isFocused() && d.A.isVisible())),
        b.useEffect(() => {
            h.A.setForeground(a);
        }, [a]));
    let { characterStage: p, statsScreen: x } = (0, j.UG)(c),
        L = c === j.gr.HOME || null != x,
        k = c === j.gr.INTRODUCTION,
        D = (0, j.Rq)(c),
        P = (0, m.bG)([u.A], () => (u.A.fetchState === u.T.SUCCESS ? u.A.stats : void 0)),
        B = (0, m.bG)([u.A], () => u.A.character),
        V = b.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case j.gr.SUMMARY:
                        case j.gr.SHARE:
                            let a = (0, w.o)(t),
                                { primaryBackgroundColor: r, shadowColor: i } = (0, w.j)(a);
                            return {
                                ...au,
                                "--custom-checkpoint-primary": r,
                                "--custom-checkpoint-button-border": r,
                                "--custom-checkpoint-button-shadow": i,
                                "--custom-checkpoint-background-gradient-start": r,
                            };
                        default:
                            return au;
                    }
                })(c, B),
            [c, B],
        ),
        W = (function () {
            let { isMuted: e, volume: t } = (0, m.cf)([u.A], () => ({ isMuted: u.A.isMuted, volume: u.A.volume })),
                a = b.useRef(new Map()),
                r = b.useRef(null),
                i = b.useCallback(() => {
                    (r.current?.(), a.current.forEach((e) => e.pause()));
                }, []);
            return (
                b.useEffect(() => ((a.current = new Map(O.map((e) => [e, new Audio(e)]))), i), [i]),
                b.useEffect(() => {
                    a.current.forEach((a) => {
                        ((a.muted = e), (a.volume = t));
                    });
                }, [e, t]),
                b.useCallback(
                    (e) => {
                        var t;
                        let n;
                        (i(),
                            (t = (e) => {
                                let t = a.current.get(e);
                                null == t || u.A.isMuted || 0 === u.A.volume || ((t.currentTime = 0), t.play());
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
        Y = U(),
        Z = (0, I.k0)(c, Y),
        J = b.useId(),
        $ = null != Z ? J : void 0,
        ee = b.useCallback(
            (e) => {
                let t = (function (e) {
                    let { previousRoute: t, route: a } = e;
                    if (t === j.gr.SIDEKICK_LEAVE && a === j.gr.SIDEKICK) return null;
                    if (t === j.gr.FINALIZE_CHARACTER && a === j.gr.SUMMARY) return [];
                    let r = [];
                    return (
                        a === j.gr.INTRODUCTION
                            ? (r.push({ source: S, delayMs: 0 }),
                              r.push({ source: R, delayMs: 2500 }),
                              r.push({ source: N, delayMs: 2800 }))
                            : M(t) && y(a)
                              ? r.push({ source: C, delayMs: 0 })
                              : y(t) && M(a) && (r.push({ source: T, delayMs: 0 }), r.push({ source: R, delayMs: 0 })),
                        r
                    );
                })({ previousRoute: c, route: e });
                (null != t && W(t), l(e));
            },
            [c, W, l],
        ),
        et = b.useCallback(
            (e) => {
                let t = (0, E.SK)({ flow: s, stats: P, currentRoute: c, direction: e });
                if (null == t) {
                    1 === e && n();
                    return;
                }
                ee(t);
            },
            [c, s, ee, n, P],
        ),
        er = b.useCallback(() => et(-1), [et]),
        ei = b.useCallback(() => et(1), [et]),
        en = b.useCallback(() => ee((0, E.$_)({ flow: s, stats: P })), [s, ee, P]),
        es = b.useCallback(
            (e) => {
                if (!u.A.isSaving) {
                    if (null != Z) return void z(Z);
                    ee(e);
                }
            },
            [Z, ee],
        );
    return (0, i.jsx)(A.N, {
        theme: q.NJ.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: _()(e, nU.kL),
                style: V,
                role: "dialog",
                "aria-modal": !0,
                "aria-label": tf.intl.string(aS.default["CdU/PF"]),
                children: [
                    (0, i.jsx)(nF, {}),
                    (0, i.jsxs)("div", {
                        className: nU.$s,
                        children: [
                            (0, i.jsx)(aF, {}),
                            (0, i.jsx)(Q, {
                                size: "sm",
                                "aria-label": tf.intl.string(tf.t.cpT0Cq),
                                onClick: n,
                                children: (0, i.jsx)(v.XSmallIcon, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(e8, {
                        stage: p,
                        isCovered: L,
                        className: nU.qd,
                        children: k && (0, i.jsx)(nM, { route: j.gr.INTRODUCTION, onNextStep: ei, onPreviousStep: er }),
                    }),
                    (0, i.jsx)(ea, {
                        visible: L,
                        enter: eQ,
                        exit: eQ,
                        hiddenScale: 1.02,
                        keepMounted: !0,
                        className: nU.qd,
                        style: V,
                        children: (0, i.jsx)(X, { isVisible: L }),
                    }),
                    (0, i.jsx)(ea, {
                        visible: D,
                        enter: e0,
                        exit: e1,
                        className: nU.qd,
                        children: (0, i.jsx)(aM, { route: c }),
                    }),
                    (0, i.jsx)(ea, {
                        visible: L,
                        enter: e$,
                        exit: eJ,
                        hiddenScale: 1.02,
                        mountAfterDelay: !0,
                        className: nU.qd,
                        style: V,
                        children: (0, i.jsx)(nM, { route: c, onNextStep: ei, onPreviousStep: er }),
                    }),
                    (0, i.jsx)(a7, {
                        activeRoute: c,
                        blockedTrait: Z,
                        blockedTraitDescriptionId: $,
                        onBack: er,
                        onNext: ei,
                        onReplay: en,
                    }),
                    (0, i.jsx)(ta, { activeRoute: c }),
                    (0, i.jsx)(nP, {
                        flow: s,
                        stats: P,
                        activeRoute: c,
                        isRouteBlocked: null != Z,
                        blockedTraitDescriptionId: $,
                        onRouteClick: es,
                    }),
                    null != Z && (0, i.jsx)(g.A, { id: J, children: (0, I.Cz)(Z) }),
                ],
            }),
    });
}
function nH() {
    if (l._.hasSubscribers(aZ.jej.MODAL_CLOSE)) return (l._.dispatch(aZ.jej.MODAL_CLOSE), !0);
    let e = (0, c.mU)(document.activeElement ?? document.body);
    return !!e?.hasSubscribers(aZ.jej.POPOUT_CLOSE) && (e.dispatch(aZ.jej.POPOUT_CLOSE), !0);
}
async function nK(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { didPlayerShareDataWithDiscord: a = !0, ...r } = t,
        c = await (0, o.nX)(r);
    c === u.T.ERROR
        ? (0, n.P0)({ text: tf.intl.string(tf.t.fEptJP), variant: "critical" })
        : c !== u.T.FETCHING &&
          (h.A.initialize({ didPlayerShareDataWithDiscord: a, isForeground: d.A.isFocused() && d.A.isVisible() }),
          (0, f.lw)(e),
          (0, s.B8)(
              (e) => {
                  let { closeLayer: t } = e;
                  return (0, i.jsx)(nG, { didPlayerShareDataWithDiscord: a, onClose: t });
              },
              { onEscape: nH },
          ));
}
