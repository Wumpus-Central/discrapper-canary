n.d(t, { CJ: () => s, JH: () => d, XL: () => u, ZD: () => m, d$: () => o, fF: () => _, nS: () => l, xl: () => c });
var a = n(264927),
    i = n(143413),
    r = n(652215);
function s(e) {
    return `message-content-${e.id}`;
}
function l(e) {
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
function _(e, t, n) {
    let d = e.type === r.lAJ.REPLY && null != e.messageReference,
        _ = e.embeds.length > 0,
        m = e.attachments.length > 0,
        p = e.stickerItems.length > 0,
        f = e.codedLinks.length > 0,
        b = e.components.length > 0,
        h = e.hasFlag(r.pr7.HAS_THREAD),
        g = _ || m || p || f || h || b || e.type === r.lAJ.THREAD_CREATED,
        A = _ && e.content === e.embeds[0].url && e.embeds[0].type === r.Auw.GIFV,
        x = e.type !== r.lAJ.DEFAULT || (!A && "" !== e.content),
        T = (0, i.A)(e),
        C = !T && n?.hasTimestamp !== !1,
        I = o(e, t),
        S = l(e),
        E = T ? "" : `${d ? S : I} ${a.lW}`;
    if (x) {
        let t = s(e);
        E += ` ${t}`;
    }
    if (g) {
        let t = u(e);
        E += ` ${t}`;
    }
    if (C) {
        let t = c(e);
        E += ` ${a.l6} ${t}`;
    }
    return E.trim();
}
function m(e) {
    if (0 === e.reactions.length) return;
    let t = d(e);
    return `${a.oz} ${t}`;
}
