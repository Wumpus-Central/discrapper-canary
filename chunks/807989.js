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
    p = n(941532),
    _ = n(713938),
    m = n(981631),
    h = n(388032),
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
        { application: i, scopes: l, redirectUri: b, approximateGuildCount: O, isEmbeddedFlow: v, disclosures: S } = e,
        I = new Date(f.default.extractTimestamp(i.id)),
        T = (0, _.W3)(l),
        C = (0, s.yE)(null != (t = i.flags) ? t : 0, m.udG.EMBEDDED);
    if (null != b && !C && !v)
        try {
            let e = new URL(b);
            n = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            n = null;
        }
    let A = u.w.useExperiment({ location: "oauth2_authorize" });
    return (0, r.jsxs)("div", {
        className: a()(g.applicationDetails, { [g.noPadding]: A.enabled }),
        children: [
            null != n
                ? (0, r.jsx)(y, {
                      icon: c.xPt,
                      text: h.intl.format(h.t["5k5OKD"], { origin: n }),
                  })
                : null,
            (0, r.jsx)(y, {
                icon: c.mBM,
                text: (0, p.i)(i),
            }),
            (0, r.jsx)(y, {
                icon: c.T39,
                text: h.intl.formatToPlainString(h.t["+1bjc8"], { date: I }),
            }),
            l.includes(o.x.BOT) && null != O
                ? (0, r.jsx)(y, {
                      icon: c.wGt,
                      text: h.intl.formatToPlainString(h.t.UHGHSP, { guildCount: O }),
                  })
                : null,
            (0, r.jsx)(y, {
                icon: c.b7C,
                text: T,
            }),
            null != S
                ? S.map((e) => {
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
