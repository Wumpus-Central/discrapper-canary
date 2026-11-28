var t = o(477900),
    i = o(582128),
    l = o(855986),
    s = o(442433),
    u = o(540665),
    r = o(971079),
    c = o(61577),
    d = o(686507),
    p = o(381991),
    b = o(260498),
    a = o(174865),
    h = o(119199),
    A = o(738604),
    C = o(585412),
    j = o(719593),
    f = o(95264),
    v = o(465080);
o.d(
    n,
    {},
    {
        default: function (e) {
            let { projectId: n, guildId: o, onExport: x, onImport: _ } = e,
                y = (0, l.bG)([b.Ay], () => b.Ay.getProject(n), [n]),
                k = null != y && (0, b.jf)(y),
                m = (0, l.bG)([u.Ay], () => "open" === u.Ay.getConnState(n), [n]);
            i.useEffect(() => {
                k && (0, u.ensureConnection)(n);
            }, [k, n]);
            let P = (0, r.f)("ConjureServerProjectContextMenu"),
                { publishOptions: g, publish: w, state: D, text: E } = (0, j.A)(n, o, !m),
                G = (0, C.A)(n, w, g);
            return null == y
                ? null
                : (0, t.jsx)(A.bI.Provider, {
                      value: g,
                      children: (0, t.jsx)(h.z, {
                          ...(0, a.A)(y, o),
                          onPublish: "action_needed" === D || "publishing" === D ? () => G("context_menu") : void 0,
                          publishLabel: E,
                          publishDisabled: null == w || w.disabled,
                          onRemix: () => (0, f.A)(y, o),
                          onExport: x,
                          onImport: _,
                          onConnectTool: P ? () => (0, c.A)(n) : void 0,
                          onHistory: () => {
                              !(0, d.N)(n) && (0, p.A)(n, "project_list");
                          },
                          onDismiss: () => (0, v.tb)(n),
                          onCloseMenu: s.Z_,
                      }),
                  });
        },
    },
);
