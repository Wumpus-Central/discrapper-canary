function i(e) {
    return 'object' == typeof e && null != e && 1 === e.nodeType;
}
function a(e, n) {
    return (!n || 'hidden' !== e) && 'visible' !== e && 'clip' !== e;
}
function s(e, n) {
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
function o(e, n, r, i, a, s, o, l) {
    return (s < e && o > n) || (s > e && o < n) ? 0 : (s <= e && l <= r) || (o >= n && l >= r) ? s - e - i : (o > n && l < r) || (s < e && l > r) ? o - n + a : 0;
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
    for (var _, h, p = document.scrollingElement || document.documentElement, m = [], g = e; i(g) && f(g); ) {
        if ((g = null == (h = (_ = g).parentElement) ? _.getRootNode().host || null : h) === p) {
            m.push(g);
            break;
        }
        (null != g && g === document.body && s(g) && !s(document.documentElement)) || (null != g && s(g, d) && m.push(g));
    }
    for (var E = r.visualViewport ? r.visualViewport.width : innerWidth, v = r.visualViewport ? r.visualViewport.height : innerHeight, I = window.scrollX || pageXOffset, T = window.scrollY || pageYOffset, b = e.getBoundingClientRect(), y = b.height, S = b.width, A = b.top, N = b.right, C = b.bottom, R = b.left, O = 'start' === l || 'nearest' === l ? A : 'end' === l ? C : A + y / 2, D = 'center' === u ? R + S / 2 : 'end' === u ? N : R, L = [], x = 0; x < m.length; x++) {
        var w = m[x],
            P = w.getBoundingClientRect(),
            M = P.height,
            k = P.width,
            U = P.top,
            B = P.right,
            G = P.bottom,
            Z = P.left;
        if ('if-needed' === a && A >= 0 && R >= 0 && C <= v && N <= E && A >= U && C <= G && R >= Z && N <= B) break;
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
        if (p === w) (W = 'start' === l ? O : 'end' === l ? O - v : 'nearest' === l ? o(T, T + v, v, j, Y, T + O, T + O + y, y) : O - v / 2), (K = 'start' === u ? D : 'center' === u ? D - E / 2 : 'end' === u ? D - E : o(I, I + E, E, V, H, I + D, I + D + S, S)), (W = Math.max(0, W + T)), (K = Math.max(0, K + I));
        else {
            (W = 'start' === l ? O - U - j : 'end' === l ? O - G + Y + q : 'nearest' === l ? o(U, G, M, j, Y + q, O, O + y, y) : O - (U + M / 2) + q / 2), (K = 'start' === u ? D - Z - V : 'center' === u ? D - (Z + k / 2) + z / 2 : 'end' === u ? D - B + H + z : o(Z, B, k, V, H + z, D, D + S, S));
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
