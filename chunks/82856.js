n.d(t, {
    Pe: () => b,
    S6: () => s.S6,
    lJ: () => T,
    vp: () => O
});
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(751648),
    l = n(790542),
    c = n(479766),
    u = n(970815),
    d = n(622562),
    f = n(981631);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let v = 'balance-widget-pill-overlay',
    b = () => (0, a.nfh)(v),
    y = () => (0, a.Mr3)(v),
    O = (e) => {
        let { hideImmediately: t } = null != e ? e : { hideImmediately: !1 };
        (0, s.vp)(t), y();
    },
    S = {
        modalKey: v,
        onCloseCallback: s.vp,
        onCloseRequest: async () => {
            await (0, s.vp)(), (0, a.pTH)();
        }
    };
function I(e) {
    (0, a.ZDy)(async () => (t) => (0, r.jsx)(A, p({ onClick: f.dG4 }, e, t)), S);
}
function T(e) {
    let { shouldOpen: t } = (0, o.cj)([c.Z], () => ({ shouldOpen: c.Z.balanceWidgetPillIsOverlaid }));
    return (
        (0, i.useEffect)(() => {
            let n = b();
            t && !n ? I(e) : !t && n && y();
        }, [t, e]),
        { shouldOpen: t }
    );
}
let N = {
    getOffsetsRelativeToElement: () => ({
        top: 0,
        right: 0
    }),
    minimumOffsets: { right: 12 },
    fallbackAbsoluteOffsets: {
        top: 84,
        right: 32
    }
};
function A(e) {
    var { backgroundElementRef: t, onClick: n, onClose: i } = e;
    m(e, ['backgroundElementRef', 'onClick', 'onClose']);
    let { balance: a } = (0, l.A)(),
        _ = async () => {
            await (0, s.vp)(), await i();
        },
        { hideImmediately: h } = (0, o.cj)([c.Z], () => ({ hideImmediately: c.Z.hidePillOverlayImmediately }));
    return (0, r.jsx)(
        d.E,
        g(
            p(
                {
                    backgroundElementRef: t,
                    onGetBoundingRect: f.dG4
                },
                N
            ),
            {
                children: h
                    ? null
                    : (0, r.jsx)(u.A4, {
                          onClick: async (e) => {
                              void 0 !== n && n(e), await _();
                          },
                          balance: a,
                          balanceWidgetMode: u.b6.DEFAULT
                      })
            }
        )
    );
}
