i.d(t, { Ay: () => w, rC: () => v, zB: () => O }), i(938796), i(321073);
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(665260),
    o = i(990078),
    u = i(397927),
    d = i(765671),
    m = i(384015),
    c = i(390248),
    h = i(338717),
    x = i(33358),
    g = i(643612),
    p = i(207133),
    I = i(302031),
    f = i(734057),
    A = i(954571),
    C = i(515718),
    j = i(448381),
    y = i(838541),
    E = i(652215),
    N = i(985018),
    M = i(637221),
    L = i(210739);
function v(e, t) {
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, j.NI)(e, t),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type,
        srcIsAnimated: (0, r.Lt)(e.flags ?? 0, E.sbO.IS_ANIMATED),
    };
}
let O = (e) => {
    let { mimeType: t, downloadURL: i, onRemoveItem: l, showDownload: r, isVisualMediaType: c } = e,
        h = s.useRef(null),
        [x, g] = s.useState(0);
    (0, d.i4)(h, (e) => {
        let { width: t } = e;
        null != t && g(Math.floor((t - 8) / 32));
    });
    let p = [];
    null != l &&
        p.push(
            (0, n.jsx)(
                o.m,
                {
                    text: N.intl.string(N.t["/XT3ij"]),
                    children: (0, n.jsx)(u.DUT, {
                        className: a()(L.HF, M.GC),
                        focusProps: { offset: 2 },
                        onClick: l,
                        "aria-label": N.intl.string(N.t["0+xZH0"]),
                        children: (0, n.jsx)(u.ucK, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                    }),
                },
                "remove",
            ),
        ),
        r &&
            p.push(
                (0, n.jsx)(
                    o.m,
                    {
                        text: N.intl.string(N.t["1WjMbC"]),
                        children: (0, n.jsx)(m.A, {
                            target: "_blank",
                            rel: "noreferrer noopener",
                            className: L.HF,
                            iconClassName: M.qG,
                            focusProps: { offset: 2 },
                            href: i,
                            mimeType: t,
                        }),
                    },
                    "download",
                ),
            );
    let I = Math.max(0, p.length - x);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            x > 0 && p.length > 0 && (0, n.jsx)("div", { className: a()(L.aq, { [L.XE]: !c }), children: p.slice(I) }),
            (0, n.jsx)("div", { ref: h, className: L.St }),
        ],
    });
};
function S(e) {
    let {
            message: t,
            item: i,
            autoPlayGif: l,
            canRemoveItem: r,
            onRemoveItem: o,
            onClick: d,
            handlePreloadImage: m,
            onContextMenu: c,
            onPlay: h,
            renderImageComponent: x,
            renderVideoComponent: I,
            renderAudioComponent: j,
            renderPlaintextFilePreview: L,
            renderGenericFileComponent: v,
            renderVisualPlaceholderComponent: S,
            className: w,
            imgContainerClassName: P,
            imgClassName: W,
            focusable: T,
            hiddenSpoilers: _,
            mediaLayoutType: D,
            maxWidth: H,
            maxHeight: b,
            hasFooter: F,
            useFullWidth: G,
            isVisualMediaType: V,
            onVideoControlsShow: k,
            onVideoControlsHide: R,
            forcePlaceholder: U,
            isSingleMosaicItem: q,
        } = e,
        { width: X, height: Q, spoiler: z, type: B, contentType: $ } = i,
        [K, Y] = s.useState(!1),
        Z = t.getChannelId(),
        J = f.A.getChannel(Z),
        ee = (0, p.A)(Z),
        et = s.useMemo(() => (null != $ && -1 !== $.indexOf("/") ? $.split("/") : ["unknown", "unknown"]), [$]),
        ei = !1;
    if (V) {
        (null == X || null == Q) && (ei = !0);
        let e = (0, C.U8)({ width: X ?? 0, height: Q ?? 0, maxWidth: H ?? y.k6, maxHeight: b ?? y.Rk });
        !G && (e * (X ?? 0) < y.ie || e * (Q ?? 0) < y.ie) && (ei = !0);
    }
    let en = s.useCallback(() => {
            o(i);
        }, [i, o]),
        es = s.useCallback(() => {
            A.default.track(E.HAw.IMAGE_HOVERED, {
                guild_id: J?.guild_id,
                channel_id: J?.id,
                image_recommendations_shown: !1,
            });
        }, [J]),
        el = s.useCallback(() => {
            if (D === y.dG.MOSAIC) {
                let e = (!ee && ["VIDEO", "CLIP", "AUDIO"].includes(B)) || "OTHER" === B;
                return ei
                    ? null
                    : !K &&
                          (0, n.jsx)(O, {
                              mimeType: et,
                              downloadURL: i.downloadUrl,
                              showDownload: e,
                              onRemoveItem: r ? en : void 0,
                              isVisualMediaType: V,
                          });
            }
            return (
                r &&
                (0, n.jsx)(u.DUT, {
                    className: z ? M.yR : M.Yg,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => o(i),
                    "aria-label": N.intl.string(N.t["0+xZH0"]),
                    children: (0, n.jsx)(u.PGe, { size: "xs", color: "currentColor" }),
                })
            );
        }, [D, r, z, ee, B, ei, K, et, i, en, V, o]);
    if (U)
        return (0, n.jsx)(u._V3, {
            className: w,
            readyState: E.Rv1.READY,
            src: "",
            width: X ?? 350,
            height: Q ?? 350,
            maxWidth: H,
            maxHeight: b,
            mediaLayoutType: D,
            useFullWidth: G,
            zoomable: !1,
        });
    switch (B) {
        case "IMAGE":
            return (0, n.jsx)(g.G.Consumer, {
                children: (e) =>
                    (0, n.jsx)(x, {
                        item: i,
                        message: t,
                        width: X,
                        height: Q,
                        autoPlay: l && !_,
                        onClick: d,
                        onContextMenu: c,
                        shouldHideMediaOptions: ee,
                        renderAccessory: e,
                        renderAdjacentContent: el,
                        containerClassName: w,
                        className: P,
                        imageClassName: W,
                        shouldLink: T,
                        hiddenSpoilers: _,
                        responsive: !0,
                        mediaLayoutType: D,
                        maxWidth: H,
                        maxHeight: b,
                        useFullWidth: G,
                        handlePreloadImage: m,
                        onMouseEnter: es,
                    }),
            });
        case "VIDEO":
        case "CLIP":
            return (0, n.jsx)(I, {
                item: i,
                message: t,
                width: X,
                height: Q,
                onClick: d,
                onContextMenu: c,
                renderAdjacentContent: el,
                naturalWidth: X,
                naturalHeight: Q,
                className: a()(w, { [M.yq]: F }),
                playable: T,
                responsive: !0,
                hiddenSpoilers: _,
                mediaLayoutType: D,
                maxWidth: H,
                maxHeight: b,
                useFullWidth: G,
                mimeType: et,
                onControlsShow: k,
                onControlsHide: R,
                downloadable: !ee,
                mediaPlayerClassName: F ? M.yq : void 0,
                isSingleMosaicItem: q,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == S) return null;
            return (0, n.jsx)(S, {
                item: i,
                message: t,
                className: P,
                imageClassName: W,
                maxWidth: H,
                maxHeight: b,
                mediaLayoutType: D,
                useFullWidth: G,
            });
        case "AUDIO":
            return (0, n.jsx)(j, {
                item: i,
                message: t,
                className: w,
                playable: T,
                mimeType: et,
                renderAdjacentContent: el,
                onVolumeShow: () => Y(!0),
                onVolumeHide: () => Y(!1),
                onPlay: h,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, n.jsx)(L, {
                item: i,
                message: t,
                className: w,
                onClick: d,
                onContextMenu: c,
                renderAdjacentContent: el,
            });
        case "OTHER":
            return (0, n.jsx)(v, {
                item: i,
                message: t,
                className: w,
                onClick: d,
                onContextMenu: c,
                renderAdjacentContent: el,
            });
        case "INVALID":
            return null;
    }
}
let w = function (e) {
    let {
            className: t,
            item: i,
            message: l,
            getObscureReason: r,
            useFullWidth: o,
            mediaLayoutType: u,
            isSingleMosaicItem: d,
            footer: m,
            displayGridItem: g,
            ...p
        } = e,
        { width: f, height: A, type: E } = i,
        N = r(i, (0, x.P)(l)),
        [L, v] = s.useState(null != N),
        O = (0, c.qZ)(N),
        w = u === y.dG.MOSAIC,
        P = !w && ((null != f && f < 200) || (null != A && A < 50)),
        W = "IMAGE" === E || "VIDEO" === E,
        T = (0, j.Xg)(E),
        _ = d && null != N && (0, c.j8)(f, A),
        [D, H] = s.useState(!1),
        b = () => {
            H(!0);
        },
        F = () => {
            H(!1);
        },
        G = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, n.jsx)(S, {
                ...p,
                item: i,
                message: l,
                getObscureReason: r,
                isSingleMosaicItem: d,
                hiddenSpoilers: e,
                className: a()(t, M.bq, {
                    [M.cd]: L && !P,
                    [M.rP]: L && N === h.Oc.SPOILER,
                    [M.xu]: L && null != N && h._K.has(N),
                    [M.sC]: L && e,
                    [M.mG]: L && P,
                }),
                focusable: !e,
                mediaLayoutType: u,
                hasFooter: null != m,
                useFullWidth: (!!_ && !!e) || o,
                isVisualMediaType: T,
                onVideoControlsShow: b,
                onVideoControlsHide: F,
                forcePlaceholder: O && L,
            });
        };
    return (0, n.jsxs)("div", {
        style: g ? { minWidth: 0, width: `${p.maxWidth}px` } : void 0,
        className: a()(M.wO, { [M.xV]: W, [M.D$]: o, [M.UI]: w, [M.JP]: w && T, [M.hU]: null != m }),
        children: [
            null != N
                ? (0, n.jsx)(I.Ay, {
                      type: I.Ay.Types.ATTACHMENT,
                      inline: P,
                      reason: N,
                      isSingleMosaicItem: d,
                      obscured: L,
                      containerStyles: (function (e, t, i) {
                          if (!t) return;
                          let n = e.width;
                          if (void 0 !== e.width && void 0 !== e.height) {
                              let { width: t } = (0, C.Uj)({
                                  width: e.width,
                                  height: e.height,
                                  maxWidth: 400,
                                  maxHeight: 300,
                              });
                              n = t;
                          }
                          return {
                              ...(i !== y.dG.MOSAIC && { maxWidth: n ?? "400px" }),
                              width: "100%",
                              height: "100%",
                              justifySelf: "auto",
                          };
                      })(i, W, u),
                      obscurityControlClassName: a()({ [M.yi]: "VIDEO" === E && d && !L && D }),
                      onToggleObscurity: () => v((e) => !e),
                      children: (e) => G(e),
                  })
                : G(),
            m,
        ],
    });
};
