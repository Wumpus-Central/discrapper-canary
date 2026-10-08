t.d(n, { A: () => h });
var l = t(477900),
    i = t(582128),
    a = t(554146),
    s = t(43105),
    o = t(7807),
    r = t(131607),
    c = t(246356),
    u = t(49999),
    d = t(660183),
    A = t(401191);
function h(e) {
    let { targetElementRef: n, openSoundboardPicker: t, shouldShowSoundboardPicker: h } = e,
        [m, C] = (0, r.kn)([a.M.SOUNDBOARD_DESKTOP_NUX]),
        p = i.useMemo(
            () => [
                {
                    icon: o.J,
                    text: d.intl.string(d.t["6EJvHt"]),
                    onClick: () => {
                        (t(), C(u.i.TAKE_ACTION));
                    },
                },
            ],
            [C, t],
        );
    return (i.useEffect(() => {
        h && m === a.M.SOUNDBOARD_DESKTOP_NUX && C(u.i.INDIRECT_ACTION);
    }, [C, h, m]),
    m !== a.M.SOUNDBOARD_DESKTOP_NUX)
        ? null
        : (0, l.jsx)(c.A, {
              children: (0, l.jsx)(s.A, {
                  targetElementRef: n,
                  graphic: { type: "image", src: A.A },
                  title: d.intl.string(d.t.UaGc2V),
                  body: d.intl.string(d.t.lyhz2x),
                  position: "top",
                  gradientColor: "pink",
                  actions: p,
                  onRequestClose: () => C(u.i.DISMISS),
              }),
          });
}
