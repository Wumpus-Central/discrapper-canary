n.d(t, { k: () => m });
var i = n(228366),
    l = n(367513),
    a = n(401843),
    s = n(262763),
    r = n(652896),
    o = n(499211),
    c = n(616356),
    d = n(734057),
    u = n(977997),
    h = n(446243),
    p = n(652215);
async function m(e) {
    let { channelId: t } = e,
        n = d.A.getChannel(t);
    if (null == n) return;
    if (!u.A.isInChannel(t)) {
        if (
            !(await s.A.handleVoiceConnect({
                channel: n,
                connected: !1,
                needSubscriptionToAccess: (0, o.p)(e.channelId).needSubscriptionToAccess,
            }))
        )
            return;
        await new Promise((e) => {
            i.h.subscribe("GUILD_ROOM_CONNECT", function n(l) {
                l.room.roomId === t && (i.h.unsubscribe("GUILD_ROOM_CONNECT", n), e(!0));
            });
        });
    }
    let m = c.A.getActiveStreamForApplicationStream(e);
    if (null != m && m.state !== p.XYD.ENDED && m.ownerId === e.ownerId) {
        l.A.selectParticipant(e.channelId, (0, r._z)(e)), (0, h.UV)(!0, e.channelId);
        return;
    }
    (0, a.A9)(e);
}
