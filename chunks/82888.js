n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(399606),
    l = n(522474),
    a = n(595519),
    o = n(317381),
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
        } = (0, i.cj)([o.ZP], () => {
            let e = o.ZP.getConnectedActivityLocation(),
                t = o.ZP.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, s.p)(e),
                connectedActivity: t,
                activityPanelMode: o.ZP.getActivityPanelMode()
            };
        });
    if (!(0, a.NX)(h)) return null;
    let g = null == f ? void 0 : f.applicationId,
        b = l.Z.getWindowOpen(p.KJ3.ACTIVITY_POPOUT);
    return m !== d.Ez.PANEL || null == g || b || null == h || null == f || (0, c.Z)(h)
        ? null
        : (0, r.jsx)(u.Z, {
              maxHeight: t,
              connectedLocation: f.location,
              renderExternalHeader: n
          });
}
