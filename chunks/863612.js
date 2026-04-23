n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(821609),
    r = n(834730),
    o = n(500380),
    d = n(518977),
    u = n(287809),
    c = n(603293),
    g = n(985018),
    m = n(949677);
function _() {
    let e = (0, l.bG)([u.default], () => u.default.getCurrentUser()?.storeCountry),
        t = s.useCallback(() => {
            (0, c.b)(e?.country ?? null);
        }, [e?.country]);
    if (null == e) return null;
    let n = (0, d.Gw)(e.country),
        _ = null != e.setAt ? g.intl.format(g.t.ZkWzXG, { date: new Date(e.setAt) }) : null;
    return (0, i.jsxs)("div", {
        className: m.OO,
        children: [
            (0, i.jsxs)("div", {
                className: m.wI,
                children: [
                    (0, i.jsx)("div", {
                        className: m.Gh,
                        children: (0, i.jsx)("img", { alt: "", className: m.MY, src: (0, o.t)(e.country) }),
                    }),
                    (0, i.jsxs)("div", {
                        className: m.d0,
                        children: [
                            (0, i.jsx)(r.E, { variant: "text-md/semibold", children: n }),
                            null != _
                                ? (0, i.jsx)(r.E, { variant: "text-sm/normal", color: "text-subtle", children: _ })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(a.$, { variant: "secondary", size: "sm", text: g.intl.string(g.t.PuB1W7), onClick: t }),
        ],
    });
}
