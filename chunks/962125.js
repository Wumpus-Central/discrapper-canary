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
                renderSectionHeader: h,
                renderSectionFooter: p,
                renderListHeader: g,
                rowCount: E,
                rowCountBySection: A,
                rowHeight: I,
                sectionMarginBottom: T,
                sectionHeaderHeight: y,
                sectionFooterHeight: S,
                listHeaderHeight: v,
                stickyHeaders: C = !1,
                className: b,
                hideScrollbar: N = !1,
                fade: R = !1,
                initialScrollTop: O = 0,
                role: D = "list",
            } = e,
            [L, w] = i.useState(-1),
            [x, P] = i.useState(-1),
            M = i.useRef(null),
            k = i.useRef(0),
            U = i.useRef(-1);
        (0, l.u5)(() => {
            let e = M.current?.getScrollerNode();
            null != e && (e.scrollTop = O);
        });
        let G = i.useCallback(() => {
                let e = "function" == typeof v ? v() : v;
                return null == e ? 0 : e;
            }, [v]),
            F = i.useCallback(
                (e, t, n) => ("function" == typeof I ? I(n, { sectionIndex: e, sectionRowIndex: t }) : I),
                [I],
            ),
            V = i.useCallback(
                (e) => {
                    let t = "function" == typeof y ? y(e) : y;
                    return null == t ? 0 : t;
                },
                [y],
            ),
            B = i.useCallback(
                (e) => {
                    let t = "function" == typeof S ? S(e) : S;
                    return null == t ? 0 : t;
                },
                [S],
            ),
            j = i.useCallback(
                (e) => {
                    let t = "function" == typeof T ? T(e) : T;
                    return null == t ? 0 : t;
                },
                [T],
            ),
            H = i.useRef([]),
            Y = i.useRef([]),
            {
                totalHeight: W,
                rowDescriptors: K,
                sectionDescriptors: $,
            } = i.useMemo(() => {
                let e = 0,
                    t = null != A,
                    n = t ? A.length : 1,
                    r = d[0],
                    i = [],
                    a = [];
                r += G();
                for (let s = 0; s < n; s++) {
                    let n = t ? A[s] : E,
                        o = A?.[s] !== 0;
                    (a[s] = { firstRowIndex: e, offset: { top: r, bottom: -1 } }), (r += V(s));
                    for (let t = 0; t < n; t++) {
                        let n = r + (o ? F(s, t, e) : 0),
                            a = { top: r, bottom: n };
                        (i[e] = { sectionIndex: s, offset: a }), (r = n), e++;
                    }
                    (r += B(s) + j(s)), (a[s].offset.bottom = r);
                }
                return { totalHeight: (r += d[2]), rowDescriptors: i, sectionDescriptors: a };
            }, [F, B, V, j, d, E, A, G]);
        (H.current = $), (Y.current = K);
        let z = i.useCallback(() => {
            let e = M.current?.getScrollerNode();
            if (null == e) return;
            let { offsetWidth: t, offsetHeight: n, scrollTop: r } = e;
            P(n), w(r), a?.({ width: t, height: n });
        }, [a]);
        i.useLayoutEffect(() => {
            -1 === x && z();
        }, [x, z]),
            i.useEffect(() => {
                let e = M.current?.getScrollerNode(),
                    t = c(M);
                if (null == e || null == t) return;
                let n = new t.ResizeObserver(z);
                return n.observe(e), () => n.disconnect();
            }, [z]);
        let q = i.useCallback(() => {
            let e = M.current?.getScrollerNode(),
                t = c(M);
            null != e &&
                null != t &&
                (t.cancelAnimationFrame(U.current),
                (U.current = t.requestAnimationFrame(() => {
                    let { scrollTop: t } = e;
                    (k.current = t), n?.(t), w(t);
                })));
        }, [n]);
        i.useImperativeHandle(
            t,
            () => ({
                scrollTo: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1 } = t;
                    M.current?.scrollTo({ to: e, animate: n });
                },
                scrollRowIntoView: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: r = 0 } = t,
                        i = Y.current[e],
                        a = c(M);
                    null != i &&
                        null != a &&
                        a.requestAnimationFrame(() => {
                            let {
                                    sectionIndex: t,
                                    offset: { top: a, bottom: s },
                                } = i,
                                o = V(t),
                                l = a - (C ? o : 0) - r <= k.current,
                                u = s + r >= k.current + x;
                            if (l) {
                                let t = k.current + o - a,
                                    i = C ? k.current - t : a;
                                M.current?.scrollTo({ to: 0 === e ? 0 : i - r, animate: n });
                            } else if (u) {
                                let e = s - (k.current + x);
                                M.current?.scrollTo({ to: k.current + e + r, animate: n });
                            }
                        });
                },
                scrollToSectionTop: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: r = 0 } = t,
                        i = H.current[e],
                        a = c(M);
                    null != i &&
                        null != a &&
                        a.requestAnimationFrame(() => {
                            M.current?.scrollTo({ to: (0 === e ? 0 : i.offset.top) + r, animate: n });
                        });
                },
                getListDimensions: () => ({ height: x, totalHeight: W }),
                getSectionDescriptors: () => H.current,
                getRowDescriptors: () => Y.current,
                getScrollerNode: () => M.current?.getScrollerNode(),
                scrollIntoViewNode: (e) => M.current?.scrollIntoViewNode({ node: e }),
            }),
            [V, C, W, x],
        );
        let { visibleItems: X, listOffset: Z } = i.useMemo(() => {
                if (-1 === x || -1 === L) return { visibleItems: null, listOffset: 0 };
                let e = L,
                    t = L + x,
                    n = 0,
                    r = d[0],
                    i = [],
                    a = G();
                null != g && e < a ? i.push(g()) : (r += a);
                for (let a = 0; a < $.length; a++) {
                    let {
                            firstRowIndex: s,
                            offset: { top: o, bottom: l },
                        } = $[a],
                        u = l - o;
                    if (0 === u) continue;
                    let c = V(a),
                        d = B(a),
                        g = j(a);
                    if (l <= e) r = l;
                    else if (l > e && o < t) {
                        n = s;
                        let l = [],
                            E = 0,
                            A = 0,
                            I = o,
                            T = I + c >= e && I <= t;
                        for (null != h && (C || T) && l.push(h(a)), T || C || (r += c); E + c + d < u - g; ) {
                            let i = F(a, A, n),
                                s = o + E + c,
                                u = s + i;
                            if (u <= e) r = u - (C ? c : 0);
                            else if (u > e && s < t) l.push(_(n, { sectionIndex: a, sectionRowIndex: A }));
                            else break;
                            (E += i), A++, n++;
                        }
                        let y = o + c + E,
                            S = y + d >= e && y <= t;
                        null != p && S && l.push(p(a)), null != f ? i.push(f(a, l)) : (i = [...i, ...l]);
                    } else break;
                }
                return { visibleItems: i, listOffset: r };
            }, [F, B, V, j, d, _, f, p, h, L, $, C, g, G, x]),
            Q = i.useMemo(() => ({ top: Z, right: d?.[1] ?? 0, bottom: d?.[2] ?? 0, left: d?.[3] ?? 0 }), [Z, d]),
            J = i.useMemo(() => ({ height: W }), [W]),
            ee = N ? o.zCo : o.ChK;
        return (0, r.jsxs)(ee, {
            fade: R,
            className: s()(u.XG, b),
            ref: M,
            onScroll: q,
            children: [
                (0, r.jsx)("div", { role: D, className: u.Dw, style: Q, children: X }),
                (0, r.jsx)("div", { className: u.W7, style: J }),
            ],
        });
    }),
);
