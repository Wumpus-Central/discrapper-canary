i.d(e, { FieldComparison: () => v });
var s = i(529058),
    a = i(287822),
    n = i(748922),
    l = i(898159),
    r = i(898369),
    u = i(188043);
i(48913);
var d = i(787146),
    o = i(878176),
    c = i(96798),
    m = i(296767),
    f = i(326014),
    p = ({ config: t, manager: e, onFinish: i }) => {
        let { t: l } = (0, s.n)(),
            [m, p] = (0, n.u)(() => e ?? (0, f.n)({ config: t }), { manageLifecycle: !e, autoLoad: !0 });
        if (
            ((0, n.c)({ status: "finished" === m.status ? "finished" : "loading", onFinish: i }),
            "finished" === m.status)
        )
            return null;
        if ("error" === m.status) return (0, a.v)(o.t, { status: "failure", onRetry: p.retry, onSkip: p.skip });
        if ("success" === m.status)
            return (0, a.v)(o.t, { status: "success", successTitle: l("customFields.completed") });
        if ("submitting" === m.status || "inputting" === m.status) {
            let t = "submitting" === m.status,
                e = "inputting" === m.status && m.canSubmit;
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
                            disabled: t,
                            value: m.fields.firstName,
                            onInput: (t) => {
                                p.setField("firstName", t.target.value);
                            },
                        }),
                        (0, a.v)(c.t, {
                            id: "field-comparison-last-name",
                            name: "lastName",
                            label: l("verification.labels.lastName"),
                            disabled: t,
                            value: m.fields.lastName,
                            onInput: (t) => {
                                p.setField("lastName", t.target.value);
                            },
                        }),
                        (0, a.v)(r.r, {}),
                        (0, a.v)(d.t, {
                            type: "submit",
                            disabled: !e || t,
                            onClick: (t) => {
                                t.preventDefault(), p.submit();
                            },
                            children: l("common.continue"),
                        }),
                    ],
                }),
            });
        }
        return null;
    },
    v = ({ config: t = {}, manager: e, onFinish: i }) =>
        (0, a.v)(l.t, { children: (0, a.v)(p, { config: t, manager: e, onFinish: i }) });
(0, m.t)(v, "incode-field-comparison");
