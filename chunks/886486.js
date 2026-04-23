l.d(t, { A: () => h });
var n = l(627968);
l(64700);
var s = l(311907),
    i = l(231483),
    a = l(287809),
    r = l(513461),
    o = l(31457),
    d = l(414626),
    c = l(601047),
    u = l(273926),
    x = l(453016),
    m = l(985018);
let h = function (e) {
    let { guildId: t, formFields: l, user: h, showRequirements: j = !0 } = e;
    return null == (0, s.bG)([a.default], () => h ?? a.default.getCurrentUser())
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  j && (0, n.jsx)(o.fu, { icon: i.l, text: m.intl.string(m.t.v2z4c1), meetsRequirement: !0 }),
                  l.map((e, t) =>
                      (function (e, t) {
                          switch (e.field_type) {
                              case r.rX.TERMS:
                                  return (0, n.jsx)(u.LK, { formField: e }, t);
                              case r.rX.TEXT_INPUT:
                                  return (0, n.jsx)(x.aS, { formField: e }, t);
                              case r.rX.PARAGRAPH:
                                  return (0, n.jsx)(c.P1, { formField: e }, t);
                              case r.rX.MULTIPLE_CHOICE:
                                  return (0, n.jsx)(d.CI, { formField: e }, t);
                          }
                      })(e, t),
                  ),
              ],
          });
};
