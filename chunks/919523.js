"use strict";
var r =
        (this && this.__createBinding) ||
        (Object.create
            ? function (e, t, n, r) {
                  void 0 === r && (r = n);
                  var i = Object.getOwnPropertyDescriptor(t, n);
                  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) &&
                      (i = {
                          enumerable: !0,
                          get: function () {
                              return t[n];
                          },
                      }),
                      Object.defineProperty(e, r, i);
              }
            : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
              }),
    i =
        (this && this.__exportStar) ||
        function (e, t) {
            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n);
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
var s = n(975656);
Object.defineProperty(t, "makeDataFormatters", {
    enumerable: !0,
    get: function () {
        return s.makeDataFormatters;
    },
});
var a = n(731870);
Object.defineProperty(t, "dataFormatterCache", {
    enumerable: !0,
    get: function () {
        return a.dataFormatterCache;
    },
});
var o = n(621608);
Object.defineProperty(t, "FormatBuilder", {
    enumerable: !0,
    get: function () {
        return o.FormatBuilder;
    },
}),
    Object.defineProperty(t, "bindFormatValues", {
        enumerable: !0,
        get: function () {
            return o.bindFormatValues;
        },
    }),
    i(n(711347), t);
var l = n(503103);
Object.defineProperty(t, "runtimeHashMessageKey", {
    enumerable: !0,
    get: function () {
        return l.runtimeHashMessageKey;
    },
});
var u = n(262270);
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
var c = n(880044);
Object.defineProperty(t, "InternalIntlMessage", {
    enumerable: !0,
    get: function () {
        return c.InternalIntlMessage;
    },
});
var d = n(219690);
Object.defineProperty(t, "createLoader", {
    enumerable: !0,
    get: function () {
        return d.createLoader;
    },
}),
    Object.defineProperty(t, "loadAllMessagesInLocale", {
        enumerable: !0,
        get: function () {
            return d.loadAllMessagesInLocale;
        },
    }),
    Object.defineProperty(t, "waitForAllDefaultIntlMessagesLoaded", {
        enumerable: !0,
        get: function () {
            return d.waitForAllDefaultIntlMessagesLoaded;
        },
    }),
    Object.defineProperty(t, "MessageLoader", {
        enumerable: !0,
        get: function () {
            return d.MessageLoader;
        },
    });
var _ = n(831195);
Object.defineProperty(t, "chainMessagesObjects", {
    enumerable: !0,
    get: function () {
        return _.chainMessagesObjects;
    },
}),
    Object.defineProperty(t, "makeMessagesProxy", {
        enumerable: !0,
        get: function () {
            return _.makeMessagesProxy;
        },
    });
