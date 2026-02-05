"use strict";
n.d(t, { T: () => i });
var r = n(681456);
function i() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    switch (t.type) {
        case r.Yd:
        case r.SO:
            return e + 1;
        case r.n_:
        case r.v4:
            return e - 1;
        default:
            return e;
    }
}
