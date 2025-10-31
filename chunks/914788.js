n.d(t, { Z: () => ea }), n(388685), n(539854), n(35282);
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
    E = !1,
    b = L(),
    y = M(),
    O = null,
    v = x(),
    I = !1,
    T = !1,
    S = null,
    A = null,
    C = [],
    N = [],
    R = null,
    P = null,
    w = {},
    D = {};
function x() {
    var e, t, n, r;
    return (null == (t = window) || null == (e = t.location) ? void 0 : e.pathname) === u.ix.FAMILY_CENTER_MY_FAMILY
        ? u.dG.REQUESTS
        : (null == (r = window) || null == (n = r.location) ? void 0 : n.pathname) === u.ix.FAMILY_CENTER_SETTINGS
          ? u.dG.SETTINGS
          : u.dG.ACTIVITY;
}
function L() {
    let e = new Map();
    return (
        e.set(u.MY.USER_ADD, new Map()),
        e.set(u.MY.GUILD_ADD, new Map()),
        e.set(u.MY.USER_INTERACTION, new Map()),
        e.set(u.MY.GUILD_INTERACTION, new Map()),
        e.set(u.MY.USER_CALLED, new Map()),
        e.set(u.MY.TOTAL_VOICE_MINUTES, new Map()),
        e.set(u.MY.PURCHASES, new Map()),
        e
    );
}
function M() {
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
function j() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return (
        arguments.length > 1 && arguments[1],
        (g = e.length > 0 ? e.reduce((e, t) => p(f({}, e), { [t.user_id]: t }), {}) : {}),
        (E = !0),
        g
    );
}
function k(e) {
    void 0 !== e && (y = e);
}
function U(e, t) {
    let n = t ? b : L();
    return (
        e.forEach((e) => {
            let t = e.display_type,
                r = n.get(t);
            void 0 === r || r.has(e.event_id) || r.set(e.event_id, e);
        }),
        (b = n)
    );
}
function G(e) {
    D = e.reduce((e, t) => {
        var n;
        return p(f({}, e), {
            [t.id]: p(f({}, (0, o.dangerouslyConstructGuildRecordFromUntypedObject)(t)), {
                approximateMemberCount: null != (n = t.approximate_member_count) ? n : 0,
            }),
        });
    }, D);
}
function B(e) {
    w = e.reduce((e, t) => {
        if (null != t.invoice_items && t.invoice_items.length > 0) {
            let n = t.invoice_items[0],
                r = n.sku_id,
                i = n.subscription_plan_id;
            (null != r || null != i) &&
                (e[t.id] = {
                    sku_id: r,
                    subscription_plan_id: i,
                    total: t.total,
                    currency: t.currency,
                });
        }
        return e;
    }, {});
}
function Z() {
    T = !0;
}
function F(e) {
    let { linkedUsers: t, familyCenterTeenActivity: n } = e,
        {
            actions: r,
            guilds: i,
            totals: a,
            teenId: o,
            rangeStartId: l,
            topUserActivities: c,
            topGuildActivities: u,
            totalSpendAmount: d,
            totalSpendCurrency: f,
            invoices: _,
        } = n;
    (h = o),
        (m = l),
        U(r),
        k(a),
        G(i),
        j(t),
        null != _ && B(_),
        (C = c),
        (N = u),
        (R = d),
        (P = f),
        (T = !1),
        (S = s.default.fromTimestamp(Date.now())),
        (I = !0);
}
function V(e) {
    let { linkedUsers: t } = e;
    j(t);
}
function H(e) {
    let { linkedUsers: t } = e;
    j(t);
}
function Y(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return !1;
    let {
        actions: n,
        totals: r,
        guilds: i,
        teenId: a,
        rangeStartId: o,
        topUserActivities: l,
        topGuildActivities: c,
        totalSpendAmount: u,
        totalSpendCurrency: d,
        invoices: f,
    } = t;
    (h = a),
        (m = o),
        U(n),
        k(r),
        G(i),
        null != f && B(f),
        (C = l),
        (N = c),
        (T = !1),
        (S = s.default.fromTimestamp(Date.now())),
        (R = u),
        (P = d);
}
function W(e) {
    let { familyCenterTeenActivity: t } = e,
        { actions: n, guilds: r } = t;
    U(n, !0), G(r);
}
function K(e) {
    let { linkedUsers: t } = e;
    j(t);
}
function z(e) {
    let { linkedUsers: t } = e;
    j(t, !0);
}
function q(e) {
    let { linkCode: t } = e;
    O = t;
}
function X(e) {
    let { tab: t } = e;
    v = t;
}
function Q(e) {
    let { user: t } = e;
    if (void 0 === t.linked_users) return !1;
    let n = a.default.getUsers();
    t.linked_users.some((e) => {
        let { user_id: t } = e;
        return void 0 === n[t];
    }) && t.linked_users.length > Object.keys(g).length
        ? l.ZP.fetchLinkedUsers()
        : j(t.linked_users);
}
function J(e) {
    let { linkedUsers: t } = e;
    if (null == t) return !1;
    j(t);
}
function $(e) {
    var t;
    let { countryCode: n } = e;
    null != n && (A = null != (t = (0, r.Zz)(n)) ? t : null);
}
function ee() {
    let e = [];
    return (
        b.forEach((t) => {
            e.push(...Array.from(t.values()));
        }),
        e
    );
}
function et() {
    return Object.entries(y).map((e) => {
        let [t, n] = e;
        return "".concat(t, ":").concat(n);
    });
}
function en(e) {
    y = e.reduce((e, t) => {
        let [n, r] = t.split(":"),
            i = (0, c.jV)(n);
        return void 0 === i ? e : p(f({}, e), { [i]: parseInt(r, 10) });
    }, M());
}
function er() {
    (h = null),
        (m = null),
        (g = {}),
        (b = L()),
        (y = M()),
        (D = {}),
        (T = !1),
        (S = null),
        (v = x()),
        (E = !1),
        (C = []),
        (N = []),
        (R = null),
        (P = null),
        (w = {});
}
class ei extends i.Z {
    initialize() {
        this.waitFor(a.default);
    }
    loadCache() {
        let e = this.readSnapshot(ei.LATEST_SNAPSHOT_VERSION);
        null != e && (j(e.linkedUsers), G(e.guilds), U(e.teenActivity), en(e.teenActivityTotals));
    }
    takeSnapshot() {
        return {
            version: ei.LATEST_SNAPSHOT_VERSION,
            data: {
                linkedUsers: Object.values(g),
                teenActivityTotals: et(),
                teenActivity: ee(),
                guilds: Object.values(D),
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
        let t = b.get(e);
        return null != t ? Array.from(t.values()) : [];
    }
    getTotalForDisplayType(e) {
        return y[e];
    }
    getLinkCode() {
        return O;
    }
    getGuild(e) {
        return D[e];
    }
    getSelectedTab() {
        return v;
    }
    getStartId() {
        return m;
    }
    getIsInitialized() {
        return I;
    }
    getAreLinkedUsersProcessed() {
        return E;
    }
    getUserCountry() {
        return A;
    }
    isLoading() {
        return T;
    }
    getTopUserActivities() {
        return C;
    }
    getTopGuildActivities() {
        return N;
    }
    getTotalSpendAmount() {
        return R;
    }
    getTotalSpendCurrency() {
        return P;
    }
    getPurchaseInfo(e) {
        return w[e];
    }
    canRefetch() {
        return null === S || s.default.age(S) > u.Of;
    }
    constructor() {
        super({
            CONNECTION_OPEN: J,
            CURRENT_USER_UPDATE: Q,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: F,
            FAMILY_CENTER_FETCH_START: Z,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: V,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: Y,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: W,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: H,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: K,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: z,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: q,
            FAMILY_CENTER_HANDLE_TAB_SELECT: X,
            SET_LOCATION_METADATA: $,
            LOGOUT: er,
        });
    }
}
d(ei, "displayName", "FamilyCenterStore"), d(ei, "LATEST_SNAPSHOT_VERSION", 3);
let ea = new ei();
