t.d(n, { A: () => m });
var l = t(477900),
    i = t(582128),
    s = t(7807),
    a = t(554146),
    r = t(43105),
    o = t(131607),
    c = t(246356),
    u = t(49999),
    d = t(375708),
    A = t(401191);
function m(e) {
    let { targetElementRef: n, openSoundboardPicker: t, shouldShowSoundboardPicker: m } = e,
        [h, C] = (0, o.kn)([a.M.SOUNDBOARD_DESKTOP_NUX]),
        E = i.useMemo(
            () => [
                {
                    icon: s.J,
                    text: d.intl.string(d.t["6EJvHt"]),
                    onClick: () => {
                        t(), C(u.i.TAKE_ACTION);
                    },
                },
            ],
            [C, t],
        );
    return (i.useEffect(() => {
        m && h === a.M.SOUNDBOARD_DESKTOP_NUX && C(u.i.INDIRECT_ACTION);
    }, [C, m, h]),
    h !== a.M.SOUNDBOARD_DESKTOP_NUX)
        ? null
        : (0, l.jsx)(c.A, {
              children: (0, l.jsx)(r.A, {
                  targetElementRef: n,
                  graphic: { type: "image", src: A.A },
                  title: d.intl.string(d.t.UaGc2V),
                  body: d.intl.string(d.t.lyhz2x),
                  position: "top",
                  gradientColor: "pink",
                  actions: E,
                  onRequestClose: () => C(u.i.DISMISS),
              }),
          });
}
