r.d(n, {
    V: function () {
        return i;
    }
}),
    r(192379);
class i {
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
        let n = this.keyMap.get(e);
        return n ? n.prevKey : null;
    }
    getKeyAfter(e) {
        let n = this.keyMap.get(e);
        return n ? n.nextKey : null;
    }
    getFirstKey() {
        var e;
        return null === (e = [...this.rows][0]) || void 0 === e ? void 0 : e.key;
    }
    getLastKey() {
        var e;
        let n = [...this.rows];
        return null === (e = n[n.length - 1]) || void 0 === e ? void 0 : e.key;
    }
    getItem(e) {
        return this.keyMap.get(e);
    }
    at(e) {
        let n = [...this.getKeys()];
        return this.getItem(n[e]);
    }
    getChildren(e) {
        let n = this.keyMap.get(e);
        return (null == n ? void 0 : n.childNodes) || [];
    }
    constructor(e) {
        let n;
        (this.keyMap = new Map()), (this.keyMap = new Map()), (this.columnCount = null == e ? void 0 : e.columnCount), (this.rows = []);
        let r = (n) => {
                let a,
                    o = this.keyMap.get(n.key);
                e.visitNode && (n = e.visitNode(n)), this.keyMap.set(n.key, n);
                let s = new Set();
                for (let e of n.childNodes) 'cell' === e.type && null == e.parentKey && (e.parentKey = n.key), s.add(e.key), a ? ((a.nextKey = e.key), (e.prevKey = a.key)) : (e.prevKey = null), r(e), (a = e);
                if ((a && (a.nextKey = null), o)) for (let e of o.childNodes) !s.has(e.key) && i(e);
            },
            i = (e) => {
                for (let n of (this.keyMap.delete(e.key), e.childNodes)) this.keyMap.get(n.key) === n && i(n);
            };
        e.items.forEach((e, i) => {
            let a = {
                level: 0,
                key: 'row-' + i,
                type: 'row',
                value: void 0,
                hasChildNodes: !0,
                childNodes: [...e.childNodes],
                rendered: void 0,
                textValue: void 0,
                ...e
            };
            n ? ((n.nextKey = a.key), (a.prevKey = n.key)) : (a.prevKey = null), this.rows.push(a), r(a), (n = a);
        }),
            n && (n.nextKey = null);
    }
}
