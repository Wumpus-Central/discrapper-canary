n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(399606),
    l = n(522474),
    o = n(595519),
    a = n(317381),
    s = n(16609),
    c = n(917107),
    u = n(9145),
    d = n(918559),
    p = n(981631);
function h(e) {
    let { maxHeight: t, renderExternalHeader: n } = e,
        {
            connectedChannelId: h,
            connectedActivity: f,
            activityPanelMode: m
        } = (0, i.cj)([a.ZP], () => {
            let e = a.ZP.getConnectedActivityLocation(),
                t = a.ZP.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, s.p)(e),
                connectedActivity: t,
                activityPanelMode: a.ZP.getActivityPanelMode()
            };
        }),
        g = (0, i.e7)([l.Z], () => l.Z.getWindowOpen(p.KJ3.ACTIVITY_POPOUT));
    if (!(0, o.NX)(h)) return null;
    let b = null == f ? void 0 : f.applicationId;
    return m !== d.Ez.PANEL || null == b || g || null == h || null == f || (0, c.Z)(h)
        ? null
        : (0, r.jsx)(u.Z, {
              maxHeight: t,
              connectedLocation: f.location,
              renderExternalHeader: n
          });
}
