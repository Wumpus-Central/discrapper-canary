"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    a = n(31717);
let s = {},
    l = {};
class o extends i.Ay.Store {
    static displayName = "StickerMessagePreviewStore";
    getStickerPreview(e, t) {
        return (t === a.C.FirstThreadMessage ? l : s)[e];
    }
}
let d = new o(r.h, {
    ADD_STICKER_PREVIEW: function (e) {
        let { channelId: t, sticker: n, draftType: i } = e;
        (i === a.C.FirstThreadMessage ? l : s)[t] = [n];
    },
    CLEAR_STICKER_PREVIEW: function (e) {
        let { channelId: t, draftType: n } = e,
            i = n === a.C.FirstThreadMessage ? l : s;
        null != i[t] && delete i[t];
    },
    LOGOUT: function () {
        (s = {}), (l = {});
    },
});
