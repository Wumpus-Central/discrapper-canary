n.d(t, { A: () => _ });
var i = n(477900),
    l = n(582128),
    s = n(855986),
    r = n(36525),
    a = n(435911),
    o = n(207803),
    u = n(836602),
    c = n(624826),
    d = n(858899),
    m = n(792996);
function g() {
    (0, d.P0)({ text: m.intl.string(m.t["84MExs"]), variant: "critical" });
}
var A = n(159001);
function E() {
    let {
            selectedGuildId: e,
            canSubmit: t,
            errors: n,
        } = (0, s.cf)([u.A], () => ({
            selectedGuildId: u.A.selectedGuildId,
            canSubmit: u.A.canSubmit(),
            errors: u.A.getErrors(u.A.selectedGuildId),
        })),
        [g, E] = l.useState(!1),
        h = l.useMemo(
            () =>
                n?.guild_tag !== void 0 && n.guild_tag.length > 0
                    ? n.guild_tag[0]
                    : Object.keys(n ?? {}).length > 0
                      ? m.intl.string(m.t.s35OuK)
                      : null,
            [n],
        ),
        f = l.useCallback(async () => {
            E(!0);
            let t = u.A.getPendingChanges(e),
                n = (0, a.C5)(t),
                i = (0, a.yX)(t, e),
                l = !0;
            if (Object.keys(n).length > 0) {
                let i = await (0, A.GL)(e, n);
                if (((l = l && (i?.ok ?? !1)), i?.ok)) {
                    let e = i.body;
                    (void 0 !== t.pendingAvatar &&
                        (0, c.t)({
                            isGuildProfile: !0,
                            avatarHash: e.avatar,
                            avatarId: n.avatarId,
                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                        }),
                        (0, A.go)());
                }
            }
            if (Object.keys(i).length > 0) {
                let { bannerOriginalMd5: t, ...n } = i,
                    s = await (0, o.gi)(n, e, t);
                ((l = l && (s?.ok ?? !1)),
                    s?.ok ? (0, A.RE)() : (0, d.P0)({ text: m.intl.string(m.t.s35OuK), variant: "critical" }));
            }
            (l && (0, A.x8)(), E(!1));
        }, [e]),
        p = l.useCallback(() => {
            (0, A.IM)();
        }, []);
    return (0, i.jsx)(r.A, { submitting: g, onSave: f, onReset: p, disabled: !t, errorMessage: h ?? void 0 });
}
var h = n(631670),
    f = n(933725),
    p = n(253932),
    S = n(774914);
function T() {
    let { canSubmit: e, errors: t } = (0, s.cf)([u.A], () => ({ canSubmit: u.A.canSubmit(), errors: u.A.getErrors() })),
        [n, d] = l.useState(!1),
        A = l.useMemo(() => (Object.keys(t ?? {}).length > 0 ? m.intl.string(m.t["84MExs"]) : null), [t]),
        E = l.useCallback(async () => {
            d(!0);
            let e = u.A.getPendingChanges(),
                t = (0, a.Sk)(e),
                n = (0, a.yX)(e),
                i = (0, a.yg)(e),
                l = !0;
            if (Object.keys(t).length > 0) {
                let n = await (0, h._L)(t);
                if (((l = l && (n?.ok ?? !1)), n?.ok)) {
                    let i = n.body;
                    (void 0 !== e.pendingAvatar &&
                        (0, c.t)({
                            avatarHash: i.avatar,
                            avatarId: t.avatarId,
                            avatarAssetOrigin: e.pendingAvatar?.assetOrigin,
                        }),
                        (0, h.pZ)());
                } else n?.body?.username != null && (0, S.E)();
            }
            if (Object.keys(n).length > 0) {
                let { bannerOriginalMd5: e, ...t } = n,
                    i = await (0, o.gi)(t, void 0, e);
                ((l = l && (i?.ok ?? !1)), i?.ok ? (0, o.RE)() : g());
            }
            if (void 0 !== e.pendingLegacyUsernameDisabled)
                try {
                    (await p.m$.updateSetting(e.pendingLegacyUsernameDisabled), (0, h._e)());
                } catch {
                    (g(), (l = !1));
                }
            if (Object.keys(i).length > 0) {
                let { primaryGuildId: e } = i;
                if (void 0 !== e) {
                    let t = await (0, f.m)(e, null !== e);
                    ((l = l && (t?.ok ?? !1)), t?.ok ? (0, h.fw)() : g());
                }
            }
            (l && (0, h.x8)(), d(!1));
        }, []),
        T = l.useCallback(() => {
            (0, h.IM)();
        }, []);
    return (0, i.jsx)(r.A, { submitting: n, onSave: E, onReset: T, disabled: !e, errorMessage: A ?? void 0 });
}
var x = n(729934),
    I = n(355097);
function _() {
    return x.A.useField("subsection") === I.Eq.GUILD ? (0, i.jsx)(E, {}) : (0, i.jsx)(T, {});
}
