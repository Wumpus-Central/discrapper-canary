n.d(t, {
    ag: () => d,
    l0: () => c,
    md: () => o,
    sn: () => a,
    vM: () => u,
});
var r,
    l,
    i = n(103640),
    s = n(985018),
    a =
        (((r = {})[(r.ENABLE_POGGERMODE = 0)] = "ENABLE_POGGERMODE"),
        (r[(r.DISABLE_POGGERMODE = 1)] = "DISABLE_POGGERMODE"),
        (r[(r.PING_SOMEONE = 2)] = "PING_SOMEONE"),
        (r[(r.PING_ME = 3)] = "PING_ME"),
        (r[(r.COMBO_MULTI_LEVEL_1 = 4)] = "COMBO_MULTI_LEVEL_1"),
        (r[(r.COMBO_MULTI_LEVEL_2 = 5)] = "COMBO_MULTI_LEVEL_2"),
        (r[(r.COMBO_MULTI_LEVEL_3 = 6)] = "COMBO_MULTI_LEVEL_3"),
        (r[(r.COMBO_MULTI_LEVEL_4 = 7)] = "COMBO_MULTI_LEVEL_4"),
        (r[(r.TOTAL_SCORE_LEVEL_1 = 8)] = "TOTAL_SCORE_LEVEL_1"),
        (r[(r.TOTAL_SCORE_LEVEL_2 = 9)] = "TOTAL_SCORE_LEVEL_2"),
        (r[(r.TOTAL_SCORE_LEVEL_3 = 10)] = "TOTAL_SCORE_LEVEL_3"),
        (r[(r.TOTAL_SCORE_LEVEL_4 = 11)] = "TOTAL_SCORE_LEVEL_4"),
        (r[(r.TOTAL_SCORE_LEVEL_5 = 12)] = "TOTAL_SCORE_LEVEL_5"),
        (r[(r.VISITOR_100 = 13)] = "VISITOR_100"),
        (r[(r.CUSTOMIZE_CONFETTI = 14)] = "CUSTOMIZE_CONFETTI"),
        (r[(r.MORE = 15)] = "MORE"),
        (r[(r.COMBO_VALUE_LEVEL_1 = 16)] = "COMBO_VALUE_LEVEL_1"),
        (r[(r.COMBO_VALUE_LEVEL_2 = 17)] = "COMBO_VALUE_LEVEL_2"),
        (r[(r.COMBO_VALUE_LEVEL_3 = 18)] = "COMBO_VALUE_LEVEL_3"),
        (r[(r.COMBO_VALUE_LEVEL_4 = 19)] = "COMBO_VALUE_LEVEL_4"),
        r),
    o =
        (((l = {})[(l.COMMON = 0)] = "COMMON"),
        (l[(l.UNCOMMON = 1)] = "UNCOMMON"),
        (l[(l.RARE = 2)] = "RARE"),
        (l[(l.EPIC = 3)] = "EPIC"),
        (l[(l.LEGENDARY = 4)] = "LEGENDARY"),
        l);
let c = {
    0: {
        id: 0,
        name: () => s.intl.string(s.t["CRLcO+"]),
        description: () => s.intl.string(s.t["9+4/CD"]),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
    },
    1: {
        id: 1,
        name: () => s.intl.string(s.t.PlhJTk),
        description: () => s.intl.string(s.t["+QxFMr"]),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
    },
    13: {
        id: 13,
        name: () => s.intl.string(s.t["+91bDx"]),
        description: () => s.intl.string(s.t["6Zakdf"]),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        onAction: () => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        },
    },
    14: {
        id: 14,
        name: () => s.intl.string(s.t.OdenKS),
        description: () => s.intl.string(s.t["06/08A"]),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
    },
    15: {
        id: 15,
        name: () => s.intl.string(s.t["C88+vm"]),
        description: () => s.intl.string(s.t.w4SYNC),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
    },
    2: {
        id: 2,
        name: () => s.intl.string(s.t["7q1avI"]),
        description: () => s.intl.string(s.t.XwAgCF),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
    },
    3: {
        id: 3,
        name: () => s.intl.formatToMarkdownString(s.t.NgKcOi, {}),
        description: () => s.intl.string(s.t.jmzQrA),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
    },
    4: {
        id: 4,
        name: () => s.intl.string(s.t.q3ekQx),
        description: () => s.intl.string(s.t.KDk6IG),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 2,
    },
    5: {
        id: 5,
        name: () => s.intl.string(s.t.k6NlxZ),
        description: () => s.intl.string(s.t.A4Bi5z),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 4,
    },
    6: {
        id: 6,
        name: () => s.intl.string(s.t.EPQN54),
        description: () => s.intl.string(s.t["NS/QvW"]),
        rarity: 2,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 5,
    },
    7: {
        id: 7,
        name: () => s.intl.string(s.t["H/xC9h"]),
        description: () => s.intl.string(s.t.NECb4t),
        rarity: 2,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 7,
    },
    8: {
        id: 8,
        name: () => s.intl.string(s.t["24aD8g"]),
        description: () => s.intl.string(s.t.YtKoSd),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 430 === (0, i.RL)(e),
    },
    9: {
        id: 9,
        name: () => s.intl.string(s.t.vZm483),
        description: () => s.intl.string(s.t.QKxjeQ),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 555 === (0, i.RL)(e),
    },
    10: {
        id: 10,
        name: () => s.intl.string(s.t.SxLn1y),
        description: () => s.intl.string(s.t["7tuql7"]),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 898 === (0, i.RL)(e),
    },
    11: {
        id: 11,
        name: () => s.intl.string(s.t.hK1RPg),
        description: () => s.intl.string(s.t.okzLOT),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 1337 === (0, i.RL)(e),
    },
    12: {
        id: 12,
        name: () => s.intl.string(s.t.Pa8olZ),
        description: () => s.intl.string(s.t.KSzHjj),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 2048 === (0, i.RL)(e),
    },
    16: {
        id: 16,
        name: () => s.intl.string(s.t.lXhhWS),
        description: () => s.intl.string(s.t.OxvobM),
        rarity: 2,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 64 === e.value,
    },
    17: {
        id: 17,
        name: () => s.intl.string(s.t.M4ErfE),
        description: () => s.intl.string(s.t["sjzx+z"]),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 88 === e.value,
    },
    18: {
        id: 18,
        name: () => s.intl.string(s.t.RawXaF),
        description: () => s.intl.string(s.t.iOsWL1),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 99 === e.value,
    },
    19: {
        id: 19,
        name: () => s.intl.string(s.t.irv64I),
        description: () => s.intl.string(s.t.shGZwx),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 113 === e.value,
    },
};

function u(e) {
    return c[e];
}
let d = (e) => {
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
