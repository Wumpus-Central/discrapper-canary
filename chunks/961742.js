function i(e, n) {
    if (e.match(/^[a-z]+:\/\//i)) return e;
    if (e.match(/^\/\//)) return window.location.protocol + e;
    if (e.match(/^[a-z]+:/i)) return e;
    let r = document.implementation.createHTMLDocument(),
        i = r.createElement('base'),
        a = r.createElement('a');
    return r.head.appendChild(i), r.body.appendChild(a), n && (i.href = n), (a.href = e), a.href;
}
r.d(n, {
    Ad: function () {
        return c;
    },
    Bi: function () {
        return _;
    },
    Kk: function () {
        return i;
    },
    Nv: function () {
        return p;
    },
    P9: function () {
        return g;
    },
    Vj: function () {
        return a;
    },
    _c: function () {
        return h;
    },
    mX: function () {
        return d;
    },
    oY: function () {
        return E;
    },
    qo: function () {
        return o;
    }
});
let a = (() => {
    let e = 0,
        n = () => `0000${((1679616 * Math.random()) << 0).toString(36)}`.slice(-4);
    return () => ((e += 1), `u${n()}${e}`);
})();
function o(e) {
    let n = [];
    for (let r = 0, i = e.length; r < i; r++) n.push(e[r]);
    return n;
}
function s(e, n) {
    let r = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(n);
    return r ? parseFloat(r.replace('px', '')) : 0;
}
function l(e) {
    let n = s(e, 'border-left-width'),
        r = s(e, 'border-right-width');
    return e.clientWidth + n + r;
}
function u(e) {
    let n = s(e, 'border-top-width'),
        r = s(e, 'border-bottom-width');
    return e.clientHeight + n + r;
}
function c(e, n = {}) {
    let r = n.width || l(e);
    return {
        width: r,
        height: n.height || u(e)
    };
}
function d() {
    let e, n;
    try {
        n = process;
    } catch (e) {}
    let r = n && n.env ? n.env.devicePixelRatio : null;
    return r && Number.isNaN((e = parseInt(r, 10))) && (e = 1), e || window.devicePixelRatio || 1;
}
let f = 16384;
function p(e) {
    (e.width > f || e.height > f) && (e.width > f && e.height > f ? (e.width > e.height ? ((e.height *= f / e.width), (e.width = f)) : ((e.width *= f / e.height), (e.height = f))) : e.width > f ? ((e.height *= f / e.width), (e.width = f)) : ((e.width *= f / e.height), (e.height = f)));
}
function h(e, n = {}) {
    return e.toBlob
        ? new Promise((r) => {
              e.toBlob(r, n.type ? n.type : 'image/png', n.quality ? n.quality : 1);
          })
        : new Promise((r) => {
              let i = window.atob(e.toDataURL(n.type ? n.type : void 0, n.quality ? n.quality : void 0).split(',')[1]),
                  a = i.length,
                  o = new Uint8Array(a);
              for (let e = 0; e < a; e += 1) o[e] = i.charCodeAt(e);
              r(new Blob([o], { type: n.type ? n.type : 'image/png' }));
          });
}
function _(e) {
    return new Promise((n, r) => {
        let i = new Image();
        (i.decode = () => n(i)), (i.onload = () => n(i)), (i.onerror = r), (i.crossOrigin = 'anonymous'), (i.decoding = 'async'), (i.src = e);
    });
}
async function m(e) {
    return Promise.resolve()
        .then(() => new XMLSerializer().serializeToString(e))
        .then(encodeURIComponent)
        .then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function g(e, n, r) {
    let i = 'http://www.w3.org/2000/svg',
        a = document.createElementNS(i, 'svg'),
        o = document.createElementNS(i, 'foreignObject');
    return a.setAttribute('width', `${n}`), a.setAttribute('height', `${r}`), a.setAttribute('viewBox', `0 0 ${n} ${r}`), o.setAttribute('width', '100%'), o.setAttribute('height', '100%'), o.setAttribute('x', '0'), o.setAttribute('y', '0'), o.setAttribute('externalResourcesRequired', 'true'), a.appendChild(o), o.appendChild(e), m(a);
}
let E = (e, n) => {
    if (e instanceof n) return !0;
    let r = Object.getPrototypeOf(e);
    return null !== r && (r.constructor.name === n.name || E(r, n));
};
