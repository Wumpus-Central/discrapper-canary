"use strict";
r.d(t, { w: () => o });
var n = r(576024);
function o(e, t) {
    (0, n.N)(() => {
        if (e && e.ref && t)
            return (
                (e.ref.current = t.current),
                () => {
                    e.ref && (e.ref.current = null);
                }
            );
    });
}
