"use strict";
n.d(t, { ag: () => d, l0: () => u, md: () => l, sn: () => o, vM: () => c });
var i,
    r,
    s = n(103640),
    a = n(375708),
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
    l =
        (((r = {})[(r.COMMON = 0)] = "COMMON"),
        (r[(r.UNCOMMON = 1)] = "UNCOMMON"),
        (r[(r.RARE = 2)] = "RARE"),
        (r[(r.EPIC = 3)] = "EPIC"),
        (r[(r.LEGENDARY = 4)] = "LEGENDARY"),
        r);
let u = {
    0: {
        id: 0,
        name: () => a.intl.string(a.t["CRLcO+"]),
        description: () => a.intl.string(a.t["9+4/CD"]),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
    },
    1: {
        id: 1,
        name: () => a.intl.string(a.t.PlhJTk),
        description: () => a.intl.string(a.t["+QxFMr"]),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
    },
    13: {
        id: 13,
        name: () => a.intl.string(a.t["+91bDx"]),
        description: () => a.intl.string(a.t["6Zakdf"]),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        onAction: () => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        },
    },
    14: {
        id: 14,
        name: () => a.intl.string(a.t.OdenKS),
        description: () => a.intl.string(a.t["06/08A"]),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
    },
    15: {
        id: 15,
        name: () => a.intl.string(a.t["C88+vm"]),
        description: () => a.intl.string(a.t.w4SYNC),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
    },
    2: {
        id: 2,
        name: () => a.intl.string(a.t["7q1avI"]),
        description: () => a.intl.string(a.t.XwAgCF),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
    },
    3: {
        id: 3,
        name: () => a.intl.formatToMarkdownString(a.t.NgKcOi, {}),
        description: () => a.intl.string(a.t.jmzQrA),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
    },
    4: {
        id: 4,
        name: () => a.intl.string(a.t.q3ekQx),
        description: () => a.intl.string(a.t.KDk6IG),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 2,
    },
    5: {
        id: 5,
        name: () => a.intl.string(a.t.k6NlxZ),
        description: () => a.intl.string(a.t.A4Bi5z),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 4,
    },
    6: {
        id: 6,
        name: () => a.intl.string(a.t.EPQN54),
        description: () => a.intl.string(a.t["NS/QvW"]),
        rarity: 2,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 5,
    },
    7: {
        id: 7,
        name: () => a.intl.string(a.t["H/xC9h"]),
        description: () => a.intl.string(a.t.NECb4t),
        rarity: 2,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 7,
    },
    8: {
        id: 8,
        name: () => a.intl.string(a.t["24aD8g"]),
        description: () => a.intl.string(a.t.YtKoSd),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 430 === (0, s.RL)(e),
    },
    9: {
        id: 9,
        name: () => a.intl.string(a.t.vZm483),
        description: () => a.intl.string(a.t.QKxjeQ),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 555 === (0, s.RL)(e),
    },
    10: {
        id: 10,
        name: () => a.intl.string(a.t.SxLn1y),
        description: () => a.intl.string(a.t["7tuql7"]),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 898 === (0, s.RL)(e),
    },
    11: {
        id: 11,
        name: () => a.intl.string(a.t.hK1RPg),
        description: () => a.intl.string(a.t.okzLOT),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 1337 === (0, s.RL)(e),
    },
    12: {
        id: 12,
        name: () => a.intl.string(a.t.Pa8olZ),
        description: () => a.intl.string(a.t.KSzHjj),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 2048 === (0, s.RL)(e),
    },
    16: {
        id: 16,
        name: () => a.intl.string(a.t.lXhhWS),
        description: () => a.intl.string(a.t.OxvobM),
        rarity: 2,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 64 === e.value,
    },
    17: {
        id: 17,
        name: () => a.intl.string(a.t.M4ErfE),
        description: () => a.intl.string(a.t["sjzx+z"]),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 88 === e.value,
    },
    18: {
        id: 18,
        name: () => a.intl.string(a.t.RawXaF),
        description: () => a.intl.string(a.t.iOsWL1),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 99 === e.value,
    },
    19: {
        id: 19,
        name: () => a.intl.string(a.t.irv64I),
        description: () => a.intl.string(a.t.shGZwx),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 113 === e.value,
    },
};
function c(e) {
    return u[e];
}
let d = (e) => {
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
};
