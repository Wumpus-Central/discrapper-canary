e.d(i, { default: () => U });
var t = e(627968);
e(64700);
var l = e(980707),
    r = e(477782),
    o = e(442433),
    a = e(253799),
    c = e(663341),
    s = e(315240),
    d = e(375708),
    u = e(17928),
    p = e(192308),
    f = e(138134),
    y = e(540999),
    g = e(691540),
    A = e(857250),
    h = e(97483),
    b = e(624479),
    _ = e(77729),
    x = e(16590),
    D = e(241326),
    C = e(645655),
    E = e(549685),
    j = e(32880),
    O = e(983069),
    m = e(372684),
    w = e(589553),
    I = e(696016),
    Z = e(264572).Buffer,
    R = e(7807),
    v = e(931991),
    S = e(71393),
    T = e(576705),
    F = e(711014),
    H = e(287809),
    P = e(105009),
    B = e(505930),
    G = e(807072),
    N = e(346411),
    k = e(781710),
    L = e(405433),
    X = e(688810),
    M = e(274372),
    W = e(74847),
    K = e(602902),
    V = e(678708);
function U(n) {
    let {
            clips: i,
            channelId: U,
            onShare: Y,
            onEdit: Q,
            onBeforeDelete: q,
            onAfterDelete: z,
            actionsDisabled: J = !1,
            displayConfiguration: $ = a.I,
        } = n,
        nn = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return i.some((n) => !0 === n.isTemporary)
                ? (0, t.jsx)(r.Dr, {
                      id: "add-to-library",
                      label: d.intl.string(d.t["BfLmm+"]),
                      leadingAccessory: { type: "icon", icon: c.p },
                      disabled: e,
                      action: function () {
                          (0, o.Z_)(), i.forEach((n) => (0, s.w7)(n.id));
                      },
                  })
                : null;
        })({ clips: i, actionsDisabled: J }),
        ni = (function (n) {
            let { clips: i, channelId: e, onShare: l, actionsDisabled: a = !1 } = n,
                { analyticsLocations: c } = (0, X.Ay)(),
                p = (0, u.bG)([M.Ay], () => i.some((n) => M.Ay.isClipExporting(n.id)));
            async function f() {
                (0, o.Z_)();
                let n = (0, W.t)(e);
                (0, s.H1)(i.map((n) => n.id));
                try {
                    await (0, K.K)(i, { channelId: n ? e : void 0, analyticsLocations: c });
                } catch (n) {
                } finally {
                    (0, s.H1)(null);
                }
                l?.();
            }
            return (0, t.jsx)(r.Dr, {
                id: "share",
                label: d.intl.string(d.t.RDE0Sc),
                leadingAccessory: { type: "icon", icon: L.l },
                disabled: a && !p,
                action: f,
            });
        })({ clips: i, channelId: U, onShare: Y, actionsDisabled: J }),
        ne = (function (n) {
            let { clips: i, onEdit: e, actionsDisabled: l = !1 } = n;
            return i.length > 1
                ? null
                : (0, t.jsx)(r.Dr, {
                      id: "edit",
                      label: d.intl.string(d.t.bt75uw),
                      leadingAccessory: { type: "icon", icon: E.A },
                      disabled: l,
                      action: function () {
                          (0, o.Z_)(), e?.();
                      },
                  });
        })({ clips: i, onEdit: Q, actionsDisabled: J }),
        nt = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return !0 === i[0].isFavorite
                ? null
                : (0, t.jsx)(r.Dr, {
                      id: "favorite",
                      label: d.intl.string(d.t.nPywqO),
                      leadingAccessory: { type: "icon", icon: B.y },
                      disabled: e,
                      action: function () {
                          (0, o.Z_)(), i.forEach((n) => (0, s.XK)(n));
                      },
                  });
        })({ clips: i, actionsDisabled: J }),
        nl = (function (n) {
            let { clips: i, channelId: e } = n,
                l = (0, u.bG)([F.Ay, T.A, H.default, S.A], () =>
                    F.Ay.getFlattenedGuildIds().some((n) => {
                        let i = S.A.getGuild(n);
                        return null != i && (0, v.ie)(i, T.A, H.default).canCreateExpressions;
                    }),
                ),
                a = i[0];
            if (i.length > 1 || !l || a.type === m.nQ.SCREENSHOT) return null;
            async function c() {
                (0, o.Z_)(), await (0, P.n)(a, e);
            }
            return (0, t.jsx)(r.Dr, {
                id: "clips-export-soundboard",
                label: d.intl.string(x.default.HH4Tjj),
                leadingAccessory: { type: "icon", icon: R.J },
                action: c,
            });
        })({ clips: i, channelId: U }),
        nr = (function (n) {
            let { clips: i } = n,
                e = i[0];
            return i.length > 1 || null == _.A.clipboard.copyFile
                ? null
                : (0, t.jsx)(r.Dr, {
                      id: "clips-copy-video",
                      label: d.intl.string(x.default.tv7emB),
                      leadingAccessory: { type: "icon", icon: b.T },
                      action: function () {
                          (0, o.Z_)(),
                              _.A.clipboard.copyFile(e.filepath),
                              (0, g.P0)((0, A.o)(d.intl.string(d.t.mGZ66D), h.Ck.SUCCESS));
                      },
                  });
        })({ clips: i }),
        no = (function (n) {
            let { clips: i } = n,
                e = i[0];
            if (i.length > 1) return null;
            let l = e.type === m.nQ.SCREENSHOT;
            async function a() {
                (0, o.Z_)(), (0, s.H1)([e.id]);
                try {
                    let n = await (0, s.VO)(e),
                        i = await n.arrayBuffer(),
                        t = (0, w.A)(e, l ? "jpeg" : "mp4");
                    await _.A.fileManager.saveWithDialog(Z.from(i), t);
                } catch (n) {
                    I.nx.error("Error exporting clip to file", n);
                } finally {
                    (0, s.H1)(null);
                }
            }
            async function c() {
                (0, o.Z_)(), (0, s.H1)([e.id]);
                try {
                    let n = await (0, s.VO)(e),
                        i = await (0, O.R_)(n),
                        t = await i.arrayBuffer(),
                        l = (0, w.A)(e, "ogg");
                    await _.A.fileManager.saveWithDialog(Z.from(t), l);
                } catch (n) {
                    I.nx.error("Error exporting clip to sound file", n);
                } finally {
                    (0, s.H1)(null);
                }
            }
            return (0, t.jsxs)(r.Dr, {
                id: "clips-export-group",
                label: d.intl.string(d.t["WH/V85"]),
                leadingAccessory: { type: "icon", icon: j.s },
                children: [
                    (0, t.jsx)(r.Dr, {
                        id: "clips-export-file",
                        label: l ? d.intl.string(d.t.y5FgMk) : d.intl.string(d.t.sFgmNy),
                        leadingAccessory: { type: "icon", icon: j.s },
                        action: a,
                    }),
                    !l &&
                        (0, t.jsx)(r.Dr, {
                            id: "clips-export-sound-file",
                            label: d.intl.string(d.t.db0NKG),
                            leadingAccessory: { type: "icon", icon: j.s },
                            action: c,
                        }),
                ],
            });
        })({ clips: i }),
        na = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return !0 !== i[0].isFavorite
                ? null
                : (0, t.jsx)(r.Dr, {
                      id: "unfavorite",
                      label: d.intl.string(x.default.IZsalP),
                      leadingAccessory: { type: "icon", icon: G.U },
                      color: "danger",
                      disabled: e,
                      action: function () {
                          (0, o.Z_)(), i.forEach((n) => (0, s.XK)(n));
                      },
                  });
        })({ clips: i, actionsDisabled: J }),
        nc = (function (n) {
            let { clips: i, onBeforeDelete: e, onAfterDelete: l, actionsDisabled: a = !1 } = n;
            return (0, t.jsx)(r.Dr, {
                id: "clips-delete",
                label: d.intl.string(d.t.oyYWHE),
                leadingAccessory: { type: "icon", icon: D.u },
                color: "danger",
                disabled: a,
                action: function (n) {
                    (0, o.Z_)(), (0, C.A)(n, { clips: i, onBeforeDelete: e, onAfterDelete: l });
                },
            });
        })({ clips: i, onBeforeDelete: q, onAfterDelete: z, actionsDisabled: J }),
        ns = (function (n) {
            let { clips: i } = n;
            return (0, u.bG)([y.A], () => y.A.isDeveloper)
                ? (0, t.jsx)(r.Dr, {
                      leadingAccessory: { type: "icon", icon: V.s },
                      id: "show-in-folder",
                      label: "Show in Folder",
                      action: function () {
                          (0, o.Z_)(), _.A.fileManager.showItemInFolder(i[0].filepath);
                      },
                  })
                : null;
        })({ clips: i }),
        nd = (function (n) {
            let { clips: i } = n;
            return (0, u.bG)([y.A], () => y.A.isDeveloper)
                ? (0, t.jsx)(r.Dr, {
                      leadingAccessory: { type: "icon", icon: N.P },
                      id: "open-in-inspector",
                      label: "Open in Inspector",
                      action: function () {
                          (0, o.Z_)(), (0, p.closeAllModals)(), (0, k.h)(i[0].filepath);
                      },
                  })
                : null;
        })({ clips: i }),
        nu = (function (n) {
            let { clips: i } = n,
                l = (0, u.bG)([y.A], () => y.A.isDeveloper);
            return i.length > 1 || !l
                ? null
                : (0, t.jsx)(r.Dr, {
                      id: "clips-feedback",
                      label: "Submit Clip Feedback",
                      leadingAccessory: { type: "icon", icon: f.i },
                      action: function () {
                          (0, o.Z_)(),
                              (0, p.openModalLazy)(async () => {
                                  let { default: n } = await Promise.all([e.e("734"), e.e("8891"), e.e("58966")]).then(
                                      e.bind(e, 885168),
                                  );
                                  return (e) => (0, t.jsx)(n, { ...e, clip: i[0] });
                              });
                      },
                  });
        })({ clips: i }),
        np = $.has(a.C.ADD_TO_LIBRARY),
        nf = $.has(a.C.SHARE),
        ny = $.has(a.C.EDIT),
        ng = $.has(a.C.FAVORITE),
        nA = $.has(a.C.EXPORT_TO_SOUNDBOARD),
        nh = $.has(a.C.COPY_TO_CLIPBOARD),
        nb = $.has(a.C.EXPORT_TO_FILE),
        n_ = $.has(a.C.DELETE),
        nx = $.has(a.C.SHOW_IN_FOLDER),
        nD = $.has(a.C.OPEN_IN_INSPECTOR),
        nC = $.has(a.C.CLIP_FEEDBACK);
    return (0, t.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "clips-more-options",
        "aria-label": d.intl.string(d.t.PdRCRg),
        onClose: o.Z_,
        onSelect: o.Z_,
        children: [
            (0, t.jsxs)(r.rX, { children: [np && nn, nf && ni, ny && ne] }),
            (0, t.jsxs)(r.rX, { children: [ng && nt, nA && nl, nh && nr, nb && no] }),
            (0, t.jsxs)(r.rX, { children: [nx && ns, nD && nd, nC && nu] }),
            (0, t.jsxs)(r.rX, { children: [ng && na, n_ && nc] }),
        ],
    });
}
