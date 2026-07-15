o.d(t, { n: () => c, t: () => u });
var l = o(529058),
    n = o(287822),
    a = o(748922),
    d = o(96798),
    r = o(927216),
    s = o(351572),
    c = ({
        label: e,
        value: t,
        error: o,
        errorParams: c,
        suggestions: i,
        readonly: u,
        required: p,
        labelHint: m,
        onChange: v,
        onSearch: h,
        onSelect: A,
        onBlur: g,
    }) => {
        let { t: b } = (0, l.n)(),
            [y, k] = (0, n.p)(!1),
            [I, f] = (0, n.p)(!1),
            [w, x] = (0, n.p)(""),
            [N, $] = (0, n.p)(-1),
            [M, S] = (0, n.p)(-1),
            C = (0, n.l)(null),
            E = (0, n.l)(null),
            D = (0, n.l)(null),
            _ = "ekyc-address-listbox",
            F = "ekyc-address-mobile-listbox",
            B = "ekyc-address-modal-title",
            K = (0, a.a)(),
            L = b(e);
        (0, n._)(() => {
            function e(e) {
                C.current && !C.current.contains(e.target) && k(!1);
            }
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, []),
            (0, n._)(() => {
                $(-1), S(-1);
            }, [i]),
            (0, n._)(() => {
                let e = K ? D : E,
                    t = K ? M : N;
                t < 0 || e.current?.children[t]?.scrollIntoView({ block: "nearest" });
            }, [N, M, K]);
        let O = (0, n.h)(
                (e) => {
                    A(e), k(!1), f(!1), $(-1), S(-1);
                },
                [A],
            ),
            P = (0, n.h)(() => {
                f(!1), S(-1);
            }, []),
            H = (e, t, o) => (l) => {
                0 !== i.length &&
                    ("ArrowDown" === l.key
                        ? (l.preventDefault(), t((e) => (e < i.length - 1 ? e + 1 : 0)))
                        : "ArrowUp" === l.key
                          ? (l.preventDefault(), t((e) => (e > 0 ? e - 1 : i.length - 1)))
                          : "Enter" === l.key && e() >= 0
                            ? (l.preventDefault(), O(i[e()]))
                            : "Escape" === l.key && o && o());
            },
            U = H(
                () => N,
                $,
                () => {
                    k(!1), $(-1);
                },
            ),
            V = H(() => M, S),
            j = !K && y && i.length > 0,
            q = j && N >= 0 ? `${_}-option-${N}` : void 0;
        return (0, n.v)("div", {
            className: "IncodeAddressAutocomplete",
            ref: C,
            children: [
                (0, n.v)(d.t, {
                    id: "ekyc-street",
                    label: L,
                    labelHint: m,
                    name: "street",
                    value: t,
                    readOnly: u,
                    required: p,
                    error: (0, r.i)(b, o, c),
                    onInput: (e) => {
                        var t;
                        v((t = e.target.value)), t.length >= 3 ? (K ? (f(!0), x(t), h(t)) : (h(t), k(!0))) : k(!1);
                    },
                    onKeyDown: U,
                    onBlur: g,
                    role: "combobox",
                    "aria-expanded": j,
                    "aria-controls": _,
                    "aria-activedescendant": q,
                    "aria-autocomplete": "list",
                    "data-testid": "ekyc-address-input",
                }),
                j &&
                    (0, n.v)("ul", {
                        ref: E,
                        id: _,
                        role: "listbox",
                        className: "IncodeAddressAutocompleteSuggestions",
                        children: i.map((e, t) =>
                            (0, n.v)(
                                "li",
                                {
                                    id: `${_}-option-${t}`,
                                    role: "option",
                                    "aria-selected": t === N,
                                    className: `IncodeAddressAutocompleteSuggestion ${t === N ? "IncodeAddressAutocompleteSuggestionActive" : ""}`,
                                    onClick: () => O(e),
                                    children: e.label,
                                },
                                e.id,
                            ),
                        ),
                    }),
                K &&
                    (0, n.v)(s.t, {
                        isOpen: I,
                        onClose: P,
                        labelledById: B,
                        children: [
                            (0, n.v)("div", {
                                className: "IncodeAddressAutocompleteModalHeader",
                                children: [
                                    (0, n.v)("h3", { id: B, children: b("verification.addressSearch") }),
                                    (0, n.v)("button", {
                                        className: "IncodeAddressAutocompleteModalClose",
                                        onClick: P,
                                        type: "button",
                                        "aria-label": b("common.close"),
                                        children: "\xd7",
                                    }),
                                ],
                            }),
                            (0, n.v)("div", {
                                className: "IncodeAddressAutocompleteModalBody",
                                children: [
                                    (0, n.v)("input", {
                                        className: "IncodeAddressAutocompleteModalInput",
                                        type: "text",
                                        value: w,
                                        placeholder: b("verification.addressPlaceholder"),
                                        "aria-label": b("verification.addressSearch"),
                                        role: "combobox",
                                        "aria-expanded": i.length > 0,
                                        "aria-controls": F,
                                        "aria-activedescendant": M >= 0 ? `${F}-option-${M}` : void 0,
                                        "aria-autocomplete": "list",
                                        onInput: (e) => {
                                            let t = e.target.value;
                                            x(t), t.length >= 3 && h(t);
                                        },
                                        onKeyDown: V,
                                        autoFocus: !0,
                                    }),
                                    i.length > 0 &&
                                        (0, n.v)("ul", {
                                            ref: D,
                                            id: F,
                                            role: "listbox",
                                            className: "IncodeAddressAutocompleteModalSuggestions",
                                            children: i.map((e, t) =>
                                                (0, n.v)(
                                                    "li",
                                                    {
                                                        id: `${F}-option-${t}`,
                                                        role: "option",
                                                        "aria-selected": t === M,
                                                        className: `IncodeAddressAutocompleteModalSuggestion ${t === M ? "IncodeAddressAutocompleteModalSuggestionActive" : ""}`,
                                                        onClick: () => O(e),
                                                        children: e.label,
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    (0, n.v)("button", {
                                        className: "IncodeAddressAutocompleteEnterManually",
                                        onClick: P,
                                        type: "button",
                                        children: b("verification.enterManually"),
                                    }),
                                ],
                            }),
                        ],
                    }),
            ],
        });
    },
    i = /^(?:[\u{1F1E6}-\u{1F1FF}]{2}|\p{Extended_Pictographic})\s*/u;
function u(e) {
    return e.replace(i, "").trimStart();
}
