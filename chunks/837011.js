n.d(t, {
    A: () => N,
    X: () => f,
}),
    n(896048),
    n(228524);
var r,
    i = n(311907),
    a = n(73153),
    s = n(9994),
    o = n(652215);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var f = (function (e) {
    return (e.NOT_FETCHED = "NOT_FETCHED"), (e.FETCHING = "FETCHING"), (e.FETCHED = "FETCHED"), e;
})({});
let p = new Map(),
    _ = {
        profile: null,
        lastSyncTimestamp: null,
        fetchStatus: "NOT_FETCHED",
        isUpdating: !1,
        error: null,
    };
function h(e) {
    let { guildId: t } = e,
        n = p.get(t);
    null == n ? p.set(t, d(c({}, _), { fetchStatus: "FETCHING" })) : p.set(t, d(c({}, n), { fetchStatus: "FETCHING" }));
}
function m(e) {
    let { guildId: t, profile: n } = e,
        r = p.get(t);
    null == r
        ? p.set(
              t,
              d(c({}, _), {
                  profile: n,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: "FETCHED",
              }),
          )
        : p.set(
              t,
              d(c({}, r), {
                  profile: n,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: "FETCHED",
              }),
          );
}
function g(e) {
    let { guildId: t, error: n } = e,
        r = p.get(t);
    null == r
        ? p.set(
              t,
              d(c({}, _), {
                  error: n,
                  fetchStatus: "FETCHED",
              }),
          )
        : p.set(
              t,
              d(c({}, r), {
                  error: n,
                  fetchStatus: "FETCHED",
              }),
          );
}
function E(e) {
    let { guildId: t } = e,
        n = p.get(t);
    null == n ? p.set(t, d(c({}, _), { isUpdating: !0 })) : p.set(t, d(c({}, n), { isUpdating: !0 }));
}
function b(e) {
    let { guildId: t, profile: n } = e,
        r = p.get(t);
    null == r
        ? p.set(t, d(c({}, _), { profile: n }))
        : p.set(
              t,
              d(c({}, r), {
                  profile: n,
                  isUpdating: !1,
              }),
          );
}
function y(e) {
    let { guildId: t, error: n } = e,
        r = p.get(t);
    null == r
        ? p.set(t, d(c({}, _), { error: n }))
        : p.set(
              t,
              d(c({}, r), {
                  error: n,
                  isUpdating: !1,
              }),
          );
}
function O(e) {
    let { guildId: t, visibility: n } = e,
        r = p.get(t),
        i = null == r ? void 0 : r.profile;
    null != r &&
        null != i &&
        p.set(
            t,
            d(c({}, r), {
                isUpdating: !1,
                profile: d(c({}, i), { visibility: n }),
            }),
        );
}
function A(e) {
    let { form: t, guildId: n } = e,
        r = null == t ? void 0 : t.profile;
    if (null == r) return;
    let i = p.get(n);
    null == i
        ? p.set(
              n,
              d(c({}, _), {
                  profile: r,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: "FETCHED",
              }),
          )
        : p.set(
              n,
              d(c({}, i), {
                  profile: r,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: "FETCHED",
              }),
          );
}
function v(e) {
    let { invite: t } = e,
        { profile: n } = t;
    if (null == n) return;
    let r = p.get(n.id),
        i = (0, s.wr)(n);
    null == r
        ? p.set(
              n.id,
              d(c({}, _), {
                  profile: i,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: "FETCHED",
              }),
          )
        : p.set(
              n.id,
              d(c({}, r), {
                  profile: i,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: "FETCHED",
              }),
          );
}
function S(e) {
    let { channel: t } = e;
    t.type === o.rbe.GUILD_ANNOUNCEMENT && null != t.guild_id && p.delete(t.guild_id);
}
function I(e) {
    let { guildId: t, enabled: n } = e;
    null != t && n && p.delete(t);
}
function T(e) {
    var t, n, r;
    let { guild: i } = e,
        a = p.get(i.id);
    if (null == a || null == a.profile) return !1;
    let s = d(c({}, a.profile), {
        name: i.name,
        icon: null != (t = i.icon) ? t : null,
        description: null != (n = i.description) ? n : "",
        customBanner: null != (r = i.discovery_splash) ? r : null,
    });
    p.set(i.id, d(c({}, a), { profile: s }));
}
class C extends (r = i.Ay.Store) {
    getProfile(e) {
        var t, n;
        return null == e ? null : null != (t = null == (n = p.get(e)) ? void 0 : n.profile) ? t : null;
    }
    getFetchStatus(e) {
        var t, n;
        return null == e
            ? "NOT_FETCHED"
            : null != (t = null == (n = p.get(e)) ? void 0 : n.fetchStatus)
              ? t
              : "NOT_FETCHED";
    }
    getLastSyncTimestamp(e) {
        var t, n;
        return null == e ? null : null != (t = null == (n = p.get(e)) ? void 0 : n.lastSyncTimestamp) ? t : null;
    }
    getIsUpdating(e) {
        var t, n;
        return null != e && null != (t = null == (n = p.get(e)) ? void 0 : n.isUpdating) && t;
    }
    getErrorCode(e) {
        var t, n, r;
        return null == e
            ? null
            : null != (t = null == (r = p.get(e)) || null == (n = r.error) ? void 0 : n.code)
              ? t
              : null;
    }
}
l(C, "displayName", "GuildProfileStore");
let N = new C(a.h, {
    GUILD_PROFILE_FETCH: h,
    GUILD_PROFILE_FETCH_SUCCESS: m,
    GUILD_PROFILE_FETCH_FAILURE: g,
    GUILD_PROFILE_UPDATE: E,
    GUILD_PROFILE_UPDATE_SUCCESS: b,
    GUILD_PROFILE_UPDATE_FAILURE: y,
    MEMBER_VERIFICATION_FORM_UPDATE: A,
    INVITE_RESOLVE_SUCCESS: v,
    INSTANT_INVITE_CREATE_SUCCESS: v,
    CHANNEL_CREATE: S,
    GUILD_SETTINGS_SET_WIDGET: I,
    GUILD_UPDATE: T,
    GUILD_PROFILE_UPDATE_VISIBILITY: E,
    GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: O,
    GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: y,
});
