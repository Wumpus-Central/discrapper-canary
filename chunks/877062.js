"use strict";
n.d(t, { A: () => c });
var r = n(481613),
    i = n.n(r),
    s = n(72290);
function a(e, t) {
    if (!e.startsWith("discord:")) return (location.href = e), s.nextTick(() => t(!0));
    let { body: n } = document;
    if (null == n) return s.nextTick(() => t(!1));
    let r = document.createElement("iframe");
    n.appendChild(r);
    try {
        null != r.contentWindow && (r.contentWindow.location.href = e), s.nextTick(() => t(!0));
    } catch (e) {
        "NS_ERROR_UNKNOWN_PROTOCOL" === e.name && s.nextTick(() => t(!1));
    }
    window.setTimeout(() => {
        (r?.parentElement ?? null) !== null && n.removeChild(r);
    }, 1e3);
}
function o(e, t) {
    let n = !1;
    function r() {
        n = !0;
    }
    window.addEventListener("blur", r),
        (location.href = e),
        setTimeout(() => {
            window.removeEventListener("blur", r), t(n);
        }, 1e3);
}
function l(e, t) {
    t(!1);
}
function u(e, t) {
    (location.href = e), s.nextTick(() => t(!0));
}
let c = {
    launch:
        i().os?.family === "Android" || i().os?.family === "iOS"
            ? u
            : "Gecko" === i().layout
              ? a
              : null != i().ua && -1 !== i().ua.indexOf("Valve Steam GameOverlay")
                ? l
                : o,
};
