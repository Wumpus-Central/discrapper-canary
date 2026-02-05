"use strict";
n.d(t, { A: () => d }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(964486),
    u = n(570741);
function c(e) {
    let t = e.current?.getScrollerNode();
    return t?.ownerDocument.defaultView ?? window;
}
let d = i.memo(
    i.forwardRef((e, t) => {
        let {
                onScroll: n,
                onResize: a,
                listPadding: d = [0, 0, 0, 0],
                renderRow: _,
                renderSection: f,
                renderSectionHeader: p,
                renderSectionFooter: h,
                renderListHeader: m,
                rowCount: g,
                rowCountBySection: E,
                rowHeight: A,
                sectionMarginBottom: I,
                sectionHeaderHeight: T,
                sectionFooterHeight: y,
                listHeaderHeight: S,
                stickyHeaders: v = !1,
                className: C,
                hideScrollbar: b = !1,
                fade: N = !1,
                initialScrollTop: R = 0,
                role: O = "list",
            } = e,
            [D, L] = i.useState(-1),
            [w, x] = i.useState(-1),
            P = i.useRef(null),
            M = i.useRef(0),
            k = i.useRef(-1);
        (0, l.u5)(() => {
            let e = P.current?.getScrollerNode();
            null != e && (e.scrollTop = R);
        });
        let U = i.useCallback(() => {
                let e = "function" == typeof S ? S() : S;
                return null == e ? 0 : e;
            }, [S]),
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
                    let t = "function" == typeof y ? y(e) : y;
                    return null == t ? 0 : t;
                },
                [y],
            ),
            B = i.useCallback(
                (e) => {
                    let t = "function" == typeof I ? I(e) : I;
                    return null == t ? 0 : t;
                },
                [I],
            ),
            j = i.useRef([]),
            H = i.useRef([]),
            {
                totalHeight: Y,
                rowDescriptors: W,
                sectionDescriptors: K,
            } = i.useMemo(() => {
                let e = 0,
                    t = null != E,
                    n = t ? E.length : 1,
                    r = d[0],
                    i = [],
                    a = [];
                r += U();
                for (let s = 0; s < n; s++) {
                    let n = t ? E[s] : g,
                        o = E?.[s] !== 0;
                    (a[s] = { firstRowIndex: e, offset: { top: r, bottom: -1 } }), (r += V(s));
                    for (let t = 0; t < n; t++) {
                        let n = r + (o ? G(s, t, e) : 0),
                            a = { top: r, bottom: n };
                        (i[e] = { sectionIndex: s, offset: a }), (r = n), e++;
                    }
                    (r += F(s) + B(s)), (a[s].offset.bottom = r);
                }
                return { totalHeight: (r += d[2]), rowDescriptors: i, sectionDescriptors: a };
            }, [G, F, V, B, d, g, E, U]);
        (j.current = K), (H.current = W);
        let z = i.useCallback(() => {
            let e = P.current?.getScrollerNode();
            if (null == e) return;
            let { offsetWidth: t, offsetHeight: n, scrollTop: r } = e;
            x(n), L(r), a?.({ width: t, height: n });
        }, [a]);
        i.useLayoutEffect(() => {
            -1 === w && z();
        }, [w, z]),
            i.useEffect(() => {
                let e = P.current?.getScrollerNode(),
                    t = c(P);
                if (null == e || null == t) return;
                let n = new t.ResizeObserver(z);
                return n.observe(e), () => n.disconnect();
            }, [z]);
        let $ = i.useCallback(() => {
            let e = P.current?.getScrollerNode(),
                t = c(P);
            null != e &&
                null != t &&
                (t.cancelAnimationFrame(k.current),
                (k.current = t.requestAnimationFrame(() => {
                    let { scrollTop: t } = e;
                    (M.current = t), n?.(t), L(t);
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
                        i = H.current[e],
                        a = c(P);
                    null != i &&
                        null != a &&
                        a.requestAnimationFrame(() => {
                            let {
                                    sectionIndex: t,
                                    offset: { top: a, bottom: s },
                                } = i,
                                o = V(t),
                                l = a - (v ? o : 0) - r <= M.current,
                                u = s + r >= M.current + w;
                            if (l) {
                                let t = M.current + o - a,
                                    i = v ? M.current - t : a;
                                P.current?.scrollTo({ to: 0 === e ? 0 : i - r, animate: n });
                            } else if (u) {
                                let e = s - (M.current + w);
                                P.current?.scrollTo({ to: M.current + e + r, animate: n });
                            }
                        });
                },
                scrollToSectionTop: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: r = 0 } = t,
                        i = j.current[e],
                        a = c(P);
                    null != i &&
                        null != a &&
                        a.requestAnimationFrame(() => {
                            P.current?.scrollTo({ to: (0 === e ? 0 : i.offset.top) + r, animate: n });
                        });
                },
                getListDimensions: () => ({ height: w, totalHeight: Y }),
                getSectionDescriptors: () => j.current,
                getRowDescriptors: () => H.current,
                getScrollerNode: () => P.current?.getScrollerNode(),
                scrollIntoViewNode: (e) => P.current?.scrollIntoViewNode({ node: e }),
            }),
            [V, v, Y, w],
        );
        let { visibleItems: q, listOffset: Z } = i.useMemo(() => {
                if (-1 === w || -1 === D) return { visibleItems: null, listOffset: 0 };
                let e = D,
                    t = D + w,
                    n = 0,
                    r = d[0],
                    i = [],
                    a = U();
                null != m && e < a ? i.push(m()) : (r += a);
                for (let a = 0; a < K.length; a++) {
                    let {
                            firstRowIndex: s,
                            offset: { top: o, bottom: l },
                        } = K[a],
                        u = l - o;
                    if (0 === u) continue;
                    let c = V(a),
                        d = F(a),
                        m = B(a);
                    if (l <= e) r = l;
                    else if (l > e && o < t) {
                        n = s;
                        let l = [],
                            g = 0,
                            E = 0,
                            A = o,
                            I = A + c >= e && A <= t;
                        for (null != p && (v || I) && l.push(p(a)), I || v || (r += c); g + c + d < u - m; ) {
                            let i = G(a, E, n),
                                s = o + g + c,
                                u = s + i;
                            if (u <= e) r = u - (v ? c : 0);
                            else if (u > e && s < t) l.push(_(n, { sectionIndex: a, sectionRowIndex: E }));
                            else break;
                            (g += i), E++, n++;
                        }
                        let T = o + c + g,
                            y = T + d >= e && T <= t;
                        null != h && y && l.push(h(a)), null != f ? i.push(f(a, l)) : (i = [...i, ...l]);
                    } else break;
                }
                return { visibleItems: i, listOffset: r };
            }, [G, F, V, B, d, _, f, h, p, D, K, v, m, U, w]),
            Q = i.useMemo(() => ({ top: Z, right: d?.[1] ?? 0, bottom: d?.[2] ?? 0, left: d?.[3] ?? 0 }), [Z, d]),
            X = i.useMemo(() => ({ height: Y }), [Y]),
            J = b ? o.zCo : o.ChK;
        return (0, r.jsxs)(J, {
            fade: N,
            className: s()(u.XG, C),
            ref: P,
            onScroll: $,
            children: [
                (0, r.jsx)("div", { role: O, className: u.Dw, style: Q, children: q }),
                (0, r.jsx)("div", { className: u.W7, style: X }),
            ],
        });
    }),
);
