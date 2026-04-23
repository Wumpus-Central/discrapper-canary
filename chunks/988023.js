"use strict";
n.d(t, { A: () => a });
var r = n(64700),
    i = n(166532),
    s = n(566980);
function a(e) {
    let [t, n] = r.useState(s.h.WAITING);
    return (
        r.useEffect(() => {
            null != e && e !== i.pn.REVIEW && t !== s.h.WAITING && t !== s.h.COMPLETED && n(s.h.WAITING);
        }, [e, t, n]),
        [t, n]
    );
}
