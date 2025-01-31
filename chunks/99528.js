e.d(n, { Z: () => s });
var l = e(200651);
e(192379);
var i = e(442837),
    r = e(481060),
    u = e(726521),
    d = e(924301),
    a = e(388032);
function s(t) {
    let n = (0, i.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(t), [t]);
    return null == t || null == n
        ? null
        : (0, l.jsx)(r.sNh, {
              id: 'report-event',
              label: a.intl.string(a.t.IBA5wc),
              action: () => (0, u.d$)(n),
              icon: r.U65,
              color: 'danger'
          });
}
