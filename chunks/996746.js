n.d(t, { Z: () => o });
var i = n(200651),
    s = n(442837),
    r = n(696826),
    a = n(720734),
    l = n(594174);
function o(e) {
    let { nameplate: t } = e,
        n = (0, s.e7)([l.default], () => l.default.getCurrentUser());
    return (0, i.jsx)(a.m, {
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        streaming: !1,
        status: r.Sk.ONLINE,
        currentUser: n,
        activityStatusCleanupEnabled: !1,
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
        voiceActivityStatusEnabled: !1
    });
}
