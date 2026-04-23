n.d(t, { A: () => C });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(192308),
    s = n(176781),
    o = n(189252),
    d = n(447404),
    u = n(186111),
    c = n(430452),
    A = n(734066),
    h = n(274372),
    _ = n(915618),
    E = n(361157),
    p = n(710315),
    m = n(798817),
    g = n(696016),
    I = n(985018);
function C(e) {
    let { canShowReminder: t = !1 } = e,
        C = (0, _.A)(c.Ay),
        { showClipsHeaderEntrypoint: f } = A.L_.useConfig({ location: "ClipsButton" }),
        { topBarButton: T } = p.$.useConfig({ location: "ClipsButton" }),
        {
            hasNewClips: S,
            lastClipsSession: N,
            remindersEnabled: O,
            hasAnyClipAnimations: L,
        } = (0, a.cf)([h.A], () => ({
            hasNewClips: h.A.getNewClipIds().length > 0,
            lastClipsSession: h.A.getLastClipsSession(),
            remindersEnabled: h.A.getSettings().remindersEnabled,
            hasAnyClipAnimations: h.A.hasAnyClipAnimations(),
        })),
        y = null != N && N.newClipIds.length > 0,
        v = (0, E.K)((e) => e.clipsButtonRef),
        b = (0, E.K)((e) => e.setClipsButtonRef),
        D = (0, a.bG)([u.A], () => u.A.hasLayers()),
        { preventIdle: R, allowIdle: P } = (0, d.o)("animation");
    function w() {
        (0, l.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("42784"), n.e("75674")]).then(n.bind(n, 543428));
                return (t) => (0, i.jsx)(e, { ...t });
            },
            { modalKey: g.nm },
        );
    }
    return (r.useEffect(() => (L ? R() : P(), () => P()), [L, R, P]), (f || T) && C)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  null != v &&
                      t &&
                      O &&
                      y &&
                      !(0, l.hasAnyModalOpen)() &&
                      !D &&
                      (0, i.jsx)(m.A, { clipIconRef: v, lastClipsSession: N, onOpenClipsGallery: w }),
                  (0, i.jsx)("div", {
                      ref: b,
                      children: (0, i.jsx)(o.A, {
                          icon: s.x,
                          showBadge: S,
                          tooltip: I.intl.string(I.t.MXaLEM),
                          onClick: w,
                      }),
                  }),
              ],
          })
        : null;
}
