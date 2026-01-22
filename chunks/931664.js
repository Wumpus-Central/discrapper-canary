n.d(t, { A: () => _ });
var r,
    i = n(311907),
    a = n(73153),
    s = n(31717);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let l = {},
    c = {};
function u(e) {
    let { channelId: t, sticker: n, draftType: r } = e;
    (r === s.C.FirstThreadMessage ? c : l)[t] = [n];
}
function d(e) {
    let { channelId: t, draftType: n } = e,
        r = n === s.C.FirstThreadMessage ? c : l;
    null != r[t] && delete r[t];
}
function f() {
    (l = {}), (c = {});
}
class p extends (r = i.Ay.Store) {
    getStickerPreview(e, t) {
        return (t === s.C.FirstThreadMessage ? c : l)[e];
    }
}
o(p, "displayName", "StickerMessagePreviewStore");
let _ = new p(a.h, {
    ADD_STICKER_PREVIEW: u,
    CLEAR_STICKER_PREVIEW: d,
    LOGOUT: f,
});
