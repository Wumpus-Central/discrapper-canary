t.d(n, { A: () => h });
var i = t(477900),
    l = t(582128),
    s = t(554146),
    a = t(43105),
    r = t(7807),
    o = t(131607),
    c = t(246356),
    u = t(49999),
    d = t(105292),
    A = t(401191);
function h(e) {
    let { targetElementRef: n, openSoundboardPicker: t, shouldShowSoundboardPicker: h } = e,
        [m, g] = (0, o.kn)([s.M.SOUNDBOARD_DESKTOP_NUX]),
        x = l.useMemo(
            () => [
                {
                    icon: r.J,
                    text: d.intl.string(d.t["6EJvHt"]),
                    onClick: () => {
                        (t(), g(u.i.TAKE_ACTION));
                    },
                },
            ],
            [g, t],
        );
    return (l.useEffect(() => {
        h && m === s.M.SOUNDBOARD_DESKTOP_NUX && g(u.i.INDIRECT_ACTION);
    }, [g, h, m]),
    m !== s.M.SOUNDBOARD_DESKTOP_NUX)
        ? null
        : (0, i.jsx)(c.A, {
              children: (0, i.jsx)(a.A, {
                  targetElementRef: n,
                  graphic: { type: "image", src: A.A },
                  title: d.intl.string(d.t.UaGc2V),
                  body: d.intl.string(d.t.lyhz2x),
                  position: "top",
                  gradientColor: "pink",
                  actions: x,
                  onRequestClose: () => g(u.i.DISMISS),
              }),
          });
}
