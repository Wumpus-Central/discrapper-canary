r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(403182),
    s = r(124347),
    l = r(640108),
    u = r(981631),
    c = r(388032);
class d extends a.Component {
    render() {
        let { src: e, fileSize: n, className: r, mediaPlayerClassName: a, poster: d, fileName: f, naturalWidth: p, naturalHeight: h, playable: _, downloadable: m = !0, volume: g, autoPlay: E, autoMute: v, responsive: y, mediaLayoutType: b, mimeType: I, renderOverlayContent: T, renderLinkComponent: S, onClick: A, onPlay: C, onPause: N, onEnded: R, onControlsShow: O, onControlsHide: D, onVolumeChange: x, onMute: L, alt: w = c.intl.string(c.t.FlNoSU), ...P } = this.props;
        return (0, i.jsx)(s.ZP, {
            alt: w,
            className: r,
            src: d,
            ...P,
            minWidth: l.ZP.minWidth,
            minHeight: l.ZP.minHeight,
            shouldLink: !1,
            shouldAnimate: !1,
            mediaLayoutType: b,
            responsive: y,
            children: (r) => {
                let {
                        src: s,
                        size: { width: c, height: d }
                    } = r,
                    w = !((p <= u.N_j && h <= u.XKF) || (p <= u.XKF && h <= u.N_j));
                return (0, i.jsx)(l.ZP, {
                    className: a,
                    forceExternal: w,
                    src: e,
                    poster: s,
                    width: c,
                    height: d,
                    responsive: y,
                    volume: g,
                    autoPlay: null != E && E,
                    autoMute: null != v && v,
                    type: l.ZP.Types.VIDEO,
                    mediaLayoutType: b,
                    fileName: f,
                    fileSize: null == n ? void 0 : (0, o.Ng)(n),
                    fileSizeBytes: null == n ? void 0 : n,
                    playable: _,
                    renderLinkComponent: S,
                    renderOverlayContent: T,
                    onClick: A,
                    onPlay: C,
                    onPause: N,
                    onEnded: R,
                    onVolumeChange: x,
                    onMute: L,
                    onControlsShow: O,
                    onControlsHide: D,
                    mimeType: I,
                    downloadable: m
                });
            }
        });
    }
}
