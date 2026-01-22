n.d(t, { A: () => k }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(379834),
    s = n(934551),
    o = n(27989),
    l = n(311907),
    c = n(397927),
    u = n(308368),
    d = n(544420),
    f = n(729937),
    p = n(572211),
    _ = n(354287),
    h = n(693879),
    m = n(583846),
    g = n(207371),
    E = n(205184),
    b = n(689168),
    y = n(403362),
    O = n(456060),
    A = n(131724),
    v = n(987709),
    S = n(850670),
    I = n(206589),
    T = n(154297),
    C = n(833349),
    N = n(946255),
    R = n(755420),
    w = n(877044),
    P = n(878831),
    D = n(652215),
    x = n(768349),
    L = n(985018),
    j = n(609653);
function M(e) {
    let { presenceActivity: t, remoteJoinPlatform: n } = e,
        a = (0, R.z4)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: D.yTV.DESKTOP,
        }),
        l = i.useMemo(
            () =>
                a
                    .map((e) => {
                        switch (e) {
                            case R.FL.MOBILE:
                                return (0, r.jsx)(c.u6o, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case R.FL.ANDROID:
                                return (0, r.jsx)(w.x, {
                                    width: o.E.xxs,
                                    height: o.E.xxs,
                                    color: "currentColor",
                                });
                            case R.FL.IOS:
                                return (0, r.jsx)(c.z0, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case R.FL.PLAYSTATION:
                                return (0, r.jsx)(c.Xj, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case R.FL.XBOX:
                                return (0, r.jsx)(c.YWd, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case R.FL.VR:
                                return (0, r.jsx)(s.VrHeadsetIcon, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            default:
                                return null;
                        }
                    })
                    .filter(y.Vq),
            [a],
        );
    if (!(null != n || l.length > 0)) return null;
    let u = null != n ? (0, T.C)(n) : L.intl.string(L.t["4dGUP0"]);
    return (0, r.jsxs)("div", {
        className: j.qr,
        children: [
            (0, r.jsx)("div", {
                className: j.E6,
                children: l.map((e, t) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: j.F2,
                            children: e,
                        },
                        t,
                    ),
                ),
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                className: j.kB,
                children: u,
            }),
        ],
    });
}
function k(e) {
    var t, n, s;
    let {
            message: o,
            application: y,
            applicationName: T,
            channel: R,
            header: w,
            currentUserId: k,
            launchableAppId: U,
            isEmbeddedApplication: G,
            tryWithGdnAction: V,
            staticBannerSrc: F,
            onClickContent: B,
            iconSrc: H,
            onView: Y,
            presenceActivity: W,
            currentUserPresenceActivity: K,
            hideParty: z,
            partyStatusElement: q,
            analyticsLocations: X,
            showAuthButton: Z,
            startAuthorization: Q,
            accountLinkButtonRef: $,
            renderAccountLinkUpsell: J,
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
                      className: j.Ym,
                      children: [
                          (0, r.jsx)(c._xR, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(h.z, {
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
        }, [ee, null == W || null == (s = W.timestamps) ? void 0 : s.end]),
        en = (0, S.v)(o),
        er = (0, E.s)(y.id),
        ei = i.useMemo(
            () =>
                er.some((e) => (0, m.CZ)(e) === a.m.GLOBAL)
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(c.Y3C, {
                                  size: "xxs",
                                  color: "currentColor",
                              }),
                              L.intl.string(L.t.TsWCdW),
                          ],
                      })
                    : null,
            [er],
        ),
        ea = i.useMemo(
            () =>
                (0, r.jsxs)(c.Text, {
                    variant: "text-xs/normal",
                    className: j.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [en ? (0, O.YC)(o, T, R, k, !1) : et, en ? null : ei],
                }),
            [en, o, T, R, k, et, ei],
        ),
        es = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: j.pq,
                    children: [ea, z || en ? null : q],
                }),
            [ea, z, en, q],
        ),
        eo = !!U,
        el = (0, g.e)(y),
        { canJoin: ec, remoteJoinPlatform: eu } = (0, A.D)({
            presenceActivity: W,
            currentUserPresenceActivity: K,
            currentUserId: k,
            message: o,
            application: y,
            isEmbeddedApplication: G,
            isFrameApplication: el,
            isGameLaunchable: eo,
        }),
        ed = (0, A.M)(W, K, o, y),
        ef = (0, v.E)(W, o, y, k),
        ep = (0, I.w)(K, W),
        e_ = (0, l.bG)(
            [b.A],
            () => null != W && null != W.application_id && b.A.getState(W.application_id, D.xL.JOIN) === D.eAD.LOADING,
        ),
        { actions: eh, hasAccountLinkButton: em } = i.useMemo(() => {
            let e = null,
                t = !0,
                n = !1;
            ec
                ? (e = {
                      label: L.intl.string(L.t.VJlc0S),
                      trackingArea: _.kY.JOIN,
                      submitting: e_,
                      onClick: () => {
                          var e, t;
                          d.A.join({
                              userId: o.author.id,
                              sessionId: W.session_id,
                              applicationId: W.application_id,
                              channelId: R.id,
                              messageId: o.id,
                              source: D.ThZ.MESSAGE_EMBED,
                              analyticsLocations: X,
                              embedded: (0, C.A)(W, D.jUm.EMBEDDED),
                              remotePartyId: null != eu ? (null == (e = W.party) ? void 0 : e.id) : void 0,
                          }),
                              (0, N.A)({
                                  type: D.UqL.JOIN,
                                  source: D.ThZ.MESSAGE_EMBED,
                                  userId: o.author.id,
                                  guildId: R.guild_id,
                                  channelId: R.id,
                                  applicationId: W.application_id,
                                  partyId: null == (t = W.party) ? void 0 : t.id,
                                  messageId: o.id,
                                  analyticsLocations: X,
                                  remoteJoinPlatform: eu,
                              });
                      },
                  })
                : ed
                  ? ((e = {
                        label: L.intl.string(L.t.VJlc0S),
                        trackingArea: _.kY.SYNC,
                        onClick: () => {
                            null != W && f.OH(W, o.author.id);
                        },
                    }),
                    (t = !1))
                  : ef
                    ? (e = {
                          label: L.intl.string(L.t["hC/Zey"]),
                          trackingArea: _.kY.INVITE,
                          onClick: () => {
                              null != W &&
                                  u.A.sendActivityInvite({
                                      type: D.xL.JOIN,
                                      channelId: R.id,
                                      activity: W,
                                      location: D.ThZ.MESSAGE_EMBED,
                                  });
                          },
                          disabled: o.author.id === k,
                          disabledReason: o.author.id === k ? L.intl.string(L.t.IBl8ID) : void 0,
                      })
                    : ep
                      ? (e = {
                            label: L.intl.string(L.t.KC26NR),
                            trackingArea: _.kY.PLAY,
                            onClick: () => {},
                            disabled: !0,
                        })
                      : null != V && ((e = V), (t = !1));
            let r = [];
            return (
                null != e &&
                    (r.push(e),
                    Z &&
                        t &&
                        (r.push({
                            label: L.intl.string(L.t.lw71Nf),
                            trackingArea: _.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                Q({ analyticsLocations: X });
                            },
                            icon: c.A5T,
                            iconButton: !0,
                            buttonRef: $,
                        }),
                        (n = !0))),
                {
                    actions: r,
                    hasAccountLinkButton: n,
                }
            );
        }, [ec, ed, ef, ep, V, o.author.id, o.id, W, R.id, R.guild_id, X, eu, k, e_, Z, Q, $]),
        eg = eh.some((e) => e.trackingArea === _.kY.CLOUD_PLAY);
    (0, P.A)(eg, X);
    let eE = i.useMemo(
        () =>
            ep
                ? null
                : (0, r.jsx)(M, {
                      presenceActivity: W,
                      remoteJoinPlatform: eu,
                  }),
        [ep, W, eu],
    );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.h, {
                header: w,
                title: T,
                staticBannerSrc: F,
                onClickBanner: B,
                bannerAspectRatio: p.u.ACTIVITY,
                iconSrc: null != H ? H : void 0,
                info: es,
                actions: eh,
                primaryActionFirst: !0,
                onClickContent: B,
                trackingConfig: {
                    id: y.id,
                    linkType: x.J.RICH_PRESENCE_INVITE,
                    onView: Y,
                    referrerId: o.author.id,
                    guildId: R.guild_id,
                    channelId: o.channel_id,
                    messageId: o.id,
                },
                footer: eE,
            }),
            em ? J() : null,
        ],
    });
}
