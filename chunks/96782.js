n.d(t, { Ay: () => S, rC: () => O, zB: () => w }), n(938796), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(665260),
    o = n(990078),
    u = n(397927),
    d = n(765671),
    m = n(672477),
    c = n(384015),
    h = n(390248),
    x = n(338717),
    g = n(33358),
    p = n(643612),
    I = n(207133),
    f = n(302031),
    C = n(734057),
    A = n(954571),
    j = n(515718),
    y = n(448381),
    E = n(838541),
    M = n(652215),
    N = n(985018),
    L = n(267509),
    v = n(415779);
function O(e, t) {
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, y.NI)(e, t),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type,
        srcIsAnimated: (0, r.Lt)(e.flags ?? 0, M.sbO.IS_ANIMATED),
    };
}
let w = (e) => {
    let {
            mimeType: t,
            downloadURL: n,
            onRemoveItem: l,
            showDownload: r,
            isVisualMediaType: h,
            type: x,
            isSingleMosaicItem: g,
        } = e,
        p = s.useRef(null),
        [I, f] = s.useState(0),
        { newEmbedUi: C } = m.Q.useConfig({ location: "MosaicItemHoverButtons" });
    (0, d.i4)(p, (e) => {
        let { width: t } = e;
        null != t && f(Math.floor((t - 8) / 32));
    });
    let A = [];
    null != l &&
        A.push(
            (0, i.jsx)(
                o.m,
                {
                    text: N.intl.string(N.t["/XT3ij"]),
                    children: (0, i.jsx)(u.DUT, {
                        className: a()(v.HF, L.GC),
                        focusProps: { offset: 2 },
                        onClick: l,
                        "aria-label": N.intl.string(N.t["0+xZH0"]),
                        children: (0, i.jsx)(u.ucK, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                    }),
                },
                "remove",
            ),
        ),
        r &&
            !("CLIP" === x && g && C) &&
            A.push(
                (0, i.jsx)(
                    o.m,
                    {
                        text: N.intl.string(N.t["1WjMbC"]),
                        children: (0, i.jsx)(c.A, {
                            target: "_blank",
                            rel: "noreferrer noopener",
                            className: v.HF,
                            iconClassName: L.qG,
                            focusProps: { offset: 2 },
                            href: n,
                            mimeType: t,
                        }),
                    },
                    "download",
                ),
            );
    let j = Math.max(0, A.length - I);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            I > 0 && A.length > 0 && (0, i.jsx)("div", { className: a()(v.aq, { [v.XE]: !h }), children: A.slice(j) }),
            (0, i.jsx)("div", { ref: p, className: v.St }),
        ],
    });
};
function P(e) {
    let {
            message: t,
            item: n,
            autoPlayGif: l,
            canRemoveItem: r,
            onRemoveItem: o,
            onClick: d,
            handlePreloadImage: m,
            onContextMenu: c,
            onPlay: h,
            renderImageComponent: x,
            renderVideoComponent: g,
            renderAudioComponent: f,
            renderPlaintextFilePreview: y,
            renderGenericFileComponent: v,
            renderVisualPlaceholderComponent: O,
            className: P,
            imgContainerClassName: S,
            imgClassName: W,
            focusable: T,
            hiddenSpoilers: _,
            mediaLayoutType: b,
            maxWidth: D,
            maxHeight: H,
            hasFooter: F,
            useFullWidth: G,
            isVisualMediaType: V,
            onVideoControlsShow: k,
            onVideoControlsHide: U,
            forcePlaceholder: R,
            isSingleMosaicItem: q,
        } = e,
        { width: X, height: Q, spoiler: z, type: B, contentType: $ } = n,
        [K, Y] = s.useState(!1),
        Z = t.getChannelId(),
        J = C.A.getChannel(Z),
        ee = (0, I.A)(Z),
        et = s.useMemo(() => (null != $ && -1 !== $.indexOf("/") ? $.split("/") : ["unknown", "unknown"]), [$]),
        en = !1;
    if (V) {
        (null == X || null == Q) && (en = !0);
        let e = (0, j.U8)({ width: X ?? 0, height: Q ?? 0, maxWidth: D ?? E.k6, maxHeight: H ?? E.Rk });
        !G && (e * (X ?? 0) < E.ie || e * (Q ?? 0) < E.ie) && (en = !0);
    }
    let ei = s.useCallback(() => {
            o(n);
        }, [n, o]),
        es = s.useCallback(() => {
            A.default.track(M.HAw.IMAGE_HOVERED, {
                guild_id: J?.guild_id,
                channel_id: J?.id,
                image_recommendations_shown: !1,
            });
        }, [J]),
        el = s.useCallback(() => {
            if (b === E.dG.MOSAIC) {
                let e = (!ee && ["VIDEO", "CLIP", "AUDIO"].includes(B)) || "OTHER" === B;
                return en
                    ? null
                    : !K &&
                          (0, i.jsx)(w, {
                              mimeType: et,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              onRemoveItem: r ? ei : void 0,
                              isVisualMediaType: V,
                              type: B,
                              isSingleMosaicItem: q,
                          });
            }
            return (
                r &&
                (0, i.jsx)(u.DUT, {
                    className: z ? L.yR : L.Yg,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => o(n),
                    "aria-label": N.intl.string(N.t["0+xZH0"]),
                    children: (0, i.jsx)(u.PGe, { size: "xs", color: "currentColor" }),
                })
            );
        }, [b, r, z, ee, B, en, K, et, n, ei, V, o, q]);
    if (R)
        return (0, i.jsx)(u._V3, {
            className: P,
            readyState: M.Rv1.READY,
            src: "",
            width: X ?? 350,
            height: Q ?? 350,
            maxWidth: D,
            maxHeight: H,
            mediaLayoutType: b,
            useFullWidth: G,
            zoomable: !1,
        });
    switch (B) {
        case "IMAGE":
            return (0, i.jsx)(p.G.Consumer, {
                children: (e) =>
                    (0, i.jsx)(x, {
                        item: n,
                        message: t,
                        width: X,
                        height: Q,
                        autoPlay: l && !_,
                        onClick: d,
                        onContextMenu: c,
                        shouldHideMediaOptions: ee,
                        renderAccessory: e,
                        renderAdjacentContent: el,
                        containerClassName: P,
                        className: S,
                        imageClassName: W,
                        shouldLink: T,
                        hiddenSpoilers: _,
                        responsive: !0,
                        mediaLayoutType: b,
                        maxWidth: D,
                        maxHeight: H,
                        useFullWidth: G,
                        handlePreloadImage: m,
                        onMouseEnter: es,
                    }),
            });
        case "VIDEO":
        case "CLIP":
            return (0, i.jsx)(g, {
                item: n,
                message: t,
                width: X,
                height: Q,
                onClick: d,
                onContextMenu: c,
                renderAdjacentContent: el,
                naturalWidth: X,
                naturalHeight: Q,
                className: a()(P, { [L.yq]: F }),
                playable: T,
                responsive: !0,
                hiddenSpoilers: _,
                mediaLayoutType: b,
                maxWidth: D,
                maxHeight: H,
                useFullWidth: G,
                mimeType: et,
                onControlsShow: k,
                onControlsHide: U,
                downloadable: !ee,
                mediaPlayerClassName: F ? L.yq : void 0,
                isSingleMosaicItem: q,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == O) return null;
            return (0, i.jsx)(O, {
                item: n,
                message: t,
                className: S,
                imageClassName: W,
                maxWidth: D,
                maxHeight: H,
                mediaLayoutType: b,
                useFullWidth: G,
            });
        case "AUDIO":
            return (0, i.jsx)(f, {
                item: n,
                message: t,
                className: P,
                playable: T,
                mimeType: et,
                renderAdjacentContent: el,
                onVolumeShow: () => Y(!0),
                onVolumeHide: () => Y(!1),
                onPlay: h,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, i.jsx)(y, {
                item: n,
                message: t,
                className: P,
                onClick: d,
                onContextMenu: c,
                renderAdjacentContent: el,
            });
        case "OTHER":
            return (0, i.jsx)(v, {
                item: n,
                message: t,
                className: P,
                onClick: d,
                onContextMenu: c,
                renderAdjacentContent: el,
            });
        case "INVALID":
            return null;
    }
}
let S = function (e) {
    let {
            className: t,
            item: n,
            message: l,
            getObscureReason: r,
            useFullWidth: o,
            mediaLayoutType: u,
            isSingleMosaicItem: d,
            footer: c,
            displayGridItem: p,
            ...I
        } = e,
        { width: C, height: A, type: M } = n,
        { newEmbedUi: N } = m.Q.useConfig({ location: "MessageMediaMosaicItem" }),
        v = r(n, (0, g.P)(l)),
        [O, w] = s.useState(null != v),
        S = (0, h.qZ)(v),
        W = u === E.dG.MOSAIC,
        T = !W && ((null != C && C < 200) || (null != A && A < 50)),
        _ = (function (e) {
            let { enableClipsNewEmbedUi: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return "IMAGE" === e || "VIDEO" === e || (t && "CLIP" === e);
        })(M, { enableClipsNewEmbedUi: N }),
        b = (0, y.Xg)(M),
        D = d && null != v && (0, h.j8)(C, A),
        [H, F] = s.useState(!1),
        G = () => {
            F(!0);
        },
        V = () => {
            F(!1);
        },
        k = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(P, {
                ...I,
                item: n,
                message: l,
                getObscureReason: r,
                isSingleMosaicItem: d,
                hiddenSpoilers: e,
                className: a()(t, L.bq, {
                    [L.cd]: O && !T,
                    [L.rP]: O && v === x.Oc.SPOILER,
                    [L.xu]: O && null != v && x._K.has(v),
                    [L.sC]: O && e,
                    [L.mG]: O && T,
                }),
                focusable: !e,
                mediaLayoutType: u,
                hasFooter: null != c,
                useFullWidth: (!!D && !!e) || o,
                isVisualMediaType: b,
                onVideoControlsShow: G,
                onVideoControlsHide: V,
                forcePlaceholder: S && O,
            });
        };
    return (0, i.jsxs)("div", {
        style: p ? { minWidth: 0, width: `${I.maxWidth}px` } : void 0,
        className: a()(L.wO, { [L.xV]: _, [L.D$]: o, [L.UI]: W, [L.JP]: W && b, [L.hU]: null != c }),
        children: [
            null != v
                ? (0, i.jsx)(f.Ay, {
                      type: f.Ay.Types.ATTACHMENT,
                      inline: T,
                      reason: v,
                      isSingleMosaicItem: d,
                      obscured: O,
                      containerStyles: (function (e, t, n) {
                          if (!t) return;
                          let i = e.width;
                          if (void 0 !== e.width && void 0 !== e.height) {
                              let { width: t } = (0, j.Uj)({
                                  width: e.width,
                                  height: e.height,
                                  maxWidth: 400,
                                  maxHeight: 300,
                              });
                              i = t;
                          }
                          return {
                              ...(n !== E.dG.MOSAIC && { maxWidth: i ?? "400px" }),
                              width: "100%",
                              height: "100%",
                              justifySelf: "auto",
                          };
                      })(n, _, u),
                      obscurityControlClassName: a()({ [L.yi]: "VIDEO" === M && d && !O && H }),
                      onToggleObscurity: () => w((e) => !e),
                      children: (e) => k(e),
                  })
                : k(),
            c,
        ],
    });
};
