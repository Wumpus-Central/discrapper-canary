n.d(t, { Z: () => g });
var r = n(24917),
    i = n(115911),
    l = n(106351),
    o = n(243814),
    a = n(45792),
    s = n(566620),
    c = n(317381),
    u = n(592125),
    d = n(600027),
    p = n(186901),
    h = n(231338);
let g = {
    [h.Et.INVITE_USER_EMBEDDED]: (0, a.S)(h.Et.INVITE_USER_EMBEDDED, {
        scope: { [p.Gp.ANY]: [o.x.RELATIONSHIPS_READ] },
        async handler(e) {
            let t,
                {
                    socket: n,
                    args: { user_id: o, content: a }
                } = e,
                p = n.application.id;
            if (null == p) throw new r.O({ errorCode: h.lT.INVALID_COMMAND }, 'No application.');
            let g = c.ZP.getConnectedActivityLocation();
            if (null == g) throw new r.O({ errorCode: h.lT.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure an activity was set using setActivity.');
            switch (g.kind) {
                case i.X.GUILD_CHANNEL:
                case i.X.GUILD_CHANNEL_MESSAGE:
                    t = (0, d.T)().channel;
                    break;
                case i.X.PRIVATE_CHANNEL:
                case i.X.PRIVATE_CHANNEL_MESSAGE:
                    let f = u.Z.getChannel(g.channel_id);
                    if (null == f) throw new r.O({ errorCode: h.lT.INVALID_CHANNEL }, 'Invalid channel');
                    if (f.type === l.d.DM) throw new r.O({ errorCode: h.lT.INVALID_CHANNEL }, 'Cannot send invite to a DM');
                    t = f;
                    break;
                default:
                    throw new r.O({ errorCode: h.lT.NO_ELIGIBLE_ACTIVITY }, 'Unsupported activity location');
            }
            try {
                await (0, s.pu)({
                    channelId: t.id,
                    applicationId: p,
                    userId: o,
                    prefixedContent: a,
                    location: 'RPC_ACTIVITY_INVITE_USER'
                });
            } catch (e) {
                throw new r.O({ errorCode: h.lT.UNKNOWN_ERROR }, 'Failed to invite user');
            }
        }
    })
};
