n.d(t, {
    A: () => f,
}),
    n(65821);
var r = n(717125),
    i = n(262763),
    a = n(721592),
    s = n(734057),
    o = n(576705),
    l = n(309010),
    c = n(977997);
let u = 1e4;
class d extends Error {}
async function f(e) {
    let { channelId: t, timeoutMs: n = u, bypassChangeModal: f = !1 } = e,
        p = s.A.getChannel(t);
    if (
        null == p ||
        !(await i.A.handleVoiceConnect({
            bypassGuildIdCheck: !0,
            bypassChangeModal: f,
            channel: p,
            connected: c.A.isInChannel(t),
            needSubscriptionToAccess: (0, a.p)(t, s.A, r.A, o.A).needSubscriptionToAccess,
        }))
    )
        return !1;
    let _ = new Promise((e, r) => {
        let i = setTimeout(() => {
            r(new d("Joining voice channel has timed out."));
        }, n);
        l.A.addConditionalChangeListener(() => l.A.getVoiceChannelId() !== t || (clearTimeout(i), e(), !1));
    });
    try {
        await _;
    } catch (e) {
        if (e instanceof d) return !1;
        throw e;
    }
    return !0;
}
