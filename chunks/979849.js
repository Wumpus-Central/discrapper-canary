"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(97808),
    u = n(778712),
    c = n(935154),
    d = n(939249),
    _ = n(403581),
    f = n(265872),
    p = n(22231),
    h = n(688810),
    E = n(562819),
    m = n(290863),
    g = n(837921),
    A = n(351242),
    I = n(385612),
    T = n(339984),
    S = n(430770);
let y = g.Ay.getEnableHardwareAcceleration() ? l.Js : l.eu;
function N(e) {
    let {
            user: t,
            guild: n,
            displayProfile: s,
            canUsePremiumCustomization: l,
            previewAvatar: g,
            previewAvatarDecorationSrc: N,
            previewTheme: v,
            previewPrimaryColor: C,
            className: O,
            disabledInputs: R,
            isTryItOut: b,
            onUpsellClick: D,
        } = e,
        L = i.useRef(null),
        { analyticsLocations: w, newestAnalyticsLocation: M } = (0, h.Ay)(),
        P = (0, o.bG)([m.A], () => m.A.getStatus(t.id)),
        x = null == n || s?.canUsePremiumProfileCustomization || l,
        k = (0, r.jsx)(y, {
            src: g,
            avatarDecoration: N,
            imageClassName: a()(O, { [S.Lw]: !R }),
            size: u._3.SIZE_80,
            "aria-label": t.username,
            status: P,
            statusTooltip: !1,
            statusBackdropColor: null != C ? (0, c.C$)(v) : void 0,
        });
    return R
        ? (0, r.jsx)("div", { className: S.my, children: k })
        : x
          ? (0, r.jsx)(f.Y, {
                targetElementRef: L,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(A.A, {
                        onClose: t,
                        onChangeAvatar: () =>
                            (0, I.XD)({ uploadType: T.HL.AVATAR, guildId: n?.id, analyticsSource: M, isTryItOut: b }),
                        onChangeAvatarDecoration: () => {
                            (0, E.L)({ guild: null == n ? void 0 : n, analyticsLocations: w });
                        },
                    });
                },
                children: (e) =>
                    (0, r.jsxs)(d.D, {
                        ...e,
                        innerRef: L,
                        className: a()(S.my, S.vk),
                        children: [
                            k,
                            (0, r.jsx)(p.R, { size: "custom", className: S.QY, width: 20, height: 20, color: "white" }),
                        ],
                    }),
            })
          : (0, r.jsxs)(d.D, {
                onClick: D,
                className: a()(S.my, S.vk),
                children: [
                    k,
                    (0, r.jsx)(_.t, { size: "custom", className: S.QY, width: 20, height: 20, color: "white" }),
                ],
            });
}
