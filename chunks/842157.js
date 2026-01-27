n.d(t, {
    A: () => k,
}),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(379834),
    a = n(934551),
    s = n(27989),
    o = n(311907),
    c = n(397927),
    u = n(308368),
    d = n(544420),
    p = n(729937),
    m = n(572211),
    f = n(354287),
    g = n(693879),
    h = n(583846),
    _ = n(207371),
    b = n(205184),
    A = n(689168),
    y = n(403362),
    v = n(456060),
    x = n(131724),
    O = n(987709),
    E = n(850670),
    j = n(206589),
    C = n(154297),
    I = n(833349),
    S = n(946255),
    T = n(755420),
    N = n(877044),
    P = n(878831),
    w = n(652215),
    R = n(768349),
    D = n(985018),
    L = n(609653);

function M(e) {
    let { presenceActivity: t, remoteJoinPlatform: n } = e,
        l = (0, T.z4)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: w.yTV.DESKTOP,
        }),
        o = i.useMemo(
            () =>
                l
                    .map((e) => {
                        switch (e) {
                            case T.FL.MOBILE:
                                return (0, r.jsx)(c.u6o, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case T.FL.ANDROID:
                                return (0, r.jsx)(N.x, {
                                    width: s.E.xxs,
                                    height: s.E.xxs,
                                    color: "currentColor",
                                });
                            case T.FL.IOS:
                                return (0, r.jsx)(c.z0, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case T.FL.PLAYSTATION:
                                return (0, r.jsx)(c.Xj, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case T.FL.XBOX:
                                return (0, r.jsx)(c.YWd, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case T.FL.VR:
                                return (0, r.jsx)(a.VrHeadsetIcon, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            default:
                                return null;
                        }
                    })
                    .filter(y.Vq),
            [l],
        );
    if (!(null != n || o.length > 0)) return null;
    let u = null != n ? (0, C.C)(n) : D.intl.string(D.t["4dGUP0"]);
    return (0, r.jsxs)("div", {
        className: L.qr,
        children: [
            (0, r.jsx)("div", {
                className: L.E6,
                children: o.map((e, t) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: L.F2,
                            children: e,
                        },
                        t,
                    ),
                ),
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                className: L.kB,
                children: u,
            }),
        ],
    });
}

function k(e) {
    var t, n, a;
    let {
            message: s,
            application: y,
            applicationName: C,
            channel: T,
            header: N,
            currentUserId: k,
            launchableAppId: U,
            isEmbeddedApplication: G,
            tryWithGdnAction: B,
            staticBannerSrc: F,
            onClickContent: H,
            iconSrc: V,
            onView: z,
            presenceActivity: W,
            currentUserPresenceActivity: K,
            hideParty: Y,
            partyStatusElement: q,
            analyticsLocations: J,
            showAuthButton: Q,
            startAuthorization: Z,
            accountLinkButtonRef: X,
            renderAccountLinkUpsell: $,
        } = e,
        ee =
            null != (t = null == W || null == (n = W.timestamps) ? void 0 : n.start)
                ? t
                : null == W
                  ? void 0
                  : W.created_at,
        et = i.useMemo(() => {
            var e;
            return null != ee
                ? (0, r.jsxs)("div", {
                      className: L.Ym,
                      children: [
                          (0, r.jsx)(c._xR, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(g.z, {
                              entry: {
                                  start: ee,
                                  end: null == W || null == (e = W.timestamps) ? void 0 : e.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null;
        }, [ee, null == W || null == (a = W.timestamps) ? void 0 : a.end]),
        en = (0, E.v)(s),
        er = (0, b.s)(y.id),
        ei = i.useMemo(
            () =>
                er.some((e) => (0, h.CZ)(e) === l.m.GLOBAL)
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(c.Y3C, {
                                  size: "xxs",
                                  color: "currentColor",
                              }),
                              D.intl.string(D.t.TsWCdW),
                          ],
                      })
                    : null,
            [er],
        ),
        el = i.useMemo(
            () =>
                (0, r.jsxs)(c.Text, {
                    variant: "text-xs/normal",
                    className: L.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [en ? (0, v.YC)(s, C, T, k, !1) : et, en ? null : ei],
                }),
            [en, s, C, T, k, et, ei],
        ),
        ea = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: L.pq,
                    children: [el, Y || en ? null : q],
                }),
            [el, Y, en, q],
        ),
        es = (0, _.e)(y),
        { canJoin: eo, remoteJoinPlatform: ec } = (0, x.D)({
            presenceActivity: W,
            currentUserPresenceActivity: K,
            currentUserId: k,
            message: s,
            application: y,
            isEmbeddedApplication: G,
            isFrameApplication: es,
            isGameLaunchable: !!U,
        }),
        eu = (0, x.M)(W, K, s, y),
        ed = (0, O.E)(W, s, y, k),
        ep = (0, j.w)(K, W),
        em = (0, o.bG)(
            [A.A],
            () => null != W && null != W.application_id && A.A.getState(W.application_id, w.xL.JOIN) === w.eAD.LOADING,
        ),
        { actions: ef, hasAccountLinkButton: eg } = i.useMemo(() => {
            let e = null,
                t = !0,
                n = !1;
            eo
                ? (e = {
                      label: D.intl.string(D.t.VJlc0S),
                      trackingArea: f.kY.JOIN,
                      submitting: em,
                      onClick: () => {
                          var e, t;
                          d.A.join({
                              userId: s.author.id,
                              sessionId: W.session_id,
                              applicationId: W.application_id,
                              channelId: T.id,
                              messageId: s.id,
                              source: w.ThZ.MESSAGE_EMBED,
                              analyticsLocations: J,
                              embedded: (0, I.A)(W, w.jUm.EMBEDDED),
                              remotePartyId: null != ec ? (null == (e = W.party) ? void 0 : e.id) : void 0,
                          }),
                              (0, S.A)({
                                  type: w.UqL.JOIN,
                                  source: w.ThZ.MESSAGE_EMBED,
                                  userId: s.author.id,
                                  guildId: T.guild_id,
                                  channelId: T.id,
                                  applicationId: W.application_id,
                                  partyId: null == (t = W.party) ? void 0 : t.id,
                                  messageId: s.id,
                                  analyticsLocations: J,
                                  remoteJoinPlatform: ec,
                              });
                      },
                  })
                : eu
                  ? ((e = {
                        label: D.intl.string(D.t.VJlc0S),
                        trackingArea: f.kY.SYNC,
                        onClick: () => {
                            null != W && p.OH(W, s.author.id);
                        },
                    }),
                    (t = !1))
                  : ed
                    ? (e = {
                          label: D.intl.string(D.t["hC/Zey"]),
                          trackingArea: f.kY.INVITE,
                          onClick: () => {
                              null != W &&
                                  u.A.sendActivityInvite({
                                      type: w.xL.JOIN,
                                      channelId: T.id,
                                      activity: W,
                                      location: w.ThZ.MESSAGE_EMBED,
                                  });
                          },
                          disabled: s.author.id === k,
                          disabledReason: s.author.id === k ? D.intl.string(D.t.IBl8ID) : void 0,
                      })
                    : ep
                      ? (e = {
                            label: D.intl.string(D.t.KC26NR),
                            trackingArea: f.kY.PLAY,
                            onClick: () => {},
                            disabled: !0,
                        })
                      : null != B && ((e = B), (t = !1));
            let r = [];
            return (
                null != e &&
                    (r.push(e),
                    Q &&
                        t &&
                        (r.push({
                            label: D.intl.string(D.t.lw71Nf),
                            trackingArea: f.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                Z({
                                    analyticsLocations: J,
                                });
                            },
                            icon: c.A5T,
                            iconButton: !0,
                            buttonRef: X,
                        }),
                        (n = !0))),
                {
                    actions: r,
                    hasAccountLinkButton: n,
                }
            );
        }, [eo, eu, ed, ep, B, s.author.id, s.id, W, T.id, T.guild_id, J, ec, k, em, Q, Z, X]),
        eh = ef.some((e) => e.trackingArea === f.kY.CLOUD_PLAY);
    (0, P.A)(eh, J);
    let e_ = i.useMemo(
        () =>
            ep
                ? null
                : (0, r.jsx)(M, {
                      presenceActivity: W,
                      remoteJoinPlatform: ec,
                  }),
        [ep, W, ec],
    );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.h, {
                header: N,
                title: C,
                staticBannerSrc: F,
                onClickBanner: H,
                bannerAspectRatio: m.u.ACTIVITY,
                iconSrc: null != V ? V : void 0,
                info: ea,
                actions: ef,
                primaryActionFirst: !0,
                onClickContent: H,
                trackingConfig: {
                    id: y.id,
                    linkType: R.J.RICH_PRESENCE_INVITE,
                    onView: z,
                    referrerId: s.author.id,
                    guildId: T.guild_id,
                    channelId: s.channel_id,
                    messageId: s.id,
                },
                footer: e_,
            }),
            eg ? $() : null,
        ],
    });
}
