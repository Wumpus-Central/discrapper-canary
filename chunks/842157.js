n.d(t, { A: () => U }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(379834),
    r = n(934551),
    s = n(27989),
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
    f = n(205184),
    x = n(689168),
    E = n(403362),
    C = n(456060),
    I = n(131724),
    T = n(987709),
    v = n(850670),
    N = n(206589),
    S = n(154297),
    b = n(833349),
    y = n(946255),
    j = n(755420),
    R = n(877044),
    L = n(878831),
    M = n(652215),
    O = n(768349),
    P = n(985018),
    D = n(609653);
function k(e) {
    let { presenceActivity: t, remoteJoinPlatform: n } = e,
        a = (0, j.z4)({ platforms: t?.supported_platforms, currentPlatform: M.yTV.DESKTOP }),
        o = l.useMemo(
            () =>
                a
                    .map((e) => {
                        switch (e) {
                            case j.FL.MOBILE:
                                return (0, i.jsx)(d.u6o, { size: "xxs", color: "currentColor" });
                            case j.FL.ANDROID:
                                return (0, i.jsx)(R.x, { width: s.E.xxs, height: s.E.xxs, color: "currentColor" });
                            case j.FL.IOS:
                                return (0, i.jsx)(d.z0, { size: "xxs", color: "currentColor" });
                            case j.FL.PLAYSTATION:
                                return (0, i.jsx)(d.Xj, { size: "xxs", color: "currentColor" });
                            case j.FL.XBOX:
                                return (0, i.jsx)(d.YWd, { size: "xxs", color: "currentColor" });
                            case j.FL.VR:
                                return (0, i.jsx)(r.VrHeadsetIcon, { size: "xxs", color: "currentColor" });
                            default:
                                return null;
                        }
                    })
                    .filter(E.Vq),
            [a],
        );
    if (!(null != n || o.length > 0)) return null;
    let c = null != n ? (0, S.C)(n) : P.intl.string(P.t["4dGUP0"]);
    return (0, i.jsxs)("div", {
        className: D.qr,
        children: [
            (0, i.jsx)("div", {
                className: D.E6,
                children: o.map((e, t) => (0, i.jsx)("div", { className: D.F2, children: e }, t)),
            }),
            (0, i.jsx)(d.Text, { variant: "text-sm/medium", color: "currentColor", className: D.kB, children: c }),
        ],
    });
}
function U(e) {
    let {
            message: t,
            application: n,
            applicationName: r,
            channel: s,
            header: E,
            currentUserId: S,
            launchableAppId: j,
            isEmbeddedApplication: R,
            tryWithGdnAction: U,
            staticBannerSrc: w,
            onClickContent: G,
            iconSrc: B,
            onView: F,
            presenceActivity: H,
            currentUserPresenceActivity: V,
            hideParty: z,
            partyStatusElement: W,
            analyticsLocations: Y,
            showAuthButton: q,
            startAuthorization: K,
            accountLinkButtonRef: Q,
            renderAccountLinkUpsell: J,
        } = e,
        X = H?.timestamps?.start ?? H?.created_at,
        Z = l.useMemo(
            () =>
                null != X
                    ? (0, i.jsxs)("div", {
                          className: D.Ym,
                          children: [
                              (0, i.jsx)(d._xR, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(p.z, {
                                  entry: { start: X, end: H?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            [X, H?.timestamps?.end],
        ),
        $ = (0, v.v)(t),
        ee = (0, f.s)(n.id),
        et = l.useMemo(
            () =>
                ee.some((e) => (0, g.CZ)(e) === a.m.GLOBAL)
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(d.Y3C, { size: "xxs", color: "currentColor" }),
                              P.intl.string(P.t.TsWCdW),
                          ],
                      })
                    : null,
            [ee],
        ),
        en = l.useMemo(
            () =>
                (0, i.jsxs)(d.Text, {
                    variant: "text-xs/normal",
                    className: D.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [$ ? (0, C.YC)(t, r, s, S, !1) : Z, $ ? null : et],
                }),
            [$, t, r, s, S, Z, et],
        ),
        ei = l.useMemo(() => (0, i.jsxs)("div", { className: D.pq, children: [en, z || $ ? null : W] }), [en, z, $, W]),
        el = (0, A.e)(n),
        { canJoin: ea, remoteJoinPlatform: er } = (0, I.D)({
            presenceActivity: H,
            currentUserPresenceActivity: V,
            currentUserId: S,
            message: t,
            application: n,
            isEmbeddedApplication: R,
            isFrameApplication: el,
            isGameLaunchable: !!j,
        }),
        es = (0, I.M)(H, V, t, n),
        eo = (0, T.E)(H, t, n, S),
        ed = (0, N.w)(V, H),
        ec = (0, o.bG)(
            [x.A],
            () => null != H && null != H.application_id && x.A.getState(H.application_id, M.xL.JOIN) === M.eAD.LOADING,
        ),
        { actions: eu, hasAccountLinkButton: em } = l.useMemo(() => {
            let e = null,
                n = !0,
                i = !1;
            ea
                ? (e = {
                      label: P.intl.string(P.t.VJlc0S),
                      trackingArea: h.kY.JOIN,
                      submitting: ec,
                      onClick: () => {
                          u.A.join({
                              userId: t.author.id,
                              sessionId: H.session_id,
                              applicationId: H.application_id,
                              channelId: s.id,
                              messageId: t.id,
                              source: M.ThZ.MESSAGE_EMBED,
                              analyticsLocations: Y,
                              embedded: (0, b.A)(H, M.jUm.EMBEDDED),
                              remotePartyId: null != er ? H.party?.id : void 0,
                          }),
                              (0, y.A)({
                                  type: M.UqL.JOIN,
                                  source: M.ThZ.MESSAGE_EMBED,
                                  userId: t.author.id,
                                  guildId: s.guild_id,
                                  channelId: s.id,
                                  applicationId: H.application_id,
                                  partyId: H.party?.id,
                                  messageId: t.id,
                                  analyticsLocations: Y,
                                  remoteJoinPlatform: er,
                              });
                      },
                  })
                : es
                  ? ((e = {
                        label: P.intl.string(P.t.VJlc0S),
                        trackingArea: h.kY.SYNC,
                        onClick: () => {
                            null != H && m.OH(H, t.author.id);
                        },
                    }),
                    (n = !1))
                  : eo
                    ? (e = {
                          label: P.intl.string(P.t["hC/Zey"]),
                          trackingArea: h.kY.INVITE,
                          onClick: () => {
                              null != H &&
                                  c.A.sendActivityInvite({
                                      type: M.xL.JOIN,
                                      channelId: s.id,
                                      activity: H,
                                      location: M.ThZ.MESSAGE_EMBED,
                                  });
                          },
                          disabled: t.author.id === S,
                          disabledReason: t.author.id === S ? P.intl.string(P.t.IBl8ID) : void 0,
                      })
                    : ed
                      ? (e = {
                            label: P.intl.string(P.t.KC26NR),
                            trackingArea: h.kY.PLAY,
                            onClick: () => {},
                            disabled: !0,
                        })
                      : null != U && ((e = U), (n = !1));
            let l = [];
            return (
                null != e &&
                    (l.push(e),
                    q &&
                        n &&
                        (l.push({
                            label: P.intl.string(P.t.lw71Nf),
                            trackingArea: h.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                K({ analyticsLocations: Y });
                            },
                            icon: d.A5T,
                            iconButton: !0,
                            buttonRef: Q,
                        }),
                        (i = !0))),
                { actions: l, hasAccountLinkButton: i }
            );
        }, [ea, es, eo, ed, U, t.author.id, t.id, H, s.id, s.guild_id, Y, er, S, ec, q, K, Q]),
        e_ = eu.some((e) => e.trackingArea === h.kY.CLOUD_PLAY);
    (0, L.A)(e_, Y);
    let eh = l.useMemo(() => (ed ? null : (0, i.jsx)(k, { presenceActivity: H, remoteJoinPlatform: er })), [ed, H, er]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_.h, {
                header: E,
                title: r,
                staticBannerSrc: w,
                onClickBanner: G,
                bannerAspectRatio: _.u.ACTIVITY,
                iconSrc: B ?? void 0,
                info: ei,
                actions: eu,
                primaryActionFirst: !0,
                onClickContent: G,
                trackingConfig: {
                    id: n.id,
                    linkType: O.J.RICH_PRESENCE_INVITE,
                    onView: F,
                    referrerId: t.author.id,
                    guildId: s.guild_id,
                    channelId: t.channel_id,
                    messageId: t.id,
                },
                footer: eh,
            }),
            em ? J() : null,
        ],
    });
}
