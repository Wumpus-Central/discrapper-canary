t.d(l, { b: () => b }), t(953529), t(388685);
var a = t(951288),
    n = t(647438),
    o = t(533426),
    i = t(333684),
    r = t(119058),
    s = t(634201),
    u = t(793030),
    d = t(159691),
    c = t(70989);
let b = {
    title: "DatePicker",
    stories: [
        {
            id: "date-picker",
            name: "DatePicker",
            component: function (e) {
                let {
                        label: l,
                        description: t,
                        disabled: b,
                        required: p,
                        granularity: y,
                        hourCycle: m,
                        hideTimeZone: f,
                        showMinMax: v,
                    } = e,
                    [h, x] = n.useState((0, o.Lg)((0, o.iT)())),
                    [g, O] = n.useState(""),
                    j = n.useCallback((e) => {
                        x(e), O("");
                    }, []),
                    V = n.useCallback(() => {
                        x(null);
                    }, []),
                    w = n.useCallback(() => {
                        x((0, o.Lg)((0, o.iT)()));
                    }, []),
                    S = n.useCallback(() => {
                        "day" === y ? x((0, i.sG)("2024-12-25")) : x((0, i.wG)("2024-12-25T15:30"));
                    }, [y]),
                    C = n.useCallback(() => {
                        if (p && null == h) O("This field is required");
                        else if (v && null != h) {
                            let e = (0, i.sG)("2024-01-01"),
                                l = (0, i.sG)("2024-12-31");
                            (0 > h.compare(e) || h.compare(l) > 0) && O("Date must be within 2024");
                        }
                    }, [h, p, v]);
                return (0, c.K)("CalendarStory")
                    ? (0, a.jsxs)(u.Kqy, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, a.jsx)(s.M, {
                                  label: l,
                                  description: "" !== t ? t : void 0,
                                  value: h,
                                  onChange: j,
                                  disabled: b,
                                  required: p,
                                  granularity: y,
                                  hourCycle: m,
                                  hideTimeZone: f,
                                  minValue: v ? (0, i.sG)("2024-01-01") : void 0,
                                  maxValue: v ? (0, i.sG)("2024-12-31") : void 0,
                                  errorMessage: g,
                                  helperText: null != h ? (0, r.default)(h.toDate((0, o.iT)()), "MMMM d, yyyy") : "",
                              }),
                              (0, a.jsxs)(u.Kqy, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, a.jsx)(d.zxk, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: V,
                                          disabled: b,
                                      }),
                                      (0, a.jsx)(d.zxk, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: w,
                                          disabled: b,
                                      }),
                                      (0, a.jsx)(d.zxk, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Dec 25",
                                          onClick: S,
                                          disabled: b,
                                      }),
                                      (0, a.jsx)(d.zxk, {
                                          variant: "primary",
                                          size: "sm",
                                          text: "Validate",
                                          onClick: C,
                                          disabled: b,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, a.jsxs)(u.M14, {
                          type: "critical",
                          children: [
                              "This component is experimental and only available behind the ",
                              (0, a.jsx)("code", { children: "2025-10-mana-date-inputs" }),
                              " ",
                              "experiment. Do not use this in production yet.",
                          ],
                      });
            },
            controls: {
                label: {
                    type: "text",
                    label: "Label",
                    defaultValue: "Select a date",
                },
                description: {
                    type: "text",
                    label: "Description",
                    defaultValue: "Choose your preferred date",
                },
                disabled: {
                    type: "boolean",
                    label: "Disabled",
                    defaultValue: !1,
                },
                required: {
                    type: "boolean",
                    label: "Required",
                    defaultValue: !1,
                },
                granularity: {
                    type: "select",
                    label: "Granularity",
                    options: [
                        {
                            label: "Day",
                            value: "day",
                        },
                        {
                            label: "Hour",
                            value: "hour",
                        },
                        {
                            label: "Minute",
                            value: "minute",
                        },
                        {
                            label: "Second",
                            value: "second",
                        },
                    ],
                    defaultValue: "day",
                },
                hourCycle: {
                    type: "select",
                    label: "Hour Cycle",
                    options: [
                        {
                            label: "12 Hour",
                            value: 12,
                        },
                        {
                            label: "24 Hour",
                            value: 24,
                        },
                    ],
                    defaultValue: 24,
                },
                hideTimeZone: {
                    type: "boolean",
                    label: "Hide Time Zone",
                    defaultValue: !1,
                },
                showMinMax: {
                    type: "boolean",
                    label: "Show Min/Max (2024)",
                    defaultValue: !1,
                },
            },
        },
    ],
};
