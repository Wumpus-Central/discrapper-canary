"use strict";
n.d(t, { Y: () => b, T: () => x });
var i = n(627968),
    r = n(64700),
    l = n(834730),
    a = n(359778),
    s = n(534514),
    o = n(695366),
    c = n(102876),
    d = n(975571),
    u = n(17928),
    _ = n(429913),
    p = n(800828),
    f = n(652215),
    m = n(985018),
    g = n(463151);
function h(e) {
    return (0, i.jsx)(c.A, { application: e }, e.id);
}
function x(e) {
    let { userId: t, variant: n = "text-xs/normal", color: a = "text-default", ...s } = e,
        o = (function (e) {
            let t,
                { userId: n, renderApplicationName: i } = e,
                l =
                    ((t = (0, u.bG)([p.A], () => {
                        let e = p.A.getGameRelationshipsForUser(n);
                        if (0 !== e.length) return e[0].applicationId;
                    })),
                    (0, _.h)(t));
            return r.useMemo(
                () =>
                    null != l
                        ? m.intl.format(m.t.rSUACb, {
                              helpdeskArticle: d.A.getArticleURL(f.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
                              applicationName: () => i(l),
                          })
                        : m.intl.format(m.t["q+N8L6"], {
                              helpdeskArticle: d.A.getArticleURL(f.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
                          }),
                [l, i],
            );
        })({ userId: t, renderApplicationName: h });
    return (0, i.jsx)(l.E, { variant: n, color: a, ...s, children: o });
}
function b(e) {
    let { userId: t } = e;
    return (0, i.jsxs)(a.Z, {
        className: g.ZO,
        children: [
            (0, i.jsxs)("div", {
                className: g.wx,
                children: [
                    (0, i.jsx)(s.D, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: m.intl.string(m.t.Iyka0U),
                    }),
                    (0, i.jsx)(o.E, { size: "xs", className: g.Kk }),
                ],
            }),
            (0, i.jsx)(x, { userId: t, variant: "text-md/normal" }),
        ],
    });
}
