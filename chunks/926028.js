function i(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function r(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function a(e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), e;
}
function s(e, t, n) {
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
n.d(t, { p: () => o });
var o = (function () {
    function e(t) {
        i(this, e), s(this, 'item', void 0), s(this, 'config', void 0), (this.config = t), (this.item = {}), this.initializeExposedProperties();
    }
    return (
        a(e, [
            {
                key: 'initializeExposedProperties',
                value: function () {
                    var e = this;
                    Object.keys(this.config.exposeProperties).forEach(function (t) {
                        Object.defineProperty(e.item, t, {
                            configurable: !0,
                            enumerable: !0,
                            get: function () {
                                return console.warn('Browser doesn\'t allow reading "'.concat(t, '" until the drop event.')), null;
                            }
                        });
                    });
                }
            },
            {
                key: 'loadDataTransfer',
                value: function (e) {
                    var t = this;
                    if (e) {
                        var n = {};
                        Object.keys(this.config.exposeProperties).forEach(function (i) {
                            n[i] = {
                                value: t.config.exposeProperties[i](e, t.config.matchesTypes),
                                configurable: !0,
                                enumerable: !0
                            };
                        }),
                            Object.defineProperties(this.item, n);
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
                value: function (e, t) {
                    return t === e.getSourceId();
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
