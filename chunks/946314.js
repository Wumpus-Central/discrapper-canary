"use strict";
var r = n(834647),
    a = n(673162).every;
r(
    { target: "Array", proto: !0, forced: !n(242291)("every") },
    {
        every: function (e) {
            return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
    },
);
