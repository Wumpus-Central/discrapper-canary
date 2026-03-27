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
    h = n(390248),
    c = n(338717),
    x = n(33358),
    g = n(643612),
    p = n(207133),
    I = n(302031),
    f = n(734057),
    A = n(954571),
    j = n(515718),
    C = n(448381),
    y = n(838541),
    E = n(652215),
    N = n(985018),
    L = n(637221),
    M = n(210739);
function v(e, t) {
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, C.NI)(e, t),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type,
        srcIsAnimated: (0, r.Lt)(e.flags ?? 0, E.sbO.IS_ANIMATED),
    };
}
let O = (e) => {
    let { mimeType: t, downloadURL: n, onRemoveItem: l, showDownload: r, isVisualMediaType: h } = e,
        c = s.useRef(null),
        [x, g] = s.useState(0);
    (0, d.i4)(c, (e) => {
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
                        className: a()(M.HF, L.GC),
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
                            className: M.HF,
                            iconClassName: L.qG,
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
            x > 0 && p.length > 0 && (0, i.jsx)("div", { className: a()(M.aq, { [M.XE]: !h }), children: p.slice(I) }),
            (0, i.jsx)("div", { ref: c, className: M.St }),
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
            onContextMenu: h,
            onPlay: c,
            renderImageComponent: x,
            renderVideoComponent: I,
            renderAudioComponent: C,
            renderPlaintextFilePreview: M,
            renderGenericFileComponent: v,
            renderVisualPlaceholderComponent: w,
            className: S,
            imgContainerClassName: W,
            imgClassName: P,
            focusable: T,
            hiddenSpoilers: _,
            mediaLayoutType: D,
            maxWidth: H,
            maxHeight: F,
            hasFooter: G,
            useFullWidth: V,
            isVisualMediaType: b,
            onVideoControlsShow: k,
            onVideoControlsHide: R,
            forcePlaceholder: U,
        } = e,
        { width: q, height: X, spoiler: z, type: B, contentType: Q } = n,
        [$, K] = s.useState(!1),
        Y = t.getChannelId(),
        Z = f.A.getChannel(Y),
        J = (0, p.A)(Y),
        ee = s.useMemo(() => (null != Q && -1 !== Q.indexOf("/") ? Q.split("/") : ["unknown", "unknown"]), [Q]),
        et = !1;
    if (b) {
        (null == q || null == X) && (et = !0);
        let e = (0, j.U8)({ width: q ?? 0, height: X ?? 0, maxWidth: H ?? y.k6, maxHeight: F ?? y.Rk });
        !V && (e * (q ?? 0) < y.ie || e * (X ?? 0) < y.ie) && (et = !0);
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
                let e = (!J && ["VIDEO", "CLIP", "AUDIO"].includes(B)) || "OTHER" === B;
                return et
                    ? null
                    : !$ &&
                          (0, i.jsx)(O, {
                              mimeType: ee,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              onRemoveItem: r ? en : void 0,
                              isVisualMediaType: b,
                          });
            }
            return (
                r &&
                (0, i.jsx)(u.DUT, {
                    className: z ? L.yR : L.Yg,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => o(n),
                    "aria-label": N.intl.string(N.t["0+xZH0"]),
                    children: (0, i.jsx)(u.PGe, { size: "xs", color: "currentColor" }),
                })
            );
        }, [D, r, z, J, B, et, $, ee, n, en, b, o]);
    if (U)
        return (0, i.jsx)(u._V3, {
            className: S,
            readyState: E.Rv1.READY,
            src: "",
            width: q ?? 350,
            height: X ?? 350,
            maxWidth: H,
            maxHeight: F,
            mediaLayoutType: D,
            useFullWidth: V,
            zoomable: !1,
        });
    switch (B) {
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
                        onContextMenu: h,
                        shouldHideMediaOptions: J,
                        renderAccessory: e,
                        renderAdjacentContent: es,
                        containerClassName: S,
                        className: W,
                        imageClassName: P,
                        shouldLink: T,
                        hiddenSpoilers: _,
                        responsive: !0,
                        mediaLayoutType: D,
                        maxWidth: H,
                        maxHeight: F,
                        useFullWidth: V,
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
                onContextMenu: h,
                renderAdjacentContent: es,
                naturalWidth: q,
                naturalHeight: X,
                className: a()(S, { [L.yq]: G }),
                playable: T,
                responsive: !0,
                mediaLayoutType: D,
                maxWidth: H,
                maxHeight: F,
                useFullWidth: V,
                mimeType: ee,
                onControlsShow: k,
                onControlsHide: R,
                downloadable: !J,
                mediaPlayerClassName: G ? L.yq : void 0,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == w) return null;
            return (0, i.jsx)(w, {
                item: n,
                message: t,
                className: W,
                imageClassName: P,
                maxWidth: H,
                maxHeight: F,
                mediaLayoutType: D,
                useFullWidth: V,
            });
        case "AUDIO":
            return (0, i.jsx)(C, {
                item: n,
                message: t,
                className: S,
                playable: T,
                mimeType: ee,
                renderAdjacentContent: es,
                onVolumeShow: () => K(!0),
                onVolumeHide: () => K(!1),
                onPlay: c,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, i.jsx)(M, {
                item: n,
                message: t,
                className: S,
                onClick: d,
                onContextMenu: h,
                renderAdjacentContent: es,
            });
        case "OTHER":
            return (0, i.jsx)(v, {
                item: n,
                message: t,
                className: S,
                onClick: d,
                onContextMenu: h,
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
        [M, v] = s.useState(null != N),
        O = (0, h.qZ)(N),
        S = u === y.dG.MOSAIC,
        W = !S && ((null != f && f < 200) || (null != A && A < 50)),
        P = "IMAGE" === E || "VIDEO" === E,
        T = (0, C.Xg)(E),
        _ = d && null != N && (0, h.j8)(f, A),
        [D, H] = s.useState(!1),
        F = () => {
            H(!0);
        },
        G = () => {
            H(!1);
        },
        V = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(w, {
                ...p,
                item: n,
                message: l,
                getObscureReason: r,
                hiddenSpoilers: e,
                className: a()(t, L.bq, {
                    [L.cd]: M && !W,
                    [L.rP]: M && N === c.Oc.SPOILER,
                    [L.xu]: M && null != N && c._K.has(N),
                    [L.sC]: M && e,
                    [L.mG]: M && W,
                }),
                focusable: !e,
                mediaLayoutType: u,
                hasFooter: null != m,
                useFullWidth: (!!_ && !!e) || o,
                isVisualMediaType: T,
                onVideoControlsShow: F,
                onVideoControlsHide: G,
                forcePlaceholder: O && M,
            });
        };
    return (0, i.jsxs)("div", {
        style: g ? { minWidth: 0, width: `${p.maxWidth}px` } : void 0,
        className: a()(L.wO, { [L.xV]: P, [L.D$]: o, [L.UI]: S, [L.JP]: S && T, [L.hU]: null != m }),
        children: [
            null != N
                ? (0, i.jsx)(I.Ay, {
                      type: I.Ay.Types.ATTACHMENT,
                      inline: W,
                      reason: N,
                      isSingleMosaicItem: d,
                      obscured: M,
                      containerStyles: (function (e, t, n) {
                          if (!t) return;
                          let i = e.width;
                          if (void 0 !== e.width && void 0 !== e.height) {
                              let { width: t } = (0, j.Uj)({
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
                      })(n, P, u),
                      obscurityControlClassName: a()({ [L.yi]: "VIDEO" === E && d && !M && D }),
                      onToggleObscurity: () => v((e) => !e),
                      children: (e) => V(e),
                  })
                : V(),
            m,
        ],
    });
};
