n.d(t, {
    i: () => z,
    x: () => W,
});
var r = n(484357),
    i = n(323537),
    a = n(780847),
    o = n(740069),
    s = n(407152),
    l = n(106158),
    c = n(400211),
    u = n(137237),
    d = n(598347),
    f = n(67112),
    p = n(417896),
    _ = n(645586),
    m = n(779870),
    h = n(982225),
    g = n(206395),
    E = n(681066),
    b = n(489644),
    y = n(335106),
    O = n(773031),
    v = n(418892),
    S = n(122023),
    I = n(854852),
    T = n(274678),
    C = n(916357),
    A = n(199411),
    N = n(444410),
    P = n(50273),
    R = n(627203),
    w = n(672906),
    D = n(721407),
    x = n(218191),
    L = n(892756),
    j = n(201622),
    M = n(733967),
    k = n(402747),
    U = n(290687),
    G = n(396752),
    Z = n(216932),
    B = n(915579);
function F(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                F(e, t, n[t]);
            });
    }
    return e;
}
function H(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : H(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let W = {
        skye: {
            name: C.default.tzvUK3,
            iconURL: k.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(242, 96, 195, 0.50) 0%, rgba(242, 96, 195, 0.00) 100%)",
            baseColor: "#380527",
            styleKey: "skye",
            previewSoundURLs: [h.Z],
        },
        quinn: {
            name: C.default["biQVN/"],
            iconURL: L.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, #5F549D 0%, rgba(95, 84, 157, 0.00) 100%)",
            baseColor: "#1E1B32",
            styleKey: "quinn",
            previewSoundURLs: [_.Z],
        },
        axel: {
            name: C.default.VCZdns,
            iconURL: A.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(40, 84, 54, 0.50) 0%, rgba(40, 84, 54, 0.00) 100%)",
            baseColor: "#14291B",
            styleKey: "axel",
            previewSoundURLs: [r.Z],
        },
        sebastien: {
            name: C.default["NmbfH+"],
            iconURL: M.Z,
            splashGradient:
                "radial-gradient(9% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(92, 119, 31, 0.50) 0%, rgba(92, 119, 31, 0.00) 100%)",
            baseColor: "#25300D",
            styleKey: "sebastien",
            previewSoundURLs: [m.Z],
        },
        megaphone: {
            name: C.default.fPU01d,
            iconURL: x.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(230, 90, 205, 0.50) 0%, rgba(230, 90, 205, 0.00) 100%)",
            baseColor: "#35082D",
            styleKey: "megaphone",
            previewSoundURLs: [p.Z],
        },
        robot: {
            name: C.default.anBE8T,
            iconURL: j.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(61, 72, 79, 0.50) 0%, rgba(61, 72, 79, 0.00) 100%)",
            baseColor: "#1B1F23",
            styleKey: "robot",
            previewSoundURLs: [o.Z],
        },
        tunes: {
            name: C.default.sem63B,
            iconURL: Z.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(111, 134, 253, 0.50) 0%, rgba(111, 134, 253, 0.00) 100%)",
            baseColor: "#010A3C",
            styleKey: "tunes",
            previewSoundURLs: [O.Z],
        },
        ghost: {
            name: C.default["lFIyM/"],
            iconURL: R.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(110, 73, 156, 0.50) 0%, rgba(110, 73, 156, 0.00) 100%)",
            baseColor: "#1D142A",
            styleKey: "ghost",
            previewSoundURLs: [u.Z],
        },
        space_bunny: {
            name: C.default["KN+v77"],
            iconURL: G.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(100% 555.56% at 0% 100%, rgba(110, 60, 223, 0.40) 0%, rgba(110, 60, 223, 0.00) 100%)",
            baseColor: "#160935",
            styleKey: "spacebunny",
            previewSoundURLs: [E.Z, b.Z, y.Z],
        },
        justus: {
            name: C.default.ZVrsKC,
            iconURL: D.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(5, 86, 248, 0.50) 0%, rgba(5, 86, 248, 0.00) 100%)",
            baseColor: "#01153C",
            styleKey: "justus",
            previewSoundURLs: [f.Z],
        },
        harper: {
            name: C.default.vIrxZS,
            iconURL: w.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(125, 87, 179, 0.50) 0%, rgba(125, 87, 179, 0.00) 100%)",
            baseColor: "#1D132A",
            styleKey: "harper",
            previewSoundURLs: [d.Z],
        },
        villain: {
            name: C.default.kHmvdt,
            iconURL: B.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(219, 2, 34, 0.50) 0%, rgba(219, 2, 34, 0.00) 100%)",
            baseColor: "#3D0109",
            styleKey: "villain",
            previewSoundURLs: [v.Z, S.Z, I.Z, T.Z],
        },
        solara: {
            name: C.default.ndNi1j,
            iconURL: U.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(214, 155, 56, 0.50) 0%, rgba(214, 155, 56, 0.00) 100%)",
            baseColor: "#33240A",
            styleKey: "solara",
            previewSoundURLs: [g.Z],
        },
        cave: {
            name: C.default.Xypb3z,
            iconURL: N.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(207, 122, 124, 0.50) 0%, rgba(207, 122, 124, 0.00) 100%)",
            baseColor: "#2D1011",
            styleKey: "cave",
            previewSoundURLs: [i.Z, a.Z],
        },
        deepfried: {
            name: C.default.qRFFLK,
            iconURL: P.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(253, 177, 45, 0.50) 0%, rgba(253, 177, 45, 0.00) 100%)",
            baseColor: "#3D2701",
            styleKey: "deepfried",
            previewSoundURLs: [s.Z, l.Z, c.Z],
        },
    },
    K = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return V(
            Y(V({}, e), {
                previewSoundURLs: [],
                underDevelopment: !0,
            }),
            t,
        );
    };
function z(e) {
    return "".concat(e, ".onnx");
}
(W["robot-synthetic"] = K(W.robot, { name: C.default["Ur/62B"] })),
    (W["chords-2part"] = K(W.tunes, { name: C.default.TYbrfK })),
    (W["chords-choir"] = K(W.tunes, { name: C.default.OnZ6g9 })),
    (W["chords-dev"] = K(W.tunes, { name: C.default["2XH8tr"] })),
    (W["robot-dev"] = K(W.robot, { name: C.default.XhhSOi })),
    (W["ghost-dev"] = K(W.ghost, { name: C.default.KmHwvD })),
    (W["wobble-dev"] = K(W.ghost, { name: C.default["6PDpse"] })),
    (W["fan-dev"] = K(W.robot, { name: C.default["87aX+2"] })),
    (W["autotune-dev"] = K(W.tunes, { name: C.default.EYDrRx }));
