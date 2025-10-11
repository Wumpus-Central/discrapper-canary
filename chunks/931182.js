n.d(t, { n: () => d });
var r = n(951288);
n(647438);
var i = n(925513),
    a = n(526156),
    o = n(838436),
    s = n(63063),
    l = n(291511),
    c = n(295822),
    u = n(388032);
function d() {
    let e = (0, i.v6)(),
        t = [
            {
                setting: "SEXUALLY_EXPLICIT_MEDIA_REDACTION",
                title: u.intl.string(u.t.GYpoAg),
                component: () => (0, r.jsx)(l.P, {}),
                orientation: "vertical",
            },
            {
                setting: "GORE_MEDIA_REDACTION",
                title: u.intl.string(u.t["16/3Bg"]),
                component: () => (0, r.jsx)(c.I, {}),
                orientation: "vertical",
            },
        ];
    return (0, r.jsxs)(o.U, {
        children: [
            (0, r.jsx)(o.H, {
                header: u.intl.string(u.t["Hj/Bur"]),
                description: u.intl.format(u.t["H/Icz8"], { learnMoreLink: s.Z.getArticleURL(e) }),
            }),
            (0, r.jsx)(a.z, {
                tabs: t,
                orientation: "vertical",
            }),
        ],
    });
}
