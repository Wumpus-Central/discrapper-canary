var n =
        (this && this.__createBinding) ||
        (Object.create
            ? function (e, t, r, n) {
                  void 0 === n && (n = r);
                  var i = Object.getOwnPropertyDescriptor(t, r);
                  ((!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) &&
                      (i = {
                          enumerable: !0,
                          get: function () {
                              return t[r];
                          },
                      }),
                      Object.defineProperty(e, n, i));
              }
            : function (e, t, r, n) {
                  (void 0 === n && (n = r), (e[n] = t[r]));
              }),
    i =
        (this && this.__exportStar) ||
        function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
        };
(Object.defineProperty(t, "__esModule", { value: !0 }),
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
            void 0));
var o = r(495581);
Object.defineProperty(t, "makeDataFormatters", {
    enumerable: !0,
    get: function () {
        return o.makeDataFormatters;
    },
});
var a = r(499179);
Object.defineProperty(t, "dataFormatterCache", {
    enumerable: !0,
    get: function () {
        return a.dataFormatterCache;
    },
});
var s = r(133275);
(Object.defineProperty(t, "FormatBuilder", {
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
    i(r(335532), t));
var l = r(256784);
Object.defineProperty(t, "runtimeHashMessageKey", {
    enumerable: !0,
    get: function () {
        return l.runtimeHashMessageKey;
    },
});
var u = r(461217);
(Object.defineProperty(t, "IntlManager", {
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
    }));
var c = r(251277);
Object.defineProperty(t, "InternalIntlMessage", {
    enumerable: !0,
    get: function () {
        return c.InternalIntlMessage;
    },
});
var f = r(965413);
(Object.defineProperty(t, "createLoader", {
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
    }));
var d = r(146750);
(Object.defineProperty(t, "chainMessagesObjects", {
    enumerable: !0,
    get: function () {
        return d.chainMessagesObjects;
    },
}),
    Object.defineProperty(t, "makeMessagesProxy", {
        enumerable: !0,
        get: function () {
            return d.makeMessagesProxy;
        },
    }));
