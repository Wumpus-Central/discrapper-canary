"use strict";
n.d(t, { A: () => o });
var r = n(827734),
    i = n(775602),
    s = n(353835),
    a = n(723702);
function o(e) {
    if (!__OVERLAY__ && a.isPlatformEmbedded)
        try {
            let t = r.A.colors.BACKGROUND_BASE_LOWEST.resolve({ theme: e, saturation: i.A.saturation }).hex();
            s.A.setApplicationBackgroundColor(t);
        } catch {}
}
