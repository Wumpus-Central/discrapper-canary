"use strict";
n.d(t, { CJ: () => r, JH: () => c, XL: () => d, ZD: () => h, d$: () => o, fF: () => m, nS: () => a, xl: () => u });
var l = n(264927),
    s = n(143413),
    i = n(652215);
function r(e) {
    return `message-content-${e.id}`;
}
function a(e) {
    return `message-reply-context-${e.id}`;
}
function o(e, t) {
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
function m(e, t, n) {
    let c = e.type === i.lAJ.REPLY && null != e.messageReference,
        m = e.embeds.length > 0,
        h = e.attachments.length > 0,
        g = e.stickerItems.length > 0,
        p = e.codedLinks.length > 0,
        A = e.components.length > 0,
        f = e.hasFlag(i.pr7.HAS_THREAD),
        x = m || h || g || p || f || A || e.type === i.lAJ.THREAD_CREATED,
        v = m && e.content === e.embeds[0].url && e.embeds[0].type === i.Auw.GIFV,
        N = e.type !== i.lAJ.DEFAULT || (!v && "" !== e.content),
        b = (0, s.A)(e),
        j = !b && n?.hasTimestamp !== !1,
        C = o(e, t),
        E = a(e),
        R = b ? "" : `${c ? E : C} ${l.lW}`;
    if (N) {
        let t = r(e);
        R += ` ${t}`;
    }
    if (x) {
        let t = d(e);
        R += ` ${t}`;
    }
    if (j) {
        let t = u(e);
        R += ` ${l.l6} ${t}`;
    }
    return R.trim();
}
function h(e) {
    if (0 === e.reactions.length) return;
    let t = c(e);
    return `${l.oz} ${t}`;
}
