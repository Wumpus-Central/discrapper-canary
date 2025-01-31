n.d(e, { Z: () => z }), n(724458), n(47120), n(653041);
var i,
    r,
    l,
    a,
    s = n(133080),
    o = n(412788),
    E = n(594174),
    d = n(709054),
    _ = n(260722),
    u = n(735079),
    T = n(546791),
    c = n(292352);
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
let I = null,
    C = null,
    A = {},
    N = U(),
    g = Y(),
    L = null,
    R = (null === (r = window) || void 0 === r ? void 0 : null === (i = r.location) || void 0 === i ? void 0 : i.pathname) === c.ix.FAMILY_CENTER_MY_FAMILY ? c.dG.REQUESTS : (null === (a = window) || void 0 === a ? void 0 : null === (l = a.location) || void 0 === l ? void 0 : l.pathname) === c.ix.FAMILY_CENTER_SETTINGS ? c.dG.SETTINGS : c.dG.ACTIVITY,
    p = !1,
    y = !1,
    f = null,
    M = null,
    D = {};
function U() {
    return {
        [c.MY.USER_ADD]: {},
        [c.MY.GUILD_ADD]: {},
        [c.MY.USER_INTERACTION]: {},
        [c.MY.GUILD_INTERACTION]: {},
        [c.MY.USER_CALLED]: {}
    };
}
function Y() {
    return {
        [c.MY.USER_ADD]: 0,
        [c.MY.GUILD_ADD]: 0,
        [c.MY.USER_INTERACTION]: 0,
        [c.MY.GUILD_INTERACTION]: 0,
        [c.MY.USER_CALLED]: 0
    };
}
function h() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return (
        arguments.length > 1 && arguments[1],
        (A =
            t.length > 0
                ? t.reduce(
                      (t, e) => ({
                          ...t,
                          [e.user_id]: e
                      }),
                      {}
                  )
                : {})
    );
}
function v(t) {
    void 0 !== t && (g = t);
}
function m(t, e) {
    let n = e ? N : U();
    return (N = t.reduce((t, e) => {
        let i = e.display_type;
        return void 0 !== n[i] && void 0 === n[i][e.event_id] && (t[i][e.event_id] = e), t;
    }, n));
}
function F(t) {
    D = t.reduce(
        (t, e) => ({
            ...t,
            [e.id]: new u.J(e)
        }),
        D
    );
}
function O() {
    y = !0;
}
function w(t) {
    let { linkedUsers: e, familyCenterTeenActivity: n } = t,
        { actions: i, guilds: r, totals: l, teenId: a, rangeStartId: s } = n;
    (I = a), (C = s), m(i), v(l), F(r), h(e), (y = !1), (f = d.default.fromTimestamp(Date.now())), (p = !0);
}
function H(t) {
    let { linkedUsers: e } = t;
    h(e);
}
function b(t) {
    let { linkedUsers: e } = t;
    h(e);
}
function G(t) {
    let { familyCenterTeenActivity: e } = t;
    if (void 0 === e) return;
    let { actions: n, totals: i, guilds: r, teenId: l, rangeStartId: a } = e;
    (I = l), (C = a), m(n), v(i), F(r), (y = !1), (f = d.default.fromTimestamp(Date.now()));
}
function k(t) {
    let { familyCenterTeenActivity: e } = t,
        { actions: n, guilds: i } = e;
    m(n, !0), F(i);
}
function V(t) {
    let { linkedUsers: e } = t;
    h(e);
}
function Q(t) {
    let { linkedUsers: e } = t;
    h(e, !0);
}
function P(t) {
    let { linkCode: e } = t;
    L = e;
}
function Z(t) {
    let { tab: e } = t;
    R = e;
}
function j(t) {
    let { user: e } = t;
    if (void 0 === e.linked_users) return;
    let n = E.default.getUsers();
    e.linked_users.some((t) => {
        let { user_id: e } = t;
        return void 0 === n[e];
    }) && e.linked_users.length > Object.keys(A).length
        ? _.ZP.fetchLinkedUsers()
        : h(e.linked_users);
}
function x(t) {
    var e;
    let { countryCode: n } = t;
    null != n && (M = null !== (e = (0, s.Zz)(n)) && void 0 !== e ? e : null);
}
function K() {
    (I = null), (C = null), (A = {}), (N = U()), (g = Y()), (D = {}), (y = !1), (f = null);
}
class W extends o.Z {
    initialize() {
        this.waitFor(E.default);
    }
    loadCache() {
        let t = this.readSnapshot(W.LATEST_SNAPSHOT_VERSION);
        null != t &&
            (h(t.linkedUsers),
            F(t.guilds),
            m(t.teenActivity),
            (g = t.teenActivityTotals.reduce((t, e) => {
                let [n, i] = e.split(':'),
                    r = (0, T.jV)(n);
                return void 0 === r
                    ? t
                    : {
                          ...t,
                          [r]: parseInt(i, 10)
                      };
            }, Y())));
    }
    takeSnapshot() {
        return {
            version: W.LATEST_SNAPSHOT_VERSION,
            data: {
                linkedUsers: Object.values(A),
                teenActivityTotals: Object.entries(g).map((t) => {
                    let [e, n] = t;
                    return ''.concat(e, ':').concat(n);
                }),
                teenActivity: (function () {
                    let t = [];
                    return (
                        Object.entries(N).forEach((e) => {
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
        return I;
    }
    getLinkedUsers() {
        return A;
    }
    getLinkTimestamp(t) {
        var e;
        let n = A[t];
        return null == n ? null : null !== (e = n.updated_at) && void 0 !== e ? e : n.created_at;
    }
    getRangeStartTimestamp() {
        return null == C ? null : d.default.extractTimestamp(C);
    }
    getActionsForDisplayType(t) {
        return Object.values(N[t]);
    }
    getTotalForDisplayType(t) {
        return g[t];
    }
    getLinkCode() {
        return L;
    }
    getGuild(t) {
        return D[t];
    }
    getSelectedTab() {
        return R;
    }
    getStartId() {
        return C;
    }
    getIsInitialized() {
        return p;
    }
    getUserCountry() {
        return M;
    }
    isLoading() {
        return y;
    }
    canRefetch() {
        return null === f || d.default.age(f) > c.Of;
    }
    constructor() {
        super({
            CURRENT_USER_UPDATE: j,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: w,
            FAMILY_CENTER_FETCH_START: O,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: H,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: G,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: k,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: b,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: V,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: Q,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: P,
            FAMILY_CENTER_HANDLE_TAB_SELECT: Z,
            SET_LOCATION_METADATA: x,
            LOGOUT: K
        });
    }
}
S(W, 'displayName', 'FamilyCenterStore'), S(W, 'LATEST_SNAPSHOT_VERSION', 3);
let z = new W();
