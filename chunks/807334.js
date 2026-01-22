n.d(t, {
    A: () => s,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(690450);

function s(e) {
    let { title: t, settings: n } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(i.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: l.wx,
                children: t,
            }),
            n.map((e) => e.renderComponent()),
        ],
    });
}
