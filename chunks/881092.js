l.d(t, { default: () => p });
var a,
    i,
    n = l(477900),
    s = l(582128),
    A = l(189213),
    c = l(691885),
    o = l(150934),
    u = l(281595),
    r = l(620632),
    C = l(652215),
    T =
        (((a = {}).HCAPTCHA_RQDATA = "hCaptchaRqdata"),
        (a.SMITE_RQDATA = "SmiteRqdata"),
        (a.RECAPTCHA = "Recaptcha"),
        (a.RECAPTCHA_ENTERPRISE = "RecaptchaEnterprise"),
        a);
let d = Object.entries(
        (((i = {})[(i.EASY = 1)] = "EASY"),
        (i[(i.MODERATE = 2)] = "MODERATE"),
        (i[(i.DIFFICULT = 3)] = "DIFFICULT"),
        (i[(i.VERY_DIFFICULT = 4)] = "VERY_DIFFICULT"),
        i),
    )
        .map((e) => {
            let [t, l] = e;
            return { id: l.toString(), label: t, value: l };
        })
        .filter(function (e) {
            return "string" != typeof e.value;
        }),
    h = Object.entries(T).map((e) => {
        let [t, l] = e;
        return { id: l, label: t, value: l };
    }),
    p = function (e) {
        let { onClose: t, transitionState: l } = e,
            [a, i] = s.useState(null),
            [p, R] = s.useState(null),
            [E, S] = s.useState(null),
            [D, _] = s.useState(""),
            b = s.useCallback(async () => {
                if (null != a) {
                    _("");
                    try {
                        await (async function (e, t) {
                            await r.Bo.post({
                                url: C.Rsh.CAPTCHA_TEST,
                                body: { decider: e, options: t },
                                rejectWithError: !1,
                            });
                        })(a, { difficulty: p ?? void 0, should_serve_invisible: E ?? void 0 });
                    } catch (e) {
                        _(e.message);
                    }
                }
            }, [a, p, E]);
        return (0, n.jsxs)(A.a, {
            title: "Captcha Test Tool",
            actions: [{ text: "Trigger Captcha", onClick: b, disabled: null == a }],
            onClose: t,
            transitionState: l,
            children: [
                (0, n.jsx)(c.l, {
                    label: "Captcha Decider Type",
                    hideLabel: !0,
                    value: a,
                    options: h,
                    onSelectionChange: function (e) {
                        (e !== T.HCAPTCHA_RQDATA && e !== T.SMITE_RQDATA && S(null),
                            e !== T.HCAPTCHA_RQDATA && R(null),
                            i(e),
                            _(""));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                a === T.HCAPTCHA_RQDATA &&
                    (0, n.jsx)(c.l, {
                        label: "HCaptcha Difficulty",
                        hideLabel: !0,
                        value: p,
                        options: d,
                        onSelectionChange: function (e) {
                            a === T.HCAPTCHA_RQDATA && R(e);
                        },
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                (a === T.HCAPTCHA_RQDATA || a === T.SMITE_RQDATA) &&
                    (0, n.jsx)(o.S, { checked: E ?? !1, onChange: (e) => S(e), label: "Should serve invisible?" }),
                "" !== D && (0, n.jsx)(u.U, { error: D }),
            ],
        });
    };
