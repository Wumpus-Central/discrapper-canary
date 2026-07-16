"use strict";
n.d(t, { A: () => u });
var i = n(717125),
    r = n(262763),
    a = n(499211),
    s = n(734057),
    l = n(576705),
    o = n(309010),
    d = n(977997);
class c extends Error {}
async function u(e) {
    let { channelId: t, timeoutMs: n = 1e4, bypassChangeModal: u = !1 } = e,
        _ = s.A.getChannel(t);
    if (
        null == _ ||
        !(await r.A.handleVoiceConnect({
            bypassGuildIdCheck: !0,
            bypassChangeModal: u,
            channel: _,
            connected: d.A.isInChannel(t),
            needSubscriptionToAccess: (0, a.p)(t, s.A, i.A, l.A).needSubscriptionToAccess,
        }))
    )
        return !1;
    let E = new Promise((e, i) => {
        let r = setTimeout(() => {
            i(new c("Joining voice channel has timed out."));
        }, n);
        o.Ay.addConditionalChangeListener(() => o.Ay.getVoiceChannelId() !== t || (clearTimeout(r), e(), !1));
    });
    try {
        await E;
    } catch (e) {
        if (e instanceof c) return !1;
        throw e;
    }
    return !0;
}
