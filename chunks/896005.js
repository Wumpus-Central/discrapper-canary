n.d(t, {
    A: () => p,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(641324),
    c = n(46373),
    u = n(112715),
    d = n(702421);

function f(e) {
    let { node: t } = e,
        { useTitle: n, useSubtitle: a, variant: f = "default", layout: p, initialize: _ } = t,
        h = null == n ? void 0 : n(),
        m = null == a ? void 0 : a(),
        g = i.useId(),
        E = null != h && "" !== h,
        y = null != m && "" !== m;
    return (
        (0, u.Z)(_),
        (0, r.jsxs)("fieldset", {
            "aria-describedby": y ? g : void 0,
            children: [
                E
                    ? (0, r.jsx)(o.Text, {
                          tag: "legend",
                          variant: "text-md/semibold",
                          color: "text-strong",
                          className: s()(d.DD, {
                              [d.mU]: !y,
                              [d.jS]: !y,
                          }),
                          children: h,
                      })
                    : null,
                y
                    ? (0, r.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          id: g,
                          className: s()(d.VA, d.mU, {
                              [d.jS]: !E,
                          }),
                          children: m,
                      })
                    : null,
                (0, r.jsx)(o.BJc, {
                    direction: "vertical",
                    gap: 8,
                    children: p.map((e, t) =>
                        (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, r.jsx)(l.A, {
                                        node: e,
                                    }),
                                    "separators" === f && t !== p.length - 1 && (0, r.jsx)(c.A, {}),
                                ],
                            },
                            e.key,
                        ),
                    ),
                }),
            ],
        })
    );
}
let p = i.memo(f);
