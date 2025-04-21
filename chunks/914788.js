n.d(e, { Z: () => X }), n(388685), n(539854), n(35282);
var i,
    r,
    l,
    a,
    d = n(133080),
    s = n(412788),
    o = n(594174),
    u = n(709054),
    E = n(260722),
    c = n(735079),
    _ = n(546791),
    T = n(292352);
function f(t, e, n) {
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
function S(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            i.forEach(function (e) {
                f(t, e, n[e]);
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
                      var i = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, i);
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
    g = {},
    y = U(),
    A = Y(),
    N = null,
    h = (null == (r = window) || null == (i = r.location) ? void 0 : i.pathname) === T.ix.FAMILY_CENTER_MY_FAMILY ? T.dG.REQUESTS : (null == (a = window) || null == (l = a.location) ? void 0 : l.pathname) === T.ix.FAMILY_CENTER_SETTINGS ? T.dG.SETTINGS : T.dG.ACTIVITY,
    L = !1,
    R = !1,
    b = null,
    M = null,
    D = {};
function U() {
    return {
        [T.MY.USER_ADD]: {},
        [T.MY.GUILD_ADD]: {},
        [T.MY.USER_INTERACTION]: {},
        [T.MY.GUILD_INTERACTION]: {},
        [T.MY.USER_CALLED]: {}
    };
}
function Y() {
    return {
        [T.MY.USER_ADD]: 0,
        [T.MY.GUILD_ADD]: 0,
        [T.MY.USER_INTERACTION]: 0,
        [T.MY.GUILD_INTERACTION]: 0,
        [T.MY.USER_CALLED]: 0
    };
}
function O() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return arguments.length > 1 && arguments[1], (g = t.length > 0 ? t.reduce((t, e) => I(S({}, t), { [e.user_id]: e }), {}) : {});
}
function m(t) {
    void 0 !== t && (A = t);
}
function v(t, e) {
    let n = e ? y : U();
    return (y = t.reduce((t, e) => {
        let i = e.display_type;
        return void 0 !== n[i] && void 0 === n[i][e.event_id] && (t[i][e.event_id] = e), t;
    }, n));
}
function F(t) {
    D = t.reduce((t, e) => I(S({}, t), { [e.id]: new c.J(e) }), D);
}
function w() {
    R = !0;
}
function j(t) {
    let { linkedUsers: e, familyCenterTeenActivity: n } = t,
        { actions: i, guilds: r, totals: l, teenId: a, rangeStartId: d } = n;
    (C = a), (p = d), v(i), m(l), F(r), O(e), (R = !1), (b = u.default.fromTimestamp(Date.now())), (L = !0);
}
function P(t) {
    let { linkedUsers: e } = t;
    O(e);
}
function k(t) {
    let { linkedUsers: e } = t;
    O(e);
}
function H(t) {
    let { familyCenterTeenActivity: e } = t;
    if (void 0 === e) return;
    let { actions: n, totals: i, guilds: r, teenId: l, rangeStartId: a } = e;
    (C = l), (p = a), v(n), m(i), F(r), (R = !1), (b = u.default.fromTimestamp(Date.now()));
}
function G(t) {
    let { familyCenterTeenActivity: e } = t,
        { actions: n, guilds: i } = e;
    v(n, !0), F(i);
}
function V(t) {
    let { linkedUsers: e } = t;
    O(e);
}
function Q(t) {
    let { linkedUsers: e } = t;
    O(e, !0);
}
function Z(t) {
    let { linkCode: e } = t;
    N = e;
}
function x(t) {
    let { tab: e } = t;
    h = e;
}
function W(t) {
    let { user: e } = t;
    if (void 0 === e.linked_users) return;
    let n = o.default.getUsers();
    e.linked_users.some((t) => {
        let { user_id: e } = t;
        return void 0 === n[e];
    }) && e.linked_users.length > Object.keys(g).length
        ? E.ZP.fetchLinkedUsers()
        : O(e.linked_users);
}
function K(t) {
    var e;
    let { countryCode: n } = t;
    null != n && (M = null != (e = (0, d.Zz)(n)) ? e : null);
}
function z() {
    (C = null), (p = null), (g = {}), (y = U()), (A = Y()), (D = {}), (R = !1), (b = null);
}
class B extends s.Z {
    initialize() {
        this.waitFor(o.default);
    }
    loadCache() {
        let t = this.readSnapshot(B.LATEST_SNAPSHOT_VERSION);
        null != t &&
            (O(t.linkedUsers),
            F(t.guilds),
            v(t.teenActivity),
            (A = t.teenActivityTotals.reduce((t, e) => {
                let [n, i] = e.split(':'),
                    r = (0, _.jV)(n);
                return void 0 === r ? t : I(S({}, t), { [r]: parseInt(i, 10) });
            }, Y())));
    }
    takeSnapshot() {
        return {
            version: B.LATEST_SNAPSHOT_VERSION,
            data: {
                linkedUsers: Object.values(g),
                teenActivityTotals: Object.entries(A).map((t) => {
                    let [e, n] = t;
                    return ''.concat(e, ':').concat(n);
                }),
                teenActivity: (function () {
                    let t = [];
                    return (
                        Object.entries(y).forEach((e) => {
                            let [n, i] = e;
                            t.push(...Object.values(i));
                        }),
                        t
                    );
                })(),
                guilds: Object.values(D)
            }
        };
    }
    getSelectedTeenId() {
        return C;
    }
    getLinkedUsers() {
        return g;
    }
    getLinkTimestamp(t) {
        var e;
        let n = g[t];
        return null == n ? null : null != (e = n.updated_at) ? e : n.created_at;
    }
    getRangeStartTimestamp() {
        return null == p ? null : u.default.extractTimestamp(p);
    }
    getActionsForDisplayType(t) {
        return Object.values(y[t]);
    }
    getTotalForDisplayType(t) {
        return A[t];
    }
    getLinkCode() {
        return N;
    }
    getGuild(t) {
        return D[t];
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
        return null === b || u.default.age(b) > T.Of;
    }
    constructor() {
        super({
            CURRENT_USER_UPDATE: W,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: j,
            FAMILY_CENTER_FETCH_START: w,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: P,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: H,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: G,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: k,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: V,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: Q,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: Z,
            FAMILY_CENTER_HANDLE_TAB_SELECT: x,
            SET_LOCATION_METADATA: K,
            LOGOUT: z
        });
    }
}
f(B, 'displayName', 'FamilyCenterStore'), f(B, 'LATEST_SNAPSHOT_VERSION', 3);
let X = new B();
