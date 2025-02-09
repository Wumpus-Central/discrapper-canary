n.d(t, {
    ConfirmModal: () => f,
    s: () => _
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(693789),
    l = n(481060),
    u = n(540059),
    c = n(709692),
    d = n(688669);
function f(e) {
    let t,
        n,
        { header: a, children: f, confirmText: _, cancelText: p, className: h, onConfirm: m, onCancel: g, onClose: E, onCloseCallback: v, bodyClassName: y, transitionState: I, loading: T = !1, confirmButtonColor: b = o.zx.Colors.RED, focusCancel: S = !1, impression: A } = e,
        N = r.useRef(null),
        C = (0, u.Q3)('ConfirmModal');
    return (
        r.useEffect(() => {
            S ||
                setTimeout(() => {
                    var e;
                    return null === (e = N.current) || void 0 === e ? void 0 : e.focus();
                }, 0);
        }, [S]),
        r.useLayoutEffect(() => () => (null == v ? void 0 : v())),
        null != p &&
            (t = (0, i.jsx)(o.zx, {
                type: 'button',
                look: C ? o.zx.Looks.FILLED : o.zx.Looks.LINK,
                color: o.zx.Colors.PRIMARY,
                className: d.cancelButton,
                size: o.zx.Sizes.MEDIUM,
                disabled: T,
                onClick: () => {
                    null == g || g(), E();
                },
                autoFocus: S,
                children: p
            })),
        null != _ &&
            (n = (0, i.jsx)(o.zx, {
                buttonRef: N,
                type: 'submit',
                size: o.zx.Sizes.MEDIUM,
                color: b,
                submitting: T,
                onClick: async () => {
                    try {
                        await (null == m ? void 0 : m()), E();
                    } catch (e) {
                        throw e;
                    }
                },
                autoFocus: !S,
                children: _
            })),
        (0, i.jsxs)(c.Y0, {
            className: h,
            transitionState: I,
            impression: A,
            children: [
                null != a
                    ? (0, i.jsx)(c.xB, {
                          separator: !1,
                          children: (0, i.jsx)(l.X6q, {
                              variant: 'heading-lg/semibold',
                              children: a
                          })
                      })
                    : null,
                (0, i.jsx)(c.hz, {
                    className: s()(d.content, y),
                    children: f
                }),
                (0, i.jsxs)(c.mz, {
                    children: [n, t]
                })
            ]
        })
    );
}
function _(e) {
    return (0, i.jsx)(c.u_, {
        onCloseRequest: e.dismissable ? e.onCancel : null,
        renderModal: (t) =>
            (0, i.jsx)(f, {
                ...t,
                ...e
            })
    });
}
