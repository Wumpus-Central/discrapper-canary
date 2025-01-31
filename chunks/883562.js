r.d(t, {
    JT: () => c,
    M$: () => d,
    Xz: () => u
});
var n = r(670543);
function o(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function i(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
}
function a(e, t, r) {
    return t && i(e.prototype, t), r && i(e, r), e;
}
function s(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
var c = (function () {
    function e(t) {
        o(this, e), s(this, 'isDisposed', !1), s(this, 'action', void 0), (this.action = (0, n.mf)(t) ? t : n.ZT);
    }
    return (
        a(
            e,
            [
                {
                    key: 'dispose',
                    value: function () {
                        this.isDisposed || (this.action(), (this.isDisposed = !0));
                    }
                }
            ],
            [
                {
                    key: 'isDisposable',
                    value: function (e) {
                        return !!(e && (0, n.mf)(e.dispose));
                    }
                },
                {
                    key: '_fixup',
                    value: function (t) {
                        return e.isDisposable(t) ? t : e.empty;
                    }
                },
                {
                    key: 'create',
                    value: function (t) {
                        return new e(t);
                    }
                }
            ]
        ),
        e
    );
})();
s(c, 'empty', { dispose: n.ZT });
var u = (function () {
        function e() {
            o(this, e), s(this, 'isDisposed', !1), s(this, 'disposables', void 0);
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            this.disposables = r;
        }
        return (
            a(e, [
                {
                    key: 'add',
                    value: function (e) {
                        this.isDisposed ? e.dispose() : this.disposables.push(e);
                    }
                },
                {
                    key: 'remove',
                    value: function (e) {
                        var t = !1;
                        if (!this.isDisposed) {
                            var r = this.disposables.indexOf(e);
                            -1 !== r && ((t = !0), this.disposables.splice(r, 1), e.dispose());
                        }
                        return t;
                    }
                },
                {
                    key: 'clear',
                    value: function () {
                        if (!this.isDisposed) {
                            for (var e = this.disposables.length, t = Array(e), r = 0; r < e; r++) t[r] = this.disposables[r];
                            this.disposables = [];
                            for (var n = 0; n < e; n++) t[n].dispose();
                        }
                    }
                },
                {
                    key: 'dispose',
                    value: function () {
                        if (!this.isDisposed) {
                            this.isDisposed = !0;
                            for (var e = this.disposables.length, t = Array(e), r = 0; r < e; r++) t[r] = this.disposables[r];
                            this.disposables = [];
                            for (var n = 0; n < e; n++) t[n].dispose();
                        }
                    }
                }
            ]),
            e
        );
    })(),
    d = (function () {
        function e() {
            o(this, e), s(this, 'isDisposed', !1), s(this, 'current', void 0);
        }
        return (
            a(e, [
                {
                    key: 'getDisposable',
                    value: function () {
                        return this.current;
                    }
                },
                {
                    key: 'setDisposable',
                    value: function (e) {
                        var t = this.isDisposed;
                        if (!t) {
                            var r = this.current;
                            (this.current = e), r && r.dispose();
                        }
                        t && e && e.dispose();
                    }
                },
                {
                    key: 'dispose',
                    value: function () {
                        if (!this.isDisposed) {
                            this.isDisposed = !0;
                            var e = this.current;
                            (this.current = void 0), e && e.dispose();
                        }
                    }
                }
            ]),
            e
        );
    })();
