i.d(e, {
    Jz: () => S,
    i: () => E,
    vd: () => d,
}),
    i(321073);
var n = i(311907),
    l = i(264686),
    s = i(839214),
    r = i(419954),
    u = i(400492),
    a = i(803224),
    o = i(780964),
    T = i(985018);
let A = (0, s.D)(() => ({
    currentPlayingSound: null,
}));

function d() {
    let t = A.getField("currentPlayingSound");
    null == t || t.stop(),
        A.setState({
            currentPlayingSound: null,
        });
}

function S(t) {
    let e = A.getField("currentPlayingSound");
    null == e || e.stop();
    let i = (0, u.Ak)(t);
    A.setState({
        currentPlayingSound: i,
    });
}

function E(t) {
    return (0, r.zD)("".concat(o.X.SOUNDS_LIST_ITEM_PREFIX).concat(t.sound), {
        useTitle: t.useTitle,
        useSubtitle: () =>
            T.intl.format(T.t.OOiGCM, {
                onClick: () => S(t.sound),
            }),
        useValue: () => {
            var e;
            let i = (0, n.bG)([a.A], () => a.A.isSoundDisabled(t.sound)),
                l = null == (e = t.useDisabled) ? void 0 : e.call(t);
            return !i && !l;
        },
        setValue: (e) => {
            let i = a.A.getDisabledSounds().filter((e) => e !== t.sound);
            e || i.push(t.sound), l.default.setDisabledSounds(i);
        },
        useDisabled: () => {
            var e;
            let i = null == (e = t.useDisabled) ? void 0 : e.call(t),
                l = (0, n.bG)([a.A], () => a.A.getDisableAllSounds());
            return i || l;
        },
        useDisabledMessage: t.useDisabledMessage,
    });
}
