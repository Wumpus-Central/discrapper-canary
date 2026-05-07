l.d(t, { XI: () => eE, VP: () => eP, fI: () => eH, fh: () => eT, BF: () => eR, A0: () => eB });
var n = l(197867),
    o = l(257537),
    i = l(241634),
    r = l(825913),
    s = l(64700);
let u = (0, s.createContext)({}),
    a = (0, s.createContext)(null),
    c = (0, s.forwardRef)(function (e, t) {
        let { render: l } = (0, s.useContext)(a);
        return s.createElement(s.Fragment, null, l(e, t));
    });
var d = l(123375),
    g = l(357710),
    p = l(178375),
    m = l(507254),
    h = l(183590),
    y = l(371926);
class v {
    *[Symbol.iterator]() {
        yield* [...this.rows];
    }
    get size() {
        return [...this.rows].length;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(e) {
        var t;
        let l = this.keyMap.get(e);
        return l && null != (t = l.prevKey) ? t : null;
    }
    getKeyAfter(e) {
        var t;
        let l = this.keyMap.get(e);
        return l && null != (t = l.nextKey) ? t : null;
    }
    getFirstKey() {
        var e;
        return null == (e = [...this.rows][0]) ? void 0 : e.key;
    }
    getLastKey() {
        var e;
        let t = [...this.rows];
        return null == (e = t[t.length - 1]) ? void 0 : e.key;
    }
    getItem(e) {
        var t;
        return null != (t = this.keyMap.get(e)) ? t : null;
    }
    at(e) {
        let t = [...this.getKeys()];
        return this.getItem(t[e]);
    }
    getChildren(e) {
        let t = this.keyMap.get(e);
        return (null == t ? void 0 : t.childNodes) || [];
    }
    constructor(e) {
        (this.keyMap = new Map()),
            (this.keyMap = new Map()),
            (this.columnCount = null == e ? void 0 : e.columnCount),
            (this.rows = []);
        let t = (n) => {
                var o, i, r, s, u;
                let a = this.keyMap.get(n.key);
                e.visitNode && (n = e.visitNode(n)), this.keyMap.set(n.key, n);
                let c = new Set(),
                    d = null,
                    g = !1;
                if ("item" === n.type) {
                    for (let e of n.childNodes)
                        if ((null == (o = e.props) ? void 0 : o.colSpan) !== void 0) {
                            g = !0;
                            break;
                        }
                }
                for (let e of n.childNodes)
                    "cell" === e.type &&
                        g &&
                        ((e.colspan = null == (i = e.props) ? void 0 : i.colSpan),
                        (e.colSpan = null == (r = e.props) ? void 0 : r.colSpan),
                        (e.colIndex = d
                            ? (null != (s = d.colIndex) ? s : d.index) + (null != (u = d.colSpan) ? u : 1)
                            : e.index)),
                        "cell" === e.type && null == e.parentKey && (e.parentKey = n.key),
                        c.add(e.key),
                        d ? ((d.nextKey = e.key), (e.prevKey = d.key)) : (e.prevKey = null),
                        t(e),
                        (d = e);
                if ((d && (d.nextKey = null), a)) for (let e of a.childNodes) c.has(e.key) || l(e);
            },
            l = (e) => {
                for (let t of (this.keyMap.delete(e.key), e.childNodes)) this.keyMap.get(t.key) === t && l(t);
            },
            n = null;
        for (let [l, c] of e.items.entries()) {
            var o, i, r, s, u, a;
            let e = {
                ...c,
                level: null != (o = c.level) ? o : 0,
                key: null != (i = c.key) ? i : "row-" + l,
                type: null != (r = c.type) ? r : "row",
                value: null != (s = c.value) ? s : null,
                hasChildNodes: !0,
                childNodes: [...c.childNodes],
                rendered: c.rendered,
                textValue: null != (u = c.textValue) ? u : "",
                index: null != (a = c.index) ? a : l,
            };
            n ? ((n.nextKey = e.key), (e.prevKey = n.key)) : (e.prevKey = null), this.rows.push(e), t(e), (n = e);
        }
        n && (n.nextKey = null);
    }
}
let f = "row-header-column-" + Math.random().toString(36).slice(2),
    k = "row-header-column-" + Math.random().toString(36).slice(2);
for (; f === k; ) k = "row-header-column-" + Math.random().toString(36).slice(2);
function b(e, t) {
    if (0 === t.length) return [];
    let l = [],
        n = new Map();
    for (let o of t) {
        let t = o.parentKey,
            i = [o];
        for (; t; ) {
            let l = e.get(t);
            if (!l) break;
            if (n.has(l)) {
                null != l.colSpan || (l.colSpan = 0), l.colSpan++, (l.colspan = l.colSpan);
                let { column: e, index: t } = n.get(l);
                if (t > i.length) break;
                for (let l = t; l < i.length; l++) e.splice(l, 0, null);
                for (let t = i.length; t < e.length; t++) e[t] && n.has(e[t]) && (n.get(e[t]).index = t);
            } else (l.colSpan = 1), (l.colspan = 1), i.push(l), n.set(l, { column: i, index: i.length - 1 });
            t = l.parentKey;
        }
        l.push(i), (o.index = l.length - 1);
    }
    let o = Math.max(...l.map((e) => e.length)),
        i = Array(o)
            .fill(0)
            .map(() => []),
        r = 0;
    for (let e of l) {
        let t = o - 1;
        for (let l of e) {
            if (l) {
                let e = i[t],
                    n = e.reduce((e, t) => {
                        var l;
                        return e + (null != (l = t.colSpan) ? l : 1);
                    }, 0);
                if (n < r) {
                    let o = {
                        type: "placeholder",
                        key: "placeholder-" + l.key,
                        colspan: r - n,
                        colSpan: r - n,
                        index: n,
                        value: null,
                        rendered: null,
                        level: t,
                        hasChildNodes: !1,
                        childNodes: [],
                        textValue: "",
                    };
                    e.length > 0 && ((e[e.length - 1].nextKey = o.key), (o.prevKey = e[e.length - 1].key)), e.push(o);
                }
                e.length > 0 && ((e[e.length - 1].nextKey = l.key), (l.prevKey = e[e.length - 1].key)),
                    (l.level = t),
                    (l.colIndex = r),
                    e.push(l);
            }
            t--;
        }
        r++;
    }
    let s = 0;
    for (let e of i) {
        let l = e.reduce((e, t) => {
            var l;
            return e + (null != (l = t.colSpan) ? l : 1);
        }, 0);
        if (l < t.length) {
            let n = {
                type: "placeholder",
                key: "placeholder-" + e[e.length - 1].key,
                colSpan: t.length - l,
                colspan: t.length - l,
                index: l,
                value: null,
                rendered: null,
                level: s,
                hasChildNodes: !1,
                childNodes: [],
                textValue: "",
                prevKey: e[e.length - 1].key,
            };
            e.push(n);
        }
        s++;
    }
    return i.map((e, t) => ({
        type: "headerrow",
        key: "headerrow-" + t,
        index: t,
        value: null,
        rendered: null,
        level: 0,
        hasChildNodes: !0,
        childNodes: e,
        textValue: "",
    }));
}
class S extends v {
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
        var t;
        let l = this.keyMap.get(e);
        return null != (t = null == l ? void 0 : l.prevKey) ? t : null;
    }
    getKeyAfter(e) {
        var t;
        let l = this.keyMap.get(e);
        return null != (t = null == l ? void 0 : l.nextKey) ? t : null;
    }
    getFirstKey() {
        var e, t;
        return null != (t = null == (e = (0, y.ue)(this.body.childNodes)) ? void 0 : e.key) ? t : null;
    }
    getLastKey() {
        var e, t;
        return null != (t = null == (e = (0, y.W)(this.body.childNodes)) ? void 0 : e.key) ? t : null;
    }
    getItem(e) {
        var t;
        return null != (t = this.keyMap.get(e)) ? t : null;
    }
    at(e) {
        let t = [...this.getKeys()];
        return this.getItem(t[e]);
    }
    getChildren(e) {
        return e === this.body.key ? this.body.childNodes : super.getChildren(e);
    }
    getTextValue(e) {
        let t = this.getItem(e);
        if (!t) return "";
        if (t.textValue) return t.textValue;
        let l = this.rowHeaderColumnKeys;
        if (l) {
            let e = [];
            for (let n of t.childNodes) {
                let t = this.columns[n.index];
                if ((l.has(t.key) && n.textValue && e.push(n.textValue), e.length === l.size)) break;
            }
            return e.join(" ");
        }
        return "";
    }
    constructor(e, t, l) {
        let n = new Set(),
            o = null,
            i = [];
        if (null == l ? void 0 : l.showSelectionCheckboxes) {
            let e = {
                type: "column",
                key: f,
                value: null,
                textValue: "",
                level: 0,
                index: +(null != l && !!l.showDragButtons),
                hasChildNodes: !1,
                rendered: null,
                childNodes: [],
                props: { isSelectionCell: !0 },
            };
            i.unshift(e);
        }
        if (null == l ? void 0 : l.showDragButtons) {
            let e = {
                type: "column",
                key: k,
                value: null,
                textValue: "",
                level: 0,
                index: 0,
                hasChildNodes: !1,
                rendered: null,
                childNodes: [],
                props: { isDragButtonCell: !0 },
            };
            i.unshift(e);
        }
        let r = [],
            s = new Map(),
            u = (e) => {
                switch (e.type) {
                    case "body":
                        o = e;
                        break;
                    case "column":
                        s.set(e.key, e), !e.hasChildNodes && (i.push(e), e.props.isRowHeader && n.add(e.key));
                        break;
                    case "item":
                        r.push(e);
                        return;
                }
                for (let t of e.childNodes) u(t);
            };
        for (let t of e) u(t);
        let a = b(s, i);
        if (
            (a.forEach((e, t) => r.splice(t, 0, e)),
            super({ columnCount: i.length, items: r, visitNode: (e) => ((e.column = i[e.index]), e) }),
            (this._size = 0),
            (this.columns = i),
            (this.rowHeaderColumnKeys = n),
            (this.body = o),
            (this.headerRows = a),
            (this._size = [...o.childNodes].length),
            0 === this.rowHeaderColumnKeys.size)
        ) {
            let e = this.columns.find((e) => {
                var t, l;
                return (
                    !(null == (t = e.props) ? void 0 : t.isDragButtonCell) &&
                    !(null == (l = e.props) ? void 0 : l.isSelectionCell)
                );
            });
            e && this.rowHeaderColumnKeys.add(e.key);
        }
    }
}
var C = l(36310),
    D = l(74733),
    x = l(330722);
let w = { ascending: "descending", descending: "ascending" },
    E = new WeakMap();
