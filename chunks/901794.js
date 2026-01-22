n.d(t, {
    f: () => f,
});
var r = n(627968),
    i = n(444802),
    a = n(524738),
    s = n(871930),
    o = n(975571),
    l = n(688912),
    c = n(443357),
    u = n(985018),
    d = n(993128);

function f() {
    let e = (0, i.WX)(),
        t = [
            {
                setting: "SEXUALLY_EXPLICIT_MEDIA_REDACTION",
                title: u.intl.string(u.t.GYpoAq),
                component: () => (0, r.jsx)(l.Z, {}),
                orientation: "vertical",
            },
            {
                setting: "GORE_MEDIA_REDACTION",
                title: u.intl.string(u.t["16/3Bi"]),
                component: () => (0, r.jsx)(c.q, {}),
                orientation: "vertical",
            },
        ];
    return (0, r.jsxs)(s.h, {
        children: [
            (0, r.jsx)(s._, {
                header: u.intl.string(u.t["Hj/But"]),
                description: u.intl.format(u.t["H/Icz+"], {
                    learnMoreLink: o.A.getArticleURL(e),
                }),
            }),
            (0, r.jsx)(a._, {
                tabs: t,
                orientation: "vertical",
                tabsClassName: d.v,
            }),
        ],
    });
}
