n.d(t, {
    Ad: () => c,
    Bi: () => h,
    Kk: () => r,
    Nv: () => _,
    P9: () => g,
    Vj: () => a,
    _c: () => p,
    mX: () => d,
    oY: () => E,
    qo: () => s
});
var i = n(444675);
function r(e, t) {
    if (e.match(/^[a-z]+:\/\//i)) return e;
    if (e.match(/^\/\//)) return window.location.protocol + e;
    if (e.match(/^[a-z]+:/i)) return e;
    let n = document.implementation.createHTMLDocument(),
        i = n.createElement('base'),
        r = n.createElement('a');
    return n.head.appendChild(i), n.body.appendChild(r), t && (i.href = t), (r.href = e), r.href;
}
let a = (() => {
    let e = 0,
        t = () => `0000${((1679616 * Math.random()) << 0).toString(36)}`.slice(-4);
    return () => ((e += 1), `u${t()}${e}`);
})();
function s(e) {
    let t = [];
    for (let n = 0, i = e.length; n < i; n++) t.push(e[n]);
    return t;
}
function o(e, t) {
    let n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
    return n ? parseFloat(n.replace('px', '')) : 0;
}
function l(e) {
    let t = o(e, 'border-left-width'),
        n = o(e, 'border-right-width');
    return e.clientWidth + t + n;
}
function u(e) {
    let t = o(e, 'border-top-width'),
        n = o(e, 'border-bottom-width');
    return e.clientHeight + t + n;
}
function c(e, t = {}) {
    return {
        width: t.width || l(e),
        height: t.height || u(e)
    };
}
function d() {
    let e, t;
    try {
        t = i;
    } catch (e) {}
    let n = t && t.env ? t.env.devicePixelRatio : null;
    return n && Number.isNaN((e = parseInt(n, 10))) && (e = 1), e || window.devicePixelRatio || 1;
}
let f = 16384;
function _(e) {
    (e.width > f || e.height > f) && (e.width > f && e.height > f ? (e.width > e.height ? ((e.height *= f / e.width), (e.width = f)) : ((e.width *= f / e.height), (e.height = f))) : e.width > f ? ((e.height *= f / e.width), (e.width = f)) : ((e.width *= f / e.height), (e.height = f)));
}
function p(e, t = {}) {
    return new Promise(
        e.toBlob
            ? (n) => {
                  e.toBlob(n, t.type ? t.type : 'image/png', t.quality ? t.quality : 1);
              }
            : (n) => {
                  let i = window.atob(e.toDataURL(t.type ? t.type : void 0, t.quality ? t.quality : void 0).split(',')[1]),
                      r = i.length,
                      a = new Uint8Array(r);
                  for (let e = 0; e < r; e += 1) a[e] = i.charCodeAt(e);
                  n(new Blob([a], { type: t.type ? t.type : 'image/png' }));
              }
    );
}
function h(e) {
    return new Promise((t, n) => {
        let i = new Image();
        (i.decode = () => t(i)), (i.onload = () => t(i)), (i.onerror = n), (i.crossOrigin = 'anonymous'), (i.decoding = 'async'), (i.src = e);
    });
}
async function m(e) {
    return Promise.resolve()
        .then(() => new XMLSerializer().serializeToString(e))
        .then(encodeURIComponent)
        .then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function g(e, t, n) {
    let i = 'http://www.w3.org/2000/svg',
        r = document.createElementNS(i, 'svg'),
        a = document.createElementNS(i, 'foreignObject');
    return r.setAttribute('width', `${t}`), r.setAttribute('height', `${n}`), r.setAttribute('viewBox', `0 0 ${t} ${n}`), a.setAttribute('width', '100%'), a.setAttribute('height', '100%'), a.setAttribute('x', '0'), a.setAttribute('y', '0'), a.setAttribute('externalResourcesRequired', 'true'), r.appendChild(a), a.appendChild(e), m(r);
}
let E = (e, t) => {
    if (e instanceof t) return !0;
    let n = Object.getPrototypeOf(e);
    return null !== n && (n.constructor.name === t.name || E(n, t));
};
