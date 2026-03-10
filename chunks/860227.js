"use strict";
n.d(t, { CJ: () => a, JH: () => c, XL: () => d, ZD: () => h, d$: () => o, fF: () => m, nS: () => r, xl: () => u });
var l = n(264927),
    i = n(143413),
    s = n(652215);
function a(e) {
    return `message-content-${e.id}`;
}
function r(e) {
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
    let c = e.type === s.lAJ.REPLY && null != e.messageReference,
        m = e.embeds.length > 0,
        h = e.attachments.length > 0,
        g = e.stickerItems.length > 0,
        p = e.codedLinks.length > 0,
        A = e.components.length > 0,
        f = e.hasFlag(s.pr7.HAS_THREAD),
        x = m || h || g || p || f || A || e.type === s.lAJ.THREAD_CREATED,
        v = m && e.content === e.embeds[0].url && e.embeds[0].type === s.Auw.GIFV,
        j = e.type !== s.lAJ.DEFAULT || (!v && "" !== e.content),
        N = (0, i.A)(e),
        b = !N && n?.hasTimestamp !== !1,
        C = o(e, t),
        E = r(e),
        I = N ? "" : `${c ? E : C} ${l.lW}`;
    if (j) {
        let t = a(e);
        I += ` ${t}`;
    }
    if (x) {
        let t = d(e);
        I += ` ${t}`;
    }
    if (b) {
        let t = u(e);
        I += ` ${l.l6} ${t}`;
    }
    return I.trim();
}
function h(e) {
    if (0 === e.reactions.length) return;
    let t = c(e);
    return `${l.oz} ${t}`;
}
