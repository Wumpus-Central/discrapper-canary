"use strict";
n.d(t, { A: () => u });
var i = n(717125),
    r = n(262763),
    s = n(721592),
    a = n(734057),
    o = n(576705),
    l = n(309010),
    _ = n(977997);
class d extends Error {}
async function u(e) {
    let { channelId: t, timeoutMs: n = 1e4, bypassChangeModal: u = !1 } = e,
        c = a.A.getChannel(t);
    if (
        null == c ||
        !(await r.A.handleVoiceConnect({
            bypassGuildIdCheck: !0,
            bypassChangeModal: u,
            channel: c,
            connected: _.A.isInChannel(t),
            needSubscriptionToAccess: (0, s.p)(t, a.A, i.A, o.A).needSubscriptionToAccess,
        }))
    )
        return !1;
    let E = new Promise((e, i) => {
        let r = setTimeout(() => {
            i(new d("Joining voice channel has timed out."));
        }, n);
        l.A.addConditionalChangeListener(() => l.A.getVoiceChannelId() !== t || (clearTimeout(r), e(), !1));
    });
    try {
        await E;
    } catch (e) {
        if (e instanceof d) return !1;
        throw e;
    }
    return !0;
}
