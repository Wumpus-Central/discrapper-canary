n.d(e, { Z: () => X }), n(47120), n(653041), n(301563);
var r,
    i,
    a,
    o,
    s = n(133080),
    l = n(412788),
    d = n(594174),
    E = n(709054),
    u = n(260722),
    c = n(735079),
    _ = n(546791),
    T = n(292352);
function S(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
function N(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            r.forEach(function (e) {
                S(t, e, n[e]);
            });
    }
    return t;
}
function I(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
let C = null,
    p = null,
    f = {},
    y = D(),
    A = U(),
    g = null,
    h = (null == (i = window) || null == (r = i.location) ? void 0 : r.pathname) === T.ix.FAMILY_CENTER_MY_FAMILY ? T.dG.REQUESTS : (null == (o = window) || null == (a = o.location) ? void 0 : a.pathname) === T.ix.FAMILY_CENTER_SETTINGS ? T.dG.SETTINGS : T.dG.ACTIVITY,
    L = !1,
    R = !1,
    b = null,
    M = null,
    Z = {};
function D() {
    return {
        [T.MY.USER_ADD]: {},
        [T.MY.GUILD_ADD]: {},
        [T.MY.USER_INTERACTION]: {},
        [T.MY.GUILD_INTERACTION]: {},
        [T.MY.USER_CALLED]: {}
    };
}
function U() {
    return {
        [T.MY.USER_ADD]: 0,
        [T.MY.GUILD_ADD]: 0,
        [T.MY.USER_INTERACTION]: 0,
        [T.MY.GUILD_INTERACTION]: 0,
        [T.MY.USER_CALLED]: 0
    };
}
function Y() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return arguments.length > 1 && arguments[1], (f = t.length > 0 ? t.reduce((t, e) => I(N({}, t), { [e.user_id]: e }), {}) : {});
}
function O(t) {
    void 0 !== t && (A = t);
}
function m(t, e) {
    let n = e ? y : D();
    return (y = t.reduce((t, e) => {
        let r = e.display_type;
        return void 0 !== n[r] && void 0 === n[r][e.event_id] && (t[r][e.event_id] = e), t;
    }, n));
}
function W(t) {
    Z = t.reduce((t, e) => I(N({}, t), { [e.id]: new c.J(e) }), Z);
}
function v() {
    R = !0;
}
function F(t) {
    let { linkedUsers: e, familyCenterTeenActivity: n } = t,
        { actions: r, guilds: i, totals: a, teenId: o, rangeStartId: s } = n;
    (C = o), (p = s), m(r), O(a), W(i), Y(e), (R = !1), (b = E.default.fromTimestamp(Date.now())), (L = !0);
}
function w(t) {
    let { linkedUsers: e } = t;
    Y(e);
}
function j(t) {
    let { linkedUsers: e } = t;
    Y(e);
}
function P(t) {
    let { familyCenterTeenActivity: e } = t;
    if (void 0 === e) return;
    let { actions: n, totals: r, guilds: i, teenId: a, rangeStartId: o } = e;
    (C = a), (p = o), m(n), O(r), W(i), (R = !1), (b = E.default.fromTimestamp(Date.now()));
}
function k(t) {
    let { familyCenterTeenActivity: e } = t,
        { actions: n, guilds: r } = e;
    m(n, !0), W(r);
}
function H(t) {
    let { linkedUsers: e } = t;
    Y(e);
}
function G(t) {
    let { linkedUsers: e } = t;
    Y(e, !0);
}
function V(t) {
    let { linkCode: e } = t;
    g = e;
}
function Q(t) {
    let { tab: e } = t;
    h = e;
}
function x(t) {
    let { user: e } = t;
    if (void 0 === e.linked_users) return;
    let n = d.default.getUsers();
    e.linked_users.some((t) => {
        let { user_id: e } = t;
        return void 0 === n[e];
    }) && e.linked_users.length > Object.keys(f).length
        ? u.ZP.fetchLinkedUsers()
        : Y(e.linked_users);
}
function K(t) {
    var e;
    let { countryCode: n } = t;
    null != n && (M = null != (e = (0, s.Zz)(n)) ? e : null);
}
function z() {
    (C = null), (p = null), (f = {}), (y = D()), (A = U()), (Z = {}), (R = !1), (b = null);
}
class B extends l.Z {
    initialize() {
        this.waitFor(d.default);
    }
    loadCache() {
        let t = this.readSnapshot(B.LATEST_SNAPSHOT_VERSION);
        null != t &&
            (Y(t.linkedUsers),
            W(t.guilds),
            m(t.teenActivity),
            (A = t.teenActivityTotals.reduce((t, e) => {
                let [n, r] = e.split(':'),
                    i = (0, _.jV)(n);
                return void 0 === i ? t : I(N({}, t), { [i]: parseInt(r, 10) });
            }, U())));
    }
    takeSnapshot() {
        return {
            version: B.LATEST_SNAPSHOT_VERSION,
            data: {
                linkedUsers: Object.values(f),
                teenActivityTotals: Object.entries(A).map((t) => {
                    let [e, n] = t;
                    return ''.concat(e, ':').concat(n);
                }),
                teenActivity: (function () {
                    let t = [];
                    return (
                        Object.entries(y).forEach((e) => {
                            let [n, r] = e;
                            t.push(...Object.values(r));
                        }),
                        t
                    );
                })(),
                guilds: Object.values(Z)
            }
        };
    }
    getSelectedTeenId() {
        return C;
    }
    getLinkedUsers() {
        return f;
    }
    getLinkTimestamp(t) {
        var e;
        let n = f[t];
        return null == n ? null : null != (e = n.updated_at) ? e : n.created_at;
    }
    getRangeStartTimestamp() {
        return null == p ? null : E.default.extractTimestamp(p);
    }
    getActionsForDisplayType(t) {
        return Object.values(y[t]);
    }
    getTotalForDisplayType(t) {
        return A[t];
    }
    getLinkCode() {
        return g;
    }
    getGuild(t) {
        return Z[t];
    }
    getSelectedTab() {
        return h;
    }
    getStartId() {
        return p;
    }
    getIsInitialized() {
        return L;
    }
    getUserCountry() {
        return M;
    }
    isLoading() {
        return R;
    }
    canRefetch() {
        return null === b || E.default.age(b) > T.Of;
    }
    constructor() {
        super({
            CURRENT_USER_UPDATE: x,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: F,
            FAMILY_CENTER_FETCH_START: v,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: w,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: P,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: k,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: j,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: H,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: G,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: V,
            FAMILY_CENTER_HANDLE_TAB_SELECT: Q,
            SET_LOCATION_METADATA: K,
            LOGOUT: z
        });
    }
}
S(B, 'displayName', 'FamilyCenterStore'), S(B, 'LATEST_SNAPSHOT_VERSION', 3);
let X = new B();
