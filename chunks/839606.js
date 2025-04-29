n.d(t, {
    B: () => a,
    j: () => o
});
var r = n(290486),
    i = n(731965),
    o = (function (e) {
        return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.COACHMARK = 1)] = 'COACHMARK'), e;
    })({});
let a = (0, r.U)((e) => ({
    activePickerChannelId: void 0,
    previewWallpaperId: void 0,
    lastShownChatWallpaperPickerType: void 0,
    openPickerForChannel: (t) =>
        (0, i.j)(() => {
            e({ activePickerChannelId: t });
        }),
    closePicker: () =>
        (0, i.j)(() => {
            e({
                activePickerChannelId: void 0,
                previewWallpaperId: void 0
            });
        }),
    setPreviewWallpaperId: (t) =>
        (0, i.j)(() => {
            e({ previewWallpaperId: t });
        }),
    setLastShownChatWallpaperPickerType: (t) =>
        (0, i.j)(() => {
            e({ lastShownChatWallpaperPickerType: t });
        })
}));
