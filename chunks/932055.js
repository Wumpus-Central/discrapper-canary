n.d(t, { Jz: () => m, i: () => _, vd: () => g }), n(321073);
var i = n(311907),
    s = n(264686),
    l = n(839214),
    a = n(419954),
    r = n(400492),
    o = n(803224),
    d = n(780964),
    u = n(985018);
let c = (0, l.D)(() => ({ currentPlayingSound: null }));
function g() {
    let e = c.getField("currentPlayingSound");
    e?.stop(), c.setState({ currentPlayingSound: null });
}
function m(e) {
    let t = c.getField("currentPlayingSound");
    t?.stop();
    let n = (0, r.Ak)(e);
    c.setState({ currentPlayingSound: n });
}
function _(e) {
    return (0, a.zD)(`${d.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => u.intl.format(u.t.OOiGCM, { onClick: () => m(e.sound) }),
        useValue: () => {
            let t = (0, i.bG)([o.A], () => o.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = o.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || n.push(e.sound), s.default.setDisabledSounds(n);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, i.bG)([o.A], () => o.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
