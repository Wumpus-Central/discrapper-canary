n.d(t, { Z: () => v }), n(47120);
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
    g = null,
    p = Object.assign({}, m),
    h = !1,
    f = {};
function b() {
    (g = null), (p = Object.assign({}, m)), (h = !1), (g = c.Z.getGuildId()), (p = s().cloneDeep(Object.assign({}, o.Z.getSettings(g))));
}
function x(e, t) {
    if (null == p.newMemberActions) return !1;
    let n = p.newMemberActions.findIndex((t) => t.channelId === e);
    if (n < 0) return !1;
    (p.newMemberActions[n] = u({}, t)), (p.newMemberActions = [...p.newMemberActions]);
}
function j(e, t) {
    if (null == p.resourceChannels) return !1;
    let n = p.resourceChannels.findIndex((t) => t.channelId === e);
    if (n < 0) return !1;
    (p.resourceChannels[n] = u({}, t)), (p.resourceChannels = [...p.resourceChannels]);
}
function N() {
    (h = !1), (p = s().cloneDeep(Object.assign({}, o.Z.getSettings(g))));
}
class _ extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (f = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(c.Z, o.Z);
    }
    getState() {
        return { dismissedSuggestedChannelIdsByGuildId: f };
    }
    getSettings() {
        return null != p ? p : m;
    }
    hasChanges() {
        return null != g && !s().isEqual(s().omit(p, 'newMemberActions'), s().omit(o.Z.getSettings(g), 'newMemberActions'));
    }
    getSubmitting() {
        return h;
    }
    getDismissedSuggestedChannelIds(e) {
        var t;
        return null == e ? [] : null != (t = f[e]) ? t : [];
    }
    getResourceChannel(e) {
        var t;
        if (null == e) return null;
        let n = null == (t = p.resourceChannels) ? void 0 : t.find((t) => t.channelId === e);
        return null == n ? null : n;
    }
    getNewMemberAction(e) {
        var t;
        if (null == e) return null;
        let n = null == (t = p.newMemberActions) ? void 0 : t.find((t) => t.channelId === e);
        return null == n ? null : n;
    }
}
d(_, 'displayName', 'GuildSettingsOnboardingHomeSettingsStore'), d(_, 'persistKey', 'GuildSettingsOnboardingHomeSettingsStore');
let v = new _(l.Z, {
    GUILD_SETTINGS_INIT: b,
    GUILD_SETTINGS_SET_SECTION: b,
    GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: b,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: function () {
        p = s().cloneDeep(Object.assign({}, o.Z.getSettings(g)));
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
        if (null == t) p.welcomeMessage = void 0;
        else {
            var n, r, i, s, a, l;
            p.welcomeMessage = {
                authorIds: null != (s = null != (i = t.authorIds) ? i : null == (n = p.welcomeMessage) ? void 0 : n.authorIds) ? s : [],
                message: null != (l = null != (a = t.message) ? a : null == (r = p.welcomeMessage) ? void 0 : r.message) ? l : ''
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
        (p.newMemberActions = null != (t = p.newMemberActions) ? t : []), (p.newMemberActions = [...p.newMemberActions, n]);
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: t } = e;
        if (null == p.newMemberActions) return !1;
        p.newMemberActions = [...p.newMemberActions.filter((e) => e.channelId !== t)];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function (e) {
        let { actions: t } = e;
        p.newMemberActions = t;
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function (e) {
        let { channelId: t, resourceChannel: n } = e;
        j(t, n);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function (e) {
        var t;
        let { resourceChannel: n } = e;
        (p.resourceChannels = (null != (t = p.resourceChannels) ? t : []).filter((e) => e.channelId !== n.channelId)), (p.resourceChannels = [...p.resourceChannels, n]);
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function (e) {
        let { resourceChannelId: t } = e;
        if (null == p.resourceChannels) return !1;
        p.resourceChannels = [...p.resourceChannels.filter((e) => e.channelId !== t)];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function (e) {
        let { resourceChannels: t } = e;
        p.resourceChannels = t;
    },
    GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function (e) {
        var t;
        let { guildId: n, channelIds: r } = e;
        f[n] = [...(null != (t = f[n]) ? t : []), ...r];
    }
});
