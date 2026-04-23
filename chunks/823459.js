"use strict";
n.d(t, { Py: () => s, S8: () => a, bc: () => i });
var r = n(73153);
let i = (e) => {
        r.h.dispatch({ type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: e });
    },
    s = () => {
        r.h.dispatch({ type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: null });
    },
    a = () => {
        r.h.dispatch({ type: "RESET_PREVIEW_CLIENT_THEME" });
    };
