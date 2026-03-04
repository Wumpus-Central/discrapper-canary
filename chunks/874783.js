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
                let { label: l, description: a, errorMessage: b, disabled: p, required: m, showMinMax: x } = e,
                    [h, v] = o.useState((0, n.Ec)((0, n.Xj)())),
                    y = o.useCallback((e) => {
                        v(e);
                    }, []),
                    f = o.useCallback(() => {
                        v(null);
                    }, []),
                    g = o.useCallback(() => {
                        v((0, n.Ec)((0, n.Xj)()));
                    }, []),
                    V = o.useCallback(() => {
                        v((0, i._U)("2024-12-25"));
                    }, []);
                return (0, c.i)("CalendarStory")
                    ? (0, t.jsxs)(d.BJc, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, t.jsx)(r.lr, {
                                  label: l,
                                  description: "" !== a ? a : void 0,
                                  value: h,
                                  onChange: y,
                                  disabled: p,
                                  required: m,
                                  minValue: x ? (0, i._U)("2024-01-01") : void 0,
                                  maxValue: x ? (0, i._U)("2024-12-31") : void 0,
                                  errorMessage: "" !== b ? b : void 0,
                                  helperText: null != h ? (0, s.default)(h.toDate((0, n.Xj)()), "MMMM d, yyyy") : "",
                              }),
                              (0, t.jsxs)(d.BJc, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, t.jsx)(u.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: f,
                                          disabled: p,
                                      }),
                                      (0, t.jsx)(u.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: g,
                                          disabled: p,
                                      }),
                                      (0, t.jsx)(u.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Dec 25",
                                          onClick: V,
                                          disabled: p,
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
                errorMessage: { type: "text", label: "Error Message", defaultValue: "" },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                required: { type: "boolean", label: "Required", defaultValue: !1 },
                showMinMax: { type: "boolean", label: "Show Min/Max (2024)", defaultValue: !1 },
            },
        },
    ],
};
