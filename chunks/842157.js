n.d(t, { A: () => J }), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(379834),
    a = n(738678),
    s = n(27989),
    o = n(17928),
    d = n(646270),
    c = n(610509),
    u = n(22363),
    m = n(802516),
    p = n(31300),
    A = n(834730),
    g = n(687966),
    I = n(825860),
    h = n(141628),
    C = n(308368),
    S = n(780907),
    E = n(729937),
    f = n(572211),
    _ = n(354287),
    x = n(85451),
    T = n(832384),
    v = n(207371),
    N = n(205184),
    y = n(689168),
    k = n(403362),
    b = n(456060),
    L = n(131724),
    R = n(987709),
    P = n(850670),
    D = n(206589),
    O = n(154297),
    U = n(467078),
    j = n(55730),
    G = n(946255),
    M = n(755420),
    B = n(877044),
    w = n(878831),
    V = n(652215),
    F = n(768349),
    Y = n(375708),
    W = n(378);
function H(e) {
    let { presenceActivity: t, remoteJoinPlatform: n, isGameLaunchable: r } = e,
        o = (0, M.z4)({ platforms: t?.supported_platforms, currentPlatform: V.yTV.DESKTOP, isGameLaunchable: r }),
        g = l.useMemo(
            () =>
                o
                    .map((e) => {
                        switch (e) {
                            case M.FL.MOBILE:
                                return (0, i.jsx)(d.u, { size: "xxs", color: "currentColor" });
                            case M.FL.ANDROID:
                                return (0, i.jsx)(B.x, { width: s.E.xxs, height: s.E.xxs, color: "currentColor" });
                            case M.FL.IOS:
                                return (0, i.jsx)(c.z, { size: "xxs", color: "currentColor" });
                            case M.FL.PLAYSTATION:
                                return (0, i.jsx)(u.X, { size: "xxs", color: "currentColor" });
                            case M.FL.XBOX:
                                return (0, i.jsx)(m.Y, { size: "xxs", color: "currentColor" });
                            case M.FL.VR:
                                return (0, i.jsx)(a.G, { size: "xxs", color: "currentColor" });
                            case M.FL.DESKTOP:
                                return (0, i.jsx)(p.k, { size: "xxs", color: "currentColor" });
                            default:
                                return null;
                        }
                    })
                    .filter(k.Vq),
            [o],
        );
    if (!(null != n || g.length > 0)) return null;
    let I = null != n ? (0, O.C)(n) : Y.intl.string(Y.t["4dGUP0"]);
    return (0, i.jsxs)("div", {
        className: W.qr,
        children: [
            (0, i.jsx)("div", {
                className: W.E6,
                children: g.map((e, t) => (0, i.jsx)("div", { className: W.F2, children: e }, t)),
            }),
            (0, i.jsx)(A.E, { variant: "text-sm/medium", color: "currentColor", className: W.kB, children: I }),
        ],
    });
}
function J(e) {
    let {
            message: t,
            application: n,
            applicationName: a,
            channel: s,
            header: d,
            currentUserId: c,
            launchableAppId: u,
            isEmbeddedApplication: m,
            tryWithGdnAction: p,
            staticBannerSrc: k,
            onClickContent: O,
            iconSrc: M,
            onView: B,
            presenceActivity: J,
            currentUserPresenceActivity: z,
            hideParty: q,
            partyStatusElement: K,
            analyticsLocations: $,
            showAuthButton: Q,
            requireAccountLink: X,
            requireGameLaunch: Z,
            canPromptAuth: ee,
            startAuthorization: et,
            accountLinkButtonRef: en,
            renderAccountLinkUpsell: ei,
        } = e,
        el = J?.timestamps?.start ?? J?.created_at,
        er = l.useMemo(
            () =>
                null != el
                    ? (0, i.jsxs)("div", {
                          className: W.Ym,
                          children: [
                              (0, i.jsx)(g._, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(x.z, {
                                  entry: { start: el, end: J?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            [el, J?.timestamps?.end],
        ),
        ea = (0, P.v)(t),
        es = (0, N.s)(n.id),
        eo = l.useMemo(
            () =>
                es.some((e) => (0, T.CZ)(e) === r.m.GLOBAL)
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(I.Y, { size: "xxs", color: "currentColor" }),
                              Y.intl.string(Y.t.TsWCdW),
                          ],
                      })
                    : null,
            [es],
        ),
        ed = l.useMemo(
            () =>
                (0, i.jsxs)(A.E, {
                    variant: "text-xs/normal",
                    className: W.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [ea ? (0, b.YC)(t, a, s, c, !1) : er, ea ? null : eo],
                }),
            [ea, t, a, s, c, er, eo],
        ),
        ec = l.useMemo(() => {
            let e = J?.details;
            return null == e || "" === e
                ? null
                : (0, i.jsx)(A.E, { variant: "text-xs/normal", color: "none", lineClamp: 1, children: e });
        }, [J?.details]),
        eu = l.useMemo(
            () => (0, i.jsxs)("div", { className: W.pq, children: [ec, ed, q || ea ? null : K] }),
            [ed, q, ea, K, ec],
        ),
        em = !!u,
        ep = (0, v.x)(n),
        { canJoin: eA, remoteJoinPlatform: eg } = (0, L.D)({
            presenceActivity: J,
            currentUserPresenceActivity: z,
            currentUserId: c,
            message: t,
            application: n,
            isEmbeddedApplication: m,
            isFrameApplication: ep,
            isGameLaunchable: em,
        }),
        eI = (0, L.M)(J, z, t, n),
        eh = (0, R.E)(J, t, n, c),
        eC = (0, D.w)(z, J),
        eS = (0, U.L)(J),
        eE = (0, o.bG)(
            [y.A],
            () => null != J && null != J.application_id && y.A.getState(J.application_id, V.xL.JOIN) === V.eAD.LOADING,
        ),
        { actions: ef, hasAccountLinkButton: e_ } = l.useMemo(() => {
            let e = null,
                n = !0,
                i = !1;
            eA && X
                ? ((e = {
                      label: Y.intl.string(Y.t.lw71Nf),
                      trackingArea: _.kY.CONNECT_ACCOUNT,
                      onClick: () => {
                          et({ analyticsLocations: $ });
                      },
                  }),
                  (n = !1))
                : eA && Z
                  ? ((e = {
                        label: Y.intl.string(Y.t["nIG+xx"]),
                        trackingArea: _.kY.PLAY,
                        onClick: () => {},
                        disabled: !0,
                    }),
                    (n = !1))
                  : eA
                    ? (e = {
                          label: Y.intl.string(Y.t.VJlc0S),
                          trackingArea: _.kY.JOIN,
                          submitting: eE,
                          onClick: () => {
                              S.Ay.join({
                                  userId: t.author.id,
                                  sessionId: J.session_id,
                                  applicationId: J.application_id,
                                  channelId: s.id,
                                  messageId: t.id,
                                  source: V.ThZ.MESSAGE_EMBED,
                                  analyticsLocations: $,
                                  embedded: (0, j.A)(J, V.jUm.EMBEDDED),
                                  remotePartyId: null != eg ? J.party?.id : void 0,
                              }),
                                  (0, G.A)({
                                      type: V.UqL.JOIN,
                                      source: V.ThZ.MESSAGE_EMBED,
                                      userId: t.author.id,
                                      guildId: s.guild_id,
                                      channelId: s.id,
                                      applicationId: J.application_id,
                                      partyId: J.party?.id,
                                      messageId: t.id,
                                      analyticsLocations: $,
                                      remoteJoinPlatform: eg,
                                  });
                          },
                      })
                    : eS && ee
                      ? ((e = {
                            label: Y.intl.string(Y.t.lw71Nf),
                            trackingArea: _.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                et({ analyticsLocations: $ });
                            },
                        }),
                        (n = !1))
                      : eI
                        ? ((e = {
                              label: Y.intl.string(Y.t.VJlc0S),
                              trackingArea: _.kY.SYNC,
                              onClick: () => {
                                  null != J && E.OH(J, t.author.id);
                              },
                          }),
                          (n = !1))
                        : eh
                          ? (e = {
                                label: Y.intl.string(Y.t["hC/Zey"]),
                                trackingArea: _.kY.INVITE,
                                onClick: () => {
                                    null != J &&
                                        C.A.sendActivityInvite({
                                            type: V.xL.JOIN,
                                            channelId: s.id,
                                            activity: J,
                                            location: V.ThZ.MESSAGE_EMBED,
                                        });
                                },
                                disabled: t.author.id === c,
                                disabledReason: t.author.id === c ? Y.intl.string(Y.t.IBl8ID) : void 0,
                            })
                          : eC
                            ? (e = {
                                  label: Y.intl.string(Y.t.KC26NR),
                                  trackingArea: _.kY.PLAY,
                                  onClick: () => {},
                                  disabled: !0,
                              })
                            : null != p && ((e = p), (n = !1));
            let l = [];
            return (
                null != e &&
                    (l.push(e),
                    Q &&
                        n &&
                        (l.push({
                            label: Y.intl.string(Y.t.lw71Nf),
                            trackingArea: _.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                et({ analyticsLocations: $ });
                            },
                            icon: h.A,
                            iconButton: !0,
                            buttonRef: en,
                        }),
                        (i = !0))),
                { actions: l, hasAccountLinkButton: i }
            );
        }, [eA, X, Z, eI, eh, eC, p, t.author.id, t.id, J, s.id, s.guild_id, $, eg, c, eE, Q, et, en, ee, eS]),
        ex = ef.some((e) => e.trackingArea === _.kY.CLOUD_PLAY);
    (0, w.A)(ex, $);
    let eT = l.useMemo(
        () => (eC ? null : (0, i.jsx)(H, { presenceActivity: J, remoteJoinPlatform: eg, isGameLaunchable: em })),
        [eC, J, eg, em],
    );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.h, {
                header: d,
                title: a,
                staticBannerSrc: k,
                onClickBanner: O,
                bannerAspectRatio: f.u.ACTIVITY,
                iconSrc: M ?? void 0,
                info: eu,
                actions: ef,
                primaryActionFirst: !0,
                onClickContent: O,
                trackingConfig: {
                    id: n.id,
                    linkType: F.J.RICH_PRESENCE_INVITE,
                    onView: B,
                    referrerId: t.author.id,
                    guildId: s.guild_id,
                    channelId: t.channel_id,
                    messageId: t.id,
                },
                footer: eT,
            }),
            e_ ? ei() : null,
        ],
    });
}
