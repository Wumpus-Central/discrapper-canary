(n.d(t, { A: () => u }), n(321073));
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(689175),
    o = n(964486),
    d = n(833503);
function c(e) {
    let t = e.current?.getScrollerNode();
    return t?.ownerDocument.defaultView ?? window;
}
let u = r.memo((e) => {
    let {
            onScroll: t,
            onResize: n,
            listPadding: a = [0, 0, 0, 0],
            renderRow: u,
            renderSection: _,
            renderSectionHeader: E,
            renderSectionFooter: A,
            renderListHeader: h,
            rowCount: f,
            rowCountBySection: I,
            rowHeight: p,
            sectionMarginBottom: T,
            sectionHeaderHeight: m,
            sectionFooterHeight: g,
            listHeaderHeight: S,
            stickyHeaders: N = !1,
            className: C,
            hideScrollbar: O = !1,
            fade: R = !1,
            initialScrollTop: L = 0,
            role: y = "list",
            ref: D,
        } = e,
        [v, b] = r.useState(-1),
        [M, P] = r.useState(-1),
        U = r.useRef(null),
        w = r.useRef(0),
        G = r.useRef(-1);
    (0, o.u5)(() => {
        let e = U.current?.getScrollerNode();
        null != e && (e.scrollTop = L);
    });
    let x = r.useCallback(() => {
            let e = "function" == typeof S ? S() : S;
            return null == e ? 0 : e;
        }, [S]),
        k = r.useCallback(
            (e, t, n) => ("function" == typeof p ? p(n, { sectionIndex: e, sectionRowIndex: t }) : p),
            [p],
        ),
        F = r.useCallback(
            (e) => {
                let t = "function" == typeof m ? m(e) : m;
                return null == t ? 0 : t;
            },
            [m],
        ),
        B = r.useCallback(
            (e) => {
                let t = "function" == typeof g ? g(e) : g;
                return null == t ? 0 : t;
            },
            [g],
        ),
        V = r.useCallback(
            (e) => {
                let t = "function" == typeof T ? T(e) : T;
                return null == t ? 0 : t;
            },
            [T],
        ),
        H = r.useRef([]),
        j = r.useRef([]),
        {
            totalHeight: W,
            rowDescriptors: Y,
            sectionDescriptors: K,
        } = r.useMemo(() => {
            let e = 0,
                t = null != I,
                n = t ? I.length : 1,
                i = a[0],
                r = [],
                s = [];
            i += x();
            for (let a = 0; a < n; a++) {
                let n = t ? I[a] : f,
                    l = I?.[a] !== 0;
                ((s[a] = { firstRowIndex: e, offset: { top: i, bottom: -1 } }), (i += F(a)));
                for (let t = 0; t < n; t++) {
                    let n = i + (l ? k(a, t, e) : 0),
                        s = { top: i, bottom: n };
                    ((r[e] = { sectionIndex: a, offset: s }), (i = n), e++);
                }
                ((i += B(a) + V(a)), (s[a].offset.bottom = i));
            }
            return { totalHeight: (i += a[2]), rowDescriptors: r, sectionDescriptors: s };
        }, [k, B, F, V, a, f, I, x]);
    ((H.current = K), (j.current = Y));
    let $ = r.useCallback(() => {
        let e = U.current?.getScrollerNode();
        if (null == e) return;
        let { offsetWidth: t, offsetHeight: i, scrollTop: r } = e;
        (P(i), b(r), n?.({ width: t, height: i }));
    }, [n]);
    (r.useLayoutEffect(() => {
        -1 === M && $();
    }, [M, $]),
        r.useEffect(() => {
            let e = U.current?.getScrollerNode(),
                t = c(U);
            if (null == e || null == t) return;
            let n = new t.ResizeObserver($);
            return (n.observe(e), () => n.disconnect());
        }, [$]));
    let z = r.useCallback(() => {
        let e = U.current?.getScrollerNode(),
            n = c(U);
        null != e &&
            null != n &&
            (n.cancelAnimationFrame(G.current),
            (G.current = n.requestAnimationFrame(() => {
                let { scrollTop: n } = e;
                ((w.current = n), t?.(n), b(n));
            })));
    }, [t]);
    r.useImperativeHandle(
        D,
        () => ({
            scrollTo: function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { animate: n = !1 } = t;
                U.current?.scrollTo({ to: e, animate: n });
            },
            scrollRowIntoView: function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { animate: n = !1, offset: i = 0 } = t,
                    r = j.current[e],
                    a = c(U);
                null != r &&
                    null != a &&
                    a.requestAnimationFrame(() => {
                        let {
                                sectionIndex: t,
                                offset: { top: a, bottom: s },
                            } = r,
                            l = F(t),
                            o = a - (N ? l : 0) - i <= w.current,
                            d = s + i >= w.current + M;
                        if (o) {
                            let t = w.current + l - a,
                                r = N ? w.current - t : a;
                            U.current?.scrollTo({ to: 0 === e ? 0 : r - i, animate: n });
                        } else if (d) {
                            let e = s - (w.current + M);
                            U.current?.scrollTo({ to: w.current + e + i, animate: n });
                        }
                    });
            },
            scrollToSectionTop: function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { animate: n = !1, offset: i = 0 } = t,
                    r = H.current[e],
                    a = c(U);
                null != r &&
                    null != a &&
                    a.requestAnimationFrame(() => {
                        U.current?.scrollTo({ to: (0 === e ? 0 : r.offset.top) + i, animate: n });
                    });
            },
            getListDimensions: () => ({ height: M, totalHeight: W }),
            getSectionDescriptors: () => H.current,
            getRowDescriptors: () => j.current,
            getScrollerNode: () => U.current?.getScrollerNode(),
            scrollIntoViewNode: (e) => U.current?.scrollIntoViewNode({ node: e }),
        }),
        [F, N, W, M],
    );
    let { visibleItems: X, listOffset: q } = r.useMemo(() => {
            if (-1 === M || -1 === v) return { visibleItems: null, listOffset: 0 };
            let e = v + M,
                t = 0,
                n = a[0],
                i = [],
                r = x();
            null != h && v < r ? i.push(h()) : (n += r);
            for (let r = 0; r < K.length; r++) {
                let {
                        firstRowIndex: a,
                        offset: { top: s, bottom: l },
                    } = K[r],
                    o = l - s;
                if (0 === o) continue;
                let d = F(r),
                    c = B(r),
                    h = V(r);
                if (l <= v) n = l;
                else if (l > v && s < e) {
                    t = a;
                    let l = [],
                        f = 0,
                        I = 0,
                        p = s + d >= v && s <= e;
                    for (null != E && (N || p) && l.push(E(r)), p || N || (n += d); f + d + c < o - h;) {
                        let i = k(r, I, t),
                            a = s + f + d,
                            o = a + i;
                        if (o <= v) n = o - (N ? d : 0);
                        else if (o > v && a < e) l.push(u(t, { sectionIndex: r, sectionRowIndex: I }));
                        else break;
                        ((f += i), I++, t++);
                    }
                    let T = s + d + f,
                        m = T + c >= v && T <= e;
                    (null != A && m && l.push(A(r)), null != _ ? i.push(_(r, l)) : (i = [...i, ...l]));
                } else break;
            }
            return { visibleItems: i, listOffset: n };
        }, [k, B, F, V, a, u, _, A, E, v, K, N, h, x, M]),
        Z = r.useMemo(() => ({ top: q, right: a?.[1] ?? 0, bottom: a?.[2] ?? 0, left: a?.[3] ?? 0 }), [q, a]),
        Q = r.useMemo(() => ({ height: W }), [W]),
        J = O ? l.zC : l.Ch;
    return (0, i.jsxs)(J, {
        fade: R,
        className: s()(d.XG, C),
        ref: U,
        onScroll: z,
        children: [
            (0, i.jsx)("div", { role: y, className: d.Dw, style: Z, children: X }),
            (0, i.jsx)("div", { className: d.W7, style: Q }),
        ],
    });
});
