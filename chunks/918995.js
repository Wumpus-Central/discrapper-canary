(n.d(t, { default: () => u }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(481060),
    s = n(233787),
    c = n(388032);
function o(e, t, n) {
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
        return (0, r.jsx)(s.C, {
            transitionState: e,
            onClose: async () => await this.cancel(),
            'aria-label': c.intl.string(c.t.Nn0Px8),
            title: c.intl.string(c.t.Nn0Px8),
            premiumModalType: s.C.Types.UNCLAIMED,
            primary: {
                onClick: this.claimAccount,
                label: c.intl.string(c.t.fiNVio)
            },
            secondary: {
                onClick: this.cancel,
                label: c.intl.string(c.t.oEAioK)
            },
            children: c.intl.string(c.t['7btfmJ'])
        });
    }
    constructor(...e) {
        (super(...e),
            o(this, 'cancel', () => {
                let { onClose: e } = this.props;
                null == e || e();
            }),
            o(this, 'claimAccount', () => {
                let { onClose: e } = this.props;
                (null == e || e(),
                    (0, a.ZDy)(async () => {
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
                                                o(e, t, n[t]);
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
