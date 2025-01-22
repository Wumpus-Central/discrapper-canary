r.d(n, {
    GL: function () {
        return g;
    }
});
var i = r(633064),
    a = r(192379),
    o = r(942069);
function s(e) {
    return null != e && (!isNaN(e) || null !== String(e).match(/^(\d+)(?=%$)/));
}
function l(e) {
    if (!e) return 1;
    let n = e.match(/^(.+)(?=fr$)/);
    return n ? parseFloat(n[0]) : (console.warn(`width: ${e} is not a supported format, width should be a number (ex. 150), percentage (ex. '50%') or fr unit (ex. '2fr')`, "defaulting to '1fr'"), 1);
}
function u(e, n) {
    if ('string' == typeof e) {
        let r = e.match(/^(\d+)(?=%$)/);
        if (!r) throw Error('Only percentages or numbers are supported for static column widths');
        return n * (parseFloat(r[0]) / 100);
    }
    return e;
}
function c(e, n) {
    return null != e ? u(e, n) : Number.MAX_SAFE_INTEGER;
}
function d(e, n) {
    return null != e ? u(e, n) : 0;
}
function f(e, n, r, i, a) {
    let o = !1,
        f = n.map((n, f) => {
            var p, h, _, m, g;
            let E = null != r.get(n.key) ? r.get(n.key) : null !== (_ = null !== (h = null !== (p = n.width) && void 0 !== p ? p : n.defaultWidth) && void 0 !== h ? h : null == i ? void 0 : i(f)) && void 0 !== _ ? _ : '1fr',
                v = !1,
                y = 0,
                b = 0,
                I = null;
            s(E) ? ((y = u(E, e)), (v = !0)) : (b = l(E)) <= 0 && (v = !0);
            let T = d(null !== (g = null !== (m = n.minWidth) && void 0 !== m ? m : null == a ? void 0 : a(f)) && void 0 !== g ? g : 0, e),
                S = c(n.maxWidth, e),
                A = Math.max(T, Math.min(y, S));
            return (
                v ? (I = A) : y > A && ((v = !0), (I = A)),
                !v && (o = !0),
                {
                    frozen: v,
                    baseSize: y,
                    hypotheticalMainSize: A,
                    min: T,
                    max: S,
                    flex: b,
                    targetMainSize: I,
                    violation: 0
                }
            );
        });
    for (; o; ) {
        let n = 0,
            r = 0;
        f.forEach((e) => {
            e.frozen ? (n += e.targetMainSize) : ((n += e.baseSize), (r += e.flex));
        });
        let i = e - n;
        i > 0 &&
            f.forEach((e) => {
                if (!e.frozen) {
                    let n = e.flex / r;
                    e.targetMainSize = e.baseSize + n * i;
                }
            });
        let a = 0;
        f.forEach((e) => {
            if (((e.violation = 0), !e.frozen)) {
                let { min: n, max: r, targetMainSize: i } = e;
                (e.targetMainSize = Math.max(n, Math.min(i, r))), (e.violation = e.targetMainSize - i), (a += e.violation);
            }
        }),
            (o = !1),
            f.forEach((e) => {
                0 === a || Math.sign(a) === Math.sign(e.violation) ? (e.frozen = !0) : !e.frozen && (o = !0);
            });
    }
    return p(f);
}
function p(e) {
    let n = 0,
        r = 0,
        i = [];
    return (
        e.forEach(function (e) {
            let a = e.targetMainSize,
                o = Math.round(a + n) - r;
            (n += a), (r += o), i.push(o);
        }),
        i
    );
}
class h {
    splitColumnsIntoControlledAndUncontrolled(e) {
        return e.reduce((e, n) => (null != n.props.width ? e[0].set(n.key, n) : e[1].set(n.key, n), e), [new Map(), new Map()]);
    }
    recombineColumns(e, n, r, i) {
        return new Map(e.map((e) => (r.has(e.key) ? [e.key, n.get(e.key)] : [e.key, i.get(e.key).props.width])));
    }
    getInitialUncontrolledWidths(e) {
        var n, r;
        return new Map(
            Array.from(e).map(([e, i]) => {
                var a, o;
                return [e, null !== (r = null !== (n = i.props.defaultWidth) && void 0 !== n ? n : null === (o = (a = this).getDefaultWidth) || void 0 === o ? void 0 : o.call(a, i)) && void 0 !== r ? r : '1fr'];
            })
        );
    }
    getColumnWidth(e) {
        var n;
        return null !== (n = this.columnWidths.get(e)) && void 0 !== n ? n : 0;
    }
    getColumnMinWidth(e) {
        return this.columnMinWidths.get(e);
    }
    getColumnMaxWidth(e) {
        return this.columnMaxWidths.get(e);
    }
    resizeColumnWidth(e, n, r, i, a = null, o) {
        let u = this.columnWidths,
            c = 1 / 0,
            d = new Map([...r, ...i]),
            p = new Map(),
            h = new Map(),
            _ = new Map();
        n.columns.forEach((e, r) => {
            var f, m;
            let g, E;
            if ((_.set(e.key, this.getDefaultMinWidth(n.columns[r])), a === e.key || e.props.width || s(i.get(e.key)) ? (a === e.key || s(e.props.width) || i.get(e.key) ? a !== e.key && (null === (f = e.props.width) || void 0 === f ? void 0 : null === (m = f.endsWith) || void 0 === m ? void 0 : m.call(f, '%')) && p.set(e.key, e.props.width) : ((g = e.key), (E = l(e.props.width)))) : ((g = e.key), (E = l(i.get(e.key)))), c < r)) {
                g && h.set(g, E);
                return;
            }
            if (e.key === a) {
                (c = r), d.set(e.key, Math.floor(o));
                return;
            }
            d.set(e.key, u.get(e.key));
        });
        let m = f(
                e,
                n.columns.map((e) => ({
                    ...e.props,
                    key: e.key
                })),
                d,
                (e) => this.getDefaultWidth(n.columns[e]),
                (e) => this.getDefaultMinWidth(n.columns[e])
            ),
            g = new Map();
        return (
            m.forEach((e, r) => {
                let i = n.columns[r].key;
                g.set(i, e);
            }),
            Array.from(h).forEach(([e]) => {
                g.set(e, `${h.get(e)}fr`);
            }),
            Array.from(p).forEach(([e, n]) => {
                e !== a && g.set(e, n);
            }),
            g
        );
    }
    buildColumnWidths(e, n, r) {
        return (
            (this.columnWidths = new Map()),
            (this.columnMinWidths = new Map()),
            (this.columnMaxWidths = new Map()),
            f(
                e,
                n.columns.map((e) => ({
                    ...e.props,
                    key: e.key
                })),
                r,
                (e) => this.getDefaultWidth(n.columns[e]),
                (e) => this.getDefaultMinWidth(n.columns[e])
            ).forEach((r, i) => {
                var a;
                let o = n.columns[i].key,
                    s = n.columns[i];
                this.columnWidths.set(o, r), this.columnMinWidths.set(o, d(null !== (a = s.props.minWidth) && void 0 !== a ? a : this.getDefaultMinWidth(s), e)), this.columnMaxWidths.set(o, c(s.props.maxWidth, e));
            }),
            this.columnWidths
        );
    }
    constructor(e) {
        var n, r;
        (this.columnWidths = new Map()), (this.columnMinWidths = new Map()), (this.columnMaxWidths = new Map()), (this.getDefaultWidth = null !== (n = null == e ? void 0 : e.getDefaultWidth) && void 0 !== n ? n : () => '1fr'), (this.getDefaultMinWidth = null !== (r = null == e ? void 0 : e.getDefaultMinWidth) && void 0 !== r ? r : () => 75);
    }
}
let _ = 'row-header-column-' + Math.random().toString(36).slice(2),
    m = 'row-header-column-' + Math.random().toString(36).slice(2);
