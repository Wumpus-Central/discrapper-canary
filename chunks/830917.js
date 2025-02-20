n.d(t, {
    Ig: () => o,
    UU: () => a,
    ZY: () => i
});
var r = n(392711);
function i(e) {
    return e.__DISCORD_WINDOW_ID;
}
function o(e) {
    let t = (0, r.uniqueId)('window-');
    return (e.__DISCORD_WINDOW_ID = t), t;
}
function a() {
    return i(window);
}
