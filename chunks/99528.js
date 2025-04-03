n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(726521),
    c = n(924301),
    a = n(388032);
function u(e) {
    let t = (0, l.e7)([c.ZP], () => c.ZP.getGuildScheduledEvent(e), [e]);
    return null == e || null == t
        ? null
        : (0, r.jsx)(i.sNh, {
              id: 'report-event',
              label: a.NW.string(a.t.IBA5wc),
              action: () => (0, o.d$)(t),
              icon: i.U65,
              color: 'danger'
          });
}
