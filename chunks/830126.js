"use strict";
n.d(t, { A: () => s });
var r = n(775602),
    i = n(652215);
function s(e, t, n) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    return {
        key: t.key ?? s ?? "modal",
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
