i.d(t, {
    s: function () {
        return r;
    }
});
var n = i(200651);
i(192379);
var a = i(481060),
    l = i(621145),
    s = i(388032),
    o = i(946531);
let r = (e) => {
    let { flaggedContent: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsxs)('div', {
              className: o.classificationEvidenceContainer,
              children: [
                  (0, n.jsx)(a.Text, {
                      variant: 'eyebrow',
                      color: 'text-muted',
                      children: s.intl.string(s.t.s64CMj)
                  }),
                  (0, n.jsx)(l.Z, { flaggedContent: t })
              ]
          });
};
