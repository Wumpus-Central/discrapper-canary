"use strict";
n.d(t, { A: () => c });
var i = n(481613),
    r = n.n(i),
    s = n(72290);
function a(e, t) {
    if (!e.startsWith("discord:")) return (location.href = e), s.nextTick(() => t(!0));
    let { body: n } = document;
    if (null == n) return s.nextTick(() => t(!1));
    let i = document.createElement("iframe");
    n.appendChild(i);
    try {
        null != i.contentWindow && (i.contentWindow.location.href = e), s.nextTick(() => t(!0));
    } catch (e) {
        "NS_ERROR_UNKNOWN_PROTOCOL" === e.name && s.nextTick(() => t(!1));
    }
    window.setTimeout(() => {
        (i?.parentElement ?? null) !== null && n.removeChild(i);
    }, 1e3);
}
function o(e, t) {
    let n = !1;
    function i() {
        n = !0;
    }
    window.addEventListener("blur", i),
        (location.href = e),
        setTimeout(() => {
            window.removeEventListener("blur", i), t(n);
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
        r().os?.family === "Android" || r().os?.family === "iOS"
            ? u
            : "Gecko" === r().layout
              ? a
              : null != r().ua && -1 !== r().ua.indexOf("Valve Steam GameOverlay")
                ? l
                : o,
};
