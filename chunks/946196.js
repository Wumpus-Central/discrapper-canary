(n.d(t, { l: () => d }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(71347),
    a = n(442837),
    o = n(481060),
    s = n(709706),
    c = n(388032),
    u = n(791422);
function d() {
    let e = (0, a.e7)([s.Z], () => s.Z.getError());
    return e ? (0, r.jsx)(p, { error: e }) : null;
}
let p = (e) => {
    let { error: t } = e,
        [n, a] = (0, i.useState)(!1),
        d = (0, o.Yzy)(
            !n,
            {
                from: {
                    opacity: 0,
                    translateY: 20
                },
                enter: {
                    opacity: 1,
                    translateY: 0
                },
                leave: {
                    opacity: 0,
                    translateY: 80
                }
            },
            'respect-motion-settings'
        ),
        p = (() => {
            switch (t) {
                case s.r.ERROR_DOWNLOADING_DEPENDENCY:
                    return c.intl.string(c.t.D9neaG);
                case s.r.ERROR_ACTIVATING_VOICE_FILTER:
                    return c.intl.string(c.t.mNMZZm);
                default:
                    return c.intl.string(c.t.F8FvU1);
            }
        })();
    return d((e) =>
        n
            ? null
            : (0, r.jsx)(l.animated.div, {
                  style: e,
                  className: u.floaterWrapper,
                  children: (0, r.jsxs)('div', {
                      className: u.visibleFloater,
                      children: [
                          (0, r.jsx)(o.Text, {
                              variant: 'text-sm/semibold',
                              color: 'always-white',
                              children: p
                          }),
                          (0, r.jsx)(o.RyX, { onClick: () => a(!0) })
                      ]
                  })
              })
    );
};
