l.d(t, { A: () => u });
var s = l(627968),
    r = l(64700),
    d = l(821609),
    n = l(975571),
    a = l(607814),
    c = l(652215),
    i = l(375708),
    o = l(212283);
function u() {
    let e = r.useCallback(() => {
            window.open(n.A.getArticleURL(c.MVz.CLIPS), "_blank", "noopener,noreferrer");
        }, []),
        t = r.useCallback(() => {
            a.yO({ clipsEnabled: !0, trackAnalytics: !0 });
        }, []);
    return (0, s.jsxs)("div", {
        className: o.o,
        children: [
            (0, s.jsx)(d.$, { onClick: e, text: i.intl.string(i.t.hvVgAZ), variant: "secondary", size: "sm" }),
            (0, s.jsx)(d.$, { onClick: t, text: i.intl.string(i.t.h8rgrK), variant: "primary", size: "sm" }),
        ],
    });
}
