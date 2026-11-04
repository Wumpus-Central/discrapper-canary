var i = n(149468),
    a = n(446600),
    _ = n(383233),
    r = n(619019),
    d = n(537975),
    l = n(17372),
    o = n(369053),
    u = n(882276),
    s = n(652215);
function c(e, t) {
    i.Ay.trackWithMetadata(s.HAw.IAR_MODAL_OPEN, { report_type: e, ...t });
}
n.d(
    t,
    {},
    {
        GJ: function (e, t, n, i) {
            (0, u.T)(
                { name: l.t0.WIDGET, widget_id: t.id ?? "", user_id: e, widget: t },
                {},
                { onSubmit: n, appContext: i },
            );
        },
        LF: async function (e, t, n) {
            try {
                (await (0, o.gP)({ name: l.t0.MESSAGE, record: e }, { variant: "safety_alerts_headless_v1" }), t?.());
            } catch {
                n?.();
            }
        },
        NW: function (e, t, n, i) {
            (c(l.t0.USER, { reported_user_id: e.id }),
                (0, u.T)({ name: l.t0.USER, record: e, contextualGuildId: t }, {}, { onSubmit: n, appContext: i }));
        },
        RR: function (e, t, n, i) {
            (c(l.t0.USER, { reported_user_id: e.id }),
                (0, u.T)(
                    { name: l.t0.USER, record: e, contextualGuildId: t },
                    { variant: "staff" },
                    { onSubmit: n, isEligibleForFeedback: !1, appContext: i },
                ));
        },
        RV: function (e, t, n) {
            (c(l.t0.GUILD, { guild_id: e.id }),
                (0, u.T)({ name: l.t0.GUILD, record: e }, { variant: "staff" }, { onSubmit: n }));
        },
        Rj: function (e, t, n) {
            (c(l.t0.MESSAGE, { message_id: e.id, channel_id: e.channel_id }),
                (0, u.T)({ name: l.t0.MESSAGE, record: e }, { variant: "staff" }, { onSubmit: n }));
        },
        V2: function (e, t, n, i) {
            (c(l.t0.MESSAGE, { message_id: e.id, channel_id: e.channel_id }),
                (0, u.T)({ name: l.t0.MESSAGE, record: e }, {}, { onSubmit: n, onClose: i }));
        },
        V3: function (e, t) {
            let n = (0, d.dangerouslyConstructGuildRecordFromUntypedObject)({});
            (c(l.tY.GUILD, { guild_id: n.id }),
                (0, u.T)(
                    { name: l.tY.GUILD, record: n },
                    {},
                    { onClose: t, isEligibleForFeedback: !1, isAuthenticated: !1, emailToken: e },
                ));
        },
        _Y: function (e, t) {
            (c(l.tY.MEDIA_TAKEDOWN, {}),
                (0, u.T)(
                    { name: l.tY.MEDIA_TAKEDOWN },
                    {},
                    { onClose: t, isEligibleForFeedback: !1, isAuthenticated: !1, emailToken: e },
                ));
        },
        b8: function (e, t) {
            (c(l.t0.FIRST_DM, { message_id: e.id, channel_id: e.channel_id }),
                (0, u.T)({ name: l.t0.FIRST_DM, record: e }, {}, { onSubmit: t, isEligibleForFeedback: !1 }));
        },
        bM: function (e, t) {
            let n = new _.Ay({});
            (c(l.tY.MESSAGE, { message_id: void 0, channel_id: void 0 }),
                (0, u.T)(
                    { name: l.tY.MESSAGE, record: n },
                    {},
                    { onClose: t, isEligibleForFeedback: !1, isAuthenticated: !1, emailToken: e },
                ));
        },
        dy: function (e, t) {
            (0, u.T)({ name: l.Yw.MESSAGE, record: e }, {}, { onSubmit: t, isEligibleForFeedback: !1 });
        },
        jJ: function (e, t) {
            (c(l.t0.MESSAGE, { message_id: e.id, channel_id: e.channel_id }),
                (0, u.T)({ name: l.t0.MESSAGE, record: e }, { variant: "safety_alerts_v1" }, { onSubmit: t }));
        },
        nQ: function (e, t) {
            let n = new r.A({});
            (c(l.tY.USER, { reported_user_id: n.id }),
                (0, u.T)(
                    { name: l.tY.USER, record: n },
                    {},
                    { onClose: t, isEligibleForFeedback: !1, isAuthenticated: !1, emailToken: e },
                ));
        },
        pb: function (e, t) {
            let n = a.A.getStageInstanceByChannel(e.id);
            null != n &&
                (c(l.t0.STAGE_CHANNEL, { stage_instance_id: n.id, channel_id: n.channel_id, guild_id: n.guild_id }),
                (0, u.T)({ name: l.t0.STAGE_CHANNEL, record: n }, {}, { onSubmit: t }));
        },
        r3: function (e) {
            let {
                application: t,
                entrypoint: n,
                contextualGuildId: a,
                contextualChannelId: _,
                onSubmit: r,
                appContext: d,
            } = e;
            (i.Ay.trackWithMetadata(s.HAw.REPORT_APPLICATION_CLICKED, { application_id: t.id, location: n }),
                c(l.t0.APPLICATION, { application_id: t.id, guild_id: a, channel_id: _ }),
                (0, u.T)(
                    { name: l.t0.APPLICATION, record: t, contextualGuildId: a, contextualChannelId: _, entrypoint: n },
                    {},
                    { onSubmit: r, appContext: d },
                ));
        },
        sJ: function (e, t) {
            (c(l.t0.GUILD_DIRECTORY_ENTRY, { channel_id: e.channelId, guild_id: e.guildId }),
                (0, u.T)({ name: l.t0.GUILD_DIRECTORY_ENTRY, record: e }, {}, { onSubmit: t }));
        },
        tJ: async function (e, t) {
            try {
                (await (0, o.gP)({ name: l.t0.FIRST_DM, record: e }, { variant: "_first_dm_ham_v1" }), t?.());
            } catch {}
        },
        uA: function (e, t) {
            (c(l.t0.GUILD_SCHEDULED_EVENT, {
                guild_scheduled_event_id: e.id,
                guild_id: e.guild_id,
                channel_id: e.channel_id ?? void 0,
            }),
                (0, u.T)({ name: l.t0.GUILD_SCHEDULED_EVENT, record: e }, {}, { onSubmit: t }));
        },
    },
);
