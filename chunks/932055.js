i.d(e, { Jz: () => S, i: () => E, vd: () => A }), i(321073);
var n = i(311907),
    l = i(264686),
    s = i(839214),
    r = i(419954),
    a = i(400492),
    u = i(803224),
    o = i(780964),
    d = i(985018);
let T = (0, s.D)(() => ({ currentPlayingSound: null }));
function A() {
    let t = T.getField("currentPlayingSound");
    t?.stop(), T.setState({ currentPlayingSound: null });
}
function S(t) {
    let e = T.getField("currentPlayingSound");
    e?.stop();
    let i = (0, a.Ak)(t);
    T.setState({ currentPlayingSound: i });
}
function E(t) {
    return (0, r.zD)(`${o.X.SOUNDS_LIST_ITEM_PREFIX}${t.sound}`, {
        useTitle: t.useTitle,
        useSubtitle: () => d.intl.format(d.t.OOiGCM, { onClick: () => S(t.sound) }),
        useValue: () => {
            let e = (0, n.bG)([u.A], () => u.A.isSoundDisabled(t.sound)),
                i = t.useDisabled?.();
            return !e && !i;
        },
        setValue: (e) => {
            let i = u.A.getDisabledSounds().filter((e) => e !== t.sound);
            e || i.push(t.sound), l.default.setDisabledSounds(i);
        },
        useDisabled: () => {
            let e = t.useDisabled?.(),
                i = (0, n.bG)([u.A], () => u.A.getDisableAllSounds());
            return e || i;
        },
        useDisabledMessage: t.useDisabledMessage,
    });
}
