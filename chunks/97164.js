a.d(l, { g: () => p });
var t = a(627968),
    o = a(64700),
    n = a(352404),
    i = a(928231),
    r = a(961345),
    s = a(441349),
    d = a(683071),
    u = a(331322),
    c = a(821609),
    b = a(996334);
let p = {
    title: "DatePicker",
    stories: [
        {
            id: "date-picker",
            name: "DatePicker",
            component: function (e) {
                let { label: l, description: a, errorMessage: p, disabled: m, required: h, showMinMax: x } = e,
                    [v, f] = o.useState((0, n.Ec)((0, n.Xj)())),
                    g = o.useCallback((e) => {
                        f(e);
                    }, []),
                    y = o.useCallback(() => {
                        f(null);
                    }, []),
                    C = o.useCallback(() => {
                        f((0, n.Ec)((0, n.Xj)()));
                    }, []),
                    j = o.useCallback(() => {
                        f((0, i._U)("2024-12-25"));
                    }, []);
                return (0, b.i)("CalendarStory")
                    ? (0, t.jsxs)(u.B, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, t.jsx)(s.l, {
                                  label: l,
                                  description: "" !== a ? a : void 0,
                                  value: v,
                                  onChange: g,
                                  disabled: m,
                                  required: h,
                                  minValue: x ? (0, i._U)("2024-01-01") : void 0,
                                  maxValue: x ? (0, i._U)("2024-12-31") : void 0,
                                  errorMessage: "" !== p ? p : void 0,
                                  helperText: null != v ? (0, r.default)(v.toDate((0, n.Xj)()), "MMMM d, yyyy") : "",
                              }),
                              (0, t.jsxs)(u.B, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, t.jsx)(c.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: y,
                                          disabled: m,
                                      }),
                                      (0, t.jsx)(c.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: C,
                                          disabled: m,
                                      }),
                                      (0, t.jsx)(c.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Dec 25",
                                          onClick: j,
                                          disabled: m,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, t.jsxs)(d.w, {
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
                errorMessage: { type: "text", label: "Error Message", defaultValue: "" },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                required: { type: "boolean", label: "Required", defaultValue: !1 },
                showMinMax: { type: "boolean", label: "Show Min/Max (2024)", defaultValue: !1 },
            },
        },
    ],
};
