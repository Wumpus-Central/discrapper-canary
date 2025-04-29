n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(252258),
    l = n(399606),
    o = n(595519),
    a = n(317381),
    s = n(16609),
    c = n(917107),
    u = n(9145),
    d = n(918559);
function p(e) {
    let { maxHeight: t, renderExternalHeader: n } = e,
        {
            connectedChannelId: p,
            connectedActivity: h,
            activityPanelMode: f
        } = (0, l.cj)([a.ZP], () => {
            let e = a.ZP.getConnectedActivityLocation(),
                t = a.ZP.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, s.pY)(e),
                connectedActivity: t,
                activityPanelMode: a.ZP.getActivityPanelMode()
            };
        }),
        m = (null == h ? void 0 : h.location.kind) === i.E.CONTEXTLESS;
    if (!(0, o.NX)(p) && !m) return null;
    let g = null == h ? void 0 : h.applicationId;
    return f !== d.Ez.PANEL || null == g
        ? null
        : (null != p && null != h && !(0, c.Z)(p)) || m
          ? (0, r.jsx)(u.Z, {
                maxHeight: t,
                connectedLocation: h.location,
                renderExternalHeader: n
            })
          : null;
}
