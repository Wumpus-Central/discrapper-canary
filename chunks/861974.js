n.d(t, {
    Q: () => u,
    W: () => _,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a);
n(161953);
var s = n(657707),
    l = n(777207),
    c = n(343696),
    u = (function (e) {
        return (
            (e.WARNING = "warn"),
            (e.INFO = "info"),
            (e.ERROR = "danger"),
            (e.POSITIVE = "positive"),
            (e.PREVIEW = "preview"),
            e
        );
    })({});
function d(e, t) {
    if (null != t) return t;
    switch (e) {
        case "warn":
            return s.aNP;
        case "info":
            return s.d3s;
        case "danger":
            return s.Mgn;
        case "positive":
            return s.dz2;
        case "preview":
            return s.Che;
    }
}
function f(e) {
    switch (e) {
        case "warn":
            return c.warning;
        case "info":
            return c.info;
        case "danger":
            return c.error;
        case "positive":
        case "preview":
            return c.positive;
    }
}
let p = (e) => {
    let { messageType: t, icon: n } = e,
        r = d(t, n);
    return i.createElement(r, {
        className: c.icon,
        color: "currentColor",
    });
};
function _(e) {
    let {
            children: t,
            messageType: n,
            action: i,
            className: a,
            textColor: s = "text-default",
            textVariant: u = "text-sm/medium",
            icon: d,
            hidden: _ = !1,
        } = e,
        m = f(n);
    return (0, r.jsx)("div", {
        className: o()(c.container, m, a, { [c.hidden]: _ }),
        children: (0, r.jsxs)("div", {
            className: c.innerContainer,
            children: [
                (0, r.jsx)("div", {
                    className: c.iconDiv,
                    children: (0, r.jsx)(p, {
                        messageType: n,
                        icon: d,
                    }),
                }),
                (0, r.jsx)(l.x, {
                    className: c.text,
                    color: s,
                    variant: u,
                    children: t,
                }),
                null != i
                    ? (0, r.jsx)("div", {
                          className: c.actionContainer,
                          children: i,
                      })
                    : null,
            ],
        }),
    });
}
