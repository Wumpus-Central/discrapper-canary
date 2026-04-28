n.d(t, { CJ: () => s, JH: () => u, XL: () => d, ZD: () => _, d$: () => o, fF: () => m, nS: () => r, xl: () => c });
var a = n(264927),
    i = n(143413),
    l = n(652215);
function s(e) {
    return `message-content-${e.id}`;
}
function r(e) {
    return `message-reply-context-${e.id}`;
}
function o(e, t) {
    let n = t ?? e.id;
    return `message-username-${n}`;
}
function c(e) {
    return `message-timestamp-${e.id}`;
}
function u(e) {
    return `message-reactions-${e.id}`;
}
function d(e) {
    return `message-accessories-${e.id}`;
}
function m(e, t, n) {
    let u = e.type === l.lAJ.REPLY && null != e.messageReference,
        m = e.embeds.length > 0,
        _ = e.attachments.length > 0,
        h = e.stickerItems.length > 0,
        p = e.codedLinks.length > 0,
        g = e.components.length > 0,
        f = e.hasFlag(l.pr7.HAS_THREAD),
        A = m || _ || h || p || f || g || e.isPoll() || e.type === l.lAJ.THREAD_CREATED,
        b = m && e.content === e.embeds[0].url && e.embeds[0].type === l.Auw.GIFV,
        I = e.type !== l.lAJ.DEFAULT || (!b && "" !== e.content),
        T = (0, i.A)(e),
        E = !T && n?.hasTimestamp !== !1,
        S = e.hasFlag(l.pr7.IS_GUILD_OFFICIAL),
        C = o(e, t),
        x = r(e),
        y = T ? "" : `${u ? x : C} ${a.lW}`;
    if (I) {
        let t = s(e);
        y += ` ${t}`;
    }
    if (A) {
        let t = d(e);
        y += ` ${t}`;
    }
    if (E) {
        let t = c(e);
        y += ` ${a.l6} ${t}`;
    }
    return S && (y += ` ${a.zV}`), y.trim();
}
function _(e) {
    if (0 === e.reactions.length) return;
    let t = u(e);
    return `${a.oz} ${t}`;
}
