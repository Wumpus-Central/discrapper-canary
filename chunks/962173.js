"use strict";
n.d(t, { A: () => C });
var r = n(311907),
    i = n(73153),
    a = n(77468),
    s = n(573648),
    o = n(806374),
    l = n(860689);
let u = new Set([n(652215).fg2.CONTACTS]),
    c = !0,
    d = [],
    _ = [],
    f = {},
    p = new Set(),
    h = {},
    m = {},
    g = (e) => {
        (d = e.filter((e) => !u.has(e.type) && s.A.isSupported(e.type))),
            (_ = e.filter((e) => u.has(e.type))),
            (c = !1);
    };
function E(e) {
    g(e.connectedAccounts.map((e) => new o.A(e)));
}
function A(e) {
    e.local && null != e.accounts
        ? g(
              e.accounts.map(
                  (e) =>
                      new o.A({
                          ...e,
                          integrations: e.integrations.map((e) => ({
                              ...e,
                              guild: (0, l.yF)({ ...e.guild, features: [] }),
                          })),
                      }),
              ),
          )
        : a.A.fetch();
}
function I(e) {
    f[e.integrationId] = e.joining;
}
function T(e) {
    m[e.integrationId] = void 0 !== e.error ? e.error : "";
}
function y(e) {
    let { platformType: t, id: n, revoked: r, accessToken: i } = e,
        a = d.find((e) => e.id === n && e.type === t);
    if (null == a) return !1;
    null != r && (a.revoked = r), null != i && (a.accessToken = i);
}
function S(e) {
    let { code: t, state: n, openid_params: r, provider: i } = e;
    a.A.callback(i, { code: t, state: n, openid_params: r });
}
class v extends r.Ay.Store {
    static displayName = "ConnectedAccountsStore";
    isJoining(e) {
        return f[e] || !1;
    }
    joinErrorMessage(e) {
        return m[e];
    }
    isFetching() {
        return c;
    }
    getAccounts() {
        return d;
    }
    getLocalAccounts() {
        return _;
    }
    getAccount(e, t) {
        return d.find((n) => (null == e || n.id === e) && n.type === t);
    }
    getLocalAccount(e) {
        return _.find((t) => t.type === e);
    }
    isSuggestedAccountType(e) {
        return h[e] || !1;
    }
    addPendingAuthorizedState(e) {
        p.add(e);
    }
    deletePendingAuthorizedState(e) {
        p.delete(e);
    }
    hasPendingAuthorizedState(e) {
        return p.has(e);
    }
}
let C = new v(i.h, {
    CONNECTION_OPEN: E,
    USER_CONNECTIONS_UPDATE: A,
    USER_CONNECTIONS_INTEGRATION_JOINING: I,
    USER_CONNECTION_UPDATE: y,
    USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: T,
    USER_CONNECTIONS_CALLBACK: S,
});
