e.d(n, {
    JO: () => s,
    KK: () => u,
    Vp: () => l,
    hW: () => c,
    zu: () => o
});
var i = e(544891),
    r = e(570140),
    a = e(981631);
function s() {
    r.Z.dispatch({ type: 'VIBING_WUMPUS_PLAY_MUSIC' });
}
function o() {
    r.Z.dispatch({ type: 'VIBING_WUMPUS_STOP_MUSIC' });
}
function c() {
    r.Z.dispatch({ type: 'VIBING_WUMPUS_PAUSE_MUSIC' });
}
function l(t) {
    return i.tn.del({
        url: a.ANM.DELETE_SAFETY_WARNINGS(t),
        rejectWithError: !1
    });
}
function u(t, n) {
    return i.tn.post({
        url: a.ANM.ADD_SAFETY_WARNING(t),
        body: { safety_warning_type: n },
        rejectWithError: !1
    });
}
