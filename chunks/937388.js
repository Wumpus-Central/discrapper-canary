a.d(t, { A: () => S });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(534514),
    o = a(289873),
    c = a(939249),
    d = a(871751),
    u = a(259407),
    h = a(323933),
    m = a(619517),
    p = a(248643),
    _ = a(652176),
    g = a(503879),
    x = a(652215),
    A = a(985018),
    f = a(665513);
let C = (e) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)(p.A, {
            ...a,
            className: s()(f.Zy, t),
            mediaPlayerClassName: f.Zy,
            renderLinkComponent: _.bU,
        });
    },
    v = (e) => {
        let { containerClassName: t, className: a, ...l } = e;
        return (0, n.jsx)(m.Ay, { ...l, className: s()(a, t) });
    },
    b = { width: 1280, height: 720 },
    j = { width: 640, height: 360 },
    I = `rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=${x.NzX}`,
    E = (e) => {
        let t,
            a,
            l,
            { item: i, onPlay: s, volume: r, onVolumeChange: o, onMute: c, isMuted: h, autoPlay: m } = e;
        if (i.type === x.geh.YOUTUBE_VIDEO)
            (t = { url: (0, x.PE$)(i.youtubeVideoId), ...b }),
                (a = { url: `${(0, x.uJ2)(i.youtubeVideoId)}?${I}`, ...j }),
                (l = u.mt.YOUTUBE);
        else {
            let e = null != i.width ? i.width : 0,
                n = null != i.height ? i.height : 0;
            (t = { url: i.thumbnailSrc, width: e, height: n }),
                (a = { url: i.src, proxyURL: i.src, width: e, height: n });
        }
        return (0, n.jsx)("div", {
            className: f.x,
            children: (0, n.jsx)(d.rr, {
                className: f.Zy,
                iframeWrapperClassName: f.Zy,
                href: null,
                thumbnail: t,
                video: a,
                provider: l,
                maxHeight: g.s.SMALL.height,
                maxWidth: "small",
                onPlay: s,
                playable: !0,
                volume: r,
                onVolumeChange: o,
                autoMute: h,
                onMute: c,
                autoPlay: m,
                renderImageComponent: v,
                renderVideoComponent: C,
                renderLinkComponent: _.bU,
            }),
        });
    };
class N extends l.PureComponent {
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
            e[0].type === x.geh.IMG &&
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
            e.type === x.geh.IMG &&
                this.setState({
                    imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now()),
                });
    };
    handleIntentionalChange = (e, t, a, n) => {
        this.setState({ hasInteracted: !0 });
        let { onIntentionalChange: l } = this.props;
        null != l && l(e, t, a, n);
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
            { isMuted: l, volume: i } = this.state,
            { videoAutoPlay: d } = this.props;
        switch (e.type) {
            case x.geh.YOUTUBE_VIDEO:
            case x.geh.VIDEO:
                a = (0, n.jsx)(E, {
                    item: e,
                    onPlay: this.handlePlay,
                    isMuted: l,
                    volume: i,
                    onVolumeChange: this.handleVolumeChange,
                    onMute: this.handleMute,
                    autoPlay: d,
                });
                break;
            case x.geh.IMG:
                if ("errored" === this.state.status.get(e.src)) {
                    let e = (0, n.jsx)(r.D, { variant: "heading-xl/semibold", children: A.intl.string(A.t.UvDfMz) });
                    return (0, n.jsx)("div", {
                        className: f.Un,
                        children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e,
                    });
                }
                {
                    let t = e.alt ?? A.intl.string(A.t.X4IxWL);
                    a = (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(o.y, {
                                className: s()(f.u1, { [f.R]: void 0 !== this.state.status.get(e.src) }),
                                type: o.y.Type.SPINNING_CIRCLE,
                            }),
                            (0, n.jsx)("img", {
                                onError: this.handleOnErrorImg,
                                onLoad: this.handleOnLoadImg,
                                className: s()(f.JD, { [f.R]: "loaded" !== this.state.status.get(e.src) }),
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
        return (0, n.jsx)(c.D, { className: f.Pj, onClick: () => this.handleCurrentItemClick(e, t), children: a });
    };
    render() {
        let { items: e, autoplayInterval: t, className: a, paused: l, themedPagination: i } = this.props,
            { hasInteracted: r } = this.state;
        return (0, n.jsx)(h.A, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: l || r,
            renderItem: this.renderItem,
            className: s()(f.Gt, a),
            themedPagination: i,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem,
        });
    }
}
let S = N;
