o.d(n, { default: () => x });
var t = o(477900),
    l = o(582128),
    u = o(17928),
    s = o(442433),
    i = o(322227),
    r = o(971079),
    d = o(61577),
    c = o(686507),
    a = o(381991),
    p = o(260498),
    b = o(174865),
    h = o(193072),
    f = o(79733),
    A = o(857315),
    C = o(955260),
    j = o(95264),
    v = o(802645);
function x(e) {
    let { projectId: n, guildId: o, onExport: x, onImport: _ } = e,
        k = (0, u.bG)([p.Ay], () => p.Ay.getProject(n), [n]),
        m = null != k && (0, p.jf)(k),
        P = (0, u.bG)([i.default], () => "open" === i.default.getConnState(n), [n]);
    l.useEffect(() => {
        m && (0, i.ensureConnection)(n);
    }, [m, n]);
    let y = (0, r.f)("ConjureServerProjectContextMenu"),
        { publishOptions: g, publish: w, label: D } = (0, A.A)(n, o, !P),
        E = (0, C.A)(n, w, g);
    return null == k
        ? null
        : (0, t.jsx)(f.bI.Provider, {
              value: g,
              children: (0, t.jsx)(h.z, {
                  ...(0, b.A)(k, o),
                  onPublish: m ? () => E("context_menu") : void 0,
                  publishLabel: D,
                  publishDisabled: null == w || w.disabled,
                  onRemix: () => (0, j.A)(k, o),
                  onExport: x,
                  onImport: _,
                  onConnectTool: y ? () => (0, d.A)(n) : void 0,
                  onHistory: () => {
                      !(0, c.N)(n) && (0, a.A)(n, "project_list");
                  },
                  onDismiss: () => (0, v.tb)(n),
                  onCloseMenu: s.Z_,
              }),
          });
}
