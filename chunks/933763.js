"use strict";
var r = n(834647),
    a = n(673162).filter;
r(
    { target: "Array", proto: !0, forced: !n(787692)("filter") },
    {
        filter: function (e) {
            return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
    },
);
