t.d(n, { A: () => T });
var i = t(627968),
    a = t(64700),
    l = t(503698),
    d = t.n(l),
    r = t(17928),
    o = t(268218),
    s = t(776231),
    c = t(614269),
    u = t(829097),
    h = t(734057),
    m = t(401648),
    p = t(939249),
    _ = t(734066),
    b = t(274372),
    f = t(794905),
    g = t(16590),
    A = t(985018),
    S = t(310882);
function C(e) {
    let { attachment: n, channelId: t, messageId: l } = e,
        { enableAdvancedSignals: d } = _.L_.useConfig({ location: "DistributedClipShareCTA" }),
        o = n.clip_remote_id,
        s = (0, r.bG)([b.A], () => (null != o ? b.A.getClipByRemoteId(o) : null)),
        { onShareClick: c } = (0, f.A)(t),
        u = (0, r.bG)([b.A], () => null != s && null != t && null != o && b.A.wasClipSharedInChannel(o, t)),
        h = a.useCallback(
            (e) => {
                null != s &&
                    (e.stopPropagation(), c({ clips: [s], messageReference: { channel_id: t, message_id: l } }));
            },
            [c, s, t, l],
        );
    return !d || null == s || u
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  " \xb7 ",
                  (0, i.jsx)(p.D, {
                      tag: "span",
                      className: S.s,
                      onClick: h,
                      children: A.intl.string(g.default.YKst58),
                  }),
              ],
          });
}
var E = t(696016),
    y = t(581874);
let w = (0, o.Fe)({
    createPromise: () => Promise.all([t.e("57174"), t.e("91652"), t.e("43420")]).then(t.bind(t, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: y.Lq }),
});
function T(e) {
    let {
            attachment: n,
            posterUrl: t,
            className: l,
            active: o = !1,
            autoPlay: p,
            src: _,
            embed: b = !1,
            fillContainer: f = !1,
            minWidth: g = 500,
            maxWidth: A = 1 / 0,
            maxHeight: S = 1 / 0,
            channelId: T,
            messageId: v,
            showTextContent: M = A >= 250,
            showParticipants: k = !0,
            volume: R,
            autoMute: x,
            onVolumeChange: H,
            onMutedChange: P,
            onClick: D,
            onContextMenu: I,
        } = e,
        O = n.width ?? 0,
        L = n.height ?? 0,
        j = (0, r.bG)([h.A], () => h.A.getBasicChannel(T)?.guild_id, [T]),
        F = O > 0 && L > 0 ? O / L : 16 / 9,
        N = Math.min(O > 0 ? O : g, A),
        W = N / F;
    W > S && (N = (W = S) * F), N < g && (W = (N = g) / F);
    let G = Math.round(Math.min(N, A)),
        U = Math.round(Math.min(W, S)),
        K = O > 0 && L > 0 ? Math.min(G / O, U / L, 1) : 1,
        B = (0, s.AE)({ src: t, width: Math.round(O * K), height: Math.round(L * K) }),
        [q, z] = a.useState(!1),
        V = (0, u._)({ location: E.Mu }).externalAnalyticsEnabled,
        J = a.useMemo(
            () =>
                V
                    ? {
                          contentId: _,
                          videoStreamType: c.u.isHlsUrl(_) ? "hls" : "mp4",
                          contentType: "clips",
                          title: n.title,
                      }
                    : void 0,
            [V, _, n.title],
        ),
        Q = a.useCallback(
            (e) => {
                let { playerState: t, isControlBarExpanded: a } = e;
                return (0, i.jsx)(m.A, {
                    createdAt: null != n.clip_created_at ? Date.parse(n.clip_created_at) : void 0,
                    participantIds: k
                        ? (n.clip_participants?.map((e) => {
                              let { id: n } = e;
                              return n;
                          }) ?? [])
                        : [],
                    applicationId: n.application?.id,
                    title: n.title,
                    guildId: j,
                    playerState: t,
                    isControlBarExpanded: a,
                    isFullScreen: q,
                    showTextContent: M,
                    shareCTA: null != v && null != T && (0, i.jsx)(C, { attachment: n, messageId: v, channelId: T }),
                });
            },
            [n, j, q, k, M, T, v],
        );
    return (0, i.jsx)("div", {
        className: d()(y.kL, { [y.HA]: f }, l),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: b ? (e) => e.stopPropagation() : void 0,
        onKeyDown: b ? (e) => e.stopPropagation() : void 0,
        onContextMenu: I,
        style: f ? void 0 : { width: G, height: U },
        children: (0, i.jsx)(w, {
            crossOrigin: null,
            src: _,
            downloadUrl: n.url,
            downloadContentType: n.content_type,
            poster: B,
            posterPlaceholder: n.placeholder,
            posterPlaceholderVersion: n.placeholder_version,
            active: o,
            autoplay: p,
            initialVolume: R,
            initialMuted: x,
            onVolumeChange: H,
            onMutedChange: P,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: Q,
            parentTransitionState: null,
            onFullscreenChange: z,
            onClick: D,
            withVideoHalo: !0,
            objectFit: f ? "cover" : void 0,
            muxContentMetadata: J,
        }),
    });
}
