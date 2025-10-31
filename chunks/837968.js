n.d(t, { I: () => l });
var r = n(570140),
    i = n(383451),
    a = n(131951),
    o = n(981631),
    s = n(65154);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    r.Z.dispatch({
        type: "PUSH_TO_TALK_STATE_CHANGE",
        isActive: e,
        isPriority: t,
        isLatched: n,
    });
    let l = a.Z.getMode() === o.pM4.PUSH_TO_TALK,
        c =
            (0, i.f)({
                location: "doPTT",
                autoTrackExposure: !1,
            }).enableLatching && !0 === a.Z.getModeOptions().pttLatchingEnabled;
    a.Z.getMediaEngine().eachConnection((r) => r.setForceAudioInput(e, t, l && c && !n && !e), s.Yn.DEFAULT);
}
