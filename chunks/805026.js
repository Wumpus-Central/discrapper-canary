n.d(t, {
    L: () => q,
    y: () => K,
});
var r = n(961358),
    i = n(520615),
    a = n(259546),
    s = n(608985),
    o = n(284186),
    l = n(954547),
    c = n(290096),
    u = n(872829),
    d = n(158140),
    f = n(268232),
    p = n(643952),
    _ = n(270139),
    h = n(383148),
    m = n(650718),
    g = n(492678),
    E = n(501632),
    b = n(427201),
    y = n(721686),
    O = n(385615),
    A = n(712693),
    v = n(456424),
    S = n(676363),
    I = n(438970),
    T = n(734317),
    C = n(382967),
    N = n(45094),
    R = n(975803),
    w = n(864628),
    P = n(361349),
    D = n(86409),
    x = n(323681),
    L = n(913058),
    j = n(730191),
    M = n(126389),
    k = n(956743),
    U = n(339167),
    G = n(689969),
    V = n(11358),
    F = n(812892);
function B(e, t, n) {
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
function H(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let K = {
        skye: {
            name: T.default.tzvUK3,
            iconURL: k.A,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(242, 96, 195, 0.50) 0%, rgba(242, 96, 195, 0.00) 100%)",
            baseColor: "#380527",
            styleKey: "skye",
            previewSoundURLs: [m.A],
        },
        quinn: {
            name: T.default["biQVN/"],
            iconURL: L.A,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, #5F549D 0%, rgba(95, 84, 157, 0.00) 100%)",
            baseColor: "#1E1B32",
            styleKey: "quinn",
            previewSoundURLs: [_.A],
        },
        axel: {
            name: T.default.VCZdns,
            iconURL: C.A,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(40, 84, 54, 0.50) 0%, rgba(40, 84, 54, 0.00) 100%)",
            baseColor: "#14291B",
            styleKey: "axel",
            previewSoundURLs: [r.A],
        },
        sebastien: {
            name: T.default["NmbfH+"],
            iconURL: M.A,
            splashGradient:
                "radial-gradient(9% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(92, 119, 31, 0.50) 0%, rgba(92, 119, 31, 0.00) 100%)",
            baseColor: "#25300D",
            styleKey: "sebastien",
            previewSoundURLs: [h.A],
        },
        megaphone: {
            name: T.default.fPU01d,
            iconURL: x.A,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(230, 90, 205, 0.50) 0%, rgba(230, 90, 205, 0.00) 100%)",
            baseColor: "#35082D",
            styleKey: "megaphone",
            previewSoundURLs: [p.A],
        },
        robot: {
            name: T.default.anBE8T,
            iconURL: j.A,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(61, 72, 79, 0.50) 0%, rgba(61, 72, 79, 0.00) 100%)",
            baseColor: "#1B1F23",
            styleKey: "robot",
            previewSoundURLs: [s.A],
        },
        tunes: {
            name: T.default.sem63B,
            iconURL: V.A,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(111, 134, 253, 0.50) 0%, rgba(111, 134, 253, 0.00) 100%)",
            baseColor: "#010A3C",
            styleKey: "tunes",
            previewSoundURLs: [O.A],
        },
        ghost: {
            name: T.default["lFIyM/"],
            iconURL: w.A,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(110, 73, 156, 0.50) 0%, rgba(110, 73, 156, 0.00) 100%)",
            baseColor: "#1D142A",
            styleKey: "ghost",
            previewSoundURLs: [u.A],
        },
        space_bunny: {
            name: T.default["KN+v77"],
            iconURL: G.A,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(100% 555.56% at 0% 100%, rgba(110, 60, 223, 0.40) 0%, rgba(110, 60, 223, 0.00) 100%)",
            baseColor: "#160935",
            styleKey: "spacebunny",
            previewSoundURLs: [E.A, b.A, y.A],
        },
        justus: {
            name: T.default.ZVrsKC,
            iconURL: D.A,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(5, 86, 248, 0.50) 0%, rgba(5, 86, 248, 0.00) 100%)",
            baseColor: "#01153C",
            styleKey: "justus",
            previewSoundURLs: [f.A],
        },
        harper: {
            name: T.default.vIrxZS,
            iconURL: P.A,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(125, 87, 179, 0.50) 0%, rgba(125, 87, 179, 0.00) 100%)",
            baseColor: "#1D132A",
            styleKey: "harper",
            previewSoundURLs: [d.A],
        },
        villain: {
            name: T.default.kHmvdt,
            iconURL: F.A,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(219, 2, 34, 0.50) 0%, rgba(219, 2, 34, 0.00) 100%)",
            baseColor: "#3D0109",
            styleKey: "villain",
            previewSoundURLs: [A.A, v.A, S.A, I.A],
        },
        solara: {
            name: T.default.ndNi1j,
            iconURL: U.A,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(214, 155, 56, 0.50) 0%, rgba(214, 155, 56, 0.00) 100%)",
            baseColor: "#33240A",
            styleKey: "solara",
            previewSoundURLs: [g.A],
        },
        cave: {
            name: T.default.Xypb3z,
            iconURL: N.A,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(207, 122, 124, 0.50) 0%, rgba(207, 122, 124, 0.00) 100%)",
            baseColor: "#2D1011",
            styleKey: "cave",
            previewSoundURLs: [i.A, a.A],
        },
        deepfried: {
            name: T.default.qRFFLK,
            iconURL: R.A,
            splashGradient:
                "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(253, 177, 45, 0.50) 0%, rgba(253, 177, 45, 0.00) 100%)",
            baseColor: "#3D2701",
            styleKey: "deepfried",
            previewSoundURLs: [o.A, l.A, c.A],
        },
    },
    z = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return H(
            W(H({}, e), {
                previewSoundURLs: [],
                underDevelopment: !0,
            }),
            t,
        );
    };
function q(e) {
    return "".concat(e, ".onnx");
}
(K["robot-synthetic"] = z(K.robot, { name: T.default["Ur/62B"] })),
    (K["chords-2part"] = z(K.tunes, { name: T.default.TYbrfK })),
    (K["chords-choir"] = z(K.tunes, { name: T.default.OnZ6g9 })),
    (K["chords-dev"] = z(K.tunes, { name: T.default["2XH8tr"] })),
    (K["robot-dev"] = z(K.robot, { name: T.default.XhhSOi })),
    (K["ghost-dev"] = z(K.ghost, { name: T.default.KmHwvD })),
    (K["wobble-dev"] = z(K.ghost, { name: T.default["6PDpse"] })),
    (K["fan-dev"] = z(K.robot, { name: T.default["87aX+2"] })),
    (K["autotune-dev"] = z(K.tunes, { name: T.default.EYDrRx }));
