function r(e, t) {
    return ''.concat(e, ':').concat(t);
}
(n.d(t, { z: () => i }), n(388685));
let i = (0, n(97519).U)((e, t) => ({
    openMenus: new Set(),
    isMenuOpenForMessage: (e) => Array.from(t().openMenus).some((t) => null != e && t.startsWith(''.concat(e, ':'))),
    openMenu: (t, n) => {
        let i = r(t, n);
        e((e) => {
            let t = new Set(e.openMenus);
            return (t.add(i), { openMenus: t });
        });
    },
    closeMenu: (t, n) => {
        let i = r(t, n);
        e((e) => {
            let t = new Set(e.openMenus);
            return (t.delete(i), { openMenus: t });
        });
    }
}));
