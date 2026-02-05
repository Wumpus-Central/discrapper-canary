"use strict";
n.d(t, { A: () => _ });
var r = n(717125),
    i = n(262763),
    a = n(721592),
    s = n(734057),
    o = n(576705),
    l = n(309010),
    u = n(977997);
let c = 1e4;
class d extends Error {}
async function _(e) {
    let { channelId: t, timeoutMs: n = c, bypassChangeModal: _ = !1 } = e,
        f = s.A.getChannel(t);
    if (
        null == f ||
        !(await i.A.handleVoiceConnect({
            bypassGuildIdCheck: !0,
            bypassChangeModal: _,
            channel: f,
            connected: u.A.isInChannel(t),
            needSubscriptionToAccess: (0, a.p)(t, s.A, r.A, o.A).needSubscriptionToAccess,
        }))
    )
        return !1;
    let p = new Promise((e, r) => {
        let i = setTimeout(() => {
            r(new d("Joining voice channel has timed out."));
        }, n);
        l.A.addConditionalChangeListener(() => l.A.getVoiceChannelId() !== t || (clearTimeout(i), e(), !1));
    });
    try {
        await p;
    } catch (e) {
        if (e instanceof d) return !1;
        throw e;
    }
    return !0;
}
