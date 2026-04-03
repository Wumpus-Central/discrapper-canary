n.d(t, { A: () => U }), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(379834),
    s = n(934551),
    a = n(27989),
    o = n(311907),
    d = n(397927),
    c = n(308368),
    u = n(544420),
    m = n(729937),
    _ = n(572211),
    h = n(354287),
    p = n(693879),
    g = n(583846),
    A = n(207371),
    x = n(205184),
    f = n(689168),
    C = n(403362),
    E = n(456060),
    I = n(131724),
    v = n(987709),
    b = n(850670),
    T = n(206589),
    N = n(154297),
    S = n(467078),
    y = n(833349),
    j = n(946255),
    L = n(755420),
    R = n(877044),
    P = n(878831),
    D = n(652215),
    M = n(768349),
    w = n(985018),
    O = n(772234);
function k(e) {
    let { presenceActivity: t, remoteJoinPlatform: n, isGameLaunchable: r } = e,
        o = (0, L.z4)({ platforms: t?.supported_platforms, currentPlatform: D.yTV.DESKTOP, isGameLaunchable: r }),
        c = l.useMemo(
            () =>
                o
                    .map((e) => {
                        switch (e) {
                            case L.FL.MOBILE:
                                return (0, i.jsx)(d.u6o, { size: "xxs", color: "currentColor" });
                            case L.FL.ANDROID:
                                return (0, i.jsx)(R.x, { width: a.E.xxs, height: a.E.xxs, color: "currentColor" });
                            case L.FL.IOS:
                                return (0, i.jsx)(d.z0, { size: "xxs", color: "currentColor" });
                            case L.FL.PLAYSTATION:
                                return (0, i.jsx)(d.Xj, { size: "xxs", color: "currentColor" });
                            case L.FL.XBOX:
                                return (0, i.jsx)(d.YWd, { size: "xxs", color: "currentColor" });
                            case L.FL.VR:
                                return (0, i.jsx)(s.VrHeadsetIcon, { size: "xxs", color: "currentColor" });
                            case L.FL.DESKTOP:
                                return (0, i.jsx)(d.kN9, { size: "xxs", color: "currentColor" });
                            default:
                                return null;
                        }
                    })
                    .filter(C.Vq),
            [o],
        );
    if (!(null != n || c.length > 0)) return null;
    let u = null != n ? (0, N.C)(n) : w.intl.string(w.t["4dGUP0"]);
    return (0, i.jsxs)("div", {
        className: O.qr,
        children: [
            (0, i.jsx)("div", {
                className: O.E6,
                children: c.map((e, t) => (0, i.jsx)("div", { className: O.F2, children: e }, t)),
            }),
            (0, i.jsx)(d.Text, { variant: "text-sm/medium", color: "currentColor", className: O.kB, children: u }),
        ],
    });
}
function U(e) {
    let {
            message: t,
            application: n,
            applicationName: s,
            channel: a,
            header: C,
            currentUserId: N,
            launchableAppId: L,
            isEmbeddedApplication: R,
            tryWithGdnAction: U,
            staticBannerSrc: B,
            onClickContent: G,
            iconSrc: F,
            onView: H,
            presenceActivity: V,
            currentUserPresenceActivity: q,
            hideParty: W,
            partyStatusElement: Y,
            analyticsLocations: z,
            showAuthButton: Q,
            canPromptAuth: K,
            startAuthorization: J,
            accountLinkButtonRef: X,
            renderAccountLinkUpsell: Z,
        } = e,
        $ = V?.timestamps?.start ?? V?.created_at,
        ee = l.useMemo(
            () =>
                null != $
                    ? (0, i.jsxs)("div", {
                          className: O.Ym,
                          children: [
                              (0, i.jsx)(d._xR, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(p.z, {
                                  entry: { start: $, end: V?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            [$, V?.timestamps?.end],
        ),
        et = (0, b.v)(t),
        en = (0, x.s)(n.id),
        ei = l.useMemo(
            () =>
                en.some((e) => (0, g.CZ)(e) === r.m.GLOBAL)
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(d.Y3C, { size: "xxs", color: "currentColor" }),
                              w.intl.string(w.t.TsWCdW),
                          ],
                      })
                    : null,
            [en],
        ),
        el = l.useMemo(
            () =>
                (0, i.jsxs)(d.Text, {
                    variant: "text-xs/normal",
                    className: O.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [et ? (0, E.YC)(t, s, a, N, !1) : ee, et ? null : ei],
                }),
            [et, t, s, a, N, ee, ei],
        ),
        er = l.useMemo(() => {
            let e = V?.details;
            return null == e || "" === e
                ? null
                : (0, i.jsx)(d.Text, { variant: "text-xs/normal", color: "none", lineClamp: 1, children: e });
        }, [V?.details]),
        es = l.useMemo(
            () => (0, i.jsxs)("div", { className: O.pq, children: [er, el, W || et ? null : Y] }),
            [el, W, et, Y, er],
        ),
        ea = !!L,
        eo = (0, A.e)(n),
        { canJoin: ed, remoteJoinPlatform: ec } = (0, I.D)({
            presenceActivity: V,
            currentUserPresenceActivity: q,
            currentUserId: N,
            message: t,
            application: n,
            isEmbeddedApplication: R,
            isFrameApplication: eo,
            isGameLaunchable: ea,
        }),
        eu = (0, I.M)(V, q, t, n),
        em = (0, v.E)(V, t, n, N),
        e_ = (0, T.w)(q, V),
        eh = (0, S.L)(V),
        ep = (0, o.bG)(
            [f.A],
            () => null != V && null != V.application_id && f.A.getState(V.application_id, D.xL.JOIN) === D.eAD.LOADING,
        ),
        { actions: eg, hasAccountLinkButton: eA } = l.useMemo(() => {
            let e = null,
                n = !0,
                i = !1;
            ed
                ? (e = {
                      label: w.intl.string(w.t.VJlc0S),
                      trackingArea: h.kY.JOIN,
                      submitting: ep,
                      onClick: () => {
                          u.A.join({
                              userId: t.author.id,
                              sessionId: V.session_id,
                              applicationId: V.application_id,
                              channelId: a.id,
                              messageId: t.id,
                              source: D.ThZ.MESSAGE_EMBED,
                              analyticsLocations: z,
                              embedded: (0, y.A)(V, D.jUm.EMBEDDED),
                              remotePartyId: null != ec ? V.party?.id : void 0,
                          }),
                              (0, j.A)({
                                  type: D.UqL.JOIN,
                                  source: D.ThZ.MESSAGE_EMBED,
                                  userId: t.author.id,
                                  guildId: a.guild_id,
                                  channelId: a.id,
                                  applicationId: V.application_id,
                                  partyId: V.party?.id,
                                  messageId: t.id,
                                  analyticsLocations: z,
                                  remoteJoinPlatform: ec,
                              });
                      },
                  })
                : eh && K
                  ? ((e = {
                        label: w.intl.string(w.t.lw71Nf),
                        trackingArea: h.kY.CONNECT_ACCOUNT,
                        onClick: () => {
                            J({ analyticsLocations: z });
                        },
                    }),
                    (n = !1))
                  : eu
                    ? ((e = {
                          label: w.intl.string(w.t.VJlc0S),
                          trackingArea: h.kY.SYNC,
                          onClick: () => {
                              null != V && m.OH(V, t.author.id);
                          },
                      }),
                      (n = !1))
                    : em
                      ? (e = {
                            label: w.intl.string(w.t["hC/Zey"]),
                            trackingArea: h.kY.INVITE,
                            onClick: () => {
                                null != V &&
                                    c.A.sendActivityInvite({
                                        type: D.xL.JOIN,
                                        channelId: a.id,
                                        activity: V,
                                        location: D.ThZ.MESSAGE_EMBED,
                                    });
                            },
                            disabled: t.author.id === N,
                            disabledReason: t.author.id === N ? w.intl.string(w.t.IBl8ID) : void 0,
                        })
                      : e_
                        ? (e = {
                              label: w.intl.string(w.t.KC26NR),
                              trackingArea: h.kY.PLAY,
                              onClick: () => {},
                              disabled: !0,
                          })
                        : null != U && ((e = U), (n = !1));
            let l = [];
            return (
                null != e &&
                    (l.push(e),
                    Q &&
                        n &&
                        (l.push({
                            label: w.intl.string(w.t.lw71Nf),
                            trackingArea: h.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                J({ analyticsLocations: z });
                            },
                            icon: d.A5T,
                            iconButton: !0,
                            buttonRef: X,
                        }),
                        (i = !0))),
                { actions: l, hasAccountLinkButton: i }
            );
        }, [ed, eu, em, e_, U, t.author.id, t.id, V, a.id, a.guild_id, z, ec, N, ep, Q, J, X, K, eh]),
        ex = eg.some((e) => e.trackingArea === h.kY.CLOUD_PLAY);
    (0, P.A)(ex, z);
    let ef = l.useMemo(
        () => (e_ ? null : (0, i.jsx)(k, { presenceActivity: V, remoteJoinPlatform: ec, isGameLaunchable: ea })),
        [e_, V, ec, ea],
    );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_.h, {
                header: C,
                title: s,
                staticBannerSrc: B,
                onClickBanner: G,
                bannerAspectRatio: _.u.ACTIVITY,
                iconSrc: F ?? void 0,
                info: es,
                actions: eg,
                primaryActionFirst: !0,
                onClickContent: G,
                trackingConfig: {
                    id: n.id,
                    linkType: M.J.RICH_PRESENCE_INVITE,
                    onView: H,
                    referrerId: t.author.id,
                    guildId: a.guild_id,
                    channelId: t.channel_id,
                    messageId: t.id,
                },
                footer: ef,
            }),
            eA ? Z() : null,
        ],
    });
}
