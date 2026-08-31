i.d(t, { Ay: () => T, rC: () => E, zB: () => O }), i(938796), i(321073);
var s = i(477900),
    n = i(582128),
    l = i(503698),
    a = i.n(l),
    r = i(665260),
    o = i(866665),
    d = i(939249),
    u = i(22231),
    m = i(241326),
    c = i(789645),
    h = i(144165),
    x = i(765671),
    g = i(384015),
    p = i(390248),
    j = i(338717),
    C = i(33358),
    f = i(643612),
    y = i(207133),
    I = i(302031),
    N = i(734057),
    A = i(174459),
    v = i(515718),
    w = i(448381),
    M = i(838541),
    S = i(652215),
    W = i(375708),
    L = i(645970),
    P = i(562146);
function E(e, t) {
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, w.NI)(e, t),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: (0, r.Lt)(e.flags ?? 0, S.sbO.IS_SPOILER),
        contentType: e.content_type,
        srcIsAnimated: (0, r.Lt)(e.flags ?? 0, S.sbO.IS_ANIMATED),
    };
}
function O(e) {
    let {
            mimeType: t,
            downloadURL: i,
            onRemoveItem: l,
            onEditItem: r,
            showDownload: c,
            isVisualMediaType: h,
            type: p,
            isSingleMosaicItem: j,
        } = e,
        C = n.useRef(null),
        [f, y] = n.useState(0);
    (0, x.i4)(C, (e) => {
        let { width: t } = e;
        null != t && y(Math.floor((t - 8) / 32));
    });
    let I = "CLIP" === p && j,
        N = [];
    null == r ||
        I ||
        N.push(
            (0, s.jsx)(
                o.m,
                {
                    text: W.intl.string(W.t.Y8ujqr),
                    children: (0, s.jsx)(d.D, {
                        className: P.HF,
                        focusProps: { offset: 2 },
                        onClick: r,
                        "aria-label": W.intl.string(W.t.Y8ujqr),
                        children: (0, s.jsx)(u.PencilIcon, {
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
        null != l &&
            N.push(
                (0, s.jsx)(
                    o.m,
                    {
                        text: W.intl.string(W.t["/XT3ij"]),
                        children: (0, s.jsx)(d.D, {
                            className: a()(P.HF, L.GC),
                            focusProps: { offset: 2 },
                            onClick: l,
                            "aria-label": W.intl.string(W.t["0+xZH0"]),
                            children: (0, s.jsx)(m.TrashIcon, {
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
        c &&
            !I &&
            N.push(
                (0, s.jsx)(
                    o.m,
                    {
                        text: W.intl.string(W.t["1WjMbC"]),
                        children: (0, s.jsx)(g.A, {
                            target: "_blank",
                            rel: "noreferrer noopener",
                            className: P.HF,
                            iconClassName: L.qG,
                            focusProps: { offset: 2 },
                            href: i,
                            mimeType: t,
                        }),
                    },
                    "download",
                ),
            );
    let A = Math.max(0, N.length - f);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            f > 0 && N.length > 0 && (0, s.jsx)("div", { className: a()(P.aq, { [P.XE]: !h }), children: N.slice(A) }),
            (0, s.jsx)("div", { ref: C, className: P.St }),
        ],
    });
}
function k(e) {
    let {
            message: t,
            item: i,
            autoPlayGif: l,
            canRemoveItem: a,
            onRemoveItem: r,
            canEditItem: o,
            onEditItem: u,
            onClick: m,
            onSeekRequest: x,
            handlePreloadImage: g,
            onContextMenu: p,
            onPlay: j,
            renderImageComponent: C,
            renderVideoComponent: I,
            renderAudioComponent: w,
            renderPlaintextFilePreview: P,
            renderGenericFileComponent: E,
            renderVisualPlaceholderComponent: k,
            className: T,
            imgContainerClassName: b,
            imgClassName: H,
            focusable: F,
            hiddenSpoilers: G,
            mediaLayoutType: _,
            maxWidth: D,
            maxHeight: R,
            useFullWidth: V,
            isVisualMediaType: q,
            onVideoControlsShow: U,
            onVideoControlsHide: X,
            forcePlaceholder: z,
            isSingleMosaicItem: Y,
            allowFullScreen: $,
        } = e,
        { width: B, height: Z, spoiler: K, type: Q, contentType: J } = i,
        [ee, et] = n.useState(!1),
        ei = t.getChannelId(),
        es = N.A.getChannel(ei),
        en = (0, y.A)(ei),
        el = n.useMemo(() => (null != J && -1 !== J.indexOf("/") ? J.split("/") : ["unknown", "unknown"]), [J]),
        ea = !1;
    if (q) {
        (null == B || null == Z) && (ea = !0);
        let e = (0, v.U8)({ width: B ?? 0, height: Z ?? 0, maxWidth: D ?? M.k6, maxHeight: R ?? M.Rk });
        !V && (e * (B ?? 0) < M.ie || e * (Z ?? 0) < M.ie) && (ea = !0);
    }
    let er = n.useCallback(() => {
            r(i);
        }, [i, r]),
        eo = n.useCallback(() => {
            u(i);
        }, [i, u]),
        ed = n.useCallback(() => {
            A.default.track(S.HAw.IMAGE_HOVERED, {
                guild_id: es?.guild_id,
                channel_id: es?.id,
                image_recommendations_shown: !1,
            });
        }, [es]),
        eu = n.useCallback(() => {
            if (_ === M.dG.MOSAIC) {
                let e = (!en && ["VIDEO", "CLIP", "AUDIO"].includes(Q)) || "OTHER" === Q;
                return ea
                    ? null
                    : !ee &&
                          (0, s.jsx)(O, {
                              mimeType: el,
                              downloadURL: i.downloadUrl,
                              showDownload: e,
                              onRemoveItem: a ? er : void 0,
                              onEditItem: o ? eo : void 0,
                              isVisualMediaType: q,
                              type: Q,
                              isSingleMosaicItem: Y,
                          });
            }
            return (
                a &&
                (0, s.jsx)(d.D, {
                    className: K ? L.yR : L.Yg,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => r(i),
                    "aria-label": W.intl.string(W.t["0+xZH0"]),
                    children: (0, s.jsx)(c.P, { size: "xs", color: "currentColor" }),
                })
            );
        }, [_, a, K, en, Q, ea, ee, el, i, er, eo, o, q, r, Y]);
    if (z)
        return (0, s.jsx)(h._, {
            className: T,
            readyState: S.Rv1.READY,
            src: "",
            width: B ?? 350,
            height: Z ?? 350,
            maxWidth: D,
            maxHeight: R,
            mediaLayoutType: _,
            useFullWidth: V,
            zoomable: !1,
        });
    switch (Q) {
        case "IMAGE":
            return (0, s.jsx)(f.G.Consumer, {
                children: (e) =>
                    (0, s.jsx)(C, {
                        item: i,
                        message: t,
                        width: B,
                        height: Z,
                        autoPlay: l && !G,
                        onClick: m,
                        onContextMenu: p,
                        shouldHideMediaOptions: en,
                        renderAccessory: e,
                        renderAdjacentContent: eu,
                        containerClassName: T,
                        className: b,
                        imageClassName: H,
                        shouldLink: F,
                        hiddenSpoilers: G,
                        responsive: !0,
                        mediaLayoutType: _,
                        maxWidth: D,
                        maxHeight: R,
                        useFullWidth: V,
                        handlePreloadImage: g,
                        onMouseEnter: ed,
                    }),
            });
        case "VIDEO":
        case "CLIP":
            return (0, s.jsx)(I, {
                item: i,
                message: t,
                width: B,
                height: Z,
                onClick: m,
                onSeekRequest: x,
                onContextMenu: p,
                renderAdjacentContent: eu,
                naturalWidth: B,
                naturalHeight: Z,
                className: T,
                playable: F,
                responsive: !0,
                hiddenSpoilers: G,
                mediaLayoutType: _,
                maxWidth: D,
                maxHeight: R,
                useFullWidth: V,
                mimeType: el,
                onControlsShow: U,
                onControlsHide: X,
                downloadable: !en,
                isSingleMosaicItem: Y,
                allowFullScreen: $,
                onPlay: j,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == k) return null;
            return (0, s.jsx)(k, {
                item: i,
                message: t,
                className: b,
                imageClassName: H,
                maxWidth: D,
                maxHeight: R,
                mediaLayoutType: _,
                useFullWidth: V,
            });
        case "AUDIO":
            return (0, s.jsx)(w, {
                item: i,
                message: t,
                className: T,
                playable: F,
                mimeType: el,
                renderAdjacentContent: eu,
                onVolumeShow: () => et(!0),
                onVolumeHide: () => et(!1),
                onPlay: j,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, s.jsx)(P, {
                item: i,
                message: t,
                className: T,
                onClick: m,
                onContextMenu: p,
                renderAdjacentContent: eu,
            });
        case "OTHER":
            return (0, s.jsx)(E, {
                item: i,
                message: t,
                className: T,
                onClick: m,
                onContextMenu: p,
                renderAdjacentContent: eu,
            });
        case "INVALID":
            return null;
    }
}
let T = function (e) {
    let {
            className: t,
            item: i,
            message: l,
            getObscureReason: r,
            useFullWidth: o,
            mediaLayoutType: d,
            isSingleMosaicItem: u,
            displayGridItem: m,
            ...c
        } = e,
        { width: h, height: x, type: g } = i,
        f = r(i, (0, C.P)(l)),
        [y, N] = n.useState(f),
        [A, S] = n.useState(null != f);
    f !== y && (N(f), S(null != f));
    let W = (0, p.qZ)(f),
        P = d === M.dG.MOSAIC,
        E = !P && ((null != h && h < 200) || (null != x && x < 50)),
        O = "IMAGE" === g || "VIDEO" === g || "CLIP" === g,
        T = (0, w.Xg)(g),
        b = u && null != f && (0, p.j8)(h, x),
        [H, F] = n.useState(!1);
    function G() {
        F(!0);
    }
    function _() {
        F(!1);
    }
    function D() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (0, s.jsx)(k, {
            ...c,
            item: i,
            message: l,
            getObscureReason: r,
            isSingleMosaicItem: u,
            hiddenSpoilers: e,
            className: a()(t, L.bq, {
                [L.cd]: A && !E,
                [L.rP]: A && f === j.Oc.SPOILER,
                [L.xu]: A && null != f && j._K.has(f),
                [L.sC]: A && e,
                [L.mG]: A && E,
            }),
            focusable: !e,
            mediaLayoutType: d,
            useFullWidth: (!!b && !!e) || o,
            isVisualMediaType: T,
            onVideoControlsShow: G,
            onVideoControlsHide: _,
            forcePlaceholder: W && A,
        });
    }
    return (0, s.jsx)("div", {
        style: m ? { minWidth: 0, width: `${c.maxWidth}px` } : void 0,
        className: a()(L.wO, { [L.xV]: O, [L.D$]: o, [L.UI]: P, [L.JP]: P && T }),
        children:
            null != f
                ? (0, s.jsx)(I.Ay, {
                      type: I.Ay.Types.ATTACHMENT,
                      inline: E,
                      reason: f,
                      isSingleMosaicItem: u,
                      obscured: A,
                      containerStyles: (function (e, t, i) {
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
                              ...(i !== M.dG.MOSAIC && { maxWidth: s ?? "400px" }),
                              width: "100%",
                              height: "100%",
                              justifySelf: "auto",
                          };
                      })(i, O, d),
                      obscurityControlClassName: a()({ [L.yi]: "VIDEO" === g && u && !A && H }),
                      onToggleObscurity: () => S((e) => !e),
                      children: (e) => D(e),
                  })
                : D(),
    });
};
