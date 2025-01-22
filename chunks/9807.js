n(47120), n(411104);
var i,
    a = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    c = n(33122),
    d = n(446411),
    u = n(468846),
    m = n(453499),
    p = n(124347),
    h = n(80966),
    g = n(524444),
    C = n(843445),
    x = n(981631),
    v = n(388032),
    _ = n(16655);
function f(e, t, n) {
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
let b = (e) => {
        let { className: t, ...n } = e;
        return (0, a.jsx)(h.Z, {
            ...n,
            className: o()(_.sizedToParent, t),
            mediaPlayerClassName: _.sizedToParent,
            renderLinkComponent: g.iT
        });
    },
    I = (e) => {
        let { containerClassName: t, className: n, ...i } = e;
        return (0, a.jsx)(p.ZP, {
            ...i,
            className: o()(n, t)
        });
    },
    S = {
        width: 1280,
        height: 720
    },
    j = {
        width: 640,
        height: 360
    },
    N = (e) => {
        let t,
            n,
            i,
            { item: r, onPlay: l, volume: o, onVolumeChange: s, onMute: m, isMuted: p, autoPlay: h } = e;
        if (r.type === x.s9s.YOUTUBE_VIDEO)
            (t = {
                url: (0, x.n8r)(r.youtubeVideoId),
                ...S
            }),
                (n = {
                    url: ''.concat((0, x.ivE)(r.youtubeVideoId), '?').concat('rel=0&iv_load_policy=3&showinfo=0&modestbranding=1'),
                    ...j
                }),
                (i = u.pn.YOUTUBE);
        else {
            let e = null != r.width ? r.width : 0,
                i = null != r.height ? r.height : 0;
            (t = {
                url: r.thumbnailSrc,
                width: e,
                height: i
            }),
                (n = {
                    url: r.src,
                    proxyURL: r.src,
                    width: e,
                    height: i
                });
        }
        return (0, a.jsx)('div', {
            className: _.embedContainer,
            children: (0, a.jsx)(d.BC, {
                className: _.sizedToParent,
                iframeWrapperClassName: _.sizedToParent,
                href: null,
                thumbnail: t,
                video: n,
                provider: i,
                maxHeight: c.r.SMALL.height,
                maxWidth: C.b.SMALL,
                onPlay: l,
                playable: !0,
                volume: o,
                onVolumeChange: s,
                autoMute: p,
                onMute: m,
                autoPlay: h,
                renderImageComponent: I,
                renderVideoComponent: b,
                renderLinkComponent: g.iT
            })
        });
    };
class E extends (i = r.PureComponent) {
    componentDidMount() {
        let { items: e } = this.props;
        e.length > 0 && e[0].type === x.s9s.IMG && this.setState({ imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now()) });
    }
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: n } = this.props;
        null != n && n(e, t), this.setState({ hasInteracted: !0 });
    }
    render() {
        let { items: e, autoplayInterval: t, className: n, paused: i, themedPagination: r } = this.props,
            { hasInteracted: l } = this.state;
        return (0, a.jsx)(m.Z, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: i || l,
            renderItem: this.renderItem,
            className: o()(_.smallCarousel, n),
            themedPagination: r,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'state', {
                hasInteracted: !1,
                isVideoPlaying: !1,
                isMuted: !0,
                volume: 1,
                status: new Map(),
                imageLoadingStartTime: new Map()
            }),
            f(this, 'handlePlay', (e) => {
                this.setState({
                    isVideoPlaying: !0,
                    hasInteracted: !e
                });
            }),
            f(this, 'handleVolumeChange', (e) => {
                this.setState({
                    volume: e,
                    hasInteracted: !0
                });
            }),
            f(this, 'handleMute', (e) => {
                this.setState({
                    isMuted: e,
                    hasInteracted: !0
                });
            }),
            f(this, 'handleChangeItem', (e) => {
                this.setState({ isVideoPlaying: !1 }), e.type === x.s9s.IMG && this.setState({ imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now()) });
            }),
            f(this, 'handleIntentionalChange', (e, t, n, i) => {
                this.setState({ hasInteracted: !0 });
                let { onIntentionalChange: a } = this.props;
                null != a && a(e, t, n, i);
            }),
            f(this, 'handleOnErrorImg', (e) => {
                this.setState({ status: new Map(this.state.status).set(e.target.src, 'errored') });
            }),
            f(this, 'handleOnLoadImg', (e) => {
                let { onImageLoad: t } = this.props;
                this.setState({ status: new Map(this.state.status).set(e.target.src, 'loaded') });
                let n = this.state.imageLoadingStartTime.get(e.target.src),
                    i = null != n ? Date.now() - n : void 0;
                null == t ||
                    t({
                        src: e.target.src,
                        loadTimeMs: i
                    });
            }),
            f(this, 'renderItem', (e, t) => {
                let n;
                let { isMuted: i, volume: r } = this.state,
                    { videoAutoPlay: l } = this.props;
                switch (e.type) {
                    case x.s9s.YOUTUBE_VIDEO:
                    case x.s9s.VIDEO:
                        n = (0, a.jsx)(N, {
                            item: e,
                            onPlay: this.handlePlay,
                            isMuted: i,
                            volume: r,
                            onVolumeChange: this.handleVolumeChange,
                            onMute: this.handleMute,
                            autoPlay: l
                        });
                        break;
                    case x.s9s.IMG:
                        if ('errored' === this.state.status.get(e.src)) {
                            let e = (0, a.jsx)(s.Heading, {
                                variant: 'heading-xl/semibold',
                                children: v.intl.string(v.t.UvDfMz)
                            });
                            return (0, a.jsx)('div', {
                                className: _.errorContainer,
                                children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e
                            });
                        }
                        {
                            var c;
                            let t = null !== (c = e.alt) && void 0 !== c ? c : v.intl.string(v.t.X4IxWF);
                            n = (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(s.Spinner, {
                                        className: o()(_.spinner, { [_.hidden]: void 0 !== this.state.status.get(e.src) }),
                                        type: s.Spinner.Type.SPINNING_CIRCLE
                                    }),
                                    (0, a.jsx)('img', {
                                        onError: this.handleOnErrorImg,
                                        onLoad: this.handleOnLoadImg,
                                        className: o()(_.smallCarouselImage, { [_.hidden]: 'loaded' !== this.state.status.get(e.src) }),
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
                return (0, a.jsx)(s.Clickable, {
                    className: _.smallCarouselItem,
                    onClick: () => this.handleCurrentItemClick(e, t),
                    children: n
                });
            });
    }
}
f(E, 'defaultProps', {
    paused: !1,
    videoAutoPlay: !0
}),
    (t.Z = E);
