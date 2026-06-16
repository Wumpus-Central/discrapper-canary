"use strict";
var r = n(834647),
    a = n(486816),
    o = n(958498),
    i = n(965746).f,
    s = n(414123);
r(
    {
        target: "Object",
        stat: !0,
        forced:
            !s ||
            a(function () {
                i(1);
            }),
        sham: !s,
    },
    {
        getOwnPropertyDescriptor: function (e, t) {
            return i(o(e), t);
        },
    },
);
