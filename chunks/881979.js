(s.d(t, { QB: () => I, _k: () => D, bh: () => x, aO: () => g }), s(582128));
var n = s(646514),
    i = s(628284),
    r = s(695366),
    l = s(285796),
    a = s(738188),
    c = s(290136),
    o = s(975807),
    d = s(739010),
    u = s(792996);
let m = {
    [d.PN.ALL_GOOD]: u.t["/Idfao"],
    [d.PN.LIMITED]: u.t.umleq4,
    [d.PN.VERY_LIMITED]: u.t.WBtMHf,
    [d.PN.AT_RISK]: u.t["7f+4Lg"],
    [d.PN.SUSPENDED]: u.t["0OONGB"],
};
var N = s(335891),
    h = s(259960),
    E = s(239093);
function I() {
    return {
        [d.PN.ALL_GOOD]: {
            title: u.t.uaKrRi,
            description: u.intl.format(u.t.pEdBD4, {
                termsOfService: E.d$.TOS_LINK,
                communityGuidelines: E.d$.COMMUNITY_GUIDELINES,
            }),
            status: m[d.PN.ALL_GOOD],
            Icon: i.CircleCheckIcon,
            color: n.A.colors.STATUS_POSITIVE,
        },
        [d.PN.LIMITED]: {
            title: u.t.epkcmS,
            description: u.intl.string(u.t["774juc"]),
            status: m[d.PN.LIMITED],
            Icon: r.CircleErrorIcon,
            color: n.A.colors.STATUS_WARNING,
        },
        [d.PN.VERY_LIMITED]: {
            title: u.t.crzE2X,
            description: u.intl.string(u.t["T/Ufh9"]),
            status: m[d.PN.VERY_LIMITED],
            Icon: r.CircleErrorIcon,
            color: n.A.unsafe_rawColors.ORANGE_345,
        },
        [d.PN.AT_RISK]: {
            title: u.t.XRNVzO,
            description: u.intl.string(u.t["hbH+9S"]),
            status: m[d.PN.AT_RISK],
            Icon: r.CircleErrorIcon,
            color: n.A.colors.ICON_FEEDBACK_CRITICAL,
        },
        [d.PN.SUSPENDED]: {
            title: u.t.MExFkz,
            description: u.intl.string(u.t["2liUvt"]),
            status: m[d.PN.SUSPENDED],
            Icon: l.CircleXIcon,
            color: n.A.colors.ICON_MUTED,
        },
    };
}
function g() {
    let e = (0, N.K)();
    return (0, h.v)() ? u.intl.formatToPlainString(m[e.state], { hook: (e) => e }) : u.intl.string(u.t.ZTNur7);
}
function x() {
    let e = (0, N.K)();
    if (!(0, h.v)()) return u.intl.string(u.t["9m2Bkk"]);
    switch (e.state) {
        case d.PN.ALL_GOOD:
            return u.intl.format(u.t.pEdBD4, {
                termsOfService: (e) => {
                    (e.stopPropagation(), (0, o.A)(E.d$.TOS_LINK));
                },
                communityGuidelines: (e) => {
                    (e.stopPropagation(), (0, o.A)(E.d$.COMMUNITY_GUIDELINES));
                },
            });
        case d.PN.LIMITED:
            return u.intl.string(u.t["774juc"]);
        case d.PN.VERY_LIMITED:
            return u.intl.string(u.t["T/Ufh9"]);
        case d.PN.AT_RISK:
            return u.intl.string(u.t["hbH+9S"]);
        case d.PN.SUSPENDED:
            return u.intl.string(u.t["2liUvt"]);
    }
}
let _ = {
        [d.PN.ALL_GOOD]: {
            color: n.A.colors.ICON_FEEDBACK_POSITIVE,
            backgroundColor: n.A.colors.BACKGROUND_FEEDBACK_MOD_POSITIVE,
            Icon: i.CircleCheckIcon,
        },
        [d.PN.LIMITED]: {
            color: n.A.colors.ICON_FEEDBACK_WARNING,
            backgroundColor: n.A.colors.BACKGROUND_FEEDBACK_MOD_WARNING,
            Icon: a.WarningIcon,
        },
        [d.PN.VERY_LIMITED]: {
            color: n.A.unsafe_rawColors.ORANGE_345,
            backgroundColor: n.A.unsafe_rawColors.OPACITY_ORANGE_12,
            Icon: a.WarningIcon,
        },
        [d.PN.AT_RISK]: {
            color: n.A.colors.ICON_FEEDBACK_CRITICAL,
            backgroundColor: n.A.colors.BACKGROUND_FEEDBACK_MOD_CRITICAL,
            Icon: r.CircleErrorIcon,
        },
        [d.PN.SUSPENDED]: {
            color: n.A.colors.ICON_MUTED,
            backgroundColor: n.A.colors.BACKGROUND_MOD_MUTED,
            Icon: l.CircleXIcon,
        },
    },
    A = { color: n.A.colors.ICON_MUTED, backgroundColor: n.A.colors.BACKGROUND_MOD_MUTED, Icon: c.CircleQuestionIcon };
function D() {
    let e = (0, N.K)();
    return (0, h.v)() ? _[e.state] : A;
}
