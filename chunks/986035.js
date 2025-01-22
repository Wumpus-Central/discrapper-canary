var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(600164),
    c = n(276326),
    d = n(232186);
class u extends l.PureComponent {
    render() {
        let { title: e, description: t, agreement: n, disagreement: l, onAgree: r, onDisagree: u, imageClassName: h } = this.props;
        return (0, i.jsxs)(o.Z, {
            className: c.gatedContent,
            justify: o.Z.Justify.CENTER,
            align: o.Z.Align.CENTER,
            direction: o.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)('div', { className: a()(c.image, h) }),
                (0, i.jsx)('div', {
                    className: a()(c.title, d.marginBottom8),
                    children: e
                }),
                (0, i.jsx)('div', {
                    className: a()(c.description, d.marginBottom20),
                    children: t
                }),
                (0, i.jsxs)(o.Z, {
                    justify: o.Z.Justify.CENTER,
                    align: o.Z.Align.CENTER,
                    grow: 0,
                    children: [
                        null != l
                            ? (0, i.jsx)(s.Button, {
                                  className: c.action,
                                  size: s.ButtonSizes.LARGE,
                                  color: s.ButtonColors.PRIMARY,
                                  onClick: u,
                                  children: l
                              })
                            : null,
                        null != n
                            ? (0, i.jsx)(s.Button, {
                                  className: c.action,
                                  color: s.Button.Colors.RED,
                                  size: s.ButtonSizes.LARGE,
                                  onClick: r,
                                  children: n
                              })
                            : null
                    ]
                })
            ]
        });
    }
}
t.Z = u;
