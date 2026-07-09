n.d(t, { A: () => d });
var a = n(627968),
    r = n(64700),
    l = n(821609),
    i = n(975571),
    s = n(430795),
    u = n(652215),
    c = n(375708),
    o = n(154043);
function d() {
    let e = r.useCallback(() => {
            window.open(i.A.getArticleURL(u.MVz.CLIPS), "_blank", "noopener,noreferrer");
        }, []),
        t = r.useCallback(() => {
            s.yO({ clipsEnabled: !0, trackAnalytics: !0 });
        }, []);
    return (0, a.jsxs)("div", {
        className: o.o,
        children: [
            (0, a.jsx)(l.$, { onClick: e, text: c.intl.string(c.t.hvVgAZ), variant: "secondary", size: "sm" }),
            (0, a.jsx)(l.$, { onClick: t, text: c.intl.string(c.t.h8rgrK), variant: "primary", size: "sm" }),
        ],
    });
}
