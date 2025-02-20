n.d(t, {
    Z: () => Z,
    d: () => S
}),
    n(47120);
var a = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    r = n(468194),
    c = n(442837),
    o = n(477690),
    d = n(481060),
    u = n(100527),
    p = n(906732),
    f = n(430824),
    g = n(594174),
    m = n(115130),
    v = n(566620),
    h = n(127255),
    b = n(880308),
    x = n(451576),
    _ = n(439934),
    C = n(701488),
    I = n(388032),
    y = n(867689);
let T = (0, r.Mg)(o.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
    j = (0, r.Mg)(o.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
    N = (0, r.Mg)(o.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);
function Z(e) {
    let { channel: t, guildId: n, locationObject: l, onClose: r, onActivityItemVisible: o, scrollerRef: C } = e,
        [Z, S] = i.useState(0),
        O = (0, h.Z)({
            guildId: n,
            enableFilter: !0
        }),
        E = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
        A = (0, c.e7)([f.Z], () => f.Z.getGuild(n), [n]),
        { analyticsLocations: M } = (0, p.ZP)(u.Z.ACTIVITY_DIRECTORY),
        P = (0, x.Z)(null == t ? void 0 : t.id),
        { isDeveloperActivityShelfEnabled: w, filter: L } = (0, c.cj)([m.Z], () => ({
            filter: m.Z.getFilter(),
            isDeveloperActivityShelfEnabled: m.Z.getIsEnabled()
        }));
    if (
        (i.useEffect(() => {
            let e = C.current;
            if (null != e)
                return (
                    e.addEventListener('scroll', t, !1),
                    () => {
                        null != e && e.removeEventListener('scroll', t, !1);
                    }
                );
            function t() {
                var e, t;
                S(null !== (t = null === (e = C.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0);
            }
        }, [C]),
        i.useEffect(() => {
            (P || null != n) &&
                (0, v.w1)({
                    guildId: n,
                    force: !0
                });
        }, [n, P]),
        (0, b.g)(),
        (null == A && !P) || null == E)
    )
        return null;
    let k = O.length > 0;
    return (0, a.jsx)(p.Gt, {
        value: M,
        children: (0, a.jsxs)('div', {
            className: y.scrollContainer,
            children: [
                k
                    ? (0, a.jsx)('div', {
                          className: y.scrollBackgroundContainer,
                          style: { top: -Z },
                          children: (0, a.jsx)('div', {
                              className: s()(y.scrollTierBackground),
                              style: {
                                  height: ((e) => {
                                      let t = 1 === e.length;
                                      return T + Math.ceil(e.length / 2) * (t ? N : j);
                                  })(O)
                              }
                          })
                      })
                    : null,
                (0, a.jsxs)(d.Ttm, {
                    ref: C,
                    className: y.scroller,
                    children: [
                        null,
                        k && null != t
                            ? (0, a.jsx)('div', {
                                  className: y.scrollSection,
                                  children: (0, a.jsx)('div', {
                                      className: s()(y.shelf),
                                      children: O.map((e) =>
                                          (0, a.jsx)(
                                              _.Z,
                                              {
                                                  large: 1 === O.length,
                                                  activityItem: e,
                                                  context: {
                                                      channel: t,
                                                      type: 'channel'
                                                  },
                                                  guildId: n,
                                                  locationObject: l,
                                                  onActivityItemVisible: o,
                                                  onActivityItemSelected: () => {
                                                      var t;
                                                      e.application.id, r();
                                                  }
                                              },
                                              'activity-shelf-item-'.concat(e.application.id)
                                          )
                                      )
                                  })
                              })
                            : w && L.length > 0
                              ? (0, a.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    className: y.filterError,
                                    children: I.NW.format(I.t.p0PRFB, { filter: L })
                                })
                              : (0, a.jsx)('div', {
                                    className: y.spinnerContainer,
                                    children: (0, a.jsx)(d.$jN, {})
                                })
                    ]
                })
            ]
        })
    });
}
function S() {
    return (0, a.jsx)(d.Text, {
        variant: 'text-sm/normal',
        children: I.NW.format(I.t.fijcEB, { surveyURL: C.Es })
    });
}
