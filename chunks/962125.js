n(321073);
var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    o = n(516521),
    i = n(964486),
    u = n(833503);
function c(e) {
    let t = e.current?.getScrollerNode();
    return t?.ownerDocument.defaultView ?? window;
}
let d = r.memo((e) => {
    let {
            onScroll: t,
            onResize: n,
            listPadding: s = [0, 0, 0, 0],
            renderRow: d,
            renderSection: p,
            renderSectionHeader: f,
            renderSectionFooter: m,
            renderListHeader: h,
            rowCount: b,
            rowCountBySection: x,
            rowHeight: y,
            sectionMarginBottom: g,
            sectionHeaderHeight: v,
            sectionFooterHeight: C,
            listHeaderHeight: j,
            stickyHeaders: N = !1,
            className: I,
            hideScrollbar: k = !1,
            fade: E = !1,
            initialScrollTop: A = 0,
            role: P = "list",
            ref: S,
        } = e,
        [T, w] = r.useState(-1),
        [R, F] = r.useState(-1),
        _ = r.useRef(null),
        M = r.useRef(0),
        D = r.useRef(-1);
    (0, i.u5)(() => {
        let e = _.current?.getScrollerNode();
        null != e && (e.scrollTop = A);
    });
    let L = r.useCallback(() => {
            let e = "function" == typeof j ? j() : j;
            return null == e ? 0 : e;
        }, [j]),
        O = r.useCallback(
            (e, t, n) => ("function" == typeof y ? y(n, { sectionIndex: e, sectionRowIndex: t }) : y),
            [y],
        ),
        U = r.useCallback(
            (e) => {
                let t = "function" == typeof v ? v(e) : v;
                return null == t ? 0 : t;
            },
            [v],
        ),
        V = r.useCallback(
            (e) => {
                let t = "function" == typeof C ? C(e) : C;
                return null == t ? 0 : t;
            },
            [C],
        ),
        X = r.useCallback(
            (e) => {
                let t = "function" == typeof g ? g(e) : g;
                return null == t ? 0 : t;
            },
            [g],
        ),
        G = r.useRef([]),
        K = r.useRef([]),
        {
            totalHeight: H,
            rowDescriptors: $,
            sectionDescriptors: W,
        } = r.useMemo(() => {
            let e = 0,
                t = null != x,
                n = t ? x.length : 1,
                l = s[0],
                r = [],
                a = [];
            l += L();
            for (let s = 0; s < n; s++) {
                let n = t ? x[s] : b,
                    o = x?.[s] !== 0;
                ((a[s] = { firstRowIndex: e, offset: { top: l, bottom: -1 } }), (l += U(s)));
                for (let t = 0; t < n; t++) {
                    let n = l + (o ? O(s, t, e) : 0),
                        a = { top: l, bottom: n };
                    ((r[e] = { sectionIndex: s, offset: a }), (l = n), e++);
                }
                ((l += V(s) + X(s)), (a[s].offset.bottom = l));
            }
            return { totalHeight: (l += s[2]), rowDescriptors: r, sectionDescriptors: a };
        }, [O, V, U, X, s, b, x, L]);
    ((G.current = W), (K.current = $));
    let q = r.useCallback(() => {
        let e = _.current?.getScrollerNode();
        if (null == e) return;
        let { offsetWidth: t, offsetHeight: l, scrollTop: r } = e;
        (F(l), w(r), n?.({ width: t, height: l }));
    }, [n]);
    (r.useLayoutEffect(() => {
        -1 === R && q();
    }, [R, q]),
        r.useEffect(() => {
            let e = _.current?.getScrollerNode(),
                t = c(_);
            if (null == e || null == t) return;
            let n = new t.ResizeObserver(q);
            return (n.observe(e), () => n.disconnect());
        }, [q]));
    let B = r.useCallback(() => {
        let e = _.current?.getScrollerNode(),
            n = c(_);
        null != e &&
            null != n &&
            (n.cancelAnimationFrame(D.current),
            (D.current = n.requestAnimationFrame(() => {
                let { scrollTop: n } = e;
                ((M.current = n), t?.(n), w(n));
            })));
    }, [t]);
    r.useImperativeHandle(
        S,
        () => ({
            scrollTo: function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { animate: n = !1 } = t;
                _.current?.scrollTo({ to: e, animate: n });
            },
            scrollRowIntoView: function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { animate: n = !1, offset: l = 0 } = t,
                    r = K.current[e],
                    s = c(_);
                null != r &&
                    null != s &&
                    s.requestAnimationFrame(() => {
                        let {
                                sectionIndex: t,
                                offset: { top: s, bottom: a },
                            } = r,
                            o = U(t),
                            i = s - (N ? o : 0) - l <= M.current,
                            u = a + l >= M.current + R;
                        if (i) {
                            let t = M.current + o - s,
                                r = N ? M.current - t : s;
                            _.current?.scrollTo({ to: 0 === e ? 0 : r - l, animate: n });
                        } else if (u) {
                            let e = a - (M.current + R);
                            _.current?.scrollTo({ to: M.current + e + l, animate: n });
                        }
                    });
            },
            scrollToSectionTop: function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { animate: n = !1, offset: l = 0 } = t,
                    r = G.current[e],
                    s = c(_);
                null != r &&
                    null != s &&
                    s.requestAnimationFrame(() => {
                        _.current?.scrollTo({ to: (0 === e ? 0 : r.offset.top) + l, animate: n });
                    });
            },
            getListDimensions: () => ({ height: R, totalHeight: H }),
            getSectionDescriptors: () => G.current,
            getRowDescriptors: () => K.current,
            getScrollerNode: () => _.current?.getScrollerNode(),
            scrollIntoViewNode: (e) => _.current?.scrollIntoViewNode({ node: e }),
        }),
        [U, N, H, R],
    );
    let { visibleItems: z, listOffset: Q } = r.useMemo(() => {
            if (-1 === R || -1 === T) return { visibleItems: null, listOffset: 0 };
            let e = T + R,
                t = 0,
                n = s[0],
                l = [],
                r = L();
            null != h && T < r ? l.push(h()) : (n += r);
            for (let r = 0; r < W.length; r++) {
                let {
                        firstRowIndex: s,
                        offset: { top: a, bottom: o },
                    } = W[r],
                    i = o - a;
                if (0 === i) continue;
                let u = U(r),
                    c = V(r),
                    h = X(r);
                if (o <= T) n = o;
                else if (o > T && a < e) {
                    t = s;
                    let o = [],
                        b = 0,
                        x = 0,
                        y = a + u >= T && a <= e;
                    for (null != f && (N || y) && o.push(f(r)), y || N || (n += u); b + u + c < i - h;) {
                        let l = O(r, x, t),
                            s = a + b + u,
                            i = s + l;
                        if (i <= T) n = i - (N ? u : 0);
                        else if (i > T && s < e) o.push(d(t, { sectionIndex: r, sectionRowIndex: x }));
                        else break;
                        ((b += l), x++, t++);
                    }
                    let g = a + u + b,
                        v = g + c >= T && g <= e;
                    (null != m && v && o.push(m(r)), null != p ? l.push(p(r, o)) : (l = [...l, ...o]));
                } else break;
            }
            return { visibleItems: l, listOffset: n };
        }, [O, V, U, X, s, d, p, m, f, T, W, N, h, L, R]),
        Y = r.useMemo(() => ({ top: Q, right: s?.[1] ?? 0, bottom: s?.[2] ?? 0, left: s?.[3] ?? 0 }), [Q, s]),
        J = r.useMemo(() => ({ height: H }), [H]),
        Z = k ? o.zC : o.Ch;
    return (0, l.jsxs)(Z, {
        fade: E,
        className: a()(u.XG, I),
        ref: _,
        onScroll: B,
        children: [
            (0, l.jsx)("div", { role: P, className: u.Dw, style: Y, children: z }),
            (0, l.jsx)("div", { className: u.W7, style: J }),
        ],
    });
});
n.d(t, {}, { A: d });
