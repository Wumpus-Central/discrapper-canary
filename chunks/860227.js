"use strict";
n.d(t, { CJ: () => s, JH: () => c, XL: () => d, ZD: () => f, d$: () => l, fF: () => _, nS: () => o, xl: () => u });
var r = n(264927),
    i = n(143413),
    a = n(652215);
function s(e) {
    return `message-content-${e.id}`;
}
function o(e) {
    return `message-reply-context-${e.id}`;
}
function l(e, t) {
    let n = t ?? e.id;
    return `message-username-${n}`;
}
function u(e) {
    return `message-timestamp-${e.id}`;
}
function c(e) {
    return `message-reactions-${e.id}`;
}
function d(e) {
    return `message-accessories-${e.id}`;
}
function _(e, t, n) {
    let c = e.type === a.lAJ.REPLY && null != e.messageReference,
        _ = e.embeds.length > 0,
        f = e.attachments.length > 0,
        p = e.stickerItems.length > 0,
        h = e.codedLinks.length > 0,
        m = e.components.length > 0,
        g = e.hasFlag(a.pr7.HAS_THREAD),
        E = _ || f || p || h || g || m || e.type === a.lAJ.THREAD_CREATED,
        A = _ && e.content === e.embeds[0].url && e.embeds[0].type === a.Auw.GIFV,
        I = e.type !== a.lAJ.DEFAULT || (!A && "" !== e.content),
        T = (0, i.A)(e),
        y = !T && n?.hasTimestamp !== !1,
        S = !T,
        v = l(e, t),
        C = o(e),
        b = c ? C : v,
        N = S ? `${b} ${r.lW}` : "";
    if (I) {
        let t = s(e);
        N += ` ${t}`;
    }
    if (E) {
        let t = d(e);
        N += ` ${t}`;
    }
    if (y) {
        let t = u(e);
        N += ` ${r.l6} ${t}`;
    }
    return N.trim();
}
function f(e) {
    if (0 === e.reactions.length) return;
    let t = c(e);
    return `${r.oz} ${t}`;
}
