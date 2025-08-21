e.d(n, {
    JO: () => s,
    KK: () => o,
    Vp: () => u,
    hW: () => d,
    zu: () => a,
});
var i = e(544891),
    r = e(570140),
    l = e(981631);
function s() {
    r.Z.dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
}
function a() {
    r.Z.dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
}
function d() {
    r.Z.dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
}
function u(t) {
    return i.tn.del({
        url: l.ANM.DELETE_SAFETY_WARNINGS(t),
        rejectWithError: !1,
    });
}
function o(t, n) {
    return i.tn.post({
        url: l.ANM.ADD_SAFETY_WARNING(t),
        body: { safety_warning_type: n },
        rejectWithError: !1,
    });
}
