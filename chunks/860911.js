a.d(e, { Ft: () => n }), a(301563), a(47120);
class r {
    toString() {
        return this.value;
    }
    constructor(t) {
        var e, a;
        (a = void 0),
            (e = 'value') in this
                ? Object.defineProperty(this, e, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[e] = a),
            (this.value = t);
    }
}
function n(t, e) {
    let a = {};
    for (let n of Object.keys(t)) {
        let _ = t[n];
        if ('function' != typeof _) {
            a[n] = _;
            continue;
        }
        a[n] = function () {
            for (var t = arguments.length, a = Array(t), n = 0; n < t; n++) a[n] = arguments[n];
            return _(
                ...(function (t, e) {
                    return t.map((t) =>
                        null == t
                            ? t
                            : t instanceof r
                              ? t.toString()
                              : null == e
                                ? encodeURIComponent(t)
                                : String(t)
                                      .split('')
                                      .map((t) => (null != e && e.includes(t) ? t : encodeURIComponent(t)))
                                      .join('')
                    );
                })(a, e)
            );
        };
    }
    return a;
}
