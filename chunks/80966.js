n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    a = n(403182),
    o = n(124347),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function p(e, t) {
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
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class h extends i.Component {
    render() {
        let e = this.props,
            {
                src: t,
                fileSize: n,
                className: i,
                mediaPlayerClassName: u,
                poster: f,
                fileName: m,
                naturalWidth: h,
                naturalHeight: g,
                playable: E,
                downloadable: b = !0,
                volume: y,
                autoPlay: O,
                autoMute: v,
                responsive: S,
                mediaLayoutType: I,
                mimeType: T,
                renderOverlayContent: C,
                renderLinkComponent: A,
                onClick: N,
                onPlay: P,
                onPause: R,
                onEnded: D,
                onControlsShow: w,
                onControlsHide: x,
                onVolumeChange: L,
                onMute: j,
                disableArrowKeySeek: M,
                alt: k = c.intl.string(c.t.FlNoSV),
            } = e,
            U = _(e, [
                "src",
                "fileSize",
                "className",
                "mediaPlayerClassName",
                "poster",
                "fileName",
                "naturalWidth",
                "naturalHeight",
                "playable",
                "downloadable",
                "volume",
                "autoPlay",
                "autoMute",
                "responsive",
                "mediaLayoutType",
                "mimeType",
                "renderOverlayContent",
                "renderLinkComponent",
                "onClick",
                "onPlay",
                "onPause",
                "onEnded",
                "onControlsShow",
                "onControlsHide",
                "onVolumeChange",
                "onMute",
                "disableArrowKeySeek",
                "alt",
            ]);
        return (0, r.jsx)(
            o.ZP,
            p(
                d(
                    {
                        alt: k,
                        className: i,
                        src: f,
                    },
                    U,
                ),
                {
                    minWidth: s.ZP.minWidth,
                    minHeight: s.ZP.minHeight,
                    shouldLink: !1,
                    shouldAnimate: !1,
                    mediaLayoutType: I,
                    responsive: S,
                    children: (e) => {
                        let {
                                src: i,
                                size: { width: o, height: c },
                            } = e,
                            d = !((h <= l.N_j && g <= l.XKF) || (h <= l.XKF && g <= l.N_j));
                        return (0, r.jsx)(s.ZP, {
                            alt: k,
                            className: u,
                            forceExternal: d,
                            src: t,
                            poster: i,
                            width: o,
                            height: c,
                            responsive: S,
                            volume: y,
                            autoPlay: null != O && O,
                            autoMute: null != v && v,
                            type: s.ZP.Types.VIDEO,
                            mediaLayoutType: I,
                            fileName: m,
                            fileSize: null == n ? void 0 : (0, a.Ng)(n),
                            fileSizeBytes: null == n ? void 0 : n,
                            playable: E,
                            renderLinkComponent: A,
                            renderOverlayContent: C,
                            onClick: N,
                            onPlay: P,
                            onPause: R,
                            onEnded: D,
                            onVolumeChange: L,
                            onMute: j,
                            onControlsShow: w,
                            onControlsHide: x,
                            mimeType: T,
                            downloadable: b,
                            disableArrowKeySeek: M,
                        });
                    },
                },
            ),
        );
    }
}
