n.d(t, { c: () => B, A: () => P });
var a,
    l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    o = n(17928),
    c = n(990078),
    d = n(939249),
    u = n(834730),
    _ = n(116085),
    h = n(825484),
    g = n(821609),
    p = n(890856),
    m = n(148719),
    x = n(47167),
    v = n(713654),
    f = n(931991),
    b = n(660110),
    A = n(576705),
    N = n(435328),
    C = n(530209),
    w = n(974930),
    I = n(428978),
    y = n(850183),
    j = n(557582),
    k = n(620018),
    E = n(97808),
    T = n(778712),
    M = n(831544),
    L = n(985018),
    R = n(63892);
function O(e) {
    let { guild: t, speakers: n, speakerCount: a, className: r } = e,
        i = n.slice(0, 5),
        o = i.map((e) =>
            (0, l.jsxs)(
                "div",
                {
                    className: R.dq,
                    children: [
                        (0, l.jsx)(E.eu, {
                            src: e?.user?.getAvatarURL(t.id, 20),
                            size: T._3.SIZE_20,
                            className: R.my,
                            "aria-label": `${e?.userNick}-avatar`,
                        }),
                        (0, l.jsx)("div", {
                            className: R.CU,
                            children: (0, l.jsx)(u.E, {
                                color: "text-default",
                                variant: "text-sm/normal",
                                className: R.br,
                                children: e?.userNick,
                            }),
                        }),
                    ],
                },
                e?.user?.id,
            ),
        ),
        c = a - i.length;
    return (0, l.jsxs)("div", {
        className: s()(R.Vg, r),
        children: [
            o,
            c > 0 &&
                (0, l.jsxs)("div", {
                    className: R.dq,
                    children: [
                        (0, l.jsx)("div", {
                            className: R.Ko,
                            children: (0, l.jsx)(M.c, { size: "custom", color: "currentColor", height: 12 }),
                        }),
                        (0, l.jsx)(u.E, {
                            color: "text-default",
                            variant: "text-sm/normal",
                            className: R.br,
                            children: L.intl.format(L.t["185ggO"], { count: c }),
                        }),
                    ],
                }),
        ],
    });
}
var D = n(988794),
    V = n(652215),
    S = n(125545),
    B = (((a = {})[(a.BANNER = 0)] = "BANNER"), (a[(a.THUMBNAIL = 1)] = "THUMBNAIL"), a);
