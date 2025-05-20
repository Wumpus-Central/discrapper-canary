n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(873115),
    l = n(219929),
    c = n(618541),
    u = n(975060),
    d = n(388032),
    f = n(422743);
class _ extends i.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && s.by();
    }
    componentWillUnmount() {
        s.RS().then(() => s.ib());
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            i = null != e && '' !== e;
        return (0, r.jsxs)('div', {
            className: t,
            children: [
                (0, r.jsx)(l.ZP, {
                    type: l.ZP.Types.VENMO,
                    size: l.Uy.MEDIUM,
                    className: f.venmoIcon
                }),
                i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.X6q, {
                                  variant: e.length < 25 ? 'heading-xl/bold' : 'heading-lg/bold',
                                  className: f.connectionInstructions,
                                  children: d.intl.format(d.t.DowIra, { venmoUsername: e })
                              }),
                              (0, r.jsx)(o.Text, {
                                  variant: 'text-md/medium',
                                  className: f.connectionInstructions,
                                  children: d.intl.string(d.t.kmEvnZ)
                              })
                          ]
                      })
                    : (0, r.jsx)(o.Text, {
                          variant: 'text-md/medium',
                          className: f.connectionInstructions,
                          children: null == n ? d.intl.string(d.t['2ouZDQ']) : d.intl.string(d.t.mIL6JS)
                      })
            ]
        });
    }
}
let p = a.ZP.connectStores([c.Z, u.Z], () => ({
    venmoUsername: u.Z.venmoUsername,
    venmoClient: c.Z.getVenmoClient()
}))(_);
