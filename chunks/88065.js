n.d(t, { A: () => w }), n(938796);
var i = n(735438),
    r = n.n(i),
    a = n(179771),
    l = n(136722),
    s = n(52133),
    o = n(323073),
    d = n(587895),
    u = n(15285),
    c = n(260509),
    A = n(616356),
    h = n(734057),
    _ = n(696451),
    E = n(71393),
    p = n(430452),
    m = n(383501),
    g = n(287809),
    I = n(977997),
    C = n(636401),
    f = n(90924),
    T = n(592653),
    S = n(629471),
    N = n(511776),
    O = n(901898),
    L = n(639621),
    y = n(613057),
    v = n(652215);
let b = (e) => (0, S.A)(e).required().keys({ channel_id: e.string().required() });
function D(e) {
    let {
            args: { channel_id: t },
            socket: n,
        } = e,
        i = h.A.getChannel(t);
    if (null == i || !(0, f.B_)(i, n.application.id, n.authorization.scopes))
        throw new C.A({ errorCode: v.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
    if ((0, o.$v)(i)) throw new C.A({ errorCode: v.Lw6.INVALID_CHANNEL }, `Invalid nsfw channel id: ${i.id}`);
}
let R = (e) => (0, S.A)(e).keys({ channel_id: e.string().allow(null) });
function P(e) {
    let {
        args: { channel_id: t },
    } = e;
    if (null != t && null == h.A.getChannel(t))
        throw new C.A({ errorCode: v.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
}
let w = {
    [v.ZE4.GUILD_STATUS]: {
        scope: a.F.RPC,
        validation: (e) => (0, S.A)(e).required().keys({ guild_id: e.string().required() }),
        handler(e) {
            let {
                args: { guild_id: t },
            } = e;
            if (null == E.A.getGuild(t)) throw new C.A({ errorCode: v.Lw6.INVALID_GUILD }, `Invalid guild id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    a = E.A.getGuild(t);
                if (null == a) return;
                let l = { guild: { id: a.id, name: a.name, icon_url: (0, c.Iv)(a, 128) ?? null }, online: 0 };
                return r().isEqual(n, l) || i(l), l;
            };
        },
    },
    [v.ZE4.VOICE_STATE_CREATE]: {
        scope: { [y.sm.ANY]: [a.F.RPC, a.F.RPC_VOICE_READ] },
        validation: (e) => (0, S.A)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == h.A.getChannel(t))
                throw new C.A({ errorCode: v.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    a = h.A.getChannel(t);
                if (null == a) return;
                let l = a.getGuildId(),
                    s = Object.values(I.A.getVoiceStatesForChannel(a.id));
                return (
                    n &&
                        r()
                            .differenceBy(s, n, (e) => {
                                let { userId: t } = e;
                                return t;
                            })
                            .forEach((e) => i((0, f.qG)(l, a.id, e))),
                    s
                );
            };
        },
    },
    [v.ZE4.VOICE_STATE_DELETE]: {
        scope: { [y.sm.ANY]: [a.F.RPC, a.F.RPC_VOICE_READ] },
        validation: (e) => (0, S.A)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == h.A.getChannel(t))
                throw new C.A({ errorCode: v.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    a = h.A.getChannel(t);
                if (null == a) return;
                let l = a.getGuildId(),
                    s = Object.values(I.A.getVoiceStatesForChannel(a.id));
                return (
                    r()
                        .differenceBy(n, s, (e) => {
                            let { userId: t } = e;
                            return t;
                        })
                        .forEach((e) => i((0, f.qG)(l, a.id, e))),
                    s
                );
            };
        },
    },
    [v.ZE4.VOICE_STATE_UPDATE]: {
        scope: { [y.sm.ANY]: [a.F.RPC, a.F.RPC_VOICE_READ] },
        validation: (e) => (0, S.A)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == h.A.getChannel(t))
                throw new C.A({ errorCode: v.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    a = h.A.getChannel(t);
                if (null == a) return;
                let l = a.getGuildId(),
                    s = Object.values(I.A.getVoiceStatesForChannel(a.id)).map((e) => (0, f.qG)(l, a.id, e));
                return (
                    r()
                        .differenceWith(s, n, r().isEqual)
                        .forEach((e) => i(e)),
                    s
                );
            };
        },
    },
    [v.ZE4.VOICE_CONNECTION_STATUS]: {
        scope: { [y.sm.ANY]: [a.F.RPC, a.F.RPC_VOICE_READ] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = {
                    state: (0, f.SK)(m.A.getState()),
                    hostname: m.A.getHostname(),
                    pings: m.A.getPings(),
                    average_ping: m.A.getAveragePing(),
                    last_ping: m.A.getLastPing(),
                };
            return r().isEqual(i, t) || n(i), i;
        },
    },
    [v.ZE4.MESSAGE_CREATE]: { scope: a.F.RPC, validation: b, handler: D },
    [v.ZE4.MESSAGE_UPDATE]: { scope: a.F.RPC, validation: b, handler: D },
    [v.ZE4.MESSAGE_DELETE]: { scope: a.F.RPC, validation: b, handler: D },
    [v.ZE4.SPEAKING_START]: { scope: { [y.sm.ANY]: [a.F.RPC, a.F.RPC_VOICE_READ, y.hj] }, validation: R, handler: P },
    [v.ZE4.SPEAKING_STOP]: { scope: { [y.sm.ANY]: [a.F.RPC, a.F.RPC_VOICE_READ, y.hj] }, validation: R, handler: P },
    [v.ZE4.GUILD_CREATE]: { scope: a.F.RPC, handler() {} },
    [v.ZE4.CHANNEL_CREATE]: { scope: a.F.RPC, handler() {} },
    [v.ZE4.GAME_JOIN]: { scope: { [y.sm.ANY]: [a.F.RPC, y.hj] }, handler() {} },
    [v.ZE4.GAME_SPECTATE]: { scope: { [y.sm.ANY]: [a.F.RPC, y.hj] }, handler() {} },
    [v.ZE4.ACTIVITY_JOIN]: { scope: { [y.sm.ANY]: [a.F.RPC, y.VH, y.hj] }, handler() {} },
    [v.ZE4.ACTIVITY_JOIN_REQUEST]: { scope: { [y.sm.ANY]: [a.F.RPC, y.hj] }, handler() {} },
    [v.ZE4.ACTIVITY_SPECTATE]: { scope: { [y.sm.ANY]: [a.F.RPC, y.VH, y.hj] }, handler() {} },
    [v.ZE4.ACTIVITY_INVITE]: { scope: { [y.sm.ANY]: [a.F.RPC, y.hj] }, handler() {} },
    [v.ZE4.ACTIVITY_PIP_MODE_UPDATE]: { scope: void 0, handler() {} },
    [v.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE]: { scope: void 0, handler() {} },
    [v.ZE4.FRAME_LAYOUT_MODE_UPDATE]: { scope: void 0, handler() {} },
    [v.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: T.t$,
    [v.ZE4.THERMAL_STATE_UPDATE]: { scope: { [y.sm.ANY]: [y.VH] }, handler() {} },
    [v.ZE4.ORIENTATION_UPDATE]: { scope: { [y.sm.ANY]: [y.VH] }, handler() {} },
    [v.ZE4.VOICE_CHANNEL_SELECT]: { scope: a.F.RPC, handler() {} },
    [v.ZE4.NOTIFICATION_CREATE]: { scope: { [y.sm.ALL]: [a.F.RPC, a.F.RPC_NOTIFICATIONS_READ] }, handler() {} },
    [v.ZE4.RELATIONSHIP_UPDATE]: {
        scope: a.F.RELATIONSHIPS_READ,
        handler(e) {
            let { socket: t } = e;
            if (l.zy(l.iu(t.application.flags ?? 0), l.iu(v.gfo.DISABLE_RELATIONSHIPS_ACCESS)))
                throw new C.A({ errorCode: v.Lw6.INVALID_PERMISSIONS }, "Missing Permissions");
        },
    },
    [v.ZE4.CURRENT_USER_UPDATE]: {
        scope: { [y.sm.ANY]: [y.hj, a.F.IDENTIFY] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = { currentUser: g.default.getCurrentUser() };
            return null == i.currentUser || (null != t && (0, s.A)(i, t)) || n((0, L.A)(i.currentUser)), i;
        },
    },
    [v.ZE4.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: { [y.sm.ALL]: [a.F.IDENTIFY, a.F.GUILDS_MEMBERS_READ] },
        handler(e) {
            let {
                args: { guild_id: t },
            } = e;
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = { currentGuildMember: _.Ay.getSelfMember(t) };
                return (
                    null == r.currentGuildMember || (null != n && (0, s.A)(r, n)) || i((0, O.A)(r.currentGuildMember)),
                    r
                );
            };
        },
    },
    [v.ZE4.ENTITLEMENT_CREATE]: { scope: { [y.sm.ANY]: [y.hj, y.VH] }, handler() {} },
    [v.ZE4.ENTITLEMENT_DELETE]: { scope: { [y.sm.ANY]: [y.hj, y.VH] }, handler() {} },
    [v.ZE4.SCREENSHARE_STATE_UPDATE]: {
        scope: { [y.sm.ALL]: [y.hj, a.F.RPC_SCREENSHARE_READ] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = A.A.getStreamerActiveStreamMetadata(),
                a = i?.pid != null ? u.Ay.getGameForPID(i.pid) : null,
                l = a?.id != null ? d.A.getApplication(a.id) : null,
                s = null != l ? (0, N.A)(l) : null,
                o = i?.sourceName,
                c = {
                    active: null != i,
                    pid: i?.pid ?? null,
                    application: (null != s ?? null != o) ? { name: o } : null,
                };
            return r().isEqual(c, t) || n(c), c;
        },
    },
    [v.ZE4.VIDEO_STATE_UPDATE]: {
        scope: { [y.sm.ALL]: [y.hj, a.F.RPC_VIDEO_READ] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = { active: p.Ay.isVideoEnabled() };
            return r().isEqual(i, t) || n(i), i;
        },
    },
    [v.ZE4.AUTHORIZE_REQUEST]: { scope: void 0, handler() {} },
};
