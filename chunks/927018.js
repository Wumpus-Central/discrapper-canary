n.d(t, { ag: () => u, l0: () => d, md: () => a, sn: () => o, vM: () => c });
var i,
    l,
    s = n(103640),
    r = n(375708),
    o =
        (((i = {})[(i.ENABLE_POGGERMODE = 0)] = "ENABLE_POGGERMODE"),
        (i[(i.DISABLE_POGGERMODE = 1)] = "DISABLE_POGGERMODE"),
        (i[(i.PING_SOMEONE = 2)] = "PING_SOMEONE"),
        (i[(i.PING_ME = 3)] = "PING_ME"),
        (i[(i.COMBO_MULTI_LEVEL_1 = 4)] = "COMBO_MULTI_LEVEL_1"),
        (i[(i.COMBO_MULTI_LEVEL_2 = 5)] = "COMBO_MULTI_LEVEL_2"),
        (i[(i.COMBO_MULTI_LEVEL_3 = 6)] = "COMBO_MULTI_LEVEL_3"),
        (i[(i.COMBO_MULTI_LEVEL_4 = 7)] = "COMBO_MULTI_LEVEL_4"),
        (i[(i.TOTAL_SCORE_LEVEL_1 = 8)] = "TOTAL_SCORE_LEVEL_1"),
        (i[(i.TOTAL_SCORE_LEVEL_2 = 9)] = "TOTAL_SCORE_LEVEL_2"),
        (i[(i.TOTAL_SCORE_LEVEL_3 = 10)] = "TOTAL_SCORE_LEVEL_3"),
        (i[(i.TOTAL_SCORE_LEVEL_4 = 11)] = "TOTAL_SCORE_LEVEL_4"),
        (i[(i.TOTAL_SCORE_LEVEL_5 = 12)] = "TOTAL_SCORE_LEVEL_5"),
        (i[(i.VISITOR_100 = 13)] = "VISITOR_100"),
        (i[(i.CUSTOMIZE_CONFETTI = 14)] = "CUSTOMIZE_CONFETTI"),
        (i[(i.MORE = 15)] = "MORE"),
        (i[(i.COMBO_VALUE_LEVEL_1 = 16)] = "COMBO_VALUE_LEVEL_1"),
        (i[(i.COMBO_VALUE_LEVEL_2 = 17)] = "COMBO_VALUE_LEVEL_2"),
        (i[(i.COMBO_VALUE_LEVEL_3 = 18)] = "COMBO_VALUE_LEVEL_3"),
        (i[(i.COMBO_VALUE_LEVEL_4 = 19)] = "COMBO_VALUE_LEVEL_4"),
        i),
    a =
        (((l = {})[(l.COMMON = 0)] = "COMMON"),
        (l[(l.UNCOMMON = 1)] = "UNCOMMON"),
        (l[(l.RARE = 2)] = "RARE"),
        (l[(l.EPIC = 3)] = "EPIC"),
        (l[(l.LEGENDARY = 4)] = "LEGENDARY"),
        l);
let d = {
    0: {
        id: 0,
        name: () => r.intl.string(r.t["CRLcO+"]),
        description: () => r.intl.string(r.t["9+4/CD"]),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
    },
    1: {
        id: 1,
        name: () => r.intl.string(r.t.PlhJTk),
        description: () => r.intl.string(r.t["+QxFMr"]),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
    },
    13: {
        id: 13,
        name: () => r.intl.string(r.t["+91bDx"]),
        description: () => r.intl.string(r.t["6Zakdf"]),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        onAction: () => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        },
    },
    14: {
        id: 14,
        name: () => r.intl.string(r.t.OdenKS),
        description: () => r.intl.string(r.t["06/08A"]),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
    },
    15: {
        id: 15,
        name: () => r.intl.string(r.t["C88+vm"]),
        description: () => r.intl.string(r.t.w4SYNC),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
    },
    2: {
        id: 2,
        name: () => r.intl.string(r.t["7q1avI"]),
        description: () => r.intl.string(r.t.XwAgCF),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
    },
    3: {
        id: 3,
        name: () => r.intl.formatToMarkdownString(r.t.NgKcOi, {}),
        description: () => r.intl.string(r.t.jmzQrA),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
    },
    4: {
        id: 4,
        name: () => r.intl.string(r.t.q3ekQx),
        description: () => r.intl.string(r.t.KDk6IG),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 2,
    },
    5: {
        id: 5,
        name: () => r.intl.string(r.t.k6NlxZ),
        description: () => r.intl.string(r.t.A4Bi5z),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 4,
    },
    6: {
        id: 6,
        name: () => r.intl.string(r.t.EPQN54),
        description: () => r.intl.string(r.t["NS/QvW"]),
        rarity: 2,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 5,
    },
    7: {
        id: 7,
        name: () => r.intl.string(r.t["H/xC9h"]),
        description: () => r.intl.string(r.t.NECb4t),
        rarity: 2,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 7,
    },
    8: {
        id: 8,
        name: () => r.intl.string(r.t["24aD8g"]),
        description: () => r.intl.string(r.t.YtKoSd),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 430 === (0, s.RL)(e),
    },
    9: {
        id: 9,
        name: () => r.intl.string(r.t.vZm483),
        description: () => r.intl.string(r.t.QKxjeQ),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 555 === (0, s.RL)(e),
    },
    10: {
        id: 10,
        name: () => r.intl.string(r.t.SxLn1y),
        description: () => r.intl.string(r.t["7tuql7"]),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 898 === (0, s.RL)(e),
    },
    11: {
        id: 11,
        name: () => r.intl.string(r.t.hK1RPg),
        description: () => r.intl.string(r.t.okzLOT),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 1337 === (0, s.RL)(e),
    },
    12: {
        id: 12,
        name: () => r.intl.string(r.t.Pa8olZ),
        description: () => r.intl.string(r.t.KSzHjj),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 2048 === (0, s.RL)(e),
    },
    16: {
        id: 16,
        name: () => r.intl.string(r.t.lXhhWS),
        description: () => r.intl.string(r.t.OxvobM),
        rarity: 2,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 64 === e.value,
    },
    17: {
        id: 17,
        name: () => r.intl.string(r.t.M4ErfE),
        description: () => r.intl.string(r.t["sjzx+z"]),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 88 === e.value,
    },
    18: {
        id: 18,
        name: () => r.intl.string(r.t.RawXaF),
        description: () => r.intl.string(r.t.iOsWL1),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 99 === e.value,
    },
    19: {
        id: 19,
        name: () => r.intl.string(r.t.irv64I),
        description: () => r.intl.string(r.t.shGZwx),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 113 === e.value,
    },
};
function c(e) {
    return d[e];
}
function u(e) {
    switch (e) {
        case 0:
            return { color: "#1ABC9C" };
        case 1:
            return { color: "#3498DB" };
        case 2:
            return { color: "#9B59B6" };
        case 3:
            return { color: "#E91E63" };
        case 4:
            return { color: "#E67E22" };
    }
}
