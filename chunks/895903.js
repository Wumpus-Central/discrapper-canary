n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(827734),
    c = n(397927),
    d = n(104171),
    u = n(47868),
    h = n(986738),
    A = n(394412),
    _ = n(859894),
    m = n(931991),
    g = n(426660),
    p = n(576705),
    f = n(233993),
    x = n(19844),
    E = n(505543),
    I = n(985018),
    C = n(261084);
function N(e) {
    let { onClick: t, className: n } = e,
        l = c.cNw;
    return (0, i.jsx)(u.A, {
        iconContainerClassName: a()({ [C.q8]: !1 }),
        icon: (0, i.jsx)(l, { size: "custom", color: "currentColor", className: C.Pz, height: 20, width: 20 }),
        color: o.A.unsafe_rawColors.PRIMARY_700.css,
        title: I.intl.string(I.t["jMLfp/"]),
        description: I.intl.string(I.t["Vd/rEX"]),
        onClick: t,
        className: n,
    });
}
function T(e) {
    let { channel: t } = e,
        { participants: n, usersInSummary: l } = (0, x.A)(t.id);
    return (0, i.jsxs)("div", {
        className: C.P1,
        children: [
            (0, i.jsx)(d.Ay, { className: C.Ip, guildId: t.guild_id, users: l, size: d.DN.SIZE_16 }),
            (0, i.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: (function (e) {
                    if (0 === e.length) return "";
                    if (1 === e.length) return I.intl.formatToPlainString(I.t["5ULgaQ"], { first: e[0].userNick });
                    if (2 === e.length)
                        return I.intl.formatToPlainString(I.t.BHK0Op, { first: e[0].userNick, second: e[1].userNick });
                    let t = e.length - 2;
                    return I.intl.formatToPlainString(I.t.T3MT4n, {
                        first: e[0].userNick,
                        second: e[1].userNick,
                        numOthers: t,
                    });
                })(n),
            }),
        ],
    });
}
function S(e) {
    let { channel: t, onContinueClick: n } = e,
        s = (0, r.bG)([p.A], () => p.A.can(f.QY, t), [t]),
        o = t.guild_id,
        { canCreateGuildEvent: d } = (0, m.nr)(t),
        u = (0, E.A)(t.id),
        x = l.useRef(null);
    return (0, i.jsxs)("div", {
        className: C.kL,
        ref: x,
        children: [
            (0, i.jsx)(g.A, { eventTargetRef: x }),
            (0, i.jsxs)("div", {
                className: C.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: C.N1,
                        children: [
                            (0, i.jsx)(c.Heading, {
                                className: C.__invalid_title,
                                variant: "heading-xxl/normal",
                                children: I.intl.string(I.t.QGnDLs),
                            }),
                            (0, i.jsx)(c.Text, {
                                tag: "div",
                                className: C.VA,
                                variant: "heading-lg/normal",
                                children: I.intl.string(I.t.djfK36),
                            }),
                        ],
                    }),
                    u ? null : (0, i.jsx)(A.A, { channelId: t.id, showDismiss: !1 }),
                    s ? (0, i.jsx)(_.A, { className: C.fN, channel: t }) : null,
                    d ? (0, i.jsx)(h.A, { className: C.fN, guildId: o }) : null,
                    s ? (0, i.jsx)(N, { className: a()({ [C.fN]: !0 }), onClick: n }) : null,
                    (0, i.jsx)(T, { channel: t }),
                ],
            }),
        ],
    });
}
