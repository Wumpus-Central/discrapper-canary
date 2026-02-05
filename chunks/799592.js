n.d(t, { b: () => i });
let i = {
    binds: ["shift+f10"],
    comboKeysBindGlobal: !0,
    action() {
        let e = document.activeElement;
        return (
            null != e &&
            e !== document.body &&
            (e.dispatchEvent(
                new MouseEvent("contextmenu", { bubbles: !0, cancelable: !0, view: window, clientX: 0, clientY: 0 }),
            ),
            !1)
        );
    },
};
