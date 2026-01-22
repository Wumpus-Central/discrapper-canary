n.d(t, {
    A: () => j,
});
var i = n(627968),
    r = n(64700),
    l = n(735438),
    a = n.n(l),
    s = n(397927),
    o = n(282956),
    c = n(429913),
    d = n(713654),
    u = n(769015),
    b = n(887501),
    f = n(975571),
    p = n(523352),
    m = n(652215),
    g = n(985018),
    h = n(358330);

function x(e) {
    let { applicationId: t, channels: n } = e,
        r = (0, c.h)(t);
    return 0 === n.length || null == r
        ? null
        : (0, i.jsxs)("div", {
              className: h.kF,
              children: [
                  (0, i.jsxs)("div", {
                      className: h.wx,
                      children: [
                          (0, i.jsx)(u.A, {
                              game: r,
                              size: u.M.XSMALL,
                          }),
                          (0, i.jsx)(s.Heading, {
                              variant: "heading-md/semibold",
                              children: null == r ? void 0 : r.name,
                          }),
                      ],
                  }),
                  n.map((e) => {
                      var t;
                      return (0, i.jsx)(
                          p.q,
                          {
                              channel: e,
                              application: r,
                              name: e.name,
                              icon: null != (t = (0, d.gU)(e)) ? t : void 0,
                              iconWrapperClassName: h.N3,
                              hasNextSection: !0,
                              trailing: (0, i.jsx)(s.R2l, {
                                  size: "xs",
                              }),
                          },
                          e.id,
                      );
                  }),
              ],
          });
}

function j(e) {
    let { guild: t } = e,
        n = (0, b.A)(t.id),
        l = a().groupBy(n, (e) => {
            var t;
            return null == (t = e.linkedLobby) ? void 0 : t.application_id;
        }),
        c = Object.keys(l);
    return (
        r.useEffect(() => {
            0 === n.length && o.A.setSection(m.wLn.OVERVIEW);
        }, [n]),
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    children: g.intl.format(g.t["9gsSLu"], {
                        helpdeskArticle: f.A.getArticleURL(m.MVz.LINKED_LOBBIES),
                    }),
                }),
                (0, i.jsx)(s.cGx, {
                    className: h.zN,
                }),
                c.map((e) =>
                    (0, i.jsx)(
                        x,
                        {
                            applicationId: e,
                            channels: l[e],
                        },
                        e,
                    ),
                ),
            ],
        })
    );
}
