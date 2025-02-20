function r(e) {
    return 'object' == typeof e && null != e && 1 === e.nodeType;
}
function i(e, t) {
    return (!t || 'hidden' !== e) && 'visible' !== e && 'clip' !== e;
}
function o(e, t) {
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
function a(e, t, n, r, i, o, a, s) {
    return (o < e && a > t) || (o > e && a < t) ? 0 : (o <= e && s <= n) || (a >= t && s >= n) ? o - e - r : (a > t && s < n) || (o < e && s > n) ? a - t + i : 0;
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
            'function' == typeof c
                ? c
                : function (e) {
                      return e !== c;
                  };
    if (!r(e)) throw TypeError('Invalid target');
    for (var f, p, _ = document.scrollingElement || document.documentElement, h = [], m = e; r(m) && d(m); ) {
        if ((m = null == (p = (f = m).parentElement) ? f.getRootNode().host || null : p) === _) {
            h.push(m);
            break;
        }
        (null != m && m === document.body && o(m) && !o(document.documentElement)) || (null != m && o(m, u) && h.push(m));
    }
    for (var g = n.visualViewport ? n.visualViewport.width : innerWidth, E = n.visualViewport ? n.visualViewport.height : innerHeight, v = window.scrollX || pageXOffset, b = window.scrollY || pageYOffset, y = e.getBoundingClientRect(), O = y.height, S = y.width, I = y.top, T = y.right, N = y.bottom, A = y.left, C = 'start' === s || 'nearest' === s ? I : 'end' === s ? N : I + O / 2, R = 'center' === l ? A + S / 2 : 'end' === l ? T : A, P = [], w = 0; w < h.length; w++) {
        var D = h[w],
            x = D.getBoundingClientRect(),
            L = x.height,
            M = x.width,
            k = x.top,
            j = x.right,
            U = x.bottom,
            G = x.left;
        if ('if-needed' === i && I >= 0 && A >= 0 && N <= E && T <= g && I >= k && N <= U && A >= G && T <= j) break;
        var B = getComputedStyle(D),
            Z = parseInt(B.borderLeftWidth, 10),
            F = parseInt(B.borderTopWidth, 10),
            V = parseInt(B.borderRightWidth, 10),
            H = parseInt(B.borderBottomWidth, 10),
            W = 0,
            Y = 0,
            K = 'offsetWidth' in D ? D.offsetWidth - D.clientWidth - Z - V : 0,
            z = 'offsetHeight' in D ? D.offsetHeight - D.clientHeight - F - H : 0,
            q = 'offsetWidth' in D ? (0 === D.offsetWidth ? 0 : M / D.offsetWidth) : 0,
            Q = 'offsetHeight' in D ? (0 === D.offsetHeight ? 0 : L / D.offsetHeight) : 0;
        if (_ === D) (W = 'start' === s ? C : 'end' === s ? C - E : 'nearest' === s ? a(b, b + E, E, F, H, b + C, b + C + O, O) : C - E / 2), (Y = 'start' === l ? R : 'center' === l ? R - g / 2 : 'end' === l ? R - g : a(v, v + g, g, Z, V, v + R, v + R + S, S)), (W = Math.max(0, W + b)), (Y = Math.max(0, Y + v));
        else {
            (W = 'start' === s ? C - k - F : 'end' === s ? C - U + H + z : 'nearest' === s ? a(k, U, L, F, H + z, C, C + O, O) : C - (k + L / 2) + z / 2), (Y = 'start' === l ? R - G - Z : 'center' === l ? R - (G + M / 2) + K / 2 : 'end' === l ? R - j + V + K : a(G, j, M, Z, V + K, R, R + S, S));
            var X = D.scrollLeft,
                J = D.scrollTop;
            (C += J - (W = Math.max(0, Math.min(J + W / Q, D.scrollHeight - L / Q + z)))), (R += X - (Y = Math.max(0, Math.min(X + Y / q, D.scrollWidth - M / q + K))));
        }
        P.push({
            el: D,
            top: W,
            left: Y
        });
    }
    return P;
};
