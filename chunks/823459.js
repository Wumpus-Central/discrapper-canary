"use strict";
n.d(t, { Py: () => s, S8: () => a, bc: () => r });
var i = n(228366);
let r = (e) => {
        i.h.dispatch({ type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: e });
    },
    s = () => {
        i.h.dispatch({ type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: null });
    },
    a = () => {
        i.h.dispatch({ type: "RESET_PREVIEW_CLIENT_THEME" });
    };
