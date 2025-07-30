(n.d(t, { Z: () => l }), n(361932), n(187205));
var r = n(255367);
n(73800);
var o = n(481060),
    i = n(286957),
    a = n(300695);
function l(e) {
    let { tags: t } = e;
    if (null == t || 0 === t.length) return null;
    let n = t.flatMap((e) => {
        let t = (0, i.z)(e);
        return null != t
            ? [
                  {
                      tag: e,
                      metadata: t
                  }
              ]
            : [];
    });
    return 0 === n.length
        ? null
        : (0, r.jsx)('ul', {
              className: a.tagList,
              'aria-label': 'Tags',
              children: n.map((e) => {
                  let { tag: t, metadata: n } = e,
                      { text: i, icon: l } = n;
                  return (0, r.jsxs)(
                      'li',
                      {
                          className: a.tag,
                          children: [
                              (0, r.jsx)(l, { size: 'xs' }),
                              (0, r.jsx)(o.Text, {
                                  variant: 'text-xxs/medium',
                                  color: 'text-secondary',
                                  children: i
                              })
                          ]
                      },
                      t
                  );
              })
          });
}
