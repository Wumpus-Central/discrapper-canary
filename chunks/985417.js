n.d(t, { A: () => f });
var r = n(64700),
    i = n(850992),
    a = n(807348),
    s = n(69217),
    o = n(527442);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    let {
            descriptor: t,
            soundButtonProps: n,
            rowIndex: l,
            columnIndex: u,
            isUsingKeyboardNavigation: f,
            suppressPlaySound: p,
            getItemProps: _,
            onSelectItem: h,
            onItemMouseEnter: m,
            buttonOverlay: g,
            isNitroLocked: E,
            shouldShowUpsell: b,
            inExpressionPicker: y,
        } = e,
        O = i.LW.useStore((e) => e.inspectedExpressionPosition),
        A = "".concat(l, "-").concat(u),
        v = f && O.rowIndex === l && O.columnIndex === u;
    switch (t.item.type) {
        case a.uq.SOUND:
            return (0, r.createElement)(
                s.Ay,
                d(c({}, _(u), n), {
                    key: A,
                    sound: t.item.sound,
                    suppressPlaySound: p,
                    focused: v,
                    onMouseEnter: () => m(u),
                    onSelectItem: (e) => h(t, e),
                    enableSecondaryActions: !0,
                    buttonOverlay: g,
                    inNitroLockedSection: E,
                    showLockForDisabledSound: b,
                    isSoundmoji: !0 === y,
                }),
            );
        case a.uq.ADD_SOUND:
            return (0, r.createElement)(
                o.A,
                d(c({}, _(u)), {
                    key: A,
                    guild: t.item.guild,
                    focused: v,
                    onSelectItem: () => h(t),
                }),
            );
    }
}
