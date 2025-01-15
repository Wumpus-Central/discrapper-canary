t.d(n, {
    ZP: function () {
        return j;
    },
    xX: function () {
        return S;
    }
});
var l = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    a = t(911969),
    o = t(970184),
    s = t(987106),
    c = t(927057),
    u = t(574597),
    d = t(378975),
    m = t(732586),
    f = t(988075),
    p = t(12067),
    h = t(676149),
    x = t(861529),
    v = t(568248),
    C = t(770009),
    g = t(889515),
    _ = t(985184),
    b = t(892519),
    I = t(176712);
function S(e) {
    return e.map((e, n) =>
        (function (e, n) {
            switch (e.type) {
                case a.re.ACTION_ROW:
                    return (0, l.jsx)(
                        g.Z,
                        {
                            ...e,
                            renderComponents: S
                        },
                        n
                    );
                case a.re.BUTTON:
                    return (0, l.jsx)(s.Z, { ...e }, n);
                case a.re.STRING_SELECT:
                    return (0, l.jsx)(d.Z, { ...e }, n);
                case a.re.CHANNEL_SELECT:
                    return (0, l.jsx)(c.Z, { ...e }, n);
                case a.re.USER_SELECT:
                case a.re.ROLE_SELECT:
                case a.re.MENTIONABLE_SELECT:
                    return (0, l.jsx)(u.Z, { ...e }, n);
                case a.re.TEXT_INPUT:
                    return (0, l.jsx)(m.Z, { ...e }, n);
                case a.re.SECTION:
                    return (0, l.jsx)(b.Z, { ...e }, n);
                case a.re.TEXT_DISPLAY:
                    return (0, l.jsx)(x.Z, { ...e }, n);
                case a.re.MEDIA_GALLERY:
                    return (0, l.jsx)(p.Z, { ...e }, n);
                case a.re.THUMBNAIL:
                    return (0, l.jsx)(v.Z, { ...e }, n);
                case a.re.FILE:
                    return (0, l.jsx)(f.Z, { ...e }, n);
                case a.re.SEPARATOR:
                    return (0, l.jsx)(h.Z, { ...e }, n);
                case a.re.CONTENT_INVENTORY_ENTRY:
                    return (0, l.jsx)(C.Z, { ...e }, n);
                case a.re.CONTAINER:
                    return (0, l.jsx)(
                        _.ZP,
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
function j(e) {
    let { message: n, shouldDisableInteractiveComponents: t } = e,
        { components: i } = n;
    return 0 === i.length
        ? null
        : (0, l.jsx)('div', {
              className: r()([I.container, { [I.containerUikit]: n.isUIKitComponents() }]),
              children: (0, l.jsx)(o.Il, {
                  message: n,
                  shouldDisableInteractiveComponents: t,
                  children: S(i)
              })
          });
}
