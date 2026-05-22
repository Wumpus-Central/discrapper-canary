t.d(n, { default: () => N });
var e = t(627968);
t(64700);
var l = t(980707),
    r = t(477782),
    a = t(442433),
    o = t(253799),
    c = t(663341),
    s = t(607814),
    d = t(375708),
    u = t(691540),
    f = t(857250),
    p = t(97483),
    y = t(624479),
    g = t(77729),
    h = t(16590),
    A = t(241326),
    b = t(645655),
    x = t(549685),
    E = t(32880),
    _ = t(983069),
    D = t(741394),
    C = t(372684),
    j = t(439818),
    O = t(696016),
    m = t(264572).Buffer,
    w = t(17928),
    R = t(7807),
    T = t(931991),
    Z = t(71393),
    H = t(576705),
    v = t(711014),
    S = t(287809),
    I = t(105009),
    F = t(505930),
    k = t(807072),
    B = t(405433),
    P = t(688810),
    X = t(274372),
    G = t(74847),
    L = t(602902);
function N(i) {
    let {
            clips: n,
            channelId: t,
            onShare: N,
            onEdit: W,
            onBeforeDelete: K,
            onAfterDelete: V,
            actionsDisabled: M = !1,
            displayConfiguration: U = o.I,
        } = i,
        Y = (function (i) {
            let { clips: n, actionsDisabled: t = !1 } = i;
            return n.some((i) => !0 === i.isTemporary)
                ? (0, e.jsx)(r.Dr, {
                      id: "add-to-library",
                      label: d.intl.string(d.t["BfLmm+"]),
                      leadingAccessory: { type: "icon", icon: c.p },
                      disabled: t,
                      action: function () {
                          (0, a.Z_)(), n.forEach((i) => (0, s.w7)(i.id));
                      },
                  })
                : null;
        })({ clips: n, actionsDisabled: M }),
        Q = (function (i) {
            let { clips: n, channelId: t, onShare: l, actionsDisabled: o = !1 } = i,
                { analyticsLocations: c } = (0, P.Ay)(),
                u = (0, w.bG)([X.A], () => n.some((i) => X.A.isClipExporting(i.id)));
            async function f() {
                (0, a.Z_)();
                let i = (0, G.t)(t);
                (0, s.H1)(n.map((i) => i.id));
                try {
                    await (0, L.K)(n, { channelId: i ? t : void 0, analyticsLocations: c });
                } catch (i) {
                } finally {
                    (0, s.H1)(null);
                }
                l?.();
            }
            return (0, e.jsx)(r.Dr, {
                id: "share",
                label: d.intl.string(d.t.RDE0Sc),
                leadingAccessory: { type: "icon", icon: B.l },
                disabled: o && !u,
                action: f,
            });
        })({ clips: n, channelId: t, onShare: N, actionsDisabled: M }),
        q = (function (i) {
            let { clips: n, onEdit: t, actionsDisabled: l = !1 } = i;
            return n.length > 1
                ? null
                : (0, e.jsx)(r.Dr, {
                      id: "edit",
                      label: d.intl.string(d.t.bt75uw),
                      leadingAccessory: { type: "icon", icon: x.A },
                      disabled: l,
                      action: function () {
                          (0, a.Z_)(), t?.();
                      },
                  });
        })({ clips: n, onEdit: W, actionsDisabled: M }),
        J = (function (i) {
            let { clips: n, actionsDisabled: t = !1 } = i;
            return !0 === n[0].isFavorite
                ? null
                : (0, e.jsx)(r.Dr, {
                      id: "favorite",
                      label: d.intl.string(d.t.nPywqO),
                      leadingAccessory: { type: "icon", icon: F.y },
                      disabled: t,
                      action: function () {
                          (0, a.Z_)(), n.forEach((i) => (0, s.XK)(i));
                      },
                  });
        })({ clips: n, actionsDisabled: M }),
        z = (function (i) {
            let { clips: n, channelId: t } = i,
                l = (0, w.bG)([v.Ay, H.A, S.default, Z.A], () =>
                    v.Ay.getFlattenedGuildIds().some((i) => {
                        let n = Z.A.getGuild(i);
                        return null != n && (0, T.ie)(n, H.A, S.default).canCreateExpressions;
                    }),
                ),
                o = n[0];
            if (n.length > 1 || !l || o.type === C.nQ.SCREENSHOT) return null;
            async function c() {
                (0, a.Z_)(), await (0, I.n)(o, t);
            }
            return (0, e.jsx)(r.Dr, {
                id: "clips-export-soundboard",
                label: d.intl.string(h.default.HH4Tjj),
                leadingAccessory: { type: "icon", icon: R.J },
                action: c,
            });
        })({ clips: n, channelId: t }),
        $ = (function (i) {
            let { clips: n } = i,
                t = n[0];
            return n.length > 1 || null == g.A.clipboard.copyFile
                ? null
                : (0, e.jsx)(r.Dr, {
                      id: "clips-copy-video",
                      label: d.intl.string(h.default.tv7emB),
                      leadingAccessory: { type: "icon", icon: y.T },
                      action: function () {
                          (0, a.Z_)(),
                              g.A.clipboard.copyFile(t.filepath),
                              (0, u.P0)((0, f.o)(d.intl.string(d.t.mGZ66D), p.Ck.SUCCESS));
                      },
                  });
        })({ clips: n }),
        ii = (function (i) {
            let { clips: n } = i,
                t = n[0];
            if (n.length > 1) return null;
            let l = t.type === C.nQ.SCREENSHOT;
            async function o() {
                (0, a.Z_)(), (0, s.H1)([t.id]);
                try {
                    let i = await (0, s.VO)(t),
                        n = await i.arrayBuffer(),
                        e = (0, j.A)((0, D.uk)(t.filepath));
                    await g.A.fileManager.saveWithDialog(m.from(n), e);
                } catch (i) {
                    O.nx.error("Error exporting clip to file", i);
                } finally {
                    (0, s.H1)(null);
                }
            }
            async function c() {
                (0, a.Z_)(), (0, s.H1)([t.id]);
                try {
                    let i = await (0, s.VO)(t),
                        n = await (0, _.R_)(i),
                        e = await n.arrayBuffer(),
                        l = (0, j.A)((0, D.kh)(t.filepath)) + ".ogg";
                    await g.A.fileManager.saveWithDialog(m.from(e), l);
                } catch (i) {
                    O.nx.error("Error exporting clip to sound file", i);
                } finally {
                    (0, s.H1)(null);
                }
            }
            return (0, e.jsxs)(r.Dr, {
                id: "clips-export-group",
                label: d.intl.string(d.t["WH/V85"]),
                leadingAccessory: { type: "icon", icon: E.s },
                children: [
                    (0, e.jsx)(r.Dr, {
                        id: "clips-export-file",
                        label: l ? d.intl.string(d.t.y5FgMk) : d.intl.string(d.t.sFgmNy),
                        leadingAccessory: { type: "icon", icon: E.s },
                        action: o,
                    }),
                    !l &&
                        (0, e.jsx)(r.Dr, {
                            id: "clips-export-sound-file",
                            label: d.intl.string(d.t.db0NKG),
                            leadingAccessory: { type: "icon", icon: E.s },
                            action: c,
                        }),
                ],
            });
        })({ clips: n }),
        it = (function (i) {
            let { clips: n, actionsDisabled: t = !1 } = i;
            return !0 !== n[0].isFavorite
                ? null
                : (0, e.jsx)(r.Dr, {
                      id: "unfavorite",
                      label: d.intl.string(h.default.IZsalP),
                      leadingAccessory: { type: "icon", icon: k.U },
                      color: "danger",
                      disabled: t,
                      action: function () {
                          (0, a.Z_)(), n.forEach((i) => (0, s.XK)(i));
                      },
                  });
        })({ clips: n, actionsDisabled: M }),
        ie = (function (i) {
            let { clips: n, onBeforeDelete: t, onAfterDelete: l, actionsDisabled: o = !1 } = i;
            return (0, e.jsx)(r.Dr, {
                id: "clips-delete",
                label: d.intl.string(d.t.oyYWHE),
                leadingAccessory: { type: "icon", icon: A.u },
                color: "danger",
                disabled: o,
                action: function (i) {
                    (0, a.Z_)(), (0, b.A)(i, { clips: n, onBeforeDelete: t, onAfterDelete: l });
                },
            });
        })({ clips: n, onBeforeDelete: K, onAfterDelete: V, actionsDisabled: M }),
        il = U.has(o.C.ADD_TO_LIBRARY),
        ir = U.has(o.C.SHARE),
        ia = U.has(o.C.EDIT),
        io = U.has(o.C.FAVORITE),
        ic = U.has(o.C.EXPORT_TO_SOUNDBOARD),
        is = U.has(o.C.COPY_TO_CLIPBOARD),
        id = U.has(o.C.EXPORT_TO_FILE),
        iu = U.has(o.C.DELETE);
    return (0, e.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "clips-more-options",
        "aria-label": d.intl.string(d.t.PdRCRg),
        onClose: a.Z_,
        onSelect: a.Z_,
        children: [
            (0, e.jsxs)(r.rX, { children: [il && Y, ir && Q, ia && q] }),
            (0, e.jsxs)(r.rX, { children: [io && J, ic && z, is && $, id && ii] }),
            (0, e.jsxs)(r.rX, { children: [io && it, iu && ie] }),
        ],
    });
}
