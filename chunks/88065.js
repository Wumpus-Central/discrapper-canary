n.d(t, {
    A: () => L,
}),
    n(896048),
    n(938796);
var r = n(735438),
    i = n.n(r),
    l = n(179771),
    a = n(136722),
    s = n(52133),
    o = n(323073),
    c = n(587895),
    u = n(15285),
    d = n(260509),
    p = n(616356),
    f = n(734057),
    h = n(696451),
    A = n(71393),
    g = n(430452),
    m = n(383501),
    b = n(287809),
    _ = n(977997),
    E = n(636401),
    O = n(90924),
    y = n(592653),
    I = n(629471),
    v = n(511776),
    S = n(901898),
    C = n(639621),
    N = n(613057),
    T = n(652215);
let j = (e) =>
    (0, I.A)(e).required().keys({
        channel_id: e.string().required(),
    });

function x(e) {
    let {
            args: { channel_id: t },
            socket: n,
        } = e,
        r = f.A.getChannel(t);
    if (null == r || !(0, O.B_)(r, n.application.id, n.authorization.scopes))
        throw new E.A(
            {
                errorCode: T.Lw6.INVALID_CHANNEL,
            },
            "Invalid channel id: ".concat(t),
        );
    if ((0, o.$v)(r))
        throw new E.A(
            {
                errorCode: T.Lw6.INVALID_CHANNEL,
            },
            "Invalid nsfw channel id: ".concat(r.id),
        );
}
let P = (e) =>
    (0, I.A)(e).keys({
        channel_id: e.string().allow(null),
    });

