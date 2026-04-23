n.d(t, { A: () => d });
var i = n(717125),
    r = n(262763),
    a = n(721592),
    s = n(734057),
    _ = n(576705),
    l = n(309010),
    o = n(977997);
class E extends Error {}
async function d(e) {
    let { channelId: t, timeoutMs: n = 1e4, bypassChangeModal: d = !1 } = e,
        c = s.A.getChannel(t);
    if (
        null == c ||
        !(await r.A.handleVoiceConnect({
            bypassGuildIdCheck: !0,
            bypassChangeModal: d,
            channel: c,
            connected: o.A.isInChannel(t),
            needSubscriptionToAccess: (0, a.p)(t, s.A, i.A, _.A).needSubscriptionToAccess,
        }))
    )
        return !1;
    let u = new Promise((e, i) => {
        let r = setTimeout(() => {
            i(new E("Joining voice channel has timed out."));
        }, n);
        l.A.addConditionalChangeListener(() => l.A.getVoiceChannelId() !== t || (clearTimeout(r), e(), !1));
    });
    try {
        await u;
    } catch (e) {
        if (e instanceof E) return !1;
        throw e;
    }
    return !0;
}
