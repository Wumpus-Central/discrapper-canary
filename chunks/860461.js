"use strict";
r.d(t, { g: () => o });
var n = r(321733),
    i = r(64700);
function o(e) {
    return (0, i.useMemo)(
        function () {
            var t = e.type;
            return (0, n.V)(null != t, "spec.type must be defined"), t;
        },
        [e],
    );
}
