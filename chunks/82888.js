n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(399606),
    l = n(595519),
    o = n(317381),
    a = n(917107),
    s = n(9145),
    c = n(918559);
function u(e) {
    let { maxHeight: t, renderExternalHeader: n } = e,
        {
            connectedChannelId: u,
            connectedActivity: d,
            activityPanelMode: p
        } = (0, i.cj)([o.ZP], () => {
            var e;
            let t = o.ZP.getConnectedActivityChannelId();
            return {
                connectedChannelId: t,
                connectedActivity: null != t && null != (e = o.ZP.getSelfEmbeddedActivityForChannel(t)) ? e : void 0,
                activityPanelMode: o.ZP.getActivityPanelMode()
            };
        });
    if (!(0, l.NX)(u)) return null;
    let h = null == d ? void 0 : d.applicationId;
    return p !== c.Ez.PANEL || null == h || null == u || null == d || (0, a.Z)(u)
        ? null
        : (0, r.jsx)(s.Z, {
              maxHeight: t,
              connectedLocation: d.location,
              renderExternalHeader: n
          });
}
