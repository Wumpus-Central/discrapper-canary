"use strict";
n.d(t, { f: () => v });
var i = n(446837),
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(936005),
    u = n(154327),
    c = n(518898);
n(321073), n(667532);
let d = (e) => `__section__${e}`,
    _ = (e) => `__section_header__${e}`,
    h = () => 0;
class f {
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
    getSectionHeight = h;
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
            getItemKey: s = this.getItemKey,
            getItemHeight: a = this.getItemHeight,
            getSectionHeight: o = this.getSectionHeight,
            bufferWidth: l = this.bufferWidth,
            padding: u = this.padding,
            paddingVertical: c = this.paddingVertical,
            paddingHorizontal: d = this.paddingHorizontal,
            marginLeft: _ = this.marginLeft,
            sectionGutter: h = this.sectionGutter,
            dir: f = this.dir,
        } = e;
        (this.sections !== t ||
            this.columns !== n ||
            this.itemGutter !== i ||
            this.removeEdgeItemGutters !== r ||
            this.getItemKey !== s ||
            this.getSectionHeight !== o ||
            this.getItemHeight !== a ||
            this.bufferWidth !== l ||
            this.padding !== u ||
            this.paddingVertical !== c ||
            this.paddingHorizontal !== d ||
            this.marginLeft !== _ ||
            this.sectionGutter !== h ||
            this.dir !== f) &&
            ((this.needsFullCompute = !0),
            (this.sections = t),
            (this.columns = n),
            (this.itemGutter = i),
            (this.getItemKey = s),
            (this.getSectionHeight = o),
            (this.getItemHeight = a),
            (this.bufferWidth = l),
            (this.padding = u),
            (this.paddingVertical = c),
            (this.paddingHorizontal = d),
            (this.marginLeft = _),
            (this.sectionGutter = h),
            (this.dir = f));
    }
    computeFullCoords() {
        if (!this.needsFullCompute) return;
        let {
                columns: e,
                getItemKey: t,
                getItemHeight: n,
                itemGutter: i,
                getSectionHeight: r,
                bufferWidth: s,
                removeEdgeItemGutters: a,
            } = this,
            o = "rtl" === this.dir ? "right" : "left";
        (this.coordsMap = {}),
            (this.gridData = { boundaries: [], coordinates: {} }),
            (this.currentRow = 0),
            (this.lastColumnIndex = 0);
        let l = this.getPaddingTop(),
            u = this.getPaddingBottom(),
            c = this.getPaddingLeft(),
            h = this.getPaddingRight(),
            f = this.marginLeft ?? 0;
        (this.columnHeights = Array(e).fill(l)),
            (this.columnWidth = (s - h - c - i * (e - 1) - (a ? i : 0)) / e),
            (this.itemGrid = []);
        let p = 0;
        for (; p < this.sections.length; ) {
            (this.gridData.boundaries[p] = this.currentRow), (this.currentRow = 0), (this.lastColumnIndex = 0);
            let s = this.sections[p],
                a = 0,
                l = r(p),
                u = this.getMaxColumnHeight(this.columnHeights);
            p > 0 && (u = u - i + this.getSectionGutter());
            let m = l > 0 ? l + i : 0;
            for (let e = 0; e < this.columnHeights.length; e++) this.columnHeights[e] = u + m;
            for (; a < s; ) {
                var E;
                let e = t(p, a);
                if (null == e) {
                    a++;
                    continue;
                }
                let [r, s] = (E = this.columnHeights).reduce((e, t, n) => (t < e[0] ? [t, n] : e), [E[0], 0]);
                s < this.lastColumnIndex && this.currentRow++, (this.lastColumnIndex = s);
                let l = n(p, a, this.columnWidth),
                    d = {
                        position: "absolute",
                        [o]: this.columnWidth * s + i * (s + 1) - i + c,
                        width: this.columnWidth,
                        top: r - u,
                        height: l,
                    },
                    _ = { section: p, row: this.currentRow, column: s };
                (this.coordsMap[e] = d),
                    (this.gridData.coordinates[e] = _),
                    (this.columnHeights[s] = r + l + i),
                    (this.itemGrid[s] = this.itemGrid[s] ?? []),
                    this.itemGrid[s].push(e),
                    a++;
            }
            l > 0 &&
                (this.coordsMap[_(p)] = {
                    position: "sticky",
                    [o]: c,
                    width: this.columnWidth * e + i * e,
                    top: 0,
                    height: l,
                }),
                (this.coordsMap[d(p)] = {
                    position: "absolute",
                    [o]: f,
                    width: this.columnWidth * e + i * (e - 1) + c + h,
                    top: u,
                    height: this.getMaxColumnHeight(this.columnHeights) - u,
                }),
                p++;
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
            let s = this.sections[r],
                a = d(r),
                o = i[a];
            if (null == o) {
                r++;
                continue;
            }
            let { top: l } = o,
                u = l + o.height;
            if (l > t) break;
            if (u < e) {
                r++;
                continue;
            }
            let c = 0,
                _ = 1;
            for (u < t && u > e && ((c = s - 1), (_ = -1)), this.visibleSections[a] = []; c >= 0 && c < s; ) {
                let s = n(r, c),
                    o = null != s ? i[s] : null;
                if (null == s || null == o) {
                    c += _;
                    continue;
                }
                let { top: u, height: d } = o;
                u + l > e - d &&
                    u + l < t &&
                    (-1 === _ ? this.visibleSections[a].unshift([s, r, c]) : this.visibleSections[a].push([s, r, c])),
                    (c += _);
            }
            if (l < e && u > t) break;
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
var p = n(484702),
    E = n(403431);
let m = Object.freeze({
    coordsMap: {},
    visibleSections: {},
    totalHeight: 0,
    gridData: { boundaries: [], coordinates: {} },
});
var g = n(789279),
    A = n(448539),
    I = n(584648),
    T = n(751591),
    S = n(187322),
    y = n(457845);
function N(e, t, n) {
    let i = (0, l.A)(e),
        a = new Map(),
        d = new n((e) => {
            e.forEach((e) => {
                let { target: t } = e;
                a.get(t)?.(e);
            });
        });
    return (0, s.forwardRef)(function (n, l) {
        let {
                onScroll: h,
                dir: N = "ltr",
                sections: v,
                columns: C,
                getItemKey: R,
                getItemHeight: O,
                getSectionHeight: b,
                chunkSize: D,
                renderSection: L,
                renderItem: w,
                getSectionProps: M,
                itemGutter: P,
                removeEdgeItemGutters: x,
                sectionGutter: k,
                padding: U,
                paddingVertical: G,
                paddingHorizontal: F,
                fade: V = !1,
                className: B,
                style: H,
                maxContentWidth: j,
                renderAccessory: Y,
                onItemVisibilityChange: W,
                disableFocusRingScope: K = !1,
                ...$
            } = n,
            z = s.useRef(null),
            q = s.useRef(null),
            X = s.useRef({}),
            [Z, Q] = s.useState(!1),
            { scrollerRef: J, scrollerState: ee, getScrollerState: et } = (0, u.A)();
        (0, c.A)({ scrollerRef: J, className: B, specs: i, orientation: "vertical", dir: N });
        let {
            forceUpdateOnChunkChange: en,
            coordsMap: ei,
            gridData: er,
            visibleSections: es,
            totalHeight: ea,
            forceUpdate: eo,
            masonryComputer: el,
        } = (function (e) {
            let {
                    sections: t,
                    columns: n,
                    getItemKey: i,
                    getItemHeight: r,
                    getSectionHeight: a,
                    chunkSize: o = 250,
                    getScrollerState: l,
                    maxBufferWidth: u,
                    itemGutter: c,
                    removeEdgeItemGutters: d,
                    sectionGutter: _,
                    padding: h,
                    paddingVertical: g,
                    paddingHorizontal: A,
                    dir: I,
                } = e,
                T = (0, p.A)(),
                S = (0, s.useRef)(m),
                [y] = (0, s.useState)(() => new f()),
                N = l(),
                v = Math.min(u ?? 1 / 0, N.offsetWidth),
                C = null != u ? Math.max(0, N.offsetWidth - u) : 0,
                {
                    dirty: R,
                    chunkStart: O,
                    chunkEnd: b,
                    forceUpdateOnChunkChange: D,
                } = (0, E.A)({ chunkSize: o, getScrollerState: l, forceUpdate: T });
            return (
                (S.current = (0, s.useMemo)(
                    () =>
                        R > 0
                            ? S.current
                            : (y.mergeProps({
                                  sections: t,
                                  columns: n,
                                  getItemKey: i,
                                  getItemHeight: r,
                                  getSectionHeight: a,
                                  bufferWidth: v,
                                  itemGutter: c,
                                  removeEdgeItemGutters: d,
                                  sectionGutter: _,
                                  padding: h,
                                  paddingVertical: g,
                                  paddingHorizontal: A,
                                  marginLeft: C / 2,
                                  dir: I,
                              }),
                              y.computeVisibleSections(Math.max(0, O * o), b * o),
                              y.getState()),
                    [R, y, t, n, i, r, a, O, b, o, c, d, _, h, g, A, v, C, I],
                )),
                { ...S.current, masonryComputer: y, forceUpdateOnChunkChange: D, forceUpdate: T }
            );
        })({
            sections: v,
            columns: C,
            getItemKey: R,
            getItemHeight: O,
            getSectionHeight: b,
            chunkSize: D,
            itemGutter: P,
            removeEdgeItemGutters: x,
            sectionGutter: k,
            padding: U,
            paddingVertical: G,
            paddingHorizontal: F,
            getScrollerState: et,
            dir: N,
            maxBufferWidth: j,
        });
        s.useEffect(() => {
            null != W &&
                (function (e, t, n) {
                    let i = {},
                        r = {};
                    for (let r in e)
                        if (null == t[r]) i[r] = e[r];
                        else {
                            let i = e[r],
                                s = t[r];
                            for (let e = 0; e < i.length; e++) {
                                let [t] = i[e];
                                s.some((e) => {
                                    let [n] = e;
                                    return t === n;
                                }) || n(i[e][1], i[e][2], !0);
                            }
                        }
                    for (let i in t)
                        if (null == e[i]) r[i] = t[i];
                        else {
                            let r = e[i],
                                s = t[i];
                            for (let e = 0; e < s.length; e++) {
                                let [t] = s[e];
                                r.some((e) => {
                                    let [n] = e;
                                    return n === t;
                                }) || n(s[e][1], s[e][2], !1);
                            }
                        }
                })(es, X.current, W),
                (X.current = es);
        }, [es, W]);
        let eu = (0, s.useCallback)(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > ee.current.dirty && (ee.current.dirty = e), 2 === e ? eo() : en(1);
                },
                [en, ee, eo],
            ),
            ec = (0, g.A)(J),
            ed = (0, s.useCallback)(() => el.itemGrid, [el]),
            e_ = (0, s.useCallback)(() => el.coordsMap, [el]),
            eh = s.useCallback(() => eu(), [eu]);
        (0, A.A)({ ref: J, key: "container", onUpdate: eh, resizeObserver: d, listenerMap: a }),
            (0, s.useImperativeHandle)(
                l,
                () => ({
                    getScrollerNode: () => J.current,
                    getItemGrid: ed,
                    getCoordsMap: e_,
                    getScrollerState: et,
                    ...(0, I.A)(J, et, ec),
                }),
                [J, et, ed, ec, e_],
            );
        let ef = (0, s.useCallback)(
            (e) => {
                eu(1),
                    null == z.current ? Q(!0) : clearTimeout(z.current),
                    (z.current = setTimeout(() => {
                        (z.current = null), Q(!1);
                    }, 200)),
                    null != h && h(e);
            },
            [h, eu],
        );
        return (
            s.useLayoutEffect(() => {
                2 !== ee.current.dirty && (ee.current.dirty = 2);
            }, [ea, ee]),
            (0, r.jsxs)("div", {
                ref: J,
                onScroll: ef,
                className: o()(B, { [e]: !0, [t]: V, [y.qw]: Z }),
                style: (0, T.Ay)(H),
                ...$,
                children: [
                    Y?.(ea) ?? null,
                    (0, s.useMemo)(() => {
                        let e = (0, r.jsx)("div", {
                            style: { height: ea },
                            className: y.Qs,
                            ref: q,
                            children: Object.keys(es).map((e) => {
                                let t = parseInt(e.replace(/^__section__/, ""), 10),
                                    n = ei[e],
                                    i = es[e],
                                    s = ei[_(t)],
                                    a = M?.(t);
                                return null != n && null != i
                                    ? (0, r.jsxs)(
                                          "div",
                                          {
                                              ...a,
                                              style: { ...n, ...(a?.style ?? {}) },
                                              children: [
                                                  null != L && null != s && L(t, s, e),
                                                  i.map((e) => {
                                                      let [t, n, i] = e,
                                                          r = ei[t];
                                                      return null != r ? w(n, i, r, t, er) : null;
                                                  }),
                                              ],
                                          },
                                          e,
                                      )
                                    : null;
                            }),
                        });
                        return K ? e : (0, r.jsx)(S.xp, { containerRef: q, children: e });
                    }, [es, w, L, ei, ea, M, er, K]),
                ],
            })
        );
    });
}
let v = N(y.yL, y.Rv, window.ResizeObserver ?? i.t);
N(y.qZ, y.Rv, window.ResizeObserver ?? i.t);
