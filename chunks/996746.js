n.d(t, { Z: () => o });
var i = n(255367),
    r = n(442837),
    s = n(696826),
    l = n(720734),
    a = n(594174);
function o(e) {
    let { nameplate: t } = e,
        n = (0, r.e7)([a.default], () => a.default.getCurrentUser());
    return (0, i.jsx)(l.m, {
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
        simplifiedCallSettingsEnabled: !1,
        nameplate: t,
        voiceChannel: null,
        voiceActivityStatusEnabled: !1,
        customStatusRTCEntrypointEnabled: !1,
        isQuestBarEmpty: !0
    });
}
