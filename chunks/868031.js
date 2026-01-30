n.d(t, {
    WB: () => l,
});
var r = n(945810),
    i = n(792620),
    a = n(654487),
    o = n(985018);
let s = (0, r.mj)({
    name: "2026-01-video-quest-start-cta",
    kind: "user",
    defaultConfig: {
        enabled: !1,
        variant: null,
    },
    variations: {
        0: {
            enabled: !1,
            variant: null,
        },
        1: {
            enabled: !0,
            variant: 0,
        },
        2: {
            enabled: !0,
            variant: 1,
        },
    },
});

function l(e) {
    let t = s.getConfig({
        location: a.rE.QUEST_PRIMARY_CTA,
    });
    if (t.enabled) {
        let n = (0, i.Yh)(e);
        return 1 === t.variant
            ? o.intl.formatToPlainString(o.t.GNsKiW, {
                  remainTime: (0, i.xm)(n),
              })
            : o.intl.string(o.t["6fpk4L"]);
    }
    return o.intl.string(o.t.umdNin);
}
