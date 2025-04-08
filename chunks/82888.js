n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(399606),
    l = n(595519),
    o = n(317381),
    a = n(16609),
    s = n(917107),
    c = n(9145),
    u = n(918559);
function d(e) {
    let { maxHeight: t, renderExternalHeader: n } = e,
        {
            connectedChannelId: d,
            connectedActivity: p,
            activityPanelMode: h
        } = (0, i.cj)([o.ZP], () => {
            let e = o.ZP.getConnectedActivityLocation(),
                t = o.ZP.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, a.pY)(e),
                connectedActivity: t,
                activityPanelMode: o.ZP.getActivityPanelMode()
            };
        });
    if (!(0, l.NX)(d)) return null;
    let f = null == p ? void 0 : p.applicationId;
    return h !== u.Ez.PANEL || null == f || null == d || null == p || (0, s.Z)(d)
        ? null
        : (0, r.jsx)(c.Z, {
              maxHeight: t,
              connectedLocation: p.location,
              renderExternalHeader: n
          });
}
