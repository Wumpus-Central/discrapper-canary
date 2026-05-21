i.d(e, { A: () => d });
var n = i(627968),
    r = i(64700),
    t = i(821609),
    a = i(975571),
    c = i(607814),
    l = i(652215),
    o = i(375708),
    p = i(212283);
function d() {
    let s = r.useCallback(() => {
            window.open(a.A.getArticleURL(l.MVz.CLIPS), "_blank", "noopener,noreferrer");
        }, []),
        e = r.useCallback(() => {
            c.yO({ clipsEnabled: !0, trackAnalytics: !0 });
        }, []);
    return (0, n.jsxs)("div", {
        className: p.o,
        children: [
            (0, n.jsx)(t.$, { onClick: s, text: o.intl.string(o.t.hvVgAZ), variant: "secondary", size: "sm" }),
            (0, n.jsx)(t.$, { onClick: e, text: o.intl.string(o.t.h8rgrK), variant: "primary", size: "sm" }),
        ],
    });
}
