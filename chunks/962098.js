e.d(t, { MandatoryConsent: () => g });
var s = e(31144),
    o = e(248702),
    i = e(899656),
    c = e(458741),
    a = e(727571),
    r = e(542075),
    d = e(321724),
    l = e(242003),
    u = e(967325),
    h = e(868282),
    C = e(47418),
    v = e(916577),
    b = ({ config: n, manager: t, onFinish: e, onError: c }) => {
        let { t: h } = (0, s.n)(),
            b = (0, o.l)(null),
            [g, m] = (0, i.o)(() => t ?? (0, v.n)({ config: n }), { manageLifecycle: !t });
        if (
            ((0, o._)(() => {
                "display" === g.status && b.current?.focus();
            }, [g.status]),
            (0, o._)(() => {
                "finished" === g.status
                    ? e?.()
                    : "closed" === g.status
                      ? c?.(void 0)
                      : "error" === g.status && c?.(g.error);
            }, [g, e, c]),
            "finished" === g.status || "closed" === g.status || "error" === g.status)
        )
            return null;
        if ("idle" === g.status || "loading" === g.status) return (0, o.v)(d.t, { hideText: !0 });
        let k = g.text
            .split("\n")
            .filter((n) => n.trim().length > 0)
            .join(" ");
        return (0, o.v)(
            a.t,
            {
                className: "IncodeConsentPage",
                hideFooterBranding: !0,
                hideHeader: !0,
                children: (0, o.v)("div", {
                    class: "IncodeConsentContent",
                    children: [
                        (0, o.v)("div", {
                            class: "IncodeConsentBody",
                            children: [
                                (0, o.v)(r.n, {
                                    ref: b,
                                    className: "IncodeConsentTitle",
                                    tabIndex: -1,
                                    children: g.title,
                                }),
                                (0, o.v)("p", {
                                    class: "IncodeConsentSubtitle",
                                    children: h("biometricConsent.subtitle"),
                                }),
                                (0, o.v)("div", {
                                    class: "IncodeConsentCheckboxList",
                                    children: (0, o.v)(u.t, {
                                        id: "mandatory-consent-checkbox",
                                        class: "IncodeConsentCheckbox",
                                        checked: g.isSigned,
                                        required: !0,
                                        onChange: () => m.toggle(),
                                        label: (0, o.v)("span", {
                                            class: "IncodeConsentCheckboxLabel",
                                            onClick: (n) => {
                                                n.target.closest("a") && n.stopPropagation();
                                            },
                                            children: (0, o.v)(C.t, { content: k, class: "IncodeRichText" }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, o.v)("div", {
                            class: "IncodeConsentActions",
                            children: [
                                (0, o.v)(l.t, {
                                    "data-testid": "mandatory-consent-submit",
                                    class: "IncodeConsentButton",
                                    onClick: () => m.submit(),
                                    disabled: !g.canSubmit,
                                    isLoading: "submitting" === g.status,
                                    children: h("biometricConsent.button.continue"),
                                }),
                                (0, o.v)(l.t, {
                                    variant: "link",
                                    onClick: () => m.cancel(),
                                    children: h("biometricConsent.button.cancel"),
                                }),
                            ],
                        }),
                    ],
                }),
            },
            "ready",
        );
    },
    g = ({ config: n, manager: t, onFinish: e, onError: s }) =>
        (0, o.v)(c.t, { children: n ? (0, o.v)(b, { config: n, manager: t, onFinish: e, onError: s }) : null });
(0, h.t)(g, "incode-mandatory-consent");
