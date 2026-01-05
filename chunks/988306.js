n.d(t, {
    O: () => u,
    u: () => d,
}),
    n(704826),
    n(35282),
    n(415506);
var r = n(209739),
    i = n.n(r),
    a = n(579806),
    o = n(358085);
let s = ">=10.0.22000",
    l = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i,
    c = "{E5323777-F976-4f5b-9B55-B94699C46E44}";
function u() {
    return !!(0, o.isWindows)() && !!o.isPlatformEmbedded && i().satisfies(a.Z.os.release, s);
}
function d(e) {
    return (0, o.getPlatform)() === o.PlatformTypes.WINDOWS
        ? "ms-settings:camera" + (null != e ? "?cameraId=".concat(encodeURIComponent(e.replace(l, c))) : "")
        : "";
}
