n.d(t, { A: () => d });
var a = n(477900),
    l = n(582128),
    r = n(821609),
    i = n(975571),
    s = n(614584),
    u = n(652215),
    c = n(375708),
    o = n(353796);
function d() {
    let e = l.useCallback(() => {
            window.open(i.A.getArticleURL(u.MVz.CLIPS), "_blank", "noopener,noreferrer");
        }, []),
        t = l.useCallback(() => {
            s.yO({ clipsEnabled: !0, trackAnalytics: !0 });
        }, []);
    return (0, a.jsxs)("div", {
        className: o.o,
        children: [
            (0, a.jsx)(r.$, { onClick: e, text: c.intl.string(c.t.hvVgAZ), variant: "secondary", size: "sm" }),
            (0, a.jsx)(r.$, { onClick: t, text: c.intl.string(c.t.h8rgrK), variant: "primary", size: "sm" }),
        ],
    });
}
