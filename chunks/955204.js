n.d(t, {
    EP: () => a,
    F7: () => u,
    LG: () => c,
    hn: () => o,
    oX: () => d
});
var i,
    l,
    r = n(641033),
    s = n(388032),
    o = (((i = {})[(i.ENABLE_POGGERMODE = 0)] = 'ENABLE_POGGERMODE'), (i[(i.DISABLE_POGGERMODE = 1)] = 'DISABLE_POGGERMODE'), (i[(i.PING_SOMEONE = 2)] = 'PING_SOMEONE'), (i[(i.PING_ME = 3)] = 'PING_ME'), (i[(i.COMBO_MULTI_LEVEL_1 = 4)] = 'COMBO_MULTI_LEVEL_1'), (i[(i.COMBO_MULTI_LEVEL_2 = 5)] = 'COMBO_MULTI_LEVEL_2'), (i[(i.COMBO_MULTI_LEVEL_3 = 6)] = 'COMBO_MULTI_LEVEL_3'), (i[(i.COMBO_MULTI_LEVEL_4 = 7)] = 'COMBO_MULTI_LEVEL_4'), (i[(i.TOTAL_SCORE_LEVEL_1 = 8)] = 'TOTAL_SCORE_LEVEL_1'), (i[(i.TOTAL_SCORE_LEVEL_2 = 9)] = 'TOTAL_SCORE_LEVEL_2'), (i[(i.TOTAL_SCORE_LEVEL_3 = 10)] = 'TOTAL_SCORE_LEVEL_3'), (i[(i.TOTAL_SCORE_LEVEL_4 = 11)] = 'TOTAL_SCORE_LEVEL_4'), (i[(i.TOTAL_SCORE_LEVEL_5 = 12)] = 'TOTAL_SCORE_LEVEL_5'), (i[(i.VISITOR_100 = 13)] = 'VISITOR_100'), (i[(i.CUSTOMIZE_CONFETTI = 14)] = 'CUSTOMIZE_CONFETTI'), (i[(i.MORE = 15)] = 'MORE'), (i[(i.COMBO_VALUE_LEVEL_1 = 16)] = 'COMBO_VALUE_LEVEL_1'), (i[(i.COMBO_VALUE_LEVEL_2 = 17)] = 'COMBO_VALUE_LEVEL_2'), (i[(i.COMBO_VALUE_LEVEL_3 = 18)] = 'COMBO_VALUE_LEVEL_3'), (i[(i.COMBO_VALUE_LEVEL_4 = 19)] = 'COMBO_VALUE_LEVEL_4'), i),
    a = (((l = {})[(l.COMMON = 0)] = 'COMMON'), (l[(l.UNCOMMON = 1)] = 'UNCOMMON'), (l[(l.RARE = 2)] = 'RARE'), (l[(l.EPIC = 3)] = 'EPIC'), (l[(l.LEGENDARY = 4)] = 'LEGENDARY'), l);
let c = {
    0: {
        id: 0,
        name: () => s.intl.string(s.t.CRLcOz),
        description: () => s.intl.string(s.t['9+4/CA']),
        rarity: 0,
        hideDescriptionUntilUnlock: !1
    },
    1: {
        id: 1,
        name: () => s.intl.string(s.t.PlhJTk),
        description: () => s.intl.string(s.t['+QxFMj']),
        rarity: 1,
        hideDescriptionUntilUnlock: !1
    },
    13: {
        id: 13,
        name: () => s.intl.string(s.t['+91bDw']),
        description: () => s.intl.string(s.t['6ZakdX']),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        onAction: () => {
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
        }
    },
    14: {
        id: 14,
        name: () => s.intl.string(s.t.OdenKS),
        description: () => s.intl.string(s.t['06/08P']),
        rarity: 0,
        hideDescriptionUntilUnlock: !1
    },
    15: {
        id: 15,
        name: () => s.intl.string(s.t['C88+vr']),
        description: () => s.intl.string(s.t.w4SYND),
        rarity: 1,
        hideDescriptionUntilUnlock: !1
    },
    2: {
        id: 2,
        name: () => s.intl.string(s.t['7q1avL']),
        description: () => s.intl.string(s.t.XwAgCA),
        rarity: 0,
        hideDescriptionUntilUnlock: !1
    },
    3: {
        id: 3,
        name: () => s.intl.formatToMarkdownString(s.t.NgKcOj, {}),
        description: () => s.intl.string(s.t.jmzQrK),
        rarity: 1,
        hideDescriptionUntilUnlock: !1
    },
    4: {
        id: 4,
        name: () => s.intl.string(s.t.q3ekQ0),
        description: () => s.intl.string(s.t.KDk6IC),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 2
    },
    5: {
        id: 5,
        name: () => s.intl.string(s.t.k6Nlxc),
        description: () => s.intl.string(s.t['A4Bi5+']),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 4
    },
    6: {
        id: 6,
        name: () => s.intl.string(s.t['EPQN5+']),
        description: () => s.intl.string(s.t['NS/Qvb']),
        rarity: 2,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 5
    },
    7: {
        id: 7,
        name: () => s.intl.string(s.t['H/xC9v']),
        description: () => s.intl.string(s.t.NECb4u),
        rarity: 2,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 7
    },
    8: {
        id: 8,
        name: () => s.intl.string(s.t['24aD8v']),
        description: () => s.intl.string(s.t.YtKoSU),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 430 === (0, r.Eo)(e)
    },
    9: {
        id: 9,
        name: () => s.intl.string(s.t['vZm48/']),
        description: () => s.intl.string(s.t.QKxjeX),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 555 === (0, r.Eo)(e)
    },
    10: {
        id: 10,
        name: () => s.intl.string(s.t.SxLn19),
        description: () => s.intl.string(s.t['7tuql5']),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 898 === (0, r.Eo)(e)
    },
    11: {
        id: 11,
        name: () => s.intl.string(s.t.hK1RPj),
        description: () => s.intl.string(s.t.okzLOT),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 1337 === (0, r.Eo)(e)
    },
    12: {
        id: 12,
        name: () => s.intl.string(s.t.Pa8olZ),
        description: () => s.intl.string(s.t.KSzHjo),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 2048 === (0, r.Eo)(e)
    },
    16: {
        id: 16,
        name: () => s.intl.string(s.t.lXhhWV),
        description: () => s.intl.string(s.t.OxvobG),
        rarity: 2,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 64 === e.value
    },
    17: {
        id: 17,
        name: () => s.intl.string(s.t.M4ErfH),
        description: () => s.intl.string(s.t['sjzx+/']),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 88 === e.value
    },
    18: {
        id: 18,
        name: () => s.intl.string(s.t.RawXaG),
        description: () => s.intl.string(s.t.iOsWLy),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 99 === e.value
    },
    19: {
        id: 19,
        name: () => s.intl.string(s.t.irv64O),
        description: () => s.intl.string(s.t.shGZw8),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 113 === e.value
    }
};
function d(e) {
    return c[e];
}
let u = (e) => {
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
