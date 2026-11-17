let r = Object.prototype.toString;
function i(e, t) {
    return r.call(e) === `[object ${t}]`;
}
function o(e) {
    return "object" == typeof e && null !== e && "__sentry_template_string__" in e && "__sentry_template_values__" in e;
}
function a(e) {
    return i(e, "Object");
}
function s(e, t) {
    try {
        return e instanceof t;
    } catch (e) {
        return !1;
    }
}
n.d(
    t,
    {},
    {
        BD: function (e) {
            return i(e, "DOMError");
        },
        Kg: function (e) {
            return i(e, "String");
        },
        L2: function (e) {
            return !!("object" == typeof e && null !== e && (e.__isVue || e._isVue));
        },
        NF: o,
        Qd: a,
        Qg: function (e) {
            return !!(e && e.then && "function" == typeof e.then);
        },
        T2: function (e) {
            return i(e, "ErrorEvent");
        },
        W6: function (e) {
            return i(e, "DOMException");
        },
        bJ: function (e) {
            switch (r.call(e)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                case "[object WebAssembly.Exception]":
                    return !0;
                default:
                    return s(e, Error);
            }
        },
        gd: function (e) {
            return i(e, "RegExp");
        },
        mE: function (e) {
            return a(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
        },
        sO: function (e) {
            return null === e || o(e) || ("object" != typeof e && "function" != typeof e);
        },
        tH: s,
        vq: function (e) {
            return "u" > typeof Element && s(e, Element);
        },
        xH: function (e) {
            return "u" > typeof Event && s(e, Event);
        },
    },
);
