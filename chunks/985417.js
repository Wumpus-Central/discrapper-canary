"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(850992),
    s = n(807348),
    a = n(69217),
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
            isNitroLocked: E,
            showLockForDisabledSound: m,
            inExpressionPicker: g,
        } = e,
        A = i.LW.useStore((e) => e.inspectedExpressionPosition),
        I = `${l}-${u}`,
        T = c && A.rowIndex === l && A.columnIndex === u;
    switch (t.item.type) {
        case s.uq.SOUND:
            return (0, r.createElement)(a.Ay, {
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
                inNitroLockedSection: E,
                showLockForDisabledSound: m,
                isSoundmoji: !0 === g,
            });
        case s.uq.ADD_SOUND:
            return (0, r.createElement)(o.A, {
                ..._(u),
                key: I,
                guild: t.item.guild,
                focused: T,
                onSelectItem: () => f(t),
            });
    }
}
