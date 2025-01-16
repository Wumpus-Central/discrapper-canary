r.r(n),
    r.d(n, {
        ConfirmModal: function () {
            return _;
        },
        DeclarativeConfirmModal: function () {
            return h;
        }
    });
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(693789),
    u = r(481060),
    c = r(540059),
    d = r(709692),
    f = r(140777);
function _(e) {
    let n,
        r,
        { header: s, children: _, confirmText: h, cancelText: p, className: m, onConfirm: g, onCancel: E, onClose: v, onCloseCallback: I, bodyClassName: T, transitionState: b, loading: y = !1, confirmButtonColor: S = l.zx.Colors.RED, focusCancel: A = !1, impression: N } = e,
        C = a.useRef(null),
        R = (0, c.Q3)('ConfirmModal');
    return (
        a.useEffect(() => {
            !A &&
                setTimeout(() => {
                    var e;
                    return null === (e = C.current) || void 0 === e ? void 0 : e.focus();
                }, 0);
        }, [A]),
        a.useLayoutEffect(() => () => (null == I ? void 0 : I())),
        null != p &&
            (n = (0, i.jsx)(l.zx, {
                type: 'button',
                look: R ? l.zx.Looks.FILLED : l.zx.Looks.LINK,
                color: l.zx.Colors.PRIMARY,
                className: f.cancelButton,
                size: l.zx.Sizes.MEDIUM,
                disabled: y,
                onClick: () => {
                    null == E || E(), v();
                },
                autoFocus: A,
                children: p
            })),
        null != h &&
            (r = (0, i.jsx)(l.zx, {
                buttonRef: C,
                type: 'submit',
                size: l.zx.Sizes.MEDIUM,
                color: S,
                submitting: y,
                onClick: async () => {
                    try {
                        await (null == g ? void 0 : g()), v();
                    } catch (e) {
                        throw e;
                    }
                },
                autoFocus: !A,
                children: h
            })),
        (0, i.jsxs)(d.Y0, {
            className: m,
            transitionState: b,
            impression: N,
            children: [
                null != s
                    ? (0, i.jsx)(d.xB, {
                          separator: !1,
                          children: (0, i.jsx)(u.Heading, {
                              variant: 'heading-lg/semibold',
                              children: s
                          })
                      })
                    : null,
                (0, i.jsx)(d.hz, {
                    className: o()(f.content, T),
                    children: _
                }),
                (0, i.jsxs)(d.mz, {
                    children: [r, n]
                })
            ]
        })
    );
}
function h(e) {
    return (0, i.jsx)(d.u_, {
        onCloseRequest: e.dismissable ? e.onCancel : null,
        renderModal: (n) =>
            (0, i.jsx)(_, {
                ...n,
                ...e
            })
    });
}
