d.d(t, { t: () => n });
var i = d(287822),
    e = d(898369),
    c = d(606742),
    a = d(748158),
    s = d(430671),
    n = ({
        id: l,
        label: t,
        labelHint: d,
        placeholder: n = "Choose an option",
        value: Z,
        options: b,
        onChange: m,
        error: o,
        helper: u,
        showErrorIcon: h,
        showHelperIcon: W,
        suppressMessages: G = !1,
        disabled: p = !1,
        required: N,
        searchable: M = !1,
        searchPlaceholder: X = "Search...",
        noResultsText: r = "No results found",
        name: y,
        tabIndex: Y,
        onKeyDown: T,
        onBlur: V,
        renderSelectedLabel: L,
        siblingElement: I,
        class: z,
        "aria-label": w,
        "data-testid": R,
    }) => {
        let [S, C] = (0, i.p)(!1),
            [x, g] = (0, i.p)(!1),
            [D, j] = (0, i.p)(-1),
            [U, F] = (0, i.p)(""),
            O = (0, i.l)(null),
            J = (0, i.l)(null),
            k = (0, i.l)(null),
            E = (0, i.l)([]),
            v = (0, i.l)(null),
            K = (0, i.l)(""),
            H = (0, i.l)(),
            Q = b.find((l) => l.value === Z),
            P = Q ? (L ? L(Q) : Q.label) : n,
            f = M && U ? b.filter((l) => l.label.toLowerCase().includes(U.toLowerCase())) : b,
            B = `${l}-label`,
            A = `${l}-value`,
            _ = `${l}-listbox`,
            $ = `${l}-helper`,
            q = `${l}-error`,
            ll = G ? "" : [u ? $ : null, o ? q : null].filter(Boolean).join(" ");
        (0, i._)(() => {
            if (!S) return;
            let l = requestAnimationFrame(() => {
                M && v.current && v.current.focus(),
                    requestAnimationFrame(() => {
                        k.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
                    });
            });
            return () => cancelAnimationFrame(l);
        }, [S, M]),
            (0, i._)(() => {
                S || (j(-1), F(""));
            }, [S]),
            (0, i._)(() => {
                D >= 0 && E.current[D] && E.current[D]?.scrollIntoView({ block: "nearest", inline: "nearest" });
            }, [D]),
            (0, i._)(
                () => () => {
                    H.current && clearTimeout(H.current);
                },
                [],
            );
        let lt = (l) => {
            m(l), C(!1), j(-1), J.current?.focus();
        };
        return (0, i.v)("div", {
            class: (0, e.n)("IncodeDropdownComposed", z),
            ref: O,
            onBlur: (l) => {
                g(!1), O.current?.contains(l.relatedTarget) || (C(!1), V?.());
            },
            children: [
                y && (0, i.v)("input", { type: "hidden", name: y, value: Z || "", disabled: p, required: N }),
                t &&
                    (0, i.v)("label", {
                        class: "IncodeDropdownComposedLabel",
                        id: B,
                        htmlFor: l,
                        "data-testid": `${l}-label`,
                        children: [
                            t,
                            d &&
                                (0, i.v)("span", {
                                    class: "IncodeDropdownComposedLabelHint",
                                    "data-testid": `${l}-label-hint`,
                                    children: d,
                                }),
                        ],
                    }),
                (0, i.v)("div", {
                    class: "IncodeDropdownComposedWrapper",
                    children: [
                        (0, i.v)("div", {
                            class: (0, e.n)("IncodeDropdownComposedTriggerRow", {
                                IncodeDropdownComposedTriggerRowWithSibling: !!I,
                            }),
                            children: [
                                (0, i.v)("button", {
                                    ref: J,
                                    type: "button",
                                    id: l,
                                    class: "IncodeDropdownComposedTrigger",
                                    onClick: () => {
                                        p || C((l) => !l);
                                    },
                                    onFocus: () => {
                                        g(!0);
                                    },
                                    onKeyDown: (l) => {
                                        if (p) return;
                                        T?.(l);
                                        let { key: t } = l;
                                        if (1 === t.length && /^[a-zA-Z0-9]$/.test(t)) {
                                            l.preventDefault(),
                                                H.current && clearTimeout(H.current),
                                                (K.current += t.toLowerCase());
                                            let d = f.findIndex((l) => l.label.toLowerCase().startsWith(K.current));
                                            -1 !== d && (S || C(!0), j(d)),
                                                (H.current = setTimeout(() => {
                                                    K.current = "";
                                                }, 500));
                                            return;
                                        }
                                        switch (t) {
                                            case "ArrowDown":
                                                l.preventDefault(),
                                                    S ? j((l) => (l < f.length - 1 ? l + 1 : l)) : (C(!0), j(0));
                                                break;
                                            case "ArrowUp":
                                                l.preventDefault(),
                                                    S ? j((l) => (l > 0 ? l - 1 : l)) : (C(!0), j(f.length - 1));
                                                break;
                                            case "Home":
                                                l.preventDefault(), S && j(0);
                                                break;
                                            case "End":
                                                l.preventDefault(), S && j(f.length - 1);
                                                break;
                                            case "Enter":
                                                l.preventDefault(), S && D >= 0 && f[D] ? lt(f[D].value) : S || C(!0);
                                                break;
                                            case " ":
                                                l.preventDefault(),
                                                    S && D >= 0 && f[D] ? lt(f[D].value) : S || (C(!0), j(0));
                                                break;
                                            case "Escape":
                                                l.preventDefault(), S && (C(!1), j(-1), J.current?.focus());
                                                break;
                                            case "Tab":
                                                S && (C(!1), j(-1));
                                        }
                                    },
                                    tabIndex: p ? -1 : (Y ?? 0),
                                    disabled: p,
                                    role: "combobox",
                                    "aria-haspopup": "listbox",
                                    "aria-expanded": S ? "true" : "false",
                                    "aria-disabled": p ? "true" : void 0,
                                    "aria-required": N ? "true" : void 0,
                                    "aria-invalid": o ? "true" : void 0,
                                    "aria-labelledby": t ? `${B} ${A}` : w ? void 0 : A,
                                    "aria-label": t ? void 0 : w,
                                    "aria-controls": S ? _ : void 0,
                                    "aria-activedescendant": S && D >= 0 ? `${l}-option-${D}` : void 0,
                                    "aria-describedby": ll || void 0,
                                    "data-error": o ? "true" : void 0,
                                    "data-focused": x || S ? "true" : void 0,
                                    "data-testid": R,
                                    children: [
                                        (0, i.v)("span", {
                                            id: A,
                                            class: Q
                                                ? "IncodeDropdownComposedTriggerText"
                                                : "IncodeDropdownComposedTriggerPlaceholder",
                                            "aria-hidden": !t && w ? "true" : void 0,
                                            children: Q?.ariaLabel
                                                ? (0, i.v)(i.x, {
                                                      children: [
                                                          (0, i.v)("span", { "aria-hidden": "true", children: P }),
                                                          (0, i.v)("span", {
                                                              class: "IncodeDropdownComposedSrOnly",
                                                              children: Q.ariaLabel,
                                                          }),
                                                      ],
                                                  })
                                                : P,
                                        }),
                                        (0, i.v)("span", {
                                            class: "IncodeDropdownComposedTriggerIcon",
                                            "aria-hidden": "true",
                                            "data-open": S,
                                            children: (0, i.v)(a.l, {}),
                                        }),
                                    ],
                                }),
                                I && (0, i.v)("div", { class: "IncodeDropdownComposedSibling", children: I }),
                            ],
                        }),
                        S &&
                            (0, i.v)("div", {
                                ref: k,
                                class: "IncodeDropdownComposedList",
                                "data-error": o ? "true" : void 0,
                                children: [
                                    M &&
                                        (0, i.v)("div", {
                                            class: "IncodeDropdownComposedSearchWrapper",
                                            children: (0, i.v)("div", {
                                                class: "IncodeDropdownComposedSearchInner",
                                                children: [
                                                    (0, i.v)("input", {
                                                        ref: v,
                                                        type: "text",
                                                        class: "IncodeDropdownComposedSearchInput",
                                                        value: U,
                                                        onInput: (l) => {
                                                            F(l.target.value), j(0);
                                                        },
                                                        onKeyDown: (l) => {
                                                            let { key: t } = l;
                                                            switch (t) {
                                                                case "ArrowDown":
                                                                    l.preventDefault(),
                                                                        j((l) => (l < f.length - 1 ? l + 1 : l));
                                                                    break;
                                                                case "ArrowUp":
                                                                    l.preventDefault(), j((l) => (l > 0 ? l - 1 : l));
                                                                    break;
                                                                case "Home":
                                                                    l.preventDefault(), j(0);
                                                                    break;
                                                                case "End":
                                                                    l.preventDefault(), j(f.length - 1);
                                                                    break;
                                                                case "Enter":
                                                                    l.preventDefault(),
                                                                        D >= 0 && f[D] && lt(f[D].value);
                                                                    break;
                                                                case "Escape":
                                                                    l.preventDefault(),
                                                                        C(!1),
                                                                        j(-1),
                                                                        J.current?.focus();
                                                                    break;
                                                                case "Tab":
                                                                    U || (C(!1), j(-1));
                                                            }
                                                        },
                                                        placeholder: X,
                                                        role: "searchbox",
                                                        "aria-autocomplete": "list",
                                                        "aria-controls": _,
                                                        "aria-activedescendant": D >= 0 ? `${l}-option-${D}` : void 0,
                                                        "aria-label": X,
                                                        autocomplete: "off",
                                                    }),
                                                    U
                                                        ? (0, i.v)("button", {
                                                              type: "button",
                                                              class: "IncodeDropdownComposedCloseIconButton",
                                                              onMouseDown: (l) => l.preventDefault(),
                                                              onClick: () => {
                                                                  F(""), v.current?.focus();
                                                              },
                                                              "aria-label": "Clear search query",
                                                              children: (0, i.v)(a.o, {
                                                                  width: 20,
                                                                  height: 20,
                                                                  fillColor: "var(--icon-neutral-500)",
                                                              }),
                                                          })
                                                        : (0, i.v)("span", {
                                                              class: "IncodeDropdownComposedSearchIcon",
                                                              "aria-hidden": "true",
                                                              children: (0, i.v)(a.n, { size: 20 }),
                                                          }),
                                                ],
                                            }),
                                        }),
                                    (0, i.v)("div", {
                                        id: _,
                                        role: "listbox",
                                        "aria-labelledby": t ? B : void 0,
                                        "aria-label": t ? void 0 : (w ?? n),
                                        class: "IncodeDropdownComposedOptionsScroll",
                                        children:
                                            0 === f.length
                                                ? (0, i.v)("div", {
                                                      class: "IncodeDropdownComposedNoResults",
                                                      children: r,
                                                  })
                                                : f.map((t, d) => {
                                                      let e = Z === t.value,
                                                          c =
                                                              t.ariaLabel && e
                                                                  ? `${t.ariaLabel}, selected`
                                                                  : t.ariaLabel;
                                                      return (0, i.v)(
                                                          "div",
                                                          {
                                                              id: `${l}-option-${d}`,
                                                              role: "option",
                                                              "aria-label": c,
                                                              "aria-selected": e ? "true" : "false",
                                                              class: "IncodeDropdownComposedOption",
                                                              "data-highlighted": D === d,
                                                              ref: (l) => {
                                                                  E.current[d] = l;
                                                              },
                                                              onClick: () => lt(t.value),
                                                              onMouseDown: (l) => l.preventDefault(),
                                                              onMouseEnter: () => j(d),
                                                              children: [
                                                                  t.ariaLabel
                                                                      ? (0, i.v)("span", {
                                                                            "aria-hidden": "true",
                                                                            children: t.label,
                                                                        })
                                                                      : t.label,
                                                                  e &&
                                                                      (0, i.v)("span", {
                                                                          class: "IncodeDropdownComposedCheckmarkIcon",
                                                                          "aria-hidden": "true",
                                                                          children: (0, i.v)(a.u, {}),
                                                                      }),
                                                              ],
                                                          },
                                                          t.value,
                                                      );
                                                  }),
                                    }),
                                ],
                            }),
                    ],
                }),
                M &&
                    (0, i.v)("div", {
                        class: "IncodeDropdownComposedLiveRegion",
                        role: "status",
                        "aria-live": "polite",
                        "aria-atomic": "true",
                        children:
                            S && U
                                ? 0 === f.length
                                    ? r
                                    : `${f.length} result${1 !== f.length ? "s" : ""} available`
                                : "",
                    }),
                !G &&
                    o &&
                    (0, i.v)("div", {
                        class: "IncodeDropdownComposedErrorWrapper",
                        role: "alert",
                        "data-testid": `${l}-error-wrapper`,
                        children: [
                            h &&
                                (0, i.v)("div", {
                                    class: "IncodeDropdownComposedIconWrapper",
                                    children: (0, i.v)(c.t, { size: 17 }),
                                }),
                            (0, i.v)("p", { id: q, class: "IncodeDropdownComposedError", children: o }),
                        ],
                    }),
                !G &&
                    u &&
                    !o &&
                    (0, i.v)("div", {
                        class: "IncodeDropdownComposedHelperWrapper",
                        "data-testid": `${l}-helper-wrapper`,
                        children: [
                            W &&
                                (0, i.v)("div", {
                                    class: "IncodeDropdownComposedIconWrapper",
                                    children: (0, i.v)(s.t, { size: 17 }),
                                }),
                            (0, i.v)("p", { id: $, class: "IncodeDropdownComposedHelper", children: u }),
                        ],
                    }),
            ],
        });
    };
