r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(570140);
function a(e) {
    let { channelId: n, applicationId: r, intent: a, inviterUserId: o, analyticsLocations: s, commandOrigin: l } = e;
    i.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_DEFERRED_OPEN',
        channelId: n,
        applicationId: r,
        intent: a,
        inviterUserId: o,
        analyticsLocations: s,
        commandOrigin: l
    });
}
