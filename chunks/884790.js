n.d(e, { A: () => D });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    d = n(834409),
    r = n(903093),
    u = n(610136),
    s = n(71393),
    c = n(652215),
    o = n(985018);
function D(t, e) {
    let D = e === c.BRT.POPOUT,
        A = (0, l.bG)([s.A], () => s.A.getGuild(t), [t]),
        _ = (0, l.bG)([u.A], () => (null != A ? u.A.getGuildIncident(A.id) : null));
    return D
        ? null
        : (0, i.jsx)(a.Drp, {
              id: "nav-security-actions",
              label: o.intl.string(o.t.UgXhdn),
              action: () => {
                  let e = { source: d.Eo.MESSAGE, alertType: (0, r.$5)(_) };
                  (0, a.mMO)(async () => {
                      let { default: l } = await n.e("65614").then(n.bind(n, 671576));
                      return (n) => (0, i.jsx)(l, { ...n, guildId: t, analyticsData: e });
                  });
              },
          });
}
