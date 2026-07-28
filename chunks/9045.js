"use strict";
n.d(t, { A: () => s });
var i = n(582128),
    r = n(435558),
    a = n(572808);
let s = function (e) {
    return i.useMemo(() => {
        let t = (0, r.clamp)(e.avatar, 0, a.oo.length - 1),
            n = a.qS[a.oo[t]];
        return null == n && (n = a.qS[a.PZ.IMP]), n;
    }, [e.avatar]);
};
