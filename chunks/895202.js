t.d(n, { A: () => S, c: () => y });
var a,
    i = t(627968),
    r = t(64700),
    c = t(503698),
    l = t.n(c),
    o = t(311907),
    _ = t(435371),
    s = t(397927),
    d = t(148719),
    u = t(47167),
    x = t(713654),
    b = t(931991),
    p = t(660110),
    m = t(576705),
    h = t(435328),
    g = t(530209),
    v = t(974930),
    f = t(428978),
    k = t(850183),
    C = t(557582),
    N = t(888637),
    A = t(823991),
    j = t(988794),
    I = t(652215),
    U = t(985018),
    w = t(234169),
    y = (((a = {})[(a.BANNER = 0)] = "BANNER"), (a[(a.THUMBNAIL = 1)] = "THUMBNAIL"), a);
function T(e) {
    let { channel: n, onClick: t } = e,
        a = (0, u.Ay)(n),
        { canManageAllEvents: c } = (0, b.nr)(n),
        p = (0, o.bG)([m.A], () => !n.isGuildVocal() || m.A.can(I.xBc.CONNECT, n), [n]),
        h = r.useMemo(() => (0, d.A)(n), [n]),
        g = r.useMemo(() => {
            let e = (0, x.gU)(n);
            return null != e
                ? r.createElement(e, { color: "currentColor", size: "custom", width: 20, height: 20, className: w.Kk })
                : null;
        }, [n]);
    return (0, i.jsx)(_.m_, {
        text: U.intl.string(U.t.nHjY9C),
        shouldShow: !p && null != t,
        children: (0, i.jsxs)(s.DUT, {
            className: l()(w.mG, w.nU, { [w.MN]: p && null != t, [w.Pm]: !p && null != t }),
            onClick: t,
            children: [
                (0, i.jsx)(_.m_, {
                    text: U.intl.string(U.t["48WXaW"]),
                    shouldShow: c && h && p && null != t,
                    children: g,
                }),
                (0, i.jsx)(s.Text, { variant: "text-sm/normal", color: "none", className: w.h7, children: a }),
            ],
        }),
    });
}
function B(e) {
    let { channel: n, onJoinClick: t, handleLocationClick: a, location: r, isExternal: c } = e;
    return null != n
        ? (0, i.jsx)(T, { channel: n, onClick: t })
        : (0, i.jsxs)(s.DUT, {
              className: w.mG,
              onClick: a,
              children: [
                  (0, i.jsx)(s.BT6, {
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: l()(w.nU, w.Kk),
                  }),
                  (0, i.jsx)(s.Text, {
                      className: c ? w.dC : w.h7,
                      variant: "text-sm/normal",
                      children: (0, h.l)(r, !0),
                  }),
              ],
          });
}
function R(e) {
    let {
            channel: n,
            entityType: t,
            isJoined: a,
            isActive: r,
            isUserLurking: c,
            rsvped: l,
            canInvite: o,
            onContextMenu: _,
            onJoinClick: d,
            onRsvpClick: u,
            onStartClick: x,
            onInviteClick: b,
            onEndClick: p,
            onJoinGuildClick: m,
        } = e,
        h = (0, g.D)(n, t),
        v = (0, f.Zq)({
            entityType: t,
            isJoined: a,
            isActive: r,
            isUserLurking: c,
            rsvped: l,
            canInvite: o,
            isChannelPublic: h,
            channel: n,
            onJoinClick: d,
            onRsvpClick: u,
            onStartClick: x,
            onInviteClick: b,
            onEndClick: p,
            onJoinGuildClick: m,
        });
    return (0, i.jsxs)(s.ButtonGroup, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != _ ? (0, i.jsx)(f.jD, { onClick: _ }) : null,
            v?.map((e, n) => (0, i.jsx)(s.Button, { ...e }, n)),
        ],
    });
}
function S(e) {
    let {
            className: n,
            guild: t,
            channel: a,
            creator: r,
            name: c,
            entityType: o,
            description: _,
            imageLocation: d = 0,
            imageSource: u,
            isActive: x,
            isUserLurking: b,
            isJoined: m = !1,
            isMember: h = !1,
            speakers: g,
            speakerCount: f,
            rsvped: I,
            canInvite: U,
            location: y,
            truncate: T,
            onContextMenu: S,
            onJoinClick: L,
            onJoinGuildClick: D,
            onRsvpClick: E,
            onStartClick: q,
            onInviteClick: G,
            onEndClick: M,
            onClick: K,
            isNew: P,
            guildEvent: W,
            eventPreview: J,
            recurrenceRule: Q,
            recurrenceId: z,
            hideAgeVerificationNotice: F,
        } = e,
        O = o === j.Ps.EXTERNAL,
        X = O ? (e) => e.stopPropagation() : void 0,
        V = [];
    if (null != Q && null != event) {
        let e = (0, v.X7)(Q);
        V = (0, v.er)(4, e, new Date(W.scheduled_start_time));
    }
    let H = V.length > 0;
    return (0, i.jsxs)(s.sqX, {
        "aria-label": c,
        onClick: () => K?.(z),
        onContextMenu: S,
        className: l()(w.Nr, { [w.oR]: m, [w.hT]: b }, n),
        children: [
            (0, i.jsxs)("div", {
                className: l()(w.Ms, { [w.AD]: H }),
                children: [
                    0 === d && (0, i.jsx)(k.A, { source: u }),
                    (0, i.jsx)(C.Ay, {
                        creator: r,
                        name: c,
                        description: _,
                        imageSource: 1 === d ? u : null,
                        truncate: T,
                        guildId: t?.id,
                        isNew: P,
                        guildEvent: W,
                        eventPreview: J,
                        recurrenceId: z,
                    }),
                    x &&
                        null != t &&
                        null != g &&
                        f > 0 &&
                        (0, i.jsx)(A.A, { guild: t, speakers: g, speakerCount: f, className: w.YK }),
                    (0, i.jsx)("hr", { className: w.yF }),
                    !F &&
                        j.Tn.has(W.entity_type) &&
                        (0, i.jsx)(p.A, { className: w.K4, noBackground: !0, divider: p.V.BOTTOM, channelId: a?.id }),
                    (0, i.jsxs)("div", {
                        className: l()(w.mG, w.qr),
                        children: [
                            (0, i.jsx)(B, {
                                channel: a,
                                onJoinClick: L,
                                handleLocationClick: X,
                                location: y,
                                isExternal: O,
                            }),
                            (0, i.jsx)("div", {
                                className: w.AQ,
                                children: (0, i.jsx)(R, {
                                    channel: a,
                                    entityType: o,
                                    isActive: x,
                                    isJoined: m,
                                    isUserLurking: b,
                                    isMember: h,
                                    rsvped: I,
                                    canInvite: U,
                                    onContextMenu: S,
                                    onRsvpClick: E,
                                    onJoinGuildClick: D,
                                    onInviteClick: G,
                                    onJoinClick: L,
                                    onStartClick: q,
                                    onEndClick: M,
                                }),
                            }),
                        ],
                    }),
                    H && (0, i.jsx)("hr", { className: w.yF }),
                ],
            }),
            H && (0, i.jsx)(N.A, { guildId: t?.id, recurrenceRule: Q, guildEventId: W.id, onRecurrenceClick: K }),
        ],
    });
}
