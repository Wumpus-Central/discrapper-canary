n.d(t, {
    EP: () => a,
    F7: () => d,
    LG: () => c,
    hn: () => s,
    oX: () => u
});
var r,
    i,
    l = n(641033),
    o = n(388032),
    s = (((r = {})[(r.ENABLE_POGGERMODE = 0)] = 'ENABLE_POGGERMODE'), (r[(r.DISABLE_POGGERMODE = 1)] = 'DISABLE_POGGERMODE'), (r[(r.PING_SOMEONE = 2)] = 'PING_SOMEONE'), (r[(r.PING_ME = 3)] = 'PING_ME'), (r[(r.COMBO_MULTI_LEVEL_1 = 4)] = 'COMBO_MULTI_LEVEL_1'), (r[(r.COMBO_MULTI_LEVEL_2 = 5)] = 'COMBO_MULTI_LEVEL_2'), (r[(r.COMBO_MULTI_LEVEL_3 = 6)] = 'COMBO_MULTI_LEVEL_3'), (r[(r.COMBO_MULTI_LEVEL_4 = 7)] = 'COMBO_MULTI_LEVEL_4'), (r[(r.TOTAL_SCORE_LEVEL_1 = 8)] = 'TOTAL_SCORE_LEVEL_1'), (r[(r.TOTAL_SCORE_LEVEL_2 = 9)] = 'TOTAL_SCORE_LEVEL_2'), (r[(r.TOTAL_SCORE_LEVEL_3 = 10)] = 'TOTAL_SCORE_LEVEL_3'), (r[(r.TOTAL_SCORE_LEVEL_4 = 11)] = 'TOTAL_SCORE_LEVEL_4'), (r[(r.TOTAL_SCORE_LEVEL_5 = 12)] = 'TOTAL_SCORE_LEVEL_5'), (r[(r.VISITOR_100 = 13)] = 'VISITOR_100'), (r[(r.CUSTOMIZE_CONFETTI = 14)] = 'CUSTOMIZE_CONFETTI'), (r[(r.MORE = 15)] = 'MORE'), (r[(r.COMBO_VALUE_LEVEL_1 = 16)] = 'COMBO_VALUE_LEVEL_1'), (r[(r.COMBO_VALUE_LEVEL_2 = 17)] = 'COMBO_VALUE_LEVEL_2'), (r[(r.COMBO_VALUE_LEVEL_3 = 18)] = 'COMBO_VALUE_LEVEL_3'), (r[(r.COMBO_VALUE_LEVEL_4 = 19)] = 'COMBO_VALUE_LEVEL_4'), r),
    a = (((i = {})[(i.COMMON = 0)] = 'COMMON'), (i[(i.UNCOMMON = 1)] = 'UNCOMMON'), (i[(i.RARE = 2)] = 'RARE'), (i[(i.EPIC = 3)] = 'EPIC'), (i[(i.LEGENDARY = 4)] = 'LEGENDARY'), i);
let c = {
    0: {
        id: 0,
        name: () => o.intl.string(o.t.CRLcOz),
        description: () => o.intl.string(o.t['9+4/CA']),
        rarity: 0,
        hideDescriptionUntilUnlock: !1
    },
    1: {
        id: 1,
        name: () => o.intl.string(o.t.PlhJTk),
        description: () => o.intl.string(o.t['+QxFMj']),
        rarity: 1,
        hideDescriptionUntilUnlock: !1
    },
    13: {
        id: 13,
        name: () => o.intl.string(o.t['+91bDw']),
        description: () => o.intl.string(o.t['6ZakdX']),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        onAction: () => {
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
        }
    },
    14: {
        id: 14,
        name: () => o.intl.string(o.t.OdenKS),
        description: () => o.intl.string(o.t['06/08P']),
        rarity: 0,
        hideDescriptionUntilUnlock: !1
    },
    15: {
        id: 15,
        name: () => o.intl.string(o.t['C88+vr']),
        description: () => o.intl.string(o.t.w4SYND),
        rarity: 1,
        hideDescriptionUntilUnlock: !1
    },
    2: {
        id: 2,
        name: () => o.intl.string(o.t['7q1avL']),
        description: () => o.intl.string(o.t.XwAgCA),
        rarity: 0,
        hideDescriptionUntilUnlock: !1
    },
    3: {
        id: 3,
        name: () => o.intl.formatToMarkdownString(o.t.NgKcOj, {}),
        description: () => o.intl.string(o.t.jmzQrK),
        rarity: 1,
        hideDescriptionUntilUnlock: !1
    },
    4: {
        id: 4,
        name: () => o.intl.string(o.t.q3ekQ0),
        description: () => o.intl.string(o.t.KDk6IC),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 2
    },
    5: {
        id: 5,
        name: () => o.intl.string(o.t.k6Nlxc),
        description: () => o.intl.string(o.t['A4Bi5+']),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 4
    },
    6: {
        id: 6,
        name: () => o.intl.string(o.t['EPQN5+']),
        description: () => o.intl.string(o.t['NS/Qvb']),
        rarity: 2,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 5
    },
    7: {
        id: 7,
        name: () => o.intl.string(o.t['H/xC9v']),
        description: () => o.intl.string(o.t.NECb4u),
        rarity: 2,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: (e) => e.multiplier >= 7
    },
    8: {
        id: 8,
        name: () => o.intl.string(o.t['24aD8v']),
        description: () => o.intl.string(o.t.YtKoSU),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 430 === (0, l.Eo)(e)
    },
    9: {
        id: 9,
        name: () => o.intl.string(o.t['vZm48/']),
        description: () => o.intl.string(o.t.QKxjeX),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 555 === (0, l.Eo)(e)
    },
    10: {
        id: 10,
        name: () => o.intl.string(o.t.SxLn19),
        description: () => o.intl.string(o.t['7tuql5']),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 898 === (0, l.Eo)(e)
    },
    11: {
        id: 11,
        name: () => o.intl.string(o.t.hK1RPj),
        description: () => o.intl.string(o.t.okzLOT),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 1337 === (0, l.Eo)(e)
    },
    12: {
        id: 12,
        name: () => o.intl.string(o.t.Pa8olZ),
        description: () => o.intl.string(o.t.KSzHjo),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 2048 === (0, l.Eo)(e)
    },
    16: {
        id: 16,
        name: () => o.intl.string(o.t.lXhhWV),
        description: () => o.intl.string(o.t.OxvobG),
        rarity: 2,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 64 === e.value
    },
    17: {
        id: 17,
        name: () => o.intl.string(o.t.M4ErfH),
        description: () => o.intl.string(o.t['sjzx+/']),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 88 === e.value
    },
    18: {
        id: 18,
        name: () => o.intl.string(o.t.RawXaG),
        description: () => o.intl.string(o.t.iOsWLy),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: (e) => 99 === e.value
    },
    19: {
        id: 19,
        name: () => o.intl.string(o.t.irv64O),
        description: () => o.intl.string(o.t.shGZw8),
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
