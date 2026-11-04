var r = t(912295),
    n = t(892730),
    i = t(879452),
    o = t(652664),
    l = t(531157),
    s = t(23619),
    d = t(795094),
    u = t(371716),
    c = t(470194),
    m = t(631705),
    h = t(95638),
    y = t(582128);
let g = new WeakMap(),
    p = "__reactAriaDateFieldRole",
    f = "__reactAriaDateFieldFocusManager";
t.d(
    a,
    {},
    {
        OX: g,
        cJ: function (e, a, t) {
            var D;
            let v,
                { isInvalid: b, validationErrors: $, validationDetails: R } = a.displayValidation,
                {
                    labelProps: P,
                    fieldProps: w,
                    descriptionProps: x,
                    errorMessageProps: k,
                } = (0, d.M)({ ...e, labelElementType: "span", isInvalid: b, errorMessage: e.errorMessage || $ }),
                S = (0, y.useRef)(null),
                { focusWithinProps: V } = (0, u.R)({
                    ...e,
                    onFocusWithin(t) {
                        ((S.current = a.value), e.onFocus?.(t));
                    },
                    onBlurWithin: (t) => {
                        (a.confirmPlaceholder(), a.value !== S.current && a.commitValidation(), e.onBlur?.(t));
                    },
                    onFocusWithinChange: e.onFocusChange,
                }),
                C = (0, h.o)((D = i.A) && D.__esModule ? D.default : D, "@react-aria/datepicker"),
                M = "hour" === a.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription",
                I = "hour" === a.maxGranularity ? "time" : "date",
                E = a.value ? C.format(M, { [I]: a.formatValue({ month: "long" }) }) : "",
                F = (0, s.I)(E),
                T =
                    "presentation" === e[p]
                        ? w["aria-describedby"]
                        : [F["aria-describedby"], w["aria-describedby"]].filter(Boolean).join(" ") || void 0,
                O = e[f],
                A = (0, y.useMemo)(() => O || (0, r.C7)(t), [O, t]),
                N = (0, l.P)(a, t, "presentation" === e[p]);
            g.set(a, {
                ariaLabel: e["aria-label"],
                ariaLabelledBy: [P.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
                ariaDescribedBy: T,
                focusManager: A,
            });
            let Z = (0, y.useRef)(e.autoFocus);
            ((v =
                "presentation" === e[p]
                    ? { role: "presentation" }
                    : (0, o.v)(w, { role: "group", "aria-disabled": e.isDisabled || void 0, "aria-describedby": T })),
                (0, y.useEffect)(() => {
                    (Z.current && A.focusFirst(), (Z.current = !1));
                }, [A]),
                (0, c.F)(e.inputRef, a.defaultValue, a.setValue),
                (0, m.X)(
                    {
                        ...e,
                        focus() {
                            A.focusFirst();
                        },
                    },
                    a,
                    e.inputRef,
                ));
            let U = {
                type: "hidden",
                name: e.name,
                form: e.form,
                value: a.value?.toString() || "",
                disabled: e.isDisabled,
            };
            "native" === e.validationBehavior &&
                ((U.type = "text"), (U.hidden = !0), (U.required = e.isRequired), (U.onChange = () => {}));
            let z = (0, n.$)(e);
            return {
                labelProps: {
                    ...P,
                    onClick: () => {
                        A.focusFirst();
                    },
                },
                fieldProps: (0, o.v)(z, v, N, V, {
                    onKeyDown: e.onKeyDown,
                    onKeyUp: e.onKeyUp,
                    style: { unicodeBidi: "isolate" },
                }),
                inputProps: U,
                descriptionProps: x,
                errorMessageProps: k,
                isInvalid: b,
                validationErrors: $,
                validationDetails: R,
            };
        },
        pK: p,
        so: f,
    },
);
