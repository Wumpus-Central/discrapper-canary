n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(399606),
    a = n(595519),
    r = n(317381),
    s = n(917107),
    o = n(9145),
    c = n(918559);
function d(e) {
    let { maxHeight: t, renderExternalHeader: n } = e,
        {
            connectedChannelId: d,
            connectedActivity: u,
            activityPanelMode: h
        } = (0, l.cj)([r.ZP], () => {
            var e;
            let t = r.ZP.getConnectedActivityChannelId();
            return {
                connectedChannelId: t,
                connectedActivity: null != t && null !== (e = r.ZP.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0,
                activityPanelMode: r.ZP.getActivityPanelMode()
            };
        });
    if (!(0, a.NX)(d)) return null;
    let p = null == u ? void 0 : u.applicationId;
    return h !== c.Ez.PANEL || null == p
        ? null
        : null == d || null == u || (0, s.Z)(d)
          ? null
          : (0, i.jsx)(o.Z, {
                maxHeight: t,
                connectedLocation: u.location,
                renderExternalHeader: n
            });
}
