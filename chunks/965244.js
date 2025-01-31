e.d(t, { Z: () => f });
var i = e(200651);
e(192379);
var l = e(442837),
    r = e(481060),
    u = e(666657),
    a = e(533244),
    d = e(487419),
    o = e(430824),
    c = e(981631),
    s = e(388032);
function f(n, t) {
    let f = t === c.IlC.POPOUT,
        _ = (0, l.e7)([o.Z], () => o.Z.getGuild(n), [n]),
        I = (0, l.e7)([d.Z], () => (null != _ ? d.Z.getGuildIncident(_.id) : null));
    return f
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'nav-security-actions',
              label: s.intl.string(s.t.UgXhdn),
              action: () => {
                  let t = {
                      source: u.Zu.MESSAGE,
                      alertType: (0, a.T1)(I)
                  };
                  (0, r.ZDy)(async () => {
                      let { default: l } = await e.e('61536').then(e.bind(e, 664452));
                      return (e) =>
                          (0, i.jsx)(l, {
                              ...e,
                              guildId: n,
                              analyticsData: t
                          });
                  });
              }
          });
}
