"use strict";
var r = n(834647),
    a = n(794938);
r(
    { target: "Promise", stat: !0, forced: n(976467).CONSTRUCTOR },
    {
        reject: function (e) {
            var t = a.f(this);
            return (0, t.reject)(e), t.promise;
        },
    },
);
