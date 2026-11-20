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
    C = n(390248),
    g = n(338717),
    f = n(33358),
    I = n(643612),
    j = n(207133),
    _ = n(302031),
    A = n(734057),
    E = n(129230),
    N = n(515718),
    S = n(448381),
    y = n(838541),
    v = n(652215),
    P = n(792996),
    L = n(645970),
    M = n(562146);
function T(e) {
    let {
            mimeType: t,
            downloadURL: n,
            onRemoveItem: i,
            onEditItem: r,
            showDownload: m,
            isVisualMediaType: h,
            type: C,
            isSingleMosaicItem: g,
        } = e,
        f = s.useRef(null),
        [I, j] = s.useState(0);
    (0, x.i4)(f, (e) => {
        let { width: t } = e;
        null != t && j(Math.floor((t - 8) / 32));
    });
    let _ = "CLIP" === C && g,
        A = [];
    (null == r ||
        _ ||
        A.push(
            (0, l.jsx)(
                o.m,
                {
                    text: P.intl.string(P.t.Y8ujqr),
                    children: (0, l.jsx)(u.D, {
                        className: M.HF,
                        focusProps: { offset: 2 },
                        onClick: r,
                        "aria-label": P.intl.string(P.t.Y8ujqr),
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
            A.push(
                (0, l.jsx)(
                    o.m,
                    {
                        text: P.intl.string(P.t["/XT3ij"]),
                        children: (0, l.jsx)(u.D, {
                            className: a()(M.HF, L.GC),
                            focusProps: { offset: 2 },
                            onClick: i,
                            "aria-label": P.intl.string(P.t["0+xZH0"]),
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
            !_ &&
            A.push(
                (0, l.jsx)(
                    o.m,
                    {
                        text: P.intl.string(P.t["1WjMbC"]),
                        children: (0, l.jsx)(p.A, {
                            target: "_blank",
                            rel: "noreferrer noopener",
                            className: M.HF,
                            iconClassName: L.qG,
                            focusProps: { offset: 2 },
                            href: n,
                            mimeType: t,
                        }),
                    },
                    "download",
                ),
            ));
    let E = Math.max(0, A.length - I);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            I > 0 && A.length > 0 && (0, l.jsx)("div", { className: a()(M.aq, { [M.XE]: !h }), children: A.slice(E) }),
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
            onEditItem: d,
            onClick: c,
            onSeekRequest: x,
            onOpenInMediaViewer: p,
            handlePreloadImage: C,
            onContextMenu: g,
            onPlay: f,
            renderImageComponent: _,
            renderVideoComponent: S,
            renderAudioComponent: M,
            renderPlaintextFilePreview: O,
            renderGenericFileComponent: b,
            renderVisualPlaceholderComponent: U,
            className: w,
            imgContainerClassName: R,
            imgClassName: H,
            focusable: k,
            hiddenSpoilers: D,
            mediaLayoutType: W,
            maxWidth: G,
            maxHeight: F,
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
        es = A.A.getChannel(el),
        ei = (0, j.A)(el),
        ea = s.useMemo(() => (null != ee && -1 !== ee.indexOf("/") ? ee.split("/") : ["unknown", "unknown"]), [ee]),
        er = !1;
    if (q) {
        (null == Q || null == Z) && (er = !0);
        let e = (0, N.U8)({ width: Q ?? 0, height: Z ?? 0, maxWidth: G ?? 550, maxHeight: F ?? 350 });
        !V && (e * (Q ?? 0) < 40 || e * (Z ?? 0) < 40) && (er = !0);
    }
    let eo = s.useCallback(() => {
            r(n);
        }, [n, r]),
        eu = s.useCallback(() => {
            d(n);
        }, [n, d]),
        ed = s.useCallback(() => {
            E.default.track(v.HAw.IMAGE_HOVERED, {
                guild_id: es?.guild_id,
                channel_id: es?.id,
                image_recommendations_shown: !1,
            });
        }, [es]),
        ec = s.useCallback(() => {
            if (W === y.d.MOSAIC) {
                let e = (!ei && ["VIDEO", "CLIP", "AUDIO"].includes(J)) || "OTHER" === J;
                return er
                    ? null
                    : !et &&
                          (0, l.jsx)(T, {
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
                    className: $ ? L.yR : L.Yg,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => r(n),
                    "aria-label": P.intl.string(P.t["0+xZH0"]),
                    children: (0, l.jsx)(m.XSmallIcon, { size: "xs", color: "currentColor" }),
                })
            );
        }, [W, a, $, ei, J, er, et, ea, n, eo, eu, o, q, r, Y]);
    if (B)
        return (0, l.jsx)(h._, {
            className: w,
            readyState: v.Rv1.READY,
            src: "",
            width: Q ?? 350,
            height: Z ?? 350,
            maxWidth: G,
            maxHeight: F,
            mediaLayoutType: W,
            useFullWidth: V,
            zoomable: !1,
        });
    switch (J) {
        case "IMAGE":
            return (0, l.jsx)(I.G.Consumer, {
                children: (e) =>
                    (0, l.jsx)(_, {
                        item: n,
                        message: t,
                        width: Q,
                        height: Z,
                        autoPlay: i && !D,
                        onClick: c,
                        onContextMenu: g,
                        shouldHideMediaOptions: ei,
                        renderAccessory: e,
                        renderAdjacentContent: ec,
                        containerClassName: w,
                        className: R,
                        imageClassName: H,
                        shouldLink: k,
                        hiddenSpoilers: D,
                        responsive: !0,
                        mediaLayoutType: W,
                        maxWidth: G,
                        maxHeight: F,
                        useFullWidth: V,
                        handlePreloadImage: C,
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
                onContextMenu: g,
                renderAdjacentContent: ec,
                naturalWidth: Q,
                naturalHeight: Z,
                className: w,
                playable: k,
                responsive: !0,
                hiddenSpoilers: D,
                mediaLayoutType: W,
                maxWidth: G,
                maxHeight: F,
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
            if (null == U) return null;
            return (0, l.jsx)(U, {
                item: n,
                message: t,
                className: R,
                imageClassName: H,
                maxWidth: G,
                maxHeight: F,
                mediaLayoutType: W,
                useFullWidth: V,
            });
        case "AUDIO":
            return (0, l.jsx)(M, {
                item: n,
                message: t,
                className: w,
                playable: k,
                mimeType: ea,
                renderAdjacentContent: ec,
                onVolumeShow: () => en(!0),
                onVolumeHide: () => en(!1),
                onPlay: f,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, l.jsx)(O, {
                item: n,
                message: t,
                className: w,
                onClick: c,
                onContextMenu: g,
                renderAdjacentContent: ec,
            });
        case "OTHER":
            return (0, l.jsx)(b, {
                item: n,
                message: t,
                className: w,
                onClick: c,
                onContextMenu: g,
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
                I = r(n, (0, f.P)(i)),
                [j, A] = s.useState(I),
                [E, v] = s.useState(null != I);
            I !== j && (A(I), v(null != I));
            let P = (0, C.qZ)(I),
                M = u === y.d.MOSAIC,
                T = !M && ((null != h && h < 200) || (null != x && x < 50)),
                b = "IMAGE" === p || "VIDEO" === p || "CLIP" === p,
                U = (0, S.Xg)(p),
                w = d && null != I && (0, C.j8)(h, x),
                [R, H] = s.useState(!1);
            function k() {
                H(!0);
            }
            function D() {
                H(!1);
            }
            function W() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return (0, l.jsx)(O, {
                    ...m,
                    item: n,
                    message: i,
                    getObscureReason: r,
                    isSingleMosaicItem: d,
                    hiddenSpoilers: e,
                    className: a()(t, L.bq, {
                        [L.cd]: E && !T,
                        [L.rP]: E && I === g.Oc.SPOILER,
                        [L.xu]: E && null != I && g._K.has(I),
                        [L.sC]: E && e,
                        [L.mG]: E && T,
                    }),
                    focusable: !e,
                    mediaLayoutType: u,
                    useFullWidth: (!!w && !!e) || o,
                    isVisualMediaType: U,
                    onVideoControlsShow: k,
                    onVideoControlsHide: D,
                    forcePlaceholder: P && E,
                });
            }
            return (0, l.jsx)("div", {
                style: c ? { minWidth: 0, width: `${m.maxWidth}px` } : void 0,
                className: a()(L.wO, { [L.xV]: b, [L.D$]: o, [L.UI]: M, [L.JP]: M && U }),
                children:
                    null != I
                        ? (0, l.jsx)(_.Ay, {
                              type: _.Ay.Types.ATTACHMENT,
                              inline: T,
                              reason: I,
                              isSingleMosaicItem: d,
                              obscured: E,
                              containerStyles: (function (e, t, n) {
                                  if (!t) return;
                                  let l = e.width;
                                  if (void 0 !== e.width && void 0 !== e.height) {
                                      let { width: t } = (0, N.Uj)({
                                          width: e.width,
                                          height: e.height,
                                          maxWidth: 400,
                                          maxHeight: 300,
                                      });
                                      l = t;
                                  }
                                  return {
                                      ...(n !== y.d.MOSAIC && { maxWidth: l ?? "400px" }),
                                      width: "100%",
                                      height: "100%",
                                      justifySelf: "auto",
                                  };
                              })(n, b, u),
                              obscurityControlClassName: a()({ [L.yi]: "VIDEO" === p && d && !E && R }),
                              onToggleObscurity: () => v((e) => !e),
                              children: (e) => W(e),
                          })
                        : W(),
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
                spoiler: (0, r.Lt)(e.flags ?? 0, v.sbO.IS_SPOILER),
                contentType: e.content_type,
                srcIsAnimated: (0, r.Lt)(e.flags ?? 0, v.sbO.IS_ANIMATED),
            };
        },
        zB: T,
    },
);
