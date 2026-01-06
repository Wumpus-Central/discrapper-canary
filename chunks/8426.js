n.d(t, {
    Hr: () => O,
    Hz: () => I,
    Lo: () => j,
    To: () => P,
    Wp: () => x,
    XG: () => E,
    _N: () => p,
    bj: () => A,
    el: () => v,
    gi: () => y,
    hS: () => C,
    lq: () => S,
    mM: () => _,
    oo: () => T,
    q6: () => D,
    r2: () => N,
    vR: () => h,
}),
    n(361932),
    n(187205),
    n(388685),
    n(457542);
var r = n(392711),
    i = n.n(r),
    l = n(544891),
    a = n(570140),
    s = n(668781),
    o = n(563534),
    c = n(734893),
    d = n(626135),
    u = n(956664),
    g = n(960048),
    f = n(969632),
    m = n(981631),
    b = n(388032);
function p(e) {
    a.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE",
        welcomeMessage: e,
    });
}
function h(e, t) {
    a.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION",
        action: e,
        pendingData: t,
    });
}
function x(e, t) {
    a.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA",
        channelId: e,
        pendingData: t,
    });
}
function j(e) {
    a.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA",
        channelId: e,
    });
}
function v(e, t) {
    a.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION",
        channelId: e,
        action: t,
    });
}
function O(e) {
    a.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION",
        channelId: e,
    });
}
function C(e) {
    a.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION",
        actions: e,
    });
}
async function y(e, t, n) {
    let r = {};
    null != n.emoji ? (r.emoji = n.emoji) : (r.icon = n.icon);
    try {
        let n = await l.tn.patch({
                url: m.ANM.NEW_MEMBER_ACTION(e, t),
                body: r,
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            i = (0, c.cq)(n.body);
        return (
            a.Z.dispatch({
                type: "GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS",
                guildId: e,
                action: i,
            }),
            Promise.resolve(n.body)
        );
    } catch (t) {
        var o;
        let e = i().flatMap(null != (o = t.body) ? o : {}, (e) => e);
        return (
            s.Z.show({
                title: b.intl.string(b.t["6nCZyG"]),
                body: b.intl.format(b.t.dYCPD2, { errorMessage: e.join(", ") }),
            }),
            g.Z.addBreadcrumb({ message: "Error updating new member action icon" }),
            Promise.reject()
        );
    }
}
function N(e) {
    a.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL",
        resourceChannel: e,
    });
}
function E(e, t) {
    a.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL",
        channelId: e,
        resourceChannel: t,
    });
}
function I(e) {
    a.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL",
        resourceChannelId: e,
    });
}
function S(e) {
    a.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL",
        resourceChannels: e,
    });
}
async function _(e, t, n) {
    try {
        let r = await l.tn.put({
                url: m.ANM.RESOURCE_CHANNEL(e, t),
                body: { icon: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            i = (0, c.vD)(r.body);
        return (
            a.Z.dispatch({
                type: "GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS",
                guildId: e,
                resourceChannel: i,
            }),
            r.body
        );
    } catch (t) {
        var r;
        let e = i().flatMap(null != (r = t.body) ? r : {}, (e) => e);
        s.Z.show({
            title: b.intl.string(b.t["6nCZyG"]),
            body: b.intl.format(b.t.dYCPD2, { errorMessage: e.join(", ") }),
        });
    }
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return n || f.Z.hasChanges()
        ? o.Z.getEnabled(e) && !(0, c.uo)(t)
            ? (s.Z.show({
                  title: b.intl.string(b.t["6nCZyG"]),
                  body: b.intl.string(b.t.JuhUTS),
              }),
              g.Z.addBreadcrumb({ message: "Error saving home settings" }),
              Promise.reject())
            : w(e, t)
        : Promise.resolve();
}
function P(e, t) {
    var n, r;
    let i = o.Z.getSettings(e);
    return t && !(0, c.uo)(i)
        ? void s.Z.show({
              title: b.intl.string(b.t["6nCZyG"]),
              body: b.intl.string(b.t.JuhUTS),
          })
        : (a.Z.dispatch({
              type: "GUILD_HOME_SETTINGS_TOGGLE_ENABLED",
              guildId: e,
              enabled: t,
          }),
          w(
              e,
              ((n = (function (e) {
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
                              var r;
                              (r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = r);
                          });
                  }
                  return e;
              })({}, i)),
              (r = r = { enabled: t }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                  : (function (e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r);
                        }
                        return n;
                    })(Object(r)).forEach(function (e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                    }),
              n),
          ));
}
async function w(e, t) {
    var n, r, o, u, g, p, h, x, v;
    a.Z.dispatch({ type: "GUILD_HOME_SETTINGS_UPDATE_START" });
    let O = f.Z.getPendingData();
    try {
        let i = await l.tn.put({
                url: m.ANM.GUILD_HOME_SETTINGS(e),
                body: (0, c.HH)(e, t),
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            s = (0, c.tB)(i.body);
        return (
            a.Z.dispatch({
                type: "GUILD_HOME_SETTINGS_UPDATE_SUCCESS",
                guildId: e,
                homeSettings: s,
            }),
            Object.entries(O).forEach((t) => {
                let [n, r] = t;
                null != r &&
                    (null != r.iconData
                        ? Z(e, n, r).finally(() => {
                              j(n);
                          })
                        : j(n));
            }),
            d.default.track(m.rMx.GUILD_SETTINGS_GUIDE_UPDATED, {
                guild_id: e,
                welcome_message_author_id: (null !=
                (u = null == s || null == (n = s.welcomeMessage) ? void 0 : n.authorIds)
                    ? u
                    : [])[0],
                welcome_message_length:
                    null !=
                    (g = null == s || null == (o = s.welcomeMessage) || null == (r = o.message) ? void 0 : r.length)
                        ? g
                        : 0,
                member_action_channel_ids: (null != (p = null == s ? void 0 : s.newMemberActions) ? p : []).map(
                    (e) => e.channelId,
                ),
                member_action_channel_actions: (null != (h = null == s ? void 0 : s.newMemberActions) ? h : []).map(
                    (e) => e.actionType,
                ),
                resource_channel_ids: (null != (x = null == s ? void 0 : s.resourceChannels) ? x : []).map(
                    (e) => e.channelId,
                ),
                enabled: null == s ? void 0 : s.enabled,
            }),
            i.body
        );
    } catch (t) {
        let e = i().flatMap(null != (v = t.body) ? v : {}, (e) => e);
        j(),
            a.Z.dispatch({ type: "GUILD_HOME_SETTINGS_UPDATE_FAIL" }),
            s.Z.show({
                title: b.intl.string(b.t["6nCZyG"]),
                body: b.intl.format(b.t.dYCPD2, { errorMessage: e.join(", ") }),
            });
    }
}
async function Z(e, t, n) {
    let { iconData: r, isUrl: i, emoji: l } = n;
    if (null != l) return;
    let a = null != r && i ? await R(r) : r;
    await y(e, t, {
        icon: a,
        emoji: null,
    });
}
async function R(e) {
    let t = await fetch(e),
        n = await t.blob();
    return await (0, u.fD)(n);
}
function D(e, t) {
    null != e &&
        a.Z.dispatch({
            type: "GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION",
            guildId: e,
            channelIds: t,
        });
}
function A() {
    a.Z.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET" });
}
