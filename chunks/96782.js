n.d(t, {
    Ay: () => V,
    rC: () => M,
    zB: () => k,
}),
    n(938796),
    n(896048),
    n(321073),
    n(747238),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(665260),
    l = n(990078),
    c = n(397927),
    u = n(765671),
    d = n(384015),
    f = n(390248),
    p = n(338717),
    _ = n(33358),
    h = n(643612),
    m = n(207133),
    g = n(302031),
    E = n(734057),
    b = n(954571),
    y = n(515718),
    O = n(448381),
    A = n(838541),
    v = n(652215),
    S = n(985018),
    I = n(422436),
    T = n(295260);

function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            });
    }
    return e;
}

function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = D(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let x = 200,
    L = 50;

function j(e) {
    return "IMAGE" === e || "VIDEO" === e;
}

function M(e, t) {
    var n;
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, O.NI)(e, t),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type,
        srcIsAnimated: (0, o.Lt)(null != (n = e.flags) ? n : 0, v.sbO.IS_ANIMATED),
    };
}
let k = (e) => {
    let { mimeType: t, downloadURL: n, onRemoveItem: a, showDownload: o, isVisualMediaType: f } = e,
        p = i.useRef(null),
        [_, h] = i.useState(0);
    (0, u.i4)(p, (e) => {
        let { width: t } = e;
        null != t && h(Math.floor((t - 8) / 32));
    });
    let m = [];
    null != a &&
        m.push(
            (0, r.jsx)(
                l.m,
                {
                    text: S.intl.string(S.t["/XT3ij"]),
                    children: (0, r.jsx)(c.DUT, {
                        className: s()(T.HF, I.GC),
                        focusProps: {
                            offset: 2,
                        },
                        onClick: a,
                        "aria-label": S.intl.string(S.t["0+xZH0"]),
                        children: (0, r.jsx)(c.ucK, {
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
        o &&
            m.push(
                (0, r.jsx)(
                    l.m,
                    {
                        text: S.intl.string(S.t["1WjMbC"]),
                        children: (0, r.jsx)(d.A, {
                            target: "_blank",
                            rel: "noreferrer noopener",
                            className: T.HF,
                            iconClassName: I.qG,
                            focusProps: {
                                offset: 2,
                            },
                            href: n,
                            mimeType: t,
                        }),
                    },
                    "download",
                ),
            );
    let g = Math.max(0, m.length - _);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            _ > 0 &&
                m.length > 0 &&
                (0, r.jsx)("div", {
                    className: s()(T.aq, {
                        [T.XE]: !f,
                    }),
                    children: m.slice(g),
                }),
            (0, r.jsx)("div", {
                ref: p,
                className: T.St,
            }),
        ],
    });
};

function U(e) {
    let {
            message: t,
            item: n,
            autoPlayGif: a,
            canRemoveItem: o,
            onRemoveItem: l,
            onClick: u,
            handlePreloadImage: d,
            onContextMenu: f,
            onPlay: p,
            renderImageComponent: _,
            renderVideoComponent: g,
            renderAudioComponent: O,
            renderPlaintextFilePreview: T,
            renderGenericFileComponent: C,
            renderVisualPlaceholderComponent: N,
            className: R,
            imgContainerClassName: w,
            imgClassName: P,
            focusable: D,
            hiddenSpoilers: x,
            mediaLayoutType: L,
            maxWidth: j,
            maxHeight: M,
            hasFooter: U,
            useFullWidth: G,
            isVisualMediaType: V,
            onVideoControlsShow: F,
            onVideoControlsHide: B,
            forcePlaceholder: H,
        } = e,
        { width: Y, height: W, spoiler: K, type: z, contentType: q } = n,
        [X, Z] = i.useState(!1),
        Q = t.getChannelId(),
        $ = E.A.getChannel(Q),
        J = (0, m.A)(Q),
        ee = i.useMemo(() => (null != q && -1 !== q.indexOf("/") ? q.split("/") : ["unknown", "unknown"]), [q]),
        et = !1;
    if (V) {
        (null == Y || null == W) && (et = !0);
        let e = (0, y.U8)({
            width: null != Y ? Y : 0,
            height: null != W ? W : 0,
            maxWidth: null != j ? j : A.k6,
            maxHeight: null != M ? M : A.Rk,
        });
        !G && (e * (null != Y ? Y : 0) < A.ie || e * (null != W ? W : 0) < A.ie) && (et = !0);
    }
    let en = i.useCallback(() => {
            l(n);
        }, [n, l]),
        er = i.useCallback(() => {
            b.default.track(v.HAw.IMAGE_HOVERED, {
                guild_id: null == $ ? void 0 : $.guild_id,
                channel_id: null == $ ? void 0 : $.id,
                image_recommendations_shown: !1,
            });
        }, [$]),
        ei = i.useCallback(() => {
            if (L === A.dG.MOSAIC) {
                let e = (!J && ["VIDEO", "CLIP", "AUDIO"].includes(z)) || "OTHER" === z;
                return et
                    ? null
                    : !X &&
                          (0, r.jsx)(k, {
                              mimeType: ee,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              onRemoveItem: o ? en : void 0,
                              isVisualMediaType: V,
                          });
            }
            return (
                o &&
                (0, r.jsx)(c.DUT, {
                    className: K ? I.yR : I.Yg,
                    focusProps: {
                        offset: {
                            bottom: 4,
                        },
                    },
                    onClick: () => l(n),
                    "aria-label": S.intl.string(S.t["0+xZH0"]),
                    children: (0, r.jsx)(c.PGe, {
                        size: "xs",
                        color: "currentColor",
                    }),
                })
            );
        }, [L, o, K, J, z, et, X, ee, n, en, V, l]);
    if (H)
        return (0, r.jsx)(c._V3, {
            className: R,
            readyState: v.Rv1.READY,
            src: "",
            width: null != Y ? Y : 350,
            height: null != W ? W : 350,
            maxWidth: j,
            maxHeight: M,
            mediaLayoutType: L,
            useFullWidth: G,
            zoomable: !1,
        });
    switch (z) {
        case "IMAGE":
            return (0, r.jsx)(h.G.Consumer, {
                children: (e) =>
                    (0, r.jsx)(_, {
                        item: n,
                        message: t,
                        width: Y,
                        height: W,
                        autoPlay: a && !x,
                        onClick: u,
                        onContextMenu: f,
                        shouldHideMediaOptions: J,
                        renderAccessory: e,
                        renderAdjacentContent: ei,
                        containerClassName: R,
                        className: w,
                        imageClassName: P,
                        shouldLink: D,
                        hiddenSpoilers: x,
                        responsive: !0,
                        mediaLayoutType: L,
                        maxWidth: j,
                        maxHeight: M,
                        useFullWidth: G,
                        handlePreloadImage: d,
                        onMouseEnter: er,
                    }),
            });
        case "VIDEO":
        case "CLIP":
            return (0, r.jsx)(g, {
                item: n,
                message: t,
                width: Y,
                height: W,
                onClick: u,
                onContextMenu: f,
                renderAdjacentContent: ei,
                naturalWidth: Y,
                naturalHeight: W,
                className: s()(R, {
                    [I.yq]: U,
                }),
                playable: D,
                responsive: !0,
                mediaLayoutType: L,
                maxWidth: j,
                maxHeight: M,
                useFullWidth: G,
                mimeType: ee,
                onControlsShow: F,
                onControlsHide: B,
                downloadable: !J,
                mediaPlayerClassName: U ? I.yq : void 0,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == N) return null;
            return (0, r.jsx)(N, {
                item: n,
                message: t,
                className: w,
                imageClassName: P,
                maxWidth: j,
                maxHeight: M,
                mediaLayoutType: L,
                useFullWidth: G,
            });
        case "AUDIO":
            return (0, r.jsx)(O, {
                item: n,
                message: t,
                className: R,
                playable: D,
                mimeType: ee,
                renderAdjacentContent: ei,
                onVolumeShow: () => Z(!0),
                onVolumeHide: () => Z(!1),
                onPlay: p,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, r.jsx)(T, {
                item: n,
                message: t,
                className: R,
                onClick: u,
                onContextMenu: f,
                renderAdjacentContent: ei,
            });
        case "OTHER":
            return (0, r.jsx)(C, {
                item: n,
                message: t,
                className: R,
                onClick: u,
                onContextMenu: f,
                renderAdjacentContent: ei,
            });
        case "INVALID":
            return null;
    }
}

function G(e, t, n) {
    if (!t) return;
    let r = e.width;
    if (void 0 !== e.width && void 0 !== e.height) {
        let { width: t } = (0, y.Uj)({
            width: e.width,
            height: e.height,
            maxWidth: 400,
            maxHeight: 300,
        });
        r = t;
    }
    return w(
        N(
            {},
            n !== A.dG.MOSAIC && {
                maxWidth: null != r ? r : "400px",
            },
        ),
        {
            width: "100%",
            height: "100%",
            justifySelf: "auto",
        },
    );
}
let V = function (e) {
    let {
            className: t,
            item: n,
            message: a,
            getObscureReason: o,
            useFullWidth: l,
            mediaLayoutType: c,
            isSingleMosaicItem: u,
            footer: d,
            displayGridItem: h,
        } = e,
        m = P(e, [
            "className",
            "item",
            "message",
            "getObscureReason",
            "useFullWidth",
            "mediaLayoutType",
            "isSingleMosaicItem",
            "footer",
            "displayGridItem",
        ]),
        { width: E, height: b, type: y } = n,
        v = o(n, (0, _.P)(a)),
        [S, T] = i.useState(null != v),
        C = (0, f.qZ)(v),
        R = c === A.dG.MOSAIC,
        D = !R && ((null != E && E < x) || (null != b && b < L)),
        M = j(y),
        k = (0, O.Xg)(y),
        V = u && null != v && (0, f.j8)(E, b),
        [F, B] = i.useState(!1),
        H = () => {
            B(!0);
        },
        Y = () => {
            B(!1);
        },
        W = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, r.jsx)(
                U,
                w(N({}, m), {
                    item: n,
                    message: a,
                    getObscureReason: o,
                    hiddenSpoilers: e,
                    className: s()(t, I.bq, {
                        [I.cd]: S && !D,
                        [I.rP]: S && v === p.Oc.SPOILER,
                        [I.xu]: S && null != v && p._K.has(v),
                        [I.sC]: S && e,
                        [I.mG]: S && D,
                    }),
                    focusable: !e,
                    mediaLayoutType: c,
                    hasFooter: null != d,
                    useFullWidth: (!!V && !!e) || l,
                    isVisualMediaType: k,
                    onVideoControlsShow: H,
                    onVideoControlsHide: Y,
                    forcePlaceholder: C && S,
                }),
            );
        };
    return (0, r.jsxs)("div", {
        style: h
            ? {
                  minWidth: 0,
                  width: "".concat(m.maxWidth, "px"),
              }
            : void 0,
        className: s()(I.wO, {
            [I.xV]: M,
            [I.D$]: l,
            [I.UI]: R,
            [I.JP]: R && k,
            [I.hU]: null != d,
        }),
        children: [
            null != v
                ? (0, r.jsx)(g.Ay, {
                      type: g.Ay.Types.ATTACHMENT,
                      inline: D,
                      reason: v,
                      isSingleMosaicItem: u,
                      obscured: S,
                      containerStyles: G(n, M, c),
                      obscurityControlClassName: s()({
                          [I.yi]: "VIDEO" === y && u && !S && F,
                      }),
                      onToggleObscurity: () => T((e) => !e),
                      children: (e) => W(e),
                  })
                : W(),
            d,
        ],
    });
};