for (; _ === m; ) m = 'row-header-column-' + Math.random().toString(36).slice(2);
function g(e, n) {
    if (0 === n.length) return [];
    let r = [],
        i = new Map();
    for (let a of n) {
        let n = a.parentKey,
            o = [a];
        for (; n; ) {
            let r = e.get(n);
            if (!r) break;
            if (i.has(r)) {
                r.colspan++;
                let { column: e, index: n } = i.get(r);
                if (n > o.length) break;
                for (let r = n; r < o.length; r++) e.splice(r, 0, null);
                for (let n = o.length; n < e.length; n++) e[n] && i.has(e[n]) && (i.get(e[n]).index = n);
            } else
                (r.colspan = 1),
                    o.push(r),
                    i.set(r, {
                        column: o,
                        index: o.length - 1
                    });
            n = r.parentKey;
        }
        r.push(o), (a.index = r.length - 1);
    }
    let a = Math.max(...r.map((e) => e.length)),
        o = Array(a)
            .fill(0)
            .map(() => []),
        s = 0;
    for (let e of r) {
        let n = a - 1;
        for (let r of e) {
            if (r) {
                let e = o[n],
                    i = e.reduce((e, n) => e + n.colspan, 0);
                if (i < s) {
                    let a = {
                        type: 'placeholder',
                        key: 'placeholder-' + r.key,
                        colspan: s - i,
                        index: i,
                        value: null,
                        rendered: null,
                        level: n,
                        hasChildNodes: !1,
                        childNodes: [],
                        textValue: null
                    };
                    e.length > 0 && ((e[e.length - 1].nextKey = a.key), (a.prevKey = e[e.length - 1].key)), e.push(a);
                }
                e.length > 0 && ((e[e.length - 1].nextKey = r.key), (r.prevKey = e[e.length - 1].key)), (r.level = n), (r.colIndex = s), e.push(r);
            }
            n--;
        }
        s++;
    }
    let l = 0;
    for (let e of o) {
        let r = e.reduce((e, n) => e + n.colspan, 0);
        if (r < n.length) {
            let i = {
                type: 'placeholder',
                key: 'placeholder-' + e[e.length - 1].key,
                colspan: n.length - r,
                index: r,
                value: null,
                rendered: null,
                level: l,
                hasChildNodes: !1,
                childNodes: [],
                textValue: null,
                prevKey: e[e.length - 1].key
            };
            e.push(i);
        }
        l++;
    }
    return o.map((e, n) => ({
        type: 'headerrow',
        key: 'headerrow-' + n,
        index: n,
        value: null,
        rendered: null,
        level: 0,
        hasChildNodes: !0,
        childNodes: e,
        textValue: null
    }));
}
class E extends o.V {
    *[Symbol.iterator]() {
        yield* this.body.childNodes;
    }
    get size() {
        return this._size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(e) {
        let n = this.keyMap.get(e);
        return n ? n.prevKey : null;
    }
    getKeyAfter(e) {
        let n = this.keyMap.get(e);
        return n ? n.nextKey : null;
    }
    getFirstKey() {
        var e;
        return null === (e = (0, i.l8)(this.body.childNodes)) || void 0 === e ? void 0 : e.key;
    }
    getLastKey() {
        var e;
        return null === (e = (0, i.s)(this.body.childNodes)) || void 0 === e ? void 0 : e.key;
    }
    getItem(e) {
        return this.keyMap.get(e);
    }
    at(e) {
        let n = [...this.getKeys()];
        return this.getItem(n[e]);
    }
    getTextValue(e) {
        let n = this.getItem(e);
        if (!n) return '';
        if (n.textValue) return n.textValue;
        let r = this.rowHeaderColumnKeys;
        if (r) {
            let e = [];
            for (let i of n.childNodes) {
                let n = this.columns[i.index];
                if ((r.has(n.key) && i.textValue && e.push(i.textValue), e.length === r.size)) break;
            }
            return e.join(' ');
        }
        return '';
    }
    constructor(e, n, r) {
        let i,
            a = new Set(),
            o = [];
        if (null == r ? void 0 : r.showSelectionCheckboxes) {
            let e = {
                type: 'column',
                key: _,
                value: null,
                textValue: '',
                level: 0,
                index: (null == r ? void 0 : r.showDragButtons) ? 1 : 0,
                hasChildNodes: !1,
                rendered: null,
                childNodes: [],
                props: { isSelectionCell: !0 }
            };
            o.unshift(e);
        }
        if (null == r ? void 0 : r.showDragButtons) {
            let e = {
                type: 'column',
                key: m,
                value: null,
                textValue: '',
                level: 0,
                index: 0,
                hasChildNodes: !1,
                rendered: null,
                childNodes: [],
                props: { isDragButtonCell: !0 }
            };
            o.unshift(e);
        }
        let s = [],
            l = new Map(),
            u = (e) => {
                switch (e.type) {
                    case 'body':
                        i = e;
                        break;
                    case 'column':
                        l.set(e.key, e), !e.hasChildNodes && (o.push(e), e.props.isRowHeader && a.add(e.key));
                        break;
                    case 'item':
                        s.push(e);
                        return;
                }
                for (let n of e.childNodes) u(n);
            };
        for (let n of e) u(n);
        let c = g(l, o);
        c.forEach((e, n) => s.splice(n, 0, e)),
            super({
                columnCount: o.length,
                items: s,
                visitNode: (e) => ((e.column = o[e.index]), e)
            }),
            (this._size = 0),
            (this.columns = o),
            (this.rowHeaderColumnKeys = a),
            (this.body = i),
            (this.headerRows = c),
            (this._size = [...i.childNodes].length),
            0 === this.rowHeaderColumnKeys.size && ((null == r ? void 0 : r.showSelectionCheckboxes) ? ((null == r ? void 0 : r.showDragButtons) ? this.rowHeaderColumnKeys.add(this.columns[2].key) : this.rowHeaderColumnKeys.add(this.columns[1].key)) : this.rowHeaderColumnKeys.add(this.columns[0].key));
    }
}
let v = null;
function y(e) {
    let [n, r] = $1BfjW$useState(!1),
        { selectionMode: i = 'none', showSelectionCheckboxes: a, showDragButtons: o } = e,
        s = $1BfjW$useMemo(
            () => ({
                showSelectionCheckboxes: a && 'none' !== i,
                showDragButtons: o,
                selectionMode: i,
                columns: []
            }),
            [e.children, a, i, o]
        ),
        l = $1BfjW$useCollection(
            e,
            $1BfjW$useCallback((e) => new E(e, null, s), [s]),
            s
        ),
        { disabledKeys: u, selectionManager: c } = $1BfjW$useGridState({
            ...e,
            collection: l,
            disabledBehavior: e.disabledBehavior || 'selection'
        });
    return {
        collection: l,
        disabledKeys: u,
        selectionManager: c,
        showSelectionCheckboxes: e.showSelectionCheckboxes || !1,
        sortDescriptor: e.sortDescriptor,
        isKeyboardNavigationDisabled: 0 === l.size || n,
        setKeyboardNavigationDisabled: r,
        sort(n, r) {
            var i;
            e.onSortChange({
                column: n,
                direction: null != r ? r : (null === (i = e.sortDescriptor) || void 0 === i ? void 0 : i.column) === n ? v[e.sortDescriptor.direction] : 'ascending'
            });
        }
    };
}
(function e(e) {
    return null;
}).getCollectionNode = function* (e, n) {
    let { children: r, columns: i } = e;
    if (((n.columns = []), 'function' == typeof r)) {
        if (!i) throw Error('props.children was a function but props.columns is missing');
        for (let e of i)
            yield {
                type: 'column',
                value: e,
                renderer: r
            };
    } else {
        let e = [];
        a.Children.forEach(r, (n) => {
            e.push({
                type: 'column',
                element: n
            });
        }),
            yield* e;
    }
};
(function e(e) {
    return null;
}).getCollectionNode = function* (e) {
    let { children: n, items: r } = e;
    yield {
        type: 'body',
        hasChildNodes: !0,
        props: e,
        *childNodes() {
            if ('function' == typeof n) {
                if (!r) throw Error('props.children was a function but props.items is missing');
                for (let e of r)
                    yield {
                        type: 'item',
                        value: e,
                        renderer: n
                    };
            } else {
                let e = [];
                a.Children.forEach(n, (n) => {
                    e.push({
                        type: 'item',
                        element: n
                    });
                }),
                    yield* e;
            }
        }
    };
};
(function e(e) {
    return null;
}).getCollectionNode = function* (e, n) {
    let { title: r, children: i, childColumns: o } = e,
        s = r || i,
        l = e.textValue || ('string' == typeof s ? s : '') || e['aria-label'],
        u = yield {
            type: 'column',
            hasChildNodes: !!o || (r && a.Children.count(i) > 0),
            rendered: s,
            textValue: l,
            props: e,
            *childNodes() {
                if (o)
                    for (let e of o)
                        yield {
                            type: 'column',
                            value: e
                        };
                else if (r) {
                    let e = [];
                    a.Children.forEach(i, (n) => {
                        e.push({
                            type: 'column',
                            element: n
                        });
                    }),
                        yield* e;
                }
            },
            shouldInvalidate: (e) => (c(e), !1)
        },
        c = (e) => {
            for (let n of u) !n.hasChildNodes && e.columns.push(n);
        };
    c(n);
};
function b(e) {
    return null;
}
b.getCollectionNode = function* (e, n) {
    let { children: r, textValue: i, UNSTABLE_childItems: o } = e;
    yield {
        type: 'item',
        props: e,
        textValue: i,
        'aria-label': e['aria-label'],
        hasChildNodes: !0,
        *childNodes() {
            if (
                (n.showDragButtons &&
                    (yield {
                        type: 'cell',
                        key: 'header-drag',
                        props: { isDragButtonCell: !0 }
                    }),
                n.showSelectionCheckboxes &&
                    'none' !== n.selectionMode &&
                    (yield {
                        type: 'cell',
                        key: 'header',
                        props: { isSelectionCell: !0 }
                    }),
                'function' == typeof r)
            ) {
                for (let e of n.columns)
                    yield {
                        type: 'cell',
                        element: r(e.key),
                        key: e.key
                    };
                if (o)
                    for (let e of o)
                        yield {
                            type: 'item',
                            value: e
                        };
            } else {
                let e = [],
                    i = [];
                if (
                    (a.Children.forEach(r, (r) => {
                        if (r.type === b) {
                            if (e.length < n.columns.length) throw Error("All of a Row's child Cells must be positioned before any child Rows.");
                            i.push({
                                type: 'item',
                                element: r
                            });
                        } else
                            e.push({
                                type: 'cell',
                                element: r
                            });
                    }),
                    e.length !== n.columns.length)
                )
                    throw Error(`Cell count must match column count. Found ${e.length} cells and ${n.columns.length} columns.`);
                yield* e, yield* i;
            }
        },
        shouldInvalidate: (e) => e.columns.length !== n.columns.length || e.columns.some((e, r) => e.key !== n.columns[r].key) || e.showSelectionCheckboxes !== n.showSelectionCheckboxes || e.showDragButtons !== n.showDragButtons || e.selectionMode !== n.selectionMode
    };
};
(function e(e) {
    return null;
}).getCollectionNode = function* (e) {
    let { children: n } = e,
        r = e.textValue || ('string' == typeof n ? n : '') || e['aria-label'] || '';
    yield {
        type: 'cell',
        props: e,
        rendered: n,
        textValue: r,
        'aria-label': e['aria-label'],
        hasChildNodes: !1
    };
};
function I(e, n, r) {
    let i;
    return 'all' === e ? (i = new Set(r.flattenedRows.filter((e) => e.props.UNSTABLE_childItems || e.props.children.length > r.userColumnCount).map((e) => e.key))).delete(n) : (i = new Set(e)).has(n) ? i.delete(n) : i.add(n), i;
}
function T(e) {
    return e ? ('all' === e ? 'all' : new Set(e)) : new Set();
}
function S(e, n) {
    let r,
        i,
        { expandedKeys: a = new Set() } = n,
        o = [],
        s = 0,
        l = 0,
        u = [],
        c = new Map();
    (null == n ? void 0 : n.showSelectionCheckboxes) && s++, (null == n ? void 0 : n.showDragButtons) && s++;
    let d = [],
        f = (e) => {
            switch (e.type) {
                case 'body':
                    (r = e), c.set(r.key, r);
                    break;
                case 'column':
                    !e.hasChildNodes && l++;
                    break;
                case 'item':
                    d.push(e);
                    return;
            }
            for (let n of e.childNodes) f(n);
        };
    for (let n of e) 'column' === n.type && u.push(n), f(n);
    s += l;
    let p = 0,
        h = (e, n) => {
            let i;
            if ('item' === e.type) {
                let n = [];
                for (let r of e.childNodes)
                    if ('cell' === r.type) {
                        let e = { ...r };
                        e.index + 1 === s && (e.nextKey = null), n.push({ ...e });
                    }
                let i = {
                    ...e,
                    childNodes: n,
                    parentKey: r.key,
                    level: 1,
                    index: p++
                };
                o.push(i);
            }
            let l = {};
            'placeholder' !== e.type && 'column' !== e.type && (l.indexOfType = n), Object.assign(e, l), c.set(e.key, e);
            let u = 0;
            for (let n of e.childNodes) !('item' === n.type && 'all' !== a && !a.has(e.key)) && (null == n.parentKey && (n.parentKey = e.key), i ? ((i.nextKey = n.key), (n.prevKey = i.key)) : (n.prevKey = null), 'item' === n.type ? h(n, u++) : h(n, n.index), (i = n));
            i && (i.nextKey = null);
        };
    return (
        d.forEach((e, n) => {
            h(e, n), i ? ((i.nextKey = e.key), (e.prevKey = i.key)) : (e.prevKey = null), (i = e);
        }),
        i && (i.nextKey = null),
        {
            keyMap: c,
            userColumnCount: l,
            flattenedRows: o,
            tableNodes: [
                ...u,
                {
                    ...r,
                    childNodes: o
                }
            ]
        }
    );
}
