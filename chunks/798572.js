n.d(t, { b: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(397927),
    r = n(500380),
    o = n(518977),
    d = n(985018),
    c = n(684167);
function u(e) {
    let { country: t, countryName: n, ...o } = e,
        u = s.useCallback(
            () => (null == t ? null : (0, i.jsx)("img", { alt: "", className: c.b, src: (0, r.t)(t) })),
            [t],
        ),
        _ = null != n && null != t ? { text: n, leadingIcon: u } : (n ?? void 0);
    return (0, i.jsx)(l.Modal, {
        ...o,
        title: d.intl.string(d.t.EeFkoB),
        subtitle: _,
        actions: [{ text: d.intl.string(d.t.cpT0Cq), onClick: o.onClose, variant: "secondary" }],
        children: (0, i.jsxs)(a.BJc, {
            gap: 16,
            children: [
                (0, i.jsx)(a.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: d.intl.string(d.t["J+TYwL"]),
                }),
                (0, i.jsx)(a.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: d.intl.string(d.t.M57KeT),
                }),
                (0, i.jsx)(a.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: d.intl.string(d.t.PDsztK),
                }),
            ],
        }),
    });
}
function _(e) {
    let t = null != e ? (0, o.Gw)(e) : null;
    (0, a.qfG)((n) => (0, i.jsx)(u, { ...n, country: e, countryName: t }));
}
