n.d(l, { H: () => o });
var t = n(200651),
    a = n(426642),
    r = n(839388);
let o = (e) => {
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
                className: r.errorBanner,
                children: (0, t.jsx)('p', { children: l })
            });
};
