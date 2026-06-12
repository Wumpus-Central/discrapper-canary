"use strict";
function i() {
    return "u" > typeof window;
}
function r(e) {
    return o(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function s(e) {
    var t;
    return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
}
function a(e) {
    var t;
    return null == (t = (o(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement;
}
function o(e) {
    return !!i() && (e instanceof Node || e instanceof s(e).Node);
}
function l(e) {
    return !!i() && (e instanceof Element || e instanceof s(e).Element);
}
function u(e) {
    return !!i() && (e instanceof HTMLElement || e instanceof s(e).HTMLElement);
}
function c(e) {
    return !(!i() || "u" < typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof s(e).ShadowRoot);
}
n.d(t, {
    $4: () => R,
    CP: () => C,
    L9: () => v,
    Ll: () => o,
    Lv: () => f,
    Ng: () => c,
    Tc: () => S,
    Tf: () => E,
    ZU: () => _,
    _m: () => O,
    ep: () => a,
    eu: () => N,
    gJ: () => T,
    mq: () => r,
    sQ: () => I,
    sb: () => u,
    v9: () =>
        function e(t, n, i) {
            var r;
            void 0 === n && (n = []), void 0 === i && (i = !0);
            let a = (function e(t) {
                    let n = R(t);
                    return N(n) ? (t.ownerDocument ? t.ownerDocument.body : t.body) : u(n) && _(n) ? n : e(n);
                })(t),
                o = a === (null == (r = t.ownerDocument) ? void 0 : r.body),
                l = s(a);
            if (o) {
                let t = O(l);
                return n.concat(l, l.visualViewport || [], _(a) ? a : [], t && i ? e(t) : []);
            }
            return n.concat(a, e(a, [], i));
        },
    vq: () => l,
    zk: () => s,
});
let d = new Set(["inline", "contents"]);
function _(e) {
    let { overflow: t, overflowX: n, overflowY: i, display: r } = v(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !d.has(r);
}
let h = new Set(["table", "td", "th"]);
function f(e) {
    return h.has(r(e));
}
let p = [":popover-open", ":modal"];
function E(e) {
    return p.some((t) => {
        try {
            return e.matches(t);
        } catch (e) {
            return !1;
        }
    });
}
let m = ["transform", "translate", "scale", "rotate", "perspective"],
    g = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    A = ["paint", "layout", "strict", "content"];
function I(e) {
    let t = S(),
        n = l(e) ? v(e) : e;
    return (
        m.some((e) => !!n[e] && "none" !== n[e]) ||
        (!!n.containerType && "normal" !== n.containerType) ||
        (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
        (!t && !!n.filter && "none" !== n.filter) ||
        g.some((e) => (n.willChange || "").includes(e)) ||
        A.some((e) => (n.contain || "").includes(e))
    );
}
function T(e) {
    let t = R(e);
    for (; u(t) && !N(t); ) {
        if (I(t)) return t;
        if (E(t)) break;
        t = R(t);
    }
    return null;
}
function S() {
    return !("u" < typeof CSS) && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
}
let y = new Set(["html", "body", "#document"]);
function N(e) {
    return y.has(r(e));
}
function v(e) {
    return s(e).getComputedStyle(e);
}
function C(e) {
    return l(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function R(e) {
    if ("html" === r(e)) return e;
    let t = e.assignedSlot || e.parentNode || (c(e) && e.host) || a(e);
    return c(t) ? t.host : t;
}
function O(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
