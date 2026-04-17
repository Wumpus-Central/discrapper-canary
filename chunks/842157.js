n.d(t, { A: () => U }), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(379834),
    r = n(934551),
    s = n(27989),
    o = n(311907),
    d = n(397927),
    c = n(308368),
    u = n(544420),
    _ = n(729937),
    m = n(572211),
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
    y = n(154297),
    S = n(467078),
    N = n(833349),
    j = n(946255),
    L = n(755420),
    R = n(877044),
    P = n(878831),
    w = n(652215),
    M = n(768349),
    D = n(985018),
    k = n(193018);
function O(e) {
    let { presenceActivity: t, remoteJoinPlatform: n, isGameLaunchable: l } = e,
        o = (0, L.z4)({ platforms: t?.supported_platforms, currentPlatform: w.yTV.DESKTOP, isGameLaunchable: l }),
        c = a.useMemo(
            () =>
                o
                    .map((e) => {
                        switch (e) {
                            case L.FL.MOBILE:
                                return (0, i.jsx)(d.u6o, { size: "xxs", color: "currentColor" });
                            case L.FL.ANDROID:
                                return (0, i.jsx)(R.x, { width: s.E.xxs, height: s.E.xxs, color: "currentColor" });
                            case L.FL.IOS:
                                return (0, i.jsx)(d.z0, { size: "xxs", color: "currentColor" });
                            case L.FL.PLAYSTATION:
                                return (0, i.jsx)(d.Xj, { size: "xxs", color: "currentColor" });
                            case L.FL.XBOX:
                                return (0, i.jsx)(d.YWd, { size: "xxs", color: "currentColor" });
                            case L.FL.VR:
                                return (0, i.jsx)(r.VrHeadsetIcon, { size: "xxs", color: "currentColor" });
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
    let u = null != n ? (0, y.C)(n) : D.intl.string(D.t["4dGUP0"]);
    return (0, i.jsxs)("div", {
        className: k.qr,
        children: [
            (0, i.jsx)("div", {
                className: k.E6,
                children: c.map((e, t) => (0, i.jsx)("div", { className: k.F2, children: e }, t)),
            }),
            (0, i.jsx)(d.Text, { variant: "text-sm/medium", color: "currentColor", className: k.kB, children: u }),
        ],
    });
}
function U(e) {
    let {
            message: t,
            application: n,
            applicationName: r,
            channel: s,
            header: C,
            currentUserId: y,
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
            partyStatusElement: z,
            analyticsLocations: Y,
            showAuthButton: Q,
            requireAccountLink: K,
            canPromptAuth: X,
            startAuthorization: J,
            accountLinkButtonRef: Z,
            renderAccountLinkUpsell: $,
        } = e,
        ee = V?.timestamps?.start ?? V?.created_at,
        et = a.useMemo(
            () =>
                null != ee
                    ? (0, i.jsxs)("div", {
                          className: k.Ym,
                          children: [
                              (0, i.jsx)(d._xR, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(p.z, {
                                  entry: { start: ee, end: V?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            [ee, V?.timestamps?.end],
        ),
        en = (0, b.v)(t),
        ei = (0, x.s)(n.id),
        ea = a.useMemo(
            () =>
                ei.some((e) => (0, g.CZ)(e) === l.m.GLOBAL)
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(d.Y3C, { size: "xxs", color: "currentColor" }),
                              D.intl.string(D.t.TsWCdW),
                          ],
                      })
                    : null,
            [ei],
        ),
        el = a.useMemo(
            () =>
                (0, i.jsxs)(d.Text, {
                    variant: "text-xs/normal",
                    className: k.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [en ? (0, E.YC)(t, r, s, y, !1) : et, en ? null : ea],
                }),
            [en, t, r, s, y, et, ea],
        ),
        er = a.useMemo(() => {
            let e = V?.details;
            return null == e || "" === e
                ? null
                : (0, i.jsx)(d.Text, { variant: "text-xs/normal", color: "none", lineClamp: 1, children: e });
        }, [V?.details]),
        es = a.useMemo(
            () => (0, i.jsxs)("div", { className: k.pq, children: [er, el, W || en ? null : z] }),
            [el, W, en, z, er],
        ),
        eo = !!L,
        ed = (0, A.e)(n),
        { canJoin: ec, remoteJoinPlatform: eu } = (0, I.D)({
            presenceActivity: V,
            currentUserPresenceActivity: q,
            currentUserId: y,
            message: t,
            application: n,
            isEmbeddedApplication: R,
            isFrameApplication: ed,
            isGameLaunchable: eo,
        }),
        e_ = (0, I.M)(V, q, t, n),
        em = (0, v.E)(V, t, n, y),
        eh = (0, T.w)(q, V),
        ep = (0, S.L)(V),
        eg = (0, o.bG)(
            [f.A],
            () => null != V && null != V.application_id && f.A.getState(V.application_id, w.xL.JOIN) === w.eAD.LOADING,
        ),
        { actions: eA, hasAccountLinkButton: ex } = a.useMemo(() => {
            let e = null,
                n = !0,
                i = !1;
            ec && K
                ? ((e = {
                      label: D.intl.string(D.t.lw71Nf),
                      trackingArea: h.kY.CONNECT_ACCOUNT,
                      onClick: () => {
                          J({ analyticsLocations: Y });
                      },
                  }),
                  (n = !1))
                : ec
                  ? (e = {
                        label: D.intl.string(D.t.VJlc0S),
                        trackingArea: h.kY.JOIN,
                        submitting: eg,
                        onClick: () => {
                            u.Ay.join({
                                userId: t.author.id,
                                sessionId: V.session_id,
                                applicationId: V.application_id,
                                channelId: s.id,
                                messageId: t.id,
                                source: w.ThZ.MESSAGE_EMBED,
                                analyticsLocations: Y,
                                embedded: (0, N.A)(V, w.jUm.EMBEDDED),
                                remotePartyId: null != eu ? V.party?.id : void 0,
                            }),
                                (0, j.A)({
                                    type: w.UqL.JOIN,
                                    source: w.ThZ.MESSAGE_EMBED,
                                    userId: t.author.id,
                                    guildId: s.guild_id,
                                    channelId: s.id,
                                    applicationId: V.application_id,
                                    partyId: V.party?.id,
                                    messageId: t.id,
                                    analyticsLocations: Y,
                                    remoteJoinPlatform: eu,
                                });
                        },
                    })
                  : ep && X
                    ? ((e = {
                          label: D.intl.string(D.t.lw71Nf),
                          trackingArea: h.kY.CONNECT_ACCOUNT,
                          onClick: () => {
                              J({ analyticsLocations: Y });
                          },
                      }),
                      (n = !1))
                    : e_
                      ? ((e = {
                            label: D.intl.string(D.t.VJlc0S),
                            trackingArea: h.kY.SYNC,
                            onClick: () => {
                                null != V && _.OH(V, t.author.id);
                            },
                        }),
                        (n = !1))
                      : em
                        ? (e = {
                              label: D.intl.string(D.t["hC/Zey"]),
                              trackingArea: h.kY.INVITE,
                              onClick: () => {
                                  null != V &&
                                      c.A.sendActivityInvite({
                                          type: w.xL.JOIN,
                                          channelId: s.id,
                                          activity: V,
                                          location: w.ThZ.MESSAGE_EMBED,
                                      });
                              },
                              disabled: t.author.id === y,
                              disabledReason: t.author.id === y ? D.intl.string(D.t.IBl8ID) : void 0,
                          })
                        : eh
                          ? (e = {
                                label: D.intl.string(D.t.KC26NR),
                                trackingArea: h.kY.PLAY,
                                onClick: () => {},
                                disabled: !0,
                            })
                          : null != U && ((e = U), (n = !1));
            let a = [];
            return (
                null != e &&
                    (a.push(e),
                    Q &&
                        n &&
                        (a.push({
                            label: D.intl.string(D.t.lw71Nf),
                            trackingArea: h.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                J({ analyticsLocations: Y });
                            },
                            icon: d.A5T,
                            iconButton: !0,
                            buttonRef: Z,
                        }),
                        (i = !0))),
                { actions: a, hasAccountLinkButton: i }
            );
        }, [ec, K, e_, em, eh, U, t.author.id, t.id, V, s.id, s.guild_id, Y, eu, y, eg, Q, J, Z, X, ep]),
        ef = eA.some((e) => e.trackingArea === h.kY.CLOUD_PLAY);
    (0, P.A)(ef, Y);
    let eC = a.useMemo(
        () => (eh ? null : (0, i.jsx)(O, { presenceActivity: V, remoteJoinPlatform: eu, isGameLaunchable: eo })),
        [eh, V, eu, eo],
    );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.h, {
                header: C,
                title: r,
                staticBannerSrc: B,
                onClickBanner: G,
                bannerAspectRatio: m.u.ACTIVITY,
                iconSrc: F ?? void 0,
                info: es,
                actions: eA,
                primaryActionFirst: !0,
                onClickContent: G,
                trackingConfig: {
                    id: n.id,
                    linkType: M.J.RICH_PRESENCE_INVITE,
                    onView: H,
                    referrerId: t.author.id,
                    guildId: s.guild_id,
                    channelId: t.channel_id,
                    messageId: t.id,
                },
                footer: eC,
            }),
            ex ? $() : null,
        ],
    });
}
