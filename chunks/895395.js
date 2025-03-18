n.d(t, {
    Z: () => j,
    d: () => Z
}),
    n(47120);
var a = n(200651),
    i = n(192379),
    l = n(468194),
    s = n(442837),
    c = n(477690),
    r = n(481060),
    o = n(100527),
    d = n(906732),
    u = n(430824),
    p = n(594174),
    f = n(115130),
    g = n(566620),
    m = n(127255),
    v = n(880308),
    h = n(451576),
    b = n(439934),
    x = n(701488),
    _ = n(388032),
    C = n(671046);
let I = (0, l.Mg)(c.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
    y = (0, l.Mg)(c.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
    T = (0, l.Mg)(c.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);
function j(e) {
    let { channel: t, guildId: n, locationObject: l, onClose: c, onActivityItemVisible: x, scrollerRef: j } = e,
        [Z, S] = i.useState(0),
        N =
            void 0 !== t
                ? {
                      channel: t,
                      type: 'channel'
                  }
                : { type: 'contextless' },
        O = (0, m.Z)({
            guildId: n,
            enableFilter: !0,
            context: N
        }),
        E = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
        A = (0, s.e7)([u.Z], () => u.Z.getGuild(n), [n]),
        { analyticsLocations: M } = (0, d.ZP)(o.Z.ACTIVITY_DIRECTORY),
        P = (0, h.Z)(null == t ? void 0 : t.id),
        { isDeveloperActivityShelfEnabled: w, filter: L } = (0, s.cj)([f.Z], () => ({
            filter: f.Z.getFilter(),
            isDeveloperActivityShelfEnabled: f.Z.getIsEnabled()
        }));
    if (
        (i.useEffect(() => {
            let e = j.current;
            if (null != e)
                return (
                    e.addEventListener('scroll', t, !1),
                    () => {
                        null != e && e.removeEventListener('scroll', t, !1);
                    }
                );
            function t() {
                var e, t;
                S(null !== (t = null === (e = j.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0);
            }
        }, [j]),
        i.useEffect(() => {
            (P || null != n) &&
                (0, g.w1)({
                    guildId: n,
                    force: !0
                });
        }, [n, P]),
        (0, v.g)(),
        (null == A && !P) || null == E)
    )
        return null;
    let k = O.length > 0;
    return (0, a.jsx)(d.Gt, {
        value: M,
        children: (0, a.jsxs)('div', {
            className: C.scrollContainer,
            children: [
                k
                    ? (0, a.jsx)('div', {
                          className: C.scrollBackgroundContainer,
                          style: { top: -Z },
                          children: (0, a.jsx)('div', {
                              className: C.scrollTierBackground,
                              style: {
                                  height: ((e) => {
                                      let t = 1 === e.length;
                                      return I + Math.ceil(e.length / 2) * (t ? T : y);
                                  })(O)
                              }
                          })
                      })
                    : null,
                (0, a.jsxs)(r.Ttm, {
                    ref: j,
                    className: C.scroller,
                    children: [
                        null,
                        k && null != t
                            ? (0, a.jsx)('div', {
                                  className: C.scrollSection,
                                  children: (0, a.jsx)('div', {
                                      className: C.shelf,
                                      children: O.map((e) =>
                                          (0, a.jsx)(
                                              b.Z,
                                              {
                                                  large: 1 === O.length,
                                                  activityItem: e,
                                                  context: {
                                                      channel: t,
                                                      type: 'channel'
                                                  },
                                                  guildId: n,
                                                  locationObject: l,
                                                  onActivityItemVisible: x,
                                                  onActivityItemSelected: () => {
                                                      var t;
                                                      e.application.id, c();
                                                  }
                                              },
                                              'activity-shelf-item-'.concat(e.application.id)
                                          )
                                      )
                                  })
                              })
                            : w && L.length > 0
                              ? (0, a.jsx)(r.Text, {
                                    variant: 'text-md/normal',
                                    className: C.filterError,
                                    children: _.NW.format(_.t.p0PRFB, { filter: L })
                                })
                              : (0, a.jsx)('div', {
                                    className: C.spinnerContainer,
                                    children: (0, a.jsx)(r.$jN, {})
                                })
                    ]
                })
            ]
        })
    });
}
function Z() {
    return (0, a.jsx)(r.Text, {
        variant: 'text-sm/normal',
        children: _.NW.format(_.t.fijcEB, { surveyURL: x.Es })
    });
}
