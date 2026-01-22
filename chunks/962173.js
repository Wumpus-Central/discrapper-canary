n.d(t, { A: () => w }), n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(77468),
    o = n(573648),
    l = n(806374),
    c = n(860689);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = new Set([n(652215).fg2.CONTACTS]),
    h = !0,
    m = [],
    g = [],
    E = {},
    b = new Set(),
    y = {},
    O = {},
    A = (e) => {
        (m = e.filter((e) => !_.has(e.type) && o.A.isSupported(e.type))),
            (g = e.filter((e) => _.has(e.type))),
            (h = !1);
    };
function v(e) {
    A(e.connectedAccounts.map((e) => new l.A(e)));
}
function S(e) {
    e.local && null != e.accounts
        ? A(
              e.accounts.map(
                  (e) =>
                      new l.A(
                          p(d({}, e), {
                              integrations: e.integrations.map((e) =>
                                  p(d({}, e), { guild: (0, c.yF)(p(d({}, e.guild), { features: [] })) }),
                              ),
                          }),
                      ),
              ),
          )
        : s.A.fetch();
}
function I(e) {
    E[e.integrationId] = e.joining;
}
function T(e) {
    O[e.integrationId] = void 0 !== e.error ? e.error : "";
}
function C(e) {
    let { platformType: t, id: n, revoked: r, accessToken: i } = e,
        a = m.find((e) => e.id === n && e.type === t);
    if (null == a) return !1;
    null != r && (a.revoked = r), null != i && (a.accessToken = i);
}
function N(e) {
    let { code: t, state: n, openid_params: r, provider: i } = e;
    s.A.callback(i, {
        code: t,
        state: n,
        openid_params: r,
    });
}
class R extends (r = i.Ay.Store) {
    isJoining(e) {
        return E[e] || !1;
    }
    joinErrorMessage(e) {
        return O[e];
    }
    isFetching() {
        return h;
    }
    getAccounts() {
        return m;
    }
    getLocalAccounts() {
        return g;
    }
    getAccount(e, t) {
        return m.find((n) => (null == e || n.id === e) && n.type === t);
    }
    getLocalAccount(e) {
        return g.find((t) => t.type === e);
    }
    isSuggestedAccountType(e) {
        return y[e] || !1;
    }
    addPendingAuthorizedState(e) {
        b.add(e);
    }
    deletePendingAuthorizedState(e) {
        b.delete(e);
    }
    hasPendingAuthorizedState(e) {
        return b.has(e);
    }
}
u(R, "displayName", "ConnectedAccountsStore");
let w = new R(a.h, {
    CONNECTION_OPEN: v,
    USER_CONNECTIONS_UPDATE: S,
    USER_CONNECTIONS_INTEGRATION_JOINING: I,
    USER_CONNECTION_UPDATE: C,
    USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: T,
    USER_CONNECTIONS_CALLBACK: N,
});
