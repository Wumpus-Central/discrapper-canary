n.d(t, { A: () => s });
var l = n(17928),
    r = n(73153),
    i = n(31717);
let a = {},
    u = {};
class o extends l.Ay.Store {
    static displayName = "StickerMessagePreviewStore";
    getStickerPreview(e, t) {
        return (t === i.C.FirstThreadMessage ? u : a)[e];
    }
}
let s = new o(r.h, {
    ADD_STICKER_PREVIEW: function (e) {
        let { channelId: t, sticker: n, draftType: l } = e;
        (l === i.C.FirstThreadMessage ? u : a)[t] = [n];
    },
    CLEAR_STICKER_PREVIEW: function (e) {
        let { channelId: t, draftType: n } = e,
            l = n === i.C.FirstThreadMessage ? u : a;
        null != l[t] && delete l[t];
    },
    LOGOUT: function () {
        ((a = {}), (u = {}));
    },
});
