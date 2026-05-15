n.d(t, { default: () => U });
var l = n(627968);
n(64700);
var i = n(980707),
    a = n(477782),
    r = n(442433),
    s = n(847767),
    d = n(358367),
    c = n(793574),
    o = n(398590),
    u = n(468689),
    A = n(652215),
    T = n(375708),
    O = n(957316),
    b = n(17928),
    p = n(192308),
    E = n(834409),
    g = n(903093),
    h = n(610136),
    j = n(71393);
let U = (0, d.A)(
    (0, s.A)(
        function (e) {
            let t,
                s,
                d,
                { guildId: c, context: U, onSelect: x } = e,
                D =
                    U === A.BRT.POPOUT
                        ? null
                        : (0, l.jsx)(a.Dr, {
                              id: "report-raid",
                              label: T.intl.string(T.t.cswId3),
                              action: () => {
                                  (0, o.jH)(), (0, O.M)(c);
                              },
                          }),
                I =
                    ((t = U === A.BRT.POPOUT),
                    (s = (0, b.bG)([j.A], () => j.A.getGuild(c), [c])),
                    (d = (0, b.bG)([h.A], () => (null != s ? h.A.getGuildIncident(s.id) : null))),
                    t
                        ? null
                        : (0, l.jsx)(a.Dr, {
                              id: "nav-security-actions",
                              label: T.intl.string(T.t.UgXhdn),
                              action: () => {
                                  let e = { source: E.Eo.MESSAGE, alertType: (0, g.$5)(d) };
                                  (0, p.openModalLazy)(async () => {
                                      let { default: t } = await Promise.all([
                                          n.e("29690"),
                                          n.e("74103"),
                                          n.e("40258"),
                                          n.e("8891"),
                                          n.e("73669"),
                                          n.e("46313"),
                                          n.e("43233"),
                                          n.e("97116"),
                                      ]).then(n.bind(n, 671576));
                                      return (n) => (0, l.jsx)(t, { ...n, guildId: c, analyticsData: e });
                                  });
                              },
                          })),
                M =
                    U === A.BRT.POPOUT
                        ? null
                        : (0, l.jsx)(a.Dr, {
                              id: "nav-server-settings",
                              label: T.intl.string(T.t["154/bL"]),
                              action: () => {
                                  (0, o.jH)(), u.A.open(c, A.BEX.MODERATION);
                              },
                          });
            return (0, l.jsxs)(i.W, {
                "data-menu-migrated-auto": !0,
                navId: "moderation-raid-context",
                onClose: r.Z_,
                "aria-label": T.intl.string(T.t.liqwPJ),
                onSelect: x,
                children: [(0, l.jsx)(a.rX, { children: I }), (0, l.jsxs)(a.rX, { children: [M, D] })],
            });
        },
        { object: A.ZSU.CONTEXT_MENU },
    ),
    [c.A.CONTEXT_MENU, c.A.GUILD_MODERATION_RAID_MENU],
);
