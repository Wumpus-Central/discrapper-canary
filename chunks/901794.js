l.d(t, { f: () => x });
var n = l(627968),
    i = l(444802),
    s = l(106148),
    a = l(397620),
    r = l(975571),
    d = l(688912),
    c = l(443357),
    u = l(985018),
    o = l(768679);
function x() {
    let e = (0, i.WX)(),
        t = [
            {
                id: "explicit-media-redaction",
                title: u.intl.string(u.t.GYpoAq),
                component: () => (0, n.jsx)(d.Z, {}),
                orientation: "vertical",
            },
            {
                id: "gore-media-redaction",
                title: u.intl.string(u.t["16/3Bi"]),
                component: () => (0, n.jsx)(c.q, {}),
                orientation: "vertical",
            },
        ];
    return (0, n.jsxs)(s.h, {
        children: [
            (0, n.jsx)(s._, {
                header: u.intl.string(u.t["Hj/But"]),
                description: u.intl.format(u.t["H/Icz+"], { learnMoreLink: r.A.getArticleURL(e) }),
            }),
            (0, n.jsx)(a.A, { tabs: t, orientation: "vertical", tabsClassName: o.v }),
        ],
    });
}
