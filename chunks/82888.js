n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var i = n(252258),
    l = n(399606),
    a = n(522474),
    o = n(595519),
    s = n(317381),
    c = n(16609),
    u = n(917107),
    d = n(9145),
    p = n(918559),
    h = n(981631);
function f(e) {
    let { maxHeight: t, renderExternalHeader: n } = e,
        {
            connectedChannelId: f,
            connectedActivity: m,
            activityPanelMode: g
        } = (0, l.cj)([s.ZP], () => {
            let e = s.ZP.getConnectedActivityLocation(),
                t = s.ZP.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, c.pY)(e),
                connectedActivity: t,
                activityPanelMode: s.ZP.getActivityPanelMode()
            };
        }),
        b = (null == m ? void 0 : m.location.kind) === i.E.CONTEXTLESS;
    if (!(0, o.NX)(f) && !b) return null;
    let _ = null == m ? void 0 : m.applicationId,
        y = a.Z.getWindowOpen(h.KJ3.ACTIVITY_POPOUT);
    return g !== p.Ez.PANEL || null == _ || y
        ? null
        : (null != f && null != m && !(0, u.Z)(f)) || b
          ? (0, r.jsx)(d.Z, {
                maxHeight: t,
                connectedLocation: m.location,
                renderExternalHeader: n
            })
          : null;
}
