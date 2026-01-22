n.d(t, { m: () => c });
var r = n(562465),
    i = n(73153),
    a = n(287809),
    s = n(652215);
function o(e, t, n) {
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
function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
async function c(e, t) {
    try {
        let n = await r.Bo.put({
            url: s.Rsh.USER_SET_GUILD_IDENTITY,
            body: {
                identity_guild_id: e,
                identity_enabled: t,
            },
            rejectWithError: !1,
        });
        return (
            n.ok &&
                i.h.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: l({}, a.default.getCurrentUser(), n.body),
                }),
            n
        );
    } catch (e) {
        return e;
    }
}
