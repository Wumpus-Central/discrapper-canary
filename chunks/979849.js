n.d(t, {
    A: () => v,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(688810),
    u = n(954921),
    d = n(290863),
    f = n(837921),
    p = n(351242),
    _ = n(385612),
    h = n(339984),
    m = n(577401);

function g(e, t, n) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}

function y(e, t) {
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

function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = f.Ay.getEnableHardwareAcceleration() ? l.JsQ : l.euF;

function v(e) {
    let {
            user: t,
            guild: n,
            displayProfile: a,
            canUsePremiumCustomization: f,
            previewAvatar: g,
            previewAvatarDecorationSrc: y,
            previewTheme: v,
            previewPrimaryColor: A,
            className: I,
            disabledInputs: S,
            isTryItOut: T,
            onUpsellClick: C,
        } = e,
        N = i.useRef(null),
        { analyticsLocations: w, newestAnalyticsLocation: R } = (0, c.Ay)(),
        P = (0, o.bG)([d.A], () => d.A.getStatus(t.id)),
        D = null == n || (null == a ? void 0 : a.canUsePremiumProfileCustomization) || f,
        x = (0, r.jsx)(O, {
            src: g,
            avatarDecoration: y,
            imageClassName: s()(I, {
                [m.Lw]: !S,
            }),
            size: l._3J.SIZE_80,
            "aria-label": t.username,
            status: P,
            statusTooltip: !1,
            statusBackdropColor: null != A ? (0, l.C$5)(v) : void 0,
        });
    return S
        ? (0, r.jsx)("div", {
              className: m.my,
              children: x,
          })
        : D
          ? (0, r.jsx)(l.YNO, {
                targetElementRef: N,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(p.A, {
                        onClose: t,
                        onChangeAvatar: () =>
                            (0, _.XD)({
                                uploadType: h.HL.AVATAR,
                                guildId: null == n ? void 0 : n.id,
                                analyticsSource: R,
                                isTryItOut: T,
                            }),
                        onChangeAvatarDecoration: () => {
                            (0, u.L)({
                                guild: null == n ? void 0 : n,
                                analyticsLocations: w,
                            });
                        },
                    });
                },
                children: (e) =>
                    (0, r.jsxs)(
                        l.DUT,
                        b(E({}, e), {
                            innerRef: N,
                            className: s()(m.my, m.vk),
                            children: [
                                x,
                                (0, r.jsx)(l.R2l, {
                                    size: "custom",
                                    className: m.QY,
                                    width: 20,
                                    height: 20,
                                    color: "white",
                                }),
                            ],
                        }),
                    ),
            })
          : (0, r.jsxs)(l.DUT, {
                onClick: C,
                className: s()(m.my, m.vk),
                children: [
                    x,
                    (0, r.jsx)(l.tvc, {
                        size: "custom",
                        className: m.QY,
                        width: 20,
                        height: 20,
                        color: "white",
                    }),
                ],
            });
}
