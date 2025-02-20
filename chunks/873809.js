n.d(s, { default: () => h }), n(47120);
var t = n(200651),
    i = n(192379),
    r = n(481060),
    a = n(388032),
    l = n(416515);
function o(e, s, n) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = n),
        e
    );
}
class c extends i.PureComponent {
    render() {
        let { transitionState: e, header: s, body: i, confirmText: o } = this.props;
        return (0, t.jsxs)(r.Y0X, {
            transitionState: e,
            'aria-label': s,
            children: [
                (0, t.jsxs)(r.hzk, {
                    className: l.content,
                    children: [
                        (0, t.jsx)('img', {
                            src: n(568533),
                            alt: s
                        }),
                        (0, t.jsx)(r.X6q, {
                            variant: 'heading-xl/semibold',
                            className: l.header,
                            children: s
                        }),
                        (0, t.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            children: i
                        })
                    ]
                }),
                (0, t.jsxs)(r.mzw, {
                    className: l.footer,
                    children: [
                        (0, t.jsx)(r.zxk, {
                            size: r.zxk.Sizes.SMALL,
                            onClick: this.handleConfirm,
                            children: o
                        }),
                        (0, t.jsx)(r.zxk, {
                            size: r.zxk.Sizes.SMALL,
                            look: r.zxk.Looks.LINK,
                            color: r.zxk.Colors.PRIMARY,
                            onClick: this.handleDismiss,
                            children: a.NW.string(a.t.cpT0Cg)
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            o(this, 'handleConfirm', () => {
                let { onConfirm: e, onClose: s } = this.props;
                null == s || s(), null == e || e();
            }),
            o(this, 'handleDismiss', () => {
                let { onDismiss: e, onClose: s } = this.props;
                null == s || s(), null == e || e();
            });
    }
}
let h = c;