function K(e) {
    return "string" == typeof e ? e.replace(/\s*/g, "") : "" + e;
}
function z(e, t, l) {
    let n = E.get(e);
    if (!n) throw Error("Unknown grid");
    return `${n}-${K(t)}-${K(l)}`;
}
function N(e, t) {
    return [...e.collection.rowHeaderColumnKeys].map((l) => z(e, t, l)).join(" ");
}
var A = {};
A = {
    "ar-AE": {
        ascending: "\u062A\u0635\u0627\u0639\u062F\u064A",
        ascendingSort: (e) =>
            `\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62D}\u{633}\u{628} \u{627}\u{644}\u{639}\u{645}\u{648}\u{62F} ${e.columnName} \u{628}\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62A}\u{635}\u{627}\u{639}\u{62F}\u{64A}`,
        columnSize: (e) => `${e.value} \u{628}\u{627}\u{644}\u{628}\u{643}\u{633}\u{644}`,
        descending: "\u062A\u0646\u0627\u0632\u0644\u064A",
        descendingSort: (e) =>
            `\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62D}\u{633}\u{628} \u{627}\u{644}\u{639}\u{645}\u{648}\u{62F} ${e.columnName} \u{628}\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62A}\u{646}\u{627}\u{632}\u{644}\u{64A}`,
        resizerDescription:
            "\u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0645\u0641\u062A\u0627\u062D Enter \u0644\u0628\u062F\u0621 \u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u062D\u062C\u0645",
        select: "\u062A\u062D\u062F\u064A\u062F",
        selectAll: "\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0643\u0644",
        sortable: "\u0639\u0645\u0648\u062F \u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u0631\u062A\u064A\u0628",
    },
    "bg-BG": {
        ascending: "\u0432\u044A\u0437\u0445\u043E\u0434\u044F\u0449",
        ascendingSort: (e) =>
            `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{430}\u{43D}\u{43E} \u{43F}\u{43E} \u{43A}\u{43E}\u{43B}\u{43E}\u{43D}\u{430} ${e.columnName} \u{432}\u{44A}\u{432} \u{432}\u{44A}\u{437}\u{445}\u{43E}\u{434}\u{44F}\u{449} \u{440}\u{435}\u{434}`,
        columnSize: (e) => `${e.value} \u{43F}\u{438}\u{43A}\u{441}\u{435}\u{43B}\u{430}`,
        descending: "\u043D\u0438\u0437\u0445\u043E\u0434\u044F\u0449",
        descendingSort: (e) =>
            `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{430}\u{43D}\u{43E} \u{43F}\u{43E} \u{43A}\u{43E}\u{43B}\u{43E}\u{43D}\u{430} ${e.columnName} \u{432} \u{43D}\u{438}\u{437}\u{445}\u{43E}\u{434}\u{44F}\u{449} \u{440}\u{435}\u{434}`,
        resizerDescription:
            "\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u201EEnter\u201C, \u0437\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0435\u0442\u0435 \u0434\u0430 \u043F\u0440\u0435\u043E\u0440\u0430\u0437\u043C\u0435\u0440\u044F\u0432\u0430\u0442\u0435",
        select: "\u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435",
        selectAll: "\u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u0432\u0441\u0438\u0447\u043A\u043E",
        sortable: "\u0441\u043E\u0440\u0442\u0438\u0440\u0430\u0449\u0430 \u043A\u043E\u043B\u043E\u043D\u0430",
    },
    "cs-CZ": {
        ascending: "vzestupn\u011B",
        ascendingSort: (e) => `\u{159}azeno vzestupn\u{11B} podle sloupce ${e.columnName}`,
        columnSize: (e) => `${e.value} pixel\u{16F}`,
        descending: "sestupn\u011B",
        descendingSort: (e) => `\u{159}azeno sestupn\u{11B} podle sloupce ${e.columnName}`,
        resizerDescription: "Stisknut\xedm kl\xe1vesy Enter za\u010Dnete m\u011Bnit velikost",
        select: "Vybrat",
        selectAll: "Vybrat v\u0161e",
        sortable: "sloupec s mo\u017Enost\xed \u0159azen\xed",
    },
    "da-DK": {
        ascending: "stigende",
        ascendingSort: (e) => `sorteret efter kolonne ${e.columnName} i stigende r\xe6kkef\xf8lge`,
        columnSize: (e) => `${e.value} pixels`,
        descending: "faldende",
        descendingSort: (e) => `sorteret efter kolonne ${e.columnName} i faldende r\xe6kkef\xf8lge`,
        resizerDescription: "Tryk p\xe5 Enter for at \xe6ndre st\xf8rrelse",
        select: "V\xe6lg",
        selectAll: "V\xe6lg alle",
        sortable: "sorterbar kolonne",
    },
    "de-DE": {
        ascending: "aufsteigend",
        ascendingSort: (e) => `sortiert nach Spalte ${e.columnName} in aufsteigender Reihenfolge`,
        columnSize: (e) => `${e.value} Pixel`,
        descending: "absteigend",
        descendingSort: (e) => `sortiert nach Spalte ${e.columnName} in absteigender Reihenfolge`,
        resizerDescription: "Eingabetaste zum Starten der Gr\xf6\xdfen\xe4nderung dr\xfccken",
        select: "Ausw\xe4hlen",
        selectAll: "Alles ausw\xe4hlen",
        sortable: "sortierbare Spalte",
    },
    "el-GR": {
        ascending: "\u03B1\u03CD\u03BE\u03BF\u03C5\u03C3\u03B1",
        ascendingSort: (e) =>
            `\u{3B4}\u{3B9}\u{3B1}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B1}\u{3BD}\u{3AC} \u{3C3}\u{3C4}\u{3AE}\u{3BB}\u{3B7} ${e.columnName} \u{3C3}\u{3B5} \u{3B1}\u{3CD}\u{3BE}\u{3BF}\u{3C5}\u{3C3}\u{3B1} \u{3C3}\u{3B5}\u{3B9}\u{3C1}\u{3AC}`,
        columnSize: (e) => `${e.value} pixel`,
        descending: "\u03C6\u03B8\u03AF\u03BD\u03BF\u03C5\u03C3\u03B1",
        descendingSort: (e) =>
            `\u{3B4}\u{3B9}\u{3B1}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B1}\u{3BD}\u{3AC} \u{3C3}\u{3C4}\u{3AE}\u{3BB}\u{3B7} ${e.columnName} \u{3C3}\u{3B5} \u{3C6}\u{3B8}\u{3AF}\u{3BD}\u{3BF}\u{3C5}\u{3C3}\u{3B1} \u{3C3}\u{3B5}\u{3B9}\u{3C1}\u{3AC}`,
        resizerDescription:
            "\u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 Enter \u03B3\u03B9\u03B1 \u03AD\u03BD\u03B1\u03C1\u03BE\u03B7 \u03C4\u03B7\u03C2 \u03B1\u03BB\u03BB\u03B1\u03B3\u03AE\u03C2 \u03BC\u03B5\u03B3\u03AD\u03B8\u03BF\u03C5\u03C2",
        select: "\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE",
        selectAll: "\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE \u03CC\u03BB\u03C9\u03BD",
        sortable: "\u03A3\u03C4\u03AE\u03BB\u03B7 \u03B4\u03B9\u03B1\u03BB\u03BF\u03B3\u03AE\u03C2",
    },
    "en-US": {
        select: "Select",
        selectAll: "Select All",
        sortable: "sortable column",
        ascending: "ascending",
        descending: "descending",
        ascendingSort: (e) => `sorted by column ${e.columnName} in ascending order`,
        descendingSort: (e) => `sorted by column ${e.columnName} in descending order`,
        columnSize: (e) => `${e.value} pixels`,
        resizerDescription: "Press Enter to start resizing",
    },
    "es-ES": {
        ascending: "ascendente",
        ascendingSort: (e) => `ordenado por columna ${e.columnName} en sentido ascendente`,
        columnSize: (e) => `${e.value} p\xedxeles`,
        descending: "descendente",
        descendingSort: (e) => `ordenado por columna ${e.columnName} en orden descendente`,
        resizerDescription: "Pulse Intro para empezar a redimensionar",
        select: "Seleccionar",
        selectAll: "Seleccionar todos",
        sortable: "columna ordenable",
    },
    "et-EE": {
        ascending: "t\xf5usev j\xe4rjestus",
        ascendingSort: (e) => `sorditud veeru j\xe4rgi ${e.columnName} t\xf5usvas j\xe4rjestuses`,
        columnSize: (e) => `${e.value} pikslit`,
        descending: "laskuv j\xe4rjestus",
        descendingSort: (e) => `sorditud veeru j\xe4rgi ${e.columnName} laskuvas j\xe4rjestuses`,
        resizerDescription: "Suuruse muutmise alustamiseks vajutage klahvi Enter",
        select: "Vali",
        selectAll: "Vali k\xf5ik",
        sortable: "sorditav veerg",
    },
    "fi-FI": {
        ascending: "nouseva",
        ascendingSort: (e) => `lajiteltu sarakkeen ${e.columnName} mukaan nousevassa j\xe4rjestyksess\xe4`,
        columnSize: (e) => `${e.value} pikseli\xe4`,
        descending: "laskeva",
        descendingSort: (e) => `lajiteltu sarakkeen ${e.columnName} mukaan laskevassa j\xe4rjestyksess\xe4`,
        resizerDescription: "Aloita koon muutos painamalla Enter-n\xe4pp\xe4int\xe4",
        select: "Valitse",
        selectAll: "Valitse kaikki",
        sortable: "lajiteltava sarake",
    },
    "fr-FR": {
        ascending: "croissant",
        ascendingSort: (e) => `tri\xe9 en fonction de la colonne\xa0${e.columnName} par ordre croissant`,
        columnSize: (e) => `${e.value}\xa0pixels`,
        descending: "d\xe9croissant",
        descendingSort: (e) => `tri\xe9 en fonction de la colonne\xa0${e.columnName} par ordre d\xe9croissant`,
        resizerDescription: "Appuyez sur Entr\xe9e pour commencer le redimensionnement.",
        select: "S\xe9lectionner",
        selectAll: "S\xe9lectionner tout",
        sortable: "colonne triable",
    },
    "he-IL": {
        ascending: "\u05E2\u05D5\u05DC\u05D4",
        ascendingSort: (e) =>
            `\u{5DE}\u{5D5}\u{5D9}\u{5DF} \u{5DC}\u{5E4}\u{5D9} \u{5E2}\u{5DE}\u{5D5}\u{5D3}\u{5D4} ${e.columnName} \u{5D1}\u{5E1}\u{5D3}\u{5E8} \u{5E2}\u{5D5}\u{5DC}\u{5D4}`,
        columnSize: (e) => `${e.value} \u{5E4}\u{5D9}\u{5E7}\u{5E1}\u{5DC}\u{5D9}\u{5DD}`,
        descending: "\u05D9\u05D5\u05E8\u05D3",
        descendingSort: (e) =>
            `\u{5DE}\u{5D5}\u{5D9}\u{5DF} \u{5DC}\u{5E4}\u{5D9} \u{5E2}\u{5DE}\u{5D5}\u{5D3}\u{5D4} ${e.columnName} \u{5D1}\u{5E1}\u{5D3}\u{5E8} \u{5D9}\u{5D5}\u{5E8}\u{5D3}`,
        resizerDescription:
            "\u05D4\u05E7\u05E9 Enter \u05DB\u05D3\u05D9 \u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05D2\u05D5\u05D3\u05DC",
        select: "\u05D1\u05D7\u05E8",
        selectAll: "\u05D1\u05D7\u05E8 \u05D4\u05DB\u05D5\u05DC",
        sortable: "\u05E2\u05DE\u05D5\u05D3\u05D4 \u05E9\u05E0\u05D9\u05EA\u05DF \u05DC\u05DE\u05D9\u05D9\u05DF",
    },
    "hr-HR": {
        ascending: "rastu\u0107i",
        ascendingSort: (e) => `razvrstano po stupcima ${e.columnName} rastu\u{107}em redoslijedom`,
        columnSize: (e) => `${e.value} piksela`,
        descending: "padaju\u0107i",
        descendingSort: (e) => `razvrstano po stupcima ${e.columnName} padaju\u{107}im redoslijedom`,
        resizerDescription: "Pritisnite Enter da biste zapo\u010Deli promenu veli\u010Dine",
        select: "Odaberite",
        selectAll: "Odaberite sve",
        sortable: "stupac koji se mo\u017Ee razvrstati",
    },
    "hu-HU": {
        ascending: "n\xf6vekv\u0151",
        ascendingSort: (e) => `rendezve a(z) ${e.columnName} oszlop szerint, n\xf6vekv\u{151} sorrendben`,
        columnSize: (e) => `${e.value} k\xe9ppont`,
        descending: "cs\xf6kken\u0151",
        descendingSort: (e) => `rendezve a(z) ${e.columnName} oszlop szerint, cs\xf6kken\u{151} sorrendben`,
        resizerDescription: "Nyomja le az Enter billenty\u0171t az \xe1tm\xe9retez\xe9s megkezd\xe9s\xe9hez",
        select: "Kijel\xf6l\xe9s",
        selectAll: "\xd6sszes kijel\xf6l\xe9se",
        sortable: "rendezend\u0151 oszlop",
    },
    "it-IT": {
        ascending: "crescente",
        ascendingSort: (e) => `in ordine crescente in base alla colonna ${e.columnName}`,
        columnSize: (e) => `${e.value} pixel`,
        descending: "decrescente",
        descendingSort: (e) => `in ordine decrescente in base alla colonna ${e.columnName}`,
        resizerDescription: "Premi Invio per iniziare a ridimensionare",
        select: "Seleziona",
        selectAll: "Seleziona tutto",
        sortable: "colonna ordinabile",
    },
    "ja-JP": {
        ascending: "\u6607\u9806",
        ascendingSort: (e) =>
            `\u{5217} ${e.columnName} \u{3092}\u{6607}\u{9806}\u{3067}\u{4E26}\u{3079}\u{66FF}\u{3048}`,
        columnSize: (e) => `${e.value} \u{30D4}\u{30AF}\u{30BB}\u{30EB}`,
        descending: "\u964D\u9806",
        descendingSort: (e) =>
            `\u{5217} ${e.columnName} \u{3092}\u{964D}\u{9806}\u{3067}\u{4E26}\u{3079}\u{66FF}\u{3048}`,
        resizerDescription:
            "Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u30B5\u30A4\u30BA\u5909\u66F4\u3092\u958B\u59CB",
        select: "\u9078\u629E",
        selectAll: "\u3059\u3079\u3066\u9078\u629E",
        sortable: "\u4E26\u3079\u66FF\u3048\u53EF\u80FD\u306A\u5217",
    },
    "ko-KR": {
        ascending: "\uC624\uB984\uCC28\uC21C",
        ascendingSort: (e) =>
            `${e.columnName} \u{C5F4}\u{C744} \u{AE30}\u{C900}\u{C73C}\u{B85C} \u{C624}\u{B984}\u{CC28}\u{C21C}\u{C73C}\u{B85C} \u{C815}\u{B82C}\u{B428}`,
        columnSize: (e) => `${e.value} \u{D53D}\u{C140}`,
        descending: "\uB0B4\uB9BC\uCC28\uC21C",
        descendingSort: (e) =>
            `${e.columnName} \u{C5F4}\u{C744} \u{AE30}\u{C900}\u{C73C}\u{B85C} \u{B0B4}\u{B9BC}\u{CC28}\u{C21C}\u{C73C}\u{B85C} \u{C815}\u{B82C}\u{B428}`,
        resizerDescription:
            "\uD06C\uAE30 \uC870\uC815\uC744 \uC2DC\uC791\uD558\uB824\uBA74 Enter\uB97C \uB204\uB974\uC138\uC694.",
        select: "\uC120\uD0DD",
        selectAll: "\uBAA8\uB450 \uC120\uD0DD",
        sortable: "\uC815\uB82C \uAC00\uB2A5\uD55C \uC5F4",
    },
    "lt-LT": {
        ascending: "did\u0117jan\u010Dia tvarka",
        ascendingSort: (e) => `surikiuota pagal stulpel\u{12F} ${e.columnName} did\u{117}jan\u{10D}ia tvarka`,
        columnSize: (e) => `${e.value} piks.`,
        descending: "ma\u017E\u0117jan\u010Dia tvarka",
        descendingSort: (e) => `surikiuota pagal stulpel\u{12F} ${e.columnName} ma\u{17E}\u{117}jan\u{10D}ia tvarka`,
        resizerDescription: "Paspauskite \u201EEnter\u201C, kad prad\u0117tum\u0117te keisti dyd\u012F",
        select: "Pasirinkti",
        selectAll: "Pasirinkti visk\u0105",
        sortable: "rikiuojamas stulpelis",
    },
    "lv-LV": {
        ascending: "augo\u0161\u0101 sec\u012Bb\u0101",
        ascendingSort: (e) => `k\u{101}rtots p\u{113}c kolonnas ${e.columnName} augo\u{161}\u{101} sec\u{12B}b\u{101}`,
        columnSize: (e) => `${e.value} pikse\u{13C}i`,
        descending: "dilsto\u0161\u0101 sec\u012Bb\u0101",
        descendingSort: (e) =>
            `k\u{101}rtots p\u{113}c kolonnas ${e.columnName} dilsto\u{161}\u{101} sec\u{12B}b\u{101}`,
        resizerDescription: "Nospiediet Enter, lai s\u0101ktu izm\u0113ru main\u012B\u0161anu",
        select: "Atlas\u012Bt",
        selectAll: "Atlas\u012Bt visu",
        sortable: "k\u0101rtojam\u0101 kolonna",
    },
    "nb-NO": {
        ascending: "stigende",
        ascendingSort: (e) => `sortert etter kolonne ${e.columnName} i stigende rekkef\xf8lge`,
        columnSize: (e) => `${e.value} piksler`,
        descending: "synkende",
        descendingSort: (e) => `sortert etter kolonne ${e.columnName} i synkende rekkef\xf8lge`,
        resizerDescription: "Trykk p\xe5 Enter for \xe5 starte st\xf8rrelsesendring",
        select: "Velg",
        selectAll: "Velg alle",
        sortable: "kolonne som kan sorteres",
    },
    "nl-NL": {
        ascending: "oplopend",
        ascendingSort: (e) => `gesorteerd in oplopende volgorde in kolom ${e.columnName}`,
        columnSize: (e) => `${e.value} pixels`,
        descending: "aflopend",
        descendingSort: (e) => `gesorteerd in aflopende volgorde in kolom ${e.columnName}`,
        resizerDescription: "Druk op Enter om het formaat te wijzigen",
        select: "Selecteren",
        selectAll: "Alles selecteren",
        sortable: "sorteerbare kolom",
    },
    "pl-PL": {
        ascending: "rosn\u0105co",
        ascendingSort: (e) => `posortowano wed\u{142}ug kolumny ${e.columnName} w porz\u{105}dku rosn\u{105}cym`,
        columnSize: (e) => `Liczba pikseli: ${e.value}`,
        descending: "malej\u0105co",
        descendingSort: (e) => `posortowano wed\u{142}ug kolumny ${e.columnName} w porz\u{105}dku malej\u{105}cym`,
        resizerDescription: "Naci\u015Bnij Enter, aby rozpocz\u0105\u0107 zmienianie rozmiaru",
        select: "Zaznacz",
        selectAll: "Zaznacz wszystko",
        sortable: "kolumna z mo\u017Cliwo\u015Bci\u0105 sortowania",
    },
    "pt-BR": {
        ascending: "crescente",
        ascendingSort: (e) => `classificado pela coluna ${e.columnName} em ordem crescente`,
        columnSize: (e) => `${e.value} pixels`,
        descending: "decrescente",
        descendingSort: (e) => `classificado pela coluna ${e.columnName} em ordem decrescente`,
        resizerDescription: "Pressione Enter para come\xe7ar a redimensionar",
        select: "Selecionar",
        selectAll: "Selecionar tudo",
        sortable: "coluna classific\xe1vel",
    },
    "pt-PT": {
        ascending: "ascendente",
        ascendingSort: (e) => `Ordenar por coluna ${e.columnName} em ordem ascendente`,
        columnSize: (e) => `${e.value} pixels`,
        descending: "descendente",
        descendingSort: (e) => `Ordenar por coluna ${e.columnName} em ordem descendente`,
        resizerDescription: "Prima Enter para iniciar o redimensionamento",
        select: "Selecionar",
        selectAll: "Selecionar tudo",
        sortable: "Coluna orden\xe1vel",
    },
    "ro-RO": {
        ascending: "cresc\u0103toare",
        ascendingSort: (e) => `sortate dup\u{103} coloana ${e.columnName} \xeen ordine cresc\u{103}toare`,
        columnSize: (e) => `${e.value} pixeli`,
        descending: "descresc\u0103toare",
        descendingSort: (e) => `sortate dup\u{103} coloana ${e.columnName} \xeen ordine descresc\u{103}toare`,
        resizerDescription: "Ap\u0103sa\u021Bi pe Enter pentru a \xeencepe redimensionarea",
        select: "Selectare",
        selectAll: "Selectare total\u0103",
        sortable: "coloan\u0103 sortabil\u0103",
    },
    "ru-RU": {
        ascending: "\u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u043D\u0438\u0435",
        ascendingSort: (e) =>
            `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{441}\u{442}\u{43E}\u{43B}\u{431}\u{435}\u{446} ${e.columnName} \u{432} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{435} \u{432}\u{43E}\u{437}\u{440}\u{430}\u{441}\u{442}\u{430}\u{43D}\u{438}\u{44F}`,
        columnSize: (e) => `${e.value} \u{43F}\u{438}\u{43A}\u{441}.`,
        descending: "\u0443\u0431\u044B\u0432\u0430\u043D\u0438\u0435",
        descendingSort: (e) =>
            `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{441}\u{442}\u{43E}\u{43B}\u{431}\u{435}\u{446} ${e.columnName} \u{432} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{435} \u{443}\u{431}\u{44B}\u{432}\u{430}\u{43D}\u{438}\u{44F}`,
        resizerDescription:
            "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0443 Enter \u0434\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432",
        select: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
        selectAll: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435",
        sortable:
            "\u0441\u043E\u0440\u0442\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u0441\u0442\u043E\u043B\u0431\u0435\u0446",
    },
    "sk-SK": {
        ascending: "vzostupne",
        ascendingSort: (e) => `zoraden\xe9 zostupne pod\u{13E}a st\u{13A}pca ${e.columnName}`,
        columnSize: (e) => `Po\u{10D}et pixelov: ${e.value}`,
        descending: "zostupne",
        descendingSort: (e) => `zoraden\xe9 zostupne pod\u{13E}a st\u{13A}pca ${e.columnName}`,
        resizerDescription: "Stla\u010Den\xedm kl\xe1vesu Enter za\u010Dnete zmenu ve\u013Ekosti",
        select: "Vybra\u0165",
        selectAll: "Vybra\u0165 v\u0161etko",
        sortable: "zoradite\u013En\xfd st\u013Apec",
    },
    "sl-SI": {
        ascending: "nara\u0161\u010Dajo\u010De",
        ascendingSort: (e) =>
            `razvr\u{161}\u{10D}eno po stolpcu ${e.columnName} v nara\u{161}\u{10D}ajo\u{10D}em vrstnem redu`,
        columnSize: (e) => `${e.value} slikovnih pik`,
        descending: "padajo\u010De",
        descendingSort: (e) => `razvr\u{161}\u{10D}eno po stolpcu ${e.columnName} v padajo\u{10D}em vrstnem redu`,
        resizerDescription: "Pritisnite tipko Enter da za\u010Dnete spreminjati velikost",
        select: "Izberite",
        selectAll: "Izberite vse",
        sortable: "razvrstljivi stolpec",
    },
    "sr-SP": {
        ascending: "rastu\u0107i",
        ascendingSort: (e) => `sortirano po kolonama ${e.columnName} rastu\u{107}im redosledom`,
        columnSize: (e) => `${e.value} piksela`,
        descending: "padaju\u0107i",
        descendingSort: (e) => `sortirano po kolonama ${e.columnName} padaju\u{107}im redosledom`,
        resizerDescription: "Pritisnite Enter da biste zapo\u010Deli promenu veli\u010Dine",
        select: "Izaberite",
        selectAll: "Izaberite sve",
        sortable: "kolona koja se mo\u017Ee sortirati",
    },
    "sv-SE": {
        ascending: "stigande",
        ascendingSort: (e) => `sorterat p\xe5 kolumn ${e.columnName} i stigande ordning`,
        columnSize: (e) => `${e.value} pixlar`,
        descending: "fallande",
        descendingSort: (e) => `sorterat p\xe5 kolumn ${e.columnName} i fallande ordning`,
        resizerDescription: "Tryck p\xe5 Retur f\xf6r att b\xf6rja \xe4ndra storlek",
        select: "Markera",
        selectAll: "Markera allt",
        sortable: "sorterbar kolumn",
    },
    "tr-TR": {
        ascending: "artan s\u0131rada",
        ascendingSort: (e) => `${e.columnName} s\xfctuna g\xf6re artan d\xfczende s\u{131}rala`,
        columnSize: (e) => `${e.value} piksel`,
        descending: "azalan s\u0131rada",
        descendingSort: (e) => `${e.columnName} s\xfctuna g\xf6re azalan d\xfczende s\u{131}rala`,
        resizerDescription: "Yeniden boyutland\u0131rmak i\xe7in Enter'a bas\u0131n",
        select: "Se\xe7",
        selectAll: "T\xfcm\xfcn\xfc Se\xe7",
        sortable: "S\u0131ralanabilir s\xfctun",
    },
    "uk-UA": {
        ascending: "\u0432\u0438\u0441\u0445\u0456\u0434\u043D\u0438\u0439",
        ascendingSort: (e) =>
            `\u{432}\u{456}\u{434}\u{441}\u{43E}\u{440}\u{442}\u{43E}\u{432}\u{430}\u{43D}\u{43E} \u{437}\u{430} \u{441}\u{442}\u{43E}\u{432}\u{43F}\u{446}\u{435}\u{43C} ${e.columnName} \u{443} \u{432}\u{438}\u{441}\u{445}\u{456}\u{434}\u{43D}\u{43E}\u{43C}\u{443} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{443}`,
        columnSize: (e) => `${e.value} \u{43F}\u{456}\u{43A}\u{441}.`,
        descending: "\u043D\u0438\u0437\u0445\u0456\u0434\u043D\u0438\u0439",
        descendingSort: (e) =>
            `\u{432}\u{456}\u{434}\u{441}\u{43E}\u{440}\u{442}\u{43E}\u{432}\u{430}\u{43D}\u{43E} \u{437}\u{430} \u{441}\u{442}\u{43E}\u{432}\u{43F}\u{446}\u{435}\u{43C} ${e.columnName} \u{443} \u{43D}\u{438}\u{437}\u{445}\u{456}\u{434}\u{43D}\u{43E}\u{43C}\u{443} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{443}`,
        resizerDescription:
            "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C Enter, \u0449\u043E\u0431 \u043F\u043E\u0447\u0430\u0442\u0438 \u0437\u043C\u0456\u043D\u0443 \u0440\u043E\u0437\u043C\u0456\u0440\u0443",
        select: "\u0412\u0438\u0431\u0440\u0430\u0442\u0438",
        selectAll: "\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0435",
        sortable:
            "\u0441\u043E\u0440\u0442\u0443\u0432\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u0442\u043E\u0432\u043F\u0435\u0446\u044C",
    },
    "zh-CN": {
        ascending: "\u5347\u5E8F",
        ascendingSort: (e) => `\u{6309}\u{5217} ${e.columnName} \u{5347}\u{5E8F}\u{6392}\u{5E8F}`,
        columnSize: (e) => `${e.value} \u{50CF}\u{7D20}`,
        descending: "\u964D\u5E8F",
        descendingSort: (e) => `\u{6309}\u{5217} ${e.columnName} \u{964D}\u{5E8F}\u{6392}\u{5E8F}`,
        resizerDescription: "\u6309\u201C\u8F93\u5165\u201D\u952E\u5F00\u59CB\u8C03\u6574\u5927\u5C0F\u3002",
        select: "\u9009\u62E9",
        selectAll: "\u5168\u9009",
        sortable: "\u53EF\u6392\u5E8F\u7684\u5217",
    },
    "zh-TW": {
        ascending: "\u905E\u589E",
        ascendingSort: (e) =>
            `\u{5DF2}\u{4F9D}\u{64DA}\u{300C}${e.columnName}\u{300D}\u{6B04}\u{905E}\u{589E}\u{6392}\u{5E8F}`,
        columnSize: (e) => `${e.value} \u{50CF}\u{7D20}`,
        descending: "\u905E\u6E1B",
        descendingSort: (e) =>
            `\u{5DF2}\u{4F9D}\u{64DA}\u{300C}${e.columnName}\u{300D}\u{6B04}\u{905E}\u{6E1B}\u{6392}\u{5E8F}`,
        resizerDescription: "\u6309 Enter \u9375\u4EE5\u958B\u59CB\u8ABF\u6574\u5927\u5C0F",
        select: "\u9078\u53D6",
        selectAll: "\u5168\u9078",
        sortable: "\u53EF\u6392\u5E8F\u7684\u6B04",
    },
};
var B = l(473411);
class $ {
    isCell(e) {
        return "cell" === e.type;
    }
    isRow(e) {
        return "row" === e.type || "item" === e.type;
    }
    isDisabled(e) {
        var t;
        return (
            "all" === this.disabledBehavior &&
            ((null == (t = e.props) ? void 0 : t.isDisabled) || this.disabledKeys.has(e.key))
        );
    }
    findPreviousKey(e, t) {
        let l = null != e ? this.collection.getKeyBefore(e) : this.collection.getLastKey();
        for (; null != l; ) {
            let e = this.collection.getItem(l);
            if (!e) break;
            if (!this.isDisabled(e) && (!t || t(e))) return l;
            l = this.collection.getKeyBefore(l);
        }
        return null;
    }
    findNextKey(e, t) {
        let l = null != e ? this.collection.getKeyAfter(e) : this.collection.getFirstKey();
        for (; null != l; ) {
            let e = this.collection.getItem(l);
            if (!e) break;
            if (!this.isDisabled(e) && (!t || t(e))) return l;
            if (null == (l = this.collection.getKeyAfter(l))) break;
        }
        return null;
    }
    getKeyForItemInRowByIndex(e, t = 0) {
        if (t < 0) return null;
        let l = this.collection.getItem(e);
        if (!l) return null;
        let n = 0;
        for (let e of (0, y.iQ)(l, this.collection)) {
            var o, i;
            if (e.colSpan && e.colSpan + n > t) return null != (o = e.key) ? o : null;
            if ((e.colSpan && (n = n + e.colSpan - 1), n === t)) return null != (i = e.key) ? i : null;
            n++;
        }
        return null;
    }
    getKeyBelow(e) {
        var t;
        let l = e,
            n = this.collection.getItem(l);
        if (!n || (this.isCell(n) && (l = null != (t = n.parentKey) ? t : null), null == l)) return null;
        if (null != (l = this.findNextKey(l, (e) => "item" === e.type))) {
            if (this.isCell(n)) {
                let e = n.colIndex ? n.colIndex : n.index;
                return this.getKeyForItemInRowByIndex(l, e);
            }
            if ("row" === this.focusMode) return l;
        }
        return null;
    }
    getKeyAbove(e) {
        var t;
        let l = e,
            n = this.collection.getItem(l);
        if (!n || (this.isCell(n) && (l = null != (t = n.parentKey) ? t : null), null == l)) return null;
        if (null != (l = this.findPreviousKey(l, (e) => "item" === e.type))) {
            if (this.isCell(n)) {
                let e = n.colIndex ? n.colIndex : n.index;
                return this.getKeyForItemInRowByIndex(l, e);
            }
            if ("row" === this.focusMode) return l;
        }
        return null;
    }
    getKeyRightOf(e) {
        var t, l, n, o, i, r, s;
        let u = this.collection.getItem(e);
        if (!u) return null;
        if (this.isRow(u)) {
            let e = (0, y.iQ)(u, this.collection);
            return null !=
                (n =
                    "rtl" === this.direction
                        ? null == (t = (0, y.W)(e))
                            ? void 0
                            : t.key
                        : null == (l = (0, y.ue)(e))
                          ? void 0
                          : l.key)
                ? n
                : null;
        }
        if (this.isCell(u) && null != u.parentKey) {
            let t = this.collection.getItem(u.parentKey);
            if (!t) return null;
            let l = (0, y.iQ)(t, this.collection),
                n =
                    null != (o = "rtl" === this.direction ? (0, y.cj)(l, u.index - 1) : (0, y.cj)(l, u.index + 1))
                        ? o
                        : null;
            return n
                ? null != (i = n.key)
                    ? i
                    : null
                : "row" === this.focusMode
                  ? null != (r = u.parentKey)
                      ? r
                      : null
                  : null != (s = "rtl" === this.direction ? this.getFirstKey(e) : this.getLastKey(e))
                    ? s
                    : null;
        }
        return null;
    }
    getKeyLeftOf(e) {
        var t, l, n, o, i, r, s;
        let u = this.collection.getItem(e);
        if (!u) return null;
        if (this.isRow(u)) {
            let e = (0, y.iQ)(u, this.collection);
            return null !=
                (n =
                    "rtl" === this.direction
                        ? null == (t = (0, y.ue)(e))
                            ? void 0
                            : t.key
                        : null == (l = (0, y.W)(e))
                          ? void 0
                          : l.key)
                ? n
                : null;
        }
        if (this.isCell(u) && null != u.parentKey) {
            let t = this.collection.getItem(u.parentKey);
            if (!t) return null;
            let l = (0, y.iQ)(t, this.collection),
                n =
                    null != (o = "rtl" === this.direction ? (0, y.cj)(l, u.index + 1) : (0, y.cj)(l, u.index - 1))
                        ? o
                        : null;
            return n
                ? null != (i = n.key)
                    ? i
                    : null
                : "row" === this.focusMode
                  ? null != (r = u.parentKey)
                      ? r
                      : null
                  : null != (s = "rtl" === this.direction ? this.getLastKey(e) : this.getFirstKey(e))
                    ? s
                    : null;
        }
        return null;
    }
    getFirstKey(e, t) {
        var l, n, o, i;
        let r,
            s = null != e ? e : null;
        if (null != s) {
            if (!(r = this.collection.getItem(s))) return null;
            if (this.isCell(r) && !t && null != r.parentKey) {
                let e = this.collection.getItem(r.parentKey);
                return e && null != (n = null == (l = (0, y.ue)((0, y.iQ)(e, this.collection))) ? void 0 : l.key)
                    ? n
                    : null;
            }
        }
        if (
            null != (s = this.findNextKey(void 0, (e) => "item" === e.type)) &&
            ((r && this.isCell(r) && t) || "cell" === this.focusMode)
        ) {
            let e = this.collection.getItem(s);
            if (!e) return null;
            s = null != (i = null == (o = (0, y.ue)((0, y.iQ)(e, this.collection))) ? void 0 : o.key) ? i : null;
        }
        return s;
    }
    getLastKey(e, t) {
        var l, n, o, i;
        let r,
            s = null != e ? e : null;
        if (null != s) {
            if (!(r = this.collection.getItem(s))) return null;
            if (this.isCell(r) && !t && null != r.parentKey) {
                let e = this.collection.getItem(r.parentKey);
                if (!e) return null;
                let t = (0, y.iQ)(e, this.collection);
                return null != (n = null == (l = (0, y.W)(t)) ? void 0 : l.key) ? n : null;
            }
        }
        if (
            null != (s = this.findPreviousKey(void 0, (e) => "item" === e.type)) &&
            ((r && this.isCell(r) && t) || "cell" === this.focusMode)
        ) {
            let e = this.collection.getItem(s);
            if (!e) return null;
            let t = (0, y.iQ)(e, this.collection);
            s = null != (i = null == (o = (0, y.W)(t)) ? void 0 : o.key) ? i : null;
        }
        return s;
    }
    getKeyPageAbove(e) {
        let t = e,
            l = this.layoutDelegate.getItemRect(t);
        if (!l) return null;
        let n = Math.max(0, l.y + l.height - this.layoutDelegate.getVisibleRect().height);
        for (; l && l.y > n && null != t; ) {
            var o;
            if (null == (t = null != (o = this.getKeyAbove(t)) ? o : null)) break;
            l = this.layoutDelegate.getItemRect(t);
        }
        return t;
    }
    getKeyPageBelow(e) {
        let t = e,
            l = this.layoutDelegate.getItemRect(t);
        if (!l) return null;
        let n = this.layoutDelegate.getVisibleRect().height,
            o = Math.min(this.layoutDelegate.getContentSize().height, l.y + n);
        for (; l && l.y + l.height < o; ) {
            let e = this.getKeyBelow(t);
            if (null == e) break;
            (l = this.layoutDelegate.getItemRect(e)), (t = e);
        }
        return t;
    }
    getKeyForSearch(e, t) {
        var l, n, o;
        let i = null != t ? t : null;
        if (!this.collator) return null;
        let r = this.collection;
        if (null == (i = null != t ? t : this.getFirstKey())) return null;
        let s = r.getItem(i);
        if (!s) return null;
        "cell" === s.type && (i = null != (l = s.parentKey) ? l : null);
        let u = !1;
        for (; null != i; ) {
            let t = r.getItem(i);
            if (!t) break;
            if (t.textValue) {
                let l = t.textValue.slice(0, e.length);
                if (0 === this.collator.compare(l, e)) {
                    if (this.isRow(t) && "cell" === this.focusMode)
                        return null != (o = null == (n = (0, y.ue)((0, y.iQ)(t, this.collection))) ? void 0 : n.key)
                            ? o
                            : null;
                    return t.key;
                }
            }
            null != (i = this.findNextKey(i, (e) => "item" === e.type)) || u || ((i = this.getFirstKey()), (u = !0));
        }
        return null;
    }
    constructor(e) {
        var t;
        if (
            ((this.collection = e.collection),
            (this.disabledKeys = e.disabledKeys),
            (this.disabledBehavior = e.disabledBehavior || "all"),
            (this.direction = e.direction),
            (this.collator = e.collator),
            !e.layout && !e.ref)
        )
            throw Error("Either a layout or a ref must be specified.");
        (this.layoutDelegate = e.layoutDelegate || (e.layout ? new M(e.layout) : new (0, B.K)(e.ref))),
            (this.focusMode = null != (t = e.focusMode) ? t : "row");
    }
}
class M {
    getContentSize() {
        return this.layout.getContentSize();
    }
    getItemRect(e) {
        var t;
        return (null == (t = this.layout.getLayoutInfo(e)) ? void 0 : t.rect) || null;
    }
    getVisibleRect() {
        return this.layout.virtualizer.visibleRect;
    }
    constructor(e) {
        this.layout = e;
    }
}
class P extends $ {
    isCell(e) {
        return "cell" === e.type || "rowheader" === e.type || "column" === e.type;
    }
    getKeyBelow(e) {
        let t = this.collection.getItem(e);
        if (!t) return null;
        if ("column" === t.type) {
            let e = (0, y.ue)((0, y.iQ)(t, this.collection));
            if (e) return e.key;
            let l = this.getFirstKey();
            return null != l && this.collection.getItem(l) ? super.getKeyForItemInRowByIndex(l, t.index) : null;
        }
        return super.getKeyBelow(e);
    }
    getKeyAbove(e) {
        let t = this.collection.getItem(e);
        if (!t) return null;
        if ("column" === t.type) {
            let e = null != t.parentKey ? this.collection.getItem(t.parentKey) : null;
            return e && "column" === e.type ? e.key : null;
        }
        let l = super.getKeyAbove(e),
            n = null != l ? this.collection.getItem(l) : null;
        return n && "headerrow" !== n.type
            ? l
            : this.isCell(t)
              ? this.collection.columns[t.index].key
              : this.collection.columns[0].key;
    }
    findNextColumnKey(e) {
        let t = this.findNextKey(e.key, (e) => "column" === e.type);
        if (null != t) return t;
        let l = this.collection.headerRows[e.level];
        for (let e of (0, y.iQ)(l, this.collection)) if ("column" === e.type) return e.key;
        return null;
    }
    findPreviousColumnKey(e) {
        let t = this.findPreviousKey(e.key, (e) => "column" === e.type);
        if (null != t) return t;
        let l = this.collection.headerRows[e.level],
            n = [...(0, y.iQ)(l, this.collection)];
        for (let e = n.length - 1; e >= 0; e--) {
            let t = n[e];
            if ("column" === t.type) return t.key;
        }
        return null;
    }
    getKeyRightOf(e) {
        let t = this.collection.getItem(e);
        return t
            ? "column" === t.type
                ? "rtl" === this.direction
                    ? this.findPreviousColumnKey(t)
                    : this.findNextColumnKey(t)
                : super.getKeyRightOf(e)
            : null;
    }
    getKeyLeftOf(e) {
        let t = this.collection.getItem(e);
        return t
            ? "column" === t.type
                ? "rtl" === this.direction
                    ? this.findNextColumnKey(t)
                    : this.findPreviousColumnKey(t)
                : super.getKeyLeftOf(e)
            : null;
    }
    getKeyForSearch(e, t) {
        var l;
        if (!this.collator) return null;
        let n = this.collection,
            o = null != t ? t : this.getFirstKey();
        if (null == o) return null;
        let i = n.getItem(o);
        (null == i ? void 0 : i.type) === "cell" && (o = null != (l = i.parentKey) ? l : null);
        let r = !1;
        for (; null != o; ) {
            let l = n.getItem(o);
            if (!l) break;
            if (l.textValue) {
                let t = l.textValue.slice(0, e.length);
                if (0 === this.collator.compare(t, e)) return l.key;
            }
            for (let o of (0, y.iQ)(l, this.collection)) {
                let r = n.columns[o.index];
                if (n.rowHeaderColumnKeys.has(r.key) && o.textValue) {
                    let r = o.textValue.slice(0, e.length);
                    if (0 === this.collator.compare(r, e)) {
                        let e = null != t ? n.getItem(t) : i;
                        return (null == e ? void 0 : e.type) === "cell" ? o.key : l.key;
                    }
                }
            }
            null != (o = this.getKeyBelow(o)) || r || ((o = this.getFirstKey()), (r = !0));
        }
        return null;
    }
}
var F = l(217512);
let I = new WeakMap();
var R = l(227510),
    V = l(406985),
    H = l(985620),
    j = l(290424),
    T = l(318473),
    L = l(74172),
    O = l(402112),
    U = l(510281),
    Q = l(977283),
    W = l(807177),
    _ = l(98909),
    q = l(790637),
    G = l(47276),
    Y = l(138026),
    J = l(498430),
    Z = l(693321);
