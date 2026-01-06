t.d(n, { Z: () => D }), t(190126), t(368063), t(65234), t(111804), t(490233), t(97749), t(388685);
var r,
    i = t(392711),
    o = t.n(i),
    a = t(442837),
    c = t(570140),
    l = t(563534),
    s = t(999382);
function u(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[n] = t),
        e
    );
}
function d(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                u(e, n, t[n]);
            });
    }
    return e;
}
let f = { enabled: !1 },
    g = null,
    h = Object.assign({}, f),
    b = !1,
    I = {},
    v = {};
function p(e) {
    try {
        return new URL(null != e ? e : ""), !0;
    } catch (e) {
        return !1;
    }
}
function S() {
    (g = null),
        (h = Object.assign({}, f)),
        (b = !1),
        (v = {}),
        (g = s.Z.getGuildId()),
        (h = o().cloneDeep(Object.assign({}, l.Z.getSettings(g))));
}
function _(e, n) {
    if (null == h.newMemberActions) return !1;
    let t = h.newMemberActions.findIndex((n) => n.channelId === e);
    if (t < 0) return !1;
    (h.newMemberActions[t] = d({}, n)), (h.newMemberActions = [...h.newMemberActions]);
}
function O(e, n) {
    if (null == h.resourceChannels) return !1;
    let t = h.resourceChannels.findIndex((n) => n.channelId === e);
    if (t < 0) return !1;
    (h.resourceChannels[t] = d({}, n)), (h.resourceChannels = [...h.resourceChannels]);
}
function C() {
    (b = !1), (h = o().cloneDeep(Object.assign({}, l.Z.getSettings(g))));
}
class m extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (I = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(s.Z, l.Z);
    }
    getState() {
        return { dismissedSuggestedChannelIdsByGuildId: I };
    }
    getSettings() {
        return null != h ? h : f;
    }
    hasChanges() {
        return null != g && !o().isEqual(h, l.Z.getSettings(g));
    }
    canCloseEarly() {
        return !this.hasChanges();
    }
    showNotice() {
        return this.hasChanges();
    }
    getSubmitting() {
        return b;
    }
    getDismissedSuggestedChannelIds(e) {
        var n;
        return null == e ? [] : null != (n = I[e]) ? n : [];
    }
    getResourceChannel(e) {
        var n;
        if (null == e) return null;
        let t = null == (n = h.resourceChannels) ? void 0 : n.find((n) => n.channelId === e);
        return null == t ? null : t;
    }
    getNewMemberAction(e) {
        var n;
        if (null == e) return null;
        let t = null == (n = h.newMemberActions) ? void 0 : n.find((n) => n.channelId === e);
        return null == t ? null : t;
    }
    getPendingData() {
        return v;
    }
    getPendingDataForChannel(e) {
        if (null != e) return v[e];
    }
}
u(m, "displayName", "GuildSettingsOnboardingHomeSettingsStore"),
    u(m, "persistKey", "GuildSettingsOnboardingHomeSettingsStore");
let D = new m(c.Z, {
    GUILD_SETTINGS_INIT: S,
    GUILD_SETTINGS_SET_SECTION: S,
    GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: S,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: function () {
        h = o().cloneDeep(Object.assign({}, l.Z.getSettings(g)));
    },
    GUILD_HOME_SETTINGS_UPDATE_START: function () {
        b = !0;
    },
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: C,
    GUILD_HOME_SETTINGS_UPDATE_FAIL: C,
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function (e) {
        let { action: n } = e;
        return _(n.channelId, n);
    },
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function (e) {
        let { resourceChannel: n } = e;
        O(n.channelId, n);
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function (e) {
        let { welcomeMessage: n } = e;
        if (null == n) h.welcomeMessage = void 0;
        else {
            var t, r, i, o, a, c;
            h.welcomeMessage = {
                authorIds:
                    null != (o = null != (i = n.authorIds) ? i : null == (t = h.welcomeMessage) ? void 0 : t.authorIds)
                        ? o
                        : [],
                message:
                    null != (c = null != (a = n.message) ? a : null == (r = h.welcomeMessage) ? void 0 : r.message)
                        ? c
                        : "",
            };
        }
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: n, action: t } = e;
        return _(n, t);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function (e) {
        var n;
        let { action: t, pendingData: r } = e;
        (h.newMemberActions = null != (n = h.newMemberActions) ? n : []),
            (h.newMemberActions = [...h.newMemberActions, t]),
            (v[t.channelId] = {
                iconData: r.icon,
                isUrl: p(r.icon),
                emoji: r.emoji,
            });
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA: function (e) {
        let { channelId: n, pendingData: t } = e;
        v[n] = {
            iconData: t.icon,
            isUrl: p(t.icon),
            emoji: t.emoji,
        };
    },
    GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA: function (e) {
        let { channelId: n } = e;
        null == n ? (v = {}) : delete v[n];
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: n } = e;
        if (null == h.newMemberActions) return !1;
        (h.newMemberActions = [...h.newMemberActions.filter((e) => e.channelId !== n)]), delete v[n];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function (e) {
        let { actions: n } = e;
        h.newMemberActions = n;
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function (e) {
        let { channelId: n, resourceChannel: t } = e;
        O(n, t);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function (e) {
        var n;
        let { resourceChannel: t } = e;
        (h.resourceChannels = (null != (n = h.resourceChannels) ? n : []).filter((e) => e.channelId !== t.channelId)),
            (h.resourceChannels = [...h.resourceChannels, t]);
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function (e) {
        let { resourceChannelId: n } = e;
        if (null == h.resourceChannels) return !1;
        h.resourceChannels = [...h.resourceChannels.filter((e) => e.channelId !== n)];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function (e) {
        let { resourceChannels: n } = e;
        h.resourceChannels = n;
    },
    GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function (e) {
        var n;
        let { guildId: t, channelIds: r } = e;
        I[t] = [...(null != (n = I[t]) ? n : []), ...r];
    },
});
