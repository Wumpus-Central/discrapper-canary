t.d(r, { Z: () => o });
var a = (function () {
    var e;
    function r() {
        var e,
            t,
            a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (!(this instanceof r)) throw TypeError('Cannot call a class as a function');
        (t = void 0),
            (e = 'items') in this
                ? Object.defineProperty(this, e, {
                      value: t,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[e] = t),
            (this.items = a);
    }
    return (
        (e = [
            {
                key: 'add',
                value: function (e) {
                    return !1 === this.has(e) && this.items.push(e), this;
                }
            },
            {
                key: 'clear',
                value: function () {
                    this.items = [];
                }
            },
            {
                key: 'delete',
                value: function (e) {
                    var r = this.items.length;
                    return (
                        (this.items = this.items.filter(function (r) {
                            return r !== e;
                        })),
                        r !== this.items.length
                    );
                }
            },
            {
                key: 'forEach',
                value: function (e) {
                    var r = this;
                    this.items.forEach(function (t) {
                        e(t, t, r);
                    });
                }
            },
            {
                key: 'has',
                value: function (e) {
                    return -1 !== this.items.indexOf(e);
                }
            },
            {
                key: 'size',
                get: function () {
                    return this.items.length;
                }
            }
        ]),
        (function (e, r) {
            for (var t = 0; t < r.length; t++) {
                var a = r[t];
                (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
            }
        })(r.prototype, e),
        r
    );
})();
let o = 'undefined' == typeof Set ? Set : a;
