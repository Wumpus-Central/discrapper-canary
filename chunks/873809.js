(n.d(t, { default: () => d }), n(388685));
var s = n(255367),
    r = n(73800),
    i = n(481060),
    a = n(388032),
    l = n(78349);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class c extends r.PureComponent {
    render() {
        let { transitionState: e, header: t, body: r, confirmText: o } = this.props;
        return (0, s.jsxs)(i.Y0X, {
            transitionState: e,
            'aria-label': t,
            parentComponent: 'VideoDevicesWarningModal',
            children: [
                (0, s.jsxs)(i.hzk, {
                    className: l.content,
                    children: [
                        (0, s.jsx)('img', {
                            src: n(568533),
                            alt: t
                        }),
                        (0, s.jsx)(i.X6q, {
                            variant: 'heading-xl/semibold',
                            className: l.header,
                            children: t
                        }),
                        (0, s.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            children: r
                        })
                    ]
                }),
                (0, s.jsx)(i.mzw, {
                    className: l.footer,
                    children: (0, s.jsxs)(i.hE2, {
                        direction: 'horizontal-reverse',
                        children: [
                            (0, s.jsx)(i.zxk, {
                                variant: 'primary',
                                size: 'sm',
                                text: o,
                                onClick: this.handleConfirm
                            }),
                            (0, s.jsx)(i.zxk, {
                                variant: 'secondary',
                                size: 'sm',
                                text: a.intl.string(a.t.cpT0Cg),
                                onClick: this.handleDismiss
                            })
                        ]
                    })
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            o(this, 'handleConfirm', () => {
                let { onConfirm: e, onClose: t } = this.props;
                (null == t || t(), null == e || e());
            }),
            o(this, 'handleDismiss', () => {
                let { onDismiss: e, onClose: t } = this.props;
                (null == t || t(), null == e || e());
            }));
    }
}
let d = c;
