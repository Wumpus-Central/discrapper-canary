i.d(t, { Ay: () => T, rC: () => E, zB: () => O }), i(938796), i(321073);
var s = i(627968),
    n = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(665260),
    o = i(990078),
    d = i(939249),
    u = i(241326),
    m = i(789645),
    h = i(144165),
    c = i(765671),
    x = i(384015),
    g = i(390248),
    p = i(338717),
    j = i(33358),
    C = i(643612),
    y = i(207133),
    I = i(302031),
    f = i(734057),
    N = i(174459),
    A = i(515718),
    v = i(448381),
    M = i(838541),
    w = i(652215),
    W = i(375708),
    S = i(267509),
    L = i(415779);
function E(e, t) {
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, v.NI)(e, t),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type,
        srcIsAnimated: (0, r.Lt)(e.flags ?? 0, w.sbO.IS_ANIMATED),
    };
}
let O = (e) => {
    let {
            mimeType: t,
            downloadURL: i,
            onRemoveItem: l,
            showDownload: r,
            isVisualMediaType: m,
            type: h,
            isSingleMosaicItem: g,
        } = e,
        p = n.useRef(null),
        [j, C] = n.useState(0);
    (0, c.i4)(p, (e) => {
        let { width: t } = e;
        null != t && C(Math.floor((t - 8) / 32));
    });
    let y = [];
    null != l &&
        y.push(
            (0, s.jsx)(
                o.m,
                {
                    text: W.intl.string(W.t["/XT3ij"]),
                    children: (0, s.jsx)(d.D, {
                        className: a()(L.HF, S.GC),
                        focusProps: { offset: 2 },
                        onClick: l,
                        "aria-label": W.intl.string(W.t["0+xZH0"]),
                        children: (0, s.jsx)(u.u, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                    }),
                },
                "remove",
            ),
        ),
        r &&
            !("CLIP" === h && g) &&
            y.push(
                (0, s.jsx)(
                    o.m,
                    {
                        text: W.intl.string(W.t["1WjMbC"]),
                        children: (0, s.jsx)(x.A, {
                            target: "_blank",
                            rel: "noreferrer noopener",
                            className: L.HF,
                            iconClassName: S.qG,
                            focusProps: { offset: 2 },
                            href: i,
                            mimeType: t,
                        }),
                    },
                    "download",
                ),
            );
    let I = Math.max(0, y.length - j);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            j > 0 && y.length > 0 && (0, s.jsx)("div", { className: a()(L.aq, { [L.XE]: !m }), children: y.slice(I) }),
            (0, s.jsx)("div", { ref: p, className: L.St }),
        ],
    });
};
function P(e) {
    let {
            message: t,
            item: i,
            autoPlayGif: l,
            canRemoveItem: a,
            onRemoveItem: r,
            onClick: o,
            handlePreloadImage: u,
            onContextMenu: c,
            onPlay: x,
            renderImageComponent: g,
            renderVideoComponent: p,
            renderAudioComponent: j,
            renderPlaintextFilePreview: I,
            renderGenericFileComponent: v,
            renderVisualPlaceholderComponent: L,
            className: E,
            imgContainerClassName: P,
            imgClassName: T,
            focusable: k,
            hiddenSpoilers: H,
            mediaLayoutType: b,
            maxWidth: F,
            maxHeight: G,
            useFullWidth: _,
            isVisualMediaType: V,
            onVideoControlsShow: D,
            onVideoControlsHide: R,
            forcePlaceholder: U,
            isSingleMosaicItem: q,
            allowFullScreen: X,
        } = e,
        { width: z, height: $, spoiler: B, type: Z, contentType: K } = i,
        [Q, Y] = n.useState(!1),
        J = t.getChannelId(),
        ee = f.A.getChannel(J),
        et = (0, y.A)(J),
        ei = n.useMemo(() => (null != K && -1 !== K.indexOf("/") ? K.split("/") : ["unknown", "unknown"]), [K]),
        es = !1;
    if (V) {
        (null == z || null == $) && (es = !0);
        let e = (0, A.U8)({ width: z ?? 0, height: $ ?? 0, maxWidth: F ?? M.k6, maxHeight: G ?? M.Rk });
        !_ && (e * (z ?? 0) < M.ie || e * ($ ?? 0) < M.ie) && (es = !0);
    }
    let en = n.useCallback(() => {
            r(i);
        }, [i, r]),
        el = n.useCallback(() => {
            N.default.track(w.HAw.IMAGE_HOVERED, {
                guild_id: ee?.guild_id,
                channel_id: ee?.id,
                image_recommendations_shown: !1,
            });
        }, [ee]),
        ea = n.useCallback(() => {
            if (b === M.dG.MOSAIC) {
                let e = (!et && ["VIDEO", "CLIP", "AUDIO"].includes(Z)) || "OTHER" === Z;
                return es
                    ? null
                    : !Q &&
                          (0, s.jsx)(O, {
                              mimeType: ei,
                              downloadURL: i.downloadUrl,
                              showDownload: e,
                              onRemoveItem: a ? en : void 0,
                              isVisualMediaType: V,
                              type: Z,
                              isSingleMosaicItem: q,
                          });
            }
            return (
                a &&
                (0, s.jsx)(d.D, {
                    className: B ? S.yR : S.Yg,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => r(i),
                    "aria-label": W.intl.string(W.t["0+xZH0"]),
                    children: (0, s.jsx)(m.P, { size: "xs", color: "currentColor" }),
                })
            );
        }, [b, a, B, et, Z, es, Q, ei, i, en, V, r, q]);
    if (U)
        return (0, s.jsx)(h._, {
            className: E,
            readyState: w.Rv1.READY,
            src: "",
            width: z ?? 350,
            height: $ ?? 350,
            maxWidth: F,
            maxHeight: G,
            mediaLayoutType: b,
            useFullWidth: _,
            zoomable: !1,
        });
    switch (Z) {
        case "IMAGE":
            return (0, s.jsx)(C.G.Consumer, {
                children: (e) =>
                    (0, s.jsx)(g, {
                        item: i,
                        message: t,
                        width: z,
                        height: $,
                        autoPlay: l && !H,
                        onClick: o,
                        onContextMenu: c,
                        shouldHideMediaOptions: et,
                        renderAccessory: e,
                        renderAdjacentContent: ea,
                        containerClassName: E,
                        className: P,
                        imageClassName: T,
                        shouldLink: k,
                        hiddenSpoilers: H,
                        responsive: !0,
                        mediaLayoutType: b,
                        maxWidth: F,
                        maxHeight: G,
                        useFullWidth: _,
                        handlePreloadImage: u,
                        onMouseEnter: el,
                    }),
            });
        case "VIDEO":
        case "CLIP":
            return (0, s.jsx)(p, {
                item: i,
                message: t,
                width: z,
                height: $,
                onClick: o,
                onContextMenu: c,
                renderAdjacentContent: ea,
                naturalWidth: z,
                naturalHeight: $,
                className: E,
                playable: k,
                responsive: !0,
                hiddenSpoilers: H,
                mediaLayoutType: b,
                maxWidth: F,
                maxHeight: G,
                useFullWidth: _,
                mimeType: ei,
                onControlsShow: D,
                onControlsHide: R,
                downloadable: !et,
                isSingleMosaicItem: q,
                allowFullScreen: X,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == L) return null;
            return (0, s.jsx)(L, {
                item: i,
                message: t,
                className: P,
                imageClassName: T,
                maxWidth: F,
                maxHeight: G,
                mediaLayoutType: b,
                useFullWidth: _,
            });
        case "AUDIO":
            return (0, s.jsx)(j, {
                item: i,
                message: t,
                className: E,
                playable: k,
                mimeType: ei,
                renderAdjacentContent: ea,
                onVolumeShow: () => Y(!0),
                onVolumeHide: () => Y(!1),
                onPlay: x,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, s.jsx)(I, {
                item: i,
                message: t,
                className: E,
                onClick: o,
                onContextMenu: c,
                renderAdjacentContent: ea,
            });
        case "OTHER":
            return (0, s.jsx)(v, {
                item: i,
                message: t,
                className: E,
                onClick: o,
                onContextMenu: c,
                renderAdjacentContent: ea,
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
            ...h
        } = e,
        { width: c, height: x, type: C } = i,
        y = r(i, (0, j.P)(l)),
        [f, N] = n.useState(null != y),
        w = (0, g.qZ)(y),
        W = d === M.dG.MOSAIC,
        L = !W && ((null != c && c < 200) || (null != x && x < 50)),
        E = "IMAGE" === C || "VIDEO" === C || "CLIP" === C,
        O = (0, v.Xg)(C),
        T = u && null != y && (0, g.j8)(c, x),
        [k, H] = n.useState(!1),
        b = () => {
            H(!0);
        },
        F = () => {
            H(!1);
        },
        G = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, s.jsx)(P, {
                ...h,
                item: i,
                message: l,
                getObscureReason: r,
                isSingleMosaicItem: u,
                hiddenSpoilers: e,
                className: a()(t, S.bq, {
                    [S.cd]: f && !L,
                    [S.rP]: f && y === p.Oc.SPOILER,
                    [S.xu]: f && null != y && p._K.has(y),
                    [S.sC]: f && e,
                    [S.mG]: f && L,
                }),
                focusable: !e,
                mediaLayoutType: d,
                useFullWidth: (!!T && !!e) || o,
                isVisualMediaType: O,
                onVideoControlsShow: b,
                onVideoControlsHide: F,
                forcePlaceholder: w && f,
            });
        };
    return (0, s.jsx)("div", {
        style: m ? { minWidth: 0, width: `${h.maxWidth}px` } : void 0,
        className: a()(S.wO, { [S.xV]: E, [S.D$]: o, [S.UI]: W, [S.JP]: W && O }),
        children:
            null != y
                ? (0, s.jsx)(I.Ay, {
                      type: I.Ay.Types.ATTACHMENT,
                      inline: L,
                      reason: y,
                      isSingleMosaicItem: u,
                      obscured: f,
                      containerStyles: (function (e, t, i) {
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
                              ...(i !== M.dG.MOSAIC && { maxWidth: s ?? "400px" }),
                              width: "100%",
                              height: "100%",
                              justifySelf: "auto",
                          };
                      })(i, E, d),
                      obscurityControlClassName: a()({ [S.yi]: "VIDEO" === C && u && !f && k }),
                      onToggleObscurity: () => N((e) => !e),
                      children: (e) => G(e),
                  })
                : G(),
    });
};
