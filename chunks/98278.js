i.d(n, { Gk: () => r, Is: () => c, Sy: () => s });
var e = i(73153);
let a = Date.now();
function s(t, n) {
    let i = { id: String(a++), name: t, prompt: n };
    return e.h.dispatch({ type: "CUSTOM_TEXT_TRANSFORM_ADD", transform: i }), i;
}
function r(t) {
    e.h.dispatch({ type: "CUSTOM_TEXT_TRANSFORM_UPDATE", transform: t });
}
function c(t) {
    e.h.dispatch({ type: "CUSTOM_TEXT_TRANSFORM_DELETE", id: t });
}
