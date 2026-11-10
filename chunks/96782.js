(n(938796), n(321073));
var s = n(477900),
    l = n(582128),
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
    g = n(384015),
    p = n(390248),
    C = n(338717),
    f = n(33358),
    j = n(643612),
    I = n(207133),
    y = n(302031),
    N = n(734057),
    v = n(129230),
    A = n(515718),
    S = n(448381),
    E = n(838541),
    _ = n(652215),
    L = n(792996),
    b = n(645970),
    M = n(562146);
function P(e) {
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
        f = l.useRef(null),
        [j, I] = l.useState(0);
    (0, x.i4)(f, (e) => {
        let { width: t } = e;
        null != t && I(Math.floor((t - 8) / 32));
    });
    let y = "CLIP" === p && C,
        N = [];
    (null == r ||
        y ||
        N.push(
            (0, s.jsx)(
                o.m,
                {
                    text: L.intl.string(L.t.Y8ujqr),
                    children: (0, s.jsx)(u.D, {
                        className: M.HF,
                        focusProps: { offset: 2 },
                        onClick: r,
                        "aria-label": L.intl.string(L.t.Y8ujqr),
                        children: (0, s.jsx)(d.PencilIcon, {
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
                (0, s.jsx)(
                    o.m,
                    {
                        text: L.intl.string(L.t["/XT3ij"]),
                        children: (0, s.jsx)(u.D, {
                            className: a()(M.HF, b.GC),
                            focusProps: { offset: 2 },
                            onClick: i,
                            "aria-label": L.intl.string(L.t["0+xZH0"]),
                            children: (0, s.jsx)(c.TrashIcon, {
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
            !y &&
            N.push(
                (0, s.jsx)(
                    o.m,
                    {
                        text: L.intl.string(L.t["1WjMbC"]),
                        children: (0, s.jsx)(g.A, {
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
    return (0, s.jsxs)(s.Fragment, {
        children: [
            j > 0 && N.length > 0 && (0, s.jsx)("div", { className: a()(M.aq, { [M.XE]: !h }), children: N.slice(v) }),
            (0, s.jsx)("div", { ref: f, className: M.St }),
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
            onEditItem: d,
            onClick: c,
            onSeekRequest: x,
            handlePreloadImage: g,
            onContextMenu: p,
            onPlay: C,
            renderImageComponent: f,
            renderVideoComponent: y,
            renderAudioComponent: S,
            renderPlaintextFilePreview: M,
            renderGenericFileComponent: O,
            renderVisualPlaceholderComponent: w,
            className: T,
            imgContainerClassName: R,
            imgClassName: W,
            focusable: k,
            hiddenSpoilers: U,
            mediaLayoutType: D,
            maxWidth: H,
            maxHeight: F,
            useFullWidth: G,
            isVisualMediaType: V,
            onVideoControlsShow: q,
            onVideoControlsHide: z,
            forcePlaceholder: X,
            isSingleMosaicItem: B,
            allowFullScreen: K,
        } = e,
        { width: Q, height: Y, spoiler: Z, type: $, contentType: J } = n,
        [ee, et] = l.useState(!1),
        en = t.getChannelId(),
        es = N.A.getChannel(en),
        el = (0, I.A)(en),
        ei = l.useMemo(() => (null != J && -1 !== J.indexOf("/") ? J.split("/") : ["unknown", "unknown"]), [J]),
        ea = !1;
    if (V) {
        (null == Q || null == Y) && (ea = !0);
        let e = (0, A.U8)({ width: Q ?? 0, height: Y ?? 0, maxWidth: H ?? 550, maxHeight: F ?? 350 });
        !G && (e * (Q ?? 0) < 40 || e * (Y ?? 0) < 40) && (ea = !0);
    }
    let er = l.useCallback(() => {
            r(n);
        }, [n, r]),
        eo = l.useCallback(() => {
            d(n);
        }, [n, d]),
        eu = l.useCallback(() => {
            v.default.track(_.HAw.IMAGE_HOVERED, {
                guild_id: es?.guild_id,
                channel_id: es?.id,
                image_recommendations_shown: !1,
            });
        }, [es]),
        ed = l.useCallback(() => {
            if (D === E.d.MOSAIC) {
                let e = (!el && ["VIDEO", "CLIP", "AUDIO"].includes($)) || "OTHER" === $;
                return ea
                    ? null
                    : !ee &&
                          (0, s.jsx)(P, {
                              mimeType: ei,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              onRemoveItem: a ? er : void 0,
                              onEditItem: o ? eo : void 0,
                              isVisualMediaType: V,
                              type: $,
                              isSingleMosaicItem: B,
                          });
            }
            return (
                a &&
                (0, s.jsx)(u.D, {
                    className: Z ? b.yR : b.Yg,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => r(n),
                    "aria-label": L.intl.string(L.t["0+xZH0"]),
                    children: (0, s.jsx)(m.XSmallIcon, { size: "xs", color: "currentColor" }),
                })
            );
        }, [D, a, Z, el, $, ea, ee, ei, n, er, eo, o, V, r, B]);
    if (X)
        return (0, s.jsx)(h._, {
            className: T,
            readyState: _.Rv1.READY,
            src: "",
            width: Q ?? 350,
            height: Y ?? 350,
            maxWidth: H,
            maxHeight: F,
            mediaLayoutType: D,
            useFullWidth: G,
            zoomable: !1,
        });
    switch ($) {
        case "IMAGE":
            return (0, s.jsx)(j.G.Consumer, {
                children: (e) =>
                    (0, s.jsx)(f, {
                        item: n,
                        message: t,
                        width: Q,
                        height: Y,
                        autoPlay: i && !U,
                        onClick: c,
                        onContextMenu: p,
                        shouldHideMediaOptions: el,
                        renderAccessory: e,
                        renderAdjacentContent: ed,
                        containerClassName: T,
                        className: R,
                        imageClassName: W,
                        shouldLink: k,
                        hiddenSpoilers: U,
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
            return (0, s.jsx)(y, {
                item: n,
                message: t,
                width: Q,
                height: Y,
                onClick: c,
                onSeekRequest: x,
                onContextMenu: p,
                renderAdjacentContent: ed,
                naturalWidth: Q,
                naturalHeight: Y,
                className: T,
                playable: k,
                responsive: !0,
                hiddenSpoilers: U,
                mediaLayoutType: D,
                maxWidth: H,
                maxHeight: F,
                useFullWidth: G,
                mimeType: ei,
                onControlsShow: q,
                onControlsHide: z,
                downloadable: !el,
                isSingleMosaicItem: B,
                allowFullScreen: K,
                onPlay: C,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == w) return null;
            return (0, s.jsx)(w, {
                item: n,
                message: t,
                className: R,
                imageClassName: W,
                maxWidth: H,
                maxHeight: F,
                mediaLayoutType: D,
                useFullWidth: G,
            });
        case "AUDIO":
            return (0, s.jsx)(S, {
                item: n,
                message: t,
                className: T,
                playable: k,
                mimeType: ei,
                renderAdjacentContent: ed,
                onVolumeShow: () => et(!0),
                onVolumeHide: () => et(!1),
                onPlay: C,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, s.jsx)(M, {
                item: n,
                message: t,
                className: T,
                onClick: c,
                onContextMenu: p,
                renderAdjacentContent: ed,
            });
        case "OTHER":
            return (0, s.jsx)(O, {
                item: n,
                message: t,
                className: T,
                onClick: c,
                onContextMenu: p,
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
                    isSingleMosaicItem: d,
                    displayGridItem: c,
                    ...m
                } = e,
                { width: h, height: x, type: g } = n,
                j = r(n, (0, f.P)(i)),
                [I, N] = l.useState(j),
                [v, _] = l.useState(null != j);
            j !== I && (N(j), _(null != j));
            let L = (0, p.qZ)(j),
                M = u === E.d.MOSAIC,
                P = !M && ((null != h && h < 200) || (null != x && x < 50)),
                w = "IMAGE" === g || "VIDEO" === g || "CLIP" === g,
                T = (0, S.Xg)(g),
                R = d && null != j && (0, p.j8)(h, x),
                [W, k] = l.useState(!1);
            function U() {
                k(!0);
            }
            function D() {
                k(!1);
            }
            function H() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return (0, s.jsx)(O, {
                    ...m,
                    item: n,
                    message: i,
                    getObscureReason: r,
                    isSingleMosaicItem: d,
                    hiddenSpoilers: e,
                    className: a()(t, b.bq, {
                        [b.cd]: v && !P,
                        [b.rP]: v && j === C.Oc.SPOILER,
                        [b.xu]: v && null != j && C._K.has(j),
                        [b.sC]: v && e,
                        [b.mG]: v && P,
                    }),
                    focusable: !e,
                    mediaLayoutType: u,
                    useFullWidth: (!!R && !!e) || o,
                    isVisualMediaType: T,
                    onVideoControlsShow: U,
                    onVideoControlsHide: D,
                    forcePlaceholder: L && v,
                });
            }
            return (0, s.jsx)("div", {
                style: c ? { minWidth: 0, width: `${m.maxWidth}px` } : void 0,
                className: a()(b.wO, { [b.xV]: w, [b.D$]: o, [b.UI]: M, [b.JP]: M && T }),
                children:
                    null != j
                        ? (0, s.jsx)(y.Ay, {
                              type: y.Ay.Types.ATTACHMENT,
                              inline: P,
                              reason: j,
                              isSingleMosaicItem: d,
                              obscured: v,
                              containerStyles: (function (e, t, n) {
                                  if (!t) return;
                                  let s = e.width;
                                  if (void 0 !== e.width && void 0 !== e.height) {
                                      let { width: t } = (0, A.Uj)({
                                          width: e.width,
                                          height: e.height,
                                          maxWidth: 400,
                                          maxHeight: 300,
                                      });
                                      s = t;
                                  }
                                  return {
                                      ...(n !== E.d.MOSAIC && { maxWidth: s ?? "400px" }),
                                      width: "100%",
                                      height: "100%",
                                      justifySelf: "auto",
                                  };
                              })(n, w, u),
                              obscurityControlClassName: a()({ [b.yi]: "VIDEO" === g && d && !v && W }),
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
                type: (0, S.NI)(e, t),
                downloadUrl: e.url,
                height: e.height,
                width: e.width,
                spoiler: (0, r.Lt)(e.flags ?? 0, _.sbO.IS_SPOILER),
                contentType: e.content_type,
                srcIsAnimated: (0, r.Lt)(e.flags ?? 0, _.sbO.IS_ANIMATED),
            };
        },
        zB: P,
    },
);
