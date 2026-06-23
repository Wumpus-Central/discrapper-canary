t.d(l, { A_: () => U, Op: () => _, TK: () => N, de: () => f, ed: () => v, n3: () => b, wq: () => S }), t(321073);
var e = t(735438),
    i = t.n(e),
    n = t(885386),
    E = t(174459),
    u = t(670455),
    O = t(652215),
    r = t(564082),
    d = t(375708);
function v(a, l) {
    let t = i().shuffle(a),
        e = t.findIndex((a) => a.value === l);
    if (e > -1) {
        let a = t[e];
        t.splice(e, 1), t.push(a);
    }
    return t;
}
function b(a) {
    let { feedbackType: l, location: t } = a;
    E.default.track(O.HAw.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, { feedback_type: u.MW[l], opted_out_until: u.fs }),
        n.Yt.updateSetting((a) => ({ ...a, [l]: { ...a[l], optOutExpiryTime: u.fs } }));
}
function s(a) {
    return a
        .filter((a) => {
            let { disabled: l } = a;
            return !l;
        })
        .map((a) => {
            let { disabled: l, ...t } = a;
            return t;
        });
}
function U() {
    return s([
        { variant: u.UV.SELF, value: u.bO.COULD_NOT_CONNECT, label: d.intl.string(r.default.gMHKDJ) },
        { value: u.bO.HIGH_TTC, variant: u.UV.SELF, label: d.intl.string(r.default.y06Ayn) },
        { value: u.bO.HIGH_LATENCY, variant: u.UV.SELF, label: d.intl.string(r.default.y5k8Jq) },
        { value: u.bO.ROBOT_VOICE, variant: u.UV.SOMEONE, label: d.intl.string(r.default.f2914v) },
        { value: u.bO.DESYNC, variant: u.UV.UNSPECIFIED, label: d.intl.string(r.default["zk+QL1"]) },
        { value: u.bO.CUTTING, variant: u.UV.SOMEONE, label: d.intl.string(r.default.K5vYQA) },
    ]);
}
function _(a) {
    let { isMobile: l } = a;
    return s([
        { value: u.X.NO_AUDIO, variant: u.UV.SELF, label: d.intl.string(r.default["GWypH+"]) },
        { value: u.X.NO_AUDIO, variant: u.UV.OTHERS, label: d.intl.string(r.default.ftSvQ0) },
        { value: u.X.LOW_QUALITY_AUDIO, variant: u.UV.OTHERS, label: d.intl.string(r.default["1DnNRO"]) },
        { value: u.X.ROBOT_VOICE, variant: u.UV.SOMEONE, label: d.intl.string(r.default.yGe0BL) },
        { value: u.X.ECHO, variant: u.UV.OTHERS, label: d.intl.string(r.default.Q5Dsaz) },
        { value: u.X.TOO_QUIET_OR_LOUD, variant: u.UV.SOMEONE, label: d.intl.string(r.default["1o77I3"]) },
        { value: u.X.CUTTING, variant: u.UV.SOMEONE, label: d.intl.string(r.default.RK9DUi) },
        { value: u.X.DELAYED, variant: u.UV.UNSPECIFIED, label: d.intl.string(r.default.RGRgmM) },
        { value: u.X.BACKGROUND_NOISE, variant: u.UV.SOMEONE, label: d.intl.string(r.default["anHk1/"]) },
        { value: u.X.UNABLE_TO_FIND_DEVICE, variant: u.UV.SELF, label: d.intl.string(r.default["05VSjm"]) },
        { value: u.X.COMPLAINTS, variant: u.UV.OTHERS, label: d.intl.string(r.default.kbbtwi) },
        {
            value: u.X.TROUBLE_WITH_SPEAKERPHONE,
            variant: u.UV.SELF,
            label: d.intl.string(r.default["4qlGrO"]),
            disabled: !l,
        },
        { value: u.X.NO_GAME_AUDIO, variant: u.UV.SELF, label: d.intl.string(r.default["2IG95D"]) },
    ]);
}
function f() {
    return s([
        { value: u.AO.NO_VIDEO, variant: u.UV.SELF, label: d.intl.string(r.default["Bh+02d"]) },
        { value: u.AO.NO_VIDEO, variant: u.UV.SOMEONE, label: d.intl.string(r.default["R+wqwU"]) },
        { value: u.AO.FREEZING_OR_HITCHING, variant: u.UV.SOMEONE, label: d.intl.string(r.default["8I/GUL"]) },
        { value: u.AO.BLURRY_OR_PIXELATED, variant: u.UV.SOMEONE, label: d.intl.string(r.default.k7Idoz) },
        { value: u.AO.UNABLE_TO_ENABLE_DEVICE, variant: u.UV.SELF, label: d.intl.string(r.default.QbC6La) },
        { value: u.AO.DESYNC, variant: u.UV.UNSPECIFIED, label: d.intl.string(r.default.vRDE5O) },
    ]);
}
function S(a) {
    let { isStreamer: l } = a;
    return s([
        { value: u.j6.COULD_NOT_LOAD, variant: u.UV.SELF, label: d.intl.string(r.default["w+kiDF"]), disabled: !l },
        { value: u.j6.BLACK_SCREEN, variant: u.UV.SELF, label: d.intl.string(r.default.RRZZZb), disabled: !l },
        {
            value: u.j6.FREEZING_OR_HITCHING,
            variant: u.UV.SELF,
            label: d.intl.string(r.default["3PKSkd"]),
            disabled: !l,
        },
        { value: u.j6.LAG, variant: u.UV.SELF, label: d.intl.string(r.default.iMxexK), disabled: !l },
        {
            value: u.j6.BLURRY_OR_PIXELATED,
            variant: u.UV.SELF,
            label: d.intl.string(r.default["8ceyQy"]),
            disabled: !l,
        },
        { value: u.j6.NO_AUDIO, variant: u.UV.SELF, label: d.intl.string(r.default.HaZSC3), disabled: !l },
        { value: u.j6.BAD_AUDIO, variant: u.UV.SELF, label: d.intl.string(r.default["zIC+8Y"]), disabled: !l },
        {
            value: u.j6.STOPPED_UNEXPECTEDLY,
            variant: u.UV.SELF,
            label: d.intl.string(r.default["/nlKuG"]),
            disabled: !l,
        },
        { value: u.j6.DESYNC, variant: u.UV.SELF, label: d.intl.string(r.default.JS6akP), disabled: !l },
        { value: u.j6.NO_GAME_AUDIO, variant: u.UV.SELF, label: d.intl.string(r.default.TaIrh5), disabled: !l },
        { value: u.j6.COULD_NOT_LOAD, variant: u.UV.SOMEONE, label: d.intl.string(r.default.jU9Zs8), disabled: l },
        { value: u.j6.BLACK_SCREEN, variant: u.UV.SOMEONE, label: d.intl.string(r.default.aml28x), disabled: l },
        {
            value: u.j6.FREEZING_OR_HITCHING,
            variant: u.UV.SOMEONE,
            label: d.intl.string(r.default.V3EeCH),
            disabled: l,
        },
        { value: u.j6.LAG, variant: u.UV.SOMEONE, label: d.intl.string(r.default.hi1Y39), disabled: l },
        { value: u.j6.BLURRY_OR_PIXELATED, variant: u.UV.SOMEONE, label: d.intl.string(r.default.qdBn3L), disabled: l },
        { value: u.j6.NO_AUDIO, variant: u.UV.SOMEONE, label: d.intl.string(r.default.DOOlop), disabled: l },
        { value: u.j6.BAD_AUDIO, variant: u.UV.SOMEONE, label: d.intl.string(r.default.k7bdGE), disabled: l },
        {
            value: u.j6.STOPPED_UNEXPECTEDLY,
            variant: u.UV.SOMEONE,
            label: d.intl.string(r.default.jPD998),
            disabled: l,
        },
        { value: u.j6.DESYNC, variant: u.UV.SOMEONE, label: d.intl.string(r.default.JfAvQp), disabled: l },
    ]);
}
function N() {
    return s([{ value: u.CW.TOXIC_OR_INAPPROPRIATE, variant: u.UV.OTHERS, label: d.intl.string(r.default.PLBRzF) }]);
}
