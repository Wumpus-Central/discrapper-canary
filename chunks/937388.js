a.d(t, { A: () => S });
var n = a(627968),
    i = a(64700),
    l = a(503698),
    s = a.n(l),
    r = a(397927),
    o = a(871751),
    c = a(259407),
    d = a(323933),
    u = a(619517),
    m = a(248643),
    h = a(652176),
    p = a(503879),
    _ = a(652215),
    g = a(985018),
    x = a(271298);
let A = (e) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)(m.A, {
            ...a,
            className: s()(x.Zy, t),
            mediaPlayerClassName: x.Zy,
            renderLinkComponent: h.bU,
        });
    },
    f = (e) => {
        let { containerClassName: t, className: a, ...i } = e;
        return (0, n.jsx)(u.Ay, { ...i, className: s()(a, t) });
    },
    b = { width: 1280, height: 720 },
    C = { width: 640, height: 360 },
    v = `rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=${_.NzX}`,
    j = (e) => {
        let t,
            a,
            i,
            { item: l, onPlay: s, volume: r, onVolumeChange: d, onMute: u, isMuted: m, autoPlay: g } = e;
        if (l.type === _.geh.YOUTUBE_VIDEO)
            (t = { url: (0, _.PE$)(l.youtubeVideoId), ...b }),
                (a = { url: `${(0, _.uJ2)(l.youtubeVideoId)}?${v}`, ...C }),
                (i = c.mt.YOUTUBE);
        else {
            let e = null != l.width ? l.width : 0,
                n = null != l.height ? l.height : 0;
            (t = { url: l.thumbnailSrc, width: e, height: n }),
                (a = { url: l.src, proxyURL: l.src, width: e, height: n });
        }
        return (0, n.jsx)("div", {
            className: x.x,
            children: (0, n.jsx)(o.rr, {
                className: x.Zy,
                iframeWrapperClassName: x.Zy,
                href: null,
                thumbnail: t,
                video: a,
                provider: i,
                maxHeight: p.s.SMALL.height,
                maxWidth: "small",
                onPlay: s,
                playable: !0,
                volume: r,
                onVolumeChange: d,
                autoMute: m,
                onMute: u,
                autoPlay: g,
                renderImageComponent: f,
                renderVideoComponent: A,
                renderLinkComponent: h.bU,
            }),
        });
    };
class I extends i.PureComponent {
    static defaultProps = { paused: !1, videoAutoPlay: !0 };
    state = {
        hasInteracted: !1,
        isVideoPlaying: !1,
        isMuted: !0,
        volume: 1,
        status: new Map(),
        imageLoadingStartTime: new Map(),
    };
    componentDidMount() {
        let { items: e } = this.props;
        e.length > 0 &&
            e[0].type === _.geh.IMG &&
            this.setState({
                imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now()),
            });
    }
    handlePlay = (e) => {
        this.setState({ isVideoPlaying: !0, hasInteracted: !e });
    };
    handleVolumeChange = (e) => {
        this.setState({ volume: e, hasInteracted: !0 });
    };
    handleMute = (e) => {
        this.setState({ isMuted: e, hasInteracted: !0 });
    };
    handleChangeItem = (e) => {
        this.setState({ isVideoPlaying: !1 }),
            e.type === _.geh.IMG &&
                this.setState({
                    imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now()),
                });
    };
    handleIntentionalChange = (e, t, a, n) => {
        this.setState({ hasInteracted: !0 });
        let { onIntentionalChange: i } = this.props;
        null != i && i(e, t, a, n);
    };
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: a } = this.props;
        null != a && a(e, t), this.setState({ hasInteracted: !0 });
    }
    handleOnErrorImg = (e) => {
        this.setState({ status: new Map(this.state.status).set(e.target.src, "errored") });
    };
    handleOnLoadImg = (e) => {
        let { onImageLoad: t } = this.props;
        this.setState({ status: new Map(this.state.status).set(e.target.src, "loaded") });
        let a = this.state.imageLoadingStartTime.get(e.target.src),
            n = null != a ? Date.now() - a : void 0;
        t?.({ src: e.target.src, loadTimeMs: n });
    };
    renderItem = (e, t) => {
        let a,
            { isMuted: i, volume: l } = this.state,
            { videoAutoPlay: o } = this.props;
        switch (e.type) {
            case _.geh.YOUTUBE_VIDEO:
            case _.geh.VIDEO:
                a = (0, n.jsx)(j, {
                    item: e,
                    onPlay: this.handlePlay,
                    isMuted: i,
                    volume: l,
                    onVolumeChange: this.handleVolumeChange,
                    onMute: this.handleMute,
                    autoPlay: o,
                });
                break;
            case _.geh.IMG:
                if ("errored" === this.state.status.get(e.src)) {
                    let e = (0, n.jsx)(r.Heading, {
                        variant: "heading-xl/semibold",
                        children: g.intl.string(g.t.UvDfMz),
                    });
                    return (0, n.jsx)("div", {
                        className: x.Un,
                        children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e,
                    });
                }
                {
                    let t = e.alt ?? g.intl.string(g.t.X4IxWL);
                    a = (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(r.y$y, {
                                className: s()(x.u1, { [x.R]: void 0 !== this.state.status.get(e.src) }),
                                type: r.y$y.Type.SPINNING_CIRCLE,
                            }),
                            (0, n.jsx)("img", {
                                onError: this.handleOnErrorImg,
                                onLoad: this.handleOnLoadImg,
                                className: s()(x.JD, { [x.R]: "loaded" !== this.state.status.get(e.src) }),
                                src: e.src,
                                alt: t,
                            }),
                        ],
                    });
                }
                break;
            default:
                throw Error("Unexpected MediaType");
        }
        return (0, n.jsx)(r.DUT, { className: x.Pj, onClick: () => this.handleCurrentItemClick(e, t), children: a });
    };
    render() {
        let { items: e, autoplayInterval: t, className: a, paused: i, themedPagination: l } = this.props,
            { hasInteracted: r } = this.state;
        return (0, n.jsx)(d.A, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: i || r,
            renderItem: this.renderItem,
            className: s()(x.Gt, a),
            themedPagination: l,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem,
        });
    }
}
let S = I;
