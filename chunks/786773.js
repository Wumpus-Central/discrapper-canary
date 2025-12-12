n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(481060),
    o = n(284881),
    a = n(30954);
function s(e) {
    let { question: t, questionId: n, value: s, onValueChange: l } = e,
        c = t.Selector !== o.E_.SINGLE_LINE;
    return (0, r.jsx)("div", {
        className: a.container,
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
