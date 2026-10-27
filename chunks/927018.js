n.d(t, { ag: () => u, l0: () => c, md: () => o, sn: () => a, vM: () => d });
var i,
    s,
    r = n(103640),
    l = n(105292),
    a =
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
    o =
        (((s = {})[(s.COMMON = 0)] = "COMMON"),
        (s[(s.UNCOMMON = 1)] = "UNCOMMON"),
        (s[(s.RARE = 2)] = "RARE"),
        (s[(s.EPIC = 3)] = "EPIC"),
        (s[(s.LEGENDARY = 4)] = "LEGENDARY"),
        s);
let c = {
    0: {
        id: 0,
        name: () => l.intl.string(l.t["CRLcO+"]),
        description: () => l.intl.string(l.t["9+4/CD"]),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
    },
    1: {
        id: 1,
        name: () => l.intl.string(l.t.PlhJTk),
        description: () => l.intl.string(l.t["+QxFMr"]),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
    },
    13: {
        id: 13,
        name: () => l.intl.string(l.t["+91bDx"]),
        description: () => l.intl.string(l.t["6Zakdf"]),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        onAction: () => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        },
    },
    14: {
        id: 14,
        name: () => l.intl.string(l.t.OdenKS),
        description: () => l.intl.string(l.t["06/08A"]),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
    },
    15: {
        id: 15,
        name: () => l.intl.string(l.t["C88+vm"]),
        description: () => l.intl.string(l.t.w4SYNC),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
    },
    2: {
        id: 2,
        name: () => l.intl.string(l.t["7q1avI"]),
        description: () => l.intl.string(l.t.XwAgCF),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
    },
    3: {
        id: 3,
        name: () => l.intl.formatToMarkdownString(l.t.NgKcOi, {}),
        description: () => l.intl.string(l.t.jmzQrA),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
    },
    4: {
        id: 4,
        name: () => l.intl.string(l.t.q3ekQx),
        description: () => l.intl.string(l.t.KDk6IG),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 2,
    },
    5: {
        id: 5,
        name: () => l.intl.string(l.t.k6NlxZ),
        description: () => l.intl.string(l.t.A4Bi5z),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 4,
    },
    6: {
        id: 6,
        name: () => l.intl.string(l.t.EPQN54),
        description: () => l.intl.string(l.t["NS/QvW"]),
        rarity: 2,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 5,
    },
    7: {
        id: 7,
        name: () => l.intl.string(l.t["H/xC9h"]),
        description: () => l.intl.string(l.t.NECb4t),
        rarity: 2,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 7,
    },
    8: {
        id: 8,
        name: () => l.intl.string(l.t["24aD8g"]),
        description: () => l.intl.string(l.t.YtKoSd),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 430 === (0, r.RL)(e),
    },
    9: {
        id: 9,
        name: () => l.intl.string(l.t.vZm483),
        description: () => l.intl.string(l.t.QKxjeQ),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 555 === (0, r.RL)(e),
    },
    10: {
        id: 10,
        name: () => l.intl.string(l.t.SxLn1y),
        description: () => l.intl.string(l.t["7tuql7"]),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 898 === (0, r.RL)(e),
    },
    11: {
        id: 11,
        name: () => l.intl.string(l.t.hK1RPg),
        description: () => l.intl.string(l.t.okzLOT),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 1337 === (0, r.RL)(e),
    },
    12: {
        id: 12,
        name: () => l.intl.string(l.t.Pa8olZ),
        description: () => l.intl.string(l.t.KSzHjj),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 2048 === (0, r.RL)(e),
    },
    16: {
        id: 16,
        name: () => l.intl.string(l.t.lXhhWS),
        description: () => l.intl.string(l.t.OxvobM),
        rarity: 2,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 64 === e.value,
    },
    17: {
        id: 17,
        name: () => l.intl.string(l.t.M4ErfE),
        description: () => l.intl.string(l.t["sjzx+z"]),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 88 === e.value,
    },
    18: {
        id: 18,
        name: () => l.intl.string(l.t.RawXaF),
        description: () => l.intl.string(l.t.iOsWL1),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 99 === e.value,
    },
    19: {
        id: 19,
        name: () => l.intl.string(l.t.irv64I),
        description: () => l.intl.string(l.t.shGZwx),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 113 === e.value,
    },
};
function d(e) {
    return c[e];
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
