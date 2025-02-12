l.d(n, {
    ZP: () => Z,
    xX: () => I
}),
    l(47120);
var t = l(200651);
l(192379);
var i = l(120356),
    r = l.n(i),
    a = l(911969),
    s = l(970184),
    o = l(197653),
    u = l(987106),
    c = l(927057),
    d = l(574597),
    m = l(378975),
    h = l(732586),
    p = l(988075),
    x = l(12067),
    v = l(676149),
    f = l(861529),
    C = l(568248),
    g = l(770009),
    j = l(889515),
    N = l(985184),
    S = l(892519),
    E = l(709215);
function I(e) {
    return e.map((e, n) =>
        (function (e, n) {
            switch (e.type) {
                case a.re.ACTION_ROW:
                    return (0, t.jsx)(
                        j.Z,
                        {
                            ...e,
                            renderComponents: I
                        },
                        n
                    );
                case a.re.BUTTON:
                    return (0, t.jsx)(u.Z, { ...e }, n);
                case a.re.STRING_SELECT:
                    return (0, t.jsx)(m.Z, { ...e }, n);
                case a.re.CHANNEL_SELECT:
                    return (0, t.jsx)(c.Z, { ...e }, n);
                case a.re.USER_SELECT:
                case a.re.ROLE_SELECT:
                case a.re.MENTIONABLE_SELECT:
                    return (0, t.jsx)(d.Z, { ...e }, n);
                case a.re.TEXT_INPUT:
                    return (0, t.jsx)(h.Z, { ...e }, n);
                case a.re.SECTION:
                    return (0, t.jsx)(S.Z, { ...e }, n);
                case a.re.TEXT_DISPLAY:
                    return (0, t.jsx)(f.Z, { ...e }, n);
                case a.re.MEDIA_GALLERY:
                    return (0, t.jsx)(x.Z, { ...e }, n);
                case a.re.THUMBNAIL:
                    return (0, t.jsx)(C.Z, { ...e }, n);
                case a.re.FILE:
                    return (0, t.jsx)(p.Z, { ...e }, n);
                case a.re.SEPARATOR:
                    return (0, t.jsx)(v.Z, { ...e }, n);
                case a.re.CONTENT_INVENTORY_ENTRY:
                    return (0, t.jsx)(g.Z, { ...e }, n);
                case a.re.CONTAINER:
                    return (0, t.jsx)(
                        N.ZP,
                        {
                            ...e,
                            renderComponents: I
                        },
                        n
                    );
            }
        })(e, n.toString())
    );
}
function Z(e) {
    let { message: n, shouldDisableInteractiveComponents: l } = e,
        { components: i } = n,
        [a, u] = (0, o.e4)();
    return 0 === i.length
        ? null
        : (0, t.jsx)(s.Il, {
              message: n,
              shouldDisableInteractiveComponents: l,
              children: (0, t.jsx)(o.am.Root, {
                  containerInnerWidth: u,
                  children: (0, t.jsx)('div', {
                      style: { width: '100%' },
                      ref: a,
                      children: (0, t.jsx)(o.am.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, t.jsx)('div', {
                                  ref: e,
                                  className: r()([E.container, { [E.isComponentsV2]: n.isComponentsV2() }]),
                                  children: I(i)
                              })
                      })
                  })
              })
          });
}
