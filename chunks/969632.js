t.d(n, { Z: () => D }), t(190126), t(368063), t(65234), t(111804), t(490233), t(97749), t(388685);
var l,
    i = t(392711),
    r = t.n(i),
    s = t(442837),
    u = t(570140),
    o = t(563534),
    a = t(999382);
function c(e, n, t) {
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
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                c(e, n, t[n]);
            });
    }
    return e;
}
let E = { enabled: !1 },
    I = null,
    _ = Object.assign({}, E),
    S = !1,
    N = {},
    O = {};
function g(e) {
    try {
        return new URL(null != e ? e : ""), !0;
    } catch (e) {
        return !1;
    }
}
function f() {
    (I = null),
        (_ = Object.assign({}, E)),
        (S = !1),
        (O = {}),
        (I = a.Z.getGuildId()),
        (_ = r().cloneDeep(Object.assign({}, o.Z.getSettings(I))));
}
function T(e, n) {
    if (null == _.newMemberActions) return !1;
    let t = _.newMemberActions.findIndex((n) => n.channelId === e);
    if (t < 0) return !1;
    (_.newMemberActions[t] = d({}, n)), (_.newMemberActions = [..._.newMemberActions]);
}
function G(e, n) {
    if (null == _.resourceChannels) return !1;
    let t = _.resourceChannels.findIndex((n) => n.channelId === e);
    if (t < 0) return !1;
    (_.resourceChannels[t] = d({}, n)), (_.resourceChannels = [..._.resourceChannels]);
}
function h() {
    (S = !1), (_ = r().cloneDeep(Object.assign({}, o.Z.getSettings(I))));
}
class A extends (l = s.ZP.PersistedStore) {
    initialize(e) {
        null != e && (N = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(a.Z, o.Z);
    }
    getState() {
        return { dismissedSuggestedChannelIdsByGuildId: N };
    }
    getSettings() {
        return null != _ ? _ : E;
    }
    hasChanges() {
        return null != I && !r().isEqual(_, o.Z.getSettings(I));
    }
    canCloseEarly() {
        return !this.hasChanges();
    }
    showNotice() {
        return this.hasChanges();
    }
    getSubmitting() {
        return S;
    }
    getDismissedSuggestedChannelIds(e) {
        var n;
        return null == e ? [] : null != (n = N[e]) ? n : [];
    }
    getResourceChannel(e) {
        var n;
        if (null == e) return null;
        let t = null == (n = _.resourceChannels) ? void 0 : n.find((n) => n.channelId === e);
        return null == t ? null : t;
    }
    getNewMemberAction(e) {
        var n;
        if (null == e) return null;
        let t = null == (n = _.newMemberActions) ? void 0 : n.find((n) => n.channelId === e);
        return null == t ? null : t;
    }
    getPendingIconData() {
        return O;
    }
    getPendingIconDataForChannel(e) {
        if (null != e) return O[e];
    }
}
c(A, "displayName", "GuildSettingsOnboardingHomeSettingsStore"),
    c(A, "persistKey", "GuildSettingsOnboardingHomeSettingsStore");
let D = new A(u.Z, {
    GUILD_SETTINGS_INIT: f,
    GUILD_SETTINGS_SET_SECTION: f,
    GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: f,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: function () {
        _ = r().cloneDeep(Object.assign({}, o.Z.getSettings(I)));
    },
    GUILD_HOME_SETTINGS_UPDATE_START: function () {
        S = !0;
    },
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: h,
    GUILD_HOME_SETTINGS_UPDATE_FAIL: h,
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function (e) {
        let { action: n } = e;
        return T(n.channelId, n);
    },
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function (e) {
        let { resourceChannel: n } = e;
        G(n.channelId, n);
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function (e) {
        let { welcomeMessage: n } = e;
        if (null == n) _.welcomeMessage = void 0;
        else {
            var t, l, i, r, s, u;
            _.welcomeMessage = {
                authorIds:
                    null != (r = null != (i = n.authorIds) ? i : null == (t = _.welcomeMessage) ? void 0 : t.authorIds)
                        ? r
                        : [],
                message:
                    null != (u = null != (s = n.message) ? s : null == (l = _.welcomeMessage) ? void 0 : l.message)
                        ? u
                        : "",
            };
        }
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: n, action: t } = e;
        return T(n, t);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function (e) {
        var n;
        let { action: t, pendingIconData: l } = e;
        (_.newMemberActions = null != (n = _.newMemberActions) ? n : []),
            (_.newMemberActions = [..._.newMemberActions, t]),
            void 0 !== l &&
                (O[t.channelId] = {
                    iconData: l,
                    isUrl: g(l),
                });
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_ICON_DATA: function (e) {
        let { channelId: n, pendingIconData: t } = e;
        O[n] = {
            iconData: t,
            isUrl: g(t),
        };
    },
    GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_ICON_DATA: function (e) {
        let { channelId: n } = e;
        null == n ? (O = {}) : delete O[n];
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: n } = e;
        if (null == _.newMemberActions) return !1;
        (_.newMemberActions = [..._.newMemberActions.filter((e) => e.channelId !== n)]), delete O[n];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function (e) {
        let { actions: n } = e;
        _.newMemberActions = n;
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function (e) {
        let { channelId: n, resourceChannel: t } = e;
        G(n, t);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function (e) {
        var n;
        let { resourceChannel: t } = e;
        (_.resourceChannels = (null != (n = _.resourceChannels) ? n : []).filter((e) => e.channelId !== t.channelId)),
            (_.resourceChannels = [..._.resourceChannels, t]);
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function (e) {
        let { resourceChannelId: n } = e;
        if (null == _.resourceChannels) return !1;
        _.resourceChannels = [..._.resourceChannels.filter((e) => e.channelId !== n)];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function (e) {
        let { resourceChannels: n } = e;
        _.resourceChannels = n;
    },
    GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function (e) {
        var n;
        let { guildId: t, channelIds: l } = e;
        N[t] = [...(null != (n = N[t]) ? n : []), ...l];
    },
});
