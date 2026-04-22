"use strict";
n.d(t, { A: () => A });
var r = n(311907),
    i = n(73153),
    s = n(77468),
    a = n(573648),
    o = n(806374),
    l = n(860689);
let u = new Set([n(652215).fg2.CONTACTS]),
    d = !0,
    c = [],
    _ = [],
    f = {},
    E = new Set(),
    h = {},
    p = {},
    m = (e) => {
        (c = e.filter((e) => !u.has(e.type) && a.A.isSupported(e.type))),
            (_ = e.filter((e) => u.has(e.type))),
            (d = !1);
    };
class g extends r.Ay.Store {
    static displayName = "ConnectedAccountsStore";
    isJoining(e) {
        return f[e] || !1;
    }
    joinErrorMessage(e) {
        return p[e];
    }
    isFetching() {
        return d;
    }
    getAccounts() {
        return c;
    }
    getLocalAccounts() {
        return _;
    }
    getAccount(e, t) {
        return c.find((n) => (null == e || n.id === e) && n.type === t);
    }
    getLocalAccount(e) {
        return _.find((t) => t.type === e);
    }
    isSuggestedAccountType(e) {
        return h[e] || !1;
    }
    addPendingAuthorizedState(e) {
        E.add(e);
    }
    deletePendingAuthorizedState(e) {
        E.delete(e);
    }
    hasPendingAuthorizedState(e) {
        return E.has(e);
    }
}
let A = new g(i.h, {
    CONNECTION_OPEN: function (e) {
        m(e.connectedAccounts.map((e) => new o.A(e)));
    },
    USER_CONNECTIONS_UPDATE: function (e) {
        e.local && null != e.accounts
            ? m(
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
            : s.A.fetch();
    },
    USER_CONNECTIONS_INTEGRATION_JOINING: function (e) {
        f[e.integrationId] = e.joining;
    },
    USER_CONNECTION_UPDATE: function (e) {
        let { platformType: t, id: n, revoked: r, accessToken: i } = e,
            s = c.find((e) => e.id === n && e.type === t);
        if (null == s) return !1;
        null != r && (s.revoked = r), null != i && (s.accessToken = i);
    },
    USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: function (e) {
        p[e.integrationId] = void 0 !== e.error ? e.error : "";
    },
    USER_CONNECTIONS_CALLBACK: function (e) {
        let { code: t, state: n, openid_params: r, provider: i } = e;
        s.A.callback(i, { code: t, state: n, openid_params: r });
    },
});
