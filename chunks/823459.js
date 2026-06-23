"use strict";
n.d(t, { Py: () => s, S8: () => a, bc: () => r });
var i = n(228366);
function r(e) {
    i.h.dispatch({ type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: e });
}
function s() {
    i.h.dispatch({ type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: null });
}
function a() {
    i.h.dispatch({ type: "RESET_PREVIEW_CLIENT_THEME" });
}
