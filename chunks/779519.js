n.d(l, { c: () => L, A: () => H });
var s,
    i = n(627968),
    a = n(64700),
    c = n(503698),
    r = n.n(c),
    t = n(17928),
    o = n(990078),
    d = n(939249),
    u = n(834730),
    h = n(116085),
    m = n(825484),
    x = n(821609),
    N = n(890856),
    j = n(148719),
    C = n(47167),
    k = n(713654),
    v = n(931991),
    g = n(660110),
    p = n(576705),
    A = n(435328),
    E = n(530209),
    I = n(974930),
    b = n(428978),
    f = n(850183),
    M = n(557582),
    w = n(620018),
    y = n(97808),
    B = n(778712),
    R = n(831544),
    T = n(375708),
    U = n(63892);
function G(e) {
    let { guild: l, speakers: n, speakerCount: s, className: a } = e,
        c = n.slice(0, 5),
        t = c.map((e) =>
            (0, i.jsxs)(
                "div",
                {
                    className: U.dq,
                    children: [
                        (0, i.jsx)(y.eu, {
                            src: e?.user?.getAvatarURL(l.id, 20),
                            size: B._3.SIZE_20,
                            className: U.my,
                            "aria-label": `${e?.userNick}-avatar`,
                        }),
                        (0, i.jsx)("div", {
                            className: U.CU,
                            children: (0, i.jsx)(u.E, {
                                color: "text-default",
                                variant: "text-sm/normal",
                                className: U.br,
                                children: e?.userNick,
                            }),
                        }),
                    ],
                },
                e?.user?.id,
            ),
        ),
        o = s - c.length;
    return (0, i.jsxs)("div", {
        className: r()(U.Vg, a),
        children: [
            t,
            o > 0 &&
                (0, i.jsxs)("div", {
                    className: U.dq,
                    children: [
                        (0, i.jsx)("div", {
                            className: U.Ko,
                            children: (0, i.jsx)(R.c, { size: "custom", color: "currentColor", height: 12 }),
                        }),
                        (0, i.jsx)(u.E, {
                            color: "text-default",
                            variant: "text-sm/normal",
                            className: U.br,
                            children: T.intl.format(T.t["185ggO"], { count: o }),
                        }),
                    ],
                }),
        ],
    });
}
var _ = n(988794),
    D = n(652215),
    J = n(125545),
    L = (((s = {})[(s.BANNER = 0)] = "BANNER"), (s[(s.THUMBNAIL = 1)] = "THUMBNAIL"), s);
