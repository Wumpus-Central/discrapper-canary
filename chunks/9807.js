n(47120), n(411104);
var s,
    i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(481060),
    d = n(33122),
    h = n(446411),
    u = n(468846),
    c = n(453499),
    m = n(124347),
    p = n(80966),
    g = n(524444),
    C = n(843445),
    I = n(981631),
    x = n(388032),
    v = n(16655);
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
let E = (e) => {
        let { className: t, ...n } = e;
        return (0, i.jsx)(p.Z, {
            ...n,
            className: l()(v.sizedToParent, t),
            mediaPlayerClassName: v.sizedToParent,
            renderLinkComponent: g.iT
        });
    },
    N = (e) => {
        let { containerClassName: t, className: n, ...s } = e;
        return (0, i.jsx)(m.ZP, {
            ...s,
            className: l()(n, t)
        });
    },
    b = {
        width: 1280,
        height: 720
    },
    P = {
        width: 640,
        height: 360
    },
    S = (e) => {
        let t,
            n,
            s,
            { item: a, onPlay: r, volume: l, onVolumeChange: o, onMute: c, isMuted: m, autoPlay: p } = e;
        if (a.type === I.s9s.YOUTUBE_VIDEO)
            (t = {
                url: (0, I.n8r)(a.youtubeVideoId),
                ...b
            }),
                (n = {
                    url: ''.concat((0, I.ivE)(a.youtubeVideoId), '?').concat('rel=0&iv_load_policy=3&showinfo=0&modestbranding=1'),
                    ...P
                }),
                (s = u.pn.YOUTUBE);
        else {
            let e = null != a.width ? a.width : 0,
                s = null != a.height ? a.height : 0;
            (t = {
                url: a.thumbnailSrc,
                width: e,
                height: s
            }),
                (n = {
                    url: a.src,
                    proxyURL: a.src,
                    width: e,
                    height: s
                });
        }
        return (0, i.jsx)('div', {
            className: v.embedContainer,
            children: (0, i.jsx)(h.BC, {
                className: v.sizedToParent,
                iframeWrapperClassName: v.sizedToParent,
                href: null,
                thumbnail: t,
                video: n,
                provider: s,
                maxHeight: d.r.SMALL.height,
                maxWidth: C.b.SMALL,
                onPlay: r,
                playable: !0,
                volume: l,
                onVolumeChange: o,
                autoMute: m,
                onMute: c,
                autoPlay: p,
                renderImageComponent: N,
                renderVideoComponent: E,
                renderLinkComponent: g.iT
            })
        });
    };
class L extends (s = a.PureComponent) {
    componentDidMount() {
        let { items: e } = this.props;
        e.length > 0 && e[0].type === I.s9s.IMG && this.setState({ imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now()) });
    }
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: n } = this.props;
        null != n && n(e, t), this.setState({ hasInteracted: !0 });
    }
    render() {
        let { items: e, autoplayInterval: t, className: n, paused: s, themedPagination: a } = this.props,
            { hasInteracted: r } = this.state;
        return (0, i.jsx)(c.Z, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: s || r,
            renderItem: this.renderItem,
            className: l()(v.smallCarousel, n),
            themedPagination: a,
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
                this.setState({ isVideoPlaying: !1 }), e.type === I.s9s.IMG && this.setState({ imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now()) });
            }),
            f(this, 'handleIntentionalChange', (e, t, n, s) => {
                this.setState({ hasInteracted: !0 });
                let { onIntentionalChange: i } = this.props;
                null != i && i(e, t, n, s);
            }),
            f(this, 'handleOnErrorImg', (e) => {
                this.setState({ status: new Map(this.state.status).set(e.target.src, 'errored') });
            }),
            f(this, 'handleOnLoadImg', (e) => {
                let { onImageLoad: t } = this.props;
                this.setState({ status: new Map(this.state.status).set(e.target.src, 'loaded') });
                let n = this.state.imageLoadingStartTime.get(e.target.src),
                    s = null != n ? Date.now() - n : void 0;
                null == t ||
                    t({
                        src: e.target.src,
                        loadTimeMs: s
                    });
            }),
            f(this, 'renderItem', (e, t) => {
                let n;
                let { isMuted: s, volume: a } = this.state,
                    { videoAutoPlay: r } = this.props;
                switch (e.type) {
                    case I.s9s.YOUTUBE_VIDEO:
                    case I.s9s.VIDEO:
                        n = (0, i.jsx)(S, {
                            item: e,
                            onPlay: this.handlePlay,
                            isMuted: s,
                            volume: a,
                            onVolumeChange: this.handleVolumeChange,
                            onMute: this.handleMute,
                            autoPlay: r
                        });
                        break;
                    case I.s9s.IMG:
                        if ('errored' === this.state.status.get(e.src)) {
                            let e = (0, i.jsx)(o.Heading, {
                                variant: 'heading-xl/semibold',
                                children: x.intl.string(x.t.UvDfMz)
                            });
                            return (0, i.jsx)('div', {
                                className: v.errorContainer,
                                children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e
                            });
                        }
                        {
                            var d;
                            let t = null !== (d = e.alt) && void 0 !== d ? d : x.intl.string(x.t.X4IxWF);
                            n = (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(o.Spinner, {
                                        className: l()(v.spinner, { [v.hidden]: void 0 !== this.state.status.get(e.src) }),
                                        type: o.Spinner.Type.SPINNING_CIRCLE
                                    }),
                                    (0, i.jsx)('img', {
                                        onError: this.handleOnErrorImg,
                                        onLoad: this.handleOnLoadImg,
                                        className: l()(v.smallCarouselImage, { [v.hidden]: 'loaded' !== this.state.status.get(e.src) }),
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
                return (0, i.jsx)(o.Clickable, {
                    className: v.smallCarouselItem,
                    onClick: () => this.handleCurrentItemClick(e, t),
                    children: n
                });
            });
    }
}
f(L, 'defaultProps', {
    paused: !1,
    videoAutoPlay: !0
}),
    (t.Z = L);
