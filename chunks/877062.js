n.d(t, { A: () => c });
var i = n(481613),
    a = n.n(i),
    r = n(72290);
function s(e, t) {
    if (!e.startsWith("discord:")) return (location.href = e), r.nextTick(() => t(!0));
    let { body: n } = document;
    if (null == n) return r.nextTick(() => t(!1));
    let i = document.createElement("iframe");
    n.appendChild(i);
    try {
        null != i.contentWindow && (i.contentWindow.location.href = e), r.nextTick(() => t(!0));
    } catch (e) {
        "NS_ERROR_UNKNOWN_PROTOCOL" === e.name && r.nextTick(() => t(!1));
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
    (location.href = e), r.nextTick(() => t(!0));
}
let c = {
    launch:
        a().os?.family === "Android" || a().os?.family === "iOS"
            ? d
            : "Gecko" === a().layout
              ? s
              : null != a().ua && -1 !== a().ua.indexOf("Valve Steam GameOverlay")
                ? o
                : l,
};