function X() {
    return { rowGroupProps: { role: "rowgroup" } };
}
var ee = l(967158),
    et = l(898670),
    el = l(408713),
    en = l(775133),
    eo = l(877247),
    ei = l(805447),
    er = l(885714),
    es = l(518665),
    eu = l(150047),
    ea = l(364643);
function ec(e, t, l) {
    var n;
    let { node: o, isVirtualized: i, focusMode: r = "child", shouldSelectOnPressUp: u, onAction: a } = e,
        { direction: c } = (0, O.Y)(),
        {
            keyboardDelegate: d,
            actions: { onCellAction: g },
        } = I.get(t),
        p = (0, s.useRef)(null),
        m = () => {
            if (l.current) {
                let e = (0, Z.N$)(l.current);
                if ("child" === r) {
                    if (l.current.contains(document.activeElement) && l.current !== document.activeElement) return;
                    let n = "last" === t.selectionManager.childFocusStrategy ? ed(e) : e.firstChild();
                    if (n) return void (0, ei.l)(n);
                }
                ((null == p.current || o.key === p.current) && l.current.contains(document.activeElement)) ||
                    (0, ei.l)(l.current);
            }
        },
        { itemProps: h, isPressed: y } = (0, ea.p)({
            selectionManager: t.selectionManager,
            key: o.key,
            ref: l,
            isVirtualized: i,
            focus: m,
            shouldSelectOnPressUp: u,
            onAction: g ? () => g(o.key) : a,
            isDisabled: 0 === t.collection.size,
        }),
        v = (0, T.v)(h, {
            role: "gridcell",
            onKeyDownCapture: (e) => {
                var n, i, s, u, a;
                if (
                    !e.currentTarget.contains(e.target) ||
                    t.isKeyboardNavigationDisabled ||
                    !l.current ||
                    !document.activeElement
                )
                    return;
                let g = (0, Z.N$)(l.current);
                switch (((g.currentNode = document.activeElement), e.key)) {
                    case "ArrowLeft": {
                        let t = "rtl" === c ? g.nextNode() : g.previousNode();
                        if (
                            ("child" === r && t === l.current && (t = null), e.preventDefault(), e.stopPropagation(), t)
                        )
                            (0, ei.l)(t), (0, es.o)(t, { containingElement: (0, eu.m)(l.current) });
                        else {
                            if ((null == (n = d.getKeyLeftOf) ? void 0 : n.call(d, o.key)) !== o.key) {
                                null == (i = l.current.parentElement) ||
                                    i.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                                break;
                            }
                            "cell" === r && "rtl" === c
                                ? ((0, ei.l)(l.current),
                                  (0, es.o)(l.current, { containingElement: (0, eu.m)(l.current) }))
                                : ((g.currentNode = l.current),
                                  (t = "rtl" === c ? g.firstChild() : ed(g)) &&
                                      ((0, ei.l)(t), (0, es.o)(t, { containingElement: (0, eu.m)(l.current) })));
                        }
                        break;
                    }
                    case "ArrowRight": {
                        let t = "rtl" === c ? g.previousNode() : g.nextNode();
                        if (
                            ("child" === r && t === l.current && (t = null), e.preventDefault(), e.stopPropagation(), t)
                        )
                            (0, ei.l)(t), (0, es.o)(t, { containingElement: (0, eu.m)(l.current) });
                        else {
                            if ((null == (s = d.getKeyRightOf) ? void 0 : s.call(d, o.key)) !== o.key) {
                                null == (u = l.current.parentElement) ||
                                    u.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                                break;
                            }
                            "cell" === r && "ltr" === c
                                ? ((0, ei.l)(l.current),
                                  (0, es.o)(l.current, { containingElement: (0, eu.m)(l.current) }))
                                : ((g.currentNode = l.current),
                                  (t = "rtl" === c ? ed(g) : g.firstChild()) &&
                                      ((0, ei.l)(t), (0, es.o)(t, { containingElement: (0, eu.m)(l.current) })));
                        }
                        break;
                    }
                    case "ArrowUp":
                    case "ArrowDown":
                        !e.altKey &&
                            l.current.contains(e.target) &&
                            (e.stopPropagation(),
                            e.preventDefault(),
                            null == (a = l.current.parentElement) ||
                                a.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)));
                }
            },
            "aria-colspan": o.colSpan,
            "aria-colindex": null != o.colIndex ? o.colIndex + 1 : void 0,
            colSpan: i ? void 0 : o.colSpan,
            onFocus: (e) => {
                if (((p.current = o.key), e.target !== l.current)) {
                    (0, er.pP)() || t.selectionManager.setFocusedKey(o.key);
                    return;
                }
                requestAnimationFrame(() => {
                    "child" === r && document.activeElement === l.current && m();
                });
            },
        });
    return (
        i && (v["aria-colindex"] = (null != (n = o.colIndex) ? n : o.index) + 1),
        u &&
            null != v.tabIndex &&
            null == v.onPointerDown &&
            (v.onPointerDown = (e) => {
                let t = e.currentTarget,
                    l = t.getAttribute("tabindex");
                t.removeAttribute("tabindex"),
                    requestAnimationFrame(() => {
                        null != l && t.setAttribute("tabindex", l);
                    });
            }),
        { gridCellProps: v, isPressed: y }
    );
}
function ed(e) {
    let t = null,
        l = null;
    do (l = e.lastChild()) && (t = l);
    while (l);
    return t;
}
var eg = l(260431),
    ep = l(132716);
