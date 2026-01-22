t.d(n, {
    B: () => l,
    c: () => c,
});
var r = t(627968);

function l(e) {
    let { type: n, children: t, value: l, items: c } = e;
    switch (n) {
        case "ordered":
            let a = (l + c.length - 1).toString().length;
            return (0, r.jsx)("ol", {
                start: l,
                style: {
                    "--totalCharacters": a,
                },
                children: t,
            });
        case "unordered":
            return (0, r.jsx)("ul", {
                children: t,
            });
    }
}

function c(e) {
    let { children: n } = e;
    return (0, r.jsx)("li", {
        children: n,
    });
}
t(64700);
