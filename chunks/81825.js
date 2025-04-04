function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                r(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function a(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n.d(t, { Z: () => s }), n(47120);
class s {
    toJS() {
        return i({}, this);
    }
    set(e, t) {
        let n = this,
            r = n[e];
        return t instanceof Date && r instanceof Date && t.getTime() === r.getTime() ? this : r !== t ? new this.constructor(a(i({}, this), { [e]: t })) : this;
    }
    merge(e) {
        let t = this,
            n = null;
        for (let r in e) {
            if (!e.hasOwnProperty(r)) continue;
            let o = t[r],
                a = e[r];
            (a instanceof Date && o instanceof Date && a.getTime() === o.getTime()) || (o !== a && (null == n && (n = i({}, this)), (n[r] = e[r])));
        }
        return null != n ? new this.constructor(n) : this;
    }
    update(e, t, n) {
        null == n && ((n = t), (t = void 0));
        let r = this,
            o = r[e];
        return o instanceof s || (o instanceof Array ? (o = [...o]) : o instanceof Object && (o = i({}, o))), void 0 === o && (o = t), this.set(e, n(o));
    }
}
