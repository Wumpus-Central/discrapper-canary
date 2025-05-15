n.d(t, {
    GR: () => a,
    HQ: () => s,
    gK: () => o,
    wu: () => r
});
let r = ['click', 'mousedown', 'mouseup', 'keydown', 'keyup', 'keypress', 'contextmenu'],
    i = null;
function a() {
    return i;
}
function o(e) {
    i = e;
}
function s(e) {
    i === e && (i = null);
}
