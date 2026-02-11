n.d(t, { RL: () => s, sH: () => o });
var i = n(933681),
    r = n(945810),
    a = n(654487);
let l = (0, r.mj)({
    name: "2026-01-quest-bar-unfurl",
    kind: "user",
    defaultConfig: { enabled: !1, variant: null },
    variations: { 2: { enabled: !0, variant: 0 }, 3: { enabled: !0, variant: 1 } },
});
function s(e) {
    return !0;
}
function o() {
    let { enabled: e, variant: t } = l.useConfig({ location: a.rE.QUESTS_BAR });
    return {
        unfurlEnabled: e,
        unfurlDurationInMilliseconds: (function (e) {
            if (null != e)
                switch (e) {
                    case 0:
                        return 5e3;
                    case 1:
                        return 1e4;
                    default:
                        (0, i.dr)(e);
                }
        })(t),
    };
}
