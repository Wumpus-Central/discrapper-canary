n.d(t, { Z: () => b }), n(997841), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(243814),
    s = n(95015),
    l = n(993365),
    c = n(481060),
    u = n(162685),
    d = n(979200),
    f = n(709054),
    _ = n(941532),
    p = n(713938),
    h = n(981631),
    m = n(388032),
    g = n(852303);
let E = (e) => {
    switch (e) {
        case d.ZC.IP_LOCATION:
            return c.enf;
        case d.ZC.DISPLAYS_ADVERTISEMENTS:
            return c.FLu;
        default:
            return null;
    }
};
function b(e) {
    var t;
    let n,
        { application: i, scopes: l, redirectUri: b, approximateGuildCount: O, isEmbeddedFlow: v, disclosures: I } = e,
        T = new Date(f.default.extractTimestamp(i.id)),
        S = (0, p.W3)(l),
        A = (0, s.yE)(null != (t = i.flags) ? t : 0, h.udG.EMBEDDED);
    if (null != b && !A && !v)
        try {
            let e = new URL(b);
            n = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            n = null;
        }
    let C = u.w.useExperiment({ location: "oauth2_authorize" });
    return (0, r.jsxs)("div", {
        className: a()(g.applicationDetails, { [g.noPadding]: C.enabled }),
        children: [
            null != n
                ? (0, r.jsx)(y, {
                      icon: c.xPt,
                      text: m.intl.format(m.t["5k5OKD"], { origin: n }),
                  })
                : null,
            (0, r.jsx)(y, {
                icon: c.mBM,
                text: (0, _.i)(i),
            }),
            (0, r.jsx)(y, {
                icon: c.T39,
                text: m.intl.formatToPlainString(m.t["+1bjc8"], { date: T }),
            }),
            l.includes(o.x.BOT) && null != O
                ? (0, r.jsx)(y, {
                      icon: c.wGt,
                      text: m.intl.formatToPlainString(m.t.UHGHSP, { guildCount: O }),
                  })
                : null,
            (0, r.jsx)(y, {
                icon: c.b7C,
                text: S,
            }),
            null != I
                ? I.map((e) => {
                      let t = (0, d.PM)(e),
                          n = E(e);
                      return null != n && null != t
                          ? (0, r.jsx)(y, {
                                icon: n,
                                text: t,
                            })
                          : null;
                  })
                : null,
        ],
    });
}
function y(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: g.entry,
        children: [
            (0, r.jsx)(t, {
                className: g.entryIcon,
                color: "currentColor",
            }),
            (0, r.jsx)(l.x, {
                variant: "text-xs/normal",
                className: g.entryInner,
                children: n,
            }),
        ],
    });
}
