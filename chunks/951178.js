n(938796);
let i = Object.freeze({
        APP_CHANNEL: 1,
        VOICE_CHANNEL: 2,
        PROFILE_WIDGET: 3,
        AUTOMOD: 4,
        BOT: 5,
        APPLICATION_COMMANDS: 6,
        OVERLAY: 7,
        ACTIVITY: 8,
    }),
    r = Object.freeze({ GUILD_COLLABORATION: 1, PUBLIC: 2 });
n.d(
    t,
    {},
    {
        Hv: function (e) {
            let t = e.supported_surfaces ?? [];
            return t.includes(i.APP_CHANNEL) || ("guild" === e.install_scope && 0 === t.length);
        },
        IU: function (e) {
            return null != e.flags;
        },
        Jr: function (e) {
            return null != e.guild_ids
                ? e.guild_ids
                : "guild" === e.install_scope && null != e.guild_id
                  ? [e.guild_id]
                  : [];
        },
        RX: function (e) {
            return null != e.collaborator_role_ids;
        },
        XE: function (e) {
            return ((e.flags ?? 0) & r.PUBLIC) != 0;
        },
        Zh: r,
        _7: function (e) {
            return null == e.preview_application_id || e.preview_application_id !== e.application_id;
        },
        pL: function (e) {
            return ((e.flags ?? 0) & r.GUILD_COLLABORATION) != 0;
        },
        q7: i,
    },
);
