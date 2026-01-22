n.d(t, { A: () => g }), n(896048), n(938796);
var r = n(665260),
    i = n(562465),
    l = n(10716),
    a = n(458664),
    s = n(587895),
    o = n(147964),
    c = n(954571),
    u = n(636401),
    d = n(90924),
    p = n(629471),
    f = n(569475),
    h = n(613057),
    A = n(652215);
let g = {
    [A.e$_.SEND_ANALYTICS_EVENT]: {
        validation: (e) =>
            (0, p.A)(e)
                .required()
                .keys({
                    event_name: e.string().required(),
                    event_properties: (0, p.A)(e).required(),
                }),
        handler(e) {
            var t;
            let {
                socket: n,
                args: { event_name: i, event_properties: l },
            } = e;
            (0, d.lG)(n.transport), (0, d.D2)(n.application);
            let o = n.application.id,
                p = (0, f.A)(),
                h = null == p ? void 0 : p.getGuildId(),
                g = s.A.getApplication(o);
            if (!(0, r.Lt)(null != (t = null == g ? void 0 : g.flags) ? t : 0, A.gfo.EMBEDDED_FIRST_PARTY))
                throw new u.A({ errorCode: A.Lw6.INVALID_COMMAND }, "This application cannot access this API");
            let m = (0, a.D)(o),
                b = {
                    activity_application_id: o,
                    activity_channel_type: null == p ? void 0 : p.type,
                    activity_guild_id: h,
                    activity_user_session_id: null == m ? void 0 : m.activityUserSessionId,
                };
            c.default.track(
                i,
                (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, b, l),
            );
        },
    },
    [A.e$_.GET_APPLICATION_TICKET]: {
        scope: h.hj,
        handler(e) {
            let { socket: t } = e,
                n = t.application.id;
            if (null == n) throw new u.A({ errorCode: A.Lw6.INVALID_COMMAND }, "No application.");
            return i.Bo.post({
                url: A.Rsh.APPLICATION_TICKET(n),
                body: { test_mode: o.A.inTestModeForApplication(n) || l.A.inDevModeForApplication(n) },
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((e) => {
                let { body: t } = e;
                return t;
            });
        },
    },
};
