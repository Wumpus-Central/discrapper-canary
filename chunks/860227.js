n.d(t, { CJ: () => r, JH: () => d, XL: () => u, ZD: () => _, d$: () => o, fF: () => m, nS: () => s, xl: () => c });
var a = n(264927),
    i = n(143413),
    l = n(652215);
function r(e) {
    return `message-content-${e.id}`;
}
function s(e) {
    return `message-reply-context-${e.id}`;
}
function o(e, t) {
    let n = t ?? e.id;
    return `message-username-${n}`;
}
function c(e) {
    return `message-timestamp-${e.id}`;
}
function d(e) {
    return `message-reactions-${e.id}`;
}
function u(e) {
    return `message-accessories-${e.id}`;
}
function m(e, t, n) {
    let d = e.type === l.lAJ.REPLY && null != e.messageReference,
        m = e.embeds.length > 0,
        _ = e.attachments.length > 0,
        h = e.stickerItems.length > 0,
        p = e.codedLinks.length > 0,
        g = e.components.length > 0,
        f = e.hasFlag(l.pr7.HAS_THREAD),
        A = m || _ || h || p || f || g || e.isPoll() || e.type === l.lAJ.THREAD_CREATED,
        b = m && e.content === e.embeds[0].url && e.embeds[0].type === l.Auw.GIFV,
        T = e.type !== l.lAJ.DEFAULT || (!b && "" !== e.content),
        I = (0, i.A)(e),
        E = !I && n?.hasTimestamp !== !1,
        C = e.hasFlag(l.pr7.IS_GUILD_OFFICIAL),
        S = o(e, t),
        y = s(e),
        x = I ? "" : `${d ? y : S} ${a.lW}`;
    if (T) {
        let t = r(e);
        x += ` ${t}`;
    }
    if (A) {
        let t = u(e);
        x += ` ${t}`;
    }
    if (E) {
        let t = c(e);
        x += ` ${a.l6} ${t}`;
    }
    return C && (x += ` ${a.zV}`), x.trim();
}
function _(e) {
    if (0 === e.reactions.length) return;
    let t = d(e);
    return `${a.oz} ${t}`;
}
