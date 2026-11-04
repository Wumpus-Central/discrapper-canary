var t = o(477900),
    l = o(582128),
    s = o(855986),
    i = o(442433),
    u = o(540665),
    r = o(971079),
    c = o(61577),
    d = o(686507),
    p = o(381991),
    b = o(260498),
    a = o(174865),
    A = o(753329),
    h = o(826058),
    C = o(719593),
    j = o(536468),
    f = o(95264),
    v = o(465080);
o.d(
    n,
    {},
    {
        default: function (e) {
            let { projectId: n, guildId: o, onExport: x, onImport: y } = e,
                _ = (0, s.bG)([b.Ay], () => b.Ay.getProject(n), [n]),
                k = null != _ && (0, b.jf)(_),
                m = (0, s.bG)([u.Ay], () => "open" === u.Ay.getConnState(n), [n]);
            l.useEffect(() => {
                k && (0, u.ensureConnection)(n);
            }, [k, n]);
            let P = (0, r.f)("ConjureServerProjectContextMenu"),
                { publishOptions: g, publish: w, label: D } = (0, C.A)(n, o, !m),
                E = (0, j.A)(n, w, g);
            return null == _
                ? null
                : (0, t.jsx)(h.bI.Provider, {
                      value: g,
                      children: (0, t.jsx)(A.z, {
                          ...(0, a.A)(_, o),
                          onPublish: k ? () => E("context_menu") : void 0,
                          publishLabel: D,
                          publishDisabled: null == w || w.disabled,
                          onRemix: () => (0, f.A)(_, o),
                          onExport: x,
                          onImport: y,
                          onConnectTool: P ? () => (0, c.A)(n) : void 0,
                          onHistory: () => {
                              !(0, d.N)(n) && (0, p.A)(n, "project_list");
                          },
                          onDismiss: () => (0, v.tb)(n),
                          onCloseMenu: i.Z_,
                      }),
                  });
        },
    },
);
