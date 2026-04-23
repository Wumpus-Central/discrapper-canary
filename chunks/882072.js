n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(529200),
    s = n(961350),
    r = n(4274),
    o = n(985018);
function d(e) {
    let { author: t, inviteError: n } = e,
        d =
            (0, l.bG)([s.default], () => s.default.getId()) === t.id
                ? o.intl.string(o.t.C89OLE)
                : o.intl.string(o.t.YVub5y),
        c = (0, r.g)(n?.code);
    return (0, i.jsxs)(a.A, {
        children: [
            (0, i.jsx)(a.A.Header, { text: d }),
            (0, i.jsxs)(a.A.Body, {
                children: [
                    (0, i.jsx)(a.A.Icon, { expired: !0 }),
                    (0, i.jsx)(a.A.Info, {
                        expired: !0,
                        title: c?.title ?? o.intl.string(o.t["Jhx/ud"]),
                        children: c?.description ?? n?.message,
                    }),
                ],
            }),
        ],
    });
}
