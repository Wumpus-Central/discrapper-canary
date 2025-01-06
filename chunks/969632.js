n(47120);
var i,
    r = n(392711),
    l = n.n(r),
    a = n(442837),
    s = n(570140),
    o = n(563534),
    c = n(999382);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = { enabled: !1 },
    m = null,
    h = Object.assign({}, u),
    g = !1,
    x = {};
function p() {
    (function () {
        (m = null), (h = Object.assign({}, u)), (g = !1);
    })(),
        (m = c.Z.getGuildId()),
        (h = l().cloneDeep(Object.assign({}, o.Z.getSettings(m))));
}
function f(e, t) {
    if (null == h.newMemberActions) return !1;
    let n = h.newMemberActions.findIndex((t) => t.channelId === e);
    if (n < 0) return !1;
    (h.newMemberActions[n] = { ...t }), (h.newMemberActions = [...h.newMemberActions]);
}
function C(e, t) {
    if (null == h.resourceChannels) return !1;
    let n = h.resourceChannels.findIndex((t) => t.channelId === e);
    if (n < 0) return !1;
    (h.resourceChannels[n] = { ...t }), (h.resourceChannels = [...h.resourceChannels]);
}
function v() {
    (g = !1), (h = l().cloneDeep(Object.assign({}, o.Z.getSettings(m))));
}
class _ extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (x = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(c.Z, o.Z);
    }
    getState() {
        return { dismissedSuggestedChannelIdsByGuildId: x };
    }
    getSettings() {
        return null != h ? h : u;
    }
    hasChanges() {
        return null != m && !l().isEqual(l().omit(h, 'newMemberActions'), l().omit(o.Z.getSettings(m), 'newMemberActions'));
    }
    getSubmitting() {
        return g;
    }
    getDismissedSuggestedChannelIds(e) {
        var t;
        return null == e ? [] : null !== (t = x[e]) && void 0 !== t ? t : [];
    }
    getResourceChannel(e) {
        var t;
        if (null == e) return null;
        let n = null === (t = h.resourceChannels) || void 0 === t ? void 0 : t.find((t) => t.channelId === e);
        return null == n ? null : n;
    }
    getNewMemberAction(e) {
        var t;
        if (null == e) return null;
        let n = null === (t = h.newMemberActions) || void 0 === t ? void 0 : t.find((t) => t.channelId === e);
        return null == n ? null : n;
    }
}
d(_, 'displayName', 'GuildSettingsOnboardingHomeSettingsStore'),
    d(_, 'persistKey', 'GuildSettingsOnboardingHomeSettingsStore'),
    (t.Z = new _(s.Z, {
        GUILD_SETTINGS_INIT: p,
        GUILD_SETTINGS_SET_SECTION: p,
        GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: p,
        GUILD_HOME_SETTINGS_FETCH_SUCCESS: function () {
            h = l().cloneDeep(Object.assign({}, o.Z.getSettings(m)));
        },
        GUILD_HOME_SETTINGS_UPDATE_START: function () {
            g = !0;
        },
        GUILD_HOME_SETTINGS_UPDATE_SUCCESS: v,
        GUILD_HOME_SETTINGS_UPDATE_FAIL: v,
        GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function (e) {
            let { action: t } = e;
            return f(t.channelId, t);
        },
        GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function (e) {
            let { resourceChannel: t } = e;
            C(t.channelId, t);
        },
        GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function (e) {
            let { welcomeMessage: t } = e;
            if (null == t) h.welcomeMessage = void 0;
            else {
                var n, i, r, l, a, s;
                h.welcomeMessage = {
                    authorIds: null !== (l = null !== (r = t.authorIds) && void 0 !== r ? r : null === (n = h.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) && void 0 !== l ? l : [],
                    message: null !== (s = null !== (a = t.message) && void 0 !== a ? a : null === (i = h.welcomeMessage) || void 0 === i ? void 0 : i.message) && void 0 !== s ? s : ''
                };
            }
        },
        GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function (e) {
            let { channelId: t, action: n } = e;
            return f(t, n);
        },
        GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function (e) {
            var t;
            let { action: n } = e;
            (h.newMemberActions = null !== (t = h.newMemberActions) && void 0 !== t ? t : []), (h.newMemberActions = [...h.newMemberActions, n]);
        },
        GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function (e) {
            let { channelId: t } = e;
            if (null == h.newMemberActions) return !1;
            h.newMemberActions = [...h.newMemberActions.filter((e) => e.channelId !== t)];
        },
        GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function (e) {
            let { actions: t } = e;
            h.newMemberActions = t;
        },
        GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function (e) {
            let { channelId: t, resourceChannel: n } = e;
            C(t, n);
        },
        GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function (e) {
            var t;
            let { resourceChannel: n } = e;
            (h.resourceChannels = (null !== (t = h.resourceChannels) && void 0 !== t ? t : []).filter((e) => e.channelId !== n.channelId)), (h.resourceChannels = [...h.resourceChannels, n]);
        },
        GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function (e) {
            let { resourceChannelId: t } = e;
            if (null == h.resourceChannels) return !1;
            h.resourceChannels = [...h.resourceChannels.filter((e) => e.channelId !== t)];
        },
        GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function (e) {
            let { resourceChannels: t } = e;
            h.resourceChannels = t;
        },
        GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function (e) {
            var t;
            let { guildId: n, channelIds: i } = e;
            x[n] = [...(null !== (t = x[n]) && void 0 !== t ? t : []), ...i];
        }
    }));
