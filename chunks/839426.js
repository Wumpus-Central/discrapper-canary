n.d(t, { Z: () => r });
var i = n(570140);
function r(e) {
    let { channelId: t, applicationId: n, intent: r, inviterUserId: a, analyticsLocations: s, commandOrigin: o } = e;
    i.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_DEFERRED_OPEN',
        channelId: t,
        applicationId: n,
        intent: r,
        inviterUserId: a,
        analyticsLocations: s,
        commandOrigin: o
    });
}
