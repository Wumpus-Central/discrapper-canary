n.d(t, { Z: () => p });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(219929),
    l = n(975060),
    u = n(559725),
    c = n(439041),
    d = n(388032),
    f = n(749115);
class _ extends r.PureComponent {
    componentDidMount() {
        null == this.props.adyenPaymentData && null != this.props.cashAppPayComponent && u.cp();
    }
    render() {
        var e, t;
        let { className: n, cashAppPayComponent: r } = this.props,
            a = this.props.adyenPaymentData,
            l = null !== (t = null == a ? void 0 : null === (e = a.paymentMethod) || void 0 === e ? void 0 : e.cashtag) && void 0 !== t ? t : '',
            u = null != a && '' !== l;
        return (0, i.jsxs)('div', {
            className: n,
            children: [
                (0, i.jsx)(o.ZP, {
                    type: o.ZP.Types.CASH_APP,
                    size: o.Uy.MEDIUM,
                    className: f.icon
                }),
                u
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(s.X6q, {
                                  variant: l.length < 25 ? 'heading-xl/bold' : 'heading-lg/bold',
                                  className: f.connectionInstructions,
                                  children: d.intl.format(d.t['ze/1yM'], { cashtag: l })
                              }),
                              (0, i.jsx)(s.Text, {
                                  variant: 'text-md/medium',
                                  className: f.connectionInstructions,
                                  children: d.intl.string(d.t.VPOx7O)
                              })
                          ]
                      })
                    : (0, i.jsx)(s.Text, {
                          variant: 'text-md/medium',
                          className: f.connectionInstructions,
                          children: null == r ? d.intl.string(d.t['CgVe//']) : d.intl.string(d.t['1MqcjI'])
                      })
            ]
        });
    }
}
let p = a.ZP.connectStores([c.Z, l.Z], () => ({
    cashAppPayComponent: c.Z.cashAppPayComponent,
    adyenPaymentData: l.Z.adyenPaymentData
}))(_);
