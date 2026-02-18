"use strict";
n.d(t, { A: () => d }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
                onResize: s,
                listPadding: d = [0, 0, 0, 0],
                renderRow: _,
                renderSection: f,
                renderSectionHeader: p,
                renderSectionFooter: h,
                renderListHeader: m,
                rowCount: E,
                rowCountBySection: g,
                rowHeight: A,
                sectionMarginBottom: I,
                sectionHeaderHeight: T,
                sectionFooterHeight: S,
                listHeaderHeight: y,
                stickyHeaders: v = !1,
                className: N,
                hideScrollbar: C = !1,
                fade: b = !1,
                initialScrollTop: R = 0,
                role: O = "list",
            } = e,
            [D, L] = i.useState(-1),
            [w, x] = i.useState(-1),
            M = i.useRef(null),
            P = i.useRef(0),
            k = i.useRef(-1);
        (0, l.u5)(() => {
            let e = M.current?.getScrollerNode();
            null != e && (e.scrollTop = R);
        });
        let U = i.useCallback(() => {
                let e = "function" == typeof y ? y() : y;
                return null == e ? 0 : e;
            }, [y]),
            G = i.useCallback(
                (e, t, n) => ("function" == typeof A ? A(n, { sectionIndex: e, sectionRowIndex: t }) : A),
                [A],
            ),
            F = i.useCallback(
                (e) => {
                    let t = "function" == typeof T ? T(e) : T;
                    return null == t ? 0 : t;
                },
                [T],
            ),
            V = i.useCallback(
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
            j = i.useRef([]),
            {
                totalHeight: Y,
                rowDescriptors: W,
                sectionDescriptors: K,
            } = i.useMemo(() => {
                let e = 0,
                    t = null != g,
                    n = t ? g.length : 1,
                    r = d[0],
                    i = [],
                    s = [];
                r += U();
                for (let a = 0; a < n; a++) {
                    let n = t ? g[a] : E,
                        o = g?.[a] !== 0;
                    (s[a] = { firstRowIndex: e, offset: { top: r, bottom: -1 } }), (r += F(a));
                    for (let t = 0; t < n; t++) {
                        let n = r + (o ? G(a, t, e) : 0),
                            s = { top: r, bottom: n };
                        (i[e] = { sectionIndex: a, offset: s }), (r = n), e++;
                    }
                    (r += V(a) + B(a)), (s[a].offset.bottom = r);
                }
                return { totalHeight: (r += d[2]), rowDescriptors: i, sectionDescriptors: s };
            }, [G, V, F, B, d, E, g, U]);
        (H.current = K), (j.current = W);
        let z = i.useCallback(() => {
            let e = M.current?.getScrollerNode();
            if (null == e) return;
            let { offsetWidth: t, offsetHeight: n, scrollTop: r } = e;
            x(n), L(r), s?.({ width: t, height: n });
        }, [s]);
        i.useLayoutEffect(() => {
            -1 === w && z();
        }, [w, z]),
            i.useEffect(() => {
                let e = M.current?.getScrollerNode(),
                    t = c(M);
                if (null == e || null == t) return;
                let n = new t.ResizeObserver(z);
                return n.observe(e), () => n.disconnect();
            }, [z]);
        let $ = i.useCallback(() => {
            let e = M.current?.getScrollerNode(),
                t = c(M);
            null != e &&
                null != t &&
                (t.cancelAnimationFrame(k.current),
                (k.current = t.requestAnimationFrame(() => {
                    let { scrollTop: t } = e;
                    (P.current = t), n?.(t), L(t);
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
                        i = j.current[e],
                        s = c(M);
                    null != i &&
                        null != s &&
                        s.requestAnimationFrame(() => {
                            let {
                                    sectionIndex: t,
                                    offset: { top: s, bottom: a },
                                } = i,
                                o = F(t),
                                l = s - (v ? o : 0) - r <= P.current,
                                u = a + r >= P.current + w;
                            if (l) {
                                let t = P.current + o - s,
                                    i = v ? P.current - t : s;
                                M.current?.scrollTo({ to: 0 === e ? 0 : i - r, animate: n });
                            } else if (u) {
                                let e = a - (P.current + w);
                                M.current?.scrollTo({ to: P.current + e + r, animate: n });
                            }
                        });
                },
                scrollToSectionTop: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: r = 0 } = t,
                        i = H.current[e],
                        s = c(M);
                    null != i &&
                        null != s &&
                        s.requestAnimationFrame(() => {
                            M.current?.scrollTo({ to: (0 === e ? 0 : i.offset.top) + r, animate: n });
                        });
                },
                getListDimensions: () => ({ height: w, totalHeight: Y }),
                getSectionDescriptors: () => H.current,
                getRowDescriptors: () => j.current,
                getScrollerNode: () => M.current?.getScrollerNode(),
                scrollIntoViewNode: (e) => M.current?.scrollIntoViewNode({ node: e }),
            }),
            [F, v, Y, w],
        );
        let { visibleItems: q, listOffset: Z } = i.useMemo(() => {
                if (-1 === w || -1 === D) return { visibleItems: null, listOffset: 0 };
                let e = D,
                    t = D + w,
                    n = 0,
                    r = d[0],
                    i = [],
                    s = U();
                null != m && e < s ? i.push(m()) : (r += s);
                for (let s = 0; s < K.length; s++) {
                    let {
                            firstRowIndex: a,
                            offset: { top: o, bottom: l },
                        } = K[s],
                        u = l - o;
                    if (0 === u) continue;
                    let c = F(s),
                        d = V(s),
                        m = B(s);
                    if (l <= e) r = l;
                    else if (l > e && o < t) {
                        n = a;
                        let l = [],
                            E = 0,
                            g = 0,
                            A = o,
                            I = A + c >= e && A <= t;
                        for (null != p && (v || I) && l.push(p(s)), I || v || (r += c); E + c + d < u - m; ) {
                            let i = G(s, g, n),
                                a = o + E + c,
                                u = a + i;
                            if (u <= e) r = u - (v ? c : 0);
                            else if (u > e && a < t) l.push(_(n, { sectionIndex: s, sectionRowIndex: g }));
                            else break;
                            (E += i), g++, n++;
                        }
                        let T = o + c + E,
                            S = T + d >= e && T <= t;
                        null != h && S && l.push(h(s)), null != f ? i.push(f(s, l)) : (i = [...i, ...l]);
                    } else break;
                }
                return { visibleItems: i, listOffset: r };
            }, [G, V, F, B, d, _, f, h, p, D, K, v, m, U, w]),
            X = i.useMemo(() => ({ top: Z, right: d?.[1] ?? 0, bottom: d?.[2] ?? 0, left: d?.[3] ?? 0 }), [Z, d]),
            Q = i.useMemo(() => ({ height: Y }), [Y]),
            J = C ? o.zCo : o.ChK;
        return (0, r.jsxs)(J, {
            fade: b,
            className: a()(u.XG, N),
            ref: M,
            onScroll: $,
            children: [
                (0, r.jsx)("div", { role: O, className: u.Dw, style: X, children: q }),
                (0, r.jsx)("div", { className: u.W7, style: Q }),
            ],
        });
    }),
);
