"use strict";
n.d(t, { A: () => c });
var i = n(481613),
    r = n.n(i),
    a = n(72290);
function s(e, t) {
    if (!e.startsWith("discord:")) return (location.href = e), a.nextTick(() => t(!0));
    let { body: n } = document;
    if (null == n) return a.nextTick(() => t(!1));
    let i = document.createElement("iframe");
    n.appendChild(i);
    try {
        null != i.contentWindow && (i.contentWindow.location.href = e), a.nextTick(() => t(!0));
    } catch (e) {
        "NS_ERROR_UNKNOWN_PROTOCOL" === e.name && a.nextTick(() => t(!1));
    }
    window.setTimeout(() => {
        (i?.parentElement ?? null) !== null && n.removeChild(i);
    }, 1e3);
}
function l(e, t) {
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
function o(e, t) {
    t(!1);
}
function d(e, t) {
    (location.href = e), a.nextTick(() => t(!0));
}
let c = {
    launch:
        r().os?.family === "Android" || r().os?.family === "iOS"
            ? d
            : "Gecko" === r().layout
              ? s
              : null != r().ua && -1 !== r().ua.indexOf("Valve Steam GameOverlay")
                ? o
                : l,
};
