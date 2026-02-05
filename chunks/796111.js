n.d(t, { A: () => p }), n(938796);
var i = n(665260),
    r = n(562465),
    a = n(10716),
    l = n(458664),
    s = n(587895),
    o = n(147964),
    d = n(954571),
    c = n(636401),
    u = n(90924),
    A = n(629471),
    h = n(569475),
    _ = n(613057),
    m = n(652215);
let p = {
    [m.e$_.SEND_ANALYTICS_EVENT]: {
        validation: (e) =>
            (0, A.A)(e)
                .required()
                .keys({ event_name: e.string().required(), event_properties: (0, A.A)(e).required() }),
        handler(e) {
            let {
                socket: t,
                args: { event_name: n, event_properties: r },
            } = e;
            (0, u.lG)(t.transport), (0, u.D2)(t.application);
            let a = t.application.id,
                o = (0, h.A)(),
                A = o?.getGuildId(),
                _ = s.A.getApplication(a);
            if (!(0, i.Lt)(_?.flags ?? 0, m.gfo.EMBEDDED_FIRST_PARTY))
                throw new c.A({ errorCode: m.Lw6.INVALID_COMMAND }, "This application cannot access this API");
            let p = (0, l.D)(a),
                g = {
                    activity_application_id: a,
                    activity_channel_type: o?.type,
                    activity_guild_id: A,
                    activity_user_session_id: p?.activityUserSessionId,
                };
            d.default.track(n, { ...g, ...r });
        },
    },
    [m.e$_.GET_APPLICATION_TICKET]: {
        scope: _.hj,
        handler(e) {
            let { socket: t } = e,
                n = t.application.id;
            if (null == n) throw new c.A({ errorCode: m.Lw6.INVALID_COMMAND }, "No application.");
            return r.Bo.post({
                url: m.Rsh.APPLICATION_TICKET(n),
                body: { test_mode: o.A.inTestModeForApplication(n) || a.A.inDevModeForApplication(n) },
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
