n.d(t, { D3: () => d, GC: () => l, c5: () => o, f2: () => s, iN: () => c });
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
function l(e, t, n) {
    n.length > 0
        ? a.set(e, { hash: n, expiresAt: 1 / 0, applicationId: t })
        : a.get(e)?.applicationId === t && a.delete(e);
}
function o(e) {
    if (null == e) return null;
    let { surface: t } = e;
    return t.type === i.U.APP_CHANNEL || t.type === i.U.VOICE_CHANNEL ? t.channelId : null;
}
function d(e, t) {
    let n = a.get(e);
    return null == n || (null != n.applicationId && n.applicationId !== t)
        ? null
        : (a.delete(e), n.expiresAt > Date.now() ? n.hash : null);
}
function c() {
    a.clear();
}
