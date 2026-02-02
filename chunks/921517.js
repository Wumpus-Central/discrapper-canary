n.d(t, {
    RL: () => s,
    sH: () => o,
});
var r = n(933681),
    i = n(945810),
    l = n(654487);
let a = (0, i.mj)({
    name: "2026-01-quest-bar-unfurl",
    kind: "user",
    defaultConfig: {
        enabled: !1,
        variant: null,
    },
    variations: {
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

function s(e) {
    return e.features.includes(l.Li.QUEST_BAR_UNFURL);
}

function o() {
    let { enabled: e, variant: t } = a.useConfig({
        location: l.rE.QUESTS_BAR,
    });
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
                        (0, r.dr)(e);
                }
        })(t),
    };
}
