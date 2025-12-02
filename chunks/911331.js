function r(e) {
    return "object" == typeof e && null != e && 1 === e.nodeType;
}
function i(e, t) {
    return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e;
}
function a(e, t) {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
        var n = getComputedStyle(e, null);
        return (
            i(n.overflowY, t) ||
            i(n.overflowX, t) ||
            (function (e) {
                var t = (function (e) {
                    if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                    try {
                        return e.ownerDocument.defaultView.frameElement;
                    } catch (e) {
                        return null;
                    }
                })(e);
                return !!t && (t.clientHeight < e.scrollHeight || t.clientWidth < e.scrollWidth);
            })(e)
        );
    }
    return !1;
}
function o(e, t, n, r, i, a, o, s) {
    return (a < e && o > t) || (a > e && o < t)
        ? 0
        : (a <= e && s <= n) || (o >= t && s >= n)
          ? a - e - r
          : (o > t && s < n) || (a < e && s > n)
            ? o - t + i
            : 0;
}
n.d(t, { Z: () => s });
var s = function (e, t) {
    var n = window,
        i = t.scrollMode,
        s = t.block,
        l = t.inline,
        c = t.boundary,
        u = t.skipOverflowHiddenElements,
        d =
            "function" == typeof c
                ? c
                : function (e) {
                      return e !== c;
                  };
    if (!r(e)) throw TypeError("Invalid target");
    for (var f, p, _ = document.scrollingElement || document.documentElement, m = [], h = e; r(h) && d(h); ) {
        if ((h = null == (p = (f = h).parentElement) ? f.getRootNode().host || null : p) === _) {
            m.push(h);
            break;
        }
        (null != h && h === document.body && a(h) && !a(document.documentElement)) ||
            (null != h && a(h, u) && m.push(h));
    }
    for (
        var g = n.visualViewport ? n.visualViewport.width : innerWidth,
            E = n.visualViewport ? n.visualViewport.height : innerHeight,
            b = window.scrollX || pageXOffset,
            y = window.scrollY || pageYOffset,
            O = e.getBoundingClientRect(),
            v = O.height,
            S = O.width,
            I = O.top,
            T = O.right,
            A = O.bottom,
            C = O.left,
            N = "start" === s || "nearest" === s ? I : "end" === s ? A : I + v / 2,
            P = "center" === l ? C + S / 2 : "end" === l ? T : C,
            R = [],
            w = 0;
        w < m.length;
        w++
    ) {
        var D = m[w],
            x = D.getBoundingClientRect(),
            L = x.height,
            j = x.width,
            M = x.top,
            k = x.right,
            U = x.bottom,
            G = x.left;
        if ("if-needed" === i && I >= 0 && C >= 0 && A <= E && T <= g && I >= M && A <= U && C >= G && T <= k) break;
        var Z = getComputedStyle(D),
            B = parseInt(Z.borderLeftWidth, 10),
            F = parseInt(Z.borderTopWidth, 10),
            V = parseInt(Z.borderRightWidth, 10),
            H = parseInt(Z.borderBottomWidth, 10),
            Y = 0,
            W = 0,
            K = "offsetWidth" in D ? D.offsetWidth - D.clientWidth - B - V : 0,
            z = "offsetHeight" in D ? D.offsetHeight - D.clientHeight - F - H : 0,
            q = "offsetWidth" in D ? (0 === D.offsetWidth ? 0 : j / D.offsetWidth) : 0,
            X = "offsetHeight" in D ? (0 === D.offsetHeight ? 0 : L / D.offsetHeight) : 0;
        if (_ === D)
            (Y =
                "start" === s
                    ? N
                    : "end" === s
                      ? N - E
                      : "nearest" === s
                        ? o(y, y + E, E, F, H, y + N, y + N + v, v)
                        : N - E / 2),
                (W =
                    "start" === l
                        ? P
                        : "center" === l
                          ? P - g / 2
                          : "end" === l
                            ? P - g
                            : o(b, b + g, g, B, V, b + P, b + P + S, S)),
                (Y = Math.max(0, Y + y)),
                (W = Math.max(0, W + b));
        else {
            (Y =
                "start" === s
                    ? N - M - F
                    : "end" === s
                      ? N - U + H + z
                      : "nearest" === s
                        ? o(M, U, L, F, H + z, N, N + v, v)
                        : N - (M + L / 2) + z / 2),
                (W =
                    "start" === l
                        ? P - G - B
                        : "center" === l
                          ? P - (G + j / 2) + K / 2
                          : "end" === l
                            ? P - k + V + K
                            : o(G, k, j, B, V + K, P, P + S, S));
            var Q = D.scrollLeft,
                J = D.scrollTop;
            (N += J - (Y = Math.max(0, Math.min(J + Y / X, D.scrollHeight - L / X + z)))),
                (P += Q - (W = Math.max(0, Math.min(Q + W / q, D.scrollWidth - j / q + K))));
        }
        R.push({
            el: D,
            top: Y,
            left: W,
        });
    }
    return R;
};
