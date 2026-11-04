(i.r(t), i.d(t, { FieldComparison: () => v }));
var s = i(783285),
    a = i(768611),
    n = i(200503),
    l = i(628926),
    r = i(242268),
    u = i(326144);
i(685131);
var d = i(264957),
    o = i(503679),
    c = i(936391),
    m = i(918676),
    p = i(893151),
    f = ({ config: e, manager: t, onFinish: i }) => {
        let { t: l } = (0, s.n)(),
            [m, f] = (0, n.u)(() => t ?? (0, p.createFieldComparisonManager)({ config: e }), {
                manageLifecycle: !t,
                autoLoad: !0,
            });
        if (
            ((0, n.c)({ status: "finished" === m.status ? "finished" : "loading", onFinish: i }),
            "finished" === m.status)
        )
            return null;
        if ("error" === m.status) return (0, a.v)(o.t, { status: "failure", onRetry: f.retry, onSkip: f.skip });
        if ("success" === m.status)
            return (0, a.v)(o.t, { status: "success", successTitle: l("customFields.completed") });
        if ("submitting" === m.status || "inputting" === m.status) {
            let e = "submitting" === m.status,
                t = "inputting" === m.status && m.canSubmit;
            return (0, a.v)(u.t, {
                className: "IncodeFieldComparisonPage",
                title: l("fieldComparison.title"),
                hideFooterBranding: !0,
                children: (0, a.v)("div", {
                    class: "IncodeFieldComparisonForm",
                    children: [
                        (0, a.v)(c.t, {
                            id: "field-comparison-first-name",
                            name: "firstName",
                            label: l("verification.labels.firstName"),
                            disabled: e,
                            value: m.fields.firstName,
                            onInput: (e) => {
                                f.setField("firstName", e.target.value);
                            },
                        }),
                        (0, a.v)(c.t, {
                            id: "field-comparison-last-name",
                            name: "lastName",
                            label: l("verification.labels.lastName"),
                            disabled: e,
                            value: m.fields.lastName,
                            onInput: (e) => {
                                f.setField("lastName", e.target.value);
                            },
                        }),
                        (0, a.v)(r.r, {}),
                        (0, a.v)(d.t, {
                            type: "submit",
                            disabled: !t || e,
                            onClick: (e) => {
                                (e.preventDefault(), f.submit());
                            },
                            children: l("common.continue"),
                        }),
                    ],
                }),
            });
        }
        return null;
    },
    v = ({ config: e = {}, manager: t, onFinish: i }) =>
        (0, a.v)(l.t, { children: (0, a.v)(f, { config: e, manager: t, onFinish: i }) });
(0, m.t)(v, "incode-field-comparison");
