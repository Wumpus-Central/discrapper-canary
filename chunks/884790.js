n.d(e, { A: () => A });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(477782),
    d = n(192308),
    r = n(834409),
    u = n(903093),
    s = n(610136),
    c = n(71393),
    o = n(652215),
    D = n(985018);
function A(t, e) {
    let A = e === o.BRT.POPOUT,
        _ = (0, l.bG)([c.A], () => c.A.getGuild(t), [t]),
        E = (0, l.bG)([s.A], () => (null != _ ? s.A.getGuildIncident(_.id) : null));
    return A
        ? null
        : (0, i.jsx)(a.Dr, {
              id: "nav-security-actions",
              label: D.intl.string(D.t.UgXhdn),
              action: () => {
                  let e = { source: r.Eo.MESSAGE, alertType: (0, u.$5)(E) };
                  (0, d.openModalLazy)(async () => {
                      let { default: l } = await n.e("43233").then(n.bind(n, 671576));
                      return (n) => (0, i.jsx)(l, { ...n, guildId: t, analyticsData: e });
                  });
              },
          });
}
