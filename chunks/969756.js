n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(397927),
    o = n(282956),
    d = n(429913),
    c = n(713654),
    u = n(769015),
    m = n(887501),
    g = n(975571),
    x = n(523352),
    h = n(652215),
    p = n(985018),
    A = n(358330);
function b(e) {
    let { applicationId: t, channels: n } = e,
        l = (0, d.h)(t);
    return 0 === n.length || null == l
        ? null
        : (0, i.jsxs)("div", {
              className: A.kF,
              children: [
                  (0, i.jsxs)("div", {
                      className: A.wx,
                      children: [
                          (0, i.jsx)(u.A, { game: l, size: u.M.XSMALL }),
                          (0, i.jsx)(r.Heading, { variant: "heading-md/semibold", children: l?.name }),
                      ],
                  }),
                  n.map((e) =>
                      (0, i.jsx)(
                          x.q,
                          {
                              channel: e,
                              application: l,
                              name: e.name,
                              icon: (0, c.gU)(e) ?? void 0,
                              iconWrapperClassName: A.N3,
                              hasNextSection: !0,
                              trailing: (0, i.jsx)(r.R2l, { size: "xs" }),
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function _(e) {
    let { guild: t } = e,
        n = (0, m.A)(t.id),
        s = a().groupBy(n, (e) => e.linkedLobby?.application_id),
        d = Object.keys(s);
    return (
        l.useEffect(() => {
            0 === n.length && o.A.setSection(h.wLn.OVERVIEW);
        }, [n]),
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    children: p.intl.format(p.t["9gsSLu"], {
                        helpdeskArticle: g.A.getArticleURL(h.MVz.LINKED_LOBBIES),
                    }),
                }),
                (0, i.jsx)(r.cGx, { className: A.zN }),
                d.map((e) => (0, i.jsx)(b, { applicationId: e, channels: s[e] }, e)),
            ],
        })
    );
}
