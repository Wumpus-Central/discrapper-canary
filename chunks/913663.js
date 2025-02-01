n.d(t, { Z: () => p });
var i,
    r = n(442837),
    a = n(570140),
    s = n(703558);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = {},
    u = {};
function c(e) {
    let { channelId: t, sticker: n, draftType: i } = e;
    (i === s.d.FirstThreadMessage ? u : l)[t] = [n];
}
function d(e) {
    let { channelId: t, draftType: n } = e,
        i = n === s.d.FirstThreadMessage ? u : l;
    null != i[t] && delete i[t];
}
function f() {
    (l = {}), (u = {});
}
class _ extends (i = r.ZP.Store) {
    getStickerPreview(e, t) {
        return (t === s.d.FirstThreadMessage ? u : l)[e];
    }
}
o(_, 'displayName', 'StickerMessagePreviewStore');
let p = new _(a.Z, {
    ADD_STICKER_PREVIEW: c,
    CLEAR_STICKER_PREVIEW: d,
    LOGOUT: f
});
