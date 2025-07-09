(n.d(t, { default: () => u }), n(388685));
var r = n(255367),
    i = n(73800),
    s = n(481060),
    a = n(233787),
    o = n(388032);
function c(e, t, n) {
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
class l extends i.Component {
    render() {
        let { transitionState: e } = this.props;
        return (0, r.jsxs)(a.Z, {
            transitionState: e,
            'aria-label': o.intl.string(o.t.Nn0Px8),
            children: [
                (0, r.jsx)(a.Z.Header, { children: o.intl.string(o.t.Nn0Px8) }),
                (0, r.jsx)(a.Z.Content, {
                    type: a.Z.Types.UNCLAIMED,
                    children: o.intl.string(o.t['7btfmJ'])
                }),
                (0, r.jsx)(a.Z.Footer, {
                    secondary: {
                        onClick: this.cancel,
                        label: o.intl.string(o.t.oEAioK)
                    },
                    primary: {
                        onClick: this.claimAccount,
                        label: o.intl.string(o.t.fiNVio)
                    }
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            c(this, 'cancel', () => {
                let { onClose: e } = this.props;
                null == e || e();
            }),
            c(this, 'claimAccount', () => {
                let { onClose: e } = this.props;
                (null == e || e(),
                    (0, s.ZDy)(async () => {
                        let { default: e } = await n.e('60827').then(n.bind(n, 324239));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                c(e, t, n[t]);
                                            }));
                                    }
                                    return e;
                                })({}, t)
                            );
                    }));
            }));
    }
}
let u = l;
