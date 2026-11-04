var l = n(477900),
    a = n(582128),
    r = n(821609),
    i = n(975571),
    s = n(489496),
    u = n(652215),
    c = n(792996),
    o = n(353796);
n.d(
    t,
    {},
    {
        A: function () {
            let e = a.useCallback(() => {
                    window.open(i.A.getArticleURL(u.MVz.CLIPS), "_blank", "noopener,noreferrer");
                }, []),
                t = a.useCallback(() => {
                    s.yO({ clipsEnabled: !0, trackAnalytics: !0 });
                }, []);
            return (0, l.jsxs)("div", {
                className: o.o,
                children: [
                    (0, l.jsx)(r.$, { onClick: e, text: c.intl.string(c.t.hvVgAZ), variant: "secondary", size: "sm" }),
                    (0, l.jsx)(r.$, { onClick: t, text: c.intl.string(c.t.h8rgrK), variant: "primary", size: "sm" }),
                ],
            });
        },
    },
);
