l(321073);
var r = l(477900),
    o = l(582128),
    n = l(503698),
    u = l.n(n),
    s = l(516521),
    c = l(964486),
    i = l(833503);
function f(e) {
    let t = e.current?.getScrollerNode();
    return t?.ownerDocument.defaultView ?? window;
}
let a = o.memo((e) => {
    let {
            onScroll: t,
            onResize: l,
            listPadding: n = [0, 0, 0, 0],
            renderRow: a,
            renderSection: d,
            renderSectionHeader: p,
            renderSectionFooter: h,
            renderListHeader: m,
            rowCount: b,
            rowCountBySection: g,
            rowHeight: w,
            sectionMarginBottom: k,
            sectionHeaderHeight: N,
            sectionFooterHeight: S,
            listHeaderHeight: C,
            stickyHeaders: v = !1,
            className: R,
            hideScrollbar: y = !1,
            fade: T = !1,
            initialScrollTop: I = 0,
            role: x = "list",
            ref: A,
        } = e,
        [D, F] = o.useState(-1),
        [M, V] = o.useState(-1),
        j = o.useRef(null),
        q = o.useRef(0),
        z = o.useRef(-1);
    (0, c.u5)(() => {
        let e = j.current?.getScrollerNode();
        null != e && (e.scrollTop = I);
    });
    let E = o.useCallback(() => {
            let e = "function" == typeof C ? C() : C;
            return null == e ? 0 : e;
        }, [C]),
        H = o.useCallback(
            (e, t, l) => ("function" == typeof w ? w(l, { sectionIndex: e, sectionRowIndex: t }) : w),
            [w],
        ),
        L = o.useCallback(
            (e) => {
                let t = "function" == typeof N ? N(e) : N;
                return null == t ? 0 : t;
            },
            [N],
        ),
        O = o.useCallback(
            (e) => {
                let t = "function" == typeof S ? S(e) : S;
                return null == t ? 0 : t;
            },
            [S],
        ),
        _ = o.useCallback(
            (e) => {
                let t = "function" == typeof k ? k(e) : k;
                return null == t ? 0 : t;
            },
            [k],
        ),
        G = o.useRef([]),
        W = o.useRef([]),
        {
            totalHeight: X,
            rowDescriptors: B,
            sectionDescriptors: J,
        } = o.useMemo(() => {
            let e = 0,
                t = null != g,
                l = t ? g.length : 1,
                r = n[0],
                o = [],
                u = [];
            r += E();
            for (let n = 0; n < l; n++) {
                let l = t ? g[n] : b,
                    s = g?.[n] !== 0;
                ((u[n] = { firstRowIndex: e, offset: { top: r, bottom: -1 } }), (r += L(n)));
                for (let t = 0; t < l; t++) {
                    let l = r + (s ? H(n, t, e) : 0),
                        u = { top: r, bottom: l };
                    ((o[e] = { sectionIndex: n, offset: u }), (r = l), e++);
                }
                ((r += O(n) + _(n)), (u[n].offset.bottom = r));
            }
            return { totalHeight: (r += n[2]), rowDescriptors: o, sectionDescriptors: u };
        }, [H, O, L, _, n, b, g, E]);
    ((G.current = J), (W.current = B));
    let K = o.useCallback(() => {
        let e = j.current?.getScrollerNode();
        if (null == e) return;
        let { offsetWidth: t, offsetHeight: r, scrollTop: o } = e;
        (V(r), F(o), l?.({ width: t, height: r }));
    }, [l]);
    (o.useLayoutEffect(() => {
        -1 === M && K();
    }, [M, K]),
        o.useEffect(() => {
            let e = j.current?.getScrollerNode(),
                t = f(j);
            if (null == e || null == t) return;
            let l = new t.ResizeObserver(K);
            return (l.observe(e), () => l.disconnect());
        }, [K]));
    let P = o.useCallback(() => {
        let e = j.current?.getScrollerNode(),
            l = f(j);
        null != e &&
            null != l &&
            (l.cancelAnimationFrame(z.current),
            (z.current = l.requestAnimationFrame(() => {
                let { scrollTop: l } = e;
                ((q.current = l), t?.(l), F(l));
            })));
    }, [t]);
    o.useImperativeHandle(
        A,
        () => ({
            scrollTo: function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { animate: l = !1 } = t;
                j.current?.scrollTo({ to: e, animate: l });
            },
            scrollRowIntoView: function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { animate: l = !1, offset: r = 0 } = t,
                    o = W.current[e],
                    n = f(j);
                null != o &&
                    null != n &&
                    n.requestAnimationFrame(() => {
                        let {
                                sectionIndex: t,
                                offset: { top: n, bottom: u },
                            } = o,
                            s = L(t),
                            c = n - (v ? s : 0) - r <= q.current,
                            i = u + r >= q.current + M;
                        if (c) {
                            let t = q.current + s - n,
                                o = v ? q.current - t : n;
                            j.current?.scrollTo({ to: 0 === e ? 0 : o - r, animate: l });
                        } else if (i) {
                            let e = u - (q.current + M);
                            j.current?.scrollTo({ to: q.current + e + r, animate: l });
                        }
                    });
            },
            scrollToSectionTop: function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { animate: l = !1, offset: r = 0 } = t,
                    o = G.current[e],
                    n = f(j);
                null != o &&
                    null != n &&
                    n.requestAnimationFrame(() => {
                        j.current?.scrollTo({ to: (0 === e ? 0 : o.offset.top) + r, animate: l });
                    });
            },
            getListDimensions: () => ({ height: M, totalHeight: X }),
            getSectionDescriptors: () => G.current,
            getRowDescriptors: () => W.current,
            getScrollerNode: () => j.current?.getScrollerNode(),
            scrollIntoViewNode: (e) => j.current?.scrollIntoViewNode({ node: e }),
        }),
        [L, v, X, M],
    );
    let { visibleItems: Q, listOffset: U } = o.useMemo(() => {
            if (-1 === M || -1 === D) return { visibleItems: null, listOffset: 0 };
            let e = D + M,
                t = 0,
                l = n[0],
                r = [],
                o = E();
            null != m && D < o ? r.push(m()) : (l += o);
            for (let o = 0; o < J.length; o++) {
                let {
                        firstRowIndex: n,
                        offset: { top: u, bottom: s },
                    } = J[o],
                    c = s - u;
                if (0 === c) continue;
                let i = L(o),
                    f = O(o),
                    m = _(o);
                if (s <= D) l = s;
                else if (s > D && u < e) {
                    t = n;
                    let s = [],
                        b = 0,
                        g = 0,
                        w = u + i >= D && u <= e;
                    for (null != p && (v || w) && s.push(p(o)), w || v || (l += i); b + i + f < c - m;) {
                        let r = H(o, g, t),
                            n = u + b + i,
                            c = n + r;
                        if (c <= D) l = c - (v ? i : 0);
                        else if (c > D && n < e) s.push(a(t, { sectionIndex: o, sectionRowIndex: g }));
                        else break;
                        ((b += r), g++, t++);
                    }
                    let k = u + i + b,
                        N = k + f >= D && k <= e;
                    (null != h && N && s.push(h(o)), null != d ? r.push(d(o, s)) : (r = [...r, ...s]));
                } else break;
            }
            return { visibleItems: r, listOffset: l };
        }, [H, O, L, _, n, a, d, h, p, D, J, v, m, E, M]),
        Y = o.useMemo(() => ({ top: U, right: n?.[1] ?? 0, bottom: n?.[2] ?? 0, left: n?.[3] ?? 0 }), [U, n]),
        Z = o.useMemo(() => ({ height: X }), [X]),
        $ = y ? s.zC : s.Ch;
    return (0, r.jsxs)($, {
        fade: T,
        className: u()(i.XG, R),
        ref: j,
        onScroll: P,
        children: [
            (0, r.jsx)("div", { role: x, className: i.Dw, style: Y, children: Q }),
            (0, r.jsx)("div", { className: i.W7, style: Z }),
        ],
    });
});
l.d(t, {}, { A: a });
