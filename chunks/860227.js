"use strict";
n.d(t, { CJ: () => a, JH: () => c, XL: () => d, ZD: () => g, d$: () => o, fF: () => m, nS: () => r, xl: () => u });
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
        g = e.attachments.length > 0,
        h = e.stickerItems.length > 0,
        A = e.codedLinks.length > 0,
        f = e.components.length > 0,
        p = e.hasFlag(s.pr7.HAS_THREAD),
        x = m || g || h || A || p || f || e.type === s.lAJ.THREAD_CREATED,
        v = m && e.content === e.embeds[0].url && e.embeds[0].type === s.Auw.GIFV,
        C = e.type !== s.lAJ.DEFAULT || (!v && "" !== e.content),
        N = (0, i.A)(e),
        E = !N && n?.hasTimestamp !== !1,
        I = e.hasFlag(s.pr7.IS_GUILD_OFFICIAL),
        _ = o(e, t),
        b = r(e),
        S = N ? "" : `${c ? b : _} ${l.lW}`;
    if (C) {
        let t = a(e);
        S += ` ${t}`;
    }
    if (x) {
        let t = d(e);
        S += ` ${t}`;
    }
    if (E) {
        let t = u(e);
        S += ` ${l.l6} ${t}`;
    }
    return I && (S += ` ${l.zV}`), S.trim();
}
function g(e) {
    if (0 === e.reactions.length) return;
    let t = c(e);
    return `${l.oz} ${t}`;
}
