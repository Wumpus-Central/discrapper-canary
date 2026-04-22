i.d(e, { Ay: () => o, EL: () => h, Vd: () => l, tx: () => n }), i(321073), i(667532);
let s = (t) => `__section__${t}`,
    n = (t) => `__section_header__${t}`,
    l = (t) => parseInt(t.replace(/^__section__/, ""), 10),
    r = () => 0;
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
    getSectionHeight = r;
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
                itemGutter: l,
                getSectionHeight: r,
                bufferWidth: o,
                removeEdgeItemGutters: h,
            } = this,
            u = "rtl" === this.dir ? "right" : "left";
        (this.coordsMap = {}),
            (this.gridData = { boundaries: [], coordinates: {} }),
            (this.currentRow = 0),
            (this.lastColumnIndex = 0);
        let d = this.getPaddingTop(),
            a = this.getPaddingBottom(),
            c = this.getPaddingLeft(),
            g = this.getPaddingRight(),
            m = this.marginLeft ?? 0;
        (this.columnHeights = Array(t).fill(d)),
            (this.columnWidth = (o - g - c - l * (t - 1) - (h ? l : 0)) / t),
            (this.itemGrid = []);
        let p = 0;
        for (; p < this.sections.length; ) {
            (this.gridData.boundaries[p] = this.currentRow), (this.currentRow = 0), (this.lastColumnIndex = 0);
            let o = this.sections[p],
                h = 0,
                d = r(p),
                a = this.getMaxColumnHeight(this.columnHeights);
            p > 0 && (a = a - l + this.getSectionGutter());
            let b = d > 0 ? d + l : 0;
            for (let t = 0; t < this.columnHeights.length; t++) this.columnHeights[t] = a + b;
            for (; h < o; ) {
                var f;
                let t = e(p, h);
                if (null == t) {
                    h++;
                    continue;
                }
                let [s, n] = (f = this.columnHeights).reduce((t, e, i) => (e < t[0] ? [e, i] : t), [f[0], 0]);
                n < this.lastColumnIndex && this.currentRow++, (this.lastColumnIndex = n);
                let r = i(p, h, this.columnWidth),
                    o = {
                        position: "absolute",
                        [u]: this.columnWidth * n + l * (n + 1) - l + c,
                        width: this.columnWidth,
                        top: s - a,
                        height: r,
                    },
                    d = { section: p, row: this.currentRow, column: n };
                (this.coordsMap[t] = o),
                    (this.gridData.coordinates[t] = d),
                    (this.columnHeights[n] = s + r + l),
                    (this.itemGrid[n] = this.itemGrid[n] ?? []),
                    this.itemGrid[n].push(t),
                    h++;
            }
            d > 0 &&
                (this.coordsMap[n(p)] = {
                    position: "sticky",
                    [u]: c,
                    width: this.columnWidth * t + l * t,
                    top: 0,
                    height: d,
                }),
                (this.coordsMap[s(p)] = {
                    position: "absolute",
                    [u]: m,
                    width: this.columnWidth * t + l * (t - 1) + c + g,
                    top: a,
                    height: this.getMaxColumnHeight(this.columnHeights) - a,
                }),
                p++;
        }
        (this.columnHeights = this.columnHeights.map((t) => t - l + a)),
            (this.totalHeight = this.getMaxColumnHeight()),
            (this.visibleSections = {}),
            (this.needsFullCompute = !1);
    }
    computeVisibleSections(t, e) {
        this.computeFullCoords();
        let { getItemKey: i, coordsMap: n } = this;
        this.visibleSections = {};
        let l = 0;
        for (; l < this.sections.length; ) {
            let r = this.sections[l],
                o = s(l),
                h = n[o];
            if (null == h) {
                l++;
                continue;
            }
            let { top: u } = h,
                d = u + h.height;
            if (u > e) break;
            if (d < t) {
                l++;
                continue;
            }
            let a = 0,
                c = 1;
            for (d < e && d > t && ((a = r - 1), (c = -1)), this.visibleSections[o] = []; a >= 0 && a < r; ) {
                let s = i(l, a),
                    r = null != s ? n[s] : null;
                if (null == s || null == r) {
                    a += c;
                    continue;
                }
                let { top: h, height: d } = r;
                h + u > t - d &&
                    h + u < e &&
                    (-1 === c ? this.visibleSections[o].unshift([s, l, a]) : this.visibleSections[o].push([s, l, a])),
                    (a += c);
            }
            if (u < t && d > e) break;
            l++;
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
function h(t, e, i) {
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
}
