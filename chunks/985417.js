"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(850992),
    a = n(807348),
    s = n(69217),
    o = n(527442);
function l(e) {
    let {
            descriptor: t,
            soundButtonProps: n,
            rowIndex: l,
            columnIndex: u,
            isUsingKeyboardNavigation: c,
            suppressPlaySound: d,
            getItemProps: _,
            onSelectItem: f,
            onItemMouseEnter: p,
            buttonOverlay: h,
            isNitroLocked: m,
            shouldShowUpsell: g,
            inExpressionPicker: E,
        } = e,
        A = i.LW.useStore((e) => e.inspectedExpressionPosition),
        I = `${l}-${u}`,
        T = c && A.rowIndex === l && A.columnIndex === u;
    switch (t.item.type) {
        case a.uq.SOUND:
            return (0, r.createElement)(s.Ay, {
                ..._(u),
                ...n,
                key: I,
                sound: t.item.sound,
                suppressPlaySound: d,
                focused: T,
                onMouseEnter: () => p(u),
                onSelectItem: (e) => f(t, e),
                enableSecondaryActions: !0,
                buttonOverlay: h,
                inNitroLockedSection: m,
                showLockForDisabledSound: g,
                isSoundmoji: !0 === E,
            });
        case a.uq.ADD_SOUND:
            return (0, r.createElement)(o.A, {
                ..._(u),
                key: I,
                guild: t.item.guild,
                focused: T,
                onSelectItem: () => f(t),
            });
    }
}
