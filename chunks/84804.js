n.d(t, { Z: () => u });
var r = n(54381),
    i = n(399606),
    o = n(607070),
    a = n(55373),
    s = n(761006),
    l = n(95530),
    c = n(798500);
let u = (e) => {
    let { containerVisibilityPercentage: t } = e,
        n = (0, i.e7)([o.Z], () => o.Z.useReducedMotion);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l.jumpingWumpusContainer,
                children: (0, r.jsx)(a.ZP, {
                    scaleAnimationData: {
                        startScale: 0.9,
                        endScale: 1,
                        duration: a.SR,
                    },
                    yAxisAnimationData: {
                        range: 20,
                        duration: a.b5,
                        path: a.js.SINE,
                    },
                    animateXAxisWiggle: !0,
                    isMotionReduced: n,
                    parallaxAnimationData: {
                        pathDirection: a.eo.UP,
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
