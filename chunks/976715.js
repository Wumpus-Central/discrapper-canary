n.d(t, { A: () => x });
var r = n(627968),
    l = n(64700),
    i = n(827734),
    o = n(421380),
    a = n(397927),
    s = n(793574),
    c = n(834409),
    d = n(903093),
    u = n(671576),
    C = n(449585),
    f = n(93474),
    b = n(985018),
    m = n(119619);
function p(e) {
    var t;
    if (null == (null != (t = e.dmsDisabledUntil) ? t : e.invitesDisabledUntil)) return "";
    let n = null != e.dmsDisabledUntil,
        r = null != e.invitesDisabledUntil;
    switch (!0) {
        case n && r:
            return b.intl.string(b.t.CEygF8);
        case n:
            return b.intl.string(b.t.Wmbjcz);
        case r:
            return b.intl.string(b.t.Q1QrAi);
        default:
            return "";
    }
}
function j(e) {
    var t;
    let { onHandleEnableLockdown: n, onHandleReportFalseAlarm: l, incidentData: o } = e,
        s = null != (t = o.raidDetectedAt) ? t : o.dmSpamDetectedAt;
    return (0, r.jsxs)("div", {
        className: m.hD,
        children: [
            (0, r.jsxs)("div", {
                className: m.iD,
                children: [
                    (0, r.jsx)(a.lmn, {
                        size: "md",
                        className: m.F_,
                        color: i.A.unsafe_rawColors.RED_345.css,
                    }),
                    (0, r.jsxs)("div", {
                        className: m.Tm,
                        children: [
                            (0, r.jsx)(a.Heading, {
                                className: m.R_,
                                variant: "heading-lg/semibold",
                                color: "text-feedback-critical",
                                children: (0, d.Qm)(o) ? b.intl.string(b.t.raRxxT) : b.intl.string(b.t["4nbAta"]),
                            }),
                            (0, r.jsx)(a.Text, {
                                className: m.Ng,
                                variant: "text-sm/medium",
                                children: b.intl.format(b.t["4QIIZl"], {
                                    dateTime: new Date(null != s ? s : "").toLocaleString(b.intl.currentLocale, d.yc),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: m.UD,
                children: [
                    (0, r.jsx)(a.Button, {
                        variant: "secondary",
                        onClick: l,
                        text: b.intl.string(b.t.ISiXba),
                        size: "sm",
                    }),
                    (0, r.jsx)(a.Button, {
                        variant: "critical-primary",
                        onClick: n,
                        size: "sm",
                        text: b.intl.string(b.t.UgXhdn),
                    }),
                ],
            }),
        ],
    });
}
function g(e) {
    let { onHandleEnableLockdown: t, incidentData: n, guildName: l } = e;
    return (0, r.jsxs)("div", {
        className: m.hD,
        children: [
            (0, r.jsxs)("div", {
                className: m.iD,
                children: [
                    (0, r.jsx)(a.lmn, {
                        size: "md",
                        className: m.F_,
                        color: i.A.unsafe_rawColors.BRAND_360.css,
                    }),
                    (0, r.jsxs)("div", {
                        className: m.Tm,
                        children: [
                            (0, r.jsx)(a.Heading, {
                                className: m.R_,
                                variant: "heading-lg/semibold",
                                color: "text-brand",
                                children: p(n),
                            }),
                            (0, r.jsx)(a.Text, {
                                className: m.Ng,
                                variant: "text-sm/medium",
                                children: (0, d.ql)(n, l),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(a.Button, {
                color: o.$n.Colors.BRAND,
                onClick: t,
                text: b.intl.string(b.t.e1bMNf),
                size: "sm",
            }),
        ],
    });
}
function h(e) {
    let { onHandleEnableLockdown: t, onHandleReportFalseAlarm: n, incidentData: l, guildName: o } = e;
    return (0, r.jsxs)("div", {
        className: m.hD,
        children: [
            (0, r.jsxs)("div", {
                className: m.iD,
                children: [
                    (0, r.jsx)(a.lmn, {
                        size: "md",
                        className: m.F_,
                        color: i.A.unsafe_rawColors.BRAND_360.css,
                    }),
                    (0, r.jsxs)("div", {
                        className: m.Tm,
                        children: [
                            (0, r.jsx)(a.Heading, {
                                className: m.R_,
                                variant: "heading-lg/semibold",
                                color: "text-brand",
                                children: p(l),
                            }),
                            (0, r.jsx)(a.Text, {
                                className: m.Ng,
                                variant: "text-sm/medium",
                                children: (0, d.ql)(l, o),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: m.UD,
                children: [
                    (0, r.jsx)(a.Button, {
                        onClick: n,
                        text: b.intl.string(b.t.ISiXba),
                        variant: "secondary",
                        size: "sm",
                    }),
                    (0, r.jsx)(a.Button, {
                        onClick: t,
                        text: b.intl.string(b.t.e1bMNf),
                        size: "sm",
                    }),
                ],
            }),
        ],
    });
}
function x(e) {
    let { guild: t, incidentData: n, isUnderLockdown: i, isRaidDetected: o } = e,
        b = l.useCallback(() => {
            (0, a.mMO)(async () => {
                let e = {
                    source: c.Eo.MEMBER_SAFETY_PAGE,
                    location: s.A.MEMBER_SAFETY_PAGE,
                    alertType: (0, d.$5)(n),
                };
                return (n) => {
                    var l, i;
                    return (0, r.jsx)(
                        u.default,
                        ((l = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (i = i =
                            {
                                guildId: t.id,
                                analyticsData: e,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        l),
                    );
                };
            });
        }, [t.id, n]),
        m = l.useCallback(() => {
            let e = f.A.getLastIncidentAlertMessage(t.id);
            (0, C.is)(e, t.id);
        }, [t.id]),
        p = (() => {
            switch (!0) {
                case o && i:
                    return 3;
                case o:
                    return 1;
                case i:
                    return 2;
                default:
                    return 0;
            }
        })();
    if (null == t || null == n) return null;
    switch (p) {
        case 1:
            return (0, r.jsx)(j, {
                onHandleEnableLockdown: b,
                onHandleReportFalseAlarm: m,
                incidentData: n,
            });
        case 2:
            return (0, r.jsx)(g, {
                onHandleEnableLockdown: b,
                incidentData: n,
                guildName: t.name,
            });
        case 3:
            return (0, r.jsx)(h, {
                onHandleEnableLockdown: b,
                onHandleReportFalseAlarm: m,
                incidentData: n,
                guildName: t.name,
            });
        default:
            return null;
    }
}
