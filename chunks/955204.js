n.d(t, {
    EP: () => a,
    F7: () => d,
    LG: () => c,
    hn: () => s,
    oX: () => u
});
var r,
    i,
    o = n(641033),
    l = n(388032),
    s = (((r = {})[(r.ENABLE_POGGERMODE = 0)] = 'ENABLE_POGGERMODE'), (r[(r.DISABLE_POGGERMODE = 1)] = 'DISABLE_POGGERMODE'), (r[(r.PING_SOMEONE = 2)] = 'PING_SOMEONE'), (r[(r.PING_ME = 3)] = 'PING_ME'), (r[(r.COMBO_MULTI_LEVEL_1 = 4)] = 'COMBO_MULTI_LEVEL_1'), (r[(r.COMBO_MULTI_LEVEL_2 = 5)] = 'COMBO_MULTI_LEVEL_2'), (r[(r.COMBO_MULTI_LEVEL_3 = 6)] = 'COMBO_MULTI_LEVEL_3'), (r[(r.COMBO_MULTI_LEVEL_4 = 7)] = 'COMBO_MULTI_LEVEL_4'), (r[(r.TOTAL_SCORE_LEVEL_1 = 8)] = 'TOTAL_SCORE_LEVEL_1'), (r[(r.TOTAL_SCORE_LEVEL_2 = 9)] = 'TOTAL_SCORE_LEVEL_2'), (r[(r.TOTAL_SCORE_LEVEL_3 = 10)] = 'TOTAL_SCORE_LEVEL_3'), (r[(r.TOTAL_SCORE_LEVEL_4 = 11)] = 'TOTAL_SCORE_LEVEL_4'), (r[(r.TOTAL_SCORE_LEVEL_5 = 12)] = 'TOTAL_SCORE_LEVEL_5'), (r[(r.VISITOR_100 = 13)] = 'VISITOR_100'), (r[(r.CUSTOMIZE_CONFETTI = 14)] = 'CUSTOMIZE_CONFETTI'), (r[(r.MORE = 15)] = 'MORE'), (r[(r.COMBO_VALUE_LEVEL_1 = 16)] = 'COMBO_VALUE_LEVEL_1'), (r[(r.COMBO_VALUE_LEVEL_2 = 17)] = 'COMBO_VALUE_LEVEL_2'), (r[(r.COMBO_VALUE_LEVEL_3 = 18)] = 'COMBO_VALUE_LEVEL_3'), (r[(r.COMBO_VALUE_LEVEL_4 = 19)] = 'COMBO_VALUE_LEVEL_4'), r),
    a = (((i = {})[(i.COMMON = 0)] = 'COMMON'), (i[(i.UNCOMMON = 1)] = 'UNCOMMON'), (i[(i.RARE = 2)] = 'RARE'), (i[(i.EPIC = 3)] = 'EPIC'), (i[(i.LEGENDARY = 4)] = 'LEGENDARY'), i);
let c = {
    0: {
        id: 0,
        name: () => l.NW.string(l.t.CRLcOz),
        description: () => l.NW.string(l.t['9+4/CA']),
        rarity: 0,
        hideDescriptionUntilUnlock: !1
    },
    1: {
        id: 1,
        name: () => l.NW.string(l.t.PlhJTk),
        description: () => l.NW.string(l.t['+QxFMj']),
        rarity: 1,
        hideDescriptionUntilUnlock: !1
    },
    13: {
        id: 13,
        name: () => l.NW.string(l.t['+91bDw']),
        description: () => l.NW.string(l.t['6ZakdX']),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        onAction: () => {
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
        }
    },
    14: {
        id: 14,
        name: () => l.NW.string(l.t.OdenKS),
        description: () => l.NW.string(l.t['06/08P']),
        rarity: 0,
        hideDescriptionUntilUnlock: !1
    },
    15: {
        id: 15,
        name: () => l.NW.string(l.t['C88+vr']),
        description: () => l.NW.string(l.t.w4SYND),
        rarity: 1,
        hideDescriptionUntilUnlock: !1
    },
    2: {
        id: 2,
        name: () => l.NW.string(l.t['7q1avL']),
        description: () => l.NW.string(l.t.XwAgCA),
        rarity: 0,
        hideDescriptionUntilUnlock: !1
    },
    3: {
        id: 3,
        name: () => l.NW.formatToMarkdownString(l.t.NgKcOj, {}),
        description: () => l.NW.string(l.t.jmzQrK),
        rarity: 1,
        hideDescriptionUntilUnlock: !1
    },
    4: {
        id: 4,
        name: () => l.NW.string(l.t.q3ekQ0),
        description: () => l.NW.string(l.t.KDk6IC),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 2
    },
    5: {
        id: 5,
        name: () => l.NW.string(l.t.k6Nlxc),
        description: () => l.NW.string(l.t['A4Bi5+']),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 4
    },
    6: {
        id: 6,
        name: () => l.NW.string(l.t['EPQN5+']),
        description: () => l.NW.string(l.t['NS/Qvb']),
        rarity: 2,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 5
    },
    7: {
        id: 7,
        name: () => l.NW.string(l.t['H/xC9v']),
        description: () => l.NW.string(l.t.NECb4u),
        rarity: 2,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 7
    },
    8: {
        id: 8,
        name: () => l.NW.string(l.t['24aD8v']),
        description: () => l.NW.string(l.t.YtKoSU),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 430 === (0, o.Eo)(e)
    },
    9: {
        id: 9,
        name: () => l.NW.string(l.t['vZm48/']),
        description: () => l.NW.string(l.t.QKxjeX),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 555 === (0, o.Eo)(e)
    },
    10: {
        id: 10,
        name: () => l.NW.string(l.t.SxLn19),
        description: () => l.NW.string(l.t['7tuql5']),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 898 === (0, o.Eo)(e)
    },
    11: {
        id: 11,
        name: () => l.NW.string(l.t.hK1RPj),
        description: () => l.NW.string(l.t.okzLOT),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 1337 === (0, o.Eo)(e)
    },
    12: {
        id: 12,
        name: () => l.NW.string(l.t.Pa8olZ),
        description: () => l.NW.string(l.t.KSzHjo),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 2048 === (0, o.Eo)(e)
    },
    16: {
        id: 16,
        name: () => l.NW.string(l.t.lXhhWV),
        description: () => l.NW.string(l.t.OxvobG),
        rarity: 2,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 64 === e.value
    },
    17: {
        id: 17,
        name: () => l.NW.string(l.t.M4ErfH),
        description: () => l.NW.string(l.t['sjzx+/']),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 88 === e.value
    },
    18: {
        id: 18,
        name: () => l.NW.string(l.t.RawXaG),
        description: () => l.NW.string(l.t.iOsWLy),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 99 === e.value
    },
    19: {
        id: 19,
        name: () => l.NW.string(l.t.irv64O),
        description: () => l.NW.string(l.t.shGZw8),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 113 === e.value
    }
};
function u(e) {
    return c[e];
}
let d = (e) => {
    switch (e) {
        case 0:
            return { color: '#1ABC9C' };
        case 1:
            return { color: '#3498DB' };
        case 2:
            return { color: '#9B59B6' };
        case 3:
            return { color: '#E91E63' };
        case 4:
            return { color: '#E67E22' };
    }
};
