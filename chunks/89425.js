n.d(t, { Z: () => _ }), n(415506);
var r = n(430198),
    i = n(557135),
    a = n(66999),
    o = n(592125),
    s = n(496675),
    l = n(944486),
    c = n(979651);
let u = 10000;
class d extends Error {}
async function _(e) {
    let { channelId: t, timeoutMs: n = u, bypassChangeModal: _ = !1 } = e,
        f = o.Z.getChannel(t);
    if (
        null == f ||
        !(await i.Z.handleVoiceConnect({
            bypassGuildIdCheck: !0,
            bypassChangeModal: _,
            channel: f,
            connected: c.Z.isInChannel(t),
            needSubscriptionToAccess: (0, a.$)(t, o.Z, r.Z, s.Z).needSubscriptionToAccess
        }))
    )
        return !1;
    let p = new Promise((e, r) => {
        let i = setTimeout(() => {
            r(new d('Joining voice channel has timed out.'));
        }, n);
        l.Z.addConditionalChangeListener(() => l.Z.getVoiceChannelId() !== t || (clearTimeout(i), e(), !1));
    });
    try {
        await p;
    } catch (e) {
        if (e instanceof d) return !1;
        throw e;
    }
    return !0;
}
