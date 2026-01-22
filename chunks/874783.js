n.d(t, {
    g: () => f,
}),
    n(228524),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(352404),
    s = n(928231),
    o = n(961345),
    l = n(610479),
    c = n(158954),
    u = n(732955),
    d = n(996334);
let f = {
    title: "DatePicker",
    stories: [
        {
            id: "date-picker",
            name: "DatePicker",
            component: function (e) {
                let {
                        label: t,
                        description: n,
                        disabled: f,
                        required: p,
                        granularity: _,
                        hourCycle: h,
                        hideTimeZone: m,
                        showMinMax: g,
                    } = e,
                    [E, b] = i.useState((0, a.Ec)((0, a.Xj)())),
                    [y, O] = i.useState(""),
                    A = i.useCallback((e) => {
                        b(e), O("");
                    }, []),
                    v = i.useCallback(() => {
                        b(null);
                    }, []),
                    S = i.useCallback(() => {
                        b((0, a.Ec)((0, a.Xj)()));
                    }, []),
                    I = i.useCallback(() => {
                        "day" === _ ? b((0, s._U)("2024-12-25")) : b((0, s.DP)("2024-12-25T15:30"));
                    }, [_]),
                    T = i.useCallback(() => {
                        if (p && null == E) O("This field is required");
                        else if (g && null != E) {
                            let e = (0, s._U)("2024-01-01"),
                                t = (0, s._U)("2024-12-31");
                            (0 > E.compare(e) || E.compare(t) > 0) && O("Date must be within 2024");
                        }
                    }, [E, p, g]);
                return (0, d.i)("CalendarStory")
                    ? (0, r.jsxs)(c.BJc, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, r.jsx)(l.l, {
                                  label: t,
                                  description: "" !== n ? n : void 0,
                                  value: E,
                                  onChange: A,
                                  disabled: f,
                                  required: p,
                                  granularity: _,
                                  hourCycle: h,
                                  hideTimeZone: m,
                                  minValue: g ? (0, s._U)("2024-01-01") : void 0,
                                  maxValue: g ? (0, s._U)("2024-12-31") : void 0,
                                  errorMessage: y,
                                  helperText: null != E ? (0, o.default)(E.toDate((0, a.Xj)()), "MMMM d, yyyy") : "",
                              }),
                              (0, r.jsxs)(c.BJc, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, r.jsx)(u.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: v,
                                          disabled: f,
                                      }),
                                      (0, r.jsx)(u.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: S,
                                          disabled: f,
                                      }),
                                      (0, r.jsx)(u.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Dec 25",
                                          onClick: I,
                                          disabled: f,
                                      }),
                                      (0, r.jsx)(u.$nd, {
                                          variant: "primary",
                                          size: "sm",
                                          text: "Validate",
                                          onClick: T,
                                          disabled: f,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, r.jsxs)(c.wx6, {
                          type: "critical",
                          children: [
                              "This component is experimental and only available behind the ",
                              (0, r.jsx)("code", {
                                  children: "2025-10-mana-date-inputs",
                              }),
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
