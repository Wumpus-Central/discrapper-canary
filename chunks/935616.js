t.d(l, {
    A: () => d,
}),
    t(801460),
    t(508300),
    t(650828);
var r = t(627968),
    n = t(64700),
    i = t(607470),
    s = t(643612),
    a = t(652215),
    o = t(985018);

function u(e) {
    let {
            poster: l,
            src: t,
            width: s,
            height: o,
            naturalWidth: u,
            naturalHeight: d,
            play: c = !0,
            className: h,
            alt: p,
            responsive: m,
        } = e,
        g = n.useRef(null);
    return (n.useEffect(() => {
        let { current: e } = g;
        if (c) {
            var l;
            null == e ||
                null == (l = e.play()) ||
                l.catch((e) => {
                    if (!(e instanceof DOMException) || "NotAllowedError" !== e.name) throw e;
                });
        } else null == e || e.pause();
    }, [c]),
    (u <= a.AaC && d <= a.oJQ) || (u <= a.oJQ && d <= a.AaC))
        ? (0, r.jsx)(i.A, {
              ref: g,
              className: h,
              poster: l,
              src: t,
              width: s,
              height: o,
              responsive: m,
              muted: !0,
              loop: !0,
              autoPlay: c,
              playsInline: !0,
              preload: "none",
              "aria-label": p,
          })
        : (0, r.jsx)("img", {
              alt: "",
              src: l,
              width: s,
              height: o,
          });
}

function d(e) {
    let {
            src: l,
            poster: t,
            naturalWidth: n,
            naturalHeight: i,
            responsive: a,
            autoPlay: d,
            className: c,
            playable: h = !0,
            renderImageComponent: p,
            alt: m = o.intl.string(o.t.I5gL2H),
            sourceMetadata: g,
        } = e,
        f = (function (e, l) {
            if (null == e) return {};
            var t,
                r,
                n,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (n = 0, t = Reflect.ownKeys(e); n < t.length; n++)
                    (r = t[n]),
                        !(l.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, l) {
                    if (null == e) return {};
                    var t,
                        r,
                        n = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (t = i[r]),
                            !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
                    return n;
                })(e, l)),
                Object.getOwnPropertySymbols)
            )
                for (n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++)
                    (r = t[n]),
                        !(l.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, [
            "src",
            "poster",
            "naturalWidth",
            "naturalHeight",
            "responsive",
            "autoPlay",
            "className",
            "playable",
            "renderImageComponent",
            "alt",
            "sourceMetadata",
        ]);
    return (0, r.jsx)(s.G.Consumer, {
        children: (e) => {
            var s, o;
            return p(
                ((s = (function (e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = null != arguments[l] ? arguments[l] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                }),
                            )),
                            r.forEach(function (l) {
                                var r;
                                (r = t[l]),
                                    l in e
                                        ? Object.defineProperty(e, l, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[l] = r);
                            });
                    }
                    return e;
                })({}, f)),
                (o = o =
                    {
                        alt: m,
                        src: t,
                        containerClassName: c,
                        autoPlay: d,
                        animated: h,
                        responsive: a,
                        renderAccessory: e,
                        tabIndex: h ? 0 : -1,
                        dataSafeSrc: l,
                        children(e) {
                            let { src: t, size: s, animating: o, alt: d } = e;
                            return (0, r.jsx)(u, {
                                alt: d,
                                className: c,
                                poster: t,
                                src: l,
                                width: s.width,
                                height: s.height,
                                naturalWidth: n,
                                naturalHeight: i,
                                responsive: a,
                                play: h && o,
                            });
                        },
                        sourceMetadata: g,
                        analyticsSource: "LazyGIFV",
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o))
                    : (function (e, l) {
                          var t = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              t.push.apply(t, r);
                          }
                          return t;
                      })(Object(o)).forEach(function (e) {
                          Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                s),
            );
        },
    });
}
