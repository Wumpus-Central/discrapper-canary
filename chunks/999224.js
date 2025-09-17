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
    _ = n(417896),
    p = n(645586),
    h = n(779870),
    m = n(982225),
    g = n(206395),
    E = n(681066),
    b = n(489644),
    y = n(335106),
    O = n(773031),
    v = n(418892),
    I = n(122023),
    T = n(854852),
    S = n(274678),
    A = n(2482),
    C = n(199411),
    N = n(444410),
    R = n(50273),
    P = n(627203),
    w = n(672906),
    D = n(721407),
    x = n(218191),
    L = n(892756),
    j = n(201622),
    M = n(733967),
    k = n(402747),
    U = n(290687),
    G = n(396752),
    B = n(216932),
    Z = n(915579);
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
            name: A.default.tzvUKy,
            iconURL: k.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(242, 96, 195, 0.50) 0%, rgba(242, 96, 195, 0.00) 100%)",
            baseColor: "#380527",
            styleKey: "skye",
            previewSoundURLs: [m.Z],
        },
        quinn: {
            name: A.default.biQVNz,
            iconURL: L.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, #5F549D 0%, rgba(95, 84, 157, 0.00) 100%)",
            baseColor: "#1E1B32",
            styleKey: "quinn",
            previewSoundURLs: [p.Z],
        },
        axel: {
            name: A.default.VCZdnp,
            iconURL: C.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(40, 84, 54, 0.50) 0%, rgba(40, 84, 54, 0.00) 100%)",
            baseColor: "#14291B",
            styleKey: "axel",
            previewSoundURLs: [r.Z],
        },
        sebastien: {
            name: A.default.NmbfHx,
            iconURL: M.Z,
            splashGradient:
                "radial-gradient(9% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(92, 119, 31, 0.50) 0%, rgba(92, 119, 31, 0.00) 100%)",
            baseColor: "#25300D",
            styleKey: "sebastien",
            previewSoundURLs: [h.Z],
        },
        megaphone: {
            name: A.default.fPU01d,
            iconURL: x.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(230, 90, 205, 0.50) 0%, rgba(230, 90, 205, 0.00) 100%)",
            baseColor: "#35082D",
            styleKey: "megaphone",
            previewSoundURLs: [_.Z],
        },
        robot: {
            name: A.default.anBE8f,
            iconURL: j.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(61, 72, 79, 0.50) 0%, rgba(61, 72, 79, 0.00) 100%)",
            baseColor: "#1B1F23",
            styleKey: "robot",
            previewSoundURLs: [o.Z],
        },
        tunes: {
            name: A.default.sem63N,
            iconURL: B.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(111, 134, 253, 0.50) 0%, rgba(111, 134, 253, 0.00) 100%)",
            baseColor: "#010A3C",
            styleKey: "tunes",
            previewSoundURLs: [O.Z],
        },
        ghost: {
            name: A.default.lFIyMz,
            iconURL: P.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(110, 73, 156, 0.50) 0%, rgba(110, 73, 156, 0.00) 100%)",
            baseColor: "#1D142A",
            styleKey: "ghost",
            previewSoundURLs: [u.Z],
        },
        space_bunny: {
            name: A.default["KN+v7+"],
            iconURL: G.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(100% 555.56% at 0% 100%, rgba(110, 60, 223, 0.40) 0%, rgba(110, 60, 223, 0.00) 100%)",
            baseColor: "#160935",
            styleKey: "spacebunny",
            previewSoundURLs: [E.Z, b.Z, y.Z],
        },
        justus: {
            name: A.default.ZVrsKC,
            iconURL: D.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(5, 86, 248, 0.50) 0%, rgba(5, 86, 248, 0.00) 100%)",
            baseColor: "#01153C",
            styleKey: "justus",
            previewSoundURLs: [f.Z],
        },
        harper: {
            name: A.default.vIrxZW,
            iconURL: w.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(125, 87, 179, 0.50) 0%, rgba(125, 87, 179, 0.00) 100%)",
            baseColor: "#1D132A",
            styleKey: "harper",
            previewSoundURLs: [d.Z],
        },
        villain: {
            name: A.default.kHmvdn,
            iconURL: Z.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(219, 2, 34, 0.50) 0%, rgba(219, 2, 34, 0.00) 100%)",
            baseColor: "#3D0109",
            styleKey: "villain",
            previewSoundURLs: [v.Z, I.Z, T.Z, S.Z],
        },
        solara: {
            name: A.default.ndNi1t,
            iconURL: U.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(214, 155, 56, 0.50) 0%, rgba(214, 155, 56, 0.00) 100%)",
            baseColor: "#33240A",
            styleKey: "solara",
            previewSoundURLs: [g.Z],
        },
        cave: {
            name: A.default.Xypb39,
            iconURL: N.Z,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(207, 122, 124, 0.50) 0%, rgba(207, 122, 124, 0.00) 100%)",
            baseColor: "#2D1011",
            styleKey: "cave",
            previewSoundURLs: [i.Z, a.Z],
        },
        deepfried: {
            name: A.default.qRFFLC,
            iconURL: R.Z,
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
(W["robot-synthetic"] = K(W.robot, { name: A.default["Ur/62N"] })),
    (W["chords-2part"] = K(W.tunes, { name: A.default.TYbrfH })),
    (W["chords-choir"] = K(W.tunes, { name: A.default.OnZ6g4 })),
    (W["chords-dev"] = K(W.tunes, { name: A.default["2XH8tr"] })),
    (W["robot-dev"] = K(W.robot, { name: A.default.XhhSOj })),
    (W["ghost-dev"] = K(W.ghost, { name: A.default.KmHwvL })),
    (W["wobble-dev"] = K(W.ghost, { name: A.default["6PDpsb"] })),
    (W["fan-dev"] = K(W.robot, { name: A.default["87aX+/"] })),
    (W["autotune-dev"] = K(W.tunes, { name: A.default.EYDrR0 }));
