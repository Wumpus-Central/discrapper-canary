n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(58736),
    o = n(447404),
    c = n(186111),
    u = n(430452),
    d = n(734066),
    p = n(274372),
    f = n(915618),
    h = n(361157),
    A = n(798817),
    g = n(696016),
    m = n(985018);
function b(e) {
    let { canShowReminder: t = !1, className: b } = e,
        _ = (0, f.A)(u.A),
        { showClipsHeaderEntrypoint: E } = d.L_.useExperiment({ location: "ClipsButton" }, { autoTrackExposure: !1 }),
        {
            hasNewClips: O,
            lastClipsSession: y,
            remindersEnabled: I,
            hasAnyClipAnimations: v,
        } = (0, l.cf)([p.A], () => ({
            hasNewClips: p.A.getNewClipIds().length > 0,
            lastClipsSession: p.A.getLastClipsSession(),
            remindersEnabled: p.A.getSettings().remindersEnabled,
            hasAnyClipAnimations: p.A.hasAnyClipAnimations(),
        })),
        S = null != y && y.newClipIds.length > 0,
        C = (0, h.K)((e) => e.clipsButtonRef),
        N = (0, h.K)((e) => e.setClipsButtonRef),
        T = (0, l.bG)([c.A], () => c.A.hasLayers()),
        { preventIdle: j, allowIdle: x } = (0, o.o)("animation");
    function P() {
        (0, a.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("4918"), n.e("53838")]).then(n.bind(n, 543428));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, t),
                    );
            },
            { modalKey: g.nm },
        );
    }
    return (i.useEffect(() => (v ? j() : x(), () => x()), [v, j, x]), E && _)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  null != C &&
                      t &&
                      I &&
                      S &&
                      !(0, a.ueM)() &&
                      !T &&
                      (0, r.jsx)(A.A, {
                          clipIconRef: C,
                          lastClipsSession: y,
                          onOpenClipsGallery: P,
                      }),
                  (0, r.jsx)("div", {
                      ref: N,
                      children: (0, r.jsx)(s.In, {
                          className: b,
                          icon: a.xgA,
                          showBadge: O,
                          tooltip: m.intl.string(m.t.MXaLEM),
                          onClick: P,
                      }),
                  }),
              ],
          })
        : null;
}
