"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(827734),
    c = n(397927),
    d = n(104171),
    u = n(47868),
    h = n(986738),
    A = n(394412),
    p = n(859894),
    g = n(931991),
    m = n(426660),
    _ = n(576705),
    f = n(233993),
    x = n(19844),
    C = n(505543),
    E = n(985018),
    I = n(529471);
function b(e) {
    let { onClick: t, className: n } = e,
        s = c.cNw;
    return (0, i.jsx)(u.A, {
        iconContainerClassName: r()({ [I.q8]: !1 }),
        icon: (0, i.jsx)(s, { size: "custom", color: "currentColor", className: I.Pz, height: 20, width: 20 }),
        color: o.A.unsafe_rawColors.PRIMARY_700.css,
        title: E.intl.string(E.t["jMLfp/"]),
        description: E.intl.string(E.t["Vd/rEX"]),
        onClick: t,
        className: n,
    });
}
function N(e) {
    let { channel: t } = e,
        { participants: n, usersInSummary: s } = (0, x.A)(t.id);
    return (0, i.jsxs)("div", {
        className: I.P1,
        children: [
            (0, i.jsx)(d.Ay, { className: I.Ip, guildId: t.guild_id, users: s, size: d.DN.SIZE_16 }),
            (0, i.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: (function (e) {
                    if (0 === e.length) return "";
                    if (1 === e.length) return E.intl.formatToPlainString(E.t["5ULgaQ"], { first: e[0].userNick });
                    if (2 === e.length)
                        return E.intl.formatToPlainString(E.t.BHK0Op, { first: e[0].userNick, second: e[1].userNick });
                    let t = e.length - 2;
                    return E.intl.formatToPlainString(E.t.T3MT4n, {
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
        l = (0, a.bG)([_.A], () => _.A.can(f.QY, t), [t]),
        o = t.guild_id,
        { canCreateGuildEvent: d } = (0, g.nr)(t),
        u = (0, C.A)(t.id),
        x = s.useRef(null);
    return (0, i.jsxs)("div", {
        className: I.kL,
        ref: x,
        children: [
            (0, i.jsx)(m.A, { eventTargetRef: x }),
            (0, i.jsxs)("div", {
                className: I.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: I.N1,
                        children: [
                            (0, i.jsx)(c.Heading, {
                                className: I.__invalid_title,
                                variant: "heading-xxl/normal",
                                children: E.intl.string(E.t.QGnDLs),
                            }),
                            (0, i.jsx)(c.Text, {
                                tag: "div",
                                className: I.VA,
                                variant: "heading-lg/normal",
                                children: E.intl.string(E.t.djfK36),
                            }),
                        ],
                    }),
                    u ? null : (0, i.jsx)(A.A, { channelId: t.id, showDismiss: !1 }),
                    l ? (0, i.jsx)(p.A, { className: I.fN, channel: t }) : null,
                    d ? (0, i.jsx)(h.A, { className: I.fN, guildId: o }) : null,
                    l ? (0, i.jsx)(b, { className: r()({ [I.fN]: !0 }), onClick: n }) : null,
                    (0, i.jsx)(N, { channel: t }),
                ],
            }),
        ],
    });
}
