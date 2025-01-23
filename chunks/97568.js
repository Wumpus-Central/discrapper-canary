t.d(n, {
    s: function () {
        return r;
    }
});
var i = t(200651);
t(192379);
var a = t(481060),
    l = t(621145),
    o = t(388032),
    s = t(804711);
let r = (e) => {
    let { flaggedContent: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsxs)('div', {
              className: s.classificationEvidenceContainer,
              children: [
                  (0, i.jsx)(a.Text, {
                      variant: 'eyebrow',
                      color: 'text-muted',
                      children: o.intl.string(o.t.s64CMj)
                  }),
                  (0, i.jsx)(l.Z, { flaggedContent: n })
              ]
          });
};
