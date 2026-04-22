"use strict";
function r() {
    return "u" > typeof window;
}
function i(e) {
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
    return !!r() && (e instanceof Node || e instanceof s(e).Node);
}
function l(e) {
    return !!r() && (e instanceof Element || e instanceof s(e).Element);
}
function u(e) {
    return !!r() && (e instanceof HTMLElement || e instanceof s(e).HTMLElement);
}
function d(e) {
    return !(!r() || "u" < typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof s(e).ShadowRoot);
}
n.d(t, {
    $4: () => v,
    CP: () => R,
    L9: () => O,
    Ll: () => o,
    Lv: () => E,
    Ng: () => d,
    Tc: () => S,
    Tf: () => p,
    ZU: () => _,
    _m: () => C,
    ep: () => a,
    eu: () => N,
    gJ: () => T,
    mq: () => i,
    sQ: () => I,
    sb: () => u,
    v9: () =>
        function e(t, n, r) {
            var i;
            void 0 === n && (n = []), void 0 === r && (r = !0);
            let a = (function e(t) {
                    let n = v(t);
                    return N(n) ? (t.ownerDocument ? t.ownerDocument.body : t.body) : u(n) && _(n) ? n : e(n);
                })(t),
                o = a === (null == (i = t.ownerDocument) ? void 0 : i.body),
                l = s(a);
            if (o) {
                let t = C(l);
                return n.concat(l, l.visualViewport || [], _(a) ? a : [], t && r ? e(t) : []);
            }
            return n.concat(a, e(a, [], r));
        },
    vq: () => l,
    zk: () => s,
});
let c = new Set(["inline", "contents"]);
function _(e) {
    let { overflow: t, overflowX: n, overflowY: r, display: i } = O(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !c.has(i);
}
let f = new Set(["table", "td", "th"]);
function E(e) {
    return f.has(i(e));
}
let h = [":popover-open", ":modal"];
function p(e) {
    return h.some((t) => {
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
        n = l(e) ? O(e) : e;
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
    let t = v(e);
    for (; u(t) && !N(t); ) {
        if (I(t)) return t;
        if (p(t)) break;
        t = v(t);
    }
    return null;
}
function S() {
    return !("u" < typeof CSS) && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
}
let y = new Set(["html", "body", "#document"]);
function N(e) {
    return y.has(i(e));
}
function O(e) {
    return s(e).getComputedStyle(e);
}
function R(e) {
    return l(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function v(e) {
    if ("html" === i(e)) return e;
    let t = e.assignedSlot || e.parentNode || (d(e) && e.host) || a(e);
    return d(t) ? t.host : t;
}
function C(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
