"use strict";
n.d(t, { Ic: () => o, PQ: () => u, wH: () => l });
var r = n(847521),
    i = n(760751),
    s = n(723702);
function a(e) {
    return (e = e.toLowerCase()).endsWith("/") && (e = e.slice(0, -1)), e;
}
function o(e) {
    return a(e).split("/").slice(-2).join("/");
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
    let t = "exePath" in e ? e.exePath : e.exe,
        n = { id: e.id ?? void 0, name: e.name ?? void 0, exePath: t ?? "", cmdLine: t ?? "", lastFocused: 0 },
        s = i.A.findGame(n);
    return {
        gameName: e.name ?? void 0,
        gameId: e.id ?? s?.id ?? void 0,
        exe: null != t ? o(t) : void 0,
        distributor: e.distributor ?? void 0,
        sku: e.sku ?? void 0,
        gameMetadata: null != e ? (0, r.MT)(e) : void 0,
        rawExePath: t,
    };
}
function u(e, t) {
    if (null == e || null == t) return !1;
    let n = a(e),
        r = (0, s.getPlatformName)();
    return t.some((e) => e.os === r && n?.endsWith(e.name));
}
