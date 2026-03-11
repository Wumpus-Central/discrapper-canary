n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(189252),
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
    let { canShowReminder: t = !1 } = e,
        E = (0, h.A)(c.Ay),
        { showClipsHeaderEntrypoint: I } = u.L_.useConfig({ location: "ClipsButton" }),
        {
            hasNewClips: f,
            lastClipsSession: C,
            remindersEnabled: T,
            hasAnyClipAnimations: N,
        } = (0, l.cf)([A.A], () => ({
            hasNewClips: A.A.getNewClipIds().length > 0,
            lastClipsSession: A.A.getLastClipsSession(),
            remindersEnabled: A.A.getSettings().remindersEnabled,
            hasAnyClipAnimations: A.A.hasAnyClipAnimations(),
        })),
        S = null != C && C.newClipIds.length > 0,
        x = (0, _.K)((e) => e.clipsButtonRef),
        v = (0, _.K)((e) => e.setClipsButtonRef),
        y = (0, l.bG)([d.A], () => d.A.hasLayers()),
        { preventIdle: b, allowIdle: O } = (0, o.o)("animation");
    function L() {
        (0, a.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("4918"), n.e("23058")]).then(n.bind(n, 543428));
                return (t) => (0, i.jsx)(e, { ...t });
            },
            { modalKey: p.nm },
        );
    }
    return (r.useEffect(() => (N ? b() : O(), () => O()), [N, b, O]), I && E)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  null != x &&
                      t &&
                      T &&
                      S &&
                      !(0, a.ueM)() &&
                      !y &&
                      (0, i.jsx)(m.A, { clipIconRef: x, lastClipsSession: C, onOpenClipsGallery: L }),
                  (0, i.jsx)("div", {
                      ref: v,
                      children: (0, i.jsx)(s.A, {
                          icon: a.xgA,
                          showBadge: f,
                          tooltip: g.intl.string(g.t.MXaLEM),
                          onClick: L,
                      }),
                  }),
              ],
          })
        : null;
}
