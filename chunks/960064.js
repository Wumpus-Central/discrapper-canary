n.d(e, { default: () => S });
var i = n(627968);
n(64700);
var l = n(550079),
    a = n(477782),
    d = n(442433),
    r = n(847767),
    u = n(358367),
    s = n(793574),
    c = n(398590),
    o = n(997509),
    D = n(652215),
    A = n(985018),
    _ = n(957316),
    E = n(17928),
    m = n(192308),
    g = n(834409),
    I = n(903093),
    b = n(610136),
    f = n(71393);
let S = (0, u.A)(
    (0, r.A)(
        function (t) {
            let e,
                r,
                u,
                { guildId: s, context: S, onSelect: T } = t,
                p =
                    S === D.BRT.POPOUT
                        ? null
                        : (0, i.jsx)(a.Dr, {
                              id: "report-raid",
                              label: A.intl.string(A.t.cswId3),
                              action: () => {
                                  (0, c.jH)(), (0, _.M)(s);
                              },
                          }),
                v =
                    ((e = S === D.BRT.POPOUT),
                    (r = (0, E.bG)([f.A], () => f.A.getGuild(s), [s])),
                    (u = (0, E.bG)([b.A], () => (null != r ? b.A.getGuildIncident(r.id) : null))),
                    e
                        ? null
                        : (0, i.jsx)(a.Dr, {
                              id: "nav-security-actions",
                              label: A.intl.string(A.t.UgXhdn),
                              action: () => {
                                  let t = { source: g.Eo.MESSAGE, alertType: (0, I.$5)(u) };
                                  (0, m.openModalLazy)(async () => {
                                      let { default: e } = await n.e("43233").then(n.bind(n, 671576));
                                      return (n) => (0, i.jsx)(e, { ...n, guildId: s, analyticsData: t });
                                  });
                              },
                          })),
                U =
                    S === D.BRT.POPOUT
                        ? null
                        : (0, i.jsx)(a.Dr, {
                              id: "nav-server-settings",
                              label: A.intl.string(A.t["154/bL"]),
                              action: () => {
                                  (0, c.jH)(), o.A.open(s, D.BEX.MODERATION);
                              },
                          });
            return (0, i.jsxs)(l.W, {
                "data-menu-migrated-auto": !0,
                navId: "moderation-raid-context",
                onClose: d.Z_,
                "aria-label": A.intl.string(A.t.liqwPJ),
                onSelect: T,
                children: [(0, i.jsx)(a.rX, { children: v }), (0, i.jsxs)(a.rX, { children: [U, p] })],
            });
        },
        { object: D.ZSU.CONTEXT_MENU },
    ),
    [s.A.CONTEXT_MENU, s.A.GUILD_MODERATION_RAID_MENU],
);
