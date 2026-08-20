i.d(e, { f: () => y });
var s = i(446837),
    n = i(477900),
    l = i(582128),
    r = i(503698),
    o = i.n(r),
    h = i(154327);
function u(t) {
    return `__section__${t}`;
}
function d(t) {
    return `__section_header__${t}`;
}
i(321073), i(667532);
let a = () => 0;
class c {
    visibleSections = {};
    gridData = { coordinates: {}, boundaries: [] };
    coordsMap = {};
    columnHeights = [];
    columnWidth = 0;
    totalHeight = 0;
    itemGrid = [];
    currentRow = 0;
    lastColumnIndex = 0;
    needsFullCompute = !0;
    bufferWidth = 0;
    sections = [];
    columns = 0;
    itemGutter = 0;
    removeEdgeItemGutters = !1;
    sectionGutter = null;
    padding = null;
    paddingVertical = null;
    paddingHorizontal = null;
    marginLeft = null;
    dir = "ltr";
    getItemKey = () => {
        throw Error("MasonryListComputer: getItemKey has not been implemented");
    };
    getItemHeight = () => {
        throw Error("MasonryListComputer: getItemHeight has not been implemented");
    };
    getSectionHeight = a;
    getPadding(t) {
        return null == this.padding
            ? this.itemGutter
            : "number" == typeof this.padding
              ? this.padding
              : (this.padding[t] ?? this.itemGutter);
    }
    getPaddingLeft() {
        return null != this.paddingHorizontal ? this.paddingHorizontal : this.getPadding("left");
    }
    getPaddingRight() {
        return null != this.paddingHorizontal ? this.paddingHorizontal : this.getPadding("right");
    }
    getPaddingTop() {
        return null != this.paddingVertical ? this.paddingVertical : this.getPadding("top");
    }
    getPaddingBottom() {
        return null != this.paddingVertical ? this.paddingVertical : this.getPadding("bottom");
    }
    getSectionGutter() {
        return null != this.sectionGutter ? this.sectionGutter : this.itemGutter;
    }
    mergeProps(t) {
        let {
            sections: e = this.sections,
            columns: i = this.columns,
            itemGutter: s = this.itemGutter,
            removeEdgeItemGutters: n = this.removeEdgeItemGutters,
            getItemKey: l = this.getItemKey,
            getItemHeight: r = this.getItemHeight,
            getSectionHeight: o = this.getSectionHeight,
            bufferWidth: h = this.bufferWidth,
            padding: u = this.padding,
            paddingVertical: d = this.paddingVertical,
            paddingHorizontal: a = this.paddingHorizontal,
            marginLeft: c = this.marginLeft,
            sectionGutter: g = this.sectionGutter,
            dir: m = this.dir,
        } = t;
        (this.sections !== e ||
            this.columns !== i ||
            this.itemGutter !== s ||
            this.removeEdgeItemGutters !== n ||
            this.getItemKey !== l ||
            this.getSectionHeight !== o ||
            this.getItemHeight !== r ||
            this.bufferWidth !== h ||
            this.padding !== u ||
            this.paddingVertical !== d ||
            this.paddingHorizontal !== a ||
            this.marginLeft !== c ||
            this.sectionGutter !== g ||
            this.dir !== m) &&
            ((this.needsFullCompute = !0),
            (this.sections = e),
            (this.columns = i),
            (this.itemGutter = s),
            (this.getItemKey = l),
            (this.getSectionHeight = o),
            (this.getItemHeight = r),
            (this.bufferWidth = h),
            (this.padding = u),
            (this.paddingVertical = d),
            (this.paddingHorizontal = a),
            (this.marginLeft = c),
            (this.sectionGutter = g),
            (this.dir = m));
    }
    computeFullCoords() {
        if (!this.needsFullCompute) return;
        let {
                columns: t,
                getItemKey: e,
                getItemHeight: i,
                itemGutter: s,
                getSectionHeight: n,
                bufferWidth: l,
                removeEdgeItemGutters: r,
            } = this,
            o = "rtl" === this.dir ? "right" : "left";
        (this.coordsMap = {}),
            (this.gridData = { boundaries: [], coordinates: {} }),
            (this.currentRow = 0),
            (this.lastColumnIndex = 0);
        let h = this.getPaddingTop(),
            a = this.getPaddingBottom(),
            c = this.getPaddingLeft(),
            g = this.getPaddingRight(),
            m = this.marginLeft ?? 0;
        (this.columnHeights = Array(t).fill(h)),
            (this.columnWidth = (l - g - c - s * (t - 1) - (r ? s : 0)) / t),
            (this.itemGrid = []);
        let p = 0;
        for (; p < this.sections.length; ) {
            (this.gridData.boundaries[p] = this.currentRow), (this.currentRow = 0), (this.lastColumnIndex = 0);
            let l = this.sections[p],
                r = 0,
                h = n(p),
                a = this.getMaxColumnHeight(this.columnHeights);
            p > 0 && (a = a - s + this.getSectionGutter());
            let b = h > 0 ? h + s : 0;
            for (let t = 0; t < this.columnHeights.length; t++) this.columnHeights[t] = a + b;
            for (; r < l; ) {
                var f;
                let t = e(p, r);
                if (null == t) {
                    r++;
                    continue;
                }
                let [n, l] = (f = this.columnHeights).reduce((t, e, i) => (e < t[0] ? [e, i] : t), [f[0], 0]);
                l < this.lastColumnIndex && this.currentRow++, (this.lastColumnIndex = l);
                let h = i(p, r, this.columnWidth),
                    u = {
                        position: "absolute",
                        [o]: this.columnWidth * l + s * (l + 1) - s + c,
                        width: this.columnWidth,
                        top: n - a,
                        height: h,
                    },
                    d = { section: p, row: this.currentRow, column: l };
                (this.coordsMap[t] = u),
                    (this.gridData.coordinates[t] = d),
                    (this.columnHeights[l] = n + h + s),
                    (this.itemGrid[l] = this.itemGrid[l] ?? []),
                    this.itemGrid[l].push(t),
                    r++;
            }
            h > 0 &&
                (this.coordsMap[d(p)] = {
                    position: "sticky",
                    [o]: c,
                    width: this.columnWidth * t + s * t,
                    top: 0,
                    height: h,
                }),
                (this.coordsMap[u(p)] = {
                    position: "absolute",
                    [o]: m,
                    width: this.columnWidth * t + s * (t - 1) + c + g,
                    top: a,
                    height: this.getMaxColumnHeight(this.columnHeights) - a,
                }),
                p++;
        }
        (this.columnHeights = this.columnHeights.map((t) => t - s + a)),
            (this.totalHeight = this.getMaxColumnHeight()),
            (this.visibleSections = {}),
            (this.needsFullCompute = !1);
    }
    computeVisibleSections(t, e) {
        this.computeFullCoords();
        let { getItemKey: i, coordsMap: s } = this;
        this.visibleSections = {};
        let n = 0;
        for (; n < this.sections.length; ) {
            let l = this.sections[n],
                r = u(n),
                o = s[r];
            if (null == o) {
                n++;
                continue;
            }
            let { top: h } = o,
                d = h + o.height;
            if (h > e) break;
            if (d < t) {
                n++;
                continue;
            }
            let a = 0,
                c = 1;
            for (d < e && d > t && ((a = l - 1), (c = -1)), this.visibleSections[r] = []; a >= 0 && a < l; ) {
                let l = i(n, a),
                    o = null != l ? s[l] : null;
                if (null == l || null == o) {
                    a += c;
                    continue;
                }
                let { top: u, height: d } = o;
                u + h > t - d &&
                    u + h < e &&
                    (-1 === c ? this.visibleSections[r].unshift([l, n, a]) : this.visibleSections[r].push([l, n, a])),
                    (a += c);
            }
            if (h < t && d > e) break;
            n++;
        }
    }
    getMaxColumnHeight() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.columnHeights;
        return t.reduce((t, e) => Math.max(t, e), 0);
    }
    getState() {
        return {
            coordsMap: this.coordsMap,
            gridData: this.gridData,
            visibleSections: this.visibleSections,
            totalHeight: this.totalHeight,
        };
    }
}
var g = i(484702),
    m = i(403431);
