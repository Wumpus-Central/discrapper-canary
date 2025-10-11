n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(399606),
    l = n(522474),
    a = n(595519),
    s = n(317381),
    o = n(16609),
    c = n(917107),
    d = n(9145),
    u = n(918559),
    h = n(981631);
function p(e) {
    let { maxHeight: t, renderExternalHeader: n } = e,
        {
            connectedChannelId: p,
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
        m = (0, i.e7)([l.Z], () => l.Z.getWindowOpen(h.KJ3.ACTIVITY_POPOUT));
    if (!(0, a.NX)(p)) return null;
    let b = null == f ? void 0 : f.applicationId;
    return g !== u.Ez.PANEL || null == b || m || null == p || null == f || (0, c.Z)(p)
        ? null
        : (0, r.jsx)(d.Z, {
              maxHeight: t,
              connectedLocation: f.location,
              renderExternalHeader: n,
          });
}
