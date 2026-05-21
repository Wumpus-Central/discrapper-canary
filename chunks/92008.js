"use strict";
n.d(t, { f: () => C });
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
    f = () => 0;
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
    getSectionHeight = f;
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
            sectionGutter: f = this.sectionGutter,
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
            this.padding !== u ||
            this.paddingVertical !== c ||
            this.paddingHorizontal !== d ||
            this.marginLeft !== _ ||
            this.sectionGutter !== f ||
            this.dir !== h) &&
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
            (this.sectionGutter = f),
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
            u = this.getPaddingBottom(),
            c = this.getPaddingLeft(),
            f = this.getPaddingRight(),
            h = this.marginLeft ?? 0;
        (this.columnHeights = Array(e).fill(l)),
            (this.columnWidth = (s - f - c - i * (e - 1) - (a ? i : 0)) / e),
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
                    [o]: h,
                    width: this.columnWidth * e + i * (e - 1) + c + f,
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
    N = n(457845);
function y(e, t, n) {
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
                onScroll: f,
                dir: y = "ltr",
                sections: C,
                columns: v,
                getItemKey: O,
                getItemHeight: R,
                getSectionHeight: b,
                chunkSize: D,
                renderSection: L,
                renderItem: w,
                getSectionProps: M,
                itemGutter: P,
                removeEdgeItemGutters: x,
                sectionGutter: U,
                padding: k,
                paddingVertical: G,
                paddingHorizontal: F,
                fade: V = !1,
                className: B,
                style: H,
                maxContentWidth: j,
                renderAccessory: Y,
                onItemVisibilityChange: W,
                ...K
            } = n,
            z = s.useRef(null),
            $ = s.useRef(null),
            q = s.useRef({}),
            [Z, X] = s.useState(!1),
            { scrollerRef: Q, scrollerState: J, getScrollerState: ee } = (0, u.A)();
        (0, c.A)({ scrollerRef: Q, className: B, specs: i, orientation: "vertical", dir: y });
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
                    maxBufferWidth: u,
                    itemGutter: c,
                    removeEdgeItemGutters: d,
                    sectionGutter: _,
                    padding: f,
                    paddingVertical: g,
                    paddingHorizontal: A,
                    dir: I,
                } = e,
                T = (0, p.A)(),
                S = (0, s.useRef)(m),
                [N] = (0, s.useState)(() => new h()),
                y = l(),
                C = Math.min(u ?? 1 / 0, y.offsetWidth),
                v = null != u ? Math.max(0, y.offsetWidth - u) : 0,
                {
                    dirty: O,
                    chunkStart: R,
                    chunkEnd: b,
                    forceUpdateOnChunkChange: D,
                } = (0, E.A)({ chunkSize: o, getScrollerState: l, forceUpdate: T });
            return (
                (S.current = (0, s.useMemo)(
                    () =>
                        O > 0
                            ? S.current
                            : (N.mergeProps({
                                  sections: t,
                                  columns: n,
                                  getItemKey: i,
                                  getItemHeight: r,
                                  getSectionHeight: a,
                                  bufferWidth: C,
                                  itemGutter: c,
                                  removeEdgeItemGutters: d,
                                  sectionGutter: _,
                                  padding: f,
                                  paddingVertical: g,
                                  paddingHorizontal: A,
                                  marginLeft: v / 2,
                                  dir: I,
                              }),
                              N.computeVisibleSections(Math.max(0, R * o), b * o),
                              N.getState()),
                    [O, N, t, n, i, r, a, R, b, o, c, d, _, f, g, A, C, v, I],
                )),
                { ...S.current, masonryComputer: N, forceUpdateOnChunkChange: D, forceUpdate: T }
            );
        })({
            sections: C,
            columns: v,
            getItemKey: O,
            getItemHeight: R,
            getSectionHeight: b,
            chunkSize: D,
            itemGutter: P,
            removeEdgeItemGutters: x,
            sectionGutter: U,
            padding: k,
            paddingVertical: G,
            paddingHorizontal: F,
            getScrollerState: ee,
            dir: y,
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
                })(er, q.current, W),
                (q.current = er);
        }, [er, W]);
        let el = (0, s.useCallback)(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > J.current.dirty && (J.current.dirty = e), 2 === e ? ea() : et(1);
                },
                [et, J, ea],
            ),
            eu = (0, g.A)(Q),
            ec = (0, s.useCallback)(() => eo.itemGrid, [eo]),
            ed = (0, s.useCallback)(() => eo.coordsMap, [eo]),
            e_ = s.useCallback(() => el(), [el]);
        (0, A.A)({ ref: Q, key: "container", onUpdate: e_, resizeObserver: d, listenerMap: a }),
            (0, s.useImperativeHandle)(
                l,
                () => ({
                    getScrollerNode: () => Q.current,
                    getItemGrid: ec,
                    getCoordsMap: ed,
                    getScrollerState: ee,
                    ...(0, I.A)(Q, ee, eu),
                }),
                [Q, ee, ec, eu, ed],
            );
        let ef = (0, s.useCallback)(
            (e) => {
                el(1),
                    null == z.current ? X(!0) : clearTimeout(z.current),
                    (z.current = setTimeout(() => {
                        (z.current = null), X(!1);
                    }, 200)),
                    null != f && f(e);
            },
            [f, el],
        );
        return (
            s.useLayoutEffect(() => {
                2 !== J.current.dirty && (J.current.dirty = 2);
            }, [es, J]),
            (0, r.jsxs)("div", {
                ref: Q,
                onScroll: ef,
                className: o()(B, { [e]: !0, [t]: V, [N.qw]: Z }),
                style: (0, T.Ay)(H),
                ...K,
                children: [
                    Y?.(es) ?? null,
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
                                            s = en[_(t)],
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
                        [er, w, L, en, es, M, ei],
                    ),
                ],
            })
        );
    });
}
let C = y(N.yL, N.Rv, window.ResizeObserver ?? i.t);
y(N.qZ, N.Rv, window.ResizeObserver ?? i.t);
