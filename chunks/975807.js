"use strict";
n.d(t, { A: () => i });
var r = n(723702);
async function i(e, t) {
    let { default: i } = await Promise.resolve().then(n.bind(n, 352423)),
        a = i(e, { skipExtensionCheck: t, analyticsLocations: [] });
    if (null != a) a(null);
    else if (r.isPlatformEmbedded) window.open(e);
    else {
        let t = document.createElement("a");
        (t.href = e), (t.target = "_blank"), (t.rel = "noreferrer noopener"), t.click();
    }
}
