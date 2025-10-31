e.d(n, {
    JO: () => o,
    KK: () => u,
    Vp: () => l,
    hW: () => c,
    zu: () => s,
});
var i = e(544891),
    a = e(570140),
    r = e(981631);
function o() {
    a.Z.dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
}
function s() {
    a.Z.dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
}
function c() {
    a.Z.dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
}
function l(t) {
    return i.tn.del({
        url: r.ANM.DELETE_SAFETY_WARNINGS(t),
        rejectWithError: !1,
    });
}
function u(t, n) {
    return i.tn.post({
        url: r.ANM.ADD_SAFETY_WARNING(t),
        body: { safety_warning_type: n },
        rejectWithError: !1,
    });
}
