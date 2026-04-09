n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(397927),
    o = n(282956),
    d = n(429913),
    c = n(47167),
    u = n(713654),
    m = n(769015),
    g = n(887501),
    x = n(994500),
    h = n(287809),
    p = n(975571),
    A = n(523352),
    b = n(652215),
    f = n(985018),
    _ = n(386504);
function N(e) {
    let { applicationId: t, channels: n } = e,
        l = (0, d.h)(t);
    return 0 === n.length || null == l
        ? null
        : (0, i.jsxs)("div", {
              className: _.kF,
              children: [
                  (0, i.jsxs)("div", {
                      className: _.wx,
                      children: [
                          (0, i.jsx)(m.A, { game: l, size: m.M.XSMALL }),
                          (0, i.jsx)(r.Heading, { variant: "heading-md/semibold", children: l?.name }),
                      ],
                  }),
                  n.map((e) =>
                      (0, i.jsx)(
                          A.q,
                          {
                              channel: e,
                              application: l,
                              name: (0, c.m1)(e, h.default, x.A),
                              icon: (0, u.gU)(e) ?? void 0,
                              iconWrapperClassName: _.N3,
                              hasNextSection: !0,
                              trailing: (0, i.jsx)(r.R2l, { size: "xs" }),
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function j(e) {
    let { guild: t } = e,
        n = (0, g.A)(t.id),
        s = a().groupBy(n, (e) => e.linkedLobby?.application_id),
        d = Object.keys(s);
    return (
        l.useEffect(() => {
            0 === n.length && o.A.setSection(b.wLn.OVERVIEW);
        }, [n]),
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    children: f.intl.format(f.t["9gsSLu"], {
                        helpdeskArticle: p.A.getArticleURL(b.MVz.LINKED_LOBBIES),
                    }),
                }),
                (0, i.jsx)(r.cGx, { className: _.zN }),
                d.map((e) => (0, i.jsx)(N, { applicationId: e, channels: s[e] }, e)),
            ],
        })
    );
}
