r.d(n, {
    Ig: function () {
        return o;
    },
    UU: function () {
        return s;
    },
    ZY: function () {
        return a;
    }
});
var i = r(392711);
function a(e) {
    return e.__DISCORD_WINDOW_ID;
}
function o(e) {
    let n = (0, i.uniqueId)('window-');
    return (e.__DISCORD_WINDOW_ID = n), n;
}
function s() {
    return a(window);
}
