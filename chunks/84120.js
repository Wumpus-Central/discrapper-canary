n.d(t, { P0: () => em, em: () => eu }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(17928),
    r = n(834730),
    a = n(138175),
    o = n(192308),
    d = n(456060),
    c = n(793574),
    u = n(688810),
    m = n(572211),
    h = n(354287),
    g = n(112150),
    p = n(952818),
    A = n(560595),
    x = n(616356),
    f = n(760751),
    E = n(763827),
    C = n(486020),
    I = n(723702),
    v = n(935208),
    _ = n(820672),
    j = n(768349),
    N = n(783198),
    T = n(375708);
function y(e) {
    let { currentUserId: t, message: l, application: r, channel: a, analyticsLocations: y, onView: S } = e,
        { staticBannerSrc: b, videoBannerSrc: L, bannerAspectRatio: k } = (0, g.f)(r),
        R = C.Ay.getApplicationIconURL({ id: r.id, icon: r.icon }),
        M = (0, s.bG)([p.Ay, f.A], () =>
            p.Ay.getVisibleRunningGames().find((e) => {
                let { id: t } = e;
                if (t === r.id) return !0;
                let n = f.A.getGameByApplication(r);
                return null != n && t === n.id;
            }),
        ),
        P = (0, s.bG)([x.A], () => x.A.getCurrentUserActiveStream()),
        w = (0, s.bG)([E.A], () => E.A.getChannelId()),
        D = v.default.extractTimestamp(l.id) + _.M < Date.now(),
        O = (0, i.jsx)(i.Fragment, { children: (0, d.Wf)(l, a, t) }),
        { analyticsLocations: U } = (0, u.Ay)(y, c.A.REQUEST_TO_STREAM_INVITE_EMBED),
        G = T.intl.string(N.default["5+172e"]),
        V = !1;
    return (
        D
            ? ((G = T.intl.string(N.default.u4QmWl)), (V = !0))
            : null != P
              ? ((G = T.intl.string(N.default.P0wwmM)), (V = !0))
              : w !== a.id
                ? ((G = T.intl.string(N.default.qRXats)), (V = !0))
                : null == M && ((G = T.intl.string(N.default["43zohO"])), (V = !0)),
        (0, i.jsx)(m.h, {
            header: T.intl.string(N.default.nAyuPp),
            title: r.name,
            staticBannerSrc: b,
            videoBannerSrc: L,
            bannerAspectRatio: k,
            iconSrc: R ?? void 0,
            info: O,
            actions:
                l.author.id === t
                    ? []
                    : [
                          {
                              label: G,
                              trackingArea: h.kY.STREAM,
                              disabled: V,
                              onClick: () => {
                                  null != M &&
                                      ((0, I.isWindows)()
                                          ? (0, A.A)(M.pid)
                                          : (0, o.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("95457"),
                                                    n.e("17918"),
                                                    n.e("76171"),
                                                    n.e("38601"),
                                                    n.e("36946"),
                                                    n.e("6809"),
                                                    n.e("44801"),
                                                    n.e("44727"),
                                                    n.e("25241"),
                                                    n.e("6565"),
                                                    n.e("14304"),
                                                    n.e("76229"),
                                                    n.e("91782"),
                                                    n.e("90088"),
                                                ]).then(n.bind(n, 477156));
                                                return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: U });
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: r.id,
                linkType: j.J.REQUEST_TO_STREAM,
                guildId: a.guild_id,
                channelId: a.id,
                messageId: l.id,
                onView: S,
                isDeadEnd: D,
            },
        })
    );
}
var S = n(666176),
    b = n(495544),
    L = n(629016),
    k = n(480595),
    R = n(290863),
    M = n(461213),
    P = n(287809),
    w = n(454292),
    D = n(850670),
    O = n(125017),
    U = n(104171),
    G = n(659051),
    V = n(939249),
    B = n(141628),
    H = n(780907),
    F = n(140651),
    Y = n(232835),
    z = n(652215),
    W = n(878831),
    K = n(193018);
function J(e) {
    let { applicationName: t, iconSrc: n, viewAction: l } = e,
        { primaryColor: s, secondaryColor: a } = (0, F.A)(n),
        o = `linear-gradient(45deg, ${s}, ${a})`,
        d = (0, i.jsx)(r.E, { variant: "text-sm/semibold", color: "none", children: t }),
        c = null == l ? d : (0, i.jsx)(V.D, { onClick: l, className: K.Qi, children: d });
    return (0, i.jsxs)("div", {
        className: K.Xy,
        style: { background: o },
        children: [
            (0, i.jsx)(r.E, {
                variant: "text-xs/semibold",
                color: "none",
                className: K.xn,
                children: T.intl.string(T.t.pkq6Vq),
            }),
            (0, i.jsxs)("div", {
                className: K.fi,
                children: [
                    null != n ? (0, i.jsx)("img", { className: K.V$, src: n, alt: "" }) : null,
                    (0, i.jsxs)("div", {
                        className: K.Cr,
                        children: [
                            c,
                            (0, i.jsx)(r.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                className: K.Jl,
                                children: T.intl.string(T.t["Sq/E1I"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function q(e) {
    let {
            message: t,
            application: n,
            applicationName: a,
            channel: o,
            header: c,
            currentUserId: u,
            launchableAppId: g,
            isEmbeddedApplication: p,
            tryWithGdnAction: A,
            staticBannerSrc: x,
            onClickContent: f,
            iconSrc: E,
            onView: C,
            presenceActivity: I,
            analyticsLocations: v,
            showAuthButton: _,
            requireAccountLink: N,
            startAuthorization: y,
            accountLinkButtonRef: S,
            renderAccountLinkUpsell: b,
        } = e,
        L = (0, s.bG)([Y.A], () => Y.A.getMessages(o.id)),
        { actions: k, hasAccountLinkButton: R } = l.useMemo(() => {
            let e = [],
                i = !0,
                l = !1;
            if (
                (N && null != g
                    ? ((e = [
                          {
                              label: T.intl.string(T.t.lw71Nf),
                              trackingArea: h.kY.CONNECT_ACCOUNT,
                              onClick: () => {
                                  y({ analyticsLocations: v });
                              },
                          },
                      ]),
                      (i = !1))
                    : null != g
                      ? (e = [
                            {
                                label: T.intl.string(T.t["s+J8Dl"]),
                                trackingArea: h.kY.PLAY,
                                isDeadEnd: !0,
                                onClick: () => {
                                    H.Ay.launch({ applicationId: g, embedded: p });
                                },
                            },
                        ])
                      : null != A && ((e = [A]), (i = !1)),
                e.length > 0)
            ) {
                var s, r;
                if (
                    ((s = t.id),
                    (r = n.id),
                    L.hasAnyAfter(
                        s,
                        (e) =>
                            null != e.activity &&
                            e.application?.id === r &&
                            e.activity.type === z.xL.JOIN &&
                            !(0, G.A)(I, e, r),
                        25,
                    ))
                )
                    return { actions: [], hasAccountLinkButton: !1 };
                _ &&
                    i &&
                    (e.push({
                        label: T.intl.string(T.t.lw71Nf),
                        trackingArea: h.kY.CONNECT_ACCOUNT,
                        onClick: () => {
                            y({ analyticsLocations: v });
                        },
                        icon: B.A,
                        iconButton: !0,
                        buttonRef: S,
                    }),
                    (l = !0));
            }
            return { actions: e, hasAccountLinkButton: l };
        }, [N, p, g, A, L, I, n.id, t.id, _, y, v, S]),
        M = k.some((e) => e.trackingArea === h.kY.CLOUD_PLAY);
    (0, W.A)(M, v);
    let P = k.length > 0,
        w = l.useMemo(
            () =>
                (0, i.jsx)(r.E, {
                    variant: "text-xs/medium",
                    className: K.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, d.BE)(t, a, o, u, P),
                }),
            [t, a, o, u, P],
        );
    return 0 === k.length
        ? (0, i.jsx)(J, { applicationName: a, iconSrc: E, viewAction: f })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(m.h, {
                      header: c,
                      title: a,
                      staticBannerSrc: x,
                      onClickBanner: f,
                      bannerAspectRatio: m.u.ACTIVITY,
                      iconSrc: E ?? void 0,
                      info: w,
                      actions: k,
                      primaryActionFirst: !0,
                      onClickContent: f,
                      trackingConfig: {
                          id: n.id,
                          linkType: j.J.RICH_PRESENCE_INVITE,
                          onView: C,
                          referrerId: t.author.id,
                          guildId: o.guild_id,
                          channelId: t.channel_id,
                          messageId: t.id,
                          isDeadEnd: !0,
                      },
                  }),
                  R ? b() : null,
              ],
          });
}
var Z = n(773746),
    X = n(127936);
function $(e) {
    let {
            analyticsLocations: t,
            application: n,
            channel: l,
            currentUserId: s,
            currentUserPresenceActivity: r,
            hideParty: a,
            message: o,
            onView: c,
            partyStatusElement: u,
            presenceActivity: m,
        } = e,
        {
            isEmbeddedApplication: h,
            iconSrc: g,
            applicationName: p,
            staticBannerSrc: A,
            launchableAppId: x,
            tryWithGdnAction: f,
            viewAction: E,
            accountLinkingEntryPointExperimentConfig: C,
            canStartAuthorization: I,
            hasAlreadyLinked: v,
            startAuthorizeWithToast: _,
            requireAccountLink: j,
            requireGameLaunch: N,
            accountLinkButtonRef: T,
            renderAccountLinkUpsell: y,
        } = (0, X.p)({
            analyticsLocations: t,
            application: n,
            channel: l,
            message: o,
            presenceActivity: m,
            location: "RichPresenceGameActivityInviteEmbed",
        }),
        S = !(0, G.A)(m, o, n.id),
        b = (0, d.n$)(p, o.activity?.type, S);
    return S
        ? (0, i.jsx)(q, {
              message: o,
              application: n,
              applicationName: p,
              channel: l,
              header: b,
              currentUserId: s,
              launchableAppId: x,
              isEmbeddedApplication: h,
              tryWithGdnAction: f,
              staticBannerSrc: A,
              onClickContent: E,
              iconSrc: g,
              onView: c,
              presenceActivity: m,
              analyticsLocations: t,
              showAuthButton: I && !v && C.enabled,
              requireAccountLink: j,
              startAuthorization: _,
              accountLinkButtonRef: T,
              renderAccountLinkUpsell: y,
          })
        : (0, i.jsx)(Z.A, {
              message: o,
              application: n,
              applicationName: p,
              channel: l,
              header: b,
              currentUserId: s,
              launchableAppId: x,
              isEmbeddedApplication: h,
              tryWithGdnAction: f,
              staticBannerSrc: A,
              onClickContent: E,
              iconSrc: g,
              onView: c,
              presenceActivity: m,
              currentUserPresenceActivity: r,
              hideParty: a,
              partyStatusElement: u,
              analyticsLocations: t,
              showAuthButton: I && !v && C.enabled,
              requireAccountLink: j,
              requireGameLaunch: N,
              canPromptAuth: I && !v,
              startAuthorization: _,
              accountLinkButtonRef: T,
              renderAccountLinkUpsell: y,
          });
}
var Q = n(172710);
function ee(e) {
    let { application: t, message: n, header: s, onClickContent: a, onView: o, guildId: d } = e,
        c = l.useMemo(
            () =>
                (0, i.jsx)(r.E, {
                    variant: "text-xs/medium",
                    className: K.h_,
                    color: "none",
                    lineClamp: 1,
                    children: T.intl.string(T.t["84qx9r"]),
                }),
            [],
        );
    return (0, i.jsx)(m.h, {
        header: s,
        title: t.name,
        iconSrc: S.HT.getWhiteIconURL(),
        info: c,
        onClickContent: a,
        trackingConfig: {
            id: t.id,
            linkType: j.J.RICH_PRESENCE_INVITE,
            onView: o,
            referrerId: n.author.id,
            guildId: d,
            channelId: n.channel_id,
            messageId: n.id,
            isDeadEnd: !0,
        },
    });
}
var et = n(432017),
    en = n(85451),
    ei = n(353411),
    el = n(970928),
    es = n(360469),
    er = n(206589);
function ea(e) {
    var t;
    let {
            application: n,
            message: s,
            header: a,
            presenceActivity: o,
            hideParty: d,
            partyStatusElement: c,
            currentUserPresenceActivity: u,
            onClickContent: g,
            onView: p,
            guildId: A,
        } = e,
        x = (0, er.w)(u, o),
        f = (0, ei.Gq)(o, s.author, "Invite Embed"),
        E = l.useMemo(() => {
            let e = [];
            return (
                x ||
                    e.push({
                        label: f.label ?? T.intl.string(T.t.VJlc0S),
                        trackingArea: h.kY.SYNC,
                        onClick: () => {
                            f.onClick();
                        },
                        disabled: f.disabled,
                        disabledReason: f.disabled ? f.tooltip : void 0,
                    }),
                e
            );
        }, [x, f]),
        C =
            null != o && null != o.details && null != o.state
                ? T.intl.formatToPlainString(T.t.JCvHtx, { track: o.details, artist: o.state })
                : n.name,
        I = o?.timestamps?.start ?? o?.created_at,
        v = l.useMemo(
            () =>
                null != I
                    ? (0, i.jsxs)("div", {
                          className: K.Ym,
                          children: [
                              (0, i.jsx)(et.T, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(en.z, {
                                  entry: { start: I, end: o?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            [I, o?.timestamps?.end],
        ),
        _ = l.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: K.pq,
                    children: [
                        (0, i.jsx)(r.E, {
                            variant: "text-xs/normal",
                            className: K.dS,
                            color: "none",
                            lineClamp: 1,
                            children: v,
                        }),
                        d ? null : c,
                    ],
                }),
            [v, d, c],
        );
    return (0, i.jsx)(m.h, {
        header: a,
        title: C,
        iconSrc:
            ((t = n.id),
            (null == o || null == o.assets || null == o.assets.large_image
                ? null
                : (0, el.uD)(t, o.assets.large_image, [es.Ig, es.Ig])) ?? void 0),
        info: _,
        actions: E,
        onClickContent: g,
        trackingConfig: {
            id: n.id,
            linkType: j.J.RICH_PRESENCE_INVITE,
            onView: p,
            referrerId: s.author.id,
            guildId: A,
            channelId: s.channel_id,
            messageId: s.id,
        },
    });
}
function eo(e) {
    let {
            application: t,
            currentUserPresenceActivity: n,
            hideParty: s,
            message: r,
            onView: a,
            partyStatusElement: o,
            presenceActivity: c,
            guildId: u,
        } = e,
        m = !(0, G.A)(c, r, t.id),
        h = (0, d.n$)(t.name, r.activity?.type, m),
        g = l.useMemo(() => {
            if (null != c) return () => (0, Q.Mp)(c);
        }, [c]);
    return m
        ? (0, i.jsx)(ee, { application: t, message: r, header: h, onClickContent: g, onView: a, guildId: u })
        : (0, i.jsx)(ea, {
              application: t,
              message: r,
              header: h,
              presenceActivity: c,
              hideParty: s,
              partyStatusElement: o,
              currentUserPresenceActivity: n,
              onClickContent: g,
              onView: a,
              guildId: u,
          });
}
var ed = n(272984);
function ec(e) {
    let { partyMembers: t, partySize: n, maxPartySize: l, guildId: s, activityActionType: a } = e,
        o = Math.max(n, t.length),
        c = (0, d.SJ)({ maxPartySize: l, partySize: o, activityActionType: a }),
        u = [...t];
    for (; u.length < n && u.length < 8; ) u.push(U.mt);
    for (; u.length < l && u.length < 8; ) u.push(null);
    return (0, i.jsxs)("div", {
        className: K.UF,
        children: [
            u.length > 0 &&
                (0, i.jsx)(U.Ay, {
                    guildId: s,
                    users: u,
                    max: l > 0 ? Math.min(l, 8) : 8,
                    size: U.DN.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, i.jsx)(r.E, { variant: "text-xs/medium", color: "none", children: c }),
        ],
    });
}
function eu(e) {
    let { presenceActivity: t, channel: n, activityActionType: r } = e,
        a = (0, s.yK)([L.A], () => (null == t || null == t.party ? [] : Array.from(L.A.getParty(t.party.id) ?? [])), [
            t,
        ]),
        { partySize: o, maxPartySize: d } = (0, O._)(t),
        c = l.useMemo(
            () =>
                a.map((e) => {
                    let t = P.default.getUser(e);
                    return null != t ? t : U.mt;
                }),
            [a],
        );
    return l.useMemo(
        () =>
            (0, i.jsx)(ec, {
                partyMembers: c,
                partySize: o,
                maxPartySize: d,
                guildId: n.guild_id,
                activityActionType: r,
            }),
        [c, o, d, n.guild_id, r],
    );
}
function em(e) {
    let { analyticsLocations: t, app: n, channel: l, message: r, hideParty: o, onView: d } = e,
        c = (0, a.b)(n),
        u = (0, s.bG)([b.default], () => b.default.getId()),
        m = (0, s.bG)([R.A], () => {
            if (null == r.application) return R.A.findActivity(r.author.id, (e) => e.type === z.$pd.LISTENING);
            {
                let e = r.author.id;
                return (
                    (0, D.v)(r) && (e = e === u && l.isPrivate() ? l.getRecipientId() : u),
                    R.A.getApplicationActivity(e, r.application.id)
                );
            }
        }, [r, l, u]),
        h = (0, s.bG)([k.A, M.A], () => (0, w.A)(k.A, M.A, c.id), [c.id]),
        g = eu({ presenceActivity: m, channel: l, activityActionType: r.activity?.type });
    return (0, ed.pH)(m?.party?.id) || c.id === S.HT.id
        ? (0, i.jsx)(eo, {
              application: c,
              currentUserPresenceActivity: h,
              hideParty: o,
              message: r,
              onView: d,
              partyStatusElement: g,
              presenceActivity: m,
              guildId: l.guild_id,
          })
        : r.activity?.type === z.xL.STREAM_REQUEST
          ? (0, i.jsx)(y, { analyticsLocations: t, application: c, channel: l, currentUserId: u, message: r })
          : (0, i.jsx)($, {
                analyticsLocations: t,
                application: c,
                channel: l,
                currentUserId: u,
                currentUserPresenceActivity: h,
                hideParty: o,
                message: r,
                onView: d,
                partyStatusElement: g,
                presenceActivity: m,
            });
}