function U(e) {
    let { channel: t, onClick: n } = e,
        a = (0, x.Ay)(t),
        { canManageAllEvents: i } = (0, f.nr)(t),
        _ = (0, o.bG)([A.A], () => !t.isGuildVocal() || A.A.can(V.xBc.CONNECT, t), [t]),
        h = r.useMemo(() => (0, m.A)(t), [t]),
        g = r.useMemo(() => {
            let e = (0, v.gU)(t),
                n = (0, v.Bq)(t);
            return null != e
                ? r.createElement(e, {
                      color: "currentColor",
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: S.Kk,
                      "aria-label": n ?? void 0,
                      role: null != n ? "img" : void 0,
                  })
                : null;
        }, [t]);
    return (0, l.jsx)(c.m, {
        text: L.intl.string(L.t.nHjY9C),
        shouldShow: !_ && null != n,
        children: (0, l.jsxs)(d.D, {
            className: s()(S.mG, S.nU, { [S.MN]: _ && null != n, [S.Pm]: !_ && null != n }),
            onClick: n,
            children: [
                (0, l.jsx)(c.m, {
                    text: L.intl.string(L.t["48WXaW"]),
                    shouldShow: i && h && _ && null != n,
                    children: g,
                }),
                (0, l.jsx)(u.E, { variant: "text-sm/normal", color: "none", className: S.h7, children: a }),
            ],
        }),
    });
}
function F(e) {
    let { channel: t, onJoinClick: n, handleLocationClick: a, location: r, isExternal: i } = e;
    return null != t
        ? (0, l.jsx)(U, { channel: t, onClick: n })
        : (0, l.jsxs)(d.D, {
              className: S.mG,
              onClick: a,
              children: [
                  (0, l.jsx)(_.B, {
                      "aria-hidden": !0,
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: s()(S.nU, S.Kk),
                  }),
                  (0, l.jsx)(u.E, { className: i ? S.dC : S.h7, variant: "text-sm/normal", children: (0, N.l)(r, !0) }),
              ],
          });
}
function Z(e) {
    let {
            channel: t,
            entityType: n,
            isJoined: a,
            isActive: r,
            isUserLurking: i,
            rsvped: s,
            canInvite: o,
            onContextMenu: c,
            onJoinClick: d,
            onRsvpClick: u,
            onStartClick: _,
            onInviteClick: p,
            onEndClick: m,
            onJoinGuildClick: x,
        } = e,
        v = (0, C.D)(t, n),
        f = (0, I.Zq)({
            entityType: n,
            isJoined: a,
            isActive: r,
            isUserLurking: i,
            rsvped: s,
            canInvite: o,
            isChannelPublic: v,
            channel: t,
            onJoinClick: d,
            onRsvpClick: u,
            onStartClick: _,
            onInviteClick: p,
            onEndClick: m,
            onJoinGuildClick: x,
        });
    return (0, l.jsxs)(h.e, {
        fullWidth: !1,
        size: "sm",
        children: [null != c ? (0, l.jsx)(I.jD, { onClick: c }) : null, f?.map((e, t) => (0, l.jsx)(g.$, { ...e }, t))],
    });
}
function P(e) {
    let {
            className: t,
            guild: n,
            channel: a,
            creator: r,
            name: i,
            entityType: o,
            description: c,
            imageLocation: d = 0,
            imageSource: u,
            isActive: _,
            isUserLurking: h,
            isJoined: g = !1,
            isMember: m = !1,
            speakers: x,
            speakerCount: v,
            rsvped: f,
            canInvite: A,
            location: N,
            truncate: C,
            onContextMenu: I,
            onJoinClick: E,
            onJoinGuildClick: T,
            onRsvpClick: M,
            onStartClick: L,
            onInviteClick: R,
            onEndClick: V,
            onClick: B,
            isNew: U,
            guildEvent: P,
            eventPreview: G,
            recurrenceRule: z,
            recurrenceId: K,
            hideAgeVerificationNotice: W,
        } = e,
        H = o === D.Ps.EXTERNAL,
        q = H ? (e) => e.stopPropagation() : void 0,
        J = [];
    if (null != z && null != event) {
        let e = (0, w.X7)(z);
        J = (0, w.er)(4, e, new Date(P.scheduled_start_time));
    }
    let Q = J.length > 0;
    return (0, l.jsxs)(p.s, {
        "aria-label": i,
        onClick: () => B?.(K),
        onContextMenu: I,
        className: s()(S.Nr, { [S.oR]: g, [S.hT]: h }, t),
        children: [
            (0, l.jsxs)("div", {
                className: s()(S.Ms, { [S.AD]: Q }),
                children: [
                    0 === d && (0, l.jsx)(y.A, { source: u }),
                    (0, l.jsx)(j.Ay, {
                        creator: r,
                        name: i,
                        description: c,
                        imageSource: 1 === d ? u : null,
                        truncate: C,
                        guildId: n?.id,
                        isNew: U,
                        guildEvent: P,
                        eventPreview: G,
                        recurrenceId: K,
                    }),
                    _ &&
                        null != n &&
                        null != x &&
                        v > 0 &&
                        (0, l.jsx)(O, { guild: n, speakers: x, speakerCount: v, className: S.YK }),
                    (0, l.jsx)("hr", { className: S.yF }),
                    !W &&
                        D.Tn.has(P.entity_type) &&
                        (0, l.jsx)(b.A, { className: S.K4, noBackground: !0, divider: b.V.BOTTOM, channelId: a?.id }),
                    (0, l.jsxs)("div", {
                        className: s()(S.mG, S.qr),
                        children: [
                            (0, l.jsx)(F, {
                                channel: a,
                                onJoinClick: E,
                                handleLocationClick: q,
                                location: N,
                                isExternal: H,
                            }),
                            (0, l.jsx)("div", {
                                className: S.AQ,
                                children: (0, l.jsx)(Z, {
                                    channel: a,
                                    entityType: o,
                                    isActive: _,
                                    isJoined: g,
                                    isUserLurking: h,
                                    isMember: m,
                                    rsvped: f,
                                    canInvite: A,
                                    onContextMenu: I,
                                    onRsvpClick: M,
                                    onJoinGuildClick: T,
                                    onInviteClick: R,
                                    onJoinClick: E,
                                    onStartClick: L,
                                    onEndClick: V,
                                }),
                            }),
                        ],
                    }),
                    Q && (0, l.jsx)("hr", { className: S.yF }),
                ],
            }),
            Q && (0, l.jsx)(k.A, { guildId: n?.id, recurrenceRule: z, guildEventId: P.id, onRecurrenceClick: B }),
        ],
    });
}
