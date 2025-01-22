var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(481060),
    l = r(219929),
    u = r(975060),
    c = r(559725),
    d = r(439041),
    f = r(388032),
    p = r(771195);
class h extends a.PureComponent {
    componentDidMount() {
        null == this.props.adyenPaymentData && null != this.props.cashAppPayComponent && c.cp();
    }
    render() {
        var e, n;
        let { className: r, cashAppPayComponent: a } = this.props,
            o = this.props.adyenPaymentData,
            u = null !== (n = null == o ? void 0 : null === (e = o.paymentMethod) || void 0 === e ? void 0 : e.cashtag) && void 0 !== n ? n : '',
            c = null != o && '' !== u;
        return (0, i.jsxs)('div', {
            className: r,
            children: [
                (0, i.jsx)(l.ZP, {
                    type: l.ZP.Types.CASH_APP,
                    size: l.Uy.MEDIUM,
                    className: p.icon
                }),
                c
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(s.Heading, {
                                  variant: u.length < 25 ? 'heading-xl/bold' : 'heading-lg/bold',
                                  className: p.connectionInstructions,
                                  children: f.intl.format(f.t['ze/1yM'], { cashtag: u })
                              }),
                              (0, i.jsx)(s.Text, {
                                  variant: 'text-md/medium',
                                  className: p.connectionInstructions,
                                  children: f.intl.string(f.t.VPOx7O)
                              })
                          ]
                      })
                    : (0, i.jsx)(s.Text, {
                          variant: 'text-md/medium',
                          className: p.connectionInstructions,
                          children: null == a ? f.intl.string(f.t['CgVe//']) : f.intl.string(f.t['1MqcjI'])
                      })
            ]
        });
    }
}
n.Z = o.ZP.connectStores([d.Z, u.Z], () => ({
    cashAppPayComponent: d.Z.cashAppPayComponent,
    adyenPaymentData: u.Z.adyenPaymentData
}))(h);
