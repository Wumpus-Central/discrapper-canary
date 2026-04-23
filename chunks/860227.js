"use strict";
n.d(t, { CJ: () => i, JH: () => u, XL: () => d, ZD: () => g, d$: () => o, fF: () => m, nS: () => r, xl: () => c });
var l = n(264927),
    a = n(143413),
    s = n(652215);
function i(e) {
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
    let u = e.type === s.lAJ.REPLY && null != e.messageReference,
        m = e.embeds.length > 0,
        g = e.attachments.length > 0,
        h = e.stickerItems.length > 0,
        p = e.codedLinks.length > 0,
        A = e.components.length > 0,
        _ = e.hasFlag(s.pr7.HAS_THREAD),
        f = m || g || h || p || _ || A || e.isPoll() || e.type === s.lAJ.THREAD_CREATED,
        v = m && e.content === e.embeds[0].url && e.embeds[0].type === s.Auw.GIFV,
        x = e.type !== s.lAJ.DEFAULT || (!v && "" !== e.content),
        C = (0, a.A)(e),
        I = !C && n?.hasTimestamp !== !1,
        N = e.hasFlag(s.pr7.IS_GUILD_OFFICIAL),
        E = o(e, t),
        b = r(e),
        T = C ? "" : `${u ? b : E} ${l.lW}`;
    if (x) {
        let t = i(e);
        T += ` ${t}`;
    }
    if (f) {
        let t = d(e);
        T += ` ${t}`;
    }
    if (I) {
        let t = c(e);
        T += ` ${l.l6} ${t}`;
    }
    return N && (T += ` ${l.zV}`), T.trim();
}
function g(e) {
    if (0 === e.reactions.length) return;
    let t = u(e);
    return `${l.oz} ${t}`;
}
