var n = i(200651),
    s = i(192379),
    o = i(120356),
    a = i.n(o),
    r = i(481060),
    c = i(600164),
    l = i(276326),
    d = i(232186);
class u extends s.PureComponent {
    render() {
        let { title: t, description: e, agreement: i, disagreement: s, onAgree: o, onDisagree: u, imageClassName: g } = this.props;
        return (0, n.jsxs)(c.Z, {
            className: l.gatedContent,
            justify: c.Z.Justify.CENTER,
            align: c.Z.Align.CENTER,
            direction: c.Z.Direction.VERTICAL,
            children: [
                (0, n.jsx)('div', { className: a()(l.image, g) }),
                (0, n.jsx)('div', {
                    className: a()(l.title, d.marginBottom8),
                    children: t
                }),
                (0, n.jsx)('div', {
                    className: a()(l.description, d.marginBottom20),
                    children: e
                }),
                (0, n.jsxs)(c.Z, {
                    justify: c.Z.Justify.CENTER,
                    align: c.Z.Align.CENTER,
                    grow: 0,
                    children: [
                        null != s
                            ? (0, n.jsx)(r.Button, {
                                  className: l.action,
                                  size: r.ButtonSizes.LARGE,
                                  color: r.ButtonColors.PRIMARY,
                                  onClick: u,
                                  children: s
                              })
                            : null,
                        null != i
                            ? (0, n.jsx)(r.Button, {
                                  className: l.action,
                                  color: r.Button.Colors.RED,
                                  size: r.ButtonSizes.LARGE,
                                  onClick: o,
                                  children: i
                              })
                            : null
                    ]
                })
            ]
        });
    }
}
e.Z = u;
