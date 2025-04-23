n.d(t, { l: () => u }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(272573),
    o = n(442837),
    l = n(481060),
    s = n(709706),
    c = n(388032),
    d = n(791422);
function u() {
    let e = (0, o.e7)([s.Z], () => s.Z.getError());
    return e ? (0, r.jsx)(_, { error: e }) : null;
}
let _ = (e) => {
    let { error: t } = e,
        [n, o] = (0, i.useState)(!1),
        u = (0, l.Yzy)(
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
        _ = (() => {
            switch (t) {
                case s.r.ERROR_DOWNLOADING_DEPENDENCY:
                    return c.intl.string(c.t.D9neaG);
                case s.r.ERROR_ACTIVATING_VOICE_FILTER:
                    return c.intl.string(c.t.mNMZZm);
                default:
                    return c.intl.string(c.t.F8FvU1);
            }
        })();
    return u((e) =>
        n
            ? null
            : (0, r.jsx)(a.animated.div, {
                  style: e,
                  className: d.floaterWrapper,
                  children: (0, r.jsxs)('div', {
                      className: d.visibleFloater,
                      children: [
                          (0, r.jsx)(l.Text, {
                              variant: 'text-sm/semibold',
                              color: 'always-white',
                              children: _
                          }),
                          (0, r.jsx)(l.RyX, { onClick: () => o(!0) })
                      ]
                  })
              })
    );
};
