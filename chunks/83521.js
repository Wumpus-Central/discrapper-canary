l.d(n, { default: () => b }), l(47120);
var t = l(200651),
    r = l(192379),
    a = l(481060),
    i = l(442837),
    s = l(410030),
    o = l(430824),
    c = l(594174),
    u = l(931240),
    d = l(645896),
    m = l(603368),
    f = l(353093),
    h = l(114487),
    x = l(380365),
    g = l(981631),
    v = l(921944),
    j = l(388032),
    p = l(736609);
function b(e) {
    var n, l;
    let { guildId: b, transitionState: N, onClose: P } = e,
        y = (0, i.e7)([o.Z], () => o.Z.getGuild(b), [b]),
        C = (0, d.Cc)(null != b ? b : null),
        w = (0, i.e7)([c.default], () => c.default.getCurrentUser(), []),
        [_, k] = r.useState(!0),
        S = (0, s.ZP)(),
        O = r.useCallback(async () => {
            _ && (await (0, u.nE)(b, !0, g.Sbl.CLAN_ADOPT_IDENTITY_MODAL)), P(v.L.PRIMARY);
        }, [_, P, b]),
        T = r.useCallback(() => {
            P(v.L.DISMISS);
        }, [P]);
    r.useEffect(() => ((null == y || null == w) && P(v.L.AUTO_DISMISS), () => {}), [w, y, b, P]);
    let I = (0, m.nP)(null == C || null == (n = C.branding) ? void 0 : n.primaryColor, [a.TVs.colors.BG_BRAND, 0.7]),
        Z = a.TVs.colors.BG_SURFACE_OVERLAY.resolve({
            theme: S,
            saturation: 1
        }).hex(),
        D = (0, m.nj)(I, Z, 'top center'),
        L = (0, m.nP)(null == C || null == (l = C.branding) ? void 0 : l.primaryColor, [a.TVs.colors.BG_BRAND, 1]),
        M = (0, m.$0)(I).hex(),
        z = (0, f.Zp)(y, null == w ? void 0 : w.primaryGuild);
    if (null == y || null == w) return null;
    let A = z ? j.NW.format(j.t['hyP/19'], { guildName: y.name }) : j.NW.format(j.t.h1CclZ, { guildName: y.name }),
        E = z ? j.NW.formatToPlainString(j.t['x+B7c3'], { guildName: y.name }) : j.NW.formatToPlainString(j.t.kPJowM, { guildName: y.name }),
        R = j.NW.string(j.t.re8ZPj);
    return (0, t.jsxs)(a.Y0X, {
        transitionState: N,
        size: a.CgR.SMALL,
        className: p.modal,
        children: [
            (0, t.jsx)(a.hzk, {
                style: D,
                children: (0, t.jsxs)('div', {
                    className: p.mainContainer,
                    children: [
                        (0, t.jsxs)('div', {
                            className: p.infoContainer,
                            children: [
                                (0, t.jsx)(h.Z, {
                                    guild: y,
                                    iconSize: 64
                                }),
                                (0, t.jsxs)('div', {
                                    className: p.headerTextContainer,
                                    children: [
                                        (0, t.jsx)(a.X6q, {
                                            variant: 'heading-xl/normal',
                                            color: 'header-primary',
                                            children: A
                                        }),
                                        (0, t.jsx)(a.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-secondary',
                                            children: E
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, t.jsx)(x.Z, {
                            guildId: b,
                            isTagAdopted: _,
                            onChangeUseTag: k
                        })
                    ]
                })
            }),
            (0, t.jsxs)(a.mzw, {
                className: p.modalFooter,
                children: [
                    (0, t.jsx)(a.zxk, {
                        onClick: O,
                        color: a.zxk.Colors.CUSTOM,
                        look: a.zxk.Looks.FILLED,
                        style: {
                            backgroundColor: L,
                            color: M
                        },
                        children: R
                    }),
                    (0, t.jsx)(a.zxk, {
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
