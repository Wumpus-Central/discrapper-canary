r.r(n),
    r.d(n, {
        ConfirmModal: function () {
            return p;
        },
        DeclarativeConfirmModal: function () {
            return h;
        }
    });
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(693789),
    u = r(481060),
    c = r(540059),
    d = r(709692),
    f = r(140777);
function p(e) {
    let n,
        r,
        { header: o, children: p, confirmText: h, cancelText: _, className: m, onConfirm: g, onCancel: E, onClose: v, onCloseCallback: y, bodyClassName: b, transitionState: I, loading: T = !1, confirmButtonColor: S = l.zx.Colors.RED, focusCancel: A = !1, impression: C } = e,
        N = a.useRef(null),
        R = (0, c.Q3)('ConfirmModal');
    return (
        a.useEffect(() => {
            !A &&
                setTimeout(() => {
                    var e;
                    return null === (e = N.current) || void 0 === e ? void 0 : e.focus();
                }, 0);
        }, [A]),
        a.useLayoutEffect(() => () => (null == y ? void 0 : y())),
        null != _ &&
            (n = (0, i.jsx)(l.zx, {
                type: 'button',
                look: R ? l.zx.Looks.FILLED : l.zx.Looks.LINK,
                color: l.zx.Colors.PRIMARY,
                className: f.cancelButton,
                size: l.zx.Sizes.MEDIUM,
                disabled: T,
                onClick: () => {
                    null == E || E(), v();
                },
                autoFocus: A,
                children: _
            })),
        null != h &&
            (r = (0, i.jsx)(l.zx, {
                buttonRef: N,
                type: 'submit',
                size: l.zx.Sizes.MEDIUM,
                color: S,
                submitting: T,
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
            transitionState: I,
            impression: C,
            children: [
                null != o
                    ? (0, i.jsx)(d.xB, {
                          separator: !1,
                          children: (0, i.jsx)(u.Heading, {
                              variant: 'heading-lg/semibold',
                              children: o
                          })
                      })
                    : null,
                (0, i.jsx)(d.hz, {
                    className: s()(f.content, b),
                    children: p
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
            (0, i.jsx)(p, {
                ...n,
                ...e
            })
    });
}
