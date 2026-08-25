"use strict";
n.d(t, { A: () => u }), n(321073);
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
let u = r.memo(
    r.forwardRef((e, t) => {
        let {
                onScroll: n,
                onResize: a,
                listPadding: u = [0, 0, 0, 0],
                renderRow: _,
                renderSection: E,
                renderSectionHeader: A,
                renderSectionFooter: h,
                renderListHeader: I,
                rowCount: f,
                rowCountBySection: p,
                rowHeight: T,
                sectionMarginBottom: m,
                sectionHeaderHeight: g,
                sectionFooterHeight: S,
                listHeaderHeight: N,
                stickyHeaders: C = !1,
                className: O,
                hideScrollbar: R = !1,
                fade: L = !1,
                initialScrollTop: y = 0,
                role: D = "list",
            } = e,
            [v, b] = r.useState(-1),
            [M, P] = r.useState(-1),
            U = r.useRef(null),
            w = r.useRef(0),
            G = r.useRef(-1);
        (0, o.u5)(() => {
            let e = U.current?.getScrollerNode();
            null != e && (e.scrollTop = y);
        });
        let x = r.useCallback(() => {
                let e = "function" == typeof N ? N() : N;
                return null == e ? 0 : e;
            }, [N]),
            k = r.useCallback(
                (e, t, n) => ("function" == typeof T ? T(n, { sectionIndex: e, sectionRowIndex: t }) : T),
                [T],
            ),
            F = r.useCallback(
                (e) => {
                    let t = "function" == typeof g ? g(e) : g;
                    return null == t ? 0 : t;
                },
                [g],
            ),
            V = r.useCallback(
                (e) => {
                    let t = "function" == typeof S ? S(e) : S;
                    return null == t ? 0 : t;
                },
                [S],
            ),
            B = r.useCallback(
                (e) => {
                    let t = "function" == typeof m ? m(e) : m;
                    return null == t ? 0 : t;
                },
                [m],
            ),
            H = r.useRef([]),
            j = r.useRef([]),
            {
                totalHeight: W,
                rowDescriptors: Y,
                sectionDescriptors: K,
            } = r.useMemo(() => {
                let e = 0,
                    t = null != p,
                    n = t ? p.length : 1,
                    i = u[0],
                    r = [],
                    a = [];
                i += x();
                for (let s = 0; s < n; s++) {
                    let n = t ? p[s] : f,
                        l = p?.[s] !== 0;
                    (a[s] = { firstRowIndex: e, offset: { top: i, bottom: -1 } }), (i += F(s));
                    for (let t = 0; t < n; t++) {
                        let n = i + (l ? k(s, t, e) : 0),
                            a = { top: i, bottom: n };
                        (r[e] = { sectionIndex: s, offset: a }), (i = n), e++;
                    }
                    (i += V(s) + B(s)), (a[s].offset.bottom = i);
                }
                return { totalHeight: (i += u[2]), rowDescriptors: r, sectionDescriptors: a };
            }, [k, V, F, B, u, f, p, x]);
        (H.current = K), (j.current = Y);
        let $ = r.useCallback(() => {
            let e = U.current?.getScrollerNode();
            if (null == e) return;
            let { offsetWidth: t, offsetHeight: n, scrollTop: i } = e;
            P(n), b(i), a?.({ width: t, height: n });
        }, [a]);
        r.useLayoutEffect(() => {
            -1 === M && $();
        }, [M, $]),
            r.useEffect(() => {
                let e = U.current?.getScrollerNode(),
                    t = c(U);
                if (null == e || null == t) return;
                let n = new t.ResizeObserver($);
                return n.observe(e), () => n.disconnect();
            }, [$]);
        let z = r.useCallback(() => {
            let e = U.current?.getScrollerNode(),
                t = c(U);
            null != e &&
                null != t &&
                (t.cancelAnimationFrame(G.current),
                (G.current = t.requestAnimationFrame(() => {
                    let { scrollTop: t } = e;
                    (w.current = t), n?.(t), b(t);
                })));
        }, [n]);
        r.useImperativeHandle(
            t,
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
                                o = a - (C ? l : 0) - i <= w.current,
                                d = s + i >= w.current + M;
                            if (o) {
                                let t = w.current + l - a,
                                    r = C ? w.current - t : a;
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
            [F, C, W, M],
        );
        let { visibleItems: Z, listOffset: q } = r.useMemo(() => {
                if (-1 === M || -1 === v) return { visibleItems: null, listOffset: 0 };
                let e = v + M,
                    t = 0,
                    n = u[0],
                    i = [],
                    r = x();
                null != I && v < r ? i.push(I()) : (n += r);
                for (let r = 0; r < K.length; r++) {
                    let {
                            firstRowIndex: a,
                            offset: { top: s, bottom: l },
                        } = K[r],
                        o = l - s;
                    if (0 === o) continue;
                    let d = F(r),
                        c = V(r),
                        u = B(r);
                    if (l <= v) n = l;
                    else if (l > v && s < e) {
                        t = a;
                        let l = [],
                            I = 0,
                            f = 0,
                            p = s + d >= v && s <= e;
                        for (null != A && (C || p) && l.push(A(r)), p || C || (n += d); I + d + c < o - u; ) {
                            let i = k(r, f, t),
                                a = s + I + d,
                                o = a + i;
                            if (o <= v) n = o - (C ? d : 0);
                            else if (o > v && a < e) l.push(_(t, { sectionIndex: r, sectionRowIndex: f }));
                            else break;
                            (I += i), f++, t++;
                        }
                        let T = s + d + I,
                            m = T + c >= v && T <= e;
                        null != h && m && l.push(h(r)), null != E ? i.push(E(r, l)) : (i = [...i, ...l]);
                    } else break;
                }
                return { visibleItems: i, listOffset: n };
            }, [k, V, F, B, u, _, E, h, A, v, K, C, I, x, M]),
            X = r.useMemo(() => ({ top: q, right: u?.[1] ?? 0, bottom: u?.[2] ?? 0, left: u?.[3] ?? 0 }), [q, u]),
            Q = r.useMemo(() => ({ height: W }), [W]),
            J = R ? l.zC : l.Ch;
        return (0, i.jsxs)(J, {
            fade: L,
            className: s()(d.XG, O),
            ref: U,
            onScroll: z,
            children: [
                (0, i.jsx)("div", { role: D, className: d.Dw, style: X, children: Z }),
                (0, i.jsx)("div", { className: d.W7, style: Q }),
            ],
        });
    }),
);
