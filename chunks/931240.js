n.d(t, {
    LX: () => d,
    nE: () => c
}),
    n(953529),
    n(388685);
var i = n(544891),
    r = n(570140);
n(479531);
var s = n(314897),
    l = n(594174),
    a = n(970606);
n(308083);
var o = n(981631);
async function c(e, t, n) {
    try {
        null != e &&
            !0 === t &&
            (0, a.hx)({
                guildId: e,
                userId: s.default.getId(),
                source: n
            });
        let c = await i.tn.put({
            url: o.ANM.USER_SET_CLAN_IDENTITY,
            body: {
                identity_guild_id: e,
                identity_enabled: t
            },
            rejectWithError: !1
        });
        r.Z.dispatch({
            type: 'CURRENT_USER_UPDATE',
            user: (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, l.default.getCurrentUser(), c.body)
        });
    } catch (e) {
        return;
    }
}
function d() {
    r.Z.dispatch({ type: 'CLAN_SETUP_RESET' });
}
