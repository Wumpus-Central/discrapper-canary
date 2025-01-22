var i = r(525654),
    a = r.n(i),
    o = r(444675);
function s(e, n) {
    if (!e.startsWith('discord:')) return (location.href = e), o.nextTick(() => n(!0));
    let { body: r } = document;
    if (null == r) return o.nextTick(() => n(!1));
    let i = document.createElement('iframe');
    r.appendChild(i);
    try {
        null != i.contentWindow && (i.contentWindow.location.href = e), o.nextTick(() => n(!0));
    } catch (e) {
        'NS_ERROR_UNKNOWN_PROTOCOL' === e.name && o.nextTick(() => n(!1));
    }
    window.setTimeout(() => {
        var e;
        (null !== (e = null == i ? void 0 : i.parentElement) && void 0 !== e ? e : null) !== null && r.removeChild(i);
    }, 1000);
}
function l(e, n) {
    let r = !1;
    function i() {
        r = !0;
    }
    window.addEventListener('blur', i),
        (location.href = e),
        setTimeout(() => {
            window.removeEventListener('blur', i), n(r);
        }, 1000);
}
function u(e, n) {
    n(!1);
}
function c(e, n) {
    (location.href = e), o.nextTick(() => n(!0));
}
function d() {
    var e, n;
    if ((null === (e = a().os) || void 0 === e ? void 0 : e.family) === 'Android' || (null === (n = a().os) || void 0 === n ? void 0 : n.family) === 'iOS') return c;
    if ('Gecko' === a().layout) return s;
    if (null != a().ua && -1 !== a().ua.indexOf('Valve Steam GameOverlay')) return u;
    return l;
}
n.Z = { launch: d() };
