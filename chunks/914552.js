var i =
        (this && this.__createBinding) ||
        (Object.create
            ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (!r || ('get' in r ? !t.__esModule : r.writable || r.configurable)) &&
                      (r = {
                          enumerable: !0,
                          get: function () {
                              return t[n];
                          }
                      }),
                      Object.defineProperty(e, i, r);
              }
            : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
              }),
    r =
        (this && this.__exportStar) ||
        function (e, t) {
            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n);
        };
Object.defineProperty(t, '__esModule', { value: !0 }), (t.MessageLoader = t.waitForAllDefaultIntlMessagesLoaded = t.loadAllMessagesInLocale = t.createLoader = t.DEFAULT_LOCALE = t.IntlManager = t.runtimeHashMessageKey = t.bindFormatValues = t.FormatBuilder = void 0), r(n(674937), t);
var a = n(665897);
Object.defineProperty(t, 'FormatBuilder', {
    enumerable: !0,
    get: function () {
        return a.FormatBuilder;
    }
}),
    Object.defineProperty(t, 'bindFormatValues', {
        enumerable: !0,
        get: function () {
            return a.bindFormatValues;
        }
    });
var s = n(889426);
Object.defineProperty(t, 'runtimeHashMessageKey', {
    enumerable: !0,
    get: function () {
        return s.runtimeHashMessageKey;
    }
});
var o = n(230805);
Object.defineProperty(t, 'IntlManager', {
    enumerable: !0,
    get: function () {
        return o.IntlManager;
    }
}),
    Object.defineProperty(t, 'DEFAULT_LOCALE', {
        enumerable: !0,
        get: function () {
            return o.DEFAULT_LOCALE;
        }
    });
var l = n(598234);
Object.defineProperty(t, 'createLoader', {
    enumerable: !0,
    get: function () {
        return l.createLoader;
    }
}),
    Object.defineProperty(t, 'loadAllMessagesInLocale', {
        enumerable: !0,
        get: function () {
            return l.loadAllMessagesInLocale;
        }
    }),
    Object.defineProperty(t, 'waitForAllDefaultIntlMessagesLoaded', {
        enumerable: !0,
        get: function () {
            return l.waitForAllDefaultIntlMessagesLoaded;
        }
    }),
    Object.defineProperty(t, 'MessageLoader', {
        enumerable: !0,
        get: function () {
            return l.MessageLoader;
        }
    });
