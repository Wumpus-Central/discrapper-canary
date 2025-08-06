n.d(t, { Z: () => o });
var r = n(44136),
    i = n(354459);
function o(e, t) {
    var n, o;
    let a = null,
        s = null,
        l = null,
        c = !1,
        u = !1;
    switch (e.type) {
        case i.fO.ACTIVITY:
            break;
        case i.fO.USER:
            ((a = e.streamId), (l = e.voiceState), (c = e.speaking), (u = e.ringing));
            break;
        case i.fO.STREAM:
            ((a = e.streamId), (s = e.stream));
    }
    return {
        streamId: a,
        stream: s,
        speaking: c,
        ringing: u,
        muted: null != (n = null == l ? void 0 : l.isVoiceMuted()) && n,
        deafen: null != (o = null == l ? void 0 : l.isVoiceDeafened()) && o,
        mirror: e.type === i.fO.USER && e.user.id === t,
        hasVideo: (0, r.ZP)(e)
    };
}
