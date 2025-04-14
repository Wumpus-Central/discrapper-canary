n.d(t, {
    Hr: () => b,
    Hz: () => O,
    To: () => E,
    XG: () => v,
    _N: () => h,
    ad: () => N,
    bj: () => P,
    el: () => x,
    hS: () => j,
    lq: () => C,
    mM: () => y,
    oo: () => I,
    q6: () => T,
    r2: () => _,
    vR: () => f
}),
    n(361932),
    n(187205);
var r = n(392711),
    i = n.n(r),
    s = n(544891),
    l = n(570140),
    a = n(668781),
    o = n(563534),
    c = n(734893),
    d = n(626135),
    u = n(960048),
    m = n(969632),
    g = n(981631),
    p = n(388032);
function h(e) {
    l.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE',
        welcomeMessage: e
    });
}
function f(e) {
    l.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION',
        action: e
    });
}
function x(e, t) {
    l.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION',
        channelId: e,
        action: t
    });
}
function b(e) {
    l.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION',
        channelId: e
    });
}
function j(e) {
    l.Z.dispatch({
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
            l.Z.dispatch({
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
            a.Z.show({
                title: p.NW.string(p.t['6nCZyM']),
                body: p.NW.format(p.t.dYCPDw, { errorMessage: e.join(', ') })
            }),
            u.Z.addBreadcrumb({ message: 'Error updating new member action icon' }),
            Promise.reject()
        );
    }
}
function _(e) {
    l.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL',
        resourceChannel: e
    });
}
function v(e, t) {
    l.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL',
        channelId: e,
        resourceChannel: t
    });
}
function O(e) {
    l.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL',
        resourceChannelId: e
    });
}
function C(e) {
    l.Z.dispatch({
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
            l.Z.dispatch({
                type: 'GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS',
                guildId: e,
                resourceChannel: i
            }),
            r.body
        );
    } catch (t) {
        var r;
        let e = i().flatMap(null != (r = t.body) ? r : {}, (e) => e);
        a.Z.show({
            title: p.NW.string(p.t['6nCZyM']),
            body: p.NW.format(p.t.dYCPDw, { errorMessage: e.join(', ') })
        });
    }
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return n || m.Z.hasChanges()
        ? o.Z.getEnabled(e) && !(0, c.uo)(t)
            ? (a.Z.show({
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
        ? void a.Z.show({
              title: p.NW.string(p.t['6nCZyM']),
              body: p.NW.string(p.t.JuhUTU)
          })
        : (l.Z.dispatch({
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
    var n, r, o, u, m, h, f, x, b;
    l.Z.dispatch({ type: 'GUILD_HOME_SETTINGS_UPDATE_START' });
    try {
        let i = await s.tn.put({
                url: g.ANM.GUILD_HOME_SETTINGS(e),
                body: (0, c.HH)(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            a = (0, c.tB)(i.body);
        return (
            l.Z.dispatch({
                type: 'GUILD_HOME_SETTINGS_UPDATE_SUCCESS',
                guildId: e,
                homeSettings: a
            }),
            d.default.track(g.rMx.GUILD_SETTINGS_GUIDE_UPDATED, {
                guild_id: e,
                welcome_message_author_id: (null != (u = null == a || null == (n = a.welcomeMessage) ? void 0 : n.authorIds) ? u : [])[0],
                welcome_message_length: null != (m = null == a || null == (o = a.welcomeMessage) || null == (r = o.message) ? void 0 : r.length) ? m : 0,
                member_action_channel_ids: (null != (h = null == a ? void 0 : a.newMemberActions) ? h : []).map((e) => e.channelId),
                member_action_channel_actions: (null != (f = null == a ? void 0 : a.newMemberActions) ? f : []).map((e) => e.actionType),
                resource_channel_ids: (null != (x = null == a ? void 0 : a.resourceChannels) ? x : []).map((e) => e.channelId),
                enabled: null == a ? void 0 : a.enabled
            }),
            i.body
        );
    } catch (t) {
        let e = i().flatMap(null != (b = t.body) ? b : {}, (e) => e);
        l.Z.dispatch({ type: 'GUILD_HOME_SETTINGS_UPDATE_FAIL' }),
            a.Z.show({
                title: p.NW.string(p.t['6nCZyM']),
                body: p.NW.format(p.t.dYCPDw, { errorMessage: e.join(', ') })
            });
    }
}
function T(e, t) {
    null != e &&
        l.Z.dispatch({
            type: 'GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION',
            guildId: e,
            channelIds: t
        });
}
function P() {
    l.Z.dispatch({ type: 'GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET' });
}
