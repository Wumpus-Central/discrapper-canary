l.d(n, { Z: () => p }), l(47120);
var t = l(200651);
l(192379);
var i = l(120356),
    r = l.n(i),
    a = l(911969),
    s = l(739754),
    o = l(970184),
    u = l(197653),
    c = l(987106),
    d = l(861529),
    m = l(568248),
    h = l(510368);
function p(e) {
    let { components: n, accessory: l } = e,
        { message: i } = (0, o.CJ)(),
        [p, x] = (0, u.e4)(),
        v = (0, u.$Y)(x);
    return (0, t.jsxs)('div', {
        className: h.section,
        ref: p,
        children: [
            (0, t.jsxs)('div', {
                className: h.children,
                children: [
                    (0, t.jsx)('div', {
                        className: h.textChildren,
                        children: n.map((e) => (0, t.jsx)(d.Z, { ...e }, e.id))
                    }),
                    (0, t.jsx)('div', {
                        className: r()(h.accessory, { [h.restrictWidth]: v }),
                        children: (function (e) {
                            switch (e.type) {
                                case a.re.BUTTON:
                                    return (0, t.jsx)(c.Z, { ...e });
                                case a.re.THUMBNAIL:
                                    return (0, t.jsx)(m.Z, { ...e });
                            }
                        })(l)
                    })
                ]
            }),
            null != i
                ? (0, t.jsx)(s.ZP, {
                      message: i,
                      component: e
                  })
                : null
        ]
    });
}
