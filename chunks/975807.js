"use strict";
n.d(t, { A: () => r });
var i = n(723702);
async function r(e, t) {
    let { default: r } = await Promise.resolve().then(n.bind(n, 464792)),
        s = r(e, { skipExtensionCheck: t, analyticsLocations: [] });
    if (null != s) s(null);
    else if (i.isPlatformEmbedded) window.open(e);
    else {
        let t = document.createElement("a");
        (t.href = e), (t.target = "_blank"), (t.rel = "noreferrer noopener"), t.click();
    }
}
