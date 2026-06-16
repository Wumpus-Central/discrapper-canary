n.d(e, { default: () => b });
var a = n(627968),
    r = n(64700),
    i = n(17928),
    s = n(631670),
    l = n(287809),
    o = n(174459),
    c = n(772707),
    E = n(773812),
    u = n(87404),
    _ = n(375708);
let A = {
    [u.Q9.DISCORD_EMPLOYEE_ASKED_ME_TO]: () => _.intl.string(_.t.naBTFO),
    [u.Q9.SOMEONE_ASKED_ME_TO]: () => _.intl.string(_.t.LQ0RUP),
    [u.Q9.NEW_EMAIL]: () => _.intl.string(_.t.oOqQjw),
    [u.Q9.SOMETHING_ELSE]: () => _.intl.string(_.t.p38n1b),
};
var C = n(652215),
    g = n(661965);
function N(t) {
    let { onNext: e, onClose: n, reason: r, onReasonChange: i, transitionState: s } = t,
        l = u.FL.map((t) => ({ value: t, name: A[t]() }));
    return (0, a.jsx)(c.k, {
        graphic: { type: "image", src: g },
        title: _.intl.string(_.t["41NIIh"]),
        onClose: n,
        transitionState: s,
        actions: [
            { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: n },
            { variant: "primary", text: _.intl.string(_.t["3PatSz"]), disabled: null == r, onClick: e },
        ],
        children: (0, a.jsx)(E.z, {
            value: r,
            options: l,
            onChange: (t) => {
                o.default.track(C.HAw.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, { change_email_reason_enum: t }), i(t);
            },
        }),
    });
}
var S = n(834730),
    k = n(737273);
function m(t) {
    let { email: e, onClose: n, transitionState: r } = t;
    return (0, a.jsx)(c.k, {
        graphic: { type: "image", src: g },
        title: _.intl.string(_.t["8O+nF7"]),
        onClose: n,
        transitionState: r,
        actions: [{ variant: "primary", text: _.intl.string(_.t.BddRzS), onClick: n }],
        children: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(S.E, {
                    className: k.h_,
                    variant: "text-md/normal",
                    children: _.intl.format(_.t.Zvx0O3, { email: e }),
                }),
                (0, a.jsx)(S.E, { className: k.YL, variant: "text-sm/normal", children: _.intl.string(_.t.yb7itQ) }),
            ],
        }),
    });
}
var d = n(691540),
    h = n(857250),
    x = n(97483),
    f = n(331322),
    p = n(292666),
    R = n(123292),
    y = n(181658),
    O = n(836602),
    I = n(562708),
    M = n(499785);
