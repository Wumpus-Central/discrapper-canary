n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(534514),
    o = n(22231),
    d = n(834730),
    c = n(404778),
    u = n(282956),
    m = n(429913),
    g = n(47167),
    h = n(713654),
    x = n(769015),
    p = n(887501),
    A = n(994500),
    b = n(287809),
    f = n(975571),
    _ = n(523352),
    j = n(652215),
    N = n(985018),
    v = n(108305);
function E(e) {
    let { applicationId: t, channels: n } = e,
        l = (0, m.h)(t);
    return 0 === n.length || null == l
        ? null
        : (0, i.jsxs)("div", {
              className: v.kF,
              children: [
                  (0, i.jsxs)("div", {
                      className: v.wx,
                      children: [
                          (0, i.jsx)(x.A, { game: l, size: x.M.XSMALL }),
                          (0, i.jsx)(r.D, { variant: "heading-md/semibold", children: l?.name }),
                      ],
                  }),
                  n.map((e) =>
                      (0, i.jsx)(
                          _.q,
                          {
                              channel: e,
                              application: l,
                              name: (0, g.m1)(e, b.default, A.A),
                              icon: (0, h.gU)(e) ?? void 0,
                              iconWrapperClassName: v.N3,
                              hasNextSection: !0,
                              trailing: (0, i.jsx)(o.R, { size: "xs" }),
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function C(e) {
    let { guild: t } = e,
        n = (0, p.A)(t.id),
        s = a().groupBy(n, (e) => e.linkedLobby?.application_id),
        r = Object.keys(s);
    return (
        l.useEffect(() => {
            0 === n.length && u.A.setSection(j.wLn.OVERVIEW);
        }, [n]),
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(d.E, {
                    variant: "text-sm/normal",
                    children: N.intl.format(N.t["9gsSLu"], {
                        helpdeskArticle: f.A.getArticleURL(j.MVz.LINKED_LOBBIES),
                    }),
                }),
                (0, i.jsx)(c.c, { className: v.zN }),
                r.map((e) => (0, i.jsx)(E, { applicationId: e, channels: s[e] }, e)),
            ],
        })
    );
}
