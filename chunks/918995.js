n.d(t, { default: () => u }), n(47120);
var r = n(200651),
    s = n(192379),
    i = n(481060),
    c = n(233787),
    o = n(388032);
function a(e, t, n) {
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
class l extends s.Component {
    render() {
        let { transitionState: e } = this.props;
        return (0, r.jsxs)(c.Z, {
            transitionState: e,
            'aria-label': o.NW.string(o.t.Nn0Px8),
            children: [
                (0, r.jsx)(c.Z.Header, { children: o.NW.string(o.t.Nn0Px8) }),
                (0, r.jsx)(c.Z.Content, {
                    type: c.Z.Types.UNCLAIMED,
                    children: o.NW.string(o.t['7btfmJ'])
                }),
                (0, r.jsx)(c.Z.Footer, {
                    secondary: {
                        onClick: this.cancel,
                        label: o.NW.string(o.t.oEAioK)
                    },
                    primary: {
                        onClick: this.claimAccount,
                        label: o.NW.string(o.t.fiNVio)
                    }
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            a(this, 'cancel', () => {
                let { onClose: e } = this.props;
                null == e || e();
            }),
            a(this, 'claimAccount', () => {
                let { onClose: e } = this.props;
                null == e || e(),
                    (0, i.ZDy)(async () => {
                        let { default: e } = await n.e('60827').then(n.bind(n, 324239));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                (function (e) {
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
                                                a(e, t, n[t]);
                                            });
                                    }
                                    return e;
                                })({}, t)
                            );
                    });
            });
    }
}
let u = l;
