n.d(t, { i: () => i });
var r = n(723702);
let i = {
    binds: ["mod+alt+i"],
    comboKeysBindGlobal: !0,
    action(e) {
        if ((0, r.isWeb)() && "discord.com" === location.host) return e.preventDefault(), e.stopPropagation(), !1;
    },
};
