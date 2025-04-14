n.d(t, {
    LX: () => d,
    nE: () => c
}),
    n(953529),
    n(388685);
var r = n(544891),
    i = n(570140);
n(479531);
var s = n(314897),
    a = n(594174),
    l = n(970606);
n(308083);
var o = n(981631);
async function c(e, t, n) {
    try {
        null != e &&
            !0 === t &&
            (0, l.hx)({
                guildId: e,
                userId: s.default.getId(),
                source: n
            });
        let c = await r.tn.put({
            url: o.ANM.USER_SET_CLAN_IDENTITY,
            body: {
                identity_guild_id: e,
                identity_enabled: t
            },
            rejectWithError: !1
        });
        i.Z.dispatch({
            type: 'CURRENT_USER_UPDATE',
            user: (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, a.default.getCurrentUser(), c.body)
        });
    } catch (e) {
        return;
    }
}
function d() {
    i.Z.dispatch({ type: 'CLAN_SETUP_RESET' });
}
