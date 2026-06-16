a.d(t, { U: () => n });
var s = a(64700),
    i = a(172218);
let n = function () {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, a] = (0, s.useState)(1),
        n = (0, s.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, i.B)(
            (e) => {
                a(e.intersectionRatio);
            },
            n,
            e,
        ),
        visibilityPercentage: t,
    };
};
