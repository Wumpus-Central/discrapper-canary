n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(827734),
    c = n(831544),
    d = n(834730),
    u = n(534514),
    _ = n(104171),
    A = n(47868),
    p = n(986738),
    h = n(394412),
    g = n(859894),
    m = n(931991),
    x = n(426660),
    f = n(576705),
    C = n(233993),
    E = n(19844),
    j = n(505543),
    b = n(985018),
    N = n(601964);
function T(e) {
    let { onClick: t, className: n } = e,
        l = c.c;
    return (0, i.jsx)(A.A, {
        iconContainerClassName: s()({ [N.q8]: !1 }),
        icon: (0, i.jsx)(l, { size: "custom", color: "currentColor", className: N.Pz, height: 20, width: 20 }),
        color: o.A.unsafe_rawColors.PRIMARY_700.css,
        title: b.intl.string(b.t["jMLfp/"]),
        description: b.intl.string(b.t["Vd/rEX"]),
        onClick: t,
        className: n,
    });
}
function I(e) {
    let { channel: t } = e,
        { participants: n, usersInSummary: l } = (0, E.A)(t.id);
    return (0, i.jsxs)("div", {
        className: N.P1,
        children: [
            (0, i.jsx)(_.Ay, { className: N.Ip, guildId: t.guild_id, users: l, size: _.DN.SIZE_16 }),
            (0, i.jsx)(d.E, {
                variant: "text-sm/normal",
                color: "text-default",
                children: (function (e) {
                    if (0 === e.length) return "";
                    if (1 === e.length) return b.intl.formatToPlainString(b.t["5ULgaQ"], { first: e[0].userNick });
                    if (2 === e.length)
                        return b.intl.formatToPlainString(b.t.BHK0Op, { first: e[0].userNick, second: e[1].userNick });
                    let t = e.length - 2;
                    return b.intl.formatToPlainString(b.t.T3MT4n, {
                        first: e[0].userNick,
                        second: e[1].userNick,
                        numOthers: t,
                    });
                })(n),
            }),
        ],
    });
}
function v(e) {
    let { channel: t, onContinueClick: n } = e,
        a = (0, r.bG)([f.A], () => f.A.can(C.QY, t), [t]),
        o = t.guild_id,
        { canCreateGuildEvent: c } = (0, m.nr)(t),
        _ = (0, j.A)(t.id),
        A = l.useRef(null);
    return (0, i.jsxs)("div", {
        className: N.kL,
        ref: A,
        children: [
            (0, i.jsx)(x.A, { eventTargetRef: A }),
            (0, i.jsxs)("div", {
                className: N.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: N.N1,
                        children: [
                            (0, i.jsx)(u.D, {
                                className: N.__invalid_title,
                                variant: "heading-xxl/normal",
                                children: b.intl.string(b.t.QGnDLs),
                            }),
                            (0, i.jsx)(d.E, {
                                tag: "div",
                                className: N.VA,
                                variant: "heading-lg/normal",
                                children: b.intl.string(b.t.djfK36),
                            }),
                        ],
                    }),
                    _ ? null : (0, i.jsx)(h.A, { channelId: t.id, showDismiss: !1 }),
                    a ? (0, i.jsx)(g.A, { className: N.fN, channel: t }) : null,
                    c ? (0, i.jsx)(p.A, { className: N.fN, guildId: o }) : null,
                    a ? (0, i.jsx)(T, { className: s()({ [N.fN]: !0 }), onClick: n }) : null,
                    (0, i.jsx)(I, { channel: t }),
                ],
            }),
        ],
    });
}
