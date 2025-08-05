function r(e) {
    return 'object' == typeof e && null != e && 1 === e.nodeType;
}
function i(e, t) {
    return (!t || 'hidden' !== e) && 'visible' !== e && 'clip' !== e;
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
    return (a < e && o > t) || (a > e && o < t) ? 0 : (a <= e && s <= n) || (o >= t && s >= n) ? a - e - r : (o > t && s < n) || (a < e && s > n) ? o - t + i : 0;
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
    for (var f, _, p = document.scrollingElement || document.documentElement, h = [], m = e; r(m) && d(m); ) {
        if ((m = null == (_ = (f = m).parentElement) ? f.getRootNode().host || null : _) === p) {
            h.push(m);
            break;
        }
        (null != m && m === document.body && a(m) && !a(document.documentElement)) || (null != m && a(m, u) && h.push(m));
    }
    for (var g = n.visualViewport ? n.visualViewport.width : innerWidth, E = n.visualViewport ? n.visualViewport.height : innerHeight, b = window.scrollX || pageXOffset, y = window.scrollY || pageYOffset, O = e.getBoundingClientRect(), v = O.height, I = O.width, T = O.top, S = O.right, A = O.bottom, N = O.left, C = 'start' === s || 'nearest' === s ? T : 'end' === s ? A : T + v / 2, w = 'center' === l ? N + I / 2 : 'end' === l ? S : N, R = [], P = 0; P < h.length; P++) {
        var D = h[P],
            L = D.getBoundingClientRect(),
            x = L.height,
            k = L.width,
            j = L.top,
            M = L.right,
            U = L.bottom,
            G = L.left;
        if ('if-needed' === i && T >= 0 && N >= 0 && A <= E && S <= g && T >= j && A <= U && N >= G && S <= M) break;
        var B = getComputedStyle(D),
            Z = parseInt(B.borderLeftWidth, 10),
            F = parseInt(B.borderTopWidth, 10),
            V = parseInt(B.borderRightWidth, 10),
            H = parseInt(B.borderBottomWidth, 10),
            Y = 0,
            W = 0,
            K = 'offsetWidth' in D ? D.offsetWidth - D.clientWidth - Z - V : 0,
            z = 'offsetHeight' in D ? D.offsetHeight - D.clientHeight - F - H : 0,
            q = 'offsetWidth' in D ? (0 === D.offsetWidth ? 0 : k / D.offsetWidth) : 0,
            $ = 'offsetHeight' in D ? (0 === D.offsetHeight ? 0 : x / D.offsetHeight) : 0;
        if (p === D) ((Y = 'start' === s ? C : 'end' === s ? C - E : 'nearest' === s ? o(y, y + E, E, F, H, y + C, y + C + v, v) : C - E / 2), (W = 'start' === l ? w : 'center' === l ? w - g / 2 : 'end' === l ? w - g : o(b, b + g, g, Z, V, b + w, b + w + I, I)), (Y = Math.max(0, Y + y)), (W = Math.max(0, W + b)));
        else {
            ((Y = 'start' === s ? C - j - F : 'end' === s ? C - U + H + z : 'nearest' === s ? o(j, U, x, F, H + z, C, C + v, v) : C - (j + x / 2) + z / 2), (W = 'start' === l ? w - G - Z : 'center' === l ? w - (G + k / 2) + K / 2 : 'end' === l ? w - M + V + K : o(G, M, k, Z, V + K, w, w + I, I)));
            var X = D.scrollLeft,
                Q = D.scrollTop;
            ((C += Q - (Y = Math.max(0, Math.min(Q + Y / $, D.scrollHeight - x / $ + z)))), (w += X - (W = Math.max(0, Math.min(X + W / q, D.scrollWidth - k / q + K)))));
        }
        R.push({
            el: D,
            top: Y,
            left: W
        });
    }
    return R;
};
