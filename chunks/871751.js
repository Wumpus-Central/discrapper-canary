t.d(l, {
    Ay: () => q,
    rr: () => z,
}),
    t(896048),
    t(321073),
    t(228524),
    t(747238);
var r,
    n = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    o = t(397927),
    u = t(775602),
    d = t(684290),
    c = t(478620),
    h = t(338717),
    p = t(643612),
    m = t(731068),
    g = t(124786),
    f = t(935616),
    y = t(619517),
    b = t(893598),
    v = t(269849),
    w = t(114212),
    x = t(343552),
    j = t(302031),
    O = t(644119),
    A = t(780297),
    P = t(734057),
    S = t(644447),
    I = t(954571),
    E = t(203982),
    C = t(405269),
    N = t(659674),
    T = t(515718),
    M = t(240248),
    R = t(998218),
    k = t(259407),
    D = t(690595),
    W = t(692051),
    L = t(652215),
    _ = t(838541),
    V = t(985018),
    H = t(802571),
    U = t(206314);

function G(e, l, t) {
    return (
        l in e
            ? Object.defineProperty(e, l, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[l] = t),
        e
    );
}

function K(e) {
    for (var l = 1; l < arguments.length; l++) {
        var t = null != arguments[l] ? arguments[l] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (l) {
                G(e, l, t[l]);
            });
    }
    return e;
}

function B(e, l) {
    return (
        (l = null != l ? l : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l))
            : (function (e, l) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(l)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t));
              }),
        e
    );
}

function F(e) {
    let l = R.A.toURLSafe(e);
    return null == l ? e : (l.searchParams.set("format", "png"), l.toString());
}

function z(e) {
    var l, t;
    let {
            className: r,
            iframeWrapperClassName: s,
            maxWidth: o,
            maxHeight: u,
            thumbnail: d,
            video: c,
            provider: h,
            allowFullScreen: p = !0,
            responsive: m = !1,
            renderImageComponent: g,
            renderVideoComponent: f,
            renderLinkComponent: y,
            playable: v = !0,
            autoPlay: w = !1,
            autoMute: x,
            volume: j,
            onPlay: O,
            onPause: A,
            onEnded: P,
            onControlsHide: I,
            onControlsShow: C,
            onVolumeChange: N,
            onMute: M,
            href: R,
            placeholder: D,
            placeholderVersion: W,
            sourceMetadata: _,
        } = e,
        [V, U] = i.useState(w),
        G = null != c && null == c.proxyURL,
        K = i.useCallback(() => U(!1), [U]),
        B = (e) => {
            e.preventDefault(),
                e.stopPropagation(),
                null == O || O(!1),
                U(!0),
                G &&
                    (E._.dispatch(L.jej.VIDEO_EMBED_PLAYBACK_STARTED),
                    E._.subscribeOnce(L.jej.VIDEO_EMBED_PLAYBACK_STARTED, K));
        };
    i.useEffect(
        () => () => {
            G && E._.unsubscribe(L.jej.VIDEO_EMBED_PLAYBACK_STARTED, K);
        },
        [G, K],
    );
    let { width: F, height: z } = d;
    null != c && ((F = c.width), (z = c.height));
    let Y = (0, T.Uj)({
        width: F,
        height: z,
        maxWidth: o,
        maxHeight: u,
    });
    (F = Math.max(Y.width, 150)), (z = Math.max(Y.height, 144));
    let q = (0, S.E)(d);
    if (null != c && null != c.proxyURL)
        return (0, n.jsx)("div", {
            className: a()(H.pu, r),
            children: f({
                poster: q,
                src: c.proxyURL,
                placeholder: D,
                placeholderVersion: W,
                width: F,
                height: z,
                responsive: m,
                autoPlay: w,
                onEnded: P,
                naturalWidth: c.width,
                naturalHeight: c.height,
                onVolumeChange: N,
                playable: v,
                autoMute: x,
                volume: j,
                onPlay: O,
                onPause: A,
                onMute: M,
                onControlsHide: I,
                onControlsShow: C,
                sourceMetadata: _,
            }),
        });
    if (V && null != c) {
        let e,
            l = !0 === x || ("function" == typeof x && x()),
            t = {
                width: F,
                height: z,
            },
            i = {
                width: F,
                height: z,
            };
        if (m) {
            let l = 0 !== F ? z / F : 1;
            (t = {
                maxWidth: o,
                maxHeight: u,
                width: void 0,
                height: void 0,
            }),
                (i = {
                    paddingBottom: "".concat(100 * l, "%"),
                    maxWidth: F,
                }),
                (e = {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    maxWidth: F,
                    maxHeight: z,
                });
        }
        return (0, n.jsx)("div", {
            className: r,
            style: t,
            children: (0, n.jsx)("div", {
                className: a()(H.pu, s),
                style: i,
                children: (0, n.jsx)(k.Ay, {
                    provider: h,
                    src: c.url,
                    style: e,
                    width: F,
                    height: z,
                    allowFullScreen: p,
                    autoMute: l,
                }),
            }),
        });
    }
    return (0, n.jsxs)("div", {
        className: a()(H.pu, r),
        style: m
            ? {
                  maxWidth: F,
              }
            : {
                  width: F,
                  height: z,
              },
        children: [
            g({
                src: q,
                width: F,
                height: z,
                maxWidth: F,
                maxHeight: z,
                responsive: m,
                containerClassName: H.tW,
                imageClassName: H.jq,
                placeholder: D,
                placeholderVersion: W,
                onClick: v && null != c ? B : null,
                sourceMetadata: _,
                analyticsSource: "EmbedVideo",
            }),
            (0, n.jsx)("div", {
                className: H._W,
                children: (0, n.jsx)("div", {
                    className: H.Fo,
                    children: v
                        ? (0, n.jsx)(b.A, {
                              onPlay: null != c ? B : null,
                              externalURL: R,
                              renderLinkComponent: y,
                              messageId: null == _ || null == (l = _.message) ? void 0 : l.id,
                              channelId: null == _ || null == (t = _.message) ? void 0 : t.channel_id,
                          })
                        : null,
                }),
            }),
        ],
    });
}

