e.d(i, { default: () => Y });
var t = e(477900);
e(582128);
var l = e(980707),
    a = e(477782),
    r = e(442433),
    o = e(793574),
    c = e(688810),
    s = e(253799),
    d = e(663341),
    u = e(693117),
    f = e(375708),
    p = e(17928),
    y = e(192308),
    g = e(138134),
    A = e(540999),
    h = e(691540),
    _ = e(857250),
    b = e(97483),
    E = e(624479),
    x = e(77729),
    C = e(16590),
    D = e(241326),
    O = e(645655),
    j = e(549685),
    I = e(32880),
    T = e(983069),
    S = e(589553),
    w = e(696016),
    P = e(264572).Buffer,
    R = e(7807),
    m = e(931991),
    Z = e(71393),
    v = e(576705),
    F = e(711014),
    L = e(287809),
    H = e(105009),
    N = e(505930),
    X = e(807072),
    k = e(346411),
    B = e(781710),
    G = e(405433),
    M = e(915725),
    W = e(74847),
    K = e(602902),
    U = e(678708);
function V(n) {
    let {
            clips: i,
            channelId: V,
            onShare: Y,
            onSelectClip: Q,
            onEdit: q,
            onBeforeDelete: z,
            onAfterDelete: J,
            actionsDisabled: $ = !1,
            displayConfiguration: nn = s.I,
        } = n,
        ni = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return i.some((n) => !0 === n.isTemporary)
                ? (0, t.jsx)(a.Dr, {
                      id: "add-to-library",
                      label: f.intl.string(f.t["BfLmm+"]),
                      leadingAccessory: { type: "icon", icon: d.p },
                      disabled: e,
                      action: function () {
                          (0, r.Z_)(), i.forEach((n) => (0, u.w7)(n.id));
                      },
                  })
                : null;
        })({ clips: i, actionsDisabled: $ }),
        ne = (function (n) {
            let { clips: i, channelId: e, onShare: l, onSelectClip: o, actionsDisabled: s = !1 } = n,
                { analyticsLocations: d } = (0, c.Ay)(),
                y = (0, p.bG)([M.Ay], () => i.some((n) => M.Ay.isClipExporting(n.id)));
            async function g() {
                if (((0, r.Z_)(), null != o)) {
                    o(), l?.();
                    return;
                }
                let n = (0, W.t)(e);
                (0, u.H1)(i.map((n) => n.id));
                try {
                    await (0, K.K)(i, { channelId: n ? e : void 0, analyticsLocations: d });
                } catch (n) {
                } finally {
                    (0, u.H1)(null);
                }
                l?.();
            }
            return (0, t.jsx)(a.Dr, {
                id: "share",
                label: f.intl.string(f.t.RDE0Sc),
                leadingAccessory: { type: "icon", icon: G.l },
                disabled: s && !y,
                action: g,
            });
        })({ clips: i, channelId: V, onShare: Y, onSelectClip: Q, actionsDisabled: $ }),
        nt = (function (n) {
            let { clips: i, onEdit: e, actionsDisabled: l = !1 } = n;
            return i.length > 1
                ? null
                : (0, t.jsx)(a.Dr, {
                      id: "edit",
                      label: f.intl.string(f.t.bt75uw),
                      leadingAccessory: { type: "icon", icon: j.A },
                      disabled: l,
                      action: function () {
                          (0, r.Z_)(), e?.();
                      },
                  });
        })({ clips: i, onEdit: q, actionsDisabled: $ }),
        nl = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return !0 === i[0].isFavorite
                ? null
                : (0, t.jsx)(a.Dr, {
                      id: "favorite",
                      label: f.intl.string(f.t.nPywqO),
                      leadingAccessory: { type: "icon", icon: N.y },
                      disabled: e,
                      action: function () {
                          (0, r.Z_)(), i.forEach((n) => (0, u.XK)(n));
                      },
                  });
        })({ clips: i, actionsDisabled: $ }),
        na = (function (n) {
            let { clips: i, channelId: e } = n,
                { analyticsLocations: l } = (0, c.Ay)(),
                o = (0, p.bG)([F.Ay, v.A, L.default, Z.A], () =>
                    F.Ay.getFlattenedGuildIds().some((n) => {
                        let i = Z.A.getGuild(n);
                        return null != i && (0, m.ie)(i, v.A, L.default).canCreateExpressions;
                    }),
                ),
                s = i[0];
            if (i.length > 1 || !o || s.type === w.nQ.SCREENSHOT) return null;
            async function d() {
                (0, r.Z_)(), await (0, H.n)(s, { analyticsLocations: l, channelId: e });
            }
            return (0, t.jsx)(a.Dr, {
                id: "clips-export-soundboard",
                label: f.intl.string(C.default.HH4Tjj),
                leadingAccessory: { type: "icon", icon: R.J },
                action: d,
            });
        })({ clips: i, channelId: V }),
        nr = (function (n) {
            let { clips: i } = n,
                e = i[0];
            return i.length > 1 || null == x.A.clipboard.copyFile
                ? null
                : (0, t.jsx)(a.Dr, {
                      id: "clips-copy-video",
                      label: f.intl.string(C.default.tv7emB),
                      leadingAccessory: { type: "icon", icon: E.T },
                      action: function () {
                          (0, r.Z_)(),
                              x.A.clipboard.copyFile(e.filepath),
                              (0, h.P0)((0, _.o)(f.intl.string(f.t.mGZ66D), b.Ck.SUCCESS));
                      },
                  });
        })({ clips: i }),
        no = (function (n) {
            let { clips: i } = n,
                { analyticsLocations: e } = (0, c.Ay)(),
                l = i[0];
            if (i.length > 1) return null;
            let s = l.type === w.nQ.SCREENSHOT;
            async function d() {
                (0, r.Z_)(), (0, u.H1)([l.id]);
                try {
                    let n = await (0, u.VO)(l, { analyticsLocations: [...e, o.A.CLIPS_EXPORT_TO_FILE] }),
                        i = await n.arrayBuffer(),
                        t = (0, S.A)(l, s ? "jpeg" : "mp4");
                    await x.A.fileManager.saveWithDialog(P.from(i), t);
                } catch (n) {
                    w.nx.error("Error exporting clip to file", n);
                } finally {
                    (0, u.H1)(null);
                }
            }
            async function p() {
                (0, r.Z_)(), (0, u.H1)([l.id]);
                try {
                    let n = await (0, u.VO)(l, { analyticsLocations: [...e, o.A.CLIPS_EXPORT_TO_SOUND_FILE] }),
                        i = await (0, T.R_)(n),
                        t = await i.arrayBuffer(),
                        a = (0, S.A)(l, "ogg");
                    await x.A.fileManager.saveWithDialog(P.from(t), a);
                } catch (n) {
                    w.nx.error("Error exporting clip to sound file", n);
                } finally {
                    (0, u.H1)(null);
                }
            }
            return (0, t.jsxs)(a.Dr, {
                id: "clips-export-group",
                label: f.intl.string(f.t["WH/V85"]),
                leadingAccessory: { type: "icon", icon: I.s },
                children: [
                    (0, t.jsx)(a.Dr, {
                        id: "clips-export-file",
                        label: s ? f.intl.string(f.t.y5FgMk) : f.intl.string(f.t.sFgmNy),
                        leadingAccessory: { type: "icon", icon: I.s },
                        action: d,
                    }),
                    !s &&
                        (0, t.jsx)(a.Dr, {
                            id: "clips-export-sound-file",
                            label: f.intl.string(f.t.db0NKG),
                            leadingAccessory: { type: "icon", icon: I.s },
                            action: p,
                        }),
                ],
            });
        })({ clips: i }),
        nc = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return !0 !== i[0].isFavorite
                ? null
                : (0, t.jsx)(a.Dr, {
                      id: "unfavorite",
                      label: f.intl.string(C.default.IZsalP),
                      leadingAccessory: { type: "icon", icon: X.U },
                      color: "danger",
                      disabled: e,
                      action: function () {
                          (0, r.Z_)(), i.forEach((n) => (0, u.XK)(n));
                      },
                  });
        })({ clips: i, actionsDisabled: $ }),
        ns = (function (n) {
            let { clips: i, onBeforeDelete: e, onAfterDelete: l, actionsDisabled: o = !1 } = n;
            return (0, t.jsx)(a.Dr, {
                id: "clips-delete",
                label: f.intl.string(f.t.oyYWHE),
                leadingAccessory: { type: "icon", icon: D.u },
                color: "danger",
                disabled: o,
                action: function (n) {
                    (0, r.Z_)(), (0, O.A)(n, { clips: i, onBeforeDelete: e, onAfterDelete: l });
                },
            });
        })({ clips: i, onBeforeDelete: z, onAfterDelete: J, actionsDisabled: $ }),
        nd = (function (n) {
            let { clips: i } = n;
            return (0, t.jsx)(a.Dr, {
                leadingAccessory: { type: "icon", icon: U.s },
                id: "show-in-folder",
                label: "Show in Folder",
                action: function () {
                    (0, r.Z_)(), x.A.fileManager.showItemInFolder(i[0].filepath);
                },
            });
        })({ clips: i }),
        nu = (function (n) {
            let { clips: i } = n;
            return (0, p.bG)([A.A], () => A.A.isDeveloper)
                ? (0, t.jsx)(a.Dr, {
                      leadingAccessory: { type: "icon", icon: k.P },
                      id: "open-in-inspector",
                      label: "Open in Inspector",
                      action: function () {
                          (0, r.Z_)(), (0, y.closeAllModals)(), (0, B.h)(i[0].filepath);
                      },
                  })
                : null;
        })({ clips: i }),
        nf = (function (n) {
            let { clips: i } = n,
                l = (0, p.bG)([A.A], () => A.A.isDeveloper);
            return i.length > 1 || !l
                ? null
                : (0, t.jsx)(a.Dr, {
                      id: "clips-feedback",
                      label: "Submit Clip Feedback",
                      leadingAccessory: { type: "icon", icon: g.i },
                      action: function () {
                          (0, r.Z_)(),
                              (0, y.openModalLazy)(
                                  async () => {
                                      let { default: n } = await Promise.all([
                                          e.e("9198"),
                                          e.e("8891"),
                                          e.e("58966"),
                                      ]).then(e.bind(e, 885168));
                                      return (e) => (0, t.jsx)(n, { ...e, clip: i[0] });
                                  },
                                  { stackingBehavior: "stack" },
                              );
                      },
                  });
        })({ clips: i }),
        np = nn.has(s.C.ADD_TO_LIBRARY),
        ny = nn.has(s.C.SHARE),
        ng = nn.has(s.C.EDIT),
        nA = nn.has(s.C.FAVORITE),
        nh = nn.has(s.C.EXPORT_TO_SOUNDBOARD),
        n_ = nn.has(s.C.COPY_TO_CLIPBOARD),
        nb = nn.has(s.C.EXPORT_TO_FILE),
        nE = nn.has(s.C.DELETE),
        nx = nn.has(s.C.SHOW_IN_FOLDER),
        nC = nn.has(s.C.OPEN_IN_INSPECTOR),
        nD = nn.has(s.C.CLIP_FEEDBACK);
    return (0, t.jsxs)(l.W, {
        navId: "clips-more-options",
        "aria-label": f.intl.string(f.t.PdRCRg),
        onClose: r.Z_,
        onSelect: r.Z_,
        children: [
            (0, t.jsxs)(a.rX, { children: [np && ni, ny && ne, ng && nt] }),
            (0, t.jsxs)(a.rX, { children: [nA && nl, nh && na, n_ && nr, nb && no] }),
            (0, t.jsxs)(a.rX, { children: [nx && nd, nC && nu, nD && nf] }),
            (0, t.jsxs)(a.rX, { children: [nA && nc, nE && ns] }),
        ],
    });
}
function Y(n) {
    let { analyticsLocations: i, ...e } = n,
        { analyticsLocations: l } = (0, c.Ay)(...i, o.A.CLIPS_CONTEXT_MENU);
    return (0, t.jsx)(c.f5, { value: l, children: (0, t.jsx)(V, { ...e }) });
}
