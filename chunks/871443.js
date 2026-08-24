"use strict";
r.d(t, { OJ: () => o, Pt: () => n, Wk: () => s, _B: () => a, ru: () => i });
class n {
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
}
class i extends n {
    filter(e, t, r) {
        let [n, i] = l(e, t, this.firstChildKey, r),
            o = this.clone();
        return (o.firstChildKey = n), (o.lastChildKey = i), o;
    }
}
class o extends n {}
o.type = "loader";
class a extends i {
    filter(e, t, r) {
        if (r(this.textValue, this)) {
            let r = this.clone();
            return t.addDescendants(r, e), r;
        }
        return null;
    }
}
a.type = "item";
class s {
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
                    n = (null == r ? void 0 : r.firstChildKey) != null ? t.get(r.firstChildKey) : null;
                for (; n; ) yield n, (n = null != n.nextKey ? t.get(n.nextKey) : void 0);
            },
        };
    }
    getKeyBefore(e) {
        let t = this.keyMap.get(e);
        if (!t) return null;
        if (null != t.prevKey) {
            var r;
            for (t = this.keyMap.get(t.prevKey); t && "item" !== t.type && null != t.lastChildKey; )
                t = this.keyMap.get(t.lastChildKey);
            return null != (r = null == t ? void 0 : t.key) ? r : null;
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
        var e;
        let t = null != this.lastKey ? this.keyMap.get(this.lastKey) : null;
        for (; (null == t ? void 0 : t.lastChildKey) != null; ) t = this.keyMap.get(t.lastChildKey);
        return null != (e = null == t ? void 0 : t.key) ? e : null;
    }
    getItem(e) {
        var t;
        return null != (t = this.keyMap.get(e)) ? t : null;
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
            [r, n] = l(this, t, this.firstKey, e);
        return null == t || t.commit(r, n), t;
    }
    constructor() {
        (this.keyMap = new Map()),
            (this.firstKey = null),
            (this.lastKey = null),
            (this.frozen = !1),
            (this.itemCount = 0);
    }
}
function l(e, t, r, n) {
    var i, o;
    if (null == r) return [null, null];
    let a = null,
        s = null,
        l = e.getItem(r);
    for (; null != l; ) {
        let r = l.filter(e, t, n);
        null != r &&
            ((r.nextKey = null),
            s && ((r.prevKey = s.key), (s.nextKey = r.key)),
            null == a && (a = r),
            t.addNode(r),
            (s = r)),
            (l = l.nextKey ? e.getItem(l.nextKey) : null);
    }
    if (s && "separator" === s.type) {
        let e = s.prevKey;
        t.removeNode(s.key), e ? ((s = t.getItem(e)).nextKey = null) : (s = null);
    }
    return [null != (i = null == a ? void 0 : a.key) ? i : null, null != (o = null == s ? void 0 : s.key) ? o : null];
}
