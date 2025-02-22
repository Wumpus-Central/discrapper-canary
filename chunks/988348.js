n.d(t, {
    G: () => s,
    N: () => o
}),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(610885),
    n(126298);
var r = n(998502);
let i = null;
function o() {
    return null == i && (i = a()), i;
}
function a() {
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
    if (!o()) return;
    let { createContext: e } = r.ZP.requireModule('discord_zstd');
    return e();
}
