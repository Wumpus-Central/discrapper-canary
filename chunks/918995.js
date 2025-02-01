n.d(s, { default: () => d }), n(47120);
var t = n(200651),
    i = n(192379),
    a = n(481060),
    l = n(233787),
    r = n(388032);
function c(e, s, n) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = n),
        e
    );
}
class o extends i.Component {
    render() {
        let { transitionState: e } = this.props;
        return (0, t.jsxs)(l.Z, {
            transitionState: e,
            'aria-label': r.intl.string(r.t.Nn0Px8),
            children: [
                (0, t.jsx)(l.Z.Header, { children: r.intl.string(r.t.Nn0Px8) }),
                (0, t.jsx)(l.Z.Content, {
                    type: l.Z.Types.UNCLAIMED,
                    children: r.intl.string(r.t['7btfmJ'])
                }),
                (0, t.jsx)(l.Z.Footer, {
                    secondary: {
                        onClick: this.cancel,
                        label: r.intl.string(r.t.oEAioK)
                    },
                    primary: {
                        onClick: this.claimAccount,
                        label: r.intl.string(r.t.fiNVio)
                    }
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            c(this, 'cancel', () => {
                let { onClose: e } = this.props;
                null == e || e();
            }),
            c(this, 'claimAccount', () => {
                let { onClose: e } = this.props;
                null == e || e(),
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e('60827').then(n.bind(n, 324239));
                        return (s) => (0, t.jsx)(e, { ...s });
                    });
            });
    }
}
let d = o;
