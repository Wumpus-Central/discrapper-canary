i.d(t, { A: () => k });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(517738),
    d = i(311907),
    o = i(866323),
    c = i(765178),
    u = i(834730),
    g = i(821609),
    m = i(631670),
    h = i(775602),
    x = i(159001),
    p = i(933725),
    A = i(203982),
    j = i(587600),
    f = i(207803),
    I = i(183555),
    v = i(289173),
    S = i(836602),
    E = i(958805),
    y = i(61881),
    b = i(624826),
    w = i(606758),
    N = i(518477),
    T = i(652215),
    C = i(985018),
    R = i(381280);
let O = "user-profile-save-reset-toolbar-label";
function k(e) {
    let { className: t, guildId: i } = e,
        { trackUserProfileEditSaved: s } = (0, I.NJ)(),
        k = (0, d.bG)([h.A], () => h.A.useReducedMotion),
        [L, G] = l.useState(!1),
        [_, M] = l.useState(!1),
        {
            widgetsToSave: P,
            changedWidgets: U,
            removedWidgets: D,
            hasUnsavedWidgets: F,
            canSaveWidgets: W,
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
        B = (0, d.bG)([S.A], () => S.A.hasUnsavedChanges()),
        H = F || B,
        V = !(F && !W),
        z = (0, o.p)(H, {
            from: { opacity: 0, y: 80 * !k },
            enter: { opacity: 1, y: 0 },
            leave: { opacity: 0, y: 80 * !k },
        }),
        X = l.useCallback(() => {
            E.A.clearPendingWidgets(), (0, f.XQ)();
        }, []),
        Y = l.useCallback(async () => {
            M(!0);
            let e = !0;
            if (B)
                try {
                    if (null == i) {
                        let t = S.A.getPendingChanges(),
                            i = (0, j.Sk)(t),
                            n = (0, j.yX)(t),
                            l = (0, j.yg)(t);
                        if (Object.keys(i).length > 0) {
                            let n = await (0, m._L)(i);
                            (e = n?.ok ?? !1),
                                n?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, b.t)({
                                            avatarHash: n.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, m.pZ)());
                        }
                        if (Object.keys(n).length > 0) {
                            let t = await (0, f.gi)(n);
                            (e = e && (t?.ok ?? !1)), t?.ok && (0, f.RE)();
                        }
                        if (Object.keys(l).length > 0) {
                            let { primaryGuildId: t } = l;
                            if (void 0 !== t) {
                                let i = await (0, p.m)(t, null !== t);
                                (e = e && (i?.ok ?? !1)), i?.ok && (0, m.fw)();
                            }
                        }
                    } else {
                        let t = S.A.getPendingChanges(i),
                            n = (0, j.C5)(t),
                            l = (0, j.yX)(t, i);
                        if (Object.keys(n).length > 0) {
                            let l = await (0, x.GL)(i, n);
                            (e = l?.ok ?? !1),
                                l?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, b.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, m.pZ)());
                        }
                        if (Object.keys(l).length > 0) {
                            let t = await (0, f.gi)(l, i);
                            (e = e && (t?.ok ?? !1)), t?.ok && (0, f.RE)();
                        }
                    }
                } catch {
                    e = !1;
                }
            if (F)
                try {
                    for (let e of (await E.A.savePendingWidgets(P), U)) {
                        let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                        (0, v.fu)(e) &&
                            ((t.gameIds = e.games.map((e) => e.applicationId)),
                            (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0))),
                            s(t);
                    }
                    for (let e of D) s({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            e ? (0, m.x8)() : (0, w.XA)(N.jM.PROFILE_SAVE_GENERIC_FAILURE), M(!1);
        }, [B, F, P, U, D, s, i]);
    return (
        l.useEffect(() => {
            let e = null;
            function t() {
                G(!0), (e = setTimeout(() => G(!1), 500));
            }
            return (
                A._.subscribe(T.jej.EMPHASIZE_NOTICE, t),
                () => {
                    A._.unsubscribe(T.jej.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e);
                }
            );
        }, []),
        l.useEffect(() => {
            H && c.O.announce(C.intl.string(C.t["0Y/qkL"]));
        }, [H]),
        z((e, i) =>
            i
                ? (0, n.jsx)(r.animated.div, {
                      className: t,
                      style: e,
                      children: (0, n.jsxs)("footer", {
                          className: a()(R.Qs, { [R.hO]: L }),
                          "aria-labelledby": O,
                          children: [
                              (0, n.jsx)(u.E, {
                                  id: O,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  className: R.iU,
                                  children: C.intl.string(C.t["/lQiX/"]),
                              }),
                              (0, n.jsxs)("div", {
                                  className: R.o1,
                                  children: [
                                      (0, n.jsx)(g.$, {
                                          size: "sm",
                                          variant: "secondary",
                                          text: C.intl.string(C.t.yBZMsQ),
                                          onClick: X,
                                          disabled: !H || _,
                                      }),
                                      (0, n.jsx)(g.$, {
                                          size: "sm",
                                          variant: "primary",
                                          text: C.intl.string(C.t["R3BPH+"]),
                                          onClick: Y,
                                          loading: _,
                                          disabled: !V || !H,
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
