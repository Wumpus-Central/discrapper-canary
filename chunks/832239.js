n.d(e, {
    JO: () => c,
    KK: () => u,
    Vp: () => l,
    hW: () => s,
    zu: () => a
});
var r = n(544891),
    i = n(570140),
    o = n(981631);
function c() {
    i.Z.dispatch({ type: 'VIBING_WUMPUS_PLAY_MUSIC' });
}
function a() {
    i.Z.dispatch({ type: 'VIBING_WUMPUS_STOP_MUSIC' });
}
function s() {
    i.Z.dispatch({ type: 'VIBING_WUMPUS_PAUSE_MUSIC' });
}
function l(t) {
    return r.tn.del({
        url: o.ANM.DELETE_SAFETY_WARNINGS(t),
        rejectWithError: !1
    });
}
function u(t, e) {
    return r.tn.post({
        url: o.ANM.ADD_SAFETY_WARNING(t),
        body: { safety_warning_type: e },
        rejectWithError: !1
    });
}
