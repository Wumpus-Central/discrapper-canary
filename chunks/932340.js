n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(189252),
    o = n(447404),
    d = n(186111),
    c = n(430452),
    u = n(734066),
    A = n(274372),
    h = n(915618),
    _ = n(361157),
    m = n(710315),
    g = n(798817),
    p = n(696016),
    E = n(985018);
function I(e) {
    let { canShowReminder: t = !1 } = e,
        I = (0, h.A)(c.Ay),
        { showClipsHeaderEntrypoint: f } = u.L_.useConfig({ location: "ClipsButton" }),
        { topBarButton: C } = m.$.useConfig({ location: "ClipsButton" }),
        {
            hasNewClips: T,
            lastClipsSession: N,
            remindersEnabled: S,
            hasAnyClipAnimations: x,
        } = (0, a.cf)([A.A], () => ({
            hasNewClips: A.A.getNewClipIds().length > 0,
            lastClipsSession: A.A.getLastClipsSession(),
            remindersEnabled: A.A.getSettings().remindersEnabled,
            hasAnyClipAnimations: A.A.hasAnyClipAnimations(),
        })),
        b = null != N && N.newClipIds.length > 0,
        v = (0, _.K)((e) => e.clipsButtonRef),
        y = (0, _.K)((e) => e.setClipsButtonRef),
        O = (0, a.bG)([d.A], () => d.A.hasLayers()),
        { preventIdle: L, allowIdle: R } = (0, o.o)("animation");
    function P() {
        (0, r.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("42784"), n.e("75674")]).then(n.bind(n, 543428));
                return (t) => (0, i.jsx)(e, { ...t });
            },
            { modalKey: p.nm },
        );
    }
    return (l.useEffect(() => (x ? L() : R(), () => R()), [x, L, R]), (f || C) && I)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  null != v &&
                      t &&
                      S &&
                      b &&
                      !(0, r.ueM)() &&
                      !O &&
                      (0, i.jsx)(g.A, { clipIconRef: v, lastClipsSession: N, onOpenClipsGallery: P }),
                  (0, i.jsx)("div", {
                      ref: y,
                      children: (0, i.jsx)(s.A, {
                          icon: r.xgA,
                          showBadge: T,
                          tooltip: E.intl.string(E.t.MXaLEM),
                          onClick: P,
                      }),
                  }),
              ],
          })
        : null;
}
