n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(44136),
    l = n(354459);
function r(e, t) {
    var n, r;
    let a = null,
        s = null,
        o = null,
        c = !1,
        u = !1;
    switch (e.type) {
        case l.fO.ACTIVITY:
            break;
        case l.fO.USER:
            (a = e.streamId), (o = e.voiceState), (c = e.speaking), (u = e.ringing);
            break;
        case l.fO.STREAM:
            (a = e.streamId), (s = e.stream);
    }
    return {
        streamId: a,
        stream: s,
        speaking: c,
        ringing: u,
        muted: null !== (n = null == o ? void 0 : o.isVoiceMuted()) && void 0 !== n && n,
        deafen: null !== (r = null == o ? void 0 : o.isVoiceDeafened()) && void 0 !== r && r,
        mirror: e.type === l.fO.USER && e.user.id === t,
        hasVideo: (0, i.ZP)(e)
    };
}
