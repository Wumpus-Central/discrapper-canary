"use strict";
n.d(t, { E: () => l, T: () => s });
var i = n(73153);
function s(e) {
    i.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 });
}
function l(e) {
    i.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: e, expand: !1 });
}
