n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(732955),
    r = n(397927),
    o = n(500380),
    d = n(518977),
    c = n(287809),
    u = n(603293),
    _ = n(985018),
    m = n(359498);
function g() {
    let e = (0, l.bG)([c.default], () => c.default.getCurrentUser()?.storeCountry),
        t = e?.setAt != null ? _.intl.format(_.t.ZkWzXG, { date: new Date(e.setAt) }) : null,
        n = s.useCallback(() => {
            (0, u.b)(e?.country ?? null);
        }, [e?.country]);
    if (null == e)
        return (0, i.jsxs)("div", {
            className: m.OO,
            children: [
                (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: _.intl.string(_.t.jGL0O5),
                }),
                (0, i.jsx)(a.$nd, { variant: "secondary", size: "sm", text: _.intl.string(_.t.EeFkoB), onClick: n }),
            ],
        });
    let g = (0, d.Gw)(e.country);
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
                            (0, i.jsx)(r.Text, { variant: "text-md/semibold", children: g }),
                            null != t
                                ? (0, i.jsx)(r.Text, { variant: "text-sm/normal", color: "text-subtle", children: t })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(a.$nd, { variant: "secondary", size: "sm", text: _.intl.string(_.t.EeFkoB), onClick: n }),
        ],
    });
}
