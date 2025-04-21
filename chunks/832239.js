n.d(t, {
    JO: () => s,
    KK: () => u,
    Vp: () => o,
    hW: () => d,
    zu: () => a
});
var i = n(544891),
    l = n(570140),
    r = n(981631);
function s() {
    l.Z.dispatch({ type: 'VIBING_WUMPUS_PLAY_MUSIC' });
}
function a() {
    l.Z.dispatch({ type: 'VIBING_WUMPUS_STOP_MUSIC' });
}
function d() {
    l.Z.dispatch({ type: 'VIBING_WUMPUS_PAUSE_MUSIC' });
}
function o(e) {
    return i.tn.del({
        url: r.ANM.DELETE_SAFETY_WARNINGS(e),
        rejectWithError: !1
    });
}
function u(e, t) {
    return i.tn.post({
        url: r.ANM.ADD_SAFETY_WARNING(e),
        body: { safety_warning_type: t },
        rejectWithError: !1
    });
}
