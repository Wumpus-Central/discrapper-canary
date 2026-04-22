"use strict";
n.d(t, { A: () => c });
var r = n(717125),
    i = n(262763),
    s = n(721592),
    a = n(734057),
    o = n(576705),
    l = n(309010),
    u = n(977997);
class d extends Error {}
async function c(e) {
    let { channelId: t, timeoutMs: n = 1e4, bypassChangeModal: c = !1 } = e,
        _ = a.A.getChannel(t);
    if (
        null == _ ||
        !(await i.A.handleVoiceConnect({
            bypassGuildIdCheck: !0,
            bypassChangeModal: c,
            channel: _,
            connected: u.A.isInChannel(t),
            needSubscriptionToAccess: (0, s.p)(t, a.A, r.A, o.A).needSubscriptionToAccess,
        }))
    )
        return !1;
    let f = new Promise((e, r) => {
        let i = setTimeout(() => {
            r(new d("Joining voice channel has timed out."));
        }, n);
        l.A.addConditionalChangeListener(() => l.A.getVoiceChannelId() !== t || (clearTimeout(i), e(), !1));
    });
    try {
        await f;
    } catch (e) {
        if (e instanceof d) return !1;
        throw e;
    }
    return !0;
}
