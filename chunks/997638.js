n.d(t, {
    ZP: () => E,
    cy: () => x,
    iu: () => C
}),
    n(47120);
var i,
    l,
    a,
    r = n(200651),
    s = n(192379),
    o = n(120356),
    c = n.n(o),
    d = n(780384),
    u = n(481060),
    h = n(626135),
    p = n(600164),
    m = n(981631),
    f = n(388032),
    g = n(743596);
function _(e, t, n) {
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
var C = (((l = {}).CENTER = 'center'), (l.LEFT = 'left'), l),
    x = (((a = {}).TOP = 'top'), (a.MIDDLE = 'middle'), a);
class v extends s.PureComponent {
    componentDidMount() {
        let { uniqueId: e } = this.props;
        h.default.track(m.rMx.SHOW_TUTORIAL, { tutorial: e });
    }
    componentWillUnmount() {
        h.default.track(m.rMx.CLOSE_TUTORIAL, {
            tutorial: this.props.uniqueId,
            acknowledged: this.state.confirmed
        });
    }
    render() {
        let { renderMedia: e, textAlign: t, isLongText: n, title: i, body: l, className: a, forceTheme: s, onClickSkipAll: o } = this.props,
            h = 'left' === t || n,
            m = 'center' === t || !h;
        return (0, r.jsxs)(u.VqE, {
            className: c()(g.popoutRoot, a),
            children: [
                null != e &&
                    (0, r.jsx)(p.Z, {
                        className: g.mediaContainer,
                        justify: h ? p.Z.Justify.START : p.Z.Justify.CENTER,
                        children: e()
                    }),
                (0, r.jsx)(u.H, {
                    className: c()({
                        [g.titleCenter]: m,
                        [g.titleLeft]: h
                    }),
                    children: i
                }),
                (0, r.jsx)('string' == typeof l ? 'p' : 'div', {
                    className: c()({
                        [g.bodyCenter]: m,
                        [g.bodyLeft]: h
                    }),
                    children: l
                }),
                (0, r.jsxs)(p.Z, {
                    className: g.buttonContainer,
                    justify: h ? p.Z.Justify.BETWEEN : p.Z.Justify.CENTER,
                    children: [
                        (0, r.jsx)(u.zxk, {
                            size: u.PhG.SMALL,
                            onClick: this.handleDismiss,
                            children: f.intl.string(f.t['+IrDzM'])
                        }),
                        (0, r.jsx)(u.zxk, {
                            size: u.PhG.SMALL,
                            look: u.zxk.Looks.BLANK,
                            onClick: o,
                            color: (0, d.ap)(s) ? u.zxk.Colors.PRIMARY : u.zxk.Colors.WHITE,
                            className: h ? g.buttonSkipLeftAlign : g.buttonSkipCenterAlign,
                            children: f.intl.string(f.t['33wtxs'])
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', { confirmed: !1 }),
            _(this, 'handleDismiss', () => {
                let { onClickComplete: e } = this.props;
                this.setState({ confirmed: !0 }, () => (null == e ? void 0 : e()));
            });
    }
}
class E extends (i = s.PureComponent) {
    render() {
        let { renderMedia: e, textAlign: t, onComplete: n, onSkipAll: i, isLongText: l, title: a, body: s, children: o, spacing: c, forceTheme: d, ...h } = this.props,
            p = 'top' === h.position || 'bottom' === h.position ? 'center' : 'top';
        return (0, r.jsx)(u.yRy, {
            ...h,
            align: p,
            spacing: null != c ? c : 0,
            renderPopout: this.renderPopoutContent,
            nudgeAlignIntoViewport: !0,
            children: o
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'onClickComplete', (e) => {
                e(), this.props.onComplete();
            }),
            _(this, 'onClickSkipAll', (e) => {
                let { onSkipAll: t, uniqueId: n } = this.props;
                e(), t(), h.default.track(m.rMx.DISMISS_ALL_TUTORIALS, { tutorial: n });
            }),
            _(this, 'renderPopoutContent', (e) => {
                let { closePopout: t, position: n } = e,
                    { forceTheme: i, isLongText: l, arrowAlignment: a, renderMedia: s } = this.props,
                    o = null != s;
                return (0, r.jsx)(u.f6W, {
                    theme: i,
                    children: (e) =>
                        (0, r.jsx)(v, {
                            ...this.props,
                            className: c()(
                                {
                                    [g.bottom]: 'bottom' === n,
                                    [g.contentNarrowNoMedia]: !l && !o,
                                    [g.contentNarrowWithMedia]: !l && o,
                                    [g.contentWideNoMedia]: l && !o,
                                    [g.contentWideWithMedia]: l && o,
                                    [g.right]: 'right' === n,
                                    [g.top]: 'top' === n,
                                    [g.left]: 'left' === n,
                                    [g.arrowAlignmentTop]: 'top' === a,
                                    [g.arrowAlignmentMiddle]: 'middle' === a,
                                    'force-theme': null != i
                                },
                                e
                            ),
                            onClickComplete: () => this.onClickComplete(t),
                            onClickSkipAll: () => this.onClickSkipAll(t)
                        })
                });
            });
    }
}
_(E, 'TextAlignments', C), _(E, 'defaultProps', { textAlign: 'left' });
