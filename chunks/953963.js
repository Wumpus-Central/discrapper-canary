i.d(t, { A: () => P });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    r = i.n(s),
    a = i(580929),
    o = i(17928),
    d = i(866323),
    c = i(765178),
    u = i(834730),
    g = i(821609),
    m = i(631670),
    h = i(775602),
    x = i(159001),
    p = i(933725),
    f = i(625494),
    j = i(56348),
    A = i(207803),
    I = i(183555),
    S = i(289173),
    v = i(836602),
    E = i(958805),
    y = i(61881),
    w = i(591179),
    b = i(624826),
    C = i(384377),
    T = i(518477),
    N = i(652215),
    R = i(375708),
    k = i(381280);
let O = "user-profile-save-reset-toolbar-label";
function P(e) {
    let { className: t, guildId: i } = e,
        { trackUserProfileEditSaved: s } = (0, I.NJ)(),
        P = (0, o.bG)([h.Ay], () => h.Ay.useReducedMotion),
        [L, _] = l.useState(!1),
        [G, M] = l.useState(!1),
        U = l.useRef(!1),
        D = l.useRef(null),
        {
            widgetsToSave: F,
            changedWidgets: W,
            removedWidgets: H,
            hasUnsavedWidgets: V,
            canSaveWidgets: B,
        } = (function () {
            let e = (0, o.yK)([y.A], () => y.A.getSaveablePendingWidgets() ?? []),
                t = (0, o.yK)([y.A], () => y.A.getChangedWidgets()),
                i = (0, o.yK)([y.A], () => y.A.getRemovedWidgets()),
                { hasUnsavedWidgets: n, canSaveWidgets: l } = (0, o.cf)([y.A], () => ({
                    hasUnsavedWidgets: y.A.hasUnsavedChanges(),
                    canSaveWidgets: y.A.canSaveChanges(),
                }));
            return { widgetsToSave: e, changedWidgets: t, removedWidgets: i, hasUnsavedWidgets: n, canSaveWidgets: l };
        })(),
        Y = (0, w.X)("UserProfileModalV2SaveBar"),
        { hasUnsavedProfileChanges: z, canSubmitProfileChanges: X } = (0, o.cf)([v.A], () => ({
            hasUnsavedProfileChanges: v.A.hasUnsavedChanges(),
            canSubmitProfileChanges: v.A.canSubmit(),
        })),
        q = Y && z,
        Q = V || q,
        K = !(V && !B) && (!Y || X),
        $ = (0, d.p)(Q, {
            from: { opacity: 0, y: 80 * !P },
            enter: { opacity: 1, y: 0 },
            leave: { opacity: 0, y: 80 * !P },
            onRest: (e, t) => {
                t.item &&
                    e.finished &&
                    (null != D.current && clearTimeout(D.current),
                    (D.current = setTimeout(() => {
                        (D.current = null), U.current && c.O.announce(R.intl.string(R.t["0Y/qkL"]));
                    }, 300)));
            },
        }),
        J = l.useCallback(() => {
            E.A.clearPendingWidgets(), Y && (0, A.XQ)();
        }, [Y]),
        Z = l.useCallback(async () => {
            if (Y && !v.A.canSubmit()) return;
            M(!0);
            let e = !0;
            if (q)
                try {
                    if (null == i) {
                        let t = v.A.getPendingChanges(),
                            i = (0, j.Sk)(t),
                            n = (0, j.yX)(t);
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
                                l = await (0, A.gi)(i, void 0, t);
                            (e = e && (l?.ok ?? !1)), l?.ok && (0, A.RE)();
                        }
                    } else {
                        let t = v.A.getPendingChanges(i),
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
                            let { bannerOriginalMd5: t, ...n } = l,
                                s = await (0, A.gi)(n, i, t);
                            (e = e && (s?.ok ?? !1)), s?.ok && (0, A.RE)();
                        }
                    }
                    let t = (0, j.yg)(v.A.getPendingChanges());
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
            if (V)
                try {
                    for (let e of (await E.A.savePendingWidgets(F), W)) {
                        let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                        (0, S.fu)(e) &&
                            ((t.gameIds = e.games.map((e) => e.applicationId)),
                            (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0))),
                            s(t);
                    }
                    for (let e of H) s({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            e ? (0, m.x8)() : (0, C.XA)(T.jM.PROFILE_SAVE_GENERIC_FAILURE), M(!1);
        }, [Y, q, V, F, W, H, s, i]);
    return (
        l.useEffect(() => {
            U.current = Q;
        }, [Q]),
        l.useEffect(
            () => () => {
                null != D.current && clearTimeout(D.current);
            },
            [],
        ),
        l.useEffect(() => {
            let e = null;
            function t() {
                _(!0), (e = setTimeout(() => _(!1), 500));
            }
            return (
                f._.subscribe(N.jej.EMPHASIZE_NOTICE, t),
                () => {
                    f._.unsubscribe(N.jej.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e);
                }
            );
        }, []),
        $((e, i) =>
            i
                ? (0, n.jsx)(a.animated.div, {
                      className: t,
                      style: e,
                      children: (0, n.jsxs)("footer", {
                          className: r()(k.Qs, { [k.hO]: L }),
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
                                          onClick: J,
                                          disabled: !Q || G,
                                      }),
                                      (0, n.jsx)(g.$, {
                                          size: "sm",
                                          variant: "primary",
                                          text: R.intl.string(R.t["R3BPH+"]),
                                          onClick: Z,
                                          loading: G,
                                          disabled: !K || !Q,
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
