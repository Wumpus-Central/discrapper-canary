"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    r = n(17928),
    s = n(228366),
    a = n(418126),
    o = n(998740);
let l = () => {
    let e = (0, r.bG)([o.A], () => o.A.assets);
    return (
        i.useEffect(() => {
            let t = async () => {
                let e = await a.Ay.getAssets();
                null != e && s.h.dispatch({ type: "HAVEN_GOT_ASSETS", assets: e.body });
            };
            null == e && t();
        }, [e]),
        e
    );
};
