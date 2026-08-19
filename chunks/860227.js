n.d(t, { CJ: () => r, JH: () => d, XL: () => o, ZD: () => p, d$: () => c, fF: () => u, nS: () => l, xl: () => m });
var s = n(264927),
    i = n(143413),
    a = n(652215);
function r(e) {
    return `message-content-${e.id}`;
}
function l(e) {
    return `message-reply-context-${e.id}`;
}
function c(e, t) {
    let n = t ?? e.id;
    return `message-username-${n}`;
}
function m(e) {
    return `message-timestamp-${e.id}`;
}
function d(e) {
    return `message-reactions-${e.id}`;
}
function o(e) {
    return `message-accessories-${e.id}`;
}
function u(e, t, n) {
    let d = e.type === a.lAJ.REPLY && null != e.messageReference,
        u = e.embeds.length > 0,
        p = e.attachments.length > 0,
        E = e.stickerItems.length > 0,
        g = e.codedLinks.length > 0,
        A = e.components.length > 0,
        h = e.hasFlag(a.pr7.HAS_THREAD),
        I = u || p || E || g || h || A || e.isPoll() || e.type === a.lAJ.THREAD_CREATED,
        T = u && e.content === e.embeds[0].url && e.embeds[0].type === a.Auw.GIFV,
        f = e.type !== a.lAJ.DEFAULT || (!T && "" !== e.content),
        _ = (0, i.A)(e),
        S = !_ && n?.hasTimestamp !== !1,
        C = e.hasFlag(a.pr7.IS_GUILD_OFFICIAL),
        N = c(e, t),
        O = l(e),
        $ = _ ? "" : `${d ? O : N} ${s.lW}`;
    if (f) {
        let t = r(e);
        $ += ` ${t}`;
    }
    if (I) {
        let t = o(e);
        $ += ` ${t}`;
    }
    if (S) {
        let t = m(e);
        $ += ` ${s.l6} ${t}`;
    }
    return C && ($ += ` ${s.zV}`), $.trim();
}
function p(e) {
    if (0 === e.reactions.length) return;
    let t = d(e);
    return `${s.oz} ${t}`;
}
