n.d(t, { Z: () => f });
var r = n(24917),
    i = n(106351),
    l = n(252258),
    a = n(243814),
    o = n(45792),
    s = n(566620),
    c = n(317381),
    u = n(592125),
    d = n(600027),
    p = n(186901),
    h = n(231338);
let f = {
    [h.Et.INVITE_USER_EMBEDDED]: (0, o.S)(h.Et.INVITE_USER_EMBEDDED, {
        scope: { [p.Gp.ANY]: [a.x.RELATIONSHIPS_READ] },
        async handler(e) {
            let t,
                {
                    socket: n,
                    args: { user_id: a, content: o }
                } = e,
                p = n.application.id;
            if (null == p) throw new r.O({ errorCode: h.lT.INVALID_COMMAND }, 'No application.');
            let f = c.ZP.getConnectedActivityLocation();
            if (null == f) throw new r.O({ errorCode: h.lT.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure an activity was set using setActivity.');
            switch (f.kind) {
                case l.E.GUILD_CHANNEL:
                case l.E.GUILD_CHANNEL_MESSAGE:
                    t = (0, d.T)().channel;
                    break;
                case l.E.PRIVATE_CHANNEL:
                case l.E.PRIVATE_CHANNEL_MESSAGE:
                    let g = u.Z.getChannel(f.channel_id);
                    if (null == g) throw new r.O({ errorCode: h.lT.INVALID_CHANNEL }, 'Invalid channel');
                    if (g.type === i.d.DM) throw new r.O({ errorCode: h.lT.INVALID_CHANNEL }, 'Cannot send invite to a DM');
                    t = g;
                    break;
                default:
                    throw new r.O({ errorCode: h.lT.NO_ELIGIBLE_ACTIVITY }, 'Unsupported activity location');
            }
            try {
                await (0, s.pu)({
                    channelId: t.id,
                    applicationId: p,
                    userId: a,
                    prefixedContent: o,
                    location: 'RPC_ACTIVITY_INVITE_USER'
                });
            } catch (e) {
                throw new r.O({ errorCode: h.lT.UNKNOWN_ERROR }, 'Failed to invite user');
            }
        }
    })
};
