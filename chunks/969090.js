var i =
        (this && this.__createBinding) ||
        (Object.create
            ? function (e, n, r, i) {
                  void 0 === i && (i = r);
                  var a = Object.getOwnPropertyDescriptor(n, r);
                  (!a || ('get' in a ? !n.__esModule : a.writable || a.configurable)) &&
                      (a = {
                          enumerable: !0,
                          get: function () {
                              return n[r];
                          }
                      }),
                      Object.defineProperty(e, i, a);
              }
            : function (e, n, r, i) {
                  void 0 === i && (i = r), (e[i] = n[r]);
              }),
    a =
        (this && this.__exportStar) ||
        function (e, n) {
            for (var r in e) 'default' !== r && !Object.prototype.hasOwnProperty.call(n, r) && i(n, e, r);
        };
Object.defineProperty(n, '__esModule', { value: !0 }), (n.MessageLoader = n.waitForAllDefaultIntlMessagesLoaded = n.loadAllMessagesInLocale = n.createLoader = n.DEFAULT_LOCALE = n.IntlManager = n.runtimeHashMessageKey = n.bindFormatValues = n.FormatBuilder = void 0), a(r(304690), n);
var o = r(403725);
Object.defineProperty(n, 'FormatBuilder', {
    enumerable: !0,
    get: function () {
        return o.FormatBuilder;
    }
}),
    Object.defineProperty(n, 'bindFormatValues', {
        enumerable: !0,
        get: function () {
            return o.bindFormatValues;
        }
    });
var s = r(471099);
Object.defineProperty(n, 'runtimeHashMessageKey', {
    enumerable: !0,
    get: function () {
        return s.runtimeHashMessageKey;
    }
});
var l = r(961711);
Object.defineProperty(n, 'IntlManager', {
    enumerable: !0,
    get: function () {
        return l.IntlManager;
    }
}),
    Object.defineProperty(n, 'DEFAULT_LOCALE', {
        enumerable: !0,
        get: function () {
            return l.DEFAULT_LOCALE;
        }
    });
var u = r(383486);
Object.defineProperty(n, 'createLoader', {
    enumerable: !0,
    get: function () {
        return u.createLoader;
    }
}),
    Object.defineProperty(n, 'loadAllMessagesInLocale', {
        enumerable: !0,
        get: function () {
            return u.loadAllMessagesInLocale;
        }
    }),
    Object.defineProperty(n, 'waitForAllDefaultIntlMessagesLoaded', {
        enumerable: !0,
        get: function () {
            return u.waitForAllDefaultIntlMessagesLoaded;
        }
    }),
    Object.defineProperty(n, 'MessageLoader', {
        enumerable: !0,
        get: function () {
            return u.MessageLoader;
        }
    });
