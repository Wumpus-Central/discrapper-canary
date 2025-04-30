n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(219929),
    l = n(975060),
    c = n(559725),
    u = n(439041),
    d = n(388032),
    f = n(261959);
class _ extends i.PureComponent {
    componentDidMount() {
        null == this.props.adyenPaymentData && null != this.props.cashAppPayComponent && c.cp();
    }
    render() {
        var e, t;
        let { className: n, cashAppPayComponent: i } = this.props,
            a = this.props.adyenPaymentData,
            l = null != (t = null == a || null == (e = a.paymentMethod) ? void 0 : e.cashtag) ? t : '',
            c = null != a && '' !== l;
        return (0, r.jsxs)('div', {
            className: n,
            children: [
                (0, r.jsx)(s.ZP, {
                    type: s.ZP.Types.CASH_APP,
                    size: s.Uy.MEDIUM,
                    className: f.icon
                }),
                c
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.X6q, {
                                  variant: l.length < 25 ? 'heading-xl/bold' : 'heading-lg/bold',
                                  className: f.connectionInstructions,
                                  children: d.intl.format(d.t['ze/1yM'], { cashtag: l })
                              }),
                              (0, r.jsx)(o.Text, {
                                  variant: 'text-md/medium',
                                  className: f.connectionInstructions,
                                  children: d.intl.string(d.t.VPOx7O)
                              })
                          ]
                      })
                    : (0, r.jsx)(o.Text, {
                          variant: 'text-md/medium',
                          className: f.connectionInstructions,
                          children: null == i ? d.intl.string(d.t['CgVe//']) : d.intl.string(d.t['1MqcjI'])
                      })
            ]
        });
    }
}
let p = a.ZP.connectStores([u.Z, l.Z], () => ({
    cashAppPayComponent: u.Z.cashAppPayComponent,
    adyenPaymentData: l.Z.adyenPaymentData
}))(_);
