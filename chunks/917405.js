n(47120);
var l = n(200651),
    s = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(481060),
    a = n(72416),
    c = n(476221),
    u = n(873596),
    d = n(423516),
    h = n(981631),
    x = n(239793);
let g = {
        [h.IE4.UNKNOWN]: o.Tooltip.Colors.BLACK,
        [h.IE4.BAD]: o.Tooltip.Colors.RED,
        [h.IE4.AVERAGE]: o.Tooltip.Colors.YELLOW,
        [h.IE4.FINE]: o.Tooltip.Colors.GREEN
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
class f extends s.PureComponent {
    renderPopoutTarget(e) {
        let t = this.props.channelId;
        return null == t
            ? e({})
            : (0, l.jsx)(o.Popout, {
                  renderPopout: this.renderPopout(t),
                  position: 'top',
                  children: e
              });
    }
    renderStatus() {
        let { hasVideo: e, state: t, channelId: n } = this.props,
            { connectionStatus: s, connectionStatusText: r } = c.Z.getStatus(t, e);
        return this.renderPopoutTarget((e) => {
            let { onClick: t } = e;
            return (0, l.jsx)(o.Button, {
                look: o.Button.Looks.BLANK,
                size: o.Button.Sizes.NONE,
                onClick: t,
                children: (0, l.jsx)(d.Z, {
                    text: r,
                    textVariant: this.props.connectionStatusTextVariant,
                    hasVideo: this.props.hasVideo,
                    className: N[s],
                    hasConnectedChannel: null != n
                })
            });
        });
    }
    render() {
        let e;
        let { quality: t, smallPing: n, lastPing: s, state: r, className: a, children: c } = this.props;
        return (
            r === h.hes.RTC_CONNECTED &&
                (e = (0, l.jsx)(o.Tooltip, {
                    text: t !== h.IE4.UNKNOWN && null != s ? ''.concat(s.toFixed(0), ' ms') : null,
                    color: g[t],
                    children: (e) =>
                        (0, l.jsx)(p, {
                            quality: t,
                            smallPing: n,
                            ...e
                        })
                })),
            (0, l.jsxs)('div', {
                className: x.rtcConnectionStatusWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: i()(x.rtcConnectionStatus, C[t], a),
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
        var t, n, s;
        super(...e),
            (t = this),
            (n = 'renderPopout'),
            (s = (e) => (t) =>
                (0, l.jsx)(u.Z, {
                    ...t,
                    channelId: e
                })),
            n in t
                ? Object.defineProperty(t, n, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = s);
    }
}
function p(e) {
    let { quality: t, smallPing: n, ...s } = e;
    if (!(0, o.useRedesignIconContext)().enabled)
        return (0, l.jsx)(a.Z, {
            className: i()(x.ping, { [x.smallPing]: n }),
            foreground: x.pingForeground
        });
    {
        let e = {
            [h.IE4.FINE]: o.ConnectionFineIcon,
            [h.IE4.AVERAGE]: o.ConnectionAverageIcon,
            [h.IE4.BAD]: o.ConnectionBadIcon,
            [h.IE4.UNKNOWN]: o.ConnectionUnknownIcon
        }[t];
        return (0, l.jsx)(e, {
            className: i()(x.ping, { [x.smallPing]: n }),
            ...s
        });
    }
}
t.Z = f;
