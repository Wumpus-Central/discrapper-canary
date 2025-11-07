n.d(t, { Z: () => l });
var i = n(44136),
    r = n(354459);
function l(e, t) {
    var n, l;
    let a = null,
        o = null,
        s = null,
        c = !1,
        u = !1,
        d = !1;
    switch (e.type) {
        case r.fO.ACTIVITY:
            break;
        case r.fO.USER:
            (a = e.streamId), (s = e.voiceState), (c = e.speaking), (u = e.latched), (d = e.ringing);
            break;
        case r.fO.STREAM:
            (a = e.streamId), (o = e.stream);
    }
    return {
        streamId: a,
        stream: o,
        speaking: c,
        latched: u,
        ringing: d,
        muted: null != (n = null == s ? void 0 : s.isVoiceMuted()) && n,
        deafen: null != (l = null == s ? void 0 : s.isVoiceDeafened()) && l,
        mirror: e.type === r.fO.USER && e.user.id === t,
        hasVideo: (0, i.ZP)(e),
    };
}
