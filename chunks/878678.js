n.d(t, {
    ConfirmModal: () => f,
    s: () => p
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(693789),
    l = n(481060),
    c = n(709692),
    u = n(115589);
function d(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            }));
    }
    return e;
}
function f(e) {
    let t,
        n,
        { header: a, children: d, confirmText: _, cancelText: f, className: p, onConfirm: h, onCancel: m, onClose: g, onCloseCallback: E, bodyClassName: b, transitionState: y, loading: O = !1, confirmButtonColor: v = s.zx.Colors.RED, focusCancel: I = !1, impression: T } = e,
        S = i.useRef(null);
    return (
        i.useEffect(() => {
            I ||
                setTimeout(() => {
                    var e;
                    return null == (e = S.current) ? void 0 : e.focus();
                }, 0);
        }, [I]),
        i.useLayoutEffect(() => () => (null == E ? void 0 : E())),
        null != f &&
            (t = (0, r.jsx)(s.zx, {
                type: 'button',
                look: s.zx.Looks.FILLED,
                color: s.zx.Colors.PRIMARY,
                className: u.cancelButton,
                size: s.zx.Sizes.MEDIUM,
                disabled: O,
                onClick: () => {
                    (null == m || m(), g());
                },
                autoFocus: I,
                children: f
            })),
        null != _ &&
            (n = (0, r.jsx)(s.zx, {
                buttonRef: S,
                type: 'submit',
                size: s.zx.Sizes.MEDIUM,
                color: v,
                submitting: O,
                onClick: async () => {
                    try {
                        (await (null == h ? void 0 : h()), g());
                    } catch (e) {
                        throw e;
                    }
                },
                autoFocus: !I,
                children: _
            })),
        (0, r.jsxs)(c.Y0, {
            className: p,
            transitionState: y,
            impression: T,
            parentComponent: 'ConfirmModal',
            children: [
                null != a
                    ? (0, r.jsx)(c.xB, {
                          separator: !1,
                          children: (0, r.jsx)(l.X6q, {
                              variant: 'heading-lg/semibold',
                              children: a
                          })
                      })
                    : null,
                (0, r.jsx)(c.hz, {
                    className: o()(u.content, b),
                    children: d
                }),
                (0, r.jsxs)(c.mz, {
                    children: [n, t]
                })
            ]
        })
    );
}
function p(e) {
    return (0, r.jsx)(c.u_, {
        onCloseRequest: e.dismissable ? e.onCancel : null,
        renderModal: (t) => (0, r.jsx)(f, _({}, t, e))
    });
}
