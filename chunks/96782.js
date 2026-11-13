(n(938796), n(321073));
var l = n(477900),
    s = n(582128),
    i = n(503698),
    r = n.n(i),
    a = n(665260),
    o = n(866665),
    u = n(939249),
    c = n(22231),
    d = n(241326),
    m = n(789645),
    h = n(251843),
    x = n(765671),
    C = n(384015),
    p = n(390248),
    g = n(338717),
    f = n(33358),
    j = n(643612),
    I = n(207133),
    A = n(302031),
    N = n(734057),
    S = n(129230),
    _ = n(515718),
    E = n(448381),
    v = n(838541),
    y = n(652215),
    P = n(792996),
    R = n(645970),
    T = n(562146);
function b(e) {
    let {
            mimeType: t,
            downloadURL: n,
            onRemoveItem: i,
            onEditItem: a,
            showDownload: m,
            isVisualMediaType: h,
            type: p,
            isSingleMosaicItem: g,
        } = e,
        f = s.useRef(null),
        [j, I] = s.useState(0);
    (0, x.i4)(f, (e) => {
        let { width: t } = e;
        null != t && I(Math.floor((t - 8) / 32));
    });
    let A = "CLIP" === p && g,
        N = [];
    (null == a ||
        A ||
        N.push(
            (0, l.jsx)(
                o.m,
                {
                    text: P.intl.string(P.t.Y8ujqr),
                    children: (0, l.jsx)(u.D, {
                        className: T.HF,
                        focusProps: { offset: 2 },
                        onClick: a,
                        "aria-label": P.intl.string(P.t.Y8ujqr),
                        children: (0, l.jsx)(c.PencilIcon, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                        }),
                    }),
                },
                "edit",
            ),
        ),
        null != i &&
            N.push(
                (0, l.jsx)(
                    o.m,
                    {
                        text: P.intl.string(P.t["/XT3ij"]),
                        children: (0, l.jsx)(u.D, {
                            className: r()(T.HF, R.GC),
                            focusProps: { offset: 2 },
                            onClick: i,
                            "aria-label": P.intl.string(P.t["0+xZH0"]),
                            children: (0, l.jsx)(d.TrashIcon, {
                                size: "custom",
                                color: "currentColor",
                                width: 20,
                                height: 20,
                            }),
                        }),
                    },
                    "remove",
                ),
            ),
        m &&
            !A &&
            N.push(
                (0, l.jsx)(
                    o.m,
                    {
                        text: P.intl.string(P.t["1WjMbC"]),
                        children: (0, l.jsx)(C.A, {
                            target: "_blank",
                            rel: "noreferrer noopener",
                            className: T.HF,
                            iconClassName: R.qG,
                            focusProps: { offset: 2 },
                            href: n,
                            mimeType: t,
                        }),
                    },
                    "download",
                ),
            ));
    let S = Math.max(0, N.length - j);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            j > 0 && N.length > 0 && (0, l.jsx)("div", { className: r()(T.aq, { [T.XE]: !h }), children: N.slice(S) }),
            (0, l.jsx)("div", { ref: f, className: T.St }),
        ],
    });
}
function M(e) {
    let {
            message: t,
            item: n,
            autoPlayGif: i,
            canRemoveItem: r,
            onRemoveItem: a,
            canEditItem: o,
            onEditItem: c,
            onClick: d,
            onSeekRequest: x,
            handlePreloadImage: C,
            onContextMenu: p,
            onPlay: g,
            renderImageComponent: f,
            renderVideoComponent: A,
            renderAudioComponent: E,
            renderPlaintextFilePreview: T,
            renderGenericFileComponent: M,
            renderVisualPlaceholderComponent: L,
            className: O,
            imgContainerClassName: w,
            imgClassName: U,
            focusable: k,
            hiddenSpoilers: D,
            mediaLayoutType: W,
            maxWidth: G,
            maxHeight: F,
            useFullWidth: H,
            isVisualMediaType: V,
            onVideoControlsShow: q,
            onVideoControlsHide: z,
            forcePlaceholder: X,
            isSingleMosaicItem: B,
            allowFullScreen: Q,
        } = e,
        { width: K, height: Y, spoiler: $, type: Z, contentType: J } = n,
        [ee, et] = s.useState(!1),
        en = t.getChannelId(),
        el = N.A.getChannel(en),
        es = (0, I.A)(en),
        ei = s.useMemo(() => (null != J && -1 !== J.indexOf("/") ? J.split("/") : ["unknown", "unknown"]), [J]),
        er = !1;
    if (V) {
        (null == K || null == Y) && (er = !0);
        let e = (0, _.U8)({ width: K ?? 0, height: Y ?? 0, maxWidth: G ?? 550, maxHeight: F ?? 350 });
        !H && (e * (K ?? 0) < 40 || e * (Y ?? 0) < 40) && (er = !0);
    }
    let ea = s.useCallback(() => {
            a(n);
        }, [n, a]),
        eo = s.useCallback(() => {
            c(n);
        }, [n, c]),
        eu = s.useCallback(() => {
            S.default.track(y.HAw.IMAGE_HOVERED, {
                guild_id: el?.guild_id,
                channel_id: el?.id,
                image_recommendations_shown: !1,
            });
        }, [el]),
        ec = s.useCallback(() => {
            if (W === v.d.MOSAIC) {
                let e = (!es && ["VIDEO", "CLIP", "AUDIO"].includes(Z)) || "OTHER" === Z;
                return er
                    ? null
                    : !ee &&
                          (0, l.jsx)(b, {
                              mimeType: ei,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              onRemoveItem: r ? ea : void 0,
                              onEditItem: o ? eo : void 0,
                              isVisualMediaType: V,
                              type: Z,
                              isSingleMosaicItem: B,
                          });
            }
            return (
                r &&
                (0, l.jsx)(u.D, {
                    className: $ ? R.yR : R.Yg,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => a(n),
                    "aria-label": P.intl.string(P.t["0+xZH0"]),
                    children: (0, l.jsx)(m.XSmallIcon, { size: "xs", color: "currentColor" }),
                })
            );
        }, [W, r, $, es, Z, er, ee, ei, n, ea, eo, o, V, a, B]);
    if (X)
        return (0, l.jsx)(h._, {
            className: O,
            readyState: y.Rv1.READY,
            src: "",
            width: K ?? 350,
            height: Y ?? 350,
            maxWidth: G,
            maxHeight: F,
            mediaLayoutType: W,
            useFullWidth: H,
            zoomable: !1,
        });
    switch (Z) {
        case "IMAGE":
            return (0, l.jsx)(j.G.Consumer, {
                children: (e) =>
                    (0, l.jsx)(f, {
                        item: n,
                        message: t,
                        width: K,
                        height: Y,
                        autoPlay: i && !D,
                        onClick: d,
                        onContextMenu: p,
                        shouldHideMediaOptions: es,
                        renderAccessory: e,
                        renderAdjacentContent: ec,
                        containerClassName: O,
                        className: w,
                        imageClassName: U,
                        shouldLink: k,
                        hiddenSpoilers: D,
                        responsive: !0,
                        mediaLayoutType: W,
                        maxWidth: G,
                        maxHeight: F,
                        useFullWidth: H,
                        handlePreloadImage: C,
                        onMouseEnter: eu,
                    }),
            });
        case "VIDEO":
        case "CLIP":
            return (0, l.jsx)(A, {
                item: n,
                message: t,
                width: K,
                height: Y,
                onClick: d,
                onSeekRequest: x,
                onContextMenu: p,
                renderAdjacentContent: ec,
                naturalWidth: K,
                naturalHeight: Y,
                className: O,
                playable: k,
                responsive: !0,
                hiddenSpoilers: D,
                mediaLayoutType: W,
                maxWidth: G,
                maxHeight: F,
                useFullWidth: H,
                mimeType: ei,
                onControlsShow: q,
                onControlsHide: z,
                downloadable: !es,
                isSingleMosaicItem: B,
                allowFullScreen: Q,
                onPlay: g,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == L) return null;
            return (0, l.jsx)(L, {
                item: n,
                message: t,
                className: w,
                imageClassName: U,
                maxWidth: G,
                maxHeight: F,
                mediaLayoutType: W,
                useFullWidth: H,
            });
        case "AUDIO":
            return (0, l.jsx)(E, {
                item: n,
                message: t,
                className: O,
                playable: k,
                mimeType: ei,
                renderAdjacentContent: ec,
                onVolumeShow: () => et(!0),
                onVolumeHide: () => et(!1),
                onPlay: g,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, l.jsx)(T, {
                item: n,
                message: t,
                className: O,
                onClick: d,
                onContextMenu: p,
                renderAdjacentContent: ec,
            });
        case "OTHER":
            return (0, l.jsx)(M, {
                item: n,
                message: t,
                className: O,
                onClick: d,
                onContextMenu: p,
                renderAdjacentContent: ec,
            });
        case "INVALID":
            return null;
    }
}
n.d(
    t,
    {},
    {
        Ay: function (e) {
            let {
                    className: t,
                    item: n,
                    message: i,
                    getObscureReason: a,
                    useFullWidth: o,
                    mediaLayoutType: u,
                    isSingleMosaicItem: c,
                    displayGridItem: d,
                    ...m
                } = e,
                { width: h, height: x, type: C } = n,
                j = a(n, (0, f.P)(i)),
                [I, N] = s.useState(j),
                [S, y] = s.useState(null != j);
            j !== I && (N(j), y(null != j));
            let P = (0, p.qZ)(j),
                T = u === v.d.MOSAIC,
                b = !T && ((null != h && h < 200) || (null != x && x < 50)),
                L = "IMAGE" === C || "VIDEO" === C || "CLIP" === C,
                O = (0, E.Xg)(C),
                w = c && null != j && (0, p.j8)(h, x),
                [U, k] = s.useState(!1);
            function D() {
                k(!0);
            }
            function W() {
                k(!1);
            }
            function G() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return (0, l.jsx)(M, {
                    ...m,
                    item: n,
                    message: i,
                    getObscureReason: a,
                    isSingleMosaicItem: c,
                    hiddenSpoilers: e,
                    className: r()(t, R.bq, {
                        [R.cd]: S && !b,
                        [R.rP]: S && j === g.Oc.SPOILER,
                        [R.xu]: S && null != j && g._K.has(j),
                        [R.sC]: S && e,
                        [R.mG]: S && b,
                    }),
                    focusable: !e,
                    mediaLayoutType: u,
                    useFullWidth: (!!w && !!e) || o,
                    isVisualMediaType: O,
                    onVideoControlsShow: D,
                    onVideoControlsHide: W,
                    forcePlaceholder: P && S,
                });
            }
            return (0, l.jsx)("div", {
                style: d ? { minWidth: 0, width: `${m.maxWidth}px` } : void 0,
                className: r()(R.wO, { [R.xV]: L, [R.D$]: o, [R.UI]: T, [R.JP]: T && O }),
                children:
                    null != j
                        ? (0, l.jsx)(A.Ay, {
                              type: A.Ay.Types.ATTACHMENT,
                              inline: b,
                              reason: j,
                              isSingleMosaicItem: c,
                              obscured: S,
                              containerStyles: (function (e, t, n) {
                                  if (!t) return;
                                  let l = e.width;
                                  if (void 0 !== e.width && void 0 !== e.height) {
                                      let { width: t } = (0, _.Uj)({
                                          width: e.width,
                                          height: e.height,
                                          maxWidth: 400,
                                          maxHeight: 300,
                                      });
                                      l = t;
                                  }
                                  return {
                                      ...(n !== v.d.MOSAIC && { maxWidth: l ?? "400px" }),
                                      width: "100%",
                                      height: "100%",
                                      justifySelf: "auto",
                                  };
                              })(n, L, u),
                              obscurityControlClassName: r()({ [R.yi]: "VIDEO" === C && c && !S && U }),
                              onToggleObscurity: () => y((e) => !e),
                              children: (e) => G(e),
                          })
                        : G(),
            });
        },
        rC: function (e, t) {
            return {
                uniqueId: e.id,
                originalItem: e,
                type: (0, E.NI)(e, t),
                downloadUrl: e.url,
                height: e.height,
                width: e.width,
                spoiler: (0, a.Lt)(e.flags ?? 0, y.sbO.IS_SPOILER),
                contentType: e.content_type,
                srcIsAnimated: (0, a.Lt)(e.flags ?? 0, y.sbO.IS_ANIMATED),
            };
        },
        zB: b,
    },
);
