n.d(t, {
    ConfirmModal: () => p,
    s: () => h
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(693789),
    l = n(481060),
    c = n(540059),
    u = n(709692),
    d = n(115589);
function f(e, t, n) {
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e) {
    let t,
        n,
        { header: o, children: f, confirmText: _, cancelText: p, className: h, onConfirm: m, onCancel: g, onClose: E, onCloseCallback: b, bodyClassName: y, transitionState: v, loading: O = !1, confirmButtonColor: I = s.zx.Colors.RED, focusCancel: S = !1, impression: T } = e,
        N = i.useRef(null),
        A = (0, c.Q3)('ConfirmModal');
    return (
        i.useEffect(() => {
            S ||
                setTimeout(() => {
                    var e;
                    return null == (e = N.current) ? void 0 : e.focus();
                }, 0);
        }, [S]),
        i.useLayoutEffect(() => () => (null == b ? void 0 : b())),
        null != p &&
            (t = (0, r.jsx)(s.zx, {
                type: 'button',
                look: A ? s.zx.Looks.FILLED : s.zx.Looks.LINK,
                color: s.zx.Colors.PRIMARY,
                className: d.cancelButton,
                size: s.zx.Sizes.MEDIUM,
                disabled: O,
                onClick: () => {
                    null == g || g(), E();
                },
                autoFocus: S,
                children: p
            })),
        null != _ &&
            (n = (0, r.jsx)(s.zx, {
                buttonRef: N,
                type: 'submit',
                size: s.zx.Sizes.MEDIUM,
                color: I,
                submitting: O,
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
        (0, r.jsxs)(u.Y0, {
            className: h,
            transitionState: v,
            impression: T,
            children: [
                null != o
                    ? (0, r.jsx)(u.xB, {
                          separator: !1,
                          children: (0, r.jsx)(l.X6q, {
                              variant: 'heading-lg/semibold',
                              children: o
                          })
                      })
                    : null,
                (0, r.jsx)(u.hz, {
                    className: a()(d.content, y),
                    children: f
                }),
                (0, r.jsxs)(u.mz, {
                    children: [n, t]
                })
            ]
        })
    );
}
function h(e) {
    return (0, r.jsx)(u.u_, {
        onCloseRequest: e.dismissable ? e.onCancel : null,
        renderModal: (t) => (0, r.jsx)(p, _({}, t, e))
    });
}
