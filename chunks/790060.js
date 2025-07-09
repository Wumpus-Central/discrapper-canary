n.d(t, {
    L: () => a,
    R: () => i
});
var r = n(427164),
    i = (function (e) {
        return ((e.DISABLED = 'disabled'), (e.CONTROL = 'control'), (e.TREATMENT_1 = 'treatment_1'), (e.TREATMENT_2 = 'treatment_2'), e);
    })({});
let a = (0, r.le)({
    name: '2025-07-trial-redemption-cta-copy',
    kind: 'user',
    defaultConfig: {
        enabled: !1,
        bucket: 'disabled'
    },
    variations: {
        0: {
            enabled: !0,
            bucket: 'control'
        },
        1: {
            enabled: !0,
            bucket: 'treatment_1'
        },
        2: {
            enabled: !0,
            bucket: 'treatment_2'
        }
    }
});
