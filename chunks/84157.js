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

function c(e) {
    return !!r() && (e instanceof HTMLElement || e instanceof a(e).HTMLElement);
}

function u(e) {
    return !(!r() || "u" < typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof a(e).ShadowRoot);
}
n.d(t, {
    $4: () => C,
    CP: () => T,
    L9: () => I,
    Ll: () => o,
    Lv: () => _,
    Ng: () => u,
    Tc: () => A,
    Tf: () => m,
    ZU: () => f,
    _m: () => w,
    ep: () => s,
    eu: () => S,
    gJ: () => O,
    mq: () => i,
    sQ: () => y,
    sb: () => c,
    v9: () => R,
    vq: () => l,
    zk: () => a,
});
let d = new Set(["inline", "contents"]);

function f(e) {
    let { overflow: t, overflowX: n, overflowY: r, display: i } = I(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !d.has(i);
}
let p = new Set(["table", "td", "th"]);

function _(e) {
    return p.has(i(e));
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
    b = ["paint", "layout", "strict", "content"];

function y(e) {
    let t = A(),
        n = l(e) ? I(e) : e;
    return (
        g.some((e) => !!n[e] && "none" !== n[e]) ||
        (!!n.containerType && "normal" !== n.containerType) ||
        (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
        (!t && !!n.filter && "none" !== n.filter) ||
        E.some((e) => (n.willChange || "").includes(e)) ||
        b.some((e) => (n.contain || "").includes(e))
    );
}

function O(e) {
    let t = C(e);
    for (; c(t) && !S(t); ) {
        if (y(t)) return t;
        if (m(t)) break;
        t = C(t);
    }
    return null;
}

function A() {
    return !("u" < typeof CSS) && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
}
let v = new Set(["html", "body", "#document"]);

function S(e) {
    return v.has(i(e));
}

function I(e) {
    return a(e).getComputedStyle(e);
}

function T(e) {
    return l(e)
        ? {
              scrollLeft: e.scrollLeft,
              scrollTop: e.scrollTop,
          }
        : {
              scrollLeft: e.scrollX,
              scrollTop: e.scrollY,
          };
}

function C(e) {
    if ("html" === i(e)) return e;
    let t = e.assignedSlot || e.parentNode || (u(e) && e.host) || s(e);
    return u(t) ? t.host : t;
}

function N(e) {
    let t = C(e);
    return S(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : c(t) && f(t) ? t : N(t);
}

function R(e, t, n) {
    var r;
    void 0 === t && (t = []), void 0 === n && (n = !0);
    let i = N(e),
        s = i === (null == (r = e.ownerDocument) ? void 0 : r.body),
        o = a(i);
    if (s) {
        let e = w(o);
        return t.concat(o, o.visualViewport || [], f(i) ? i : [], e && n ? R(e) : []);
    }
    return t.concat(i, R(i, [], n));
}

function w(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
