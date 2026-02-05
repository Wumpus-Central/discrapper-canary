"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    a = n(31717);
let s = {},
    o = {};
function l(e) {
    let { channelId: t, sticker: n, draftType: r } = e;
    (r === a.C.FirstThreadMessage ? o : s)[t] = [n];
}
function u(e) {
    let { channelId: t, draftType: n } = e,
        r = n === a.C.FirstThreadMessage ? o : s;
    null != r[t] && delete r[t];
}
function c() {
    (s = {}), (o = {});
}
class d extends r.Ay.Store {
    static displayName = "StickerMessagePreviewStore";
    getStickerPreview(e, t) {
        return (t === a.C.FirstThreadMessage ? o : s)[e];
    }
}
let _ = new d(i.h, { ADD_STICKER_PREVIEW: l, CLEAR_STICKER_PREVIEW: u, LOGOUT: c });
