n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(17928),
    s = n(268218),
    d = n(776231),
    u = n(614269),
    h = n(829097),
    c = n(734057),
    m = n(401648),
    p = n(939249),
    g = n(734066),
    x = n(274372),
    A = n(794905),
    f = n(16590),
    y = n(985018),
    w = n(310882);
function C(e) {
    let { attachment: t, channelId: n, messageId: r } = e,
        { enableAdvancedSignals: a } = g.L_.useConfig({ location: "DistributedClipShareCTA" }),
        s = t.clip_remote_id,
        d = (0, o.bG)([x.A], () => (null != s ? x.A.getClipByRemoteId(s) : null)),
        { onShareClick: u } = (0, A.A)(n),
        h = (0, o.bG)([x.A], () => null != d && null != n && null != s && x.A.wasClipSharedInChannel(s, n)),
        c = l.useCallback(
            (e) => {
                null != d &&
                    (e.stopPropagation(), u({ clips: [d], messageReference: { channel_id: n, message_id: r } }));
            },
            [u, d, n, r],
        );
    return !a || null == d || h
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  " \xb7 ",
                  (0, i.jsx)(p.D, {
                      tag: "span",
                      className: w.s,
                      onClick: c,
                      children: y.intl.string(f.default.YKst58),
                  }),
              ],
          });
}
var I = n(696016),
    v = n(581874);
let j = (0, s.Fe)({
    createPromise: () =>
        Promise.all([n.e("99245"), n.e("57174"), n.e("84971"), n.e("30920"), n.e("78010"), n.e("91652")]).then(
            n.bind(n, 664111),
        ),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: v.Lq }),
});
function E(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: r,
            active: s = !1,
            autoPlay: p,
            src: g,
            embed: x = !1,
            fillContainer: A = !1,
            minWidth: f = 500,
            maxWidth: y = 1 / 0,
            maxHeight: w = 1 / 0,
            channelId: E,
            messageId: M,
            showTextContent: S = y >= 250,
            showParticipants: _ = !0,
            volume: N,
            autoMute: O,
            onVolumeChange: b,
            onMutedChange: P,
            onClick: V,
            onContextMenu: T,
        } = e,
        D = t.width ?? 0,
        L = t.height ?? 0,
        U = (0, o.bG)([c.A], () => c.A.getBasicChannel(E)?.guild_id, [E]),
        R = D > 0 && L > 0 ? D / L : 16 / 9,
        k = Math.min(D > 0 ? D : f, y),
        F = k / R;
    F > w && (k = (F = w) * R), k < f && (F = (k = f) / R);
    let H = Math.round(Math.min(k, y)),
        W = Math.round(Math.min(F, w)),
        G = D > 0 && L > 0 ? Math.min(H / D, W / L, 1) : 1,
        X = (0, d.AE)({ src: n, width: Math.round(D * G), height: Math.round(L * G) }),
        [z, B] = l.useState(!1),
        Y = (0, h._)({ location: I.Mu }).externalAnalyticsEnabled,
        Q = l.useMemo(
            () =>
                Y
                    ? {
                          contentId: g,
                          videoStreamType: u.u.isHlsUrl(g) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [Y, g, t.title],
        ),
        Z = l.useCallback(
            (e) => {
                let { playerState: n, isControlBarExpanded: l } = e;
                return (0, i.jsx)(m.A, {
                    createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                    participantIds: _
                        ? (t.clip_participants?.map((e) => {
                              let { id: t } = e;
                              return t;
                          }) ?? [])
                        : [],
                    applicationId: t.application?.id,
                    title: t.title,
                    guildId: U,
                    playerState: n,
                    isControlBarExpanded: l,
                    isFullScreen: z,
                    showTextContent: S,
                    shareCTA: null != M && null != E && (0, i.jsx)(C, { attachment: t, messageId: M, channelId: E }),
                });
            },
            [t, U, z, _, S, E, M],
        );
    return (0, i.jsx)("div", {
        className: a()(v.kL, { [v.HA]: A }, r),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: x ? (e) => e.stopPropagation() : void 0,
        onKeyDown: x ? (e) => e.stopPropagation() : void 0,
        onContextMenu: T,
        style: A ? void 0 : { width: H, height: W },
        children: (0, i.jsx)(j, {
            crossOrigin: null,
            src: g,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: X,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: s,
            autoplay: p,
            initialVolume: N,
            initialMuted: O,
            onVolumeChange: b,
            onMutedChange: P,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: Z,
            parentTransitionState: null,
            onFullscreenChange: B,
            onClick: V,
            withVideoHalo: !0,
            objectFit: A ? "cover" : void 0,
            muxContentMetadata: Q,
        }),
    });
}
