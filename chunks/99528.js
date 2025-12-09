n.d(e, { Z: () => a });
var l = n(54381);
n(473749);
var r = n(442837),
    i = n(481060),
    o = n(726521),
    u = n(924301),
    c = n(388032);
function a(t) {
    let e = (0, r.e7)([u.ZP], () => u.ZP.getGuildScheduledEvent(t), [t]);
    return null == t || null == e
        ? null
        : (0, l.jsx)(i.sNh, {
              id: "report-event",
              label: c.intl.string(c.t.IBA5wX),
              action: () => (0, o.d$)(e),
              icon: i.U65,
              color: "danger",
          });
}
