n.d(t, { A: () => B, c: () => L });
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
    p = n(821609),
    f = n(890856),
    g = n(148719),
    m = n(47167),
    x = n(713654),
    v = n(931991),
    b = n(660110),
    A = n(576705),
    C = n(435328),
    y = n(530209),
    I = n(974930),
    N = n(428978),
    w = n(850183),
    j = n(557582),
    k = n(888637),
    E = n(823991),
    M = n(988794),
    R = n(652215),
    T = n(985018),
    D = n(67305),
    L = (((a = {})[(a.BANNER = 0)] = "BANNER"), (a[(a.THUMBNAIL = 1)] = "THUMBNAIL"), a);
function O(e) {
    let { channel: t, onClick: n } = e,
        a = (0, m.Ay)(t),
        { canManageAllEvents: i } = (0, v.nr)(t),
        _ = (0, o.bG)([A.A], () => !t.isGuildVocal() || A.A.can(R.xBc.CONNECT, t), [t]),
        h = r.useMemo(() => (0, g.A)(t), [t]),
        p = r.useMemo(() => {
            let e = (0, x.gU)(t),
                n = (0, x.Bq)(t);
            return null != e
                ? r.createElement(e, {
                      color: "currentColor",
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: D.Kk,
                      "aria-label": n ?? void 0,
                      role: null != n ? "img" : void 0,
                  })
                : null;
        }, [t]);
    return (0, l.jsx)(c.m, {
        text: T.intl.string(T.t.nHjY9C),
        shouldShow: !_ && null != n,
        children: (0, l.jsxs)(d.D, {
            className: s()(D.mG, D.nU, { [D.MN]: _ && null != n, [D.Pm]: !_ && null != n }),
            onClick: n,
            children: [
                (0, l.jsx)(c.m, {
                    text: T.intl.string(T.t["48WXaW"]),
                    shouldShow: i && h && _ && null != n,
                    children: p,
                }),
                (0, l.jsx)(u.E, { variant: "text-sm/normal", color: "none", className: D.h7, children: a }),
            ],
        }),
    });
}
function S(e) {
    let { channel: t, onJoinClick: n, handleLocationClick: a, location: r, isExternal: i } = e;
    return null != t
        ? (0, l.jsx)(O, { channel: t, onClick: n })
        : (0, l.jsxs)(d.D, {
              className: D.mG,
              onClick: a,
              children: [
                  (0, l.jsx)(_.B, {
                      "aria-hidden": !0,
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: s()(D.nU, D.Kk),
                  }),
                  (0, l.jsx)(u.E, { className: i ? D.dC : D.h7, variant: "text-sm/normal", children: (0, C.l)(r, !0) }),
              ],
          });
}
function V(e) {
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
            onInviteClick: f,
            onEndClick: g,
            onJoinGuildClick: m,
        } = e,
        x = (0, y.D)(t, n),
        v = (0, N.Zq)({
            entityType: n,
            isJoined: a,
            isActive: r,
            isUserLurking: i,
            rsvped: s,
            canInvite: o,
            isChannelPublic: x,
            channel: t,
            onJoinClick: d,
            onRsvpClick: u,
            onStartClick: _,
            onInviteClick: f,
            onEndClick: g,
            onJoinGuildClick: m,
        });
    return (0, l.jsxs)(h.e, {
        fullWidth: !1,
        size: "sm",
        children: [null != c ? (0, l.jsx)(N.jD, { onClick: c }) : null, v?.map((e, t) => (0, l.jsx)(p.$, { ...e }, t))],
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
            isJoined: p = !1,
            isMember: g = !1,
            speakers: m,
            speakerCount: x,
            rsvped: v,
            canInvite: A,
            location: C,
            truncate: y,
            onContextMenu: N,
            onJoinClick: R,
            onJoinGuildClick: T,
            onRsvpClick: L,
            onStartClick: O,
            onInviteClick: B,
            onEndClick: U,
            onClick: F,
            isNew: P,
            guildEvent: Z,
            eventPreview: G,
            recurrenceRule: z,
            recurrenceId: W,
            hideAgeVerificationNotice: H,
        } = e,
        K = o === M.Ps.EXTERNAL,
        X = K ? (e) => e.stopPropagation() : void 0,
        q = [];
    if (null != z && null != event) {
        let e = (0, I.X7)(z);
        q = (0, I.er)(4, e, new Date(Z.scheduled_start_time));
    }
    let Y = q.length > 0;
    return (0, l.jsxs)(f.s, {
        "aria-label": i,
        onClick: () => F?.(W),
        onContextMenu: N,
        className: s()(D.Nr, { [D.oR]: p, [D.hT]: h }, t),
        children: [
            (0, l.jsxs)("div", {
                className: s()(D.Ms, { [D.AD]: Y }),
                children: [
                    0 === d && (0, l.jsx)(w.A, { source: u }),
                    (0, l.jsx)(j.Ay, {
                        creator: r,
                        name: i,
                        description: c,
                        imageSource: 1 === d ? u : null,
                        truncate: y,
                        guildId: n?.id,
                        isNew: P,
                        guildEvent: Z,
                        eventPreview: G,
                        recurrenceId: W,
                    }),
                    _ &&
                        null != n &&
                        null != m &&
                        x > 0 &&
                        (0, l.jsx)(E.A, { guild: n, speakers: m, speakerCount: x, className: D.YK }),
                    (0, l.jsx)("hr", { className: D.yF }),
                    !H &&
                        M.Tn.has(Z.entity_type) &&
                        (0, l.jsx)(b.A, { className: D.K4, noBackground: !0, divider: b.V.BOTTOM, channelId: a?.id }),
                    (0, l.jsxs)("div", {
                        className: s()(D.mG, D.qr),
                        children: [
                            (0, l.jsx)(S, {
                                channel: a,
                                onJoinClick: R,
                                handleLocationClick: X,
                                location: C,
                                isExternal: K,
                            }),
                            (0, l.jsx)("div", {
                                className: D.AQ,
                                children: (0, l.jsx)(V, {
                                    channel: a,
                                    entityType: o,
                                    isActive: _,
                                    isJoined: p,
                                    isUserLurking: h,
                                    isMember: g,
                                    rsvped: v,
                                    canInvite: A,
                                    onContextMenu: N,
                                    onRsvpClick: L,
                                    onJoinGuildClick: T,
                                    onInviteClick: B,
                                    onJoinClick: R,
                                    onStartClick: O,
                                    onEndClick: U,
                                }),
                            }),
                        ],
                    }),
                    Y && (0, l.jsx)("hr", { className: D.yF }),
                ],
            }),
            Y && (0, l.jsx)(k.A, { guildId: n?.id, recurrenceRule: z, guildEventId: Z.id, onRecurrenceClick: F }),
        ],
    });
}
