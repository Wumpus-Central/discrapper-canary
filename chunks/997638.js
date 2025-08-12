n.d(t, {
    ZP: () => S,
    cy: () => I,
    iu: () => v,
}),
    n(388685);
var r,
    i = n(255367),
    o = n(73800),
    a = n(120356),
    s = n.n(a),
    l = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(626135),
    f = n(600164),
    _ = n(981631),
    p = n(388032),
    h = n(935270);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var v = (function (e) {
        return (e.CENTER = "center"), (e.LEFT = "left"), e;
    })({}),
    I = (function (e) {
        return (e.TOP = "top"), (e.MIDDLE = "middle"), e;
    })({});
class T extends o.PureComponent {
    componentDidMount() {
        let { uniqueId: e } = this.props;
        d.default.track(_.rMx.SHOW_TUTORIAL, { tutorial: e });
    }
    componentWillUnmount() {
        d.default.track(_.rMx.CLOSE_TUTORIAL, {
            tutorial: this.props.uniqueId,
            acknowledged: this.state.confirmed,
        });
    }
    render() {
        let {
                renderMedia: e,
                textAlign: t,
                isLongText: n,
                title: r,
                body: o,
                className: a,
                forceTheme: d,
                onClickSkipAll: _,
            } = this.props,
            m = "string" == typeof o ? "p" : "div",
            g = "left" === t || n,
            E = "center" === t || !g;
        return (0, i.jsxs)(u.VqE, {
            className: s()(h.popoutRoot, a),
            children: [
                null != e &&
                    (0, i.jsx)(f.Z, {
                        className: h.mediaContainer,
                        justify: g ? f.Z.Justify.START : f.Z.Justify.CENTER,
                        children: e(),
                    }),
                (0, i.jsx)(u.H, {
                    className: s()({
                        [h.titleCenter]: E,
                        [h.titleLeft]: g,
                    }),
                    children: r,
                }),
                (0, i.jsx)(m, {
                    className: s()({
                        [h.bodyCenter]: E,
                        [h.bodyLeft]: g,
                    }),
                    children: o,
                }),
                (0, i.jsxs)(f.Z, {
                    className: h.buttonContainer,
                    justify: g ? f.Z.Justify.BETWEEN : f.Z.Justify.CENTER,
                    children: [
                        (0, i.jsx)(u.zxk, {
                            variant: "primary",
                            size: "sm",
                            text: p.intl.string(p.t["+IrDzM"]),
                            onClick: this.handleDismiss,
                        }),
                        (0, i.jsx)(c.zx, {
                            size: c.Ph.SMALL,
                            look: c.zx.Looks.BLANK,
                            onClick: _,
                            color: (0, l.ap)(d) ? c.zx.Colors.PRIMARY : c.zx.Colors.WHITE,
                            className: g ? h.buttonSkipLeftAlign : h.buttonSkipCenterAlign,
                            children: p.intl.string(p.t["33wtxs"]),
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            m(this, "state", { confirmed: !1 }),
            m(this, "handleDismiss", () => {
                let { onClickComplete: e } = this.props;
                this.setState({ confirmed: !0 }, () => (null == e ? void 0 : e()));
            });
    }
}
class S extends (r = o.PureComponent) {
    render() {
        let e = this.props,
            {
                renderMedia: t,
                textAlign: n,
                onComplete: r,
                onSkipAll: o,
                isLongText: a,
                title: s,
                body: l,
                children: c,
                spacing: d,
                forceTheme: f,
                innerRef: _,
            } = e,
            p = y(e, [
                "renderMedia",
                "textAlign",
                "onComplete",
                "onSkipAll",
                "isLongText",
                "title",
                "body",
                "children",
                "spacing",
                "forceTheme",
                "innerRef",
            ]),
            h = "top" === p.position || "bottom" === p.position ? "center" : "top";
        return (0, i.jsx)(
            u.yRy,
            b(g({ targetElementRef: _ }, p), {
                align: h,
                spacing: null != d ? d : 0,
                renderPopout: this.renderPopoutContent,
                nudgeAlignIntoViewport: !0,
                children: c,
            }),
        );
    }
    constructor(...e) {
        super(...e),
            m(this, "onClickComplete", (e) => {
                e(), this.props.onComplete();
            }),
            m(this, "onClickSkipAll", (e) => {
                let { onSkipAll: t, uniqueId: n } = this.props;
                e(), t(), d.default.track(_.rMx.DISMISS_ALL_TUTORIALS, { tutorial: n });
            }),
            m(this, "renderPopoutContent", (e) => {
                let { closePopout: t, position: n } = e,
                    { forceTheme: r, isLongText: o, arrowAlignment: a, renderMedia: l } = this.props,
                    c = null != l;
                return (0, i.jsx)(u.f6W, {
                    theme: r,
                    children: (e) =>
                        (0, i.jsx)(
                            T,
                            b(g({}, this.props), {
                                className: s()(
                                    {
                                        [h.bottom]: "bottom" === n,
                                        [h.contentNarrowNoMedia]: !o && !c,
                                        [h.contentNarrowWithMedia]: !o && c,
                                        [h.contentWideNoMedia]: o && !c,
                                        [h.contentWideWithMedia]: o && c,
                                        [h.right]: "right" === n,
                                        [h.top]: "top" === n,
                                        [h.left]: "left" === n,
                                        [h.arrowAlignmentTop]: "top" === a,
                                        [h.arrowAlignmentMiddle]: "middle" === a,
                                        "force-theme": null != r,
                                    },
                                    e,
                                ),
                                onClickComplete: () => this.onClickComplete(t),
                                onClickSkipAll: () => this.onClickSkipAll(t),
                            }),
                        ),
                });
            });
    }
}
m(S, "TextAlignments", v), m(S, "defaultProps", { textAlign: "left" });
