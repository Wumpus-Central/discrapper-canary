n.d(t, { Z: () => u });
var a = n(54381),
    r = n(473749),
    i = n(149765),
    l = n(481060),
    s = n(995648),
    o = n(422559),
    c = n(388032),
    d = n(935232);
let u = function (e) {
    var t;
    let { application: n } = e,
        u = r.useMemo(() => {
            var e;
            let t = null == n || null == (e = n.install_params) ? void 0 : e.permissions;
            if (null != t) return o.VY.filter((e) => i.e$(i.vB(t), e));
        }, [null == n || null == (t = n.install_params) ? void 0 : t.permissions]);
    return null != u && u.length > 0
        ? (0, a.jsxs)("div", {
              className: d.sectionContainer,
              children: [
                  (0, a.jsx)(l.Heading, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: c.intl.string(c.t.runNF8),
                  }),
                  (0, a.jsx)(s.Z, {
                      className: d.contentContainer,
                      grantedPermissions: u,
                      grantedPermissionsHeader: c.intl.string(c.t.SLgiNH),
                  }),
              ],
          })
        : null;
};
