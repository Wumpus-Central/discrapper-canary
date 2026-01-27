n.d(t, {
    m: () => o,
});
var i = n(562465),
    s = n(73153),
    r = n(287809),
    l = n(652215);
async function o(e, t) {
    try {
        let n = await i.Bo.put({
            url: l.Rsh.USER_SET_GUILD_IDENTITY,
            body: {
                identity_guild_id: e,
                identity_enabled: t,
            },
            rejectWithError: !1,
        });
        return (
            n.ok &&
                s.h.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, r.default.getCurrentUser(), n.body),
                }),
            n
        );
    } catch (e) {
        return e;
    }
}
