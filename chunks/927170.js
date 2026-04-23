"use strict";
n.d(t, { $: () => i });
let r = (0, n(945810).mj)({
    kind: "user",
    name: "2025-10-krisp-at-end",
    defaultConfig: { noiseCancellationAfterProcessing: !1, vadAfterWebrtc: !1 },
    variations: {
        1: { noiseCancellationAfterProcessing: !0, vadAfterWebrtc: !1 },
        2: { noiseCancellationAfterProcessing: !1, vadAfterWebrtc: !0 },
        3: { noiseCancellationAfterProcessing: !0, vadAfterWebrtc: !0 },
    },
});
function i(e) {
    let { location: t, disable: n = !1 } = e;
    return n ? r.definition.defaultConfig : r.getConfig({ location: t });
}
