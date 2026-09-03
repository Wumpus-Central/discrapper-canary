r.d(t, { OJ: () => a, Pt: () => n, Wk: () => u, _B: () => s, ru: () => i });
class n {
    constructor(e) {
        (this.value = null),
            (this.level = 0),
            (this.hasChildNodes = !1),
            (this.rendered = null),
            (this.textValue = ""),
            (this["aria-label"] = void 0),
            (this.index = 0),
            (this.parentKey = null),
            (this.prevKey = null),
            (this.nextKey = null),
            (this.firstChildKey = null),
            (this.lastChildKey = null),
            (this.props = {}),
            (this.colSpan = null),
            (this.colIndex = null),
            (this.type = this.constructor.type),
            (this.key = e);
    }
    get childNodes() {
        throw Error("childNodes is not supported");
    }
    clone() {
        let e = new this.constructor(this.key);
        return (
            (e.value = this.value),
            (e.level = this.level),
            (e.hasChildNodes = this.hasChildNodes),
            (e.rendered = this.rendered),
            (e.textValue = this.textValue),
            (e["aria-label"] = this["aria-label"]),
            (e.index = this.index),
            (e.parentKey = this.parentKey),
            (e.prevKey = this.prevKey),
            (e.nextKey = this.nextKey),
            (e.firstChildKey = this.firstChildKey),
            (e.lastChildKey = this.lastChildKey),
            (e.props = this.props),
            (e.render = this.render),
            (e.colSpan = this.colSpan),
            (e.colIndex = this.colIndex),
            e
        );
    }
    filter(e, t, r) {
        let n = this.clone();
        return t.addDescendants(n, e), n;
    }
}
class i extends n {
    filter(e, t, r) {
        let [n, i] = c(e, t, this.firstChildKey, r),
            o = this.clone();
        return (o.firstChildKey = n), (o.lastChildKey = i), o;
    }
}
class o extends n {
    static {
        this.type = "header";
    }
}
class a extends n {
    static {
        this.type = "loader";
    }
}
class s extends i {
    static {
        this.type = "item";
    }
    filter(e, t, r) {
        if (r(this.textValue, this)) {
            let r = this.clone();
            return t.addDescendants(r, e), r;
        }
        return null;
    }
}
class l extends i {
    static {
        this.type = "section";
    }
    filter(e, t, r) {
        let n = super.filter(e, t, r);
        if (n && null !== n.lastChildKey) {
            let t = e.getItem(n.lastChildKey);
            if (t && "header" !== t.type) return n;
        }
        return null;
    }
}
class u {
    get size() {
        return this.itemCount;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    *[Symbol.iterator]() {
        let e = null != this.firstKey ? this.keyMap.get(this.firstKey) : void 0;
        for (; e; ) yield e, (e = null != e.nextKey ? this.keyMap.get(e.nextKey) : void 0);
    }
    getChildren(e) {
        let t = this.keyMap;
        return {
            *[Symbol.iterator]() {
                let r = t.get(e),
                    n = r?.firstChildKey != null ? t.get(r.firstChildKey) : null;
                for (; n; ) yield n, (n = null != n.nextKey ? t.get(n.nextKey) : void 0);
            },
        };
    }
    getKeyBefore(e) {
        let t = this.keyMap.get(e);
        if (!t) return null;
        if (null != t.prevKey) {
            for (t = this.keyMap.get(t.prevKey); t && "item" !== t.type && null != t.lastChildKey; )
                t = this.keyMap.get(t.lastChildKey);
            return t?.key ?? null;
        }
        return t.parentKey;
    }
    getKeyAfter(e) {
        let t = this.keyMap.get(e);
        if (!t) return null;
        if ("item" !== t.type && null != t.firstChildKey) return t.firstChildKey;
        for (; t; ) {
            if (null != t.nextKey) return t.nextKey;
            if (null != t.parentKey) t = this.keyMap.get(t.parentKey);
            else break;
        }
        return null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        let e = null != this.lastKey ? this.keyMap.get(this.lastKey) : null;
        for (; e?.lastChildKey != null; ) e = this.keyMap.get(e.lastChildKey);
        return e?.key ?? null;
    }
    getItem(e) {
        return this.keyMap.get(e) ?? null;
    }
    at() {
        throw Error("Not implemented");
    }
    clone() {
        let e = new this.constructor();
        return (
            (e.keyMap = new Map(this.keyMap)),
            (e.firstKey = this.firstKey),
            (e.lastKey = this.lastKey),
            (e.itemCount = this.itemCount),
            e
        );
    }
    addNode(e) {
        if (this.frozen) throw Error("Cannot add a node to a frozen collection");
        "item" === e.type && null == this.keyMap.get(e.key) && this.itemCount++, this.keyMap.set(e.key, e);
    }
    addDescendants(e, t) {
        for (let r of (this.addNode(e), t.getChildren(e.key))) this.addDescendants(r, t);
    }
    removeNode(e) {
        if (this.frozen) throw Error("Cannot remove a node to a frozen collection");
        let t = this.keyMap.get(e);
        null != t && "item" === t.type && this.itemCount--, this.keyMap.delete(e);
    }
    commit(e, t, r = !1) {
        if (this.frozen) throw Error("Cannot commit a frozen collection");
        (this.firstKey = e), (this.lastKey = t), (this.frozen = !r);
    }
    filter(e) {
        let t = new this.constructor(),
            [r, n] = c(this, t, this.firstKey, e);
        return t?.commit(r, n), t;
    }
    constructor() {
        (this.keyMap = new Map()),
            (this.firstKey = null),
            (this.lastKey = null),
            (this.frozen = !1),
            (this.itemCount = 0);
    }
}
function c(e, t, r, n) {
    if (null == r) return [null, null];
    let i = null,
        o = null,
        a = e.getItem(r);
    for (; null != a; ) {
        let r = a.filter(e, t, n);
        null != r &&
            ((r.nextKey = null),
            o && ((r.prevKey = o.key), (o.nextKey = r.key)),
            null == i && (i = r),
            t.addNode(r),
            (o = r)),
            (a = null != a.nextKey ? e.getItem(a.nextKey) : null);
    }
    if (o && "separator" === o.type) {
        let e = o.prevKey;
        t.removeNode(o.key), null != e ? ((o = t.getItem(e)).nextKey = null) : (o = null);
    }
    return [i?.key ?? null, o?.key ?? null];
}
