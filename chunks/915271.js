var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(481060),
    l = r(873115),
    u = r(219929),
    c = r(618541),
    d = r(975060),
    f = r(388032),
    p = r(574194);
class h extends a.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && l.by();
    }
    componentWillUnmount() {
        l.RS().then(() => l.ib());
    }
    render() {
        let { venmoUsername: e, className: n, venmoClient: r } = this.props,
            a = null != e && '' !== e;
        return (0, i.jsxs)('div', {
            className: n,
            children: [
                (0, i.jsx)(u.ZP, {
                    type: u.ZP.Types.VENMO,
                    size: u.Uy.MEDIUM,
                    className: p.venmoIcon
                }),
                a
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(s.Heading, {
                                  variant: e.length < 25 ? 'heading-xl/bold' : 'heading-lg/bold',
                                  className: p.connectionInstructions,
                                  children: f.intl.format(f.t.DowIra, { venmoUsername: e })
                              }),
                              (0, i.jsx)(s.Text, {
                                  variant: 'text-md/medium',
                                  className: p.connectionInstructions,
                                  children: f.intl.string(f.t.kmEvnZ)
                              })
                          ]
                      })
                    : (0, i.jsx)(s.Text, {
                          variant: 'text-md/medium',
                          className: p.connectionInstructions,
                          children: null == r ? f.intl.string(f.t['2ouZDQ']) : f.intl.string(f.t.mIL6JS)
                      })
            ]
        });
    }
}
n.Z = o.ZP.connectStores([c.Z, d.Z], () => ({
    venmoUsername: d.Z.venmoUsername,
    venmoClient: c.Z.getVenmoClient()
}))(h);
