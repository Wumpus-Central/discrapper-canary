function i(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function a(e, n) {
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function o(e, n, r) {
    return n && a(e.prototype, n), r && a(e, r), e;
}
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
r.d(n, {
    p: function () {
        return l;
    }
});
var l = (function () {
    function e(n) {
        i(this, e), s(this, 'item', void 0), s(this, 'config', void 0), (this.config = n), (this.item = {}), this.initializeExposedProperties();
    }
    return (
        o(e, [
            {
                key: 'initializeExposedProperties',
                value: function () {
                    var e = this;
                    Object.keys(this.config.exposeProperties).forEach(function (n) {
                        Object.defineProperty(e.item, n, {
                            configurable: !0,
                            enumerable: !0,
                            get: function () {
                                return console.warn('Browser doesn\'t allow reading "'.concat(n, '" until the drop event.')), null;
                            }
                        });
                    });
                }
            },
            {
                key: 'loadDataTransfer',
                value: function (e) {
                    var n = this;
                    if (e) {
                        var r = {};
                        Object.keys(this.config.exposeProperties).forEach(function (i) {
                            r[i] = {
                                value: n.config.exposeProperties[i](e, n.config.matchesTypes),
                                configurable: !0,
                                enumerable: !0
                            };
                        }),
                            Object.defineProperties(this.item, r);
                    }
                }
            },
            {
                key: 'canDrag',
                value: function () {
                    return !0;
                }
            },
            {
                key: 'beginDrag',
                value: function () {
                    return this.item;
                }
            },
            {
                key: 'isDragging',
                value: function (e, n) {
                    return n === e.getSourceId();
                }
            },
            {
                key: 'endDrag',
                value: function () {}
            }
        ]),
        e
    );
})();
