"use strict";
n.d(t, { A: () => a });
var r = n(64700),
    i = n(735438),
    s = n(572808);
let a = (e) =>
    r.useMemo(() => {
        let t = (0, i.clamp)(e.avatar, 0, s.oo.length - 1),
            n = s.qS[s.oo[t]];
        return null == n && (n = s.qS[s.PZ.IMP]), n;
    }, [e.avatar]);
