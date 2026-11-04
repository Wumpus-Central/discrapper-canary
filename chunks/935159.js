var i = p(73153);
p.d(
    E,
    {},
    {
        Lx: function (t) {
            i.h.dispatch({ type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE", eventId: t });
        },
        Nt: function (t) {
            i.h.dispatch({ type: "EVENT_BANNER_DISMISS", eventId: t });
        },
        iF: function (t) {
            let { eventId: E, stageId: p } = t;
            (null != E || null != p) && i.h.dispatch({ type: "LIVE_CHANNEL_NOTICE_HIDE", eventId: E, stageId: p });
        },
        pE: function (t) {
            i.h.dispatch({ type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN", guildEventId: t });
        },
    },
);
