n.d(t, { fB: () => c, _U: () => h, WU: () => u, ys: () => A, m0: () => E, LO: () => d, y$: () => _ });
var i = n(488428);
function r(e) {
    return Array.isArray(e) ? e[0] : e;
}
var a = n(935208);
let s = "event",
    l = "channel",
    o = "message";
function d(e) {
    return "string" == typeof e && a.default.isProbablyAValidSnowflake(e) ? e : void 0;
}
function c(e, t) {
    let n;
    if (null == t) return e;
    let a = "?" === t.charAt(0) ? t.substring(1) : t;
    try {
        n = i.parse(a);
    } catch (t) {
        return e;
    }
    let c = r(n[s]),
        _ = d(r(n[l])),
        E = null != _ ? d(r(n[o])) : void 0;
    return u({ baseCode: e, guildScheduledEventId: c, targetChannelId: _, targetMessageId: E });
}
function u(e) {
    let { baseCode: t, guildScheduledEventId: n, targetChannelId: r, targetMessageId: a } = e,
        d = {};
    null != n && (d[s] = n), null != r && ((d[l] = r), null != a && (d[o] = a));
    let c = i.stringify(d);
    return "" === c ? t : `${t}?${c}`;
}
function _(e) {
    let [t, n] = e.split("?");
    if (null == n) return { baseCode: t };
    let a = i.parse(n),
        c = r(a[s]),
        u = d(r(a[l])),
        _ = null != u ? d(r(a[o])) : void 0;
    return { baseCode: t, guildScheduledEventId: c, targetChannelId: u, targetMessageId: _ };
}
function E(e) {
    let [t] = e.split("?");
    return t;
}
function A(e) {
    let t = e.indexOf("?");
    return t >= 0 ? e.substring(t) : "";
}
function h(e, t) {
    if (null == t) return;
    let n = E(e);
    return `${t}:${n}`;
}
