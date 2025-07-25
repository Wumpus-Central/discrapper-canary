e.d(n, { Z: () => u });
var l = e(255367);
e(73800);
var i = e(442837),
    r = e(481060),
    o = e(726521),
    a = e(924301),
    c = e(388032);
function u(t) {
    let n = (0, i.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(t), [t]);
    return null == t || null == n
        ? null
        : (0, l.jsx)(r.sNh, {
              id: 'report-event',
              label: c.intl.string(c.t.IBA5wc),
              action: () => (0, o.d$)(n),
              icon: r.U65,
              color: 'danger'
          });
}
