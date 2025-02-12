n.d(t, { Z: () => I }), n(47120);
var i = n(200651),
    l = n(192379),
    o = n(120356),
    s = n.n(o),
    a = n(481060),
    r = n(72416),
    c = n(476221),
    u = n(873596),
    d = n(423516),
    h = n(981631),
    f = n(38009);
let N = {
        [h.IE4.UNKNOWN]: a.ua7.Colors.BLACK,
        [h.IE4.BAD]: a.ua7.Colors.RED,
        [h.IE4.AVERAGE]: a.ua7.Colors.YELLOW,
        [h.IE4.FINE]: a.ua7.Colors.GREEN
    },
    g = {
        [h.QKv.CONNECTED]: f.rtcConnectionStatusConnected,
        [h.QKv.CONNECTING]: f.rtcConnectionStatusConnecting,
        [h.QKv.ERROR]: f.rtcConnectionStatusError
    },
    x = {
        [h.IE4.FINE]: f.rtcConnectionQualityFine,
        [h.IE4.AVERAGE]: f.rtcConnectionQualityAverage,
        [h.IE4.BAD]: f.rtcConnectionQualityBad,
        [h.IE4.UNKNOWN]: null
    };
class p extends l.PureComponent {
    renderPopoutTarget(e) {
        let t = this.props.channelId;
        return null == t
            ? e({})
            : (0, i.jsx)(a.yRy, {
                  renderPopout: this.renderPopout(t),
                  position: 'top',
                  children: e
              });
    }
    renderStatus() {
        let { hasVideo: e, state: t, channelId: n } = this.props,
            { connectionStatus: l, connectionStatusText: o } = c.Z.getStatus(t, e);
        return this.renderPopoutTarget((e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(a.zxk, {
                look: a.zxk.Looks.BLANK,
                size: a.zxk.Sizes.NONE,
                onClick: t,
                children: (0, i.jsx)(d.Z, {
                    text: o,
                    textVariant: this.props.connectionStatusTextVariant,
                    hasVideo: this.props.hasVideo,
                    className: g[l],
                    hasConnectedChannel: null != n
                })
            });
        });
    }
    render() {
        let e;
        let { quality: t, smallPing: n, lastPing: l, state: o, className: r, children: c } = this.props;
        return (
            o === h.hes.RTC_CONNECTED &&
                (e = (0, i.jsx)(a.ua7, {
                    text: t !== h.IE4.UNKNOWN && null != l ? ''.concat(l.toFixed(0), ' ms') : null,
                    color: N[t],
                    children: (e) =>
                        (0, i.jsx)(C, {
                            quality: t,
                            smallPing: n,
                            ...e
                        })
                })),
            (0, i.jsxs)('div', {
                className: f.rtcConnectionStatusWrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: s()(f.rtcConnectionStatus, x[t], r),
                        children: [
                            e,
                            (0, i.jsx)('div', {
                                className: f.labelWrapper,
                                children: this.renderStatus()
                            })
                        ]
                    }),
                    c
                ]
            })
        );
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (t = 'renderPopout'),
            (n = (e) => (t) =>
                (0, i.jsx)(u.Z, {
                    ...t,
                    channelId: e
                })),
            t in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n);
    }
}
function C(e) {
    let { quality: t, smallPing: n, ...l } = e;
    if (!(0, a.bWb)().enabled)
        return (0, i.jsx)(r.Z, {
            className: s()(f.ping, { [f.smallPing]: n }),
            foreground: f.pingForeground
        });
    {
        let e = {
            [h.IE4.FINE]: a.B_b,
            [h.IE4.AVERAGE]: a.hLg,
            [h.IE4.BAD]: a.mbS,
            [h.IE4.UNKNOWN]: a._3e
        }[t];
        return (0, i.jsx)(e, {
            className: s()(f.ping, { [f.smallPing]: n }),
            ...l
        });
    }
}
let I = p;
