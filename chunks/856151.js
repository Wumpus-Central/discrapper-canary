n.d(t, { D3: () => o, c5: () => l, f2: () => s, iN: () => d });
var i = n(991690),
    r = n(73153);
let a = new Map();
function s(e, t) {
    let n = t.startsWith("#") ? t.slice(1) : t;
    if (0 === n.length) return;
    let i = Date.now();
    for (let [e, t] of a) t.expiresAt <= i && a.delete(e);
    (a.set(e, { hash: n, expiresAt: i + 12e4 }), r.h.dispatch({ type: "FRAME_DEEP_LINK_QUEUED", channelId: e }));
}
function l(e) {
    if (null == e) return null;
    let { surface: t } = e;
    return t.type === i.U.APP_CHANNEL || t.type === i.U.VOICE_CHANNEL ? t.channelId : null;
}
function o(e) {
    let t = a.get(e);
    return null == t ? null : (a.delete(e), t.expiresAt > Date.now() ? t.hash : null);
}
function d() {
    a.clear();
}
