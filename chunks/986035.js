n.d(t, { Z: () => p }), n(266796);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(600164),
    c = n(460729),
    u = n(455812);
class d extends i.PureComponent {
    render() {
        let { title: e, description: t, agreement: n, disagreement: i, onAgree: l, onDisagree: d, imageClassName: p } = this.props;
        return (0, r.jsxs)(s.Z, {
            className: c.gatedContent,
            justify: s.Z.Justify.CENTER,
            align: s.Z.Align.CENTER,
            direction: s.Z.Direction.VERTICAL,
            children: [
                (0, r.jsx)('div', { className: o()(c.image, p) }),
                (0, r.jsx)('div', {
                    className: o()(c.title, u.marginBottom8),
                    children: e
                }),
                (0, r.jsx)('div', {
                    className: o()(c.description, u.marginBottom20),
                    children: t
                }),
                (0, r.jsxs)(s.Z, {
                    justify: s.Z.Justify.CENTER,
                    align: s.Z.Align.CENTER,
                    grow: 0,
                    children: [
                        null != i
                            ? (0, r.jsx)(a.zxk, {
                                  className: c.action,
                                  size: a.PhG.LARGE,
                                  color: a.Ttl.PRIMARY,
                                  onClick: d,
                                  children: i
                              })
                            : null,
                        null != n
                            ? (0, r.jsx)(a.zxk, {
                                  className: c.action,
                                  color: a.zxk.Colors.RED,
                                  size: a.PhG.LARGE,
                                  onClick: l,
                                  children: n
                              })
                            : null
                    ]
                })
            ]
        });
    }
}
let p = d;
