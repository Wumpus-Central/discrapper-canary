n.d(t, {
    G: () => o,
    N: () => a
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
    n(873817);
var i = n(998502);
let r = null;
function a() {
    return null == r && (r = s()), r;
}
function s() {
    if (null == window.DiscordNative || void 0 === window.Uint8Array || void 0 === window.TextDecoder) return !1;
    try {
        return i.ZP.requireModule('discord_zstd'), !0;
    } catch (e) {
        if (e.message.includes('Cannot find')) return i.ZP.ensureModule('discord_zstd').catch((e) => {}), !1;
        throw e;
    }
}
function o() {
    let { createContext: e } = i.ZP.requireModule('discord_zstd');
    return e();
}
