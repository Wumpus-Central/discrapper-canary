"use strict";
n.d(t, { Ay: () => u, dL: () => r, ou: () => l }), n(938796), n(321073);
let i = /.+/g,
    r = "NON_TOKEN";
function s(e, t, n) {
    if (null == t) return null;
    for (let i = 0; i < t.length; i++) {
        let r,
            s = t[i],
            o = a(e.match(s.regex), n);
        if (null != o) {
            let { cache: e } = s;
            if ((null != e && null != (r = e.get(o[0])) && ((r = new l(r)).start = o.index), null == r)) {
                if (((r = new l(o, s.type)), null != s.validator && !s.validator(r))) continue;
                null == e || e?.has(o[0]) || e.set(o[0], r);
            }
            return r;
        }
    }
    return null;
}
function a(e, t) {
    if (null == e) return null;
    let n = [...e];
    return (n.index = t), n;
}
class o {
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
            { regex: s } = e;
        ("^" !== s.source.charAt(0) && (s = RegExp(`^${s.source}`, s.flags)), null != r && (t = new Map()), null == i)
            ? this._rules.push({ regex: s, type: n, validator: r, cache: t })
            : i.forEach((e) => {
                  null == this._followers[e] && (this._followers[e] = []),
                      this._followers[e].push({ regex: s, type: n, validator: r, cache: t });
              });
    }
    tokenize(e) {
        let t,
            n = e,
            r = "",
            s = 0,
            o = [];
        for (; n.length > 0; ) {
            let e = this._getMatch(n, t, s + r.length);
            null != e
                ? (null != r && "" !== r && o.push(new l(a(r.match(i), s), this._nonTokenType)),
                  (t = e),
                  o.push(e),
                  (s += t.length + r.length),
                  (n = n.substring(t.length)),
                  (r = ""))
                : ((r += n[0]), (n = n.substring(1)));
        }
        return null != r && "" !== r && o.push(new l(a(r.match(i), s), this._nonTokenType)), o;
    }
    clearCache() {
        for (let e in (this._rules.forEach((e) => e.cache?.clear()), this._followers))
            this._followers[e].forEach((e) => e.cache?.clear());
    }
    _getMatch(e, t, n) {
        let i,
            r = null != t ? t.type : null;
        return t?.end === n && (i = s(e, this._followers[String(r)], n)), null == i && (i = s(e, this._rules, n)), i;
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
(o.NON_TOKEN_TYPE = r), (o.Token = l);
let u = o;
