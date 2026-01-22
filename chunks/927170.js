n.d(t, {
    $: () => s,
});
var r = n(945810),
    i = n(128319);
let a = (0, r.mj)({
    kind: "user",
    name: "2025-10-krisp-at-end",
    defaultConfig: {
        noiseCancellationAfterProcessing: !1,
        vadAfterWebrtc: !1,
    },
    variations: {
        1: {
            noiseCancellationAfterProcessing: !0,
            vadAfterWebrtc: !1,
        },
        2: {
            noiseCancellationAfterProcessing: !1,
            vadAfterWebrtc: !0,
        },
        3: {
            noiseCancellationAfterProcessing: !0,
            vadAfterWebrtc: !0,
        },
    },
});

function s(e) {
    let { location: t, disable: n = !1 } = e,
        { isInHoldout: r } = i.p.getCurrentConfig(
            {
                location: t,
            },
            {
                disable: n,
                autoTrackExposure: !0,
            },
        );
    return r || n
        ? a.definition.defaultConfig
        : a.getConfig({
              location: t,
          });
}
