n.d(t, { A: () => B, c: () => O });
var a,
    l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    o = n(311907),
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
    y = n(428978),
    I = n(850183),
    j = n(557582),
    k = n(888637),
    E = n(823991),
    T = n(988794),
    M = n(652215),
    L = n(985018),
    R = n(125545),
    O = (((a = {})[(a.BANNER = 0)] = "BANNER"), (a[(a.THUMBNAIL = 1)] = "THUMBNAIL"), a);
function D(e) {
    let { channel: t, onClick: n } = e,
        a = (0, x.Ay)(t),
        { canManageAllEvents: i } = (0, f.nr)(t),
        _ = (0, o.bG)([A.A], () => !t.isGuildVocal() || A.A.can(M.xBc.CONNECT, t), [t]),
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
                      className: R.Kk,
                      "aria-label": n ?? void 0,
                      role: null != n ? "img" : void 0,
                  })
                : null;
        }, [t]);
    return (0, l.jsx)(c.m, {
        text: L.intl.string(L.t.nHjY9C),
        shouldShow: !_ && null != n,
        children: (0, l.jsxs)(d.D, {
            className: s()(R.mG, R.nU, { [R.MN]: _ && null != n, [R.Pm]: !_ && null != n }),
            onClick: n,
            children: [
                (0, l.jsx)(c.m, {
                    text: L.intl.string(L.t["48WXaW"]),
                    shouldShow: i && h && _ && null != n,
                    children: g,
                }),
                (0, l.jsx)(u.E, { variant: "text-sm/normal", color: "none", className: R.h7, children: a }),
            ],
        }),
    });
}
function V(e) {
    let { channel: t, onJoinClick: n, handleLocationClick: a, location: r, isExternal: i } = e;
    return null != t
        ? (0, l.jsx)(D, { channel: t, onClick: n })
        : (0, l.jsxs)(d.D, {
              className: R.mG,
              onClick: a,
              children: [
                  (0, l.jsx)(_.B, {
                      "aria-hidden": !0,
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: s()(R.nU, R.Kk),
                  }),
                  (0, l.jsx)(u.E, { className: i ? R.dC : R.h7, variant: "text-sm/normal", children: (0, N.l)(r, !0) }),
              ],
          });
}
function S(e) {
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
        f = (0, y.Zq)({
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
        children: [null != c ? (0, l.jsx)(y.jD, { onClick: c }) : null, f?.map((e, t) => (0, l.jsx)(g.$, { ...e }, t))],
    });
}
function B(e) {
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
            onContextMenu: y,
            onJoinClick: M,
            onJoinGuildClick: L,
            onRsvpClick: O,
            onStartClick: D,
            onInviteClick: B,
            onEndClick: U,
            onClick: F,
            isNew: Z,
            guildEvent: P,
            eventPreview: G,
            recurrenceRule: z,
            recurrenceId: W,
            hideAgeVerificationNotice: K,
        } = e,
        H = o === T.Ps.EXTERNAL,
        q = H ? (e) => e.stopPropagation() : void 0,
        J = [];
    if (null != z && null != event) {
        let e = (0, w.X7)(z);
        J = (0, w.er)(4, e, new Date(P.scheduled_start_time));
    }
    let Q = J.length > 0;
    return (0, l.jsxs)(p.s, {
        "aria-label": i,
        onClick: () => F?.(W),
        onContextMenu: y,
        className: s()(R.Nr, { [R.oR]: g, [R.hT]: h }, t),
        children: [
            (0, l.jsxs)("div", {
                className: s()(R.Ms, { [R.AD]: Q }),
                children: [
                    0 === d && (0, l.jsx)(I.A, { source: u }),
                    (0, l.jsx)(j.Ay, {
                        creator: r,
                        name: i,
                        description: c,
                        imageSource: 1 === d ? u : null,
                        truncate: C,
                        guildId: n?.id,
                        isNew: Z,
                        guildEvent: P,
                        eventPreview: G,
                        recurrenceId: W,
                    }),
                    _ &&
                        null != n &&
                        null != x &&
                        v > 0 &&
                        (0, l.jsx)(E.A, { guild: n, speakers: x, speakerCount: v, className: R.YK }),
                    (0, l.jsx)("hr", { className: R.yF }),
                    !K &&
                        T.Tn.has(P.entity_type) &&
                        (0, l.jsx)(b.A, { className: R.K4, noBackground: !0, divider: b.V.BOTTOM, channelId: a?.id }),
                    (0, l.jsxs)("div", {
                        className: s()(R.mG, R.qr),
                        children: [
                            (0, l.jsx)(V, {
                                channel: a,
                                onJoinClick: M,
                                handleLocationClick: q,
                                location: N,
                                isExternal: H,
                            }),
                            (0, l.jsx)("div", {
                                className: R.AQ,
                                children: (0, l.jsx)(S, {
                                    channel: a,
                                    entityType: o,
                                    isActive: _,
                                    isJoined: g,
                                    isUserLurking: h,
                                    isMember: m,
                                    rsvped: f,
                                    canInvite: A,
                                    onContextMenu: y,
                                    onRsvpClick: O,
                                    onJoinGuildClick: L,
                                    onInviteClick: B,
                                    onJoinClick: M,
                                    onStartClick: D,
                                    onEndClick: U,
                                }),
                            }),
                        ],
                    }),
                    Q && (0, l.jsx)("hr", { className: R.yF }),
                ],
            }),
            Q && (0, l.jsx)(k.A, { guildId: n?.id, recurrenceRule: z, guildEventId: P.id, onRecurrenceClick: F }),
        ],
    });
}
