i.d(t, { Ay: () => T, rC: () => E, zB: () => O }), i(938796), i(321073);
var n = i(627968),
    s = i(64700),
    a = i(503698),
    l = i.n(a),
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
    f = i(302031),
    I = i(734057),
    N = i(174459),
    A = i(515718),
    v = i(448381),
    M = i(838541),
    w = i(652215),
    S = i(375708),
    W = i(267509),
    L = i(415779);
function E(e, t) {
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, v.NI)(e, t),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: (0, r.Lt)(e.flags ?? 0, w.sbO.IS_SPOILER),
        contentType: e.content_type,
        srcIsAnimated: (0, r.Lt)(e.flags ?? 0, w.sbO.IS_ANIMATED),
    };
}
function O(e) {
    let {
            mimeType: t,
            downloadURL: i,
            onRemoveItem: a,
            showDownload: r,
            isVisualMediaType: m,
            type: h,
            isSingleMosaicItem: g,
        } = e,
        p = s.useRef(null),
        [j, C] = s.useState(0);
    (0, c.i4)(p, (e) => {
        let { width: t } = e;
        null != t && C(Math.floor((t - 8) / 32));
    });
    let y = [];
    null != a &&
        y.push(
            (0, n.jsx)(
                o.m,
                {
                    text: S.intl.string(S.t["/XT3ij"]),
                    children: (0, n.jsx)(d.D, {
                        className: l()(L.HF, W.GC),
                        focusProps: { offset: 2 },
                        onClick: a,
                        "aria-label": S.intl.string(S.t["0+xZH0"]),
                        children: (0, n.jsx)(u.u, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                    }),
                },
                "remove",
            ),
        ),
        r &&
            !("CLIP" === h && g) &&
            y.push(
                (0, n.jsx)(
                    o.m,
                    {
                        text: S.intl.string(S.t["1WjMbC"]),
                        children: (0, n.jsx)(x.A, {
                            target: "_blank",
                            rel: "noreferrer noopener",
                            className: L.HF,
                            iconClassName: W.qG,
                            focusProps: { offset: 2 },
                            href: i,
                            mimeType: t,
                        }),
                    },
                    "download",
                ),
            );
    let f = Math.max(0, y.length - j);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            j > 0 && y.length > 0 && (0, n.jsx)("div", { className: l()(L.aq, { [L.XE]: !m }), children: y.slice(f) }),
            (0, n.jsx)("div", { ref: p, className: L.St }),
        ],
    });
}
function P(e) {
    let {
            message: t,
            item: i,
            autoPlayGif: a,
            canRemoveItem: l,
            onRemoveItem: r,
            onClick: o,
            handlePreloadImage: u,
            onContextMenu: c,
            onPlay: x,
            renderImageComponent: g,
            renderVideoComponent: p,
            renderAudioComponent: j,
            renderPlaintextFilePreview: f,
            renderGenericFileComponent: v,
            renderVisualPlaceholderComponent: L,
            className: E,
            imgContainerClassName: P,
            imgClassName: T,
            focusable: b,
            hiddenSpoilers: k,
            mediaLayoutType: H,
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
        [Q, Y] = s.useState(!1),
        J = t.getChannelId(),
        ee = I.A.getChannel(J),
        et = (0, y.A)(J),
        ei = s.useMemo(() => (null != K && -1 !== K.indexOf("/") ? K.split("/") : ["unknown", "unknown"]), [K]),
        en = !1;
    if (V) {
        (null == z || null == $) && (en = !0);
        let e = (0, A.U8)({ width: z ?? 0, height: $ ?? 0, maxWidth: F ?? M.k6, maxHeight: G ?? M.Rk });
        !_ && (e * (z ?? 0) < M.ie || e * ($ ?? 0) < M.ie) && (en = !0);
    }
    let es = s.useCallback(() => {
            r(i);
        }, [i, r]),
        ea = s.useCallback(() => {
            N.default.track(w.HAw.IMAGE_HOVERED, {
                guild_id: ee?.guild_id,
                channel_id: ee?.id,
                image_recommendations_shown: !1,
            });
        }, [ee]),
        el = s.useCallback(() => {
            if (H === M.dG.MOSAIC) {
                let e = (!et && ["VIDEO", "CLIP", "AUDIO"].includes(Z)) || "OTHER" === Z;
                return en
                    ? null
                    : !Q &&
                          (0, n.jsx)(O, {
                              mimeType: ei,
                              downloadURL: i.downloadUrl,
                              showDownload: e,
                              onRemoveItem: l ? es : void 0,
                              isVisualMediaType: V,
                              type: Z,
                              isSingleMosaicItem: q,
                          });
            }
            return (
                l &&
                (0, n.jsx)(d.D, {
                    className: B ? W.yR : W.Yg,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => r(i),
                    "aria-label": S.intl.string(S.t["0+xZH0"]),
                    children: (0, n.jsx)(m.P, { size: "xs", color: "currentColor" }),
                })
            );
        }, [H, l, B, et, Z, en, Q, ei, i, es, V, r, q]);
    if (U)
        return (0, n.jsx)(h._, {
            className: E,
            readyState: w.Rv1.READY,
            src: "",
            width: z ?? 350,
            height: $ ?? 350,
            maxWidth: F,
            maxHeight: G,
            mediaLayoutType: H,
            useFullWidth: _,
            zoomable: !1,
        });
    switch (Z) {
        case "IMAGE":
            return (0, n.jsx)(C.G.Consumer, {
                children: (e) =>
                    (0, n.jsx)(g, {
                        item: i,
                        message: t,
                        width: z,
                        height: $,
                        autoPlay: a && !k,
                        onClick: o,
                        onContextMenu: c,
                        shouldHideMediaOptions: et,
                        renderAccessory: e,
                        renderAdjacentContent: el,
                        containerClassName: E,
                        className: P,
                        imageClassName: T,
                        shouldLink: b,
                        hiddenSpoilers: k,
                        responsive: !0,
                        mediaLayoutType: H,
                        maxWidth: F,
                        maxHeight: G,
                        useFullWidth: _,
                        handlePreloadImage: u,
                        onMouseEnter: ea,
                    }),
            });
        case "VIDEO":
        case "CLIP":
            return (0, n.jsx)(p, {
                item: i,
                message: t,
                width: z,
                height: $,
                onClick: o,
                onContextMenu: c,
                renderAdjacentContent: el,
                naturalWidth: z,
                naturalHeight: $,
                className: E,
                playable: b,
                responsive: !0,
                hiddenSpoilers: k,
                mediaLayoutType: H,
                maxWidth: F,
                maxHeight: G,
                useFullWidth: _,
                mimeType: ei,
                onControlsShow: D,
                onControlsHide: R,
                downloadable: !et,
                isSingleMosaicItem: q,
                allowFullScreen: X,
                onPlay: x,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == L) return null;
            return (0, n.jsx)(L, {
                item: i,
                message: t,
                className: P,
                imageClassName: T,
                maxWidth: F,
                maxHeight: G,
                mediaLayoutType: H,
                useFullWidth: _,
            });
        case "AUDIO":
            return (0, n.jsx)(j, {
                item: i,
                message: t,
                className: E,
                playable: b,
                mimeType: ei,
                renderAdjacentContent: el,
                onVolumeShow: () => Y(!0),
                onVolumeHide: () => Y(!1),
                onPlay: x,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, n.jsx)(f, {
                item: i,
                message: t,
                className: E,
                onClick: o,
                onContextMenu: c,
                renderAdjacentContent: el,
            });
        case "OTHER":
            return (0, n.jsx)(v, {
                item: i,
                message: t,
                className: E,
                onClick: o,
                onContextMenu: c,
                renderAdjacentContent: el,
            });
        case "INVALID":
            return null;
    }
}
let T = function (e) {
    let {
            className: t,
            item: i,
            message: a,
            getObscureReason: r,
            useFullWidth: o,
            mediaLayoutType: d,
            isSingleMosaicItem: u,
            displayGridItem: m,
            ...h
        } = e,
        { width: c, height: x, type: C } = i,
        y = r(i, (0, j.P)(a)),
        [I, N] = s.useState(null != y),
        w = (0, g.qZ)(y),
        S = d === M.dG.MOSAIC,
        L = !S && ((null != c && c < 200) || (null != x && x < 50)),
        E = "IMAGE" === C || "VIDEO" === C || "CLIP" === C,
        O = (0, v.Xg)(C),
        T = u && null != y && (0, g.j8)(c, x),
        [b, k] = s.useState(!1);
    function H() {
        k(!0);
    }
    function F() {
        k(!1);
    }
    let G = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (0, n.jsx)(P, {
            ...h,
            item: i,
            message: a,
            getObscureReason: r,
            isSingleMosaicItem: u,
            hiddenSpoilers: e,
            className: l()(t, W.bq, {
                [W.cd]: I && !L,
                [W.rP]: I && y === p.Oc.SPOILER,
                [W.xu]: I && null != y && p._K.has(y),
                [W.sC]: I && e,
                [W.mG]: I && L,
            }),
            focusable: !e,
            mediaLayoutType: d,
            useFullWidth: (!!T && !!e) || o,
            isVisualMediaType: O,
            onVideoControlsShow: H,
            onVideoControlsHide: F,
            forcePlaceholder: w && I,
        });
    };
    return (0, n.jsx)("div", {
        style: m ? { minWidth: 0, width: `${h.maxWidth}px` } : void 0,
        className: l()(W.wO, { [W.xV]: E, [W.D$]: o, [W.UI]: S, [W.JP]: S && O }),
        children:
            null != y
                ? (0, n.jsx)(f.Ay, {
                      type: f.Ay.Types.ATTACHMENT,
                      inline: L,
                      reason: y,
                      isSingleMosaicItem: u,
                      obscured: I,
                      containerStyles: (function (e, t, i) {
                          if (!t) return;
                          let n = e.width;
                          if (void 0 !== e.width && void 0 !== e.height) {
                              let { width: t } = (0, A.Uj)({
                                  width: e.width,
                                  height: e.height,
                                  maxWidth: 400,
                                  maxHeight: 300,
                              });
                              n = t;
                          }
                          return {
                              ...(i !== M.dG.MOSAIC && { maxWidth: n ?? "400px" }),
                              width: "100%",
                              height: "100%",
                              justifySelf: "auto",
                          };
                      })(i, E, d),
                      obscurityControlClassName: l()({ [W.yi]: "VIDEO" === C && u && !I && b }),
                      onToggleObscurity: () => N((e) => !e),
                      children: (e) => G(e),
                  })
                : G(),
    });
};
