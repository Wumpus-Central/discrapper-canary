n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(397927),
    s = n(58736),
    o = n(447404),
    d = n(186111),
    c = n(430452),
    u = n(734066),
    A = n(274372),
    h = n(915618),
    _ = n(361157),
    m = n(798817),
    p = n(696016),
    g = n(985018);
function E(e) {
    let { canShowReminder: t = !1, className: E } = e,
        f = (0, h.A)(c.A),
        { showClipsHeaderEntrypoint: I } = u.L_.useExperiment({ location: "ClipsButton" }, { autoTrackExposure: !1 }),
        {
            hasNewClips: C,
            lastClipsSession: N,
            remindersEnabled: T,
            hasAnyClipAnimations: S,
        } = (0, a.cf)([A.A], () => ({
            hasNewClips: A.A.getNewClipIds().length > 0,
            lastClipsSession: A.A.getLastClipsSession(),
            remindersEnabled: A.A.getSettings().remindersEnabled,
            hasAnyClipAnimations: A.A.hasAnyClipAnimations(),
        })),
        x = null != N && N.newClipIds.length > 0,
        v = (0, _.K)((e) => e.clipsButtonRef),
        b = (0, _.K)((e) => e.setClipsButtonRef),
        y = (0, a.bG)([d.A], () => d.A.hasLayers()),
        { preventIdle: L, allowIdle: O } = (0, o.o)("animation");
    function R() {
        (0, l.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("4918"), n.e("53838")]).then(n.bind(n, 543428));
                return (t) => (0, i.jsx)(e, { ...t });
            },
            { modalKey: p.nm },
        );
    }
    return (r.useEffect(() => (S ? L() : O(), () => O()), [S, L, O]), I && f)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  null != v &&
                      t &&
                      T &&
                      x &&
                      !(0, l.ueM)() &&
                      !y &&
                      (0, i.jsx)(m.A, { clipIconRef: v, lastClipsSession: N, onOpenClipsGallery: R }),
                  (0, i.jsx)("div", {
                      ref: b,
                      children: (0, i.jsx)(s.In, {
                          className: E,
                          icon: l.xgA,
                          showBadge: C,
                          tooltip: g.intl.string(g.t.MXaLEM),
                          onClick: R,
                      }),
                  }),
              ],
          })
        : null;
}
