"use strict";
n.d(t, { WB: () => l });
var r = n(945810),
    i = n(792620),
    a = n(654487),
    s = n(985018);
let o = (0, r.mj)({
    name: "2026-01-video-quest-start-cta",
    kind: "user",
    defaultConfig: { enabled: !1, variant: null },
    variations: { 0: { enabled: !1, variant: null }, 1: { enabled: !0, variant: 0 }, 2: { enabled: !0, variant: 1 } },
});
function l(e) {
    let t = o.getConfig({ location: a.rE.QUEST_PRIMARY_CTA });
    if (t.enabled) {
        let n = (0, i.Yh)(e);
        return 1 === t.variant
            ? s.intl.formatToPlainString(s.t.GNsKiW, { remainTime: (0, i.xm)(n) })
            : s.intl.string(s.t["6fpk4L"]);
    }
    return s.intl.string(s.t.umdNin);
}
