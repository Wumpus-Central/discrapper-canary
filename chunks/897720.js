n.d(t, {
    IV: () => c,
    In: () => a,
    ZO: () => l,
    cv: () => o,
    dO: () => s,
    zb: () => i,
});
var r = n(652215),
    i = (function (e) {
        return (
            (e[(e.GENERIC = 0)] = "GENERIC"),
            (e[(e.TEXT = 1)] = "TEXT"),
            (e[(e.INCOMING_CALL = 2)] = "INCOMING_CALL"),
            (e[(e.NUDGE = 3)] = "NUDGE"),
            e
        );
    })({}),
    a = (function (e) {
        return (e[(e.NORMAL = 0)] = "NORMAL"), (e[(e.HIGH = 1)] = "HIGH"), (e[(e.URGENT = 2)] = "URGENT"), e;
    })({});

function s(e) {
    return (null == e ? void 0 : e.type) === r.uss.GO_LIVE;
}

function o(e) {
    return e.type === r.uss.VIDEO;
}

function l(e) {
    return e.type === r.uss.VOICE_V3;
}
var c = (function (e) {
    return (e.HORIZONTAL = "horizontal"), (e.VERTICAL = "vertical"), e;
})({});
