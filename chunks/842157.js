n.d(t, { A: () => O }), n(321073);
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
    y = n(833349),
    N = n(946255),
    j = n(755420),
    L = n(877044),
    R = n(878831),
    P = n(652215),
    M = n(768349),
    w = n(985018),
    D = n(609653);
function k(e) {
    let { presenceActivity: t, remoteJoinPlatform: n } = e,
        r = (0, j.z4)({ platforms: t?.supported_platforms, currentPlatform: P.yTV.DESKTOP }),
        o = l.useMemo(
            () =>
                r
                    .map((e) => {
                        switch (e) {
                            case j.FL.MOBILE:
                                return (0, i.jsx)(d.u6o, { size: "xxs", color: "currentColor" });
                            case j.FL.ANDROID:
                                return (0, i.jsx)(L.x, { width: s.E.xxs, height: s.E.xxs, color: "currentColor" });
                            case j.FL.IOS:
                                return (0, i.jsx)(d.z0, { size: "xxs", color: "currentColor" });
                            case j.FL.PLAYSTATION:
                                return (0, i.jsx)(d.Xj, { size: "xxs", color: "currentColor" });
                            case j.FL.XBOX:
                                return (0, i.jsx)(d.YWd, { size: "xxs", color: "currentColor" });
                            case j.FL.VR:
                                return (0, i.jsx)(a.VrHeadsetIcon, { size: "xxs", color: "currentColor" });
                            default:
                                return null;
                        }
                    })
                    .filter(C.Vq),
            [r],
        );
    if (!(null != n || o.length > 0)) return null;
    let c = null != n ? (0, S.C)(n) : w.intl.string(w.t["4dGUP0"]);
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
function O(e) {
    let {
            message: t,
            application: n,
            applicationName: a,
            channel: s,
            header: C,
            currentUserId: S,
            launchableAppId: j,
            isEmbeddedApplication: L,
            tryWithGdnAction: O,
            staticBannerSrc: U,
            onClickContent: B,
            iconSrc: G,
            onView: F,
            presenceActivity: H,
            currentUserPresenceActivity: V,
            hideParty: W,
            partyStatusElement: q,
            analyticsLocations: Y,
            showAuthButton: z,
            startAuthorization: Q,
            accountLinkButtonRef: K,
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
        $ = (0, T.v)(t),
        ee = (0, x.s)(n.id),
        et = l.useMemo(
            () =>
                ee.some((e) => (0, g.CZ)(e) === r.m.GLOBAL)
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(d.Y3C, { size: "xxs", color: "currentColor" }),
                              w.intl.string(w.t.TsWCdW),
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
                    children: [$ ? (0, E.YC)(t, a, s, S, !1) : Z, $ ? null : et],
                }),
            [$, t, a, s, S, Z, et],
        ),
        ei = l.useMemo(() => (0, i.jsxs)("div", { className: D.pq, children: [en, W || $ ? null : q] }), [en, W, $, q]),
        el = (0, A.e)(n),
        { canJoin: er, remoteJoinPlatform: ea } = (0, I.D)({
            presenceActivity: H,
            currentUserPresenceActivity: V,
            currentUserId: S,
            message: t,
            application: n,
            isEmbeddedApplication: L,
            isFrameApplication: el,
            isGameLaunchable: !!j,
        }),
        es = (0, I.M)(H, V, t, n),
        eo = (0, b.E)(H, t, n, S),
        ed = (0, v.w)(V, H),
        ec = (0, o.bG)(
            [f.A],
            () => null != H && null != H.application_id && f.A.getState(H.application_id, P.xL.JOIN) === P.eAD.LOADING,
        ),
        { actions: eu, hasAccountLinkButton: e_ } = l.useMemo(() => {
            let e = null,
                n = !0,
                i = !1;
            er
                ? (e = {
                      label: w.intl.string(w.t.VJlc0S),
                      trackingArea: h.kY.JOIN,
                      submitting: ec,
                      onClick: () => {
                          u.A.join({
                              userId: t.author.id,
                              sessionId: H.session_id,
                              applicationId: H.application_id,
                              channelId: s.id,
                              messageId: t.id,
                              source: P.ThZ.MESSAGE_EMBED,
                              analyticsLocations: Y,
                              embedded: (0, y.A)(H, P.jUm.EMBEDDED),
                              remotePartyId: null != ea ? H.party?.id : void 0,
                          }),
                              (0, N.A)({
                                  type: P.UqL.JOIN,
                                  source: P.ThZ.MESSAGE_EMBED,
                                  userId: t.author.id,
                                  guildId: s.guild_id,
                                  channelId: s.id,
                                  applicationId: H.application_id,
                                  partyId: H.party?.id,
                                  messageId: t.id,
                                  analyticsLocations: Y,
                                  remoteJoinPlatform: ea,
                              });
                      },
                  })
                : es
                  ? ((e = {
                        label: w.intl.string(w.t.VJlc0S),
                        trackingArea: h.kY.SYNC,
                        onClick: () => {
                            null != H && _.OH(H, t.author.id);
                        },
                    }),
                    (n = !1))
                  : eo
                    ? (e = {
                          label: w.intl.string(w.t["hC/Zey"]),
                          trackingArea: h.kY.INVITE,
                          onClick: () => {
                              null != H &&
                                  c.A.sendActivityInvite({
                                      type: P.xL.JOIN,
                                      channelId: s.id,
                                      activity: H,
                                      location: P.ThZ.MESSAGE_EMBED,
                                  });
                          },
                          disabled: t.author.id === S,
                          disabledReason: t.author.id === S ? w.intl.string(w.t.IBl8ID) : void 0,
                      })
                    : ed
                      ? (e = {
                            label: w.intl.string(w.t.KC26NR),
                            trackingArea: h.kY.PLAY,
                            onClick: () => {},
                            disabled: !0,
                        })
                      : null != O && ((e = O), (n = !1));
            let l = [];
            return (
                null != e &&
                    (l.push(e),
                    z &&
                        n &&
                        (l.push({
                            label: w.intl.string(w.t.lw71Nf),
                            trackingArea: h.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                Q({ analyticsLocations: Y });
                            },
                            icon: d.A5T,
                            iconButton: !0,
                            buttonRef: K,
                        }),
                        (i = !0))),
                { actions: l, hasAccountLinkButton: i }
            );
        }, [er, es, eo, ed, O, t.author.id, t.id, H, s.id, s.guild_id, Y, ea, S, ec, z, Q, K]),
        em = eu.some((e) => e.trackingArea === h.kY.CLOUD_PLAY);
    (0, R.A)(em, Y);
    let eh = l.useMemo(() => (ed ? null : (0, i.jsx)(k, { presenceActivity: H, remoteJoinPlatform: ea })), [ed, H, ea]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.h, {
                header: C,
                title: a,
                staticBannerSrc: U,
                onClickBanner: B,
                bannerAspectRatio: m.u.ACTIVITY,
                iconSrc: G ?? void 0,
                info: ei,
                actions: eu,
                primaryActionFirst: !0,
                onClickContent: B,
                trackingConfig: {
                    id: n.id,
                    linkType: M.J.RICH_PRESENCE_INVITE,
                    onView: F,
                    referrerId: t.author.id,
                    guildId: s.guild_id,
                    channelId: t.channel_id,
                    messageId: t.id,
                },
                footer: eh,
            }),
            e_ ? J() : null,
        ],
    });
}
