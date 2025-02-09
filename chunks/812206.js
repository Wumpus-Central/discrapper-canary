n.d(t, { Z: () => j }), n(47120), n(653041);
var i,
    r = n(442837),
    a = n(570140),
    s = n(973616);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = [],
    u = {},
    c = {},
    d = {},
    f = {},
    _ = {},
    p = { botUserIdToAppUsage: {} },
    h = 10;
function m(e) {
    let t = u[e.id];
    f[e.id] = Date.now();
    let n = e;
    for (let i of (null != t && (n = t.mergeFromApplicationUpdate(e)), (u[e.id] = n), (d[e.name.toLowerCase()] = n), e.aliases)) d[i.toLowerCase()] = n;
    delete _[e.id];
}
function g() {
    (u = {}), (c = {}), (d = {}), (f = {}), (_ = {});
}
function E(e) {
    let { applications: t } = e;
    for (let e of t) m(new s.ZP(e));
}
function v(e) {
    let { applicationId: t } = e,
        n = _[t];
    return (_[t] = !0), !0 !== n;
}
function y(e) {
    let { application: t } = e;
    T(t);
}
function I(e) {
    let { application: t } = e;
    T(t);
}
function T(e) {
    m(s.ZP.createFromServer(e));
}
function b(e) {
    let { userId: t, applicationId: n } = e,
        i = p.botUserIdToAppUsage[t];
    null == i
        ? (p.botUserIdToAppUsage[t] = {
              applicationId: n,
              lastUsedMs: Date.now()
          })
        : (p.botUserIdToAppUsage[t] = {
              applicationId: n,
              lastUsedMs: i.lastUsedMs
          });
    let r = new Map();
    for (let [e, t] of Object.entries(p.botUserIdToAppUsage)) r.set(e, t);
    let a = Array.from(r.entries()).sort((e, t) => t[1].lastUsedMs - e[1].lastUsedMs);
    for (let e = 0; e < a.length; e++)
        if (e >= h) {
            let t = a[e][0];
            delete p.botUserIdToAppUsage[t];
        }
}
function S(e) {
    let { applicationId: t } = e,
        n = _[t];
    return (_[t] = !1), !1 !== n;
}
function A(e) {
    let { applicationIds: t } = e,
        n = !1;
    for (let e of t) {
        let t = _[e];
        (_[e] = !0), (n = !0 !== t);
    }
    return n;
}
function N(e) {
    let { libraryApplications: t } = e;
    for (let e of t) m(s.ZP.createFromServer(e.application));
}
function C(e) {
    let { applications: t } = e;
    for (let e of t) m(s.ZP.createFromServer(e));
}
function R(e) {
    let { recommendations: t } = e;
    t.forEach((e) => {
        e.items.forEach((e) => {
            m(s.ZP.createFromServer(e.application));
        });
    });
}
function O(e) {
    let { user: t, application: n } = e;
    t.bot &&
        null != n &&
        b({
            userId: t.id,
            applicationId: n.id
        });
}
function D(e) {
    let { botUserId: t } = e,
        n = p.botUserIdToAppUsage[t];
    null != n &&
        (p.botUserIdToAppUsage[t] = {
            ...n,
            lastUsedMs: Date.now()
        });
}
function L(e) {
    let { applicationIds: t } = e,
        n = !1;
    for (let e of t) {
        let t = _[e];
        (_[e] = !1), (n = !1 !== t);
    }
    return n;
}
function x(e) {
    let { entitlements: t } = e,
        n = !1;
    for (let { sku: e } of t) (null == e ? void 0 : e.application) != null && (m(s.ZP.createFromServer(e.application)), (n = !0));
    return n;
}
function w(e) {
    let { guildId: t, applications: n } = e,
        i = [];
    for (let e of n) i.push(e.id), m(s.ZP.createFromServer(e));
    c[t] = i;
}
function P(e) {
    let { payments: t } = e,
        n = new Set();
    for (let e of t) {
        var i;
        let t = null === (i = e.sku) || void 0 === i ? void 0 : i.application;
        null == t || n.has(t.id) || m(s.ZP.createFromServer(t));
    }
    return n.size > 0;
}
function M(e) {
    var t;
    let { payment: n } = e;
    if ((null === (t = n.sku) || void 0 === t ? void 0 : t.application) == null) return !1;
    m(s.ZP.createFromServer(n.sku.application));
}
function k(e) {
    var t;
    let { giftCode: n } = e;
    if ((null === (t = n.store_listing) || void 0 === t ? void 0 : t.sku.application) == null) return !1;
    m(s.ZP.createFromServer(n.store_listing.sku.application));
}
function U(e) {
    let { invite: t } = e;
    if (null == t.target_application) return !1;
    m(s.ZP.createFromServer(t.target_application));
}
function G(e) {
    let { storeListing: t } = e;
    if (null == t.sku.application) return !1;
    m(s.ZP.createFromServer(t.sku.application));
}
function B(e) {
    let { messages: t } = e;
    t.forEach((e) => Z(e));
}
function Z(e) {
    var t;
    null === (t = e.attachments) ||
        void 0 === t ||
        t.forEach((e) => {
            null != e.application && m(s.ZP.createFromServer(e.application));
        });
}
function F(e) {
    e.apps.forEach((e) => {
        m(s.ZP.createFromServer(e.application));
        let t = e.application.bot;
        null != t &&
            b({
                userId: t.id,
                applicationId: e.application.id
            });
    });
}
class V extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        if (null != e && 'object' == typeof e.botUserIdToAppUsage)
            for (let t in e.botUserIdToAppUsage) {
                let n = e.botUserIdToAppUsage[t],
                    i = n.applicationId,
                    r = n.lastUsedMs;
                'string' == typeof i &&
                    i.length > 0 &&
                    'number' == typeof r &&
                    r > 0 &&
                    (p.botUserIdToAppUsage[t] = {
                        applicationId: i,
                        lastUsedMs: r
                    });
            }
    }
    getState() {
        return p;
    }
    _getAllApplications() {
        return Object.values(u);
    }
    getApplications() {
        return u;
    }
    getGuildApplication(e, t) {
        if (null != e) {
            for (let n of Object.values(u)) if (n.guildId === e && n.type === t) return n;
        }
    }
    getGuildApplicationIds(e) {
        var t;
        return null == e ? l : null !== (t = c[e]) && void 0 !== t ? t : l;
    }
    getApplication(e) {
        if (null != e) return u[e];
    }
    getApplicationByName(e) {
        if (null == e) return;
        let t = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(d, t) ? d[t] : void 0;
    }
    getApplicationLastUpdated(e) {
        return f[e];
    }
    isFetchingApplication(e) {
        return !0 === _[e];
    }
    didFetchingApplicationFail(e) {
        return !1 === _[e];
    }
    getFetchingOrFailedFetchingIds() {
        return Object.keys(_);
    }
    getAppIdForBotUserId(e) {
        var t;
        if (null != e) return null === (t = p.botUserIdToAppUsage[e]) || void 0 === t ? void 0 : t.applicationId;
    }
}
o(V, 'displayName', 'ApplicationStore'), o(V, 'persistKey', 'ApplicationStore');
let j = new V(a.Z, {
    LOGOUT: g,
    OVERLAY_INITIALIZE: E,
    APPLICATION_FETCH: v,
    APPLICATION_FETCH_SUCCESS: I,
    APPLICATION_FETCH_FAIL: S,
    APPLICATIONS_FETCH: A,
    APPLICATIONS_FETCH_SUCCESS: C,
    APPLICATIONS_FETCH_FAIL: L,
    APPLICATION_UPDATE: y,
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: x,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: x,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: x,
    GUILD_APPLICATIONS_FETCH_SUCCESS: w,
    BILLING_PAYMENTS_FETCH_SUCCESS: P,
    PAYMENT_UPDATE: M,
    INVITE_RESOLVE_SUCCESS: U,
    GIFT_CODE_RESOLVE_SUCCESS: k,
    LIBRARY_FETCH_SUCCESS: N,
    STORE_LISTING_FETCH_SUCCESS: G,
    LOAD_MESSAGES_SUCCESS: B,
    APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: R,
    USER_PROFILE_FETCH_SUCCESS: O,
    APP_DM_OPEN: D,
    USER_AUTHORIZED_APPS_UPDATE: F
});
