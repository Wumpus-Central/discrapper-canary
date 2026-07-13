i.d(t, { A: () => N });
var s = i(627968),
    n = i(64700),
    l = i(503698),
    r = i.n(l),
    a = i(580929),
    o = i(17928),
    d = i(866323),
    c = i(765178),
    u = i(834730),
    g = i(821609),
    m = i(631670),
    h = i(775602),
    f = i(159001),
    A = i(933725),
    p = i(625494),
    x = i(587600),
    I = i(207803),
    S = i(183555),
    j = i(289173),
    v = i(836602),
    E = i(958805),
    y = i(61881),
    C = i(591179),
    L = i(624826),
    T = i(384377),
    _ = i(518477),
    b = i(652215),
    k = i(375708),
    w = i(381280);
let R = "user-profile-save-reset-toolbar-label";
function N(e) {
    let { className: t, guildId: i } = e,
        { trackUserProfileEditSaved: l } = (0, S.NJ)(),
        N = (0, o.bG)([h.Ay], () => h.Ay.useReducedMotion),
        [M, O] = n.useState(!1),
        [U, P] = n.useState(!1),
        D = n.useRef(!1),
        F = n.useRef(null),
        {
            widgetsToSave: G,
            changedWidgets: W,
            removedWidgets: H,
            hasUnsavedWidgets: B,
            canSaveWidgets: V,
        } = (function () {
            let e = (0, o.yK)([y.A], () => y.A.getSaveablePendingWidgets() ?? []),
                t = (0, o.yK)([y.A], () => y.A.getChangedWidgets()),
                i = (0, o.yK)([y.A], () => y.A.getRemovedWidgets()),
                { hasUnsavedWidgets: s, canSaveWidgets: n } = (0, o.cf)([y.A], () => ({
                    hasUnsavedWidgets: y.A.hasUnsavedChanges(),
                    canSaveWidgets: y.A.canSaveChanges(),
                }));
            return { widgetsToSave: e, changedWidgets: t, removedWidgets: i, hasUnsavedWidgets: s, canSaveWidgets: n };
        })(),
        z = (0, C.X)("UserProfileModalV2SaveBar"),
        { hasUnsavedProfileChanges: Y, canSubmitProfileChanges: X } = (0, o.cf)([v.A], () => ({
            hasUnsavedProfileChanges: v.A.hasUnsavedChanges(),
            canSubmitProfileChanges: v.A.canSubmit(),
        })),
        K = z && Y,
        Z = B || K,
        q = !(B && !V) && (!z || X),
        Q = (0, d.p)(Z, {
            from: { opacity: 0, y: 80 * !N },
            enter: { opacity: 1, y: 0 },
            leave: { opacity: 0, y: 80 * !N },
            onRest: (e, t) => {
                t.item &&
                    e.finished &&
                    (null != F.current && clearTimeout(F.current),
                    (F.current = setTimeout(() => {
                        (F.current = null), D.current && c.O.announce(k.intl.string(k.t["0Y/qkL"]));
                    }, 300)));
            },
        }),
        $ = n.useCallback(() => {
            E.A.clearPendingWidgets(), z && (0, I.XQ)();
        }, [z]),
        J = n.useCallback(async () => {
            if (z && !v.A.canSubmit()) return;
            P(!0);
            let e = !0;
            if (K)
                try {
                    if (null == i) {
                        let t = v.A.getPendingChanges(),
                            i = (0, x.Sk)(t),
                            s = (0, x.yX)(t);
                        if (Object.keys(i).length > 0) {
                            let s = await (0, m._L)(i);
                            (e = s?.ok ?? !1),
                                s?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, L.t)({
                                            avatarHash: s.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, m.pZ)());
                        }
                        if (Object.keys(s).length > 0) {
                            let { bannerOriginalMd5: t, ...i } = s,
                                n = await (0, I.gi)(i, void 0, t);
                            (e = e && (n?.ok ?? !1)), n?.ok && (0, I.RE)();
                        }
                    } else {
                        let t = v.A.getPendingChanges(i),
                            s = (0, x.C5)(t),
                            n = (0, x.yX)(t, i);
                        if (Object.keys(s).length > 0) {
                            let n = await (0, f.GL)(i, s);
                            (e = n?.ok ?? !1),
                                n?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, L.t)({
                                            isGuildProfile: !0,
                                            avatarHash: n.body.avatar,
                                            avatarId: s.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, m.pZ)());
                        }
                        if (Object.keys(n).length > 0) {
                            let { bannerOriginalMd5: t, ...s } = n,
                                l = await (0, I.gi)(s, i, t);
                            (e = e && (l?.ok ?? !1)), l?.ok && (0, I.RE)();
                        }
                    }
                    let t = (0, x.yg)(v.A.getPendingChanges());
                    if (Object.keys(t).length > 0) {
                        let { primaryGuildId: i } = t;
                        if (void 0 !== i) {
                            let t = await (0, A.m)(i, null !== i);
                            (e = e && (t?.ok ?? !1)), t?.ok && (0, m.fw)();
                        }
                    }
                } catch {
                    e = !1;
                }
            if (B)
                try {
                    for (let e of (await E.A.savePendingWidgets(G), W)) {
                        let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                        (0, j.fu)(e) &&
                            ((t.gameIds = e.games.map((e) => e.applicationId)),
                            (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0))),
                            l(t);
                    }
                    for (let e of H) l({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            e ? (0, m.x8)() : (0, T.XA)(_.jM.PROFILE_SAVE_GENERIC_FAILURE), P(!1);
        }, [z, K, B, G, W, H, l, i]);
    return (
        n.useEffect(() => {
            D.current = Z;
        }, [Z]),
        n.useEffect(
            () => () => {
                null != F.current && clearTimeout(F.current);
            },
            [],
        ),
        n.useEffect(() => {
            let e = null;
            function t() {
                O(!0), (e = setTimeout(() => O(!1), 500));
            }
            return (
                p._.subscribe(b.jej.EMPHASIZE_NOTICE, t),
                () => {
                    p._.unsubscribe(b.jej.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e);
                }
            );
        }, []),
        Q((e, i) =>
            i
                ? (0, s.jsx)(a.animated.div, {
                      className: t,
                      style: e,
                      children: (0, s.jsxs)("footer", {
                          className: r()(w.Qs, { [w.hO]: M }),
                          "aria-labelledby": R,
                          children: [
                              (0, s.jsx)(u.E, {
                                  id: R,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  className: w.iU,
                                  children: k.intl.string(k.t["/lQiX/"]),
                              }),
                              (0, s.jsxs)("div", {
                                  className: w.o1,
                                  children: [
                                      (0, s.jsx)(g.$, {
                                          size: "sm",
                                          variant: "secondary",
                                          text: k.intl.string(k.t.yBZMsQ),
                                          onClick: $,
                                          disabled: !Z || U,
                                      }),
                                      (0, s.jsx)(g.$, {
                                          size: "sm",
                                          variant: "primary",
                                          text: k.intl.string(k.t["R3BPH+"]),
                                          onClick: J,
                                          loading: U,
                                          disabled: !q || !Z,
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
