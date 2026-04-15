n.d(t, { A: () => g });
var i = n(562465),
    l = n(10716),
    a = n(458664),
    r = n(587895),
    s = n(20015),
    o = n(147964),
    d = n(954571),
    c = n(636401),
    u = n(90924),
    A = n(629471),
    h = n(569475),
    _ = n(613057),
    m = n(652215);
let g = {
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
            let l = t.application.id,
                o = (0, h.A)(),
                A = o?.getGuildId(),
                _ = r.A.getApplication(l);
            if (!(0, s.n)(_, m.gfo.EMBEDDED_FIRST_PARTY))
                throw new c.A({ errorCode: m.Lw6.INVALID_COMMAND }, "This application cannot access this API");
            let g = (0, a.D)(l),
                p = {
                    activity_application_id: l,
                    activity_channel_type: o?.type,
                    activity_guild_id: A,
                    activity_user_session_id: g?.activityUserSessionId,
                };
            d.default.track(n, { ...p, ...i });
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
