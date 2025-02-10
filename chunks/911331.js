function i(e) {
    return 'object' == typeof e && null != e && 1 === e.nodeType;
}
function r(e, t) {
    return (!t || 'hidden' !== e) && 'visible' !== e && 'clip' !== e;
}
function a(e, t) {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
        var n = getComputedStyle(e, null);
        return (
            r(n.overflowY, t) ||
            r(n.overflowX, t) ||
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
function s(e, t, n, i, r, a, s, o) {
    return (a < e && s > t) || (a > e && s < t) ? 0 : (a <= e && o <= n) || (s >= t && o >= n) ? a - e - i : (s > t && o < n) || (a < e && o > n) ? s - t + r : 0;
}
n.d(t, { Z: () => o });
var o = function (e, t) {
    var n = window,
        r = t.scrollMode,
        o = t.block,
        l = t.inline,
        u = t.boundary,
        c = t.skipOverflowHiddenElements,
        d =
            'function' == typeof u
                ? u
                : function (e) {
                      return e !== u;
                  };
    if (!i(e)) throw TypeError('Invalid target');
    for (var f, _, p = document.scrollingElement || document.documentElement, h = [], m = e; i(m) && d(m); ) {
        if ((m = null == (_ = (f = m).parentElement) ? f.getRootNode().host || null : _) === p) {
            h.push(m);
            break;
        }
        (null != m && m === document.body && a(m) && !a(document.documentElement)) || (null != m && a(m, c) && h.push(m));
    }
    for (var g = n.visualViewport ? n.visualViewport.width : innerWidth, E = n.visualViewport ? n.visualViewport.height : innerHeight, v = window.scrollX || pageXOffset, y = window.scrollY || pageYOffset, I = e.getBoundingClientRect(), T = I.height, b = I.width, S = I.top, A = I.right, N = I.bottom, C = I.left, R = 'start' === o || 'nearest' === o ? S : 'end' === o ? N : S + T / 2, O = 'center' === l ? C + b / 2 : 'end' === l ? A : C, D = [], L = 0; L < h.length; L++) {
        var x = h[L],
            P = x.getBoundingClientRect(),
            w = P.height,
            M = P.width,
            k = P.top,
            U = P.right,
            G = P.bottom,
            B = P.left;
        if ('if-needed' === r && S >= 0 && C >= 0 && N <= E && A <= g && S >= k && N <= G && C >= B && A <= U) break;
        var Z = getComputedStyle(x),
            F = parseInt(Z.borderLeftWidth, 10),
            V = parseInt(Z.borderTopWidth, 10),
            j = parseInt(Z.borderRightWidth, 10),
            H = parseInt(Z.borderBottomWidth, 10),
            Y = 0,
            W = 0,
            K = 'offsetWidth' in x ? x.offsetWidth - x.clientWidth - F - j : 0,
            z = 'offsetHeight' in x ? x.offsetHeight - x.clientHeight - V - H : 0,
            q = 'offsetWidth' in x ? (0 === x.offsetWidth ? 0 : M / x.offsetWidth) : 0,
            Q = 'offsetHeight' in x ? (0 === x.offsetHeight ? 0 : w / x.offsetHeight) : 0;
        if (p === x) (Y = 'start' === o ? R : 'end' === o ? R - E : 'nearest' === o ? s(y, y + E, E, V, H, y + R, y + R + T, T) : R - E / 2), (W = 'start' === l ? O : 'center' === l ? O - g / 2 : 'end' === l ? O - g : s(v, v + g, g, F, j, v + O, v + O + b, b)), (Y = Math.max(0, Y + y)), (W = Math.max(0, W + v));
        else {
            (Y = 'start' === o ? R - k - V : 'end' === o ? R - G + H + z : 'nearest' === o ? s(k, G, w, V, H + z, R, R + T, T) : R - (k + w / 2) + z / 2), (W = 'start' === l ? O - B - F : 'center' === l ? O - (B + M / 2) + K / 2 : 'end' === l ? O - U + j + K : s(B, U, M, F, j + K, O, O + b, b));
            var X = x.scrollLeft,
                J = x.scrollTop;
            (R += J - (Y = Math.max(0, Math.min(J + Y / Q, x.scrollHeight - w / Q + z)))), (O += X - (W = Math.max(0, Math.min(X + W / q, x.scrollWidth - M / q + K))));
        }
        D.push({
            el: x,
            top: Y,
            left: W
        });
    }
    return D;
};
