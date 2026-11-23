e(321073);
var t = e(435558),
    i = e.n(t),
    n = e(253932),
    r = e(129230),
    E = e(670455),
    u = e(652215),
    d = e(672779),
    s = e(792996);
function O(a) {
    return a
        .filter((a) => {
            let { disabled: l } = a;
            return !l;
        })
        .map((a) => {
            let { disabled: l, ...e } = a;
            return e;
        });
}
e.d(
    l,
    {},
    {
        A_: function () {
            return O([
                { variant: E.UV.SELF, value: E.bO.COULD_NOT_CONNECT, label: s.intl.string(d.default.gMHKDJ) },
                { value: E.bO.HIGH_TTC, variant: E.UV.SELF, label: s.intl.string(d.default.y06Ayn) },
                { value: E.bO.HIGH_LATENCY, variant: E.UV.SELF, label: s.intl.string(d.default.y5k8Jq) },
                { value: E.bO.ROBOT_VOICE, variant: E.UV.SOMEONE, label: s.intl.string(d.default.f2914v) },
                { value: E.bO.DESYNC, variant: E.UV.UNSPECIFIED, label: s.intl.string(d.default["zk+QL1"]) },
                { value: E.bO.CUTTING, variant: E.UV.SOMEONE, label: s.intl.string(d.default.K5vYQA) },
            ]);
        },
        Op: function (a) {
            let { isMobile: l } = a;
            return O([
                { value: E.X.NO_AUDIO, variant: E.UV.SELF, label: s.intl.string(d.default["GWypH+"]) },
                { value: E.X.NO_AUDIO, variant: E.UV.OTHERS, label: s.intl.string(d.default.ftSvQ0) },
                { value: E.X.LOW_QUALITY_AUDIO, variant: E.UV.OTHERS, label: s.intl.string(d.default["1DnNRO"]) },
                { value: E.X.ROBOT_VOICE, variant: E.UV.SOMEONE, label: s.intl.string(d.default.yGe0BL) },
                { value: E.X.ECHO, variant: E.UV.OTHERS, label: s.intl.string(d.default.Q5Dsaz) },
                { value: E.X.TOO_QUIET_OR_LOUD, variant: E.UV.SOMEONE, label: s.intl.string(d.default["1o77I3"]) },
                { value: E.X.CUTTING, variant: E.UV.SOMEONE, label: s.intl.string(d.default.RK9DUi) },
                { value: E.X.DELAYED, variant: E.UV.UNSPECIFIED, label: s.intl.string(d.default.RGRgmM) },
                { value: E.X.BACKGROUND_NOISE, variant: E.UV.SOMEONE, label: s.intl.string(d.default["anHk1/"]) },
                { value: E.X.UNABLE_TO_FIND_DEVICE, variant: E.UV.SELF, label: s.intl.string(d.default["05VSjm"]) },
                { value: E.X.COMPLAINTS, variant: E.UV.OTHERS, label: s.intl.string(d.default.kbbtwi) },
                {
                    value: E.X.TROUBLE_WITH_SPEAKERPHONE,
                    variant: E.UV.SELF,
                    label: s.intl.string(d.default["4qlGrO"]),
                    disabled: !l,
                },
                { value: E.X.NO_GAME_AUDIO, variant: E.UV.SELF, label: s.intl.string(d.default["2IG95D"]) },
            ]);
        },
        TK: function () {
            return O([
                { value: E.CW.TOXIC_OR_INAPPROPRIATE, variant: E.UV.OTHERS, label: s.intl.string(d.default.PLBRzF) },
            ]);
        },
        de: function () {
            return O([
                { value: E.AO.NO_VIDEO, variant: E.UV.SELF, label: s.intl.string(d.default["Bh+02d"]) },
                { value: E.AO.NO_VIDEO, variant: E.UV.SOMEONE, label: s.intl.string(d.default["R+wqwU"]) },
                { value: E.AO.FREEZING_OR_HITCHING, variant: E.UV.SOMEONE, label: s.intl.string(d.default["8I/GUL"]) },
                { value: E.AO.BLURRY_OR_PIXELATED, variant: E.UV.SOMEONE, label: s.intl.string(d.default.k7Idoz) },
                { value: E.AO.UNABLE_TO_ENABLE_DEVICE, variant: E.UV.SELF, label: s.intl.string(d.default.QbC6La) },
                { value: E.AO.DESYNC, variant: E.UV.UNSPECIFIED, label: s.intl.string(d.default.vRDE5O) },
            ]);
        },
        ed: function (a, l) {
            let e = i().shuffle(a),
                t = e.findIndex((a) => a.value === l);
            if (t > -1) {
                let a = e[t];
                (e.splice(t, 1), e.push(a));
            }
            return e;
        },
        n3: function (a) {
            let { feedbackType: l, location: e } = a;
            (r.default.track(u.HAw.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
                feedback_type: E.MW[l],
                opted_out_until: E.fs,
            }),
                n.Yt.updateSetting((a) => ({ ...a, [l]: { ...a[l], optOutExpiryTime: E.fs } })));
        },
        wq: function (a) {
            let { isStreamer: l } = a;
            return O([
                {
                    value: E.j6.COULD_NOT_LOAD,
                    variant: E.UV.SELF,
                    label: s.intl.string(d.default["w+kiDF"]),
                    disabled: !l,
                },
                { value: E.j6.BLACK_SCREEN, variant: E.UV.SELF, label: s.intl.string(d.default.RRZZZb), disabled: !l },
                {
                    value: E.j6.FREEZING_OR_HITCHING,
                    variant: E.UV.SELF,
                    label: s.intl.string(d.default["3PKSkd"]),
                    disabled: !l,
                },
                { value: E.j6.LAG, variant: E.UV.SELF, label: s.intl.string(d.default.iMxexK), disabled: !l },
                {
                    value: E.j6.BLURRY_OR_PIXELATED,
                    variant: E.UV.SELF,
                    label: s.intl.string(d.default["8ceyQy"]),
                    disabled: !l,
                },
                { value: E.j6.NO_AUDIO, variant: E.UV.SELF, label: s.intl.string(d.default.HaZSC3), disabled: !l },
                { value: E.j6.BAD_AUDIO, variant: E.UV.SELF, label: s.intl.string(d.default["zIC+8Y"]), disabled: !l },
                {
                    value: E.j6.STOPPED_UNEXPECTEDLY,
                    variant: E.UV.SELF,
                    label: s.intl.string(d.default["/nlKuG"]),
                    disabled: !l,
                },
                { value: E.j6.DESYNC, variant: E.UV.SELF, label: s.intl.string(d.default.JS6akP), disabled: !l },
                { value: E.j6.NO_GAME_AUDIO, variant: E.UV.SELF, label: s.intl.string(d.default.TaIrh5), disabled: !l },
                {
                    value: E.j6.COULD_NOT_LOAD,
                    variant: E.UV.SOMEONE,
                    label: s.intl.string(d.default.jU9Zs8),
                    disabled: l,
                },
                {
                    value: E.j6.BLACK_SCREEN,
                    variant: E.UV.SOMEONE,
                    label: s.intl.string(d.default.aml28x),
                    disabled: l,
                },
                {
                    value: E.j6.FREEZING_OR_HITCHING,
                    variant: E.UV.SOMEONE,
                    label: s.intl.string(d.default.V3EeCH),
                    disabled: l,
                },
                { value: E.j6.LAG, variant: E.UV.SOMEONE, label: s.intl.string(d.default.hi1Y39), disabled: l },
                {
                    value: E.j6.BLURRY_OR_PIXELATED,
                    variant: E.UV.SOMEONE,
                    label: s.intl.string(d.default.qdBn3L),
                    disabled: l,
                },
                { value: E.j6.NO_AUDIO, variant: E.UV.SOMEONE, label: s.intl.string(d.default.DOOlop), disabled: l },
                { value: E.j6.BAD_AUDIO, variant: E.UV.SOMEONE, label: s.intl.string(d.default.k7bdGE), disabled: l },
                {
                    value: E.j6.STOPPED_UNEXPECTEDLY,
                    variant: E.UV.SOMEONE,
                    label: s.intl.string(d.default.jPD998),
                    disabled: l,
                },
                { value: E.j6.DESYNC, variant: E.UV.SOMEONE, label: s.intl.string(d.default.JfAvQp), disabled: l },
            ]);
        },
    },
);
