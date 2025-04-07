l.d(n, { default: () => b }), l(388685);
var r = l(200651),
    t = l(192379),
    a = l(481060),
    i = l(442837),
    o = l(410030),
    s = l(430824),
    c = l(594174),
    u = l(931240),
    d = l(645896),
    m = l(603368),
    f = l(353093),
    h = l(114487),
    g = l(380365),
    x = l(981631),
    v = l(921944),
    j = l(388032),
    p = l(736609);
function b(e) {
    var n, l;
    let { guildId: b, transitionState: N, onClose: P } = e,
        y = (0, i.e7)([s.Z], () => s.Z.getGuild(b), [b]),
        C = (0, d.Cc)(null != b ? b : null),
        w = (0, i.e7)([c.default], () => c.default.getCurrentUser(), []),
        [_, S] = t.useState(!0),
        k = (0, o.ZP)(),
        O = t.useCallback(async () => {
            _ && (await (0, u.nE)(b, !0, x.Sbl.CLAN_ADOPT_IDENTITY_MODAL)), P(v.L.PRIMARY);
        }, [_, P, b]),
        T = t.useCallback(() => {
            P(v.L.DISMISS);
        }, [P]);
    t.useEffect(() => ((null == y || null == w) && P(v.L.AUTO_DISMISS), () => {}), [w, y, b, P]);
    let I = (0, m.nP)(null == C || null == (n = C.branding) ? void 0 : n.primaryColor, [a.TVs.colors.BG_BRAND, 0.7]),
        Z = a.TVs.colors.BG_SURFACE_OVERLAY.resolve({
            theme: k,
            saturation: 1
        }).hex(),
        D = (0, m.nj)(I, Z, 'top center'),
        L = (0, m.nP)(null == C || null == (l = C.branding) ? void 0 : l.primaryColor, [a.TVs.colors.BG_BRAND, 1]),
        E = (0, m.$0)(I).hex(),
        M = (0, f.Zp)(y, null == w ? void 0 : w.primaryGuild);
    if (null == y || null == w) return null;
    let z = M ? j.NW.format(j.t['hyP/19'], { guildName: y.name }) : j.NW.format(j.t.h1CclZ, { guildName: y.name }),
        A = M ? j.NW.formatToPlainString(j.t['x+B7c3'], { guildName: y.name }) : j.NW.formatToPlainString(j.t.kPJowM, { guildName: y.name }),
        G = j.NW.string(j.t.re8ZPj);
    return (0, r.jsxs)(a.Y0X, {
        transitionState: N,
        size: a.CgR.SMALL,
        className: p.modal,
        children: [
            (0, r.jsx)(a.hzk, {
                style: D,
                children: (0, r.jsxs)('div', {
                    className: p.mainContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: p.infoContainer,
                            children: [
                                (0, r.jsx)(h.Z, {
                                    guild: y,
                                    iconSize: 64
                                }),
                                (0, r.jsxs)('div', {
                                    className: p.headerTextContainer,
                                    children: [
                                        (0, r.jsx)(a.X6q, {
                                            variant: 'heading-xl/normal',
                                            color: 'header-primary',
                                            children: z
                                        }),
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-secondary',
                                            children: A
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)(g.Z, {
                            guildId: b,
                            isTagAdopted: _,
                            onChangeUseTag: S
                        })
                    ]
                })
            }),
            (0, r.jsxs)(a.mzw, {
                className: p.modalFooter,
                children: [
                    (0, r.jsx)(a.zxk, {
                        onClick: O,
                        color: a.zxk.Colors.CUSTOM,
                        look: a.zxk.Looks.FILLED,
                        style: {
                            backgroundColor: L,
                            color: E
                        },
                        children: G
                    }),
                    (0, r.jsx)(a.zxk, {
                        onClick: T,
                        color: a.zxk.Colors.PRIMARY,
                        look: a.zxk.Looks.LINK,
                        children: j.NW.string(j.t.QMwUJy)
                    })
                ]
            })
        ]
    });
}
