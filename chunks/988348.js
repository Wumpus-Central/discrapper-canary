n.d(t, {
    G: () => s,
    N: () => a
}),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733);
var r = n(998502);
let i = null;
function a() {
    return null == i && (i = o()), i;
}
function o() {
    if (null == window.DiscordNative || void 0 === window.Uint8Array || void 0 === window.TextDecoder) return !1;
    try {
        let e = r.ZP.requireModule('discord_zstd');
        if (null == e) return !1;
        return !0;
    } catch (e) {
        if (e.message.includes('Cannot find')) return r.ZP.ensureModule('discord_zstd').catch((e) => {}), !1;
        throw e;
    }
}
function s() {
    if (!a()) return;
    let { createContext: e } = r.ZP.requireModule('discord_zstd');
    return e();
}
