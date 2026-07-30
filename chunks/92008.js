"use strict";
n.d(t, { f: () => O });
var i = n(446837),
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(936005),
    d = n(154327),
    c = n(518898);
function u(e) {
    return `__section__${e}`;
}
function _(e) {
    return `__section_header__${e}`;
}
n(321073), n(667532);
let E = () => 0;
class A {
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
    getSectionHeight = E;
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
            d = this.getPaddingBottom(),
            c = this.getPaddingLeft(),
            E = this.getPaddingRight(),
            A = this.marginLeft ?? 0;
        (this.columnHeights = Array(e).fill(o)),
            (this.columnWidth = (a - E - c - i * (e - 1) - (s ? i : 0)) / e),
            (this.itemGrid = []);
        let h = 0;
        for (; h < this.sections.length; ) {
            (this.gridData.boundaries[h] = this.currentRow), (this.currentRow = 0), (this.lastColumnIndex = 0);
            let a = this.sections[h],
                s = 0,
                o = r(h),
                d = this.getMaxColumnHeight(this.columnHeights);
            h > 0 && (d = d - i + this.getSectionGutter());
            let f = o > 0 ? o + i : 0;
            for (let e = 0; e < this.columnHeights.length; e++) this.columnHeights[e] = d + f;
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
                    u = {
                        position: "absolute",
                        [l]: this.columnWidth * a + i * (a + 1) - i + c,
                        width: this.columnWidth,
                        top: r - d,
                        height: o,
                    },
                    _ = { section: h, row: this.currentRow, column: a };
                (this.coordsMap[e] = u),
                    (this.gridData.coordinates[e] = _),
                    (this.columnHeights[a] = r + o + i),
                    (this.itemGrid[a] = this.itemGrid[a] ?? []),
                    this.itemGrid[a].push(e),
                    s++;
            }
            o > 0 &&
                (this.coordsMap[_(h)] = {
                    position: "sticky",
                    [l]: c,
                    width: this.columnWidth * e + i * e,
                    top: 0,
                    height: o,
                }),
                (this.coordsMap[u(h)] = {
                    position: "absolute",
                    [l]: A,
                    width: this.columnWidth * e + i * (e - 1) + c + E,
                    top: d,
                    height: this.getMaxColumnHeight(this.columnHeights) - d,
                }),
                h++;
        }
        (this.columnHeights = this.columnHeights.map((e) => e - i + d)),
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
                s = u(r),
                l = i[s];
            if (null == l) {
                r++;
                continue;
            }
            let { top: o } = l,
                d = o + l.height;
            if (o > t) break;
            if (d < e) {
                r++;
                continue;
            }
            let c = 0,
                _ = 1;
            for (d < t && d > e && ((c = a - 1), (_ = -1)), this.visibleSections[s] = []; c >= 0 && c < a; ) {
                let a = n(r, c),
                    l = null != a ? i[a] : null;
                if (null == a || null == l) {
                    c += _;
                    continue;
                }
                let { top: d, height: u } = l;
                d + o > e - u &&
                    d + o < t &&
                    (-1 === _ ? this.visibleSections[s].unshift([a, r, c]) : this.visibleSections[s].push([a, r, c])),
                    (c += _);
            }
            if (o < e && d > t) break;
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
var h = n(484702),
    I = n(403431);
let f = Object.freeze({
    coordsMap: {},
    visibleSections: {},
    totalHeight: 0,
    gridData: { boundaries: [], coordinates: {} },
});
var p = n(789279),
    T = n(448539),
    m = n(584648),
    g = n(751591),
    S = n(259678),
    N = n(250813);
