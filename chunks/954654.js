t.d(n, {
    ZP: function () {
        return y;
    },
    xX: function () {
        return S;
    }
}),
    t(47120);
var l = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    a = t(911969),
    o = t(970184),
    s = t(197653),
    c = t(987106),
    u = t(927057),
    d = t(574597),
    m = t(378975),
    f = t(732586),
    p = t(988075),
    h = t(12067),
    x = t(676149),
    v = t(861529),
    C = t(568248),
    g = t(770009),
    _ = t(889515),
    b = t(985184),
    I = t(892519),
    j = t(785225);
function S(e) {
    return e.map((e, n) =>
        (function (e, n) {
            switch (e.type) {
                case a.re.ACTION_ROW:
                    return (0, l.jsx)(
                        _.Z,
                        {
                            ...e,
                            renderComponents: S
                        },
                        n
                    );
                case a.re.BUTTON:
                    return (0, l.jsx)(c.Z, { ...e }, n);
                case a.re.STRING_SELECT:
                    return (0, l.jsx)(m.Z, { ...e }, n);
                case a.re.CHANNEL_SELECT:
                    return (0, l.jsx)(u.Z, { ...e }, n);
                case a.re.USER_SELECT:
                case a.re.ROLE_SELECT:
                case a.re.MENTIONABLE_SELECT:
                    return (0, l.jsx)(d.Z, { ...e }, n);
                case a.re.TEXT_INPUT:
                    return (0, l.jsx)(f.Z, { ...e }, n);
                case a.re.SECTION:
                    return (0, l.jsx)(I.Z, { ...e }, n);
                case a.re.TEXT_DISPLAY:
                    return (0, l.jsx)(v.Z, { ...e }, n);
                case a.re.MEDIA_GALLERY:
                    return (0, l.jsx)(h.Z, { ...e }, n);
                case a.re.THUMBNAIL:
                    return (0, l.jsx)(C.Z, { ...e }, n);
                case a.re.FILE:
                    return (0, l.jsx)(p.Z, { ...e }, n);
                case a.re.SEPARATOR:
                    return (0, l.jsx)(x.Z, { ...e }, n);
                case a.re.CONTENT_INVENTORY_ENTRY:
                    return (0, l.jsx)(g.Z, { ...e }, n);
                case a.re.CONTAINER:
                    return (0, l.jsx)(
                        b.ZP,
                        {
                            ...e,
                            renderComponents: S
                        },
                        n
                    );
            }
        })(e, n.toString())
    );
}
function y(e) {
    let { message: n, shouldDisableInteractiveComponents: t } = e,
        { components: i } = n,
        [a, c] = (0, s.e4)();
    return 0 === i.length
        ? null
        : (0, l.jsx)(o.Il, {
              message: n,
              shouldDisableInteractiveComponents: t,
              children: (0, l.jsx)(s.am.Root, {
                  containerInnerWidth: c,
                  children: (0, l.jsx)('div', {
                      style: { width: '100%' },
                      ref: a,
                      children: (0, l.jsx)(s.am.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, l.jsx)('div', {
                                  ref: e,
                                  className: r()([j.container, { [j.containerUikit]: n.isUIKitComponents() }]),
                                  children: S(i)
                              })
                      })
                  })
              })
          });
}
