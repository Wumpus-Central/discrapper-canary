n.d(t, { Z: () => O }), n(388685);
var r,
    i = n(392711),
    l = n.n(i),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
let g = { enabled: !1 },
    m = null,
    p = Object.assign({}, g),
    f = !1,
    h = {};
function b() {
    (m = null),
        (p = Object.assign({}, g)),
        (f = !1),
        (m = c.Z.getGuildId()),
        (p = l().cloneDeep(Object.assign({}, o.Z.getSettings(m))));
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
function _() {
    (f = !1), (p = l().cloneDeep(Object.assign({}, o.Z.getSettings(m))));
}
class v extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (h = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(c.Z, o.Z);
    }
    getState() {
        return { dismissedSuggestedChannelIdsByGuildId: h };
    }
    getSettings() {
        return null != p ? p : g;
    }
    hasChanges() {
        return null != m && !l().isEqual(p, o.Z.getSettings(m));
    }
    canCloseEarly() {
        return !this.hasChanges();
    }
    showNotice() {
        return this.hasChanges();
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
d(v, "displayName", "GuildSettingsOnboardingHomeSettingsStore"),
    d(v, "persistKey", "GuildSettingsOnboardingHomeSettingsStore");
let O = new v(s.Z, {
    GUILD_SETTINGS_INIT: b,
    GUILD_SETTINGS_SET_SECTION: b,
    GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: b,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: function () {
        p = l().cloneDeep(Object.assign({}, o.Z.getSettings(m)));
    },
    GUILD_HOME_SETTINGS_UPDATE_START: function () {
        f = !0;
    },
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: _,
    GUILD_HOME_SETTINGS_UPDATE_FAIL: _,
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
            var n, r, i, l, a, s;
            p.welcomeMessage = {
                authorIds:
                    null != (l = null != (i = t.authorIds) ? i : null == (n = p.welcomeMessage) ? void 0 : n.authorIds)
                        ? l
                        : [],
                message:
                    null != (s = null != (a = t.message) ? a : null == (r = p.welcomeMessage) ? void 0 : r.message)
                        ? s
                        : "",
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
        (p.newMemberActions = null != (t = p.newMemberActions) ? t : []),
            (p.newMemberActions = [...p.newMemberActions, n]);
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
        (p.resourceChannels = (null != (t = p.resourceChannels) ? t : []).filter((e) => e.channelId !== n.channelId)),
            (p.resourceChannels = [...p.resourceChannels, n]);
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
    },
});
