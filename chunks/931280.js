"use strict";
n.d(t, { b: () => o });
var r = n(627968),
    i = n(397927),
    s = n(99787);
let a = 5e3;
function o(e, t) {
    (0, i.showToast)({
        message: "",
        type: i.ToastType.CUSTOM,
        id: `unlock-achievement-toast-${e}`,
        options: { component: (0, r.jsx)(s.A, { achievementId: e, achievementProgress: t }), duration: a },
    });
}
