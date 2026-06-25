i.d(t, { A: () => L });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(308186),
    d = i(17928),
    o = i(866323),
    c = i(765178),
    u = i(834730),
    g = i(821609),
    m = i(631670),
    h = i(775602),
    x = i(159001),
    p = i(933725),
    j = i(625494),
    f = i(56348),
    A = i(207803),
    I = i(183555),
    S = i(289173),
    v = i(836602),
    E = i(958805),
    y = i(61881),
    b = i(591179),
    w = i(624826),
    C = i(606758),
    T = i(518477),
    N = i(652215),
    R = i(375708),
    k = i(82784);
let O = "user-profile-save-reset-toolbar-label";
function L(e) {
    let { className: t, guildId: i } = e,
        { trackUserProfileEditSaved: s } = (0, I.NJ)(),
        L = (0, d.bG)([h.Ay], () => h.Ay.useReducedMotion),
        [P, G] = l.useState(!1),
        [M, _] = l.useState(!1),
        {
            widgetsToSave: U,
            changedWidgets: D,
            removedWidgets: W,
            hasUnsavedWidgets: F,
            canSaveWidgets: H,
        } = (function () {
            let e = (0, d.yK)([y.A], () => y.A.getSaveablePendingWidgets() ?? []),
                t = (0, d.yK)([y.A], () => y.A.getChangedWidgets()),
                i = (0, d.yK)([y.A], () => y.A.getRemovedWidgets()),
                { hasUnsavedWidgets: n, canSaveWidgets: l } = (0, d.cf)([y.A], () => ({
                    hasUnsavedWidgets: y.A.hasUnsavedChanges(),
                    canSaveWidgets: y.A.canSaveChanges(),
                }));
            return { widgetsToSave: e, changedWidgets: t, removedWidgets: i, hasUnsavedWidgets: n, canSaveWidgets: l };
        })(),
        V = (0, b.X)("UserProfileModalV2SaveBar"),
        { hasUnsavedProfileChanges: B, canSubmitProfileChanges: Y } = (0, d.cf)([v.A], () => ({
            hasUnsavedProfileChanges: v.A.hasUnsavedChanges(),
            canSubmitProfileChanges: v.A.canSubmit(),
        })),
        z = V && B,
        X = F || z,
        q = !(F && !H) && (!V || Y),
        Q = (0, o.p)(X, {
            from: { opacity: 0, y: 80 * !L },
            enter: { opacity: 1, y: 0 },
            leave: { opacity: 0, y: 80 * !L },
        }),
        K = l.useCallback(() => {
            E.A.clearPendingWidgets(), V && (0, A.XQ)();
        }, [V]),
        $ = l.useCallback(async () => {
            if (V && !v.A.canSubmit()) return;
            _(!0);
            let e = !0;
            if (z)
                try {
                    if (null == i) {
                        let t = v.A.getPendingChanges(),
                            i = (0, f.Sk)(t),
                            n = (0, f.yX)(t);
                        if (Object.keys(i).length > 0) {
                            let n = await (0, m._L)(i);
                            (e = n?.ok ?? !1),
                                n?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, w.t)({
                                            avatarHash: n.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, m.pZ)());
                        }
                        if (Object.keys(n).length > 0) {
                            let { bannerOriginalMd5: t, ...i } = n,
                                l = await (0, A.gi)(i, void 0, t);
                            (e = e && (l?.ok ?? !1)), l?.ok && (0, A.RE)();
                        }
                    } else {
                        let t = v.A.getPendingChanges(i),
                            n = (0, f.C5)(t),
                            l = (0, f.yX)(t, i);
                        if (Object.keys(n).length > 0) {
                            let l = await (0, x.GL)(i, n);
                            (e = l?.ok ?? !1),
                                l?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, w.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, m.pZ)());
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: t, ...n } = l,
                                s = await (0, A.gi)(n, i, t);
                            (e = e && (s?.ok ?? !1)), s?.ok && (0, A.RE)();
                        }
                    }
                    let t = (0, f.yg)(v.A.getPendingChanges());
                    if (Object.keys(t).length > 0) {
                        let { primaryGuildId: i } = t;
                        if (void 0 !== i) {
                            let t = await (0, p.m)(i, null !== i);
                            (e = e && (t?.ok ?? !1)), t?.ok && (0, m.fw)();
                        }
                    }
                } catch {
                    e = !1;
                }
            if (F)
                try {
                    for (let e of (await E.A.savePendingWidgets(U), D)) {
                        let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                        (0, S.fu)(e) &&
                            ((t.gameIds = e.games.map((e) => e.applicationId)),
                            (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0))),
                            s(t);
                    }
                    for (let e of W) s({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            e ? (0, m.x8)() : (0, C.XA)(T.jM.PROFILE_SAVE_GENERIC_FAILURE), _(!1);
        }, [V, z, F, U, D, W, s, i]);
    return (
        l.useEffect(() => {
            let e = null;
            function t() {
                G(!0), (e = setTimeout(() => G(!1), 500));
            }
            return (
                j._.subscribe(N.jej.EMPHASIZE_NOTICE, t),
                () => {
                    j._.unsubscribe(N.jej.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e);
                }
            );
        }, []),
        l.useEffect(() => {
            X && c.O.announce(R.intl.string(R.t["0Y/qkL"]));
        }, [X]),
        Q((e, i) =>
            i
                ? (0, n.jsx)(r.animated.div, {
                      className: t,
                      style: e,
                      children: (0, n.jsxs)("footer", {
                          className: a()(k.Qs, { [k.hO]: P }),
                          "aria-labelledby": O,
                          children: [
                              (0, n.jsx)(u.E, {
                                  id: O,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  className: k.iU,
                                  children: R.intl.string(R.t["/lQiX/"]),
                              }),
                              (0, n.jsxs)("div", {
                                  className: k.o1,
                                  children: [
                                      (0, n.jsx)(g.$, {
                                          size: "sm",
                                          variant: "secondary",
                                          text: R.intl.string(R.t.yBZMsQ),
                                          onClick: K,
                                          disabled: !X || M,
                                      }),
                                      (0, n.jsx)(g.$, {
                                          size: "sm",
                                          variant: "primary",
                                          text: R.intl.string(R.t["R3BPH+"]),
                                          onClick: $,
                                          loading: M,
                                          disabled: !q || !X,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  })
                : null,
        )
    );
}
