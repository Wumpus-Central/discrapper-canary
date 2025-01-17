t.d(n, {
    Z: function () {
        return p;
    }
}),
    t(47120);
var l = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    a = t(911969),
    o = t(739754),
    s = t(970184),
    c = t(197653),
    u = t(987106),
    d = t(861529),
    m = t(568248),
    f = t(510368);
function p(e) {
    let { components: n, accessory: t } = e,
        { message: i } = (0, s.CJ)(),
        [p, h] = (0, c.e4)(),
        x = (0, c.$Y)(h);
    return (0, l.jsxs)('div', {
        className: f.section,
        ref: p,
        children: [
            (0, l.jsxs)('div', {
                className: f.children,
                children: [
                    (0, l.jsx)('div', {
                        className: f.textChildren,
                        children: n.map((e) => (0, l.jsx)(d.Z, { ...e }, e.id))
                    }),
                    (0, l.jsx)('div', {
                        className: r()(f.accessory, { [f.restrictWidth]: x }),
                        children: (function (e) {
                            switch (e.type) {
                                case a.re.BUTTON:
                                    return (0, l.jsx)(u.Z, { ...e });
                                case a.re.THUMBNAIL:
                                    return (0, l.jsx)(m.Z, { ...e });
                            }
                        })(t)
                    })
                ]
            }),
            null != i
                ? (0, l.jsx)(o.ZP, {
                      message: i,
                      component: e
                  })
                : null
        ]
    });
}
