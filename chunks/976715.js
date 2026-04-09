l.d(t, { A: () => f });
var n = l(627968),
    i = l(64700),
    s = l(827734),
    a = l(421380),
    r = l(397927),
    C = l(793574),
    o = l(834409),
    d = l(903093),
    c = l(671576),
    u = l(449585),
    m = l(93474),
    x = l(985018),
    h = l(550021);
function g(e) {
    if (null == (e.dmsDisabledUntil ?? e.invitesDisabledUntil)) return "";
    let t = null != e.dmsDisabledUntil,
        l = null != e.invitesDisabledUntil;
    switch (!0) {
        case t && l:
            return x.intl.string(x.t.CEygF8);
        case t:
            return x.intl.string(x.t.Wmbjcz);
        case l:
            return x.intl.string(x.t.Q1QrAi);
        default:
            return "";
    }
}
function H(e) {
    let { onHandleEnableLockdown: t, onHandleReportFalseAlarm: l, incidentData: i } = e,
        a = i.raidDetectedAt ?? i.dmSpamDetectedAt;
    return (0, n.jsxs)("div", {
        className: h.hD,
        children: [
            (0, n.jsxs)("div", {
                className: h.iD,
                children: [
                    (0, n.jsx)(r.lmn, { size: "md", className: h.F_, color: s.A.unsafe_rawColors.RED_345.css }),
                    (0, n.jsxs)("div", {
                        className: h.Tm,
                        children: [
                            (0, n.jsx)(r.Heading, {
                                className: h.R_,
                                variant: "heading-lg/semibold",
                                color: "text-feedback-critical",
                                children: (0, d.Qm)(i) ? x.intl.string(x.t.raRxxT) : x.intl.string(x.t["4nbAta"]),
                            }),
                            (0, n.jsx)(r.Text, {
                                className: h.Ng,
                                variant: "text-sm/medium",
                                children: x.intl.format(x.t["4QIIZl"], {
                                    dateTime: new Date(a ?? "").toLocaleString(x.intl.currentLocale, d.yc),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: h.UD,
                children: [
                    (0, n.jsx)(r.Button, {
                        variant: "secondary",
                        onClick: l,
                        text: x.intl.string(x.t.ISiXba),
                        size: "sm",
                    }),
                    (0, n.jsx)(r.Button, {
                        variant: "critical-primary",
                        onClick: t,
                        size: "sm",
                        text: x.intl.string(x.t.UgXhdn),
                    }),
                ],
            }),
        ],
    });
}
function j(e) {
    let { onHandleEnableLockdown: t, incidentData: l, guildName: i } = e;
    return (0, n.jsxs)("div", {
        className: h.hD,
        children: [
            (0, n.jsxs)("div", {
                className: h.iD,
                children: [
                    (0, n.jsx)(r.lmn, { size: "md", className: h.F_, color: s.A.unsafe_rawColors.BRAND_360.css }),
                    (0, n.jsxs)("div", {
                        className: h.Tm,
                        children: [
                            (0, n.jsx)(r.Heading, {
                                className: h.R_,
                                variant: "heading-lg/semibold",
                                color: "text-brand",
                                children: g(l),
                            }),
                            (0, n.jsx)(r.Text, {
                                className: h.Ng,
                                variant: "text-sm/medium",
                                children: (0, d.ql)(l, i),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(r.Button, { color: a.$n.Colors.BRAND, onClick: t, text: x.intl.string(x.t.e1bMNf), size: "sm" }),
        ],
    });
}
function _(e) {
    let { onHandleEnableLockdown: t, onHandleReportFalseAlarm: l, incidentData: i, guildName: a } = e;
    return (0, n.jsxs)("div", {
        className: h.hD,
        children: [
            (0, n.jsxs)("div", {
                className: h.iD,
                children: [
                    (0, n.jsx)(r.lmn, { size: "md", className: h.F_, color: s.A.unsafe_rawColors.BRAND_360.css }),
                    (0, n.jsxs)("div", {
                        className: h.Tm,
                        children: [
                            (0, n.jsx)(r.Heading, {
                                className: h.R_,
                                variant: "heading-lg/semibold",
                                color: "text-brand",
                                children: g(i),
                            }),
                            (0, n.jsx)(r.Text, {
                                className: h.Ng,
                                variant: "text-sm/medium",
                                children: (0, d.ql)(i, a),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: h.UD,
                children: [
                    (0, n.jsx)(r.Button, {
                        onClick: l,
                        text: x.intl.string(x.t.ISiXba),
                        variant: "secondary",
                        size: "sm",
                    }),
                    (0, n.jsx)(r.Button, { onClick: t, text: x.intl.string(x.t.e1bMNf), size: "sm" }),
                ],
            }),
        ],
    });
}
function f(e) {
    let { guild: t, incidentData: l, isUnderLockdown: s, isRaidDetected: a } = e,
        x = i.useCallback(() => {
            (0, r.mMO)(async () => {
                let e = { source: o.Eo.MEMBER_SAFETY_PAGE, location: C.A.MEMBER_SAFETY_PAGE, alertType: (0, d.$5)(l) };
                return (l) => (0, n.jsx)(c.default, { ...l, guildId: t.id, analyticsData: e });
            });
        }, [t.id, l]),
        h = i.useCallback(() => {
            let e = m.A.getLastIncidentAlertMessage(t.id);
            (0, u.is)(e, t.id);
        }, [t.id]),
        g = (() => {
            switch (!0) {
                case a && s:
                    return 3;
                case a:
                    return 1;
                case s:
                    return 2;
                default:
                    return 0;
            }
        })();
    if (null == t || null == l) return null;
    switch (g) {
        case 1:
            return (0, n.jsx)(H, { onHandleEnableLockdown: x, onHandleReportFalseAlarm: h, incidentData: l });
        case 2:
            return (0, n.jsx)(j, { onHandleEnableLockdown: x, incidentData: l, guildName: t.name });
        case 3:
            return (0, n.jsx)(_, {
                onHandleEnableLockdown: x,
                onHandleReportFalseAlarm: h,
                incidentData: l,
                guildName: t.name,
            });
        default:
            return null;
    }
}
