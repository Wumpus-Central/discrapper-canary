n.d(t, { Z: () => c });
var a = n(951288),
    i = n(442837),
    r = n(696826),
    l = n(720734),
    s = n(594174),
    o = n(51144);
function c(e) {
    var t;
    let { nameplate: n } = e,
        c = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        d = null != (t = o.ZP.useName(c)) ? t : "";
    return (0, a.jsx)(l.m, {
        username: d,
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        streaming: !1,
        status: r.Sk.ONLINE,
        currentUser: c,
        activities: [],
        applicationStream: void 0,
        userTag: "",
        hidePrivateData: !1,
        premiumSubscription: void 0,
        speakingWhileMuted: !1,
        occluded: !1,
        dismissibleContents: {
            avatar: [],
            settings: [],
        },
        awaitingRemote: !1,
        isEligibleForPomelo: !1,
        nameplate: n,
        voiceChannel: null,
        voiceActivityStatusEnabled: !1,
        isQuestBarEmpty: !0,
        hasLoadedQuestBar: !0,
        isListenAlongVisible: !1,
    });
}
