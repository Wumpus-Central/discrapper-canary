var e = a(855986),
    c = a(775602);
a.d(
    t,
    {},
    {
        A: function (s, t, a) {
            let r = (0, e.bG)([c.Ay], () => c.Ay.useReducedMotion);
            return null != s
                ? r || !1 === t || a
                    ? s.staticImageUrl
                    : (s.animatedImageUrl ?? s.staticImageUrl)
                : void 0;
        },
    },
);
