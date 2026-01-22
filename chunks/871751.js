n.d(t, {
    Ay: () => er,
    rr: () => et,
}),
    n(896048),
    n(321073),
    n(228524),
    n(747238);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(397927),
    c = n(775602),
    u = n(684290),
    d = n(478620),
    f = n(338717),
    p = n(643612),
    _ = n(731068),
    h = n(124786),
    m = n(935616),
    g = n(619517),
    E = n(893598),
    b = n(269849),
    y = n(114212),
    O = n(343552),
    A = n(302031),
    v = n(644119),
    S = n(780297),
    I = n(734057),
    T = n(644447),
    C = n(954571),
    N = n(203982),
    R = n(405269),
    w = n(659674),
    P = n(515718),
    D = n(240248),
    x = n(998218),
    L = n(259407),
    j = n(690595),
    M = n(692051),
    k = n(652215),
    U = n(838541),
    G = n(985018),
    V = n(802571),
    F = n(206314);

function B(e, t, n) {
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

function H(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}

function Y(e, t) {
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

function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let K = 32,
    z = 12,
    q = 150,
    X = 144,
    Z = 520,
    Q = 5,
    $ = 150;

function J(e, t) {
    let n = z / t,
        r = e * n;
    return "".concat(r + 1, " / ").concat(r + n + 1);
}

function ee(e) {
    let t = x.A.toURLSafe(e);
    return null == t ? e : (t.searchParams.set("format", "png"), t.toString());
}

function et(e) {
    var t, n;
    let {
            className: r,
            iframeWrapperClassName: s,
            maxWidth: l,
            maxHeight: c,
            thumbnail: u,
            video: d,
            provider: f,
            allowFullScreen: p = !0,
            responsive: _ = !1,
            renderImageComponent: h,
            renderVideoComponent: m,
            renderLinkComponent: g,
            playable: b = !0,
            autoPlay: y = !1,
            autoMute: O,
            volume: A,
            onPlay: v,
            onPause: S,
            onEnded: I,
            onControlsHide: C,
            onControlsShow: R,
            onVolumeChange: w,
            onMute: D,
            href: x,
            placeholder: j,
            placeholderVersion: M,
            sourceMetadata: U,
        } = e,
        [G, F] = a.useState(y),
        B = null != d && null == d.proxyURL,
        H = a.useCallback(() => F(!1), [F]),
        Y = (e) => {
            e.preventDefault(),
                e.stopPropagation(),
                null == v || v(!1),
                F(!0),
                B &&
                    (N._.dispatch(k.jej.VIDEO_EMBED_PLAYBACK_STARTED),
                    N._.subscribeOnce(k.jej.VIDEO_EMBED_PLAYBACK_STARTED, H));
        };
    a.useEffect(
        () => () => {
            B && N._.unsubscribe(k.jej.VIDEO_EMBED_PLAYBACK_STARTED, H);
        },
        [B, H],
    );
    let { width: W, height: K } = u;
    null != d && ((W = d.width), (K = d.height));
    let z = (0, P.Uj)({
        width: W,
        height: K,
        maxWidth: l,
        maxHeight: c,
    });
    (W = Math.max(z.width, q)), (K = Math.max(z.height, X));
    let Z = (0, T.E)(u);
    if (null != d && null != d.proxyURL)
        return (0, i.jsx)("div", {
            className: o()(V.pu, r),
            children: m({
                poster: Z,
                src: d.proxyURL,
                placeholder: j,
                placeholderVersion: M,
                width: W,
                height: K,
                responsive: _,
                autoPlay: y,
                onEnded: I,
                naturalWidth: d.width,
                naturalHeight: d.height,
                onVolumeChange: w,
                playable: b,
                autoMute: O,
                volume: A,
                onPlay: v,
                onPause: S,
                onMute: D,
                onControlsHide: C,
                onControlsShow: R,
                sourceMetadata: U,
            }),
        });
    if (G && null != d) {
        let e,
            t = !0 === O || ("function" == typeof O && O()),
            n = {
                width: W,
                height: K,
            },
            a = {
                width: W,
                height: K,
            };
        if (_) {
            let t = 0 !== W ? K / W : 1;
            (n = {
                maxWidth: l,
                maxHeight: c,
                width: void 0,
                height: void 0,
            }),
                (a = {
                    paddingBottom: "".concat(100 * t, "%"),
                    maxWidth: W,
                }),
                (e = {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    maxWidth: W,
                    maxHeight: K,
                });
        }
        return (0, i.jsx)("div", {
            className: r,
            style: n,
            children: (0, i.jsx)("div", {
                className: o()(V.pu, s),
                style: a,
                children: (0, i.jsx)(L.Ay, {
                    provider: f,
                    src: d.url,
                    style: e,
                    width: W,
                    height: K,
                    allowFullScreen: p,
                    autoMute: t,
                }),
            }),
        });
    }
    return (0, i.jsxs)("div", {
        className: o()(V.pu, r),
        style: _
            ? {
                  maxWidth: W,
              }
            : {
                  width: W,
                  height: K,
              },
        children: [
            h({
                src: Z,
                width: W,
                height: K,
                maxWidth: W,
                maxHeight: K,
                responsive: _,
                containerClassName: V.tW,
                imageClassName: V.jq,
                placeholder: j,
                placeholderVersion: M,
                onClick: b && null != d ? Y : null,
                sourceMetadata: U,
                analyticsSource: "EmbedVideo",
            }),
            (0, i.jsx)("div", {
                className: V._W,
                children: (0, i.jsx)("div", {
                    className: V.Fo,
                    children: b
                        ? (0, i.jsx)(E.A, {
                              onPlay: null != d ? Y : null,
                              externalURL: x,
                              renderLinkComponent: g,
                              messageId: null == U || null == (t = U.message) ? void 0 : t.id,
                              channelId: null == U || null == (n = U.message) ? void 0 : n.channel_id,
                          })
                        : null,
                }),
            }),
        ],
    });
}

function en(e) {
    let {
        className: t,
        href: n,
        autoPlay: r,
        maxWidth: a,
        maxHeight: s,
        thumbnail: l,
        video: c,
        renderImageComponent: u,
        responsive: d,
        alt: f,
        disableAltTextDisplay: p = !1,
        playable: _ = !0,
        hiddenSpoilers: h,
        placeholder: g,
        placeholderVersion: E,
        sourceMetadata: b,
    } = e;
    return (0, i.jsx)(m.A, {
        className: o()(V.pu, t),
        original: n,
        poster: (0, T.E)(l),
        src: (0, T.E)(c),
        alt: f,
        width: l.width,
        height: l.height,
        naturalHeight: c.height,
        naturalWidth: c.width,
        maxWidth: a,
        maxHeight: s,
        responsive: d,
        autoPlay: r,
        playable: _,
        renderImageComponent: u,
        hiddenSpoilers: h,
        disableAltTextDisplay: p,
        placeholder: g,
        placeholderVersion: E,
        sourceMetadata: b,
    });
}
class er extends (r = a.PureComponent) {
    renderProvider() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { provider: t },
                renderLinkComponent: n,
                message: r,
            } = this.props;
        return null == t
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, i.jsx)("div", {
                    className: o()(V.zC, V.aK),
                    children: this.renderContentPlaceholder({
                        width: 80,
                        height: 18,
                    }),
                })
              : (0, i.jsx)("div", {
                    className: o()(V.zC, V.aK),
                    children:
                        null != t.url
                            ? n({
                                  className: V.Cj,
                                  href: t.url,
                                  tabIndex: e ? 0 : -1,
                                  children: t.name,
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: null == r ? void 0 : r.id,
                                  channelId: null == r ? void 0 : r.channel_id,
                              })
                            : (0, i.jsx)("span", {
                                  children: t.name,
                              }),
                });
    }
    renderAuthor() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { author: t },
                renderLinkComponent: n,
                message: r,
                autoPlayGif: a,
            } = this.props;
        return null == t
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, i.jsx)("div", {
                    className: o()(V.rN, V.aK),
                    children: this.renderContentPlaceholder({
                        width: 150,
                        height: 18,
                    }),
                })
              : (0, i.jsx)(M.Y.Consumer, {
                    children: (s) => {
                        let { disableAnimations: l } = s;
                        return (0, i.jsxs)("div", {
                            className: o()(V.rN, V.aK),
                            children: [
                                null != t.iconProxyURL
                                    ? (0, i.jsx)("img", {
                                          alt: "",
                                          className: V.SG,
                                          src: a && !l ? t.iconProxyURL : ee(t.iconProxyURL),
                                      })
                                    : null,
                                null != t.url
                                    ? n({
                                          className: V.av,
                                          href: t.url,
                                          tabIndex: e ? 0 : -1,
                                          children: t.name,
                                          target: "_blank",
                                          rel: "noreferrer noopener",
                                          messageId: null == r ? void 0 : r.id,
                                          channelId: null == r ? void 0 : r.channel_id,
                                      })
                                    : (0, i.jsx)("span", {
                                          className: V.QQ,
                                          children: t.name,
                                      }),
                            ],
                        });
                    },
                });
    }
    renderContentPlaceholder(e) {
        let { width: t, height: n } = e;
        return (0, i.jsx)(y.FQ, {
            className: V.Jl,
            width: t,
            height: n,
            opacity: 0.3,
        });
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            { embed: t, renderLinkComponent: n, renderTitle: r, message: a } = this.props,
            { rawTitle: s, url: l } = t;
        return null == s
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, i.jsx)("div", {
                    className: o()(V.gt, V.aK),
                    children: this.renderContentPlaceholder({
                        width: 400,
                        height: 30,
                    }),
                })
              : (0, i.jsx)("div", {
                    className: o()(V.gt, V.aK),
                    children:
                        null != l
                            ? n({
                                  className: V.kv,
                                  href: l,
                                  tabIndex: e ? 0 : -1,
                                  children: r(t, s),
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: null == a ? void 0 : a.id,
                                  channelId: null == a ? void 0 : a.channel_id,
                              })
                            : r(t, s),
                });
    }
    renderDescription() {
        let { embed: e, renderDescription: t } = this.props,
            { rawDescription: n } = e;
        return null == n
            ? null
            : (0, i.jsx)("div", {
                  className: o()(V.cD, V.aK),
                  children: this.shouldShowStaticPlaceholder
                      ? this.renderContentPlaceholder({
                            width: 400,
                            height: 50,
                        })
                      : t(e, n, !1),
              });
    }
    renderThumbnail() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { thumbnail: t },
                maxThumbnailWidth: n,
                maxThumbnailHeight: r,
                renderImageComponent: a,
                autoPlayGif: s,
            } = this.props,
            { sourceMetadata: o } = this.state;
        return null == t
            ? null
            : (0, i.jsx)(M.Y.Consumer, {
                  children: (i) => {
                      let { disableAnimations: l } = i;
                      return a({
                          containerClassName: V.ad,
                          src: (0, T.E)(t),
                          original: t.url,
                          width: t.width,
                          height: t.height,
                          maxWidth: n,
                          maxHeight: r,
                          shouldLink: e,
                          autoPlay: s && !l,
                          srcIsAnimated: t.srcIsAnimated,
                          placeholder: t.placeholder,
                          placeholderVersion: t.placeholderVersion,
                          sourceMetadata: o,
                          analyticsSource: "Embed",
                      });
                  },
              });
    }
    renderFields() {
        let { embed: e } = this.props,
            { fields: t } = e;
        if (null == t || 0 === t.length) return null;
        let n = [],
            r = null;
        return (
            t.forEach((t) => {
                let { rawName: i, rawValue: a, inline: s } = t;
                s || null == r || (n.push(r), (r = null)),
                    null == r && (r = []),
                    r.push([this.props.renderTitle(e, i), this.props.renderDescription(e, a, !0)]),
                    (3 !== r.length && s) || (n.push(r), (r = null));
            }),
            null != r && n.push(r),
            (0, i.jsx)("div", {
                className: V.j0,
                children: n.map((e, t) => {
                    let { length: n } = e;
                    return e.map((e, r) => {
                        let [a, s] = e;
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: V.Me,
                                style: {
                                    gridColumn: J(r, n),
                                },
                                children: [
                                    (0, i.jsx)("div", {
                                        className: V.$L,
                                        children: a,
                                    }),
                                    (0, i.jsx)("div", {
                                        className: V.VN,
                                        children: s,
                                    }),
                                ],
                            },
                            "".concat(t, "-").concat(r),
                        );
                    });
                }),
            })
        );
    }
    renderImages() {
        var e, t, n, r;
        let { hiddenSpoiler: a = !1, isVisible: s = !0 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { embed: o } = this.props,
            { maxMediaHeight: l } = this.state;
        if (null == o.images) return null;
        let [c, u, d, f] = o.images.map((e) =>
            this.renderImage({
                hiddenSpoiler: a,
                isVisible: s,
                image: e,
                isGalleryImage: !0,
                allImages: o.images,
            }),
        );
        return null == c && null == u && null == d && null == f
            ? null
            : (0, i.jsxs)("div", {
                  className: V.$B,
                  style: {
                      height: l,
                  },
                  children: [
                      (0, i.jsxs)("div", {
                          className: V.Zf,
                          children: [
                              (0, i.jsx)(
                                  p.G.Provider,
                                  {
                                      value: (0, O.b)(o.images[0].url, o.images[0]),
                                      children: c,
                                  },
                                  0,
                              ),
                              null != f &&
                                  (0, i.jsx)(
                                      p.G.Provider,
                                      {
                                          value: (0, O.b)(null == (e = o.images[2]) ? void 0 : e.url, o.images[2]),
                                          children: d,
                                      },
                                      2,
                                  ),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: V.Zf,
                          children: [
                              (0, i.jsx)(
                                  p.G.Provider,
                                  {
                                      value: (0, O.b)(null == (t = o.images[1]) ? void 0 : t.url, o.images[1]),
                                      children: u,
                                  },
                                  1,
                              ),
                              null == f &&
                                  null != d &&
                                  (0, i.jsx)(
                                      p.G.Provider,
                                      {
                                          value: (0, O.b)(null == (n = o.images[2]) ? void 0 : n.url, o.images[2]),
                                          children: d,
                                      },
                                      2,
                                  ),
                              null != f &&
                                  (0, i.jsx)(
                                      p.G.Provider,
                                      {
                                          value: (0, O.b)(null == (r = o.images[3]) ? void 0 : r.url, o.images[3]),
                                          children: f,
                                      },
                                      3,
                                  ),
                          ],
                      }),
                  ],
              });
    }
    handleImageHover() {
        var e;
        let t = I.A.getChannel(null == (e = this.props.message) ? void 0 : e.channel_id);
        C.default.track(k.HAw.IMAGE_HOVERED, {
            guild_id: null == t ? void 0 : t.guild_id,
            channel_id: null == t ? void 0 : t.id,
            image_recommendations_shown: !1,
        });
    }
    renderImage() {
        var e, t;
        let {
                hiddenSpoiler: n = !1,
                isVisible: r = !0,
                image: a,
                isGalleryImage: s = !1,
                alt: l = G.intl.string(G.t.X4IxWL),
                allImages: c = null,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: u, className: d, autoPlayGif: f } = this.props,
            { maxMediaWidth: h, maxMediaHeight: m, sourceMetadata: E } = this.state;
        if (null == a) return null;
        let y = (0, T.E)(a),
            { srcToOnClickOverride: O, srcToHandlePreloadImage: A } =
                null == c
                    ? {
                          srcToOnClickOverride: {},
                          srcToHandlePreloadImage: {},
                      }
                    : (0, b.o)(
                          c.map((e) =>
                              W(H({}, (0, _.oU)(e, E, "IMAGE")), {
                                  original: e.url,
                                  srcIsAnimated: e.srcIsAnimated,
                              }),
                          ),
                          {},
                          "Embed",
                      ),
            v = g.Ay.isAnimated({
                src: (0, T.E)(a),
                original: a.url,
                animated: !1,
                srcIsAnimated: a.srcIsAnimated,
            }),
            S = {
                containerClassName: o()(d, {
                    [V.W$]: !s,
                    [V.Lw]: !s,
                    [V.I_]: s,
                }),
                imageContainerClassName: s ? V.FM : void 0,
                imageClassName: s ? V.t3 : void 0,
                src: (0, T.E)(a),
                alt: null == a.description || "" === a.description ? l : a.description,
                responsive: !0,
                limitResponsiveWidth: !s,
                width: a.width,
                height: a.height,
                maxWidth: h,
                maxHeight: m,
                original: a.url,
                shouldLink: r,
                disableAltTextDisplay: null == a.description || "" === a.description,
                hiddenSpoilers: n,
                placeholder: a.placeholder,
                placeholderVersion: a.placeholderVersion,
                srcIsAnimated: a.srcIsAnimated,
                mosaicStyleAlt: !0,
            },
            I = null != (e = null == (t = a.url.split(".").pop()) ? void 0 : t.split("?")[0]) ? e : "";
        return (
            "jpg" === I && (I = "jpeg"),
            (0, i.jsx)(p.G.Consumer, {
                children: (e) =>
                    (0, i.jsx)(
                        M.Y.Consumer,
                        {
                            children: (t) => {
                                let { disableAnimations: r } = t;
                                return u(
                                    W(H({}, S), {
                                        autoPlay: f && !r && !n,
                                        renderAccessory: v ? e : null,
                                        handlePreloadImage: A[y],
                                        onClick: O[y],
                                        onMouseEnter: () => this.handleImageHover(),
                                        sourceMetadata: E,
                                        analyticsSource: "Embed",
                                    }),
                                );
                            },
                        },
                        a.url,
                    ),
            })
        );
    }
    renderVideo() {
        let {
                gifv: e = !1,
                isVisible: t = !0,
                hiddenSpoiler: n = !1,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                embed: { url: r, thumbnail: a, video: s, provider: o },
                renderVideoComponent: l,
                renderImageComponent: c,
                renderLinkComponent: u,
                allowFullScreen: d,
                autoPlayGif: f,
                obscureReason: p,
            } = this.props,
            { maxMediaWidth: _, maxMediaHeight: h, sourceMetadata: m } = this.state;
        if (null == r || null == a) return null;
        if (e)
            return null == s
                ? null
                : (0, i.jsx)(M.Y.Consumer, {
                      children: (e) => {
                          let { disableAnimations: o } = e;
                          return (0, i.jsx)(en, {
                              className: V.W$,
                              href: r,
                              thumbnail: a,
                              video: s,
                              maxWidth: _,
                              maxHeight: h,
                              responsive: !0,
                              autoPlay: !n && f && !o && t,
                              renderImageComponent: c,
                              playable: t,
                              hiddenSpoilers: n,
                              disableAltTextDisplay: null != p,
                              placeholder: s.placeholder,
                              placeholderVersion: s.placeholderVersion,
                              sourceMetadata: m,
                          });
                      },
                  });
        let g = () => {
                this.setState({
                    videoControlsShown: !0,
                });
            },
            E = () => {
                this.setState({
                    videoControlsShown: !1,
                });
            };
        return (0, i.jsx)(et, {
            className: V.W$,
            href: r,
            allowFullScreen: d,
            thumbnail: a,
            video: s,
            provider: null == o ? void 0 : o.name,
            maxWidth: _,
            maxHeight: h,
            responsive: !0,
            renderImageComponent: c,
            renderVideoComponent: l,
            renderLinkComponent: u,
            onControlsShow: g,
            onControlsHide: E,
            playable: t && !n,
            placeholder: null == s ? void 0 : s.placeholder,
            placeholderVersion: null == s ? void 0 : s.placeholderVersion,
            sourceMetadata: m,
        });
    }
    renderFooter() {
        let { autoPlayGif: e } = this.props,
            { footer: t, timestamp: n } = this.props.embed;
        return null != t
            ? (0, i.jsx)(M.Y.Consumer, {
                  children: (r) => {
                      let { disableAnimations: a } = r;
                      return (0, i.jsxs)("div", {
                          className: o()(V.te, V.aK),
                          children: [
                              null != t.iconProxyURL && "" !== t.iconProxyURL
                                  ? (0, i.jsx)("img", {
                                        alt: "",
                                        className: V.mG,
                                        src: e && !a ? t.iconProxyURL : ee(t.iconProxyURL),
                                    })
                                  : null,
                              (0, i.jsxs)("span", {
                                  className: V.oy,
                                  children: [
                                      t.text,
                                      null != t.text && null != n
                                          ? (0, i.jsx)("span", {
                                                className: V.i8,
                                                children: "•",
                                            })
                                          : null,
                                      null != n ? (0, R.mk)(n) : null,
                                  ],
                              }),
                          ],
                      });
                  },
              })
            : null != n
              ? (0, i.jsx)("div", {
                    className: o()(V.te, V.aK),
                    children: (0, i.jsx)("span", {
                        className: V.oy,
                        children: (0, R.mk)(n),
                    }),
                })
              : void 0;
    }
    renderStaticPlaceholderMedia() {
        var e;
        let { className: t, embed: n } = this.props,
            { maxMediaWidth: r, maxMediaHeight: a } = this.state,
            s = null != (e = n.image) ? e : n.video;
        if (null == s) return null;
        let { width: o, height: c } = (0, P.Uj)({
            width: s.width,
            height: s.height,
            maxWidth: r,
            maxHeight: a,
        });
        return (0, i.jsx)(l._V3, {
            className: t,
            readyState: k.Rv1.READY,
            src: "",
            width: o,
            height: c,
            maxWidth: r,
            maxHeight: a,
            mediaLayoutType: U.dG.STATIC,
            useFullWidth: !1,
            zoomable: !1,
        });
    }
    renderMedia() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: t } = this.props,
            { isVisible: n } = this.state;
        if (this.shouldShowStaticPlaceholder) return this.renderStaticPlaceholderMedia();
        switch (t.type) {
            case k.Auw.GIFV:
                return this.renderVideo({
                    gifv: !0,
                    hiddenSpoiler: e,
                    isVisible: n,
                });
            case k.Auw.VIDEO:
            default:
                if (null != t.video)
                    return this.renderVideo({
                        gifv: !1,
                        hiddenSpoiler: e,
                        isVisible: n,
                    });
                if (null != t.images)
                    return this.renderImages({
                        hiddenSpoiler: e,
                        isVisible: n,
                    });
                return this.renderImage({
                    hiddenSpoiler: e,
                    isVisible: n,
                    image: t.image,
                    alt: t.rawTitle,
                });
        }
    }
    renderAll() {
        let e,
            t,
            { embed: n, hideMedia: r } = this.props,
            { isVisible: i } = this.state,
            a = this.renderProvider(i),
            s = this.renderAuthor(i),
            o = this.renderTitle(i);
        switch (n.type) {
            case k.Auw.IMAGE:
            case k.Auw.VIDEO:
            case k.Auw.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let l = this.renderFields();
        r || (t = this.renderMedia(!i));
        let c = this.renderFooter(),
            u = null == t;
        return (
            n.type === k.Auw.RICH && (u = null == n.video),
            {
                provider: a,
                author: s,
                title: o,
                description: e,
                thumbnail: !r && u ? this.renderThumbnail(i) : null,
                fields: l,
                media: t,
                footer: c,
            }
        );
    }
    getMaxWidth(e) {
        let {
                embed: { image: t, images: n, video: r, type: i, thumbnail: a },
            } = this.props,
            { maxMediaWidth: s, maxMediaHeight: o } = this.state,
            l = null != t ? t : r;
        if (null == l) return;
        let { width: c } = (0, P.Uj)({
            width: l.width,
            height: l.height,
            maxWidth: s,
            maxHeight: o,
        });
        if (!e && (i === k.Auw.VIDEO || c >= 300)) return c + K;
        if (i === k.Auw.RICH && void 0 !== n) return Z;
        if (i === k.Auw.GIFV) {
            var u, d, f, p;
            let { width: e } = (0, P.Uj)({
                width:
                    null != (u = null != (d = null == r ? void 0 : r.width) ? d : null == a ? void 0 : a.width) ? u : 0,
                height:
                    null != (f = null != (p = null == r ? void 0 : r.height) ? p : null == a ? void 0 : a.height)
                        ? f
                        : 0,
                maxWidth: s,
                maxHeight: o,
            });
            return e;
        }
    }
    getMinSize() {
        let { video: e } = this.props.embed;
        return null != e
            ? {
                  minWidth: q,
                  minHeight: X,
              }
            : void 0;
    }
    isInline() {
        let { hideMedia: e, embed: t } = this.props;
        return !e && (0, w.NV)(t);
    }
    renderSuppressButton(e) {
        return (0, i.jsx)(l.DUT, {
            focusProps: {
                offset: {
                    bottom: 4,
                },
            },
            className: V.PP,
            onClick: e,
            "aria-label": G.intl.string(G.t.GT3fNz),
            children: (0, i.jsx)(l.PGe, {
                size: "xs",
                color: "currentColor",
            }),
        });
    }
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return (
            e.type === k.Auw.IMAGE ||
            e.type === k.Auw.VIDEO ||
            e.type === k.Auw.GIFV ||
            ((e.type === k.Auw.RICH || e.type === k.Auw.ARTICLE) && (null != e.video || null != e.image))
        );
    }
    getEmbedColor(e) {
        let { color: t } = this.props.embed;
        return (null != t && "#ffffff" === t.toLowerCase()) || e ? void 0 : t;
    }
    getSpoilerStyles(e) {
        var t, n;
        let {
                embed: { image: r, images: i, video: a, type: s, rawDescription: o },
            } = this.props,
            { maxMediaWidth: l, maxMediaHeight: u } = this.state;
        if (!this.usesJustifiedAutoStyle()) return;
        let d = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === d && void 0 === i && s !== k.Auw.RICH) {
            let e = null != r ? r : a;
            if (void 0 !== e) {
                let { minWidth: t, minHeight: r } = null != (n = this.getMinSize()) ? n : {},
                    { width: i } = (0, P.Uj)({
                        width: e.width,
                        height: e.height,
                        maxWidth: l,
                        maxHeight: u,
                        minWidth: t,
                        minHeight: r,
                    });
                d = i;
            }
        }
        let f = $ / (c.A.fontScale / 100),
            p = (null != o ? (0, D.W7)(o) : 0) >= f,
            _ = (null != (t = null == o ? void 0 : o.split("\n").length) ? t : 0) >= Q,
            h = p || _;
        return {
            maxWidth: void 0 === d || h ? "max-content" : d,
            justifySelf: "auto",
        };
    }
    get shouldObscure() {
        let { obscureReason: e } = this.props;
        return null != e && f._K.has(e);
    }
    get shouldShowStaticPlaceholder() {
        let { shouldAgeVerify: e = !1 } = this.props;
        return this.shouldObscure && e;
    }
    render() {
        var e;
        let { embed: t, obscureReason: n, className: r } = this.props;
        return null != t.provider && j.o.includes(t.provider.name)
            ? (0, i.jsx)(j.A, {
                  embed: t,
                  className: r,
              })
            : (0, v.A)(t)
              ? (0, i.jsx)(S.A, {
                    embed: t,
                    className: r,
                })
              : (null == (e = t.provider) ? void 0 : e.name) === "Amazon Music" && t.type === k.Auw.RICH
                ? (0, i.jsx)(h.A, {
                      embed: t,
                      className: r,
                  })
                : (0, u.A)(t)
                  ? (0, i.jsx)(d.A, {
                        embed: t,
                        className: r,
                    })
                  : this.isInline()
                    ? null != n
                        ? (0, i.jsx)(A.Ay, {
                              type: A.Ay.Types.ATTACHMENT,
                              reason: n,
                              onReveal: this.onReveal,
                              onToggleObscurity: this.onToggleObscurity,
                              isSingleMosaicItem: !0,
                              containerStyles: this.getSpoilerStyles(!0),
                              obscurityControlClassName: o()({
                                  [V.yi]: this.state.isVisible && this.state.videoControlsShown,
                              }),
                              children: this.renderInlineMediaEmbed,
                          })
                        : this.renderInlineMediaEmbed()
                    : null != n
                      ? (0, i.jsx)(A.Ay, {
                            type: A.Ay.Types.EMBED,
                            onReveal: this.onReveal,
                            onToggleObscurity: this.onToggleObscurity,
                            reason: n,
                            isSingleMosaicItem: !0,
                            containerStyles: this.getSpoilerStyles(!1),
                            children: this.renderEmbedContent,
                        })
                      : this.renderEmbedContent();
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            B(
                this,
                "state",
                H(
                    {
                        isVisible: null == this.props.obscureReason,
                        videoControlsShown: !1,
                        sourceMetadata: {
                            message: this.props.message,
                            identifier: {
                                type: "embed",
                                embedIndex: this.props.embedIndex,
                            },
                        },
                    },
                    (0, w.ds)(this.props.embed),
                ),
            ),
            B(this, "onReveal", () => {
                this.setState({
                    isVisible: !0,
                });
            }),
            B(this, "onToggleObscurity", () => {
                this.setState({
                    isVisible: !this.state.isVisible,
                });
            }),
            B(this, "renderInlineMediaEmbed", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { obscureReason: n, className: r } = t.props,
                    a = t.getMaxWidth(!0);
                return (0, i.jsx)("div", {
                    "aria-hidden": e,
                    className: o()(V.JY, r, {
                        [V.gT]: n === f.Oc.SPOILER,
                        [V.We]: t.shouldObscure,
                        [V.dK]: e,
                        [V.qU]: t.usesJustifiedAutoStyle(),
                    }),
                    style: {
                        maxWidth: a,
                    },
                    children: t.renderMedia(e),
                });
            }),
            B(this, "renderEmbedContent", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { className: n, onSuppressEmbed: r, obscureReason: a } = t.props,
                    {
                        provider: s,
                        author: l,
                        title: c,
                        description: u,
                        fields: d,
                        thumbnail: p,
                        media: _,
                        footer: h,
                    } = t.renderAll();
                return (0, i.jsx)("article", {
                    className: o()(n, V.vO, F.PT, {
                        [V.dK]: e,
                        [V.o4]: a === f.Oc.SPOILER,
                        [V.q$]: t.shouldObscure,
                        [V.qU]: t.usesJustifiedAutoStyle(),
                    }),
                    "aria-hidden": e,
                    style: {
                        borderLeftColor: t.getEmbedColor(e),
                        maxWidth: t.getMaxWidth(!1),
                    },
                    children: (0, i.jsx)("div", {
                        className: V.UT,
                        children: (0, i.jsxs)("div", {
                            className: o()({
                                [V.Vg]: !0,
                                [V.$H]: null != p,
                            }),
                            children: [null != r ? t.renderSuppressButton(r) : null, s, l, c, u, d, _, p, h],
                        }),
                    }),
                });
            });
    }
}
B(er, "defaultProps", {
    hideMedia: !1,
    allowFullScreen: !0,
    maxThumbnailWidth: 80,
    maxThumbnailHeight: 80,
    embedIndex: 0,
});
