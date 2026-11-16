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
            N.push(
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
            !A &&
            N.push(
                (0, l.jsx)(
                    o.m,
                    {
                        text: P.intl.string(P.t["1WjMbC"]),
                        children: (0, l.jsx)(C.A, {
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
    let v = Math.max(0, N.length - j);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            j > 0 && N.length > 0 && (0, l.jsx)("div", { className: a()(b.aq, { [b.XE]: !h }), children: N.slice(v) }),
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
            onOpenInMediaViewer: C,
            handlePreloadImage: p,
            onContextMenu: g,
            onPlay: f,
            renderImageComponent: A,
            renderVideoComponent: _,
            renderAudioComponent: b,
            renderPlaintextFilePreview: L,
            renderGenericFileComponent: R,
            renderVisualPlaceholderComponent: T,
            className: w,
            imgContainerClassName: U,
            imgClassName: k,
            focusable: W,
            hiddenSpoilers: D,
            mediaLayoutType: H,
            maxWidth: F,
            maxHeight: G,
            useFullWidth: V,
            isVisualMediaType: q,
            onVideoControlsShow: z,
            onVideoControlsHide: X,
            forcePlaceholder: Q,
            isSingleMosaicItem: B,
            allowFullScreen: Y,
        } = e,
        { width: K, height: $, spoiler: Z, type: J, contentType: ee } = n,
        [et, en] = s.useState(!1),
        el = t.getChannelId(),
        es = N.A.getChannel(el),
        ei = (0, I.A)(el),
        ea = s.useMemo(() => (null != ee && -1 !== ee.indexOf("/") ? ee.split("/") : ["unknown", "unknown"]), [ee]),
        er = !1;
    if (q) {
        (null == K || null == $) && (er = !0);
        let e = (0, S.U8)({ width: K ?? 0, height: $ ?? 0, maxWidth: F ?? 550, maxHeight: G ?? 350 });
        !V && (e * (K ?? 0) < 40 || e * ($ ?? 0) < 40) && (er = !0);
    }
    let eo = s.useCallback(() => {
            r(n);
        }, [n, r]),
        eu = s.useCallback(() => {
            c(n);
        }, [n, c]),
        ec = s.useCallback(() => {
            v.default.track(y.HAw.IMAGE_HOVERED, {
                guild_id: es?.guild_id,
                channel_id: es?.id,
                image_recommendations_shown: !1,
            });
        }, [es]),
        ed = s.useCallback(() => {
            if (H === E.d.MOSAIC) {
                let e = (!ei && ["VIDEO", "CLIP", "AUDIO"].includes(J)) || "OTHER" === J;
                return er
                    ? null
                    : !et &&
                          (0, l.jsx)(O, {
                              mimeType: ea,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              onRemoveItem: a ? eo : void 0,
                              onEditItem: o ? eu : void 0,
                              isVisualMediaType: q,
                              type: J,
                              isSingleMosaicItem: B,
                          });
            }
            return (
                a &&
                (0, l.jsx)(u.D, {
                    className: Z ? M.yR : M.Yg,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => r(n),
                    "aria-label": P.intl.string(P.t["0+xZH0"]),
                    children: (0, l.jsx)(m.XSmallIcon, { size: "xs", color: "currentColor" }),
                })
            );
        }, [H, a, Z, ei, J, er, et, ea, n, eo, eu, o, q, r, B]);
    if (Q)
        return (0, l.jsx)(h._, {
            className: w,
            readyState: y.Rv1.READY,
            src: "",
            width: K ?? 350,
            height: $ ?? 350,
            maxWidth: F,
            maxHeight: G,
            mediaLayoutType: H,
            useFullWidth: V,
            zoomable: !1,
        });
    switch (J) {
        case "IMAGE":
            return (0, l.jsx)(j.G.Consumer, {
                children: (e) =>
                    (0, l.jsx)(A, {
                        item: n,
                        message: t,
                        width: K,
                        height: $,
                        autoPlay: i && !D,
                        onClick: d,
                        onContextMenu: g,
                        shouldHideMediaOptions: ei,
                        renderAccessory: e,
                        renderAdjacentContent: ed,
                        containerClassName: w,
                        className: U,
                        imageClassName: k,
                        shouldLink: W,
                        hiddenSpoilers: D,
                        responsive: !0,
                        mediaLayoutType: H,
                        maxWidth: F,
                        maxHeight: G,
                        useFullWidth: V,
                        handlePreloadImage: p,
                        onMouseEnter: ec,
                    }),
            });
        case "VIDEO":
        case "CLIP":
            return (0, l.jsx)(_, {
                item: n,
                message: t,
                width: K,
                height: $,
                onClick: d,
                onSeekRequest: x,
                onOpenInMediaViewer: C,
                onContextMenu: g,
                renderAdjacentContent: ed,
                naturalWidth: K,
                naturalHeight: $,
                className: w,
                playable: W,
                responsive: !0,
                hiddenSpoilers: D,
                mediaLayoutType: H,
                maxWidth: F,
                maxHeight: G,
                useFullWidth: V,
                mimeType: ea,
                onControlsShow: z,
                onControlsHide: X,
                downloadable: !ei,
                isSingleMosaicItem: B,
                allowFullScreen: Y,
                onPlay: f,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == T) return null;
            return (0, l.jsx)(T, {
                item: n,
                message: t,
                className: U,
                imageClassName: k,
                maxWidth: F,
                maxHeight: G,
                mediaLayoutType: H,
                useFullWidth: V,
            });
        case "AUDIO":
            return (0, l.jsx)(b, {
                item: n,
                message: t,
                className: w,
                playable: W,
                mimeType: ea,
                renderAdjacentContent: ed,
                onVolumeShow: () => en(!0),
                onVolumeHide: () => en(!1),
                onPlay: f,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, l.jsx)(L, {
                item: n,
                message: t,
                className: w,
                onClick: d,
                onContextMenu: g,
                renderAdjacentContent: ed,
            });
        case "OTHER":
            return (0, l.jsx)(R, {
                item: n,
                message: t,
                className: w,
                onClick: d,
                onContextMenu: g,
                renderAdjacentContent: ed,
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
                b = u === E.d.MOSAIC,
                O = !b && ((null != h && h < 200) || (null != x && x < 50)),
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
                return (0, l.jsx)(L, {
                    ...m,
                    item: n,
                    message: i,
                    getObscureReason: r,
                    isSingleMosaicItem: c,
                    hiddenSpoilers: e,
                    className: a()(t, M.bq, {
                        [M.cd]: v && !O,
                        [M.rP]: v && j === g.Oc.SPOILER,
                        [M.xu]: v && null != j && g._K.has(j),
                        [M.sC]: v && e,
                        [M.mG]: v && O,
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
                className: a()(M.wO, { [M.xV]: R, [M.D$]: o, [M.UI]: b, [M.JP]: b && T }),
                children:
                    null != j
                        ? (0, l.jsx)(A.Ay, {
                              type: A.Ay.Types.ATTACHMENT,
                              inline: O,
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
                              obscurityControlClassName: a()({ [M.yi]: "VIDEO" === C && c && !v && U }),
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
        zB: O,
    },
);
