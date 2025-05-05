n.d(t, { Z: () => p });
var r,
    i = n(442837),
    a = n(570140),
    o = n(703558);
function s(e, t, n) {
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
    c = {};
function u(e) {
    let { channelId: t, sticker: n, draftType: r } = e;
    (r === o.d.FirstThreadMessage ? c : l)[t] = [n];
}
function d(e) {
    let { channelId: t, draftType: n } = e,
        r = n === o.d.FirstThreadMessage ? c : l;
    null != r[t] && delete r[t];
}
function f() {
    (l = {}), (c = {});
}
class _ extends (r = i.ZP.Store) {
    getStickerPreview(e, t) {
        return (t === o.d.FirstThreadMessage ? c : l)[e];
    }
}
s(_, 'displayName', 'StickerMessagePreviewStore');
let p = new _(a.Z, {
    ADD_STICKER_PREVIEW: u,
    CLEAR_STICKER_PREVIEW: d,
    LOGOUT: f
});
