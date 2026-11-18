(n(938796), n(321073));
var l = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(665260),
    o = n(866665),
    u = n(939249),
    d = n(22231),
    c = n(241326),
    m = n(789645),
    h = n(251843),
    x = n(765671),
    p = n(384015),
    g = n(390248),
    C = n(338717),
    f = n(33358),
    j = n(643612),
    I = n(207133),
    A = n(302031),
    v = n(734057),
    N = n(129230),
    y = n(515718),
    S = n(448381),
    E = n(838541),
    _ = n(652215),
    M = n(792996),
    P = n(645970),
    L = n(562146);
function b(e) {
    let {
            mimeType: t,
            downloadURL: n,
            onRemoveItem: i,
            onEditItem: r,
            showDownload: m,
            isVisualMediaType: h,
            type: g,
            isSingleMosaicItem: C,
        } = e,
        f = s.useRef(null),
        [j, I] = s.useState(0);
    (0, x.i4)(f, (e) => {
        let { width: t } = e;
        null != t && I(Math.floor((t - 8) / 32));
    });
    let A = "CLIP" === g && C,
        v = [];
    (null == r ||
        A ||
        v.push(
            (0, l.jsx)(
                o.m,
                {
                    text: M.intl.string(M.t.Y8ujqr),
                    children: (0, l.jsx)(u.D, {
                        className: L.HF,
                        focusProps: { offset: 2 },
                        onClick: r,
                        "aria-label": M.intl.string(M.t.Y8ujqr),
                        children: (0, l.jsx)(d.PencilIcon, {
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
                        text: M.intl.string(M.t["/XT3ij"]),
                        children: (0, l.jsx)(u.D, {
                            className: a()(L.HF, P.GC),
                            focusProps: { offset: 2 },
                            onClick: i,
                            "aria-label": M.intl.string(M.t["0+xZH0"]),
                            children: (0, l.jsx)(c.TrashIcon, {
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
            v.push(
                (0, l.jsx)(
                    o.m,
                    {
                        text: M.intl.string(M.t["1WjMbC"]),
                        children: (0, l.jsx)(p.A, {
                            target: "_blank",
                            rel: "noreferrer noopener",
                            className: L.HF,
                            iconClassName: P.qG,
                            focusProps: { offset: 2 },
                            href: n,
                            mimeType: t,
                        }),
                    },
                    "download",
                ),
            ));
    let N = Math.max(0, v.length - j);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            j > 0 && v.length > 0 && (0, l.jsx)("div", { className: a()(L.aq, { [L.XE]: !h }), children: v.slice(N) }),
            (0, l.jsx)("div", { ref: f, className: L.St }),
        ],
    });
}
function T(e) {
    let {
            message: t,
            item: n,
            autoPlayGif: i,
            canRemoveItem: a,
            onRemoveItem: r,
            canEditItem: o,
            onEditItem: d,
            onClick: c,
            onSeekRequest: x,
            onOpenInMediaViewer: p,
            handlePreloadImage: g,
            onContextMenu: C,
            onPlay: f,
            renderImageComponent: A,
            renderVideoComponent: S,
            renderAudioComponent: L,
            renderPlaintextFilePreview: T,
            renderGenericFileComponent: O,
            renderVisualPlaceholderComponent: w,
            className: R,
            imgContainerClassName: U,
            imgClassName: W,
            focusable: k,
            hiddenSpoilers: H,
            mediaLayoutType: D,
            maxWidth: F,
            maxHeight: G,
            useFullWidth: V,
            isVisualMediaType: q,
            onVideoControlsShow: z,
            onVideoControlsHide: X,
            forcePlaceholder: B,
            isSingleMosaicItem: Y,
            allowFullScreen: K,
        } = e,
        { width: Q, height: Z, spoiler: $, type: J, contentType: ee } = n,
        [et, en] = s.useState(!1),
        el = t.getChannelId(),
        es = v.A.getChannel(el),
        ei = (0, I.A)(el),
        ea = s.useMemo(() => (null != ee && -1 !== ee.indexOf("/") ? ee.split("/") : ["unknown", "unknown"]), [ee]),
        er = !1;
    if (q) {
        (null == Q || null == Z) && (er = !0);
        let e = (0, y.U8)({ width: Q ?? 0, height: Z ?? 0, maxWidth: F ?? 550, maxHeight: G ?? 350 });
        !V && (e * (Q ?? 0) < 40 || e * (Z ?? 0) < 40) && (er = !0);
    }
    let eo = s.useCallback(() => {
            r(n);
        }, [n, r]),
        eu = s.useCallback(() => {
            d(n);
        }, [n, d]),
        ed = s.useCallback(() => {
            N.default.track(_.HAw.IMAGE_HOVERED, {
                guild_id: es?.guild_id,
                channel_id: es?.id,
                image_recommendations_shown: !1,
            });
        }, [es]),
        ec = s.useCallback(() => {
            if (D === E.d.MOSAIC) {
                let e = (!ei && ["VIDEO", "CLIP", "AUDIO"].includes(J)) || "OTHER" === J;
                return er
                    ? null
                    : !et &&
                          (0, l.jsx)(b, {
                              mimeType: ea,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              onRemoveItem: a ? eo : void 0,
                              onEditItem: o ? eu : void 0,
                              isVisualMediaType: q,
                              type: J,
                              isSingleMosaicItem: Y,
                          });
            }
            return (
                a &&
                (0, l.jsx)(u.D, {
                    className: $ ? P.yR : P.Yg,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => r(n),
                    "aria-label": M.intl.string(M.t["0+xZH0"]),
                    children: (0, l.jsx)(m.XSmallIcon, { size: "xs", color: "currentColor" }),
                })
            );
        }, [D, a, $, ei, J, er, et, ea, n, eo, eu, o, q, r, Y]);
    if (B)
        return (0, l.jsx)(h._, {
            className: R,
            readyState: _.Rv1.READY,
            src: "",
            width: Q ?? 350,
            height: Z ?? 350,
            maxWidth: F,
            maxHeight: G,
            mediaLayoutType: D,
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
                        width: Q,
                        height: Z,
                        autoPlay: i && !H,
                        onClick: c,
                        onContextMenu: C,
                        shouldHideMediaOptions: ei,
                        renderAccessory: e,
                        renderAdjacentContent: ec,
                        containerClassName: R,
                        className: U,
                        imageClassName: W,
                        shouldLink: k,
                        hiddenSpoilers: H,
                        responsive: !0,
                        mediaLayoutType: D,
                        maxWidth: F,
                        maxHeight: G,
                        useFullWidth: V,
                        handlePreloadImage: g,
                        onMouseEnter: ed,
                    }),
            });
        case "VIDEO":
        case "CLIP":
            return (0, l.jsx)(S, {
                item: n,
                message: t,
                width: Q,
                height: Z,
                onClick: c,
                onSeekRequest: x,
                onOpenInMediaViewer: p,
                onContextMenu: C,
                renderAdjacentContent: ec,
                naturalWidth: Q,
                naturalHeight: Z,
                className: R,
                playable: k,
                responsive: !0,
                hiddenSpoilers: H,
                mediaLayoutType: D,
                maxWidth: F,
                maxHeight: G,
                useFullWidth: V,
                mimeType: ea,
                onControlsShow: z,
                onControlsHide: X,
                downloadable: !ei,
                isSingleMosaicItem: Y,
                allowFullScreen: K,
                onPlay: f,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == w) return null;
            return (0, l.jsx)(w, {
                item: n,
                message: t,
                className: U,
                imageClassName: W,
                maxWidth: F,
                maxHeight: G,
                mediaLayoutType: D,
                useFullWidth: V,
            });
        case "AUDIO":
            return (0, l.jsx)(L, {
                item: n,
                message: t,
                className: R,
                playable: k,
                mimeType: ea,
                renderAdjacentContent: ec,
                onVolumeShow: () => en(!0),
                onVolumeHide: () => en(!1),
                onPlay: f,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, l.jsx)(T, {
                item: n,
                message: t,
                className: R,
                onClick: c,
                onContextMenu: C,
                renderAdjacentContent: ec,
            });
        case "OTHER":
            return (0, l.jsx)(O, {
                item: n,
                message: t,
                className: R,
                onClick: c,
                onContextMenu: C,
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
                    isSingleMosaicItem: d,
                    displayGridItem: c,
                    ...m
                } = e,
                { width: h, height: x, type: p } = n,
                j = r(n, (0, f.P)(i)),
                [I, v] = s.useState(j),
                [N, _] = s.useState(null != j);
            j !== I && (v(j), _(null != j));
            let M = (0, g.qZ)(j),
                L = u === E.d.MOSAIC,
                b = !L && ((null != h && h < 200) || (null != x && x < 50)),
                O = "IMAGE" === p || "VIDEO" === p || "CLIP" === p,
                w = (0, S.Xg)(p),
                R = d && null != j && (0, g.j8)(h, x),
                [U, W] = s.useState(!1);
            function k() {
                W(!0);
            }
            function H() {
                W(!1);
            }
            function D() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return (0, l.jsx)(T, {
                    ...m,
                    item: n,
                    message: i,
                    getObscureReason: r,
                    isSingleMosaicItem: d,
                    hiddenSpoilers: e,
                    className: a()(t, P.bq, {
                        [P.cd]: N && !b,
                        [P.rP]: N && j === C.Oc.SPOILER,
                        [P.xu]: N && null != j && C._K.has(j),
                        [P.sC]: N && e,
                        [P.mG]: N && b,
                    }),
                    focusable: !e,
                    mediaLayoutType: u,
                    useFullWidth: (!!R && !!e) || o,
                    isVisualMediaType: w,
                    onVideoControlsShow: k,
                    onVideoControlsHide: H,
                    forcePlaceholder: M && N,
                });
            }
            return (0, l.jsx)("div", {
                style: c ? { minWidth: 0, width: `${m.maxWidth}px` } : void 0,
                className: a()(P.wO, { [P.xV]: O, [P.D$]: o, [P.UI]: L, [P.JP]: L && w }),
                children:
                    null != j
                        ? (0, l.jsx)(A.Ay, {
                              type: A.Ay.Types.ATTACHMENT,
                              inline: b,
                              reason: j,
                              isSingleMosaicItem: d,
                              obscured: N,
                              containerStyles: (function (e, t, n) {
                                  if (!t) return;
                                  let l = e.width;
                                  if (void 0 !== e.width && void 0 !== e.height) {
                                      let { width: t } = (0, y.Uj)({
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
                              })(n, O, u),
                              obscurityControlClassName: a()({ [P.yi]: "VIDEO" === p && d && !N && U }),
                              onToggleObscurity: () => _((e) => !e),
                              children: (e) => D(e),
                          })
                        : D(),
            });
        },
        rC: function (e, t) {
            return {
                uniqueId: e.id,
                originalItem: e,
                type: (0, S.NI)(e, t),
                downloadUrl: e.url,
                height: e.height,
                width: e.width,
                spoiler: (0, r.Lt)(e.flags ?? 0, _.sbO.IS_SPOILER),
                contentType: e.content_type,
                srcIsAnimated: (0, r.Lt)(e.flags ?? 0, _.sbO.IS_ANIMATED),
            };
        },
        zB: b,
    },
);
