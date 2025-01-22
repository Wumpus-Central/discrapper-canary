var i,
    a = r(442837),
    o = r(570140),
    s = r(703558);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = {},
    c = {};
function d(e) {
    let { channelId: n, sticker: r, draftType: i } = e;
    (i === s.d.FirstThreadMessage ? c : u)[n] = [r];
}
function f(e) {
    let { channelId: n, draftType: r } = e,
        i = r === s.d.FirstThreadMessage ? c : u;
    null != i[n] && delete i[n];
}
function p() {
    (u = {}), (c = {});
}
class h extends (i = a.ZP.Store) {
    getStickerPreview(e, n) {
        return (n === s.d.FirstThreadMessage ? c : u)[e];
    }
}
l(h, 'displayName', 'StickerMessagePreviewStore');
let _ = new h(o.Z, {
    ADD_STICKER_PREVIEW: d,
    CLEAR_STICKER_PREVIEW: f,
    LOGOUT: p
});
n.Z = _;
