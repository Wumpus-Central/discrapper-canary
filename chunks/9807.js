n.d(t, { Z: () => T }), n(388685), n(415506);
var r,
    i = n(255367),
    a = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(481060),
    c = n(33122),
    d = n(446411),
    u = n(468846),
    p = n(453499),
    m = n(124347),
    h = n(80966),
    g = n(524444),
    _ = n(843445),
    f = n(981631),
    b = n(388032),
    x = n(365664);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let I = (e) => {
        var { className: t } = e,
            n = y(e, ['className']);
        return (0, i.jsx)(
            h.Z,
            j(C({}, n), {
                className: s()(x.sizedToParent, t),
                mediaPlayerClassName: x.sizedToParent,
                renderLinkComponent: g.iT
            })
        );
    },
    O = (e) => {
        var { containerClassName: t, className: n } = e,
            r = y(e, ['containerClassName', 'className']);
        return (0, i.jsx)(m.ZP, j(C({}, r), { className: s()(n, t) }));
    },
    P = {
        width: 1280,
        height: 720
    },
    S = {
        width: 640,
        height: 360
    },
    E = (e) => {
        let t,
            n,
            r,
            { item: a, onPlay: l, volume: s, onVolumeChange: o, onMute: p, isMuted: m, autoPlay: h } = e;
        if (a.type === f.s9s.YOUTUBE_VIDEO) (t = C({ url: (0, f.n8r)(a.youtubeVideoId) }, P)), (n = C({ url: ''.concat((0, f.ivE)(a.youtubeVideoId), '?').concat('rel=0&iv_load_policy=3&showinfo=0&modestbranding=1') }, S)), (r = u.pn.YOUTUBE);
        else {
            let e = null != a.width ? a.width : 0,
                r = null != a.height ? a.height : 0;
            (t = {
                url: a.thumbnailSrc,
                width: e,
                height: r
            }),
                (n = {
                    url: a.src,
                    proxyURL: a.src,
                    width: e,
                    height: r
                });
        }
        return (0, i.jsx)('div', {
            className: x.embedContainer,
            children: (0, i.jsx)(d.BC, {
                className: x.sizedToParent,
                iframeWrapperClassName: x.sizedToParent,
                href: null,
                thumbnail: t,
                video: n,
                provider: r,
                maxHeight: c.r.SMALL.height,
                maxWidth: _.b.SMALL,
                onPlay: l,
                playable: !0,
                volume: s,
                onVolumeChange: o,
                autoMute: m,
                onMute: p,
                autoPlay: h,
                renderImageComponent: O,
                renderVideoComponent: I,
                renderLinkComponent: g.iT
            })
        });
    };
class N extends (r = a.PureComponent) {
    componentDidMount() {
        let { items: e } = this.props;
        e.length > 0 && e[0].type === f.s9s.IMG && this.setState({ imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now()) });
    }
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: n } = this.props;
        null != n && n(e, t), this.setState({ hasInteracted: !0 });
    }
    render() {
        let { items: e, autoplayInterval: t, className: n, paused: r, themedPagination: a } = this.props,
            { hasInteracted: l } = this.state;
        return (0, i.jsx)(p.Z, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: r || l,
            renderItem: this.renderItem,
            className: s()(x.smallCarousel, n),
            themedPagination: a,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'state', {
                hasInteracted: !1,
                isVideoPlaying: !1,
                isMuted: !0,
                volume: 1,
                status: new Map(),
                imageLoadingStartTime: new Map()
            }),
            v(this, 'handlePlay', (e) => {
                this.setState({
                    isVideoPlaying: !0,
                    hasInteracted: !e
                });
            }),
            v(this, 'handleVolumeChange', (e) => {
                this.setState({
                    volume: e,
                    hasInteracted: !0
                });
            }),
            v(this, 'handleMute', (e) => {
                this.setState({
                    isMuted: e,
                    hasInteracted: !0
                });
            }),
            v(this, 'handleChangeItem', (e) => {
                this.setState({ isVideoPlaying: !1 }), e.type === f.s9s.IMG && this.setState({ imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now()) });
            }),
            v(this, 'handleIntentionalChange', (e, t, n, r) => {
                this.setState({ hasInteracted: !0 });
                let { onIntentionalChange: i } = this.props;
                null != i && i(e, t, n, r);
            }),
            v(this, 'handleOnErrorImg', (e) => {
                this.setState({ status: new Map(this.state.status).set(e.target.src, 'errored') });
            }),
            v(this, 'handleOnLoadImg', (e) => {
                let { onImageLoad: t } = this.props;
                this.setState({ status: new Map(this.state.status).set(e.target.src, 'loaded') });
                let n = this.state.imageLoadingStartTime.get(e.target.src),
                    r = null != n ? Date.now() - n : void 0;
                null == t ||
                    t({
                        src: e.target.src,
                        loadTimeMs: r
                    });
            }),
            v(this, 'renderItem', (e, t) => {
                let n,
                    { isMuted: r, volume: a } = this.state,
                    { videoAutoPlay: l } = this.props;
                switch (e.type) {
                    case f.s9s.YOUTUBE_VIDEO:
                    case f.s9s.VIDEO:
                        n = (0, i.jsx)(E, {
                            item: e,
                            onPlay: this.handlePlay,
                            isMuted: r,
                            volume: a,
                            onVolumeChange: this.handleVolumeChange,
                            onMute: this.handleMute,
                            autoPlay: l
                        });
                        break;
                    case f.s9s.IMG:
                        if ('errored' === this.state.status.get(e.src)) {
                            let e = (0, i.jsx)(o.X6q, {
                                variant: 'heading-xl/semibold',
                                children: b.intl.string(b.t.UvDfMz)
                            });
                            return (0, i.jsx)('div', {
                                className: x.errorContainer,
                                children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e
                            });
                        }
                        {
                            var c;
                            let t = null != (c = e.alt) ? c : b.intl.string(b.t.X4IxWF);
                            n = (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(o.$jN, {
                                        className: s()(x.spinner, { [x.hidden]: void 0 !== this.state.status.get(e.src) }),
                                        type: o.$jN.Type.SPINNING_CIRCLE
                                    }),
                                    (0, i.jsx)('img', {
                                        onError: this.handleOnErrorImg,
                                        onLoad: this.handleOnLoadImg,
                                        className: s()(x.smallCarouselImage, { [x.hidden]: 'loaded' !== this.state.status.get(e.src) }),
                                        src: e.src,
                                        alt: t
                                    })
                                ]
                            });
                        }
                        break;
                    default:
                        throw Error('Unexpected MediaType');
                }
                return (0, i.jsx)(o.P3F, {
                    className: x.smallCarouselItem,
                    onClick: () => this.handleCurrentItemClick(e, t),
                    children: n
                });
            });
    }
}
v(N, 'defaultProps', {
    paused: !1,
    videoAutoPlay: !0
});
let T = N;
