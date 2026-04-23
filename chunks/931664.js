"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    s = n(31717);
let a = {},
    o = {};
class l extends i.Ay.Store {
    static displayName = "StickerMessagePreviewStore";
    getStickerPreview(e, t) {
        return (t === s.C.FirstThreadMessage ? o : a)[e];
    }
}
let d = new l(r.h, {
    ADD_STICKER_PREVIEW: function (e) {
        let { channelId: t, sticker: n, draftType: i } = e;
        (i === s.C.FirstThreadMessage ? o : a)[t] = [n];
    },
    CLEAR_STICKER_PREVIEW: function (e) {
        let { channelId: t, draftType: n } = e,
            i = n === s.C.FirstThreadMessage ? o : a;
        null != i[t] && delete i[t];
    },
    LOGOUT: function () {
        (a = {}), (o = {});
    },
});
