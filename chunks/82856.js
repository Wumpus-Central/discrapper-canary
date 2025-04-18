n.d(t, {
    Pe: () => v,
    S6: () => l.S6,
    lJ: () => N,
    vp: () => I
});
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(481060),
    s = n(819640),
    l = n(751648),
    c = n(790542),
    u = n(479766),
    d = n(970815),
    f = n(622562),
    _ = n(981631);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let y = 'balance-widget-pill-overlay',
    v = () => (0, o.nfh)(y),
    O = () => (0, o.Mr3)(y),
    I = (e) => {
        let { hideImmediately: t } = null != e ? e : { hideImmediately: !1 };
        (0, l.vp)(t), O();
    },
    S = {
        modalKey: y,
        onCloseCallback: l.vp,
        onCloseRequest: async () => {
            await (0, l.vp)(), (0, o.pTH)();
        }
    };
function T(e) {
    (0, o.ZDy)(async () => (t) => (0, r.jsx)(C, h({ onClick: _.dG4 }, e, t)), S);
}
function N(e) {
    let { shouldOpen: t } = (0, a.cj)([u.Z], () => ({ shouldOpen: u.Z.balanceWidgetPillIsOverlaid }));
    return (
        (0, i.useEffect)(() => {
            let n = v();
            t && !n ? T(e) : !t && n && O();
        }, [t, e]),
        { shouldOpen: t }
    );
}
let A = {
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
function C(e) {
    var { backgroundElementRef: t, onClick: n, onClose: i } = e;
    E(e, ['backgroundElementRef', 'onClick', 'onClose']);
    let { balance: o } = (0, c.A)(),
        p = async () => {
            await (0, l.vp)(), await i();
        },
        { hideImmediately: m } = (0, a.cj)([u.Z], () => ({ hideImmediately: u.Z.hidePillOverlayImmediately })),
        { hasLayers: b, lastLayerIsNotShop: y } = (0, a.cj)([s.Z], () => {
            let e = s.Z.getLayers(),
                t = e.length > 0 && e[e.length - 1] !== _.S9g.COLLECTIBLES_SHOP;
            return {
                hasLayers: s.Z.hasLayers(),
                lastLayerIsNotShop: t
            };
        }),
        v = m || (b && y);
    return (0, r.jsx)(
        f.E9,
        g(
            h(
                {
                    backgroundElementRef: t,
                    onGetBoundingRect: _.dG4
                },
                A
            ),
            {
                children: v
                    ? null
                    : (0, r.jsx)(d.A4, {
                          onClick: async (e) => {
                              void 0 !== n && n(e), await p();
                          },
                          balance: o,
                          balanceWidgetMode: d.b6.DEFAULT
                      })
            }
        )
    );
}
