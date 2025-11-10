n.d(t, { Z: () => u });
var r = n(951288),
    i = n(399606),
    a = n(607070),
    o = n(55373),
    s = n(761006),
    l = n(95530),
    c = n(798500);
let u = (e) => {
    let { containerVisibilityPercentage: t } = e,
        n = (0, i.e7)([a.Z], () => a.Z.useReducedMotion);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l.jumpingWumpusContainer,
                children: (0, r.jsx)(o.ZP, {
                    scaleAnimationData: {
                        startScale: 0.9,
                        endScale: 1,
                        duration: o.SR,
                    },
                    yAxisAnimationData: {
                        range: 20,
                        duration: o.b5,
                        path: o.js.SINE,
                    },
                    animateXAxisWiggle: !0,
                    isMotionReduced: n,
                    parallaxAnimationData: {
                        pathDirection: o.eo.UP,
                        range: 125,
                        containerVisibilityPercentage: t,
                        changeOpacity: !0,
                    },
                    animationSpeedScale: 2,
                    children: (0, r.jsx)("img", {
                        src: c.Z,
                        alt: "",
                        className: l.jumpingWumpus,
                    }),
                }),
            }),
            (0, r.jsx)(s.Z, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                hammerContainerClassName: l.hammerContainer,
                keyContainerClassName: l.keyContainer,
                starContainerClassName: l.starContainer,
                hammerAssetClassName: l.hammerTrinket,
                keyAssetClassName: l.keyTrinket,
                starAssetClassName: l.starTrinket,
                animationSpeedScale: 2,
            }),
        ],
    });
};
