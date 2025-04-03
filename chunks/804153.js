n.d(t, { Z: () => x }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(497321),
    o = n(484614),
    c = n(246946),
    d = n(434404),
    u = n(999382),
    m = n(24318),
    g = n(822693),
    p = n(388032),
    h = n(476795);
function f(e, t, n) {
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
class b extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { widgetEnabled: n } = e,
            { widgetEnabledProp: r } = t;
        return n !== r
            ? {
                  internalEnabled: n,
                  widgetEnabledProp: n
              }
            : null;
    }
    renderChannelSelect(e) {
        let { widgetChannelId: t, widgetEnabled: n } = this.props;
        return (0, r.jsxs)(a.xJW, {
            title: p.NW.string(p.t.LUo0Q0),
            children: [
                (0, r.jsx)(g.m, {
                    guildId: e.id,
                    widgetEnabled: n,
                    widgetChannelId: t,
                    className: h.spacing
                }),
                (0, r.jsx)(a.R94, {
                    type: a.geA.DESCRIPTION,
                    children: p.NW.string(p.t.LxVR9P)
                })
            ]
        });
    }
    renderAPIInfo(e) {
        let t = (0, m.S)(e.id);
        return (0, r.jsxs)('div', {
            className: h.infoWrapper,
            children: [
                (0, r.jsx)(a.xJW, {
                    title: p.NW.string(p.t.TRyLUl),
                    className: h.infoItem,
                    children: (0, r.jsx)(o.Z, { value: e.id })
                }),
                (0, r.jsx)(a.xJW, {
                    title: p.NW.string(p.t.VECJcH),
                    className: h.infoItem,
                    children: (0, r.jsx)(o.Z, { value: t })
                })
            ]
        });
    }
    renderWidget(e) {
        let t = (0, m.a)(e.id);
        return (0, r.jsx)('div', {
            children: (0, r.jsxs)('div', {
                className: h.infoWrapper,
                children: [
                    (0, r.jsxs)(a.xJW, {
                        className: h.infoItem,
                        title: p.NW.string(p.t.XVGbn5),
                        children: [
                            (0, r.jsx)(o.Z, { value: t }),
                            (0, r.jsx)(a.R94, {
                                type: a.geA.DESCRIPTION,
                                children: p.NW.format(p.t['+baN19'], {})
                            })
                        ]
                    }),
                    (0, r.jsx)('img', {
                        className: h.infoItem,
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
              ? (0, r.jsx)(l.Z, {})
              : (0, r.jsxs)(a.hjN, {
                    tag: a.RB0.H1,
                    title: p.NW.string(p.t.qlhNb2),
                    children: [this.renderToggle(), this.renderChannelSelect(e), (0, r.jsx)(a.$i$, { className: h.divider }), this.renderAPIInfo(e), (0, r.jsx)(a.$i$, { className: h.divider }), this.renderWidget(e)]
                });
    }
    constructor(...e) {
        super(...e),
            f(this, 'state', {
                internalEnabled: this.props.widgetEnabled,
                widgetEnabledProp: this.props.widgetEnabled
            }),
            f(this, 'renderToggle', () =>
                (0, r.jsx)(a.j7V, {
                    className: h.spacing,
                    value: this.state.internalEnabled,
                    onChange: this.handleToggleWidget,
                    children: p.NW.string(p.t.NR6hub)
                })
            ),
            f(this, 'handleToggleWidget', (e) => {
                let { guild: t, widgetChannelId: n } = this.props;
                null != t && (this.setState({ internalEnabled: e }), d.Z.updateEmbed(t.id, e, n));
            });
    }
}
let x = s.ZP.connectStores([u.Z, c.Z], () => {
    let { guild: e, embedChannelId: t, embedEnabled: n } = u.Z.getProps();
    return {
        guild: e,
        widgetChannelId: t,
        widgetEnabled: n,
        hide: c.Z.enabled
    };
})(b);
