n.d(t, {
    ConfirmModal: () => _,
    s: () => p,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(693789),
    l = n(481060),
    c = n(709692),
    u = n(500880);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e) {
    let t,
        n,
        {
            header: a,
            children: d,
            confirmText: f,
            cancelText: _,
            className: p,
            onConfirm: h,
            onCancel: m,
            onClose: g,
            onCloseCallback: E,
            bodyClassName: b,
            transitionState: y,
            loading: O = !1,
            confirmButtonColor: v = s.Button.Colors.RED,
            focusCancel: I = !1,
            impression: T,
        } = e,
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
        null != _ &&
            (t = (0, r.jsx)(s.Button, {
                "data-migration-pending": !0,
                type: "button",
                look: s.Button.Looks.FILLED,
                color: s.Button.Colors.PRIMARY,
                className: u.cancelButton,
                size: s.Button.Sizes.MEDIUM,
                disabled: O,
                onClick: () => {
                    null == m || m(), g();
                },
                autoFocus: I,
                children: _,
            })),
        null != f &&
            (n = (0, r.jsx)(s.Button, {
                "data-migration-pending": !0,
                buttonRef: S,
                type: "submit",
                size: s.Button.Sizes.MEDIUM,
                color: v,
                submitting: O,
                onClick: async () => {
                    try {
                        await (null == h ? void 0 : h()), g();
                    } catch (e) {
                        throw e;
                    }
                },
                autoFocus: !I,
                children: f,
            })),
        (0, r.jsxs)(c.Y0, {
            className: p,
            transitionState: y,
            impression: T,
            parentComponent: "ConfirmModal",
            children: [
                null != a
                    ? (0, r.jsx)(c.xB, {
                          "data-migration-pending": !0,
                          separator: !1,
                          children: (0, r.jsx)(l.Heading, {
                              variant: "heading-lg/semibold",
                              children: a,
                          }),
                      })
                    : null,
                (0, r.jsx)(c.hz, {
                    "data-migration-pending": !0,
                    className: o()(u.content, b),
                    children: d,
                }),
                (0, r.jsxs)(c.mz, {
                    "data-migration-pending": !0,
                    children: [n, t],
                }),
            ],
        })
    );
}
function p(e) {
    return (0, r.jsx)(c.u_, {
        onCloseRequest: e.dismissable ? e.onCancel : null,
        renderModal: (t) => (0, r.jsx)(_, f({}, t, e)),
    });
}
