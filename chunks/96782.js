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
    f = n(338717),
    C = n(33358),
    j = n(643612),
    I = n(207133),
    y = n(302031),
    N = n(734057),
    S = n(129230),
    v = n(515718),
    A = n(448381),
    E = n(838541),
    L = n(652215),
    w = n(792996),
    M = n(645970),
    P = n(562146);
function b(e) {
    let {
            mimeType: t,
            downloadURL: n,
            onRemoveItem: i,
            onEditItem: r,
            showDownload: m,
            isVisualMediaType: h,
            type: p,
            isSingleMosaicItem: f,
        } = e,
        C = l.useRef(null),
        [j, I] = l.useState(0);
    (0, x.i4)(C, (e) => {
        let { width: t } = e;
        null != t && I(Math.floor((t - 8) / 32));
    });
    let y = "CLIP" === p && f,
        N = [];
    (null == r ||
        y ||
        N.push(
            (0, s.jsx)(
                o.m,
                {
                    text: w.intl.string(w.t.Y8ujqr),
                    children: (0, s.jsx)(u.D, {
                        className: P.HF,
                        focusProps: { offset: 2 },
                        onClick: r,
                        "aria-label": w.intl.string(w.t.Y8ujqr),
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
                        text: w.intl.string(w.t["/XT3ij"]),
                        children: (0, s.jsx)(u.D, {
                            className: a()(P.HF, M.GC),
                            focusProps: { offset: 2 },
                            onClick: i,
                            "aria-label": w.intl.string(w.t["0+xZH0"]),
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
                        text: w.intl.string(w.t["1WjMbC"]),
                        children: (0, s.jsx)(g.A, {
                            target: "_blank",
                            rel: "noreferrer noopener",
                            className: P.HF,
                            iconClassName: M.qG,
                            focusProps: { offset: 2 },
                            href: n,
                            mimeType: t,
                        }),
                    },
                    "download",
                ),
            ));
    let S = Math.max(0, N.length - j);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            j > 0 && N.length > 0 && (0, s.jsx)("div", { className: a()(P.aq, { [P.XE]: !h }), children: N.slice(S) }),
            (0, s.jsx)("div", { ref: C, className: P.St }),
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
            onPlay: f,
            renderImageComponent: C,
            renderVideoComponent: y,
            renderAudioComponent: A,
            renderPlaintextFilePreview: P,
            renderGenericFileComponent: O,
            renderVisualPlaceholderComponent: W,
            className: T,
            imgContainerClassName: _,
            imgClassName: k,
            focusable: H,
            hiddenSpoilers: R,
            mediaLayoutType: F,
            maxWidth: D,
            maxHeight: G,
            useFullWidth: U,
            isVisualMediaType: V,
            onVideoControlsShow: q,
            onVideoControlsHide: X,
            forcePlaceholder: z,
            isSingleMosaicItem: B,
            allowFullScreen: Y,
        } = e,
        { width: Q, height: $, spoiler: K, type: Z, contentType: J } = n,
        [ee, et] = l.useState(!1),
        en = t.getChannelId(),
        es = N.A.getChannel(en),
        el = (0, I.A)(en),
        ei = l.useMemo(() => (null != J && -1 !== J.indexOf("/") ? J.split("/") : ["unknown", "unknown"]), [J]),
        ea = !1;
    if (V) {
        (null == Q || null == $) && (ea = !0);
        let e = (0, v.U8)({ width: Q ?? 0, height: $ ?? 0, maxWidth: D ?? 550, maxHeight: G ?? 350 });
        !U && (e * (Q ?? 0) < 40 || e * ($ ?? 0) < 40) && (ea = !0);
    }
    let er = l.useCallback(() => {
            r(n);
        }, [n, r]),
        eo = l.useCallback(() => {
            d(n);
        }, [n, d]),
        eu = l.useCallback(() => {
            S.default.track(L.HAw.IMAGE_HOVERED, {
                guild_id: es?.guild_id,
                channel_id: es?.id,
                image_recommendations_shown: !1,
            });
        }, [es]),
        ed = l.useCallback(() => {
            if (F === E.d.MOSAIC) {
                let e = (!el && ["VIDEO", "CLIP", "AUDIO"].includes(Z)) || "OTHER" === Z;
                return ea
                    ? null
                    : !ee &&
                          (0, s.jsx)(b, {
                              mimeType: ei,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              onRemoveItem: a ? er : void 0,
                              onEditItem: o ? eo : void 0,
                              isVisualMediaType: V,
                              type: Z,
                              isSingleMosaicItem: B,
                          });
            }
            return (
                a &&
                (0, s.jsx)(u.D, {
                    className: K ? M.yR : M.Yg,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => r(n),
                    "aria-label": w.intl.string(w.t["0+xZH0"]),
                    children: (0, s.jsx)(m.XSmallIcon, { size: "xs", color: "currentColor" }),
                })
            );
        }, [F, a, K, el, Z, ea, ee, ei, n, er, eo, o, V, r, B]);
    if (z)
        return (0, s.jsx)(h._, {
            className: T,
            readyState: L.Rv1.READY,
            src: "",
            width: Q ?? 350,
            height: $ ?? 350,
            maxWidth: D,
            maxHeight: G,
            mediaLayoutType: F,
            useFullWidth: U,
            zoomable: !1,
        });
    switch (Z) {
        case "IMAGE":
            return (0, s.jsx)(j.G.Consumer, {
                children: (e) =>
                    (0, s.jsx)(C, {
                        item: n,
                        message: t,
                        width: Q,
                        height: $,
                        autoPlay: i && !R,
                        onClick: c,
                        onContextMenu: p,
                        shouldHideMediaOptions: el,
                        renderAccessory: e,
                        renderAdjacentContent: ed,
                        containerClassName: T,
                        className: _,
                        imageClassName: k,
                        shouldLink: H,
                        hiddenSpoilers: R,
                        responsive: !0,
                        mediaLayoutType: F,
                        maxWidth: D,
                        maxHeight: G,
                        useFullWidth: U,
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
                height: $,
                onClick: c,
                onSeekRequest: x,
                onContextMenu: p,
                renderAdjacentContent: ed,
                naturalWidth: Q,
                naturalHeight: $,
                className: T,
                playable: H,
                responsive: !0,
                hiddenSpoilers: R,
                mediaLayoutType: F,
                maxWidth: D,
                maxHeight: G,
                useFullWidth: U,
                mimeType: ei,
                onControlsShow: q,
                onControlsHide: X,
                downloadable: !el,
                isSingleMosaicItem: B,
                allowFullScreen: Y,
                onPlay: f,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == W) return null;
            return (0, s.jsx)(W, {
                item: n,
                message: t,
                className: _,
                imageClassName: k,
                maxWidth: D,
                maxHeight: G,
                mediaLayoutType: F,
                useFullWidth: U,
            });
        case "AUDIO":
            return (0, s.jsx)(A, {
                item: n,
                message: t,
                className: T,
                playable: H,
                mimeType: ei,
                renderAdjacentContent: ed,
                onVolumeShow: () => et(!0),
                onVolumeHide: () => et(!1),
                onPlay: f,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, s.jsx)(P, {
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
                j = r(n, (0, C.P)(i)),
                [I, N] = l.useState(j),
                [S, L] = l.useState(null != j);
            j !== I && (N(j), L(null != j));
            let w = (0, p.qZ)(j),
                P = u === E.d.MOSAIC,
                b = !P && ((null != h && h < 200) || (null != x && x < 50)),
                W = "IMAGE" === g || "VIDEO" === g || "CLIP" === g,
                T = (0, A.Xg)(g),
                _ = d && null != j && (0, p.j8)(h, x),
                [k, H] = l.useState(!1);
            function R() {
                H(!0);
            }
            function F() {
                H(!1);
            }
            function D() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return (0, s.jsx)(O, {
                    ...m,
                    item: n,
                    message: i,
                    getObscureReason: r,
                    isSingleMosaicItem: d,
                    hiddenSpoilers: e,
                    className: a()(t, M.bq, {
                        [M.cd]: S && !b,
                        [M.rP]: S && j === f.Oc.SPOILER,
                        [M.xu]: S && null != j && f._K.has(j),
                        [M.sC]: S && e,
                        [M.mG]: S && b,
                    }),
                    focusable: !e,
                    mediaLayoutType: u,
                    useFullWidth: (!!_ && !!e) || o,
                    isVisualMediaType: T,
                    onVideoControlsShow: R,
                    onVideoControlsHide: F,
                    forcePlaceholder: w && S,
                });
            }
            return (0, s.jsx)("div", {
                style: c ? { minWidth: 0, width: `${m.maxWidth}px` } : void 0,
                className: a()(M.wO, { [M.xV]: W, [M.D$]: o, [M.UI]: P, [M.JP]: P && T }),
                children:
                    null != j
                        ? (0, s.jsx)(y.Ay, {
                              type: y.Ay.Types.ATTACHMENT,
                              inline: b,
                              reason: j,
                              isSingleMosaicItem: d,
                              obscured: S,
                              containerStyles: (function (e, t, n) {
                                  if (!t) return;
                                  let s = e.width;
                                  if (void 0 !== e.width && void 0 !== e.height) {
                                      let { width: t } = (0, v.Uj)({
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
                              })(n, W, u),
                              obscurityControlClassName: a()({ [M.yi]: "VIDEO" === g && d && !S && k }),
                              onToggleObscurity: () => L((e) => !e),
                              children: (e) => D(e),
                          })
                        : D(),
            });
        },
        rC: function (e, t) {
            return {
                uniqueId: e.id,
                originalItem: e,
                type: (0, A.NI)(e, t),
                downloadUrl: e.url,
                height: e.height,
                width: e.width,
                spoiler: (0, r.Lt)(e.flags ?? 0, L.sbO.IS_SPOILER),
                contentType: e.content_type,
                srcIsAnimated: (0, r.Lt)(e.flags ?? 0, L.sbO.IS_ANIMATED),
            };
        },
        zB: b,
    },
);
