n.d(t, { Ay: () => _, rC: () => S, zB: () => W }), n(938796), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(665260),
    o = n(990078),
    u = n(939249),
    d = n(241326),
    m = n(789645),
    c = n(144165),
    h = n(765671),
    x = n(672477),
    g = n(384015),
    p = n(390248),
    I = n(338717),
    f = n(33358),
    C = n(643612),
    A = n(207133),
    j = n(302031),
    y = n(734057),
    E = n(954571),
    M = n(515718),
    N = n(448381),
    L = n(838541),
    v = n(652215),
    O = n(985018),
    w = n(267509),
    P = n(415779);
function S(e, t) {
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, N.NI)(e, t),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type,
        srcIsAnimated: (0, r.Lt)(e.flags ?? 0, v.sbO.IS_ANIMATED),
    };
}
let W = (e) => {
    let {
            mimeType: t,
            downloadURL: n,
            onRemoveItem: l,
            showDownload: r,
            isVisualMediaType: m,
            type: c,
            isSingleMosaicItem: p,
        } = e,
        I = s.useRef(null),
        [f, C] = s.useState(0),
        { newEmbedUi: A } = x.Q.useConfig({ location: "MosaicItemHoverButtons" });
    (0, h.i4)(I, (e) => {
        let { width: t } = e;
        null != t && C(Math.floor((t - 8) / 32));
    });
    let j = [];
    null != l &&
        j.push(
            (0, i.jsx)(
                o.m,
                {
                    text: O.intl.string(O.t["/XT3ij"]),
                    children: (0, i.jsx)(u.D, {
                        className: a()(P.HF, w.GC),
                        focusProps: { offset: 2 },
                        onClick: l,
                        "aria-label": O.intl.string(O.t["0+xZH0"]),
                        children: (0, i.jsx)(d.u, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                    }),
                },
                "remove",
            ),
        ),
        r &&
            !("CLIP" === c && p && A) &&
            j.push(
                (0, i.jsx)(
                    o.m,
                    {
                        text: O.intl.string(O.t["1WjMbC"]),
                        children: (0, i.jsx)(g.A, {
                            target: "_blank",
                            rel: "noreferrer noopener",
                            className: P.HF,
                            iconClassName: w.qG,
                            focusProps: { offset: 2 },
                            href: n,
                            mimeType: t,
                        }),
                    },
                    "download",
                ),
            );
    let y = Math.max(0, j.length - f);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            f > 0 && j.length > 0 && (0, i.jsx)("div", { className: a()(P.aq, { [P.XE]: !m }), children: j.slice(y) }),
            (0, i.jsx)("div", { ref: I, className: P.St }),
        ],
    });
};
function T(e) {
    let {
            message: t,
            item: n,
            autoPlayGif: l,
            canRemoveItem: r,
            onRemoveItem: o,
            onClick: d,
            handlePreloadImage: h,
            onContextMenu: x,
            onPlay: g,
            renderImageComponent: p,
            renderVideoComponent: I,
            renderAudioComponent: f,
            renderPlaintextFilePreview: j,
            renderGenericFileComponent: N,
            renderVisualPlaceholderComponent: P,
            className: S,
            imgContainerClassName: T,
            imgClassName: _,
            focusable: b,
            hiddenSpoilers: D,
            mediaLayoutType: H,
            maxWidth: F,
            maxHeight: G,
            hasFooter: V,
            useFullWidth: k,
            isVisualMediaType: R,
            onVideoControlsShow: U,
            onVideoControlsHide: q,
            forcePlaceholder: X,
            isSingleMosaicItem: Q,
        } = e,
        { width: z, height: B, spoiler: $, type: K, contentType: Y } = n,
        [Z, J] = s.useState(!1),
        ee = t.getChannelId(),
        et = y.A.getChannel(ee),
        en = (0, A.A)(ee),
        ei = s.useMemo(() => (null != Y && -1 !== Y.indexOf("/") ? Y.split("/") : ["unknown", "unknown"]), [Y]),
        es = !1;
    if (R) {
        (null == z || null == B) && (es = !0);
        let e = (0, M.U8)({ width: z ?? 0, height: B ?? 0, maxWidth: F ?? L.k6, maxHeight: G ?? L.Rk });
        !k && (e * (z ?? 0) < L.ie || e * (B ?? 0) < L.ie) && (es = !0);
    }
    let el = s.useCallback(() => {
            o(n);
        }, [n, o]),
        ea = s.useCallback(() => {
            E.default.track(v.HAw.IMAGE_HOVERED, {
                guild_id: et?.guild_id,
                channel_id: et?.id,
                image_recommendations_shown: !1,
            });
        }, [et]),
        er = s.useCallback(() => {
            if (H === L.dG.MOSAIC) {
                let e = (!en && ["VIDEO", "CLIP", "AUDIO"].includes(K)) || "OTHER" === K;
                return es
                    ? null
                    : !Z &&
                          (0, i.jsx)(W, {
                              mimeType: ei,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              onRemoveItem: r ? el : void 0,
                              isVisualMediaType: R,
                              type: K,
                              isSingleMosaicItem: Q,
                          });
            }
            return (
                r &&
                (0, i.jsx)(u.D, {
                    className: $ ? w.yR : w.Yg,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => o(n),
                    "aria-label": O.intl.string(O.t["0+xZH0"]),
                    children: (0, i.jsx)(m.P, { size: "xs", color: "currentColor" }),
                })
            );
        }, [H, r, $, en, K, es, Z, ei, n, el, R, o, Q]);
    if (X)
        return (0, i.jsx)(c._, {
            className: S,
            readyState: v.Rv1.READY,
            src: "",
            width: z ?? 350,
            height: B ?? 350,
            maxWidth: F,
            maxHeight: G,
            mediaLayoutType: H,
            useFullWidth: k,
            zoomable: !1,
        });
    switch (K) {
        case "IMAGE":
            return (0, i.jsx)(C.G.Consumer, {
                children: (e) =>
                    (0, i.jsx)(p, {
                        item: n,
                        message: t,
                        width: z,
                        height: B,
                        autoPlay: l && !D,
                        onClick: d,
                        onContextMenu: x,
                        shouldHideMediaOptions: en,
                        renderAccessory: e,
                        renderAdjacentContent: er,
                        containerClassName: S,
                        className: T,
                        imageClassName: _,
                        shouldLink: b,
                        hiddenSpoilers: D,
                        responsive: !0,
                        mediaLayoutType: H,
                        maxWidth: F,
                        maxHeight: G,
                        useFullWidth: k,
                        handlePreloadImage: h,
                        onMouseEnter: ea,
                    }),
            });
        case "VIDEO":
        case "CLIP":
            return (0, i.jsx)(I, {
                item: n,
                message: t,
                width: z,
                height: B,
                onClick: d,
                onContextMenu: x,
                renderAdjacentContent: er,
                naturalWidth: z,
                naturalHeight: B,
                className: a()(S, { [w.yq]: V }),
                playable: b,
                responsive: !0,
                hiddenSpoilers: D,
                mediaLayoutType: H,
                maxWidth: F,
                maxHeight: G,
                useFullWidth: k,
                mimeType: ei,
                onControlsShow: U,
                onControlsHide: q,
                downloadable: !en,
                mediaPlayerClassName: V ? w.yq : void 0,
                isSingleMosaicItem: Q,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == P) return null;
            return (0, i.jsx)(P, {
                item: n,
                message: t,
                className: T,
                imageClassName: _,
                maxWidth: F,
                maxHeight: G,
                mediaLayoutType: H,
                useFullWidth: k,
            });
        case "AUDIO":
            return (0, i.jsx)(f, {
                item: n,
                message: t,
                className: S,
                playable: b,
                mimeType: ei,
                renderAdjacentContent: er,
                onVolumeShow: () => J(!0),
                onVolumeHide: () => J(!1),
                onPlay: g,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, i.jsx)(j, {
                item: n,
                message: t,
                className: S,
                onClick: d,
                onContextMenu: x,
                renderAdjacentContent: er,
            });
        case "OTHER":
            return (0, i.jsx)(N, {
                item: n,
                message: t,
                className: S,
                onClick: d,
                onContextMenu: x,
                renderAdjacentContent: er,
            });
        case "INVALID":
            return null;
    }
}
let _ = function (e) {
    let {
            className: t,
            item: n,
            message: l,
            getObscureReason: r,
            useFullWidth: o,
            mediaLayoutType: u,
            isSingleMosaicItem: d,
            footer: m,
            displayGridItem: c,
            ...h
        } = e,
        { width: g, height: C, type: A } = n,
        { newEmbedUi: y } = x.Q.useConfig({ location: "MessageMediaMosaicItem" }),
        E = r(n, (0, f.P)(l)),
        [v, O] = s.useState(null != E),
        P = (0, p.qZ)(E),
        S = u === L.dG.MOSAIC,
        W = !S && ((null != g && g < 200) || (null != C && C < 50)),
        _ = (function (e) {
            let { enableClipsNewEmbedUi: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return "IMAGE" === e || "VIDEO" === e || (t && "CLIP" === e);
        })(A, { enableClipsNewEmbedUi: y }),
        b = (0, N.Xg)(A),
        D = d && null != E && (0, p.j8)(g, C),
        [H, F] = s.useState(!1),
        G = () => {
            F(!0);
        },
        V = () => {
            F(!1);
        },
        k = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(T, {
                ...h,
                item: n,
                message: l,
                getObscureReason: r,
                isSingleMosaicItem: d,
                hiddenSpoilers: e,
                className: a()(t, w.bq, {
                    [w.cd]: v && !W,
                    [w.rP]: v && E === I.Oc.SPOILER,
                    [w.xu]: v && null != E && I._K.has(E),
                    [w.sC]: v && e,
                    [w.mG]: v && W,
                }),
                focusable: !e,
                mediaLayoutType: u,
                hasFooter: null != m,
                useFullWidth: (!!D && !!e) || o,
                isVisualMediaType: b,
                onVideoControlsShow: G,
                onVideoControlsHide: V,
                forcePlaceholder: P && v,
            });
        };
    return (0, i.jsxs)("div", {
        style: c ? { minWidth: 0, width: `${h.maxWidth}px` } : void 0,
        className: a()(w.wO, { [w.xV]: _, [w.D$]: o, [w.UI]: S, [w.JP]: S && b, [w.hU]: null != m }),
        children: [
            null != E
                ? (0, i.jsx)(j.Ay, {
                      type: j.Ay.Types.ATTACHMENT,
                      inline: W,
                      reason: E,
                      isSingleMosaicItem: d,
                      obscured: v,
                      containerStyles: (function (e, t, n) {
                          if (!t) return;
                          let i = e.width;
                          if (void 0 !== e.width && void 0 !== e.height) {
                              let { width: t } = (0, M.Uj)({
                                  width: e.width,
                                  height: e.height,
                                  maxWidth: 400,
                                  maxHeight: 300,
                              });
                              i = t;
                          }
                          return {
                              ...(n !== L.dG.MOSAIC && { maxWidth: i ?? "400px" }),
                              width: "100%",
                              height: "100%",
                              justifySelf: "auto",
                          };
                      })(n, _, u),
                      obscurityControlClassName: a()({ [w.yi]: "VIDEO" === A && d && !v && H }),
                      onToggleObscurity: () => O((e) => !e),
                      children: (e) => k(e),
                  })
                : k(),
            m,
        ],
    });
};
