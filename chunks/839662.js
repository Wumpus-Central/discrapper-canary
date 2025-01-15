n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(44136),
    l = n(354459);
function a(e, t) {
    var n, a;
    let r = null,
        s = null,
        o = null,
        c = !1,
        u = !1;
    switch (e.type) {
        case l.fO.ACTIVITY:
            break;
        case l.fO.USER:
            (r = e.streamId), (o = e.voiceState), (c = e.speaking), (u = e.ringing);
            break;
        case l.fO.STREAM:
            (r = e.streamId), (s = e.stream);
    }
    return {
        streamId: r,
        stream: s,
        speaking: c,
        ringing: u,
        muted: null !== (n = null == o ? void 0 : o.isVoiceMuted()) && void 0 !== n && n,
        deafen: null !== (a = null == o ? void 0 : o.isVoiceDeafened()) && void 0 !== a && a,
        mirror: e.type === l.fO.USER && e.user.id === t,
        hasVideo: (0, i.ZP)(e)
    };
}
