n.d(t, { o: () => h });
var r = n(255367),
    i = n(73800),
    a = n(493773),
    o = n(790542),
    s = n(970815),
    l = n(622562),
    c = n(981631);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = {
    getOffsetsRelativeToElement: () => ({
        top: 0,
        right: 0
    }),
    fallbackAbsoluteOffsets: {
        top: 84,
        right: 32
    },
    minimumOffsets: { right: 12 }
};
function h(e) {
    let { onClick: t, onClose: n } = e,
        { balance: u } = (0, o.A)(),
        f = async () => {
            await n();
        },
        h = (0, i.useMemo)(() => {
            var e;
            return null != (e = document.getElementById(s.th.SHOP_FULLSCREEN)) ? e : document.getElementById(s.th.SHOP);
        }, []);
    (0, a.ZP)(() => {
        setTimeout(() => {
            null != h && h.style.setProperty('visibility', 'hidden');
        }, 500);
    }),
        (0, i.useEffect)(
            () => () => {
                null != h && h.style.setProperty('visibility', 'visible');
            },
            [h]
        );
    let m = (0, i.useRef)(h);
    if (null != h)
        return (0, r.jsx)(
            l.E9,
            _(
                d(
                    {
                        backgroundElementRef: m,
                        onGetBoundingRect: c.dG4
                    },
                    p
                ),
                {
                    children: (0, r.jsx)(s.A4, {
                        onClick: async (e) => {
                            void 0 !== t && t(e), await f();
                        },
                        balance: u,
                        balanceWidgetMode: s.b6.DEFAULT,
                        isInModalOverlay: !0
                    })
                }
            )
        );
}
