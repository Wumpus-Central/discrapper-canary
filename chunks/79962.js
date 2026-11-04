function u(e) {
    return "object" == typeof e && null != e && 1 === e.nodeType;
}
function n(e, t) {
    return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e;
}
function a(e, t) {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
        var r,
            u = getComputedStyle(e, null);
        return (
            n(u.overflowY, t) ||
            n(u.overflowX, t) ||
            (!!(r = (function (e) {
                if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                try {
                    return e.ownerDocument.defaultView.frameElement;
                } catch (e) {
                    return null;
                }
            })(e)) &&
                (r.clientHeight < e.scrollHeight || r.clientWidth < e.scrollWidth))
        );
    }
    return !1;
}
function o(e, t, r, u, n, a, o, i) {
    return (a < e && o > t) || (a > e && o < t)
        ? 0
        : (a <= e && i <= r) || (o >= t && i >= r)
          ? a - e - u
          : (o > t && i < r) || (a < e && i > r)
            ? o - t + n
            : 0;
}
r.d(t, { A: () => l });
var i = function (e, t) {
    var r = window,
        n = t.scrollMode,
        i = t.block,
        s = t.inline,
        l = t.boundary,
        c = t.skipOverflowHiddenElements,
        f =
            "function" == typeof l
                ? l
                : function (e) {
                      return e !== l;
                  };
    if (!u(e)) throw TypeError("Invalid target");
    for (var d, D, h = document.scrollingElement || document.documentElement, C = [], v = e; u(v) && f(v);) {
        if ((v = null == (D = (d = v).parentElement) ? d.getRootNode().host || null : D) === h) {
            C.push(v);
            break;
        }
        (null != v && v === document.body && a(v) && !a(document.documentElement)) ||
            (null != v && a(v, c) && C.push(v));
    }
    for (
        var p = r.visualViewport ? r.visualViewport.width : innerWidth,
            g = r.visualViewport ? r.visualViewport.height : innerHeight,
            B = window.scrollX || pageXOffset,
            E = window.scrollY || pageYOffset,
            A = e.getBoundingClientRect(),
            F = A.height,
            m = A.width,
            b = A.top,
            w = A.right,
            y = A.bottom,
            x = A.left,
            O = "start" === i || "nearest" === i ? b : "end" === i ? y : b + F / 2,
            k = "center" === s ? x + m / 2 : "end" === s ? w : x,
            P = [],
            S = 0;
        S < C.length;
        S++
    ) {
        var T = C[S],
            j = T.getBoundingClientRect(),
            R = j.height,
            N = j.width,
            M = j.top,
            K = j.right,
            W = j.bottom,
            _ = j.left;
        if ("if-needed" === n && b >= 0 && x >= 0 && y <= g && w <= p && b >= M && y <= W && x >= _ && w <= K) break;
        var L = getComputedStyle(T),
            z = parseInt(L.borderLeftWidth, 10),
            I = parseInt(L.borderTopWidth, 10),
            q = parseInt(L.borderRightWidth, 10),
            V = parseInt(L.borderBottomWidth, 10),
            Q = 0,
            H = 0,
            U = "offsetWidth" in T ? T.offsetWidth - T.clientWidth - z - q : 0,
            J = "offsetHeight" in T ? T.offsetHeight - T.clientHeight - I - V : 0,
            X = "offsetWidth" in T ? (0 === T.offsetWidth ? 0 : N / T.offsetWidth) : 0,
            Y = "offsetHeight" in T ? (0 === T.offsetHeight ? 0 : R / T.offsetHeight) : 0;
        if (h === T)
            ((Q =
                "start" === i
                    ? O
                    : "end" === i
                      ? O - g
                      : "nearest" === i
                        ? o(E, E + g, g, I, V, E + O, E + O + F, F)
                        : O - g / 2),
                (H =
                    "start" === s
                        ? k
                        : "center" === s
                          ? k - p / 2
                          : "end" === s
                            ? k - p
                            : o(B, B + p, p, z, q, B + k, B + k + m, m)),
                (Q = Math.max(0, Q + E)),
                (H = Math.max(0, H + B)));
        else {
            ((Q =
                "start" === i
                    ? O - M - I
                    : "end" === i
                      ? O - W + V + J
                      : "nearest" === i
                        ? o(M, W, R, I, V + J, O, O + F, F)
                        : O - (M + R / 2) + J / 2),
                (H =
                    "start" === s
                        ? k - _ - z
                        : "center" === s
                          ? k - (_ + N / 2) + U / 2
                          : "end" === s
                            ? k - K + q + U
                            : o(_, K, N, z, q + U, k, k + m, m)));
            var $ = T.scrollLeft,
                Z = T.scrollTop;
            ((O += Z - (Q = Math.max(0, Math.min(Z + Q / Y, T.scrollHeight - R / Y + J)))),
                (k += $ - (H = Math.max(0, Math.min($ + H / X, T.scrollWidth - N / X + U)))));
        }
        P.push({ el: T, top: Q, left: H });
    }
    return P;
};
function s(e) {
    return e === Object(e) && 0 !== Object.keys(e).length;
}
let l = function (e, t) {
    var r = e.isConnected || e.ownerDocument.documentElement.contains(e);
    if (s(t) && "function" == typeof t.behavior) return t.behavior(r ? i(e, t) : []);
    if (r) {
        var u,
            n,
            a,
            o = !1 === t ? { block: "end", inline: "nearest" } : s(t) ? t : { block: "start", inline: "nearest" };
        return (
            (u = i(e, o)),
            void 0 === (n = o.behavior) && (n = "auto"),
            (a = "scrollBehavior" in document.body.style),
            void u.forEach(function (e) {
                var t = e.el,
                    r = e.top,
                    u = e.left;
                t.scroll && a ? t.scroll({ top: r, left: u, behavior: n }) : ((t.scrollTop = r), (t.scrollLeft = u));
            })
        );
    }
};
