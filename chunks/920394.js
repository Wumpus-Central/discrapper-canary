o.d(n, { default: () => v });
var t = o(477900),
    l = o(582128),
    u = o(17928),
    i = o(442433),
    r = o(322227),
    s = o(971079),
    d = o(61577),
    c = o(686507),
    a = o(381991),
    p = o(260498),
    b = o(174865),
    h = o(193072),
    f = o(79733),
    A = o(857315),
    C = o(955260),
    j = o(95264);
function v(e) {
    let { projectId: n, guildId: o, onExport: v, onImport: x } = e,
        _ = (0, u.bG)([p.Ay], () => p.Ay.getProject(n), [n]),
        k = null != _ && (0, p.jf)(_),
        P = (0, u.bG)([r.default], () => "open" === r.default.getConnState(n), [n]);
    l.useEffect(() => {
        k && (0, r.ensureConnection)(n);
    }, [k, n]);
    let m = (0, s.f)("ConjureServerProjectContextMenu"),
        { publishOptions: y, publish: g, label: w } = (0, A.A)(n, o, !P),
        E = (0, C.A)(n, g, y);
    return null == _
        ? null
        : (0, t.jsx)(f.bI.Provider, {
              value: y,
              children: (0, t.jsx)(h.z, {
                  ...(0, b.A)(_, o),
                  onPublish: k ? () => E("context_menu") : void 0,
                  publishLabel: w,
                  publishDisabled: null == g || g.disabled,
                  onRemix: () => (0, j.A)(_, o),
                  onExport: v,
                  onImport: x,
                  onConnectTool: m ? () => (0, d.A)(n) : void 0,
                  onHistory: () => {
                      !(0, c.N)(n) && (0, a.A)(n, "project_list");
                  },
                  onCloseMenu: i.Z_,
              }),
          });
}
