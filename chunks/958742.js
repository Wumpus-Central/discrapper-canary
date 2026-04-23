n.d(t, { A: () => I });
var i = n(627968),
    a = n(64700),
    o = n(503698),
    l = n.n(o),
    r = n(17928),
    s = n(268218),
    d = n(776231),
    c = n(734057),
    u = n(401648),
    _ = n(939249),
    m = n(734066),
    p = n(274372),
    h = n(794905),
    f = n(16590),
    g = n(985018),
    A = n(310882);
function y(e) {
    let { attachment: t, channelId: n, messageId: o } = e,
        { enableAdvancedSignals: l } = m.L_.useConfig({ location: "DistributedClipShareCTA" }),
        s = t.clip_remote_id,
        d = (0, r.bG)([p.A], () => (null != s ? p.A.getClipByRemoteId(s) : null)),
        { onShareClick: c } = (0, h.A)(n),
        u = (0, r.bG)([p.A], () => null != d && null != n && null != s && p.A.wasClipSharedInChannel(s, n)),
        y = a.useCallback(
            (e) => {
                null != d &&
                    (e.stopPropagation(), c({ clips: [d], messageReference: { channel_id: n, message_id: o } }));
            },
            [c, d, n, o],
        );
    return !l || null == d || u
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  " \xb7 ",
                  (0, i.jsx)(_.D, {
                      tag: "span",
                      className: A.s,
                      onClick: y,
                      children: g.intl.string(f.default.YKst58),
                  }),
              ],
          });
}
var E = n(581874);
let b = (0, s.Fe)({
    createPromise: () => Promise.all([n.e("57174"), n.e("91652"), n.e("43420")]).then(n.bind(n, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: E.Lq }),
});
function I(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: o,
            active: s = !1,
            autoPlay: _,
            src: m,
            embed: p = !1,
            fillContainer: h = !1,
            minWidth: f = 500,
            maxWidth: g = 1 / 0,
            maxHeight: A = 1 / 0,
            channelId: I,
            messageId: C,
            showTextContent: w = g >= 250,
            showParticipants: T = !0,
            volume: S,
            autoMute: v,
            onVolumeChange: O,
            onMutedChange: L,
            onClick: M,
            onContextMenu: x,
        } = e,
        k = t.width ?? 0,
        P = t.height ?? 0,
        N = (0, r.bG)([c.A], () => c.A.getBasicChannel(I)?.guild_id, [I]),
        R = k > 0 && P > 0 ? k / P : 16 / 9,
        D = Math.min(k > 0 ? k : f, g),
        G = D / R;
    G > A && (D = (G = A) * R), D < f && (G = (D = f) / R);
    let H = Math.round(Math.min(D, g)),
        j = Math.round(Math.min(G, A)),
        B = k > 0 && P > 0 ? Math.min(H / k, j / P, 1) : 1,
        U = (0, d.AE)({ src: n, width: Math.round(k * B), height: Math.round(P * B) }),
        [z, F] = a.useState(!1),
        V = a.useCallback(
            (e) => {
                let { playerState: n, isControlBarExpanded: a } = e;
                return (0, i.jsx)(u.A, {
                    createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                    participantIds: T
                        ? (t.clip_participants?.map((e) => {
                              let { id: t } = e;
                              return t;
                          }) ?? [])
                        : [],
                    applicationId: t.application?.id,
                    title: t.title,
                    guildId: N,
                    playerState: n,
                    isControlBarExpanded: a,
                    isFullScreen: z,
                    showTextContent: w,
                    shareCTA: null != C && null != I && (0, i.jsx)(y, { attachment: t, messageId: C, channelId: I }),
                });
            },
            [t, N, z, T, w, I, C],
        );
    return (0, i.jsx)("div", {
        className: l()(E.kL, { [E.HA]: h }, o),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: p ? (e) => e.stopPropagation() : void 0,
        onKeyDown: p ? (e) => e.stopPropagation() : void 0,
        onContextMenu: x,
        style: h ? void 0 : { width: H, height: j },
        children: (0, i.jsx)(b, {
            crossOrigin: null,
            src: m,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: U,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: s,
            autoplay: _,
            initialVolume: S,
            initialMuted: v,
            onVolumeChange: O,
            onMutedChange: L,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: V,
            parentTransitionState: null,
            onFullscreenChange: F,
            onClick: M,
            withVideoHalo: !0,
            objectFit: h ? "cover" : void 0,
        }),
    });
}
