"use strict";
n.d(t, { Ay: () => u, dL: () => i, ou: () => l }), n(938796), n(321073);
let r = /.+/g,
    i = "NON_TOKEN";
function a(e, t, n) {
    if (null == t) return null;
    for (let r = 0; r < t.length; r++) {
        let i,
            a = t[r],
            o = s(e.match(a.regex), n);
        if (null != o) {
            let { cache: e } = a;
            if ((null != e && null != (i = e.get(o[0])) && ((i = new l(i)).start = o.index), null == i)) {
                if (((i = new l(o, a.type)), null != a.validator && !a.validator(i))) continue;
                null == e || e?.has(o[0]) || e.set(o[0], i);
            }
            return i;
        }
    }
    return null;
}
function s(e, t) {
    if (null == e) return null;
    let n = [...e];
    return (n.index = t), n;
}
class o {
    static NON_TOKEN_TYPE;
    static Token;
    _rules = [];
    _followers = {};
    _nonTokenType = i;
    constructor(e = []) {
        this.reset(), e.forEach((e) => this.addRule(e));
    }
    reset() {
        (this._rules = []), (this._followers = {}), (this._nonTokenType = i);
    }
    addRule(e) {
        let t,
            { type: n, follows: r, validator: i } = e,
            { regex: a } = e;
        ("^" !== a.source.charAt(0) && (a = RegExp(`^${a.source}`, a.flags)), null != i && (t = new Map()), null == r)
            ? this._rules.push({ regex: a, type: n, validator: i, cache: t })
            : r.forEach((e) => {
                  null == this._followers[e] && (this._followers[e] = []),
                      this._followers[e].push({ regex: a, type: n, validator: i, cache: t });
              });
    }
    tokenize(e) {
        let t,
            n = e,
            i = "",
            a = 0,
            o = [];
        for (; n.length > 0; ) {
            let e = this._getMatch(n, t, a + i.length);
            null != e
                ? (null != i && "" !== i && o.push(new l(s(i.match(r), a), this._nonTokenType)),
                  (t = e),
                  o.push(e),
                  (a += t.length + i.length),
                  (n = n.substring(t.length)),
                  (i = ""))
                : ((i += n[0]), (n = n.substring(1)));
        }
        return null != i && "" !== i && o.push(new l(s(i.match(r), a), this._nonTokenType)), o;
    }
    clearCache() {
        for (let e in (this._rules.forEach((e) => e.cache?.clear()), this._followers))
            this._followers[e].forEach((e) => e.cache?.clear());
    }
    _getMatch(e, t, n) {
        let r,
            i = null != t ? t.type : null;
        return t?.end === n && (r = a(e, this._followers[String(i)], n)), null == r && (r = a(e, this._rules, n)), r;
    }
}
class l {
    match;
    start;
    type;
    _data;
    constructor(e, t) {
        e instanceof l
            ? ((this.match = [...e.match]),
              (this.start = e.start),
              (this.type = e.type),
              null != e._data && (this._data = e._data))
            : (null != e
                  ? ((this.match = [...e]), (this.start = "string" == typeof e ? 0 : (e.index ?? 0)))
                  : ((this.match = []), (this.start = 0)),
              (this.type = t));
    }
    get end() {
        return this.start + this.length;
    }
    get length() {
        return this.match[0].length;
    }
    valueOf() {
        return this.match[0];
    }
    getFullMatch() {
        return this.match[0];
    }
    getMatch() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this.match[e];
    }
    setData(e, t) {
        null == this._data && (this._data = new Map()), this._data.set(e, t);
    }
    getData(e) {
        if (null != this._data) return this._data.get(e);
    }
}
(o.NON_TOKEN_TYPE = i), (o.Token = l);
let u = o;
