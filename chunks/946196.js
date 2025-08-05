(n.d(t, { l: () => d }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(66546),
    o = n(442837),
    s = n(481060),
    l = n(709706),
    c = n(388032),
    u = n(791422);
function d() {
    let e = (0, o.e7)([l.Z], () => l.Z.getError());
    return e ? (0, r.jsx)(f, { error: e }) : null;
}
let f = (e) => {
    let { error: t } = e,
        [n, o] = (0, i.useState)(!1),
        d = (0, s.Yzy)(
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
        f = (() => {
            switch (t) {
                case l.r.ERROR_DOWNLOADING_DEPENDENCY:
                    return c.intl.string(c.t.D9neaG);
                case l.r.ERROR_ACTIVATING_VOICE_FILTER:
                    return c.intl.string(c.t.mNMZZm);
                default:
                    return c.intl.string(c.t.F8FvU1);
            }
        })();
    return d((e) =>
        n
            ? null
            : (0, r.jsx)(a.animated.div, {
                  style: e,
                  className: u.floaterWrapper,
                  children: (0, r.jsxs)('div', {
                      className: u.visibleFloater,
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: 'text-sm/semibold',
                              color: 'always-white',
                              children: f
                          }),
                          (0, r.jsx)(s.RyX, { onClick: () => o(!0) })
                      ]
                  })
              })
    );
};
