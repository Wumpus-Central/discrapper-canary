n.d(t, {
    Ig: () => a,
    UU: () => o,
    ZY: () => i
});
var r = n(392711);
function i(e) {
    return e.__DISCORD_WINDOW_ID;
}
function a(e) {
    let t = (0, r.uniqueId)('window-');
    return (e.__DISCORD_WINDOW_ID = t), t;
}
function o() {
    return i(window);
}
