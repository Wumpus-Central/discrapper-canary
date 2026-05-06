"use strict";
n.d(t, { AA: () => r, Ym: () => a, tj: () => s });
let i = (0, n(945810).mj)({
    name: "2026-03-soundmoji-sending",
    kind: "user",
    defaultConfig: { enabled: !1, showSoundmojiInEmojiPicker: !1 },
    variations: {
        1: { enabled: !0, showSoundmojiInEmojiPicker: !1 },
        2: { enabled: !0, showSoundmojiInEmojiPicker: !0 },
    },
});
function r(e) {
    let { location: t } = e;
    return i.getConfig({ location: t }).enabled;
}
function s(e) {
    let { location: t } = e;
    return i.useConfig({ location: t }).enabled;
}
function a(e) {
    let { location: t } = e;
    return i.useConfig({ location: t }).showSoundmojiInEmojiPicker;
}
