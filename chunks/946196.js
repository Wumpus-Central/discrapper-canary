n.d(t, { l: () => d }), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(509442),
    l = n(442837),
    a = n(481060),
    s = n(709706),
    c = n(388032),
    u = n(240527);
function d() {
    let e = (0, l.e7)([s.Z], () => s.Z.getError());
    return e ? (0, r.jsx)(p, { error: e }) : null;
}
let p = (e) => {
    let { error: t } = e,
        [n, l] = (0, i.useState)(!1),
        d = (0, a.Yzy)(
            !n,
            {
                from: {
                    opacity: 0,
                    translateY: 20,
                },
                enter: {
                    opacity: 1,
                    translateY: 0,
                },
                leave: {
                    opacity: 0,
                    translateY: 80,
                },
            },
            "respect-motion-settings",
        ),
        p = (() => {
            switch (t) {
                case s.r.ERROR_DOWNLOADING_DEPENDENCY:
                    return c.intl.string(c.t.D9neaH);
                case s.r.ERROR_ACTIVATING_VOICE_FILTER:
                    return c.intl.string(c.t.mNMZZg);
                default:
                    return c.intl.string(c.t.F8FvUy);
            }
        })();
    return d((e) =>
        n
            ? null
            : (0, r.jsx)(o.animated.div, {
                  style: e,
                  className: u.floaterWrapper,
                  children: (0, r.jsxs)("div", {
                      className: u.visibleFloater,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-sm/semibold",
                              color: "always-white",
                              children: p,
                          }),
                          (0, r.jsx)(a.RyX, { onClick: () => l(!0) }),
                      ],
                  }),
              }),
    );
};
