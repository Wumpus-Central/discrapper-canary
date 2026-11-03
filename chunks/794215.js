t.d(n, { c: () => r });
var l = t(376943);
function r(e) {
    let n = l.En.exec(e);
    if (null != n) {
        let [, e, t, l, r] = n;
        return { guildId: e, channelId: l, messageId: r, parentChannelId: t, conversationId: void 0 };
    }
    let t = l.BM.exec(e);
    if (null == t) return null;
    let [, r, a, u, i] = t;
    return null == a || /\D/.test(a) || (null != u && /\D/.test(u))
        ? null
        : { guildId: r, channelId: a, messageId: u, parentChannelId: void 0, conversationId: (0, l.te)(i) };
}
