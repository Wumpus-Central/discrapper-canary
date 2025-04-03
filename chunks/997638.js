n.d(t, {
    ZP: () => j,
    cy: () => x,
    iu: () => y
}),
    n(47120);
var r,
    i,
    l,
    o = n(200651),
    a = n(192379),
    s = n(120356),
    c = n.n(s),
    u = n(780384),
    d = n(481060),
    p = n(626135),
    h = n(600164),
    f = n(981631),
    m = n(388032),
    g = n(840440);
function b(e, t, n) {
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
function _(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var y = (((i = {}).CENTER = 'center'), (i.LEFT = 'left'), i),
    x = (((l = {}).TOP = 'top'), (l.MIDDLE = 'middle'), l);
class v extends a.PureComponent {
    componentDidMount() {
        let { uniqueId: e } = this.props;
        p.default.track(f.rMx.SHOW_TUTORIAL, { tutorial: e });
    }
    componentWillUnmount() {
        p.default.track(f.rMx.CLOSE_TUTORIAL, {
            tutorial: this.props.uniqueId,
            acknowledged: this.state.confirmed
        });
    }
    render() {
        let { renderMedia: e, textAlign: t, isLongText: n, title: r, body: i, className: l, forceTheme: a, onClickSkipAll: s } = this.props,
            p = 'left' === t || n,
            f = 'center' === t || !p;
        return (0, o.jsxs)(d.VqE, {
            className: c()(g.popoutRoot, l),
            children: [
                null != e &&
                    (0, o.jsx)(h.Z, {
                        className: g.mediaContainer,
                        justify: p ? h.Z.Justify.START : h.Z.Justify.CENTER,
                        children: e()
                    }),
                (0, o.jsx)(d.H, {
                    className: c()({
                        [g.titleCenter]: f,
                        [g.titleLeft]: p
                    }),
                    children: r
                }),
                (0, o.jsx)('string' == typeof i ? 'p' : 'div', {
                    className: c()({
                        [g.bodyCenter]: f,
                        [g.bodyLeft]: p
                    }),
                    children: i
                }),
                (0, o.jsxs)(h.Z, {
                    className: g.buttonContainer,
                    justify: p ? h.Z.Justify.BETWEEN : h.Z.Justify.CENTER,
                    children: [
                        (0, o.jsx)(d.zxk, {
                            size: d.PhG.SMALL,
                            onClick: this.handleDismiss,
                            children: m.NW.string(m.t['+IrDzM'])
                        }),
                        (0, o.jsx)(d.zxk, {
                            size: d.PhG.SMALL,
                            look: d.zxk.Looks.BLANK,
                            onClick: s,
                            color: (0, u.ap)(a) ? d.zxk.Colors.PRIMARY : d.zxk.Colors.WHITE,
                            className: p ? g.buttonSkipLeftAlign : g.buttonSkipCenterAlign,
                            children: m.NW.string(m.t['33wtxs'])
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'state', { confirmed: !1 }),
            b(this, 'handleDismiss', () => {
                let { onClickComplete: e } = this.props;
                this.setState({ confirmed: !0 }, () => (null == e ? void 0 : e()));
            });
    }
}
class j extends (r = a.PureComponent) {
    render() {
        let e = this.props,
            { renderMedia: t, textAlign: n, onComplete: r, onSkipAll: i, isLongText: l, title: a, body: s, children: c, spacing: u, forceTheme: p } = e,
            h = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['renderMedia', 'textAlign', 'onComplete', 'onSkipAll', 'isLongText', 'title', 'body', 'children', 'spacing', 'forceTheme']),
            f = 'top' === h.position || 'bottom' === h.position ? 'center' : 'top';
        return (0, o.jsx)(
            d.yRy,
            C(_({}, h), {
                align: f,
                spacing: null != u ? u : 0,
                renderPopout: this.renderPopoutContent,
                nudgeAlignIntoViewport: !0,
                children: c
            })
        );
    }
    constructor(...e) {
        super(...e),
            b(this, 'onClickComplete', (e) => {
                e(), this.props.onComplete();
            }),
            b(this, 'onClickSkipAll', (e) => {
                let { onSkipAll: t, uniqueId: n } = this.props;
                e(), t(), p.default.track(f.rMx.DISMISS_ALL_TUTORIALS, { tutorial: n });
            }),
            b(this, 'renderPopoutContent', (e) => {
                let { closePopout: t, position: n } = e,
                    { forceTheme: r, isLongText: i, arrowAlignment: l, renderMedia: a } = this.props,
                    s = null != a;
                return (0, o.jsx)(d.f6W, {
                    theme: r,
                    children: (e) =>
                        (0, o.jsx)(
                            v,
                            C(_({}, this.props), {
                                className: c()(
                                    {
                                        [g.bottom]: 'bottom' === n,
                                        [g.contentNarrowNoMedia]: !i && !s,
                                        [g.contentNarrowWithMedia]: !i && s,
                                        [g.contentWideNoMedia]: i && !s,
                                        [g.contentWideWithMedia]: i && s,
                                        [g.right]: 'right' === n,
                                        [g.top]: 'top' === n,
                                        [g.left]: 'left' === n,
                                        [g.arrowAlignmentTop]: 'top' === l,
                                        [g.arrowAlignmentMiddle]: 'middle' === l,
                                        'force-theme': null != r
                                    },
                                    e
                                ),
                                onClickComplete: () => this.onClickComplete(t),
                                onClickSkipAll: () => this.onClickSkipAll(t)
                            })
                        )
                });
            });
    }
}
b(j, 'TextAlignments', y), b(j, 'defaultProps', { textAlign: 'left' });
