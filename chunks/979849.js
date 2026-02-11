"use strict";
n.d(t, { A: () => A });
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
    h = n(385612),
    p = n(339984),
    g = n(84279);
let E = _.Ay.getEnableHardwareAcceleration() ? l.JsQ : l.euF;
function A(e) {
    let {
            user: t,
            guild: n,
            displayProfile: a,
            canUsePremiumCustomization: _,
            previewAvatar: A,
            previewAvatarDecorationSrc: I,
            previewTheme: T,
            previewPrimaryColor: y,
            className: S,
            disabledInputs: v,
            isTryItOut: C,
            onUpsellClick: b,
        } = e,
        N = i.useRef(null),
        { analyticsLocations: R, newestAnalyticsLocation: O } = (0, u.Ay)(),
        D = (0, o.bG)([d.A], () => d.A.getStatus(t.id)),
        L = null == n || a?.canUsePremiumProfileCustomization || _,
        w = (0, r.jsx)(E, {
            src: A,
            avatarDecoration: I,
            imageClassName: s()(S, { [g.Lw]: !v }),
            size: l._3J.SIZE_80,
            "aria-label": t.username,
            status: D,
            statusTooltip: !1,
            statusBackdropColor: null != y ? (0, l.C$5)(T) : void 0,
        });
    return v
        ? (0, r.jsx)("div", { className: g.my, children: w })
        : L
          ? (0, r.jsx)(l.YNO, {
                targetElementRef: N,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(f.A, {
                        onClose: t,
                        onChangeAvatar: () =>
                            (0, h.XD)({ uploadType: p.HL.AVATAR, guildId: n?.id, analyticsSource: O, isTryItOut: C }),
                        onChangeAvatarDecoration: () => {
                            (0, c.L)({ guild: null == n ? void 0 : n, analyticsLocations: R });
                        },
                    });
                },
                children: (e) =>
                    (0, r.jsxs)(l.DUT, {
                        ...e,
                        innerRef: N,
                        className: s()(g.my, g.vk),
                        children: [
                            w,
                            (0, r.jsx)(l.R2l, {
                                size: "custom",
                                className: g.QY,
                                width: 20,
                                height: 20,
                                color: "white",
                            }),
                        ],
                    }),
            })
          : (0, r.jsxs)(l.DUT, {
                onClick: b,
                className: s()(g.my, g.vk),
                children: [
                    w,
                    (0, r.jsx)(l.tvc, { size: "custom", className: g.QY, width: 20, height: 20, color: "white" }),
                ],
            });
}
