n.d(t, { Z: () => m }), n(789020), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(200651);
n(192379);
var r = n(243814),
    a = n(993365),
    s = n(481060),
    o = n(979200),
    l = n(630388),
    u = n(709054),
    c = n(941532),
    d = n(713938),
    f = n(981631),
    _ = n(388032),
    p = n(740542);
let h = (e) => {
    switch (e) {
        case o.ZC.IP_LOCATION:
            return s.enf;
        case o.ZC.DISPLAYS_ADVERTISEMENTS:
            return s.FLu;
        default:
            return null;
    }
};
function m(e) {
    var t;
    let n,
        { application: a, scopes: m, redirectUri: E, approximateGuildCount: v, isEmbeddedFlow: y, disclosures: I } = e,
        T = new Date(u.default.extractTimestamp(a.id)),
        b = (0, d.W3)(m),
        S = (0, l.yE)(null !== (t = a.flags) && void 0 !== t ? t : 0, f.udG.EMBEDDED);
    if (null != E && !S && !y)
        try {
            let e = new URL(E);
            n = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            n = null;
        }
    return (0, i.jsxs)('div', {
        className: p.applicationDetails,
        children: [
            null != n
                ? (0, i.jsx)(g, {
                      icon: s.xPt,
                      text: _.intl.format(_.t['5k5OKC'], { origin: n })
                  })
                : null,
            (0, i.jsx)(g, {
                icon: s.mBM,
                text: (0, c.i)(a)
            }),
            (0, i.jsx)(g, {
                icon: s.T39,
                text: _.intl.formatToPlainString(_.t['+1bjc3'], { date: T })
            }),
            m.includes(r.x.BOT) && null != v
                ? (0, i.jsx)(g, {
                      icon: s.wGt,
                      text: _.intl.formatToPlainString(_.t.UHGHSE, { guildCount: v })
                  })
                : null,
            (0, i.jsx)(g, {
                icon: s.b7C,
                text: b
            }),
            null != I
                ? I.map((e) => {
                      let t = (0, o.PM)(e),
                          n = h(e);
                      return null != n && null != t
                          ? (0, i.jsx)(g, {
                                icon: n,
                                text: t
                            })
                          : null;
                  })
                : null
        ]
    });
}
function g(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)('div', {
        className: p.entry,
        children: [
            (0, i.jsx)(t, {
                className: p.entryIcon,
                color: 'currentColor'
            }),
            (0, i.jsx)(a.x, {
                variant: 'text-xs/normal',
                className: p.entryInner,
                children: n
            })
        ]
    });
}
