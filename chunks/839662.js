n.d(t, { Z: () => r });
var l = n(44136),
    i = n(354459);
function r(e, t) {
    var n, r;
    let a = null,
        s = null,
        o = null,
        u = !1,
        c = !1;
    switch (e.type) {
        case i.fO.ACTIVITY:
            break;
        case i.fO.USER:
            (a = e.streamId), (o = e.voiceState), (u = e.speaking), (c = e.ringing);
            break;
        case i.fO.STREAM:
            (a = e.streamId), (s = e.stream);
    }
    return {
        streamId: a,
        stream: s,
        speaking: u,
        ringing: c,
        muted: null !== (n = null == o ? void 0 : o.isVoiceMuted()) && void 0 !== n && n,
        deafen: null !== (r = null == o ? void 0 : o.isVoiceDeafened()) && void 0 !== r && r,
        mirror: e.type === i.fO.USER && e.user.id === t,
        hasVideo: (0, l.ZP)(e)
    };
}
