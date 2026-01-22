l.d(t, { A: () => j });
var n = l(627968);
l(64700);
var r = l(311907),
    i = l(397927),
    s = l(287809),
    a = l(513461),
    c = l(31457),
    d = l(414626),
    o = l(601047),
    u = l(273926),
    x = l(453016),
    m = l(985018);
let j = function (e) {
    let { guildId: t, formFields: l, user: j, showRequirements: b = !0 } = e;
    return null == (0, r.bG)([s.default], () => (null != j ? j : s.default.getCurrentUser()))
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  b &&
                      (0, n.jsx)(c.fu, {
                          icon: i.lmn,
                          text: m.intl.string(m.t.v2z4c1),
                          meetsRequirement: !0,
                      }),
                  l.map((e, t) =>
                      (function (e, t) {
                          switch (e.field_type) {
                              case a.rX.TERMS:
                                  return (0, n.jsx)(u.LK, { formField: e }, t);
                              case a.rX.TEXT_INPUT:
                                  return (0, n.jsx)(x.aS, { formField: e }, t);
                              case a.rX.PARAGRAPH:
                                  return (0, n.jsx)(o.P1, { formField: e }, t);
                              case a.rX.MULTIPLE_CHOICE:
                                  return (0, n.jsx)(d.CI, { formField: e }, t);
                          }
                      })(e, t),
                  ),
              ],
          });
};
