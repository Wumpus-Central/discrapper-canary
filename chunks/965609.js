"use strict";
n.d(t, { Ay: () => o, EL: () => l, Vd: () => s, tx: () => i }), n(321073), n(667532);
let r = (e) => `__section__${e}`,
    i = (e) => `__section_header__${e}`,
    s = (e) => parseInt(e.replace(/^__section__/, ""), 10),
    a = () => 0;
class o {
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
            itemGutter: r = this.itemGutter,
            removeEdgeItemGutters: i = this.removeEdgeItemGutters,
            getItemKey: s = this.getItemKey,
            getItemHeight: a = this.getItemHeight,
            getSectionHeight: o = this.getSectionHeight,
            bufferWidth: l = this.bufferWidth,
            padding: u = this.padding,
            paddingVertical: c = this.paddingVertical,
            paddingHorizontal: d = this.paddingHorizontal,
            marginLeft: _ = this.marginLeft,
            sectionGutter: f = this.sectionGutter,
            dir: p = this.dir,
        } = e;
        (this.sections !== t ||
            this.columns !== n ||
            this.itemGutter !== r ||
            this.removeEdgeItemGutters !== i ||
            this.getItemKey !== s ||
            this.getSectionHeight !== o ||
            this.getItemHeight !== a ||
            this.bufferWidth !== l ||
            this.padding !== u ||
            this.paddingVertical !== c ||
            this.paddingHorizontal !== d ||
            this.marginLeft !== _ ||
            this.sectionGutter !== f ||
            this.dir !== p) &&
            ((this.needsFullCompute = !0),
            (this.sections = t),
            (this.columns = n),
            (this.itemGutter = r),
            (this.getItemKey = s),
            (this.getSectionHeight = o),
            (this.getItemHeight = a),
            (this.bufferWidth = l),
            (this.padding = u),
            (this.paddingVertical = c),
            (this.paddingHorizontal = d),
            (this.marginLeft = _),
            (this.sectionGutter = f),
            (this.dir = p));
    }
    computeFullCoords() {
        if (!this.needsFullCompute) return;
        let {
                columns: e,
                getItemKey: t,
                getItemHeight: n,
                itemGutter: s,
                getSectionHeight: a,
                bufferWidth: o,
                removeEdgeItemGutters: l,
            } = this,
            u = "rtl" === this.dir ? "right" : "left";
        (this.coordsMap = {}),
            (this.gridData = { boundaries: [], coordinates: {} }),
            (this.currentRow = 0),
            (this.lastColumnIndex = 0);
        let c = this.getPaddingTop(),
            d = this.getPaddingBottom(),
            _ = this.getPaddingLeft(),
            f = this.getPaddingRight(),
            p = this.marginLeft ?? 0;
        (this.columnHeights = Array(e).fill(c)),
            (this.columnWidth = (o - f - _ - s * (e - 1) - (l ? s : 0)) / e),
            (this.itemGrid = []);
        let h = 0;
        for (; h < this.sections.length; ) {
            (this.gridData.boundaries[h] = this.currentRow), (this.currentRow = 0), (this.lastColumnIndex = 0);
            let o = this.sections[h],
                l = 0,
                c = a(h),
                d = this.getMaxColumnHeight(this.columnHeights);
            h > 0 && (d = d - s + this.getSectionGutter());
            let m = c > 0 ? c + s : 0;
            for (let e = 0; e < this.columnHeights.length; e++) this.columnHeights[e] = d + m;
            for (; l < o; ) {
                var E;
                let e = t(h, l);
                if (null == e) {
                    l++;
                    continue;
                }
                let [r, i] = (E = this.columnHeights).reduce((e, t, n) => (t < e[0] ? [t, n] : e), [E[0], 0]);
                i < this.lastColumnIndex && this.currentRow++, (this.lastColumnIndex = i);
                let a = n(h, l, this.columnWidth),
                    o = {
                        position: "absolute",
                        [u]: this.columnWidth * i + s * (i + 1) - s + _,
                        width: this.columnWidth,
                        top: r - d,
                        height: a,
                    },
                    c = { section: h, row: this.currentRow, column: i };
                (this.coordsMap[e] = o),
                    (this.gridData.coordinates[e] = c),
                    (this.columnHeights[i] = r + a + s),
                    (this.itemGrid[i] = this.itemGrid[i] ?? []),
                    this.itemGrid[i].push(e),
                    l++;
            }
            c > 0 &&
                (this.coordsMap[i(h)] = {
                    position: "sticky",
                    [u]: _,
                    width: this.columnWidth * e + s * e,
                    top: 0,
                    height: c,
                }),
                (this.coordsMap[r(h)] = {
                    position: "absolute",
                    [u]: p,
                    width: this.columnWidth * e + s * (e - 1) + _ + f,
                    top: d,
                    height: this.getMaxColumnHeight(this.columnHeights) - d,
                }),
                h++;
        }
        (this.columnHeights = this.columnHeights.map((e) => e - s + d)),
            (this.totalHeight = this.getMaxColumnHeight()),
            (this.visibleSections = {}),
            (this.needsFullCompute = !1);
    }
    computeVisibleSections(e, t) {
        this.computeFullCoords();
        let { getItemKey: n, coordsMap: i } = this;
        this.visibleSections = {};
        let s = 0;
        for (; s < this.sections.length; ) {
            let a = this.sections[s],
                o = r(s),
                l = i[o];
            if (null == l) {
                s++;
                continue;
            }
            let { top: u } = l,
                c = u + l.height;
            if (u > t) break;
            if (c < e) {
                s++;
                continue;
            }
            let d = 0,
                _ = 1;
            for (c < t && c > e && ((d = a - 1), (_ = -1)), this.visibleSections[o] = []; d >= 0 && d < a; ) {
                let r = n(s, d),
                    a = null != r ? i[r] : null;
                if (null == r || null == a) {
                    d += _;
                    continue;
                }
                let { top: l, height: c } = a;
                l + u > e - c &&
                    l + u < t &&
                    (-1 === _ ? this.visibleSections[o].unshift([r, s, d]) : this.visibleSections[o].push([r, s, d])),
                    (d += _);
            }
            if (u < e && c > t) break;
            s++;
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
function l(e, t, n) {
    let r = {},
        i = {};
    for (let i in e)
        if (null == t[i]) r[i] = e[i];
        else {
            let r = e[i],
                s = t[i];
            for (let e = 0; e < r.length; e++) {
                let [t] = r[e];
                s.some((e) => {
                    let [n] = e;
                    return t === n;
                }) || n(r[e][1], r[e][2], !0);
            }
        }
    for (let r in t)
        if (null == e[r]) i[r] = t[r];
        else {
            let i = e[r],
                s = t[r];
            for (let e = 0; e < s.length; e++) {
                let [t] = s[e];
                i.some((e) => {
                    let [n] = e;
                    return n === t;
                }) || n(s[e][1], s[e][2], !1);
            }
        }
}
