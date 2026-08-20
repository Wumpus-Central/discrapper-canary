n.d(t, { A: () => d });
var l = n(477900),
    r = n(582128),
    a = n(821609),
    i = n(975571),
    s = n(539572),
    u = n(652215),
    c = n(375708),
    o = n(353796);
function d() {
    let e = r.useCallback(() => {
            window.open(i.A.getArticleURL(u.MVz.CLIPS), "_blank", "noopener,noreferrer");
        }, []),
        t = r.useCallback(() => {
            s.yO({ clipsEnabled: !0, trackAnalytics: !0 });
        }, []);
    return (0, l.jsxs)("div", {
        className: o.o,
        children: [
            (0, l.jsx)(a.$, { onClick: e, text: c.intl.string(c.t.hvVgAZ), variant: "secondary", size: "sm" }),
            (0, l.jsx)(a.$, { onClick: t, text: c.intl.string(c.t.h8rgrK), variant: "primary", size: "sm" }),
        ],
    });
}
