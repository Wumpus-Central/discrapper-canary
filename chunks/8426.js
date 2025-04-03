n.d(t, {
    Hr: () => x,
    Hz: () => C,
    To: () => E,
    XG: () => v,
    _N: () => h,
    ad: () => N,
    bj: () => P,
    el: () => b,
    hS: () => j,
    lq: () => O,
    mM: () => y,
    oo: () => I,
    q6: () => T,
    r2: () => _,
    vR: () => f
}),
    n(13667),
    n(390547);
var r = n(392711),
    i = n.n(r),
    s = n(544891),
    a = n(570140),
    l = n(668781),
    o = n(563534),
    c = n(734893),
    d = n(626135),
    u = n(960048),
    m = n(969632),
    g = n(981631),
    p = n(388032);
function h(e) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE',
        welcomeMessage: e
    });
}
function f(e) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION',
        action: e
    });
}
function b(e, t) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION',
        channelId: e,
        action: t
    });
}
function x(e) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION',
        channelId: e
    });
}
function j(e) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION',
        actions: e
    });
}
async function N(e, t, n, r) {
    if (!r) return Promise.resolve();
    try {
        let r = await s.tn.patch({
                url: g.ANM.NEW_MEMBER_ACTION(e, t),
                body: { icon: n },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            i = (0, c.cq)(r.body);
        return (
            a.Z.dispatch({
                type: 'GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS',
                guildId: e,
                action: i
            }),
            Promise.resolve(r.body)
        );
    } catch (t) {
        var o;
        let e = i().flatMap(null != (o = t.body) ? o : {}, (e) => e);
        return (
            l.Z.show({
                title: p.NW.string(p.t['6nCZyM']),
                body: p.NW.format(p.t.dYCPDw, { errorMessage: e.join(', ') })
            }),
            u.Z.addBreadcrumb({ message: 'Error updating new member action icon' }),
            Promise.reject()
        );
    }
}
function _(e) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL',
        resourceChannel: e
    });
}
function v(e, t) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL',
        channelId: e,
        resourceChannel: t
    });
}
function C(e) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL',
        resourceChannelId: e
    });
}
function O(e) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL',
        resourceChannels: e
    });
}
async function y(e, t, n) {
    try {
        let r = await s.tn.put({
                url: g.ANM.RESOURCE_CHANNEL(e, t),
                body: { icon: n },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            i = (0, c.vD)(r.body);
        return (
            a.Z.dispatch({
                type: 'GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS',
                guildId: e,
                resourceChannel: i
            }),
            r.body
        );
    } catch (t) {
        var r;
        let e = i().flatMap(null != (r = t.body) ? r : {}, (e) => e);
        l.Z.show({
            title: p.NW.string(p.t['6nCZyM']),
            body: p.NW.format(p.t.dYCPDw, { errorMessage: e.join(', ') })
        });
    }
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return n || m.Z.hasChanges()
        ? o.Z.getEnabled(e) && !(0, c.uo)(t)
            ? (l.Z.show({
                  title: p.NW.string(p.t['6nCZyM']),
                  body: p.NW.string(p.t.JuhUTU)
              }),
              u.Z.addBreadcrumb({ message: 'Error saving home settings' }),
              Promise.reject())
            : S(e, t)
        : Promise.resolve();
}
function E(e, t) {
    var n, r;
    let i = o.Z.getSettings(e);
    return t && !(0, c.uo)(i)
        ? void l.Z.show({
              title: p.NW.string(p.t['6nCZyM']),
              body: p.NW.string(p.t.JuhUTU)
          })
        : (a.Z.dispatch({
              type: 'GUILD_HOME_SETTINGS_TOGGLE_ENABLED',
              guildId: e,
              enabled: t
          }),
          S(
              e,
              ((n = (function (e) {
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
                              var r;
                              (r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
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
              n)
          ));
}
async function S(e, t) {
    var n, r, o, u, m, h, f, b, x;
    a.Z.dispatch({ type: 'GUILD_HOME_SETTINGS_UPDATE_START' });
    try {
        let i = await s.tn.put({
                url: g.ANM.GUILD_HOME_SETTINGS(e),
                body: (0, c.HH)(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            l = (0, c.tB)(i.body);
        return (
            a.Z.dispatch({
                type: 'GUILD_HOME_SETTINGS_UPDATE_SUCCESS',
                guildId: e,
                homeSettings: l
            }),
            d.default.track(g.rMx.GUILD_SETTINGS_GUIDE_UPDATED, {
                guild_id: e,
                welcome_message_author_id: (null != (u = null == l || null == (n = l.welcomeMessage) ? void 0 : n.authorIds) ? u : [])[0],
                welcome_message_length: null != (m = null == l || null == (o = l.welcomeMessage) || null == (r = o.message) ? void 0 : r.length) ? m : 0,
                member_action_channel_ids: (null != (h = null == l ? void 0 : l.newMemberActions) ? h : []).map((e) => e.channelId),
                member_action_channel_actions: (null != (f = null == l ? void 0 : l.newMemberActions) ? f : []).map((e) => e.actionType),
                resource_channel_ids: (null != (b = null == l ? void 0 : l.resourceChannels) ? b : []).map((e) => e.channelId),
                enabled: null == l ? void 0 : l.enabled
            }),
            i.body
        );
    } catch (t) {
        let e = i().flatMap(null != (x = t.body) ? x : {}, (e) => e);
        a.Z.dispatch({ type: 'GUILD_HOME_SETTINGS_UPDATE_FAIL' }),
            l.Z.show({
                title: p.NW.string(p.t['6nCZyM']),
                body: p.NW.format(p.t.dYCPDw, { errorMessage: e.join(', ') })
            });
    }
}
function T(e, t) {
    null != e &&
        a.Z.dispatch({
            type: 'GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION',
            guildId: e,
            channelIds: t
        });
}
function P() {
    a.Z.dispatch({ type: 'GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET' });
}
