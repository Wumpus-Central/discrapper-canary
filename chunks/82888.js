n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(399606),
    l = n(522474),
    a = n(595519),
    s = n(317381),
    o = n(16609),
    c = n(917107),
    d = n(9145),
    u = n(918559),
    p = n(981631);
function h(e) {
    let { maxHeight: t, renderExternalHeader: n } = e,
        {
            connectedChannelId: h,
            connectedActivity: f,
            activityPanelMode: g,
        } = (0, i.cj)([s.ZP], () => {
            let e = s.ZP.getConnectedActivityLocation(),
                t = s.ZP.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, o.p)(e),
                connectedActivity: t,
                activityPanelMode: s.ZP.getActivityPanelMode(),
            };
        }),
        m = (0, i.e7)([l.Z], () => l.Z.getWindowOpen(p.KJ3.ACTIVITY_POPOUT));
    if (!(0, a.NX)(h)) return null;
    let b = null == f ? void 0 : f.applicationId;
    return g !== u.Ez.PANEL || null == b || m || null == h || null == f || (0, c.Z)(h)
        ? null
        : (0, r.jsx)(d.Z, {
              maxHeight: t,
              connectedLocation: f.location,
              renderExternalHeader: n,
          });
}
