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
    for (var f, _, p = document.scrollingElement || document.documentElement, h = [], m = e; r(m) && d(m); ) {
        if ((m = null == (_ = (f = m).parentElement) ? f.getRootNode().host || null : _) === p) {
            h.push(m);
            break;
        }
        (null != m && m === document.body && a(m) && !a(document.documentElement)) ||
            (null != m && a(m, u) && h.push(m));
    }
    for (
        var g = n.visualViewport ? n.visualViewport.width : innerWidth,
            E = n.visualViewport ? n.visualViewport.height : innerHeight,
            b = window.scrollX || pageXOffset,
            y = window.scrollY || pageYOffset,
            O = e.getBoundingClientRect(),
            v = O.height,
            I = O.width,
            T = O.top,
            S = O.right,
            A = O.bottom,
            C = O.left,
            N = "start" === s || "nearest" === s ? T : "end" === s ? A : T + v / 2,
            R = "center" === l ? C + I / 2 : "end" === l ? S : C,
            P = [],
            w = 0;
        w < h.length;
        w++
    ) {
        var D = h[w],
            x = D.getBoundingClientRect(),
            L = x.height,
            M = x.width,
            j = x.top,
            k = x.right,
            U = x.bottom,
            G = x.left;
        if ("if-needed" === i && T >= 0 && C >= 0 && A <= E && S <= g && T >= j && A <= U && C >= G && S <= k) break;
        var B = getComputedStyle(D),
            Z = parseInt(B.borderLeftWidth, 10),
            F = parseInt(B.borderTopWidth, 10),
            V = parseInt(B.borderRightWidth, 10),
            H = parseInt(B.borderBottomWidth, 10),
            Y = 0,
            W = 0,
            K = "offsetWidth" in D ? D.offsetWidth - D.clientWidth - Z - V : 0,
            z = "offsetHeight" in D ? D.offsetHeight - D.clientHeight - F - H : 0,
            q = "offsetWidth" in D ? (0 === D.offsetWidth ? 0 : M / D.offsetWidth) : 0,
            X = "offsetHeight" in D ? (0 === D.offsetHeight ? 0 : L / D.offsetHeight) : 0;
        if (p === D)
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
                        ? R
                        : "center" === l
                          ? R - g / 2
                          : "end" === l
                            ? R - g
                            : o(b, b + g, g, Z, V, b + R, b + R + I, I)),
                (Y = Math.max(0, Y + y)),
                (W = Math.max(0, W + b));
        else {
            (Y =
                "start" === s
                    ? N - j - F
                    : "end" === s
                      ? N - U + H + z
                      : "nearest" === s
                        ? o(j, U, L, F, H + z, N, N + v, v)
                        : N - (j + L / 2) + z / 2),
                (W =
                    "start" === l
                        ? R - G - Z
                        : "center" === l
                          ? R - (G + M / 2) + K / 2
                          : "end" === l
                            ? R - k + V + K
                            : o(G, k, M, Z, V + K, R, R + I, I));
            var Q = D.scrollLeft,
                J = D.scrollTop;
            (N += J - (Y = Math.max(0, Math.min(J + Y / X, D.scrollHeight - L / X + z)))),
                (R += Q - (W = Math.max(0, Math.min(Q + W / q, D.scrollWidth - M / q + K))));
        }
        P.push({
            el: D,
            top: Y,
            left: W,
        });
    }
    return P;
};
