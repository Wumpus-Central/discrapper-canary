t.d(n, { A: () => T, c: () => U });
var a,
    i = t(627968),
    r = t(64700),
    o = t(503698),
    s = t.n(o),
    l = t(311907),
    c = t(435371),
    _ = t(397927),
    d = t(148719),
    u = t(713654),
    p = t(931991),
    h = t(660110),
    m = t(576705),
    x = t(435328),
    b = t(530209),
    g = t(974930),
    C = t(428978),
    f = t(850183),
    v = t(557582),
    A = t(888637),
    k = t(823991),
    N = t(988794),
    j = t(652215),
    I = t(985018),
    y = t(234169),
    U = (((a = {})[(a.BANNER = 0)] = "BANNER"), (a[(a.THUMBNAIL = 1)] = "THUMBNAIL"), a);
function E(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: a } = (0, p.nr)(n),
        o = (0, l.bG)([m.A], () => !n.isGuildVocal() || m.A.can(j.xBc.CONNECT, n), [n]),
        h = r.useMemo(() => (0, d.A)(n), [n]),
        x = r.useMemo(() => {
            let e = (0, u.gU)(n);
            return null != e
                ? r.createElement(e, { color: "currentColor", size: "custom", width: 20, height: 20, className: y.Kk })
                : null;
        }, [n]);
    return (0, i.jsx)(c.m_, {
        text: I.intl.string(I.t.nHjY9C),
        shouldShow: !o && null != t,
        children: (0, i.jsxs)(_.DUT, {
            className: s()(y.mG, y.nU, { [y.MN]: o && null != t, [y.Pm]: !o && null != t }),
            onClick: t,
            children: [
                (0, i.jsx)(c.m_, {
                    text: I.intl.string(I.t["48WXaW"]),
                    shouldShow: a && h && o && null != t,
                    children: x,
                }),
                (0, i.jsx)(_.Text, { variant: "text-sm/normal", color: "none", className: y.h7, children: n.name }),
            ],
        }),
    });
}
function R(e) {
    let { channel: n, onJoinClick: t, handleLocationClick: a, location: r, isExternal: o } = e;
    return null != n
        ? (0, i.jsx)(E, { channel: n, onClick: t })
        : (0, i.jsxs)(_.DUT, {
              className: y.mG,
              onClick: a,
              children: [
                  (0, i.jsx)(_.BT6, {
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: s()(y.nU, y.Kk),
                  }),
                  (0, i.jsx)(_.Text, {
                      className: o ? y.dC : y.h7,
                      variant: "text-sm/normal",
                      children: (0, x.l)(r, !0),
                  }),
              ],
          });
}
function S(e) {
    let {
            channel: n,
            entityType: t,
            isJoined: a,
            isActive: r,
            isUserLurking: o,
            rsvped: s,
            canInvite: l,
            onContextMenu: c,
            onJoinClick: d,
            onRsvpClick: u,
            onStartClick: p,
            onInviteClick: h,
            onEndClick: m,
            onJoinGuildClick: x,
        } = e,
        g = (0, b.D)(n, t),
        f = (0, C.Zq)({
            entityType: t,
            isJoined: a,
            isActive: r,
            isUserLurking: o,
            rsvped: s,
            canInvite: l,
            isChannelPublic: g,
            channel: n,
            onJoinClick: d,
            onRsvpClick: u,
            onStartClick: p,
            onInviteClick: h,
            onEndClick: m,
            onJoinGuildClick: x,
        });
    return (0, i.jsxs)(_.ButtonGroup, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != c ? (0, i.jsx)(C.jD, { onClick: c }) : null,
            f?.map((e, n) => (0, i.jsx)(_.Button, { ...e }, n)),
        ],
    });
}
function T(e) {
    let {
            className: n,
            guild: t,
            channel: a,
            creator: r,
            name: o,
            entityType: l,
            description: c,
            imageLocation: d = 0,
            imageSource: u,
            isActive: p,
            isUserLurking: m,
            isJoined: x = !1,
            isMember: b = !1,
            speakers: C,
            speakerCount: j,
            rsvped: I,
            canInvite: U,
            location: E,
            truncate: T,
            onContextMenu: w,
            onJoinClick: B,
            onJoinGuildClick: M,
            onRsvpClick: D,
            onStartClick: L,
            onInviteClick: O,
            onEndClick: G,
            onClick: P,
            isNew: q,
            guildEvent: K,
            eventPreview: W,
            recurrenceRule: F,
            recurrenceId: V,
            hideAgeVerificationNotice: J,
        } = e,
        Q = l === N.Ps.EXTERNAL,
        z = Q ? (e) => e.stopPropagation() : void 0,
        X = [];
    if (null != F && null != event) {
        let e = (0, g.X7)(F);
        X = (0, g.er)(4, e, new Date(K.scheduled_start_time));
    }
    let H = X.length > 0;
    return (0, i.jsxs)(_.sqX, {
        "aria-label": o,
        onClick: () => P?.(V),
        onContextMenu: w,
        className: s()(y.Nr, { [y.oR]: x, [y.hT]: m }, n),
        children: [
            (0, i.jsxs)("div", {
                className: s()(y.Ms, { [y.AD]: H }),
                children: [
                    0 === d && (0, i.jsx)(f.A, { source: u }),
                    (0, i.jsx)(v.Ay, {
                        creator: r,
                        name: o,
                        description: c,
                        imageSource: 1 === d ? u : null,
                        truncate: T,
                        guildId: t?.id,
                        isNew: q,
                        guildEvent: K,
                        eventPreview: W,
                        recurrenceId: V,
                    }),
                    p &&
                        null != t &&
                        null != C &&
                        j > 0 &&
                        (0, i.jsx)(k.A, { guild: t, speakers: C, speakerCount: j, className: y.YK }),
                    (0, i.jsx)("hr", { className: y.yF }),
                    !J &&
                        N.Tn.has(K.entity_type) &&
                        (0, i.jsx)(h.A, { className: y.K4, noBackground: !0, divider: h.V.BOTTOM, channelId: a?.id }),
                    (0, i.jsxs)("div", {
                        className: s()(y.mG, y.qr),
                        children: [
                            (0, i.jsx)(R, {
                                channel: a,
                                onJoinClick: B,
                                handleLocationClick: z,
                                location: E,
                                isExternal: Q,
                            }),
                            (0, i.jsx)("div", {
                                className: y.AQ,
                                children: (0, i.jsx)(S, {
                                    channel: a,
                                    entityType: l,
                                    isActive: p,
                                    isJoined: x,
                                    isUserLurking: m,
                                    isMember: b,
                                    rsvped: I,
                                    canInvite: U,
                                    onContextMenu: w,
                                    onRsvpClick: D,
                                    onJoinGuildClick: M,
                                    onInviteClick: O,
                                    onJoinClick: B,
                                    onStartClick: L,
                                    onEndClick: G,
                                }),
                            }),
                        ],
                    }),
                    H && (0, i.jsx)("hr", { className: y.yF }),
                ],
            }),
            H && (0, i.jsx)(A.A, { guildId: t?.id, recurrenceRule: F, guildEventId: K.id, onRecurrenceClick: P }),
        ],
    });
}
