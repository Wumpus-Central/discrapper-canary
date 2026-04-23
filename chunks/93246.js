n.d(t, { Y: () => f, T: () => T });
var l = n(627968),
    r = n(64700),
    i = n(834730),
    a = n(359778),
    o = n(534514),
    u = n(695366),
    s = n(102876),
    c = n(975571),
    d = n(17928),
    E = n(429913),
    _ = n(800828),
    N = n(652215),
    h = n(985018),
    S = n(463151);
function A(e) {
    return (0, l.jsx)(s.A, { application: e }, e.id);
}
function T(e) {
    let { userId: t, variant: n = "text-xs/normal", color: a = "text-default", ...o } = e,
        u = (function (e) {
            let t,
                { userId: n, renderApplicationName: l } = e,
                i =
                    ((t = (0, d.bG)([_.A], () => {
                        let e = _.A.getGameRelationshipsForUser(n);
                        if (0 !== e.length) return e[0].applicationId;
                    })),
                    (0, E.h)(t));
            return r.useMemo(
                () =>
                    null != i
                        ? h.intl.format(h.t.rSUACb, {
                              helpdeskArticle: c.A.getArticleURL(N.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
                              applicationName: () => l(i),
                          })
                        : h.intl.format(h.t["q+N8L6"], {
                              helpdeskArticle: c.A.getArticleURL(N.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
                          }),
                [i, l],
            );
        })({ userId: t, renderApplicationName: A });
    return (0, l.jsx)(i.E, { variant: n, color: a, ...o, children: u });
}
function f(e) {
    let { userId: t } = e;
    return (0, l.jsxs)(a.Z, {
        className: S.ZO,
        children: [
            (0, l.jsxs)("div", {
                className: S.wx,
                children: [
                    (0, l.jsx)(o.D, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: h.intl.string(h.t.Iyka0U),
                    }),
                    (0, l.jsx)(u.E, { size: "xs", className: S.Kk }),
                ],
            }),
            (0, l.jsx)(T, { userId: t, variant: "text-md/normal" }),
        ],
    });
}
