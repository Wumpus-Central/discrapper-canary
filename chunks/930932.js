t.d(l, { A_: () => U, Op: () => _, TK: () => N, de: () => S, ed: () => v, n3: () => b, wq: () => f }), t(321073);
var e = t(735438),
    i = t.n(e),
    n = t(885386),
    E = t(174459),
    O = t(670455),
    u = t(652215),
    r = t(564082),
    d = t(375708);
let v = (a, l) => {
    let t = i().shuffle(a),
        e = t.findIndex((a) => a.value === l);
    if (e > -1) {
        let a = t[e];
        t.splice(e, 1), t.push(a);
    }
    return t;
};
function b(a) {
    let { feedbackType: l, location: t } = a;
    E.default.track(u.HAw.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, { feedback_type: O.MW[l], opted_out_until: O.fs }),
        n.Yt.updateSetting((a) => ({ ...a, [l]: { ...a[l], optOutExpiryTime: O.fs } }));
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
        { variant: O.UV.SELF, value: O.bO.COULD_NOT_CONNECT, label: d.intl.string(r.default.gMHKDJ) },
        { value: O.bO.HIGH_TTC, variant: O.UV.SELF, label: d.intl.string(r.default.y06Ayn) },
        { value: O.bO.HIGH_LATENCY, variant: O.UV.SELF, label: d.intl.string(r.default.y5k8Jq) },
        { value: O.bO.ROBOT_VOICE, variant: O.UV.SOMEONE, label: d.intl.string(r.default.f2914v) },
        { value: O.bO.DESYNC, variant: O.UV.UNSPECIFIED, label: d.intl.string(r.default["zk+QL1"]) },
        { value: O.bO.CUTTING, variant: O.UV.SOMEONE, label: d.intl.string(r.default.K5vYQA) },
    ]);
}
function _(a) {
    let { isMobile: l } = a;
    return s([
        { value: O.X.NO_AUDIO, variant: O.UV.SELF, label: d.intl.string(r.default["GWypH+"]) },
        { value: O.X.NO_AUDIO, variant: O.UV.OTHERS, label: d.intl.string(r.default.ftSvQ0) },
        { value: O.X.LOW_QUALITY_AUDIO, variant: O.UV.OTHERS, label: d.intl.string(r.default["1DnNRO"]) },
        { value: O.X.ROBOT_VOICE, variant: O.UV.SOMEONE, label: d.intl.string(r.default.yGe0BL) },
        { value: O.X.ECHO, variant: O.UV.OTHERS, label: d.intl.string(r.default.Q5Dsaz) },
        { value: O.X.TOO_QUIET_OR_LOUD, variant: O.UV.SOMEONE, label: d.intl.string(r.default["1o77I3"]) },
        { value: O.X.CUTTING, variant: O.UV.SOMEONE, label: d.intl.string(r.default.RK9DUi) },
        { value: O.X.DELAYED, variant: O.UV.UNSPECIFIED, label: d.intl.string(r.default.RGRgmM) },
        { value: O.X.BACKGROUND_NOISE, variant: O.UV.SOMEONE, label: d.intl.string(r.default["anHk1/"]) },
        { value: O.X.UNABLE_TO_FIND_DEVICE, variant: O.UV.SELF, label: d.intl.string(r.default["05VSjm"]) },
        { value: O.X.COMPLAINTS, variant: O.UV.OTHERS, label: d.intl.string(r.default.kbbtwi) },
        {
            value: O.X.TROUBLE_WITH_SPEAKERPHONE,
            variant: O.UV.SELF,
            label: d.intl.string(r.default["4qlGrO"]),
            disabled: !l,
        },
        { value: O.X.NO_GAME_AUDIO, variant: O.UV.SELF, label: d.intl.string(r.default["2IG95D"]) },
    ]);
}
function S() {
    return s([
        { value: O.AO.NO_VIDEO, variant: O.UV.SELF, label: d.intl.string(r.default["Bh+02d"]) },
        { value: O.AO.NO_VIDEO, variant: O.UV.SOMEONE, label: d.intl.string(r.default["R+wqwU"]) },
        { value: O.AO.FREEZING_OR_HITCHING, variant: O.UV.SOMEONE, label: d.intl.string(r.default["8I/GUL"]) },
        { value: O.AO.BLURRY_OR_PIXELATED, variant: O.UV.SOMEONE, label: d.intl.string(r.default.k7Idoz) },
        { value: O.AO.UNABLE_TO_ENABLE_DEVICE, variant: O.UV.SELF, label: d.intl.string(r.default.QbC6La) },
        { value: O.AO.DESYNC, variant: O.UV.UNSPECIFIED, label: d.intl.string(r.default.vRDE5O) },
    ]);
}
function f(a) {
    let { isStreamer: l } = a;
    return s([
        { value: O.j6.COULD_NOT_LOAD, variant: O.UV.SELF, label: d.intl.string(r.default["w+kiDF"]), disabled: !l },
        { value: O.j6.BLACK_SCREEN, variant: O.UV.SELF, label: d.intl.string(r.default.RRZZZb), disabled: !l },
        {
            value: O.j6.FREEZING_OR_HITCHING,
            variant: O.UV.SELF,
            label: d.intl.string(r.default["3PKSkd"]),
            disabled: !l,
        },
        { value: O.j6.LAG, variant: O.UV.SELF, label: d.intl.string(r.default.iMxexK), disabled: !l },
        {
            value: O.j6.BLURRY_OR_PIXELATED,
            variant: O.UV.SELF,
            label: d.intl.string(r.default["8ceyQy"]),
            disabled: !l,
        },
        { value: O.j6.NO_AUDIO, variant: O.UV.SELF, label: d.intl.string(r.default.HaZSC3), disabled: !l },
        { value: O.j6.BAD_AUDIO, variant: O.UV.SELF, label: d.intl.string(r.default["zIC+8Y"]), disabled: !l },
        {
            value: O.j6.STOPPED_UNEXPECTEDLY,
            variant: O.UV.SELF,
            label: d.intl.string(r.default["/nlKuG"]),
            disabled: !l,
        },
        { value: O.j6.DESYNC, variant: O.UV.SELF, label: d.intl.string(r.default.JS6akP), disabled: !l },
        { value: O.j6.NO_GAME_AUDIO, variant: O.UV.SELF, label: d.intl.string(r.default.TaIrh5), disabled: !l },
        { value: O.j6.COULD_NOT_LOAD, variant: O.UV.SOMEONE, label: d.intl.string(r.default.jU9Zs8), disabled: l },
        { value: O.j6.BLACK_SCREEN, variant: O.UV.SOMEONE, label: d.intl.string(r.default.aml28x), disabled: l },
        {
            value: O.j6.FREEZING_OR_HITCHING,
            variant: O.UV.SOMEONE,
            label: d.intl.string(r.default.V3EeCH),
            disabled: l,
        },
        { value: O.j6.LAG, variant: O.UV.SOMEONE, label: d.intl.string(r.default.hi1Y39), disabled: l },
        { value: O.j6.BLURRY_OR_PIXELATED, variant: O.UV.SOMEONE, label: d.intl.string(r.default.qdBn3L), disabled: l },
        { value: O.j6.NO_AUDIO, variant: O.UV.SOMEONE, label: d.intl.string(r.default.DOOlop), disabled: l },
        { value: O.j6.BAD_AUDIO, variant: O.UV.SOMEONE, label: d.intl.string(r.default.k7bdGE), disabled: l },
        {
            value: O.j6.STOPPED_UNEXPECTEDLY,
            variant: O.UV.SOMEONE,
            label: d.intl.string(r.default.jPD998),
            disabled: l,
        },
        { value: O.j6.DESYNC, variant: O.UV.SOMEONE, label: d.intl.string(r.default.JfAvQp), disabled: l },
    ]);
}
function N() {
    return s([{ value: O.CW.TOXIC_OR_INAPPROPRIATE, variant: O.UV.OTHERS, label: d.intl.string(r.default.PLBRzF) }]);
}
