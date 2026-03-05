n.d(t, { CJ: () => l, JH: () => d, XL: () => u, ZD: () => m, d$: () => o, fF: () => _, nS: () => s, xl: () => c });
var a = n(264927),
    i = n(143413),
    r = n(652215);
function l(e) {
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
        T = e.type !== r.lAJ.DEFAULT || (!A && "" !== e.content),
        x = (0, i.A)(e),
        I = !x && n?.hasTimestamp !== !1,
        C = o(e, t),
        E = s(e),
        S = x ? "" : `${d ? E : C} ${a.lW}`;
    if (T) {
        let t = l(e);
        S += ` ${t}`;
    }
    if (g) {
        let t = u(e);
        S += ` ${t}`;
    }
    if (I) {
        let t = c(e);
        S += ` ${a.l6} ${t}`;
    }
    return S.trim();
}
function m(e) {
    if (0 === e.reactions.length) return;
    let t = d(e);
    return `${a.oz} ${t}`;
}
