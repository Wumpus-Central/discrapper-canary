n.d(t, { Z: () => f }), n(411104);
var i = n(430198),
    r = n(557135),
    a = n(66999),
    s = n(592125),
    o = n(496675),
    l = n(944486),
    u = n(979651);
let c = 10000;
class d extends Error {}
async function f(e) {
    let { channelId: t, timeoutMs: n = c, bypassChangeModal: f = !1 } = e,
        _ = s.Z.getChannel(t);
    if (
        null == _ ||
        !(await r.Z.handleVoiceConnect({
            bypassGuildIdCheck: !0,
            bypassChangeModal: f,
            channel: _,
            connected: u.Z.isInChannel(t),
            needSubscriptionToAccess: (0, a.$)(t, s.Z, i.Z, o.Z).needSubscriptionToAccess
        }))
    )
        return !1;
    let p = new Promise((e, i) => {
        let r = setTimeout(() => {
            i(new d('Joining voice channel has timed out.'));
        }, n);
        l.Z.addConditionalChangeListener(() => l.Z.getVoiceChannelId() !== t || (clearTimeout(r), e(), !1));
    });
    try {
        await p;
    } catch (e) {
        if (e instanceof d) return !1;
        throw e;
    }
    return !0;
}
