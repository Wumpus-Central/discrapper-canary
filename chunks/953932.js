n.d(t, { A: () => d });
var l = n(627968),
    a = n(64700),
    r = n(821609),
    i = n(975571),
    s = n(430795),
    u = n(652215),
    c = n(375708),
    o = n(212283);
function d() {
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
}
