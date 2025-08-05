n.d(t, { Z: () => a });
var r = n(44136),
    i = n(354459);
function a(e, t) {
    var n, a;
    let o = null,
        s = null,
        l = null,
        c = !1,
        u = !1;
    switch (e.type) {
        case i.fO.ACTIVITY:
            break;
        case i.fO.USER:
            ((o = e.streamId), (l = e.voiceState), (c = e.speaking), (u = e.ringing));
            break;
        case i.fO.STREAM:
            ((o = e.streamId), (s = e.stream));
    }
    return {
        streamId: o,
        stream: s,
        speaking: c,
        ringing: u,
        muted: null != (n = null == l ? void 0 : l.isVoiceMuted()) && n,
        deafen: null != (a = null == l ? void 0 : l.isVoiceDeafened()) && a,
        mirror: e.type === i.fO.USER && e.user.id === t,
        hasVideo: (0, r.ZP)(e)
    };
}
