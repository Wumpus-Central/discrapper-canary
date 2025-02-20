n.d(t, {
    GR: () => o,
    HQ: () => s,
    gK: () => a,
    wu: () => r
});
let r = ['click', 'mousedown', 'mouseup', 'keydown', 'keyup', 'keypress', 'contextmenu'],
    i = null;
function o() {
    return i;
}
function a(e) {
    i = e;
}
function s(e) {
    i === e && (i = null);
}
