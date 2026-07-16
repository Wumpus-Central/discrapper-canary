i.d(t, { Ay: () => k, rC: () => P, zB: () => O }), i(938796), i(321073);
var s = i(627968),
    n = i(64700),
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
    L = i(267509),
    E = i(415779);
function P(e, t) {
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
                        className: E.HF,
                        focusProps: { offset: 2 },
                        onClick: r,
                        "aria-label": W.intl.string(W.t.Y8ujqr),
                        children: (0, s.jsx)(u.R, { size: "custom", color: "currentColor", width: 20, height: 20 }),
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
                            className: a()(E.HF, L.GC),
                            focusProps: { offset: 2 },
                            onClick: l,
                            "aria-label": W.intl.string(W.t["0+xZH0"]),
                            children: (0, s.jsx)(m.u, { size: "custom", color: "currentColor", width: 20, height: 20 }),
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
                            className: E.HF,
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
            f > 0 && N.length > 0 && (0, s.jsx)("div", { className: a()(E.aq, { [E.XE]: !h }), children: N.slice(A) }),
            (0, s.jsx)("div", { ref: C, className: E.St }),
        ],
    });
}
function b(e) {
    let {
            message: t,
            item: i,
            autoPlayGif: l,
            canRemoveItem: a,
            onRemoveItem: r,
            canEditItem: o,
            onEditItem: u,
            onClick: m,
            handlePreloadImage: x,
            onContextMenu: g,
            onPlay: p,
            renderImageComponent: j,
            renderVideoComponent: C,
            renderAudioComponent: I,
            renderPlaintextFilePreview: w,
            renderGenericFileComponent: E,
            renderVisualPlaceholderComponent: P,
            className: b,
            imgContainerClassName: k,
            imgClassName: T,
            focusable: H,
            hiddenSpoilers: F,
            mediaLayoutType: G,
            maxWidth: _,
            maxHeight: D,
            useFullWidth: R,
            isVisualMediaType: V,
            onVideoControlsShow: U,
            onVideoControlsHide: q,
            forcePlaceholder: X,
            isSingleMosaicItem: z,
            allowFullScreen: Y,
        } = e,
        { width: $, height: B, spoiler: Z, type: K, contentType: Q } = i,
        [J, ee] = n.useState(!1),
        et = t.getChannelId(),
        ei = N.A.getChannel(et),
        es = (0, y.A)(et),
        en = n.useMemo(() => (null != Q && -1 !== Q.indexOf("/") ? Q.split("/") : ["unknown", "unknown"]), [Q]),
        el = !1;
    if (V) {
        (null == $ || null == B) && (el = !0);
        let e = (0, v.U8)({ width: $ ?? 0, height: B ?? 0, maxWidth: _ ?? M.k6, maxHeight: D ?? M.Rk });
        !R && (e * ($ ?? 0) < M.ie || e * (B ?? 0) < M.ie) && (el = !0);
    }
    let ea = n.useCallback(() => {
            r(i);
        }, [i, r]),
        er = n.useCallback(() => {
            u(i);
        }, [i, u]),
        eo = n.useCallback(() => {
            A.default.track(S.HAw.IMAGE_HOVERED, {
                guild_id: ei?.guild_id,
                channel_id: ei?.id,
                image_recommendations_shown: !1,
            });
        }, [ei]),
        ed = n.useCallback(() => {
            if (G === M.dG.MOSAIC) {
                let e = (!es && ["VIDEO", "CLIP", "AUDIO"].includes(K)) || "OTHER" === K;
                return el
                    ? null
                    : !J &&
                          (0, s.jsx)(O, {
                              mimeType: en,
                              downloadURL: i.downloadUrl,
                              showDownload: e,
                              onRemoveItem: a ? ea : void 0,
                              onEditItem: o ? er : void 0,
                              isVisualMediaType: V,
                              type: K,
                              isSingleMosaicItem: z,
                          });
            }
            return (
                a &&
                (0, s.jsx)(d.D, {
                    className: Z ? L.yR : L.Yg,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => r(i),
                    "aria-label": W.intl.string(W.t["0+xZH0"]),
                    children: (0, s.jsx)(c.P, { size: "xs", color: "currentColor" }),
                })
            );
        }, [G, a, Z, es, K, el, J, en, i, ea, er, o, V, r, z]);
    if (X)
        return (0, s.jsx)(h._, {
            className: b,
            readyState: S.Rv1.READY,
            src: "",
            width: $ ?? 350,
            height: B ?? 350,
            maxWidth: _,
            maxHeight: D,
            mediaLayoutType: G,
            useFullWidth: R,
            zoomable: !1,
        });
    switch (K) {
        case "IMAGE":
            return (0, s.jsx)(f.G.Consumer, {
                children: (e) =>
                    (0, s.jsx)(j, {
                        item: i,
                        message: t,
                        width: $,
                        height: B,
                        autoPlay: l && !F,
                        onClick: m,
                        onContextMenu: g,
                        shouldHideMediaOptions: es,
                        renderAccessory: e,
                        renderAdjacentContent: ed,
                        containerClassName: b,
                        className: k,
                        imageClassName: T,
                        shouldLink: H,
                        hiddenSpoilers: F,
                        responsive: !0,
                        mediaLayoutType: G,
                        maxWidth: _,
                        maxHeight: D,
                        useFullWidth: R,
                        handlePreloadImage: x,
                        onMouseEnter: eo,
                    }),
            });
        case "VIDEO":
        case "CLIP":
            return (0, s.jsx)(C, {
                item: i,
                message: t,
                width: $,
                height: B,
                onClick: m,
                onContextMenu: g,
                renderAdjacentContent: ed,
                naturalWidth: $,
                naturalHeight: B,
                className: b,
                playable: H,
                responsive: !0,
                hiddenSpoilers: F,
                mediaLayoutType: G,
                maxWidth: _,
                maxHeight: D,
                useFullWidth: R,
                mimeType: en,
                onControlsShow: U,
                onControlsHide: q,
                downloadable: !es,
                isSingleMosaicItem: z,
                allowFullScreen: Y,
                onPlay: p,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == P) return null;
            return (0, s.jsx)(P, {
                item: i,
                message: t,
                className: k,
                imageClassName: T,
                maxWidth: _,
                maxHeight: D,
                mediaLayoutType: G,
                useFullWidth: R,
            });
        case "AUDIO":
            return (0, s.jsx)(I, {
                item: i,
                message: t,
                className: b,
                playable: H,
                mimeType: en,
                renderAdjacentContent: ed,
                onVolumeShow: () => ee(!0),
                onVolumeHide: () => ee(!1),
                onPlay: p,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, s.jsx)(w, {
                item: i,
                message: t,
                className: b,
                onClick: m,
                onContextMenu: g,
                renderAdjacentContent: ed,
            });
        case "OTHER":
            return (0, s.jsx)(E, {
                item: i,
                message: t,
                className: b,
                onClick: m,
                onContextMenu: g,
                renderAdjacentContent: ed,
            });
        case "INVALID":
            return null;
    }
}
let k = function (e) {
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
        E = d === M.dG.MOSAIC,
        P = !E && ((null != h && h < 200) || (null != x && x < 50)),
        O = "IMAGE" === g || "VIDEO" === g || "CLIP" === g,
        k = (0, w.Xg)(g),
        T = u && null != f && (0, p.j8)(h, x),
        [H, F] = n.useState(!1);
    function G() {
        F(!0);
    }
    function _() {
        F(!1);
    }
    function D() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (0, s.jsx)(b, {
            ...c,
            item: i,
            message: l,
            getObscureReason: r,
            isSingleMosaicItem: u,
            hiddenSpoilers: e,
            className: a()(t, L.bq, {
                [L.cd]: A && !P,
                [L.rP]: A && f === j.Oc.SPOILER,
                [L.xu]: A && null != f && j._K.has(f),
                [L.sC]: A && e,
                [L.mG]: A && P,
            }),
            focusable: !e,
            mediaLayoutType: d,
            useFullWidth: (!!T && !!e) || o,
            isVisualMediaType: k,
            onVideoControlsShow: G,
            onVideoControlsHide: _,
            forcePlaceholder: W && A,
        });
    }
    return (0, s.jsx)("div", {
        style: m ? { minWidth: 0, width: `${c.maxWidth}px` } : void 0,
        className: a()(L.wO, { [L.xV]: O, [L.D$]: o, [L.UI]: E, [L.JP]: E && k }),
        children:
            null != f
                ? (0, s.jsx)(I.Ay, {
                      type: I.Ay.Types.ATTACHMENT,
                      inline: P,
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
