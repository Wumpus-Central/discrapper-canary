t.d(l, { Ay: () => B, rr: () => G }), t(321073);
var r = t(627968),
    s = t(64700),
    n = t(503698),
    i = t.n(n),
    a = t(397927),
    o = t(775602),
    d = t(684290),
    u = t(478620),
    h = t(338717),
    c = t(643612),
    m = t(731068),
    p = t(124786),
    g = t(935616),
    x = t(619517),
    f = t(893598),
    y = t(269849),
    w = t(114212),
    v = t(343552),
    b = t(302031),
    A = t(644119),
    j = t(780297),
    I = t(734057),
    S = t(644447),
    C = t(954571),
    N = t(203982),
    E = t(405269),
    P = t(659674),
    T = t(515718),
    M = t(240248),
    R = t(998218),
    L = t(259407),
    W = t(690595),
    _ = t(692051),
    k = t(652215),
    V = t(838541),
    H = t(985018),
    D = t(560856),
    O = t(782691);
function U(e) {
    let l = R.A.toURLSafe(e);
    return null == l ? e : (l.searchParams.set("format", "png"), l.toString());
}
function G(e) {
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
            autoPlay: y = !1,
            autoMute: w,
            volume: v,
            onPlay: b,
            onPause: A,
            onEnded: j,
            onControlsHide: I,
            onControlsShow: C,
            onVolumeChange: E,
            onMute: P,
            href: M,
            placeholder: R,
            placeholderVersion: W,
            sourceMetadata: _,
        } = e,
        [V, H] = s.useState(y),
        O = null != d && null == d.proxyURL,
        U = s.useCallback(() => H(!1), [H]),
        G = (e) => {
            e.preventDefault(),
                e.stopPropagation(),
                b?.(!1),
                H(!0),
                O &&
                    (N._.dispatch(k.jej.VIDEO_EMBED_PLAYBACK_STARTED),
                    N._.subscribeOnce(k.jej.VIDEO_EMBED_PLAYBACK_STARTED, U));
        };
    s.useEffect(
        () => () => {
            O && N._.unsubscribe(k.jej.VIDEO_EMBED_PLAYBACK_STARTED, U);
        },
        [O, U],
    );
    let { width: $, height: B } = o;
    null != d && (($ = d.width), (B = d.height));
    let K = (0, T.Uj)({ width: $, height: B, maxWidth: n, maxHeight: a });
    ($ = Math.max(K.width, 150)), (B = Math.max(K.height, 144));
    let F = (0, S.E)(o);
    if (null != d && null != d.proxyURL)
        return (0, r.jsx)("div", {
            className: i()(D.pu, l),
            children: p({
                poster: F,
                src: d.proxyURL,
                placeholder: R,
                placeholderVersion: W,
                width: $,
                height: B,
                responsive: c,
                autoPlay: y,
                onEnded: j,
                naturalWidth: d.width,
                naturalHeight: d.height,
                onVolumeChange: E,
                playable: x,
                autoMute: w,
                volume: v,
                onPlay: b,
                onPause: A,
                onMute: P,
                onControlsHide: I,
                onControlsShow: C,
                sourceMetadata: _,
            }),
        });
    if (V && null != d) {
        let e,
            s = !0 === w || ("function" == typeof w && w()),
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
                className: i()(D.pu, t),
                style: m,
                children: (0, r.jsx)(L.Ay, {
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
        className: i()(D.pu, l),
        style: c ? { maxWidth: $ } : { width: $, height: B },
        children: [
            m({
                src: F,
                width: $,
                height: B,
                maxWidth: $,
                maxHeight: B,
                responsive: c,
                containerClassName: D.tW,
                imageClassName: D.jq,
                placeholder: R,
                placeholderVersion: W,
                onClick: x && null != d ? G : null,
                sourceMetadata: _,
                analyticsSource: "EmbedVideo",
            }),
            (0, r.jsx)("div", {
                className: D._W,
                children: (0, r.jsx)("div", {
                    className: D.Fo,
                    children: x
                        ? (0, r.jsx)(f.A, {
                              onPlay: null != d ? G : null,
                              externalURL: M,
                              renderLinkComponent: g,
                              messageId: _?.message?.id,
                              channelId: _?.message?.channel_id,
                          })
                        : null,
                }),
            }),
        ],
    });
}
function $(e) {
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
        hiddenSpoilers: x,
        placeholder: f,
        placeholderVersion: y,
        sourceMetadata: w,
    } = e;
    return (0, r.jsx)(g.A, {
        className: i()(D.pu, l),
        original: t,
        poster: (0, S.E)(o),
        src: (0, S.E)(d),
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
        hiddenSpoilers: x,
        disableAltTextDisplay: m,
        placeholder: f,
        placeholderVersion: y,
        sourceMetadata: w,
    });
}
class B extends s.PureComponent {
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
        ...(0, P.ds)(this.props.embed),
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
                    className: i()(D.zC, D.aK),
                    children: this.renderContentPlaceholder({ width: 80, height: 18 }),
                })
              : (0, r.jsx)("div", {
                    className: i()(D.zC, D.aK),
                    children:
                        null != l.url
                            ? t({
                                  className: D.Cj,
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
                    className: i()(D.rN, D.aK),
                    children: this.renderContentPlaceholder({ width: 150, height: 18 }),
                })
              : (0, r.jsx)(_.Y.Consumer, {
                    children: (a) => {
                        let { disableAnimations: o } = a;
                        return (0, r.jsxs)("div", {
                            className: i()(D.rN, D.aK),
                            children: [
                                null != l.iconProxyURL
                                    ? (0, r.jsx)("img", {
                                          alt: "",
                                          className: D.SG,
                                          src: n && !o ? l.iconProxyURL : U(l.iconProxyURL),
                                      })
                                    : null,
                                null != l.url
                                    ? t({
                                          className: D.av,
                                          href: l.url,
                                          tabIndex: e ? 0 : -1,
                                          children: l.name,
                                          target: "_blank",
                                          rel: "noreferrer noopener",
                                          messageId: s?.id,
                                          channelId: s?.channel_id,
                                      })
                                    : (0, r.jsx)("span", { className: D.QQ, children: l.name }),
                            ],
                        });
                    },
                });
    }
    renderContentPlaceholder(e) {
        let { width: l, height: t } = e;
        return (0, r.jsx)(w.FQ, { className: D.Jl, width: l, height: t, opacity: 0.3 });
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            { embed: l, renderLinkComponent: t, renderTitle: s, message: n } = this.props,
            { rawTitle: a, url: o } = l;
        return null == a
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, r.jsx)("div", {
                    className: i()(D.gt, D.aK),
                    children: this.renderContentPlaceholder({ width: 400, height: 30 }),
                })
              : (0, r.jsx)("div", {
                    className: i()(D.gt, D.aK),
                    children:
                        null != o
                            ? t({
                                  className: D.kv,
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
                  className: i()(D.cD, D.aK),
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
            : (0, r.jsx)(_.Y.Consumer, {
                  children: (r) => {
                      let { disableAnimations: o } = r;
                      return n({
                          containerClassName: D.ad,
                          src: (0, S.E)(l),
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
                className: D.j0,
                children: t.map((e, l) => {
                    let { length: t } = e;
                    return e.map((e, s) => {
                        let n,
                            i,
                            [a, o] = e;
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: D.Me,
                                style: { gridColumn: ((i = s * (n = 12 / t)), `${i + 1} / ${i + n + 1}`) },
                                children: [
                                    (0, r.jsx)("div", { className: D.$L, children: a }),
                                    (0, r.jsx)("div", { className: D.VN, children: o }),
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
                  className: D.$B,
                  style: { height: s },
                  children: [
                      (0, r.jsxs)("div", {
                          className: D.Zf,
                          children: [
                              (0, r.jsx)(
                                  c.G.Provider,
                                  { value: (0, v.b)(t.images[0].url, t.images[0]), children: n },
                                  0,
                              ),
                              null != o &&
                                  (0, r.jsx)(
                                      c.G.Provider,
                                      { value: (0, v.b)(t.images[2]?.url, t.images[2]), children: a },
                                      2,
                                  ),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: D.Zf,
                          children: [
                              (0, r.jsx)(
                                  c.G.Provider,
                                  { value: (0, v.b)(t.images[1]?.url, t.images[1]), children: i },
                                  1,
                              ),
                              null == o &&
                                  null != a &&
                                  (0, r.jsx)(
                                      c.G.Provider,
                                      { value: (0, v.b)(t.images[2]?.url, t.images[2]), children: a },
                                      2,
                                  ),
                              null != o &&
                                  (0, r.jsx)(
                                      c.G.Provider,
                                      { value: (0, v.b)(t.images[3]?.url, t.images[3]), children: o },
                                      3,
                                  ),
                          ],
                      }),
                  ],
              });
    }
    handleImageHover() {
        let e = I.A.getChannel(this.props.message?.channel_id);
        C.default.track(k.HAw.IMAGE_HOVERED, {
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
                alt: n = H.intl.string(H.t.X4IxWL),
                allImages: a = null,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: o, className: d, autoPlayGif: u } = this.props,
            { maxMediaWidth: h, maxMediaHeight: p, sourceMetadata: g } = this.state;
        if (null == t) return null;
        let f = (0, S.E)(t),
            { srcToOnClickOverride: w, srcToHandlePreloadImage: v } =
                null == a
                    ? { srcToOnClickOverride: {}, srcToHandlePreloadImage: {} }
                    : (0, y.o)(
                          a.map((e) => ({
                              ...(0, m.oU)(e, g, "IMAGE"),
                              original: e.url,
                              srcIsAnimated: e.srcIsAnimated,
                          })),
                          {},
                          "Embed",
                      ),
            b = x.Ay.isAnimated({ src: (0, S.E)(t), original: t.url, animated: !1, srcIsAnimated: t.srcIsAnimated }),
            A = {
                containerClassName: i()(d, { [D.W$]: !s, [D.Lw]: !s, [D.I_]: s }),
                imageContainerClassName: s ? D.FM : void 0,
                imageClassName: s ? D.t3 : void 0,
                src: (0, S.E)(t),
                alt: null == t.description || "" === t.description ? n : t.description,
                responsive: !0,
                limitResponsiveWidth: !s,
                width: t.width,
                height: t.height,
                maxWidth: h,
                maxHeight: p,
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
            (0, r.jsx)(c.G.Consumer, {
                children: (l) =>
                    (0, r.jsx)(
                        _.Y.Consumer,
                        {
                            children: (t) => {
                                let { disableAnimations: r } = t;
                                return o({
                                    ...A,
                                    autoPlay: u && !r && !e,
                                    renderAccessory: b ? l : null,
                                    handlePreloadImage: v[f],
                                    onClick: w[f],
                                    onMouseEnter: () => this.handleImageHover(),
                                    sourceMetadata: g,
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
                : (0, r.jsx)(_.Y.Consumer, {
                      children: (e) => {
                          let { disableAnimations: a } = e;
                          return (0, r.jsx)($, {
                              className: D.W$,
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
        return (0, r.jsx)(G, {
            className: D.W$,
            href: s,
            allowFullScreen: h,
            thumbnail: n,
            video: i,
            provider: (0, P.QY)(a?.name, i?.url),
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
            ? (0, r.jsx)(_.Y.Consumer, {
                  children: (s) => {
                      let { disableAnimations: n } = s;
                      return (0, r.jsxs)("div", {
                          className: i()(D.te, D.aK),
                          children: [
                              null != l.iconProxyURL && "" !== l.iconProxyURL
                                  ? (0, r.jsx)("img", {
                                        alt: "",
                                        className: D.mG,
                                        src: e && !n ? l.iconProxyURL : U(l.iconProxyURL),
                                    })
                                  : null,
                              (0, r.jsxs)("span", {
                                  className: D.oy,
                                  children: [
                                      l.text,
                                      null != l.text && null != t
                                          ? (0, r.jsx)("span", { className: D.i8, children: "•" })
                                          : null,
                                      null != t ? (0, E.mk)(t) : null,
                                  ],
                              }),
                          ],
                      });
                  },
              })
            : null != t
              ? (0, r.jsx)("div", {
                    className: i()(D.te, D.aK),
                    children: (0, r.jsx)("span", { className: D.oy, children: (0, E.mk)(t) }),
                })
              : void 0;
    }
    renderStaticPlaceholderMedia() {
        let { className: e, embed: l } = this.props,
            { maxMediaWidth: t, maxMediaHeight: s } = this.state,
            n = l.image ?? l.video;
        if (null == n) return null;
        let { width: i, height: o } = (0, T.Uj)({ width: n.width, height: n.height, maxWidth: t, maxHeight: s });
        return (0, r.jsx)(a._V3, {
            className: e,
            readyState: k.Rv1.READY,
            src: "",
            width: i,
            height: o,
            maxWidth: t,
            maxHeight: s,
            mediaLayoutType: V.dG.STATIC,
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
            case k.Auw.GIFV:
                return this.renderVideo({ gifv: !0, hiddenSpoiler: e, isVisible: t });
            case k.Auw.VIDEO:
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
            case k.Auw.IMAGE:
            case k.Auw.VIDEO:
            case k.Auw.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let o = this.renderFields();
        r || (l = this.renderMedia(!s));
        let d = this.renderFooter(),
            u = null == l;
        return (
            t.type === k.Auw.RICH && (u = null == t.video),
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
        let { width: d } = (0, T.Uj)({ width: o.width, height: o.height, maxWidth: i, maxHeight: a });
        if (!e && (s === k.Auw.VIDEO || d >= 300)) return d + 32;
        if (s === k.Auw.RICH && void 0 !== t) return 520;
        if (s === k.Auw.GIFV) {
            let { width: e } = (0, T.Uj)({
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
        return !e && (0, P.NV)(l);
    }
    renderSuppressButton(e) {
        return (0, r.jsx)(a.DUT, {
            focusProps: { offset: { bottom: 4 } },
            className: D.PP,
            onClick: e,
            "aria-label": H.intl.string(H.t.GT3fNz),
            children: (0, r.jsx)(a.PGe, { size: "xs", color: "currentColor" }),
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
                className: i()(D.JY, s, {
                    [D.gT]: t === h.Oc.SPOILER,
                    [D.We]: e.shouldObscure,
                    [D.dK]: l,
                    [D.qU]: e.usesJustifiedAutoStyle(),
                }),
                style: { maxWidth: n },
                children: e.renderMedia(l),
            });
        };
    })();
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return (
            e.type === k.Auw.IMAGE ||
            e.type === k.Auw.VIDEO ||
            e.type === k.Auw.GIFV ||
            ((e.type === k.Auw.RICH || e.type === k.Auw.ARTICLE) && (null != e.video || null != e.image))
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
                    fields: c,
                    thumbnail: m,
                    media: p,
                    footer: g,
                } = e.renderAll();
            return (0, r.jsx)("article", {
                className: i()(t, D.vO, O.PT, {
                    [D.dK]: l,
                    [D.o4]: n === h.Oc.SPOILER,
                    [D.q$]: e.shouldObscure,
                    [D.qU]: e.usesJustifiedAutoStyle(),
                }),
                "aria-hidden": l,
                style: { borderLeftColor: e.getEmbedColor(l), maxWidth: e.getMaxWidth(!1) },
                children: (0, r.jsx)("div", {
                    className: D.UT,
                    children: (0, r.jsxs)("div", {
                        className: i()({ [D.Vg]: !0, [D.$H]: null != m }),
                        children: [null != s ? e.renderSuppressButton(s) : null, a, o, d, u, c, p, m, g],
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
        let d = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === d && void 0 === t && s !== k.Auw.RICH) {
            let e = l ?? r;
            if (void 0 !== e) {
                let { minWidth: l, minHeight: t } = this.getMinSize() ?? {},
                    { width: r } = (0, T.Uj)({
                        width: e.width,
                        height: e.height,
                        maxWidth: i,
                        maxHeight: a,
                        minWidth: l,
                        minHeight: t,
                    });
                d = r;
            }
        }
        let u = 150 / (o.A.fontScale / 100),
            h = null != n ? (0, M.W7)(n) : 0,
            c = (n?.split("\n").length ?? 0) >= 5;
        return { maxWidth: void 0 === d || h >= u || c ? "max-content" : d, justifySelf: "auto" };
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
        let { embed: e, obscureReason: l, className: t } = this.props;
        return null != e.provider && W.o.includes(e.provider.name)
            ? (0, r.jsx)(W.A, { embed: e, className: t })
            : (0, A.A)(e)
              ? (0, r.jsx)(j.A, { embed: e, className: t })
              : e.provider?.name === "Amazon Music" && e.type === k.Auw.RICH
                ? (0, r.jsx)(p.A, { embed: e, className: t })
                : (0, d.A)(e)
                  ? (0, r.jsx)(u.A, { embed: e, className: t })
                  : this.isInline()
                    ? null != l
                        ? (0, r.jsx)(b.Ay, {
                              type: b.Ay.Types.ATTACHMENT,
                              reason: l,
                              onReveal: this.onReveal,
                              onToggleObscurity: this.onToggleObscurity,
                              isSingleMosaicItem: !0,
                              containerStyles: this.getSpoilerStyles(!0),
                              obscurityControlClassName: i()({
                                  [D.yi]: this.state.isVisible && this.state.videoControlsShown,
                              }),
                              children: this.renderInlineMediaEmbed,
                          })
                        : this.renderInlineMediaEmbed()
                    : null != l
                      ? (0, r.jsx)(b.Ay, {
                            type: b.Ay.Types.EMBED,
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
