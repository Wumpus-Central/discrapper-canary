"use strict";
n.d(t, { A: () => a });
var i = n(64700),
    r = n(735438),
    s = n(572808);
let a = (e) =>
    i.useMemo(() => {
        let t = (0, r.clamp)(e.avatar, 0, s.oo.length - 1),
            n = s.qS[s.oo[t]];
        return null == n && (n = s.qS[s.PZ.IMP]), n;
    }, [e.avatar]);
