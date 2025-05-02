n.d(l, { H: () => s });
var r = n(200651),
    t = n(426642),
    a = n(839388);
let s = (e) => {
    let { error: l, uploadErrorCode: n } = e;
    return null == l && null == n
        ? null
        : null != n
          ? (0, r.jsx)(t.Z, {
                error: {
                    type: n,
                    filename: ''
                }
            })
          : (0, r.jsx)('div', {
                className: a.errorBanner,
                children: (0, r.jsx)('p', { children: l })
            });
};
