n.d(t, { h: () => v });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(990547),
    s = n(755721),
    l = n(481060),
    c = n(213609),
    u = n(626135),
    d = n(738672),
    f = n(981631),
    _ = n(388032),
    p = n(504619);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m() {
    return (m =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function g(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e;
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let { hidden: t, onDismiss: n } = e;
    return (
        (0, c.Z)(
            {
                type: a.ImpressionTypes.VIEW,
                name: a.ImpressionNames.HD_STREAMING_POPOUT,
            },
            { disableTrack: t },
            [t],
        ),
        (0, r.jsxs)("div", {
            className: o()(p.popoutContainer, { [p.hidden]: t }),
            children: [
                (0, r.jsx)("img", {
                    className: p.image,
                    src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
                    alt: "HD Streaming Nitro Perk",
                }),
                (0, r.jsx)(s.zx, {
                    "data-migration-pending": !0,
                    className: p.closeButton,
                    "aria-label": _.intl.string(_.t.cpT0Cg),
                    look: s.zx.Looks.BLANK,
                    size: s.zx.Sizes.NONE,
                    onClick: () => {
                        n(), u.default.track(f.rMx.HD_STREAMING_POPOUT_DISMISSED);
                    },
                    children: (0, r.jsx)(l.Dio, {
                        size: "xs",
                        className: p.closeIcon,
                        color: "white",
                    }),
                }),
                (0, r.jsx)("div", {
                    className: p.infoContainerParent,
                    children: (0, r.jsxs)("div", {
                        className: p.infoContainer,
                        children: [
                            (0, r.jsx)(l.Text, {
                                className: p.infoText,
                                variant: "text-sm/medium",
                                children: _.intl.format(_.t.ruvD7u, {}),
                            }),
                            (0, r.jsxs)("div", {
                                className: p.poweredByNitroContainer,
                                children: [
                                    (0, r.jsx)(l.SrA, { size: "xs" }),
                                    (0, r.jsx)(l.Text, {
                                        className: p.infoText,
                                        variant: "text-sm/medium",
                                        children: _.intl.string(_.t["BMw+7O"]),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function v(e) {
    var t = m({}, g(e));
    return (0, r.jsx)(d.h, y(E({}, t), { renderComponent: (e) => (0, r.jsx)(O, E({}, e)) }));
}
