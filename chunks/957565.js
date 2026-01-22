n.d(t, {
    C: () => d,
    p5: () => u,
}),
    n(65821);
var r,
    i,
    a = n(723702),
    s = n(728458),
    o = n(837921);
let l = a.isPlatformEmbedded && null != o.Ay.copy,
    c = "function" == typeof (null == (i = window.navigator) || null == (r = i.clipboard) ? void 0 : r.writeText),
    u = l || c;
async function d(e, t, n) {
    if (!u) {
        null == n || n(Error("Clipboard API not supported."));
        return;
    }
    try {
        l ? o.Ay.copy(e) : await window.navigator.clipboard.writeText(e), null == t || t();
    } catch (e) {
        null == n || n(e), s.A.captureException(e);
    }
}
