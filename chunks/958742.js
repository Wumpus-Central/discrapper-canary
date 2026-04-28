n.d(t, { A: () => k });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    o = n.n(i),
    r = n(17928),
    s = n(268218),
    d = n(776231),
    c = n(614269),
    p = n(829097),
    u = n(734057),
    h = n(401648),
    m = n(939249),
    g = n(734066),
    C = n(274372),
    _ = n(794905),
    v = n(16590),
    A = n(985018),
    M = n(310882);
function y(e) {
    let { attachment: t, channelId: n, messageId: i } = e,
        { enableAdvancedSignals: o } = g.L_.useConfig({ location: "DistributedClipShareCTA" }),
        s = t.clip_remote_id,
        d = (0, r.bG)([C.A], () => (null != s ? C.A.getClipByRemoteId(s) : null)),
        { onShareClick: c } = (0, _.A)(n),
        p = (0, r.bG)([C.A], () => null != d && null != n && null != s && C.A.wasClipSharedInChannel(s, n)),
        u = a.useCallback(
            (e) => {
                null != d &&
                    (e.stopPropagation(), c({ clips: [d], messageReference: { channel_id: n, message_id: i } }));
            },
            [c, d, n, i],
        );
    return !o || null == d || p
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  " \xb7 ",
                  (0, l.jsx)(m.D, {
                      tag: "span",
                      className: M.s,
                      onClick: u,
                      children: A.intl.string(v.default.YKst58),
                  }),
              ],
          });
}
var b = n(696016),
    w = n(581874);
let x = (0, s.Fe)({
    createPromise: () =>
        Promise.all([n.e("19364"), n.e("57174"), n.e("84971"), n.e("30920"), n.e("78010"), n.e("91652")]).then(
            n.bind(n, 664111),
        ),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, l.jsx)("div", { className: w.Lq }),
});
function k(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: i,
            active: s = !1,
            autoPlay: m,
            src: g,
            embed: C = !1,
            fillContainer: _ = !1,
            minWidth: v = 500,
            maxWidth: A = 1 / 0,
            maxHeight: M = 1 / 0,
            channelId: k,
            messageId: P,
            showTextContent: I = A >= 250,
            showParticipants: j = !0,
            volume: S,
            autoMute: T,
            onVolumeChange: f,
            onMutedChange: D,
            onClick: F,
            onContextMenu: V,
        } = e,
        E = t.width ?? 0,
        L = t.height ?? 0,
        B = (0, r.bG)([u.A], () => u.A.getBasicChannel(k)?.guild_id, [k]),
        G = E > 0 && L > 0 ? E / L : 16 / 9,
        H = Math.min(E > 0 ? E : v, A),
        K = H / G;
    K > M && (H = (K = M) * G), H < v && (K = (H = v) / G);
    let N = Math.round(Math.min(H, A)),
        U = Math.round(Math.min(K, M)),
        O = E > 0 && L > 0 ? Math.min(N / E, U / L, 1) : 1,
        R = (0, d.AE)({ src: n, width: Math.round(E * O), height: Math.round(L * O) }),
        [q, Y] = a.useState(!1),
        z = (0, p._)({ location: b.Mu }).externalAnalyticsEnabled,
        J = a.useMemo(
            () =>
                z
                    ? {
                          contentId: g,
                          videoStreamType: c.u.isHlsUrl(g) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [z, g, t.title],
        ),
        Q = a.useCallback(
            (e) => {
                let { playerState: n, isControlBarExpanded: a } = e;
                return (0, l.jsx)(h.A, {
                    createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                    participantIds: j
                        ? (t.clip_participants?.map((e) => {
                              let { id: t } = e;
                              return t;
                          }) ?? [])
                        : [],
                    applicationId: t.application?.id,
                    title: t.title,
                    guildId: B,
                    playerState: n,
                    isControlBarExpanded: a,
                    isFullScreen: q,
                    showTextContent: I,
                    shareCTA: null != P && null != k && (0, l.jsx)(y, { attachment: t, messageId: P, channelId: k }),
                });
            },
            [t, B, q, j, I, k, P],
        );
    return (0, l.jsx)("div", {
        className: o()(w.kL, { [w.HA]: _ }, i),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: C ? (e) => e.stopPropagation() : void 0,
        onKeyDown: C ? (e) => e.stopPropagation() : void 0,
        onContextMenu: V,
        style: _ ? void 0 : { width: N, height: U },
        children: (0, l.jsx)(x, {
            crossOrigin: null,
            src: g,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: R,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: s,
            autoplay: m,
            initialVolume: S,
            initialMuted: T,
            onVolumeChange: f,
            onMutedChange: D,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: Q,
            parentTransitionState: null,
            onFullscreenChange: Y,
            onClick: F,
            withVideoHalo: !0,
            objectFit: _ ? "cover" : void 0,
            muxContentMetadata: J,
        }),
    });
}
