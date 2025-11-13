n.d(t, { Z: () => l });
var r = n(44136),
    i = n(354459);
function l(e, t) {
    var n, l;
    let a = null,
        o = null,
        c = null,
        s = !1,
        u = !1,
        d = !1;
    switch (e.type) {
        case i.fO.ACTIVITY:
            break;
        case i.fO.USER:
            (a = e.streamId), (c = e.voiceState), (s = e.speaking), (u = e.latched), (d = e.ringing);
            break;
        case i.fO.STREAM:
            (a = e.streamId), (o = e.stream);
    }
    return {
        streamId: a,
        stream: o,
        speaking: s,
        latched: u,
        ringing: d,
        muted: null != (n = null == c ? void 0 : c.isVoiceMuted()) && n,
        deafen: null != (l = null == c ? void 0 : c.isVoiceDeafened()) && l,
        mirror: e.type === i.fO.USER && e.user.id === t,
        hasVideo: (0, r.ZP)(e),
    };
}
