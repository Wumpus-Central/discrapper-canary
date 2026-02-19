n.d(t, { CJ: () => o, JH: () => d, XL: () => u, ZD: () => _, d$: () => s, fF: () => m, nS: () => r, xl: () => c });
var a = n(264927),
    i = n(143413),
    l = n(652215);
function o(e) {
    return `message-content-${e.id}`;
}
function r(e) {
    return `message-reply-context-${e.id}`;
}
function s(e, t) {
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
        p = e.stickerItems.length > 0,
        f = e.codedLinks.length > 0,
        h = e.components.length > 0,
        b = e.hasFlag(l.pr7.HAS_THREAD),
        g = m || _ || p || f || b || h || e.type === l.lAJ.THREAD_CREATED,
        A = m && e.content === e.embeds[0].url && e.embeds[0].type === l.Auw.GIFV,
        I = e.type !== l.lAJ.DEFAULT || (!A && "" !== e.content),
        y = (0, i.A)(e),
        T = !y && n?.hasTimestamp !== !1,
        x = s(e, t),
        C = r(e),
        E = y ? "" : `${d ? C : x} ${a.lW}`;
    if (I) {
        let t = o(e);
        E += ` ${t}`;
    }
    if (g) {
        let t = u(e);
        E += ` ${t}`;
    }
    if (T) {
        let t = c(e);
        E += ` ${a.l6} ${t}`;
    }
    return E.trim();
}
function _(e) {
    if (0 === e.reactions.length) return;
    let t = d(e);
    return `${a.oz} ${t}`;
}
