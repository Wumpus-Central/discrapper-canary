n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
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
        I = (0, h.A)(c.Ay),
        { showClipsHeaderEntrypoint: f } = u.L_.useConfig({ location: "ClipsButton" }),
        {
            hasNewClips: C,
            lastClipsSession: T,
            remindersEnabled: N,
            hasAnyClipAnimations: S,
        } = (0, l.cf)([A.A], () => ({
            hasNewClips: A.A.getNewClipIds().length > 0,
            lastClipsSession: A.A.getLastClipsSession(),
            remindersEnabled: A.A.getSettings().remindersEnabled,
            hasAnyClipAnimations: A.A.hasAnyClipAnimations(),
        })),
        x = null != T && T.newClipIds.length > 0,
        v = (0, _.K)((e) => e.clipsButtonRef),
        y = (0, _.K)((e) => e.setClipsButtonRef),
        b = (0, l.bG)([d.A], () => d.A.hasLayers()),
        { preventIdle: O, allowIdle: L } = (0, o.o)("animation");
    function R() {
        (0, a.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("4918"), n.e("23058")]).then(n.bind(n, 543428));
                return (t) => (0, i.jsx)(e, { ...t });
            },
            { modalKey: p.nm },
        );
    }
    return (r.useEffect(() => (S ? O() : L(), () => L()), [S, O, L]), f && I)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  null != v &&
                      t &&
                      N &&
                      x &&
                      !(0, a.ueM)() &&
                      !b &&
                      (0, i.jsx)(m.A, { clipIconRef: v, lastClipsSession: T, onOpenClipsGallery: R }),
                  (0, i.jsx)("div", {
                      ref: y,
                      children: (0, i.jsx)(s.In, {
                          className: E,
                          icon: a.xgA,
                          showBadge: C,
                          tooltip: g.intl.string(g.t.MXaLEM),
                          onClick: R,
                      }),
                  }),
              ],
          })
        : null;
}
