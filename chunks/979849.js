"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(688810),
    c = n(954921),
    d = n(290863),
    _ = n(837921),
    f = n(351242),
    p = n(385612),
    h = n(339984),
    m = n(84279);
let E = _.Ay.getEnableHardwareAcceleration() ? l.JsQ : l.euF;
function g(e) {
    let {
            user: t,
            guild: n,
            displayProfile: s,
            canUsePremiumCustomization: _,
            previewAvatar: g,
            previewAvatarDecorationSrc: A,
            previewTheme: I,
            previewPrimaryColor: T,
            className: S,
            disabledInputs: y,
            isTryItOut: v,
            onUpsellClick: N,
        } = e,
        C = i.useRef(null),
        { analyticsLocations: R, newestAnalyticsLocation: O } = (0, u.Ay)(),
        b = (0, o.bG)([d.A], () => d.A.getStatus(t.id)),
        D = null == n || s?.canUsePremiumProfileCustomization || _,
        L = (0, r.jsx)(E, {
            src: g,
            avatarDecoration: A,
            imageClassName: a()(S, { [m.Lw]: !y }),
            size: l._3J.SIZE_80,
            "aria-label": t.username,
            status: b,
            statusTooltip: !1,
            statusBackdropColor: null != T ? (0, l.C$5)(I) : void 0,
        });
    return y
        ? (0, r.jsx)("div", { className: m.my, children: L })
        : D
          ? (0, r.jsx)(l.YNO, {
                targetElementRef: C,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(f.A, {
                        onClose: t,
                        onChangeAvatar: () =>
                            (0, p.XD)({ uploadType: h.HL.AVATAR, guildId: n?.id, analyticsSource: O, isTryItOut: v }),
                        onChangeAvatarDecoration: () => {
                            (0, c.L)({ guild: null == n ? void 0 : n, analyticsLocations: R });
                        },
                    });
                },
                children: (e) =>
                    (0, r.jsxs)(l.DUT, {
                        ...e,
                        innerRef: C,
                        className: a()(m.my, m.vk),
                        children: [
                            L,
                            (0, r.jsx)(l.R2l, {
                                size: "custom",
                                className: m.QY,
                                width: 20,
                                height: 20,
                                color: "white",
                            }),
                        ],
                    }),
            })
          : (0, r.jsxs)(l.DUT, {
                onClick: N,
                className: a()(m.my, m.vk),
                children: [
                    L,
                    (0, r.jsx)(l.tvc, { size: "custom", className: m.QY, width: 20, height: 20, color: "white" }),
                ],
            });
}
