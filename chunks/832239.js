e.d(n, {
    JO: function () {
        return a;
    },
    KK: function () {
        return l;
    },
    Vp: function () {
        return u;
    },
    hW: function () {
        return s;
    },
    zu: function () {
        return c;
    }
});
var i = e(544891),
    r = e(570140),
    o = e(981631);
function a() {
    r.Z.dispatch({ type: 'VIBING_WUMPUS_PLAY_MUSIC' });
}
function c() {
    r.Z.dispatch({ type: 'VIBING_WUMPUS_STOP_MUSIC' });
}
function s() {
    r.Z.dispatch({ type: 'VIBING_WUMPUS_PAUSE_MUSIC' });
}
function u(t) {
    return i.tn.del({
        url: o.ANM.DELETE_SAFETY_WARNINGS(t),
        rejectWithError: !1
    });
}
function l(t, n) {
    return i.tn.post({
        url: o.ANM.ADD_SAFETY_WARNING(t),
        body: { safety_warning_type: n },
        rejectWithError: !1
    });
}
