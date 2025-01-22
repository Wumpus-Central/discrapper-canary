r.d(n, {
    CZ: function () {
        return u;
    },
    LB: function () {
        return d;
    },
    O5: function () {
        return c;
    },
    YC: function () {
        return i;
    }
});
var i,
    a = r(47120);
var o = r(653041);
var s = r(433517),
    l = r(388032);
!(function (e) {
    (e.CLASSIC = 'classic'), (e.RETRO = 'retro'), (e.BUBBLE = 'bop'), (e.DUCKY = 'ducky'), (e.LOFI = 'lofi'), (e.ASMR = 'asmr'), (e.DISCODO = 'discodo'), (e.HALLOWEEN = 'halloween'), (e.WINTER_HOLIDAY = 'winter_holiday');
})(i || (i = {}));
let u = 'custom_notification_sounds_asmr',
    c = 'custom_notification_sounds_discodo';
function d() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        n = f(e);
    return [
        {
            value: 'classic',
            label: l.intl.string(l.t.p3Hg5e),
            description: l.intl.string(l.t['4iA55u']),
            requirePremium: !1
        },
        {
            value: 'retro',
            label: l.intl.string(l.t.Rrwrnp),
            description: l.intl.string(l.t['zKG+ur']),
            requirePremium: !0
        },
        {
            value: 'lofi',
            label: l.intl.string(l.t.aEsrnp),
            description: l.intl.string(l.t.fMUEj4),
            requirePremium: !0
        },
        {
            value: 'ducky',
            label: l.intl.string(l.t['4TOv0t']),
            description: l.intl.string(l.t['1kbe6e']),
            requirePremium: !0
        },
        {
            value: 'bop',
            label: l.intl.string(l.t.s5Qo8P),
            description: l.intl.string(l.t.I39onp),
            requirePremium: !0
        },
        ...n
    ];
}
function f(e) {
    if (!e) return [];
    let n = [];
    return (
        s.K.get(c, !1) &&
            n.push({
                value: 'discodo',
                label: 'DISCODO',
                description: '๑(\u25D5‿\u25D5)๑',
                requirePremium: !0
            }),
        s.K.get(u, !1) &&
            n.push({
                value: 'asmr',
                label: l.intl.string(l.t['3SJZKC']),
                description: l.intl.formatToMarkdownString(l.t.MZlgQE, {}),
                requirePremium: !0
            }),
        n
    );
}
