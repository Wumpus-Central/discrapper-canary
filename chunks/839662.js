n.d(t, { Z: () => l });
var r = n(44136),
    i = n(354459);
function l(e, t) {
    var n, l;
    let a = null,
        o = null,
        s = null,
        c = !1,
        u = !1;
    switch (e.type) {
        case i.fO.ACTIVITY:
            break;
        case i.fO.USER:
            (a = e.streamId), (s = e.voiceState), (c = e.speaking), (u = e.ringing);
            break;
        case i.fO.STREAM:
            (a = e.streamId), (o = e.stream);
    }
    return {
        streamId: a,
        stream: o,
        speaking: c,
        ringing: u,
        muted: null != (n = null == s ? void 0 : s.isVoiceMuted()) && n,
        deafen: null != (l = null == s ? void 0 : s.isVoiceDeafened()) && l,
        mirror: e.type === i.fO.USER && e.user.id === t,
        hasVideo: (0, r.ZP)(e),
    };
}
