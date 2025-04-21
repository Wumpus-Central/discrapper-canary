n.d(e, { Z: () => u });
var l = n(200651);
n(192379);
var r = n(442837),
    i = n(481060),
    o = n(726521),
    c = n(924301),
    a = n(388032);
function u(t) {
    let e = (0, r.e7)([c.ZP], () => c.ZP.getGuildScheduledEvent(t), [t]);
    return null == t || null == e
        ? null
        : (0, l.jsx)(i.sNh, {
              id: 'report-event',
              label: a.intl.string(a.t.IBA5wc),
              action: () => (0, o.d$)(e),
              icon: i.U65,
              color: 'danger'
          });
}