let em = { ltr: "ArrowRight", rtl: "ArrowLeft" },
    eh = { ltr: "ArrowLeft", rtl: "ArrowRight" };
var ey = l(126031),
    ev = l(533715),
    ef = l(561514),
    ek = l(784113),
    eb = l(216055);
l(340287);
class eS extends p.Wk {
    addNode(e) {
        super.addNode(e),
            this.columnsDirty || (this.columnsDirty = "column" === e.type),
            "tableheader" === e.type && (this.head = e),
            "tablebody" === e.type && (this.body = e);
    }
    commit(e, t, l = !1) {
        for (let e of (this.updateColumns(l), (this.rows = []), this.getChildren(this.body.key))) {
            let t = e.lastChildKey;
            if (null != t) {
                var n, o;
                let e = this.getItem(t),
                    i = (null != (n = e.colIndex) ? n : e.index) + (null != (o = e.colSpan) ? o : 1);
                if (i !== this.columns.length && !l)
                    throw Error(
                        `Cell count must match column count. Found ${i} cells and ${this.columns.length} columns.`,
                    );
            }
            this.rows.push(e);
        }
        super.commit(e, t, l);
    }
    updateColumns(e) {
        if (!this.columnsDirty) return;
        (this.rowHeaderColumnKeys = new Set()), (this.columns = []);
        let t = new Map(),
            l = (e) => {
                for (let n of ("column" === e.type &&
                    (t.set(e.key, e),
                    !e.hasChildNodes &&
                        ((e.index = this.columns.length),
                        this.columns.push(e),
                        e.props.isRowHeader && this.rowHeaderColumnKeys.add(e.key))),
                this.getChildren(e.key)))
                    l(n);
            };
        for (let e of this.getChildren(this.head.key)) l(e);
        if (
            ((this.headerRows = b(t, this.columns)),
            (this.columnsDirty = !1),
            0 === this.rowHeaderColumnKeys.size && this.columns.length > 0 && !e)
        )
            throw Error("A table must have at least one Column with the isRowHeader prop set to true");
    }
    get columnCount() {
        return this.columns.length;
    }
    *[Symbol.iterator]() {
        -1 !== this.head.key && (yield this.head, yield this.body);
    }
    getFirstKey() {
        return this.body.firstChildKey;
    }
    getLastKey() {
        return this.body.lastChildKey;
    }
    getKeyAfter(e) {
        var t;
        let l = this.getItem(e);
        return (null == l ? void 0 : l.type) === "column" ? (null != (t = l.nextKey) ? t : null) : super.getKeyAfter(e);
    }
    getKeyBefore(e) {
        var t, l;
        let n = this.getItem(e);
        if ((null == n ? void 0 : n.type) === "column") return null != (l = n.prevKey) ? l : null;
        let o = super.getKeyBefore(e);
        return null != o && (null == (t = this.getItem(o)) ? void 0 : t.type) === "tablebody" ? null : o;
    }
    getChildren(e) {
        if (!this.getItem(e)) {
            for (let t of this.headerRows) if (t.key === e) return t.childNodes;
        }
        return super.getChildren(e);
    }
    clone() {
        let e = super.clone();
        return (
            (e.headerRows = this.headerRows),
            (e.columns = this.columns),
            (e.rowHeaderColumnKeys = this.rowHeaderColumnKeys),
            (e.head = this.head),
            (e.body = this.body),
            e
        );
    }
    getTextValue(e) {
        let t = this.getItem(e);
        if (!t) return "";
        if (t.textValue) return t.textValue;
        let l = this.rowHeaderColumnKeys,
            n = [];
        for (let t of this.getChildren(e)) {
            let e = this.columns[t.index];
            if ((l.has(e.key) && t.textValue && n.push(t.textValue), n.length === l.size)) break;
        }
        return n.join(" ");
    }
    constructor(...e) {
        super(...e),
            (this.headerRows = []),
            (this.columns = []),
            (this.rows = []),
            (this.rowHeaderColumnKeys = new Set()),
            (this.head = new eA(-1)),
            (this.body = new eI(-2)),
            (this.columnsDirty = !0);
    }
}
let eC = (0, s.createContext)(null),
    eD = (0, s.createContext)(null),
    ex = (0, s.createContext)(null),
    ew = (0, s.createContext)(null),
    eE = (0, s.forwardRef)(function (e, t) {
        var l;
        [e, t] = (0, r.JT)(e, t, eD);
        let n = (0, C.R)(e),
            { selectionBehavior: o, selectionMode: i, disallowEmptySelection: u } = n,
            a = !!(null == (l = e.dragAndDropHooks) ? void 0 : l.useDraggableCollectionState),
            c = (0, s.useMemo)(
                () => ({
                    selectionBehavior: "none" === i ? null : o,
                    selectionMode: i,
                    disallowEmptySelection: u,
                    allowsDragging: a,
                }),
                [o, i, u, a],
            ),
            d = s.createElement(eN.Provider, { value: c }, s.createElement(m.pM, e));
        return s.createElement(m.GQ, { content: d, createCollection: () => new eS() }, (l) =>
            s.createElement(eK, { props: e, forwardedRef: t, selectionState: n, collection: l }),
        );
    });
