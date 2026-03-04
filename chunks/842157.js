n.d(t, { A: () => U }), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(379834),
    a = n(934551),
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
    b = n(987709),
    T = n(850670),
    v = n(206589),
    S = n(154297),
    y = n(467078),
    N = n(833349),
    j = n(946255),
    L = n(755420),
    R = n(877044),
    P = n(878831),
    M = n(652215),
    w = n(768349),
    D = n(985018),
    O = n(609653);
function k(e) {
    let { presenceActivity: t, remoteJoinPlatform: n, isGameLaunchable: r } = e,
        o = (0, L.z4)({ platforms: t?.supported_platforms, currentPlatform: M.yTV.DESKTOP, isGameLaunchable: r }),
        c = l.useMemo(
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
                                return (0, i.jsx)(a.VrHeadsetIcon, { size: "xxs", color: "currentColor" });
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
    let u = null != n ? (0, S.C)(n) : D.intl.string(D.t["4dGUP0"]);
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
            applicationName: a,
            channel: s,
            header: C,
            currentUserId: S,
            launchableAppId: L,
            isEmbeddedApplication: R,
            tryWithGdnAction: U,
            staticBannerSrc: G,
            onClickContent: B,
            iconSrc: F,
            onView: H,
            presenceActivity: V,
            currentUserPresenceActivity: W,
            hideParty: q,
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
        et = (0, T.v)(t),
        en = (0, x.s)(n.id),
        ei = l.useMemo(
            () =>
                en.some((e) => (0, g.CZ)(e) === r.m.GLOBAL)
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(d.Y3C, { size: "xxs", color: "currentColor" }),
                              D.intl.string(D.t.TsWCdW),
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
                    children: [et ? (0, E.YC)(t, a, s, S, !1) : ee, et ? null : ei],
                }),
            [et, t, a, s, S, ee, ei],
        ),
        er = l.useMemo(
            () => (0, i.jsxs)("div", { className: O.pq, children: [el, q || et ? null : Y] }),
            [el, q, et, Y],
        ),
        ea = !!L,
        es = (0, A.e)(n),
        { canJoin: eo, remoteJoinPlatform: ed } = (0, I.D)({
            presenceActivity: V,
            currentUserPresenceActivity: W,
            currentUserId: S,
            message: t,
            application: n,
            isEmbeddedApplication: R,
            isFrameApplication: es,
            isGameLaunchable: ea,
        }),
        ec = (0, I.M)(V, W, t, n),
        eu = (0, b.E)(V, t, n, S),
        e_ = (0, v.w)(W, V),
        em = (0, y.L)(V),
        eh = (0, o.bG)(
            [f.A],
            () => null != V && null != V.application_id && f.A.getState(V.application_id, M.xL.JOIN) === M.eAD.LOADING,
        ),
        { actions: ep, hasAccountLinkButton: eg } = l.useMemo(() => {
            let e = null,
                n = !0,
                i = !1;
            eo
                ? (e = {
                      label: D.intl.string(D.t.VJlc0S),
                      trackingArea: h.kY.JOIN,
                      submitting: eh,
                      onClick: () => {
                          u.A.join({
                              userId: t.author.id,
                              sessionId: V.session_id,
                              applicationId: V.application_id,
                              channelId: s.id,
                              messageId: t.id,
                              source: M.ThZ.MESSAGE_EMBED,
                              analyticsLocations: z,
                              embedded: (0, N.A)(V, M.jUm.EMBEDDED),
                              remotePartyId: null != ed ? V.party?.id : void 0,
                          }),
                              (0, j.A)({
                                  type: M.UqL.JOIN,
                                  source: M.ThZ.MESSAGE_EMBED,
                                  userId: t.author.id,
                                  guildId: s.guild_id,
                                  channelId: s.id,
                                  applicationId: V.application_id,
                                  partyId: V.party?.id,
                                  messageId: t.id,
                                  analyticsLocations: z,
                                  remoteJoinPlatform: ed,
                              });
                      },
                  })
                : em && K
                  ? ((e = {
                        label: D.intl.string(D.t.lw71Nf),
                        trackingArea: h.kY.CONNECT_ACCOUNT,
                        onClick: () => {
                            J({ analyticsLocations: z });
                        },
                    }),
                    (n = !1))
                  : ec
                    ? ((e = {
                          label: D.intl.string(D.t.VJlc0S),
                          trackingArea: h.kY.SYNC,
                          onClick: () => {
                              null != V && _.OH(V, t.author.id);
                          },
                      }),
                      (n = !1))
                    : eu
                      ? (e = {
                            label: D.intl.string(D.t["hC/Zey"]),
                            trackingArea: h.kY.INVITE,
                            onClick: () => {
                                null != V &&
                                    c.A.sendActivityInvite({
                                        type: M.xL.JOIN,
                                        channelId: s.id,
                                        activity: V,
                                        location: M.ThZ.MESSAGE_EMBED,
                                    });
                            },
                            disabled: t.author.id === S,
                            disabledReason: t.author.id === S ? D.intl.string(D.t.IBl8ID) : void 0,
                        })
                      : e_
                        ? (e = {
                              label: D.intl.string(D.t.KC26NR),
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
                            label: D.intl.string(D.t.lw71Nf),
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
        }, [eo, ec, eu, e_, U, t.author.id, t.id, V, s.id, s.guild_id, z, ed, S, eh, Q, J, X, K, em]),
        eA = ep.some((e) => e.trackingArea === h.kY.CLOUD_PLAY);
    (0, P.A)(eA, z);
    let ex = l.useMemo(
        () => (e_ ? null : (0, i.jsx)(k, { presenceActivity: V, remoteJoinPlatform: ed, isGameLaunchable: ea })),
        [e_, V, ed, ea],
    );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.h, {
                header: C,
                title: a,
                staticBannerSrc: G,
                onClickBanner: B,
                bannerAspectRatio: m.u.ACTIVITY,
                iconSrc: F ?? void 0,
                info: er,
                actions: ep,
                primaryActionFirst: !0,
                onClickContent: B,
                trackingConfig: {
                    id: n.id,
                    linkType: w.J.RICH_PRESENCE_INVITE,
                    onView: H,
                    referrerId: t.author.id,
                    guildId: s.guild_id,
                    channelId: t.channel_id,
                    messageId: t.id,
                },
                footer: ex,
            }),
            eg ? Z() : null,
        ],
    });
}