function S(e) {
    let { channel: l, onClick: n } = e,
        s = (0, C.Ay)(l),
        { canManageAllEvents: c } = (0, v.nr)(l),
        h = (0, t.bG)([p.A], () => !l.isGuildVocal() || p.A.can(D.xBc.CONNECT, l), [l]),
        m = a.useMemo(() => (0, j.A)(l), [l]),
        x = a.useMemo(() => {
            let e = (0, k.gU)(l),
                n = (0, k.Bq)(l);
            return null != e
                ? a.createElement(e, {
                      color: "currentColor",
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: J.Kk,
                      "aria-label": n ?? void 0,
                      role: null != n ? "img" : void 0,
                  })
                : null;
        }, [l]),
        N = !h && null != n,
        g = c && m && h && null != n;
    return (0, i.jsx)(o.m, {
        text: T.intl.string(T.t.nHjY9C),
        shouldShow: N,
        ariaHidden: !N,
        children: (0, i.jsxs)(d.D, {
            className: r()(J.mG, J.nU, { [J.MN]: h && null != n, [J.Pm]: !h && null != n }),
            onClick: n,
            children: [
                (0, i.jsx)(o.m, { text: T.intl.string(T.t["48WXaW"]), shouldShow: g, ariaHidden: !g, children: x }),
                (0, i.jsx)(u.E, { variant: "text-sm/normal", color: "none", className: J.h7, children: s }),
            ],
        }),
    });
}
function q(e) {
    let { channel: l, onJoinClick: n, handleLocationClick: s, location: a, isExternal: c } = e;
    return null != l
        ? (0, i.jsx)(S, { channel: l, onClick: n })
        : (0, i.jsxs)(d.D, {
              className: J.mG,
              onClick: s,
              children: [
                  (0, i.jsx)(h.B, {
                      "aria-hidden": !0,
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: r()(J.nU, J.Kk),
                  }),
                  (0, i.jsx)(u.E, { className: c ? J.dC : J.h7, variant: "text-sm/normal", children: (0, A.l)(a, !0) }),
              ],
          });
}
function z(e) {
    let {
            channel: l,
            entityType: n,
            isJoined: s,
            isActive: a,
            isUserLurking: c,
            rsvped: r,
            canInvite: t,
            onContextMenu: o,
            onJoinClick: d,
            onRsvpClick: u,
            onStartClick: h,
            onInviteClick: N,
            onEndClick: j,
            onJoinGuildClick: C,
        } = e,
        k = (0, E.D)(l, n),
        v = (0, b.Zq)({
            entityType: n,
            isJoined: s,
            isActive: a,
            isUserLurking: c,
            rsvped: r,
            canInvite: t,
            isChannelPublic: k,
            channel: l,
            onJoinClick: d,
            onRsvpClick: u,
            onStartClick: h,
            onInviteClick: N,
            onEndClick: j,
            onJoinGuildClick: C,
        });
    return (0, i.jsxs)(m.e, {
        fullWidth: !1,
        size: "sm",
        children: [null != o ? (0, i.jsx)(b.jD, { onClick: o }) : null, v?.map((e, l) => (0, i.jsx)(x.$, { ...e }, l))],
    });
}
function H(e) {
    let {
            className: l,
            guild: n,
            channel: s,
            creator: a,
            name: c,
            entityType: t,
            description: o,
            imageLocation: d = 0,
            imageSource: u,
            isActive: h,
            isUserLurking: m,
            isJoined: x = !1,
            isMember: j = !1,
            speakers: C,
            speakerCount: k,
            rsvped: v,
            canInvite: p,
            location: A,
            truncate: E,
            onContextMenu: b,
            onJoinClick: y,
            onJoinGuildClick: B,
            onRsvpClick: R,
            onStartClick: T,
            onInviteClick: U,
            onEndClick: D,
            onClick: L,
            isNew: S,
            guildEvent: H,
            eventPreview: K,
            recurrenceRule: P,
            recurrenceId: O,
            hideAgeVerificationNotice: V,
        } = e,
        W = t === _.Ps.EXTERNAL,
        X = W ? (e) => e.stopPropagation() : void 0,
        F = [];
    if (null != P && null != event) {
        let e = (0, I.X7)(P);
        F = (0, I.er)(4, e, new Date(H.scheduled_start_time));
    }
    let Y = F.length > 0;
    return (0, i.jsxs)(N.s, {
        "aria-label": c,
        onClick: () => L?.(O),
        onContextMenu: b,
        className: r()(J.Nr, { [J.oR]: x, [J.hT]: m }, l),
        children: [
            (0, i.jsxs)("div", {
                className: r()(J.Ms, { [J.AD]: Y }),
                children: [
                    0 === d && (0, i.jsx)(f.A, { source: u }),
                    (0, i.jsx)(M.Ay, {
                        creator: a,
                        name: c,
                        description: o,
                        imageSource: 1 === d ? u : null,
                        truncate: E,
                        guildId: n?.id,
                        isNew: S,
                        guildEvent: H,
                        eventPreview: K,
                        recurrenceId: O,
                    }),
                    h &&
                        null != n &&
                        null != C &&
                        k > 0 &&
                        (0, i.jsx)(G, { guild: n, speakers: C, speakerCount: k, className: J.YK }),
                    (0, i.jsx)("hr", { className: J.yF }),
                    !V &&
                        _.Tn.has(H.entity_type) &&
                        (0, i.jsx)(g.A, { className: J.K4, noBackground: !0, divider: g.V.BOTTOM, channelId: s?.id }),
                    (0, i.jsxs)("div", {
                        className: r()(J.mG, J.qr),
                        children: [
                            (0, i.jsx)(q, {
                                channel: s,
                                onJoinClick: y,
                                handleLocationClick: X,
                                location: A,
                                isExternal: W,
                            }),
                            (0, i.jsx)("div", {
                                className: J.AQ,
                                children: (0, i.jsx)(z, {
                                    channel: s,
                                    entityType: t,
                                    isActive: h,
                                    isJoined: x,
                                    isUserLurking: m,
                                    isMember: j,
                                    rsvped: v,
                                    canInvite: p,
                                    onContextMenu: b,
                                    onRsvpClick: R,
                                    onJoinGuildClick: B,
                                    onInviteClick: U,
                                    onJoinClick: y,
                                    onStartClick: T,
                                    onEndClick: D,
                                }),
                            }),
                        ],
                    }),
                    Y && (0, i.jsx)("hr", { className: J.yF }),
                ],
            }),
            Y && (0, i.jsx)(w.A, { guildId: n?.id, recurrenceRule: P, guildEventId: H.id, onRecurrenceClick: L }),
        ],
    });
}
