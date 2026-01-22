n.d(t, {
    E: () => i,
    T: () => l,
});
var r = n(73153);

function l(e) {
    r.h.dispatch({
        type: "VOICE_CATEGORY_EXPAND",
        guildId: e,
        expand: !0,
    });
}

function i(e) {
    r.h.dispatch({
        type: "VOICE_CATEGORY_COLLAPSE",
        guildId: e,
        expand: !1,
    });
}
