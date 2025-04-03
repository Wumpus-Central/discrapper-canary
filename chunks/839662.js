n.d(t, { Z: () => i });
var r = n(44136),
    l = n(354459);
function i(e, t) {
    var n, i;
    let a = null,
        o = null,
        s = null,
        u = !1,
        c = !1;
    switch (e.type) {
        case l.fO.ACTIVITY:
            break;
        case l.fO.USER:
            (a = e.streamId), (s = e.voiceState), (u = e.speaking), (c = e.ringing);
            break;
        case l.fO.STREAM:
            (a = e.streamId), (o = e.stream);
    }
    return {
        streamId: a,
        stream: o,
        speaking: u,
        ringing: c,
        muted: null != (n = null == s ? void 0 : s.isVoiceMuted()) && n,
        deafen: null != (i = null == s ? void 0 : s.isVoiceDeafened()) && i,
        mirror: e.type === l.fO.USER && e.user.id === t,
        hasVideo: (0, r.ZP)(e)
    };
}
