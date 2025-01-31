n.d(t, {
    GR: () => a,
    HQ: () => o,
    gK: () => s,
    wu: () => i
});
let i = ['click', 'mousedown', 'mouseup', 'keydown', 'keyup', 'keypress', 'contextmenu'],
    r = null;
function a() {
    return r;
}
function s(e) {
    r = e;
}
function o(e) {
    r === e && (r = null);
}
