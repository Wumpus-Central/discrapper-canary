"use strict";
n.d(t, { A: () => o });
var i = n(582128),
    r = n(17928),
    a = n(228366),
    s = n(418126),
    l = n(998740);
let o = function () {
    let e = (0, r.bG)([l.A], () => l.A.assets);
    return (
        i.useEffect(() => {
            async function t() {
                let e = await s.Ay.getAssets();
                null != e && a.h.dispatch({ type: "HAVEN_GOT_ASSETS", assets: e.body });
            }
            null == e && t();
        }, [e]),
        e
    );
};
