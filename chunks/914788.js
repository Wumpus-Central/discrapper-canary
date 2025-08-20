n.d(t, { Z: () => Q }), n(388685), n(539854), n(35282);
var r = n(133080),
    i = n(750041),
    a = n(594174),
    o = n(411198),
    s = n(709054),
    l = n(260722),
    c = n(546791),
    u = n(292352);
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
function f(e) {
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
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = null,
    m = null,
    g = {},
    E = N(),
    b = R(),
    y = null,
    O = C(),
    v = !1,
    I = !1,
    T = null,
    S = null,
    A = {};
function C() {
    var e, t, n, r;
    return (null == (t = window) || null == (e = t.location) ? void 0 : e.pathname) === u.ix.FAMILY_CENTER_MY_FAMILY
        ? u.dG.REQUESTS
        : (null == (r = window) || null == (n = r.location) ? void 0 : n.pathname) === u.ix.FAMILY_CENTER_SETTINGS
          ? u.dG.SETTINGS
          : u.dG.ACTIVITY;
}
function N() {
    return {
        [u.MY.USER_ADD]: {},
        [u.MY.GUILD_ADD]: {},
        [u.MY.USER_INTERACTION]: {},
        [u.MY.GUILD_INTERACTION]: {},
        [u.MY.USER_CALLED]: {},
        [u.MY.TOTAL_VOICE_MINUTES]: {},
        [u.MY.PURCHASES]: {},
    };
}
function R() {
    return {
        [u.MY.USER_ADD]: 0,
        [u.MY.GUILD_ADD]: 0,
        [u.MY.USER_INTERACTION]: 0,
        [u.MY.GUILD_INTERACTION]: 0,
        [u.MY.USER_CALLED]: 0,
        [u.MY.TOTAL_VOICE_MINUTES]: 0,
        [u.MY.PURCHASES]: 0,
    };
}
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return (
        arguments.length > 1 && arguments[1],
        (g = e.length > 0 ? e.reduce((e, t) => p(f({}, e), { [t.user_id]: t }), {}) : {})
    );
}
function w(e) {
    void 0 !== e && (b = e);
}
function D(e, t) {
    let n = t ? E : N();
    return (E = e.reduce((e, t) => {
        let r = t.display_type;
        return void 0 !== n[r] && void 0 === n[r][t.event_id] && (e[r][t.event_id] = t), e;
    }, n));
}
function x(e) {
    A = e.reduce((e, t) => {
        var n;
        return p(f({}, e), {
            [t.id]: p(f({}, (0, o.Jh)(t)), {
                approximateMemberCount: null != (n = t.approximate_member_count) ? n : 0,
            }),
        });
    }, A);
}
function L() {
    I = !0;
}
function j(e) {
    let { linkedUsers: t, familyCenterTeenActivity: n } = e,
        { actions: r, guilds: i, totals: a, teenId: o, rangeStartId: l } = n;
    (h = o), (m = l), D(r), w(a), x(i), P(t), (I = !1), (T = s.default.fromTimestamp(Date.now())), (v = !0);
}
function M(e) {
    let { linkedUsers: t } = e;
    P(t);
}
function k(e) {
    let { linkedUsers: t } = e;
    P(t);
}
function U(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { actions: n, totals: r, guilds: i, teenId: a, rangeStartId: o } = t;
    (h = a), (m = o), D(n), w(r), x(i), (I = !1), (T = s.default.fromTimestamp(Date.now()));
}
function G(e) {
    let { familyCenterTeenActivity: t } = e,
        { actions: n, guilds: r } = t;
    D(n, !0), x(r);
}
function B(e) {
    let { linkedUsers: t } = e;
    P(t);
}
function Z(e) {
    let { linkedUsers: t } = e;
    P(t, !0);
}
function V(e) {
    let { linkCode: t } = e;
    y = t;
}
function F(e) {
    let { tab: t } = e;
    O = t;
}
function H(e) {
    let { user: t } = e;
    if (void 0 === t.linked_users) return;
    let n = a.default.getUsers();
    t.linked_users.some((e) => {
        let { user_id: t } = e;
        return void 0 === n[t];
    }) && t.linked_users.length > Object.keys(g).length
        ? l.ZP.fetchLinkedUsers()
        : P(t.linked_users);
}
function Y(e) {
    var t;
    let { countryCode: n } = e;
    null != n && (S = null != (t = (0, r.Zz)(n)) ? t : null);
}
function W() {
    let e = [];
    return (
        Object.entries(E).forEach((t) => {
            let [n, r] = t;
            e.push(...Object.values(r));
        }),
        e
    );
}
function K() {
    return Object.entries(b).map((e) => {
        let [t, n] = e;
        return "".concat(t, ":").concat(n);
    });
}
function z(e) {
    b = e.reduce((e, t) => {
        let [n, r] = t.split(":"),
            i = (0, c.jV)(n);
        return void 0 === i ? e : p(f({}, e), { [i]: parseInt(r, 10) });
    }, R());
}
function q() {
    (h = null), (m = null), (g = {}), (E = N()), (b = R()), (A = {}), (I = !1), (T = null);
}
class X extends i.Z {
    initialize() {
        this.waitFor(a.default);
    }
    loadCache() {
        let e = this.readSnapshot(X.LATEST_SNAPSHOT_VERSION);
        null != e && (P(e.linkedUsers), x(e.guilds), D(e.teenActivity), z(e.teenActivityTotals));
    }
    takeSnapshot() {
        return {
            version: X.LATEST_SNAPSHOT_VERSION,
            data: {
                linkedUsers: Object.values(g),
                teenActivityTotals: K(),
                teenActivity: W(),
                guilds: Object.values(A),
            },
        };
    }
    getSelectedTeenId() {
        return h;
    }
    getLinkedUsers() {
        return g;
    }
    getLinkTimestamp(e) {
        var t;
        let n = g[e];
        return null == n ? null : null != (t = n.updated_at) ? t : n.created_at;
    }
    getRangeStartTimestamp() {
        return null == m ? null : s.default.extractTimestamp(m);
    }
    getActionsForDisplayType(e) {
        return Object.values(E[e]);
    }
    getTotalForDisplayType(e) {
        return b[e];
    }
    getLinkCode() {
        return y;
    }
    getGuild(e) {
        return A[e];
    }
    getSelectedTab() {
        return O;
    }
    getStartId() {
        return m;
    }
    getIsInitialized() {
        return v;
    }
    getUserCountry() {
        return S;
    }
    isLoading() {
        return I;
    }
    canRefetch() {
        return null === T || s.default.age(T) > u.Of;
    }
    constructor() {
        super({
            CURRENT_USER_UPDATE: H,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: j,
            FAMILY_CENTER_FETCH_START: L,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: M,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: U,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: G,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: k,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: B,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: Z,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: V,
            FAMILY_CENTER_HANDLE_TAB_SELECT: F,
            SET_LOCATION_METADATA: Y,
            LOGOUT: q,
        });
    }
}
d(X, "displayName", "FamilyCenterStore"), d(X, "LATEST_SNAPSHOT_VERSION", 3);
let Q = new X();
