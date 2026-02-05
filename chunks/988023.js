"use strict";
n.d(t, { A: () => s });
var r = n(64700),
    i = n(166532),
    a = n(566980);
function s(e) {
    let [t, n] = r.useState(a.h.WAITING);
    return (
        r.useEffect(() => {
            null != e && e !== i.pn.REVIEW && t !== a.h.WAITING && t !== a.h.COMPLETED && n(a.h.WAITING);
        }, [e, t, n]),
        [t, n]
    );
}
