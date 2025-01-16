var a = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    i = n(219929),
    o = n(975060),
    c = n(559725),
    u = n(439041),
    d = n(388032),
    p = n(771195);
class m extends r.PureComponent {
    componentDidMount() {
        null == this.props.adyenPaymentData && null != this.props.cashAppPayComponent && c.cp();
    }
    render() {
        var e, t;
        let { className: n, cashAppPayComponent: r } = this.props,
            l = this.props.adyenPaymentData,
            o = null !== (t = null == l ? void 0 : null === (e = l.paymentMethod) || void 0 === e ? void 0 : e.cashtag) && void 0 !== t ? t : '',
            c = null != l && '' !== o;
        return (0, a.jsxs)('div', {
            className: n,
            children: [
                (0, a.jsx)(i.ZP, {
                    type: i.ZP.Types.CASH_APP,
                    size: i.Uy.MEDIUM,
                    className: p.icon
                }),
                c
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(s.Heading, {
                                  variant: o.length < 25 ? 'heading-xl/bold' : 'heading-lg/bold',
                                  className: p.connectionInstructions,
                                  children: d.intl.format(d.t['ze/1yM'], { cashtag: o })
                              }),
                              (0, a.jsx)(s.Text, {
                                  variant: 'text-md/medium',
                                  className: p.connectionInstructions,
                                  children: d.intl.string(d.t.VPOx7O)
                              })
                          ]
                      })
                    : (0, a.jsx)(s.Text, {
                          variant: 'text-md/medium',
                          className: p.connectionInstructions,
                          children: null == r ? d.intl.string(d.t['CgVe//']) : d.intl.string(d.t['1MqcjI'])
                      })
            ]
        });
    }
}
t.Z = l.ZP.connectStores([u.Z, o.Z], () => ({
    cashAppPayComponent: u.Z.cashAppPayComponent,
    adyenPaymentData: o.Z.adyenPaymentData
}))(m);
