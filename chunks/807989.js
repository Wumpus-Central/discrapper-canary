n.d(t, { Z: () => b }), n(997841), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(243814),
    s = n(993365),
    l = n(481060),
    c = n(162685),
    u = n(979200),
    d = n(630388),
    f = n(709054),
    _ = n(941532),
    p = n(713938),
    h = n(981631),
    m = n(388032),
    g = n(261668);
let E = (e) => {
    switch (e) {
        case u.ZC.IP_LOCATION:
            return l.enf;
        case u.ZC.DISPLAYS_ADVERTISEMENTS:
            return l.FLu;
        default:
            return null;
    }
};
function b(e) {
    var t;
    let n,
        { application: i, scopes: s, redirectUri: b, approximateGuildCount: v, isEmbeddedFlow: O, disclosures: I } = e,
        S = new Date(f.default.extractTimestamp(i.id)),
        T = (0, p.W3)(s),
        A = (0, d.yE)(null != (t = i.flags) ? t : 0, h.udG.EMBEDDED);
    if (null != b && !A && !O)
        try {
            let e = new URL(b);
            n = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            n = null;
        }
    let N = c.w.useExperiment({ location: 'oauth2_authorize' });
    return (0, r.jsxs)('div', {
        className: a()(g.applicationDetails, { [g.noPadding]: N.enabled }),
        children: [
            null != n
                ? (0, r.jsx)(y, {
                      icon: l.xPt,
                      text: m.intl.format(m.t['5k5OKC'], { origin: n })
                  })
                : null,
            (0, r.jsx)(y, {
                icon: l.mBM,
                text: (0, _.i)(i)
            }),
            (0, r.jsx)(y, {
                icon: l.T39,
                text: m.intl.formatToPlainString(m.t['+1bjc3'], { date: S })
            }),
            s.includes(o.x.BOT) && null != v
                ? (0, r.jsx)(y, {
                      icon: l.wGt,
                      text: m.intl.formatToPlainString(m.t.UHGHSE, { guildCount: v })
                  })
                : null,
            (0, r.jsx)(y, {
                icon: l.b7C,
                text: T
            }),
            null != I
                ? I.map((e) => {
                      let t = (0, u.PM)(e),
                          n = E(e);
                      return null != n && null != t
                          ? (0, r.jsx)(y, {
                                icon: n,
                                text: t
                            })
                          : null;
                  })
                : null
        ]
    });
}
function y(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)('div', {
        className: g.entry,
        children: [
            (0, r.jsx)(t, {
                className: g.entryIcon,
                color: 'currentColor'
            }),
            (0, r.jsx)(s.x, {
                variant: 'text-xs/normal',
                className: g.entryInner,
                children: n
            })
        ]
    });
}
