t.d(e, {
    JO: () => d,
    KK: () => o,
    Vp: () => u,
    hW: () => a,
    zu: () => s
});
var i = t(544891),
    l = t(570140),
    r = t(981631);
function d() {
    l.Z.dispatch({ type: 'VIBING_WUMPUS_PLAY_MUSIC' });
}
function s() {
    l.Z.dispatch({ type: 'VIBING_WUMPUS_STOP_MUSIC' });
}
function a() {
    l.Z.dispatch({ type: 'VIBING_WUMPUS_PAUSE_MUSIC' });
}
function u(n) {
    return i.tn.del({
        url: r.ANM.DELETE_SAFETY_WARNINGS(n),
        rejectWithError: !1
    });
}
function o(n, e) {
    return i.tn.post({
        url: r.ANM.ADD_SAFETY_WARNING(n),
        body: { safety_warning_type: e },
        rejectWithError: !1
    });
}
