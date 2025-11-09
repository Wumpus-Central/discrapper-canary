n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(284881),
    o = n(148494);
function s(e) {
    let { question: t, questionId: n, value: s, onValueChange: l } = e,
        c = t.Selector !== a.E_.SINGLE_LINE;
    return (0, r.jsx)("div", {
        className: o.container,
        children: c
            ? (0, r.jsx)(i.Kx8, {
                  value: s,
                  onChange: (e) => l(n, e),
                  placeholder: "Enter your response...",
                  rows: 4,
              })
            : (0, r.jsx)(i.oil, {
                  value: s,
                  onChange: (e) => l(n, e),
                  placeholder: "Enter your response...",
              }),
    });
}
