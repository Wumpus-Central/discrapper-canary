i.d(t, { A: () => L });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(873174),
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
    b = i(591179),
    T = i(624826),
    C = i(606758),
    N = i(518477),
    w = i(652215),
    R = i(375708),
    O = i(381280);
let k = "user-profile-save-reset-toolbar-label";
function L(e) {
    let { className: t, guildId: i } = e,
        { trackUserProfileEditSaved: s } = (0, I.NJ)(),
        L = (0, d.bG)([h.A], () => h.A.useReducedMotion),
        [G, _] = l.useState(!1),
        [P, M] = l.useState(!1),
        {
            widgetsToSave: D,
            changedWidgets: U,
            removedWidgets: F,
            hasUnsavedWidgets: W,
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
        B = (0, b.X)("UserProfileModalV2SaveBar"),
        V = (0, d.bG)([v.A], () => B && v.A.hasUnsavedChanges()),
        z = W || V,
        X = !(W && !H),
        Y = (0, o.p)(z, {
            from: { opacity: 0, y: 80 * !L },
            enter: { opacity: 1, y: 0 },
            leave: { opacity: 0, y: 80 * !L },
        }),
        q = l.useCallback(() => {
            E.A.clearPendingWidgets(), B && (0, f.XQ)();
        }, [B]),
        K = l.useCallback(async () => {
            M(!0);
            let e = !0;
            if (V)
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
                                        (0, T.t)({
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
                                        (0, T.t)({
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
            if (W)
                try {
                    for (let e of (await E.A.savePendingWidgets(D), U)) {
                        let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                        (0, S.fu)(e) &&
                            ((t.gameIds = e.games.map((e) => e.applicationId)),
                            (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0))),
                            s(t);
                    }
                    for (let e of F) s({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            e ? (0, m.x8)() : (0, C.XA)(N.jM.PROFILE_SAVE_GENERIC_FAILURE), M(!1);
        }, [V, W, D, U, F, s, i]);
    return (
        l.useEffect(() => {
            let e = null;
            function t() {
                _(!0), (e = setTimeout(() => _(!1), 500));
            }
            return (
                j._.subscribe(w.jej.EMPHASIZE_NOTICE, t),
                () => {
                    j._.unsubscribe(w.jej.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e);
                }
            );
        }, []),
        l.useEffect(() => {
            z && c.O.announce(R.intl.string(R.t["0Y/qkL"]));
        }, [z]),
        Y((e, i) =>
            i
                ? (0, n.jsx)(r.animated.div, {
                      className: t,
                      style: e,
                      children: (0, n.jsxs)("footer", {
                          className: a()(O.Qs, { [O.hO]: G }),
                          "aria-labelledby": k,
                          children: [
                              (0, n.jsx)(u.E, {
                                  id: k,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  className: O.iU,
                                  children: R.intl.string(R.t["/lQiX/"]),
                              }),
                              (0, n.jsxs)("div", {
                                  className: O.o1,
                                  children: [
                                      (0, n.jsx)(g.$, {
                                          size: "sm",
                                          variant: "secondary",
                                          text: R.intl.string(R.t.yBZMsQ),
                                          onClick: q,
                                          disabled: !z || P,
                                      }),
                                      (0, n.jsx)(g.$, {
                                          size: "sm",
                                          variant: "primary",
                                          text: R.intl.string(R.t["R3BPH+"]),
                                          onClick: K,
                                          loading: P,
                                          disabled: !X || !z,
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
