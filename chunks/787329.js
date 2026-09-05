i.d(t, { CustomFields: () => y });
var s = i(775162),
    n = i(252422),
    a = i(773362),
    l = i(501447),
    d = i(313209),
    u = i(487171),
    r = i(194226),
    o = i(202103),
    c = i(276822),
    m = i(117247),
    v = i(333851),
    p = i(363015),
    h = i(44468),
    b = i(920272),
    g = { INTEGER: "number", DOUBLE: "number", STRING: "text" },
    F = { DOUBLE: "any" },
    f = ({ field: e, isDisabled: t, onChange: i }) => {
        let [s, a] = (0, n.p)("");
        return (0, n.v)("div", {
            class: "IncodeCustomFieldsField",
            children: (0, n.v)(v.t, {
                id: `custom-field-${e.name}`,
                name: e.name,
                label: e.label,
                disabled: t,
                value: s,
                onInput: (t) => {
                    let s = t.target.value;
                    a(s), i(e.name, s);
                },
            }),
        });
    },
    C = ({ field: e, isDisabled: t, onChange: i }) => {
        let s = `custom-field-${e.name}`;
        return "BOOLEAN" === e.type
            ? (0, n.v)("div", {
                  class: "IncodeCustomFieldsField",
                  children: (0, n.v)(m.t, {
                      id: s,
                      name: e.name,
                      label: e.label,
                      disabled: t,
                      onChange: (t) => i(e.name, t.target.checked),
                  }),
              })
            : "DATE" === e.type
              ? (0, n.v)(f, { field: e, isDisabled: t, onChange: i })
              : (0, n.v)("div", {
                    class: "IncodeCustomFieldsField",
                    children: (0, n.v)(c.t, {
                        id: s,
                        name: e.name,
                        label: e.label,
                        type: g[e.type] ?? "text",
                        step: F[e.type],
                        disabled: t,
                        onInput: (t) => i(e.name, t.target.value),
                    }),
                });
    },
    I = ({ config: e, manager: t, onFinish: i, onError: l }) => {
        let { t: c } = (0, s.n)(),
            [m, v] = (0, a.u)(
                () => {
                    if (t) return t;
                    if (!e) throw Error("CustomFields config is required");
                    return (0, b.s)({ config: e });
                },
                { manageLifecycle: !t, autoLoad: !0 },
            );
        if (
            ((0, a.c)({ status: "finished" === m.status ? "finished" : "loading", onFinish: i }),
            "success" === m.status)
        )
            return (0, n.v)(h.t, {
                variant: "success",
                icon: (0, n.v)(o.t, { size: 64 }),
                title: c("customFields.completed"),
                hideFooterBranding: !0,
            });
        if ("finished" === m.status) return null;
        let p =
            "inputting" === m.status || "submitting" === m.status ? c(m.title ? m.title : "customFields.title") : "";
        if ("submitting" === m.status)
            return (0, n.v)(h.t, {
                variant: "loading",
                icon: (0, n.v)(d.t, { size: 64 }),
                title: c("customFields.processing"),
                hideFooterBranding: !0,
            });
        let g = "inputting" === m.status && m.canSubmit,
            F = "inputting" === m.status ? m.customFields : [],
            f = (e, t) => {
                v.setField(e, t);
            };
        return (0, n.v)(u.t, {
            className: "IncodeCustomFieldsPage",
            title: p,
            hideFooterBranding: !0,
            children: (0, n.v)("form", {
                class: "IncodeCustomFieldsForm",
                onSubmit: (e) => {
                    e.preventDefault(), v.submit();
                },
                autoComplete: "off",
                children: [
                    F.map((e) => (0, n.v)(C, { field: e, isDisabled: !1, onChange: f }, e.name)),
                    (0, n.v)(d.r, {}),
                    (0, n.v)(r.t, { type: "submit", disabled: !g, children: c("customFields.continue") }),
                ],
            }),
        });
    },
    y = ({ config: e, manager: t, onFinish: i, onError: s }) =>
        (0, n.v)(l.t, { children: e || t ? (0, n.v)(I, { config: e, manager: t, onFinish: i, onError: s }) : null });
(0, p.t)(y, "incode-custom-fields");
