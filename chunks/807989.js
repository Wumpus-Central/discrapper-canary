r.d(n, {
    Z: function () {
        return S;
    }
});
var i = r(789020);
var a = r(315314);
var o = r(610138);
var s = r(216116);
var l = r(78328);
var u = r(815648);
var c = r(47120);
var d = r(200651);
r(192379);
var f = r(243814),
    p = r(993365),
    h = r(481060),
    _ = r(979200),
    m = r(630388),
    g = r(709054),
    E = r(941532),
    v = r(713938),
    y = r(981631),
    b = r(388032),
    I = r(452398);
let T = (e) => {
    switch (e) {
        case _.ZC.IP_LOCATION:
            return h.GlobeEarthIcon;
        case _.ZC.DISPLAYS_ADVERTISEMENTS:
            return h.EmbedIcon;
        default:
            return null;
    }
};
function S(e) {
    var n;
    let r,
        { application: i, scopes: a, redirectUri: o, approximateGuildCount: s, isEmbeddedFlow: l, disclosures: u } = e,
        c = new Date(g.default.extractTimestamp(i.id)),
        p = (0, v.W3)(a),
        S = (0, m.yE)(null !== (n = i.flags) && void 0 !== n ? n : 0, y.udG.EMBEDDED);
    if (null != o && !S && !l)
        try {
            let e = new URL(o);
            r = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            r = null;
        }
    return (0, d.jsxs)('div', {
        className: I.applicationDetails,
        children: [
            null != r
                ? (0, d.jsx)(A, {
                      icon: h.LinkIcon,
                      text: b.intl.format(b.t['5k5OKC'], { origin: r })
                  })
                : null,
            (0, d.jsx)(A, {
                icon: h.LockIcon,
                text: (0, E.i)(i)
            }),
            (0, d.jsx)(A, {
                icon: h.ClockIcon,
                text: b.intl.formatToPlainString(b.t['+1bjc3'], { date: c })
            }),
            a.includes(f.x.BOT) && null != s
                ? (0, d.jsx)(A, {
                      icon: h.RobotIcon,
                      text: b.intl.formatToPlainString(b.t.UHGHSE, { guildCount: s })
                  })
                : null,
            (0, d.jsx)(A, {
                icon: h.ShieldIcon,
                text: p
            }),
            null != u
                ? u.map((e) => {
                      let n = (0, _.PM)(e),
                          r = T(e);
                      return null != r && null != n
                          ? (0, d.jsx)(A, {
                                icon: r,
                                text: n
                            })
                          : null;
                  })
                : null
        ]
    });
}
function A(e) {
    let { icon: n, text: r } = e;
    return (0, d.jsxs)('div', {
        className: I.entry,
        children: [
            (0, d.jsx)(n, {
                className: I.entryIcon,
                color: 'currentColor'
            }),
            (0, d.jsx)(p.x, {
                variant: 'text-xs/normal',
                className: I.entryInner,
                children: r
            })
        ]
    });
}