function eK({ props: e, forwardedRef: t, selectionState: l, collection: n }) {
    var c, d;
    let p, m, h, v, f;
    [e, t] = (0, r.JT)(e, t, o.Co);
    let { shouldUseVirtualFocus: k, disallowTypeAhead: b, filter: K, ...z } = e,
        N = (0, s.useContext)(eC);
    t = (0, ev.U)(
        (0, s.useMemo)(() => (0, ef.P)(t, null == N ? void 0 : N.tableRef), [t, null == N ? void 0 : N.tableRef]),
    );
    let B =
            ((d = (function (e) {
                var t;
                let [l, n] = (0, s.useState)(!1),
                    { selectionMode: o = "none", showSelectionCheckboxes: i, showDragButtons: r } = e,
                    u = (0, s.useMemo)(
                        () => ({
                            showSelectionCheckboxes: i && "none" !== o,
                            showDragButtons: r,
                            selectionMode: o,
                            columns: [],
                        }),
                        [e.children, i, o, r],
                    ),
                    a = (0, x.G)(
                        e,
                        (0, s.useCallback)((e) => new S(e, null, u), [u]),
                        u,
                    ),
                    { disabledKeys: c, selectionManager: d } = (function (e) {
                        let { collection: t, focusMode: l } = e,
                            n = e.UNSAFE_selectionState || (0, C.R)(e),
                            o = (0, s.useMemo)(
                                () => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()),
                                [e.disabledKeys],
                            ),
                            i = n.setFocusedKey;
                        n.setFocusedKey = (e, n) => {
                            if ("cell" === l && null != e) {
                                let l = t.getItem(e);
                                if ((null == l ? void 0 : l.type) === "item") {
                                    var o, r, s, u;
                                    let i = (0, y.iQ)(l, t);
                                    e =
                                        "last" === n
                                            ? null != (s = null == (o = (0, y.W)(i)) ? void 0 : o.key)
                                                ? s
                                                : null
                                            : null != (u = null == (r = (0, y.ue)(i)) ? void 0 : r.key)
                                              ? u
                                              : null;
                                }
                            }
                            i(e, n);
                        };
                        let r = (0, s.useMemo)(() => new (0, D.Y)(t, n), [t, n]),
                            u = (0, s.useRef)(null);
                        return (
                            (0, s.useEffect)(() => {
                                if (null != n.focusedKey && u.current && !t.getItem(n.focusedKey)) {
                                    let e = u.current.getItem(n.focusedKey),
                                        l =
                                            (null == e ? void 0 : e.parentKey) != null &&
                                            ("cell" === e.type || "rowheader" === e.type || "column" === e.type)
                                                ? u.current.getItem(e.parentKey)
                                                : e;
                                    if (!l) return void n.setFocusedKey(null);
                                    let o = u.current.rows,
                                        i = t.rows,
                                        s = o.length - i.length,
                                        a = Math.min(s > 1 ? Math.max(l.index - s + 1, 0) : l.index, i.length - 1),
                                        c = null;
                                    for (; a >= 0; ) {
                                        if (!r.isDisabled(i[a].key) && "headerrow" !== i[a].type) {
                                            c = i[a];
                                            break;
                                        }
                                        a < i.length - 1 ? a++ : (a > l.index && (a = l.index), a--);
                                    }
                                    if (c) {
                                        let o = c.hasChildNodes ? [...(0, y.iQ)(c, t)] : [],
                                            i =
                                                c.hasChildNodes && l !== e && e && e.index < o.length
                                                    ? o[e.index].key
                                                    : c.key;
                                        n.setFocusedKey(i);
                                    } else n.setFocusedKey(null);
                                }
                                u.current = t;
                            }, [t, r, n, n.focusedKey]),
                            { collection: t, disabledKeys: o, isKeyboardNavigationDisabled: !1, selectionManager: r }
                        );
                    })({ ...e, collection: a, disabledBehavior: e.disabledBehavior || "selection" });
                return {
                    collection: a,
                    disabledKeys: c,
                    selectionManager: d,
                    showSelectionCheckboxes: e.showSelectionCheckboxes || !1,
                    sortDescriptor: null != (t = e.sortDescriptor) ? t : null,
                    isKeyboardNavigationDisabled: 0 === a.size || l,
                    setKeyboardNavigationDisabled: n,
                    sort(t, l) {
                        var n, o;
                        null == (o = e.onSortChange) ||
                            o.call(e, {
                                column: t,
                                direction:
                                    null != l
                                        ? l
                                        : (null == (n = e.sortDescriptor) ? void 0 : n.column) === t
                                          ? w[e.sortDescriptor.direction]
                                          : "ascending",
                            });
                    },
                };
            })({ ...z, collection: n, children: void 0, UNSAFE_selectionState: l })),
            (p = (0, s.useMemo)(() => (K ? d.collection.filter(K) : d.collection), [d.collection, K])),
            (m = d.selectionManager.withCollection(p)),
            { ...d, collection: p, selectionManager: m }),
        { isVirtualized: M, layoutDelegate: X, dropTargetDelegate: ee, CollectionRoot: et } = (0, s.useContext)(i.zL),
        { dragAndDropHooks: el } = e,
        { gridProps: en } = (function (e, t, l) {
            var n;
            let { keyboardDelegate: o, isVirtualized: i, layoutDelegate: r, layout: u } = e,
                a = (0, L.Q)({ usage: "search", sensitivity: "base" }),
                { direction: c } = (0, O.Y)(),
                d = t.selectionManager.disabledBehavior,
                g = (0, s.useMemo)(
                    () =>
                        o ||
                        new P({
                            collection: t.collection,
                            disabledKeys: t.disabledKeys,
                            disabledBehavior: d,
                            ref: l,
                            direction: c,
                            collator: a,
                            layoutDelegate: r,
                            layout: u,
                        }),
                    [o, t.collection, t.disabledKeys, d, l, c, a, r, u],
                ),
                p = (0, H.Bi)(e.id);
            E.set(t, p);
            let { gridProps: m } = (function (e, t, l) {
                let {
                        isVirtualized: n,
                        disallowTypeAhead: o,
                        keyboardDelegate: i,
                        focusMode: r,
                        scrollRef: u,
                        getRowText: a,
                        onRowAction: c,
                        onCellAction: d,
                        escapeKeyBehavior: g = "clearSelection",
                        shouldSelectOnPressUp: p,
                    } = e,
                    { selectionManager: m } = t;
                e["aria-label"] ||
                    e["aria-labelledby"] ||
                    console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
                let h = (0, L.Q)({ usage: "search", sensitivity: "base" }),
                    { direction: y } = (0, O.Y)(),
                    v = t.selectionManager.disabledBehavior,
                    f = (0, s.useMemo)(
                        () =>
                            i ||
                            new $({
                                collection: t.collection,
                                disabledKeys: t.disabledKeys,
                                disabledBehavior: v,
                                ref: l,
                                direction: y,
                                collator: h,
                                focusMode: r,
                            }),
                        [i, t.collection, t.disabledKeys, v, l, y, h, r],
                    ),
                    { collectionProps: k } = (0, Q.y)({
                        ref: l,
                        selectionManager: m,
                        keyboardDelegate: f,
                        isVirtualized: n,
                        scrollRef: u,
                        disallowTypeAhead: o,
                        escapeKeyBehavior: g,
                    }),
                    b = (0, H.Bi)(e.id);
                I.set(t, {
                    keyboardDelegate: f,
                    actions: { onRowAction: c, onCellAction: d },
                    shouldSelectOnPressUp: p,
                });
                let S = (0, V.m)({ selectionManager: m, hasItemActions: !!(c || d) }),
                    C = (0, j.$)(e, { labelable: !0 }),
                    D = (0, s.useCallback)(
                        (e) => {
                            if (m.isFocused) {
                                e.currentTarget.contains(e.target) || m.setFocused(!1);
                                return;
                            }
                            e.currentTarget.contains(e.target) && m.setFocused(!0);
                        },
                        [m],
                    ),
                    x = (0, s.useMemo)(() => ({ onBlur: k.onBlur, onFocus: D }), [D, k.onBlur]),
                    w = (0, U.$)(l, { isDisabled: 0 !== t.collection.size }),
                    E = (0, T.v)(
                        C,
                        {
                            role: "grid",
                            id: b,
                            "aria-multiselectable": "multiple" === m.selectionMode ? "true" : void 0,
                        },
                        t.isKeyboardNavigationDisabled ? x : k,
                        (0 === t.collection.size && { tabIndex: w ? -1 : 0 }) || void 0,
                        S,
                    );
                return (
                    n && ((E["aria-rowcount"] = t.collection.size), (E["aria-colcount"] = t.collection.columnCount)),
                    (0, R.H)({ getRowText: a }, t),
                    { gridProps: E }
                );
            })({ ...e, id: p, keyboardDelegate: g }, t, l);
            i && (m["aria-rowcount"] = t.collection.size + t.collection.headerRows.length),
                (0, q.D5)() && "expandedKeys" in t && (m.role = "treegrid");
            let { column: h, direction: y } = t.sortDescriptor || {},
                v = (0, G.o)((n = A) && n.__esModule ? n.default : n, "@react-aria/table"),
                f = (0, s.useMemo)(() => {
                    var e, l;
                    let n =
                        null != (l = null == (e = t.collection.columns.find((e) => e.key === h)) ? void 0 : e.textValue)
                            ? l
                            : "";
                    return y && h ? v.format(`${y}Sort`, { columnName: n }) : void 0;
                }, [y, h, t.collection.columns]),
                k = (0, W.I)(f);
            return (
                (0, _.w)(() => {
                    f && (0, F.iP)(f, "assertive", 500);
                }, [f]),
                {
                    gridProps: (0, T.v)(m, k, {
                        "aria-describedby": [k["aria-describedby"], m["aria-describedby"]].filter(Boolean).join(" "),
                    }),
                }
            );
        })({ ...z, layoutDelegate: X, isVirtualized: M }, B, t),
        eo = B.selectionManager,
        ei = !!(null == el ? void 0 : el.useDraggableCollectionState),
        er = !!(null == el ? void 0 : el.useDroppableCollectionState);
    (0, s.useRef)(ei), (0, s.useRef)(er), (0, s.useEffect)(() => {}, [ei, er]);
    let es = !1,
        eu = null,
        ea = (0, s.useRef)(null);
    if (ei && el) {
        (h = el.useDraggableCollectionState({
            collection: B.collection,
            selectionManager: eo,
            preview: el.renderDragPreview ? ea : void 0,
        })),
            el.useDraggableCollection({}, h, t);
        let e = el.DragPreview;
        eu = el.renderDragPreview ? s.createElement(e, { ref: ea }, el.renderDragPreview) : null;
    }
    if (er && el) {
        v = el.useDroppableCollectionState({ collection: B.collection, selectionManager: eo });
        let e = new (0, Y.n)({
                collection: B.collection,
                disabledKeys: eo.disabledKeys,
                disabledBehavior: eo.disabledBehavior,
                ref: t,
                layoutDelegate: X,
            }),
            l = el.dropTargetDelegate || ee || new el.ListDropTargetDelegate(n.rows, t);
        (f = el.useDroppableCollection({ keyboardDelegate: e, dropTargetDelegate: l }, v, t)),
            (es = v.isDropTarget({ type: "root" }));
    }
    let { focusProps: ec, isFocused: ed, isFocusVisible: eg } = (0, J.o)(),
        ep = (0, r.Sl)({
            className: e.className,
            style: e.style,
            defaultClassName: "react-aria-Table",
            values: { isDropTarget: es, isFocused: ed, isFocusVisible: eg, state: B },
        }),
        em = !!(ei && !(null == h ? void 0 : h.isDisabled)),
        eh = ep.style,
        ey = null;
    N &&
        ((ey = N.useTableColumnResizeState({ tableWidth: N.tableWidth }, B)),
        M || (eh = { ...eh, tableLayout: "fixed", width: "fit-content" }));
    let ek = ez("table"),
        eb = (0, j.$)(e, { global: !0 });
    return s.createElement(
        r.Kq,
        {
            values: [
                [ex, B],
                [ew, ey],
                [u, { dragAndDropHooks: el, dragState: h, dropState: v }],
                [a, { render: eL }],
                [o.Co, null],
                [o.wv, null],
            ],
        },
        s.createElement(
            Z.n1,
            null,
            s.createElement(
                ek,
                {
                    ...(0, T.v)(eb, ep, en, ec, null == f ? void 0 : f.collectionProps),
                    style: eh,
                    ref: t,
                    slot: e.slot || void 0,
                    onScroll: e.onScroll,
                    "data-allows-dragging": em || void 0,
                    "data-drop-target": es || void 0,
                    "data-focused": ed || void 0,
                    "data-focus-visible": eg || void 0,
                },
                s.createElement(
                    g.D,
                    null,
                    s.createElement(et, {
                        collection: B.collection,
                        scrollRef: null != (c = null == N ? void 0 : N.scrollRef) ? c : t,
                        persistedKeys: (function (e, t, l) {
                            var n, o, i, r, u, a;
                            let c = e.focusedKey,
                                d = null;
                            if (
                                (null == t || null == (n = t.isVirtualDragging) ? void 0 : n.call(t)) &&
                                (null == l || null == (o = l.target) ? void 0 : o.type) === "item" &&
                                ((d = l.target.key), "after" === l.target.dropPosition)
                            ) {
                                let e = l.collection.getKeyAfter(d),
                                    t = null;
                                if (null != e) {
                                    let n =
                                        null != (r = null == (i = l.collection.getItem(d)) ? void 0 : i.level) ? r : 0;
                                    for (; e; ) {
                                        let o = l.collection.getItem(e);
                                        if (!o) break;
                                        if ("item" !== o.type) {
                                            e = l.collection.getKeyAfter(e);
                                            continue;
                                        }
                                        if ((null != (u = o.level) ? u : 0) <= n) break;
                                        (t = e), (e = l.collection.getKeyAfter(e));
                                    }
                                }
                                d = null != (a = null != e ? e : t) ? a : d;
                            }
                            return (0, s.useMemo)(() => new Set([c, d].filter((e) => null != e)), [c, d]);
                        })(eo, el, v),
                    }),
                ),
            ),
        ),
        eu,
    );
}
function ez(e) {
    let { isVirtualized: t } = (0, s.useContext)(i.zL);
    return t ? "div" : e;
}
let eN = (0, s.createContext)(null);
class eA extends p.Pt {}
eA.type = "tableheader";
let eB = (0, m.yq)(
    eA,
    (e, t) => {
        let l = (0, s.useContext)(ex).collection,
            n = (0, h.p)({
                items: l.headerRows,
                children: (0, s.useCallback)((e) => {
                    if ("headerrow" === e.type) return s.createElement(e$, { item: e });
                    throw Error("Unsupported node type in TableHeader: " + e.type);
                }, []),
            }),
            o = ez("thead"),
            { rowGroupProps: i } = X(),
            { hoverProps: u, isHovered: a } = (0, ee.M)({
                onHoverStart: e.onHoverStart,
                onHoverChange: e.onHoverChange,
                onHoverEnd: e.onHoverEnd,
            }),
            c = (0, r.Sl)({
                className: e.className,
                style: e.style,
                defaultClassName: "react-aria-TableHeader",
                values: { isHovered: a },
            });
        return s.createElement(
            o,
            { ...(0, T.v)((0, j.$)(e, { global: !0 }), i, u), ...c, ref: t, "data-hovered": a || void 0 },
            n,
        );
    },
    (e) => s.createElement(m.pM, { dependencies: e.dependencies, items: e.columns }, e.children),
);
function e$({ item: e }) {
    let t = (0, s.useRef)(null),
        l = (0, s.useContext)(ex),
        { isVirtualized: n, CollectionBranch: u } = (0, s.useContext)(i.zL),
        { rowProps: a } = (function (e, t) {
            let { node: l, isVirtualized: n } = e,
                o = { role: "row" };
            return n && !((0, q.D5)() && "expandedKeys" in t) && (o["aria-rowindex"] = l.index + 1), { rowProps: o };
        })({ node: e, isVirtualized: n }, l),
        { checkboxProps: c } = (function (e) {
            var t;
            let { isEmpty: l, isSelectAll: n, selectionMode: o } = e.selectionManager;
            return {
                checkboxProps: {
                    "aria-label": (0, G.o)((t = A) && t.__esModule ? t.default : t, "@react-aria/table").format(
                        "single" === o ? "select" : "selectAll",
                    ),
                    isSelected: n,
                    isDisabled:
                        "multiple" !== o ||
                        0 === e.collection.size ||
                        (1 === e.collection.rows.length && "loader" === e.collection.rows[0].type),
                    isIndeterminate: !l && !n,
                    onChange: () => e.selectionManager.toggleSelectAll(),
                },
            };
        })(l),
        d = ez("tr");
    return s.createElement(
        d,
        { ...a, ref: t },
        s.createElement(
            r.Kq,
            { values: [[o.BP, { slots: { selection: c } }]] },
            s.createElement(u, { collection: l.collection, parent: e }),
        ),
    );
}
class eM extends p.Pt {}
eM.type = "column";
let eP = (0, m.KU)(eM, (e, t, l) => {
        var n, o;
        let u = (0, ev.U)(t),
            a = (0, s.useContext)(ex),
            { isVirtualized: c } = (0, s.useContext)(i.zL),
            { columnHeaderProps: d } = (function (e, t, l) {
                var n, o, i;
                let r,
                    u,
                    { node: a } = e,
                    c = a.props.allowsSorting,
                    { gridCellProps: d } = ec({ ...e, focusMode: "child" }, t, l),
                    g = a.props.isSelectionCell && "single" === t.selectionManager.selectionMode,
                    { pressProps: p } = (0, en.d)({
                        isDisabled: !c || g,
                        onPress() {
                            t.sort(a.key);
                        },
                        ref: l,
                    }),
                    { focusableProps: m } = (0, eo.Wc)({}, l),
                    h = (null == (n = t.sortDescriptor) ? void 0 : n.column) === a.key,
                    y = null == (o = t.sortDescriptor) ? void 0 : o.direction;
                a.props.allowsSorting && !(0, el.m0)() && (u = h ? y : "none");
                let v = (0, G.o)((i = A) && i.__esModule ? i.default : i, "@react-aria/table");
                c && ((r = `${v.format("sortable")}`), h && y && (0, el.m0)() && (r = `${r}, ${v.format(y)}`));
                let f = (0, W.I)(r),
                    k = 0 === t.collection.size;
                return (
                    (0, s.useEffect)(() => {
                        k && t.selectionManager.focusedKey === a.key && t.selectionManager.setFocusedKey(null);
                    }, [k, t.selectionManager, a.key]),
                    {
                        columnHeaderProps: {
                            ...(0, T.v)(m, d, p, f, k ? { tabIndex: -1 } : null),
                            role: "columnheader",
                            id: (function (e, t) {
                                let l = E.get(e);
                                if (!l) throw Error("Unknown grid");
                                return `${l}-${K(t)}`;
                            })(t, a.key),
                            "aria-colspan": a.colSpan && a.colSpan > 1 ? a.colSpan : void 0,
                            "aria-sort": u,
                        },
                    }
                );
            })({ node: l, isVirtualized: c }, a, u),
            { isFocused: g, isFocusVisible: p, focusProps: m } = (0, J.o)(),
            h = (0, s.useContext)(ew),
            y = !1;
        h && (y = h.resizingColumn === l.key);
        let { hoverProps: v, isHovered: f } = (0, ee.M)({ isDisabled: !e.allowsSorting }),
            k = (0, r.Sl)({
                ...e,
                id: void 0,
                children: l.rendered,
                defaultClassName: "react-aria-Column",
                values: {
                    isHovered: f,
                    isFocused: g,
                    isFocusVisible: p,
                    allowsSorting: l.props.allowsSorting,
                    sortDirection:
                        (null == (n = a.sortDescriptor) ? void 0 : n.column) === l.key
                            ? a.sortDescriptor.direction
                            : void 0,
                    isResizing: y,
                    startResize: () => {
                        if (h) h.startResize(l.key), a.setKeyboardNavigationDisabled(!0);
                        else throw Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
                    },
                    sort: (e) => {
                        a.sort(l.key, e);
                    },
                },
            }),
            b = k.style;
        h && (b = { ...b, width: h.getColumnWidth(l.key) });
        let S = ez("th"),
            C = (0, j.$)(e, { global: !0 });
        return (
            delete C.id,
            s.createElement(
                S,
                {
                    ...(0, T.v)(C, d, m, v),
                    ...k,
                    style: b,
                    ref: u,
                    "data-hovered": f || void 0,
                    "data-focused": g || void 0,
                    "data-focus-visible": p || void 0,
                    "data-resizing": y || void 0,
                    "data-allows-sorting": l.props.allowsSorting || void 0,
                    "data-sort-direction":
                        (null == (o = a.sortDescriptor) ? void 0 : o.column) === l.key
                            ? a.sortDescriptor.direction
                            : void 0,
                },
                s.createElement(
                    r.Kq,
                    {
                        values: [
                            [eF, { column: l, triggerRef: u }],
                            [i.zL, i.N],
                        ],
                    },
                    k.children,
                ),
            )
        );
    }),
    eF = (0, s.createContext)(null);
