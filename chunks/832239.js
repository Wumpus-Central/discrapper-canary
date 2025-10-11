t.d(n, {
    JO: () => a,
    KK: () => c,
    Vp: () => d,
    hW: () => o,
    zu: () => s,
});
var i = t(544891),
    r = t(570140),
    l = t(981631);
function a() {
    r.Z.dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
}
function s() {
    r.Z.dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
}
function o() {
    r.Z.dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
}
function d(e) {
    return i.tn.del({
        url: l.ANM.DELETE_SAFETY_WARNINGS(e),
        rejectWithError: !1,
    });
}
function c(e, n) {
    return i.tn.post({
        url: l.ANM.ADD_SAFETY_WARNING(e),
        body: { safety_warning_type: n },
        rejectWithError: !1,
    });
}
