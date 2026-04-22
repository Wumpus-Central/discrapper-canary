l.d(t, { A: () => A });
var n = l(627968),
    i = l(64700),
    a = l(827734),
    s = l(231483),
    C = l(534514),
    r = l(834730),
    o = l(821609),
    d = l(192308),
    c = l(793574),
    u = l(834409),
    m = l(903093),
    h = l(671576),
    x = l(449585),
    g = l(93474),
    H = l(985018),
    _ = l(626576);
function p(e) {
    if (null == (e.dmsDisabledUntil ?? e.invitesDisabledUntil)) return "";
    let t = null != e.dmsDisabledUntil,
        l = null != e.invitesDisabledUntil;
    switch (!0) {
        case t && l:
            return H.intl.string(H.t.CEygF8);
        case t:
            return H.intl.string(H.t.Wmbjcz);
        case l:
            return H.intl.string(H.t.Q1QrAi);
        default:
            return "";
    }
}
function f(e) {
    let { onHandleEnableLockdown: t, onHandleReportFalseAlarm: l, incidentData: i } = e,
        d = i.raidDetectedAt ?? i.dmSpamDetectedAt;
    return (0, n.jsxs)("div", {
        className: _.hD,
        children: [
            (0, n.jsxs)("div", {
                className: _.iD,
                children: [
                    (0, n.jsx)(s.l, { size: "md", className: _.F_, color: a.A.unsafe_rawColors.RED_345.css }),
                    (0, n.jsxs)("div", {
                        className: _.Tm,
                        children: [
                            (0, n.jsx)(C.D, {
                                className: _.R_,
                                variant: "heading-lg/semibold",
                                color: "text-feedback-critical",
                                children: (0, m.Qm)(i) ? H.intl.string(H.t.raRxxT) : H.intl.string(H.t["4nbAta"]),
                            }),
                            (0, n.jsx)(r.E, {
                                className: _.Ng,
                                variant: "text-sm/medium",
                                children: H.intl.format(H.t["4QIIZl"], {
                                    dateTime: new Date(d ?? "").toLocaleString(H.intl.currentLocale, m.yc),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: _.UD,
                children: [
                    (0, n.jsx)(o.$, { variant: "secondary", onClick: l, text: H.intl.string(H.t.ISiXba), size: "sm" }),
                    (0, n.jsx)(o.$, {
                        variant: "critical-primary",
                        onClick: t,
                        size: "sm",
                        text: H.intl.string(H.t.UgXhdn),
                    }),
                ],
            }),
        ],
    });
}
function j(e) {
    let { onHandleEnableLockdown: t, incidentData: l, guildName: i } = e;
    return (0, n.jsxs)("div", {
        className: _.hD,
        children: [
            (0, n.jsxs)("div", {
                className: _.iD,
                children: [
                    (0, n.jsx)(s.l, { size: "md", className: _.F_, color: a.A.unsafe_rawColors.BRAND_360.css }),
                    (0, n.jsxs)("div", {
                        className: _.Tm,
                        children: [
                            (0, n.jsx)(C.D, {
                                className: _.R_,
                                variant: "heading-lg/semibold",
                                color: "text-brand",
                                children: p(l),
                            }),
                            (0, n.jsx)(r.E, { className: _.Ng, variant: "text-sm/medium", children: (0, m.ql)(l, i) }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(o.$, { onClick: t, text: H.intl.string(H.t.e1bMNf), size: "sm" }),
        ],
    });
}
function b(e) {
    let { onHandleEnableLockdown: t, onHandleReportFalseAlarm: l, incidentData: i, guildName: d } = e;
    return (0, n.jsxs)("div", {
        className: _.hD,
        children: [
            (0, n.jsxs)("div", {
                className: _.iD,
                children: [
                    (0, n.jsx)(s.l, { size: "md", className: _.F_, color: a.A.unsafe_rawColors.BRAND_360.css }),
                    (0, n.jsxs)("div", {
                        className: _.Tm,
                        children: [
                            (0, n.jsx)(C.D, {
                                className: _.R_,
                                variant: "heading-lg/semibold",
                                color: "text-brand",
                                children: p(i),
                            }),
                            (0, n.jsx)(r.E, { className: _.Ng, variant: "text-sm/medium", children: (0, m.ql)(i, d) }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: _.UD,
                children: [
                    (0, n.jsx)(o.$, { onClick: l, text: H.intl.string(H.t.ISiXba), variant: "secondary", size: "sm" }),
                    (0, n.jsx)(o.$, { onClick: t, text: H.intl.string(H.t.e1bMNf), size: "sm" }),
                ],
            }),
        ],
    });
}
function A(e) {
    let { guild: t, incidentData: l, isUnderLockdown: a, isRaidDetected: s } = e,
        C = i.useCallback(() => {
            (0, d.openModalLazy)(async () => {
                let e = { source: u.Eo.MEMBER_SAFETY_PAGE, location: c.A.MEMBER_SAFETY_PAGE, alertType: (0, m.$5)(l) };
                return (l) => (0, n.jsx)(h.default, { ...l, guildId: t.id, analyticsData: e });
            });
        }, [t.id, l]),
        r = i.useCallback(() => {
            let e = g.A.getLastIncidentAlertMessage(t.id);
            (0, x.is)(e, t.id);
        }, [t.id]),
        o = (() => {
            switch (!0) {
                case s && a:
                    return 3;
                case s:
                    return 1;
                case a:
                    return 2;
                default:
                    return 0;
            }
        })();
    if (null == t || null == l) return null;
    switch (o) {
        case 1:
            return (0, n.jsx)(f, { onHandleEnableLockdown: C, onHandleReportFalseAlarm: r, incidentData: l });
        case 2:
            return (0, n.jsx)(j, { onHandleEnableLockdown: C, incidentData: l, guildName: t.name });
        case 3:
            return (0, n.jsx)(b, {
                onHandleEnableLockdown: C,
                onHandleReportFalseAlarm: r,
                incidentData: l,
                guildName: t.name,
            });
        default:
            return null;
    }
}
