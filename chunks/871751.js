t.d(l, { Ay: () => F, rr: () => B }), t(321073);
var r = t(627968),
    s = t(64700),
    n = t(503698),
    i = t.n(n),
    a = t(673698),
    o = t(939249),
    d = t(789645),
    u = t(775602),
    h = t(684290),
    c = t(478620),
    m = t(338717),
    p = t(643612),
    g = t(731068),
    x = t(124786),
    f = t(935616),
    y = t(619517),
    w = t(893598),
    v = t(269849),
    b = t(114212),
    A = t(343552),
    j = t(302031),
    I = t(644119),
    S = t(780297),
    C = t(734057),
    N = t(644447),
    E = t(954571),
    P = t(203982),
    T = t(405269),
    M = t(659674),
    R = t(515718),
    L = t(240248),
    W = t(998218),
    _ = t(259407),
    k = t(690595),
    V = t(692051),
    H = t(652215),
    D = t(838541),
    O = t(985018),
    U = t(472840),
    G = t(992595);
function $(e) {
    let l = W.A.toURLSafe(e);
    return null == l ? e : (l.searchParams.set("format", "png"), l.toString());
}
function B(e) {
    let {
            className: l,
            iframeWrapperClassName: t,
            maxWidth: n,
            maxHeight: a,
            thumbnail: o,
            video: d,
            provider: u,
            allowFullScreen: h = !0,
            responsive: c = !1,
            renderImageComponent: m,
            renderVideoComponent: p,
            renderLinkComponent: g,
            playable: x = !0,
            autoPlay: f = !1,
            autoMute: y,
            volume: v,
            onPlay: b,
            onPause: A,
            onEnded: j,
            onControlsHide: I,
            onControlsShow: S,
            onVolumeChange: C,
            onMute: E,
            href: T,
            placeholder: M,
            placeholderVersion: L,
            sourceMetadata: W,
        } = e,
        [k, V] = s.useState(f),
        D = null != d && null == d.proxyURL,
        O = s.useCallback(() => V(!1), [V]),
        G = (e) => {
            e.preventDefault(),
                e.stopPropagation(),
                b?.(!1),
                V(!0),
                D &&
                    (P._.dispatch(H.jej.VIDEO_EMBED_PLAYBACK_STARTED),
                    P._.subscribeOnce(H.jej.VIDEO_EMBED_PLAYBACK_STARTED, O));
        };
    s.useEffect(
        () => () => {
            D && P._.unsubscribe(H.jej.VIDEO_EMBED_PLAYBACK_STARTED, O);
        },
        [D, O],
    );
    let { width: $, height: B } = o;
    null != d && (($ = d.width), (B = d.height));
    let K = (0, R.Uj)({ width: $, height: B, maxWidth: n, maxHeight: a });
    ($ = Math.max(K.width, 150)), (B = Math.max(K.height, 144));
    let F = (0, N.E)(o);
    if (null != d && null != d.proxyURL)
        return (0, r.jsx)("div", {
            className: i()(U.pu, l),
            children: p({
                poster: F,
                src: d.proxyURL,
                placeholder: M,
                placeholderVersion: L,
                width: $,
                height: B,
                responsive: c,
                autoPlay: f,
                onEnded: j,
                naturalWidth: d.width,
                naturalHeight: d.height,
                onVolumeChange: C,
                playable: x,
                autoMute: y,
                volume: v,
                onPlay: b,
                onPause: A,
                onMute: E,
                onControlsHide: I,
                onControlsShow: S,
                sourceMetadata: W,
            }),
        });
    if (k && null != d) {
        let e,
            s = !0 === y || ("function" == typeof y && y()),
            o = { width: $, height: B },
            m = { width: $, height: B };
        if (c) {
            let l = 0 !== $ ? B / $ : 1;
            (o = { maxWidth: n, maxHeight: a, width: void 0, height: void 0 }),
                (m = { paddingBottom: `${100 * l}%`, maxWidth: $ }),
                (e = { position: "absolute", top: 0, left: 0, maxWidth: $, maxHeight: B });
        }
        return (0, r.jsx)("div", {
            className: l,
            style: o,
            children: (0, r.jsx)("div", {
                className: i()(U.pu, t),
                style: m,
                children: (0, r.jsx)(_.Ay, {
                    provider: u,
                    src: d.url,
                    style: e,
                    width: $,
                    height: B,
                    allowFullScreen: h,
                    autoMute: s,
                }),
            }),
        });
    }
    return (0, r.jsxs)("div", {
        className: i()(U.pu, l),
        style: c ? { maxWidth: $ } : { width: $, height: B },
        children: [
            m({
                src: F,
                width: $,
                height: B,
                maxWidth: $,
                maxHeight: B,
                responsive: c,
                containerClassName: U.tW,
                imageClassName: U.jq,
                placeholder: M,
                placeholderVersion: L,
                onClick: x && null != d ? G : null,
                sourceMetadata: W,
                analyticsSource: "EmbedVideo",
            }),
            (0, r.jsx)("div", {
                className: U._W,
                children: (0, r.jsx)("div", {
                    className: U.Fo,
                    children: x
                        ? (0, r.jsx)(w.A, {
                              onPlay: null != d ? G : null,
                              externalURL: T,
                              renderLinkComponent: g,
                              messageId: W?.message?.id,
                              channelId: W?.message?.channel_id,
                          })
                        : null,
                }),
            }),
        ],
    });
}
function K(e) {
    let {
        className: l,
        href: t,
        autoPlay: s,
        maxWidth: n,
        maxHeight: a,
        thumbnail: o,
        video: d,
        renderImageComponent: u,
        responsive: h,
        alt: c,
        disableAltTextDisplay: m = !1,
        playable: p = !0,
        hiddenSpoilers: g,
        placeholder: x,
        placeholderVersion: y,
        sourceMetadata: w,
    } = e;
    return (0, r.jsx)(f.A, {
        className: i()(U.pu, l),
        original: t,
        poster: (0, N.E)(o),
        src: (0, N.E)(d),
        alt: c,
        width: o.width,
        height: o.height,
        naturalHeight: d.height,
        naturalWidth: d.width,
        maxWidth: n,
        maxHeight: a,
        responsive: h,
        autoPlay: s,
        playable: p,
        renderImageComponent: u,
        hiddenSpoilers: g,
        disableAltTextDisplay: m,
        placeholder: x,
        placeholderVersion: y,
        sourceMetadata: w,
    });
}
class F extends s.PureComponent {
    static defaultProps = {
        hideMedia: !1,
        allowFullScreen: !0,
        maxThumbnailWidth: 80,
        maxThumbnailHeight: 80,
        embedIndex: 0,
    };
    state = {
        isVisible: null == this.props.obscureReason,
        videoControlsShown: !1,
        sourceMetadata: {
            message: this.props.message,
            identifier: { type: "embed", embedIndex: this.props.embedIndex },
        },
        ...(0, M.ds)(this.props.embed),
    };
    renderProvider() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { provider: l },
                renderLinkComponent: t,
                message: s,
            } = this.props;
        return null == l
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, r.jsx)("div", {
                    className: i()(U.zC, U.aK),
                    children: this.renderContentPlaceholder({ width: 80, height: 18 }),
                })
              : (0, r.jsx)("div", {
                    className: i()(U.zC, U.aK),
                    children:
                        null != l.url
                            ? t({
                                  className: U.Cj,
                                  href: l.url,
                                  tabIndex: e ? 0 : -1,
                                  children: l.name,
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: s?.id,
                                  channelId: s?.channel_id,
                              })
                            : (0, r.jsx)("span", { children: l.name }),
                });
    }
    renderAuthor() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { author: l },
                renderLinkComponent: t,
                message: s,
                autoPlayGif: n,
            } = this.props;
        return null == l
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, r.jsx)("div", {
                    className: i()(U.rN, U.aK),
                    children: this.renderContentPlaceholder({ width: 150, height: 18 }),
                })
              : (0, r.jsx)(V.Y.Consumer, {
                    children: (a) => {
                        let { disableAnimations: o } = a;
                        return (0, r.jsxs)("div", {
                            className: i()(U.rN, U.aK),
                            children: [
                                null != l.iconProxyURL
                                    ? (0, r.jsx)("img", {
                                          alt: "",
                                          className: U.SG,
                                          src: n && !o ? l.iconProxyURL : $(l.iconProxyURL),
                                      })
                                    : null,
                                null != l.url
                                    ? t({
                                          className: U.av,
                                          href: l.url,
                                          tabIndex: e ? 0 : -1,
                                          children: l.name,
                                          target: "_blank",
                                          rel: "noreferrer noopener",
                                          messageId: s?.id,
                                          channelId: s?.channel_id,
                                      })
                                    : (0, r.jsx)("span", { className: U.QQ, children: l.name }),
                            ],
                        });
                    },
                });
    }
    renderContentPlaceholder(e) {
        let { width: l, height: t } = e;
        return (0, r.jsx)(b.FQ, { className: U.Jl, width: l, height: t, opacity: 0.3 });
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            { embed: l, renderLinkComponent: t, renderTitle: s, message: n } = this.props,
            { rawTitle: a, url: o } = l;
        return null == a
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, r.jsx)("div", {
                    className: i()(U.gt, U.aK),
                    children: this.renderContentPlaceholder({ width: 400, height: 30 }),
                })
              : (0, r.jsx)("div", {
                    className: i()(U.gt, U.aK),
                    children:
                        null != o
                            ? t({
                                  className: U.kv,
                                  href: o,
                                  tabIndex: e ? 0 : -1,
                                  children: s(l, a),
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: n?.id,
                                  channelId: n?.channel_id,
                              })
                            : s(l, a),
                });
    }
    renderDescription() {
        let { embed: e, renderDescription: l } = this.props,
            { rawDescription: t } = e;
        return null == t
            ? null
            : (0, r.jsx)("div", {
                  className: i()(U.cD, U.aK),
                  children: this.shouldShowStaticPlaceholder
                      ? this.renderContentPlaceholder({ width: 400, height: 50 })
                      : l(e, t, !1),
              });
    }
    renderThumbnail() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { thumbnail: l },
                maxThumbnailWidth: t,
                maxThumbnailHeight: s,
                renderImageComponent: n,
                autoPlayGif: i,
            } = this.props,
            { sourceMetadata: a } = this.state;
        return null == l
            ? null
            : (0, r.jsx)(V.Y.Consumer, {
                  children: (r) => {
                      let { disableAnimations: o } = r;
                      return n({
                          containerClassName: U.ad,
                          src: (0, N.E)(l),
                          original: l.url,
                          width: l.width,
                          height: l.height,
                          maxWidth: t,
                          maxHeight: s,
                          shouldLink: e,
                          autoPlay: i && !o,
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
            s = null;
        return (
            l.forEach((l) => {
                let { rawName: r, rawValue: n, inline: i } = l;
                i || null == s || (t.push(s), (s = null)),
                    null == s && (s = []),
                    s.push([this.props.renderTitle(e, r), this.props.renderDescription(e, n, !0)]),
                    (3 !== s.length && i) || (t.push(s), (s = null));
            }),
            null != s && t.push(s),
            (0, r.jsx)("div", {
                className: U.j0,
                children: t.map((e, l) => {
                    let { length: t } = e;
                    return e.map((e, s) => {
                        let n,
                            i,
                            [a, o] = e;
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: U.Me,
                                style: { gridColumn: ((i = s * (n = 12 / t)), `${i + 1} / ${i + n + 1}`) },
                                children: [
                                    (0, r.jsx)("div", { className: U.$L, children: a }),
                                    (0, r.jsx)("div", { className: U.VN, children: o }),
                                ],
                            },
                            `${l}-${s}`,
                        );
                    });
                }),
            })
        );
    }
    renderImages() {
        let { hiddenSpoiler: e = !1, isVisible: l = !0 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { embed: t } = this.props,
            { maxMediaHeight: s } = this.state;
        if (null == t.images) return null;
        let [n, i, a, o] = t.images.map((r) =>
            this.renderImage({ hiddenSpoiler: e, isVisible: l, image: r, isGalleryImage: !0, allImages: t.images }),
        );
        return null == n && null == i && null == a && null == o
            ? null
            : (0, r.jsxs)("div", {
                  className: U.$B,
                  style: { height: s },
                  children: [
                      (0, r.jsxs)("div", {
                          className: U.Zf,
                          children: [
                              (0, r.jsx)(
                                  p.G.Provider,
                                  { value: (0, A.b)(t.images[0].url, t.images[0]), children: n },
                                  0,
                              ),
                              null != o &&
                                  (0, r.jsx)(
                                      p.G.Provider,
                                      { value: (0, A.b)(t.images[2]?.url, t.images[2]), children: a },
                                      2,
                                  ),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: U.Zf,
                          children: [
                              (0, r.jsx)(
                                  p.G.Provider,
                                  { value: (0, A.b)(t.images[1]?.url, t.images[1]), children: i },
                                  1,
                              ),
                              null == o &&
                                  null != a &&
                                  (0, r.jsx)(
                                      p.G.Provider,
                                      { value: (0, A.b)(t.images[2]?.url, t.images[2]), children: a },
                                      2,
                                  ),
                              null != o &&
                                  (0, r.jsx)(
                                      p.G.Provider,
                                      { value: (0, A.b)(t.images[3]?.url, t.images[3]), children: o },
                                      3,
                                  ),
                          ],
                      }),
                  ],
              });
    }
    handleImageHover() {
        let e = C.A.getChannel(this.props.message?.channel_id);
        E.default.track(H.HAw.IMAGE_HOVERED, {
            guild_id: e?.guild_id,
            channel_id: e?.id,
            image_recommendations_shown: !1,
        });
    }
    renderImage() {
        let {
                hiddenSpoiler: e = !1,
                isVisible: l = !0,
                image: t,
                isGalleryImage: s = !1,
                alt: n = O.intl.string(O.t.X4IxWL),
                allImages: a = null,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: o, className: d, autoPlayGif: u } = this.props,
            { maxMediaWidth: h, maxMediaHeight: c, sourceMetadata: m } = this.state;
        if (null == t) return null;
        let x = (0, N.E)(t),
            { srcToOnClickOverride: f, srcToHandlePreloadImage: w } =
                null == a
                    ? { srcToOnClickOverride: {}, srcToHandlePreloadImage: {} }
                    : (0, v.o)(
                          a.map((e) => ({
                              ...(0, g.oU)(e, m, "IMAGE"),
                              original: e.url,
                              srcIsAnimated: e.srcIsAnimated,
                          })),
                          {},
                          "Embed",
                      ),
            b = y.Ay.isAnimated({ src: (0, N.E)(t), original: t.url, animated: !1, srcIsAnimated: t.srcIsAnimated }),
            A = {
                containerClassName: i()(d, { [U.W$]: !s, [U.Lw]: !s, [U.I_]: s }),
                imageContainerClassName: s ? U.FM : void 0,
                imageClassName: s ? U.t3 : void 0,
                src: (0, N.E)(t),
                alt: null == t.description || "" === t.description ? n : t.description,
                responsive: !0,
                limitResponsiveWidth: !s,
                width: t.width,
                height: t.height,
                maxWidth: h,
                maxHeight: c,
                original: t.url,
                shouldLink: l,
                disableAltTextDisplay: null == t.description || "" === t.description,
                hiddenSpoilers: e,
                placeholder: t.placeholder,
                placeholderVersion: t.placeholderVersion,
                srcIsAnimated: t.srcIsAnimated,
                mosaicStyleAlt: !0,
            },
            j = t.url.split(".").pop()?.split("?")[0] ?? "";
        return (
            "jpg" === j && (j = "jpeg"),
            (0, r.jsx)(p.G.Consumer, {
                children: (l) =>
                    (0, r.jsx)(
                        V.Y.Consumer,
                        {
                            children: (t) => {
                                let { disableAnimations: r } = t;
                                return o({
                                    ...A,
                                    autoPlay: u && !r && !e,
                                    renderAccessory: b ? l : null,
                                    handlePreloadImage: w[x],
                                    onClick: f[x],
                                    onMouseEnter: () => this.handleImageHover(),
                                    sourceMetadata: m,
                                    analyticsSource: "Embed",
                                });
                            },
                        },
                        t.url,
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
                embed: { url: s, thumbnail: n, video: i, provider: a },
                renderVideoComponent: o,
                renderImageComponent: d,
                renderLinkComponent: u,
                allowFullScreen: h,
                autoPlayGif: c,
                obscureReason: m,
            } = this.props,
            { maxMediaWidth: p, maxMediaHeight: g, sourceMetadata: x } = this.state;
        if (null == s || null == n) return null;
        if (e)
            return null == i
                ? null
                : (0, r.jsx)(V.Y.Consumer, {
                      children: (e) => {
                          let { disableAnimations: a } = e;
                          return (0, r.jsx)(K, {
                              className: U.W$,
                              href: s,
                              thumbnail: n,
                              video: i,
                              maxWidth: p,
                              maxHeight: g,
                              responsive: !0,
                              autoPlay: !t && c && !a && l,
                              renderImageComponent: d,
                              playable: l,
                              hiddenSpoilers: t,
                              disableAltTextDisplay: null != m,
                              placeholder: i.placeholder,
                              placeholderVersion: i.placeholderVersion,
                              sourceMetadata: x,
                          });
                      },
                  });
        let f = () => {
                this.setState({ videoControlsShown: !0 });
            },
            y = () => {
                this.setState({ videoControlsShown: !1 });
            };
        return (0, r.jsx)(B, {
            className: U.W$,
            href: s,
            allowFullScreen: h,
            thumbnail: n,
            video: i,
            provider: (0, M.QY)(a?.name, i?.url),
            maxWidth: p,
            maxHeight: g,
            responsive: !0,
            renderImageComponent: d,
            renderVideoComponent: o,
            renderLinkComponent: u,
            onControlsShow: f,
            onControlsHide: y,
            playable: l && !t,
            placeholder: i?.placeholder,
            placeholderVersion: i?.placeholderVersion,
            sourceMetadata: x,
        });
    }
    renderFooter() {
        let { autoPlayGif: e } = this.props,
            { footer: l, timestamp: t } = this.props.embed;
        return null != l
            ? (0, r.jsx)(V.Y.Consumer, {
                  children: (s) => {
                      let { disableAnimations: n } = s;
                      return (0, r.jsxs)("div", {
                          className: i()(U.te, U.aK),
                          children: [
                              null != l.iconProxyURL && "" !== l.iconProxyURL
                                  ? (0, r.jsx)("img", {
                                        alt: "",
                                        className: U.mG,
                                        src: e && !n ? l.iconProxyURL : $(l.iconProxyURL),
                                    })
                                  : null,
                              (0, r.jsxs)("span", {
                                  className: U.oy,
                                  children: [
                                      l.text,
                                      null != l.text && null != t
                                          ? (0, r.jsx)("span", { className: U.i8, children: "•" })
                                          : null,
                                      null != t ? (0, T.mk)(t) : null,
                                  ],
                              }),
                          ],
                      });
                  },
              })
            : null != t
              ? (0, r.jsx)("div", {
                    className: i()(U.te, U.aK),
                    children: (0, r.jsx)("span", { className: U.oy, children: (0, T.mk)(t) }),
                })
              : void 0;
    }
    renderStaticPlaceholderMedia() {
        let { className: e, embed: l } = this.props,
            { maxMediaWidth: t, maxMediaHeight: s } = this.state,
            n = l.image ?? l.video;
        if (null == n) return null;
        let { width: i, height: o } = (0, R.Uj)({ width: n.width, height: n.height, maxWidth: t, maxHeight: s });
        return (0, r.jsx)(a._, {
            className: e,
            readyState: H.Rv1.READY,
            src: "",
            width: i,
            height: o,
            maxWidth: t,
            maxHeight: s,
            mediaLayoutType: D.dG.STATIC,
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
            case H.Auw.GIFV:
                return this.renderVideo({ gifv: !0, hiddenSpoiler: e, isVisible: t });
            case H.Auw.VIDEO:
            default:
                if (null != l.video) return this.renderVideo({ gifv: !1, hiddenSpoiler: e, isVisible: t });
                if (null != l.images) return this.renderImages({ hiddenSpoiler: e, isVisible: t });
                return this.renderImage({ hiddenSpoiler: e, isVisible: t, image: l.image, alt: l.rawTitle });
        }
    }
    renderAll() {
        let e,
            l,
            { embed: t, hideMedia: r } = this.props,
            { isVisible: s } = this.state,
            n = this.renderProvider(s),
            i = this.renderAuthor(s),
            a = this.renderTitle(s);
        switch (t.type) {
            case H.Auw.IMAGE:
            case H.Auw.VIDEO:
            case H.Auw.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let o = this.renderFields();
        r || (l = this.renderMedia(!s));
        let d = this.renderFooter(),
            u = null == l;
        return (
            t.type === H.Auw.RICH && (u = null == t.video),
            {
                provider: n,
                author: i,
                title: a,
                description: e,
                thumbnail: !r && u ? this.renderThumbnail(s) : null,
                fields: o,
                media: l,
                footer: d,
            }
        );
    }
    onReveal = () => {
        this.setState({ isVisible: !0 });
    };
    onToggleObscurity = () => {
        this.setState({ isVisible: !this.state.isVisible });
    };
    getMaxWidth(e) {
        let {
                embed: { image: l, images: t, video: r, type: s, thumbnail: n },
            } = this.props,
            { maxMediaWidth: i, maxMediaHeight: a } = this.state,
            o = l ?? r;
        if (null == o) return;
        let { width: d } = (0, R.Uj)({ width: o.width, height: o.height, maxWidth: i, maxHeight: a });
        if (!e && (s === H.Auw.VIDEO || d >= 300)) return d + 32;
        if (s === H.Auw.RICH && void 0 !== t) return 520;
        if (s === H.Auw.GIFV) {
            let { width: e } = (0, R.Uj)({
                width: r?.width ?? n?.width ?? 0,
                height: r?.height ?? n?.height ?? 0,
                maxWidth: i,
                maxHeight: a,
            });
            return e;
        }
    }
    getMinSize() {
        let { video: e } = this.props.embed;
        return null != e ? { minWidth: 150, minHeight: 144 } : void 0;
    }
    isInline() {
        let { hideMedia: e, embed: l } = this.props;
        return !e && (0, M.NV)(l);
    }
    renderSuppressButton(e) {
        return (0, r.jsx)(o.D, {
            focusProps: { offset: { bottom: 4 } },
            className: U.PP,
            onClick: e,
            "aria-label": O.intl.string(O.t.GT3fNz),
            children: (0, r.jsx)(d.P, { size: "xs", color: "currentColor" }),
        });
    }
    renderInlineMediaEmbed = (() => {
        var e = this;
        return function () {
            let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                { obscureReason: t, className: s } = e.props,
                n = e.getMaxWidth(!0);
            return (0, r.jsx)("div", {
                "aria-hidden": l,
                className: i()(U.JY, s, {
                    [U.gT]: t === m.Oc.SPOILER,
                    [U.We]: e.shouldObscure,
                    [U.dK]: l,
                    [U.qU]: e.usesJustifiedAutoStyle(),
                }),
                style: { maxWidth: n },
                children: e.renderMedia(l),
            });
        };
    })();
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return (
            e.type === H.Auw.IMAGE ||
            e.type === H.Auw.VIDEO ||
            e.type === H.Auw.GIFV ||
            ((e.type === H.Auw.RICH || e.type === H.Auw.ARTICLE) && (null != e.video || null != e.image))
        );
    }
    renderEmbedContent = (() => {
        var e = this;
        return function () {
            let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                { className: t, onSuppressEmbed: s, obscureReason: n } = e.props,
                {
                    provider: a,
                    author: o,
                    title: d,
                    description: u,
                    fields: h,
                    thumbnail: c,
                    media: p,
                    footer: g,
                } = e.renderAll();
            return (0, r.jsx)("article", {
                className: i()(t, U.vO, G.PT, {
                    [U.dK]: l,
                    [U.o4]: n === m.Oc.SPOILER,
                    [U.q$]: e.shouldObscure,
                    [U.qU]: e.usesJustifiedAutoStyle(),
                }),
                "aria-hidden": l,
                style: { borderLeftColor: e.getEmbedColor(l), maxWidth: e.getMaxWidth(!1) },
                children: (0, r.jsx)("div", {
                    className: U.UT,
                    children: (0, r.jsxs)("div", {
                        className: i()({ [U.Vg]: !0, [U.$H]: null != c }),
                        children: [null != s ? e.renderSuppressButton(s) : null, a, o, d, u, h, p, c, g],
                    }),
                }),
            });
        };
    })();
    getEmbedColor(e) {
        let { color: l } = this.props.embed;
        return (null != l && "#ffffff" === l.toLowerCase()) || e ? void 0 : l;
    }
    getSpoilerStyles(e) {
        let {
                embed: { image: l, images: t, video: r, type: s, rawDescription: n },
            } = this.props,
            { maxMediaWidth: i, maxMediaHeight: a } = this.state;
        if (!this.usesJustifiedAutoStyle()) return { justifySelf: "start", alignSelf: "start" };
        let o = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === o && void 0 === t && s !== H.Auw.RICH) {
            let e = l ?? r;
            if (void 0 !== e) {
                let { minWidth: l, minHeight: t } = this.getMinSize() ?? {},
                    { width: r } = (0, R.Uj)({
                        width: e.width,
                        height: e.height,
                        maxWidth: i,
                        maxHeight: a,
                        minWidth: l,
                        minHeight: t,
                    });
                o = r;
            }
        }
        let d = 150 / (u.A.fontScale / 100),
            h = null != n ? (0, L.W7)(n) : 0,
            c = (n?.split("\n").length ?? 0) >= 5;
        return { maxWidth: void 0 === o || h >= d || c ? "max-content" : o, justifySelf: "auto" };
    }
    get shouldObscure() {
        let { obscureReason: e } = this.props;
        return null != e && m._K.has(e);
    }
    get shouldShowStaticPlaceholder() {
        let { shouldAgeVerify: e = !1 } = this.props;
        return this.shouldObscure && e;
    }
    render() {
        let { embed: e, obscureReason: l, className: t } = this.props;
        return null != e.provider && k.o.includes(e.provider.name)
            ? (0, r.jsx)(k.A, { embed: e, className: t })
            : (0, I.A)(e)
              ? (0, r.jsx)(S.A, { embed: e, className: t })
              : e.provider?.name === "Amazon Music" && e.type === H.Auw.RICH
                ? (0, r.jsx)(x.A, { embed: e, className: t })
                : (0, h.A)(e)
                  ? (0, r.jsx)(c.A, { embed: e, className: t })
                  : this.isInline()
                    ? null != l
                        ? (0, r.jsx)(j.Ay, {
                              type: j.Ay.Types.ATTACHMENT,
                              reason: l,
                              onReveal: this.onReveal,
                              onToggleObscurity: this.onToggleObscurity,
                              isSingleMosaicItem: !0,
                              containerStyles: this.getSpoilerStyles(!0),
                              obscurityControlClassName: i()({
                                  [U.yi]: this.state.isVisible && this.state.videoControlsShown,
                              }),
                              children: this.renderInlineMediaEmbed,
                          })
                        : this.renderInlineMediaEmbed()
                    : null != l
                      ? (0, r.jsx)(j.Ay, {
                            type: j.Ay.Types.EMBED,
                            onReveal: this.onReveal,
                            onToggleObscurity: this.onToggleObscurity,
                            reason: l,
                            isSingleMosaicItem: !0,
                            containerStyles: this.getSpoilerStyles(!1),
                            children: this.renderEmbedContent,
                        })
                      : this.renderEmbedContent();
    }
}
