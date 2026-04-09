l.d(t, { A: () => _ });
var n = l(627968),
    i = l(64700),
    s = l(827734),
    a = l(397927),
    r = l(793574),
    C = l(834409),
    o = l(903093),
    d = l(671576),
    c = l(449585),
    u = l(93474),
    m = l(985018),
    x = l(550021);
function h(e) {
    if (null == (e.dmsDisabledUntil ?? e.invitesDisabledUntil)) return "";
    let t = null != e.dmsDisabledUntil,
        l = null != e.invitesDisabledUntil;
    switch (!0) {
        case t && l:
            return m.intl.string(m.t.CEygF8);
        case t:
            return m.intl.string(m.t.Wmbjcz);
        case l:
            return m.intl.string(m.t.Q1QrAi);
        default:
            return "";
    }
}
function g(e) {
    let { onHandleEnableLockdown: t, onHandleReportFalseAlarm: l, incidentData: i } = e,
        r = i.raidDetectedAt ?? i.dmSpamDetectedAt;
    return (0, n.jsxs)("div", {
        className: x.hD,
        children: [
            (0, n.jsxs)("div", {
                className: x.iD,
                children: [
                    (0, n.jsx)(a.lmn, { size: "md", className: x.F_, color: s.A.unsafe_rawColors.RED_345.css }),
                    (0, n.jsxs)("div", {
                        className: x.Tm,
                        children: [
                            (0, n.jsx)(a.Heading, {
                                className: x.R_,
                                variant: "heading-lg/semibold",
                                color: "text-feedback-critical",
                                children: (0, o.Qm)(i) ? m.intl.string(m.t.raRxxT) : m.intl.string(m.t["4nbAta"]),
                            }),
                            (0, n.jsx)(a.Text, {
                                className: x.Ng,
                                variant: "text-sm/medium",
                                children: m.intl.format(m.t["4QIIZl"], {
                                    dateTime: new Date(r ?? "").toLocaleString(m.intl.currentLocale, o.yc),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: x.UD,
                children: [
                    (0, n.jsx)(a.Button, {
                        variant: "secondary",
                        onClick: l,
                        text: m.intl.string(m.t.ISiXba),
                        size: "sm",
                    }),
                    (0, n.jsx)(a.Button, {
                        variant: "critical-primary",
                        onClick: t,
                        size: "sm",
                        text: m.intl.string(m.t.UgXhdn),
                    }),
                ],
            }),
        ],
    });
}
function H(e) {
    let { onHandleEnableLockdown: t, incidentData: l, guildName: i } = e;
    return (0, n.jsxs)("div", {
        className: x.hD,
        children: [
            (0, n.jsxs)("div", {
                className: x.iD,
                children: [
                    (0, n.jsx)(a.lmn, { size: "md", className: x.F_, color: s.A.unsafe_rawColors.BRAND_360.css }),
                    (0, n.jsxs)("div", {
                        className: x.Tm,
                        children: [
                            (0, n.jsx)(a.Heading, {
                                className: x.R_,
                                variant: "heading-lg/semibold",
                                color: "text-brand",
                                children: h(l),
                            }),
                            (0, n.jsx)(a.Text, {
                                className: x.Ng,
                                variant: "text-sm/medium",
                                children: (0, o.ql)(l, i),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(a.Button, { onClick: t, text: m.intl.string(m.t.e1bMNf), size: "sm" }),
        ],
    });
}
function j(e) {
    let { onHandleEnableLockdown: t, onHandleReportFalseAlarm: l, incidentData: i, guildName: r } = e;
    return (0, n.jsxs)("div", {
        className: x.hD,
        children: [
            (0, n.jsxs)("div", {
                className: x.iD,
                children: [
                    (0, n.jsx)(a.lmn, { size: "md", className: x.F_, color: s.A.unsafe_rawColors.BRAND_360.css }),
                    (0, n.jsxs)("div", {
                        className: x.Tm,
                        children: [
                            (0, n.jsx)(a.Heading, {
                                className: x.R_,
                                variant: "heading-lg/semibold",
                                color: "text-brand",
                                children: h(i),
                            }),
                            (0, n.jsx)(a.Text, {
                                className: x.Ng,
                                variant: "text-sm/medium",
                                children: (0, o.ql)(i, r),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: x.UD,
                children: [
                    (0, n.jsx)(a.Button, {
                        onClick: l,
                        text: m.intl.string(m.t.ISiXba),
                        variant: "secondary",
                        size: "sm",
                    }),
                    (0, n.jsx)(a.Button, { onClick: t, text: m.intl.string(m.t.e1bMNf), size: "sm" }),
                ],
            }),
        ],
    });
}
function _(e) {
    let { guild: t, incidentData: l, isUnderLockdown: s, isRaidDetected: m } = e,
        x = i.useCallback(() => {
            (0, a.mMO)(async () => {
                let e = { source: C.Eo.MEMBER_SAFETY_PAGE, location: r.A.MEMBER_SAFETY_PAGE, alertType: (0, o.$5)(l) };
                return (l) => (0, n.jsx)(d.default, { ...l, guildId: t.id, analyticsData: e });
            });
        }, [t.id, l]),
        h = i.useCallback(() => {
            let e = u.A.getLastIncidentAlertMessage(t.id);
            (0, c.is)(e, t.id);
        }, [t.id]),
        _ = (() => {
            switch (!0) {
                case m && s:
                    return 3;
                case m:
                    return 1;
                case s:
                    return 2;
                default:
                    return 0;
            }
        })();
    if (null == t || null == l) return null;
    switch (_) {
        case 1:
            return (0, n.jsx)(g, { onHandleEnableLockdown: x, onHandleReportFalseAlarm: h, incidentData: l });
        case 2:
            return (0, n.jsx)(H, { onHandleEnableLockdown: x, incidentData: l, guildName: t.name });
        case 3:
            return (0, n.jsx)(j, {
                onHandleEnableLockdown: x,
                onHandleReportFalseAlarm: h,
                incidentData: l,
                guildName: t.name,
            });
        default:
            return null;
    }
}
