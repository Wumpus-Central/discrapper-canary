n.d(t, { Z: () => m }), n(789020), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(200651);
n(192379);
var i = n(243814),
    o = n(993365),
    a = n(481060),
    s = n(979200),
    l = n(630388),
    c = n(709054),
    u = n(941532),
    d = n(713938),
    f = n(981631),
    _ = n(388032),
    p = n(261668);
let h = (e) => {
    switch (e) {
        case s.ZC.IP_LOCATION:
            return a.enf;
        case s.ZC.DISPLAYS_ADVERTISEMENTS:
            return a.FLu;
        default:
            return null;
    }
};
function m(e) {
    var t;
    let n,
        { application: o, scopes: m, redirectUri: E, approximateGuildCount: b, isEmbeddedFlow: y, disclosures: v } = e,
        O = new Date(c.default.extractTimestamp(o.id)),
        I = (0, d.W3)(m),
        S = (0, l.yE)(null != (t = o.flags) ? t : 0, f.udG.EMBEDDED);
    if (null != E && !S && !y)
        try {
            let e = new URL(E);
            n = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            n = null;
        }
    return (0, r.jsxs)('div', {
        className: p.applicationDetails,
        children: [
            null != n
                ? (0, r.jsx)(g, {
                      icon: a.xPt,
                      text: _.NW.format(_.t['5k5OKC'], { origin: n })
                  })
                : null,
            (0, r.jsx)(g, {
                icon: a.mBM,
                text: (0, u.i)(o)
            }),
            (0, r.jsx)(g, {
                icon: a.T39,
                text: _.NW.formatToPlainString(_.t['+1bjc3'], { date: O })
            }),
            m.includes(i.x.BOT) && null != b
                ? (0, r.jsx)(g, {
                      icon: a.wGt,
                      text: _.NW.formatToPlainString(_.t.UHGHSE, { guildCount: b })
                  })
                : null,
            (0, r.jsx)(g, {
                icon: a.b7C,
                text: I
            }),
            null != v
                ? v.map((e) => {
                      let t = (0, s.PM)(e),
                          n = h(e);
                      return null != n && null != t
                          ? (0, r.jsx)(g, {
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
    return (0, r.jsxs)('div', {
        className: p.entry,
        children: [
            (0, r.jsx)(t, {
                className: p.entryIcon,
                color: 'currentColor'
            }),
            (0, r.jsx)(o.x, {
                variant: 'text-xs/normal',
                className: p.entryInner,
                children: n
            })
        ]
    });
}
