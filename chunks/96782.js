(n(938796), n(321073));
var l = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(665260),
    o = n(866665),
    u = n(939249),
    c = n(22231),
    d = n(241326),
    m = n(789645),
    h = n(251843),
    x = n(765671),
    g = n(384015),
    p = n(390248),
    C = n(338717),
    f = n(33358),
    j = n(643612),
    I = n(207133),
    N = n(302031),
    v = n(734057),
    S = n(129230),
    A = n(515718),
    y = n(448381),
    E = n(838541),
    _ = n(652215),
    P = n(792996),
    M = n(645970),
    b = n(562146);
function O(e) {
    let {
            mimeType: t,
            downloadURL: n,
            onRemoveItem: i,
            onEditItem: r,
            showDownload: m,
            isVisualMediaType: h,
            type: p,
            isSingleMosaicItem: C,
        } = e,
        f = s.useRef(null),
        [j, I] = s.useState(0);
    (0, x.i4)(f, (e) => {
        let { width: t } = e;
        null != t && I(Math.floor((t - 8) / 32));
    });
    let N = "CLIP" === p && C,
        v = [];
    (null == r ||
        N ||
        v.push(
            (0, l.jsx)(
                o.m,
                {
                    text: P.intl.string(P.t.Y8ujqr),
                    children: (0, l.jsx)(u.D, {
                        className: b.HF,
                        focusProps: { offset: 2 },
                        onClick: r,
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
            v.push(
                (0, l.jsx)(
                    o.m,
                    {
                        text: P.intl.string(P.t["/XT3ij"]),
                        children: (0, l.jsx)(u.D, {
                            className: a()(b.HF, M.GC),
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
            !N &&
            v.push(
                (0, l.jsx)(
                    o.m,
                    {
                        text: P.intl.string(P.t["1WjMbC"]),
                        children: (0, l.jsx)(g.A, {
                            target: "_blank",
                            rel: "noreferrer noopener",
                            className: b.HF,
                            iconClassName: M.qG,
                            focusProps: { offset: 2 },
                            href: n,
                            mimeType: t,
                        }),
                    },
                    "download",
                ),
            ));
    let S = Math.max(0, v.length - j);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            j > 0 && v.length > 0 && (0, l.jsx)("div", { className: a()(b.aq, { [b.XE]: !h }), children: v.slice(S) }),
            (0, l.jsx)("div", { ref: f, className: b.St }),
        ],
    });
}
function L(e) {
    let {
            message: t,
            item: n,
            autoPlayGif: i,
            canRemoveItem: a,
            onRemoveItem: r,
            canEditItem: o,
            onEditItem: c,
            onClick: d,
            onSeekRequest: x,
            handlePreloadImage: g,
            onContextMenu: p,
            onPlay: C,
            renderImageComponent: f,
            renderVideoComponent: N,
            renderAudioComponent: y,
            renderPlaintextFilePreview: b,
            renderGenericFileComponent: L,
            renderVisualPlaceholderComponent: R,
            className: w,
            imgContainerClassName: T,
            imgClassName: U,
            focusable: k,
            hiddenSpoilers: W,
            mediaLayoutType: D,
            maxWidth: H,
            maxHeight: F,
            useFullWidth: G,
            isVisualMediaType: V,
            onVideoControlsShow: q,
            onVideoControlsHide: z,
            forcePlaceholder: X,
            isSingleMosaicItem: Q,
            allowFullScreen: B,
        } = e,
        { width: Y, height: K, spoiler: $, type: Z, contentType: J } = n,
        [ee, et] = s.useState(!1),
        en = t.getChannelId(),
        el = v.A.getChannel(en),
        es = (0, I.A)(en),
        ei = s.useMemo(() => (null != J && -1 !== J.indexOf("/") ? J.split("/") : ["unknown", "unknown"]), [J]),
        ea = !1;
    if (V) {
        (null == Y || null == K) && (ea = !0);
        let e = (0, A.U8)({ width: Y ?? 0, height: K ?? 0, maxWidth: H ?? 550, maxHeight: F ?? 350 });
        !G && (e * (Y ?? 0) < 40 || e * (K ?? 0) < 40) && (ea = !0);
    }
    let er = s.useCallback(() => {
            r(n);
        }, [n, r]),
        eo = s.useCallback(() => {
            c(n);
        }, [n, c]),
        eu = s.useCallback(() => {
            S.default.track(_.HAw.IMAGE_HOVERED, {
                guild_id: el?.guild_id,
                channel_id: el?.id,
                image_recommendations_shown: !1,
            });
        }, [el]),
        ec = s.useCallback(() => {
            if (D === E.d.MOSAIC) {
                let e = (!es && ["VIDEO", "CLIP", "AUDIO"].includes(Z)) || "OTHER" === Z;
                return ea
                    ? null
                    : !ee &&
                          (0, l.jsx)(O, {
                              mimeType: ei,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              onRemoveItem: a ? er : void 0,
                              onEditItem: o ? eo : void 0,
                              isVisualMediaType: V,
                              type: Z,
                              isSingleMosaicItem: Q,
                          });
            }
            return (
                a &&
                (0, l.jsx)(u.D, {
                    className: $ ? M.yR : M.Yg,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => r(n),
                    "aria-label": P.intl.string(P.t["0+xZH0"]),
                    children: (0, l.jsx)(m.XSmallIcon, { size: "xs", color: "currentColor" }),
                })
            );
        }, [D, a, $, es, Z, ea, ee, ei, n, er, eo, o, V, r, Q]);
    if (X)
        return (0, l.jsx)(h._, {
            className: w,
            readyState: _.Rv1.READY,
            src: "",
            width: Y ?? 350,
            height: K ?? 350,
            maxWidth: H,
            maxHeight: F,
            mediaLayoutType: D,
            useFullWidth: G,
            zoomable: !1,
        });
    switch (Z) {
        case "IMAGE":
            return (0, l.jsx)(j.G.Consumer, {
                children: (e) =>
                    (0, l.jsx)(f, {
                        item: n,
                        message: t,
                        width: Y,
                        height: K,
                        autoPlay: i && !W,
                        onClick: d,
                        onContextMenu: p,
                        shouldHideMediaOptions: es,
                        renderAccessory: e,
                        renderAdjacentContent: ec,
                        containerClassName: w,
                        className: T,
                        imageClassName: U,
                        shouldLink: k,
                        hiddenSpoilers: W,
                        responsive: !0,
                        mediaLayoutType: D,
                        maxWidth: H,
                        maxHeight: F,
                        useFullWidth: G,
                        handlePreloadImage: g,
                        onMouseEnter: eu,
                    }),
            });
        case "VIDEO":
        case "CLIP":
            return (0, l.jsx)(N, {
                item: n,
                message: t,
                width: Y,
                height: K,
                onClick: d,
                onSeekRequest: x,
                onContextMenu: p,
                renderAdjacentContent: ec,
                naturalWidth: Y,
                naturalHeight: K,
                className: w,
                playable: k,
                responsive: !0,
                hiddenSpoilers: W,
                mediaLayoutType: D,
                maxWidth: H,
                maxHeight: F,
                useFullWidth: G,
                mimeType: ei,
                onControlsShow: q,
                onControlsHide: z,
                downloadable: !es,
                isSingleMosaicItem: Q,
                allowFullScreen: B,
                onPlay: C,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == R) return null;
            return (0, l.jsx)(R, {
                item: n,
                message: t,
                className: T,
                imageClassName: U,
                maxWidth: H,
                maxHeight: F,
                mediaLayoutType: D,
                useFullWidth: G,
            });
        case "AUDIO":
            return (0, l.jsx)(y, {
                item: n,
                message: t,
                className: w,
                playable: k,
                mimeType: ei,
                renderAdjacentContent: ec,
                onVolumeShow: () => et(!0),
                onVolumeHide: () => et(!1),
                onPlay: C,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, l.jsx)(b, {
                item: n,
                message: t,
                className: w,
                onClick: d,
                onContextMenu: p,
                renderAdjacentContent: ec,
            });
        case "OTHER":
            return (0, l.jsx)(L, {
                item: n,
                message: t,
                className: w,
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
                    getObscureReason: r,
                    useFullWidth: o,
                    mediaLayoutType: u,
                    isSingleMosaicItem: c,
                    displayGridItem: d,
                    ...m
                } = e,
                { width: h, height: x, type: g } = n,
                j = r(n, (0, f.P)(i)),
                [I, v] = s.useState(j),
                [S, _] = s.useState(null != j);
            j !== I && (v(j), _(null != j));
            let P = (0, p.qZ)(j),
                b = u === E.d.MOSAIC,
                O = !b && ((null != h && h < 200) || (null != x && x < 50)),
                R = "IMAGE" === g || "VIDEO" === g || "CLIP" === g,
                w = (0, y.Xg)(g),
                T = c && null != j && (0, p.j8)(h, x),
                [U, k] = s.useState(!1);
            function W() {
                k(!0);
            }
            function D() {
                k(!1);
            }
            function H() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return (0, l.jsx)(L, {
                    ...m,
                    item: n,
                    message: i,
                    getObscureReason: r,
                    isSingleMosaicItem: c,
                    hiddenSpoilers: e,
                    className: a()(t, M.bq, {
                        [M.cd]: S && !O,
                        [M.rP]: S && j === C.Oc.SPOILER,
                        [M.xu]: S && null != j && C._K.has(j),
                        [M.sC]: S && e,
                        [M.mG]: S && O,
                    }),
                    focusable: !e,
                    mediaLayoutType: u,
                    useFullWidth: (!!T && !!e) || o,
                    isVisualMediaType: w,
                    onVideoControlsShow: W,
                    onVideoControlsHide: D,
                    forcePlaceholder: P && S,
                });
            }
            return (0, l.jsx)("div", {
                style: d ? { minWidth: 0, width: `${m.maxWidth}px` } : void 0,
                className: a()(M.wO, { [M.xV]: R, [M.D$]: o, [M.UI]: b, [M.JP]: b && w }),
                children:
                    null != j
                        ? (0, l.jsx)(N.Ay, {
                              type: N.Ay.Types.ATTACHMENT,
                              inline: O,
                              reason: j,
                              isSingleMosaicItem: c,
                              obscured: S,
                              containerStyles: (function (e, t, n) {
                                  if (!t) return;
                                  let l = e.width;
                                  if (void 0 !== e.width && void 0 !== e.height) {
                                      let { width: t } = (0, A.Uj)({
                                          width: e.width,
                                          height: e.height,
                                          maxWidth: 400,
                                          maxHeight: 300,
                                      });
                                      l = t;
                                  }
                                  return {
                                      ...(n !== E.d.MOSAIC && { maxWidth: l ?? "400px" }),
                                      width: "100%",
                                      height: "100%",
                                      justifySelf: "auto",
                                  };
                              })(n, R, u),
                              obscurityControlClassName: a()({ [M.yi]: "VIDEO" === g && c && !S && U }),
                              onToggleObscurity: () => _((e) => !e),
                              children: (e) => H(e),
                          })
                        : H(),
            });
        },
        rC: function (e, t) {
            return {
                uniqueId: e.id,
                originalItem: e,
                type: (0, y.NI)(e, t),
                downloadUrl: e.url,
                height: e.height,
                width: e.width,
                spoiler: (0, r.Lt)(e.flags ?? 0, _.sbO.IS_SPOILER),
                contentType: e.content_type,
                srcIsAnimated: (0, r.Lt)(e.flags ?? 0, _.sbO.IS_ANIMATED),
            };
        },
        zB: O,
    },
);
