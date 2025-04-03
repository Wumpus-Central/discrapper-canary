n.d(e, { default: () => j }), n(47120), n(266796);
var r = n(200651),
    o = n(192379),
    i = n(481060),
    a = n(230711),
    c = n(2052),
    s = n(906732),
    l = n(174609),
    p = n(626135),
    u = n(790527),
    O = n(940165),
    b = n(474936),
    f = n(981631),
    d = n(871465),
    y = n(388032),
    C = n(416922);
function j(t) {
    var e,
        j,
        { onClose: _ } = t,
        g = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                o = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (r = 0; r < i.length; r++) (n = i[r]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
            }
            return o;
        })(t, ['onClose']);
    let m = (0, c.O)(),
        { analyticsLocations: S } = (0, s.ZP)(),
        [N, v] = o.useState(!1);
    o.useEffect(() => {
        N ||
            (p.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
                type: b.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
                location: m.location,
                location_stack: S
            }),
            v(!0));
    }, [m.location, S, N]);
    let x = (0, d.LB)(!1);
    return (0, r.jsx)(
        u.Z,
        ((e = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                        })
                    )),
                    r.forEach(function (e) {
                        var r;
                        (r = n[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[e] = r);
                    });
            }
            return t;
        })(
            {
                type: b.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
                artContainerClassName: C.image,
                artURL: n(98165),
                title: y.NW.string(y.t.c0X1Cw),
                glowUp: y.NW.string(y.t.c0X1Cw),
                body: y.NW.string(y.t.SX63mJ),
                showEnhancedUpsell: !0,
                analyticsLocation: { section: f.jXE.PREMIUM_CUSTOM_NOTIFICATION_SOUND_UPSELL_MODAL },
                enableArtBoxShadow: !1,
                onSubscribeClick: l.Z,
                secondaryCTA: y.NW.string(y.t.PcTCBw),
                onSecondaryClick: () => {
                    _(), a.Z.open(f.oAB.PREMIUM);
                },
                onClose: _
            },
            g
        )),
        (j = j =
            {
                children: (0, r.jsx)(i.xJW, {
                    title: y.NW.string(y.t['K/hjQU']),
                    className: C.optionsContainerWrapper,
                    children: (0, r.jsx)('div', {
                        className: C.optionsContainer,
                        children: x.map((t, e) => {
                            let n = t.value;
                            return n === d.YC.CLASSIC
                                ? null
                                : (0, r.jsx)(
                                      O.Z,
                                      {
                                          label: t.label,
                                          soundpack: n,
                                          description: t.description,
                                          location: 'upsellModal'
                                      },
                                      e
                                  );
                        })
                    })
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(j))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(j)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(j, t));
              }),
        e)
    );
}
