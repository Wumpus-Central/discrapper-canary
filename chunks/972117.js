"use strict";
n.d(t, { A: () => a });
var i = n(66455),
    r = n(964486);
function a(e) {
    let t = (0, i.A)(e);
    (0, r.Ay)(() => {
        let e = requestAnimationFrame(function n() {
            t.current?.(), (e = requestAnimationFrame(n));
        });
        return () => cancelAnimationFrame(e);
    });
}
