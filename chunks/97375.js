n.d(t, { Z: () => h });
var r = n(24917),
    i = n(106351),
    l = n(252258),
    a = n(243814),
    s = n(45792),
    o = n(566620),
    c = n(317381),
    u = n(592125),
    d = n(600027),
    p = n(186901),
    f = n(981631),
    m = n(231338);
let h = {
    [m.Et.INVITE_USER_EMBEDDED]: (0, s.S)(m.Et.INVITE_USER_EMBEDDED, {
        scope: { [p.Gp.ANY]: [a.x.RELATIONSHIPS_READ] },
        async handler(e) {
            let t,
                {
                    socket: n,
                    args: { user_id: a, content: s },
                } = e,
                p = n.application.id;
            if (null == p) throw new r.O({ errorCode: m.lT.INVALID_COMMAND }, "No application.");
            let h = c.ZP.getConnectedActivityLocation();
            if (null == h)
                throw new r.O(
                    { errorCode: m.lT.NO_ELIGIBLE_ACTIVITY },
                    "No eligible activity for application. Ensure an activity was set using setActivity.",
                );
            switch (h.kind) {
                case l.E.GUILD_CHANNEL:
                case l.E.GUILD_CHANNEL_MESSAGE:
                    t = (0, d.T)().channel;
                    break;
                case l.E.PRIVATE_CHANNEL:
                case l.E.PRIVATE_CHANNEL_MESSAGE:
                    let g = u.Z.getChannel(h.channel_id);
                    if (null == g) throw new r.O({ errorCode: m.lT.INVALID_CHANNEL }, "Invalid channel");
                    if (g.type === i.d.DM)
                        throw new r.O({ errorCode: m.lT.INVALID_CHANNEL }, "Cannot send invite to a DM");
                    t = g;
                    break;
                default:
                    throw new r.O({ errorCode: m.lT.NO_ELIGIBLE_ACTIVITY }, "Unsupported activity location");
            }
            try {
                await (0, o.pu)({
                    channelId: t.id,
                    applicationId: p,
                    userId: a,
                    prefixedContent: s,
                    location: "RPC_ACTIVITY_INVITE_USER",
                    inviteAnalyticsMetadata: { source: f.t4x.ACTIVITY_INVITE },
                });
            } catch (e) {
                throw new r.O({ errorCode: m.lT.UNKNOWN_ERROR }, "Failed to invite user");
            }
        },
    }),
};
