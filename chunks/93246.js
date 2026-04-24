n.d(t, { Y: () => E, T: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(834730),
    a = n(359778),
    r = n(534514),
    o = n(695366),
    c = n(102876),
    d = n(975571),
    u = n(17928),
    h = n(429913),
    m = n(800828),
    p = n(652215),
    g = n(985018),
    A = n(463151);
function f(e) {
    return (0, i.jsx)(c.A, { application: e }, e.id);
}
function _(e) {
    let { userId: t, variant: n = "text-xs/normal", color: a = "text-default", ...r } = e,
        o = (function (e) {
            let t,
                { userId: n, renderApplicationName: i } = e,
                s =
                    ((t = (0, u.bG)([m.A], () => {
                        let e = m.A.getGameRelationshipsForUser(n);
                        if (0 !== e.length) return e[0].applicationId;
                    })),
                    (0, h.h)(t));
            return l.useMemo(
                () =>
                    null != s
                        ? g.intl.format(g.t.rSUACb, {
                              helpdeskArticle: d.A.getArticleURL(p.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
                              applicationName: () => i(s),
                          })
                        : g.intl.format(g.t["q+N8L6"], {
                              helpdeskArticle: d.A.getArticleURL(p.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
                          }),
                [s, i],
            );
        })({ userId: t, renderApplicationName: f });
    return (0, i.jsx)(s.E, { variant: n, color: a, ...r, children: o });
}
function E(e) {
    let { userId: t } = e;
    return (0, i.jsxs)(a.Z, {
        className: A.ZO,
        children: [
            (0, i.jsxs)("div", {
                className: A.wx,
                children: [
                    (0, i.jsx)(r.D, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: g.intl.string(g.t.Iyka0U),
                    }),
                    (0, i.jsx)(o.E, { size: "xs", className: A.Kk }),
                ],
            }),
            (0, i.jsx)(_, { userId: t, variant: "text-md/normal" }),
        ],
    });
}
