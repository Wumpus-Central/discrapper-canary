"use strict";
function r() {
    return "u" > typeof window;
}
function a(e) {
    return s(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function i(e) {
    var t;
    return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
}
function o(e) {
    var t;
    return null == (t = (s(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement;
}
function s(e) {
    return !!r() && (e instanceof Node || e instanceof i(e).Node);
}
function l(e) {
    return !!r() && (e instanceof Element || e instanceof i(e).Element);
}
function c(e) {
    return !!r() && (e instanceof HTMLElement || e instanceof i(e).HTMLElement);
}
function u(e) {
    return !(!r() || "u" < typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof i(e).ShadowRoot);
}
n.d(t, {
    $4: () => w,
    CP: () => O,
    L9: () => D,
    Ll: () => s,
    Lv: () => m,
    Ng: () => u,
    Tc: () => S,
    Tf: () => g,
    ZU: () => _,
    _m: () => A,
    ep: () => o,
    eu: () => C,
    gJ: () => v,
    mq: () => a,
    sQ: () => y,
    sb: () => c,
    v9: () =>
        function e(t, n, r) {
            var a;
            void 0 === n && (n = []), void 0 === r && (r = !0);
            let o = (function e(t) {
                    let n = w(t);
                    return C(n) ? (t.ownerDocument ? t.ownerDocument.body : t.body) : c(n) && _(n) ? n : e(n);
                })(t),
                s = o === (null == (a = t.ownerDocument) ? void 0 : a.body),
                l = i(o);
            if (s) {
                let t = A(l);
                return n.concat(l, l.visualViewport || [], _(o) ? o : [], t && r ? e(t) : []);
            }
            return n.concat(o, e(o, [], r));
        },
    vq: () => l,
    zk: () => i,
});
let d = new Set(["inline", "contents"]);
function _(e) {
    let { overflow: t, overflowX: n, overflowY: r, display: a } = D(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !d.has(a);
}
let p = new Set(["table", "td", "th"]);
function m(e) {
    return p.has(a(e));
}
let f = /^(38190|98365)$/.test(n.j) ? null : [":popover-open", ":modal"];
function g(e) {
    return f.some((t) => {
        try {
            return e.matches(t);
        } catch (e) {
            return !1;
        }
    });
}
let h = /^(38190|98365)$/.test(n.j) ? null : ["transform", "translate", "scale", "rotate", "perspective"],
    b = /^(38190|98365)$/.test(n.j) ? null : ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    E = /^(38190|98365)$/.test(n.j) ? null : ["paint", "layout", "strict", "content"];
function y(e) {
    let t = S(),
        n = l(e) ? D(e) : e;
    return (
        h.some((e) => !!n[e] && "none" !== n[e]) ||
        (!!n.containerType && "normal" !== n.containerType) ||
        (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
        (!t && !!n.filter && "none" !== n.filter) ||
        b.some((e) => (n.willChange || "").includes(e)) ||
        E.some((e) => (n.contain || "").includes(e))
    );
}
function v(e) {
    let t = w(e);
    for (; c(t) && !C(t); ) {
        if (y(t)) return t;
        if (g(t)) break;
        t = w(t);
    }
    return null;
}
function S() {
    return !("u" < typeof CSS) && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
}
let T = new Set(["html", "body", "#document"]);
function C(e) {
    return T.has(a(e));
}
function D(e) {
    return i(e).getComputedStyle(e);
}
function O(e) {
    return l(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function w(e) {
    if ("html" === a(e)) return e;
    let t = e.assignedSlot || e.parentNode || (u(e) && e.host) || o(e);
    return u(t) ? t.host : t;
}
function A(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