function C(e, t, n) {
    let i = (0, o.A)(e),
        s = new Map(),
        u = new n((e) => {
            e.forEach((e) => {
                let { target: t } = e;
                s.get(t)?.(e);
            });
        });
    return (0, a.forwardRef)(function (n, o) {
        let {
                onScroll: E,
                dir: C = "ltr",
                sections: O,
                columns: R,
                getItemKey: L,
                getItemHeight: D,
                getSectionHeight: y,
                chunkSize: v,
                renderSection: b,
                renderItem: M,
                getSectionProps: P,
                itemGutter: U,
                removeEdgeItemGutters: w,
                sectionGutter: G,
                padding: x,
                paddingVertical: k,
                paddingHorizontal: F,
                fade: V = !1,
                className: B,
                style: H,
                maxContentWidth: j,
                renderAccessory: W,
                onItemVisibilityChange: Y,
                disableFocusRingScope: K = !1,
                ...$
            } = n,
            z = a.useRef(null),
            q = a.useRef(null),
            Z = a.useRef({}),
            [X, Q] = a.useState(!1),
            { scrollerRef: J, scrollerState: ee, getScrollerState: et } = (0, d.A)();
        (0, c.A)({ scrollerRef: J, className: B, specs: i, orientation: "vertical", dir: C });
        let {
            forceUpdateOnChunkChange: en,
            coordsMap: ei,
            gridData: er,
            visibleSections: ea,
            totalHeight: es,
            forceUpdate: el,
            masonryComputer: eo,
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
                    sectionGutter: _,
                    padding: E,
                    paddingVertical: p,
                    paddingHorizontal: T,
                    dir: m,
                } = e,
                g = (0, h.A)(),
                S = (0, a.useRef)(f),
                [N] = (0, a.useState)(() => new A()),
                C = o(),
                O = Math.min(d ?? 1 / 0, C.offsetWidth),
                R = null != d ? Math.max(0, C.offsetWidth - d) : 0,
                {
                    dirty: L,
                    chunkStart: D,
                    chunkEnd: y,
                    forceUpdateOnChunkChange: v,
                } = (0, I.A)({ chunkSize: l, getScrollerState: o, forceUpdate: g });
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
                                  sectionGutter: _,
                                  padding: E,
                                  paddingVertical: p,
                                  paddingHorizontal: T,
                                  marginLeft: R / 2,
                                  dir: m,
                              }),
                              N.computeVisibleSections(Math.max(0, D * l), y * l),
                              N.getState()),
                    [L, N, t, n, i, r, s, D, y, l, c, u, _, E, p, T, O, R, m],
                )),
                { ...S.current, masonryComputer: N, forceUpdateOnChunkChange: v, forceUpdate: g }
            );
        })({
            sections: O,
            columns: R,
            getItemKey: L,
            getItemHeight: D,
            getSectionHeight: y,
            chunkSize: v,
            itemGutter: U,
            removeEdgeItemGutters: w,
            sectionGutter: G,
            padding: x,
            paddingVertical: k,
            paddingHorizontal: F,
            getScrollerState: et,
            dir: C,
            maxBufferWidth: j,
        });
        a.useEffect(() => {
            null != Y &&
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
                })(ea, Z.current, Y),
                (Z.current = ea);
        }, [ea, Y]);
        let ed = (0, a.useCallback)(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > ee.current.dirty && (ee.current.dirty = e), 2 === e ? el() : en(1);
                },
                [en, ee, el],
            ),
            ec = (0, p.A)(J),
            eu = (0, a.useCallback)(() => eo.itemGrid, [eo]),
            e_ = (0, a.useCallback)(() => eo.coordsMap, [eo]),
            eE = a.useCallback(() => ed(), [ed]);
        (0, T.A)({ ref: J, key: "container", onUpdate: eE, resizeObserver: u, listenerMap: s }),
            (0, a.useImperativeHandle)(
                o,
                () => ({
                    getScrollerNode: () => J.current,
                    getItemGrid: eu,
                    getCoordsMap: e_,
                    getScrollerState: et,
                    ...(0, m.A)(J, et, ec),
                }),
                [J, et, eu, ec, e_],
            );
        let eA = (0, a.useCallback)(
            (e) => {
                ed(1),
                    null == z.current ? Q(!0) : clearTimeout(z.current),
                    (z.current = setTimeout(() => {
                        (z.current = null), Q(!1);
                    }, 200)),
                    null != E && E(e);
            },
            [E, ed],
        );
        return (
            a.useLayoutEffect(() => {
                2 !== ee.current.dirty && (ee.current.dirty = 2);
            }, [es, ee]),
            (0, r.jsxs)("div", {
                ref: J,
                onScroll: eA,
                className: l()(B, { [e]: !0, [t]: V, [N.qw]: X }),
                style: (0, g.Ay)(H),
                ...$,
                children: [
                    W?.(es) ?? null,
                    (0, a.useMemo)(() => {
                        let e = (0, r.jsx)("div", {
                            style: { height: es },
                            className: N.Qs,
                            ref: q,
                            children: Object.keys(ea).map((e) => {
                                let t = parseInt(e.replace(/^__section__/, ""), 10),
                                    n = ei[e],
                                    i = ea[e],
                                    a = ei[_(t)],
                                    s = P?.(t);
                                return null != n && null != i
                                    ? (0, r.jsxs)(
                                          "div",
                                          {
                                              ...s,
                                              style: { ...n, ...(s?.style ?? {}) },
                                              children: [
                                                  null != b && null != a && b(t, a, e),
                                                  i.map((e) => {
                                                      let [t, n, i] = e,
                                                          r = ei[t];
                                                      return null != r ? M(n, i, r, t, er) : null;
                                                  }),
                                              ],
                                          },
                                          e,
                                      )
                                    : null;
                            }),
                        });
                        return K ? e : (0, r.jsx)(S.xp, { containerRef: q, children: e });
                    }, [ea, M, b, ei, es, P, er, K]),
                ],
            })
        );
    });
}
let O = C(N.yL, N.Rv, window.ResizeObserver ?? i.t);
C(N.qZ, N.Rv, window.ResizeObserver ?? i.t);
