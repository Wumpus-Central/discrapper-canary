n.d(t, { Z: () => O }), n(388685);
var r,
    i = n(392711),
    l = n.n(i),
    s = n(442837),
    a = n(570140),
    o = n(563534),
    c = n(999382);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
let m = { enabled: !1 },
    g = null,
    p = Object.assign({}, m),
    f = !1,
    h = {};
function x() {
    (g = null), (p = Object.assign({}, m)), (f = !1), (g = c.Z.getGuildId()), (p = l().cloneDeep(Object.assign({}, o.Z.getSettings(g))));
}
function b(e, t) {
    if (null == p.newMemberActions) return !1;
    let n = p.newMemberActions.findIndex((t) => t.channelId === e);
    if (n < 0) return !1;
    (p.newMemberActions[n] = d({}, t)), (p.newMemberActions = [...p.newMemberActions]);
}
function j(e, t) {
    if (null == p.resourceChannels) return !1;
    let n = p.resourceChannels.findIndex((t) => t.channelId === e);
    if (n < 0) return !1;
    (p.resourceChannels[n] = d({}, t)), (p.resourceChannels = [...p.resourceChannels]);
}
function _() {
    (f = !1), (p = l().cloneDeep(Object.assign({}, o.Z.getSettings(g))));
}
class v extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        null != e && (h = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(c.Z, o.Z);
    }
    getState() {
        return { dismissedSuggestedChannelIdsByGuildId: h };
    }
    getSettings() {
        return null != p ? p : m;
    }
    hasChanges() {
        return null != g && !l().isEqual(l().omit(p, 'newMemberActions'), l().omit(o.Z.getSettings(g), 'newMemberActions'));
    }
    getSubmitting() {
        return f;
    }
    getDismissedSuggestedChannelIds(e) {
        var t;
        return null == e ? [] : null != (t = h[e]) ? t : [];
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
u(v, 'displayName', 'GuildSettingsOnboardingHomeSettingsStore'), u(v, 'persistKey', 'GuildSettingsOnboardingHomeSettingsStore');
let O = new v(a.Z, {
    GUILD_SETTINGS_INIT: x,
    GUILD_SETTINGS_SET_SECTION: x,
    GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: x,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: function () {
        p = l().cloneDeep(Object.assign({}, o.Z.getSettings(g)));
    },
    GUILD_HOME_SETTINGS_UPDATE_START: function () {
        f = !0;
    },
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: _,
    GUILD_HOME_SETTINGS_UPDATE_FAIL: _,
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function (e) {
        let { action: t } = e;
        return b(t.channelId, t);
    },
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function (e) {
        let { resourceChannel: t } = e;
        j(t.channelId, t);
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function (e) {
        let { welcomeMessage: t } = e;
        if (null == t) p.welcomeMessage = void 0;
        else {
            var n, r, i, l, s, a;
            p.welcomeMessage = {
                authorIds: null != (l = null != (i = t.authorIds) ? i : null == (n = p.welcomeMessage) ? void 0 : n.authorIds) ? l : [],
                message: null != (a = null != (s = t.message) ? s : null == (r = p.welcomeMessage) ? void 0 : r.message) ? a : ''
            };
        }
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: t, action: n } = e;
        return b(t, n);
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
        h[n] = [...(null != (t = h[n]) ? t : []), ...r];
    }
});
