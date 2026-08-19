"use strict";
n.d(t, { Ay: () => d, dL: () => r, ou: () => o }), n(938796), n(321073);
let i = /.+/g,
    r = "NON_TOKEN";
function a(e, t, n) {
    if (null == t) return null;
    for (let i = 0; i < t.length; i++) {
        let r,
            a = t[i],
            l = s(e.match(a.regex), n);
        if (null != l) {
            let { cache: e } = a;
            if ((null != e && null != (r = e.get(l[0])) && ((r = new o(r)).start = l.index), null == r)) {
                if (((r = new o(l, a.type)), null != a.validator && !a.validator(r))) continue;
                null == e || e?.has(l[0]) || e.set(l[0], r);
            }
            return r;
        }
    }
    return null;
}
function s(e, t) {
    if (null == e) return null;
    let n = [...e];
    return (n.index = t), n;
}
class l {
    static NON_TOKEN_TYPE;
    static Token;
    _rules = [];
    _followers = {};
    _nonTokenType = r;
    constructor(e = []) {
        this.reset(), e.forEach((e) => this.addRule(e));
    }
    reset() {
        (this._rules = []), (this._followers = {}), (this._nonTokenType = r);
    }
    addRule(e) {
        let t,
            { type: n, follows: i, validator: r } = e,
            { regex: a } = e;
        ("^" !== a.source.charAt(0) && (a = RegExp(`^${a.source}`, a.flags)), null != r && (t = new Map()), null == i)
            ? this._rules.push({ regex: a, type: n, validator: r, cache: t })
            : i.forEach((e) => {
                  null == this._followers[e] && (this._followers[e] = []),
                      this._followers[e].push({ regex: a, type: n, validator: r, cache: t });
              });
    }
    tokenize(e) {
        let t,
            n = e,
            r = "",
            a = 0,
            l = [];
        for (; n.length > 0; ) {
            let e = this._getMatch(n, t, a + r.length);
            null != e
                ? (null != r && "" !== r && l.push(new o(s(r.match(i), a), this._nonTokenType)),
                  (t = e),
                  l.push(e),
                  (a += t.length + r.length),
                  (n = n.substring(t.length)),
                  (r = ""))
                : ((r += n[0]), (n = n.substring(1)));
        }
        return null != r && "" !== r && l.push(new o(s(r.match(i), a), this._nonTokenType)), l;
    }
    clearCache() {
        for (let e in (this._rules.forEach((e) => e.cache?.clear()), this._followers))
            this._followers[e].forEach((e) => e.cache?.clear());
    }
    _getMatch(e, t, n) {
        let i,
            r = null != t ? t.type : null;
        return t?.end === n && (i = a(e, this._followers[String(r)], n)), null == i && (i = a(e, this._rules, n)), i;
    }
}
class o {
    match;
    start;
    type;
    _data;
    constructor(e, t) {
        e instanceof o
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
(l.NON_TOKEN_TYPE = r), (l.Token = o);
let d = l;
