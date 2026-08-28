n.d(e, { CJ: () => r, JH: () => d, XL: () => o, ZD: () => p, d$: () => c, fF: () => u, nS: () => l, xl: () => m });
var s = n(264927),
    i = n(143413),
    a = n(652215);
function r(t) {
    return `message-content-${t.id}`;
}
function l(t) {
    return `message-reply-context-${t.id}`;
}
function c(t, e) {
    let n = e ?? t.id;
    return `message-username-${n}`;
}
function m(t) {
    return `message-timestamp-${t.id}`;
}
function d(t) {
    return `message-reactions-${t.id}`;
}
function o(t) {
    return `message-accessories-${t.id}`;
}
function u(t, e, n) {
    let d = t.type === a.lAJ.REPLY && null != t.messageReference,
        u = t.embeds.length > 0,
        p = t.attachments.length > 0,
        E = t.stickerItems.length > 0,
        g = t.codedLinks.length > 0,
        A = t.components.length > 0,
        h = t.hasFlag(a.pr7.HAS_THREAD),
        I = u || p || E || g || h || A || t.isPoll() || t.type === a.lAJ.THREAD_CREATED,
        T = u && t.content === t.embeds[0].url && t.embeds[0].type === a.Auw.GIFV,
        f = t.type !== a.lAJ.DEFAULT || (!T && "" !== t.content),
        _ = (0, i.A)(t),
        S = !_ && n?.hasTimestamp !== !1,
        C = t.hasFlag(a.pr7.IS_GUILD_OFFICIAL),
        N = c(t, e),
        $ = l(t),
        O = _ ? "" : `${d ? $ : N} ${s.lW}`;
    if (f) {
        let e = r(t);
        O += ` ${e}`;
    }
    if (I) {
        let e = o(t);
        O += ` ${e}`;
    }
    if (S) {
        let e = m(t);
        O += ` ${s.l6} ${e}`;
    }
    return C && (O += ` ${s.zV}`), O.trim();
}
function p(t) {
    if (0 === t.reactions.length) return;
    let e = d(t);
    return `${s.oz} ${e}`;
}
