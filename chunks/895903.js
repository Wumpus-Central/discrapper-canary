n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(827734),
    d = n(397927),
    c = n(104171),
    u = n(47868),
    h = n(986738),
    A = n(394412),
    g = n(859894),
    m = n(931991),
    p = n(426660),
    _ = n(576705),
    x = n(233993),
    f = n(19844),
    E = n(505543),
    C = n(985018),
    I = n(529471);
function S(e) {
    let { onClick: t, className: n } = e,
        l = d.cNw;
    return (0, i.jsx)(u.A, {
        iconContainerClassName: a()({ [I.q8]: !1 }),
        icon: (0, i.jsx)(l, { size: "custom", color: "currentColor", className: I.Pz, height: 20, width: 20 }),
        color: o.A.unsafe_rawColors.PRIMARY_700.css,
        title: C.intl.string(C.t["jMLfp/"]),
        description: C.intl.string(C.t["Vd/rEX"]),
        onClick: t,
        className: n,
    });
}
function b(e) {
    let { channel: t } = e,
        { participants: n, usersInSummary: l } = (0, f.A)(t.id);
    return (0, i.jsxs)("div", {
        className: I.P1,
        children: [
            (0, i.jsx)(c.Ay, { className: I.Ip, guildId: t.guild_id, users: l, size: c.DN.SIZE_16 }),
            (0, i.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: (function (e) {
                    if (0 === e.length) return "";
                    if (1 === e.length) return C.intl.formatToPlainString(C.t["5ULgaQ"], { first: e[0].userNick });
                    if (2 === e.length)
                        return C.intl.formatToPlainString(C.t.BHK0Op, { first: e[0].userNick, second: e[1].userNick });
                    let t = e.length - 2;
                    return C.intl.formatToPlainString(C.t.T3MT4n, {
                        first: e[0].userNick,
                        second: e[1].userNick,
                        numOthers: t,
                    });
                })(n),
            }),
        ],
    });
}
function N(e) {
    let { channel: t, onContinueClick: n } = e,
        s = (0, r.bG)([_.A], () => _.A.can(x.QY, t), [t]),
        o = t.guild_id,
        { canCreateGuildEvent: c } = (0, m.nr)(t),
        u = (0, E.A)(t.id),
        f = l.useRef(null);
    return (0, i.jsxs)("div", {
        className: I.kL,
        ref: f,
        children: [
            (0, i.jsx)(p.A, { eventTargetRef: f }),
            (0, i.jsxs)("div", {
                className: I.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: I.N1,
                        children: [
                            (0, i.jsx)(d.Heading, {
                                className: I.__invalid_title,
                                variant: "heading-xxl/normal",
                                children: C.intl.string(C.t.QGnDLs),
                            }),
                            (0, i.jsx)(d.Text, {
                                tag: "div",
                                className: I.VA,
                                variant: "heading-lg/normal",
                                children: C.intl.string(C.t.djfK36),
                            }),
                        ],
                    }),
                    u ? null : (0, i.jsx)(A.A, { channelId: t.id, showDismiss: !1 }),
                    s ? (0, i.jsx)(g.A, { className: I.fN, channel: t }) : null,
                    c ? (0, i.jsx)(h.A, { className: I.fN, guildId: o }) : null,
                    s ? (0, i.jsx)(S, { className: a()({ [I.fN]: !0 }), onClick: n }) : null,
                    (0, i.jsx)(b, { channel: t }),
                ],
            }),
        ],
    });
}
