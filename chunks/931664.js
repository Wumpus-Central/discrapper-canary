"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153),
    s = n(31717);
let a = {},
    o = {};
class l extends r.Ay.Store {
    static displayName = "StickerMessagePreviewStore";
    getStickerPreview(e, t) {
        return (t === s.C.FirstThreadMessage ? o : a)[e];
    }
}
let u = new l(i.h, {
    ADD_STICKER_PREVIEW: function (e) {
        let { channelId: t, sticker: n, draftType: r } = e;
        (r === s.C.FirstThreadMessage ? o : a)[t] = [n];
    },
    CLEAR_STICKER_PREVIEW: function (e) {
        let { channelId: t, draftType: n } = e,
            r = n === s.C.FirstThreadMessage ? o : a;
        null != r[t] && delete r[t];
    },
    LOGOUT: function () {
        (a = {}), (o = {});
    },
});
