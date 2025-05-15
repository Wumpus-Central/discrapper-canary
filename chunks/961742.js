n.d(t, {
    Ad: () => u,
    Bi: () => h,
    Kk: () => i,
    Nv: () => _,
    P9: () => g,
    Vj: () => o,
    _c: () => p,
    mX: () => d,
    oY: () => E,
    qo: () => a
});
var r = n(444675);
function i(e, t) {
    if (e.match(/^[a-z]+:\/\//i)) return e;
    if (e.match(/^\/\//)) return window.location.protocol + e;
    if (e.match(/^[a-z]+:/i)) return e;
    let n = document.implementation.createHTMLDocument(),
        r = n.createElement('base'),
        i = n.createElement('a');
    return n.head.appendChild(r), n.body.appendChild(i), t && (r.href = t), (i.href = e), i.href;
}
let o = (() => {
    let e = 0,
        t = () => `0000${((1679616 * Math.random()) << 0).toString(36)}`.slice(-4);
    return () => ((e += 1), `u${t()}${e}`);
})();
function a(e) {
    let t = [];
    for (let n = 0, r = e.length; n < r; n++) t.push(e[n]);
    return t;
}
function s(e, t) {
    let n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
    return n ? parseFloat(n.replace('px', '')) : 0;
}
function l(e) {
    let t = s(e, 'border-left-width'),
        n = s(e, 'border-right-width');
    return e.clientWidth + t + n;
}
function c(e) {
    let t = s(e, 'border-top-width'),
        n = s(e, 'border-bottom-width');
    return e.clientHeight + t + n;
}
function u(e, t = {}) {
    return {
        width: t.width || l(e),
        height: t.height || c(e)
    };
}
function d() {
    let e, t;
    try {
        t = r;
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
                  let r = window.atob(e.toDataURL(t.type ? t.type : void 0, t.quality ? t.quality : void 0).split(',')[1]),
                      i = r.length,
                      o = new Uint8Array(i);
                  for (let e = 0; e < i; e += 1) o[e] = r.charCodeAt(e);
                  n(new Blob([o], { type: t.type ? t.type : 'image/png' }));
              }
    );
}
function h(e) {
    return new Promise((t, n) => {
        let r = new Image();
        (r.decode = () => t(r)), (r.onload = () => t(r)), (r.onerror = n), (r.crossOrigin = 'anonymous'), (r.decoding = 'async'), (r.src = e);
    });
}
async function m(e) {
    return Promise.resolve()
        .then(() => new XMLSerializer().serializeToString(e))
        .then(encodeURIComponent)
        .then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function g(e, t, n) {
    let r = 'http://www.w3.org/2000/svg',
        i = document.createElementNS(r, 'svg'),
        o = document.createElementNS(r, 'foreignObject');
    return i.setAttribute('width', `${t}`), i.setAttribute('height', `${n}`), i.setAttribute('viewBox', `0 0 ${t} ${n}`), o.setAttribute('width', '100%'), o.setAttribute('height', '100%'), o.setAttribute('x', '0'), o.setAttribute('y', '0'), o.setAttribute('externalResourcesRequired', 'true'), i.appendChild(o), o.appendChild(e), m(i);
}
let E = (e, t) => {
    if (e instanceof t) return !0;
    let n = Object.getPrototypeOf(e);
    return null !== n && (n.constructor.name === t.name || E(n, t));
};
