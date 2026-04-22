"use strict";
n.d(t, { A: () => c }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(599319),
    l = n(964486),
    u = n(958268);
function d(e) {
    let t = e.current?.getScrollerNode();
    return t?.ownerDocument.defaultView ?? window;
}
let c = i.memo(
    i.forwardRef((e, t) => {
        let {
                onScroll: n,
                onResize: s,
                listPadding: c = [0, 0, 0, 0],
                renderRow: _,
                renderSection: f,
                renderSectionHeader: E,
                renderSectionFooter: h,
                renderListHeader: p,
                rowCount: m,
                rowCountBySection: g,
                rowHeight: A,
                sectionMarginBottom: I,
                sectionHeaderHeight: T,
                sectionFooterHeight: S,
                listHeaderHeight: y,
                stickyHeaders: N = !1,
                className: O,
                hideScrollbar: R = !1,
                fade: v = !1,
                initialScrollTop: C = 0,
                role: b = "list",
            } = e,
            [D, L] = i.useState(-1),
            [w, M] = i.useState(-1),
            P = i.useRef(null),
            U = i.useRef(0),
            k = i.useRef(-1);
        (0, l.u5)(() => {
            let e = P.current?.getScrollerNode();
            null != e && (e.scrollTop = C);
        });
        let x = i.useCallback(() => {
                let e = "function" == typeof y ? y() : y;
                return null == e ? 0 : e;
            }, [y]),
            G = i.useCallback(
                (e, t, n) => ("function" == typeof A ? A(n, { sectionIndex: e, sectionRowIndex: t }) : A),
                [A],
            ),
            V = i.useCallback(
                (e) => {
                    let t = "function" == typeof T ? T(e) : T;
                    return null == t ? 0 : t;
                },
                [T],
            ),
            F = i.useCallback(
                (e) => {
                    let t = "function" == typeof S ? S(e) : S;
                    return null == t ? 0 : t;
                },
                [S],
            ),
            B = i.useCallback(
                (e) => {
                    let t = "function" == typeof I ? I(e) : I;
                    return null == t ? 0 : t;
                },
                [I],
            ),
            H = i.useRef([]),
            Y = i.useRef([]),
            {
                totalHeight: W,
                rowDescriptors: j,
                sectionDescriptors: K,
            } = i.useMemo(() => {
                let e = 0,
                    t = null != g,
                    n = t ? g.length : 1,
                    r = c[0],
                    i = [],
                    s = [];
                r += x();
                for (let a = 0; a < n; a++) {
                    let n = t ? g[a] : m,
                        o = g?.[a] !== 0;
                    (s[a] = { firstRowIndex: e, offset: { top: r, bottom: -1 } }), (r += V(a));
                    for (let t = 0; t < n; t++) {
                        let n = r + (o ? G(a, t, e) : 0),
                            s = { top: r, bottom: n };
                        (i[e] = { sectionIndex: a, offset: s }), (r = n), e++;
                    }
                    (r += F(a) + B(a)), (s[a].offset.bottom = r);
                }
                return { totalHeight: (r += c[2]), rowDescriptors: i, sectionDescriptors: s };
            }, [G, F, V, B, c, m, g, x]);
        (H.current = K), (Y.current = j);
        let $ = i.useCallback(() => {
            let e = P.current?.getScrollerNode();
            if (null == e) return;
            let { offsetWidth: t, offsetHeight: n, scrollTop: r } = e;
            M(n), L(r), s?.({ width: t, height: n });
        }, [s]);
        i.useLayoutEffect(() => {
            -1 === w && $();
        }, [w, $]),
            i.useEffect(() => {
                let e = P.current?.getScrollerNode(),
                    t = d(P);
                if (null == e || null == t) return;
                let n = new t.ResizeObserver($);
                return n.observe(e), () => n.disconnect();
            }, [$]);
        let z = i.useCallback(() => {
            let e = P.current?.getScrollerNode(),
                t = d(P);
            null != e &&
                null != t &&
                (t.cancelAnimationFrame(k.current),
                (k.current = t.requestAnimationFrame(() => {
                    let { scrollTop: t } = e;
                    (U.current = t), n?.(t), L(t);
                })));
        }, [n]);
        i.useImperativeHandle(
            t,
            () => ({
                scrollTo: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1 } = t;
                    P.current?.scrollTo({ to: e, animate: n });
                },
                scrollRowIntoView: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: r = 0 } = t,
                        i = Y.current[e],
                        s = d(P);
                    null != i &&
                        null != s &&
                        s.requestAnimationFrame(() => {
                            let {
                                    sectionIndex: t,
                                    offset: { top: s, bottom: a },
                                } = i,
                                o = V(t),
                                l = s - (N ? o : 0) - r <= U.current,
                                u = a + r >= U.current + w;
                            if (l) {
                                let t = U.current + o - s,
                                    i = N ? U.current - t : s;
                                P.current?.scrollTo({ to: 0 === e ? 0 : i - r, animate: n });
                            } else if (u) {
                                let e = a - (U.current + w);
                                P.current?.scrollTo({ to: U.current + e + r, animate: n });
                            }
                        });
                },
                scrollToSectionTop: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: r = 0 } = t,
                        i = H.current[e],
                        s = d(P);
                    null != i &&
                        null != s &&
                        s.requestAnimationFrame(() => {
                            P.current?.scrollTo({ to: (0 === e ? 0 : i.offset.top) + r, animate: n });
                        });
                },
                getListDimensions: () => ({ height: w, totalHeight: W }),
                getSectionDescriptors: () => H.current,
                getRowDescriptors: () => Y.current,
                getScrollerNode: () => P.current?.getScrollerNode(),
                scrollIntoViewNode: (e) => P.current?.scrollIntoViewNode({ node: e }),
            }),
            [V, N, W, w],
        );
        let { visibleItems: q, listOffset: X } = i.useMemo(() => {
                if (-1 === w || -1 === D) return { visibleItems: null, listOffset: 0 };
                let e = D + w,
                    t = 0,
                    n = c[0],
                    r = [],
                    i = x();
                null != p && D < i ? r.push(p()) : (n += i);
                for (let i = 0; i < K.length; i++) {
                    let {
                            firstRowIndex: s,
                            offset: { top: a, bottom: o },
                        } = K[i],
                        l = o - a;
                    if (0 === l) continue;
                    let u = V(i),
                        d = F(i),
                        c = B(i);
                    if (o <= D) n = o;
                    else if (o > D && a < e) {
                        t = s;
                        let o = [],
                            p = 0,
                            m = 0,
                            g = a + u >= D && a <= e;
                        for (null != E && (N || g) && o.push(E(i)), g || N || (n += u); p + u + d < l - c; ) {
                            let r = G(i, m, t),
                                s = a + p + u,
                                l = s + r;
                            if (l <= D) n = l - (N ? u : 0);
                            else if (l > D && s < e) o.push(_(t, { sectionIndex: i, sectionRowIndex: m }));
                            else break;
                            (p += r), m++, t++;
                        }
                        let A = a + u + p,
                            I = A + d >= D && A <= e;
                        null != h && I && o.push(h(i)), null != f ? r.push(f(i, o)) : (r = [...r, ...o]);
                    } else break;
                }
                return { visibleItems: r, listOffset: n };
            }, [G, F, V, B, c, _, f, h, E, D, K, N, p, x, w]),
            Q = i.useMemo(() => ({ top: X, right: c?.[1] ?? 0, bottom: c?.[2] ?? 0, left: c?.[3] ?? 0 }), [X, c]),
            J = i.useMemo(() => ({ height: W }), [W]),
            Z = R ? o.zC : o.Ch;
        return (0, r.jsxs)(Z, {
            fade: v,
            className: a()(u.XG, O),
            ref: P,
            onScroll: z,
            children: [
                (0, r.jsx)("div", { role: b, className: u.Dw, style: Q, children: q }),
                (0, r.jsx)("div", { className: u.W7, style: J }),
            ],
        });
    }),
);
