n.d(t, { Ic: () => s, PQ: () => u, wH: () => o });
var i = n(871633),
    r = n(760751),
    a = n(723702);
function l(e) {
    return (e = e.toLowerCase()).endsWith("/") && (e = e.slice(0, -1)), e;
}
function s(e) {
    return l(e).split("/").slice(-2).join("/");
}
function o(e) {
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
        a = r.A.findGame(n);
    return {
        gameName: e.name ?? void 0,
        gameId: e.id ?? a?.id ?? void 0,
        exe: null != t ? s(t) : void 0,
        distributor: e.distributor ?? void 0,
        sku: e.sku ?? void 0,
        gameMetadata: null != e ? (0, i.MT)(e) : void 0,
        rawExePath: t,
    };
}
function u(e, t) {
    if (null == e || null == t) return !1;
    let n = l(e),
        i = (0, a.getPlatformName)();
    return t.some((e) => e.os === i && n?.endsWith(e.name));
}
