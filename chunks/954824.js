n.d(t, { Z: () => c });
var i = n(525654),
    r = n.n(i),
    a = n(444675);
function s(e, t) {
    if (!e.startsWith('discord:')) return (location.href = e), a.nextTick(() => t(!0));
    let { body: n } = document;
    if (null == n) return a.nextTick(() => t(!1));
    let i = document.createElement('iframe');
    n.appendChild(i);
    try {
        null != i.contentWindow && (i.contentWindow.location.href = e), a.nextTick(() => t(!0));
    } catch (e) {
        'NS_ERROR_UNKNOWN_PROTOCOL' === e.name && a.nextTick(() => t(!1));
    }
    window.setTimeout(() => {
        var e;
        (null !== (e = null == i ? void 0 : i.parentElement) && void 0 !== e ? e : null) !== null && n.removeChild(i);
    }, 1000);
}
function o(e, t) {
    let n = !1;
    function i() {
        n = !0;
    }
    window.addEventListener('blur', i),
        (location.href = e),
        setTimeout(() => {
            window.removeEventListener('blur', i), t(n);
        }, 1000);
}
function l(e, t) {
    t(!1);
}
function u(e, t) {
    (location.href = e), a.nextTick(() => t(!0));
}
let c = {
    launch: (function () {
        var e, t;
        return (null === (e = r().os) || void 0 === e ? void 0 : e.family) === 'Android' || (null === (t = r().os) || void 0 === t ? void 0 : t.family) === 'iOS' ? u : 'Gecko' === r().layout ? s : null != r().ua && -1 !== r().ua.indexOf('Valve Steam GameOverlay') ? l : o;
    })()
};
