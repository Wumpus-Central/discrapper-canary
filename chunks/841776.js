n.d(l, { H: () => r });
var t = n(200651),
    a = n(426642),
    i = n(839388);
let r = (e) => {
    let { error: l, uploadErrorCode: n } = e;
    return null == l && null == n
        ? null
        : null != n
          ? (0, t.jsx)(a.Z, {
                error: {
                    type: n,
                    filename: ''
                }
            })
          : (0, t.jsx)('div', {
                className: i.errorBanner,
                children: (0, t.jsx)('p', { children: l })
            });
};
