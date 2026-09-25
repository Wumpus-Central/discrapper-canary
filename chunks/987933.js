t.d(n, { A: () => m });
var i = t(477900),
    l = t(582128),
    s = t(554146),
    a = t(43105),
    o = t(7807),
    r = t(131607),
    c = t(246356),
    u = t(49999),
    d = t(375708),
    A = t(401191);
function m(e) {
    let { targetElementRef: n, openSoundboardPicker: t, shouldShowSoundboardPicker: m } = e,
        [h, C] = (0, r.kn)([s.M.SOUNDBOARD_DESKTOP_NUX]),
        p = l.useMemo(
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
    return (l.useEffect(() => {
        m && h === s.M.SOUNDBOARD_DESKTOP_NUX && C(u.i.INDIRECT_ACTION);
    }, [C, m, h]),
    h !== s.M.SOUNDBOARD_DESKTOP_NUX)
        ? null
        : (0, i.jsx)(c.A, {
              children: (0, i.jsx)(a.A, {
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
