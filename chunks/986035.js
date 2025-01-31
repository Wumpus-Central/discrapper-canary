e.d(i, { Z: () => m });
var n = e(200651),
    s = e(192379),
    a = e(120356),
    c = e.n(a),
    o = e(481060),
    r = e(600164),
    l = e(276326),
    d = e(232186);
class g extends s.PureComponent {
    render() {
        let { title: t, description: i, agreement: e, disagreement: s, onAgree: a, onDisagree: g, imageClassName: m } = this.props;
        return (0, n.jsxs)(r.Z, {
            className: l.gatedContent,
            justify: r.Z.Justify.CENTER,
            align: r.Z.Align.CENTER,
            direction: r.Z.Direction.VERTICAL,
            children: [
                (0, n.jsx)('div', { className: c()(l.image, m) }),
                (0, n.jsx)('div', {
                    className: c()(l.title, d.marginBottom8),
                    children: t
                }),
                (0, n.jsx)('div', {
                    className: c()(l.description, d.marginBottom20),
                    children: i
                }),
                (0, n.jsxs)(r.Z, {
                    justify: r.Z.Justify.CENTER,
                    align: r.Z.Align.CENTER,
                    grow: 0,
                    children: [
                        null != s
                            ? (0, n.jsx)(o.zxk, {
                                  className: l.action,
                                  size: o.PhG.LARGE,
                                  color: o.Ttl.PRIMARY,
                                  onClick: g,
                                  children: s
                              })
                            : null,
                        null != e
                            ? (0, n.jsx)(o.zxk, {
                                  className: l.action,
                                  color: o.zxk.Colors.RED,
                                  size: o.PhG.LARGE,
                                  onClick: a,
                                  children: e
                              })
                            : null
                    ]
                })
            ]
        });
    }
}
let m = g;
