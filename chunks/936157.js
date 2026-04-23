"use strict";
n.d(t, { A: () => i });
var r = n(424528),
    a = n(308192),
    o = n(633248);
function i(e, t) {
    if (e) {
        if ("string" == typeof e) return (0, o.A)(e, t);
        var n,
            i = r((n = {}.toString.call(e))).call(n, 8, -1);
        return (
            "Object" === i && e.constructor && (i = e.constructor.name),
            "Map" === i || "Set" === i
                ? a(e)
                : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                  ? (0, o.A)(e, t)
                  : void 0
        );
    }
}
