"use strict";
n.d(t, { Ic: () => o, PQ: () => u, wH: () => l });
var r = n(847521),
    i = n(760751),
    a = n(723702);
function s(e) {
    return (e = e.toLowerCase()).endsWith("/") && (e = e.slice(0, -1)), e;
}
function o(e) {
    return s(e).split("/").slice(-2).join("/");
}
function l(e) {
    if (null == e)
        return {
            gameName: void 0,
            gameId: void 0,
            exe: void 0,
            distributor: void 0,
            sku: void 0,
            gameMetadata: void 0,
            rawExePath: void 0,
        };
    let t = i.A.getGameByName(e.name),
        n = "exePath" in e ? e.exePath : e.exe;
    return {
        gameName: e.name ?? void 0,
        gameId: e.id ?? t?.id ?? void 0,
        exe: null != n ? o(n) : void 0,
        distributor: e.distributor ?? void 0,
        sku: e.sku ?? void 0,
        gameMetadata: null != e ? (0, r.MT)(e) : void 0,
        rawExePath: n,
    };
}
function u(e, t) {
    if (null == e || null == t) return !1;
    let n = s(e),
        r = (0, a.getPlatformName)();
    return t.some((e) => e.os === r && n?.endsWith(e.name));
}
