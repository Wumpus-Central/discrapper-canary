"use strict";
n.d(t, { Ay: () => l, EL: () => u, Vd: () => a, tx: () => i }), n(321073), n(667532);
let r = (e) => `__section__${e}`,
    i = (e) => `__section_header__${e}`,
    a = (e) => parseInt(e.replace(/^__section__/, ""), 10);
function s(e) {
    return e.reduce((e, t, n) => (t < e[0] ? [t, n] : e), [e[0], 0]);
}
let o = () => 0;
class l {
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
    getSectionHeight = o;
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
            getItemKey: a = this.getItemKey,
            getItemHeight: s = this.getItemHeight,
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
            this.getItemKey !== a ||
            this.getSectionHeight !== o ||
            this.getItemHeight !== s ||
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
            (this.getItemKey = a),
            (this.getSectionHeight = o),
            (this.getItemHeight = s),
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
                itemGutter: a,
                getSectionHeight: o,
                bufferWidth: l,
                removeEdgeItemGutters: u,
            } = this,
            c = "rtl" === this.dir ? "right" : "left";
        (this.coordsMap = {}),
            (this.gridData = { boundaries: [], coordinates: {} }),
            (this.currentRow = 0),
            (this.lastColumnIndex = 0);
        let d = this.getPaddingTop(),
            _ = this.getPaddingBottom(),
            f = this.getPaddingLeft(),
            p = this.getPaddingRight(),
            h = this.marginLeft ?? 0;
        (this.columnHeights = Array(e).fill(d)),
            (this.columnWidth = (l - p - f - a * (e - 1) - (u ? a : 0)) / e),
            (this.itemGrid = []);
        let m = 0;
        for (; m < this.sections.length; ) {
            (this.gridData.boundaries[m] = this.currentRow), (this.currentRow = 0), (this.lastColumnIndex = 0);
            let l = this.sections[m],
                u = 0,
                d = o(m),
                _ = this.getMaxColumnHeight(this.columnHeights);
            m > 0 && (_ = _ - a + this.getSectionGutter());
            let g = d > 0 ? d + a : 0;
            for (let e = 0; e < this.columnHeights.length; e++) this.columnHeights[e] = _ + g;
            for (; u < l; ) {
                let e = t(m, u);
                if (null == e) {
                    u++;
                    continue;
                }
                let [r, i] = s(this.columnHeights);
                i < this.lastColumnIndex && this.currentRow++, (this.lastColumnIndex = i);
                let o = n(m, u, this.columnWidth),
                    l = {
                        position: "absolute",
                        [c]: this.columnWidth * i + a * (i + 1) - a + f,
                        width: this.columnWidth,
                        top: r - _,
                        height: o,
                    },
                    d = { section: m, row: this.currentRow, column: i };
                (this.coordsMap[e] = l),
                    (this.gridData.coordinates[e] = d),
                    (this.columnHeights[i] = r + o + a),
                    (this.itemGrid[i] = this.itemGrid[i] ?? []),
                    this.itemGrid[i].push(e),
                    u++;
            }
            d > 0 &&
                (this.coordsMap[i(m)] = {
                    position: "sticky",
                    [c]: f,
                    width: this.columnWidth * e + a * e,
                    top: 0,
                    height: d,
                }),
                (this.coordsMap[r(m)] = {
                    position: "absolute",
                    [c]: h,
                    width: this.columnWidth * e + a * (e - 1) + f + p,
                    top: _,
                    height: this.getMaxColumnHeight(this.columnHeights) - _,
                }),
                m++;
        }
        (this.columnHeights = this.columnHeights.map((e) => e - a + _)),
            (this.totalHeight = this.getMaxColumnHeight()),
            (this.visibleSections = {}),
            (this.needsFullCompute = !1);
    }
    computeVisibleSections(e, t) {
        this.computeFullCoords();
        let { getItemKey: n, coordsMap: i } = this;
        this.visibleSections = {};
        let a = 0;
        for (; a < this.sections.length; ) {
            let s = this.sections[a],
                o = r(a),
                l = i[o];
            if (null == l) {
                a++;
                continue;
            }
            let { top: u } = l,
                c = u + l.height;
            if (u > t) break;
            if (c < e) {
                a++;
                continue;
            }
            let d = 0,
                _ = 1;
            for (c < t && c > e && ((d = s - 1), (_ = -1)), this.visibleSections[o] = []; d >= 0 && d < s; ) {
                let r = n(a, d),
                    s = null != r ? i[r] : null;
                if (null == r || null == s) {
                    d += _;
                    continue;
                }
                let { top: l, height: c } = s;
                l + u > e - c &&
                    l + u < t &&
                    (-1 === _ ? this.visibleSections[o].unshift([r, a, d]) : this.visibleSections[o].push([r, a, d])),
                    (d += _);
            }
            if (u < e && c > t) break;
            a++;
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
function u(e, t, n) {
    let r = {},
        i = {};
    for (let i in e)
        if (null == t[i]) r[i] = e[i];
        else {
            let r = e[i],
                a = t[i];
            for (let e = 0; e < r.length; e++) {
                let [t] = r[e];
                a.some((e) => {
                    let [n] = e;
                    return t === n;
                }) || n(r[e][1], r[e][2], !0);
            }
        }
    for (let r in t)
        if (null == e[r]) i[r] = t[r];
        else {
            let i = e[r],
                a = t[r];
            for (let e = 0; e < a.length; e++) {
                let [t] = a[e];
                i.some((e) => {
                    let [n] = e;
                    return n === t;
                }) || n(a[e][1], a[e][2], !1);
            }
        }
}
