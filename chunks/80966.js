n.d(t, { Z: () => c });
var i = n(200651),
    r = n(192379),
    a = n(403182),
    s = n(124347),
    o = n(640108),
    l = n(981631),
    u = n(388032);
class c extends r.Component {
    render() {
        let { src: e, fileSize: t, className: n, mediaPlayerClassName: r, poster: c, fileName: d, naturalWidth: f, naturalHeight: _, playable: p, downloadable: h = !0, volume: m, autoPlay: g, autoMute: E, responsive: v, mediaLayoutType: y, mimeType: I, renderOverlayContent: T, renderLinkComponent: b, onClick: S, onPlay: A, onPause: N, onEnded: C, onControlsShow: R, onControlsHide: O, onVolumeChange: D, onMute: L, alt: x = u.intl.string(u.t.FlNoSU), ...P } = this.props;
        return (0, i.jsx)(s.ZP, {
            alt: x,
            className: n,
            src: c,
            ...P,
            minWidth: o.ZP.minWidth,
            minHeight: o.ZP.minHeight,
            shouldLink: !1,
            shouldAnimate: !1,
            mediaLayoutType: y,
            responsive: v,
            children: (n) => {
                let {
                        src: s,
                        size: { width: u, height: c }
                    } = n,
                    x = !((f <= l.N_j && _ <= l.XKF) || (f <= l.XKF && _ <= l.N_j));
                return (0, i.jsx)(o.ZP, {
                    className: r,
                    forceExternal: x,
                    src: e,
                    poster: s,
                    width: u,
                    height: c,
                    responsive: v,
                    volume: m,
                    autoPlay: null != g && g,
                    autoMute: null != E && E,
                    type: o.ZP.Types.VIDEO,
                    mediaLayoutType: y,
                    fileName: d,
                    fileSize: null == t ? void 0 : (0, a.Ng)(t),
                    fileSizeBytes: null == t ? void 0 : t,
                    playable: p,
                    renderLinkComponent: b,
                    renderOverlayContent: T,
                    onClick: S,
                    onPlay: A,
                    onPause: N,
                    onEnded: C,
                    onVolumeChange: D,
                    onMute: L,
                    onControlsShow: R,
                    onControlsHide: O,
                    mimeType: I,
                    downloadable: h
                });
            }
        });
    }
}