class eI extends p.ru {}
eI.type = "tablebody";
let eR = (0, m.yq)(eI, (e, t) => {
    var l, n;
    let o,
        a,
        d,
        g,
        p = (0, s.useContext)(ex),
        { isVirtualized: m } = (0, s.useContext)(i.zL),
        h = p.collection,
        { CollectionBranch: y } = (0, s.useContext)(i.zL),
        { dragAndDropHooks: v, dropState: f } = (0, s.useContext)(u),
        k = !!(null == v ? void 0 : v.useDroppableCollectionState) && !(null == f ? void 0 : f.isDisabled),
        b = k && !!f && null != (l = f.isDropTarget({ type: "root" })) && l,
        S = 0 === h.size,
        C = { isDropTarget: b, isEmpty: S },
        D = (0, r.Sl)({ ...e, id: void 0, children: void 0, defaultClassName: "react-aria-TableBody", values: C }),
        x = ez("tr"),
        w = ez("td"),
        E = h.columnCount;
    if (S && e.renderEmptyState && p) {
        let t = {},
            l = {};
        m ? ((t["aria-colspan"] = E), (l = { display: "contents" })) : (t.colSpan = E),
            (g = s.createElement(
                x,
                { role: "row", style: l },
                s.createElement(w, { role: "rowheader", ...t, style: l }, e.renderEmptyState(C)),
            ));
    }
    let { rowGroupProps: K } = X(),
        z = ez("tbody"),
        N = (0, j.$)(e, { global: !0 });
    return s.createElement(
        z,
        { ...(0, T.v)(N, D, K), ref: t, "data-empty": S || void 0 },
        k && s.createElement(eU, null),
        s.createElement(y, {
            collection: h,
            parent: h.body,
            renderDropIndicator:
                ((o = null == v ? void 0 : v.renderDropIndicator),
                (a = null == v || null == (n = v.isVirtualDragging) ? void 0 : n.call(v)),
                (d = (0, s.useCallback)(
                    (e) => {
                        if (a || (null == f ? void 0 : f.isDropTarget(e)))
                            return o ? o(e) : s.createElement(c, { target: e });
                    },
                    [null == f ? void 0 : f.target, a, o],
                )),
                (null == v ? void 0 : v.useDropIndicator) ? d : void 0),
        }),
        g,
    );
});
class eV extends p.Pt {
    filter(e, t, l) {
        for (let n of e.getChildren(this.key))
            if (l(n.textValue, n)) {
                let l = this.clone();
                return t.addDescendants(l, e), l;
            }
        return null;
    }
}
eV.type = "item";
let eH = (0, m.yq)(
    eV,
    (e, t, l) => {
        let a,
            c,
            g = (0, ev.U)(t),
            p = (0, s.useContext)(ex),
            { dragAndDropHooks: m, dragState: h, dropState: v } = (0, s.useContext)(u),
            { isVirtualized: f, CollectionBranch: k } = (0, s.useContext)(i.zL),
            { rowProps: b, ...S } = (function (e, t, l) {
                let { node: n, isVirtualized: o } = e,
                    { rowProps: i, ...r } = (function (e, t, l) {
                        var n, o;
                        let { node: i, isVirtualized: r, shouldSelectOnPressUp: s, onAction: u } = e,
                            { actions: a, shouldSelectOnPressUp: c } = I.get(t),
                            d = a.onRowAction
                                ? () => {
                                      var e;
                                      return null == (e = a.onRowAction) ? void 0 : e.call(a, i.key);
                                  }
                                : u,
                            { itemProps: g, ...p } = (0, ea.p)({
                                selectionManager: t.selectionManager,
                                key: i.key,
                                ref: l,
                                isVirtualized: r,
                                shouldSelectOnPressUp: c || s,
                                onAction:
                                    d || (null == i || null == (n = i.props) ? void 0 : n.onAction)
                                        ? (0, eg.c)(null == i || null == (o = i.props) ? void 0 : o.onAction, d)
                                        : void 0,
                                isDisabled: 0 === t.collection.size,
                            }),
                            m = t.selectionManager.isSelected(i.key),
                            h = {
                                role: "row",
                                "aria-selected": "none" !== t.selectionManager.selectionMode ? m : void 0,
                                "aria-disabled": p.isDisabled || void 0,
                                ...g,
                            };
                        return r && (h["aria-rowindex"] = i.index + 1), { rowProps: h, ...p };
                    })(e, t, l),
                    { direction: s } = (0, O.Y)();
                o && !((0, q.D5)() && "expandedKeys" in t)
                    ? (i["aria-rowindex"] = n.index + 1 + t.collection.headerRows.length)
                    : delete i["aria-rowindex"];
                let u = {};
                if ((0, q.D5)() && "expandedKeys" in t) {
                    let e = t.keyMap.get(n.key);
                    if (null != e) {
                        var a, c, d, g, p, m, h, v, f, k;
                        let l =
                            (null == (a = e.props) ? void 0 : a.UNSTABLE_childItems) ||
                            (null == (d = e.props) || null == (c = d.children) ? void 0 : c.length) > t.userColumnCount;
                        u = {
                            onKeyDown: (n) => {
                                n.key === em[s] &&
                                t.selectionManager.focusedKey === e.key &&
                                l &&
                                "all" !== t.expandedKeys &&
                                !t.expandedKeys.has(e.key)
                                    ? (t.toggleKey(e.key), n.stopPropagation())
                                    : n.key === eh[s] &&
                                      t.selectionManager.focusedKey === e.key &&
                                      l &&
                                      ("all" === t.expandedKeys || t.expandedKeys.has(e.key)) &&
                                      (t.toggleKey(e.key), n.stopPropagation());
                            },
                            "aria-expanded": l ? "all" === t.expandedKeys || t.expandedKeys.has(n.key) : void 0,
                            "aria-level": e.level,
                            "aria-posinset": (null != (h = e.indexOfType) ? h : 0) + 1,
                            "aria-setsize":
                                e.level > 1
                                    ? (null !=
                                      (f =
                                          null ==
                                          (g = (0, y.W)(
                                              null !=
                                                  (v = null == (p = t.keyMap.get(e.parentKey)) ? void 0 : p.childNodes)
                                                  ? v
                                                  : [],
                                          ))
                                              ? void 0
                                              : g.indexOfType)
                                          ? f
                                          : 0) + 1
                                    : (null !=
                                      (k =
                                          null == (m = (0, y.W)(t.collection.body.childNodes)) ? void 0 : m.indexOfType)
                                          ? k
                                          : 0) + 1,
                        };
                    }
                }
                let b = (0, ep.HI)(n.props),
                    S = r.hasAction ? b : {};
                return { rowProps: { ...(0, T.v)(i, u, S), "aria-labelledby": N(t, n.key) }, ...r };
            })({ node: l, shouldSelectOnPressUp: !!h, isVirtualized: f }, p, g),
            { isFocused: C, isFocusVisible: D, focusProps: x } = (0, J.o)(),
            { isFocusVisible: w, focusProps: E } = (0, J.o)({ within: !0 }),
            { hoverProps: K, isHovered: z } = (0, ee.M)({
                isDisabled: !S.allowsSelection && !S.hasAction,
                onHoverStart: e.onHoverStart,
                onHoverChange: e.onHoverChange,
                onHoverEnd: e.onHoverEnd,
            }),
            { checkboxProps: A } = (function (e, t) {
                let { key: l } = e,
                    { checkboxProps: n } = (function (e, t) {
                        var l;
                        let { key: n } = e,
                            o = t.selectionManager,
                            i = (0, H.Bi)(),
                            r = !t.selectionManager.canSelectItem(n),
                            s = t.selectionManager.isSelected(n);
                        return {
                            checkboxProps: {
                                id: i,
                                "aria-label": (0, G.o)(
                                    (l = et.A) && l.__esModule ? l.default : l,
                                    "@react-aria/grid",
                                ).format("select"),
                                isSelected: s,
                                isDisabled: r,
                                onChange: () => o.toggleSelection(n),
                            },
                        };
                    })(e, t);
                return { checkboxProps: { ...n, "aria-labelledby": `${n.id} ${N(t, l)}` } };
            })({ key: l.key }, p);
        h && m && (a = m.useDraggableItem({ key: l.key, hasDragButton: !0 }, h));
        let B = (0, s.useRef)(null),
            { visuallyHiddenProps: $ } = (0, ey.B)();
        v && m && (c = m.useDropIndicator({ target: { type: "item", key: l.key, dropPosition: "on" } }, v, B));
        let M = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
            h && M.current;
        }, []);
        let P = h && h.isDragging(l.key),
            { children: F, ...R } = e,
            V = (0, r.Sl)({
                ...R,
                id: void 0,
                defaultClassName: "react-aria-Row",
                values: {
                    ...S,
                    isHovered: z,
                    isFocused: C,
                    isFocusVisible: D,
                    selectionMode: p.selectionManager.selectionMode,
                    selectionBehavior: p.selectionManager.selectionBehavior,
                    isDragging: P,
                    isDropTarget: null == c ? void 0 : c.isDropTarget,
                    isFocusVisibleWithin: w,
                    id: l.key,
                },
            }),
            L = ez("tr"),
            U = ez("td"),
            Q = (0, j.$)(e, { global: !0 });
        return (
            delete Q.id,
            delete Q.onClick,
            s.createElement(
                s.Fragment,
                null,
                c &&
                    !c.isHidden &&
                    s.createElement(
                        L,
                        { role: "row", style: { height: 0 } },
                        s.createElement(
                            U,
                            { role: "gridcell", colSpan: p.collection.columnCount, style: { padding: 0 } },
                            s.createElement("div", { role: "button", ...$, ...c.dropIndicatorProps, ref: B }),
                        ),
                    ),
                s.createElement(
                    L,
                    {
                        ...(0, T.v)(Q, V, b, x, K, null == a ? void 0 : a.dragProps, E),
                        ref: g,
                        "data-disabled": S.isDisabled || void 0,
                        "data-selected": S.isSelected || void 0,
                        "data-hovered": z || void 0,
                        "data-focused": S.isFocused || void 0,
                        "data-focus-visible": D || void 0,
                        "data-pressed": S.isPressed || void 0,
                        "data-dragging": P || void 0,
                        "data-drop-target": (null == c ? void 0 : c.isDropTarget) || void 0,
                        "data-selection-mode":
                            "none" === p.selectionManager.selectionMode ? void 0 : p.selectionManager.selectionMode,
                        "data-focus-visible-within": w || void 0,
                    },
                    s.createElement(
                        r.Kq,
                        {
                            values: [
                                [o.BP, { slots: { [r.P_]: {}, selection: A } }],
                                [
                                    n.k,
                                    {
                                        slots: {
                                            [r.P_]: {},
                                            drag: {
                                                ...(null == a ? void 0 : a.dragButtonProps),
                                                ref: M,
                                                style: { pointerEvents: "none" },
                                            },
                                        },
                                    },
                                ],
                                [d.r, { isSelected: S.isSelected }],
                            ],
                        },
                        s.createElement(k, { collection: p.collection, parent: l }),
                    ),
                ),
            )
        );
    },
    (e) => {
        if (null == e.id && "function" == typeof e.children)
            throw Error(
                "No id detected for the Row element. The Row element requires a id to be provided to it when the cells are rendered dynamically.",
            );
        let t = [e.value].concat(e.dependencies);
        return s.createElement(m.pM, { dependencies: t, items: e.columns, idScope: e.id }, e.children);
    },
);
class ej extends p.Pt {}
ej.type = "cell";
let eT = (0, m.KU)(ej, (e, t, l) => {
    let n = (0, ev.U)(t),
        o = (0, s.useContext)(ex),
        { dragState: a } = (0, s.useContext)(u),
        { isVirtualized: c } = (0, s.useContext)(i.zL);
    l.column = o.collection.columns[l.index];
    let { gridCellProps: d, isPressed: g } = (function (e, t, l) {
            var n;
            let { gridCellProps: o, isPressed: i } = ec(e, t, l),
                r = null == (n = e.node.column) ? void 0 : n.key;
            return (
                null != r &&
                    t.collection.rowHeaderColumnKeys.has(r) &&
                    ((o.role = "rowheader"), (o.id = z(t, e.node.parentKey, r))),
                { gridCellProps: o, isPressed: i }
            );
        })({ node: l, shouldSelectOnPressUp: !!a, isVirtualized: c }, o, n),
        { isFocused: p, isFocusVisible: m, focusProps: h } = (0, J.o)(),
        { hoverProps: y, isHovered: v } = (0, ee.M)({}),
        f = (0, r.Sl)({
            ...e,
            id: void 0,
            defaultClassName: "react-aria-Cell",
            values: { isFocused: p, isFocusVisible: m, isPressed: g, isHovered: v, id: l.key },
        }),
        k = ez("td"),
        b = (0, j.$)(e, { global: !0 });
    return (
        delete b.id,
        s.createElement(
            k,
            {
                ...(0, T.v)(b, f, d, h, y),
                ref: n,
                "data-focused": p || void 0,
                "data-focus-visible": m || void 0,
                "data-pressed": g || void 0,
            },
            s.createElement(i.zL.Provider, { value: i.N }, f.children),
        )
    );
});
function eL(e, t) {
    t = (0, ev.U)(t);
    let { dragAndDropHooks: l, dropState: n } = (0, s.useContext)(u),
        o = (0, s.useRef)(null),
        { dropIndicatorProps: i, isHidden: r, isDropTarget: a } = l.useDropIndicator(e, n, o);
    return r ? null : s.createElement(eO, { ...e, dropIndicatorProps: i, isDropTarget: a, buttonRef: o, ref: t });
}
let eO = (0, s.forwardRef)(function (e, t) {
    let { dropIndicatorProps: l, isDropTarget: n, buttonRef: o, ...i } = e,
        u = (0, s.useContext)(ex),
        { visuallyHiddenProps: a } = (0, ey.B)(),
        c = (0, r.Sl)({ ...i, defaultClassName: "react-aria-DropIndicator", values: { isDropTarget: n } }),
        d = ez("tr"),
        g = ez("td");
    return s.createElement(
        d,
        { ...(0, j.$)(e, { global: !0 }), ...c, role: "row", ref: t, "data-drop-target": n || void 0 },
        s.createElement(
            g,
            { role: "gridcell", colSpan: u.collection.columnCount, style: { padding: 0 } },
            s.createElement("div", { ...a, role: "button", ...l, ref: o }),
            c.children,
        ),
    );
});
function eU() {
    let e = (0, s.useContext)(ex),
        { dragAndDropHooks: t, dropState: l } = (0, s.useContext)(u),
        n = (0, s.useRef)(null),
        { dropIndicatorProps: o } = t.useDropIndicator({ target: { type: "root" } }, l, n),
        i = l.isDropTarget({ type: "root" }),
        { visuallyHiddenProps: r } = (0, ey.B)(),
        a = ez("tr"),
        c = ez("td");
    return !i && o["aria-hidden"]
        ? null
        : s.createElement(
              a,
              { role: "row", "aria-hidden": o["aria-hidden"], style: { height: 0 } },
              s.createElement(
                  c,
                  { role: "gridcell", colSpan: e.collection.columnCount, style: { padding: 0 } },
                  s.createElement("div", { role: "button", ...r, ...o, ref: n }),
              ),
          );
}
(0, m.KU)(p.OJ, function (e, t, l) {
    let n = (0, s.useContext)(ex),
        { isVirtualized: o } = (0, s.useContext)(i.zL),
        { isLoading: u, onLoadMore: a, scrollOffset: c, ...d } = e,
        g = n.collection.columns.length,
        p = (0, s.useRef)(null),
        m = (0, s.useMemo)(
            () => ({ onLoadMore: a, collection: null == n ? void 0 : n.collection, sentinelRef: p, scrollOffset: c }),
            [a, c, null == n ? void 0 : n.collection],
        );
    (0, ek.n)(m, p);
    let h = (0, r.Sl)({
            ...d,
            id: void 0,
            children: l.rendered,
            defaultClassName: "react-aria-TableLoadingIndicator",
            values: null,
        }),
        y = ez("tr"),
        v = ez("td"),
        f = {},
        k = {};
    return (
        o ? ((f["aria-colspan"] = g), (k = { display: "contents" })) : (f.colSpan = g),
        s.createElement(
            s.Fragment,
            null,
            s.createElement(
                y,
                { style: { height: 0 }, inert: (0, eb.Y)(!0) },
                s.createElement(
                    v,
                    { style: { padding: 0, border: 0 } },
                    s.createElement("div", {
                        "data-testid": "loadMoreSentinel",
                        ref: p,
                        style: { position: "relative", height: 1, width: 1 },
                    }),
                ),
            ),
            u &&
                h.children &&
                s.createElement(
                    y,
                    { ...(0, T.v)((0, j.$)(e, { global: !0 }), {}), ...h, role: "row", ref: t },
                    s.createElement(v, { role: "rowheader", ...f, style: k }, h.children),
                ),
        )
    );
});
