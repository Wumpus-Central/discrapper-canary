a.d(l, { default: () => j }), a(47120);
var i = a(200651),
    n = a(192379),
    r = a(481060),
    t = a(442837),
    o = a(410030),
    s = a(430824),
    d = a(594174),
    c = a(931240),
    u = a(645896),
    m = a(603368),
    x = a(353093),
    v = a(114487),
    g = a(380365),
    h = a(981631),
    N = a(921944),
    C = a(388032),
    _ = a(139447);
function j(e) {
    var l, a;
    let { guildId: j, transitionState: f, onClose: k } = e,
        p = (0, t.e7)([s.Z], () => s.Z.getGuild(j), [j]),
        S = (0, u.Cc)(null != j ? j : null),
        T = (0, t.e7)([d.default], () => d.default.getCurrentUser(), []),
        [b, P] = n.useState(!0),
        w = (0, o.ZP)(),
        Z = n.useCallback(async () => {
            b && (await (0, c.nE)(j, !0, h.Sbl.CLAN_ADOPT_IDENTITY_MODAL)), k(N.L.PRIMARY);
        }, [b, k, j]),
        I = n.useCallback(() => {
            k(N.L.DISMISS);
        }, [k]);
    n.useEffect(() => ((null == p || null == T) && k(N.L.AUTO_DISMISS), () => {}), [T, p, j, k]);
    let L = (0, m.nP)(null == S ? void 0 : null === (l = S.branding) || void 0 === l ? void 0 : l.primaryColor, [r.TVs.colors.BG_BRAND, 0.7]),
        M = r.TVs.colors.BG_SURFACE_OVERLAY.resolve({
            theme: w,
            saturation: 1
        }).hex(),
        y = (0, m.nj)(L, M, 'top center'),
        z = (0, m.nP)(null == S ? void 0 : null === (a = S.branding) || void 0 === a ? void 0 : a.primaryColor, [r.TVs.colors.BG_BRAND, 1]),
        A = (0, m.$0)(L).hex(),
        E = (0, x.Zp)(p, null == T ? void 0 : T.primaryGuild);
    if (null == p || null == T) return null;
    let R = E ? C.NW.format(C.t['hyP/19'], { guildName: p.name }) : C.NW.format(C.t.h1CclZ, { guildName: p.name }),
        D = E ? C.NW.formatToPlainString(C.t['x+B7c3'], { guildName: p.name }) : C.NW.formatToPlainString(C.t.kPJowM, { guildName: p.name }),
        U = C.NW.string(C.t.re8ZPj);
    return (0, i.jsxs)(r.Y0X, {
        transitionState: f,
        size: r.CgR.SMALL,
        className: _.modal,
        children: [
            (0, i.jsx)(r.hzk, {
                style: y,
                children: (0, i.jsxs)('div', {
                    className: _.mainContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: _.infoContainer,
                            children: [
                                (0, i.jsx)(v.Z, {
                                    guild: p,
                                    iconSize: 64
                                }),
                                (0, i.jsxs)('div', {
                                    className: _.headerTextContainer,
                                    children: [
                                        (0, i.jsx)(r.X6q, {
                                            variant: 'heading-xl/normal',
                                            color: 'header-primary',
                                            children: R
                                        }),
                                        (0, i.jsx)(r.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-secondary',
                                            children: D
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsx)(g.Z, {
                            guildId: j,
                            isTagAdopted: b,
                            onChangeUseTag: P
                        })
                    ]
                })
            }),
            (0, i.jsxs)(r.mzw, {
                className: _.modalFooter,
                children: [
                    (0, i.jsx)(r.zxk, {
                        onClick: Z,
                        color: r.zxk.Colors.CUSTOM,
                        look: r.zxk.Looks.FILLED,
                        style: {
                            backgroundColor: z,
                            color: A
                        },
                        children: U
                    }),
                    (0, i.jsx)(r.zxk, {
                        onClick: I,
                        color: r.zxk.Colors.PRIMARY,
                        look: r.zxk.Looks.LINK,
                        children: C.NW.string(C.t.QMwUJy)
                    })
                ]
            })
        ]
    });
}
