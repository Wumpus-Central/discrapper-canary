n.d(t, { Z: () => p });
var i = n(24917),
    l = n(115911),
    r = n(106351),
    a = n(243814),
    s = n(45792),
    o = n(566620),
    d = n(317381),
    c = n(592125),
    u = n(600027),
    h = n(186901),
    m = n(231338);
let p = {
    [m.Et.INVITE_USER_EMBEDDED]: (0, s.S)(m.Et.INVITE_USER_EMBEDDED, {
        scope: { [h.Gp.ANY]: [a.x.RELATIONSHIPS_READ] },
        async handler(e) {
            let t,
                {
                    socket: n,
                    args: { user_id: a, content: s }
                } = e,
                h = n.application.id;
            if (null == h) throw new i.O({ errorCode: m.lT.INVALID_COMMAND }, 'No application.');
            let p = d.ZP.getConnectedActivityLocation();
            if (null == p) throw new i.O({ errorCode: m.lT.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure an activity was set using setActivity.');
            switch (p.kind) {
                case l.X.GUILD_CHANNEL:
                case l.X.GUILD_CHANNEL_MESSAGE:
                    t = (0, u.T)().channel;
                    break;
                case l.X.PRIVATE_CHANNEL:
                case l.X.PRIVATE_CHANNEL_MESSAGE:
                    let g = c.Z.getChannel(p.channel_id);
                    if (null == g) throw new i.O({ errorCode: m.lT.INVALID_CHANNEL }, 'Invalid channel');
                    if (g.type === r.d.DM) throw new i.O({ errorCode: m.lT.INVALID_CHANNEL }, 'Cannot send invite to a DM');
                    t = g;
                    break;
                default:
                    throw new i.O({ errorCode: m.lT.NO_ELIGIBLE_ACTIVITY }, 'Unsupported activity location');
            }
            try {
                await (0, o.pu)({
                    channelId: t.id,
                    applicationId: h,
                    userId: a,
                    prefixedContent: s,
                    location: 'RPC_ACTIVITY_INVITE_USER'
                });
            } catch {
                throw new i.O({ errorCode: m.lT.UNKNOWN_ERROR }, 'Failed to invite user');
            }
        }
    })
};
