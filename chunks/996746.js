n.d(t, { Z: () => c });
var r = n(951288),
    i = n(442837),
    a = n(696826),
    o = n(181430),
    s = n(720734),
    l = n(594174);
function c(e) {
    let { nameplate: t } = e,
        n = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
        c = (0, o.Y)({ location: "AccountPreview" });
    return (0, r.jsx)(s.m, {
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        streaming: !1,
        status: a.Sk.ONLINE,
        currentUser: n,
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
        nameplate: t,
        voiceChannel: null,
        voiceActivityStatusEnabled: !1,
        isQuestBarEmpty: !0,
        isListenAlongVisible: !1,
        isDisplayNameStylesEnabled: c,
    });
}
