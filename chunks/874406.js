i.d(n, { default: () => c });
var o = i(200651);
i(192379);
var e = i(481060),
    r = i(194359),
    s = i(468026),
    a = i(388032);
let c = (t) =>
    (0, o.jsx)(s.default, {
        confirmText: a.intl.string(a.t['cY+Ooa']),
        title: a.intl.string(a.t.z2pFjo),
        cancelText: a.intl.string(a.t['ETE/oK']),
        onConfirm: () => {
            r.Z.clearPendingRelationships();
        },
        body: a.intl.formatToPlainString(a.t['0nTvEx'], { incomingRequestCount: t.incomingRequestCount }),
        confirmColor: e.Ttl.RED,
        ...t
    });
