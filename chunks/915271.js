var a = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    i = n(873115),
    o = n(219929),
    c = n(618541),
    u = n(975060),
    d = n(388032),
    p = n(574194);
class m extends r.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && i.by();
    }
    componentWillUnmount() {
        i.RS().then(() => i.ib());
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            r = null != e && '' !== e;
        return (0, a.jsxs)('div', {
            className: t,
            children: [
                (0, a.jsx)(o.ZP, {
                    type: o.ZP.Types.VENMO,
                    size: o.Uy.MEDIUM,
                    className: p.venmoIcon
                }),
                r
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(s.Heading, {
                                  variant: e.length < 25 ? 'heading-xl/bold' : 'heading-lg/bold',
                                  className: p.connectionInstructions,
                                  children: d.intl.format(d.t.DowIra, { venmoUsername: e })
                              }),
                              (0, a.jsx)(s.Text, {
                                  variant: 'text-md/medium',
                                  className: p.connectionInstructions,
                                  children: d.intl.string(d.t.kmEvnZ)
                              })
                          ]
                      })
                    : (0, a.jsx)(s.Text, {
                          variant: 'text-md/medium',
                          className: p.connectionInstructions,
                          children: null == n ? d.intl.string(d.t['2ouZDQ']) : d.intl.string(d.t.mIL6JS)
                      })
            ]
        });
    }
}
t.Z = l.ZP.connectStores([c.Z, u.Z], () => ({
    venmoUsername: u.Z.venmoUsername,
    venmoClient: c.Z.getVenmoClient()
}))(m);
