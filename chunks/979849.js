a.d(i, { A: () => C });
var r = a(627968),
    n = a(64700),
    l = a(503698),
    s = a.n(l),
    t = a(311907),
    d = a(97808),
    o = a(778712),
    u = a(935154),
    c = a(939249),
    m = a(403581),
    g = a(265872),
    p = a(22231),
    v = a(688810),
    h = a(562819),
    A = a(290863),
    y = a(837921),
    x = a(351242),
    P = a(385612),
    f = a(339984),
    j = a(430770);
let b = y.Ay.getEnableHardwareAcceleration() ? d.Js : d.eu;
function C(e) {
    let {
            user: i,
            guild: a,
            displayProfile: l,
            canUsePremiumCustomization: d,
            previewAvatar: y,
            previewAvatarDecorationSrc: C,
            previewTheme: I,
            previewPrimaryColor: w,
            className: T,
            disabledInputs: D,
            isTryItOut: N,
            onUpsellClick: k,
        } = e,
        S = n.useRef(null),
        { analyticsLocations: O, newestAnalyticsLocation: U } = (0, v.Ay)(),
        B = (0, t.bG)([A.A], () => A.A.getStatus(i.id)),
        _ = null == a || l?.canUsePremiumProfileCustomization || d,
        E = (0, r.jsx)(b, {
            src: y,
            avatarDecoration: C,
            imageClassName: s()(T, { [j.Lw]: !D }),
            size: o._3.SIZE_80,
            "aria-label": i.username,
            status: B,
            statusTooltip: !1,
            statusBackdropColor: null != w ? (0, u.C$)(I) : void 0,
        });
    return D
        ? (0, r.jsx)("div", { className: j.my, children: E })
        : _
          ? (0, r.jsx)(g.Y, {
                targetElementRef: S,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, r.jsx)(x.A, {
                        onClose: i,
                        onChangeAvatar: () =>
                            (0, P.XD)({ uploadType: f.HL.AVATAR, guildId: a?.id, analyticsSource: U, isTryItOut: N }),
                        onChangeAvatarDecoration: () => {
                            (0, h.L)({ guild: null == a ? void 0 : a, analyticsLocations: O });
                        },
                    });
                },
                children: (e) =>
                    (0, r.jsxs)(c.D, {
                        ...e,
                        innerRef: S,
                        className: s()(j.my, j.vk),
                        children: [
                            E,
                            (0, r.jsx)(p.R, { size: "custom", className: j.QY, width: 20, height: 20, color: "white" }),
                        ],
                    }),
            })
          : (0, r.jsxs)(c.D, {
                onClick: k,
                className: s()(j.my, j.vk),
                children: [
                    E,
                    (0, r.jsx)(m.t, { size: "custom", className: j.QY, width: 20, height: 20, color: "white" }),
                ],
            });
}
