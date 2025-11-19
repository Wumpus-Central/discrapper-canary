n.d(t, {
    Q: () => c,
    W: () => f,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(657707),
    s = n(777207),
    l = n(343696),
    c = (function (e) {
        return (
            (e.WARNING = "warn"),
            (e.INFO = "info"),
            (e.ERROR = "danger"),
            (e.POSITIVE = "positive"),
            (e.PREVIEW = "preview"),
            e
        );
    })({});
function u(e, t) {
    if (null != t) return t;
    switch (e) {
        case "warn":
            return o.aNP;
        case "info":
            return o.d3s;
        case "danger":
            return o.Mgn;
        case "positive":
            return o.dz2;
        case "preview":
            return o.Che;
    }
}
function d(e) {
    switch (e) {
        case "warn":
            return l.warning;
        case "info":
            return l.info;
        case "danger":
            return l.error;
        case "positive":
        case "preview":
            return l.positive;
    }
}
function f(e) {
    let {
            children: t,
            messageType: n,
            action: i,
            className: o,
            textColor: c = "text-default",
            textVariant: f = "text-sm/medium",
            icon: _,
        } = e,
        p = u(n, _),
        h = d(n);
    return (0, r.jsxs)("div", {
        className: a()(l.container, h, o),
        children: [
            (0, r.jsx)("div", {
                className: l.iconDiv,
                children:
                    null != p
                        ? (0, r.jsx)(p, {
                              className: l.icon,
                              color: "currentColor",
                          })
                        : null,
            }),
            (0, r.jsx)(s.x, {
                className: l.text,
                color: c,
                variant: f,
                children: t,
            }),
            null != i
                ? (0, r.jsx)("div", {
                      className: l.actionContainer,
                      children: i,
                  })
                : null,
        ],
    });
}
