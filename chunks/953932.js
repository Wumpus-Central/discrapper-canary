l.d(t, { A: () => o });
var s = l(627968),
    r = l(64700),
    d = l(821609),
    n = l(975571),
    c = l(607814),
    i = l(652215),
    a = l(375708),
    u = l(212283);
function o() {
    let e = r.useCallback(() => {
            window.open(n.A.getArticleURL(i.MVz.CLIPS), "_blank", "noopener,noreferrer");
        }, []),
        t = r.useCallback(() => {
            c.yO({ clipsEnabled: !0, trackAnalytics: !0 });
        }, []);
    return (0, s.jsxs)("div", {
        className: u.o,
        children: [
            (0, s.jsx)(d.$, { onClick: e, text: a.intl.string(a.t.hvVgAZ), variant: "secondary", size: "sm" }),
            (0, s.jsx)(d.$, { onClick: t, text: a.intl.string(a.t.h8rgrK), variant: "primary", size: "sm" }),
        ],
    });
}
