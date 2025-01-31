n.d(t, {
    Ig: () => a,
    UU: () => s,
    ZY: () => r
});
var i = n(392711);
function r(e) {
    return e.__DISCORD_WINDOW_ID;
}
function a(e) {
    let t = (0, i.uniqueId)('window-');
    return (e.__DISCORD_WINDOW_ID = t), t;
}
function s() {
    return r(window);
}
