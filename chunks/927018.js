n.d(t, {
    ag: () => c,
    l0: () => o,
    md: () => s,
    sn: () => a,
    vM: () => l,
});
var r = n(103640),
    i = n(985018),
    a = (function (e) {
        return (
            (e[(e.ENABLE_POGGERMODE = 0)] = "ENABLE_POGGERMODE"),
            (e[(e.DISABLE_POGGERMODE = 1)] = "DISABLE_POGGERMODE"),
            (e[(e.PING_SOMEONE = 2)] = "PING_SOMEONE"),
            (e[(e.PING_ME = 3)] = "PING_ME"),
            (e[(e.COMBO_MULTI_LEVEL_1 = 4)] = "COMBO_MULTI_LEVEL_1"),
            (e[(e.COMBO_MULTI_LEVEL_2 = 5)] = "COMBO_MULTI_LEVEL_2"),
            (e[(e.COMBO_MULTI_LEVEL_3 = 6)] = "COMBO_MULTI_LEVEL_3"),
            (e[(e.COMBO_MULTI_LEVEL_4 = 7)] = "COMBO_MULTI_LEVEL_4"),
            (e[(e.TOTAL_SCORE_LEVEL_1 = 8)] = "TOTAL_SCORE_LEVEL_1"),
            (e[(e.TOTAL_SCORE_LEVEL_2 = 9)] = "TOTAL_SCORE_LEVEL_2"),
            (e[(e.TOTAL_SCORE_LEVEL_3 = 10)] = "TOTAL_SCORE_LEVEL_3"),
            (e[(e.TOTAL_SCORE_LEVEL_4 = 11)] = "TOTAL_SCORE_LEVEL_4"),
            (e[(e.TOTAL_SCORE_LEVEL_5 = 12)] = "TOTAL_SCORE_LEVEL_5"),
            (e[(e.VISITOR_100 = 13)] = "VISITOR_100"),
            (e[(e.CUSTOMIZE_CONFETTI = 14)] = "CUSTOMIZE_CONFETTI"),
            (e[(e.MORE = 15)] = "MORE"),
            (e[(e.COMBO_VALUE_LEVEL_1 = 16)] = "COMBO_VALUE_LEVEL_1"),
            (e[(e.COMBO_VALUE_LEVEL_2 = 17)] = "COMBO_VALUE_LEVEL_2"),
            (e[(e.COMBO_VALUE_LEVEL_3 = 18)] = "COMBO_VALUE_LEVEL_3"),
            (e[(e.COMBO_VALUE_LEVEL_4 = 19)] = "COMBO_VALUE_LEVEL_4"),
            e
        );
    })({}),
    s = (function (e) {
        return (
            (e[(e.COMMON = 0)] = "COMMON"),
            (e[(e.UNCOMMON = 1)] = "UNCOMMON"),
            (e[(e.RARE = 2)] = "RARE"),
            (e[(e.EPIC = 3)] = "EPIC"),
            (e[(e.LEGENDARY = 4)] = "LEGENDARY"),
            e
        );
    })({});
let o = {
    0: {
        id: 0,
        name: () => i.intl.string(i.t["CRLcO+"]),
        description: () => i.intl.string(i.t["9+4/CD"]),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
    },
    1: {
        id: 1,
        name: () => i.intl.string(i.t.PlhJTk),
        description: () => i.intl.string(i.t["+QxFMr"]),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
    },
    13: {
        id: 13,
        name: () => i.intl.string(i.t["+91bDx"]),
        description: () => i.intl.string(i.t["6Zakdf"]),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        onAction: () => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        },
    },
    14: {
        id: 14,
        name: () => i.intl.string(i.t.OdenKS),
        description: () => i.intl.string(i.t["06/08A"]),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
    },
    15: {
        id: 15,
        name: () => i.intl.string(i.t["C88+vm"]),
        description: () => i.intl.string(i.t.w4SYNC),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
    },
    2: {
        id: 2,
        name: () => i.intl.string(i.t["7q1avI"]),
        description: () => i.intl.string(i.t.XwAgCF),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
    },
    3: {
        id: 3,
        name: () => i.intl.formatToMarkdownString(i.t.NgKcOi, {}),
        description: () => i.intl.string(i.t.jmzQrA),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
    },
    4: {
        id: 4,
        name: () => i.intl.string(i.t.q3ekQx),
        description: () => i.intl.string(i.t.KDk6IG),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 2,
    },
    5: {
        id: 5,
        name: () => i.intl.string(i.t.k6NlxZ),
        description: () => i.intl.string(i.t.A4Bi5z),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 4,
    },
    6: {
        id: 6,
        name: () => i.intl.string(i.t.EPQN54),
        description: () => i.intl.string(i.t["NS/QvW"]),
        rarity: 2,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 5,
    },
    7: {
        id: 7,
        name: () => i.intl.string(i.t["H/xC9h"]),
        description: () => i.intl.string(i.t.NECb4t),
        rarity: 2,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 7,
    },
    8: {
        id: 8,
        name: () => i.intl.string(i.t["24aD8g"]),
        description: () => i.intl.string(i.t.YtKoSd),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 430 === (0, r.RL)(e),
    },
    9: {
        id: 9,
        name: () => i.intl.string(i.t.vZm483),
        description: () => i.intl.string(i.t.QKxjeQ),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 555 === (0, r.RL)(e),
    },
    10: {
        id: 10,
        name: () => i.intl.string(i.t.SxLn1y),
        description: () => i.intl.string(i.t["7tuql7"]),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 898 === (0, r.RL)(e),
    },
    11: {
        id: 11,
        name: () => i.intl.string(i.t.hK1RPg),
        description: () => i.intl.string(i.t.okzLOT),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 1337 === (0, r.RL)(e),
    },
    12: {
        id: 12,
        name: () => i.intl.string(i.t.Pa8olZ),
        description: () => i.intl.string(i.t.KSzHjj),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 2048 === (0, r.RL)(e),
    },
    16: {
        id: 16,
        name: () => i.intl.string(i.t.lXhhWS),
        description: () => i.intl.string(i.t.OxvobM),
        rarity: 2,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 64 === e.value,
    },
    17: {
        id: 17,
        name: () => i.intl.string(i.t.M4ErfE),
        description: () => i.intl.string(i.t["sjzx+z"]),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 88 === e.value,
    },
    18: {
        id: 18,
        name: () => i.intl.string(i.t.RawXaF),
        description: () => i.intl.string(i.t.iOsWL1),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 99 === e.value,
    },
    19: {
        id: 19,
        name: () => i.intl.string(i.t.irv64I),
        description: () => i.intl.string(i.t.shGZwx),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 113 === e.value,
    },
};

function l(e) {
    return o[e];
}
let c = (e) => {
    switch (e) {
        case 0:
            return {
                color: "#1ABC9C",
            };
        case 1:
            return {
                color: "#3498DB",
            };
        case 2:
            return {
                color: "#9B59B6",
            };
        case 3:
            return {
                color: "#E91E63",
            };
        case 4:
            return {
                color: "#E67E22",
            };
    }
};