let p = Object.freeze({
    coordsMap: {},
    visibleSections: {},
    totalHeight: 0,
    gridData: { boundaries: [], coordinates: {} },
});
var f = i(789279),
    b = i(448539),
    H = i(584648),
    v = i(751591),
    G = i(259678),
    C = i(465410);
function w(t, e, i) {
    let s = new Map(),
        r = new i((t) => {
            t.forEach((t) => {
                let { target: e } = t;
                s.get(e)?.(t);
            });
        });
    return (0, l.forwardRef)(function (i, u) {
        let {
                onScroll: a,
                dir: w = "ltr",
                sections: y,
                columns: S,
                getItemKey: M,
                getItemHeight: I,
                getSectionHeight: x,
                chunkSize: R,
                renderSection: P,
                renderItem: _,
                getSectionProps: k,
                itemGutter: W,
                removeEdgeItemGutters: L,
                sectionGutter: z,
                padding: V,
                paddingVertical: A,
                paddingHorizontal: E,
                scrollbarGutter: D = "stable",
                fade: j = !1,
                className: F,
                style: K,
                maxContentWidth: O,
                renderAccessory: T,
                onItemVisibilityChange: B,
                disableFocusRingScope: N = !1,
                ...q
            } = i,
            $ = l.useRef(null),
            Q = l.useRef(null),
            U = l.useRef({}),
            [Z, J] = l.useState(!1),
            { scrollerRef: X, scrollerState: Y, getScrollerState: tt } = (0, h.A)(),
            {
                forceUpdateOnChunkChange: te,
                coordsMap: ti,
                gridData: ts,
                visibleSections: tn,
                totalHeight: tl,
                forceUpdate: tr,
                masonryComputer: to,
            } = (function (t) {
                let {
                        sections: e,
                        columns: i,
                        getItemKey: s,
                        getItemHeight: n,
                        getSectionHeight: r,
                        chunkSize: o = 250,
                        getScrollerState: h,
                        maxBufferWidth: u,
                        itemGutter: d,
                        removeEdgeItemGutters: a,
                        sectionGutter: f,
                        padding: b,
                        paddingVertical: H,
                        paddingHorizontal: v,
                        dir: G,
                    } = t,
                    C = (0, g.A)(),
                    w = (0, l.useRef)(p),
                    [y] = (0, l.useState)(() => new c()),
                    S = h(),
                    M = Math.min(u ?? 1 / 0, S.offsetWidth),
                    I = null != u ? Math.max(0, S.offsetWidth - u) : 0,
                    {
                        dirty: x,
                        chunkStart: R,
                        chunkEnd: P,
                        forceUpdateOnChunkChange: _,
                    } = (0, m.A)({ chunkSize: o, getScrollerState: h, forceUpdate: C });
                return (
                    (w.current = (0, l.useMemo)(
                        () =>
                            x > 0
                                ? w.current
                                : (y.mergeProps({
                                      sections: e,
                                      columns: i,
                                      getItemKey: s,
                                      getItemHeight: n,
                                      getSectionHeight: r,
                                      bufferWidth: M,
                                      itemGutter: d,
                                      removeEdgeItemGutters: a,
                                      sectionGutter: f,
                                      padding: b,
                                      paddingVertical: H,
                                      paddingHorizontal: v,
                                      marginLeft: I / 2,
                                      dir: G,
                                  }),
                                  y.computeVisibleSections(Math.max(0, R * o), P * o),
                                  y.getState()),
                        [x, y, e, i, s, n, r, R, P, o, d, a, f, b, H, v, M, I, G],
                    )),
                    { ...w.current, masonryComputer: y, forceUpdateOnChunkChange: _, forceUpdate: C }
                );
            })({
                sections: y,
                columns: S,
                getItemKey: M,
                getItemHeight: I,
                getSectionHeight: x,
                chunkSize: R,
                itemGutter: W,
                removeEdgeItemGutters: L,
                sectionGutter: z,
                padding: V,
                paddingVertical: A,
                paddingHorizontal: E,
                getScrollerState: tt,
                dir: w,
                maxBufferWidth: O,
            });
        l.useEffect(() => {
            null != B &&
                (function (t, e, i) {
                    let s = {},
                        n = {};
                    for (let n in t)
                        if (null == e[n]) s[n] = t[n];
                        else {
                            let s = t[n],
                                l = e[n];
                            for (let t = 0; t < s.length; t++) {
                                let [e] = s[t];
                                l.some((t) => {
                                    let [i] = t;
                                    return e === i;
                                }) || i(s[t][1], s[t][2], !0);
                            }
                        }
                    for (let s in e)
                        if (null == t[s]) n[s] = e[s];
                        else {
                            let n = t[s],
                                l = e[s];
                            for (let t = 0; t < l.length; t++) {
                                let [e] = l[t];
                                n.some((t) => {
                                    let [i] = t;
                                    return i === e;
                                }) || i(l[t][1], l[t][2], !1);
                            }
                        }
                })(tn, U.current, B),
                (U.current = tn);
        }, [tn, B]);
        let th = (0, l.useCallback)(
                function () {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    t > Y.current.dirty && (Y.current.dirty = t), 2 === t ? tr() : te(1);
                },
                [te, Y, tr],
            ),
            tu = (0, f.A)(X),
            td = (0, l.useCallback)(() => to.itemGrid, [to]),
            ta = (0, l.useCallback)(() => to.coordsMap, [to]),
            tc = l.useCallback(() => th(), [th]);
        (0, b.A)({ ref: X, key: "container", onUpdate: tc, resizeObserver: r, listenerMap: s }),
            (0, l.useImperativeHandle)(
                u,
                () => ({
                    getScrollerNode: () => X.current,
                    getItemGrid: td,
                    getCoordsMap: ta,
                    getScrollerState: tt,
                    ...(0, H.A)(X, tt, tu),
                }),
                [X, tt, td, tu, ta],
            );
        let tg = (0, l.useCallback)(
            (t) => {
                th(1),
                    null == $.current ? J(!0) : clearTimeout($.current),
                    ($.current = setTimeout(() => {
                        ($.current = null), J(!1);
                    }, 200)),
                    null != a && a(t);
            },
            [a, th],
        );
        return (
            l.useLayoutEffect(() => {
                2 !== Y.current.dirty && (Y.current.dirty = 2);
            }, [tl, Y]),
            (0, n.jsxs)("div", {
                ref: X,
                onScroll: tg,
                className: o()(F, !1 === D ? void 0 : "stable" === D ? C.x2 : C.GV, { [t]: !0, [e]: j, [C.qw]: Z }),
                style: (0, v.Ay)(K),
                ...q,
                children: [
                    T?.(tl) ?? null,
                    (0, l.useMemo)(() => {
                        let t = (0, n.jsx)("div", {
                            style: { height: tl },
                            className: C.Qs,
                            ref: Q,
                            children: Object.keys(tn).map((t) => {
                                let e = parseInt(t.replace(/^__section__/, ""), 10),
                                    i = ti[t],
                                    s = tn[t],
                                    l = ti[d(e)],
                                    r = k?.(e);
                                return null != i && null != s
                                    ? (0, n.jsxs)(
                                          "div",
                                          {
                                              ...r,
                                              style: { ...i, ...(r?.style ?? {}) },
                                              children: [
                                                  null != P && null != l && P(e, l, t),
                                                  s.map((t) => {
                                                      let [e, i, s] = t,
                                                          n = ti[e];
                                                      return null != n ? _(i, s, n, e, ts) : null;
                                                  }),
                                              ],
                                          },
                                          t,
                                      )
                                    : null;
                            }),
                        });
                        return N ? t : (0, n.jsx)(G.xp, { containerRef: Q, children: t });
                    }, [tn, _, P, ti, tl, k, ts, N]),
                ],
            })
        );
    });
}
let y = w(C.yL, C.Rv, window.ResizeObserver ?? s.t);
w(C.qZ, C.Rv, window.ResizeObserver ?? s.t);
