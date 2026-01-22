n.d(t, {
    A: () => d,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(964486),
    c = n(570741);

function u(e) {
    var t, n;
    let r = null == (n = e.current) ? void 0 : n.getScrollerNode();
    return null != (t = null == r ? void 0 : r.ownerDocument.defaultView) ? t : window;
}
let d = i.memo(
    i.forwardRef((e, t) => {
        let {
                onScroll: n,
                onResize: a,
                listPadding: d = [0, 0, 0, 0],
                renderRow: f,
                renderSection: p,
                renderSectionHeader: _,
                renderSectionFooter: h,
                renderListHeader: m,
                rowCount: g,
                rowCountBySection: E,
                rowHeight: b,
                sectionMarginBottom: y,
                sectionHeaderHeight: O,
                sectionFooterHeight: A,
                listHeaderHeight: v,
                stickyHeaders: S = !1,
                className: I,
                hideScrollbar: T = !1,
                fade: C = !1,
                initialScrollTop: N = 0,
                role: R = "list",
            } = e,
            [w, P] = i.useState(-1),
            [D, x] = i.useState(-1),
            L = i.useRef(null),
            j = i.useRef(0),
            M = i.useRef(-1);
        (0, l.u5)(() => {
            var e;
            let t = null == (e = L.current) ? void 0 : e.getScrollerNode();
            null != t && (t.scrollTop = N);
        });
        let k = i.useCallback(() => {
                let e = "function" == typeof v ? v() : v;
                return null == e ? 0 : e;
            }, [v]),
            U = i.useCallback(
                (e, t, n) =>
                    "function" == typeof b
                        ? b(n, {
                              sectionIndex: e,
                              sectionRowIndex: t,
                          })
                        : b,
                [b],
            ),
            G = i.useCallback(
                (e) => {
                    let t = "function" == typeof O ? O(e) : O;
                    return null == t ? 0 : t;
                },
                [O],
            ),
            V = i.useCallback(
                (e) => {
                    let t = "function" == typeof A ? A(e) : A;
                    return null == t ? 0 : t;
                },
                [A],
            ),
            F = i.useCallback(
                (e) => {
                    let t = "function" == typeof y ? y(e) : y;
                    return null == t ? 0 : t;
                },
                [y],
            ),
            B = i.useRef([]),
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
                r += k();
                for (let s = 0; s < n; s++) {
                    let n = t ? E[s] : g,
                        o = (null == E ? void 0 : E[s]) !== 0;
                    (a[s] = {
                        firstRowIndex: e,
                        offset: {
                            top: r,
                            bottom: -1,
                        },
                    }),
                        (r += G(s));
                    for (let t = 0; t < n; t++) {
                        let n = r + (o ? U(s, t, e) : 0),
                            a = {
                                top: r,
                                bottom: n,
                            };
                        (i[e] = {
                            sectionIndex: s,
                            offset: a,
                        }),
                            (r = n),
                            e++;
                    }
                    (r += V(s) + F(s)), (a[s].offset.bottom = r);
                }
                return {
                    totalHeight: (r += d[2]),
                    rowDescriptors: i,
                    sectionDescriptors: a,
                };
            }, [U, V, G, F, d, g, E, k]);
        (B.current = K), (H.current = W);
        let z = i.useCallback(() => {
            var e;
            let t = null == (e = L.current) ? void 0 : e.getScrollerNode();
            if (null == t) return;
            let { offsetWidth: n, offsetHeight: r, scrollTop: i } = t;
            x(r),
                P(i),
                null == a ||
                    a({
                        width: n,
                        height: r,
                    });
        }, [a]);
        i.useLayoutEffect(() => {
            -1 === D && z();
        }, [D, z]),
            i.useEffect(() => {
                var e;
                let t = null == (e = L.current) ? void 0 : e.getScrollerNode(),
                    n = u(L);
                if (null == t || null == n) return;
                let r = new n.ResizeObserver(z);
                return r.observe(t), () => r.disconnect();
            }, [z]);
        let q = i.useCallback(() => {
            var e;
            let t = null == (e = L.current) ? void 0 : e.getScrollerNode(),
                r = u(L);
            null != t &&
                null != r &&
                (r.cancelAnimationFrame(M.current),
                (M.current = r.requestAnimationFrame(() => {
                    let { scrollTop: e } = t;
                    (j.current = e), null == n || n(e), P(e);
                })));
        }, [n]);
        i.useImperativeHandle(
            t,
            () => ({
                scrollTo: function (e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: r = !1 } = n;
                    null == (t = L.current) ||
                        t.scrollTo({
                            to: e,
                            animate: r,
                        });
                },
                scrollRowIntoView: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: r = 0 } = t,
                        i = H.current[e],
                        a = u(L);
                    null != i &&
                        null != a &&
                        a.requestAnimationFrame(() => {
                            var t, a;
                            let {
                                    sectionIndex: s,
                                    offset: { top: o, bottom: l },
                                } = i,
                                c = G(s),
                                u = o - (S ? c : 0) - r <= j.current,
                                d = l + r >= j.current + D;
                            if (u) {
                                let i = j.current + c - o,
                                    a = S ? j.current - i : o;
                                null == (t = L.current) ||
                                    t.scrollTo({
                                        to: 0 === e ? 0 : a - r,
                                        animate: n,
                                    });
                            } else if (d) {
                                let e = l - (j.current + D);
                                null == (a = L.current) ||
                                    a.scrollTo({
                                        to: j.current + e + r,
                                        animate: n,
                                    });
                            }
                        });
                },
                scrollToSectionTop: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: r = 0 } = t,
                        i = B.current[e],
                        a = u(L);
                    null != i &&
                        null != a &&
                        a.requestAnimationFrame(() => {
                            var t;
                            null == (t = L.current) ||
                                t.scrollTo({
                                    to: (0 === e ? 0 : i.offset.top) + r,
                                    animate: n,
                                });
                        });
                },
                getListDimensions: () => ({
                    height: D,
                    totalHeight: Y,
                }),
                getSectionDescriptors: () => B.current,
                getRowDescriptors: () => H.current,
                getScrollerNode: () => {
                    var e;
                    return null == (e = L.current) ? void 0 : e.getScrollerNode();
                },
                scrollIntoViewNode: (e) => {
                    var t;
                    return null == (t = L.current)
                        ? void 0
                        : t.scrollIntoViewNode({
                              node: e,
                          });
                },
            }),
            [G, S, Y, D],
        );
        let { visibleItems: X, listOffset: Z } = i.useMemo(() => {
                if (-1 === D || -1 === w)
                    return {
                        visibleItems: null,
                        listOffset: 0,
                    };
                let e = w,
                    t = w + D,
                    n = 0,
                    r = d[0],
                    i = [],
                    a = k();
                null != m && e < a ? i.push(m()) : (r += a);
                for (let a = 0; a < K.length; a++) {
                    let {
                            firstRowIndex: s,
                            offset: { top: o, bottom: l },
                        } = K[a],
                        c = l - o;
                    if (0 === c) continue;
                    let u = G(a),
                        d = V(a),
                        m = F(a);
                    if (l <= e) r = l;
                    else if (l > e && o < t) {
                        n = s;
                        let l = [],
                            g = 0,
                            E = 0,
                            b = o,
                            y = b + u >= e && b <= t;
                        for (null != _ && (S || y) && l.push(_(a)), y || S || (r += u); g + u + d < c - m; ) {
                            let i = U(a, E, n),
                                s = o + g + u,
                                c = s + i;
                            if (c <= e) r = c - (S ? u : 0);
                            else if (c > e && s < t)
                                l.push(
                                    f(n, {
                                        sectionIndex: a,
                                        sectionRowIndex: E,
                                    }),
                                );
                            else break;
                            (g += i), E++, n++;
                        }
                        let O = o + u + g,
                            A = O + d >= e && O <= t;
                        null != h && A && l.push(h(a)), null != p ? i.push(p(a, l)) : (i = [...i, ...l]);
                    } else break;
                }
                return {
                    visibleItems: i,
                    listOffset: r,
                };
            }, [U, V, G, F, d, f, p, h, _, w, K, S, m, k, D]),
            Q = i.useMemo(() => {
                var e, t, n;
                return {
                    top: Z,
                    right: null != (e = null == d ? void 0 : d[1]) ? e : 0,
                    bottom: null != (t = null == d ? void 0 : d[2]) ? t : 0,
                    left: null != (n = null == d ? void 0 : d[3]) ? n : 0,
                };
            }, [Z, d]),
            $ = i.useMemo(
                () => ({
                    height: Y,
                }),
                [Y],
            ),
            J = T ? o.zCo : o.ChK;
        return (0, r.jsxs)(J, {
            fade: C,
            className: s()(c.XG, I),
            ref: L,
            onScroll: q,
            children: [
                (0, r.jsx)("div", {
                    role: R,
                    className: c.Dw,
                    style: Q,
                    children: X,
                }),
                (0, r.jsx)("div", {
                    className: c.W7,
                    style: $,
                }),
            ],
        });
    }),
);
