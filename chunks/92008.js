"use strict";
n.d(t, { f: () => N });
var i = n(446837),
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(154327);
function d(e) {
    return `__section__${e}`;
}
function c(e) {
    return `__section_header__${e}`;
}
n(321073), n(667532);
let u = () => 0;
class _ {
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
    getSectionHeight = u;
    getPadding(e) {
        return null == this.padding
            ? this.itemGutter
            : "number" == typeof this.padding
              ? this.padding
              : (this.padding[e] ?? this.itemGutter);
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
    mergeProps(e) {
        let {
            sections: t = this.sections,
            columns: n = this.columns,
            itemGutter: i = this.itemGutter,
            removeEdgeItemGutters: r = this.removeEdgeItemGutters,
            getItemKey: a = this.getItemKey,
            getItemHeight: s = this.getItemHeight,
            getSectionHeight: l = this.getSectionHeight,
            bufferWidth: o = this.bufferWidth,
            padding: d = this.padding,
            paddingVertical: c = this.paddingVertical,
            paddingHorizontal: u = this.paddingHorizontal,
            marginLeft: _ = this.marginLeft,
            sectionGutter: E = this.sectionGutter,
            dir: A = this.dir,
        } = e;
        (this.sections !== t ||
            this.columns !== n ||
            this.itemGutter !== i ||
            this.removeEdgeItemGutters !== r ||
            this.getItemKey !== a ||
            this.getSectionHeight !== l ||
            this.getItemHeight !== s ||
            this.bufferWidth !== o ||
            this.padding !== d ||
            this.paddingVertical !== c ||
            this.paddingHorizontal !== u ||
            this.marginLeft !== _ ||
            this.sectionGutter !== E ||
            this.dir !== A) &&
            ((this.needsFullCompute = !0),
            (this.sections = t),
            (this.columns = n),
            (this.itemGutter = i),
            (this.getItemKey = a),
            (this.getSectionHeight = l),
            (this.getItemHeight = s),
            (this.bufferWidth = o),
            (this.padding = d),
            (this.paddingVertical = c),
            (this.paddingHorizontal = u),
            (this.marginLeft = _),
            (this.sectionGutter = E),
            (this.dir = A));
    }
    computeFullCoords() {
        if (!this.needsFullCompute) return;
        let {
                columns: e,
                getItemKey: t,
                getItemHeight: n,
                itemGutter: i,
                getSectionHeight: r,
                bufferWidth: a,
                removeEdgeItemGutters: s,
            } = this,
            l = "rtl" === this.dir ? "right" : "left";
        (this.coordsMap = {}),
            (this.gridData = { boundaries: [], coordinates: {} }),
            (this.currentRow = 0),
            (this.lastColumnIndex = 0);
        let o = this.getPaddingTop(),
            u = this.getPaddingBottom(),
            _ = this.getPaddingLeft(),
            E = this.getPaddingRight(),
            A = this.marginLeft ?? 0;
        (this.columnHeights = Array(e).fill(o)),
            (this.columnWidth = (a - E - _ - i * (e - 1) - (s ? i : 0)) / e),
            (this.itemGrid = []);
        let h = 0;
        for (; h < this.sections.length; ) {
            (this.gridData.boundaries[h] = this.currentRow), (this.currentRow = 0), (this.lastColumnIndex = 0);
            let a = this.sections[h],
                s = 0,
                o = r(h),
                u = this.getMaxColumnHeight(this.columnHeights);
            h > 0 && (u = u - i + this.getSectionGutter());
            let f = o > 0 ? o + i : 0;
            for (let e = 0; e < this.columnHeights.length; e++) this.columnHeights[e] = u + f;
            for (; s < a; ) {
                var I;
                let e = t(h, s);
                if (null == e) {
                    s++;
                    continue;
                }
                let [r, a] = (I = this.columnHeights).reduce((e, t, n) => (t < e[0] ? [t, n] : e), [I[0], 0]);
                a < this.lastColumnIndex && this.currentRow++, (this.lastColumnIndex = a);
                let o = n(h, s, this.columnWidth),
                    d = {
                        position: "absolute",
                        [l]: this.columnWidth * a + i * (a + 1) - i + _,
                        width: this.columnWidth,
                        top: r - u,
                        height: o,
                    },
                    c = { section: h, row: this.currentRow, column: a };
                (this.coordsMap[e] = d),
                    (this.gridData.coordinates[e] = c),
                    (this.columnHeights[a] = r + o + i),
                    (this.itemGrid[a] = this.itemGrid[a] ?? []),
                    this.itemGrid[a].push(e),
                    s++;
            }
            o > 0 &&
                (this.coordsMap[c(h)] = {
                    position: "sticky",
                    [l]: _,
                    width: this.columnWidth * e + i * e,
                    top: 0,
                    height: o,
                }),
                (this.coordsMap[d(h)] = {
                    position: "absolute",
                    [l]: A,
                    width: this.columnWidth * e + i * (e - 1) + _ + E,
                    top: u,
                    height: this.getMaxColumnHeight(this.columnHeights) - u,
                }),
                h++;
        }
        (this.columnHeights = this.columnHeights.map((e) => e - i + u)),
            (this.totalHeight = this.getMaxColumnHeight()),
            (this.visibleSections = {}),
            (this.needsFullCompute = !1);
    }
    computeVisibleSections(e, t) {
        this.computeFullCoords();
        let { getItemKey: n, coordsMap: i } = this;
        this.visibleSections = {};
        let r = 0;
        for (; r < this.sections.length; ) {
            let a = this.sections[r],
                s = d(r),
                l = i[s];
            if (null == l) {
                r++;
                continue;
            }
            let { top: o } = l,
                c = o + l.height;
            if (o > t) break;
            if (c < e) {
                r++;
                continue;
            }
            let u = 0,
                _ = 1;
            for (c < t && c > e && ((u = a - 1), (_ = -1)), this.visibleSections[s] = []; u >= 0 && u < a; ) {
                let a = n(r, u),
                    l = null != a ? i[a] : null;
                if (null == a || null == l) {
                    u += _;
                    continue;
                }
                let { top: d, height: c } = l;
                d + o > e - c &&
                    d + o < t &&
                    (-1 === _ ? this.visibleSections[s].unshift([a, r, u]) : this.visibleSections[s].push([a, r, u])),
                    (u += _);
            }
            if (o < e && c > t) break;
            r++;
        }
    }
    getMaxColumnHeight() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.columnHeights;
        return e.reduce((e, t) => Math.max(e, t), 0);
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
var E = n(484702),
    A = n(403431);
let h = Object.freeze({
    coordsMap: {},
    visibleSections: {},
    totalHeight: 0,
    gridData: { boundaries: [], coordinates: {} },
});
var I = n(789279),
    f = n(448539),
    p = n(584648),
    T = n(751591),
    m = n(259678),
    g = n(250813);
function S(e, t, n) {
    let i = new Map(),
        s = new n((e) => {
            e.forEach((e) => {
                let { target: t } = e;
                i.get(t)?.(e);
            });
        });
    return (0, a.forwardRef)(function (n, d) {
        let {
                onScroll: u,
                dir: S = "ltr",
                sections: N,
                columns: C,
                getItemKey: O,
                getItemHeight: R,
                getSectionHeight: L,
                chunkSize: D,
                renderSection: y,
                renderItem: v,
                getSectionProps: b,
                itemGutter: M,
                removeEdgeItemGutters: P,
                sectionGutter: U,
                padding: w,
                paddingVertical: G,
                paddingHorizontal: x,
                scrollbarGutter: k = "stable",
                fade: F = !1,
                className: V,
                style: B,
                maxContentWidth: H,
                renderAccessory: j,
                onItemVisibilityChange: W,
                disableFocusRingScope: Y = !1,
                ...K
            } = n,
            $ = a.useRef(null),
            z = a.useRef(null),
            q = a.useRef({}),
            [Z, X] = a.useState(!1),
            { scrollerRef: Q, scrollerState: J, getScrollerState: ee } = (0, o.A)(),
            {
                forceUpdateOnChunkChange: et,
                coordsMap: en,
                gridData: ei,
                visibleSections: er,
                totalHeight: ea,
                forceUpdate: es,
                masonryComputer: el,
            } = (function (e) {
                let {
                        sections: t,
                        columns: n,
                        getItemKey: i,
                        getItemHeight: r,
                        getSectionHeight: s,
                        chunkSize: l = 250,
                        getScrollerState: o,
                        maxBufferWidth: d,
                        itemGutter: c,
                        removeEdgeItemGutters: u,
                        sectionGutter: I,
                        padding: f,
                        paddingVertical: p,
                        paddingHorizontal: T,
                        dir: m,
                    } = e,
                    g = (0, E.A)(),
                    S = (0, a.useRef)(h),
                    [N] = (0, a.useState)(() => new _()),
                    C = o(),
                    O = Math.min(d ?? 1 / 0, C.offsetWidth),
                    R = null != d ? Math.max(0, C.offsetWidth - d) : 0,
                    {
                        dirty: L,
                        chunkStart: D,
                        chunkEnd: y,
                        forceUpdateOnChunkChange: v,
                    } = (0, A.A)({ chunkSize: l, getScrollerState: o, forceUpdate: g });
                return (
                    (S.current = (0, a.useMemo)(
                        () =>
                            L > 0
                                ? S.current
                                : (N.mergeProps({
                                      sections: t,
                                      columns: n,
                                      getItemKey: i,
                                      getItemHeight: r,
                                      getSectionHeight: s,
                                      bufferWidth: O,
                                      itemGutter: c,
                                      removeEdgeItemGutters: u,
                                      sectionGutter: I,
                                      padding: f,
                                      paddingVertical: p,
                                      paddingHorizontal: T,
                                      marginLeft: R / 2,
                                      dir: m,
                                  }),
                                  N.computeVisibleSections(Math.max(0, D * l), y * l),
                                  N.getState()),
                        [L, N, t, n, i, r, s, D, y, l, c, u, I, f, p, T, O, R, m],
                    )),
                    { ...S.current, masonryComputer: N, forceUpdateOnChunkChange: v, forceUpdate: g }
                );
            })({
                sections: N,
                columns: C,
                getItemKey: O,
                getItemHeight: R,
                getSectionHeight: L,
                chunkSize: D,
                itemGutter: M,
                removeEdgeItemGutters: P,
                sectionGutter: U,
                padding: w,
                paddingVertical: G,
                paddingHorizontal: x,
                getScrollerState: ee,
                dir: S,
                maxBufferWidth: H,
            });
        a.useEffect(() => {
            null != W &&
                (function (e, t, n) {
                    let i = {},
                        r = {};
                    for (let r in e)
                        if (null == t[r]) i[r] = e[r];
                        else {
                            let i = e[r],
                                a = t[r];
                            for (let e = 0; e < i.length; e++) {
                                let [t] = i[e];
                                a.some((e) => {
                                    let [n] = e;
                                    return t === n;
                                }) || n(i[e][1], i[e][2], !0);
                            }
                        }
                    for (let i in t)
                        if (null == e[i]) r[i] = t[i];
                        else {
                            let r = e[i],
                                a = t[i];
                            for (let e = 0; e < a.length; e++) {
                                let [t] = a[e];
                                r.some((e) => {
                                    let [n] = e;
                                    return n === t;
                                }) || n(a[e][1], a[e][2], !1);
                            }
                        }
                })(er, q.current, W),
                (q.current = er);
        }, [er, W]);
        let eo = (0, a.useCallback)(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > J.current.dirty && (J.current.dirty = e), 2 === e ? es() : et(1);
                },
                [et, J, es],
            ),
            ed = (0, I.A)(Q),
            ec = (0, a.useCallback)(() => el.itemGrid, [el]),
            eu = (0, a.useCallback)(() => el.coordsMap, [el]),
            e_ = a.useCallback(() => eo(), [eo]);
        (0, f.A)({ ref: Q, key: "container", onUpdate: e_, resizeObserver: s, listenerMap: i }),
            (0, a.useImperativeHandle)(
                d,
                () => ({
                    getScrollerNode: () => Q.current,
                    getItemGrid: ec,
                    getCoordsMap: eu,
                    getScrollerState: ee,
                    ...(0, p.A)(Q, ee, ed),
                }),
                [Q, ee, ec, ed, eu],
            );
        let eE = (0, a.useCallback)(
            (e) => {
                eo(1),
                    null == $.current ? X(!0) : clearTimeout($.current),
                    ($.current = setTimeout(() => {
                        ($.current = null), X(!1);
                    }, 200)),
                    null != u && u(e);
            },
            [u, eo],
        );
        return (
            a.useLayoutEffect(() => {
                2 !== J.current.dirty && (J.current.dirty = 2);
            }, [ea, J]),
            (0, r.jsxs)("div", {
                ref: Q,
                onScroll: eE,
                className: l()(V, !1 === k ? void 0 : "stable" === k ? g.x2 : g.GV, { [e]: !0, [t]: F, [g.qw]: Z }),
                style: (0, T.Ay)(B),
                ...K,
                children: [
                    j?.(ea) ?? null,
                    (0, a.useMemo)(() => {
                        let e = (0, r.jsx)("div", {
                            style: { height: ea },
                            className: g.Qs,
                            ref: z,
                            children: Object.keys(er).map((e) => {
                                let t = parseInt(e.replace(/^__section__/, ""), 10),
                                    n = en[e],
                                    i = er[e],
                                    a = en[c(t)],
                                    s = b?.(t);
                                return null != n && null != i
                                    ? (0, r.jsxs)(
                                          "div",
                                          {
                                              ...s,
                                              style: { ...n, ...(s?.style ?? {}) },
                                              children: [
                                                  null != y && null != a && y(t, a, e),
                                                  i.map((e) => {
                                                      let [t, n, i] = e,
                                                          r = en[t];
                                                      return null != r ? v(n, i, r, t, ei) : null;
                                                  }),
                                              ],
                                          },
                                          e,
                                      )
                                    : null;
                            }),
                        });
                        return Y ? e : (0, r.jsx)(m.xp, { containerRef: z, children: e });
                    }, [er, v, y, en, ea, b, ei, Y]),
                ],
            })
        );
    });
}
let N = S(g.yL, g.Rv, window.ResizeObserver ?? i.t);
S(g.qZ, g.Rv, window.ResizeObserver ?? i.t);
