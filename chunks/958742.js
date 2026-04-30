"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(268218),
    u = n(776231),
    c = n(614269),
    d = n(829097),
    _ = n(734057),
    f = n(401648),
    h = n(939249),
    p = n(734066),
    E = n(274372),
    m = n(794905),
    g = n(16590),
    A = n(375708),
    I = n(310882);
function T(e) {
    let { attachment: t, channelId: n, messageId: s } = e,
        { enableAdvancedSignals: a } = p.L_.useConfig({ location: "DistributedClipShareCTA" }),
        l = t.clip_remote_id,
        u = (0, o.bG)([E.A], () => (null != l ? E.A.getClipByRemoteId(l) : null)),
        { onShareClick: c } = (0, m.A)(n),
        d = (0, o.bG)([E.A], () => null != u && null != n && null != l && E.A.wasClipSharedInChannel(l, n)),
        _ = r.useCallback(
            (e) => {
                null != u &&
                    (e.stopPropagation(), c({ clips: [u], messageReference: { channel_id: n, message_id: s } }));
            },
            [c, u, n, s],
        );
    return !a || null == u || d
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  " \xb7 ",
                  (0, i.jsx)(h.D, {
                      tag: "span",
                      className: I.s,
                      onClick: _,
                      children: A.intl.string(g.default.YKst58),
                  }),
              ],
          });
}
var S = n(696016),
    N = n(581874);
let y = (0, l.Fe)({
    createPromise: () =>
        Promise.all([n.e("99245"), n.e("57174"), n.e("84971"), n.e("30920"), n.e("78010"), n.e("91652")]).then(
            n.bind(n, 664111),
        ),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: N.Lq }),
});
function C(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: s,
            active: l = !1,
            autoPlay: h,
            src: p,
            embed: E = !1,
            fillContainer: m = !1,
            minWidth: g = 500,
            maxWidth: A = 1 / 0,
            maxHeight: I = 1 / 0,
            channelId: C,
            messageId: v,
            showTextContent: O = A >= 250,
            showParticipants: R = !0,
            volume: b,
            autoMute: D,
            onVolumeChange: L,
            onMutedChange: w,
            onClick: M,
            onContextMenu: P,
        } = e,
        x = t.width ?? 0,
        U = t.height ?? 0,
        k = (0, o.bG)([_.A], () => _.A.getBasicChannel(C)?.guild_id, [C]),
        G = x > 0 && U > 0 ? x / U : 16 / 9,
        F = Math.min(x > 0 ? x : g, A),
        V = F / G;
    V > I && (F = (V = I) * G), F < g && (V = (F = g) / G);
    let B = Math.round(Math.min(F, A)),
        H = Math.round(Math.min(V, I)),
        j = x > 0 && U > 0 ? Math.min(B / x, H / U, 1) : 1,
        Y = (0, u.AE)({ src: n, width: Math.round(x * j), height: Math.round(U * j) }),
        [W, K] = r.useState(!1),
        z = (0, d._)({ location: S.Mu }).externalAnalyticsEnabled,
        $ = r.useMemo(
            () =>
                z
                    ? {
                          contentId: p,
                          videoStreamType: c.u.isHlsUrl(p) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [z, p, t.title],
        ),
        q = r.useCallback(
            (e) => {
                let { playerState: n, isControlBarExpanded: r } = e;
                return (0, i.jsx)(f.A, {
                    createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                    participantIds: R
                        ? (t.clip_participants?.map((e) => {
                              let { id: t } = e;
                              return t;
                          }) ?? [])
                        : [],
                    applicationId: t.application?.id,
                    title: t.title,
                    guildId: k,
                    playerState: n,
                    isControlBarExpanded: r,
                    isFullScreen: W,
                    showTextContent: O,
                    shareCTA: null != v && null != C && (0, i.jsx)(T, { attachment: t, messageId: v, channelId: C }),
                });
            },
            [t, k, W, R, O, C, v],
        );
    return (0, i.jsx)("div", {
        className: a()(N.kL, { [N.HA]: m }, s),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: E ? (e) => e.stopPropagation() : void 0,
        onKeyDown: E ? (e) => e.stopPropagation() : void 0,
        onContextMenu: P,
        style: m ? void 0 : { width: B, height: H },
        children: (0, i.jsx)(y, {
            crossOrigin: null,
            src: p,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: Y,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: l,
            autoplay: h,
            initialVolume: b,
            initialMuted: D,
            onVolumeChange: L,
            onMutedChange: w,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: q,
            parentTransitionState: null,
            onFullscreenChange: K,
            onClick: M,
            withVideoHalo: !0,
            objectFit: m ? "cover" : void 0,
            muxContentMetadata: $,
        }),
    });
}
