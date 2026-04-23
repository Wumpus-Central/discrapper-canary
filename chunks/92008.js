"use strict";
n.d(t, { f: () => R });
var i = n(446837),
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(936005),
    d = n(154327),
    _ = n(518898);
n(321073), n(667532);
let u = (e) => `__section__${e}`,
    c = (e) => `__section_header__${e}`,
    E = () => 0;
class h {
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
            getItemKey: s = this.getItemKey,
            getItemHeight: a = this.getItemHeight,
            getSectionHeight: o = this.getSectionHeight,
            bufferWidth: l = this.bufferWidth,
            padding: d = this.padding,
            paddingVertical: _ = this.paddingVertical,
            paddingHorizontal: u = this.paddingHorizontal,
            marginLeft: c = this.marginLeft,
            sectionGutter: E = this.sectionGutter,
            dir: h = this.dir,
        } = e;
        (this.sections !== t ||
            this.columns !== n ||
            this.itemGutter !== i ||
            this.removeEdgeItemGutters !== r ||
            this.getItemKey !== s ||
            this.getSectionHeight !== o ||
            this.getItemHeight !== a ||
            this.bufferWidth !== l ||
            this.padding !== d ||
            this.paddingVertical !== _ ||
            this.paddingHorizontal !== u ||
            this.marginLeft !== c ||
            this.sectionGutter !== E ||
            this.dir !== h) &&
            ((this.needsFullCompute = !0),
            (this.sections = t),
            (this.columns = n),
            (this.itemGutter = i),
            (this.getItemKey = s),
            (this.getSectionHeight = o),
            (this.getItemHeight = a),
            (this.bufferWidth = l),
            (this.padding = d),
            (this.paddingVertical = _),
            (this.paddingHorizontal = u),
            (this.marginLeft = c),
            (this.sectionGutter = E),
            (this.dir = h));
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
            d = this.getPaddingBottom(),
            _ = this.getPaddingLeft(),
            E = this.getPaddingRight(),
            h = this.marginLeft ?? 0;
        (this.columnHeights = Array(e).fill(l)),
            (this.columnWidth = (s - E - _ - i * (e - 1) - (a ? i : 0)) / e),
            (this.itemGrid = []);
        let m = 0;
        for (; m < this.sections.length; ) {
            (this.gridData.boundaries[m] = this.currentRow), (this.currentRow = 0), (this.lastColumnIndex = 0);
            let s = this.sections[m],
                a = 0,
                l = r(m),
                d = this.getMaxColumnHeight(this.columnHeights);
            m > 0 && (d = d - i + this.getSectionGutter());
            let g = l > 0 ? l + i : 0;
            for (let e = 0; e < this.columnHeights.length; e++) this.columnHeights[e] = d + g;
            for (; a < s; ) {
                var f;
                let e = t(m, a);
                if (null == e) {
                    a++;
                    continue;
                }
                let [r, s] = (f = this.columnHeights).reduce((e, t, n) => (t < e[0] ? [t, n] : e), [f[0], 0]);
                s < this.lastColumnIndex && this.currentRow++, (this.lastColumnIndex = s);
                let l = n(m, a, this.columnWidth),
                    u = {
                        position: "absolute",
                        [o]: this.columnWidth * s + i * (s + 1) - i + _,
                        width: this.columnWidth,
                        top: r - d,
                        height: l,
                    },
                    c = { section: m, row: this.currentRow, column: s };
                (this.coordsMap[e] = u),
                    (this.gridData.coordinates[e] = c),
                    (this.columnHeights[s] = r + l + i),
                    (this.itemGrid[s] = this.itemGrid[s] ?? []),
                    this.itemGrid[s].push(e),
                    a++;
            }
            l > 0 &&
                (this.coordsMap[c(m)] = {
                    position: "sticky",
                    [o]: _,
                    width: this.columnWidth * e + i * e,
                    top: 0,
                    height: l,
                }),
                (this.coordsMap[u(m)] = {
                    position: "absolute",
                    [o]: h,
                    width: this.columnWidth * e + i * (e - 1) + _ + E,
                    top: d,
                    height: this.getMaxColumnHeight(this.columnHeights) - d,
                }),
                m++;
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
            let s = this.sections[r],
                a = u(r),
                o = i[a];
            if (null == o) {
                r++;
                continue;
            }
            let { top: l } = o,
                d = l + o.height;
            if (l > t) break;
            if (d < e) {
                r++;
                continue;
            }
            let _ = 0,
                c = 1;
            for (d < t && d > e && ((_ = s - 1), (c = -1)), this.visibleSections[a] = []; _ >= 0 && _ < s; ) {
                let s = n(r, _),
                    o = null != s ? i[s] : null;
                if (null == s || null == o) {
                    _ += c;
                    continue;
                }
                let { top: d, height: u } = o;
                d + l > e - u &&
                    d + l < t &&
                    (-1 === c ? this.visibleSections[a].unshift([s, r, _]) : this.visibleSections[a].push([s, r, _])),
                    (_ += c);
            }
            if (l < e && d > t) break;
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
var m = n(484702),
    f = n(403431);
let g = Object.freeze({
    coordsMap: {},
    visibleSections: {},
    totalHeight: 0,
    gridData: { boundaries: [], coordinates: {} },
});
var p = n(789279),
    A = n(448539),
    I = n(584648),
    T = n(751591),
    S = n(187322),
    N = n(457845);
function C(e, t, n) {
    let i = (0, l.A)(e),
        a = new Map(),
        u = new n((e) => {
            e.forEach((e) => {
                let { target: t } = e;
                a.get(t)?.(e);
            });
        });
    return (0, s.forwardRef)(function (n, l) {
        let {
                onScroll: E,
                dir: C = "ltr",
                sections: R,
                columns: O,
                getItemKey: y,
                getItemHeight: v,
                getSectionHeight: D,
                chunkSize: L,
                renderSection: b,
                renderItem: w,
                getSectionProps: P,
                itemGutter: k,
                removeEdgeItemGutters: M,
                sectionGutter: U,
                padding: x,
                paddingVertical: G,
                paddingHorizontal: V,
                fade: F = !1,
                className: B,
                style: H,
                maxContentWidth: j,
                renderAccessory: W,
                onItemVisibilityChange: Y,
                ...K
            } = n,
            z = s.useRef(null),
            $ = s.useRef(null),
            q = s.useRef({}),
            [X, Z] = s.useState(!1),
            { scrollerRef: Q, scrollerState: J, getScrollerState: ee } = (0, d.A)();
        (0, _.A)({ scrollerRef: Q, className: B, specs: i, orientation: "vertical", dir: C });
        let {
            forceUpdateOnChunkChange: et,
            coordsMap: en,
            gridData: ei,
            visibleSections: er,
            totalHeight: es,
            forceUpdate: ea,
            masonryComputer: eo,
        } = (function (e) {
            let {
                    sections: t,
                    columns: n,
                    getItemKey: i,
                    getItemHeight: r,
                    getSectionHeight: a,
                    chunkSize: o = 250,
                    getScrollerState: l,
                    maxBufferWidth: d,
                    itemGutter: _,
                    removeEdgeItemGutters: u,
                    sectionGutter: c,
                    padding: E,
                    paddingVertical: p,
                    paddingHorizontal: A,
                    dir: I,
                } = e,
                T = (0, m.A)(),
                S = (0, s.useRef)(g),
                [N] = (0, s.useState)(() => new h()),
                C = l(),
                R = Math.min(d ?? 1 / 0, C.offsetWidth),
                O = null != d ? Math.max(0, C.offsetWidth - d) : 0,
                {
                    dirty: y,
                    chunkStart: v,
                    chunkEnd: D,
                    forceUpdateOnChunkChange: L,
                } = (0, f.A)({ chunkSize: o, getScrollerState: l, forceUpdate: T });
            return (
                (S.current = (0, s.useMemo)(
                    () =>
                        y > 0
                            ? S.current
                            : (N.mergeProps({
                                  sections: t,
                                  columns: n,
                                  getItemKey: i,
                                  getItemHeight: r,
                                  getSectionHeight: a,
                                  bufferWidth: R,
                                  itemGutter: _,
                                  removeEdgeItemGutters: u,
                                  sectionGutter: c,
                                  padding: E,
                                  paddingVertical: p,
                                  paddingHorizontal: A,
                                  marginLeft: O / 2,
                                  dir: I,
                              }),
                              N.computeVisibleSections(Math.max(0, v * o), D * o),
                              N.getState()),
                    [y, N, t, n, i, r, a, v, D, o, _, u, c, E, p, A, R, O, I],
                )),
                { ...S.current, masonryComputer: N, forceUpdateOnChunkChange: L, forceUpdate: T }
            );
        })({
            sections: R,
            columns: O,
            getItemKey: y,
            getItemHeight: v,
            getSectionHeight: D,
            chunkSize: L,
            itemGutter: k,
            removeEdgeItemGutters: M,
            sectionGutter: U,
            padding: x,
            paddingVertical: G,
            paddingHorizontal: V,
            getScrollerState: ee,
            dir: C,
            maxBufferWidth: j,
        });
        s.useEffect(() => {
            null != Y &&
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
                })(er, q.current, Y),
                (q.current = er);
        }, [er, Y]);
        let el = (0, s.useCallback)(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > J.current.dirty && (J.current.dirty = e), 2 === e ? ea() : et(1);
                },
                [et, J, ea],
            ),
            ed = (0, p.A)(Q),
            e_ = (0, s.useCallback)(() => eo.itemGrid, [eo]),
            eu = (0, s.useCallback)(() => eo.coordsMap, [eo]),
            ec = s.useCallback(() => el(), [el]);
        (0, A.A)({ ref: Q, key: "container", onUpdate: ec, resizeObserver: u, listenerMap: a }),
            (0, s.useImperativeHandle)(
                l,
                () => ({
                    getScrollerNode: () => Q.current,
                    getItemGrid: e_,
                    getCoordsMap: eu,
                    getScrollerState: ee,
                    ...(0, I.A)(Q, ee, ed),
                }),
                [Q, ee, e_, ed, eu],
            );
        let eE = (0, s.useCallback)(
            (e) => {
                el(1),
                    null == z.current ? Z(!0) : clearTimeout(z.current),
                    (z.current = setTimeout(() => {
                        (z.current = null), Z(!1);
                    }, 200)),
                    null != E && E(e);
            },
            [E, el],
        );
        return (
            s.useLayoutEffect(() => {
                2 !== J.current.dirty && (J.current.dirty = 2);
            }, [es, J]),
            (0, r.jsxs)("div", {
                ref: Q,
                onScroll: eE,
                className: o()(B, { [e]: !0, [t]: F, [N.qw]: X }),
                style: (0, T.Ay)(H),
                ...K,
                children: [
                    W?.(es) ?? null,
                    (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(S.xp, {
                                containerRef: $,
                                children: (0, r.jsx)("div", {
                                    style: { height: es },
                                    className: N.Qs,
                                    ref: $,
                                    children: Object.keys(er).map((e) => {
                                        let t = parseInt(e.replace(/^__section__/, ""), 10),
                                            n = en[e],
                                            i = er[e],
                                            s = en[c(t)],
                                            a = P?.(t);
                                        return null != n && null != i
                                            ? (0, r.jsxs)(
                                                  "div",
                                                  {
                                                      ...a,
                                                      style: { ...n, ...(a?.style ?? {}) },
                                                      children: [
                                                          null != b && null != s && b(t, s, e),
                                                          i.map((e) => {
                                                              let [t, n, i] = e,
                                                                  r = en[t];
                                                              return null != r ? w(n, i, r, t, ei) : null;
                                                          }),
                                                      ],
                                                  },
                                                  e,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                        [er, w, b, en, es, P, ei],
                    ),
                ],
            })
        );
    });
}
let R = C(N.yL, N.Rv, window.ResizeObserver ?? i.t);
C(N.qZ, N.Rv, window.ResizeObserver ?? i.t);
