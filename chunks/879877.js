(n.d(t, { Z: () => a }), n(361932), n(187205));
var r = n(255367);
n(73800);
var o = n(481060),
    l = n(286957),
    i = n(300695);
function a(e) {
    let { tags: t } = e;
    if (null == t || 0 === t.length) return null;
    let n = t.flatMap((e) => {
        let t = (0, l.z)(e);
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
              className: i.tagList,
              'aria-label': 'Tags',
              children: n.map((e) => {
                  let { tag: t, metadata: n } = e,
                      { text: l, icon: a } = n;
                  return (0, r.jsxs)(
                      'li',
                      {
                          className: i.tag,
                          children: [
                              (0, r.jsx)(a, { size: 'xxs' }),
                              (0, r.jsx)(o.Text, {
                                  variant: 'text-xxs/medium',
                                  color: 'text-secondary',
                                  children: l
                              })
                          ]
                      },
                      t
                  );
              })
          });
}
