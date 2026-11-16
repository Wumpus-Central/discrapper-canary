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
    C = n(384015),
    p = n(390248),
    g = n(338717),
    f = n(33358),
    j = n(643612),
    I = n(207133),
    A = n(302031),
    N = n(734057),
    v = n(129230),
    S = n(515718),
    _ = n(448381),
    E = n(838541),
    y = n(652215),
    P = n(792996),
    b = n(645970),
    M = n(562146);
function L(e) {
    let {
            mimeType: t,
            downloadURL: n,
            onRemoveItem: i,
            onEditItem: r,
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
    (null == r ||
        A ||
        N.push(
            (0, l.jsx)(
                o.m,
                {
                    text: P.intl.string(P.t.Y8ujqr),
                    children: (0, l.jsx)(u.D, {
                        className: M.HF,
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
            N.push(
                (0, l.jsx)(
                    o.m,
                    {
                        text: P.intl.string(P.t["/XT3ij"]),
                        children: (0, l.jsx)(u.D, {
                            className: a()(M.HF, b.GC),
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
                            className: M.HF,
                            iconClassName: b.qG,
                            focusProps: { offset: 2 },
                            href: n,
                            mimeType: t,
                        }),
                    },
                    "download",
                ),
            ));
    let v = Math.max(0, N.length - j);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            j > 0 && N.length > 0 && (0, l.jsx)("div", { className: a()(M.aq, { [M.XE]: !h }), children: N.slice(v) }),
            (0, l.jsx)("div", { ref: f, className: M.St }),
        ],
    });
}
function O(e) {
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
            handlePreloadImage: C,
            onContextMenu: p,
            onPlay: g,
            renderImageComponent: f,
            renderVideoComponent: A,
            renderAudioComponent: _,
            renderPlaintextFilePreview: M,
            renderGenericFileComponent: O,
            renderVisualPlaceholderComponent: R,
            className: T,
            imgContainerClassName: w,
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
        el = N.A.getChannel(en),
        es = (0, I.A)(en),
        ei = s.useMemo(() => (null != J && -1 !== J.indexOf("/") ? J.split("/") : ["unknown", "unknown"]), [J]),
        ea = !1;
    if (V) {
        (null == Y || null == K) && (ea = !0);
        let e = (0, S.U8)({ width: Y ?? 0, height: K ?? 0, maxWidth: H ?? 550, maxHeight: F ?? 350 });
        !G && (e * (Y ?? 0) < 40 || e * (K ?? 0) < 40) && (ea = !0);
    }
    let er = s.useCallback(() => {
            r(n);
        }, [n, r]),
        eo = s.useCallback(() => {
            c(n);
        }, [n, c]),
        eu = s.useCallback(() => {
            v.default.track(y.HAw.IMAGE_HOVERED, {
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
                          (0, l.jsx)(L, {
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
                    className: $ ? b.yR : b.Yg,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => r(n),
                    "aria-label": P.intl.string(P.t["0+xZH0"]),
                    children: (0, l.jsx)(m.XSmallIcon, { size: "xs", color: "currentColor" }),
                })
            );
        }, [D, a, $, es, Z, ea, ee, ei, n, er, eo, o, V, r, Q]);
    if (X)
        return (0, l.jsx)(h._, {
            className: T,
            readyState: y.Rv1.READY,
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
                        containerClassName: T,
                        className: w,
                        imageClassName: U,
                        shouldLink: k,
                        hiddenSpoilers: W,
                        responsive: !0,
                        mediaLayoutType: D,
                        maxWidth: H,
                        maxHeight: F,
                        useFullWidth: G,
                        handlePreloadImage: C,
                        onMouseEnter: eu,
                    }),
            });
        case "VIDEO":
        case "CLIP":
            return (0, l.jsx)(A, {
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
                className: T,
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
                onPlay: g,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == R) return null;
            return (0, l.jsx)(R, {
                item: n,
                message: t,
                className: w,
                imageClassName: U,
                maxWidth: H,
                maxHeight: F,
                mediaLayoutType: D,
                useFullWidth: G,
            });
        case "AUDIO":
            return (0, l.jsx)(_, {
                item: n,
                message: t,
                className: T,
                playable: k,
                mimeType: ei,
                renderAdjacentContent: ec,
                onVolumeShow: () => et(!0),
                onVolumeHide: () => et(!1),
                onPlay: g,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, l.jsx)(M, {
                item: n,
                message: t,
                className: T,
                onClick: d,
                onContextMenu: p,
                renderAdjacentContent: ec,
            });
        case "OTHER":
            return (0, l.jsx)(O, {
                item: n,
                message: t,
                className: T,
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
                { width: h, height: x, type: C } = n,
                j = r(n, (0, f.P)(i)),
                [I, N] = s.useState(j),
                [v, y] = s.useState(null != j);
            j !== I && (N(j), y(null != j));
            let P = (0, p.qZ)(j),
                M = u === E.d.MOSAIC,
                L = !M && ((null != h && h < 200) || (null != x && x < 50)),
                R = "IMAGE" === C || "VIDEO" === C || "CLIP" === C,
                T = (0, _.Xg)(C),
                w = c && null != j && (0, p.j8)(h, x),
                [U, k] = s.useState(!1);
            function W() {
                k(!0);
            }
            function D() {
                k(!1);
            }
            function H() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return (0, l.jsx)(O, {
                    ...m,
                    item: n,
                    message: i,
                    getObscureReason: r,
                    isSingleMosaicItem: c,
                    hiddenSpoilers: e,
                    className: a()(t, b.bq, {
                        [b.cd]: v && !L,
                        [b.rP]: v && j === g.Oc.SPOILER,
                        [b.xu]: v && null != j && g._K.has(j),
                        [b.sC]: v && e,
                        [b.mG]: v && L,
                    }),
                    focusable: !e,
                    mediaLayoutType: u,
                    useFullWidth: (!!w && !!e) || o,
                    isVisualMediaType: T,
                    onVideoControlsShow: W,
                    onVideoControlsHide: D,
                    forcePlaceholder: P && v,
                });
            }
            return (0, l.jsx)("div", {
                style: d ? { minWidth: 0, width: `${m.maxWidth}px` } : void 0,
                className: a()(b.wO, { [b.xV]: R, [b.D$]: o, [b.UI]: M, [b.JP]: M && T }),
                children:
                    null != j
                        ? (0, l.jsx)(A.Ay, {
                              type: A.Ay.Types.ATTACHMENT,
                              inline: L,
                              reason: j,
                              isSingleMosaicItem: c,
                              obscured: v,
                              containerStyles: (function (e, t, n) {
                                  if (!t) return;
                                  let l = e.width;
                                  if (void 0 !== e.width && void 0 !== e.height) {
                                      let { width: t } = (0, S.Uj)({
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
                              obscurityControlClassName: a()({ [b.yi]: "VIDEO" === C && c && !v && U }),
                              onToggleObscurity: () => y((e) => !e),
                              children: (e) => H(e),
                          })
                        : H(),
            });
        },
        rC: function (e, t) {
            return {
                uniqueId: e.id,
                originalItem: e,
                type: (0, _.NI)(e, t),
                downloadUrl: e.url,
                height: e.height,
                width: e.width,
                spoiler: (0, r.Lt)(e.flags ?? 0, y.sbO.IS_SPOILER),
                contentType: e.content_type,
                srcIsAnimated: (0, r.Lt)(e.flags ?? 0, y.sbO.IS_ANIMATED),
            };
        },
        zB: L,
    },
);
