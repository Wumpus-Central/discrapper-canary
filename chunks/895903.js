t.d(n, { A: () => b });
var i = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(17928),
    o = t(661531),
    c = t(831544),
    u = t(834730),
    d = t(297264),
    A = t(104171),
    h = t(47868),
    m = t(986738),
    g = t(394412),
    x = t(859894),
    C = t(931991),
    f = t(426660),
    p = t(576705),
    E = t(233993),
    j = t(19844),
    v = t(505543),
    I = t(105292),
    N = t(269341);
function _(e) {
    let { onClick: n, className: t } = e,
        l = c.MicrophoneIcon;
    return (0, i.jsx)(h.A, {
        iconContainerClassName: a()({ [N.q8]: !1 }),
        icon: (0, i.jsx)(l, { size: "custom", color: "currentColor", className: N.Pz, height: 20, width: 20 }),
        color: o.A.unsafe_rawColors.PRIMARY_700.css,
        title: I.intl.string(I.t["jMLfp/"]),
        description: I.intl.string(I.t["Vd/rEX"]),
        onClick: n,
        className: t,
    });
}
function T(e) {
    let { channel: n } = e,
        { participants: t, usersInSummary: l } = (0, j.A)(n.id);
    return (0, i.jsxs)("div", {
        className: N.P1,
        children: [
            (0, i.jsx)(A.Ay, { className: N.Ip, guildId: n.guild_id, users: l, size: A.DN.SIZE_16 }),
            (0, i.jsx)(u.E, {
                variant: "text-sm/normal",
                color: "text-default",
                children: (function (e) {
                    if (0 === e.length) return "";
                    if (1 === e.length) return I.intl.formatToPlainString(I.t["5ULgaQ"], { first: e[0].userNick });
                    if (2 === e.length)
                        return I.intl.formatToPlainString(I.t.BHK0Op, { first: e[0].userNick, second: e[1].userNick });
                    let n = e.length - 2;
                    return I.intl.formatToPlainString(I.t.T3MT4n, {
                        first: e[0].userNick,
                        second: e[1].userNick,
                        numOthers: n,
                    });
                })(t),
            }),
        ],
    });
}
function b(e) {
    let { channel: n, onContinueClick: t } = e,
        s = (0, r.bG)([p.A], () => p.A.can(E.QY, n), [n]),
        o = n.guild_id,
        { canCreateGuildEvent: c } = (0, C.nr)(n),
        A = (0, v.A)(n.id),
        h = l.useRef(null);
    return (0, i.jsxs)("div", {
        className: N.kL,
        ref: h,
        children: [
            (0, i.jsx)(f.A, { eventTargetRef: h }),
            (0, i.jsxs)("div", {
                className: N.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: N.N1,
                        children: [
                            (0, i.jsx)(d.D, {
                                className: N.__invalid_title,
                                variant: "heading-xxl/normal",
                                children: I.intl.string(I.t.QGnDLs),
                            }),
                            (0, i.jsx)(u.E, {
                                tag: "div",
                                className: N.VA,
                                variant: "heading-lg/normal",
                                children: I.intl.string(I.t.djfK36),
                            }),
                        ],
                    }),
                    A ? null : (0, i.jsx)(g.A, { channelId: n.id, showDismiss: !1 }),
                    s ? (0, i.jsx)(x.A, { className: N.fN, channel: n }) : null,
                    c ? (0, i.jsx)(m.A, { className: N.fN, guildId: o }) : null,
                    s ? (0, i.jsx)(_, { className: a()({ [N.fN]: !0 }), onClick: t }) : null,
                    (0, i.jsx)(T, { channel: n }),
                ],
            }),
        ],
    });
}
