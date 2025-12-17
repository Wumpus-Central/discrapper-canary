n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(873115),
    l = n(219929),
    c = n(618541),
    u = n(975060),
    d = n(388032),
    f = n(867182);
class p extends i.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && s.by();
    }
    componentWillUnmount() {
        s.RS().then(() => s.ib());
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            i = null != e && "" !== e;
        return (0, r.jsxs)("div", {
            className: t,
            children: [
                (0, r.jsx)(l.ZP, {
                    type: l.ZP.Types.VENMO,
                    size: l.Uy.MEDIUM,
                    className: f.venmoIcon,
                }),
                i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.Heading, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: f.connectionInstructions,
                                  children: d.intl.format(d.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, r.jsx)(o.Text, {
                                  variant: "text-md/medium",
                                  className: f.connectionInstructions,
                                  children: d.intl.string(d.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, r.jsx)(o.Text, {
                          variant: "text-md/medium",
                          className: f.connectionInstructions,
                          children: null == n ? d.intl.string(d.t["2ouZDU"]) : d.intl.string(d.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let _ = a.ZP.connectStores([c.Z, u.Z], () => ({
    venmoUsername: u.Z.venmoUsername,
    venmoClient: c.Z.getVenmoClient(),
}))(p);
