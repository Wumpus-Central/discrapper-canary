r.d(n, {
    Z: function () {
        return S;
    }
});
var i = r(789020);
var a = r(315314);
var s = r(610138);
var o = r(216116);
var l = r(78328);
var u = r(815648);
var c = r(47120);
var d = r(200651);
r(192379);
var f = r(243814),
    _ = r(993365),
    h = r(481060),
    p = r(979200),
    m = r(630388),
    g = r(709054),
    E = r(941532),
    v = r(713938),
    I = r(981631),
    T = r(388032),
    b = r(452398);
let y = (e) => {
    switch (e) {
        case p.ZC.IP_LOCATION:
            return h.GlobeEarthIcon;
        case p.ZC.DISPLAYS_ADVERTISEMENTS:
            return h.EmbedIcon;
        default:
            return null;
    }
};
function S(e) {
    var n;
    let r,
        { application: i, scopes: a, redirectUri: s, approximateGuildCount: o, isEmbeddedFlow: l, disclosures: u } = e,
        c = new Date(g.default.extractTimestamp(i.id)),
        _ = (0, v.W3)(a),
        S = (0, m.yE)(null !== (n = i.flags) && void 0 !== n ? n : 0, I.udG.EMBEDDED);
    if (null != s && !S && !l)
        try {
            let e = new URL(s);
            r = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            r = null;
        }
    return (0, d.jsxs)('div', {
        className: b.applicationDetails,
        children: [
            null != r
                ? (0, d.jsx)(A, {
                      icon: h.LinkIcon,
                      text: T.intl.format(T.t['5k5OKC'], { origin: r })
                  })
                : null,
            (0, d.jsx)(A, {
                icon: h.LockIcon,
                text: (0, E.i)(i)
            }),
            (0, d.jsx)(A, {
                icon: h.ClockIcon,
                text: T.intl.formatToPlainString(T.t['+1bjc3'], { date: c })
            }),
            a.includes(f.x.BOT) && null != o
                ? (0, d.jsx)(A, {
                      icon: h.RobotIcon,
                      text: T.intl.formatToPlainString(T.t.UHGHSE, { guildCount: o })
                  })
                : null,
            (0, d.jsx)(A, {
                icon: h.ShieldIcon,
                text: _
            }),
            null != u
                ? u.map((e) => {
                      let n = (0, p.PM)(e),
                          r = y(e);
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
        className: b.entry,
        children: [
            (0, d.jsx)(n, {
                className: b.entryIcon,
                color: 'currentColor'
            }),
            (0, d.jsx)(_.x, {
                variant: 'text-xs/normal',
                className: b.entryInner,
                children: r
            })
        ]
    });
}
