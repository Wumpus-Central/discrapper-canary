n.d(t, {
    JO: () => s,
    KK: () => u,
    Vp: () => o,
    hW: () => d,
    zu: () => a
});
var i = n(544891),
    r = n(570140),
    l = n(981631);
function s() {
    r.Z.dispatch({ type: 'VIBING_WUMPUS_PLAY_MUSIC' });
}
function a() {
    r.Z.dispatch({ type: 'VIBING_WUMPUS_STOP_MUSIC' });
}
function d() {
    r.Z.dispatch({ type: 'VIBING_WUMPUS_PAUSE_MUSIC' });
}
function o(e) {
    return i.tn.del({
        url: l.ANM.DELETE_SAFETY_WARNINGS(e),
        rejectWithError: !1
    });
}
function u(e, t) {
    return i.tn.post({
        url: l.ANM.ADD_SAFETY_WARNING(e),
        body: { safety_warning_type: t },
        rejectWithError: !1
    });
}
