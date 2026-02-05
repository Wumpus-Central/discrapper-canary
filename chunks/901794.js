n.d(t, { f: () => _ });
var i = n(627968),
    s = n(444802),
    r = n(524738),
    a = n(871930),
    l = n(975571),
    o = n(688912),
    c = n(443357),
    d = n(985018),
    u = n(993128);
function _() {
    let e = (0, s.WX)(),
        t = [
            {
                setting: "SEXUALLY_EXPLICIT_MEDIA_REDACTION",
                title: d.intl.string(d.t.GYpoAq),
                component: () => (0, i.jsx)(o.Z, {}),
                orientation: "vertical",
            },
            {
                setting: "GORE_MEDIA_REDACTION",
                title: d.intl.string(d.t["16/3Bi"]),
                component: () => (0, i.jsx)(c.q, {}),
                orientation: "vertical",
            },
        ];
    return (0, i.jsxs)(a.h, {
        children: [
            (0, i.jsx)(a._, {
                header: d.intl.string(d.t["Hj/But"]),
                description: d.intl.format(d.t["H/Icz+"], { learnMoreLink: l.A.getArticleURL(e) }),
            }),
            (0, i.jsx)(r._, { tabs: t, orientation: "vertical", tabsClassName: u.v }),
        ],
    });
}
