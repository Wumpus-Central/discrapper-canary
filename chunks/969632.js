t.d(n, { Z: () => T }), t(190126), t(368063), t(65234), t(111804), t(490233), t(97749), t(388685);
var i,
    c = t(392711),
    l = t.n(c),
    a = t(442837),
    r = t(570140),
    o = t(563534),
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
            i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            i.forEach(function (n) {
                u(e, n, t[n]);
            });
    }
    return e;
}
let f = { enabled: !1 },
    _ = null,
    b = Object.assign({}, f),
    g = !1,
    h = {},
    S = {};
function I(e) {
    try {
        return new URL(null != e ? e : ""), !0;
    } catch (e) {
        return !1;
    }
}
function E() {
    (_ = null),
        (b = Object.assign({}, f)),
        (g = !1),
        (S = {}),
        (_ = s.Z.getGuildId()),
        (b = l().cloneDeep(Object.assign({}, o.Z.getSettings(_))));
}
function C(e, n) {
    if (null == b.newMemberActions) return !1;
    let t = b.newMemberActions.findIndex((n) => n.channelId === e);
    if (t < 0) return !1;
    (b.newMemberActions[t] = d({}, n)), (b.newMemberActions = [...b.newMemberActions]);
}
function N(e, n) {
    if (null == b.resourceChannels) return !1;
    let t = b.resourceChannels.findIndex((n) => n.channelId === e);
    if (t < 0) return !1;
    (b.resourceChannels[t] = d({}, n)), (b.resourceChannels = [...b.resourceChannels]);
}
function m() {
    (g = !1), (b = l().cloneDeep(Object.assign({}, o.Z.getSettings(_))));
}
class O extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (h = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(s.Z, o.Z);
    }
    getState() {
        return { dismissedSuggestedChannelIdsByGuildId: h };
    }
    getSettings() {
        return null != b ? b : f;
    }
    hasChanges() {
        return null != _ && !l().isEqual(b, o.Z.getSettings(_));
    }
    canCloseEarly() {
        return !this.hasChanges();
    }
    showNotice() {
        return this.hasChanges();
    }
    getSubmitting() {
        return g;
    }
    getDismissedSuggestedChannelIds(e) {
        var n;
        return null == e ? [] : null != (n = h[e]) ? n : [];
    }
    getResourceChannel(e) {
        var n;
        if (null == e) return null;
        let t = null == (n = b.resourceChannels) ? void 0 : n.find((n) => n.channelId === e);
        return null == t ? null : t;
    }
    getNewMemberAction(e) {
        var n;
        if (null == e) return null;
        let t = null == (n = b.newMemberActions) ? void 0 : n.find((n) => n.channelId === e);
        return null == t ? null : t;
    }
    getPendingIconData() {
        return S;
    }
    getPendingIconDataForChannel(e) {
        if (null != e) return S[e];
    }
}
u(O, "displayName", "GuildSettingsOnboardingHomeSettingsStore"),
    u(O, "persistKey", "GuildSettingsOnboardingHomeSettingsStore");
let T = new O(r.Z, {
    GUILD_SETTINGS_INIT: E,
    GUILD_SETTINGS_SET_SECTION: E,
    GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: E,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: function () {
        b = l().cloneDeep(Object.assign({}, o.Z.getSettings(_)));
    },
    GUILD_HOME_SETTINGS_UPDATE_START: function () {
        g = !0;
    },
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: m,
    GUILD_HOME_SETTINGS_UPDATE_FAIL: m,
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function (e) {
        let { action: n } = e;
        return C(n.channelId, n);
    },
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function (e) {
        let { resourceChannel: n } = e;
        N(n.channelId, n);
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function (e) {
        let { welcomeMessage: n } = e;
        if (null == n) b.welcomeMessage = void 0;
        else {
            var t, i, c, l, a, r;
            b.welcomeMessage = {
                authorIds:
                    null != (l = null != (c = n.authorIds) ? c : null == (t = b.welcomeMessage) ? void 0 : t.authorIds)
                        ? l
                        : [],
                message:
                    null != (r = null != (a = n.message) ? a : null == (i = b.welcomeMessage) ? void 0 : i.message)
                        ? r
                        : "",
            };
        }
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: n, action: t } = e;
        return C(n, t);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function (e) {
        var n;
        let { action: t, pendingIconData: i } = e;
        (b.newMemberActions = null != (n = b.newMemberActions) ? n : []),
            (b.newMemberActions = [...b.newMemberActions, t]),
            void 0 !== i &&
                (S[t.channelId] = {
                    iconData: i,
                    isUrl: I(i),
                });
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_ICON_DATA: function (e) {
        let { channelId: n, pendingIconData: t } = e;
        S[n] = {
            iconData: t,
            isUrl: I(t),
        };
    },
    GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_ICON_DATA: function (e) {
        let { channelId: n } = e;
        null == n ? (S = {}) : delete S[n];
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: n } = e;
        if (null == b.newMemberActions) return !1;
        (b.newMemberActions = [...b.newMemberActions.filter((e) => e.channelId !== n)]), delete S[n];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function (e) {
        let { actions: n } = e;
        b.newMemberActions = n;
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function (e) {
        let { channelId: n, resourceChannel: t } = e;
        N(n, t);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function (e) {
        var n;
        let { resourceChannel: t } = e;
        (b.resourceChannels = (null != (n = b.resourceChannels) ? n : []).filter((e) => e.channelId !== t.channelId)),
            (b.resourceChannels = [...b.resourceChannels, t]);
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function (e) {
        let { resourceChannelId: n } = e;
        if (null == b.resourceChannels) return !1;
        b.resourceChannels = [...b.resourceChannels.filter((e) => e.channelId !== n)];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function (e) {
        let { resourceChannels: n } = e;
        b.resourceChannels = n;
    },
    GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function (e) {
        var n;
        let { guildId: t, channelIds: i } = e;
        h[t] = [...(null != (n = h[t]) ? n : []), ...i];
    },
});
