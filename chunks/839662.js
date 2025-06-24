n.d(t, { Z: () => i });
var r = n(44136),
    l = n(354459);
function i(e, t) {
    var n, i;
    let a = null,
        u = null,
        o = null,
        s = !1,
        c = !1;
    switch (e.type) {
        case l.fO.ACTIVITY:
            break;
        case l.fO.USER:
            (a = e.streamId), (o = e.voiceState), (s = e.speaking), (c = e.ringing);
            break;
        case l.fO.STREAM:
            (a = e.streamId), (u = e.stream);
    }
    return {
        streamId: a,
        stream: u,
        speaking: s,
        ringing: c,
        muted: null != (n = null == o ? void 0 : o.isVoiceMuted()) && n,
        deafen: null != (i = null == o ? void 0 : o.isVoiceDeafened()) && i,
        mirror: e.type === l.fO.USER && e.user.id === t,
        hasVideo: (0, r.ZP)(e)
    };
}
