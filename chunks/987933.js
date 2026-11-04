var i = t(477900),
    l = t(582128),
    s = t(554146),
    a = t(43105),
    r = t(7807),
    o = t(263775),
    c = t(246356),
    d = t(49999),
    u = t(792996),
    A = t(401191);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { targetElementRef: n, openSoundboardPicker: t, shouldShowSoundboardPicker: h } = e,
                [m, g] = (0, o.kn)([s.M.SOUNDBOARD_DESKTOP_NUX]),
                x = l.useMemo(
                    () => [
                        {
                            icon: r.J,
                            text: u.intl.string(u.t["6EJvHt"]),
                            onClick: () => {
                                (t(), g(d.i.TAKE_ACTION));
                            },
                        },
                    ],
                    [g, t],
                );
            return (l.useEffect(() => {
                h && m === s.M.SOUNDBOARD_DESKTOP_NUX && g(d.i.INDIRECT_ACTION);
            }, [g, h, m]),
            m !== s.M.SOUNDBOARD_DESKTOP_NUX)
                ? null
                : (0, i.jsx)(c.A, {
                      children: (0, i.jsx)(a.A, {
                          targetElementRef: n,
                          graphic: { type: "image", src: A.A },
                          title: u.intl.string(u.t.UaGc2V),
                          body: u.intl.string(u.t.lyhz2x),
                          position: "top",
                          gradientColor: "pink",
                          actions: x,
                          onRequestClose: () => g(d.i.DISMISS),
                      }),
                  });
        },
    },
);
