var i = o(477900),
    s = o(582128),
    n = o(120692),
    a = o(844222);
o.d(
    t,
    {},
    {
        c: function (e) {
            let { shouldAnimate: t = "respect-motion-settings", ...o } = e,
                r = s.useContext(a.C).reducedMotion.enabled;
            return (0, i.jsx)(n.Spring, {
                ...o,
                immediate: !("animate-always" === t || ("respect-motion-settings" === t && !r)),
            });
        },
    },
);
