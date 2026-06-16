i.d(e, { Y: () => k, T: () => f });
var r = i(627968),
    n = i(64700),
    a = i(834730),
    l = i(993077),
    s = i(534514),
    c = i(695366),
    o = i(102876),
    d = i(975571),
    p = i(17928),
    u = i(429913),
    A = i(800828),
    x = i(652215),
    h = i(375708),
    m = i(463151);
function N(t) {
    return (0, r.jsx)(o.A, { application: t }, t.id);
}
function f(t) {
    let { userId: e, variant: i = "text-xs/normal", color: l = "text-default", ...s } = t,
        c = (function (t) {
            let e,
                { userId: i, renderApplicationName: r } = t,
                a =
                    ((e = (0, p.bG)([A.A], () => {
                        let t = A.A.getGameRelationshipsForUser(i);
                        if (0 !== t.length) return t[0].applicationId;
                    })),
                    (0, u.h)(e));
            return n.useMemo(
                () =>
                    null != a
                        ? h.intl.format(h.t.rSUACb, {
                              helpdeskArticle: d.A.getArticleURL(x.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
                              applicationName: () => r(a),
                          })
                        : h.intl.format(h.t["q+N8L6"], {
                              helpdeskArticle: d.A.getArticleURL(x.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
                          }),
                [a, r],
            );
        })({ userId: e, renderApplicationName: N });
    return (0, r.jsx)(a.E, { variant: i, color: l, ...s, children: c });
}
function k(t) {
    let { userId: e } = t;
    return (0, r.jsxs)(l.Z, {
        className: m.ZO,
        children: [
            (0, r.jsxs)("div", {
                className: m.wx,
                children: [
                    (0, r.jsx)(s.D, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: h.intl.string(h.t.Iyka0U),
                    }),
                    (0, r.jsx)(c.E, { size: "xs", className: m.Kk }),
                ],
            }),
            (0, r.jsx)(f, { userId: e, variant: "text-md/normal" }),
        ],
    });
}
