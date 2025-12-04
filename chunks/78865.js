r.d(t, { default: () => y });
var n = r(54381);
r(473749);
var o = r(952265),
    a = r(174609),
    c = r(283066),
    l = r(790527),
    i = r(731502),
    s = r(703656),
    u = r(626135),
    b = r(981631),
    f = r(474936),
    d = r(388032),
    p = r(880916);
function O(e) {
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
function y(e) {
    var { onClose: t, analyticsSource: r } = e,
        y = (function (e, t) {
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
        className: p.art,
        alt: "HD Streaming Nitro Perk",
        src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
    });
    function m() {
        (0, a.Z)(),
            (0, o.closeAllModals)(),
            u.default.track(b.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: b.jXE.STREAM_UPSELL_MODAL,
                location_object: b.qAy.NAVIGATION_LINK,
            }),
            (0, s.uL)(b.Z5c.APPLICATION_STORE);
    }
    let h = d.intl.string(d.t.ewxv3J),
        j = d.intl.string(d.t.qlsCDB);
    return (0, c.Z)({ location: "StreamUpsellModal" })
        ? (0, n.jsx)(
              i.Z,
              O(
                  {
                      onClose: t,
                      handleLearnMore: m,
                  },
                  y,
              ),
          )
        : (0, n.jsx)(
              l.Z,
              O(
                  {
                      title: h,
                      glowUp: j,
                      body: j,
                      artElement: g,
                      artContainerClassName: p.artContainer,
                      type: f.cd.STREAM_QUALITY_UPSELL,
                      analyticsLocation: {
                          section: b.jXE.STREAM_UPSELL_MODAL,
                          object: b.qAy.BUTTON_CTA,
                      },
                      analyticsSource: r,
                      onClose: t,
                      onSubscribeClick: a.Z,
                      secondaryCTA: d.intl.string(d.t.ZnqyZ2),
                      onSecondaryClick: m,
                      showEnhancedUpsell: !0,
                      enableArtBoxShadow: !1,
                      headerClassName: p.header,
                  },
                  y,
              ),
          );
}