function w(e) {
    let {
        args: { channel_id: t },
    } = e;
    if (null != t && null == f.A.getChannel(t))
        throw new E.A(
            {
                errorCode: T.Lw6.INVALID_CHANNEL,
            },
            "Invalid channel id: ".concat(t),
        );
}
let L = {
    [T.ZE4.GUILD_STATUS]: {
        scope: l.F.RPC,
        validation: (e) =>
            (0, I.A)(e).required().keys({
                guild_id: e.string().required(),
            }),
        handler(e) {
            let {
                args: { guild_id: t },
            } = e;
            if (null == A.A.getGuild(t))
                throw new E.A(
                    {
                        errorCode: T.Lw6.INVALID_GUILD,
                    },
                    "Invalid guild id: ".concat(t),
                );
            return (e) => {
                var n;
                let { prevState: r, dispatch: l } = e,
                    a = A.A.getGuild(t);
                if (null == a) return;
                let s = {
                    guild: {
                        id: a.id,
                        name: a.name,
                        icon_url: null != (n = (0, d.Iv)(a, 128)) ? n : null,
                    },
                    online: 0,
                };
                return i().isEqual(r, s) || l(s), s;
            };
        },
    },
    [T.ZE4.VOICE_STATE_CREATE]: {
        scope: {
            [N.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ],
        },
        validation: (e) =>
            (0, I.A)(e).required().keys({
                channel_id: e.string().required(),
            }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == f.A.getChannel(t))
                throw new E.A(
                    {
                        errorCode: T.Lw6.INVALID_CHANNEL,
                    },
                    "Invalid channel id: ".concat(t),
                );
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = f.A.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    s = Object.values(_.A.getVoiceStatesForChannel(l.id));
                return (
                    n &&
                        i()
                            .differenceBy(s, n, (e) => {
                                let { userId: t } = e;
                                return t;
                            })
                            .forEach((e) => r((0, O.qG)(a, l.id, e))),
                    s
                );
            };
        },
    },
    [T.ZE4.VOICE_STATE_DELETE]: {
        scope: {
            [N.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ],
        },
        validation: (e) =>
            (0, I.A)(e).required().keys({
                channel_id: e.string().required(),
            }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == f.A.getChannel(t))
                throw new E.A(
                    {
                        errorCode: T.Lw6.INVALID_CHANNEL,
                    },
                    "Invalid channel id: ".concat(t),
                );
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = f.A.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    s = Object.values(_.A.getVoiceStatesForChannel(l.id));
                return (
                    i()
                        .differenceBy(n, s, (e) => {
                            let { userId: t } = e;
                            return t;
                        })
                        .forEach((e) => r((0, O.qG)(a, l.id, e))),
                    s
                );
            };
        },
    },
    [T.ZE4.VOICE_STATE_UPDATE]: {
        scope: {
            [N.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ],
        },
        validation: (e) =>
            (0, I.A)(e).required().keys({
                channel_id: e.string().required(),
            }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == f.A.getChannel(t))
                throw new E.A(
                    {
                        errorCode: T.Lw6.INVALID_CHANNEL,
                    },
                    "Invalid channel id: ".concat(t),
                );
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = f.A.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    s = Object.values(_.A.getVoiceStatesForChannel(l.id)).map((e) => (0, O.qG)(a, l.id, e));
                return (
                    i()
                        .differenceWith(s, n, i().isEqual)
                        .forEach((e) => r(e)),
                    s
                );
            };
        },
    },
    [T.ZE4.VOICE_CONNECTION_STATUS]: {
        scope: {
            [N.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ],
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = {
                    state: (0, O.SK)(m.A.getState()),
                    hostname: m.A.getHostname(),
                    pings: m.A.getPings(),
                    average_ping: m.A.getAveragePing(),
                    last_ping: m.A.getLastPing(),
                };
            return i().isEqual(r, t) || n(r), r;
        },
    },
    [T.ZE4.MESSAGE_CREATE]: {
        scope: l.F.RPC,
        validation: j,
        handler: x,
    },
    [T.ZE4.MESSAGE_UPDATE]: {
        scope: l.F.RPC,
        validation: j,
        handler: x,
    },
    [T.ZE4.MESSAGE_DELETE]: {
        scope: l.F.RPC,
        validation: j,
        handler: x,
    },
    [T.ZE4.SPEAKING_START]: {
        scope: {
            [N.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ, N.hj],
        },
        validation: P,
        handler: w,
    },
    [T.ZE4.SPEAKING_STOP]: {
        scope: {
            [N.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ, N.hj],
        },
        validation: P,
        handler: w,
    },
    [T.ZE4.GUILD_CREATE]: {
        scope: l.F.RPC,
        handler() {},
    },
    [T.ZE4.CHANNEL_CREATE]: {
        scope: l.F.RPC,
        handler() {},
    },
    [T.ZE4.GAME_JOIN]: {
        scope: {
            [N.sm.ANY]: [l.F.RPC, N.hj],
        },
        handler() {},
    },
    [T.ZE4.GAME_SPECTATE]: {
        scope: {
            [N.sm.ANY]: [l.F.RPC, N.hj],
        },
        handler() {},
    },
    [T.ZE4.ACTIVITY_JOIN]: {
        scope: {
            [N.sm.ANY]: [l.F.RPC, N.VH, N.hj],
        },
        handler() {},
    },
    [T.ZE4.ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [N.sm.ANY]: [l.F.RPC, N.hj],
        },
        handler() {},
    },
    [T.ZE4.ACTIVITY_SPECTATE]: {
        scope: {
            [N.sm.ANY]: [l.F.RPC, N.VH, N.hj],
        },
        handler() {},
    },
    [T.ZE4.ACTIVITY_INVITE]: {
        scope: {
            [N.sm.ANY]: [l.F.RPC, N.hj],
        },
        handler() {},
    },
    [T.ZE4.ACTIVITY_PIP_MODE_UPDATE]: {
        scope: void 0,
        handler() {},
    },
    [T.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        scope: void 0,
        handler() {},
    },
    [T.ZE4.FRAME_LAYOUT_MODE_UPDATE]: {
        scope: void 0,
        handler() {},
    },
    [T.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: y.t$,
    [T.ZE4.THERMAL_STATE_UPDATE]: {
        scope: {
            [N.sm.ANY]: [N.VH],
        },
        handler() {},
    },
    [T.ZE4.ORIENTATION_UPDATE]: {
        scope: {
            [N.sm.ANY]: [N.VH],
        },
        handler() {},
    },
    [T.ZE4.VOICE_CHANNEL_SELECT]: {
        scope: l.F.RPC,
        handler() {},
    },
    [T.ZE4.NOTIFICATION_CREATE]: {
        scope: {
            [N.sm.ALL]: [l.F.RPC, l.F.RPC_NOTIFICATIONS_READ],
        },
        handler() {},
    },
    [T.ZE4.RELATIONSHIP_UPDATE]: {
        scope: l.F.RELATIONSHIPS_READ,
        handler(e) {
            var t;
            let { socket: n } = e;
            if (a.zy(a.iu(null != (t = n.application.flags) ? t : 0), a.iu(T.gfo.DISABLE_RELATIONSHIPS_ACCESS)))
                throw new E.A(
                    {
                        errorCode: T.Lw6.INVALID_PERMISSIONS,
                    },
                    "Missing Permissions",
                );
        },
    },
    [T.ZE4.CURRENT_USER_UPDATE]: {
        scope: {
            [N.sm.ANY]: [N.hj, l.F.IDENTIFY],
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = {
                    currentUser: b.default.getCurrentUser(),
                };
            return null == r.currentUser || (null != t && (0, s.A)(r, t)) || n((0, C.A)(r.currentUser)), r;
        },
    },
    [T.ZE4.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: {
            [N.sm.ALL]: [l.F.IDENTIFY, l.F.GUILDS_MEMBERS_READ],
        },
        handler(e) {
            let {
                args: { guild_id: t },
            } = e;
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    i = {
                        currentGuildMember: h.Ay.getSelfMember(t),
                    };
                return (
                    null == i.currentGuildMember || (null != n && (0, s.A)(i, n)) || r((0, S.A)(i.currentGuildMember)),
                    i
                );
            };
        },
    },
    [T.ZE4.ENTITLEMENT_CREATE]: {
        scope: {
            [N.sm.ANY]: [N.hj, N.VH],
        },
        handler() {},
    },
    [T.ZE4.ENTITLEMENT_DELETE]: {
        scope: {
            [N.sm.ANY]: [N.hj, N.VH],
        },
        handler() {},
    },
    [T.ZE4.SCREENSHARE_STATE_UPDATE]: {
        scope: {
            [N.sm.ALL]: [N.hj, l.F.RPC_SCREENSHARE_READ],
        },
        handler: () => (e) => {
            var t;
            let { prevState: n, dispatch: r } = e,
                l = p.A.getStreamerActiveStreamMetadata(),
                a = (null == l ? void 0 : l.pid) != null ? u.Ay.getGameForPID(l.pid) : null,
                s = (null == a ? void 0 : a.id) != null ? c.A.getApplication(a.id) : null,
                o = null != s ? (0, v.A)(s) : null,
                d = null == l ? void 0 : l.sourceName,
                f = {
                    active: null != l,
                    pid: null != (t = null == l ? void 0 : l.pid) ? t : null,
                    application:
                        null != o
                            ? {
                                  name: d,
                              }
                            : null,
                };
            return i().isEqual(f, n) || r(f), f;
        },
    },
    [T.ZE4.VIDEO_STATE_UPDATE]: {
        scope: {
            [N.sm.ALL]: [N.hj, l.F.RPC_VIDEO_READ],
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = {
                    active: g.A.isVideoEnabled(),
                };
            return i().isEqual(r, t) || n(r), r;
        },
    },
    [T.ZE4.AUTHORIZE_REQUEST]: {
        scope: void 0,
        handler() {},
    },
};
