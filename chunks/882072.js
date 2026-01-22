n.d(t, {
    A: () => c,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(529200),
    s = n(961350),
    o = n(4274),
    l = n(985018);

function c(e) {
    var t, n;
    let { author: c, inviteError: u } = e,
        d =
            (0, i.bG)([s.default], () => s.default.getId()) === c.id
                ? l.intl.string(l.t.C89OLE)
                : l.intl.string(l.t.YVub5y),
        f = (0, o.g)(null == u ? void 0 : u.code);
    return (0, r.jsxs)(a.A, {
        children: [
            (0, r.jsx)(a.A.Header, {
                text: d,
            }),
            (0, r.jsxs)(a.A.Body, {
                children: [
                    (0, r.jsx)(a.A.Icon, {
                        expired: !0,
                    }),
                    (0, r.jsx)(a.A.Info, {
                        expired: !0,
                        title: null != (t = null == f ? void 0 : f.title) ? t : l.intl.string(l.t["Jhx/ud"]),
                        children: null != (n = null == f ? void 0 : f.description) ? n : null == u ? void 0 : u.message,
                    }),
                ],
            }),
        ],
    });
}
