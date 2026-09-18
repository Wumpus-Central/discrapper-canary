n.d(t, { CJ: () => c, JH: () => o, XL: () => m, ZD: () => p, d$: () => a, fF: () => d, nS: () => l, xl: () => u });
var s = n(264927),
    r = n(143413),
    i = n(652215);
function c(e) {
    return `message-content-${e.id}`;
}
function l(e) {
    return `message-reply-context-${e.id}`;
}
function a(e, t) {
    let n = t ?? e.id;
    return `message-username-${n}`;
}
function u(e) {
    return `message-timestamp-${e.id}`;
}
function o(e) {
    return `message-reactions-${e.id}`;
}
function m(e) {
    return `message-accessories-${e.id}`;
}
function d(e, t, n) {
    let o = e.type === i.lAJ.REPLY && null != e.messageReference,
        d = e.embeds.length > 0,
        p = e.attachments.length > 0,
        $ = e.stickerItems.length > 0,
        g = e.codedLinks.length > 0,
        h = e.components.length > 0,
        f = e.hasFlag(i.pr7.HAS_THREAD),
        A = d || p || $ || g || f || h || e.isPoll() || e.type === i.lAJ.THREAD_CREATED,
        F = d && e.content === e.embeds[0].url && e.embeds[0].type === i.Auw.GIFV,
        k = e.type !== i.lAJ.DEFAULT || (!F && "" !== e.content),
        D = (0, r.A)(e),
        E = !D && n?.hasTimestamp !== !1,
        I = e.hasFlag(i.pr7.IS_GUILD_OFFICIAL),
        L = a(e, t),
        _ = l(e),
        b = D ? "" : `${o ? _ : L} ${s.lW}`;
    if (k) {
        let t = c(e);
        b += ` ${t}`;
    }
    if (A) {
        let t = m(e);
        b += ` ${t}`;
    }
    if (E) {
        let t = u(e);
        b += ` ${s.l6} ${t}`;
    }
    return (I && (b += ` ${s.zV}`), b.trim());
}
function p(e) {
    if (0 === e.reactions.length) return;
    let t = o(e);
    return `${s.oz} ${t}`;
}
