n(47120);
var l = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    i = n(481060),
    a = n(72416),
    c = n(476221),
    u = n(873596),
    d = n(423516),
    h = n(981631),
    x = n(239793);
let g = {
        [h.IE4.UNKNOWN]: i.Tooltip.Colors.BLACK,
        [h.IE4.BAD]: i.Tooltip.Colors.RED,
        [h.IE4.AVERAGE]: i.Tooltip.Colors.YELLOW,
        [h.IE4.FINE]: i.Tooltip.Colors.GREEN
    },
    N = {
        [h.QKv.CONNECTED]: x.rtcConnectionStatusConnected,
        [h.QKv.CONNECTING]: x.rtcConnectionStatusConnecting,
        [h.QKv.ERROR]: x.rtcConnectionStatusError
    },
    C = {
        [h.IE4.FINE]: x.rtcConnectionQualityFine,
        [h.IE4.AVERAGE]: x.rtcConnectionQualityAverage,
        [h.IE4.BAD]: x.rtcConnectionQualityBad,
        [h.IE4.UNKNOWN]: null
    };
class f extends r.PureComponent {
    renderPopoutTarget(e) {
        let t = this.props.channelId;
        return null == t
            ? e({})
            : (0, l.jsx)(i.Popout, {
                  renderPopout: this.renderPopout(t),
                  position: 'top',
                  children: e
              });
    }
    renderStatus() {
        let { hasVideo: e, state: t, channelId: n } = this.props,
            { connectionStatus: r, connectionStatusText: s } = c.Z.getStatus(t, e);
        return this.renderPopoutTarget((e) => {
            let { onClick: t } = e;
            return (0, l.jsx)(i.Button, {
                look: i.Button.Looks.BLANK,
                size: i.Button.Sizes.NONE,
                onClick: t,
                children: (0, l.jsx)(d.Z, {
                    text: s,
                    hasVideo: this.props.hasVideo,
                    className: N[r],
                    hasConnectedChannel: null != n
                })
            });
        });
    }
    render() {
        let e;
        let { quality: t, smallPing: n, lastPing: r, state: s, className: a, children: c } = this.props;
        return (
            s === h.hes.RTC_CONNECTED &&
                (e = (0, l.jsx)(i.Tooltip, {
                    text: t !== h.IE4.UNKNOWN && null != r ? ''.concat(r.toFixed(0), ' ms') : null,
                    color: g[t],
                    children: (e) =>
                        (0, l.jsx)(m, {
                            quality: t,
                            smallPing: n,
                            ...e
                        })
                })),
            (0, l.jsxs)('div', {
                className: x.rtcConnectionStatusWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: o()(x.rtcConnectionStatus, C[t], a),
                        children: [
                            e,
                            (0, l.jsx)('div', {
                                className: x.labelWrapper,
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
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'renderPopout'),
            (r = (e) => (t) =>
                (0, l.jsx)(u.Z, {
                    ...t,
                    channelId: e
                })),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
function m(e) {
    let { quality: t, smallPing: n, ...r } = e;
    if (!(0, i.useRedesignIconContext)().enabled)
        return (0, l.jsx)(a.Z, {
            className: o()(x.ping, { [x.smallPing]: n }),
            foreground: x.pingForeground
        });
    {
        let e = {
            [h.IE4.FINE]: i.ConnectionFineIcon,
            [h.IE4.AVERAGE]: i.ConnectionAverageIcon,
            [h.IE4.BAD]: i.ConnectionBadIcon,
            [h.IE4.UNKNOWN]: i.ConnectionUnknownIcon
        }[t];
        return (0, l.jsx)(e, {
            className: o()(x.ping, { [x.smallPing]: n }),
            ...r
        });
    }
}
t.Z = f;
