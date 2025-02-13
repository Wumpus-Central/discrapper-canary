n.d(t, { Z: () => S }), n(47120), n(733860);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    s = n.n(l),
    a = n(149765),
    o = n(442837),
    c = n(481060),
    d = n(497321),
    u = n(484614),
    m = n(933557),
    h = n(984933),
    g = n(496675),
    x = n(699516),
    p = n(246946),
    _ = n(594174),
    C = n(434404),
    f = n(999382),
    v = n(981631),
    N = n(388032),
    j = n(41512);
function I(e, t, n) {
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
let E = 'NO_INSTANT_INVITE',
    b = a.$e(v.Plq.VIEW_CHANNEL, v.Plq.CREATE_INSTANT_INVITE);
class T extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { widgetEnabled: n } = e,
            { widgetEnabledProp: i } = t;
        return n !== i
            ? {
                  internalEnabled: n,
                  widgetEnabledProp: n
              }
            : null;
    }
    renderChannelSelect(e) {
        let { widgetChannelId: t } = this.props,
            n = h.ZP.getChannels(e.id),
            r = s()([...n[h.sH], ...n[h.Zb]])
                .filter((t) => {
                    let { channel: n } = t;
                    return n.guild_id === e.id;
                })
                .filter((e) => {
                    let { channel: n } = e;
                    return n.id === t || g.Z.can(b, n);
                })
                .map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: (0, m.F6)(t, _.default, x.Z, !0)
                    };
                })
                .value();
        return (
            r.unshift({
                value: E,
                label: N.intl.string(N.t.u197b2)
            }),
            (0, i.jsxs)(c.xJW, {
                title: N.intl.string(N.t.LUo0Q0),
                children: [
                    (0, i.jsx)(c.q4e, {
                        className: j.spacing,
                        options: r,
                        value: t,
                        onChange: this.handleChannelSelect
                    }),
                    (0, i.jsx)(c.R94, {
                        type: c.geA.DESCRIPTION,
                        children: N.intl.string(N.t.LxVR9P)
                    })
                ]
            })
        );
    }
    renderAPIInfo(e) {
        let t = ''.concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, '/guilds/').concat(e.id, '/widget.json');
        return (0, i.jsxs)('div', {
            className: j.infoWrapper,
            children: [
                (0, i.jsx)(c.xJW, {
                    title: N.intl.string(N.t.TRyLUl),
                    className: j.infoItem,
                    children: (0, i.jsx)(u.Z, { value: e.id })
                }),
                (0, i.jsx)(c.xJW, {
                    title: N.intl.string(N.t.VECJcH),
                    className: j.infoItem,
                    children: (0, i.jsx)(u.Z, { value: t })
                })
            ]
        });
    }
    renderWidget(e) {
        let t = ''.concat(location.protocol).concat(window.GLOBAL_ENV.WIDGET_ENDPOINT, '?id=').concat(e.id, '&theme=dark');
        return (0, i.jsx)('div', {
            children: (0, i.jsxs)('div', {
                className: j.infoWrapper,
                children: [
                    (0, i.jsxs)(c.xJW, {
                        className: j.infoItem,
                        title: N.intl.string(N.t.XVGbn5),
                        children: [
                            (0, i.jsx)(u.Z, { value: '<iframe src="'.concat(t, '" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>') }),
                            (0, i.jsx)(c.R94, {
                                type: c.geA.DESCRIPTION,
                                children: N.intl.format(N.t['+baN19'], {})
                            })
                        ]
                    }),
                    (0, i.jsx)('img', {
                        className: j.infoItem,
                        'data-accessibility': 'desaturate',
                        alt: '',
                        src: n(329488)
                    })
                ]
            })
        });
    }
    render() {
        let { guild: e } = this.props;
        return null == e
            ? null
            : this.props.hide
              ? (0, i.jsx)(d.Z, {})
              : (0, i.jsxs)(c.hjN, {
                    tag: c.RB0.H1,
                    title: N.intl.string(N.t.qlhNb2),
                    children: [this.renderToggle(), this.renderChannelSelect(e), (0, i.jsx)(c.$i$, { className: j.divider }), this.renderAPIInfo(e), (0, i.jsx)(c.$i$, { className: j.divider }), this.renderWidget(e)]
                });
    }
    constructor(...e) {
        super(...e),
            I(this, 'state', {
                internalEnabled: this.props.widgetEnabled,
                widgetEnabledProp: this.props.widgetEnabled
            }),
            I(this, 'renderToggle', () =>
                (0, i.jsx)(c.j7V, {
                    className: j.spacing,
                    value: this.state.internalEnabled,
                    onChange: this.handleToggleWidget,
                    children: N.intl.string(N.t.NR6hub)
                })
            ),
            I(this, 'handleToggleWidget', (e) => {
                let { guild: t, widgetChannelId: n } = this.props;
                null != t && (this.setState({ internalEnabled: e }), C.Z.updateEmbed(t.id, e, n));
            }),
            I(this, 'handleChannelSelect', (e) => {
                let { guild: t, widgetEnabled: n } = this.props;
                null != t && C.Z.updateEmbed(t.id, n, e !== E ? e : null);
            });
    }
}
let S = o.ZP.connectStores([f.Z, p.Z], () => {
    let { guild: e, embedChannelId: t, embedEnabled: n } = f.Z.getProps();
    return {
        guild: e,
        widgetChannelId: t,
        widgetEnabled: n,
        hide: p.Z.enabled
    };
})(T);
