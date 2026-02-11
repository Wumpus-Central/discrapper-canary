n.d(t, { A: () => p });
var i = n(562465),
    r = n(10716),
    a = n(458664),
    l = n(587895),
    s = n(20015),
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
                args: { event_name: n, event_properties: i },
            } = e;
            (0, u.lG)(t.transport), (0, u.D2)(t.application);
            let r = t.application.id,
                o = (0, h.A)(),
                A = o?.getGuildId(),
                _ = l.A.getApplication(r);
            if (!(0, s.n)(_, m.gfo.EMBEDDED_FIRST_PARTY))
                throw new c.A({ errorCode: m.Lw6.INVALID_COMMAND }, "This application cannot access this API");
            let p = (0, a.D)(r),
                g = {
                    activity_application_id: r,
                    activity_channel_type: o?.type,
                    activity_guild_id: A,
                    activity_user_session_id: p?.activityUserSessionId,
                };
            d.default.track(n, { ...g, ...i });
        },
    },
    [m.e$_.GET_APPLICATION_TICKET]: {
        scope: _.hj,
        handler(e) {
            let { socket: t } = e,
                n = t.application.id;
            if (null == n) throw new c.A({ errorCode: m.Lw6.INVALID_COMMAND }, "No application.");
            return i.Bo.post({
                url: m.Rsh.APPLICATION_TICKET(n),
                body: { test_mode: o.A.inTestModeForApplication(n) || r.A.inDevModeForApplication(n) },
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
