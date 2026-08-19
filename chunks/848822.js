"use strict";
var t = {
    current: function (e, t) {
        if (!e.setNativeProps) return !1;
        e.setNativeProps(t);
    },
    transformStyles: function (e) {
        return e;
    },
    inject: function (e, r) {
        (t.current = e), (t.transformStyles = r);
    },
};
e.exports = t;
