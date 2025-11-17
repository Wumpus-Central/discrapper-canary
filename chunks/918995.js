r.d(t, { default: () => u }), r(388685);
var n = r(54381),
    i = r(473749),
    a = r(481060),
    c = r(233787),
    l = r(388032);
function o(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
class s extends i.Component {
    render() {
        let { transitionState: e } = this.props;
        return (0, n.jsx)(c.C, {
            transitionState: e,
            onClose: async () => await this.cancel(),
            "aria-label": l.intl.string(l.t.Nn0Px8),
            title: l.intl.string(l.t.Nn0Px8),
            premiumModalType: c.C.Types.UNCLAIMED,
            primary: {
                onClick: this.claimAccount,
                label: l.intl.string(l.t.fiNVin),
            },
            secondary: {
                onClick: this.cancel,
                label: l.intl.string(l.t.oEAioF),
            },
            children: l.intl.string(l.t["7btfmI"]),
        });
    }
    constructor(...e) {
        super(...e),
            o(this, "cancel", () => {
                let { onClose: e } = this.props;
                null == e || e();
            }),
            o(this, "claimAccount", () => {
                let { onClose: e } = this.props;
                null == e || e(),
                    (0, a.ZDy)(async () => {
                        let { default: e } = await r.e("60827").then(r.bind(r, 324239));
                        return (t) =>
                            (0, n.jsx)(
                                e,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(r);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (n = n.concat(
                                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                }),
                                            )),
                                            n.forEach(function (t) {
                                                o(e, t, r[t]);
                                            });
                                    }
                                    return e;
                                })({}, t),
                            );
                    });
            });
    }
}
let u = s;
