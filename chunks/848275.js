n.d(t, { Z: () => c }), n(388685), n(35282);
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(284881),
    o = n(987588);
function s(e) {
    let { question: t, questionId: n, value: a, onValueChange: s } = e;
    if (null == t.Choices)
        return (0, r.jsx)("div", {
            className: o.container,
            children: (0, r.jsx)(i.Text, {
                variant: "text-sm/medium",
                className: o.noChoices,
                children: "No choices available for this question",
            }),
        });
    let l = Object.entries(t.Choices).map((e) => {
        let [t, n] = e;
        return {
            name: n.Display,
            value: t,
        };
    });
    return (0, r.jsx)("div", {
        className: o.container,
        children: (0, r.jsx)(i.FXm, {
            options: l,
            value: null != a ? a : void 0,
            onChange: (e) => s(n, e),
        }),
    });
}
function l(e) {
    let { question: t, questionId: n, value: a, onValueChange: s } = e,
        l = null != a && "" !== a ? a.split(",") : [],
        c = (e) => {
            s(n, (l.includes(e) ? l.filter((t) => t !== e) : [...l, e]).join(","));
        };
    return null == t.Choices || 0 === Object.keys(t.Choices).length
        ? (0, r.jsx)("div", {
              className: o.container,
              children: (0, r.jsx)(i.Text, {
                  variant: "text-sm/medium",
                  className: o.noChoices,
                  children: "No choices available for this question",
              }),
          })
        : (0, r.jsx)("div", {
              className: o.container,
              children: (0, r.jsx)("div", {
                  className: o.choicesContainer,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e,
                          a = l.includes(t);
                      return (0, r.jsx)(
                          "div",
                          {
                              className: o.choiceRow,
                              children: (0, r.jsx)(i.Checkbox, {
                                  checked: a,
                                  onChange: () => c(t),
                                  label: n.Display,
                              }),
                          },
                          t,
                      );
                  }),
              }),
          });
}
function c(e) {
    let { question: t, questionId: n, value: i, onValueChange: o } = e;
    return t.Selector === a.E_.SINGLE_ANSWER
        ? (0, r.jsx)(s, {
              question: t,
              questionId: n,
              value: i,
              onValueChange: o,
          })
        : (0, r.jsx)(l, {
              question: t,
              questionId: n,
              value: i,
              onValueChange: o,
          });
}