function v() {
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return M.A.put({
        url: C.Rsh.USER_EMAIL,
        trackedActionData: {
            event: I.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
            properties: { is_resend: t },
        },
        rejectWithError: !1,
    });
}
async function L(t) {
    return (
        await M.A.post({
            url: C.Rsh.USER_EMAIL_VERIFY_CODE,
            body: { code: t },
            trackedActionData: { event: I.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE },
            rejectWithError: !1,
        })
    ).body;
}
function T(t) {
    let { error: e, setEmailToken: n, setError: s, onNext: l, onClose: o, transitionState: E } = t,
        [u, A] = r.useState(!1),
        [C, N] = r.useState(""),
        [S, k] = r.useState(!1),
        m = (0, i.bG)([O.A], () => O.A.getErrors()),
        I = r.useRef(null);
    r.useEffect(() => {
        I.current?.focus();
    }, []);
    let M = async (t) => {
            t.preventDefault(), s(null), A(!0);
            try {
                let { token: t } = await L(C);
                n(t), l();
            } catch (t) {
                s(new y.A(t).getAnyErrorMessage());
            } finally {
                A(!1);
            }
        },
        T = async () => {
            if (!S) {
                k(!0);
                try {
                    await v(!0), (0, d.P0)((0, h.o)(_.intl.string(_.t["84yeoz"]), x.Ck.SUCCESS));
                } catch (e) {
                    let t = new y.A(e).getAnyErrorMessage();
                    null != t && (0, d.P0)((0, h.o)(t, x.Ck.FAILURE));
                } finally {
                    k(!1);
                }
            }
        };
    return (0, a.jsx)(c.k, {
        title: _.intl.string(_.t.jMGc4J),
        subtitle: _.intl.string(_.t.SZJowy),
        graphic: { type: "image", src: g },
        transitionState: E,
        onClose: o,
        actions: [{ variant: "primary", text: _.intl.string(_.t.PDTjLN), loading: u, onClick: M }],
        children: (0, a.jsxs)(f.B, {
            gap: 8,
            children: [
                (0, a.jsx)(p.k, {
                    label: _.intl.string(_.t["8mZX6M"]),
                    error: e ?? m?.email_token?.[0],
                    value: C,
                    onChange: N,
                    inputRef: I,
                }),
                (0, a.jsx)(R.Q, { textVariant: "text-sm/normal", text: _.intl.string(_.t.K0NPQ6), onClick: T }),
            ],
        }),
    });
}
function j(t) {
    let { onNext: e, onClose: n, transitionState: s } = t,
        [o, E] = r.useState(!1),
        u = (0, i.bG)([l.default], () => l.default.getCurrentUser()),
        A = async (t) => {
            t.preventDefault(), E(!0);
            try {
                await v(), e();
            } catch (e) {
                let t = new y.A(e).getAnyErrorMessage();
                null != t && (0, d.P0)((0, h.o)(t, x.Ck.FAILURE));
            } finally {
                E(!1);
            }
        };
    return (0, a.jsx)(c.k, {
        graphic: { type: "image", src: g },
        title: _.intl.string(_.t.uFxYq0),
        onClose: n,
        transitionState: s,
        actions: [
            { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: n },
            { variant: "primary", text: _.intl.string(_.t.rXV81H), loading: o, onClick: A },
        ],
        children: (0, a.jsx)(S.E, {
            className: k.h_,
            variant: "text-md/normal",
            children: _.intl.format(_.t.oMFSgi, { oldEmail: u?.email }),
        }),
    });
}
var D = n(774914);
function U(t) {
    let { emailToken: e, onClose: n, onBack: l, onNext: o, transitionState: E } = t,
        [u, A] = r.useState(""),
        [C, N] = r.useState(""),
        [S, k] = r.useState(!1),
        m = (0, i.bG)([O.A], () => O.A.getErrors()),
        d = r.useRef(null);
    async function h(t) {
        t.preventDefault(), k(!0);
        let n = await (0, s._L)({ email: u, emailToken: e, password: C });
        k(!1), n?.ok ? o(u) : n?.body?.username != null ? (0, D.E)() : n?.body?.email_token != null && l?.();
    }
    return (
        r.useEffect(() => {
            d.current?.focus();
        }, []),
        (0, a.jsx)(c.k, {
            graphic: { type: "image", src: g },
            title: _.intl.string(_.t.p3280r),
            subtitle: _.intl.string(_.t["1k44EL"]),
            onClose: n,
            transitionState: E,
            actions: [
                null != l
                    ? { variant: "secondary", text: _.intl.string(_.t["13/7kX"]), onClick: l }
                    : { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: n },
                { variant: "primary", text: _.intl.string(_.t.i4jeWR), loading: S, onClick: h },
            ],
            children: (0, a.jsxs)(f.B, {
                gap: 20,
                children: [
                    (0, a.jsx)(p.k, {
                        label: _.intl.string(_.t["w/qqKK"]),
                        error: m?.email?.[0],
                        type: "email",
                        value: u,
                        onChange: A,
                        inputRef: d,
                    }),
                    (0, a.jsx)(p.k, {
                        label: _.intl.string(_.t.TmdnJ3),
                        error: m?.password?.[0],
                        type: "password",
                        value: C,
                        onChange: N,
                    }),
                ],
            }),
        })
    );
}
var w = n(117816);
function G(t) {
    let { onNext: e, onClose: n, transitionState: r } = t;
    return (0, a.jsxs)(c.k, {
        graphic: { type: "image", src: w.A },
        title: _.intl.string(_.t.hhR7gX),
        onClose: n,
        transitionState: r,
        actions: [
            { variant: "secondary", text: _.intl.string(_.t.rwTBFs), onClick: e },
            { variant: "primary", text: _.intl.string(_.t["ETE/oC"]), onClick: n },
        ],
        children: [
            (0, a.jsx)(S.E, {
                className: k.h_,
                variant: "text-md/normal",
                children: _.intl.format(_.t.rqWXUf, { hcArticle: u.kP }),
            }),
            (0, a.jsx)(S.E, { className: k.h_, variant: "text-md/normal", children: _.intl.string(_.t["3LW10C"]) }),
        ],
    });
}
var H = n(355097);
function b(t) {
    let { transitionState: e, onClose: n } = t,
        c = (0, i.bG)([l.default], () => l.default.getCurrentUser());
    r.useEffect(() => (o.default.track(C.HAw.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, s.Uo)()), []);
    let E = c?.verified,
        _ = E ? H.ko.CONFIRM_START : H.ko.EMAIL_AND_PASSWORD,
        [A, g] = r.useState(_),
        [S, k] = r.useState(null),
        [d, h] = r.useState(null),
        [x, f] = r.useState(""),
        [p, R] = r.useState();
    switch (A) {
        case H.ko.CONFIRM_START:
            return (0, a.jsx)(j, { onNext: () => g(H.ko.CONFIRM_CODE), onClose: n, transitionState: e });
        case H.ko.CONFIRM_CODE:
            return (0, a.jsx)(T, {
                error: d,
                setError: h,
                setEmailToken: k,
                onNext: () => g(H.ko.CHANGE_EMAIL_REASONS),
                transitionState: e,
                onClose: n,
            });
        case H.ko.CHANGE_EMAIL_REASONS:
            return (0, a.jsx)(N, {
                onNext: () => (
                    o.default.track(C.HAw.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, { change_email_reason_enum: p }),
                    null != p && u.qr.has(p) ? g(H.ko.CHANGE_EMAIL_WARNING) : g(H.ko.EMAIL_AND_PASSWORD)
                ),
                transitionState: e,
                onClose: n,
                reason: p,
                onReasonChange: R,
            });
        case H.ko.CHANGE_EMAIL_WARNING:
            return (0, a.jsx)(G, {
                onNext: () => {
                    o.default.track(C.HAw.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, { change_email_reason_enum: p }),
                        g(H.ko.EMAIL_AND_PASSWORD);
                },
                onClose: n,
                transitionState: e,
            });
        case H.ko.EMAIL_AND_PASSWORD:
            return (0, a.jsx)(U, {
                emailToken: S,
                onBack: E
                    ? () => g(null != p && u.qr.has(p) ? H.ko.CHANGE_EMAIL_WARNING : H.ko.CHANGE_EMAIL_REASONS)
                    : null,
                onNext: (t) => {
                    o.default.track(C.HAw.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, { change_email_reason_enum: p }),
                        f(t),
                        g(H.ko.COMPLETE);
                },
                onClose: n,
                transitionState: e,
            });
        case H.ko.COMPLETE:
            return (0, a.jsx)(m, { email: x, onClose: n, transitionState: e });
        default:
            return null;
    }
}
