n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(732955),
    a = n(397927),
    o = n(500380),
    d = n(518977),
    c = n(287809),
    u = n(603293),
    m = n(985018),
    g = n(949677);
function _() {
    let e = (0, l.bG)([c.default], () => c.default.getCurrentUser()?.storeCountry),
        t = s.useCallback(() => {
            (0, u.b)(e?.country ?? null);
        }, [e?.country]);
    if (null == e) return null;
    let n = (0, d.Gw)(e.country),
        _ = null != e.setAt ? m.intl.format(m.t.ZkWzXG, { date: new Date(e.setAt) }) : null;
    return (0, i.jsxs)("div", {
        className: g.OO,
        children: [
            (0, i.jsxs)("div", {
                className: g.wI,
                children: [
                    (0, i.jsx)("div", {
                        className: g.Gh,
                        children: (0, i.jsx)("img", { alt: "", className: g.MY, src: (0, o.t)(e.country) }),
                    }),
                    (0, i.jsxs)("div", {
                        className: g.d0,
                        children: [
                            (0, i.jsx)(a.Text, { variant: "text-md/semibold", children: n }),
                            null != _
                                ? (0, i.jsx)(a.Text, { variant: "text-sm/normal", color: "text-subtle", children: _ })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(r.$nd, { variant: "secondary", size: "sm", text: m.intl.string(m.t.PuB1W7), onClick: t }),
        ],
    });
}
