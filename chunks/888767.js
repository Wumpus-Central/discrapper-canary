"use strict";
function r(e) {
    if (null == e) return window;
    if ("[object Window]" !== e.toString()) {
        var t = e.ownerDocument;
        return (t && t.defaultView) || window;
    }
    return e;
}
function a(e) {
    var t = r(e).Element;
    return e instanceof t || e instanceof Element;
}
function i(e) {
    var t = r(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
}
function o(e) {
    if ("u" < typeof ShadowRoot) return !1;
    var t = r(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
}
n.d(t, { n: () => ec });
var s,
    l,
    c,
    u,
    d,
    _ = Math.max,
    p = Math.min,
    m = Math.round;
function f() {
    var e = navigator.userAgentData;
    return null != e && e.brands && Array.isArray(e.brands)
        ? e.brands
              .map(function (e) {
                  return e.brand + "/" + e.version;
              })
              .join(" ")
        : navigator.userAgent;
}
function g() {
    return !/^((?!chrome|android).)*safari/i.test(f());
}
function h(e, t, n) {
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    var o = e.getBoundingClientRect(),
        s = 1,
        l = 1;
    t &&
        i(e) &&
        ((s = (e.offsetWidth > 0 && m(o.width) / e.offsetWidth) || 1),
        (l = (e.offsetHeight > 0 && m(o.height) / e.offsetHeight) || 1));
    var c = (a(e) ? r(e) : window).visualViewport,
        u = !g() && n,
        d = (o.left + (u && c ? c.offsetLeft : 0)) / s,
        _ = (o.top + (u && c ? c.offsetTop : 0)) / l,
        p = o.width / s,
        f = o.height / l;
    return { width: p, height: f, top: _, right: d + p, bottom: _ + f, left: d, x: d, y: _ };
}
function b(e) {
    var t = r(e);
    return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function E(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
}
function y(e) {
    return ((a(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function v(e) {
    return h(y(e)).left + b(e).scrollLeft;
}
function S(e) {
    return r(e).getComputedStyle(e);
}
function T(e) {
    var t = S(e),
        n = t.overflow,
        r = t.overflowX,
        a = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function C(e) {
    var t = h(e),
        n = e.offsetWidth,
        r = e.offsetHeight;
    return (
        1 >= Math.abs(t.width - n) && (n = t.width),
        1 >= Math.abs(t.height - r) && (r = t.height),
        { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
    );
}
function D(e) {
    return "html" === E(e) ? e : e.assignedSlot || e.parentNode || (o(e) ? e.host : null) || y(e);
}
function O(e, t) {
    void 0 === t && (t = []);
    var n,
        a = (function e(t) {
            return ["html", "body", "#document"].indexOf(E(t)) >= 0 ? t.ownerDocument.body : i(t) && T(t) ? t : e(D(t));
        })(e),
        o = a === (null == (n = e.ownerDocument) ? void 0 : n.body),
        s = r(a),
        l = o ? [s].concat(s.visualViewport || [], T(a) ? a : []) : a,
        c = t.concat(l);
    return o ? c : c.concat(O(D(l)));
}
function w(e) {
    return i(e) && "fixed" !== S(e).position ? e.offsetParent : null;
}
function A(e) {
    for (var t = r(e), n = w(e); n && ["table", "td", "th"].indexOf(E(n)) >= 0 && "static" === S(n).position; )
        n = w(n);
    return n && ("html" === E(n) || ("body" === E(n) && "static" === S(n).position))
        ? t
        : n ||
              (function (e) {
                  var t = /firefox/i.test(f());
                  if (/Trident/i.test(f()) && i(e) && "fixed" === S(e).position) return null;
                  var n = D(e);
                  for (o(n) && (n = n.host); i(n) && 0 > ["html", "body"].indexOf(E(n)); ) {
                      var r = S(n);
                      if (
                          "none" !== r.transform ||
                          "none" !== r.perspective ||
                          "paint" === r.contain ||
                          -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                          (t && "filter" === r.willChange) ||
                          (t && r.filter && "none" !== r.filter)
                      )
                          return n;
                      n = n.parentNode;
                  }
                  return null;
              })(e) ||
              t;
}
var R = "bottom",
    M = "right",
    N = "left",
    x = "auto",
    L = ["top", R, M, N],
    k = "start",
    I = "viewport",
    P = "popper",
    F = L.reduce(function (e, t) {
        return e.concat([t + "-" + k, t + "-end"]);
    }, []),
    Y = [].concat(L, [x]).reduce(function (e, t) {
        return e.concat([t, t + "-" + k, t + "-end"]);
    }, []),
    B = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"],
    U = { placement: "bottom", modifiers: [], strategy: "absolute" };
function j() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function (e) {
        return !(e && "function" == typeof e.getBoundingClientRect);
    });
}
var H = { passive: !0 };
function G(e) {
    return e.split("-")[0];
}
function z(e) {
    return e.split("-")[1];
}
function W(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function q(e) {
    var t,
        n = e.reference,
        r = e.element,
        a = e.placement,
        i = a ? G(a) : null,
        o = a ? z(a) : null,
        s = n.x + n.width / 2 - r.width / 2,
        l = n.y + n.height / 2 - r.height / 2;
    switch (i) {
        case "top":
            t = { x: s, y: n.y - r.height };
            break;
        case R:
            t = { x: s, y: n.y + n.height };
            break;
        case M:
            t = { x: n.x + n.width, y: l };
            break;
        case N:
            t = { x: n.x - r.width, y: l };
            break;
        default:
            t = { x: n.x, y: n.y };
    }
    var c = i ? W(i) : null;
    if (null != c) {
        var u = "y" === c ? "height" : "width";
        switch (o) {
            case k:
                t[c] = t[c] - (n[u] / 2 - r[u] / 2);
                break;
            case "end":
                t[c] = t[c] + (n[u] / 2 - r[u] / 2);
        }
    }
    return t;
}
var V = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function $(e) {
    var t,
        n,
        a,
        i,
        o,
        s,
        l,
        c = e.popper,
        u = e.popperRect,
        d = e.placement,
        _ = e.variation,
        p = e.offsets,
        f = e.position,
        g = e.gpuAcceleration,
        h = e.adaptive,
        b = e.roundOffsets,
        E = e.isFixed,
        v = p.x,
        T = void 0 === v ? 0 : v,
        C = p.y,
        D = void 0 === C ? 0 : C,
        O = "function" == typeof b ? b({ x: T, y: D }) : { x: T, y: D };
    (T = O.x), (D = O.y);
    var w = p.hasOwnProperty("x"),
        x = p.hasOwnProperty("y"),
        L = N,
        k = "top",
        I = window;
    if (h) {
        var P = A(c),
            F = "clientHeight",
            Y = "clientWidth";
        P === r(c) &&
            "static" !== S((P = y(c))).position &&
            "absolute" === f &&
            ((F = "scrollHeight"), (Y = "scrollWidth")),
            ("top" === d || ((d === N || d === M) && "end" === _)) &&
                ((k = R),
                (D -= (E && P === I && I.visualViewport ? I.visualViewport.height : P[F]) - u.height),
                (D *= g ? 1 : -1)),
            (d === N || (("top" === d || d === R) && "end" === _)) &&
                ((L = M),
                (T -= (E && P === I && I.visualViewport ? I.visualViewport.width : P[Y]) - u.width),
                (T *= g ? 1 : -1));
    }
    var B = Object.assign({ position: f }, h && V),
        U =
            !0 === b
                ? ((t = { x: T, y: D }),
                  (n = r(c)),
                  (a = t.x),
                  (i = t.y),
                  { x: m(a * (o = n.devicePixelRatio || 1)) / o || 0, y: m(i * o) / o || 0 })
                : { x: T, y: D };
    return ((T = U.x), (D = U.y), g)
        ? Object.assign(
              {},
              B,
              (((l = {})[k] = x ? "0" : ""),
              (l[L] = w ? "0" : ""),
              (l.transform =
                  1 >= (I.devicePixelRatio || 1)
                      ? "translate(" + T + "px, " + D + "px)"
                      : "translate3d(" + T + "px, " + D + "px, 0)"),
              l),
          )
        : Object.assign({}, B, (((s = {})[k] = x ? D + "px" : ""), (s[L] = w ? T + "px" : ""), (s.transform = ""), s));
}
var Q = { left: "right", right: "left", bottom: "top", top: "bottom" };
function K(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
        return Q[e];
    });
}
var X = { start: "end", end: "start" };
function Z(e) {
    return e.replace(/start|end/g, function (e) {
        return X[e];
    });
}
function J(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && o(n)) {
        var r = t;
        do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
        } while (r);
    }
    return !1;
}
function ee(e) {
    return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function et(e, t, n) {
    var i, o, s, l, c, u, d, p, m, f;
    return t === I
        ? ee(
              (function (e, t) {
                  var n = r(e),
                      a = y(e),
                      i = n.visualViewport,
                      o = a.clientWidth,
                      s = a.clientHeight,
                      l = 0,
                      c = 0;
                  if (i) {
                      (o = i.width), (s = i.height);
                      var u = g();
                      (u || (!u && "fixed" === t)) && ((l = i.offsetLeft), (c = i.offsetTop));
                  }
                  return { width: o, height: s, x: l + v(e), y: c };
              })(e, n),
          )
        : a(t)
          ? (((i = h(t, !1, "fixed" === n)).top = i.top + t.clientTop),
            (i.left = i.left + t.clientLeft),
            (i.bottom = i.top + t.clientHeight),
            (i.right = i.left + t.clientWidth),
            (i.width = t.clientWidth),
            (i.height = t.clientHeight),
            (i.x = i.left),
            (i.y = i.top),
            i)
          : ee(
                ((o = y(e)),
                (l = y(o)),
                (c = b(o)),
                (u = null == (s = o.ownerDocument) ? void 0 : s.body),
                (d = _(l.scrollWidth, l.clientWidth, u ? u.scrollWidth : 0, u ? u.clientWidth : 0)),
                (p = _(l.scrollHeight, l.clientHeight, u ? u.scrollHeight : 0, u ? u.clientHeight : 0)),
                (m = -c.scrollLeft + v(o)),
                (f = -c.scrollTop),
                "rtl" === S(u || l).direction && (m += _(l.clientWidth, u ? u.clientWidth : 0) - d),
                { width: d, height: p, x: m, y: f }),
            );
}
function en() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
}
function er(e) {
    return Object.assign({}, en(), e);
}
function ea(e, t) {
    return t.reduce(function (t, n) {
        return (t[n] = e), t;
    }, {});
}
function ei(e, t) {
    void 0 === t && (t = {});
    var n,
        r,
        o,
        s,
        l,
        c,
        u,
        d,
        m = t,
        f = m.placement,
        g = void 0 === f ? e.placement : f,
        b = m.strategy,
        v = void 0 === b ? e.strategy : b,
        T = m.boundary,
        C = m.rootBoundary,
        w = m.elementContext,
        N = void 0 === w ? P : w,
        x = m.altBoundary,
        k = m.padding,
        F = void 0 === k ? 0 : k,
        Y = er("number" != typeof F ? F : ea(F, L)),
        B = e.rects.popper,
        U = e.elements[void 0 !== x && x ? (N === P ? "reference" : P) : N],
        j =
            ((n = a(U) ? U : U.contextElement || y(e.elements.popper)),
            (r = void 0 === T ? "clippingParents" : T),
            (o = void 0 === C ? I : C),
            (u = (c = [].concat(
                "clippingParents" === r
                    ? ((s = O(D(n))),
                      !a((l = ["absolute", "fixed"].indexOf(S(n).position) >= 0 && i(n) ? A(n) : n))
                          ? []
                          : s.filter(function (e) {
                                return a(e) && J(e, l) && "body" !== E(e);
                            }))
                    : [].concat(r),
                [o],
            ))[0]),
            ((d = c.reduce(
                function (e, t) {
                    var r = et(n, t, v);
                    return (
                        (e.top = _(r.top, e.top)),
                        (e.right = p(r.right, e.right)),
                        (e.bottom = p(r.bottom, e.bottom)),
                        (e.left = _(r.left, e.left)),
                        e
                    );
                },
                et(n, u, v),
            )).width = d.right - d.left),
            (d.height = d.bottom - d.top),
            (d.x = d.left),
            (d.y = d.top),
            d),
        H = h(e.elements.reference),
        G = q({ reference: H, element: B, strategy: "absolute", placement: g }),
        z = ee(Object.assign({}, B, G)),
        W = N === P ? z : H,
        V = {
            top: j.top - W.top + Y.top,
            bottom: W.bottom - j.bottom + Y.bottom,
            left: j.left - W.left + Y.left,
            right: W.right - j.right + Y.right,
        },
        $ = e.modifiersData.offset;
    if (N === P && $) {
        var Q = $[g];
        Object.keys(V).forEach(function (e) {
            var t = [M, R].indexOf(e) >= 0 ? 1 : -1,
                n = ["top", R].indexOf(e) >= 0 ? "y" : "x";
            V[e] += Q[n] * t;
        });
    }
    return V;
}
function eo(e, t, n) {
    return _(e, p(t, n));
}
function es(e, t, n) {
    return (
        void 0 === n && (n = { x: 0, y: 0 }),
        {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
        }
    );
}
function el(e) {
    return ["top", M, R, N].some(function (t) {
        return e[t] >= 0;
    });
}
var ec =
    ((c =
        void 0 ===
        (l = (s = {
            defaultModifiers: [
                {
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function () {},
                    effect: function (e) {
                        var t = e.state,
                            n = e.instance,
                            a = e.options,
                            i = a.scroll,
                            o = void 0 === i || i,
                            s = a.resize,
                            l = void 0 === s || s,
                            c = r(t.elements.popper),
                            u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                        return (
                            o &&
                                u.forEach(function (e) {
                                    e.addEventListener("scroll", n.update, H);
                                }),
                            l && c.addEventListener("resize", n.update, H),
                            function () {
                                o &&
                                    u.forEach(function (e) {
                                        e.removeEventListener("scroll", n.update, H);
                                    }),
                                    l && c.removeEventListener("resize", n.update, H);
                            }
                        );
                    },
                    data: {},
                },
                {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function (e) {
                        var t = e.state,
                            n = e.name;
                        t.modifiersData[n] = q({
                            reference: t.rects.reference,
                            element: t.rects.popper,
                            strategy: "absolute",
                            placement: t.placement,
                        });
                    },
                    data: {},
                },
                {
                    name: "computeStyles",
                    enabled: !0,
                    phase: "beforeWrite",
                    fn: function (e) {
                        var t = e.state,
                            n = e.options,
                            r = n.gpuAcceleration,
                            a = n.adaptive,
                            i = n.roundOffsets,
                            o = void 0 === i || i,
                            s = {
                                placement: G(t.placement),
                                variation: z(t.placement),
                                popper: t.elements.popper,
                                popperRect: t.rects.popper,
                                gpuAcceleration: void 0 === r || r,
                                isFixed: "fixed" === t.options.strategy,
                            };
                        null != t.modifiersData.popperOffsets &&
                            (t.styles.popper = Object.assign(
                                {},
                                t.styles.popper,
                                $(
                                    Object.assign({}, s, {
                                        offsets: t.modifiersData.popperOffsets,
                                        position: t.options.strategy,
                                        adaptive: void 0 === a || a,
                                        roundOffsets: o,
                                    }),
                                ),
                            )),
                            null != t.modifiersData.arrow &&
                                (t.styles.arrow = Object.assign(
                                    {},
                                    t.styles.arrow,
                                    $(
                                        Object.assign({}, s, {
                                            offsets: t.modifiersData.arrow,
                                            position: "absolute",
                                            adaptive: !1,
                                            roundOffsets: o,
                                        }),
                                    ),
                                )),
                            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-placement": t.placement,
                            }));
                    },
                    data: {},
                },
                {
                    name: "applyStyles",
                    enabled: !0,
                    phase: "write",
                    fn: function (e) {
                        var t = e.state;
                        Object.keys(t.elements).forEach(function (e) {
                            var n = t.styles[e] || {},
                                r = t.attributes[e] || {},
                                a = t.elements[e];
                            i(a) &&
                                E(a) &&
                                (Object.assign(a.style, n),
                                Object.keys(r).forEach(function (e) {
                                    var t = r[e];
                                    !1 === t ? a.removeAttribute(e) : a.setAttribute(e, !0 === t ? "" : t);
                                }));
                        });
                    },
                    effect: function (e) {
                        var t = e.state,
                            n = {
                                popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" },
                                arrow: { position: "absolute" },
                                reference: {},
                            };
                        return (
                            Object.assign(t.elements.popper.style, n.popper),
                            (t.styles = n),
                            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                            function () {
                                Object.keys(t.elements).forEach(function (e) {
                                    var r = t.elements[e],
                                        a = t.attributes[e] || {},
                                        o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(
                                            function (e, t) {
                                                return (e[t] = ""), e;
                                            },
                                            {},
                                        );
                                    i(r) &&
                                        E(r) &&
                                        (Object.assign(r.style, o),
                                        Object.keys(a).forEach(function (e) {
                                            r.removeAttribute(e);
                                        }));
                                });
                            }
                        );
                    },
                    requires: ["computeStyles"],
                },
                {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: function (e) {
                        var t = e.state,
                            n = e.options,
                            r = e.name,
                            a = n.offset,
                            i = void 0 === a ? [0, 0] : a,
                            o = Y.reduce(function (e, n) {
                                var r, a, o, s, l, c;
                                return (
                                    (e[n] =
                                        ((r = t.rects),
                                        (o = [N, "top"].indexOf((a = G(n))) >= 0 ? -1 : 1),
                                        (l = (s =
                                            "function" == typeof i ? i(Object.assign({}, r, { placement: n })) : i)[0]),
                                        (c = s[1]),
                                        (l = l || 0),
                                        (c = (c || 0) * o),
                                        [N, M].indexOf(a) >= 0 ? { x: c, y: l } : { x: l, y: c })),
                                    e
                                );
                            }, {}),
                            s = o[t.placement],
                            l = s.x,
                            c = s.y;
                        null != t.modifiersData.popperOffsets &&
                            ((t.modifiersData.popperOffsets.x += l), (t.modifiersData.popperOffsets.y += c)),
                            (t.modifiersData[r] = o);
                    },
                },
                {
                    name: "flip",
                    enabled: !0,
                    phase: "main",
                    fn: function (e) {
                        var t = e.state,
                            n = e.options,
                            r = e.name;
                        if (!t.modifiersData[r]._skip) {
                            for (
                                var a = n.mainAxis,
                                    i = void 0 === a || a,
                                    o = n.altAxis,
                                    s = void 0 === o || o,
                                    l = n.fallbackPlacements,
                                    c = n.padding,
                                    u = n.boundary,
                                    d = n.rootBoundary,
                                    _ = n.altBoundary,
                                    p = n.flipVariations,
                                    m = void 0 === p || p,
                                    f = n.allowedAutoPlacements,
                                    g = t.options.placement,
                                    h = G(g) === g,
                                    b =
                                        l ||
                                        (h || !m
                                            ? [K(g)]
                                            : (function (e) {
                                                  if (G(e) === x) return [];
                                                  var t = K(e);
                                                  return [Z(e), t, Z(t)];
                                              })(g)),
                                    E = [g].concat(b).reduce(function (e, n) {
                                        var r, a, i, o, s, l, _, p, g, h, b, E;
                                        return e.concat(
                                            G(n) === x
                                                ? ((a = (r = {
                                                      placement: n,
                                                      boundary: u,
                                                      rootBoundary: d,
                                                      padding: c,
                                                      flipVariations: m,
                                                      allowedAutoPlacements: f,
                                                  }).placement),
                                                  (i = r.boundary),
                                                  (o = r.rootBoundary),
                                                  (s = r.padding),
                                                  (l = r.flipVariations),
                                                  (p = void 0 === (_ = r.allowedAutoPlacements) ? Y : _),
                                                  0 ===
                                                      (b = (h = (g = z(a))
                                                          ? l
                                                              ? F
                                                              : F.filter(function (e) {
                                                                    return z(e) === g;
                                                                })
                                                          : L).filter(function (e) {
                                                          return p.indexOf(e) >= 0;
                                                      })).length && (b = h),
                                                  Object.keys(
                                                      (E = b.reduce(function (e, n) {
                                                          return (
                                                              (e[n] = ei(t, {
                                                                  placement: n,
                                                                  boundary: i,
                                                                  rootBoundary: o,
                                                                  padding: s,
                                                              })[G(n)]),
                                                              e
                                                          );
                                                      }, {})),
                                                  ).sort(function (e, t) {
                                                      return E[e] - E[t];
                                                  }))
                                                : n,
                                        );
                                    }, []),
                                    y = t.rects.reference,
                                    v = t.rects.popper,
                                    S = new Map(),
                                    T = !0,
                                    C = E[0],
                                    D = 0;
                                D < E.length;
                                D++
                            ) {
                                var O = E[D],
                                    w = G(O),
                                    A = z(O) === k,
                                    I = ["top", R].indexOf(w) >= 0,
                                    P = I ? "width" : "height",
                                    B = ei(t, {
                                        placement: O,
                                        boundary: u,
                                        rootBoundary: d,
                                        altBoundary: _,
                                        padding: c,
                                    }),
                                    U = I ? (A ? M : N) : A ? R : "top";
                                y[P] > v[P] && (U = K(U));
                                var j = K(U),
                                    H = [];
                                if (
                                    (i && H.push(B[w] <= 0),
                                    s && H.push(B[U] <= 0, B[j] <= 0),
                                    H.every(function (e) {
                                        return e;
                                    }))
                                ) {
                                    (C = O), (T = !1);
                                    break;
                                }
                                S.set(O, H);
                            }
                            if (T)
                                for (
                                    var W = m ? 3 : 1,
                                        q = function (e) {
                                            var t = E.find(function (t) {
                                                var n = S.get(t);
                                                if (n)
                                                    return n.slice(0, e).every(function (e) {
                                                        return e;
                                                    });
                                            });
                                            if (t) return (C = t), "break";
                                        },
                                        V = W;
                                    V > 0 && "break" !== q(V);
                                    V--
                                );
                            t.placement !== C && ((t.modifiersData[r]._skip = !0), (t.placement = C), (t.reset = !0));
                        }
                    },
                    requiresIfExists: ["offset"],
                    data: { _skip: !1 },
                },
                {
                    name: "preventOverflow",
                    enabled: !0,
                    phase: "main",
                    fn: function (e) {
                        var t = e.state,
                            n = e.options,
                            r = e.name,
                            a = n.mainAxis,
                            i = n.altAxis,
                            o = n.boundary,
                            s = n.rootBoundary,
                            l = n.altBoundary,
                            c = n.padding,
                            u = n.tether,
                            d = void 0 === u || u,
                            m = n.tetherOffset,
                            f = void 0 === m ? 0 : m,
                            g = ei(t, { boundary: o, rootBoundary: s, padding: c, altBoundary: l }),
                            h = G(t.placement),
                            b = z(t.placement),
                            E = !b,
                            y = W(h),
                            v = "x" === y ? "y" : "x",
                            S = t.modifiersData.popperOffsets,
                            T = t.rects.reference,
                            D = t.rects.popper,
                            O = "function" == typeof f ? f(Object.assign({}, t.rects, { placement: t.placement })) : f,
                            w =
                                "number" == typeof O
                                    ? { mainAxis: O, altAxis: O }
                                    : Object.assign({ mainAxis: 0, altAxis: 0 }, O),
                            x = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                            L = { x: 0, y: 0 };
                        if (S) {
                            if (void 0 === a || a) {
                                var I,
                                    P = "y" === y ? "top" : N,
                                    F = "y" === y ? R : M,
                                    Y = "y" === y ? "height" : "width",
                                    B = S[y],
                                    U = B + g[P],
                                    j = B - g[F],
                                    H = d ? -D[Y] / 2 : 0,
                                    q = b === k ? T[Y] : D[Y],
                                    V = b === k ? -D[Y] : -T[Y],
                                    $ = t.elements.arrow,
                                    Q = d && $ ? C($) : { width: 0, height: 0 },
                                    K = t.modifiersData["arrow#persistent"]
                                        ? t.modifiersData["arrow#persistent"].padding
                                        : en(),
                                    X = K[P],
                                    Z = K[F],
                                    J = eo(0, T[Y], Q[Y]),
                                    ee = E ? T[Y] / 2 - H - J - X - w.mainAxis : q - J - X - w.mainAxis,
                                    et = E ? -T[Y] / 2 + H + J + Z + w.mainAxis : V + J + Z + w.mainAxis,
                                    er = t.elements.arrow && A(t.elements.arrow),
                                    ea = er ? ("y" === y ? er.clientTop || 0 : er.clientLeft || 0) : 0,
                                    es = null != (I = null == x ? void 0 : x[y]) ? I : 0,
                                    el = eo(d ? p(U, B + ee - es - ea) : U, B, d ? _(j, B + et - es) : j);
                                (S[y] = el), (L[y] = el - B);
                            }
                            if (void 0 !== i && i) {
                                var ec,
                                    eu,
                                    ed = "x" === y ? "top" : N,
                                    e_ = "x" === y ? R : M,
                                    ep = S[v],
                                    em = "y" === v ? "height" : "width",
                                    ef = ep + g[ed],
                                    eg = ep - g[e_],
                                    eh = -1 !== ["top", N].indexOf(h),
                                    eb = null != (eu = null == x ? void 0 : x[v]) ? eu : 0,
                                    eE = eh ? ef : ep - T[em] - D[em] - eb + w.altAxis,
                                    ey = eh ? ep + T[em] + D[em] - eb - w.altAxis : eg,
                                    ev =
                                        d && eh
                                            ? (ec = eo(eE, ep, ey)) > ey
                                                ? ey
                                                : ec
                                            : eo(d ? eE : ef, ep, d ? ey : eg);
                                (S[v] = ev), (L[v] = ev - ep);
                            }
                            t.modifiersData[r] = L;
                        }
                    },
                    requiresIfExists: ["offset"],
                },
                {
                    name: "arrow",
                    enabled: !0,
                    phase: "main",
                    fn: function (e) {
                        var t,
                            n = e.state,
                            r = e.name,
                            a = e.options,
                            i = n.elements.arrow,
                            o = n.modifiersData.popperOffsets,
                            s = G(n.placement),
                            l = W(s),
                            c = [N, M].indexOf(s) >= 0 ? "height" : "width";
                        if (i && o) {
                            var u,
                                d =
                                    ((u = a.padding),
                                    er(
                                        "number" !=
                                            typeof (u =
                                                "function" == typeof u
                                                    ? u(Object.assign({}, n.rects, { placement: n.placement }))
                                                    : u)
                                            ? u
                                            : ea(u, L),
                                    )),
                                _ = C(i),
                                p = "y" === l ? "top" : N,
                                m = "y" === l ? R : M,
                                f = n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c],
                                g = o[l] - n.rects.reference[l],
                                h = A(i),
                                b = h ? ("y" === l ? h.clientHeight || 0 : h.clientWidth || 0) : 0,
                                E = d[p],
                                y = b - _[c] - d[m],
                                v = b / 2 - _[c] / 2 + (f / 2 - g / 2),
                                S = eo(E, v, y);
                            n.modifiersData[r] = (((t = {})[l] = S), (t.centerOffset = S - v), t);
                        }
                    },
                    effect: function (e) {
                        var t = e.state,
                            n = e.options.element,
                            r = void 0 === n ? "[data-popper-arrow]" : n;
                        null == r ||
                            (("string" != typeof r || (r = t.elements.popper.querySelector(r))) &&
                                J(t.elements.popper, r) &&
                                (t.elements.arrow = r));
                    },
                    requires: ["popperOffsets"],
                    requiresIfExists: ["preventOverflow"],
                },
                {
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: function (e) {
                        var t = e.state,
                            n = e.name,
                            r = t.rects.reference,
                            a = t.rects.popper,
                            i = t.modifiersData.preventOverflow,
                            o = ei(t, { elementContext: "reference" }),
                            s = ei(t, { altBoundary: !0 }),
                            l = es(o, r),
                            c = es(s, a, i),
                            u = el(l),
                            d = el(c);
                        (t.modifiersData[n] = {
                            referenceClippingOffsets: l,
                            popperEscapeOffsets: c,
                            isReferenceHidden: u,
                            hasPopperEscaped: d,
                        }),
                            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": u,
                                "data-popper-escaped": d,
                            }));
                    },
                },
            ],
        }).defaultModifiers)
            ? []
            : l),
    (d = void 0 === (u = s.defaultOptions) ? U : u),
    function (e, t, n) {
        void 0 === n && (n = d);
        var o,
            s,
            l = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, U, d),
                modifiersData: {},
                elements: { reference: e, popper: t },
                attributes: {},
                styles: {},
            },
            u = [],
            _ = !1,
            p = {
                state: l,
                setOptions: function (n) {
                    var r,
                        i,
                        o,
                        s,
                        _,
                        m,
                        g = "function" == typeof n ? n(l.options) : n;
                    f(),
                        (l.options = Object.assign({}, d, l.options, g)),
                        (l.scrollParents = {
                            reference: a(e) ? O(e) : e.contextElement ? O(e.contextElement) : [],
                            popper: O(t),
                        });
                    var h =
                        ((i = Object.keys(
                            (r = [].concat(c, l.options.modifiers).reduce(function (e, t) {
                                var n = e[t.name];
                                return (
                                    (e[t.name] = n
                                        ? Object.assign({}, n, t, {
                                              options: Object.assign({}, n.options, t.options),
                                              data: Object.assign({}, n.data, t.data),
                                          })
                                        : t),
                                    e
                                );
                            }, {})),
                        ).map(function (e) {
                            return r[e];
                        })),
                        (o = new Map()),
                        (s = new Set()),
                        (_ = []),
                        i.forEach(function (e) {
                            o.set(e.name, e);
                        }),
                        i.forEach(function (e) {
                            s.has(e.name) ||
                                (function e(t) {
                                    s.add(t.name),
                                        [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
                                            if (!s.has(t)) {
                                                var n = o.get(t);
                                                n && e(n);
                                            }
                                        }),
                                        _.push(t);
                                })(e);
                        }),
                        (m = _),
                        B.reduce(function (e, t) {
                            return e.concat(
                                m.filter(function (e) {
                                    return e.phase === t;
                                }),
                            );
                        }, []));
                    return (
                        (l.orderedModifiers = h.filter(function (e) {
                            return e.enabled;
                        })),
                        l.orderedModifiers.forEach(function (e) {
                            var t = e.name,
                                n = e.options,
                                r = e.effect;
                            if ("function" == typeof r) {
                                var a = r({ state: l, name: t, instance: p, options: void 0 === n ? {} : n });
                                u.push(a || function () {});
                            }
                        }),
                        p.update()
                    );
                },
                forceUpdate: function () {
                    if (!_) {
                        var e = l.elements,
                            t = e.reference,
                            n = e.popper;
                        if (j(t, n)) {
                            (l.rects = {
                                reference:
                                    ((a = A(n)),
                                    (o = "fixed" === l.options.strategy),
                                    (s = i(a)),
                                    (f =
                                        i(a) &&
                                        ((u = m((c = a.getBoundingClientRect()).width) / a.offsetWidth || 1),
                                        (d = m(c.height) / a.offsetHeight || 1),
                                        1 !== u || 1 !== d)),
                                    (g = y(a)),
                                    (S = h(t, f, o)),
                                    (D = { scrollLeft: 0, scrollTop: 0 }),
                                    (O = { x: 0, y: 0 }),
                                    (s || (!s && !o)) &&
                                        (("body" !== E(a) || T(g)) &&
                                            (D = (function (e) {
                                                return e !== r(e) && i(e)
                                                    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
                                                    : b(e);
                                            })(a)),
                                        i(a)
                                            ? ((O = h(a, !0)), (O.x += a.clientLeft), (O.y += a.clientTop))
                                            : g && (O.x = v(g))),
                                    {
                                        x: S.left + D.scrollLeft - O.x,
                                        y: S.top + D.scrollTop - O.y,
                                        width: S.width,
                                        height: S.height,
                                    }),
                                popper: C(n),
                            }),
                                (l.reset = !1),
                                (l.placement = l.options.placement),
                                l.orderedModifiers.forEach(function (e) {
                                    return (l.modifiersData[e.name] = Object.assign({}, e.data));
                                });
                            for (var a, o, s, c, u, d, f, g, S, D, O, w = 0; w < l.orderedModifiers.length; w++) {
                                if (!0 === l.reset) {
                                    (l.reset = !1), (w = -1);
                                    continue;
                                }
                                var R = l.orderedModifiers[w],
                                    M = R.fn,
                                    N = R.options,
                                    x = void 0 === N ? {} : N,
                                    L = R.name;
                                "function" == typeof M && (l = M({ state: l, options: x, name: L, instance: p }) || l);
                            }
                        }
                    }
                },
                update:
                    ((o = function () {
                        return new Promise(function (e) {
                            p.forceUpdate(), e(l);
                        });
                    }),
                    function () {
                        return (
                            s ||
                                (s = new Promise(function (e) {
                                    Promise.resolve().then(function () {
                                        (s = void 0), e(o());
                                    });
                                })),
                            s
                        );
                    }),
                destroy: function () {
                    f(), (_ = !0);
                },
            };
        if (!j(e, t)) return p;
        function f() {
            u.forEach(function (e) {
                return e();
            }),
                (u = []);
        }
        return (
            p.setOptions(n).then(function (e) {
                !_ && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            p
        );
    });
