n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    o = n(403182),
    a = n(124347),
    s = n(640108),
    l = n(981631),
    c = n(388032);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class m extends i.Component {
    render() {
        let e = this.props,
            { src: t, fileSize: n, className: i, mediaPlayerClassName: u, poster: f, fileName: h, naturalWidth: m, naturalHeight: g, playable: E, downloadable: b = !0, volume: y, autoPlay: v, autoMute: O, responsive: I, mediaLayoutType: S, mimeType: T, renderOverlayContent: N, renderLinkComponent: A, onClick: C, onPlay: R, onPause: P, onEnded: w, onControlsShow: D, onControlsHide: L, onVolumeChange: x, onMute: M, alt: k = c.NW.string(c.t.FlNoSU) } = e,
            j = p(e, ['src', 'fileSize', 'className', 'mediaPlayerClassName', 'poster', 'fileName', 'naturalWidth', 'naturalHeight', 'playable', 'downloadable', 'volume', 'autoPlay', 'autoMute', 'responsive', 'mediaLayoutType', 'mimeType', 'renderOverlayContent', 'renderLinkComponent', 'onClick', 'onPlay', 'onPause', 'onEnded', 'onControlsShow', 'onControlsHide', 'onVolumeChange', 'onMute', 'alt']);
        return (0, r.jsx)(
            a.ZP,
            _(
                d(
                    {
                        alt: k,
                        className: i,
                        src: f
                    },
                    j
                ),
                {
                    minWidth: s.ZP.minWidth,
                    minHeight: s.ZP.minHeight,
                    shouldLink: !1,
                    shouldAnimate: !1,
                    mediaLayoutType: S,
                    responsive: I,
                    children: (e) => {
                        let {
                                src: i,
                                size: { width: a, height: c }
                            } = e,
                            d = !((m <= l.N_j && g <= l.XKF) || (m <= l.XKF && g <= l.N_j));
                        return (0, r.jsx)(s.ZP, {
                            className: u,
                            forceExternal: d,
                            src: t,
                            poster: i,
                            width: a,
                            height: c,
                            responsive: I,
                            volume: y,
                            autoPlay: null != v && v,
                            autoMute: null != O && O,
                            type: s.ZP.Types.VIDEO,
                            mediaLayoutType: S,
                            fileName: h,
                            fileSize: null == n ? void 0 : (0, o.Ng)(n),
                            fileSizeBytes: null == n ? void 0 : n,
                            playable: E,
                            renderLinkComponent: A,
                            renderOverlayContent: N,
                            onClick: C,
                            onPlay: R,
                            onPause: P,
                            onEnded: w,
                            onVolumeChange: x,
                            onMute: M,
                            onControlsShow: D,
                            onControlsHide: L,
                            mimeType: T,
                            downloadable: b
                        });
                    }
                }
            )
        );
    }
}
