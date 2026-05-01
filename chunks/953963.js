i.d(t, { A: () => k });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(785651),
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
    A = i(56348),
    f = i(207803),
    I = i(183555),
    S = i(289173),
    v = i(836602),
    E = i(958805),
    y = i(61881),
    b = i(624826),
    T = i(606758),
    C = i(518477),
    N = i(652215),
    w = i(375708),
    R = i(381280);
let O = "user-profile-save-reset-toolbar-label";
function k(e) {
    let { className: t, guildId: i } = e,
        { trackUserProfileEditSaved: s } = (0, I.NJ)(),
        k = (0, d.bG)([h.A], () => h.A.useReducedMotion),
        [L, G] = l.useState(!1),
        [_, P] = l.useState(!1),
        {
            widgetsToSave: M,
            changedWidgets: D,
            removedWidgets: U,
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
        H = (0, d.bG)([v.A], () => v.A.hasUnsavedChanges()),
        B = F || H,
        V = !(F && !W),
        z = (0, o.p)(B, {
            from: { opacity: 0, y: 80 * !k },
            enter: { opacity: 1, y: 0 },
            leave: { opacity: 0, y: 80 * !k },
        }),
        Y = l.useCallback(() => {
            E.A.clearPendingWidgets(), (0, f.XQ)();
        }, []),
        X = l.useCallback(async () => {
            P(!0);
            let e = !0;
            if (H)
                try {
                    if (null == i) {
                        let t = v.A.getPendingChanges(),
                            i = (0, A.Sk)(t),
                            n = (0, A.yX)(t),
                            l = (0, A.yg)(t);
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
                            let { bannerOriginalMd5: t, ...i } = n,
                                l = await (0, f.gi)(i, void 0, t);
                            (e = e && (l?.ok ?? !1)), l?.ok && (0, f.RE)();
                        }
                        if (Object.keys(l).length > 0) {
                            let { primaryGuildId: t } = l;
                            if (void 0 !== t) {
                                let i = await (0, p.m)(t, null !== t);
                                (e = e && (i?.ok ?? !1)), i?.ok && (0, m.fw)();
                            }
                        }
                    } else {
                        let t = v.A.getPendingChanges(i),
                            n = (0, A.C5)(t),
                            l = (0, A.yX)(t, i);
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
                            let { bannerOriginalMd5: t, ...n } = l,
                                s = await (0, f.gi)(n, i, t);
                            (e = e && (s?.ok ?? !1)), s?.ok && (0, f.RE)();
                        }
                    }
                } catch {
                    e = !1;
                }
            if (F)
                try {
                    for (let e of (await E.A.savePendingWidgets(M), D)) {
                        let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                        (0, S.fu)(e) &&
                            ((t.gameIds = e.games.map((e) => e.applicationId)),
                            (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0))),
                            s(t);
                    }
                    for (let e of U) s({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            e ? (0, m.x8)() : (0, T.XA)(C.jM.PROFILE_SAVE_GENERIC_FAILURE), P(!1);
        }, [H, F, M, D, U, s, i]);
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
            B && c.O.announce(w.intl.string(w.t["0Y/qkL"]));
        }, [B]),
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
                                  children: w.intl.string(w.t["/lQiX/"]),
                              }),
                              (0, n.jsxs)("div", {
                                  className: R.o1,
                                  children: [
                                      (0, n.jsx)(g.$, {
                                          size: "sm",
                                          variant: "secondary",
                                          text: w.intl.string(w.t.yBZMsQ),
                                          onClick: Y,
                                          disabled: !B || _,
                                      }),
                                      (0, n.jsx)(g.$, {
                                          size: "sm",
                                          variant: "primary",
                                          text: w.intl.string(w.t["R3BPH+"]),
                                          onClick: X,
                                          loading: _,
                                          disabled: !V || !B,
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
