"use strict";
n.d(t, { fB: () => c, _U: () => p, WU: () => d, ys: () => f, m0: () => h, LO: () => u, y$: () => _ });
var i = n(488428);
function r(e) {
    return Array.isArray(e) ? e[0] : e;
}
var s = n(935208);
let a = "event",
    o = "channel",
    l = "message";
function u(e) {
    return "string" == typeof e && s.default.isProbablyAValidSnowflake(e) ? e : void 0;
}
function c(e, t) {
    let n;
    if (null == t) return e;
    let s = "?" === t.charAt(0) ? t.substring(1) : t;
    try {
        n = i.parse(s);
    } catch (t) {
        return e;
    }
    let c = r(n[a]),
        _ = u(r(n[o])),
        h = null != _ ? u(r(n[l])) : void 0;
    return d({ baseCode: e, guildScheduledEventId: c, targetChannelId: _, targetMessageId: h });
}
function d(e) {
    let { baseCode: t, guildScheduledEventId: n, targetChannelId: r, targetMessageId: s } = e,
        u = {};
    null != n && (u[a] = n), null != r && ((u[o] = r), null != s && (u[l] = s));
    let c = i.stringify(u);
    return "" === c ? t : `${t}?${c}`;
}
function _(e) {
    let [t, n] = e.split("?");
    if (null == n) return { baseCode: t };
    let s = i.parse(n),
        c = r(s[a]),
        d = u(r(s[o])),
        _ = null != d ? u(r(s[l])) : void 0;
    return { baseCode: t, guildScheduledEventId: c, targetChannelId: d, targetMessageId: _ };
}
function h(e) {
    let [t] = e.split("?");
    return t;
}
function f(e) {
    let t = e.indexOf("?");
    return t >= 0 ? e.substring(t) : "";
}
function p(e, t) {
    if (null == t) return;
    let n = h(e);
    return `${t}:${n}`;
}
