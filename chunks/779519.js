l.d(n, { c: () => L, A: () => H });
var s,
    i = l(477900),
    c = l(582128),
    a = l(503698),
    r = l.n(a),
    t = l(17928),
    o = l(866665),
    d = l(939249),
    u = l(834730),
    h = l(116085),
    m = l(825484),
    x = l(821609),
    N = l(890856),
    j = l(148719),
    C = l(47167),
    k = l(713654),
    v = l(931991),
    g = l(660110),
    p = l(576705),
    A = l(435328),
    E = l(530209),
    I = l(974930),
    M = l(428978),
    b = l(850183),
    f = l(557582),
    y = l(620018),
    w = l(97808),
    B = l(778712),
    R = l(831544),
    T = l(375708),
    U = l(439868);
function G(e) {
    let { guild: n, speakers: l, speakerCount: s, className: c } = e,
        a = l.slice(0, 5),
        t = a.map((e) =>
            (0, i.jsxs)(
                "div",
                {
                    className: U.dq,
                    children: [
                        (0, i.jsx)(w.eu, {
                            src: e?.user?.getAvatarURL(n.id, 20),
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
        o = s - a.length;
    return (0, i.jsxs)("div", {
        className: r()(U.Vg, c),
        children: [
            t,
            o > 0 &&
                (0, i.jsxs)("div", {
                    className: U.dq,
                    children: [
                        (0, i.jsx)("div", {
                            className: U.Ko,
                            children: (0, i.jsx)(R.MicrophoneIcon, {
                                size: "custom",
                                color: "currentColor",
                                height: 12,
                            }),
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
var _ = l(988794),
    D = l(652215),
    J = l(141441),
    L = (((s = {})[(s.BANNER = 0)] = "BANNER"), (s[(s.THUMBNAIL = 1)] = "THUMBNAIL"), s);
function S(e) {
    let { channel: n, onClick: l } = e,
        s = (0, C.Ay)(n),
        { canManageAllEvents: a } = (0, v.nr)(n),
        h = (0, t.bG)([p.A], () => !n.isGuildVocal() || p.A.can(D.xBc.CONNECT, n), [n]),
        m = c.useMemo(() => (0, j.A)(n), [n]),
        x = c.useMemo(() => {
            let e = (0, k.gU)(n),
                l = (0, k.Bq)(n);
            return null != e
                ? c.createElement(e, {
                      color: "currentColor",
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: J.Kk,
                      "aria-label": l ?? void 0,
                      role: null != l ? "img" : void 0,
                  })
                : null;
        }, [n]),
        N = !h && null != l,
        g = a && m && h && null != l;
    return (0, i.jsx)(o.m, {
        text: T.intl.string(T.t.nHjY9C),
        shouldShow: N,
        ariaHidden: !N,
        children: (0, i.jsxs)(d.D, {
            className: r()(J.mG, J.nU, { [J.MN]: h && null != l, [J.Pm]: !h && null != l }),
            onClick: l,
            children: [
                (0, i.jsx)(o.m, { text: T.intl.string(T.t["48WXaW"]), shouldShow: g, ariaHidden: !g, children: x }),
                (0, i.jsx)(u.E, { variant: "text-sm/normal", color: "none", className: J.h7, children: s }),
            ],
        }),
    });
}
function q(e) {
    let { channel: n, onJoinClick: l, handleLocationClick: s, location: c, isExternal: a } = e;
    return null != n
        ? (0, i.jsx)(S, { channel: n, onClick: l })
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
                  (0, i.jsx)(u.E, { className: a ? J.dC : J.h7, variant: "text-sm/normal", children: (0, A.y)(c, !0) }),
              ],
          });
}
function z(e) {
    let {
            channel: n,
            entityType: l,
            isJoined: s,
            isActive: c,
            isUserLurking: a,
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
        k = (0, E.D)(n, l),
        v = (0, M.Zq)({
            entityType: l,
            isJoined: s,
            isActive: c,
            isUserLurking: a,
            rsvped: r,
            canInvite: t,
            isChannelPublic: k,
            channel: n,
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
        children: [null != o ? (0, i.jsx)(M.jD, { onClick: o }) : null, v?.map((e, n) => (0, i.jsx)(x.$, { ...e }, n))],
    });
}
function H(e) {
    let {
            className: n,
            guild: l,
            channel: s,
            creator: c,
            name: a,
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
            onContextMenu: M,
            onJoinClick: w,
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
        "aria-label": a,
        onClick: () => L?.(O),
        onContextMenu: M,
        className: r()(J.Nr, { [J.oR]: x, [J.hT]: m }, n),
        children: [
            (0, i.jsxs)("div", {
                className: r()(J.Ms, { [J.AD]: Y }),
                children: [
                    0 === d && (0, i.jsx)(b.A, { source: u }),
                    (0, i.jsx)(f.Ay, {
                        creator: c,
                        name: a,
                        description: o,
                        imageSource: 1 === d ? u : null,
                        truncate: E,
                        guildId: l?.id,
                        isNew: S,
                        guildEvent: H,
                        eventPreview: K,
                        recurrenceId: O,
                    }),
                    h &&
                        null != l &&
                        null != C &&
                        k > 0 &&
                        (0, i.jsx)(G, { guild: l, speakers: C, speakerCount: k, className: J.YK }),
                    (0, i.jsx)("hr", { className: J.yF }),
                    !V &&
                        _.Tn.has(H.entity_type) &&
                        (0, i.jsx)(g.A, { className: J.K4, noBackground: !0, divider: g.V.BOTTOM, channelId: s?.id }),
                    (0, i.jsxs)("div", {
                        className: r()(J.mG, J.qr),
                        children: [
                            (0, i.jsx)(q, {
                                channel: s,
                                onJoinClick: w,
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
                                    onContextMenu: M,
                                    onRsvpClick: R,
                                    onJoinGuildClick: B,
                                    onInviteClick: U,
                                    onJoinClick: w,
                                    onStartClick: T,
                                    onEndClick: D,
                                }),
                            }),
                        ],
                    }),
                    Y && (0, i.jsx)("hr", { className: J.yF }),
                ],
            }),
            Y && (0, i.jsx)(y.A, { guildId: l?.id, recurrenceRule: P, guildEventId: H.id, onRecurrenceClick: L }),
        ],
    });
}
