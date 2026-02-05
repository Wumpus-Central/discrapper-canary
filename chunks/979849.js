"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(688810),
    c = n(954921),
    d = n(290863),
    _ = n(837921),
    f = n(351242),
    p = n(385612),
    h = n(339984),
    m = n(577401);
let g = _.Ay.getEnableHardwareAcceleration() ? l.JsQ : l.euF;
function E(e) {
    let {
            user: t,
            guild: n,
            displayProfile: a,
            canUsePremiumCustomization: _,
            previewAvatar: E,
            previewAvatarDecorationSrc: A,
            previewTheme: I,
            previewPrimaryColor: T,
            className: y,
            disabledInputs: S,
            isTryItOut: v,
            onUpsellClick: C,
        } = e,
        b = i.useRef(null),
        { analyticsLocations: N, newestAnalyticsLocation: R } = (0, u.Ay)(),
        O = (0, o.bG)([d.A], () => d.A.getStatus(t.id)),
        D = null == n || a?.canUsePremiumProfileCustomization || _,
        L = (0, r.jsx)(g, {
            src: E,
            avatarDecoration: A,
            imageClassName: s()(y, { [m.Lw]: !S }),
            size: l._3J.SIZE_80,
            "aria-label": t.username,
            status: O,
            statusTooltip: !1,
            statusBackdropColor: null != T ? (0, l.C$5)(I) : void 0,
        });
    return S
        ? (0, r.jsx)("div", { className: m.my, children: L })
        : D
          ? (0, r.jsx)(l.YNO, {
                targetElementRef: b,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(f.A, {
                        onClose: t,
                        onChangeAvatar: () =>
                            (0, p.XD)({ uploadType: h.HL.AVATAR, guildId: n?.id, analyticsSource: R, isTryItOut: v }),
                        onChangeAvatarDecoration: () => {
                            (0, c.L)({ guild: null == n ? void 0 : n, analyticsLocations: N });
                        },
                    });
                },
                children: (e) =>
                    (0, r.jsxs)(l.DUT, {
                        ...e,
                        innerRef: b,
                        className: s()(m.my, m.vk),
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
                onClick: C,
                className: s()(m.my, m.vk),
                children: [
                    L,
                    (0, r.jsx)(l.tvc, { size: "custom", className: m.QY, width: 20, height: 20, color: "white" }),
                ],
            });
}
