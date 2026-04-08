n.d(t, { A: () => y });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(687498),
    o = n(311907),
    d = n(397927),
    c = n(631670),
    u = n(775602),
    g = n(159001),
    m = n(933725),
    x = n(203982),
    f = n(587600),
    p = n(207803),
    h = n(183555),
    _ = n(289173),
    A = n(836602),
    I = n(958805),
    j = n(61881),
    v = n(624826),
    E = n(606758),
    T = n(518477),
    b = n(652215),
    C = n(985018),
    S = n(983152);
let N = "user-profile-save-reset-toolbar-label";
function y(e) {
    let { className: t, guildId: n } = e,
        { trackUserProfileEditSaved: l } = (0, h.NJ)(),
        y = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        [R, k] = a.useState(!1),
        [O, w] = a.useState(!1),
        {
            widgetsToSave: L,
            changedWidgets: P,
            removedWidgets: D,
            hasUnsavedWidgets: G,
            canSaveWidgets: M,
        } = (function () {
            let e = (0, o.yK)([j.A], () => j.A.getSaveablePendingWidgets() ?? []),
                t = (0, o.yK)([j.A], () => j.A.getChangedWidgets()),
                n = (0, o.yK)([j.A], () => j.A.getRemovedWidgets()),
                { hasUnsavedWidgets: i, canSaveWidgets: a } = (0, o.cf)([j.A], () => ({
                    hasUnsavedWidgets: j.A.hasUnsavedChanges(),
                    canSaveWidgets: j.A.canSaveChanges(),
                }));
            return { widgetsToSave: e, changedWidgets: t, removedWidgets: n, hasUnsavedWidgets: i, canSaveWidgets: a };
        })(),
        U = (0, o.bG)([A.A], () => A.A.hasUnsavedChanges()),
        F = G || U,
        W = !(G && !M),
        H = (0, d.pnh)(F, {
            from: { opacity: 0, y: 80 * !y },
            enter: { opacity: 1, y: 0 },
            leave: { opacity: 0, y: 80 * !y },
        }),
        B = a.useCallback(() => {
            I.A.clearPendingWidgets(), (0, p.XQ)();
        }, []),
        X = a.useCallback(async () => {
            w(!0);
            let e = !0;
            if (U)
                try {
                    if (null == n) {
                        let t = A.A.getPendingChanges(),
                            n = (0, f.Sk)(t),
                            i = (0, f.yX)(t),
                            a = (0, f.yg)(t);
                        if (Object.keys(n).length > 0) {
                            let i = await (0, c._L)(n);
                            (e = i?.ok ?? !1),
                                i?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, v.t)({
                                            avatarHash: i.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, c.pZ)());
                        }
                        if (Object.keys(i).length > 0) {
                            let t = await (0, p.gi)(i);
                            (e = e && (t?.ok ?? !1)), t?.ok && (0, p.RE)();
                        }
                        if (Object.keys(a).length > 0) {
                            let { primaryGuildId: t } = a;
                            if (void 0 !== t) {
                                let n = await (0, m.m)(t, null !== t);
                                (e = e && (n?.ok ?? !1)), n?.ok && (0, c.fw)();
                            }
                        }
                    } else {
                        let t = A.A.getPendingChanges(n),
                            i = (0, f.C5)(t),
                            a = (0, f.yX)(t, n);
                        if (Object.keys(i).length > 0) {
                            let a = await (0, g.GL)(n, i);
                            (e = a?.ok ?? !1),
                                a?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, v.t)({
                                            isGuildProfile: !0,
                                            avatarHash: a.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, c.pZ)());
                        }
                        if (Object.keys(a).length > 0) {
                            let t = await (0, p.gi)(a, n);
                            (e = e && (t?.ok ?? !1)), t?.ok && (0, p.RE)();
                        }
                    }
                } catch {
                    e = !1;
                }
            if (G)
                try {
                    for (let e of (await I.A.savePendingWidgets(L), P)) {
                        let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                        (0, _.fu)(e) &&
                            ((t.gameIds = e.games.map((e) => e.applicationId)),
                            (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0))),
                            l(t);
                    }
                    for (let e of D) l({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            e ? (0, c.x8)() : (0, E.XA)(T.jM.PROFILE_SAVE_GENERIC_FAILURE), w(!1);
        }, [U, G, L, P, D, l, n]);
    return (
        a.useEffect(() => {
            let e = null;
            function t() {
                k(!0), (e = setTimeout(() => k(!1), 500));
            }
            return (
                x._.subscribe(b.jej.EMPHASIZE_NOTICE, t),
                () => {
                    x._.unsubscribe(b.jej.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e);
                }
            );
        }, []),
        a.useEffect(() => {
            F && d.ORC.announce(C.intl.string(C.t["0Y/qkL"]));
        }, [F]),
        H((e, n) =>
            n
                ? (0, i.jsx)(r.animated.div, {
                      className: t,
                      style: e,
                      children: (0, i.jsxs)("footer", {
                          className: s()(S.Qs, { [S.hO]: R }),
                          "aria-labelledby": N,
                          children: [
                              (0, i.jsx)(d.Text, {
                                  id: N,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  className: S.iU,
                                  children: C.intl.string(C.t["/lQiX/"]),
                              }),
                              (0, i.jsxs)("div", {
                                  className: S.o1,
                                  children: [
                                      (0, i.jsx)(d.Button, {
                                          size: "sm",
                                          variant: "secondary",
                                          text: C.intl.string(C.t.yBZMsQ),
                                          onClick: B,
                                          disabled: !F || O,
                                      }),
                                      (0, i.jsx)(d.Button, {
                                          size: "sm",
                                          variant: "primary",
                                          text: C.intl.string(C.t["R3BPH+"]),
                                          onClick: X,
                                          loading: O,
                                          disabled: !W || !F,
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
