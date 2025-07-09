n.d(t, { Z: () => o });
var i = n(255367),
    r = n(442837),
    s = n(696826),
    a = n(720734),
    l = n(594174);
function o(e) {
    let { nameplate: t } = e,
        n = (0, r.e7)([l.default], () => l.default.getCurrentUser());
    return (0, i.jsx)(a.m, {
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        streaming: !1,
        status: s.Sk.ONLINE,
        currentUser: n,
        activities: [],
        applicationStream: void 0,
        userTag: '',
        hidePrivateData: !1,
        premiumSubscription: void 0,
        speakingWhileMuted: !1,
        occluded: !1,
        dismissibleContents: {
            avatar: [],
            settings: []
        },
        awaitingRemote: !1,
        isEligibleForPomelo: !1,
        nameplate: t,
        voiceChannel: null,
        voiceActivityStatusEnabled: !1,
        isQuestBarEmpty: !0,
        isListenAlongVisible: !1
    });
}
