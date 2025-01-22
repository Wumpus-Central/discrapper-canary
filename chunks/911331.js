function i(e) {
    return 'object' == typeof e && null != e && 1 === e.nodeType;
}
function a(e, n) {
    return (!n || 'hidden' !== e) && 'visible' !== e && 'clip' !== e;
}
function o(e, n) {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
        var r = getComputedStyle(e, null);
        return (
            a(r.overflowY, n) ||
            a(r.overflowX, n) ||
            (function (e) {
                var n = (function (e) {
                    if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                    try {
                        return e.ownerDocument.defaultView.frameElement;
                    } catch (e) {
                        return null;
                    }
                })(e);
                return !!n && (n.clientHeight < e.scrollHeight || n.clientWidth < e.scrollWidth);
            })(e)
        );
    }
    return !1;
}
function s(e, n, r, i, a, o, s, l) {
    return (o < e && s > n) || (o > e && s < n) ? 0 : (o <= e && l <= r) || (s >= n && l >= r) ? o - e - i : (s > n && l < r) || (o < e && l > r) ? s - n + a : 0;
}
r.d(n, {
    Z: function () {
        return l;
    }
});
var l = function (e, n) {
    var r = window,
        a = n.scrollMode,
        l = n.block,
        u = n.inline,
        c = n.boundary,
        d = n.skipOverflowHiddenElements,
        f =
            'function' == typeof c
                ? c
                : function (e) {
                      return e !== c;
                  };
    if (!i(e)) throw TypeError('Invalid target');
    for (var p, h, _ = document.scrollingElement || document.documentElement, m = [], g = e; i(g) && f(g); ) {
        if ((g = null == (h = (p = g).parentElement) ? p.getRootNode().host || null : h) === _) {
            m.push(g);
            break;
        }
        (null != g && g === document.body && o(g) && !o(document.documentElement)) || (null != g && o(g, d) && m.push(g));
    }
    for (var E = r.visualViewport ? r.visualViewport.width : innerWidth, v = r.visualViewport ? r.visualViewport.height : innerHeight, y = window.scrollX || pageXOffset, b = window.scrollY || pageYOffset, I = e.getBoundingClientRect(), T = I.height, S = I.width, A = I.top, C = I.right, N = I.bottom, R = I.left, O = 'start' === l || 'nearest' === l ? A : 'end' === l ? N : A + T / 2, D = 'center' === u ? R + S / 2 : 'end' === u ? C : R, L = [], x = 0; x < m.length; x++) {
        var w = m[x],
            P = w.getBoundingClientRect(),
            M = P.height,
            k = P.width,
            U = P.top,
            B = P.right,
            G = P.bottom,
            Z = P.left;
        if ('if-needed' === a && A >= 0 && R >= 0 && N <= v && C <= E && A >= U && N <= G && R >= Z && C <= B) break;
        var F = getComputedStyle(w),
            V = parseInt(F.borderLeftWidth, 10),
            j = parseInt(F.borderTopWidth, 10),
            H = parseInt(F.borderRightWidth, 10),
            Y = parseInt(F.borderBottomWidth, 10),
            W = 0,
            K = 0,
            z = 'offsetWidth' in w ? w.offsetWidth - w.clientWidth - V - H : 0,
            q = 'offsetHeight' in w ? w.offsetHeight - w.clientHeight - j - Y : 0,
            Q = 'offsetWidth' in w ? (0 === w.offsetWidth ? 0 : k / w.offsetWidth) : 0,
            X = 'offsetHeight' in w ? (0 === w.offsetHeight ? 0 : M / w.offsetHeight) : 0;
        if (_ === w) (W = 'start' === l ? O : 'end' === l ? O - v : 'nearest' === l ? s(b, b + v, v, j, Y, b + O, b + O + T, T) : O - v / 2), (K = 'start' === u ? D : 'center' === u ? D - E / 2 : 'end' === u ? D - E : s(y, y + E, E, V, H, y + D, y + D + S, S)), (W = Math.max(0, W + b)), (K = Math.max(0, K + y));
        else {
            (W = 'start' === l ? O - U - j : 'end' === l ? O - G + Y + q : 'nearest' === l ? s(U, G, M, j, Y + q, O, O + T, T) : O - (U + M / 2) + q / 2), (K = 'start' === u ? D - Z - V : 'center' === u ? D - (Z + k / 2) + z / 2 : 'end' === u ? D - B + H + z : s(Z, B, k, V, H + z, D, D + S, S));
            var J = w.scrollLeft,
                $ = w.scrollTop;
            (O += $ - (W = Math.max(0, Math.min($ + W / X, w.scrollHeight - M / X + q)))), (D += J - (K = Math.max(0, Math.min(J + K / Q, w.scrollWidth - k / Q + z))));
        }
        L.push({
            el: w,
            top: W,
            left: K
        });
    }
    return L;
};
