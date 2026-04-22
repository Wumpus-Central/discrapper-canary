n.d(t, { A: () => z }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(379834),
    s = n(738678),
    r = n(27989),
    o = n(311907),
    d = n(646270),
    c = n(610509),
    u = n(22363),
    m = n(802516),
    _ = n(31300),
    h = n(834730),
    p = n(687966),
    g = n(825860),
    A = n(141628),
    f = n(308368),
    x = n(544420),
    C = n(729937),
    E = n(572211),
    I = n(354287),
    v = n(693879),
    b = n(583846),
    T = n(207371),
    S = n(205184),
    y = n(689168),
    N = n(403362),
    j = n(456060),
    L = n(131724),
    R = n(987709),
    P = n(850670),
    w = n(206589),
    D = n(154297),
    k = n(467078),
    O = n(833349),
    M = n(946255),
    U = n(755420),
    G = n(877044),
    B = n(878831),
    F = n(652215),
    H = n(768349),
    V = n(985018),
    q = n(378);
function W(e) {
    let { presenceActivity: t, remoteJoinPlatform: n, isGameLaunchable: a } = e,
        o = (0, U.z4)({ platforms: t?.supported_platforms, currentPlatform: F.yTV.DESKTOP, isGameLaunchable: a }),
        p = l.useMemo(
            () =>
                o
                    .map((e) => {
                        switch (e) {
                            case U.FL.MOBILE:
                                return (0, i.jsx)(d.u, { size: "xxs", color: "currentColor" });
                            case U.FL.ANDROID:
                                return (0, i.jsx)(G.x, { width: r.E.xxs, height: r.E.xxs, color: "currentColor" });
                            case U.FL.IOS:
                                return (0, i.jsx)(c.z, { size: "xxs", color: "currentColor" });
                            case U.FL.PLAYSTATION:
                                return (0, i.jsx)(u.X, { size: "xxs", color: "currentColor" });
                            case U.FL.XBOX:
                                return (0, i.jsx)(m.Y, { size: "xxs", color: "currentColor" });
                            case U.FL.VR:
                                return (0, i.jsx)(s.G, { size: "xxs", color: "currentColor" });
                            case U.FL.DESKTOP:
                                return (0, i.jsx)(_.k, { size: "xxs", color: "currentColor" });
                            default:
                                return null;
                        }
                    })
                    .filter(N.Vq),
            [o],
        );
    if (!(null != n || p.length > 0)) return null;
    let g = null != n ? (0, D.C)(n) : V.intl.string(V.t["4dGUP0"]);
    return (0, i.jsxs)("div", {
        className: q.qr,
        children: [
            (0, i.jsx)("div", {
                className: q.E6,
                children: p.map((e, t) => (0, i.jsx)("div", { className: q.F2, children: e }, t)),
            }),
            (0, i.jsx)(h.E, { variant: "text-sm/medium", color: "currentColor", className: q.kB, children: g }),
        ],
    });
}
function z(e) {
    let {
            message: t,
            application: n,
            applicationName: s,
            channel: r,
            header: d,
            currentUserId: c,
            launchableAppId: u,
            isEmbeddedApplication: m,
            tryWithGdnAction: _,
            staticBannerSrc: N,
            onClickContent: D,
            iconSrc: U,
            onView: G,
            presenceActivity: z,
            currentUserPresenceActivity: Y,
            hideParty: Q,
            partyStatusElement: K,
            analyticsLocations: Z,
            showAuthButton: J,
            requireAccountLink: X,
            canPromptAuth: $,
            startAuthorization: ee,
            accountLinkButtonRef: et,
            renderAccountLinkUpsell: en,
        } = e,
        ei = z?.timestamps?.start ?? z?.created_at,
        el = l.useMemo(
            () =>
                null != ei
                    ? (0, i.jsxs)("div", {
                          className: q.Ym,
                          children: [
                              (0, i.jsx)(p._, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(v.z, {
                                  entry: { start: ei, end: z?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            [ei, z?.timestamps?.end],
        ),
        ea = (0, P.v)(t),
        es = (0, S.s)(n.id),
        er = l.useMemo(
            () =>
                es.some((e) => (0, b.CZ)(e) === a.m.GLOBAL)
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.Y, { size: "xxs", color: "currentColor" }),
                              V.intl.string(V.t.TsWCdW),
                          ],
                      })
                    : null,
            [es],
        ),
        eo = l.useMemo(
            () =>
                (0, i.jsxs)(h.E, {
                    variant: "text-xs/normal",
                    className: q.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [ea ? (0, j.YC)(t, s, r, c, !1) : el, ea ? null : er],
                }),
            [ea, t, s, r, c, el, er],
        ),
        ed = l.useMemo(() => {
            let e = z?.details;
            return null == e || "" === e
                ? null
                : (0, i.jsx)(h.E, { variant: "text-xs/normal", color: "none", lineClamp: 1, children: e });
        }, [z?.details]),
        ec = l.useMemo(
            () => (0, i.jsxs)("div", { className: q.pq, children: [ed, eo, Q || ea ? null : K] }),
            [eo, Q, ea, K, ed],
        ),
        eu = !!u,
        em = (0, T.e)(n),
        { canJoin: e_, remoteJoinPlatform: eh } = (0, L.D)({
            presenceActivity: z,
            currentUserPresenceActivity: Y,
            currentUserId: c,
            message: t,
            application: n,
            isEmbeddedApplication: m,
            isFrameApplication: em,
            isGameLaunchable: eu,
        }),
        ep = (0, L.M)(z, Y, t, n),
        eg = (0, R.E)(z, t, n, c),
        eA = (0, w.w)(Y, z),
        ef = (0, k.L)(z),
        ex = (0, o.bG)(
            [y.A],
            () => null != z && null != z.application_id && y.A.getState(z.application_id, F.xL.JOIN) === F.eAD.LOADING,
        ),
        { actions: eC, hasAccountLinkButton: eE } = l.useMemo(() => {
            let e = null,
                n = !0,
                i = !1;
            e_ && X
                ? ((e = {
                      label: V.intl.string(V.t.lw71Nf),
                      trackingArea: I.kY.CONNECT_ACCOUNT,
                      onClick: () => {
                          ee({ analyticsLocations: Z });
                      },
                  }),
                  (n = !1))
                : e_
                  ? (e = {
                        label: V.intl.string(V.t.VJlc0S),
                        trackingArea: I.kY.JOIN,
                        submitting: ex,
                        onClick: () => {
                            x.Ay.join({
                                userId: t.author.id,
                                sessionId: z.session_id,
                                applicationId: z.application_id,
                                channelId: r.id,
                                messageId: t.id,
                                source: F.ThZ.MESSAGE_EMBED,
                                analyticsLocations: Z,
                                embedded: (0, O.A)(z, F.jUm.EMBEDDED),
                                remotePartyId: null != eh ? z.party?.id : void 0,
                            }),
                                (0, M.A)({
                                    type: F.UqL.JOIN,
                                    source: F.ThZ.MESSAGE_EMBED,
                                    userId: t.author.id,
                                    guildId: r.guild_id,
                                    channelId: r.id,
                                    applicationId: z.application_id,
                                    partyId: z.party?.id,
                                    messageId: t.id,
                                    analyticsLocations: Z,
                                    remoteJoinPlatform: eh,
                                });
                        },
                    })
                  : ef && $
                    ? ((e = {
                          label: V.intl.string(V.t.lw71Nf),
                          trackingArea: I.kY.CONNECT_ACCOUNT,
                          onClick: () => {
                              ee({ analyticsLocations: Z });
                          },
                      }),
                      (n = !1))
                    : ep
                      ? ((e = {
                            label: V.intl.string(V.t.VJlc0S),
                            trackingArea: I.kY.SYNC,
                            onClick: () => {
                                null != z && C.OH(z, t.author.id);
                            },
                        }),
                        (n = !1))
                      : eg
                        ? (e = {
                              label: V.intl.string(V.t["hC/Zey"]),
                              trackingArea: I.kY.INVITE,
                              onClick: () => {
                                  null != z &&
                                      f.A.sendActivityInvite({
                                          type: F.xL.JOIN,
                                          channelId: r.id,
                                          activity: z,
                                          location: F.ThZ.MESSAGE_EMBED,
                                      });
                              },
                              disabled: t.author.id === c,
                              disabledReason: t.author.id === c ? V.intl.string(V.t.IBl8ID) : void 0,
                          })
                        : eA
                          ? (e = {
                                label: V.intl.string(V.t.KC26NR),
                                trackingArea: I.kY.PLAY,
                                onClick: () => {},
                                disabled: !0,
                            })
                          : null != _ && ((e = _), (n = !1));
            let l = [];
            return (
                null != e &&
                    (l.push(e),
                    J &&
                        n &&
                        (l.push({
                            label: V.intl.string(V.t.lw71Nf),
                            trackingArea: I.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                ee({ analyticsLocations: Z });
                            },
                            icon: A.A,
                            iconButton: !0,
                            buttonRef: et,
                        }),
                        (i = !0))),
                { actions: l, hasAccountLinkButton: i }
            );
        }, [e_, X, ep, eg, eA, _, t.author.id, t.id, z, r.id, r.guild_id, Z, eh, c, ex, J, ee, et, $, ef]),
        eI = eC.some((e) => e.trackingArea === I.kY.CLOUD_PLAY);
    (0, B.A)(eI, Z);
    let ev = l.useMemo(
        () => (eA ? null : (0, i.jsx)(W, { presenceActivity: z, remoteJoinPlatform: eh, isGameLaunchable: eu })),
        [eA, z, eh, eu],
    );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(E.h, {
                header: d,
                title: s,
                staticBannerSrc: N,
                onClickBanner: D,
                bannerAspectRatio: E.u.ACTIVITY,
                iconSrc: U ?? void 0,
                info: ec,
                actions: eC,
                primaryActionFirst: !0,
                onClickContent: D,
                trackingConfig: {
                    id: n.id,
                    linkType: H.J.RICH_PRESENCE_INVITE,
                    onView: G,
                    referrerId: t.author.id,
                    guildId: r.guild_id,
                    channelId: t.channel_id,
                    messageId: t.id,
                },
                footer: ev,
            }),
            eE ? en() : null,
        ],
    });
}
