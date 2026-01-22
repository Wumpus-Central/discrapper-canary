n.d(t, { A: () => _ });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(827734),
    c = n(397927),
    u = n(104171),
    d = n(47868),
    f = n(986738),
    p = n(394412),
    h = n(859894),
    b = n(931991),
    g = n(426660),
    m = n(576705),
    A = n(233993),
    y = n(19844),
    O = n(505543),
    j = n(985018),
    v = n(529471);
function x(e) {
    let { onClick: t, className: n } = e,
        l = c.cNw;
    return (0, r.jsx)(d.A, {
        iconContainerClassName: a()({ [v.q8]: !1 }),
        icon: (0, r.jsx)(l, {
            size: "custom",
            color: "currentColor",
            className: v.Pz,
            height: 20,
            width: 20,
        }),
        color: o.A.unsafe_rawColors.PRIMARY_700.css,
        title: j.intl.string(j.t["jMLfp/"]),
        description: j.intl.string(j.t["Vd/rEX"]),
        onClick: t,
        className: n,
    });
}
function E(e) {
    let { channel: t } = e,
        { participants: n, usersInSummary: l } = (0, y.A)(t.id);
    return (0, r.jsxs)("div", {
        className: v.P1,
        children: [
            (0, r.jsx)(u.Ay, {
                className: v.Ip,
                guildId: t.guild_id,
                users: l,
                size: u.DN.SIZE_16,
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: (function (e) {
                    if (0 === e.length) return "";
                    if (1 === e.length) return j.intl.formatToPlainString(j.t["5ULgaQ"], { first: e[0].userNick });
                    if (2 === e.length)
                        return j.intl.formatToPlainString(j.t.BHK0Op, {
                            first: e[0].userNick,
                            second: e[1].userNick,
                        });
                    let t = e.length - 2;
                    return j.intl.formatToPlainString(j.t.T3MT4n, {
                        first: e[0].userNick,
                        second: e[1].userNick,
                        numOthers: t,
                    });
                })(n),
            }),
        ],
    });
}
function _(e) {
    let { channel: t, onContinueClick: n } = e,
        i = (0, s.bG)([m.A], () => m.A.can(A.QY, t), [t]),
        o = t.guild_id,
        { canCreateGuildEvent: u } = (0, b.nr)(t),
        d = (0, O.A)(t.id),
        y = l.useRef(null);
    return (0, r.jsxs)("div", {
        className: v.kL,
        ref: y,
        children: [
            (0, r.jsx)(g.A, { eventTargetRef: y }),
            (0, r.jsxs)("div", {
                className: v.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: v.N1,
                        children: [
                            (0, r.jsx)(c.Heading, {
                                className: v.__invalid_title,
                                variant: "heading-xxl/normal",
                                children: j.intl.string(j.t.QGnDLs),
                            }),
                            (0, r.jsx)(c.Text, {
                                tag: "div",
                                className: v.VA,
                                variant: "heading-lg/normal",
                                children: j.intl.string(j.t.djfK36),
                            }),
                        ],
                    }),
                    d
                        ? null
                        : (0, r.jsx)(p.A, {
                              channelId: t.id,
                              showDismiss: !1,
                          }),
                    i
                        ? (0, r.jsx)(h.A, {
                              className: v.fN,
                              channel: t,
                          })
                        : null,
                    u
                        ? (0, r.jsx)(f.A, {
                              className: v.fN,
                              guildId: o,
                          })
                        : null,
                    i
                        ? (0, r.jsx)(x, {
                              className: a()({ [v.fN]: !0 }),
                              onClick: n,
                          })
                        : null,
                    (0, r.jsx)(E, { channel: t }),
                ],
            }),
        ],
    });
}
