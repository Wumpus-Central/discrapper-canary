"use strict";
n.d(t, { A: () => d }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(689175),
    l = n(964486),
    u = n(958268);
function c(e) {
    let t = e.current?.getScrollerNode();
    return t?.ownerDocument.defaultView ?? window;
}
let d = r.memo(
    r.forwardRef((e, t) => {
        let {
                onScroll: n,
                onResize: s,
                listPadding: d = [0, 0, 0, 0],
                renderRow: _,
                renderSection: h,
                renderSectionHeader: f,
                renderSectionFooter: p,
                renderListHeader: E,
                rowCount: m,
                rowCountBySection: g,
                rowHeight: A,
                sectionMarginBottom: I,
                sectionHeaderHeight: T,
                sectionFooterHeight: S,
                listHeaderHeight: y,
                stickyHeaders: C = !1,
                className: N,
                hideScrollbar: v = !1,
                fade: R = !1,
                initialScrollTop: O = 0,
                role: b = "list",
            } = e,
            [D, L] = r.useState(-1),
            [w, M] = r.useState(-1),
            P = r.useRef(null),
            x = r.useRef(0),
            k = r.useRef(-1);
        (0, l.u5)(() => {
            let e = P.current?.getScrollerNode();
            null != e && (e.scrollTop = O);
        });
        let U = r.useCallback(() => {
                let e = "function" == typeof y ? y() : y;
                return null == e ? 0 : e;
            }, [y]),
            G = r.useCallback(
                (e, t, n) => ("function" == typeof A ? A(n, { sectionIndex: e, sectionRowIndex: t }) : A),
                [A],
            ),
            F = r.useCallback(
                (e) => {
                    let t = "function" == typeof T ? T(e) : T;
                    return null == t ? 0 : t;
                },
                [T],
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
                    let t = "function" == typeof I ? I(e) : I;
                    return null == t ? 0 : t;
                },
                [I],
            ),
            j = r.useRef([]),
            H = r.useRef([]),
            {
                totalHeight: Y,
                rowDescriptors: W,
                sectionDescriptors: K,
            } = r.useMemo(() => {
                let e = 0,
                    t = null != g,
                    n = t ? g.length : 1,
                    i = d[0],
                    r = [],
                    s = [];
                i += U();
                for (let a = 0; a < n; a++) {
                    let n = t ? g[a] : m,
                        o = g?.[a] !== 0;
                    (s[a] = { firstRowIndex: e, offset: { top: i, bottom: -1 } }), (i += F(a));
                    for (let t = 0; t < n; t++) {
                        let n = i + (o ? G(a, t, e) : 0),
                            s = { top: i, bottom: n };
                        (r[e] = { sectionIndex: a, offset: s }), (i = n), e++;
                    }
                    (i += V(a) + B(a)), (s[a].offset.bottom = i);
                }
                return { totalHeight: (i += d[2]), rowDescriptors: r, sectionDescriptors: s };
            }, [G, V, F, B, d, m, g, U]);
        (j.current = K), (H.current = W);
        let $ = r.useCallback(() => {
            let e = P.current?.getScrollerNode();
            if (null == e) return;
            let { offsetWidth: t, offsetHeight: n, scrollTop: i } = e;
            M(n), L(i), s?.({ width: t, height: n });
        }, [s]);
        r.useLayoutEffect(() => {
            -1 === w && $();
        }, [w, $]),
            r.useEffect(() => {
                let e = P.current?.getScrollerNode(),
                    t = c(P);
                if (null == e || null == t) return;
                let n = new t.ResizeObserver($);
                return n.observe(e), () => n.disconnect();
            }, [$]);
        let z = r.useCallback(() => {
            let e = P.current?.getScrollerNode(),
                t = c(P);
            null != e &&
                null != t &&
                (t.cancelAnimationFrame(k.current),
                (k.current = t.requestAnimationFrame(() => {
                    let { scrollTop: t } = e;
                    (x.current = t), n?.(t), L(t);
                })));
        }, [n]);
        r.useImperativeHandle(
            t,
            () => ({
                scrollTo: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1 } = t;
                    P.current?.scrollTo({ to: e, animate: n });
                },
                scrollRowIntoView: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: i = 0 } = t,
                        r = H.current[e],
                        s = c(P);
                    null != r &&
                        null != s &&
                        s.requestAnimationFrame(() => {
                            let {
                                    sectionIndex: t,
                                    offset: { top: s, bottom: a },
                                } = r,
                                o = F(t),
                                l = s - (C ? o : 0) - i <= x.current,
                                u = a + i >= x.current + w;
                            if (l) {
                                let t = x.current + o - s,
                                    r = C ? x.current - t : s;
                                P.current?.scrollTo({ to: 0 === e ? 0 : r - i, animate: n });
                            } else if (u) {
                                let e = a - (x.current + w);
                                P.current?.scrollTo({ to: x.current + e + i, animate: n });
                            }
                        });
                },
                scrollToSectionTop: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: i = 0 } = t,
                        r = j.current[e],
                        s = c(P);
                    null != r &&
                        null != s &&
                        s.requestAnimationFrame(() => {
                            P.current?.scrollTo({ to: (0 === e ? 0 : r.offset.top) + i, animate: n });
                        });
                },
                getListDimensions: () => ({ height: w, totalHeight: Y }),
                getSectionDescriptors: () => j.current,
                getRowDescriptors: () => H.current,
                getScrollerNode: () => P.current?.getScrollerNode(),
                scrollIntoViewNode: (e) => P.current?.scrollIntoViewNode({ node: e }),
            }),
            [F, C, Y, w],
        );
        let { visibleItems: q, listOffset: Z } = r.useMemo(() => {
                if (-1 === w || -1 === D) return { visibleItems: null, listOffset: 0 };
                let e = D + w,
                    t = 0,
                    n = d[0],
                    i = [],
                    r = U();
                null != E && D < r ? i.push(E()) : (n += r);
                for (let r = 0; r < K.length; r++) {
                    let {
                            firstRowIndex: s,
                            offset: { top: a, bottom: o },
                        } = K[r],
                        l = o - a;
                    if (0 === l) continue;
                    let u = F(r),
                        c = V(r),
                        d = B(r);
                    if (o <= D) n = o;
                    else if (o > D && a < e) {
                        t = s;
                        let o = [],
                            E = 0,
                            m = 0,
                            g = a + u >= D && a <= e;
                        for (null != f && (C || g) && o.push(f(r)), g || C || (n += u); E + u + c < l - d; ) {
                            let i = G(r, m, t),
                                s = a + E + u,
                                l = s + i;
                            if (l <= D) n = l - (C ? u : 0);
                            else if (l > D && s < e) o.push(_(t, { sectionIndex: r, sectionRowIndex: m }));
                            else break;
                            (E += i), m++, t++;
                        }
                        let A = a + u + E,
                            I = A + c >= D && A <= e;
                        null != p && I && o.push(p(r)), null != h ? i.push(h(r, o)) : (i = [...i, ...o]);
                    } else break;
                }
                return { visibleItems: i, listOffset: n };
            }, [G, V, F, B, d, _, h, p, f, D, K, C, E, U, w]),
            X = r.useMemo(() => ({ top: Z, right: d?.[1] ?? 0, bottom: d?.[2] ?? 0, left: d?.[3] ?? 0 }), [Z, d]),
            Q = r.useMemo(() => ({ height: Y }), [Y]),
            J = v ? o.zC : o.Ch;
        return (0, i.jsxs)(J, {
            fade: R,
            className: a()(u.XG, N),
            ref: P,
            onScroll: z,
            children: [
                (0, i.jsx)("div", { role: b, className: u.Dw, style: X, children: q }),
                (0, i.jsx)("div", { className: u.W7, style: Q }),
            ],
        });
    }),
);
