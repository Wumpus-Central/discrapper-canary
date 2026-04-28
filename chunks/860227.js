"use strict";
n.d(t, { CJ: () => s, JH: () => d, XL: () => u, ZD: () => m, d$: () => c, fF: () => _, nS: () => l, xl: () => o });
var i = n(264927),
    a = n(143413),
    r = n(652215);
function s(e) {
    return `message-content-${e.id}`;
}
function l(e) {
    return `message-reply-context-${e.id}`;
}
function c(e, t) {
    let n = t ?? e.id;
    return `message-username-${n}`;
}
function o(e) {
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
        g = e.components.length > 0,
        h = e.hasFlag(r.pr7.HAS_THREAD),
        b = _ || m || p || f || h || g || e.isPoll() || e.type === r.lAJ.THREAD_CREATED,
        C = _ && e.content === e.embeds[0].url && e.embeds[0].type === r.Auw.GIFV,
        I = e.type !== r.lAJ.DEFAULT || (!C && "" !== e.content),
        T = (0, a.A)(e),
        x = !T && n?.hasTimestamp !== !1,
        A = e.hasFlag(r.pr7.IS_GUILD_OFFICIAL),
        E = c(e, t),
        S = l(e),
        v = T ? "" : `${d ? S : E} ${i.lW}`;
    if (I) {
        let t = s(e);
        v += ` ${t}`;
    }
    if (b) {
        let t = u(e);
        v += ` ${t}`;
    }
    if (x) {
        let t = o(e);
        v += ` ${i.l6} ${t}`;
    }
    return A && (v += ` ${i.zV}`), v.trim();
}
function m(e) {
    if (0 === e.reactions.length) return;
    let t = d(e);
    return `${i.oz} ${t}`;
}
