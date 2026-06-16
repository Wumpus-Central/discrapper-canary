i.d(n, { Gk: () => r, Is: () => l, Sy: () => s });
var a = i(228366);
let e = Date.now();
function s(t, n) {
    let i = { id: String(e++), name: t, prompt: n };
    return a.h.dispatch({ type: "CUSTOM_TEXT_TRANSFORM_ADD", transform: i }), i;
}
function r(t) {
    a.h.dispatch({ type: "CUSTOM_TEXT_TRANSFORM_UPDATE", transform: t });
}
function l(t) {
    a.h.dispatch({ type: "CUSTOM_TEXT_TRANSFORM_DELETE", id: t });
}
