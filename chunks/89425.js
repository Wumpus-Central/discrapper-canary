r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(411104);
var a = r(430198),
    o = r(557135),
    s = r(66999),
    l = r(592125),
    u = r(496675),
    c = r(944486),
    d = r(979651);
let f = 10000;
class p extends Error {}
async function h(e) {
    let { channelId: n, timeoutMs: r = f, bypassChangeModal: i = !1 } = e,
        h = l.Z.getChannel(n);
    if (
        null == h ||
        !(await o.Z.handleVoiceConnect({
            bypassGuildIdCheck: !0,
            bypassChangeModal: i,
            channel: h,
            connected: d.Z.isInChannel(n),
            needSubscriptionToAccess: (0, s.$)(n, l.Z, a.Z, u.Z).needSubscriptionToAccess
        }))
    )
        return !1;
    let _ = new Promise((e, i) => {
        let a = setTimeout(() => {
            i(new p('Joining voice channel has timed out.'));
        }, r);
        c.Z.addConditionalChangeListener(() => c.Z.getVoiceChannelId() !== n || (clearTimeout(a), e(), !1));
    });
    try {
        await _;
    } catch (e) {
        if (e instanceof p) return !1;
        throw e;
    }
    return !0;
}
