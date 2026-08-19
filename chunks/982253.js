"use strict";
var n =
        (this && this.__createBinding) ||
        (Object.create
            ? function (e, t, r, n) {
                  void 0 === n && (n = r);
                  var o = Object.getOwnPropertyDescriptor(t, r);
                  (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) &&
                      (o = {
                          enumerable: !0,
                          get: function () {
                              return t[r];
                          },
                      }),
                      Object.defineProperty(e, n, o);
              }
            : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r]);
              }),
    o =
        (this && this.__exportStar) ||
        function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
        };
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.makeMessagesProxy =
        t.chainMessagesObjects =
        t.MessageLoader =
        t.waitForAllDefaultIntlMessagesLoaded =
        t.loadAllMessagesInLocale =
        t.createLoader =
        t.InternalIntlMessage =
        t.DEFAULT_LOCALE =
        t.IntlManager =
        t.runtimeHashMessageKey =
        t.bindFormatValues =
        t.FormatBuilder =
        t.dataFormatterCache =
        t.makeDataFormatters =
            void 0);
var i = r(605458);
Object.defineProperty(t, "makeDataFormatters", {
    enumerable: !0,
    get: function () {
        return i.makeDataFormatters;
    },
});
var a = r(331188);
Object.defineProperty(t, "dataFormatterCache", {
    enumerable: !0,
    get: function () {
        return a.dataFormatterCache;
    },
});
var s = r(619398);
Object.defineProperty(t, "FormatBuilder", {
    enumerable: !0,
    get: function () {
        return s.FormatBuilder;
    },
}),
    Object.defineProperty(t, "bindFormatValues", {
        enumerable: !0,
        get: function () {
            return s.bindFormatValues;
        },
    }),
    o(r(151393), t);
var l = r(97946);
Object.defineProperty(t, "runtimeHashMessageKey", {
    enumerable: !0,
    get: function () {
        return l.runtimeHashMessageKey;
    },
});
var u = r(140160);
Object.defineProperty(t, "IntlManager", {
    enumerable: !0,
    get: function () {
        return u.IntlManager;
    },
}),
    Object.defineProperty(t, "DEFAULT_LOCALE", {
        enumerable: !0,
        get: function () {
            return u.DEFAULT_LOCALE;
        },
    });
var c = r(965262);
Object.defineProperty(t, "InternalIntlMessage", {
    enumerable: !0,
    get: function () {
        return c.InternalIntlMessage;
    },
});
var f = r(359440);
Object.defineProperty(t, "createLoader", {
    enumerable: !0,
    get: function () {
        return f.createLoader;
    },
}),
    Object.defineProperty(t, "loadAllMessagesInLocale", {
        enumerable: !0,
        get: function () {
            return f.loadAllMessagesInLocale;
        },
    }),
    Object.defineProperty(t, "waitForAllDefaultIntlMessagesLoaded", {
        enumerable: !0,
        get: function () {
            return f.waitForAllDefaultIntlMessagesLoaded;
        },
    }),
    Object.defineProperty(t, "MessageLoader", {
        enumerable: !0,
        get: function () {
            return f.MessageLoader;
        },
    });
var p = r(810709);
Object.defineProperty(t, "chainMessagesObjects", {
    enumerable: !0,
    get: function () {
        return p.chainMessagesObjects;
    },
}),
    Object.defineProperty(t, "makeMessagesProxy", {
        enumerable: !0,
        get: function () {
            return p.makeMessagesProxy;
        },
    });
