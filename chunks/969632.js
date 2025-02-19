n.d(t, { Z: () => _ }), n(47120);
var r,
    i = n(392711),
    s = n.n(i),
    a = n(442837),
    l = n(570140),
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
let m = { enabled: !1 },
    p = null,
    g = Object.assign({}, m),
    h = !1,
    f = {};
function b() {
    (p = null), (g = Object.assign({}, m)), (h = !1), (p = c.Z.getGuildId()), (g = s().cloneDeep(Object.assign({}, o.Z.getSettings(p))));
}
function x(e, t) {
    if (null == g.newMemberActions) return !1;
    let n = g.newMemberActions.findIndex((t) => t.channelId === e);
    if (n < 0) return !1;
    (g.newMemberActions[n] = u({}, t)), (g.newMemberActions = [...g.newMemberActions]);
}
function j(e, t) {
    if (null == g.resourceChannels) return !1;
    let n = g.resourceChannels.findIndex((t) => t.channelId === e);
    if (n < 0) return !1;
    (g.resourceChannels[n] = u({}, t)), (g.resourceChannels = [...g.resourceChannels]);
}
function N() {
    (h = !1), (g = s().cloneDeep(Object.assign({}, o.Z.getSettings(p))));
}
class v extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (f = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(c.Z, o.Z);
    }
    getState() {
        return { dismissedSuggestedChannelIdsByGuildId: f };
    }
    getSettings() {
        return null != g ? g : m;
    }
    hasChanges() {
        return null != p && !s().isEqual(s().omit(g, 'newMemberActions'), s().omit(o.Z.getSettings(p), 'newMemberActions'));
    }
    getSubmitting() {
        return h;
    }
    getDismissedSuggestedChannelIds(e) {
        var t;
        return null == e ? [] : null !== (t = f[e]) && void 0 !== t ? t : [];
    }
    getResourceChannel(e) {
        var t;
        if (null == e) return null;
        let n = null === (t = g.resourceChannels) || void 0 === t ? void 0 : t.find((t) => t.channelId === e);
        return null == n ? null : n;
    }
    getNewMemberAction(e) {
        var t;
        if (null == e) return null;
        let n = null === (t = g.newMemberActions) || void 0 === t ? void 0 : t.find((t) => t.channelId === e);
        return null == n ? null : n;
    }
}
d(v, 'displayName', 'GuildSettingsOnboardingHomeSettingsStore'), d(v, 'persistKey', 'GuildSettingsOnboardingHomeSettingsStore');
let _ = new v(l.Z, {
    GUILD_SETTINGS_INIT: b,
    GUILD_SETTINGS_SET_SECTION: b,
    GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: b,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: function () {
        g = s().cloneDeep(Object.assign({}, o.Z.getSettings(p)));
    },
    GUILD_HOME_SETTINGS_UPDATE_START: function () {
        h = !0;
    },
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: N,
    GUILD_HOME_SETTINGS_UPDATE_FAIL: N,
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function (e) {
        let { action: t } = e;
        return x(t.channelId, t);
    },
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function (e) {
        let { resourceChannel: t } = e;
        j(t.channelId, t);
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function (e) {
        let { welcomeMessage: t } = e;
        if (null == t) g.welcomeMessage = void 0;
        else {
            var n, r, i, s, a, l;
            g.welcomeMessage = {
                authorIds: null !== (s = null !== (i = t.authorIds) && void 0 !== i ? i : null === (n = g.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) && void 0 !== s ? s : [],
                message: null !== (l = null !== (a = t.message) && void 0 !== a ? a : null === (r = g.welcomeMessage) || void 0 === r ? void 0 : r.message) && void 0 !== l ? l : ''
            };
        }
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: t, action: n } = e;
        return x(t, n);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function (e) {
        var t;
        let { action: n } = e;
        (g.newMemberActions = null !== (t = g.newMemberActions) && void 0 !== t ? t : []), (g.newMemberActions = [...g.newMemberActions, n]);
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: t } = e;
        if (null == g.newMemberActions) return !1;
        g.newMemberActions = [...g.newMemberActions.filter((e) => e.channelId !== t)];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function (e) {
        let { actions: t } = e;
        g.newMemberActions = t;
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function (e) {
        let { channelId: t, resourceChannel: n } = e;
        j(t, n);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function (e) {
        var t;
        let { resourceChannel: n } = e;
        (g.resourceChannels = (null !== (t = g.resourceChannels) && void 0 !== t ? t : []).filter((e) => e.channelId !== n.channelId)), (g.resourceChannels = [...g.resourceChannels, n]);
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function (e) {
        let { resourceChannelId: t } = e;
        if (null == g.resourceChannels) return !1;
        g.resourceChannels = [...g.resourceChannels.filter((e) => e.channelId !== t)];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function (e) {
        let { resourceChannels: t } = e;
        g.resourceChannels = t;
    },
    GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function (e) {
        var t;
        let { guildId: n, channelIds: r } = e;
        f[n] = [...(null !== (t = f[n]) && void 0 !== t ? t : []), ...r];
    }
});
