n.d(t, { Ay: () => S, rC: () => v, zB: () => O }), n(938796), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(665260),
    o = n(990078),
    u = n(397927),
    d = n(765671),
    m = n(384015),
    c = n(390248),
    h = n(338717),
    x = n(33358),
    g = n(643612),
    p = n(207133),
    I = n(302031),
    f = n(734057),
    A = n(954571),
    C = n(515718),
    j = n(448381),
    y = n(838541),
    E = n(652215),
    N = n(985018),
    M = n(9902),
    L = n(458054);
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
    let { mimeType: t, downloadURL: n, onRemoveItem: l, showDownload: r, isVisualMediaType: c } = e,
        h = s.useRef(null),
        [x, g] = s.useState(0);
    (0, d.i4)(h, (e) => {
        let { width: t } = e;
        null != t && g(Math.floor((t - 8) / 32));
    });
    let p = [];
    null != l &&
        p.push(
            (0, i.jsx)(
                o.m,
                {
                    text: N.intl.string(N.t["/XT3ij"]),
                    children: (0, i.jsx)(u.DUT, {
                        className: a()(L.HF, M.GC),
                        focusProps: { offset: 2 },
                        onClick: l,
                        "aria-label": N.intl.string(N.t["0+xZH0"]),
                        children: (0, i.jsx)(u.ucK, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                    }),
                },
                "remove",
            ),
        ),
        r &&
            p.push(
                (0, i.jsx)(
                    o.m,
                    {
                        text: N.intl.string(N.t["1WjMbC"]),
                        children: (0, i.jsx)(m.A, {
                            target: "_blank",
                            rel: "noreferrer noopener",
                            className: L.HF,
                            iconClassName: M.qG,
                            focusProps: { offset: 2 },
                            href: n,
                            mimeType: t,
                        }),
                    },
                    "download",
                ),
            );
    let I = Math.max(0, p.length - x);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            x > 0 && p.length > 0 && (0, i.jsx)("div", { className: a()(L.aq, { [L.XE]: !c }), children: p.slice(I) }),
            (0, i.jsx)("div", { ref: h, className: L.St }),
        ],
    });
};
function w(e) {
    let {
            message: t,
            item: n,
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
            renderVisualPlaceholderComponent: w,
            className: S,
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
        } = e,
        { width: q, height: X, spoiler: Q, type: z, contentType: B } = n,
        [$, K] = s.useState(!1),
        Y = t.getChannelId(),
        Z = f.A.getChannel(Y),
        J = (0, p.A)(Y),
        ee = s.useMemo(() => (null != B && -1 !== B.indexOf("/") ? B.split("/") : ["unknown", "unknown"]), [B]),
        et = !1;
    if (V) {
        (null == q || null == X) && (et = !0);
        let e = (0, C.U8)({ width: q ?? 0, height: X ?? 0, maxWidth: H ?? y.k6, maxHeight: b ?? y.Rk });
        !G && (e * (q ?? 0) < y.ie || e * (X ?? 0) < y.ie) && (et = !0);
    }
    let en = s.useCallback(() => {
            o(n);
        }, [n, o]),
        ei = s.useCallback(() => {
            A.default.track(E.HAw.IMAGE_HOVERED, {
                guild_id: Z?.guild_id,
                channel_id: Z?.id,
                image_recommendations_shown: !1,
            });
        }, [Z]),
        es = s.useCallback(() => {
            if (D === y.dG.MOSAIC) {
                let e = (!J && ["VIDEO", "CLIP", "AUDIO"].includes(z)) || "OTHER" === z;
                return et
                    ? null
                    : !$ &&
                          (0, i.jsx)(O, {
                              mimeType: ee,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              onRemoveItem: r ? en : void 0,
                              isVisualMediaType: V,
                          });
            }
            return (
                r &&
                (0, i.jsx)(u.DUT, {
                    className: Q ? M.yR : M.Yg,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => o(n),
                    "aria-label": N.intl.string(N.t["0+xZH0"]),
                    children: (0, i.jsx)(u.PGe, { size: "xs", color: "currentColor" }),
                })
            );
        }, [D, r, Q, J, z, et, $, ee, n, en, V, o]);
    if (U)
        return (0, i.jsx)(u._V3, {
            className: S,
            readyState: E.Rv1.READY,
            src: "",
            width: q ?? 350,
            height: X ?? 350,
            maxWidth: H,
            maxHeight: b,
            mediaLayoutType: D,
            useFullWidth: G,
            zoomable: !1,
        });
    switch (z) {
        case "IMAGE":
            return (0, i.jsx)(g.G.Consumer, {
                children: (e) =>
                    (0, i.jsx)(x, {
                        item: n,
                        message: t,
                        width: q,
                        height: X,
                        autoPlay: l && !_,
                        onClick: d,
                        onContextMenu: c,
                        shouldHideMediaOptions: J,
                        renderAccessory: e,
                        renderAdjacentContent: es,
                        containerClassName: S,
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
                        onMouseEnter: ei,
                    }),
            });
        case "VIDEO":
        case "CLIP":
            return (0, i.jsx)(I, {
                item: n,
                message: t,
                width: q,
                height: X,
                onClick: d,
                onContextMenu: c,
                renderAdjacentContent: es,
                naturalWidth: q,
                naturalHeight: X,
                className: a()(S, { [M.yq]: F }),
                playable: T,
                responsive: !0,
                hiddenSpoilers: _,
                mediaLayoutType: D,
                maxWidth: H,
                maxHeight: b,
                useFullWidth: G,
                mimeType: ee,
                onControlsShow: k,
                onControlsHide: R,
                downloadable: !J,
                mediaPlayerClassName: F ? M.yq : void 0,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == w) return null;
            return (0, i.jsx)(w, {
                item: n,
                message: t,
                className: P,
                imageClassName: W,
                maxWidth: H,
                maxHeight: b,
                mediaLayoutType: D,
                useFullWidth: G,
            });
        case "AUDIO":
            return (0, i.jsx)(j, {
                item: n,
                message: t,
                className: S,
                playable: T,
                mimeType: ee,
                renderAdjacentContent: es,
                onVolumeShow: () => K(!0),
                onVolumeHide: () => K(!1),
                onPlay: h,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, i.jsx)(L, {
                item: n,
                message: t,
                className: S,
                onClick: d,
                onContextMenu: c,
                renderAdjacentContent: es,
            });
        case "OTHER":
            return (0, i.jsx)(v, {
                item: n,
                message: t,
                className: S,
                onClick: d,
                onContextMenu: c,
                renderAdjacentContent: es,
            });
        case "INVALID":
            return null;
    }
}
let S = function (e) {
    let {
            className: t,
            item: n,
            message: l,
            getObscureReason: r,
            useFullWidth: o,
            mediaLayoutType: u,
            isSingleMosaicItem: d,
            footer: m,
            displayGridItem: g,
            ...p
        } = e,
        { width: f, height: A, type: E } = n,
        N = r(n, (0, x.P)(l)),
        [L, v] = s.useState(null != N),
        O = (0, c.qZ)(N),
        S = u === y.dG.MOSAIC,
        P = !S && ((null != f && f < 200) || (null != A && A < 50)),
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
            return (0, i.jsx)(w, {
                ...p,
                item: n,
                message: l,
                getObscureReason: r,
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
    return (0, i.jsxs)("div", {
        style: g ? { minWidth: 0, width: `${p.maxWidth}px` } : void 0,
        className: a()(M.wO, { [M.xV]: W, [M.D$]: o, [M.UI]: S, [M.JP]: S && T, [M.hU]: null != m }),
        children: [
            null != N
                ? (0, i.jsx)(I.Ay, {
                      type: I.Ay.Types.ATTACHMENT,
                      inline: P,
                      reason: N,
                      isSingleMosaicItem: d,
                      obscured: L,
                      containerStyles: (function (e, t, n) {
                          if (!t) return;
                          let i = e.width;
                          if (void 0 !== e.width && void 0 !== e.height) {
                              let { width: t } = (0, C.Uj)({
                                  width: e.width,
                                  height: e.height,
                                  maxWidth: 400,
                                  maxHeight: 300,
                              });
                              i = t;
                          }
                          return {
                              ...(n !== y.dG.MOSAIC && { maxWidth: i ?? "400px" }),
                              width: "100%",
                              height: "100%",
                              justifySelf: "auto",
                          };
                      })(n, W, u),
                      obscurityControlClassName: a()({ [M.yi]: "VIDEO" === E && d && !L && D }),
                      onToggleObscurity: () => v((e) => !e),
                      children: (e) => G(e),
                  })
                : G(),
            m,
        ],
    });
};
