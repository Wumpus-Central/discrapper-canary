"use strict";
n.d(t, { A: () => d });
var i = n(717125),
    r = n(262763),
    s = n(499211),
    a = n(734057),
    o = n(576705),
    l = n(309010),
    u = n(977997);
class c extends Error {}
async function d(e) {
    let { channelId: t, timeoutMs: n = 1e4, bypassChangeModal: d = !1 } = e,
        _ = a.A.getChannel(t);
    if (
        null == _ ||
        !(await r.A.handleVoiceConnect({
            bypassGuildIdCheck: !0,
            bypassChangeModal: d,
            channel: _,
            connected: u.A.isInChannel(t),
            needSubscriptionToAccess: (0, s.p)(t, a.A, i.A, o.A).needSubscriptionToAccess,
        }))
    )
        return !1;
    let h = new Promise((e, i) => {
        let r = setTimeout(() => {
            i(new c("Joining voice channel has timed out."));
        }, n);
        l.A.addConditionalChangeListener(() => l.A.getVoiceChannelId() !== t || (clearTimeout(r), e(), !1));
    });
    try {
        await h;
    } catch (e) {
        if (e instanceof c) return !1;
        throw e;
    }
    return !0;
}
