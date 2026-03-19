n.d(t, { A: () => U }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(379834),
    l = n(934551),
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
    I = n(456060),
    E = n(131724),
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
    M = n(652215),
    w = n(768349),
    D = n(985018),
    k = n(62323);
function O(e) {
    let { presenceActivity: t, remoteJoinPlatform: n, isGameLaunchable: a } = e,
        o = (0, L.z4)({ platforms: t?.supported_platforms, currentPlatform: M.yTV.DESKTOP, isGameLaunchable: a }),
        c = r.useMemo(
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
                                return (0, i.jsx)(l.VrHeadsetIcon, { size: "xxs", color: "currentColor" });
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
            applicationName: l,
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
            canPromptAuth: K,
            startAuthorization: J,
            accountLinkButtonRef: X,
            renderAccountLinkUpsell: Z,
        } = e,
        $ = V?.timestamps?.start ?? V?.created_at,
        ee = r.useMemo(
            () =>
                null != $
                    ? (0, i.jsxs)("div", {
                          className: k.Ym,
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
        ei = r.useMemo(
            () =>
                en.some((e) => (0, g.CZ)(e) === a.m.GLOBAL)
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(d.Y3C, { size: "xxs", color: "currentColor" }),
                              D.intl.string(D.t.TsWCdW),
                          ],
                      })
                    : null,
            [en],
        ),
        er = r.useMemo(
            () =>
                (0, i.jsxs)(d.Text, {
                    variant: "text-xs/normal",
                    className: k.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [et ? (0, I.YC)(t, l, s, y, !1) : ee, et ? null : ei],
                }),
            [et, t, l, s, y, ee, ei],
        ),
        ea = r.useMemo(
            () => (0, i.jsxs)("div", { className: k.pq, children: [er, W || et ? null : z] }),
            [er, W, et, z],
        ),
        el = !!L,
        es = (0, A.e)(n),
        { canJoin: eo, remoteJoinPlatform: ed } = (0, E.D)({
            presenceActivity: V,
            currentUserPresenceActivity: q,
            currentUserId: y,
            message: t,
            application: n,
            isEmbeddedApplication: R,
            isFrameApplication: es,
            isGameLaunchable: el,
        }),
        ec = (0, E.M)(V, q, t, n),
        eu = (0, v.E)(V, t, n, y),
        e_ = (0, T.w)(q, V),
        em = (0, S.L)(V),
        eh = (0, o.bG)(
            [f.A],
            () => null != V && null != V.application_id && f.A.getState(V.application_id, M.xL.JOIN) === M.eAD.LOADING,
        ),
        { actions: ep, hasAccountLinkButton: eg } = r.useMemo(() => {
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
                              analyticsLocations: Y,
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
                                  analyticsLocations: Y,
                                  remoteJoinPlatform: ed,
                              });
                      },
                  })
                : em && K
                  ? ((e = {
                        label: D.intl.string(D.t.lw71Nf),
                        trackingArea: h.kY.CONNECT_ACCOUNT,
                        onClick: () => {
                            J({ analyticsLocations: Y });
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
                            disabled: t.author.id === y,
                            disabledReason: t.author.id === y ? D.intl.string(D.t.IBl8ID) : void 0,
                        })
                      : e_
                        ? (e = {
                              label: D.intl.string(D.t.KC26NR),
                              trackingArea: h.kY.PLAY,
                              onClick: () => {},
                              disabled: !0,
                          })
                        : null != U && ((e = U), (n = !1));
            let r = [];
            return (
                null != e &&
                    (r.push(e),
                    Q &&
                        n &&
                        (r.push({
                            label: D.intl.string(D.t.lw71Nf),
                            trackingArea: h.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                J({ analyticsLocations: Y });
                            },
                            icon: d.A5T,
                            iconButton: !0,
                            buttonRef: X,
                        }),
                        (i = !0))),
                { actions: r, hasAccountLinkButton: i }
            );
        }, [eo, ec, eu, e_, U, t.author.id, t.id, V, s.id, s.guild_id, Y, ed, y, eh, Q, J, X, K, em]),
        eA = ep.some((e) => e.trackingArea === h.kY.CLOUD_PLAY);
    (0, P.A)(eA, Y);
    let ex = r.useMemo(
        () => (e_ ? null : (0, i.jsx)(O, { presenceActivity: V, remoteJoinPlatform: ed, isGameLaunchable: el })),
        [e_, V, ed, el],
    );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.h, {
                header: C,
                title: l,
                staticBannerSrc: B,
                onClickBanner: G,
                bannerAspectRatio: m.u.ACTIVITY,
                iconSrc: F ?? void 0,
                info: ea,
                actions: ep,
                primaryActionFirst: !0,
                onClickContent: G,
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
