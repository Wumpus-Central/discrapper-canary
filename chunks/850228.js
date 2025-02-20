n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(219929),
    l = n(975060),
    c = n(559725),
    u = n(439041),
    d = n(388032),
    f = n(688422);
class p extends i.PureComponent {
    componentDidMount() {
        null == this.props.adyenPaymentData && null != this.props.cashAppPayComponent && c.cp();
    }
    render() {
        var e, t;
        let { className: n, cashAppPayComponent: i } = this.props,
            o = this.props.adyenPaymentData,
            l = null !== (t = null == o ? void 0 : null === (e = o.paymentMethod) || void 0 === e ? void 0 : e.cashtag) && void 0 !== t ? t : '',
            c = null != o && '' !== l;
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
                              (0, r.jsx)(a.X6q, {
                                  variant: l.length < 25 ? 'heading-xl/bold' : 'heading-lg/bold',
                                  className: f.connectionInstructions,
                                  children: d.NW.format(d.t['ze/1yM'], { cashtag: l })
                              }),
                              (0, r.jsx)(a.Text, {
                                  variant: 'text-md/medium',
                                  className: f.connectionInstructions,
                                  children: d.NW.string(d.t.VPOx7O)
                              })
                          ]
                      })
                    : (0, r.jsx)(a.Text, {
                          variant: 'text-md/medium',
                          className: f.connectionInstructions,
                          children: null == i ? d.NW.string(d.t['CgVe//']) : d.NW.string(d.t['1MqcjI'])
                      })
            ]
        });
    }
}
let _ = o.ZP.connectStores([u.Z, l.Z], () => ({
    cashAppPayComponent: u.Z.cashAppPayComponent,
    adyenPaymentData: l.Z.adyenPaymentData
}))(p);
