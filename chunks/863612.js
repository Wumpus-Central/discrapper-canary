n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(732955),
    r = n(397927),
    o = n(500380),
    d = n(518977),
    c = n(287809),
    u = n(603293),
    m = n(985018),
    g = n(649085);
function _() {
    let e = (0, l.bG)([c.default], () => c.default.getCurrentUser()?.storeCountry),
        t = e?.setAt != null ? m.intl.format(m.t.ZkWzXG, { date: new Date(e.setAt) }) : null,
        n = s.useCallback(() => {
            (0, u.b)(e?.country ?? null);
        }, [e?.country]);
    if (null == e)
        return (0, i.jsxs)("div", {
            className: g.OO,
            children: [
                (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: m.intl.string(m.t.jGL0O5),
                }),
                (0, i.jsx)(a.$nd, { variant: "secondary", size: "sm", text: m.intl.string(m.t.EeFkoB), onClick: n }),
            ],
        });
    let _ = (0, d.Gw)(e.country);
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
                            (0, i.jsx)(r.Text, { variant: "text-md/semibold", children: _ }),
                            null != t
                                ? (0, i.jsx)(r.Text, { variant: "text-sm/normal", color: "text-subtle", children: t })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(a.$nd, { variant: "secondary", size: "sm", text: m.intl.string(m.t.EeFkoB), onClick: n }),
        ],
    });
}
