r.d(t, { default: () => m });
var n = r(951288);
r(647438);
var o = r(952265),
    a = r(174609),
    c = r(47280),
    l = r(998076),
    i = r(790527),
    s = r(731502),
    u = r(703656),
    b = r(626135),
    f = r(981631),
    d = r(474936),
    p = r(388032),
    O = r(880916);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function m(e) {
    var { onClose: t, analyticsSource: r } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    (r = a[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ["onClose", "analyticsSource"]);
    let g = (0, n.jsx)("img", {
        className: O.art,
        alt: "HD Streaming Nitro Perk",
        src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
    });
    function h() {
        (0, a.Z)(),
            (0, o.pT)(),
            b.default.track(f.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: f.jXE.STREAM_UPSELL_MODAL,
                location_object: f.qAy.NAVIGATION_LINK,
            }),
            (0, u.uL)(f.Z5c.APPLICATION_STORE);
    }
    let j = p.intl.string(p.t.ewxv3N),
        S = p.intl.string(p.t.qlsCDA),
        v = (0, c.ZP)({ location: "StreamUpsellModal" }),
        P = (0, l.Z)({ location: "StreamUpsellModal" });
    return v || P
        ? (0, n.jsx)(
              s.Z,
              y(
                  {
                      onClose: t,
                      handleLearnMore: h,
                  },
                  m,
              ),
          )
        : (0, n.jsx)(
              i.Z,
              y(
                  {
                      title: j,
                      glowUp: S,
                      body: S,
                      artElement: g,
                      artContainerClassName: O.artContainer,
                      type: d.cd.STREAM_QUALITY_UPSELL,
                      analyticsLocation: {
                          section: f.jXE.STREAM_UPSELL_MODAL,
                          object: f.qAy.BUTTON_CTA,
                      },
                      analyticsSource: r,
                      onClose: t,
                      onSubscribeClick: a.Z,
                      secondaryCTA: p.intl.string(p.t.ZnqyZ2),
                      onSecondaryClick: h,
                      showEnhancedUpsell: !0,
                      enableArtBoxShadow: !1,
                      headerClassName: O.header,
                  },
                  m,
              ),
          );
}
