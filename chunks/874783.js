"use strict";
n.d(t, { g: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(352404),
    s = n(928231),
    o = n(961345),
    l = n(610479),
    u = n(158954),
    c = n(732955),
    d = n(996334);
let _ = {
    title: "DatePicker",
    stories: [
        {
            id: "date-picker",
            name: "DatePicker",
            component: function (e) {
                let {
                        label: t,
                        description: n,
                        disabled: _,
                        required: f,
                        granularity: p,
                        hourCycle: h,
                        hideTimeZone: m,
                        showMinMax: g,
                    } = e,
                    [E, A] = i.useState((0, a.Ec)((0, a.Xj)())),
                    [I, T] = i.useState(""),
                    y = i.useCallback((e) => {
                        A(e), T("");
                    }, []),
                    S = i.useCallback(() => {
                        A(null);
                    }, []),
                    v = i.useCallback(() => {
                        A((0, a.Ec)((0, a.Xj)()));
                    }, []),
                    C = i.useCallback(() => {
                        "day" === p ? A((0, s._U)("2024-12-25")) : A((0, s.DP)("2024-12-25T15:30"));
                    }, [p]),
                    b = i.useCallback(() => {
                        if (f && null == E) T("This field is required");
                        else if (g && null != E) {
                            let e = (0, s._U)("2024-01-01"),
                                t = (0, s._U)("2024-12-31");
                            (0 > E.compare(e) || E.compare(t) > 0) && T("Date must be within 2024");
                        }
                    }, [E, f, g]);
                return (0, d.i)("CalendarStory")
                    ? (0, r.jsxs)(u.BJc, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, r.jsx)(l.l, {
                                  label: t,
                                  description: "" !== n ? n : void 0,
                                  value: E,
                                  onChange: y,
                                  disabled: _,
                                  required: f,
                                  granularity: p,
                                  hourCycle: h,
                                  hideTimeZone: m,
                                  minValue: g ? (0, s._U)("2024-01-01") : void 0,
                                  maxValue: g ? (0, s._U)("2024-12-31") : void 0,
                                  errorMessage: I,
                                  helperText: null != E ? (0, o.default)(E.toDate((0, a.Xj)()), "MMMM d, yyyy") : "",
                              }),
                              (0, r.jsxs)(u.BJc, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, r.jsx)(c.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: S,
                                          disabled: _,
                                      }),
                                      (0, r.jsx)(c.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: v,
                                          disabled: _,
                                      }),
                                      (0, r.jsx)(c.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Dec 25",
                                          onClick: C,
                                          disabled: _,
                                      }),
                                      (0, r.jsx)(c.$nd, {
                                          variant: "primary",
                                          size: "sm",
                                          text: "Validate",
                                          onClick: b,
                                          disabled: _,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, r.jsxs)(u.wx6, {
                          type: "critical",
                          children: [
                              "This component is experimental and only available behind the ",
                              (0, r.jsx)("code", { children: "2025-10-mana-date-inputs" }),
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
