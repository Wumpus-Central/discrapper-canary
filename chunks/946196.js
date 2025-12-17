n.d(t, { l: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(236726),
    l = n(442837),
    a = n(481060),
    s = n(709706),
    c = n(981631),
    u = n(388032),
    d = n(47343);
function p() {
    let e = (0, l.e7)([s.Z], () => s.Z.getError());
    return e ? (0, r.jsx)(m, { error: e }) : null;
}
let m = (e) => {
    let { error: t } = e,
        [n, l] = (0, i.useState)(!1),
        p = (0, a.Yzy)(
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
        m = (() => {
            switch (t) {
                case s.r.ERROR_DOWNLOADING_DEPENDENCY:
                    return u.intl.string(u.t.D9neaH);
                case s.r.ERROR_ACTIVATING_VOICE_FILTER:
                    return u.intl.string(u.t.mNMZZg);
                default:
                    return u.intl.string(u.t.F8FvUy);
            }
        })();
    return p((e) =>
        n
            ? null
            : (0, r.jsx)(o.animated.div, {
                  style: e,
                  className: d.floaterWrapper,
                  children: (0, r.jsxs)("div", {
                      className: d.visibleFloater,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-sm/semibold",
                              color: "always-white",
                              children: m,
                          }),
                          (0, r.jsx)(a.RyX, {
                              noticeType: c.kVF.VOICE_FILTERS_ERROR,
                              onClick: () => l(!0),
                          }),
                      ],
                  }),
              }),
    );
};
