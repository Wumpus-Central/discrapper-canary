n.d(t, { f: () => o });
var r = n(2818),
    i = n(585483),
    a = n(981631);
let o = {
    binds: ["mod+l"],
    comboKeysBindGlobal: !0,
    action() {
        let { enabled: e, inInbox: t } = r.Z.getCurrentConfig({ location: "keybinds" }, { autoTrackExposure: !1 });
        if (e && !t) return i.S.dispatch(a.CkL.TOGGLE_FOR_LATER), !1;
    },
};
