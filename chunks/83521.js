n.r(l),
    n.d(l, {
        default: function () {
            return j;
        }
    }),
    n(47120);
var i = n(200651),
    a = n(192379),
    t = n(481060),
    o = n(442837),
    r = n(410030),
    s = n(430824),
    d = n(594174),
    c = n(931240),
    u = n(645896),
    m = n(603368),
    v = n(353093),
    x = n(114487),
    g = n(380365),
    h = n(981631),
    f = n(921944),
    C = n(388032),
    N = n(854983);
function j(e) {
    var l, n;
    let { guildId: j, transitionState: S, onClose: p } = e,
        _ = (0, o.e7)([s.Z], () => s.Z.getGuild(j), [j]),
        k = (0, u.Cc)(null != j ? j : null),
        b = (0, o.e7)([d.default], () => d.default.getCurrentUser(), []),
        [T, w] = a.useState(!0),
        M = (0, r.ZP)(),
        P = a.useCallback(async () => {
            T && (await (0, c.nE)(j, !0, h.Sbl.CLAN_ADOPT_IDENTITY_MODAL)), p(f.L.PRIMARY);
        }, [T, p, j]),
        Z = a.useCallback(() => {
            p(f.L.DISMISS);
        }, [p]);
    a.useEffect(() => ((null == _ || null == b) && p(f.L.AUTO_DISMISS), () => {}), [b, _, j, p]);
    let A = (0, m.nP)(null == k ? void 0 : null === (l = k.branding) || void 0 === l ? void 0 : l.primaryColor, [t.tokens.colors.BG_BRAND, 0.7]),
        I = t.tokens.colors.BG_SURFACE_OVERLAY.resolve({
            theme: M,
            saturation: 1
        }).hex(),
        L = (0, m.nj)(A, I, 'top center'),
        y = (0, m.nP)(null == k ? void 0 : null === (n = k.branding) || void 0 === n ? void 0 : n.primaryColor, [t.tokens.colors.BG_BRAND, 1]),
        B = (0, m.$0)(A).hex(),
        R = (0, v.Zp)(_, null == b ? void 0 : b.primaryGuild);
    if (null == _ || null == b) return null;
    let D = R ? C.intl.format(C.t['hyP/19'], { guildName: _.name }) : C.intl.format(C.t.h1CclZ, { guildName: _.name }),
        E = R ? C.intl.formatToPlainString(C.t['x+B7c3'], { guildName: _.name }) : C.intl.formatToPlainString(C.t.kPJowM, { guildName: _.name }),
        U = C.intl.string(C.t.re8ZPj);
    return (0, i.jsxs)(t.ModalRoot, {
        transitionState: S,
        size: t.ModalSize.SMALL,
        className: N.modal,
        children: [
            (0, i.jsx)(t.ModalContent, {
                style: L,
                children: (0, i.jsxs)('div', {
                    className: N.mainContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: N.infoContainer,
                            children: [
                                (0, i.jsx)(x.Z, {
                                    guild: _,
                                    iconSize: 64
                                }),
                                (0, i.jsxs)('div', {
                                    className: N.headerTextContainer,
                                    children: [
                                        (0, i.jsx)(t.Heading, {
                                            variant: 'heading-xl/normal',
                                            color: 'header-primary',
                                            children: D
                                        }),
                                        (0, i.jsx)(t.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-secondary',
                                            children: E
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsx)(g.Z, {
                            guildId: j,
                            isTagAdopted: T,
                            onChangeUseTag: w
                        })
                    ]
                })
            }),
            (0, i.jsxs)(t.ModalFooter, {
                className: N.modalFooter,
                children: [
                    (0, i.jsx)(t.Button, {
                        onClick: P,
                        color: t.Button.Colors.CUSTOM,
                        look: t.Button.Looks.FILLED,
                        style: {
                            backgroundColor: y,
                            color: B
                        },
                        children: U
                    }),
                    (0, i.jsx)(t.Button, {
                        onClick: Z,
                        color: t.Button.Colors.PRIMARY,
                        look: t.Button.Looks.LINK,
                        children: C.intl.string(C.t.QMwUJy)
                    })
                ]
            })
        ]
    });
}
