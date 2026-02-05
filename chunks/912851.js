"use strict";
n.d(t, { A: () => i });
var r = n(73153);
let i = {
    show(e, t, n, i, a) {
        r.h.dispatch({ type: "NOTICE_SHOW", notice: { id: a, type: e, message: t, buttonText: n, callback: i } });
    },
    dismiss(e) {
        r.h.dispatch({ type: "NOTICE_DISMISS", ...e });
    },
};
