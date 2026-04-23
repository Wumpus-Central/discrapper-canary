n.d(t, { A: () => E });
var i = n(562465),
    r = n(458664),
    a = n(587895),
    l = n(20015),
    s = n(977445),
    o = n(954571),
    d = n(636401),
    u = n(90924),
    c = n(629471),
    A = n(569475),
    h = n(613057),
    _ = n(652215);
let E = {
    [_.e$_.SEND_ANALYTICS_EVENT]: {
        validation: (e) =>
            (0, c.A)(e)
                .required()
                .keys({ event_name: e.string().required(), event_properties: (0, c.A)(e).required() }),
        handler(e) {
            let {
                socket: t,
                args: { event_name: n, event_properties: i },
            } = e;
            (0, u.lG)(t.transport), (0, u.D2)(t.application);
            let s = t.application.id,
                c = (0, A.A)(),
                h = c?.getGuildId(),
                E = a.A.getApplication(s);
            if (!(0, l.n)(E, _.gfo.EMBEDDED_FIRST_PARTY))
                throw new d.A({ errorCode: _.Lw6.INVALID_COMMAND }, "This application cannot access this API");
            let p = (0, r.D)(s),
                m = {
                    activity_application_id: s,
                    activity_channel_type: c?.type,
                    activity_guild_id: h,
                    activity_user_session_id: p?.activityUserSessionId,
                };
            o.default.track(n, { ...m, ...i });
        },
    },
    [_.e$_.GET_APPLICATION_TICKET]: {
        scope: h.hj,
        handler(e) {
            let { socket: t } = e,
                n = t.application.id;
            if (null == n) throw new d.A({ errorCode: _.Lw6.INVALID_COMMAND }, "No application.");
            return i.Bo.post({
                url: _.Rsh.APPLICATION_TICKET(n),
                body: { test_mode: (0, s.F)(n) },
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
