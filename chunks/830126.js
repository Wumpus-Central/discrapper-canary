"use strict";
n.d(t, { A: () => a });
var r = n(775602),
    i = n(652215);
function a(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    return {
        key: t.key ?? a ?? "modal",
        modal: e,
        animation: t.animation ?? (r.A.useReducedMotion ? i.WMy.FADE : i.WMy.SLIDE_UP),
        shouldPersistUnderModals: t.shouldPersistUnderModals ?? !1,
        props: n,
        backdropStyle: t.backdropStyle ?? null,
        backdropInstant: t.backdropInstant ?? !1,
        disableAnimation: t.disableAnimation ?? !1,
        closable: "boolean" != typeof t.closable || t.closable,
        label: t.label ?? "",
        callbacks: {},
    };
}