function Y(e) {
    let {
        className: l,
        href: t,
        autoPlay: r,
        maxWidth: i,
        maxHeight: s,
        thumbnail: o,
        video: u,
        renderImageComponent: d,
        responsive: c,
        alt: h,
        disableAltTextDisplay: p = !1,
        playable: m = !0,
        hiddenSpoilers: g,
        placeholder: y,
        placeholderVersion: b,
        sourceMetadata: v,
    } = e;
    return (0, n.jsx)(f.A, {
        className: a()(H.pu, l),
        original: t,
        poster: (0, S.E)(o),
        src: (0, S.E)(u),
        alt: h,
        width: o.width,
        height: o.height,
        naturalHeight: u.height,
        naturalWidth: u.width,
        maxWidth: i,
        maxHeight: s,
        responsive: c,
        autoPlay: r,
        playable: m,
        renderImageComponent: d,
        hiddenSpoilers: g,
        disableAltTextDisplay: p,
        placeholder: y,
        placeholderVersion: b,
        sourceMetadata: v,
    });
}
class q extends (r = i.PureComponent) {
    renderProvider() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { provider: l },
                renderLinkComponent: t,
                message: r,
            } = this.props;
        return null == l
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, n.jsx)("div", {
                    className: a()(H.zC, H.aK),
                    children: this.renderContentPlaceholder({
                        width: 80,
                        height: 18,
                    }),
                })
              : (0, n.jsx)("div", {
                    className: a()(H.zC, H.aK),
                    children:
                        null != l.url
                            ? t({
                                  className: H.Cj,
                                  href: l.url,
                                  tabIndex: e ? 0 : -1,
                                  children: l.name,
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: null == r ? void 0 : r.id,
                                  channelId: null == r ? void 0 : r.channel_id,
                              })
                            : (0, n.jsx)("span", {
                                  children: l.name,
                              }),
                });
    }
    renderAuthor() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { author: l },
                renderLinkComponent: t,
                message: r,
                autoPlayGif: i,
            } = this.props;
        return null == l
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, n.jsx)("div", {
                    className: a()(H.rN, H.aK),
                    children: this.renderContentPlaceholder({
                        width: 150,
                        height: 18,
                    }),
                })
              : (0, n.jsx)(W.Y.Consumer, {
                    children: (s) => {
                        let { disableAnimations: o } = s;
                        return (0, n.jsxs)("div", {
                            className: a()(H.rN, H.aK),
                            children: [
                                null != l.iconProxyURL
                                    ? (0, n.jsx)("img", {
                                          alt: "",
                                          className: H.SG,
                                          src: i && !o ? l.iconProxyURL : F(l.iconProxyURL),
                                      })
                                    : null,
                                null != l.url
                                    ? t({
                                          className: H.av,
                                          href: l.url,
                                          tabIndex: e ? 0 : -1,
                                          children: l.name,
                                          target: "_blank",
                                          rel: "noreferrer noopener",
                                          messageId: null == r ? void 0 : r.id,
                                          channelId: null == r ? void 0 : r.channel_id,
                                      })
                                    : (0, n.jsx)("span", {
                                          className: H.QQ,
                                          children: l.name,
                                      }),
                            ],
                        });
                    },
                });
    }
    renderContentPlaceholder(e) {
        let { width: l, height: t } = e;
        return (0, n.jsx)(w.FQ, {
            className: H.Jl,
            width: l,
            height: t,
            opacity: 0.3,
        });
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            { embed: l, renderLinkComponent: t, renderTitle: r, message: i } = this.props,
            { rawTitle: s, url: o } = l;
        return null == s
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, n.jsx)("div", {
                    className: a()(H.gt, H.aK),
                    children: this.renderContentPlaceholder({
                        width: 400,
                        height: 30,
                    }),
                })
              : (0, n.jsx)("div", {
                    className: a()(H.gt, H.aK),
                    children:
                        null != o
                            ? t({
                                  className: H.kv,
                                  href: o,
                                  tabIndex: e ? 0 : -1,
                                  children: r(l, s),
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: null == i ? void 0 : i.id,
                                  channelId: null == i ? void 0 : i.channel_id,
                              })
                            : r(l, s),
                });
    }
    renderDescription() {
        let { embed: e, renderDescription: l } = this.props,
            { rawDescription: t } = e;
        return null == t
            ? null
            : (0, n.jsx)("div", {
                  className: a()(H.cD, H.aK),
                  children: this.shouldShowStaticPlaceholder
                      ? this.renderContentPlaceholder({
                            width: 400,
                            height: 50,
                        })
                      : l(e, t, !1),
              });
    }
    renderThumbnail() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { thumbnail: l },
                maxThumbnailWidth: t,
                maxThumbnailHeight: r,
                renderImageComponent: i,
                autoPlayGif: s,
            } = this.props,
            { sourceMetadata: a } = this.state;
        return null == l
            ? null
            : (0, n.jsx)(W.Y.Consumer, {
                  children: (n) => {
                      let { disableAnimations: o } = n;
                      return i({
                          containerClassName: H.ad,
                          src: (0, S.E)(l),
                          original: l.url,
                          width: l.width,
                          height: l.height,
                          maxWidth: t,
                          maxHeight: r,
                          shouldLink: e,
                          autoPlay: s && !o,
                          srcIsAnimated: l.srcIsAnimated,
                          placeholder: l.placeholder,
                          placeholderVersion: l.placeholderVersion,
                          sourceMetadata: a,
                          analyticsSource: "Embed",
                      });
                  },
              });
    }
    renderFields() {
        let { embed: e } = this.props,
            { fields: l } = e;
        if (null == l || 0 === l.length) return null;
        let t = [],
            r = null;
        return (
            l.forEach((l) => {
                let { rawName: n, rawValue: i, inline: s } = l;
                s || null == r || (t.push(r), (r = null)),
                    null == r && (r = []),
                    r.push([this.props.renderTitle(e, n), this.props.renderDescription(e, i, !0)]),
                    (3 !== r.length && s) || (t.push(r), (r = null));
            }),
            null != r && t.push(r),
            (0, n.jsx)("div", {
                className: H.j0,
                children: t.map((e, l) => {
                    let { length: t } = e;
                    return e.map((e, r) => {
                        let i,
                            s,
                            [a, o] = e;
                        return (0, n.jsxs)(
                            "div",
                            {
                                className: H.Me,
                                style: {
                                    gridColumn: ((s = r * (i = 12 / t)), "".concat(s + 1, " / ").concat(s + i + 1)),
                                },
                                children: [
                                    (0, n.jsx)("div", {
                                        className: H.$L,
                                        children: a,
                                    }),
                                    (0, n.jsx)("div", {
                                        className: H.VN,
                                        children: o,
                                    }),
                                ],
                            },
                            "".concat(l, "-").concat(r),
                        );
                    });
                }),
            })
        );
    }
    renderImages() {
        var e, l, t, r;
        let { hiddenSpoiler: i = !1, isVisible: s = !0 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { embed: a } = this.props,
            { maxMediaHeight: o } = this.state;
        if (null == a.images) return null;
        let [u, d, c, h] = a.images.map((e) =>
            this.renderImage({
                hiddenSpoiler: i,
                isVisible: s,
                image: e,
                isGalleryImage: !0,
                allImages: a.images,
            }),
        );
        return null == u && null == d && null == c && null == h
            ? null
            : (0, n.jsxs)("div", {
                  className: H.$B,
                  style: {
                      height: o,
                  },
                  children: [
                      (0, n.jsxs)("div", {
                          className: H.Zf,
                          children: [
                              (0, n.jsx)(
                                  p.G.Provider,
                                  {
                                      value: (0, x.b)(a.images[0].url, a.images[0]),
                                      children: u,
                                  },
                                  0,
                              ),
                              null != h &&
                                  (0, n.jsx)(
                                      p.G.Provider,
                                      {
                                          value: (0, x.b)(null == (e = a.images[2]) ? void 0 : e.url, a.images[2]),
                                          children: c,
                                      },
                                      2,
                                  ),
                          ],
                      }),
                      (0, n.jsxs)("div", {
                          className: H.Zf,
                          children: [
                              (0, n.jsx)(
                                  p.G.Provider,
                                  {
                                      value: (0, x.b)(null == (l = a.images[1]) ? void 0 : l.url, a.images[1]),
                                      children: d,
                                  },
                                  1,
                              ),
                              null == h &&
                                  null != c &&
                                  (0, n.jsx)(
                                      p.G.Provider,
                                      {
                                          value: (0, x.b)(null == (t = a.images[2]) ? void 0 : t.url, a.images[2]),
                                          children: c,
                                      },
                                      2,
                                  ),
                              null != h &&
                                  (0, n.jsx)(
                                      p.G.Provider,
                                      {
                                          value: (0, x.b)(null == (r = a.images[3]) ? void 0 : r.url, a.images[3]),
                                          children: h,
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
        let l = P.A.getChannel(null == (e = this.props.message) ? void 0 : e.channel_id);
        I.default.track(L.HAw.IMAGE_HOVERED, {
            guild_id: null == l ? void 0 : l.guild_id,
            channel_id: null == l ? void 0 : l.id,
            image_recommendations_shown: !1,
        });
    }
    renderImage() {
        var e, l;
        let {
                hiddenSpoiler: t = !1,
                isVisible: r = !0,
                image: i,
                isGalleryImage: s = !1,
                alt: o = V.intl.string(V.t.X4IxWL),
                allImages: u = null,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: d, className: c, autoPlayGif: h } = this.props,
            { maxMediaWidth: g, maxMediaHeight: f, sourceMetadata: b } = this.state;
        if (null == i) return null;
        let w = (0, S.E)(i),
            { srcToOnClickOverride: x, srcToHandlePreloadImage: j } =
                null == u
                    ? {
                          srcToOnClickOverride: {},
                          srcToHandlePreloadImage: {},
                      }
                    : (0, v.o)(
                          u.map((e) =>
                              B(K({}, (0, m.oU)(e, b, "IMAGE")), {
                                  original: e.url,
                                  srcIsAnimated: e.srcIsAnimated,
                              }),
                          ),
                          {},
                          "Embed",
                      ),
            O = y.Ay.isAnimated({
                src: (0, S.E)(i),
                original: i.url,
                animated: !1,
                srcIsAnimated: i.srcIsAnimated,
            }),
            A = {
                containerClassName: a()(c, {
                    [H.W$]: !s,
                    [H.Lw]: !s,
                    [H.I_]: s,
                }),
                imageContainerClassName: s ? H.FM : void 0,
                imageClassName: s ? H.t3 : void 0,
                src: (0, S.E)(i),
                alt: null == i.description || "" === i.description ? o : i.description,
                responsive: !0,
                limitResponsiveWidth: !s,
                width: i.width,
                height: i.height,
                maxWidth: g,
                maxHeight: f,
                original: i.url,
                shouldLink: r,
                disableAltTextDisplay: null == i.description || "" === i.description,
                hiddenSpoilers: t,
                placeholder: i.placeholder,
                placeholderVersion: i.placeholderVersion,
                srcIsAnimated: i.srcIsAnimated,
                mosaicStyleAlt: !0,
            },
            P = null != (e = null == (l = i.url.split(".").pop()) ? void 0 : l.split("?")[0]) ? e : "";
        return (
            "jpg" === P && (P = "jpeg"),
            (0, n.jsx)(p.G.Consumer, {
                children: (e) =>
                    (0, n.jsx)(
                        W.Y.Consumer,
                        {
                            children: (l) => {
                                let { disableAnimations: r } = l;
                                return d(
                                    B(K({}, A), {
                                        autoPlay: h && !r && !t,
                                        renderAccessory: O ? e : null,
                                        handlePreloadImage: j[w],
                                        onClick: x[w],
                                        onMouseEnter: () => this.handleImageHover(),
                                        sourceMetadata: b,
                                        analyticsSource: "Embed",
                                    }),
                                );
                            },
                        },
                        i.url,
                    ),
            })
        );
    }
    renderVideo() {
        let {
                gifv: e = !1,
                isVisible: l = !0,
                hiddenSpoiler: t = !1,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                embed: { url: r, thumbnail: i, video: s, provider: a },
                renderVideoComponent: o,
                renderImageComponent: u,
                renderLinkComponent: d,
                allowFullScreen: c,
                autoPlayGif: h,
                obscureReason: p,
            } = this.props,
            { maxMediaWidth: m, maxMediaHeight: g, sourceMetadata: f } = this.state;
        if (null == r || null == i) return null;
        if (e)
            return null == s
                ? null
                : (0, n.jsx)(W.Y.Consumer, {
                      children: (e) => {
                          let { disableAnimations: a } = e;
                          return (0, n.jsx)(Y, {
                              className: H.W$,
                              href: r,
                              thumbnail: i,
                              video: s,
                              maxWidth: m,
                              maxHeight: g,
                              responsive: !0,
                              autoPlay: !t && h && !a && l,
                              renderImageComponent: u,
                              playable: l,
                              hiddenSpoilers: t,
                              disableAltTextDisplay: null != p,
                              placeholder: s.placeholder,
                              placeholderVersion: s.placeholderVersion,
                              sourceMetadata: f,
                          });
                      },
                  });
        let y = () => {
                this.setState({
                    videoControlsShown: !0,
                });
            },
            b = () => {
                this.setState({
                    videoControlsShown: !1,
                });
            };
        return (0, n.jsx)(z, {
            className: H.W$,
            href: r,
            allowFullScreen: c,
            thumbnail: i,
            video: s,
            provider: null == a ? void 0 : a.name,
            maxWidth: m,
            maxHeight: g,
            responsive: !0,
            renderImageComponent: u,
            renderVideoComponent: o,
            renderLinkComponent: d,
            onControlsShow: y,
            onControlsHide: b,
            playable: l && !t,
            placeholder: null == s ? void 0 : s.placeholder,
            placeholderVersion: null == s ? void 0 : s.placeholderVersion,
            sourceMetadata: f,
        });
    }
    renderFooter() {
        let { autoPlayGif: e } = this.props,
            { footer: l, timestamp: t } = this.props.embed;
        return null != l
            ? (0, n.jsx)(W.Y.Consumer, {
                  children: (r) => {
                      let { disableAnimations: i } = r;
                      return (0, n.jsxs)("div", {
                          className: a()(H.te, H.aK),
                          children: [
                              null != l.iconProxyURL && "" !== l.iconProxyURL
                                  ? (0, n.jsx)("img", {
                                        alt: "",
                                        className: H.mG,
                                        src: e && !i ? l.iconProxyURL : F(l.iconProxyURL),
                                    })
                                  : null,
                              (0, n.jsxs)("span", {
                                  className: H.oy,
                                  children: [
                                      l.text,
                                      null != l.text && null != t
                                          ? (0, n.jsx)("span", {
                                                className: H.i8,
                                                children: "•",
                                            })
                                          : null,
                                      null != t ? (0, C.mk)(t) : null,
                                  ],
                              }),
                          ],
                      });
                  },
              })
            : null != t
              ? (0, n.jsx)("div", {
                    className: a()(H.te, H.aK),
                    children: (0, n.jsx)("span", {
                        className: H.oy,
                        children: (0, C.mk)(t),
                    }),
                })
              : void 0;
    }
    renderStaticPlaceholderMedia() {
        var e;
        let { className: l, embed: t } = this.props,
            { maxMediaWidth: r, maxMediaHeight: i } = this.state,
            s = null != (e = t.image) ? e : t.video;
        if (null == s) return null;
        let { width: a, height: u } = (0, T.Uj)({
            width: s.width,
            height: s.height,
            maxWidth: r,
            maxHeight: i,
        });
        return (0, n.jsx)(o._V3, {
            className: l,
            readyState: L.Rv1.READY,
            src: "",
            width: a,
            height: u,
            maxWidth: r,
            maxHeight: i,
            mediaLayoutType: _.dG.STATIC,
            useFullWidth: !1,
            zoomable: !1,
        });
    }
    renderMedia() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: l } = this.props,
            { isVisible: t } = this.state;
        if (this.shouldShowStaticPlaceholder) return this.renderStaticPlaceholderMedia();
        switch (l.type) {
            case L.Auw.GIFV:
                return this.renderVideo({
                    gifv: !0,
                    hiddenSpoiler: e,
                    isVisible: t,
                });
            case L.Auw.VIDEO:
            default:
                if (null != l.video)
                    return this.renderVideo({
                        gifv: !1,
                        hiddenSpoiler: e,
                        isVisible: t,
                    });
                if (null != l.images)
                    return this.renderImages({
                        hiddenSpoiler: e,
                        isVisible: t,
                    });
                return this.renderImage({
                    hiddenSpoiler: e,
                    isVisible: t,
                    image: l.image,
                    alt: l.rawTitle,
                });
        }
    }
    renderAll() {
        let e,
            l,
            { embed: t, hideMedia: r } = this.props,
            { isVisible: n } = this.state,
            i = this.renderProvider(n),
            s = this.renderAuthor(n),
            a = this.renderTitle(n);
        switch (t.type) {
            case L.Auw.IMAGE:
            case L.Auw.VIDEO:
            case L.Auw.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let o = this.renderFields();
        r || (l = this.renderMedia(!n));
        let u = this.renderFooter(),
            d = null == l;
        return (
            t.type === L.Auw.RICH && (d = null == t.video),
            {
                provider: i,
                author: s,
                title: a,
                description: e,
                thumbnail: !r && d ? this.renderThumbnail(n) : null,
                fields: o,
                media: l,
                footer: u,
            }
        );
    }
    getMaxWidth(e) {
        let {
                embed: { image: l, images: t, video: r, type: n, thumbnail: i },
            } = this.props,
            { maxMediaWidth: s, maxMediaHeight: a } = this.state,
            o = null != l ? l : r;
        if (null == o) return;
        let { width: u } = (0, T.Uj)({
            width: o.width,
            height: o.height,
            maxWidth: s,
            maxHeight: a,
        });
        if (!e && (n === L.Auw.VIDEO || u >= 300)) return u + 32;
        if (n === L.Auw.RICH && void 0 !== t) return 520;
        if (n === L.Auw.GIFV) {
            var d, c, h, p;
            let { width: e } = (0, T.Uj)({
                width:
                    null != (d = null != (c = null == r ? void 0 : r.width) ? c : null == i ? void 0 : i.width) ? d : 0,
                height:
                    null != (h = null != (p = null == r ? void 0 : r.height) ? p : null == i ? void 0 : i.height)
                        ? h
                        : 0,
                maxWidth: s,
                maxHeight: a,
            });
            return e;
        }
    }
    getMinSize() {
        let { video: e } = this.props.embed;
        return null != e
            ? {
                  minWidth: 150,
                  minHeight: 144,
              }
            : void 0;
    }
    isInline() {
        let { hideMedia: e, embed: l } = this.props;
        return !e && (0, N.NV)(l);
    }
    renderSuppressButton(e) {
        return (0, n.jsx)(o.DUT, {
            focusProps: {
                offset: {
                    bottom: 4,
                },
            },
            className: H.PP,
            onClick: e,
            "aria-label": V.intl.string(V.t.GT3fNz),
            children: (0, n.jsx)(o.PGe, {
                size: "xs",
                color: "currentColor",
            }),
        });
    }
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return (
            e.type === L.Auw.IMAGE ||
            e.type === L.Auw.VIDEO ||
            e.type === L.Auw.GIFV ||
            ((e.type === L.Auw.RICH || e.type === L.Auw.ARTICLE) && (null != e.video || null != e.image))
        );
    }
    getEmbedColor(e) {
        let { color: l } = this.props.embed;
        return (null != l && "#ffffff" === l.toLowerCase()) || e ? void 0 : l;
    }
    getSpoilerStyles(e) {
        var l, t;
        let {
                embed: { image: r, images: n, video: i, type: s, rawDescription: a },
            } = this.props,
            { maxMediaWidth: o, maxMediaHeight: d } = this.state;
        if (!this.usesJustifiedAutoStyle()) return;
        let c = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === c && void 0 === n && s !== L.Auw.RICH) {
            let e = null != r ? r : i;
            if (void 0 !== e) {
                let { minWidth: l, minHeight: r } = null != (t = this.getMinSize()) ? t : {},
                    { width: n } = (0, T.Uj)({
                        width: e.width,
                        height: e.height,
                        maxWidth: o,
                        maxHeight: d,
                        minWidth: l,
                        minHeight: r,
                    });
                c = n;
            }
        }
        let h = 150 / (u.A.fontScale / 100),
            p = null != a ? (0, M.W7)(a) : 0,
            m = (null != (l = null == a ? void 0 : a.split("\n").length) ? l : 0) >= 5;
        return {
            maxWidth: void 0 === c || p >= h || m ? "max-content" : c,
            justifySelf: "auto",
        };
    }
    get shouldObscure() {
        let { obscureReason: e } = this.props;
        return null != e && h._K.has(e);
    }
    get shouldShowStaticPlaceholder() {
        let { shouldAgeVerify: e = !1 } = this.props;
        return this.shouldObscure && e;
    }
    render() {
        var e;
        let { embed: l, obscureReason: t, className: r } = this.props;
        return null != l.provider && D.o.includes(l.provider.name)
            ? (0, n.jsx)(D.A, {
                  embed: l,
                  className: r,
              })
            : (0, O.A)(l)
              ? (0, n.jsx)(A.A, {
                    embed: l,
                    className: r,
                })
              : (null == (e = l.provider) ? void 0 : e.name) === "Amazon Music" && l.type === L.Auw.RICH
                ? (0, n.jsx)(g.A, {
                      embed: l,
                      className: r,
                  })
                : (0, d.A)(l)
                  ? (0, n.jsx)(c.A, {
                        embed: l,
                        className: r,
                    })
                  : this.isInline()
                    ? null != t
                        ? (0, n.jsx)(j.Ay, {
                              type: j.Ay.Types.ATTACHMENT,
                              reason: t,
                              onReveal: this.onReveal,
                              onToggleObscurity: this.onToggleObscurity,
                              isSingleMosaicItem: !0,
                              containerStyles: this.getSpoilerStyles(!0),
                              obscurityControlClassName: a()({
                                  [H.yi]: this.state.isVisible && this.state.videoControlsShown,
                              }),
                              children: this.renderInlineMediaEmbed,
                          })
                        : this.renderInlineMediaEmbed()
                    : null != t
                      ? (0, n.jsx)(j.Ay, {
                            type: j.Ay.Types.EMBED,
                            onReveal: this.onReveal,
                            onToggleObscurity: this.onToggleObscurity,
                            reason: t,
                            isSingleMosaicItem: !0,
                            containerStyles: this.getSpoilerStyles(!1),
                            children: this.renderEmbedContent,
                        })
                      : this.renderEmbedContent();
    }
    constructor(...e) {
        var l;
        super(...e),
            (l = this),
            G(
                this,
                "state",
                K(
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
                    (0, N.ds)(this.props.embed),
                ),
            ),
            G(this, "onReveal", () => {
                this.setState({
                    isVisible: !0,
                });
            }),
            G(this, "onToggleObscurity", () => {
                this.setState({
                    isVisible: !this.state.isVisible,
                });
            }),
            G(this, "renderInlineMediaEmbed", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { obscureReason: t, className: r } = l.props,
                    i = l.getMaxWidth(!0);
                return (0, n.jsx)("div", {
                    "aria-hidden": e,
                    className: a()(H.JY, r, {
                        [H.gT]: t === h.Oc.SPOILER,
                        [H.We]: l.shouldObscure,
                        [H.dK]: e,
                        [H.qU]: l.usesJustifiedAutoStyle(),
                    }),
                    style: {
                        maxWidth: i,
                    },
                    children: l.renderMedia(e),
                });
            }),
            G(this, "renderEmbedContent", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { className: t, onSuppressEmbed: r, obscureReason: i } = l.props,
                    {
                        provider: s,
                        author: o,
                        title: u,
                        description: d,
                        fields: c,
                        thumbnail: p,
                        media: m,
                        footer: g,
                    } = l.renderAll();
                return (0, n.jsx)("article", {
                    className: a()(t, H.vO, U.PT, {
                        [H.dK]: e,
                        [H.o4]: i === h.Oc.SPOILER,
                        [H.q$]: l.shouldObscure,
                        [H.qU]: l.usesJustifiedAutoStyle(),
                    }),
                    "aria-hidden": e,
                    style: {
                        borderLeftColor: l.getEmbedColor(e),
                        maxWidth: l.getMaxWidth(!1),
                    },
                    children: (0, n.jsx)("div", {
                        className: H.UT,
                        children: (0, n.jsxs)("div", {
                            className: a()({
                                [H.Vg]: !0,
                                [H.$H]: null != p,
                            }),
                            children: [null != r ? l.renderSuppressButton(r) : null, s, o, u, d, c, m, p, g],
                        }),
                    }),
                });
            });
    }
}
G(q, "defaultProps", {
    hideMedia: !1,
    allowFullScreen: !0,
    maxThumbnailWidth: 80,
    maxThumbnailHeight: 80,
    embedIndex: 0,
});
