a.d(l, { g: () => b });
var t = a(627968),
    o = a(64700),
    n = a(352404),
    i = a(928231),
    s = a(961345),
    r = a(610479),
    d = a(158954),
    u = a(732955),
    c = a(996334);
let b = {
    title: "DatePicker",
    stories: [
        {
            id: "date-picker",
            name: "DatePicker",
            component: function (e) {
                let {
                        label: l,
                        description: a,
                        disabled: b,
                        required: p,
                        granularity: m,
                        hourCycle: x,
                        hideTimeZone: v,
                        showMinMax: h,
                    } = e,
                    [y, f] = o.useState((0, n.Ec)((0, n.Xj)())),
                    [g, V] = o.useState(""),
                    C = o.useCallback((e) => {
                        f(e), V("");
                    }, []),
                    S = o.useCallback(() => {
                        f(null);
                    }, []),
                    j = o.useCallback(() => {
                        f((0, n.Ec)((0, n.Xj)()));
                    }, []),
                    k = o.useCallback(() => {
                        "day" === m ? f((0, i._U)("2024-12-25")) : f((0, i.DP)("2024-12-25T15:30"));
                    }, [m]),
                    w = o.useCallback(() => {
                        if (p && null == y) V("This field is required");
                        else if (h && null != y) {
                            let e = (0, i._U)("2024-01-01"),
                                l = (0, i._U)("2024-12-31");
                            (0 > y.compare(e) || y.compare(l) > 0) && V("Date must be within 2024");
                        }
                    }, [y, p, h]);
                return (0, c.i)("CalendarStory")
                    ? (0, t.jsxs)(d.BJc, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, t.jsx)(r.l, {
                                  label: l,
                                  description: "" !== a ? a : void 0,
                                  value: y,
                                  onChange: C,
                                  disabled: b,
                                  required: p,
                                  granularity: m,
                                  hourCycle: x,
                                  hideTimeZone: v,
                                  minValue: h ? (0, i._U)("2024-01-01") : void 0,
                                  maxValue: h ? (0, i._U)("2024-12-31") : void 0,
                                  errorMessage: g,
                                  helperText: null != y ? (0, s.default)(y.toDate((0, n.Xj)()), "MMMM d, yyyy") : "",
                              }),
                              (0, t.jsxs)(d.BJc, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, t.jsx)(u.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: S,
                                          disabled: b,
                                      }),
                                      (0, t.jsx)(u.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: j,
                                          disabled: b,
                                      }),
                                      (0, t.jsx)(u.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Dec 25",
                                          onClick: k,
                                          disabled: b,
                                      }),
                                      (0, t.jsx)(u.$nd, {
                                          variant: "primary",
                                          size: "sm",
                                          text: "Validate",
                                          onClick: w,
                                          disabled: b,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, t.jsxs)(d.wx6, {
                          type: "critical",
                          children: [
                              "This component is experimental and only available behind the ",
                              (0, t.jsx)("code", { children: "2025-10-mana-date-inputs" }),
                              " ",
                              "experiment. Do not use this in production yet.",
                          ],
                      });
            },
            controls: {
                label: { type: "text", label: "Label", defaultValue: "Select a date" },
                description: { type: "text", label: "Description", defaultValue: "Choose your preferred date" },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                required: { type: "boolean", label: "Required", defaultValue: !1 },
                granularity: {
                    type: "select",
                    label: "Granularity",
                    options: [
                        { label: "Day", value: "day" },
                        { label: "Hour", value: "hour" },
                        { label: "Minute", value: "minute" },
                        { label: "Second", value: "second" },
                    ],
                    defaultValue: "day",
                },
                hourCycle: {
                    type: "select",
                    label: "Hour Cycle",
                    options: [
                        { label: "12 Hour", value: 12 },
                        { label: "24 Hour", value: 24 },
                    ],
                    defaultValue: 24,
                },
                hideTimeZone: { type: "boolean", label: "Hide Time Zone", defaultValue: !1 },
                showMinMax: { type: "boolean", label: "Show Min/Max (2024)", defaultValue: !1 },
            },
        },
    ],
};
