n.d(t, { N: () => c }), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(440562),
    s = n(163250);
function l(e) {
    let { id: t, errorMessage: n, helperText: r, successMessage: a } = e,
        o = i.useId(),
        s = i.useId(),
        l = i.useId(),
        c = (null != r && "" !== r) || (null != a && "" !== a);
    return i.useMemo(
        () => ({
            controlId: null != t ? t : o,
            describedById: c ? s : void 0,
            errorMessageId: null != n && "" !== n ? l : void 0,
        }),
        [t, o, s, l, n, c],
    );
}
function c(e) {
    let {
            label: t,
            hideLabel: n = !1,
            required: i,
            description: c,
            helperText: d,
            children: f,
            errorMessage: _,
            successMessage: p,
            trailingContent: h,
        } = e,
        m = l(e),
        { controlId: g, describedById: E, errorMessageId: b } = m,
        y =
            null != t && "" !== t
                ? (0, r.jsxs)(a.Text, {
                      tag: "label",
                      variant: "text-md/medium",
                      htmlFor: g,
                      className: s.label,
                      children: [
                          t,
                          i &&
                              (0, r.jsx)(a.Text, {
                                  "aria-hidden": !0,
                                  variant: "text-md/normal",
                                  color: "text-feedback-critical",
                                  className: s.required,
                                  children: "*",
                              }),
                      ],
                  })
                : null;
    return (0, r.jsx)(o.U.Provider, {
        value: m,
        children: (0, r.jsxs)("div", {
            className: s.control,
            children: [
                n ? (0, r.jsx)(a.nn4, { children: y }) : y,
                null != c &&
                    "" !== c &&
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        className: s.description,
                        children: c,
                    }),
                f,
                (0, r.jsx)(u, {
                    successMessage: p,
                    errorMessage: _,
                    helperText: d,
                    trailingContent: h,
                    describedById: E,
                    errorMessageId: b,
                }),
            ],
        }),
    });
}
function u(e) {
    let {
            successMessage: t,
            errorMessage: n,
            helperText: i,
            trailingContent: o,
            describedById: l,
            errorMessageId: c,
        } = e,
        u = (0, r.jsx)("div", {}),
        d = null != o;
    return (null != t && "" !== t
        ? ((d = !0),
          (u = (0, r.jsxs)("div", {
              className: s.statusMessageContainer,
              children: [
                  (0, r.jsx)(a.owK, {
                      size: "xs",
                      color: a.TVs.colors.TEXT_FEEDBACK_POSITIVE,
                  }),
                  (0, r.jsx)(a.Text, {
                      variant: "text-xs/normal",
                      color: "text-feedback-positive",
                      id: l,
                      children: t,
                  }),
              ],
          })))
        : null != n && "" !== n
          ? ((d = !0),
            (u = (0, r.jsxs)("div", {
                className: s.statusMessageContainer,
                children: [
                    (0, r.jsx)(a.Mgn, {
                        size: "xs",
                        color: a.TVs.colors.TEXT_FEEDBACK_CRITICAL,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        id: c,
                        children: n,
                    }),
                ],
            })))
          : null != i &&
            ((d = !0),
            (u = (0, r.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                id: l,
                children: i,
            }))),
    d)
        ? (0, r.jsxs)("div", {
              className: s.helperTextContainer,
              children: [u, o],
          })
        : null;
}
