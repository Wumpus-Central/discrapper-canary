"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(311907),
    s = n(73153),
    a = n(418126),
    o = n(998740);
let l = () => {
    let e = (0, i.bG)([o.A], () => o.A.assets);
    return (
        r.useEffect(() => {
            let t = async () => {
                let e = await a.Ay.getAssets();
                null != e && s.h.dispatch({ type: "HAVEN_GOT_ASSETS", assets: e.body });
            };
            null == e && t();
        }, [e]),
        e
    );
};
