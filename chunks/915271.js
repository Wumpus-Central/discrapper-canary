n.d(t, { Z: () => p });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(873115),
    l = n(219929),
    u = n(618541),
    c = n(975060),
    d = n(388032),
    f = n(574194);
class _ extends r.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && o.by();
    }
    componentWillUnmount() {
        o.RS().then(() => o.ib());
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            r = null != e && '' !== e;
        return (0, i.jsxs)('div', {
            className: t,
            children: [
                (0, i.jsx)(l.ZP, {
                    type: l.ZP.Types.VENMO,
                    size: l.Uy.MEDIUM,
                    className: f.venmoIcon
                }),
                r
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(s.X6q, {
                                  variant: e.length < 25 ? 'heading-xl/bold' : 'heading-lg/bold',
                                  className: f.connectionInstructions,
                                  children: d.intl.format(d.t.DowIra, { venmoUsername: e })
                              }),
                              (0, i.jsx)(s.Text, {
                                  variant: 'text-md/medium',
                                  className: f.connectionInstructions,
                                  children: d.intl.string(d.t.kmEvnZ)
                              })
                          ]
                      })
                    : (0, i.jsx)(s.Text, {
                          variant: 'text-md/medium',
                          className: f.connectionInstructions,
                          children: null == n ? d.intl.string(d.t['2ouZDQ']) : d.intl.string(d.t.mIL6JS)
                      })
            ]
        });
    }
}
let p = a.ZP.connectStores([u.Z, c.Z], () => ({
    venmoUsername: c.Z.venmoUsername,
    venmoClient: u.Z.getVenmoClient()
}))(_);
