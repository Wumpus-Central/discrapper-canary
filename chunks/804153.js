n(47120), n(733860);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    a = n.n(l),
    s = n(149765),
    o = n(442837),
    c = n(481060),
    d = n(497321),
    u = n(484614),
    m = n(933557),
    h = n(984933),
    g = n(496675),
    x = n(699516),
    p = n(246946),
    f = n(594174),
    C = n(434404),
    v = n(999382),
    _ = n(981631),
    N = n(388032),
    I = n(359963);
function T(e, t, n) {
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
let j = 'NO_INSTANT_INVITE',
    b = s.$e(_.Plq.VIEW_CHANNEL, _.Plq.CREATE_INSTANT_INVITE);
class S extends r.PureComponent {
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
            r = a()([...n[h.sH], ...n[h.Zb]])
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
                        label: (0, m.F6)(t, f.default, x.Z, !0)
                    };
                })
                .value();
        return (
            r.unshift({
                value: j,
                label: N.intl.string(N.t.u197b2)
            }),
            (0, i.jsxs)(c.FormItem, {
                title: N.intl.string(N.t.LUo0Q0),
                children: [
                    (0, i.jsx)(c.SingleSelect, {
                        className: I.spacing,
                        options: r,
                        value: t,
                        onChange: this.handleChannelSelect
                    }),
                    (0, i.jsx)(c.FormText, {
                        type: c.FormTextTypes.DESCRIPTION,
                        children: N.intl.string(N.t.LxVR9P)
                    })
                ]
            })
        );
    }
    renderAPIInfo(e) {
        let t = ''.concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, '/guilds/').concat(e.id, '/widget.json');
        return (0, i.jsxs)('div', {
            className: I.infoWrapper,
            children: [
                (0, i.jsx)(c.FormItem, {
                    title: N.intl.string(N.t.TRyLUl),
                    className: I.infoItem,
                    children: (0, i.jsx)(u.Z, { value: e.id })
                }),
                (0, i.jsx)(c.FormItem, {
                    title: N.intl.string(N.t.VECJcH),
                    className: I.infoItem,
                    children: (0, i.jsx)(u.Z, { value: t })
                })
            ]
        });
    }
    renderWidget(e) {
        let t = ''.concat(location.protocol).concat(window.GLOBAL_ENV.WIDGET_ENDPOINT, '?id=').concat(e.id, '&theme=dark');
        return (0, i.jsx)('div', {
            children: (0, i.jsxs)('div', {
                className: I.infoWrapper,
                children: [
                    (0, i.jsxs)(c.FormItem, {
                        className: I.infoItem,
                        title: N.intl.string(N.t.XVGbn5),
                        children: [
                            (0, i.jsx)(u.Z, { value: '<iframe src="'.concat(t, '" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>') }),
                            (0, i.jsx)(c.FormText, {
                                type: c.FormTextTypes.DESCRIPTION,
                                children: N.intl.format(N.t['+baN19'], {})
                            })
                        ]
                    }),
                    (0, i.jsx)('img', {
                        className: I.infoItem,
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
              : (0, i.jsxs)(c.FormSection, {
                    tag: c.FormTitleTags.H1,
                    title: N.intl.string(N.t.qlhNb2),
                    children: [this.renderToggle(), this.renderChannelSelect(e), (0, i.jsx)(c.FormDivider, { className: I.divider }), this.renderAPIInfo(e), (0, i.jsx)(c.FormDivider, { className: I.divider }), this.renderWidget(e)]
                });
    }
    constructor(...e) {
        super(...e),
            T(this, 'state', {
                internalEnabled: this.props.widgetEnabled,
                widgetEnabledProp: this.props.widgetEnabled
            }),
            T(this, 'renderToggle', () =>
                (0, i.jsx)(c.FormSwitch, {
                    className: I.spacing,
                    value: this.state.internalEnabled,
                    onChange: this.handleToggleWidget,
                    children: N.intl.string(N.t.NR6hub)
                })
            ),
            T(this, 'handleToggleWidget', (e) => {
                let { guild: t, widgetChannelId: n } = this.props;
                if (null != t) this.setState({ internalEnabled: e }), C.Z.updateEmbed(t.id, e, n);
            }),
            T(this, 'handleChannelSelect', (e) => {
                let { guild: t, widgetEnabled: n } = this.props;
                if (null != t) C.Z.updateEmbed(t.id, n, e !== j ? e : null);
            });
    }
}
t.Z = o.ZP.connectStores([v.Z, p.Z], () => {
    let { guild: e, embedChannelId: t, embedEnabled: n } = v.Z.getProps();
    return {
        guild: e,
        widgetChannelId: t,
        widgetEnabled: n,
        hide: p.Z.enabled
    };
})(S);
