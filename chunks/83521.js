i.d(l, { default: () => j }), i(47120);
var a = i(200651),
    n = i(192379),
    t = i(481060),
    r = i(442837),
    o = i(410030),
    s = i(430824),
    d = i(594174),
    c = i(931240),
    u = i(645896),
    m = i(603368),
    x = i(353093),
    v = i(114487),
    g = i(380365),
    h = i(981631),
    C = i(921944),
    _ = i(388032),
    N = i(738145);
function j(e) {
    var l, i;
    let { guildId: j, transitionState: f, onClose: k } = e,
        p = (0, r.e7)([s.Z], () => s.Z.getGuild(j), [j]),
        S = (0, u.Cc)(null != j ? j : null),
        T = (0, r.e7)([d.default], () => d.default.getCurrentUser(), []),
        [b, P] = n.useState(!0),
        w = (0, o.ZP)(),
        Z = n.useCallback(async () => {
            b && (await (0, c.nE)(j, !0, h.Sbl.CLAN_ADOPT_IDENTITY_MODAL)), k(C.L.PRIMARY);
        }, [b, k, j]),
        I = n.useCallback(() => {
            k(C.L.DISMISS);
        }, [k]);
    n.useEffect(() => ((null == p || null == T) && k(C.L.AUTO_DISMISS), () => {}), [T, p, j, k]);
    let L = (0, m.nP)(null == S ? void 0 : null === (l = S.branding) || void 0 === l ? void 0 : l.primaryColor, [t.TVs.colors.BG_BRAND, 0.7]),
        M = t.TVs.colors.BG_SURFACE_OVERLAY.resolve({
            theme: w,
            saturation: 1
        }).hex(),
        y = (0, m.nj)(L, M, 'top center'),
        z = (0, m.nP)(null == S ? void 0 : null === (i = S.branding) || void 0 === i ? void 0 : i.primaryColor, [t.TVs.colors.BG_BRAND, 1]),
        A = (0, m.$0)(L).hex(),
        E = (0, x.Zp)(p, null == T ? void 0 : T.primaryGuild);
    if (null == p || null == T) return null;
    let R = E ? _.intl.format(_.t['hyP/19'], { guildName: p.name }) : _.intl.format(_.t.h1CclZ, { guildName: p.name }),
        D = E ? _.intl.formatToPlainString(_.t['x+B7c3'], { guildName: p.name }) : _.intl.formatToPlainString(_.t.kPJowM, { guildName: p.name }),
        U = _.intl.string(_.t.re8ZPj);
    return (0, a.jsxs)(t.Y0X, {
        transitionState: f,
        size: t.CgR.SMALL,
        className: N.modal,
        children: [
            (0, a.jsx)(t.hzk, {
                style: y,
                children: (0, a.jsxs)('div', {
                    className: N.mainContainer,
                    children: [
                        (0, a.jsxs)('div', {
                            className: N.infoContainer,
                            children: [
                                (0, a.jsx)(v.Z, {
                                    guild: p,
                                    iconSize: 64
                                }),
                                (0, a.jsxs)('div', {
                                    className: N.headerTextContainer,
                                    children: [
                                        (0, a.jsx)(t.X6q, {
                                            variant: 'heading-xl/normal',
                                            color: 'header-primary',
                                            children: R
                                        }),
                                        (0, a.jsx)(t.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-secondary',
                                            children: D
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsx)(g.Z, {
                            guildId: j,
                            isTagAdopted: b,
                            onChangeUseTag: P
                        })
                    ]
                })
            }),
            (0, a.jsxs)(t.mzw, {
                className: N.modalFooter,
                children: [
                    (0, a.jsx)(t.zxk, {
                        onClick: Z,
                        color: t.zxk.Colors.CUSTOM,
                        look: t.zxk.Looks.FILLED,
                        style: {
                            backgroundColor: z,
                            color: A
                        },
                        children: U
                    }),
                    (0, a.jsx)(t.zxk, {
                        onClick: I,
                        color: t.zxk.Colors.PRIMARY,
                        look: t.zxk.Looks.LINK,
                        children: _.intl.string(_.t.QMwUJy)
                    })
                ]
            })
        ]
    });
}
