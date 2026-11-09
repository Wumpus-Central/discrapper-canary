var l = n(477900),
    a = n(582128),
    r = n(821609),
    i = n(975571),
    u = n(489496),
    s = n(652215),
    c = n(792996),
    o = n(353796);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { onEnableClips: t } = e,
                n = a.useCallback(() => {
                    window.open(i.A.getArticleURL(s.MVz.CLIPS), "_blank", "noopener,noreferrer");
                }, []),
                d = a.useCallback(() => {
                    null != t ? t() : u.yO({ clipsEnabled: !0, trackAnalytics: !0 });
                }, [t]);
            return (0, l.jsxs)("div", {
                className: o.o,
                children: [
                    (0, l.jsx)(r.$, { onClick: n, text: c.intl.string(c.t.hvVgAZ), variant: "secondary", size: "sm" }),
                    (0, l.jsx)(r.$, { onClick: d, text: c.intl.string(c.t.h8rgrK), variant: "primary", size: "sm" }),
                ],
            });
        },
    },
);
