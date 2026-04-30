"use strict";
n.d(t, { fB: () => a, _U: () => c, WU: () => o, m0: () => u, y$: () => l });
var i = n(488428);
function r(e) {
    return Array.isArray(e) ? e[0] : e;
}
let s = "event";
function a(e, t) {
    return null == t
        ? e
        : o({
              baseCode: e,
              guildScheduledEventId: (function (e) {
                  let t = "?" === e.charAt(0) ? e.substring(1) : e;
                  try {
                      let e = i.parse(t);
                      return r(e[s]);
                  } catch (e) {
                      return;
                  }
              })(t),
          });
}
function o(e) {
    let { baseCode: t, guildScheduledEventId: n } = e;
    return null == n ? t : `${t}?${s}=${n}`;
}
function l(e) {
    let [t, n] = e.split("?");
    return null == n ? { baseCode: t } : { baseCode: t, guildScheduledEventId: r(i.parse(n)[s]) };
}
function u(e) {
    let [t] = e.split("?");
    return t;
}
function c(e, t) {
    if (null == t) return;
    let n = u(e);
    return `${t}:${n}`;
}
