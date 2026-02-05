"use strict";
function r() {
    return "u" > typeof window;
}
function i(e) {
    return o(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function a(e) {
    var t;
    return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
}
function s(e) {
    var t;
    return null == (t = (o(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement;
}
function o(e) {
    return !!r() && (e instanceof Node || e instanceof a(e).Node);
}
function l(e) {
    return !!r() && (e instanceof Element || e instanceof a(e).Element);
}
function u(e) {
    return !!r() && (e instanceof HTMLElement || e instanceof a(e).HTMLElement);
}
function c(e) {
    return !(!r() || "u" < typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof a(e).ShadowRoot);
}
n.d(t, {
    $4: () => N,
    CP: () => b,
    L9: () => C,
    Ll: () => o,
    Lv: () => p,
    Ng: () => c,
    Tc: () => y,
    Tf: () => m,
    ZU: () => _,
    _m: () => D,
    ep: () => s,
    eu: () => v,
    gJ: () => T,
    mq: () => i,
    sQ: () => I,
    sb: () => u,
    v9: () => O,
    vq: () => l,
    zk: () => a,
});
let d = new Set(["inline", "contents"]);
function _(e) {
    let { overflow: t, overflowX: n, overflowY: r, display: i } = C(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !d.has(i);
}
let f = new Set(["table", "td", "th"]);
function p(e) {
    return f.has(i(e));
}
let h = [":popover-open", ":modal"];
function m(e) {
    return h.some((t) => {
        try {
            return e.matches(t);
        } catch (e) {
            return !1;
        }
    });
}
let g = ["transform", "translate", "scale", "rotate", "perspective"],
    E = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    A = ["paint", "layout", "strict", "content"];
function I(e) {
    let t = y(),
        n = l(e) ? C(e) : e;
    return (
        g.some((e) => !!n[e] && "none" !== n[e]) ||
        (!!n.containerType && "normal" !== n.containerType) ||
        (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
        (!t && !!n.filter && "none" !== n.filter) ||
        E.some((e) => (n.willChange || "").includes(e)) ||
        A.some((e) => (n.contain || "").includes(e))
    );
}
function T(e) {
    let t = N(e);
    for (; u(t) && !v(t); ) {
        if (I(t)) return t;
        if (m(t)) break;
        t = N(t);
    }
    return null;
}
function y() {
    return !("u" < typeof CSS) && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
}
let S = new Set(["html", "body", "#document"]);
function v(e) {
    return S.has(i(e));
}
function C(e) {
    return a(e).getComputedStyle(e);
}
function b(e) {
    return l(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function N(e) {
    if ("html" === i(e)) return e;
    let t = e.assignedSlot || e.parentNode || (c(e) && e.host) || s(e);
    return c(t) ? t.host : t;
}
function R(e) {
    let t = N(e);
    return v(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : u(t) && _(t) ? t : R(t);
}
function O(e, t, n) {
    var r;
    void 0 === t && (t = []), void 0 === n && (n = !0);
    let i = R(e),
        s = i === (null == (r = e.ownerDocument) ? void 0 : r.body),
        o = a(i);
    if (s) {
        let e = D(o);
        return t.concat(o, o.visualViewport || [], _(i) ? i : [], e && n ? O(e) : []);
    }
    return t.concat(i, O(i, [], n));
}
function D(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
